import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { education } from "@/data/portfolio-data";
import { GraduationCap } from "lucide-react";
import Image from "next/image";

export function EducationSection() {
  return (
    <section id="education" className="py-16 md:py-24 bg-background/70">
      <div className="container mx-auto max-w-3xl px-4 relative">
        <h2 className="font-headline text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            Education
          </span>
        </h2>

        {/* Vertical timeline line */}
        <div className="absolute left-6 top-0 bottom-0 w-1 bg-primary/30 rounded"></div>

        <div className="flex flex-col space-y-12">
          {education.map((edu) => (
            <div key={edu.id} className="relative pl-16">
              {/* Timeline marker with bigger logo */}
              <div
                className="absolute left-0 top-4 bg-primary text-white rounded-full w-14 h-14 flex items-center justify-center shadow-md"
              >
                {edu.logoUrl ? (
                  <Image
                    src={edu.logoUrl}
                    alt={`${edu.institution} logo`}
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                  />
                ) : (
                  <GraduationCap className="w-8 h-8" />
                )}
              </div>

              <Card className="shadow-xl hover:shadow-primary/20 transition-shadow duration-300 overflow-hidden">
                <CardHeader className="bg-card-foreground/5 p-6">
                  <div className="flex flex-col">
                    <CardTitle className="font-headline text-xl text-primary">{edu.degree}</CardTitle>
                    {edu.major && (
                      <CardDescription className="text-base text-foreground/80">{edu.major}</CardDescription>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="font-semibold text-foreground/90">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground">{edu.period}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
