import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react';
import SectionTitle from './SectionTitle';

const Education = () => {
  const education = [
    {
      degree: 'Diploma In Engineering',
      institution: 'Feni Computer Institute,Feni',
      location: 'Feni',
      period: '2019-2023',
      gpa: '3.70/4.0',
      description: 'Specialized in Distributed Computer Scinece & Technology',
      highlights: [
        // 'Thesis: Scalable Microservices Architecture Patterns',
        'Programming Mentor in FCI IT Club.',
        'Join-Secratary at FCI Blood Donation Club',
      ],
    },
    {
      degree: 'Bachelor of Science in Computer Science & Engineering',
      institution: 'Bangladesh University Of Business And Technology,Dhaka',
      location: 'Mirpur,Dhaka',
      period: '2024 - Running(2027)',
      gpa: '3.35/4.0(present)',
      description: 'Focus on Tech.Data Structure,Algorithm,Database,and Advanced Programming.',
      highlights: [
        'Developed multiple web projects using Django,HTML, CSS, JS, React',
        'Understanding of Data Structures & Algorithms',
        'Member of the Programming Club',
      ],
    },
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Education"
          subtitle="Academic background and achievements"
        />

        <div className="code-section p-8">
          <div className="line-numbers">
            {Array.from({ length: 12 }, (_, i) => (
              <div key={i}>{i + 1}</div>
            ))}
          </div>
          <div className="ml-12">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="space-y-6"
            >
          {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                variants={itemVariants}
                whileHover={{ y: -2 }}
                className="glass rounded-lg p-6 hover:glass-strong hover:neon-glow transition-all duration-300 hover-glow"
              >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div className="flex items-start gap-4">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="p-3 bg-accent/10 rounded-lg flex-shrink-0"
                  >
                    <GraduationCap className="text-accent" size={32} />
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-bold text-text mb-2">{edu.degree}</h3>
                    <div className="flex items-center gap-2 text-text/80 mb-1">
                      <BookOpen size={16} className="text-accent" />
                      <span className="font-medium">{edu.institution}</span>
                    </div>
                    <p className="text-text/60 text-sm">{edu.location}</p>
                  </div>
                </div>

                <div className="flex flex-col items-start md:items-end gap-2">
                  <div className="flex items-center gap-2 text-accent">
                    <Calendar size={16} />
                    <span className="text-sm font-medium">{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-2 text-text/70">
                    <Award size={16} className="text-accent" />
                    <span className="text-sm font-medium">GPA: {edu.gpa}</span>
                  </div>
                </div>
              </div>

              <p className="text-text/70 mb-4">{edu.description}</p>

              <div className="space-y-2">
                <h4 className="text-accent font-semibold text-sm mb-3">Key Highlights:</h4>
                <ul className="space-y-2">
                  {edu.highlights.map((highlight, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-3 text-text/70 text-sm"
                    >
                      <span className="text-accent mt-1 flex-shrink-0">▹</span>
                      <span>{highlight}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
