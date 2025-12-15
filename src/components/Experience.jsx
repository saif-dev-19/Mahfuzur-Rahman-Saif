import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import SectionTitle from './SectionTitle';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Backend Engineer',
      company: 'Tech Corp',
      period: '2022 - Present',
      description: 'Leading backend architecture for microservices platform serving 1M+ users. Designed and implemented event-driven systems with 99.9% uptime.',
      achievements: [
        'Reduced API response time by 60% through optimization',
        'Architected scalable microservices handling 10K req/sec',
        'Mentored team of 5 junior developers',
      ],
    },
    {
      title: 'Fullstack Developer',
      company: 'StartupXYZ',
      period: '2020 - 2022',
      description: 'Built full-stack applications using modern technologies. Developed RESTful APIs and responsive frontend interfaces.',
      achievements: [
        'Developed 15+ production-ready features',
        'Implemented CI/CD pipeline reducing deployment time by 70%',
        'Integrated third-party APIs and payment systems',
      ],
    },
    {
      title: 'Backend Developer',
      company: 'Digital Solutions Inc',
      period: '2018 - 2020',
      description: 'Focused on backend development and database optimization. Created robust APIs and improved system performance.',
      achievements: [
        'Optimized database queries improving performance by 40%',
        'Built authentication system with JWT and OAuth2',
        'Collaborated with frontend team on API design',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Work Experience"
          subtitle="My professional journey in software development"
        />

        <div className="code-section p-8">
          <div className="line-numbers">
            {Array.from({ length: 15 }, (_, i) => (
              <div key={i}>{i + 1}</div>
            ))}
          </div>
          <div className="ml-12 relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-accent/30 neon-glow" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <motion.div
                  whileHover={{ scale: 1.5 }}
                  className="absolute left-8 md:left-1/2 w-4 h-4 bg-accent rounded-full border-4 border-background z-10 transform -translate-x-1/2"
                />

                {/* Content Card */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className={`w-full md:w-5/12 ml-20 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'
                  }`}
                >
                  <div className="bg-secondary p-6 rounded-xl border border-accent/20 hover:border-accent/50 transition-all duration-300">
                    <div className="flex items-center gap-2 text-accent mb-2">
                      <Calendar size={16} />
                      <span className="text-sm font-medium">{exp.period}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-text mb-1">{exp.title}</h3>
                    <div className="flex items-center gap-2 text-text/70 mb-4">
                      <Briefcase size={16} />
                      <span>{exp.company}</span>
                    </div>
                    <p className="text-text/70 mb-4">{exp.description}</p>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-start gap-2 text-text/70 text-sm"
                        >
                          <span className="text-accent mt-1">▹</span>
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
