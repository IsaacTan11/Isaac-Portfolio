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
        <div className="space-y-12 relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-border -translate-x-1/2 hidden md:block"></div>
          
          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative flex items-start gap-6 md:gap-8">
              {/* Icon and connector for mobile */}
              <div className="md:hidden flex flex-col items-center mt-1">
                <div className="bg-primary text-primary-foreground rounded-full p-2 shadow-md">
                  <Briefcase size={20} />
                </div>
                {index < experiences.length -1 && <div className="w-0.5 h-full bg-border mt-2 grow"></div>}
              </div>

              {/* Icon for desktop */}
              <div className={
                  `hidden md:flex absolute top-0 ${index % 2 === 0 ? 'left-1/2 -translate-x-[calc(50%+2.25rem)]' : 'left-1/2 translate-x-[calc(50%+0.25rem)]'}  
                   items-center justify-center w-10 h-10 bg-primary text-primary-foreground rounded-full shadow-lg z-10`
                }>
                <Briefcase size={20} />
              </div>

              <Card className={`w-full md:w-[calc(50%-2.5rem)] ${index % 2 === 0 ? 'md:ml-0' : 'md:ml-[calc(50%+2.5rem)]'} shadow-xl hover:shadow-primary/20 transition-shadow duration-300`}>
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="font-headline text-xl text-primary">{exp.role}</CardTitle>
                      <CardDescription className="text-base text-foreground/80">{exp.company}</CardDescription>
                    </div>
                    {exp.logoUrl && (
                       <Image src={exp.logoUrl} alt={`${exp.company} logo`} width={40} height={40} className="rounded-sm ml-4" data-ai-hint="company logo"/>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground pt-1">{exp.period}</p>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-outside space-y-1.5 pl-5 text-foreground/70">
                    {exp.description.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
