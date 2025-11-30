import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, ChevronDown, Code2, Facebook } from 'lucide-react';
import profilePhoto from '../media/crop.png';

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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Animated Background */}
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
          className="absolute top-1/4 -left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
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
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <div className="space-y-6">
            <motion.div variants={itemVariants} className="space-y-2">
              <motion.p
                className="text-accent text-lg font-medium"
                whileHover={{ x: 10 }}
              >
                Hi, I'm
              </motion.p>
              <h1 className="text-5xl md:text-7xl font-bold text-text">
                Mahfuzur Rahman Saif
              </h1>
              <h2 className="text-2xl md:text-3xl text-text/80">
                Web Developer
              </h2>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-text/70 text-lg leading-relaxed max-w-xl"
            >
              Full-stack developer experienced in React, Django, DRF, REST APIs, PostgreSQL, and scalable UI
              development. Strong foundation in backend architecture, and clean coding principles. Passionate
              about building efficient, maintainable systems and continuously learning new technologies. Seeking
              challenging full-stack opportunities in a dynamic environment where I can contribute to the development of
              high-quality, scalable web applications
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 transition-colors flex items-center gap-2"
              >
                <Mail size={20} />
                Get In Touch
              </motion.a>
              <motion.a
                href="https://drive.google.com/file/d/1vM2WeXP55HwXJbMZU1acTwjJcU2fFAnM/view?usp=sharing"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-secondary text-text rounded-lg font-medium hover:bg-secondary/80 transition-colors flex items-center gap-2 border border-accent/30"
              >
                <Download size={20}  />
                Get Resume
              </motion.a>
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-4 pt-4">
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
                  className="p-3 bg-secondary rounded-lg text-text hover:text-accent hover:bg-secondary/80 transition-colors"
                >
                  <Icon size={24} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Photo */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="relative"
            >
              <div className="w-full aspect-square max-w-md mx-auto bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl overflow-hidden border border-accent/30 shadow-2xl">
                <img 
                  src={profilePhoto} 
                  alt="Mahfuzur Rahman Saif -Developer" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback if image doesn't load
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback placeholder */}
                <div className="w-full h-full hidden items-center justify-center bg-secondary/50 backdrop-blur-sm">
                  <div className="text-center space-y-4">
                    <div className="w-32 h-32 mx-auto bg-accent/20 rounded-full flex items-center justify-center">
                      <span className="text-6xl"></span>
                    </div>
                    <p className="text-text/50 text-sm">Add your photo to /public/profile.jpg</p>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute -top-4 -right-4 w-24 h-24 border-4 border-accent/30 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                className="absolute -bottom-4 -left-4 w-32 h-32 border-4 border-accent/20 rounded-full"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown className="text-accent" size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;
