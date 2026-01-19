import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Layers, Search, Wrench } from "lucide-react";

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Python", level: 85 },
        { name: "JavaScript", level: 75 },
        { name: "Java", level: 65 },
        { name: "C/C++", level: 60 },
      ],
    },
    {
      title: "Frameworks & Libraries",
      icon: Layers,
      color: "from-cyan-500 to-blue-500",
      skills: [
        { name: "Streamlit", level: 85 },
        { name: "React", level: 70 },
        { name: "Next.js", level: 65 },
        { name: "Node.js", level: 70 },
        { name: "Tailwind CSS", level: 75 },
      ],
    },
    {
      title: "SEO & Analytics Tools",
      icon: Search,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Google Search Console", level: 95 },
        { name: "Google Analytics 4", level: 90 },
        { name: "SEMrush", level: 85 },
        { name: "Ahrefs", level: 85 },
        { name: "Screaming Frog", level: 90 },
      ],
    },
    {
      title: "Tools & Technologies",
      icon: Wrench,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "WordPress", level: 85 },
        { name: "Git & GitHub", level: 80 },
        { name: "MySQL", level: 70 },
        { name: "Odoo", level: 70 },
        { name: "AWS", level: 60 },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="section-padding relative" ref={ref}>
      <div className="absolute left-0 top-1/3 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute right-0 bottom-1/4 w-60 h-60 bg-accent/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A combination of SEO expertise, technical skills, and development knowledge
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-6"
        >
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="card-glow p-6 rounded-xl bg-card border border-border"
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className={`p-2.5 rounded-lg bg-gradient-to-br ${category.color} text-white`}
                >
                  <category.icon size={20} />
                </div>
                <h3 className="text-lg font-semibold">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-foreground">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>

                    {/* Track */}
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      {/* Fill */}
                      <motion.div
                        className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{
                          duration: 1,
                          delay: catIndex * 0.2 + index * 0.1,
                          ease: "easeOut",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground mb-4">Also experienced with:</p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              "On-Page SEO",
              "Technical SEO",
              "E-commerce SEO",
              "Keyword Research",
              "Content Optimization",
              "Link Building",
              "Schema Markup",
              "JSON-LD",
              "Web Scraping",
              "Data Analysis",
            ].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1 + index * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-3 py-1.5 text-sm bg-muted rounded-full text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-colors cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;