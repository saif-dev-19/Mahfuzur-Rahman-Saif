import React from 'react';
import { motion } from 'framer-motion';
import { Server, Database,Languages , Code, Cloud, GitBranch, Boxes } from 'lucide-react';
import SectionTitle from './SectionTitle';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: Languages,
      skills: [
        { name: 'C', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
        { name: 'C++', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
        { name: 'Python', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'Dart', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg' },
      ],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Backend',
      icon: Server,
      skills: [
        { name: 'Python', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'Django', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
        { name: 'Rest Framework', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
        { name: 'JWT', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/jsonwebtokens.svg' },
      ],
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Frontend',
      icon: Code,
      skills: [
        { name: 'React', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'JavaScript', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'HTML/CSS', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'TailwindCSS', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' },
      ],
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Databases',
      icon: Database,
      skills: [
        { name: 'PostgreSQL', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
        { name: 'MySQL', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
        { name: 'SQLite', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg' },
        { name: 'Supabase', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/supabase.svg' },
      ],
      color: 'from-orange-500 to-red-500',
    },
    {
      title: 'Tools',
      icon: GitBranch,
      skills: [
        { name: 'Git', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
        { name: 'GitHub', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
        { name: 'Vercel', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/vercel.svg' },
        { name: 'Render', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/render.svg' },
        { name: 'Netlify', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg' },
      ],
      color: 'from-yellow-500 to-orange-500',
    },
    {
      title: 'AI & Workflow',
      icon: Boxes,
      skills: [
        { name: 'Prompt Engineering', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/openai.svg' },
        { name: 'Gemini CLI', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/google.svg' },
        { name: 'ChatGPT', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/openai.svg' },
        { name: 'GitHub Copilot', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
        { name: 'Cursor', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/cursor.svg' },
      ],
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

        <div className="code-section p-8">
          <div className="line-numbers">
            {Array.from({ length: 20 }, (_, i) => (
              <div key={i}>{i + 1}</div>
            ))}
          </div>
          <div className="ml-12">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {skillCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  variants={itemVariants}
                  whileHover={{ y: -3 }}
                  className="glass rounded-lg p-4 hover:glass-strong hover:neon-glow transition-all duration-300 group hover-glow"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div
                      whileHover={{ rotate: 15 }}
                      transition={{ duration: 0.3 }}
                      className={`p-2 rounded-md bg-gradient-to-br ${category.color} shadow-lg`}
                    >
                      <category.icon className="text-white" size={18} />
                    </motion.div>
                    <h3 className="text-lg font-semibold terminal-text">
                      <span className="code-comment">// </span>
                      <span className="code-tag">{category.title}</span>
                    </h3>
                  </div>
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: skillIndex * 0.05 }}
                        whileHover={{ x: 3 }}
                        className="flex items-center gap-3 p-2 rounded-md bg-background/30 hover:bg-accent/10 transition-all duration-200 cursor-default"
                      >
                        <img 
                          src={skill.iconUrl} 
                          alt={skill.name}
                          className="skill-icon"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'inline-block';
                          }}
                        />
                        <span className="w-6 h-6 hidden bg-accent/20 rounded text-accent text-xs flex items-center justify-center">
                          {skill.name.charAt(0)}
                        </span>
                        <span className="text-text/90 font-medium text-sm terminal-text">{skill.name}</span>
                      </motion.div>
                    ))}
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

export default Skills;
