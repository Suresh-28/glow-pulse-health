import { Button } from "@/components/ui/button"
import { Heart, Facebook, Twitter, Instagram, Linkedin, ArrowUp, Phone, Mail, MapPin } from "lucide-react"
import { useEffect, useState } from "react"

const footerLinks = {
  services: [
    "Emergency Care",
    "Cardiology", 
    "Pediatrics",
    "Telemedicine",
    "Surgery",
    "Mental Health"
  ],
  company: [
    "About Us",
    "Our Doctors",
    "Careers",
    "News & Media",
    "Research",
    "Contact"
  ],
  patients: [
    "Patient Portal",
    "Insurance",
    "Billing",
    "Medical Records",
    "Pharmacy",
    "Support"
  ]
}

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" }
]

export function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-background border-t border-border/50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-primary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
                <Heart className="h-5 w-5 text-white heartbeat" />
              </div>
              <span className="text-2xl font-bold">
                Health<span className="text-medical-primary">Care</span>
              </span>
            </div>
            
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
              Providing exceptional healthcare services with compassion, innovation, 
              and excellence. Your health and well-being are our top priorities.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-medical-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-medical-primary" />
                <span>contact@healthcare.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-medical-primary" />
                <span>123 Medical Center Dr, Health City, HC 12345</span>
              </div>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-muted-foreground hover:text-medical-primary transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-muted-foreground hover:text-medical-primary transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Patient Resources */}
          <div>
            <h3 className="font-semibold text-lg mb-6">For Patients</h3>
            <ul className="space-y-3">
              {footerLinks.patients.map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-muted-foreground hover:text-medical-primary transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="text-muted-foreground text-sm">
              © 2024 HealthCare. All rights reserved. | 
              <a href="#" className="hover:text-medical-primary transition-colors ml-1">Privacy Policy</a> | 
              <a href="#" className="hover:text-medical-primary transition-colors ml-1">Terms of Service</a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center hover:border-medical-primary/50 hover:bg-medical-primary/10 transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <Button
          onClick={scrollToTop}
          variant="medical-glow"
          size="icon"
          className="fixed bottom-8 right-8 z-50 rounded-full shadow-glow animate-bounce"
          aria-label="Back to top"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      )}
    </footer>
  )
}