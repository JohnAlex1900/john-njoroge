"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { ExternalLink, Github, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "Gift and Sons International",
    description: "Corporate real estate website showcasing luxury properties with modern design, seamless navigation, and optimized performance for enhanced user engagement.",
    tech: ["React", "Tailwind CSS", "Node.js"],
    liveUrl: "https://giftandsonsinternational.com",
    image: "/projects/giftandsons.png",
    featured: true,
  },
  {
    title: "Sifabora Africa",
    description: "Online reputation management platform helping businesses monitor and improve their digital presence with real-time analytics and automated reporting.",
    tech: ["React", "Firebase", "Google Cloud"],
    liveUrl: "https://sifabora.africa",
    image: "/projects/sifabora.png",
    featured: true,
  },
  {
    title: "Caretaker App",
    description: "Mobile application for real estate management enabling property owners to track tenants, manage payments, and handle maintenance requests efficiently.",
    tech: ["React Native", "Firebase", "Expo"],
    liveUrl: "https://caretaker.co.ke",
    image: "/projects/caretaker.png",
    featured: true,
  },
  {
    title: "GoIT Consultants",
    description: "Professional business consulting website with modern UI, service showcases, and integrated contact forms for seamless client engagement.",
    tech: ["React", "JavaScript", "Vercel"],
    liveUrl: "https://go-it-one.vercel.app",
    image: "/projects/goit.png",
    featured: false,
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="py-24 md:py-32 bg-muted/30">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-medium tracking-wider uppercase mb-4 block">
            Selected Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of projects that showcase my expertise in building modern, scalable applications
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-8"
        >
          {projects.filter(p => p.featured).map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="group relative"
            >
              <div className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                {/* Project Image */}
                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative aspect-video rounded-xl overflow-hidden bg-card border border-border group/image"
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover/image:scale-105"
                    />
                    <div className="absolute inset-0 bg-foreground/0 group-hover/image:bg-foreground/10 transition-colors duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/image:opacity-100 transition-opacity duration-300">
                      <div className="p-3 rounded-full bg-background/90 backdrop-blur-sm">
                        <ExternalLink className="h-6 w-6 text-foreground" />
                      </div>
                    </div>
                  </Link>
                </div>

                {/* Project Info */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <span className="text-accent text-sm font-medium mb-2 block">
                    Featured Project
                  </span>
                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="font-mono text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center gap-4">
                    <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm" className="gap-2">
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16"
        >
          <h3 className="text-xl font-semibold text-foreground mb-8 text-center">
            Other Notable Projects
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.filter(p => !p.featured).map((project) => (
              <Link
                key={project.title}
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="p-6 rounded-xl bg-card border border-border hover:border-accent/50 transition-all duration-300 h-full">
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                      {project.title}
                    </h4>
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="font-mono text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-4">
            Want to see more of my work?
          </p>
          <Link href="https://github.com/JohnAlex1900" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg" className="gap-2">
              <Github className="h-5 w-5" />
              View GitHub Profile
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
