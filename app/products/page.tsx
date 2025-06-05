"use client"

import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import Breadcrumb from "@/components/ui/breadcrumb"
import ProductsContent from "@/components/sections/products-content"
import { useLanguage } from "@/components/providers/language-provider"
import { translations } from "@/lib/translations"

export default function ProductsPage() {
  const { language } = useLanguage()
  const t = translations[language].products

  return (
    <>
      <Header />
      <main>
        <Breadcrumb heading={t.title} description={t.text} />
        <ProductsContent />
      </main>
      <Footer />
    </>
  )
}
