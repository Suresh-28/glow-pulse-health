import { Button } from "@/components/ui/button"
import { FloatingLabel } from "@/components/FloatingLabel"
import { Calendar, MessageCircle, Star, Heart } from "lucide-react"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-glow rounded-full blur-xl animate-pulse float-animation" />
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-r from-medical-secondary to-medical-accent rounded-full blur-lg animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-10 w-16 h-16 bg-medical-primary/20 rounded-full blur-md animate-bounce" style={{ animationDelay: '2s' }} />
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Floating Label */}
          <div className="relative inline-block mb-8">
            <FloatingLabel text="New Patient Offer" variant="warning" className="animate-bounce" />
          </div>

          {/* Main Headlines */}
          <div className={`transition-all duration-1000 ${isLoaded ? 'slide-in-bottom' : 'opacity-0'}`}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Your Health,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary">
                Our Priority
              </span>
            </h1>
          </div>

          <div className={`transition-all duration-1000 delay-300 ${isLoaded ? 'slide-in-bottom' : 'opacity-0'}`}>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              24/7 Care with Certified Experts. Experience premium healthcare 
              with cutting-edge technology and compassionate care.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 transition-all duration-1000 delay-500 ${isLoaded ? 'fade-scale-in' : 'opacity-0'}`}>
            <Button 
              variant="medical-glow" 
              size="xl" 
              ripple 
              className="group"
            >
              <Calendar className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Book Appointment
            </Button>
            <Button 
              variant="medical-outline" 
              size="xl" 
              className="group"
            >
              <MessageCircle className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Explore Services
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className={`flex flex-wrap justify-center gap-8 items-center text-sm text-muted-foreground transition-all duration-1000 delay-700 ${isLoaded ? 'slide-in-bottom' : 'opacity-0'}`}>
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 text-tertiary fill-current" />
              <span>4.9/5 Patient Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="h-4 w-4 text-medical-error" />
              <span>50,000+ Lives Improved</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-medical-primary" />
              <span>24/7 Available</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Medical Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <Heart className="absolute top-1/4 left-16 h-8 w-8 text-medical-error/20 animate-pulse" />
        <Star className="absolute top-3/4 right-16 h-6 w-6 text-tertiary/20 animate-spin" style={{ animationDuration: '8s' }} />
        <Calendar className="absolute bottom-1/4 left-1/4 h-7 w-7 text-medical-primary/20 float-animation" />
      </div>
    </section>
  )
}