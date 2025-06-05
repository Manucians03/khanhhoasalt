"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Target, Heart, Microscope } from "lucide-react"
import { useLanguage } from "@/components/providers/language-provider"
import { translations } from "@/lib/translations"
import { useEffect, useRef, useState } from "react"

const CoreValues = () => {
  const { language } = useLanguage()
  const t = translations[language].about
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  const values = [
    {
      id: 1,
      icon: Award,
      title: language === "en" ? "Quality and Safety" : "Chất Lượng và Vệ Sinh An Toàn Thực Phẩm",
      description:
        language === "en"
          ? "Strictly applied quality management systems (HACCP, ISO 22000, GMP) from extraction to packaging to ensure product quality and compliance with standards of the Ministry of Health."
          : "Áp dụng hệ thống quản lý chất lượng nghiêm ngặt (HACCP, ISO 22000, GMP) từ việc khai thác đến đóng gói nhằm đảm bảo chất lượng của sản phẩm và tuân thủ tiêu chuẩn VSATTP của Bộ Y tế.",
    },
    {
      id: 2,
      icon: Target,
      title: language === "en" ? "Social Responsibility" : "Trách Nhiệm Xã Hội",
      description:
        language === "en"
          ? "Ensuring stable and transparent purchase of salt from local farmers. Creating jobs and supporting local communities."
          : "Đảm bảo thu mua muối từ diêm dân với giá cả ổn định, minh bạch. Tạo công ăn việc làm cho người dân vùng muối và đầu tư phát triển cơ sở hạ tầng hỗ trợ cộng đồng địa phương.",
    },
    {
      id: 3,
      icon: Microscope,
      title: language === "en" ? "Innovation and Development" : "Đổi Mới và Phát Triển",
      description:
        language === "en"
          ? "Always innovate, employ the latest scientific and technological advances, apply into production and smart packaging."
          : "Luôn cập nhật, cải tiến các tiến bộ về khoa học kỹ thuật, áp dụng vào việc sản xuất và đóng gói thông minh giúp tối ưu hóa quy trình.",
    },
    {
      id: 4,
      icon: Heart,
      title: language === "en" ? "Community Health" : "Sức Khỏe Cộng Đồng",
      description:
        language === "en"
          ? "Developing iodized salt products, supplementing essential minerals to prevent diseases such as goiter, heart disease, etc. and proudly being part of the national program to prevent goiter diseases. Additionally, educating consumers about the proper use of salt."
          : "Phát triển các sản phẩm muối I-ốt, bổ sung khoáng chất thiết yếu để phòng ngừa những bệnh như suy giảm tuyến giáp, tim mạch,... và tự hào là đơn vị nằm trong chương trình Quốc gia phòng chống bướu cổ. Đồng thời, giáo dục người tiêu dùng về việc sử dụng muối hợp lý.",
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
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <Badge variant="outline" className="mb-4">
            {language === "en" ? "Core Values" : "Giá Trị Cốt Lõi"}
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">{language === "en" ? "Core Values" : "Giá Trị Cốt Lõi"}</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {language === "en"
              ? "Our core values are the foundation of our company's success. We are committed to providing high-quality salt products and services to our customers."
              : "Giá trị cốt lõi của chúng tôi là nền tảng thành công của công ty. Chúng tôi cam kết cung cấp sản phẩm muối chất lượng cao và dịch vụ tốt nhất cho khách hàng."}
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <div
                key={value.id}
                ref={(el) => {
                  if (el) {
                    itemRefs.current[index] = el
                  }
                }}
                data-id={value.id}
                className={`transition-all duration-700 ${
                  visibleItems.includes(value.id) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Card className="text-center hover-lift h-full">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default CoreValues
