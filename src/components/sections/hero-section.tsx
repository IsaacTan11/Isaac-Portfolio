"use client";

import { Button } from "@/components/ui/button";
import { studentInfo } from "@/data/portfolio-data";
import { ArrowDown, Download, Send } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center py-20 bg-gradient-to-br from-background via-background to-primary/10">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto max-w-4xl text-center px-4 z-10">
        <h1 className="font-headline text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            {studentInfo.name}
          </span>
        </h1>
        <p className="font-headline text-2xl sm:text-3xl text-foreground/90 mb-8">
          {studentInfo.title}
        </p>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto mb-12">
          {studentInfo.bio}
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transform hover:scale-105 transition-transform">
            <Link href="#projects">
              Experience
              <ArrowDown className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
       <style jsx global>{`
        .bg-grid-pattern {
          background-image: linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px);
          background-size: 2rem 2rem;
        }
      `}</style>
    </section>
  );
}
