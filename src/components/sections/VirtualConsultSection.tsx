import { Button } from "@/components/ui/button"
import { Video, MessageCircle, Clock, Shield } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function VirtualConsultSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Animated Background Lines */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_24%,hsl(var(--medical-primary)/0.1)_25%,hsl(var(--medical-primary)/0.1)_26%,transparent_27%,transparent_74%,hsl(var(--medical-secondary)/0.1)_75%,hsl(var(--medical-secondary)/0.1)_76%,transparent_77%)] bg-[length:60px_60px] animate-pulse" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Content */}
          <div className={`transition-all duration-1000 ${isVisible ? 'slide-in-bottom' : 'opacity-0'}`}>
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-primary rounded-2xl mb-8 glow-pulse">
              <Video className="h-10 w-10 text-white" />
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Talk to a Doctor from{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary">
                Anywhere
              </span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Experience convenient, secure, and professional healthcare consultations 
              from the comfort of your home or office.
            </p>
          </div>

          {/* Features */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'fade-scale-in' : 'opacity-0'}`}>
            <div className="text-center">
              <Clock className="h-8 w-8 text-medical-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Available 24/7</h3>
              <p className="text-sm text-muted-foreground">Round-the-clock medical consultations</p>
            </div>
            <div className="text-center">
              <Shield className="h-8 w-8 text-medical-secondary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">HIPAA Compliant</h3>
              <p className="text-sm text-muted-foreground">Your privacy and data are secure</p>
            </div>
            <div className="text-center">
              <MessageCircle className="h-8 w-8 text-medical-accent mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Instant Chat</h3>
              <p className="text-sm text-muted-foreground">Real-time messaging with doctors</p>
            </div>
          </div>

          {/* CTA */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'slide-in-bottom' : 'opacity-0'}`}>
            <Button 
              variant="medical-glow" 
              size="xl" 
              ripple
              className="group shadow-glow hover:shadow-[0_0_80px_hsl(var(--medical-primary)/0.7)]"
            >
              <MessageCircle className="mr-2 h-6 w-6 group-hover:scale-110 transition-transform" />
              Start Live Chat
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              Average wait time: <span className="text-medical-primary font-semibold">2 minutes</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}