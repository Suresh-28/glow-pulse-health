import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FloatingLabel } from "@/components/FloatingLabel"
import { BookingDialog } from "@/components/BookingDialog"
import { 
  Heart, Video, Shield, Stethoscope, Pill, Users, 
  Brain, Bone, Eye, Ear, Baby, Activity,
  Microscope, Zap, Phone, Clock, Star
} from "lucide-react"
import { Link } from "react-router-dom"

const allServices = [
  {
    icon: Heart,
    title: "Cardiology",
    description: "Complete heart care with advanced diagnostics, cardiac catheterization, and surgical interventions",
    price: "From $150",
    duration: "60 min",
    rating: 4.9,
    label: "Most Booked",
    popular: true,
    features: ["ECG Testing", "Stress Testing", "Heart Surgery", "Pacemaker Installation"]
  },
  {
    icon: Video,
    title: "Telemedicine",
    description: "Virtual consultations with board-certified physicians from anywhere in the world",
    price: "From $75",
    duration: "30 min",
    rating: 4.8,
    label: "Available 24/7",
    popular: false,
    features: ["Video Calls", "Chat Support", "Digital Prescriptions", "Follow-up Care"]
  },
  {
    icon: Shield,
    title: "Emergency Care",
    description: "24/7 emergency medical services with rapid response trauma care teams",
    price: "Insurance Covered",
    duration: "Immediate",
    rating: 4.9,
    label: "24/7 Available",
    popular: false,
    features: ["Trauma Care", "Life Support", "Emergency Surgery", "Ambulance Service"]
  },
  {
    icon: Stethoscope,
    title: "General Medicine",
    description: "Comprehensive primary care for routine check-ups and preventive medicine",
    price: "From $100",
    duration: "45 min",
    rating: 4.7,
    label: "Walk-ins Welcome",
    popular: false,
    features: ["Annual Check-ups", "Vaccinations", "Health Screenings", "Preventive Care"]
  },
  {
    icon: Brain,
    title: "Neurology",
    description: "Advanced neurological care for brain, spine, and nervous system disorders",
    price: "From $200",
    duration: "75 min",
    rating: 4.8,
    label: "Specialist Care",
    popular: false,
    features: ["Brain Imaging", "Epilepsy Care", "Stroke Treatment", "Memory Disorders"]
  },
  {
    icon: Bone,
    title: "Orthopedics",
    description: "Expert care for bones, joints, muscles, and sports-related injuries",
    price: "From $175",
    duration: "60 min",
    rating: 4.8,
    label: "Sports Medicine",
    popular: false,
    features: ["Joint Replacement", "Sports Injuries", "Fracture Care", "Physical Therapy"]
  },
  {
    icon: Eye,
    title: "Ophthalmology",
    description: "Complete eye care including vision correction, cataract, and retinal surgery",
    price: "From $125",
    duration: "45 min",
    rating: 4.9,
    label: "Vision Experts",
    popular: false,
    features: ["Eye Exams", "LASIK Surgery", "Cataract Surgery", "Retinal Care"]
  },
  {
    icon: Baby,
    title: "Pediatrics",
    description: "Specialized medical care for infants, children, and adolescents",
    price: "From $120",
    duration: "45 min",
    rating: 4.9,
    label: "Child Friendly",
    popular: true,
    features: ["Well-child Visits", "Immunizations", "Growth Monitoring", "Developmental Care"]
  },
  {
    icon: Users,
    title: "Family Medicine",
    description: "Comprehensive healthcare for patients of all ages and family health management",
    price: "From $110",
    duration: "50 min",
    rating: 4.7,
    label: "All Ages",
    popular: false,
    features: ["Family Planning", "Chronic Disease", "Preventive Care", "Health Education"]
  },
  {
    icon: Activity,
    title: "Dermatology",
    description: "Expert skin care including medical, surgical, and cosmetic dermatology",
    price: "From $140",
    duration: "40 min",
    rating: 4.8,
    label: "Skin Experts",
    popular: false,
    features: ["Skin Cancer Screening", "Acne Treatment", "Cosmetic Procedures", "Allergy Testing"]
  },
  {
    icon: Microscope,
    title: "Laboratory Services",
    description: "Advanced diagnostic testing with rapid results and comprehensive analysis",
    price: "From $50",
    duration: "15 min",
    rating: 4.8,
    label: "Fast Results",
    popular: false,
    features: ["Blood Tests", "Genetic Testing", "Pathology", "Rapid Diagnostics"]
  },
  {
    icon: Pill,
    title: "Pharmacy Services",
    description: "Full-service pharmacy with prescription delivery and medication counseling",
    price: "Insurance Accepted",
    duration: "10 min",
    rating: 4.7,
    label: "Same Day Delivery",
    popular: false,
    features: ["Prescription Filling", "Medication Delivery", "Drug Counseling", "Health Screenings"]
  }
]

export default function AllServices() {
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
            All Medical <span className="text-transparent bg-clip-text bg-gradient-primary">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive healthcare solutions with expert medical professionals and cutting-edge technology.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allServices.map((service, index) => (
            <Card key={service.title} className="card-hover group relative border-border/50 hover:border-medical-primary/50 bg-card/80 backdrop-blur-sm">
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
                <div className="flex items-center justify-center gap-4 mt-2">
                  <Badge variant="outline" className="text-medical-primary border-medical-primary/50">
                    {service.price}
                  </Badge>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    {service.duration}
                  </div>
                  <div className="flex items-center gap-1 text-sm text-tertiary">
                    <Star className="h-3 w-3 fill-current" />
                    {service.rating}
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <CardDescription className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </CardDescription>
                
                <div className="space-y-2 mb-6">
                  <h4 className="font-medium text-sm">Services Include:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-medical-primary rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex gap-2">
                  <BookingDialog>
                    <Button 
                      variant="medical-glow" 
                      size="sm" 
                      className="flex-1 group-hover:scale-105 transition-transform"
                      ripple
                    >
                      Book Now
                    </Button>
                  </BookingDialog>
                  <Button 
                    variant="medical-outline" 
                    size="sm"
                    className="px-3"
                  >
                    <Phone className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 p-8 bg-gradient-subtle rounded-3xl border border-border/50">
          <h3 className="text-2xl font-bold mb-4">Need Help Choosing?</h3>
          <p className="text-muted-foreground mb-6">
            Our medical experts are here to help you find the right care for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="medical-glow" size="lg">
              <Phone className="mr-2 h-5 w-5" />
              Call (555) 123-HEALTH
            </Button>
            <BookingDialog>
              <Button variant="medical-outline" size="lg">
                Schedule Consultation
              </Button>
            </BookingDialog>
          </div>
        </div>
      </main>
    </div>
  )
}