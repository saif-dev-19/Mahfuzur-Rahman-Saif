import React from 'react';
import { motion } from 'framer-motion';

const SectionTitle = ({ title, subtitle, align = 'center' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-16 ${align === 'center' ? 'text-center' : ''}`}
    >
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-text mb-4"
        whileHover={{ scale: 1.02 }}
      >
        {title}
      </motion.h2>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: 100 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={`h-1 bg-accent ${align === 'center' ? 'mx-auto' : ''}`}
      />
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-text/70 text-lg mt-4 max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
};

export default SectionTitle;
