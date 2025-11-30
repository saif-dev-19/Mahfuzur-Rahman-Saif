import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code } from 'lucide-react';
import SectionTitle from './SectionTitle';
import freelance from '../media/projects/freelance.png';
import event from '../media/projects/event.png';
import phimart from '../media/projects/phimart.png';
import hms from '../media/projects/hms.png';

const Projects = () => {
  const projects = [
    {
      title: 'VirtualBazar - Freelance Platform',
      description: 'a web application that connects clients posting projects with freelancers proposing and delivering work. The client focuses on performance, accessibility, and a smooth UX for onboarding, searching projects, proposals, and payments.',
      tech: ['Python', 'Django', 'JWT', 'PostgreSQL','JavaScript', 'React','Tailwind CSS','DRF'],
      image: freelance,
      github: 'https://github.com/saif-dev-19/Freelance-Platform',
      live: 'https://freelance-platform-client.vercel.app/',
    },
    {
      title: 'EventFlow - Event Management System',
      description: 'Event Management is built to help organizers create and manage events, track attendees, and coordinate schedules. It is intended to be a starting point that can be extended with authentication, ticketing, payment, notifications, and calendar integrations.',
      tech: ['Python', 'Django', 'MVT', 'SQLite'],
      image: event,
      github: 'https://github.com/saif-dev-19/event_management',
      live: 'https://event-management-1-wdqj.onrender.com/',
    },
    {
      title: 'Phimart - E-commerce',
      description: 'Phimart-client is the frontend & backend application for Phimart — an e-commerce storefront UI.This repository contains the client-side code for browsing products, viewing product details, managing a shopping cart, and performing a client-side checkout flow backend integration. payments, orders, and authentication',
      tech: ['Pyhton', 'Django', 'PostgreSQL', 'JWT', 'DRF','JavaScript','React','Tailwind CSS'],
      image: phimart,
      github: 'https://github.com/saif-dev-19/phimart',
      live: 'https://phimart-client-e.vercel.app/',
    },
    {
      title: 'HealSync+ - Hospital Management System',
      description: 'This is a role-based Hospital Management System built with Django REST Framework and React. Users can register either as Doctor or Patient, and the system automatically creates their corresponding Profile, Doctor, or Patient objects based on their role. Doctors can select a Specialty, which is managed by the admin, and all authentication is handled using JWT. The system ensures secure login, structured data management, and a clean UI for easy registration and navigation.',
      tech: ['React', 'Tailwind CSS', 'PostgreSQL', 'JavaScript'],
      image: hms,
      github: 'https://github.com/saif-dev-19/hospital-management',
      live: 'https://hospital-management-wine-gamma.vercel.app/',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Featured Projects"
          subtitle="Showcasing my work in backend systems and full-stack applications"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="bg-secondary rounded-xl overflow-hidden border border-accent/20 hover:border-accent/50 transition-all duration-300 group"
            >
              {/* Project Image/Icon */}
              <div className="relative h-48 bg-gradient-to-br from-accent/20 to-accent/5 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 transition-colors duration-300" />
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-text group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-text/70 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-background text-accent text-xs rounded border border-accent/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-2">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 text-text/70 hover:text-accent transition-colors"
                  >
                    <Github size={18} />
                    <span className="text-sm">Code</span>
                  </motion.a>
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 text-text/70 hover:text-accent transition-colors"
                  >
                    <ExternalLink size={18} />
                    <span className="text-sm">Live</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
