"use client"

import Link from "next/link"
import { Github, Linkedin, Mail, Heart } from "lucide-react"

const footerLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
]

const socialLinks = [
  { name: "GitHub", href: "https://github.com/JohnAlex1900", icon: Github },
  { name: "LinkedIn", href: "https://linkedin.com/in/johnnjoroge", icon: Linkedin },
  { name: "Email", href: "mailto:johnirungu977@gmail.com", icon: Mail },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & Copyright */}
          <div>
            <Link
              href="/"
              className="text-xl font-bold text-foreground hover:text-accent transition-colors"
            >
              JN
            </Link>
            <p className="text-sm text-muted-foreground mt-2">
              Full-Stack Software Engineer
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex justify-end gap-4">
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <link.icon className="h-5 w-5" />
                <span className="sr-only">{link.name}</span>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} John Njoroge
          </p>
        </div>
      </div>
    </footer>
  )
}
