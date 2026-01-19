import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const workExperience = [
    {
      year: 'Dec 2025 — Present',
      title: 'Jr. SEO Specialist',
      organization: 'NEPA Works',
      location: 'Kathmandu, Nepal',
      description: [
        'On-Page SEO optimization',
        'Technical SEO audits',
        'E-commerce SEO strategies',
        'GSC & GA4 monitoring',
      ],
      link: 'https://www.nepa.works/',
      type: 'work',
    },
    {
      year: 'Jul 2024 — Jun 2025',
      title: 'SEO Executive',
      organization: 'RankMeTop',
      location: 'Kathmandu, Nepal',
      description: [
        'Increased organic traffic by 35% within six months',
        'Conducted in-depth keyword research',
        'Optimized 50+ pages for better CTR',
        'Managed backlink acquisition campaigns',
      ],
      link: 'https://rankmetop.net/',
      type: 'work',
    },
    {
      year: 'Jan 2024 — Jun 2024',
      title: 'SEO Intern',
      organization: 'RankMeTop',
      location: 'Kathmandu, Nepal',
      description: [
        'Assisted in executing SEO strategies',
        'Conducted keyword research using SEMrush',
        'Performed basic technical SEO checks',
      ],
      link: 'https://rankmetop.net/',
      type: 'work',
    },
    {
      year: 'Dec 2023 — Jan 2024',
      title: 'Data Entry Specialist',
      organization: 'RankMeTop',
      location: 'Kathmandu, Nepal',
      description: [
        'Data entry and validation',
        'Report generation with Excel',
      ],
      link: 'https://rankmetop.net/',
      type: 'work',
    },
  ];

  const certifications = [
    {
      title: 'AI Training',
      organization: 'Broadway Infosys',
      year: '2023',
      description: 'Fundamentals of AI and Machine Learning',
    },
    {
      title: 'Data Science Training',
      organization: 'Broadway Infosys',
      year: '2023',
      description: 'Data analysis and visualization techniques',
    },
    {
      title: 'Python & Django Training',
      organization: 'Broadway Infosys',
      year: '2023',
      description: 'Python programming and Django web development',
    },
    {
      title: 'Web Design Training',
      organization: 'Broadway Infosys',
      year: '2023',
      description: 'HTML, CSS, JavaScript fundamentals',
    },
  ];

  return (
    <section id="experience" className="section-padding relative" ref={ref}>
      {/* Background decorations */}
      <div className="absolute left-1/4 top-1/2 w-72 h-72 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Experience & <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey and qualifications
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              className="text-xl font-semibold mb-6 flex items-center gap-2"
            >
              <Briefcase className="text-primary" size={24} />
              Work Experience
            </motion.h3>

            <div className="relative">
              {/* Vertical Line */}
              <motion.div
                initial={{ height: 0 }}
                animate={isInView ? { height: '100%' } : {}}
                transition={{ duration: 1.5, ease: 'easeOut' }}
                className="absolute left-4 top-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/20"
              />

              <div className="space-y-6">
                {workExperience.map((item, index) => (
                  <motion.div
                    key={item.title + item.organization}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    className="relative pl-10"
                  >
                    {/* Timeline Dot */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ delay: index * 0.15 + 0.3, type: 'spring' }}
                      className="absolute left-2 top-2 w-4 h-4 rounded-full bg-gradient-to-r from-primary to-accent z-10"
                    />

                    <motion.div
                      whileHover={{ y: -3 }}
                      className="card-glow p-5 rounded-xl bg-card border border-border"
                    >
                      <span className="inline-block px-3 py-1 text-xs font-medium bg-muted rounded-full text-muted-foreground mb-3">
                        {item.year}
                      </span>
                      <h4 className="font-semibold text-foreground">{item.title}</h4>
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary hover:underline"
                      >
                        {item.organization}
                      </a>
                      <span className="text-sm text-muted-foreground"> • {item.location}</span>
                      <ul className="mt-3 space-y-1">
                        {item.description.map((desc, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            {desc}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              className="text-xl font-semibold mb-6 flex items-center gap-2"
            >
              <Award className="text-primary" size={24} />
              Certifications
            </motion.h3>

            <div className="grid gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -3 }}
                  className="card-glow p-5 rounded-xl bg-card border border-border"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 text-white flex-shrink-0">
                      <GraduationCap size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{cert.title}</h4>
                      <p className="text-sm text-primary">{cert.organization}</p>
                      <p className="text-sm text-muted-foreground">{cert.year}</p>
                      <p className="text-sm text-muted-foreground mt-1">{cert.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;