"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { MapPin, GraduationCap, Briefcase } from "lucide-react"

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-square max-w-md mx-auto lg:mx-0">
              {/* Decorative elements */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 rounded-full border border-dashed border-accent/20"
              />
              <div className="absolute inset-0 bg-accent/10 rounded-2xl rotate-6 blur-sm" />
              <div className="absolute inset-0 bg-card border border-border rounded-2xl overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-accent/5" />
                
                {/* Grid pattern overlay */}
                <div className="absolute inset-0 opacity-[0.03]" style={{
                  backgroundImage: 'linear-gradient(currentColor 1px, transparent 1px), linear-gradient(to right, currentColor 1px, transparent 1px)',
                  backgroundSize: '20px 20px'
                }} />
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    {/* Animated rings */}
                    <div className="relative w-40 h-40 mx-auto mb-6">
                      <motion.div
                        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.1, 0.3] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute inset-0 rounded-full bg-accent/20"
                      />
                      <motion.div
                        animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.2, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                        className="absolute inset-2 rounded-full bg-accent/30"
                      />
                      <div className="absolute inset-4 rounded-full bg-gradient-to-br from-accent/40 to-accent/20 flex items-center justify-center shadow-lg">
                        <span className="text-5xl font-bold text-foreground">JN</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">John Njoroge</h3>
                    <p className="text-sm text-muted-foreground mb-4">Full-Stack Engineer</p>
                    <div className="flex justify-center gap-2">
                      <span className="px-2 py-1 text-xs rounded-full bg-accent/10 text-accent">React</span>
                      <span className="px-2 py-1 text-xs rounded-full bg-accent/10 text-accent">Next.js</span>
                      <span className="px-2 py-1 text-xs rounded-full bg-accent/10 text-accent">TypeScript</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <span className="text-accent text-sm font-medium tracking-wider uppercase mb-4 block">
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
              Building digital experiences that make a difference
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                {`I'm a Software Engineer specializing in full-stack web and mobile application development. My focus is on building scalable, performant applications using modern technologies like React, Next.js, and React Native.`}
              </p>
              <p>
                With a strong foundation in frontend architecture and UI/UX principles, I create interfaces that are not only visually appealing but also accessible and intuitive. I believe in writing clean, maintainable code that stands the test of time.
              </p>
              <p>
                {`When I'm not coding, I'm exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.`}
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                <MapPin className="h-5 w-5 text-accent" />
                <div>
                  <p className="text-xs text-muted-foreground">Location</p>
                  <p className="text-sm font-medium text-foreground">Nairobi, Kenya</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                <GraduationCap className="h-5 w-5 text-accent" />
                <div>
                  <p className="text-xs text-muted-foreground">Education</p>
                  <p className="text-sm font-medium text-foreground">BSc Software Eng.</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                <Briefcase className="h-5 w-5 text-accent" />
                <div>
                  <p className="text-xs text-muted-foreground">Experience</p>
                  <p className="text-sm font-medium text-foreground">3+ Years</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
