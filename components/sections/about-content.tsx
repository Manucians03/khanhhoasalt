"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Target, Eye, Award, Globe } from "lucide-react"
import { useLanguage } from "@/components/providers/language-provider"
import { translations } from "@/lib/translations"
import CoreValues from "./core-values"

const AboutContent = () => {
  const { language } = useLanguage()
  const t = translations[language].about

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 space-y-20">

        {/* Mission, Vision, Values */}
        <div className="grid lg:grid-cols-3 gap-8">
          <Card className="text-center hover-lift">
            <CardContent className="p-8">
              <Target className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">{t.items.mission.title}</h3>
              <p className="text-muted-foreground">
                {t.items.mission.description}
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover-lift">
            <CardContent className="p-8">
              <Eye className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">{t.items.vision.title}</h3>
              <p className="text-muted-foreground">
                {t.items.vision.description}
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover-lift">
            <CardContent className="p-8">
              <Award className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">{t.items.history.title}</h3>
              <p className="text-muted-foreground">
                {t.items.history.description}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Core Values */}
        <CoreValues />

        {/* Company Milestones */}
        <div>
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              {language === "en" ? "Our Journey" : "Hành Trình"}
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold">
              {language === "en" ? "Company Milestones" : "Các Cột Mốc Quan Trọng"}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.milestones?.map((milestone, index) => (
              <Card key={index} className="text-center hover-lift">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">{milestone.year}</div>
                  <h4 className="font-semibold mb-2">{milestone.title}</h4>
                  <p className="text-sm text-muted-foreground">{milestone.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Leadership Team */}
        <div>
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              {t.ourTeamBadge}
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              {t.ourTeamTitle}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t.ourTeamDescription}
            </p>
          </div>

          <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
            {t.ourTeamMembers?.map((member, index) => (
              <Card key={index} className="text-center hover-lift">
                <CardContent className="p-8">
                  <Avatar className="w-24 h-24 mx-auto mb-4">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback>
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.position}</p>
                  <p className="text-sm text-muted-foreground">
                    {language === "en"
                      ? "Leading the company with 20+ years of experience"
                      : "Lãnh đạo công ty với hơn 20 năm kinh nghiệm"}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <Card className="bg-primary text-primary-foreground text-center">
          <CardContent className="p-12">
            <Globe className="h-16 w-16 mx-auto mb-6 opacity-80" />
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              {t.contactTitle}
            </h3>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              {t.contactDescription}
            </p>
            <Button variant="secondary" size="lg">
              {t.contactButton}
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default AboutContent
