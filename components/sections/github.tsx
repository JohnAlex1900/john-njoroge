"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import { Github, Star, GitFork, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const repositories = [
  {
    name: "gift-and-sons",
    description: "Real estate corporate website showcasing luxury property listings and investment opportunities",
    language: "TypeScript",
    stars: 8,
    forks: 2,
  },
  {
    name: "sifabora",
    description: "Online reputation management platform with analytics dashboard and monitoring tools",
    language: "TypeScript",
    stars: 12,
    forks: 4,
  },
  {
    name: "Startech-Softwares",
    description: "Business consulting and software solutions company website with service showcases",
    language: "JavaScript",
    stars: 6,
    forks: 1,
  },
]

const languageColors: Record<string, string> = {
  TypeScript: "bg-blue-500",
  JavaScript: "bg-yellow-500",
  Python: "bg-green-500",
}

export function GitHubSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="github" className="py-24 md:py-32 bg-muted/30">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-medium tracking-wider uppercase mb-4 block">
            Open Source
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            GitHub Activity
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Check out my open-source contributions and personal projects
          </p>
        </motion.div>

        <div ref={ref} className="grid md:grid-cols-3 gap-6 mb-12">
          {repositories.map((repo, index) => (
            <motion.div
              key={repo.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={`https://github.com/JohnAlex1900/${repo.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group block h-full"
              >
                <div className="p-6 rounded-xl bg-card border border-border hover:border-accent/50 transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-3">
                    <Github className="h-6 w-6 text-muted-foreground" />
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors mb-2">
                    {repo.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-grow">
                    {repo.description}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <span className={`w-3 h-3 rounded-full ${languageColors[repo.language] || "bg-gray-500"}`} />
                      <span>{repo.language}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4" />
                      <span>{repo.stars}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <GitFork className="h-4 w-4" />
                      <span>{repo.forks}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Link href="https://github.com/JohnAlex1900" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="gap-2 bg-foreground text-background hover:bg-foreground/90">
              <Github className="h-5 w-5" />
              View All Repositories
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
