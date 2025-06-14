"use client"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Package } from "lucide-react"
import { useLanguage } from "@/components/providers/language-provider"
import { translations } from "@/lib/translations"
import { useEffect, useRef, useState } from "react"

const Products = () => {
  const { language } = useLanguage()
  const t = translations[language].products
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  const products = [
    {
      id: 1,
      name: t.products['khanh-vinh-refined-salt'].name,
      image: "/images/products/refined-3.jpg",
      description: t.products['khanh-vinh-refined-salt'].usageText,
      slug: "khanh-vinh-refined-salt",
    },
    {
      id: 2,
      name: t.products['khanh-vinh-dried-refined-salt'].name,
      image: "/images/products/dried-2.jpg",
      description: t.products['khanh-vinh-dried-refined-salt'].usageText,
      slug: "khanh-vinh-dried-refined-salt",
    },
    {
      id: 3,
      name: t.products['khanh-vinh-iodised-salt'].name,
      image: "/images/products/iodised-1.jpg",
      description: t.products['khanh-vinh-iodised-salt'].usageText,
      slug: "khanh-vinh-iodised-salt",
    },
    {
      id: 4,
      name: t.products['khanh-vinh-iodised-salt-premium'].name,
      image: "/images/products/iodised-premium-1.jpg",
      description: t.products['khanh-vinh-iodised-salt-premium'].usageText,
      slug: "khanh-vinh-iodised-salt-premium",
    },
    {
      id: 5, 
      name: t.products['pure-coarse-salt'].name,
      image: "/images/products/coarse-3.jpg",
      description: t.products['pure-coarse-salt'].usageText,
      slug: "pure-coarse-salt",
    },
    {
      id: 6,
      name: t.products['industrial-coarse-salt'].name,
      image: "/images/products/industrial-3.jpg",
      description: t.products['industrial-coarse-salt'].usageText,
      slug: "industrial-coarse-salt",
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
    <section className="py-20 pb-10 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">{t.title}</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{t.text}</p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 ml-20 mr-20">
          {products.map((product, index) => (
            <div
              key={product.id}
              ref={(el) => { itemRefs.current[index] = el }}
              data-id={product.id}
              className={`transition-all duration-700 ${
                visibleItems.includes(product.id) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Link href={`/products/${product.slug}`}>
              <Card className="group hover-lift cursor-pointer h-96 overflow-hidden relative">
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 group-hover:from-black/90 group-hover:via-black/50 group-hover:to-black/30 transition-all duration-300" />
                  </div>

                  {/* Content Overlay */}
                  <CardContent className="relative z-10 p-6 h-full flex flex-col justify-end text-white">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary-foreground transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-sm text-white/90 mb-4 line-clamp-3 group-hover:text-white transition-colors">
                      {product.description}
                    </p>
                    <div className="flex items-center text-white group-hover:text-primary-foreground transition-colors">
                      <span className="text-sm font-medium">{t.readMore}</span>
                      <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          ))}
        </div>

        {/* Company Info Card */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-primary text-primary-foreground hover-lift">
            <CardContent className="p-8 text-center">
              <Package className="h-12 w-12 mx-auto mb-4 opacity-80" />
              <CardTitle className="text-white mb-4 text-2xl">{t.companyName}</CardTitle>
              <CardDescription className="text-white/80 mb-6 text-lg">{t.slogan}</CardDescription>
              <Button asChild variant="secondary" size="lg">
                <Link href="/contact">{t.contactUs}</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link href="/products">
              {language === "en" ? "View All Products" : "Xem Tất Cả Sản Phẩm"}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Products
