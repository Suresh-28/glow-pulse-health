import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { BookingDialog } from "@/components/BookingDialog"
import { 
  Heart, MapPin, Star, Calendar, Phone, MessageCircle,
  Award, Clock, Users, CheckCircle
} from "lucide-react"
import { Link } from "react-router-dom"

const allDoctors = [
  {
    name: "Dr. Sarah Johnson",
    specialty: "Cardiology",
    image: "/placeholder.svg",
    rating: 4.9,
    reviews: 127,
    experience: "15+ years",
    location: "Main Campus",
    availability: "Available Today",
    education: "Harvard Medical School",
    certifications: ["Board Certified Cardiologist", "Interventional Cardiology"],
    languages: ["English", "Spanish"],
    specialties: ["Heart Surgery", "Cardiac Catheterization", "Preventive Cardiology"],
    bio: "Dr. Johnson is a leading cardiologist with extensive experience in interventional procedures and preventive heart care.",
    consultationFee: "$250",
    nextAvailable: "Today, 2:00 PM"
  },
  {
    name: "Dr. Michael Chen",
    specialty: "Neurology",
    image: "/placeholder.svg", 
    rating: 4.8,
    reviews: 89,
    experience: "12+ years",
    location: "Neurological Center",
    availability: "Available Tomorrow",
    education: "Johns Hopkins University",
    certifications: ["Board Certified Neurologist", "Epilepsy Specialist"],
    languages: ["English", "Mandarin"],
    specialties: ["Epilepsy", "Stroke Care", "Memory Disorders"],
    bio: "Dr. Chen specializes in complex neurological conditions with a focus on epilepsy and stroke rehabilitation.",
    consultationFee: "$300",
    nextAvailable: "Tomorrow, 10:00 AM"
  },
  {
    name: "Dr. Emily Rodriguez",
    specialty: "Pediatrics",
    image: "/placeholder.svg",
    rating: 4.9,
    reviews: 203,
    experience: "10+ years",
    location: "Children's Wing",
    availability: "Available Today",
    education: "Stanford Medical School",
    certifications: ["Board Certified Pediatrician", "Adolescent Medicine"],
    languages: ["English", "Spanish", "Portuguese"],
    specialties: ["Adolescent Medicine", "Developmental Pediatrics", "Immunizations"],
    bio: "Dr. Rodriguez is passionate about providing comprehensive care for children and adolescents in a warm, family-friendly environment.",
    consultationFee: "$180",
    nextAvailable: "Today, 4:30 PM"
  },
  {
    name: "Dr. James Wilson",
    specialty: "Orthopedics",
    image: "/placeholder.svg",
    rating: 4.8,
    reviews: 156,
    experience: "18+ years",
    location: "Sports Medicine Center",
    availability: "Available This Week",
    education: "Mayo Medical School",
    certifications: ["Board Certified Orthopedic Surgeon", "Sports Medicine"],
    languages: ["English"],
    specialties: ["Joint Replacement", "Sports Injuries", "Spine Surgery"],
    bio: "Dr. Wilson is a renowned orthopedic surgeon specializing in joint replacement and sports medicine.",
    consultationFee: "$275",
    nextAvailable: "Thursday, 1:00 PM"
  },
  {
    name: "Dr. Lisa Thompson",
    specialty: "Dermatology",
    image: "/placeholder.svg",
    rating: 4.9,
    reviews: 174,
    experience: "14+ years",
    location: "Dermatology Clinic",
    availability: "Available Today",
    education: "University of Pennsylvania",
    certifications: ["Board Certified Dermatologist", "Mohs Surgery"],
    languages: ["English", "French"],
    specialties: ["Skin Cancer", "Cosmetic Dermatology", "Pediatric Dermatology"],
    bio: "Dr. Thompson combines medical expertise with artistic skill to provide comprehensive dermatological care.",
    consultationFee: "$220",
    nextAvailable: "Today, 11:15 AM"
  },
  {
    name: "Dr. David Kim",
    specialty: "Ophthalmology",
    image: "/placeholder.svg",
    rating: 4.8,
    reviews: 98,
    experience: "16+ years",
    location: "Eye Care Center",
    availability: "Available Tomorrow",
    education: "UCLA Medical School",
    certifications: ["Board Certified Ophthalmologist", "Retinal Surgery"],
    languages: ["English", "Korean"],
    specialties: ["Retinal Surgery", "LASIK", "Cataract Surgery"],
    bio: "Dr. Kim is a skilled ophthalmologist with expertise in complex retinal procedures and vision correction.",
    consultationFee: "$260",
    nextAvailable: "Tomorrow, 9:30 AM"
  },
  {
    name: "Dr. Maria Garcia",
    specialty: "Family Medicine",
    image: "/placeholder.svg",
    rating: 4.7,
    reviews: 145,
    experience: "11+ years",
    location: "Family Health Center",
    availability: "Available Today",
    education: "University of Miami",
    certifications: ["Board Certified Family Physician", "Preventive Medicine"],
    languages: ["English", "Spanish"],
    specialties: ["Preventive Care", "Chronic Disease Management", "Women's Health"],
    bio: "Dr. Garcia provides comprehensive family care with a focus on preventive medicine and health education.",
    consultationFee: "$160",
    nextAvailable: "Today, 3:45 PM"
  },
  {
    name: "Dr. Robert Taylor",
    specialty: "Emergency Medicine",
    image: "/placeholder.svg",
    rating: 4.8,
    reviews: 67,
    experience: "13+ years",
    location: "Emergency Department",
    availability: "On Call 24/7",
    education: "Emory University",
    certifications: ["Board Certified Emergency Physician", "Trauma Care"],
    languages: ["English"],
    specialties: ["Trauma Care", "Critical Care", "Emergency Surgery"],
    bio: "Dr. Taylor leads our emergency department with extensive experience in trauma and critical care medicine.",
    consultationFee: "$200",
    nextAvailable: "Emergency - Available Now"
  }
]

