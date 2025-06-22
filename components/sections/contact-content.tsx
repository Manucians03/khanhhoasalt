"use client"
import { useState } from "react"
import type React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock, Send, MessageSquare } from "lucide-react"
import { useLanguage } from "@/components/providers/language-provider"
import { translations } from "@/lib/translations"

const ContactContent = () => {
  const { language } = useLanguage()
  const t = translations[language].contact

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    alert(language === "en" ? "Message sent successfully!" : "Tin nhắn đã được gửi thành công!")
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <MessageSquare className="h-6 w-6 mr-3 text-primary" />
                  {language === "en" ? "Send Us A Message" : "Gửi Tin Nhắn Cho Chúng Tôi"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      name="name"
                      placeholder={language === "en" ? "Your Name" : "Họ và Tên"}
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    <Input
                      name="email"
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <Input
                    name="subject"
                    placeholder={language === "en" ? "Subject" : "Tiêu Đề"}
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                  <Textarea
                    name="message"
                    placeholder={language === "en" ? "Your Message" : "Nội Dung Tin Nhắn"}
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                  <Button type="submit" className="w-full group">
                    <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    {language === "en" ? "Send Message" : "Gửi Tin Nhắn"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>{language === "en" ? "Contact Information" : "Thông Tin Liên Hệ"}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Phone className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium mb-1">{language === "en" ? "Phone" : "Điện Thoại"}</h4>
                    <a href="tel:+842253581589" className="text-muted-foreground hover:text-primary">
                      (+84) 2253-581-589 - (+84) 919-795-589
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <a href="mailto:phangkhanhhoa@gmail.com" className="text-muted-foreground hover:text-primary">
                      phangkhanhhoa@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium mb-1">{language === "en" ? "Address" : "Địa Chỉ"}</h4>
                    <p className="text-muted-foreground">{language === "en" ? "Phu Hai, Anh Dung, Duong Kinh, Hai Phong, Vietnam" : "Khu Phú Hải, phường Anh Dũng, quận Dương Kinh, Thành phố Hải Phòng, Việt Nam"}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium mb-1">{language === "en" ? "Business Hours" : "Giờ Làm Việc"}</h4>
                    <p className="text-muted-foreground">
                      {language === "en" ? "Monday - Friday: 8:00 - 17:00, Saturday - Sunday: 8:00 - 12:00" : "Thứ Hai - Thứ Sáu: 8:00 - 17:00, Thứ Bảy - Chủ Nhật: 8:00 - 12:00"}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Map */}
            <Card>
              <CardContent className="p-0">
                <div className="h-64 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3729.253486672153!2d106.70244699999999!3d20.821467999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314a71006adfcba9%3A0xdf53d73f57a2e681!2zQ8O0bmcgdHkgTXXhu5FpIEtow6FuaCBIb8Og!5e0!3m2!1sen!2sus!4v1746935840673!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactContent
