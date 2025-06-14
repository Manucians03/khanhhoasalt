"use client"
import Link from "next/link"
import { Phone, MapPin, Mail, Clock } from "lucide-react"
import { useLanguage } from "@/components/providers/language-provider"
import { translations } from "@/lib/translations"

const Footer = () => {
  const { language } = useLanguage()
  const t = translations[language].footer

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold text-primary mb-4">{t.name}</h3>
            <p className="text-muted-foreground mb-6 max-w-md">{t.saying}</p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="h-4 w-4 text-primary" />
                <a href={`tel:+842253581589`} className="hover:text-primary transition-colors">
                  {t.phoneText}
                </a>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="h-4 w-4 text-primary" />
                <a href={`mailto:thangkhanhhoa67@gmail.com`} className="hover:text-primary transition-colors">
                  {t.emailText}
                </a>
              </div>
              <div className="flex items-start space-x-3 text-sm">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <span className="text-muted-foreground">{t.addressText}</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Clock className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">
                  {language === "en"
                    ? "Mon - Fri: 8:00 - 17:00, Sat - Sun: 8:00 - 12:00"
                    : "Thứ 2 - Thứ 6: 8:00 - 17:00, Thứ 7 - CN: 8:00 - 12:00"}
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">{t.quickLinks}</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t.home}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t.about}
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t.products}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4">{t.ourProducts}</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/products/khanh-vinh-refined-salt" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t['khanh-vinh-refined-salt']}
                </Link>
              </li>
              <li>
                <Link href="/products/khanh-vinh-dried-refined-salt" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t['khanh-vinh-dried-refined-salt']}
                </Link>
              </li>
              <li>
                <Link href="/products/khanh-vinh-iodised-salt" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t['khanh-vinh-iodised-salt']}
                </Link>
              </li>
              <li>
                <Link href="/products/khanh-vinh-iodised-salt-premium" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t['khanh-vinh-iodised-salt-premium']}
                </Link>
              </li>
              <li>
                <Link href="/products/pure-coarse-salt" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t['pure-coarse-salt']}
                </Link>
              </li>
              <li>
                <Link href="/products/industrial-coarse-salt" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t['industrial-coarse-salt']}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">© 2025 Khanh Hoa Salt Co., Ltd. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
