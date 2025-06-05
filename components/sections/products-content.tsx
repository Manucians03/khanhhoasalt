"use client"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Package, Award, Truck, Shield } from "lucide-react"
import { useLanguage } from "@/components/providers/language-provider"
import { translations } from "@/lib/translations"
import Quality from "./quality"

const ProductsContent = () => {
  const { language } = useLanguage()
  const t = translations[language].products

  const products = [
    {
      id: 1,
      name: t.products['khanh-vinh-refined-salt'].name,
      image: "/images/products/refined-1.jpg",
      category: language === "en" ? "Refined Salt" : "Muối Tinh",
      description: t.products['khanh-vinh-refined-salt'].usageText,
      slug: "khanh-vinh-refined-salt",
      features: [
        language === "en" ? "100% NaCl" : "100% NaCl",
        language === "en" ? "Dry crystal form" : "Dạng tinh thể khô",
        language === "en" ? "5 years shelf life" : "Hạn sử dụng 5 năm",
        language === "en" ? "ISO 22000:2018 certified" : "Chứng nhận ISO 22000:2018",
      ],
      applications: [
        language === "en" ? "Instant noodles" : "Mì ăn liền",
        language === "en" ? "Sauces" : "Tương ớt",
        language === "en" ? "Seasoning powder" : "Bột canh",
        language === "en" ? "Food processing" : "Chế biến thực phẩm",
      ],
    },
    {
      id: 2,
      name: t.products['khanh-vinh-dried-refined-salt'].name,
      image: "/images/products/dried-1.jpg",
      category: language === "en" ? "Pure Salt" : "Muối Tinh Khiết",
      description: t.products['khanh-vinh-dried-refined-salt'].usageText,
      slug: "khanh-vinh-dried-refined-salt",
      features: [
        language === "en" ? "100% NaCl" : "100% NaCl",
        language === "en" ? "High purity" : "Độ tinh khiết cao",
        language === "en" ? "Multiple packaging sizes" : "Nhiều quy cách đóng gói",
        language === "en" ? "Quality assured" : "Đảm bảo chất lượng",
      ],
      applications: [
        language === "en" ? "Animal feed" : "Thức ăn gia súc",
        language === "en" ? "Industrial use" : "Sử dụng công nghiệp",
        language === "en" ? "Water treatment" : "Xử lý nước",
        language === "en" ? "Chemical industry" : "Công nghiệp hóa chất",
      ],
    },
    {
      id: 3,
      name: t.products['pure-coarse-salt'].name,
      image: "/images/products/industrial-1.jpg",
      category: language === "en" ? "Pure Salt" : "Muối Tinh Khiết",
      description: t.products['pure-coarse-salt'].usageText,
      slug: "pure-coarse-salt",
      features: [
        language === "en" ? "100% NaCl" : "100% NaCl",
        language === "en" ? "High purity" : "Độ tinh khiết cao",
        language === "en" ? "Multiple packaging sizes" : "Nhiều quy cách đóng gói",
        language === "en" ? "Quality assured" : "Đảm bảo chất lượng",
      ],
      applications: [ 
        language === "en" ? "Food processing" : "Chế biến thực phẩm",
        language === "en" ? "Industrial use" : "Sử dụng công nghiệp",
        language === "en" ? "Water treatment" : "Xử lý nước",
        language === "en" ? "Chemical industry" : "Công nghiệp hóa chất",
      ],
    },
    {
      id: 4,
      name: t.products['industrial-coarse-salt'].name,
      image: "/images/products/coarse-1.jpg",
      category: language === "en" ? "Industrial Salt" : "Muối Công Nghiệp",
      description: t.products['industrial-coarse-salt'].usageText,
      slug: "industrial-coarse-salt",
      features: [
        language === "en" ? "100% NaCl" : "100% NaCl",
        language === "en" ? "High purity" : "Độ tinh khiết cao",
        language === "en" ? "Multiple packaging sizes" : "Nhiều quy cách đóng gói",
        language === "en" ? "Quality assured" : "Đảm bảo chất lượng",
      ],
      applications: [
        language === "en" ? "Food processing" : "Chế biến thực phẩm",
        language === "en" ? "Industrial use" : "Sử dụng công nghiệp",
        language === "en" ? "Water treatment" : "Xử lý nước",
        language === "en" ? "Chemical industry" : "Công nghiệp hóa chất",
      ],
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Products Grid */}
        <div className="space-y-16">
          {products.map((product, index) => (
            <Card key={product.id} className="overflow-hidden">
              <div className={`grid lg:grid-cols-2 gap-8 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                {/* Image */}
                <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <div className="relative h-96 lg:h-full">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary">{product.category}</Badge>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`p-8 ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                  <CardHeader className="p-0 mb-6">
                    <CardTitle className="text-2xl lg:text-3xl mb-2">{product.name}</CardTitle>
                    <CardDescription className="text-lg">{product.description}</CardDescription>
                  </CardHeader>

                  <div className="space-y-6">
                    {/* Features */}
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center">
                        <Award className="h-4 w-4 mr-2 text-primary" />
                        {language === "en" ? "Key Features" : "Tính Năng Chính"}
                      </h4>
                      <ul className="grid grid-cols-2 gap-2">
                        {product.features?.map((feature, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-center">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Separator />

                    {/* Applications */}
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center">
                        <Package className="h-4 w-4 mr-2 text-primary" />
                        {language === "en" ? "Applications" : "Ứng Dụng"}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {product.applications?.map((app, idx) => (
                          <Badge key={idx} variant="outline">
                            {app}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button asChild className="flex-1">
                        <Link href={`/products/${product.slug}`}>
                          {language === "en" ? "View Details" : "Xem Chi Tiết"}
                        </Link>
                      </Button>
                      <Button variant="outline" asChild className="flex-1">
                        <Link href="/contact">{language === "en" ? "Request Quote" : "Yêu Cầu Báo Giá"}</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Quality Assurance Section */}
        <Quality />
      </div>
    </section>
  )
}

export default ProductsContent