export default function AllDoctors() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-lg sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Heart className="h-4 w-4 text-white heartbeat" />
              </div>
              <span className="text-xl font-bold">
                Health<span className="text-medical-primary">Care</span>
              </span>
            </Link>
            <Link to="/">
              <Button variant="ghost">← Back to Home</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our Medical <span className="text-transparent bg-clip-text bg-gradient-primary">Experts</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet our team of board-certified physicians dedicated to providing exceptional healthcare.
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {allDoctors.map((doctor, index) => (
            <Card key={doctor.name} className="card-hover group border-border/50 hover:border-medical-primary/50 bg-card/80 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="flex items-start gap-4">
                  <Avatar className="h-20 w-20 border-2 border-medical-primary/20 group-hover:border-medical-primary/50 transition-colors">
                    <AvatarImage src={doctor.image} alt={doctor.name} />
                    <AvatarFallback className="bg-gradient-primary text-white text-lg font-semibold">
                      {doctor.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-xl font-bold group-hover:text-medical-primary transition-colors">
                          {doctor.name}
                        </h3>
                        <p className="text-medical-primary font-medium">{doctor.specialty}</p>
                        <div className="flex items-center gap-1 mt-1">
                          <Star className="h-4 w-4 text-tertiary fill-current" />
                          <span className="font-medium">{doctor.rating}</span>
                          <span className="text-muted-foreground">({doctor.reviews} reviews)</span>
                        </div>
                      </div>
                      <Badge 
                        variant={doctor.availability.includes('Today') ? 'default' : 'secondary'}
                        className={doctor.availability.includes('Today') ? 'bg-medical-primary' : ''}
                      >
                        {doctor.availability}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">{doctor.bio}</p>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-medical-primary" />
                    <span>{doctor.experience} experience</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-medical-primary" />
                    <span>{doctor.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-medical-primary" />
                    <span>{doctor.nextAvailable}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-medical-primary" />
                    <span>{doctor.consultationFee}</span>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Specializations:</h4>
                  <div className="flex flex-wrap gap-1">
                    {doctor.specialties.map((specialty, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Education & Certifications:</h4>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-medical-primary" />
                      {doctor.education}
                    </div>
                    {doctor.certifications.map((cert, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="h-3 w-3 text-medical-primary" />
                        {cert}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Languages:</h4>
                  <div className="flex gap-1">
                    {doctor.languages.map((language, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {language}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-2 pt-4 border-t border-border/50">
                  <BookingDialog>
                    <Button 
                      variant="medical-glow" 
                      size="sm" 
                      className="flex-1"
                      ripple
                    >
                      <Calendar className="mr-2 h-4 w-4" />
                      Book Appointment
                    </Button>
                  </BookingDialog>
                  <Button variant="medical-outline" size="sm" className="px-3">
                    <MessageCircle className="h-4 w-4" />
                  </Button>
                  <Button variant="medical-outline" size="sm" className="px-3">
                    <Phone className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 p-8 bg-gradient-subtle rounded-3xl border border-border/50">
          <h3 className="text-2xl font-bold mb-4">Can't Find the Right Doctor?</h3>
          <p className="text-muted-foreground mb-6">
            Let us help you find the perfect specialist for your healthcare needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="medical-glow" size="lg">
              <Users className="mr-2 h-5 w-5" />
              Get Doctor Recommendation
            </Button>
            <Button variant="medical-outline" size="lg">
              <Phone className="mr-2 h-5 w-5" />
              Call (555) 123-HEALTH
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}