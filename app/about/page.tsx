"use client"

import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import Breadcrumb from "@/components/ui/breadcrumb"
import AboutContent from "@/components/sections/about-content"
import { useLanguage } from "@/components/providers/language-provider"
import { translations } from "@/lib/translations"

export default function AboutPage() {
  const { language } = useLanguage()
  const t = translations[language].about

  return (
    <>
      <Header />
      <main>
        <Breadcrumb heading={t.title} description={t.description} />
        <AboutContent />
      </main>
      <Footer />
    </>
  )
}
