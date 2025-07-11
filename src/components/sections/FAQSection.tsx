import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Plus, Minus, MessageCircle } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const faqs = [
  {
    question: "How do I book an appointment?",
    answer: "You can book an appointment through our website, mobile app, or by calling our 24/7 hotline. Online booking is available with instant confirmation."
  },
  {
    question: "Do you accept insurance?", 
    answer: "We accept most major insurance plans including Medicare, Medicaid, and private insurance. Contact our billing department to verify your coverage."
  },
  {
    question: "What should I bring to my appointment?",
    answer: "Please bring a valid ID, insurance card, list of current medications, and any relevant medical records or test results from previous doctors."
  },
  {
    question: "Are telemedicine consultations covered by insurance?",
    answer: "Most insurance plans now cover telemedicine visits. We'll verify your coverage before your virtual appointment and inform you of any costs."
  },
  {
    question: "How long do appointments typically last?",
    answer: "Regular consultations are typically 15-30 minutes, while comprehensive checkups may take 45-60 minutes. Emergency consultations vary based on the situation."
  }
]

export function FAQSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [openIndex, setOpenIndex] = useState<number | null>(null)
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

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section ref={sectionRef} className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-0 w-80 h-80 bg-medical-primary rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-medical-secondary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'slide-in-bottom' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Frequently <span className="text-transparent bg-clip-text bg-gradient-primary">Asked Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Find answers to common questions about our services, appointments, and healthcare policies.
          </p>
        </div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto space-y-4 mb-12">
          {faqs.map((faq, index) => (
            <Card 
              key={index}
              className={`border-border/50 hover:border-medical-primary/50 bg-card/80 backdrop-blur-sm transition-all duration-700 ${
                isVisible ? 'slide-in-left' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-0">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/50 transition-colors rounded-lg"
                >
                  <h3 className="text-lg font-semibold pr-4">{faq.question}</h3>
                  <div className={`transform transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}>
                    {openIndex === index ? (
                      <Minus className="h-5 w-5 text-medical-primary" />
                    ) : (
                      <Plus className="h-5 w-5 text-medical-primary" />
                    )}
                  </div>
                </button>
                
                <div className={`overflow-hidden transition-all duration-500 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact CTA */}
        <div className={`text-center transition-all duration-1000 delay-500 ${isVisible ? 'slide-in-bottom' : 'opacity-0'}`}>
          <p className="text-lg text-muted-foreground mb-6">
            Still have questions? We're here to help!
          </p>
          <Button 
            variant="medical-glow" 
            size="lg" 
            ripple
            className="group"
          >
            <MessageCircle className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            Contact Support
          </Button>
        </div>
      </div>
    </section>
  )
}