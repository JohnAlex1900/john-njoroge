"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import Link from "next/link"
import { Mail, Github, Linkedin, Send, MapPin, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/JohnAlex1900",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/johnnjoroge",
    icon: Linkedin,
  },
  {
    name: "Email",
    href: "mailto:johnirungu977@gmail.com",
    icon: Mail,
  },
]

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-medium tracking-wider uppercase mb-4 block">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {`Let's Work Together`}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {`Have a project in mind or want to discuss opportunities? I'd love to hear from you.`}
          </p>
        </motion.div>

        <div ref={ref} className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="p-8 rounded-2xl bg-card border border-border">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent/20 flex items-center justify-center">
                    <Send className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-muted-foreground">
                    {`Thanks for reaching out. I'll get back to you soon.`}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        required
                        className="bg-background"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        required
                        className="bg-background"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Project Inquiry"
                      required
                      className="bg-background"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project..."
                      rows={5}
                      required
                      className="bg-background resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full gap-2 bg-foreground text-background hover:bg-foreground/90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col justify-center"
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-accent/10">
                      <Mail className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <a
                        href="mailto:johnirungu977@gmail.com"
                        className="text-foreground hover:text-accent transition-colors"
                      >
                        johnirungu977@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-accent/10">
                      <MapPin className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="text-foreground">Nairobi, Kenya</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Connect With Me
                </h3>
                <div className="flex gap-4">
                  {socialLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group"
                    >
                      <div className="p-4 rounded-xl bg-card border border-border hover:border-accent/50 hover:bg-accent/5 transition-all duration-300">
                        <link.icon className="h-6 w-6 text-muted-foreground group-hover:text-accent transition-colors" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-xl bg-accent/10 border border-accent/20">
                <div className="flex items-start gap-4">
                  <div className="relative flex h-3 w-3 mt-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">
                      Currently available for freelance work
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {`I'm open to discussing new projects and opportunities.`}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
