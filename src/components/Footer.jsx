import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Code2, Facebook } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/saif-dev-19', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/mahfuzsaif/', label: 'LinkedIn' },
    { icon: Code2, href: 'https://leetcode.com/u/Mahfuz_saif/', label: 'LeetCode' },
    { icon: Facebook, href: 'https://www.facebook.com/hey.mahfuz.here.ok', label: 'Facebook' },
    { icon: Mail, href: 'mailto:mahfujurrahmansaif@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="bg-secondary border-t border-accent/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6">
          {/* Social Links */}
          <div className="flex gap-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-background rounded-lg text-text hover:text-accent hover:bg-background/80 transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-center space-y-2"
          >
            <p className="text-text/70 flex items-center gap-2 justify-center">
              Built with using React & TailwindCSS
            </p>
            <p className="text-text/50 text-sm">
              © {new Date().getFullYear()} Mahfuz. All rights reserved.
            </p>
          </motion.div>

          {/* Back to Top */}
          <motion.a
            href="#home"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-accent hover:text-accent/80 transition-colors text-sm font-medium"
          >
            Back to Top ↑
          </motion.a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
