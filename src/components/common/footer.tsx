import Link from "next/link";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { studentInfo } from "@/data/portfolio-data";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { Icon: Github, href: "#", label: "GitHub" },
    { Icon: Linkedin, href: "#", label: "LinkedIn" },
    { Icon: Twitter, href: "#", label: "Twitter" },
    { Icon: Mail, href: "mailto:placeholder@example.com", label: "Email" },
  ];

  return (
    <footer className="bg-card py-12">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center items-center space-x-4 mb-6">
          {socialLinks.map((social) => (
            <Button
              key={social.label}
              variant="ghost"
              size="icon"
              asChild
              className="text-muted-foreground hover:text-primary rounded-full"
            >
              <Link href={social.href} target={social.label !== 'Email' ? '_blank' : undefined} rel={social.label !== 'Email' ? "noopener noreferrer" : undefined} aria-label={social.label}>
                <social.Icon className="h-6 w-6" />
              </Link>
            </Button>
          ))}
        </div>
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} {studentInfo.name}. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground/70 mt-1">
          Built with Next.js & Tailwind CSS. Designed with passion.
        </p>
      </div>
    </footer>
  );
}
