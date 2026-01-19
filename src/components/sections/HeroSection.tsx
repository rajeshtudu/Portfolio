import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, FileText, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import TypewriterText from "@/components/TypewriterText";

const HeroSection = () => {
  const roles = ["SEO Specialist", "Automation Enthusiast", "Python Developer", "Tech Explorer"];

  const socialLinks = [
    { icon: Github, href: "https://github.com/rajeshtudu", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/rajeshtudu", label: "LinkedIn" },
    { icon: Twitter, href: "https://x.com/rajeshtudu", label: "X (Twitter)" },
    { icon: Mail, href: "mailto:tudurajesh34@gmail.com", label: "Email" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.replace("#", ""));
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background pointer-events-none" />

      {/* Radial gradient for glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="flex flex-col items-center text-center gap-8">
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="relative"
          >
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-r from-primary to-accent p-0.75 glow">
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
                <span className="text-4xl md:text-5xl font-bold text-gradient">RT</span>
              </div>
            </div>

            {/* Animated ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-4 rounded-full border border-primary/20 border-dashed"
            />
          </motion.div>

          {/* Name */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="text-foreground">Hi, I'm </span>
              <span className="text-gradient glow-text">Rajesh Tudu</span>
            </h1>
          </motion.div>

          {/* Typewriter Role */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl lg:text-3xl text-muted-foreground"
          >
            <TypewriterText texts={roles} />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="max-w-2xl text-muted-foreground text-lg"
          >
            Boosting online visibility, driving organic traffic, and turning search strategies into real business
            growth. Always exploring new ways to improve rankings and deliver measurable results.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity glow"
              onClick={() => scrollToSection("#projects")}
            >
              View Projects
            </Button>

            <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10" asChild>
              <a
                href="https://drive.google.com/file/d/1gD_u6IsjpZV0wPyHdireKTaHVQedHyE0/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileText className="mr-2 h-4 w-4" />
                Resume
              </a>
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex gap-4"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="p-3 rounded-full bg-card border border-border hover:border-primary/50 hover:bg-primary/10 transition-all"
                whileHover={{ y: -4, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
              >
                <link.icon size={20} className="text-muted-foreground hover:text-primary" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.button
          onClick={() => scrollToSection("#about")}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-sm">Scroll Down</span>
          <ArrowDown size={20} />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default HeroSection;