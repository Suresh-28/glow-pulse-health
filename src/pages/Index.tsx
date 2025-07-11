import { ThemeToggle } from "@/components/ThemeToggle"
import { CursorTrail } from "@/components/CursorTrail"
import { HeroSection } from "@/components/sections/HeroSection"
import { ServicesSection } from "@/components/sections/ServicesSection"
import { DoctorsSection } from "@/components/sections/DoctorsSection"
import { VirtualConsultSection } from "@/components/sections/VirtualConsultSection"
import { TestimonialsSection } from "@/components/sections/TestimonialsSection"
import { FAQSection } from "@/components/sections/FAQSection"
import { NewsletterSection } from "@/components/sections/NewsletterSection"
import { Footer } from "@/components/sections/Footer"
import { Button } from "@/components/ui/button"
import { Heart, Menu, Phone } from "lucide-react"
import { useEffect, useState } from "react"

const Index = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-background font-manrope dark">
      {/* Cursor Trail Effect */}
      <CursorTrail />
      
      {/* Navigation Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-lg border-b border-border/50' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Heart className="h-4 w-4 text-white heartbeat" />
              </div>
              <span className="text-xl font-bold">
                Health<span className="text-medical-primary">Care</span>
              </span>
            </div>

            {/* Navigation Links - Hidden on mobile */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-sm font-medium hover:text-medical-primary transition-colors">Services</a>
              <a href="#doctors" className="text-sm font-medium hover:text-medical-primary transition-colors">Doctors</a>
              <a href="#virtual" className="text-sm font-medium hover:text-medical-primary transition-colors">Virtual Care</a>
              <a href="#testimonials" className="text-sm font-medium hover:text-medical-primary transition-colors">Reviews</a>
              <a href="#contact" className="text-sm font-medium hover:text-medical-primary transition-colors">Contact</a>
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm" className="hidden sm:flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span className="hidden lg:inline">Emergency: (555) 911</span>
              </Button>
              <ThemeToggle />
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="overflow-hidden">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Services Section */}
        <div id="services">
          <ServicesSection />
        </div>
        
        {/* Doctors Section */}
        <div id="doctors">
          <DoctorsSection />
        </div>
        
        {/* Virtual Consultation Section */}
        <div id="virtual">
          <VirtualConsultSection />
        </div>
        
        {/* Testimonials Section */}
        <div id="testimonials">
          <TestimonialsSection />
        </div>
        
        {/* FAQ Section */}
        <FAQSection />
        
        {/* Newsletter Section */}
        <div id="contact">
          <NewsletterSection />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
