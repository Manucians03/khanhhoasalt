"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Quote } from "lucide-react"
import { useLanguage } from "@/components/providers/language-provider"
import { useEffect, useRef, useState } from "react"

const Partners = () => {
  const { language } = useLanguage()
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  const partners = [
    {
      id: 1,
      name: "VIFON",
      logo: "/images/partners/vifon.png",
      testimonial:
        language === "en"
          ? "As a brand providing industrial food products, we highly value the quality of Khanh Hoa Salt products. The refined salt is clean, has a pure salty taste and natural origin."
          : "Là thương hiệu cung cấp sản phẩm thực phẩm công nghiệp, chúng tôi đánh giá cao chất lượng sản phẩm Muối Khánh Hòa. Hạt muối khô, sạch có vị mặn thanh và nguồn gốc tự nhiên.",
    },
    {
      id: 2,
      name: "ACECOOK",
      logo: "/images/partners/acecook.png",
      testimonial:
        language === "en"
          ? "Acecook trusts Khanh Hoa Salt as a strategic partner in our supply chain. The salt has high purity, uniform particles, and stable salty taste."
          : "Acecook tin tưởng Muối Khánh Hòa là đối tác chiến lược trong chuỗi cung ứng. Muối có độ tinh khiết cao, hạt đều và vị mặn ổn định.",
    },
    {
      id: 3,
      name: "C.P. GROUP",
      logo: "/images/partners/cpgroup.png",
      testimonial:
        language === "en"
          ? "The salt products have high purity, rich natural minerals and stable composition, very suitable for nutrition formulas in livestock industry."
          : "Sản phẩm muối có độ tinh khiết cao, giàu khoáng chất tự nhiên và ổn định thành phần, rất phù hợp cho công thức dinh dưỡng chăn nuôi.",
    },
  ]

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
    <section className="py-20 bg-background">
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
          {partners.map((partner, index) => (
            <div
              key={partner.id}
              ref={(el) => { itemRefs.current[index] = el }}
              data-id={partner.id}
              className={`transition-all duration-700 ${
                visibleItems.includes(partner.id) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <Card className="hover-lift h-full">
                <CardContent className="p-8">
                  {/* Quote Icon */}
                  <Quote className="h-8 w-8 text-primary mb-4" />

                  {/* Testimonial */}
                  <p className="text-muted-foreground mb-6 italic">"{partner.testimonial}"</p>

                  {/* Partner Info */}
                  <div className="flex items-center space-x-4 mt-auto">
                    <img
                      src={partner.logo || "/placeholder.svg"}
                      alt={partner.name}
                      className="h-12 w-auto object-contain"
                    />
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
