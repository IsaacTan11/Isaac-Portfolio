"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Mountain } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { navItems, studentInfo } from '@/data/portfolio-data';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      let currentSection = '';
      navItems.forEach(item => {
        const section = document.getElementById(item.href.substring(1));
        if (section && section.offsetTop <= window.scrollY + 100) { // Adjust offset as needed
          currentSection = item.href;
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Set initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const NavLinks = ({ onItemClick }: { onItemClick?: () => void }) => (
    <>
      {navItems.map((item) => (
        <Button
          key={item.label}
          variant="ghost"
          asChild
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            activeSection === item.href ? "text-primary" : "text-foreground/80"
          )}
          onClick={onItemClick}
        >
          <Link href={item.href}>{item.label}</Link>
        </Button>
      ))}
    </>
  );

  const nameParts = studentInfo.name.split(' ');
  const firstName = nameParts[0];
  const lastName = nameParts.slice(1).join(' ');

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "bg-background/90 shadow-lg backdrop-blur-sm" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="#home" className="flex items-center gap-2">
          <Mountain className="h-8 w-8 text-primary" />
          <span className="font-headline text-xl font-bold text-primary">
            {firstName}
            {lastName && <span className="text-accent"> {lastName}</span>}
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-2">
          <NavLinks />
        </nav>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-background p-6">
              <div className="mb-8 flex items-center justify-between">
                <Link href="#home" className="flex items-center gap-2">
                   <Mountain className="h-7 w-7 text-primary" />
                   <span className="font-headline text-lg font-bold text-primary">
                     {firstName}
                     {lastName && <span className="text-accent"> {lastName}</span>}
                   </span>
                </Link>
                <SheetTrigger asChild>
                   <Button variant="ghost" size="icon" className="-mr-2">
                     <X className="h-6 w-6" />
                     <span className="sr-only">Close menu</span>
                   </Button>
                </SheetTrigger>
              </div>
              <nav className="flex flex-col space-y-3">
                <NavLinks onItemClick={() => document.querySelector<HTMLButtonElement>('[data-radix-dialog-close]')?.click()} />
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
