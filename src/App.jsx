import React from 'react'
import './App.css'
import { Button } from './components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './components/ui/card'
import { Badge } from './components/ui/badge'
import { Input } from './components/ui/input'
import { Textarea } from './components/ui/textarea'
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
  ChevronDown,
} from 'lucide-react'
import { motion } from 'framer-motion'

// Import assets
import heroBackground from './assets/hero_background.png'
import professionalAvatar from './assets/Benjamin.png'
import projectPlaceholder1 from './assets/project_placeholder_1.png'
import projectPlaceholder2 from './assets/project_placeholder_2.png'
import projectPlaceholder3 from './assets/project_placeholder_3.png'

function App() {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  // Featured Projects
  const projects = [
    {
      id: 1,
      title: 'Analytics Dashboard',
      description:
        'A comprehensive dashboard for data visualization and analytics with real-time updates and interactive charts.',
      image: projectPlaceholder1,
      technologies: ['React', 'D3.js', 'Node.js', 'MongoDB'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 2,
      title: 'E-commerce Mobile App',
      description:
        'Modern mobile application for online shopping with intuitive UI/UX and seamless payment integration.',
      image: projectPlaceholder2,
      technologies: ['React Native', 'Firebase', 'Stripe', 'Redux'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 3,
      title: 'Corporate Website',
      description:
        'Professional corporate website with modern design, responsive layout, and content management system.',
      image: projectPlaceholder3,
      technologies: ['Next.js', 'Tailwind CSS', 'Sanity CMS', 'Vercel'],
      liveUrl: '#',
      githubUrl: '#',
    },
  ]

  // Grouped Skills & Tools
  const skills = [
    {
      category: 'Languages & Frameworks',
      items: [
        {
          name: 'Python',
          proficiency: 'Advanced',
          percent: 70,
          tools: ['Pandas', 'FastAPI', 'Flask'],
        },
        {
          name: 'SQL',
          proficiency: 'Intermediate',
          percent: 65,
          tools: ['PostgreSQL', 'MySQL', 'Snowflake'],
        },
        {
          name: 'Node.js',
          proficiency: 'Learning',
          percent: 50,
          tools: ['Express', 'NestJS'],
        },
      ],
    },
    {
      category: 'Data Engineering & Analytics',
      items: [
        {
          name: 'Data Engineering',
          proficiency: 'Advanced',
          percent: 75,
          tools: ['Airflow', 'DBT', 'Kafka'],
        },
        {
          name: 'Data Science',
          proficiency: 'Intermediate',
          percent: 70,
          tools: ['Scikit-learn', 'Statsmodels'],
        },
      ],
    },
    {
      category: 'Machine Learning & AI',
      items: [
        {
          name: 'Machine Learning',
          proficiency: 'Intermediate',
          percent: 70,
          tools: ['TensorFlow', 'PyTorch'],
        },
        {
          name: 'AI Models',
          proficiency: 'Intermediate',
          percent: 65,
          tools: ['OpenAI API', 'LLMs'],
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold"
            >
              My Portfolio
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'projects', 'skills', 'contact'].map((sec) => (
                <button
                  key={sec}
                  onClick={() => scrollToSection(sec)}
                  className="hover:text-primary transition-colors"
                >
                  {sec.charAt(0).toUpperCase() + sec.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBackground})` }}
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 text-center text-white px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={professionalAvatar}
              alt="Benjamin Sajad Nouri"
              className="w-32 h-32 rounded-full mx-auto mb-8 border-4 border-white/20"
            />
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Benjamin Sajad Nouri
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
              Data Engineer, Scientist & ML/AI Specialist
            </p>
            <p className="text-lg mb-12 max-w-3xl mx-auto opacity-90">
              Just graduated from Cand.merc.BI, I bring a curious,
              eager-to-learn approach, passionate about state-of-the-art
              models. I specialize in Data Engineering, Science, Analytics,
              ML/AI, and End-to-End Projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* Both buttons now match */}
              <Button
                size="lg"
                onClick={() => scrollToSection('projects')}
                className="bg-white text-black hover:bg-white/90"
              >
                View My Work
              </Button>
              <Button
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="bg-white text-black hover:bg-white/90"
              >
                Get In Touch
              </Button>
            </div>
          </motion.div>
        </div>
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-white" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About Me
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Passionate data professional with a focus on innovative solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-6">My Story</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                I'm Benjamin Sajad Nouri, a 26-year-old recent graduate from
                Aarhus University (Cand.merc.BI). My passion lies in the
                intersection of data & technology, tackling end-to-end projects
                in Data Engineering, Analytics, ML/AI and more.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                I specialize in SQL & Python and am expanding into Node.js and
                modern web stacks. I thrive on solving real-world problems with
                scalable, maintainable code.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <Card>
                <CardHeader>
                  <CardTitle>Education</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold">
                        MSc in Business Intelligence (Cand.merc.BI)
                      </h4>
                      <p className="text-muted-foreground">
                        Aarhus University • 2023–2025
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold">BSc in Business Economics</h4>
                      <p className="text-muted-foreground">
                        Aarhus University • 2020–2023
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Key Skills & Technologies</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">SQL</Badge>
                    <Badge variant="secondary">Python</Badge>
                    <Badge variant="secondary">Data Engineering</Badge>
                    <Badge variant="secondary">Data Science</Badge>
                    <Badge variant="secondary">Machine Learning</Badge>
                    <Badge variant="secondary">AI Models</Badge>
                    <Badge variant="secondary">Node.js (Learning)</Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A showcase of my recent work
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                      <Button size="sm" variant="secondary" asChild>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                      <Button size="sm" variant="secondary" asChild>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
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

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Skills & Expertise
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Technologies and tools I work with
            </p>
          </motion.div>

          {skills.map((section) => (
            <div key={section.category} className="mb-12">
              <h3 className="text-2xl font-semibold mb-4">
                {section.category}
              </h3>
              {section.items.map(({ name, proficiency, percent, tools }) => (
                <div key={name} className="mb-6">
                  <div className="flex justify-between">
                    <span className="font-medium">{name}</span>
                    <span className="text-muted-foreground">
                      {proficiency} ({percent}% )
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                    <motion.div
                      className="bg-primary h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${percent}%` }}
                      transition={{ duration: 1 }}
                      viewport={{ once: true }}
                    />
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Tools: {tools.join(', ')}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get In Touch
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to start your next project? Let's work together!
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-semibold mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <span>Benjamin Sajad Nouri</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <span>+45 28 72 33 23</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span>Aarhus, Denmark</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Follow Me</h3>
                <div className="flex space-x-4">
                  <Button variant="outline" size="icon" asChild>
                    <a
                      href="https://github.com/BengiNouri"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a
                      href="https://www.linkedin.com/in/benjamin-n-233813167/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Send a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and I'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="firstName"
                          className="block text-sm font-medium mb-2"
                        >
                          First Name
                        </label>
                        <Input id="firstName" placeholder="...." />
                      </div>
                      <div>
                        <label
                          htmlFor="lastName"
                          className="block text-sm font-medium mb-2"
                        >
                          Last Name
                        </label>
                        <Input id="lastName" placeholder="...." />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-2"
                      >
                        Email
                      </label>
                      <Input id="email" type="email" placeholder="...." />
                    </div>
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium mb-2"
                      >
                        Subject
                      </label>
                      <Input id="subject" placeholder="...." />
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium mb-2"
                      >
                        Message
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Tell me about your project..."
                        rows={5}
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-muted-foreground mb-4">
              © 2024 Benjamin Sajad Nouri. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Built with React, Tailwind CSS, and lots of ☕
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
