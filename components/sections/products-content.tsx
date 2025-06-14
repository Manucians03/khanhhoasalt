"use client"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Package, Award, Truck, Shield } from "lucide-react"
import { useLanguage } from "@/components/providers/language-provider"
import { translations } from "@/lib/translations"

const ProductsContent = () => {
  const { language } = useLanguage()
  const t = translations[language].products

  const products = [
    {
      id: 1,
      name: t.products["khanh-vinh-refined-salt"].name,
      image: "/images/products/refined-3.jpg",
      category: language === "en" ? "Refined Salt" : "Muối Tinh Khiết",
      description: t.products["khanh-vinh-refined-salt"].usageText,
      slug: "khanh-vinh-refined-salt",
      features: [
        language === "en" ? "100% NaCl" : "100% NaCl",
        language === "en" ? "Dry crystal form" : "Dạng tinh thể khô",
        language === "en" ? "5 years shelf life" : "Hạn sử dụng 5 năm",
        language === "en" ? "ISO 22000:2018 certified" : "Chứng nhận ISO 22000:2018",
      ],
      applications: [
        language === "en" ? "Direct use" : "Sử dụng trực tiếp",
        language === "en" ? "Healthcare" : "Y tế",
        language === "en" ? "Seasoning powder" : "Bột canh",
        language === "en" ? "Food processing" : "Chế biến thực phẩm",
      ],
    },
    {
      id: 2,
      name: t.products["khanh-vinh-dried-refined-salt"].name,
      image: "/images/products/dried-1.jpg",
      category: language === "en" ? "Dried Refined Salt" : "Muối Tinh Khiết Sấy",
      description: t.products["khanh-vinh-dried-refined-salt"].usageText,
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
      name: t.products["khanh-vinh-iodised-salt"].name,
      image: "/images/products/iodised-1.jpg",
      category: language === "en" ? "Iodised Salt" : "Muối I-ốt",
      description: t.products["khanh-vinh-iodised-salt"].usageText,
      slug: "khanh-vinh-iodised-salt",
      features: [
        language === "en" ? "99.996% NaCl, 0.002% < I < 0.004%" : "99.996% NaCl, 0.002% < I < 0.004%",
        language === "en" ? "Fine crystal form" : "Dạng tinh thể nhỏ",
        language === "en" ? "5 years shelf life" : "Hạn sử dụng 5 năm",
        language === "en" ? "ISO 22000:2018 certified" : "Chứng nhận ISO 22000:2018",
      ],
      applications: [
        language === "en" ? "Direct use" : "Sử dụng trực tiếp",
        language === "en" ? "Instant noodles" : "Mì ăn liền",
        language === "en" ? "Seasoning powder" : "Bột canh",
        language === "en" ? "Cooking" : "Nấu ăn",
      ],
    },
    {
      id: 4,
      name: t.products["khanh-vinh-iodised-salt-premium"].name,
      image: "/images/products/iodised-premium-1.jpg",
      category: language === "en" ? "Iodised Salt Premium" : "Muối I-ốt Mới",
      description: t.products["khanh-vinh-iodised-salt-premium"].usageText,
      slug: "khanh-vinh-iodised-salt-premium",
      features: [
        language === "en" ? "99.996% NaCl, 0.002% < I < 0.004%" : "99.996% NaCl, 0.002% < I < 0.004%",
        language === "en" ? "Fine crystal form" : "Dạng tinh thể nhỏ",
        language === "en" ? "5 years shelf life" : "Hạn sử dụng 5 năm",
        language === "en" ? "ISO 22000:2018 certified" : "Chứng nhận ISO 22000:2018",
      ],
      applications: [
        language === "en" ? "Direct use" : "Sử dụng trực tiếp",
        language === "en" ? "Instant noodles" : "Mì ăn liền",
        language === "en" ? "Seasoning powder" : "Bột canh",
        language === "en" ? "Cooking" : "Nấu ăn",
      ],
    },
    {
      id: 5,
      name: t.products["pure-coarse-salt"].name,
      image: "/images/products/coarse-3.jpg",
      category: language === "en" ? "Pure Coarse Salt" : "Muối Hạt Sạch",
      description: t.products["pure-coarse-salt"].usageText,
      slug: "pure-coarse-salt",
      features: [
        language === "en" ? "100% NaCl" : "100% NaCl",
        language === "en" ? "High purity" : "Độ tinh khiết cao",
        language === "en" ? "Multiple packaging sizes" : "Nhiều quy cách đóng gói",
        language === "en" ? "Quality assured" : "Đảm bảo chất lượng",
      ],
      applications: [
        language === "en" ? "Seafood processing" : "Chế biến thủy hải sản",
        language === "en" ? "Food processing" : "Chế biến thực phẩm",
        language === "en" ? "Water treatment" : "Xử lý nước",
        language === "en" ? "Pickling" : "Muối dưa",
      ],
    },
    {
      id: 6,
      name: t.products["industrial-coarse-salt"].name,
      image: "/images/products/industrial-3.jpg",
      category: language === "en" ? "Industrial Salt" : "Muối Công Nghiệp",
      description: t.products["industrial-coarse-salt"].usageText,
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-4 sm:mx-10 lg:mx-20">
          {products.map((product) => (
            <Card key={product.id} className="group overflow-hidden flex flex-col">
              {/* Image */}
              <div className="relative h-96 bg-gray-100 overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="group-hover:scale-110 transition-transform duration-300 w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary">{product.category}</Badge>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col justify-between gap-4 p-6">
                <div>
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="text-xl mb-2">{product.name}</CardTitle>
                    <CardDescription className="text-sm">{product.description}</CardDescription>
                  </CardHeader>

                  <div className="flex flex-1 flex-col justify-between gap-4">
                    {/* Features */}
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center text-sm">
                        <Award className="h-3 w-3 mr-2 text-primary" />
                        {language === "en" ? "Key Features" : "Tính Năng Chính"}
                      </h4>
                      <ul className="grid grid-cols-1 gap-1">
                        {product.features?.slice(0, 2).map((feature, idx) => (
                          <li key={idx} className="text-xs text-muted-foreground flex items-center">
                            <div className="w-1 h-1 bg-primary rounded-full mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Separator />

                    {/* Applications */}
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center text-sm">
                        <Package className="h-3 w-3 mr-2 text-primary" />
                        {language === "en" ? "Applications" : "Ứng Dụng"}
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {product.applications?.slice(0, 3).map((app, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {app}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2 pt-2">
                  <Button asChild size="sm">
                    <Link href={`/products/${product.slug}`}>
                      {language === "en" ? "View Details" : "Xem Chi Tiết"}
                    </Link>
                  </Button>
                  <Button variant="outline" asChild size="sm">
                    <Link href="/contact">{language === "en" ? "Request Quote" : "Yêu Cầu Báo Giá"}</Link>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Quality Assurance Section */}
        <div className="mt-20 max-w-[1000px] mx-auto">
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-12 text-center">
              <h3 className="text-xl lg:text-2xl font-bold mb-6">
                {language === "en" ? "Quality Assurance" : "Đảm Bảo Chất Lượng"}
              </h3>
              <div className="flex gap-12 items-center justify-center">
                <div className="flex flex-col items-center">
                  <Shield className="h-12 w-12 mb-4 opacity-80" />
                  <h4 className="font-semibold mb-2">ISO 22000:2018</h4>
                  <p className="text-sm opacity-80 text-center">
                    {language === "en" ? "Food Safety Management" : "Quản Lý An Toàn Thực Phẩm"}
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <Award className="h-12 w-12 mb-4 opacity-80" />
                  <h4 className="font-semibold mb-2">HACCP</h4>
                  <p className="text-sm opacity-80 text-center max-w-48">
                    {language === "en"
                      ? "Hazard Analysis Critical Control"
                      : "Phân Tích Mối Nguy Hiểm và Điểm Kiểm Soát Tới Hạn"}
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <Truck className="h-12 w-12 mb-4 opacity-80" />
                  <h4 className="font-semibold mb-2">GMP</h4>
                  <p className="text-sm opacity-80 text-center">
                    {language === "en" ? "Good Manufacturing Practice" : "Thực Hành Sản Xuất Tốt"}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default ProductsContent
