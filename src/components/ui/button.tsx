import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:scale-105",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        medical: "bg-gradient-primary text-white shadow-medical hover:shadow-glow hover:scale-105 font-semibold",
        "medical-glow": "bg-gradient-primary text-white shadow-glow hover:shadow-[0_0_60px_hsl(var(--medical-primary)/0.6)] hover:scale-105 font-semibold",
        "medical-outline": "border-2 border-medical-primary text-medical-primary hover:bg-medical-primary hover:text-white hover:scale-105",
        heartbeat: "bg-gradient-primary text-white shadow-medical hover:shadow-glow font-semibold",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-9 rounded-lg px-4",
        lg: "h-14 rounded-xl px-10 text-base",
        xl: "h-16 rounded-xl px-12 text-lg",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  ripple?: boolean
  pulse?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ripple = false, pulse = false, children, onClick, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (ripple) {
        const button = e.currentTarget
        const rect = button.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        
        const rippleEl = document.createElement('span')
        rippleEl.className = 'absolute bg-white/30 rounded-full animate-ping'
        rippleEl.style.left = `${x}px`
        rippleEl.style.top = `${y}px`
        rippleEl.style.transform = 'translate(-50%, -50%)'
        rippleEl.style.width = '20px'
        rippleEl.style.height = '20px'
        
        button.appendChild(rippleEl)
        
        setTimeout(() => {
          button.removeChild(rippleEl)
        }, 600)
      }
      
      onClick?.(e)
    }
    
    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size }),
          {
            "heartbeat": variant === "heartbeat",
            "animate-pulse": pulse,
          },
          className
        )}
        ref={ref}
        onClick={handleClick}
        {...props}
      >
        {variant === "medical-glow" && (
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-700" />
        )}
        {children}
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
