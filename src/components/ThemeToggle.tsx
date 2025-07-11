import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(true) // Default to dark mode

  useEffect(() => {
    const root = window.document.documentElement
    
    if (isDark) {
      root.classList.add("dark")
    } else {
      root.classList.remove("dark")
    }
  }, [isDark])

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setIsDark(!isDark)}
      className="relative overflow-hidden rounded-full border border-border/50 hover:border-medical-primary/50 transition-all duration-300"
    >
      <Sun className={`h-5 w-5 transition-all duration-300 ${isDark ? 'scale-0 rotate-90' : 'scale-100 rotate-0'}`} />
      <Moon className={`absolute h-5 w-5 transition-all duration-300 ${isDark ? 'scale-100 rotate-0' : 'scale-0 -rotate-90'}`} />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}