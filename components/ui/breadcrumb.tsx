"use client"

import { useLanguage } from "@/components/providers/language-provider"

interface BreadcrumbProps {
  heading: string
  description?: string
  backgroundImage?: string
}

const Breadcrumb = ({ heading, description, backgroundImage }: BreadcrumbProps) => {
  const { language } = useLanguage()

  return (
    <div
      className="relative py-20 lg:py-32 bg-gradient-to-r from-primary to-primary/80 overflow-hidden"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative container mx-auto px-4 text-center">
        <h1 className="text-3xl lg:text-5xl font-bold text-white mb-4 animate-fade-in-up">{heading}</h1>
        {description && (
          <p className="text-lg lg:text-xl text-white/90 max-w-2xl mx-auto animate-fade-in-up">{description}</p>
        )}
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse" />
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-pulse delay-500" />
      </div>
    </div>
  )
}

export default Breadcrumb
