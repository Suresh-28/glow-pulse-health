import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { FloatingLabel } from "@/components/FloatingLabel"
import { Star } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const testimonials = [
  {
    name: "Maria Rodriguez",
    service: "Heart Surgery",
    rating: 5,
    content: "The cardiac team saved my life. Their expertise and compassionate care made all the difference during my recovery.",
    image: "/placeholder.svg",
    label: "Surgery Success"
  },
  {
    name: "James Thompson", 
    service: "Diabetes Management",
    rating: 5,
    content: "Dr. Chen's telemedicine consultations have been incredible. Managing my diabetes has never been easier.",
    image: "/placeholder.svg",
    label: "Verified Patient"
  },
  {
    name: "Sarah Williams",
    service: "Pediatric Care",
    rating: 5,
    content: "The pediatric team made my daughter feel comfortable during her treatment. Exceptional care for children.",
    image: "/placeholder.svg",
    label: "Family Care"
  },
  {
    name: "Robert Chen",
    service: "Emergency Care",
    rating: 5,
    content: "When I had my accident, the emergency team was incredibly fast and professional. Saved my life that night.",
    image: "/placeholder.svg",
    label: "Emergency Care"
  },
  {
    name: "Emily Davis",
    service: "Dermatology",
    rating: 5,
    content: "Dr. Thompson helped me with my skin condition. The treatment was effective and the care was exceptional.",
    image: "/placeholder.svg",
    label: "Skin Care Expert"
  },
  {
    name: "Michael Johnson",
    service: "Orthopedics",
    rating: 5,
    content: "After my knee surgery, I'm back to playing sports. The orthopedic team here is simply the best.",
    image: "/placeholder.svg",
    label: "Sports Recovery"
  }
]

export function TestimonialsSection() {
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
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-medical-secondary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'slide-in-bottom' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Our <span className="text-transparent bg-clip-text bg-gradient-primary">Patients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real stories from real patients who have experienced our exceptional care and service.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.name}
              className={`card-hover border-border/50 bg-card/80 backdrop-blur-sm hover:border-medical-primary/50 transition-all duration-700 ${
                isVisible ? 'fade-scale-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-tertiary fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-base mb-6 leading-relaxed italic text-muted-foreground">
                  "{testimonial.content}"
                </blockquote>
                
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Avatar className="h-10 w-10 border-2 border-medical-primary/20">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback className="bg-gradient-primary text-white text-sm">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="text-left">
                    <p className="font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.service}</p>
                  </div>
                </div>
                
                <FloatingLabel text={testimonial.label} variant="secondary" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}