import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, MapPin, Briefcase, TrendingUp } from 'lucide-react';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { number: '35%', label: 'Traffic Increase', icon: '📈' },
    { number: '50+', label: 'Pages Optimized', icon: '📄' },
    { number: '3+', label: 'SEO Projects', icon: '🔧' },
    { number: '2+', label: 'Years Experience', icon: '⏱️' },
  ];

  const details = [
    { icon: Briefcase, label: 'Current Role', value: 'Jr. SEO Specialist at NEPA Works' },
    { icon: MapPin, label: 'Location', value: 'Kathmandu, Nepal' },
    { icon: GraduationCap, label: 'Certified', value: 'Broadway Infosys' },
    { icon: TrendingUp, label: 'Focus', value: 'SEO & Automation' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="section-padding relative" ref={ref}>
      {/* Background decoration */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            SEO Specialist & Automation Enthusiast
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left - About Text */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="space-y-4 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                Hello! I'm <span className="text-foreground font-medium">Rajesh Tudu</span>, 
                an SEO Specialist passionate about boosting online visibility, driving organic traffic, 
                and turning search strategies into real business growth.
              </p>
              <p className="leading-relaxed">
                I love staying ahead of algorithm trends, optimizing content and technical performance, 
                and using data to make smart decisions. With a growth mindset and a collaborative approach, 
                I'm always exploring new ways to improve rankings and strengthen brand presence.
              </p>
              <p className="leading-relaxed">
                Beyond SEO, I enjoy building Python-based automation tools to streamline workflows 
                and create efficient solutions. Always open to networking—let's connect and turn 
                search potential into success!
              </p>
            </div>

            {/* Details Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {details.map((detail) => (
                <motion.div
                  key={detail.label}
                  variants={itemVariants}
                  className="flex items-center gap-3 p-3 rounded-lg bg-card border border-border"
                >
                  <detail.icon className="w-5 h-5 text-primary flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground">{detail.label}</p>
                    <p className="text-sm font-medium truncate">{detail.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Stats Cards */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.3 + index * 0.1, type: 'spring' }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="card-glow p-6 rounded-xl bg-card border border-border text-center group"
              >
                <span className="text-3xl mb-2 block">{stat.icon}</span>
                <motion.span
                  className="text-3xl md:text-4xl font-bold text-gradient block mb-1"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.1, type: 'spring' }}
                >
                  {stat.number}
                </motion.span>
                <span className="text-sm text-muted-foreground">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;