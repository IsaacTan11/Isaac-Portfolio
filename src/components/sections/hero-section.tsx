"use client";

import { Button } from "@/components/ui/button";
import { studentInfo } from "@/data/portfolio-data";
import { ArrowDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const GRID_COLS = 12;
const GRID_ROWS = 8;

export function HeroSection() {
  const [overlayVisible, setOverlayVisible] = useState(true);
  const [fadeStarted, setFadeStarted] = useState(false);

  useEffect(() => {
    // Start fade animation after 4 seconds
    const timer = setTimeout(() => {
      setFadeStarted(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!fadeStarted) return;

    let currentCol = 0;

    const fadeInColumn = () => {
      for (let row = 0; row < GRID_ROWS; row++) {
        const index = row * GRID_COLS + currentCol;
        const block = document.getElementById(`fade-block-${index}`);
        if (block) {
          block.style.transition = "opacity 0.4s ease";
          block.style.opacity = "1";
        }
      }
      currentCol++;
      if (currentCol < GRID_COLS) {
        setTimeout(fadeInColumn, 150);
      } else {
        // After all columns faded in, hide overlay
        setTimeout(() => setOverlayVisible(false), 400);
      }
    };

    fadeInColumn();
  }, [fadeStarted]);

  return (
    <>
      {/* Homepage always rendered below */}
      <section
        id="home"
        className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center py-20 bg-gradient-to-br from-background via-background to-primary/10"
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto max-w-4xl text-center px-4 z-10">
          {/* Circular Image */}
          <div className="flex justify-center mb-6">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary shadow-md">
              <Image
                src={studentInfo.imageUrl}
                alt={`${studentInfo.name} profile photo`}
                width={128}
                height={128}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

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
            <Button
              size="lg"
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transform hover:scale-105 transition-transform"
            >
              <Link href="#projects">
                Experience
                <ArrowDown className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
        <style jsx global>{`
          .bg-grid-pattern {
            background-image: linear-gradient(hsl(var(--border)) 1px, transparent 1px),
              linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px);
            background-size: 2rem 2rem;
          }
        `}</style>
      </section>

      {/* Quote overlay with fade blocks */}
      {overlayVisible && (
        <section
          className="fixed inset-0 flex items-center justify-center text-center px-4 bg-background z-50 select-none overflow-hidden"
          aria-label="Intro quote overlay"
        >
          <blockquote className="max-w-3xl text-4xl sm:text-5xl md:text-6xl font-medium text-foreground/90 relative z-0">
            “{studentInfo.quote}”
            <footer className="mt-6 text-xl text-muted-foreground">— {studentInfo.quoteAuthor}</footer>
          </blockquote>

          {/* Blocks overlay */}
          <div
            className="absolute top-0 left-0 w-full h-full grid"
            style={{
              gridTemplateColumns: `repeat(${GRID_COLS}, 1fr)`,
              gridTemplateRows: `repeat(${GRID_ROWS}, 1fr)`,
              pointerEvents: "none",
              zIndex: 10,
            }}
          >
            {Array(GRID_ROWS * GRID_COLS)
              .fill(null)
              .map((_, i) => (
                <div
                  key={i}
                  id={`fade-block-${i}`}
                  className="bg-background"
                  style={{
                    opacity: 0, // Start fully transparent
                    transition: "opacity 0.4s ease",
                  }}
                />
              ))}
          </div>

          {/* Skip fade arrow */}
          <button
  onClick={() => setFadeStarted(true)}
  className="absolute bottom-12 px-6 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition z-20 shadow-md"
>
  Proceed
</button>

        </section>
      )}
    </>
  );
}
