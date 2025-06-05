import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/components/providers/language-provider"
import { ThemeProvider } from "@/components/providers/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Khanh Hoa Salt Co., Ltd - Pure Salt for Vietnamese Health",
    template: "%s | Khanh Hoa Salt Co., Ltd",
  },
  description:
    "Premium quality salt products from Vietnam's finest salt fields. Specializing in refined salt, pure salt, industrial salt, and iodized salt with ISO 22000:2018 certification.",
  keywords: [
    "salt",
    "Vietnam salt",
    "refined salt",
    "pure salt",
    "industrial salt",
    "iodized salt",
    "Khanh Hoa",
    "food grade salt",
  ],
  authors: [{ name: "Khanh Hoa Salt Co., Ltd" }],
  creator: "Khanh Hoa Salt Co., Ltd",
  publisher: "Khanh Hoa Salt Co., Ltd",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://khanhhoasalt.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "vi-VN": "/vi-VN",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://khanhhoasalt.com",
    title: "Khanh Hoa Salt Co., Ltd - Pure Salt for Vietnamese Health",
    description: "Premium quality salt products from Vietnam's finest salt fields.",
    siteName: "Khanh Hoa Salt Co., Ltd",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Khanh Hoa Salt Products",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Khanh Hoa Salt Co., Ltd - Pure Salt for Vietnamese Health",
    description: "Premium quality salt products from Vietnam's finest salt fields.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Khanh Hoa Salt Co., Ltd",
              alternateName: "Công ty TNHH Muối Khánh Hoà",
              url: "https://khanhhoasalt.com",
              logo: "https://khanhhoasalt.com/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+84-225-3581589",
                contactType: "customer service",
                areaServed: "VN",
                availableLanguage: ["en", "vi"],
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: "Phu Hai, Anh Dung, Duong Kinh",
                addressLocality: "Hai Phong",
                addressCountry: "VN",
              },
              sameAs: ["https://facebook.com/khanhhoasalt", "https://linkedin.com/company/khanhhoasalt"],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange={false}>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
