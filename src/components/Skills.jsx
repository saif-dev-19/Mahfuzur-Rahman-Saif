import React from 'react';
import { motion } from 'framer-motion';
import { Server, Database,Languages , Code, Cloud, GitBranch, Boxes } from 'lucide-react';
import SectionTitle from './SectionTitle';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: Languages,
      skills: [ 'C','C++','Python','Dart'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Backend',
      icon: Server,
      skills: [ 'Python', 'Django', 'Rest Framework', 'JWT'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Frontend',
      icon: Code,
      skills: ['React', 'JavaScript', 'HTML/CSS', 'TailwindCSS'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Databases',
      icon: Database,
      skills: ['PostgreSQL','MySQL', 'Sqlite','Supabase'],
      color: 'from-green-500 to-emerald-500',
    },
    
    // {
    //   title: 'Cloud & DevOps',
    //   icon: Cloud,
    //   skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform', 'Jenkins'],
    //   color: 'from-orange-500 to-red-500',
    // },
    {
      title: 'Tools',
      icon: GitBranch,
      skills: ['Git', 'GitHub','Vercel','Render','Netlify'],
      color: 'from-yellow-500 to-orange-500',
    },
    {
      title: 'AI & Workflow',
      icon: Boxes,
      skills: ['Prompt Engineering', 'Gemini CLI','ChatGPT','GitHub Copilot','Cursor'],
      color: 'from-indigo-500 to-blue-500',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Skills & Expertise"
          subtitle="Technologies and tools I work with to build robust solutions"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-secondary rounded-xl p-6 border border-accent/20 hover:border-accent/50 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-4">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`p-3 rounded-lg bg-gradient-to-br ${category.color}`}
                >
                  <category.icon className="text-white" size={24} />
                </motion.div>
                <h3 className="text-xl font-bold text-text group-hover:text-accent transition-colors">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: skillIndex * 0.05 }}
                    whileHover={{ scale: 1.1 }}
                    className="px-3 py-1 bg-background text-text/80 rounded-full text-sm hover:bg-accent hover:text-white transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
