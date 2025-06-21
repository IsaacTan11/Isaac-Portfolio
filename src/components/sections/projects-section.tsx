import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/portfolio-data";
import { Github, ExternalLink } from "lucide-react";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 md:py-24 bg-background/70">
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="font-headline text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            Experience
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="flex flex-col overflow-hidden shadow-xl hover:shadow-primary/20 transition-shadow duration-300 group">
              <div className="relative w-full h-48 overflow-hidden">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  data-ai-hint={project.imageHint}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="font-headline text-xl text-primary group-hover:text-accent transition-colors duration-300">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-foreground/90 mb-3 text-sm leading-relaxed line-clamp-20">{project.description}</CardDescription>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="pt-3">
                <div className="flex items-center gap-3">
                  {project.links.map((link) => {
                    const Icon = link.label === 'GitHub' ? Github : ExternalLink;
                    return (
                      <Button key={link.label} variant="outline" size="sm" asChild className="border-primary/50 text-primary/80 hover:bg-primary/10 hover:text-primary">
                        <Link href={link.href} target="_blank" rel="noopener noreferrer">
                          <Icon className="mr-2 h-4 w-4" />
                          {link.label}
                        </Link>
                      </Button>
                    );
                  })}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
