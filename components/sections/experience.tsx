"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    company: "Gift and Sons International",
    role: "Full-Stack Web Developer",
    period: "2024 - Present",
    description: "Led the development of a corporate real estate platform, implementing modern React architecture and optimizing for performance and SEO.",
    skills: ["React", "Node.js", "Tailwind CSS", "SEO"],
  },
  {
    company: "Sifabora Africa",
    role: "Frontend Web Developer",
    period: "2023 - 2024",
    description: "Built a reputation management dashboard with real-time analytics, integrating Firebase for data persistence and Google Cloud for scalable infrastructure.",
    skills: ["React", "Firebase", "Google Cloud", "Analytics"],
  },
  {
    company: "Caretaker App",
    role: "Mobile App Frontend Developer",
    period: "2023 - Present",
    description: "Developed cross-platform mobile application for property management using React Native, focusing on intuitive UX and offline-first architecture.",
    skills: ["React Native", "Expo", "Mobile UI/UX"],
  },
  {
    company: "Taxtech Africa",
    role: "Technical SEO & Web Performance Specialist",
    period: "2022 - 2023",
    description: "Optimized web properties for search engines and performance, achieving significant improvements in Core Web Vitals and organic traffic.",
    skills: ["Technical SEO", "Web Performance", "Analytics"],
  },
  {
    company: "GoIT Consultants",
    role: "Full-Stack Web Developer",
    period: "2022 - 2023",
    description: "Designed and developed a business consulting website with modern UI patterns, integrated contact systems, and optimized deployment pipelines.",
    skills: ["React", "JavaScript", "Vercel", "UI Design"],
  },
]

export function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-medium tracking-wider uppercase mb-4 block">
            Career Journey
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Work Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A timeline of my professional experience building production applications
          </p>
        </motion.div>

        <div ref={ref} className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative grid md:grid-cols-2 gap-8 ${
                  index % 2 === 0 ? "" : "md:grid-flow-dense"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 rounded-full bg-accent -translate-x-1/2 md:-translate-x-1/2 ring-4 ring-background" />

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${
                    index % 2 === 0
                      ? "md:pr-12 md:text-right"
                      : "md:col-start-2 md:pl-12"
                  }`}
                >
                  <span className="text-sm text-accent font-medium">{exp.period}</span>
                  <h3 className="text-xl font-bold text-foreground mt-1">{exp.role}</h3>
                  <p className="text-muted-foreground font-medium">{exp.company}</p>
                  <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
                    {exp.description}
                  </p>
                  <div
                    className={`flex flex-wrap gap-2 mt-4 ${
                      index % 2 === 0 ? "md:justify-end" : ""
                    }`}
                  >
                    {exp.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="font-mono text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Empty Column for Timeline */}
                <div className={index % 2 === 0 ? "hidden md:block md:col-start-2" : "hidden md:block md:col-start-1 md:row-start-1"} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
