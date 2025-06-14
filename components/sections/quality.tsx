"use client"
import Link from "next/link"
import { useLanguage } from "@/components/providers/language-provider"
import { translations } from "@/lib/translations"
import { useEffect, useRef, useState } from "react"
import { Card } from "../ui/card"
import { FileText } from "lucide-react"
import { CardContent } from "../ui/card"
import { Button } from "../ui/button"

const Quality = () => {
    const { language } = useLanguage()
    const t = translations[language];

    const openPDF = (pdfPath: string) => {
        window.open(pdfPath, '_blank')
    }

    return (
        <div className="m-10 ml-20 mr-20">
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-12 text-center">
              <h3 className="text-2xl lg:text-3xl font-bold mb-6">
                {language === "en" ? "Quality Certification" : "Chứng Nhận Chất Lượng"}
              </h3>

              <div className="grid md:grid-cols-2 gap-8">
                {/* ISO Certificate */}
                <div className="flex flex-col items-center">
                  {/* ISO PDF Thumbnail */}
                  <div className="mb-4">
                    <div className="relative inline-block cursor-pointer" onClick={() => openPDF('/pdf/iso.pdf')}>
                      <img 
                        src="/pdf/iso-thumbnail.jpg" 
                        alt="ISO Certificate"
                        className="w-40 h-60 object-cover rounded-lg shadow-lg"
                      />
                      <div className="absolute inset-0 bg-black/40 rounded-lg flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                        <Button
                          size="sm"
                          variant="secondary"
                          className="text-xs pointer-events-none"
                        >
                          <FileText className="h-3 w-3 mr-1" />
                          {language === "en" ? "View PDF" : "Xem PDF"}
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <h4 className="font-semibold mb-2">
                    {language === "en" ? "ISO 22000:2018 Certificate" : "Chứng Nhận ISO 22000:2018"}
                  </h4>
                  <p className="text-sm opacity-80">
                    {language === "en" 
                        ? "Issued by NQA (United Kingdom) on 06/07/2022" 
                        : "Cấp bởi NQA (Vương Quốc Anh) ngày 06/07/2022"}
                  </p>
                </div>

                {/* OCOP Certificate */}
                <div className="flex flex-col items-center">
                  {/* OCOP PDF Thumbnail */}
                  <div className="mb-4">
                    <div className="relative inline-block cursor-pointer" onClick={() => openPDF('/pdf/ocop.pdf')}>
                      <img 
                        src="/pdf/ocop-thumbnail.jpg" 
                        alt="OCOP Certificate"
                        className="w-40 h-60 object-cover rounded-lg shadow-lg"
                      />
                      <div className="absolute inset-0 bg-black/40 rounded-lg flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                        <Button
                          size="sm"
                          variant="secondary"
                          className="text-xs pointer-events-none"
                        >
                          <FileText className="h-3 w-3 mr-1" />
                          {language === "en" ? "View PDF" : "Xem PDF"}
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <h4 className="font-semibold mb-2">
                    {language === "en" ? "OCOP Certificate" : "Chứng Nhận OCOP"}
                  </h4>
                  <p className="text-sm opacity-80">
                    {language === "en"
                      ? "Issued by Duong Kinh District, Hai Phong on 16/12/2024"
                      : "Cấp bởi UBND quận Dương Kinh, Hải Phòng ngày 16/12/2024"}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
    )
}

export default Quality
