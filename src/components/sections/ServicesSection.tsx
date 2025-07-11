import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FloatingLabel } from "@/components/FloatingLabel"
import { Heart, Video, Shield, Stethoscope, Pill, Users } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const services = [
  {
    icon: Heart,
    title: "Cardiology",
    description: "Complete heart care with advanced diagnostics and treatment",
    label: "Most Booked",
    popular: true
  },
  {
    icon: Video,
    title: "Telemedicine",
    description: "Consult with doctors from the comfort of your home",
    label: "Available Online",
    popular: false
  },
  {
    icon: Shield,
    title: "Emergency Care",
    description: "24/7 emergency medical services and trauma care",
    label: "24/7 Available",
    popular: false
  },
  {
    icon: Stethoscope,
    title: "General Medicine",
    description: "Comprehensive primary care for all your health needs",
    label: "Walk-ins Welcome",
    popular: false
  },
  {
    icon: Pill,
    title: "Pharmacy",
    description: "On-site pharmacy with prescription delivery services",
    label: "Same Day Delivery",
    popular: false
  },
  {
    icon: Users,
    title: "Family Care",
    description: "Pediatric to geriatric care for the whole family",
    label: "All Ages",
    popular: false
  }
]

export function ServicesSection() {
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
    <section ref={sectionRef} className="py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-medical-secondary/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'slide-in-bottom' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-primary">Medical Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive healthcare solutions designed to meet all your medical needs with excellence and compassion.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className={`card-hover group relative border-border/50 hover:border-medical-primary/50 bg-card/80 backdrop-blur-sm transition-all duration-700 ${
                isVisible ? 'fade-scale-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {service.popular && (
                <FloatingLabel text={service.label} variant="primary" />
              )}
              {!service.popular && (
                <FloatingLabel text={service.label} variant="secondary" />
              )}
              
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 medical-icon-glow">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold group-hover:text-medical-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="text-center">
                <CardDescription className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </CardDescription>
                <Button 
                  variant="medical-outline" 
                  size="sm" 
                  className="group-hover:scale-105 transition-transform"
                  ripple
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Section CTA */}
        <div className={`text-center transition-all duration-1000 delay-500 ${isVisible ? 'slide-in-bottom' : 'opacity-0'}`}>
          <Button variant="medical-glow" size="lg" className="shadow-glow">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  )
}