"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"
import { useLanguage } from "@/components/providers/language-provider"
import { translations } from "@/lib/translations"

const Contact = () => {
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

    // Send email to admin
    const adminEmail = "phangkhanhhoa@gmail.com"
    const subject = "New message from " + formData.name
    const message = "Name: " + formData.name + "\nEmail: " + formData.email + "\nSubject: " + formData.subject + "\nMessage: " + formData.message
    const mailtoLink = `mailto:${adminEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`
    window.location.href = mailtoLink

    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            {language === "en" ? "Get In Touch" : "Liên Hệ"}
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">{t.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.text}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>{language === "en" ? "Send us a message" : "Gửi tin nhắn cho chúng tôi"}</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      name="name"
                      placeholder={language === "en" ? "Your Name" : "Họ và Tên"}
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
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
                  rows={5}
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

          {/* Contact Info */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6">
                  {language === "en" ? "Contact Information" : "Thông Tin Liên Hệ"}
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium">{language === "en" ? "Phone" : "Điện Thoại"}</div>
                      <a href="tel:+842253581589" className="text-muted-foreground hover:text-primary">
                        (+84) 2253-581-589 - (+84) 919-795-589
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium">Email</div>
                      <a href="mailto:phangkhanhhoa@gmail.com" className="text-muted-foreground hover:text-primary">
                        phangkhanhhoa@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <div className="font-medium">{language === "en" ? "Address" : "Địa Chỉ"}</div>
                      <div className="text-muted-foreground">{language === "en" ? "Phu Hai, Anh Dung, Duong Kinh, Hai Phong, Vietnam" : "Khu Phú Hải, phường Anh Dũng, quận Dương Kinh, Thành phố Hải Phòng, Việt Nam"}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium">{language === "en" ? "Business Hours" : "Giờ Làm Việc"}</div>
                      <div className="text-muted-foreground">
                        {language === "en" ? "Mon - Fri: 8:00 - 17:00, Sat - Sun: 8:00 - 12:00" : "Thứ 2 - Thứ 6: 8:00 - 17:00, Thứ 7 - Chủ Nhật: 8:00 - 12:00"}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Map */}
            <Card>
              <CardContent className="p-0">
                <div className="h-64 bg-muted rounded-lg overflow-hidden">
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

export default Contact
