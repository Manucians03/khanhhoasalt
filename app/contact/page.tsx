"use client"

import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import Breadcrumb from "@/components/ui/breadcrumb"
import ContactContent from "@/components/sections/contact-content"
import { useLanguage } from "@/components/providers/language-provider"
import { translations } from "@/lib/translations"

export default function ContactPage() {
  const { language } = useLanguage()
  const t = translations[language].contact

  return (
    <>
      <Header />
      <main>
        <Breadcrumb heading={t.title} description={t.text} />
        <ContactContent />
      </main>
      <Footer />
    </>
  )
}
