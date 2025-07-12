import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FloatingLabel } from "@/components/FloatingLabel"
import { Star, MapPin, Calendar } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"

const doctors = [
  {
    name: "Dr. Sarah Johnson",
    specialty: "Cardiologist",
    rating: 4.9,
    experience: "15 years",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
    badge: "Top Rated",
    location: "Main Campus"
  },
  {
    name: "Dr. Michael Chen",
    specialty: "Pediatric Specialist", 
    rating: 4.8,
    experience: "12 years",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face",
    badge: "Pediatric Expert",
    location: "Children's Wing"
  },
  {
    name: "Dr. Emily Rodriguez",
    specialty: "Emergency Medicine",
    rating: 4.9,
    experience: "18 years",
    image: "https://images.unsplash.com/photo-1594824886734-29b50eeee5f9?w=400&h=400&fit=crop&crop=face",
    badge: "24/7 Available",
    location: "Emergency Dept"
  },
  {
    name: "Dr. James Wilson",
    specialty: "General Medicine",
    rating: 4.7,
    experience: "10 years",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop&crop=face",
    badge: "New Patients",
    location: "Outpatient Clinic"
  }
]

export function DoctorsSection() {
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
    <section ref={sectionRef} className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-medical-primary rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-medical-secondary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'slide-in-bottom' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Meet Our <span className="text-transparent bg-clip-text bg-gradient-primary">Expert Doctors</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our team of board-certified physicians brings decades of experience and cutting-edge expertise to your care.
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {doctors.map((doctor, index) => (
            <Card 
              key={doctor.name}
              className={`card-hover group relative border-border/50 hover:border-medical-primary/50 bg-card/80 backdrop-blur-sm overflow-hidden transition-all duration-700 ${
                isVisible ? 'slide-in-left' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-6 text-center">
                {/* Doctor Image */}
                <div className="relative w-24 h-24 mx-auto mb-4 overflow-hidden rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <img 
                    src={doctor.image} 
                    alt={doctor.name}
                    className="w-full h-full object-cover glow-pulse"
                  />
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                </div>

                {/* Doctor Info */}
                <h3 className="text-lg font-semibold mb-1 group-hover:text-medical-primary transition-colors">
                  {doctor.name}
                </h3>
                <p className="text-medical-primary font-medium mb-3">{doctor.specialty}</p>
                
                {/* Rating & Experience */}
                <div className="flex items-center justify-center gap-4 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-tertiary fill-current" />
                    <span>{doctor.rating}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{doctor.experience}</span>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground mb-6">
                  <MapPin className="h-4 w-4" />
                  <span>{doctor.location}</span>
                </div>

                {/* Book Button */}
                <Button 
                  variant="heartbeat" 
                  size="sm" 
                  className="w-full group-hover:scale-105 transition-transform"
                  ripple
                >
                  Book Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Section CTA */}
        <div className={`text-center transition-all duration-1000 delay-500 ${isVisible ? 'slide-in-bottom' : 'opacity-0'}`}>
          <Link to="/doctors">
            <Button variant="medical-outline" size="lg">
              View All Doctors
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}