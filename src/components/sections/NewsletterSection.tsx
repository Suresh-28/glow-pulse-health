import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Mail, Send, Heart, CheckCircle } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function NewsletterSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      setTimeout(() => {
        setIsSubmitted(false)
        setEmail("")
      }, 3000)
    }
  }

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-medical-primary rounded-full blur-xl animate-pulse float-animation" />
        <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-medical-secondary rounded-full blur-lg animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-10 w-16 h-16 bg-medical-accent/30 rounded-full blur-md animate-bounce" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <Card className="border-border/50 bg-card/80 backdrop-blur-sm shadow-medical">
            <CardContent className="p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Left Content */}
                <div className={`transition-all duration-1000 ${isVisible ? 'slide-in-left' : 'opacity-0'}`}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center glow-pulse">
                      <Heart className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-sm font-medium text-medical-primary">
                      Your health journey starts here
                    </div>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Stay Updated with{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-primary">
                      Health Tips
                    </span>
                  </h2>
                  
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    Get the latest health insights, wellness tips, and medical updates 
                    delivered directly to your inbox. Join thousands of patients 
                    on their journey to better health.
                  </p>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-medical-success" />
                      <span>Weekly health tips</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-medical-success" />
                      <span>Expert insights</span>
                    </div>
                  </div>
                </div>

                {/* Right Form */}
                <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'slide-in-right' : 'opacity-0'}`}>
                  {!isSubmitted ? (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-medium">
                          Email Address
                        </Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                          <Input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="pl-10 h-12 border-border/50 focus:border-medical-primary transition-colors"
                            required
                          />
                        </div>
                      </div>
                      
                      <Button 
                        type="submit" 
                        variant="medical-glow" 
                        size="lg" 
                        className="w-full group"
                        ripple
                      >
                        <Send className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                        Subscribe Now
                      </Button>
                      
                      <p className="text-xs text-muted-foreground text-center">
                        We respect your privacy. Unsubscribe at any time.
                      </p>
                    </form>
                  ) : (
                    <div className="text-center py-8 fade-scale-in">
                      <div className="w-16 h-16 bg-gradient-to-r from-medical-success to-medical-success mx-auto rounded-full flex items-center justify-center mb-4 glow-pulse">
                        <CheckCircle className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Welcome aboard!</h3>
                      <p className="text-muted-foreground">
                        You'll receive your first health tip within 24 hours.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}