import { cn } from "@/lib/utils"

interface FloatingLabelProps {
  text: string
  className?: string
  variant?: "primary" | "secondary" | "success" | "warning"
}

export function FloatingLabel({ text, className, variant = "primary" }: FloatingLabelProps) {
  const variants = {
    primary: "bg-gradient-to-r from-medical-primary to-medical-secondary text-white",
    secondary: "bg-gradient-to-r from-medical-secondary to-medical-accent text-white", 
    success: "bg-gradient-to-r from-medical-success to-medical-success text-white",
    warning: "bg-gradient-to-r from-medical-warning to-medical-warning text-background"
  }

  return (
    <div className={cn(
      "floating-label z-10",
      variants[variant],
      className
    )}>
      {text}
    </div>
  )
}