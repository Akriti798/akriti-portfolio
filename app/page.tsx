"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Github,
  Linkedin,
  Mail,
  Download,
  ExternalLink,
  Code,
  Brain,
  Shield,
  Award,
  Calendar,
  Users,
  Target,
  Zap,
  Star,
  Trophy,
  BookOpen,
  Send,
} from "lucide-react"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero")
  const { scrollYProgress } = useScroll()
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "About", "Education", "Skills", "Experience", "Projects", "Achievements", "Certificates", "Contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Navigation */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 glass-strong"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <motion.div className="text-xl font-bold text-primary" whileHover={{ scale: 1.05 }}>
              AS
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {["About", "Skills", "Experience", "Projects", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-accent ${
                    activeSection === item.toLowerCase() ? "text-accent" : "text-foreground"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <motion.div className="absolute inset-0 opacity-20" style={{ y: backgroundY }}>
          <div className="absolute top-20 left-20 w-72 h-72 bg-accent/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        </motion.div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 text-balance"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Akriti Shrivastava
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-muted-foreground mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Computer Science Engineer | Software Developer | Problem Solver
            </motion.p>

            <motion.p
              className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              "Building intelligent systems, solving real-world problems, and coding the future."
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {/* <Button className="neon-glow-hover">
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button> */}
              <Button variant="outline" onClick={() => scrollToSection("contact")} className="neon-glow-hover">
                <Mail className="w-4 h-4 mr-2" />
                Contact Me
              </Button>
              
              <a
  href="https://github.com/Akriti798"   // replace with your GitHub link
  target="_blank"
  rel="noopener noreferrer"
>
  <Button variant="outline" className="neon-glow-hover bg-transparent">
    <Github className="w-4 h-4 mr-2" />
    GitHub
  </Button>
</a>
              <a
  href="https://www.linkedin.com/in/akritishrivastava798/"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button variant="outline" className="neon-glow-hover bg-transparent">
    <Linkedin className="w-4 h-4 mr-2" />
    LinkedIn
  </Button>
</a>
 <a
  href="https://leetcode.com/u/Akriti_shrivastava/"   // replace with your GitHub link
  target="_blank"
  rel="noopener noreferrer"
>
  <Button variant="outline" className="neon-glow-hover bg-transparent">
                  <Code className="w-4 h-4 mr-2" />
                  LeetCode
                </Button>
</a>
 <a
  href="https://www.geeksforgeeks.org/user/akritishrivastava19/"   // replace with your GitHub link
  target="_blank"
  rel="noopener noreferrer"
>
  <Button variant="outline" className="neon-glow-hover bg-transparent">
    <Code className="w-4 h-4 mr-2" />
    GFG
  </Button>
</a>


            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="glass rounded-2xl p-8 neon-glow-hover">
                <img
                  src="/Akriti-photo.jpg"
                  alt="Akriti Shrivastava"
                  className="w-64 h-64 rounded-full mx-auto mb-6 object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate Computer Science Engineer with skills in Frontend development, cybersecurity, and problem solving. My journey spans from building real-time DDoS detection systems at DRDO to winning national
                hackathons.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-accent" />
                  <span>DRDO Intern - AI-powered DDoS Detection (90%+ accuracy)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Trophy className="w-5 h-5 text-accent" />
                  <span>Smart India Hackathon Winner 2024 (Delhi, India)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-accent" />
                  <span>Technical Team Lead at InspireX E-Cell GGCT</span>
                </div>
                <div className="flex items-center gap-3">
                  <Star className="w-5 h-5 text-accent" />
                  <span>Campus Ambassador at Girlscript Summer of Code</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


       {/* Educational Qualifications Section */}
      <section id="education" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Educational Qualifications</h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                degree: "Bachelor of Technology (B.Tech)",
                field: "Computer Science Engineering",
                institution: "Gyan Ganga College of Technology",
                period: "2023 - 2027",
                grade: "CGPA: 8/10",
                icon: BookOpen,
              },
              {
                degree: "Higher Secondary (12th)",
                field: "Science (PCM)",
                institution: "Pt.L.S.Jha Govt. Model High School of Excellence",
                period: "2022 - 2023",
                grade: "Percentage: 86.6%",
                icon: Award,
              },
              {
                degree: "Secondary (10th)",
                // field: "All Subjects",
                institution: "Pt.L.S.Jha Govt. Model High School of Excellence",
                period: "2020 - 2021",
                grade: "Percentage: 93.4%",
                icon: Star,
              },
            ].map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="glass neon-glow-hover">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <edu.icon className="w-8 h-8 text-accent" />
                      <div className="flex-1">
                        <CardTitle className="text-xl">{edu.degree}</CardTitle>
                        <CardDescription className="text-lg font-medium text-foreground/80">
                          {edu.field}
                        </CardDescription>
                        <CardDescription className="flex items-center gap-2 mt-1">
                          <Calendar className="w-4 h-4" />
                          {edu.period}
                        </CardDescription>
                      </div>
                      <div className="text-right">
                        <Badge variant="secondary" className="text-sm font-semibold">
                          {edu.grade}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground font-medium">{edu.institution}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Skills & Expertise</h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Programming & Frameworks",
                icon: Code,
                skills: ["C++", "Python", "Tailwind CSS", "JavaScript", "Reactjs", "Node.js"],
              },
              {
                title: "Tools & Platforms",
                icon: Zap,
                skills: ["Google Cloud Platform", "GitHub",  "Netlify",  "Framer", "REST APIs", "Docker",  "Figma"],
              },
              {
                title: "Soft Skills",
                icon: Brain,
                skills: ["Leadership", "Problem Solving", "Team Management", "Communication", "Innovation"],
              },
            ].map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="glass neon-glow-hover h-full">
                  <CardHeader className="text-center">
                    <category.icon className="w-12 h-12 text-accent mx-auto mb-4" />
                    <CardTitle>{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="neon-glow-hover">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Experience</h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                title: "DRDO (SAG - Scientific Analysis Group) Intern",
                period: "July 2025 - Present",
                description:
                  "Built real-time DDoS detection system with 90%+ accuracy using AI and machine learning algorithms.",
                icon: Shield,
              },
              {
                title: "Technical Team Lead - InspireX E-Cell GGCT",
                company: "InspireX E-Cell, GGCT",
                period: "2025 - Present",
                description:
                  "Leading technical initiatives and managing development teams for entrepreneurship cell projects and events.",
                icon: Users,
              },
              // {
              //   title: "Google Cloud Facilitator Program",
              //   period: "2025",
              //   description: "Completed 230+ labs and earned 65+ badges, facilitating cloud computing education.",
              //   icon: BookOpen,
              //   link: "https://www.cloudskillsboost.google/public_profiles/68ce9607-75e9-4554-9934-9058d89382cb"
              // },
              {
  title: "Google Cloud Facilitator Program",
  period: "2025",
  description: (
    <>
      Completed 230+ labs and earned 65+ badges, facilitating cloud computing education.{" "}
      <a
        href="https://www.cloudskillsboost.google/public_profiles/68ce9607-75e9-4554-9934-9058d89382cb"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        See Profile
      </a>
    </>
  ),
  icon: BookOpen,
}

            ].map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="glass neon-glow-hover">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <exp.icon className="w-8 h-8 text-accent" />
                      <div>
                        <CardTitle>{exp.title}</CardTitle>
                        <CardDescription className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{exp.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "SECUREOPS",
                description:
                  "Real-Time DDoS Protection system with live dashboard and AI-based detection capabilities.",
                tech: ["Python", "Machine Learning", "React", "Real-time Analytics"],
                image: "cybersecurity dashboard with real-time threat detection",
              },
              {
                title: "Library Management System",
                description:
                  "Efficient library management system built with advanced data structures for optimal performance.",
                tech: ["C++", "Hash Maps", "Binary Search Trees", "Data Structures"],
                image: "modern library management interface",
                github: "https://github.com/Akriti798/library-management-system"
              },
            ].map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="glass neon-glow-hover h-full">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-t-lg flex items-center justify-center">
                    <img
                      src={`/abstract-geometric-shapes.png?height=200&width=400&query=${project.image}`}
                      alt={project.title}
                      className="w-full h-full object-cover rounded-t-lg"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      {project.title}
                       {project.github && (
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="text-accent hover:text-primary transition-colors"
      >
        <ExternalLink className="w-5 h-5" />
      </a>
    )}
                      {/* <ExternalLink className="w-5 h-5 text-accent" /> */}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Achievements & Awards </h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "SIH Winner 2024",
                description: "1st place out of 270+ teams",
                icon: Trophy,
                certificate: "https://drive.google.com/file/d/18JB002ZEQeKMeR-zWE-PdL02xhO7TtE5/view?usp=sharing"
                
              },
              {
                title: "GSSoC 2025",
                description: "Campus Ambassador & Contributor",
                icon: Users,
              },
              {
                title: "Problem Solving",
                description: "230+ LeetCode, 240+ GFG problems solved",
                icon: Target,
              },
              {
                title: "Academic Excellence",
                description: "3rd rank in CSE batch",
                icon: Star,
                certificate: "https://drive.google.com/file/d/1HKmoafDotoOMdrMWjU7J_hUMz-3rX3eY/view?usp=sharing"
              },
              
              {
                title: "IDE Bootcamp",
                description: "Completed intensive development program",
                icon: Code,
                certificate: "https://drive.google.com/file/d/14bIsZZpMFsZGw046zNO13ZSEQ56XGDKx/view?usp=sharing"
              },
              {
                title: "NCC A Certificate",
                description: "National Cadet Corps certification",
                icon: Award,
                certificate: "https://drive.google.com/file/d/1oeQKTRyqfRH8lzyH76w43-4Mb_je7S1u/view?usp=sharing"
                },
            ].map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="glass neon-glow-hover text-center h-full">
                  <CardHeader>
                    <achievement.icon className="w-12 h-12 text-accent mx-auto mb-4" />
                    <CardTitle className="text-lg"> {achievement.certificate ? (
                  <a
                    href={achievement.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:underline"
                  >
                    {achievement.title}
                  </a>
                ) : (
                  achievement.title
                )}
                </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{achievement.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Certifications</h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
  {[
    {
      title: "Microsoft Azure Fundamentals",
      certificate: "https://learn.microsoft.com/en-us/users/akritishrivastava-9778/achievements/xq6rm64y",
    },
    {
      title: "Cisco Cybersecurity Essentials",
      certificate: "https://drive.google.com/file/d/1daiMG6xEwvtD_4W1GBGfngGakuVNsDNo/view?usp=sharing",
    },
    {
      title: "Paloalto Cybersecurity Internship",
      certificate: "https://drive.google.com/file/d/1cB0CDIpPGy0xuYyA_pOvCAoATe1OYwFm/view?usp=sharing",
    },
  ].map((cert, index) => (
    <motion.div
      key={cert.title}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="glass neon-glow-hover text-center h-full">
        <CardHeader>
          <a
            href={cert.certificate}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 font-semibold hover:underline"
          >
            {cert.title}
          </a>
        </CardHeader>
      </Card>
    </motion.div>
  ))}
</div>

        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Ready to collaborate on innovative projects or discuss opportunities? Let's connect!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-accent" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-muted-foreground">akritishrivastava1905@gmail.com</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
               <a
  href="https://github.com/Akriti798"   // replace with your GitHub link
  target="_blank"
  rel="noopener noreferrer"
>
  <Button variant="outline" className="neon-glow-hover bg-transparent">
    <Github className="w-4 h-4 mr-2" />
    GitHub
  </Button>
</a>
                <a
  href="https://www.linkedin.com/in/akritishrivastava798/"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button variant="outline" className="neon-glow-hover bg-transparent">
    <Linkedin className="w-4 h-4 mr-2" />
    LinkedIn
  </Button>
</a>
                {/* <Button variant="outline" className="neon-glow-hover bg-transparent">
                  <Code className="w-4 h-4 mr-2" />
                  LeetCode
                </Button> */}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* <Card className="glass neon-glow-hover">
                <CardHeader>
                  <CardTitle>Send a Message</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Input placeholder="Your Name" />
                  <Input placeholder="Your Email" type="email" />
                  <Textarea placeholder="Your Message" rows={4} />
                  <Button className="w-full neon-glow-hover">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </CardContent>
              </Card> */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-card/50 backdrop-blur-sm border-t border-border/50">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            {/* © 2024 Akriti Shrivastava. Built with React, Tailwind CSS, and Framer Motion. */}
          </p>
        </div>
      </footer>
    </div>
  )
}
