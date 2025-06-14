"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Quote } from "lucide-react"
import { useLanguage } from "@/components/providers/language-provider"
import { useEffect, useRef, useState } from "react"
import { translations } from "@/lib/translations"

const Partners = () => {
  const { language } = useLanguage()
  const t = translations[language].home.partners
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = Number(entry.target.getAttribute("data-id"))
            setVisibleItems((prev) => [...prev, id])
          }
        })
      },
      { threshold: 0.1 },
    )

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => {
      itemRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref)
      })
    }
  }, [])

  return (
    <section className="py-10 bg-background bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <Badge variant="outline" className="mb-4">
            {language === "en" ? "Our Partners" : "Đối Tác"}
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            {language === "en" ? "Trusted by Industry Leaders" : "Được Tin Tưởng Bởi Các Doanh Nghiệp Hàng Đầu"}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === "en"
              ? "What our customers say about our salt products and services"
              : "Khách hàng nói gì về sản phẩm và dịch vụ của chúng tôi"}
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
            {t.items.map((partner, index) => (
            <div
              key={index}
              ref={(el) => { itemRefs.current[index] = el }}
              data-id={index}
              className={`transition-all duration-700 ${
                visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <Card className="hover-lift h-full">
                <CardContent className="p-8 flex flex-col h-full">
                  {/* Quote Icon */}
                  <Quote className="h-8 w-8 text-primary mb-4" />

                  {/* Testimonial */}
                  <p className="text-muted-foreground mb-6 italic flex-grow">"{partner.description}"</p>

                  {/* Partner Info */}
                  <div className="flex items-center space-x-4">
                    <div>
                      <div className="font-semibold">{partner.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {language === "en" ? "Trusted Partner" : "Đối Tác Tin Cậy"}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Partners
