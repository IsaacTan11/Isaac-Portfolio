import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { experiences } from "@/data/portfolio-data";
import { Briefcase } from "lucide-react";
import Image from "next/image";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto max-w-5xl px-4">
        <h2 className="font-headline text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            Projects
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp) => (
            <Card
              key={exp.id}
              className="shadow-xl hover:shadow-primary/20 transition-shadow duration-300"
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="font-headline text-xl text-primary">{exp.role}</CardTitle>
                    <CardDescription className="text-base text-foreground/80">{exp.company}</CardDescription>
                  </div>
                  {exp.logoUrl && (
                    <Image
                      src={exp.logoUrl}
                      alt={`${exp.company} logo`}
                      width={40}
                      height={40}
                      className="rounded-sm ml-4"
                    />
                  )}
                </div>
                <p className="text-sm text-muted-foreground pt-1">{exp.period}</p>
              </CardHeader>
              <CardContent>
                {/* Original description */}
                <ul className="list-disc list-outside space-y-1.5 pl-5 text-foreground/70">
                  {exp.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>

                {/* WHAT I LEARNT section as paragraphs */}
                {exp.learnedDescription && (
                  <>
                    <h4 className="mt-6 text-lg font-semibold text-primary text-center tracking-widest">
                      WHAT I LEARNT:
                    </h4>
                    <div className="mt-3 text-foreground/80 space-y-4 px-5">
                      {Array.isArray(exp.learnedDescription)
                        ? exp.learnedDescription.map((para, idx) => (
                            <p key={idx}>{para}</p>
                          ))
                        : <p>{exp.learnedDescription}</p>}
                    </div>
                  </>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
