import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Folder } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "SERP Live Tracker + Analyzer",
      description:
        "A Streamlit-based SERP tracking dashboard that fetches Google results via the Custom Search JSON API, stores ranking snapshots over time, and visualizes volatility, rank movement, and domain trends using interactive Plotly charts.",
      image: "📊",
      technologies: ["Python", "Streamlit", "Google Custom Search API", "Plotly", "SEO"],
      github: "https://github.com/rajeshtudu/SERP-Live-Analyzer",
      demo: "https://serp-live-analyzer.streamlit.app/",
      featured: true,
    },
    {
      title: "Schema Generator",
      description:
        "A user-friendly Streamlit tool for generating valid JSON-LD Schema.org structured data. Supports popular types like Product, FAQ, Article, LocalBusiness, and more.",
      image: "🔧",
      technologies: ["Python", "Streamlit", "JSON-LD", "Schema.org", "SEO"],
      github: "https://github.com/rajeshtudu/Schema-Generator",
      demo: "https://schema-markup-generator.streamlit.app/",
      featured: true,
    },
    {
      title: "Knowledge Base Scraper",
      description:
        "A lightweight Python-based web scraper for extracting structured content from knowledge base sites, help centers, and documentation pages. Built to support AI-powered workflows.",
      image: "🔍",
      technologies: ["Python", "Web Scraping", "BeautifulSoup", "AI Workflows"],
      github: "https://github.com/rajeshtudu/Knowledge-Base-Scraper",
      demo: "",
      featured: false,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="section-padding relative" ref={ref}>
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            SEO automation tools and Python-based projects I've built to streamline workflows
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className={`group card-glow rounded-xl bg-card border border-border overflow-hidden ${
                project.featured ? "ring-1 ring-primary/20" : ""
              }`}
            >
              <div className="h-48 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center relative overflow-hidden">
                <span className="text-6xl group-hover:scale-110 transition-transform duration-300">
                  {project.image}
                </span>

                {project.featured && (
                  <span className="absolute top-4 right-4 px-2 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full">
                    Featured
                  </span>
                )}

                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 rounded-full bg-card border border-border hover:border-primary transition-colors"
                  >
                    <Github size={20} />
                  </motion.a>

                  {project.demo && (
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 rounded-full bg-card border border-border hover:border-primary transition-colors"
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                  )}
                </motion.div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Folder size={18} className="text-primary" />
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>

                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span key={tech} className="px-2 py-1 text-xs bg-muted rounded-md text-muted-foreground">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-1 text-xs bg-muted rounded-md text-muted-foreground">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <Button variant="outline" className="border-primary/50 hover:bg-primary/10" asChild>
            <a href="https://github.com/rajeshtudu" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              View More on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;