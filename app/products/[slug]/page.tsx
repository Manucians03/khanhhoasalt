"use client"

import { useParams } from "next/navigation"
import { useState } from "react"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import Breadcrumb from "@/components/ui/breadcrumb"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Package, Award, Truck, Shield, ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react"
import { useLanguage } from "@/components/providers/language-provider"
import { translations } from "@/lib/translations"
import Link from "next/link"

export default function ProductDetailPage() {
  const params = useParams()
  const { language } = useLanguage()
  const t = translations[language].products
  const slug = params.slug as string
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const getProductBySlug = (slug: string) => {
    const products = {
      "khanh-vinh-refined-salt": {
        id: 1,
        name: t.products['khanh-vinh-refined-salt'].name,
        category: t.products['khanh-vinh-refined-salt'].name,
        description: t.products['khanh-vinh-refined-salt'].usageText,
        images: [
          "/images/products/refined-3.jpg",
          "/images/products/refined-4.jpg",
          "/images/products/refined-1.jpg",
          "/images/products/refined-2.jpg",
        ],
        ingredients: t.products['khanh-vinh-refined-salt'].ingredientsText,
        status: t.products['khanh-vinh-refined-salt'].statusText,
        expiration: t.products['khanh-vinh-refined-salt'].expirationText,
        storage: t.products['khanh-vinh-refined-salt'].storageText,
        weight: t.products['khanh-vinh-refined-salt'].weightText,
        quality: t.products['khanh-vinh-refined-salt'].qualityText,
        certificate: t.products['khanh-vinh-refined-salt'].certificateText,
        applications: [
          language === "en" ? "Instant noodles" : "Mì ăn liền",
          language === "en" ? "Seasoning powder" : "Bột canh",
          language === "en" ? "Food service" : "Dịch vụ ăn uống",
          language === "en" ? "Bakery products" : "Sản phẩm bánh kẹo",
        ],
      },
      "khanh-vinh-dried-refined-salt": {
        id: 2,
        name: t.products['khanh-vinh-dried-refined-salt'].name,
        category: t.products['khanh-vinh-dried-refined-salt'].name,
        description: t.products['khanh-vinh-dried-refined-salt'].usageText,
        images: [
          "/images/products/dried-1.jpg",
          "/images/products/dried-2.jpg",
        ],
        ingredients: t.products['khanh-vinh-dried-refined-salt'].ingredientsText,
        status: t.products['khanh-vinh-dried-refined-salt'].statusText,
        expiration: t.products['khanh-vinh-dried-refined-salt'].expirationText,
        storage: t.products['khanh-vinh-dried-refined-salt'].storageText,
        weight: t.products['khanh-vinh-dried-refined-salt'].weightText,
        quality: t.products['khanh-vinh-dried-refined-salt'].qualityText,
        certificate: t.products['khanh-vinh-dried-refined-salt'].certificateText,
        applications: [
          language === "en" ? "Animal feed" : "Thức ăn gia súc",
          language === "en" ? "Industrial use" : "Sử dụng công nghiệp",
          language === "en" ? "Water treatment" : "Xử lý nước",
          language === "en" ? "Chemical industry" : "Công nghiệp hóa chất",
        ],
      },
      "khanh-vinh-iodised-salt": {
        id: 3,
        name: t.products['khanh-vinh-iodised-salt'].name,
        category: t.products['khanh-vinh-iodised-salt'].name,
        description: t.products['khanh-vinh-iodised-salt'].usageText,
        images: [
          "/images/products/iodised-1.jpg",
          "/images/products/iodised-2.jpg",
        ],
        ingredients: t.products['khanh-vinh-iodised-salt'].ingredientsText,
        status: t.products['khanh-vinh-iodised-salt'].statusText,
        expiration: t.products['khanh-vinh-iodised-salt'].expirationText,
        storage: t.products['khanh-vinh-iodised-salt'].storageText,
        weight: t.products['khanh-vinh-iodised-salt'].weightText,
        quality: t.products['khanh-vinh-iodised-salt'].qualityText,
        certificate: t.products['khanh-vinh-iodised-salt'].certificateText,
        applications: [
          language === "en" ? "Direct use" : "Sử dụng trực tiếp",
          language === "en" ? "Seasoning powder" : "Bột canh",
          language === "en" ? "Cooking" : "Nấu ăn",
          language === "en" ? "Bakery products" : "Sản phẩm bánh kẹo",
        ],
      },
      "khanh-vinh-iodised-salt-premium": {
        id: 4,
        name: t.products['khanh-vinh-iodised-salt-premium'].name,
        category: t.products['khanh-vinh-iodised-salt-premium'].name,
        description: t.products['khanh-vinh-iodised-salt-premium'].usageText,
        images: [
          "/images/products/iodised-premium-1.jpg",
          "/images/products/iodised-premium-2.jpg",
        ],
        ingredients: t.products['khanh-vinh-iodised-salt-premium'].ingredientsText,
        status: t.products['khanh-vinh-iodised-salt-premium'].statusText,
        expiration: t.products['khanh-vinh-iodised-salt-premium'].expirationText,
        storage: t.products['khanh-vinh-iodised-salt-premium'].storageText,
        weight: t.products['khanh-vinh-iodised-salt-premium'].weightText,
        quality: t.products['khanh-vinh-iodised-salt-premium'].qualityText,
        certificate: t.products['khanh-vinh-iodised-salt-premium'].certificateText,
        applications: [
          language === "en" ? "Direct use" : "Sử dụng trực tiếp",
          language === "en" ? "Seasoning powder" : "Bột canh",
          language === "en" ? "Cooking" : "Nấu ăn",
          language === "en" ? "Bakery products" : "Sản phẩm bánh kẹo",
        ],
      },
      "pure-coarse-salt": {
        id: 5,
        name: t.products['pure-coarse-salt'].name,
        category: t.products['pure-coarse-salt'].name,
        description: t.products['pure-coarse-salt'].usageText,
        images: [
          "/images/products/industrial-3.jpg",
          "/images/products/industrial-4.jpg",
          "/images/products/industrial-1.jpg",
          "/images/products/industrial-2.jpg",
        ],
        ingredients: t.products['pure-coarse-salt'].ingredientsText,
        status: t.products['pure-coarse-salt'].statusText,
        expiration: t.products['pure-coarse-salt'].expirationText,
        storage: t.products['pure-coarse-salt'].storageText,
        weight: t.products['pure-coarse-salt'].weightText,
        quality: t.products['pure-coarse-salt'].qualityText,
        certificate: t.products['pure-coarse-salt'].certificateText,
        applications: [
          language === "en" ? "Chemical industry" : "Công nghiệp hóa chất",
          language === "en" ? "Water treatment" : "Xử lý nước",
          language === "en" ? "Textile industry" : "Công nghiệp dệt may",
        ],
      },
      "industrial-coarse-salt": {
        id: 6,
        name: t.products['industrial-coarse-salt'].name,
        category: t.products['industrial-coarse-salt'].name,
        description: t.products['industrial-coarse-salt'].usageText,
        images: [
          "/images/products/coarse-3.jpg",
          "/images/products/coarse-4.jpg",
          "/images/products/coarse-1.jpg",
          "/images/products/coarse-2.jpg",
        ],
        ingredients: t.products['industrial-coarse-salt'].ingredientsText,
        status: t.products['industrial-coarse-salt'].statusText,
        expiration: t.products['industrial-coarse-salt'].expirationText,
        storage: t.products['industrial-coarse-salt'].storageText,
        weight: t.products['industrial-coarse-salt'].weightText,
        quality: t.products['industrial-coarse-salt'].qualityText,
        certificate: t.products['industrial-coarse-salt'].certificateText,
        applications: [
          language === "en" ? "Food processing" : "Chế biến thực phẩm",
          language === "en" ? "Textile industry" : "Công nghiệp dệt may",
          language === "en" ? "Chemical industry" : "Công nghiệp hóa chất",
        ],
      },
    }
    return products[slug as keyof typeof products] || null
  }

  const product = getProductBySlug(slug)

  if (!product) {
    return (
      <>
        <Header />
        <main className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
            <p className="text-muted-foreground mb-8">The product you're looking for doesn't exist.</p>
            <Button asChild>
              <Link href="/products">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Products
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length)
  }

  return (
    <>
      <Header />
      <main>
        <Breadcrumb heading={product.name} description={product.description} />

        <section className="py-20">
          <div className="container mx-auto px-4">
            {/* Back Button */}
            <div className="mb-8">
              <Button variant="outline" asChild>
                <Link href="/products">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  {language === "en" ? "Back to Products" : "Quay Lại Sản Phẩm"}
                </Link>
              </Button>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Product Image Carousel */}
              <div className="relative">
                <div className="relative w-full h-[450px] lg:h-[600px] rounded-lg shadow-lg overflow-hidden">
                  {product.images.map((image, index) => (
                    <img
                      key={index}
                      src={image || "/placeholder.svg"}
                      alt={`${product.name} ${index + 1}`}
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                        index === currentImageIndex ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  ))}

                  {/* Navigation Arrows */}
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="h-6 w-6 text-white" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors"
                    aria-label="Next image"
                  >
                    <ChevronRight className="h-6 w-6 text-white" />
                  </button>

                  {/* Dots Indicator */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                    {product.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentImageIndex ? "bg-white" : "bg-white/50"
                        }`}
                        aria-label={`Go to image ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>

                <div className="absolute top-4 left-4">
                  <Badge variant="secondary">{product.category}</Badge>
                </div>

                {/* Thumbnail Images */}
                <div className="flex gap-2 mt-4 overflow-x-auto">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                        index === currentImageIndex ? "border-primary" : "border-transparent"
                      }`}
                    >
                      <img
                        src={image || "/placeholder.svg"}
                        alt={`${product.name} thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Product Details */}
              <div className="space-y-8">
                <div>
                  <h1 className="text-3xl lg:text-4xl font-bold mb-4">{product.name}</h1>
                  <p className="text-lg text-muted-foreground">{product.description}</p>
                </div>

                {/* Specifications */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Package className="h-5 w-5 mr-2 text-primary" />
                      {language === "en" ? "Product Specifications" : "Thông Số Sản Phẩm"}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 gap-4">
                      <div>
                        <strong>{t.products.common.ingredients}</strong>
                        <p className="text-muted-foreground">{product.ingredients}</p>
                      </div>
                      <Separator />
                      <div>
                        <strong>{t.products.common.status}</strong>
                        <p className="text-muted-foreground">{product.status}</p>
                      </div>
                      <Separator />
                      <div>
                        <strong>{t.products.common.expiration}</strong>
                        <p className="text-muted-foreground">{product.expiration}</p>
                      </div>
                      <Separator />
                      <div>
                        <strong>{t.products.common.storage}</strong>
                        <p className="text-muted-foreground">{product.storage}</p>
                      </div>
                      <Separator />
                      <div>
                        <strong>{t.products.common.weight}</strong>
                        <p className="text-muted-foreground">{product.weight}</p>
                      </div>
                      <Separator />
                      <div>
                        <strong>{t.products.common.quality}</strong>
                        <p className="text-muted-foreground">{product.quality}</p>
                      </div>
                      <Separator />
                      <div>
                        <strong>{t.products.common.certificate}</strong>
                        <p className="text-muted-foreground">{product.certificate}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Applications */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Award className="h-5 w-5 mr-2 text-primary" />
                      {language === "en" ? "Applications" : "Ứng Dụng"}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {product.applications.map((app, index) => (
                        <Badge key={index} variant="outline">
                          {app}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild className="flex-1">
                    <Link href="/contact">{language === "en" ? "Contact Us" : "Liên Hệ"}</Link>
                  </Button>
                  <Button variant="outline" asChild className="flex-1">
                    <Link href="/products">{language === "en" ? "All Products" : "Tất Cả Sản Phẩm"}</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quality Assurance Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-12 text-center">
                <h3 className="text-2xl lg:text-3xl font-bold mb-6">
                  {language === "en" ? "Quality Assurance" : "Đảm Bảo Chất Lượng"}
                </h3>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="flex flex-col items-center">
                    <Shield className="h-12 w-12 mb-4 opacity-80" />
                    <h4 className="font-semibold mb-2">ISO 22000:2018</h4>
                    <p className="text-sm opacity-80">
                      {language === "en" ? "Food Safety Management" : "Quản Lý An Toàn Thực Phẩm"}
                    </p>
                  </div>
                  <div className="flex flex-col items-center">
                    <Award className="h-12 w-12 mb-4 opacity-80" />
                    <h4 className="font-semibold mb-2">HACCP</h4>
                    <p className="text-sm opacity-80">
                      {language === "en"
                        ? "Hazard Analysis Critical Control"
                        : "Phân Tích Mối Nguy Điểm Kiểm Soát Tới Hạn"}
                    </p>
                  </div>
                  <div className="flex flex-col items-center">
                    <Truck className="h-12 w-12 mb-4 opacity-80" />
                    <h4 className="font-semibold mb-2">GMP</h4>
                    <p className="text-sm opacity-80">
                      {language === "en" ? "Good Manufacturing Practice" : "Thực Hành Sản Xuất Tốt"}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
