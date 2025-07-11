import { Card, CardContent } from "@/components/ui/card"
import { FloatingLabel } from "@/components/FloatingLabel"
import { Star, Quote } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const testimonials = [
  {
    name: "Maria Rodriguez",
    condition: "Heart Surgery",
    rating: 5,
    testimonial: "The cardiac team saved my life. Their expertise and compassionate care made all the difference during my recovery.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b1-b?w=400&h=400&fit=crop&crop=face",
    badge: "Surgery Success"
  },
  {
    name: "James Thompson", 
    condition: "Diabetes Management",
    rating: 5,
    testimonial: "Dr. Chen's telemedicine consultations have been incredible. Managing my diabetes has never been easier.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    badge: "Verified Patient"
  },
  {
    name: "Sarah Williams",
    condition: "Pediatric Care",
    rating: 5,
    testimonial: "The pediatric team made my daughter feel comfortable during her treatment. Exceptional care for children.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    badge: "Family Care"
  }
]

export function TestimonialsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
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

        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative h-96 overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={testimonial.name}
                className={`absolute inset-0 transition-all duration-700 transform ${
                  index === currentIndex 
                    ? 'translate-x-0 opacity-100 scale-100' 
                    : index < currentIndex 
                      ? '-translate-x-full opacity-0 scale-95'
                      : 'translate-x-full opacity-0 scale-95'
                } border-border/50 bg-card/80 backdrop-blur-sm`}
              >
                <FloatingLabel text={testimonial.badge} variant="success" />
                
                <CardContent className="p-8 h-full flex flex-col justify-center">
                  <div className="text-center">
                    {/* Quote Icon */}
                    <Quote className="h-12 w-12 text-medical-primary/30 mx-auto mb-6" />
                    
                    {/* Testimonial Text */}
                    <blockquote className="text-xl md:text-2xl font-medium mb-8 leading-relaxed">
                      "{testimonial.testimonial}"
                    </blockquote>
                    
                    {/* Patient Info */}
                    <div className="flex items-center justify-center gap-4">
                      <img 
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-2xl object-cover border-2 border-medical-primary/20"
                      />
                      <div className="text-left">
                        <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                        <p className="text-medical-primary">{testimonial.condition}</p>
                        <div className="flex items-center gap-1 mt-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-tertiary fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-medical-primary scale-125' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}