import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { certifications } from "@/data/portfolio-data";
import { Award } from "lucide-react";
import Image from "next/image";

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto max-w-5xl px-4">
        <h2 className="font-headline text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            Certifications
          </span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert) => (
            <Card key={cert.id} className="flex flex-col shadow-xl hover:shadow-primary/20 transition-shadow duration-300">
              <CardHeader className="flex-shrink-0">
                <div className="flex items-center gap-4 mb-2">
                  {cert.logoUrl ? (
                     <Image src={cert.logoUrl} alt={`${cert.issuingOrganization} logo`} width={40} height={40} className="rounded-md" data-ai-hint="organization logo"/>
                  ) : (
                    <div className="p-2.5 bg-primary/10 rounded-md">
                        <Award className="h-5 w-5 text-primary" />
                    </div>
                  )}
                  <CardTitle className="font-headline text-lg leading-tight text-primary">{cert.name}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-foreground/80">{cert.issuingOrganization}</CardDescription>
                <p className="text-sm text-muted-foreground mt-1">{cert.date}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
