import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, ChevronDown, Code2, Facebook } from 'lucide-react';
import profilePhoto from '../media/portfolio.png';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 px-4">
      {/* Heavy Coding Effects Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Terminal Grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="terminal-grid"></div>
        </div>

        {/* Animated Circuit Lines */}
        <div className="circuit-lines hidden md:block">
          <div className="circuit-line horizontal" style={{ top: '20%', left: '0%', width: '40%' }}></div>
          <div className="circuit-line vertical" style={{ top: '20%', left: '40%', height: '30%' }}></div>
          <div className="circuit-line horizontal" style={{ top: '50%', right: '0%', width: '35%' }}></div>
          <div className="circuit-line vertical" style={{ top: '30%', right: '35%', height: '40%' }}></div>
        </div>

        {/* Glitch Effects */}
        <div className="glitch-overlay"></div>
      </div>
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-1/4 -left-20 w-64 h-64 md:w-96 md:h-96 bg-accent/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute bottom-1/4 -right-20 w-64 h-64 md:w-96 md:h-96 bg-accent/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[800px] md:h-[800px] bg-cyber-blue/5 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-8 md:gap-12 items-center"
        >
          {/* Left Content */}
          <div className="space-y-4 md:space-y-6">
            <motion.div variants={itemVariants} className="space-y-2">
              <motion.p
                className="text-accent text-base md:text-lg font-bold"
                whileHover={{ x: 10 }}
              >
                Hi, I'm
              </motion.p>
              <h1 className="text-xl sm:text-3xl md:text-3xl lg:text-4xl font-bold terminal-text break-words">
                <span className="gradient-text  typing-animation">Mahfuzur Rahman Saif</span>
              </h1>
              <h2 className="text-lg sm:text-xl md:text-xl lg:text-2xl text-text/80 terminal-text mt-4 break-words">
                <span className="code-keyword">const</span> <span className="code-variable">role</span> = 
                <span className="text-accent"> "</span>
                <span className="code-string typing-animation-2">Fullstack Developer</span>
                <span className="text-accent">";</span>
              </h2>
              <div className="terminal-text text-sm md:text-base lg:text-lg mt-2 opacity-70 break-words">
                <span className="code-comment">/* Backend-Focused • Full-Stack Solutions */</span>
              </div>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-text/70 text-sm sm:text-base md:text-md leading-relaxed break-words"
            >
              Full-stack developer experienced in React, Django, DRF, REST APIs, PostgreSQL, and scalable UI
              development. Strong foundation in backend architecture, and clean coding principles. Passionate
              about building efficient, maintainable systems and continuously learning new technologies.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-3 md:gap-4">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 sm:px-6 md:px-8 py-2 md:py-3 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 transition-colors flex items-center gap-2 text-sm md:text-base whitespace-nowrap"
              >
                <Mail size={18} className="flex-shrink-0" />
                <span className="break-keep">Get In Touch</span>
              </motion.a>
              <motion.a
                href="https://drive.google.com/file/d/1vM2WeXP55HwXJbMZU1acTwjJcU2fFAnM/view?usp=sharing"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 sm:px-6 md:px-8 py-2 md:py-3 bg-secondary text-text rounded-lg font-medium hover:bg-secondary/80 transition-colors flex items-center gap-2 border border-accent/30 text-sm md:text-base whitespace-nowrap"
              >
                <Download size={18} className="flex-shrink-0" />
                <span className="break-keep">Get Resume</span>
              </motion.a>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-3 md:gap-4 pt-4">
              {[
                { Icon: Github, href: 'https://github.com/saif-dev-19', label: 'GitHub' },
                { Icon: Linkedin, href: 'https://www.linkedin.com/in/mahfuzsaif/', label: 'LinkedIn' },
                { Icon: Code2, href: 'https://leetcode.com/u/Mahfuz_saif/', label: 'LeetCode' },
                { Icon: Facebook, href: 'https://www.facebook.com/hey.mahfuz.here.ok', label: 'Facebook' },
              ].map(({ Icon, href, label }, index) => (
                <motion.a
                  key={index}
                  aria-label={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 md:p-3 bg-secondary rounded-lg text-text hover:text-accent hover:bg-secondary/80 transition-colors"
                >
                  <Icon size={20} className="md:w-6 md:h-6" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Photo */}
          <motion.div
            variants={itemVariants}
            className="relative order-first md:order-last"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="relative"
            >
              <div className="w-full aspect-square max-w-xs sm:max-w-sm md:max-w-md mx-auto bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl overflow-hidden border border-accent/30 shadow-2xl">
                <img 
                  src={profilePhoto} 
                  alt="Mahfuzur Rahman Saif -Developer" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback placeholder */}
                <div className="w-full h-full hidden items-center justify-center bg-secondary/50 backdrop-blur-sm p-4">
                  <div className="text-center space-y-4">
                    <div className="w-24 h-24 md:w-32 md:h-32 mx-auto bg-accent/20 rounded-full flex items-center justify-center">
                      <span className="text-4xl md:text-6xl"></span>
                    </div>
                    <p className="text-text/50 text-xs md:text-sm break-words">Add your photo to /public/profile.jpg</p>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute -top-2 -right-2 md:-top-4 md:-right-4 w-16 h-16 md:w-24 md:h-24 border-2 md:border-4 border-accent/30 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                className="absolute -bottom-2 -left-2 md:-bottom-4 md:-left-4 w-20 h-20 md:w-32 md:h-32 border-2 md:border-4 border-accent/20 rounded-full"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown className="text-accent" size={24} />
      </motion.div>
    </section>
  );
};

export default Hero;
