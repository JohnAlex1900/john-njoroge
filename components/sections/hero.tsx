"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowDown, Github, Download, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/10 via-background to-background" />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
        />
      </div>

      <div className="mx-auto max-w-6xl px-6 py-32 md:py-40">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              Available for opportunities
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 text-balance"
            >
              John Njoroge
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl text-accent font-medium mb-4"
            >
              Full-Stack Software Engineer
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed"
            >
              I build scalable web applications, modern interfaces, and high-performance digital platforms that users love.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="#projects">
                <Button size="lg" className="gap-2 bg-foreground text-background hover:bg-foreground/90">
                  View Projects
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="https://github.com/JohnAlex1900" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="gap-2">
                  <Github className="h-4 w-4" />
                  GitHub
                </Button>
              </Link>
              <Link href="/resume.pdf" target="_blank">
                <Button size="lg" variant="ghost" className="gap-2 text-muted-foreground">
                  <Download className="h-4 w-4" />
                  Resume
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Right Column - Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Code Window Mockup */}
              <div className="absolute inset-0 rounded-2xl bg-card border border-border shadow-2xl overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/50">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-2 text-xs text-muted-foreground font-mono">portfolio.tsx</span>
                </div>
                <div className="p-4 font-mono text-sm">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                  >
                    <span className="text-accent">const</span>{" "}
                    <span className="text-foreground">developer</span>{" "}
                    <span className="text-muted-foreground">=</span>{" "}
                    <span className="text-accent">{"{"}</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="pl-4"
                  >
                    <span className="text-muted-foreground">name:</span>{" "}
                    <span className="text-green-400">{'"John Njoroge"'}</span>,
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.5 }}
                    className="pl-4"
                  >
                    <span className="text-muted-foreground">role:</span>{" "}
                    <span className="text-green-400">{'"Full-Stack Engineer"'}</span>,
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.4, duration: 0.5 }}
                    className="pl-4"
                  >
                    <span className="text-muted-foreground">skills:</span>{" "}
                    <span className="text-accent">[</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.6, duration: 0.5 }}
                    className="pl-8"
                  >
                    <span className="text-green-400">{'"React"'}</span>,{" "}
                    <span className="text-green-400">{'"Next.js"'}</span>,
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.8, duration: 0.5 }}
                    className="pl-8"
                  >
                    <span className="text-green-400">{'"TypeScript"'}</span>,{" "}
                    <span className="text-green-400">{'"Node.js"'}</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 0.5 }}
                    className="pl-4"
                  >
                    <span className="text-accent">]</span>,
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.2, duration: 0.5 }}
                    className="pl-4"
                  >
                    <span className="text-muted-foreground">passion:</span>{" "}
                    <span className="text-green-400">{'"Building great products"'}</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.4, duration: 0.5 }}
                  >
                    <span className="text-accent">{"}"}</span>;
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="h-5 w-5 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
