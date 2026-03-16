"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { 
  Code2, 
  Server, 
  Smartphone, 
  Wrench,
  Figma,
  GitBranch,
  Globe,
  Zap
} from "lucide-react"

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code2,
    skills: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "JavaScript", level: 95 },
      { name: "Tailwind CSS", level: 90 },
      { name: "HTML5/CSS3", level: 95 },
    ],
  },
  {
    title: "Backend & Cloud",
    icon: Server,
    skills: [
      { name: "Node.js", level: 80 },
      { name: "Firebase", level: 85 },
      { name: "REST APIs", level: 90 },
      { name: "Google Cloud", level: 75 },
    ],
  },
  {
    title: "Mobile Development",
    icon: Smartphone,
    skills: [
      { name: "React Native", level: 85 },
      { name: "Expo", level: 80 },
      { name: "Mobile UI/UX", level: 85 },
    ],
  },
  {
    title: "Tools & Technologies",
    icon: Wrench,
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "Vercel", level: 90 },
      { name: "Figma", level: 80 },
      { name: "VS Code", level: 95 },
    ],
  },
]

const additionalSkills = [
  { name: "Responsive Design", icon: Globe },
  { name: "UI/UX Prototyping", icon: Figma },
  { name: "Performance Optimization", icon: Zap },
  { name: "Version Control", icon: GitBranch },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-24 md:py-32 bg-muted/30">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-medium tracking-wider uppercase mb-4 block">
            Technical Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The tools and technologies I use to bring ideas to life
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-6 mb-12"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="p-6 rounded-xl bg-card border border-border hover:border-accent/30 transition-colors duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-accent/10">
                  <category.icon className="h-5 w-5 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-foreground">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="h-full bg-accent rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-lg font-semibold text-foreground mb-6 text-center">
            Additional Expertise
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {additionalSkills.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border hover:border-accent/50 transition-colors"
              >
                <skill.icon className="h-4 w-4 text-accent" />
                <span className="text-sm text-foreground">{skill.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
