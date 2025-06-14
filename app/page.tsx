import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import Hero from "@/components/sections/hero"
import Products from "@/components/sections/products"
import CoreValues from "@/components/sections/core-values"
import Partners from "@/components/sections/partners"
import Contact from "@/components/sections/contact"
import Quality from "@/components/sections/quality"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Products />
        <Partners />
        <Quality />
        <CoreValues />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
