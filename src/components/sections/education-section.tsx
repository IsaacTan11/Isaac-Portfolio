import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { education } from "@/data/portfolio-data";
import { GraduationCap } from "lucide-react";
import Image from "next/image";

export function EducationSection() {
  return (
    <section id="education" className="py-16 md:py-24 bg-background/70">
      <div className="container mx-auto max-w-5xl px-4">
        <h2 className="font-headline text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            Education
          </span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu) => (
            <Card key={edu.id} className="shadow-xl hover:shadow-primary/20 transition-shadow duration-300 overflow-hidden">
              <CardHeader className="bg-card-foreground/5 p-6">
                <div className="flex items-center gap-4">
                  {edu.logoUrl ? (
                    <Image src={edu.logoUrl} alt={`${edu.institution} logo`} width={48} height={48} className="rounded-md" data-ai-hint="university logo" />
                  ) : (
                    <div className="p-3 bg-primary/10 rounded-md">
                       <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                  )}
                  <div>
                    <CardTitle className="font-headline text-xl text-primary">{edu.degree}</CardTitle>
                    {edu.major && <CardDescription className="text-base text-foreground/80">{edu.major}</CardDescription>}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <p className="font-semibold text-foreground/90">{edu.institution}</p>
                <p className="text-sm text-muted-foreground">{edu.period}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
