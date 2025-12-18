import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, Calendar, Info } from 'lucide-react';
import SectionTitle from './SectionTitle';
import freelance from '../media/projects/freelance.png';
import event from '../media/projects/event.png';
import phimart from '../media/projects/phimart.png';
import hms from '../media/projects/hms.png';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAllProjects, setShowAllProjects] = useState(false);

  const projects = [
    {
      title: 'VirtualBazar - Freelance Platform',
      description: 'a web application that connects clients posting projects with freelancers proposing and delivering work. The client focuses on performance, accessibility, and a smooth UX for onboarding, searching projects, proposals, and payments.',
      fullDescription: 'VirtualBazar is a comprehensive freelance platform that bridges the gap between clients and talented freelancers. Built with modern web technologies, it features real-time chat, secure payment processing, project management tools, and an intuitive user interface. The platform includes advanced search filters, rating systems, milestone-based payments, and comprehensive project tracking.',
      tech: ['Python', 'Django', 'JWT', 'PostgreSQL','JavaScript', 'React','Tailwind CSS','DRF'],
      techIcons: ['🐍', '🎯', '🔐', '🐘', '🟨', '⚛️', '💨', '⚡'],
      image: freelance,
      github: 'https://github.com/saif-dev-19/Freelance-Platform',
      live: 'https://freelance-platform-client.vercel.app/',
      status: 'Completed',
      duration: '3 months',
      features: ['Real-time Chat', 'Payment Integration', 'Project Management', 'Rating System', 'Advanced Search'],
    },
    {
      title: 'EventFlow - Event Management System',
      description: 'Event Management is built to help organizers create and manage events, track attendees, and coordinate schedules. It is intended to be a starting point that can be extended with authentication, ticketing, payment, notifications, and calendar integrations.',
      fullDescription: 'EventFlow is a sophisticated event management system designed to streamline the entire event lifecycle. From initial planning to post-event analytics, it provides organizers with powerful tools to create memorable experiences. The system includes attendee management, real-time notifications, calendar integrations, and comprehensive reporting features.',
      tech: ['Python', 'Django', 'MVT', 'SQLite'],
      techIcons: ['🐍', '🎯', '🏗️', '💎'],
      image: event,
      github: 'https://github.com/saif-dev-19/event_management',
      live: 'https://event-management-1-wdqj.onrender.com/',
      status: 'Completed',
      duration: '2 months',
      features: ['Event Creation', 'Attendee Management', 'Calendar Integration', 'Notifications', 'Analytics'],
    },
    {
      title: 'Phimart - E-commerce',
      description: 'Phimart-client is the frontend & backend application for Phimart — an e-commerce storefront UI.This repository contains the client-side code for browsing products, viewing product details, managing a shopping cart, and performing a client-side checkout flow backend integration. payments, orders, and authentication',
      fullDescription: 'Phimart is a full-featured e-commerce platform that delivers a seamless shopping experience. Built with scalability in mind, it handles everything from product catalog management to order processing. The platform features advanced search capabilities, personalized recommendations, secure checkout, and comprehensive admin tools for inventory management.',
      tech: ['Python', 'Django', 'PostgreSQL', 'JWT', 'DRF','JavaScript','React','Tailwind CSS'],
      techIcons: ['🐍', '🎯', '🐘', '🔐', '⚡', '🟨', '⚛️', '💨'],
      image: phimart,
      github: 'https://github.com/saif-dev-19/phimart',
      live: 'https://phimart-client-e.vercel.app/',
      status: 'Completed',
      duration: '4 months',
      features: ['Product Catalog', 'Shopping Cart', 'Payment Gateway', 'Order Management', 'Admin Panel'],
    },
    {
      title: 'HealSync+ - Hospital Management System',
      description: 'This is a role-based Hospital Management System built with Django REST Framework and React. Users can register either as Doctor or Patient, and the system automatically creates their corresponding Profile, Doctor, or Patient objects based on their role. Doctors can select a Specialty, which is managed by the admin, and all authentication is handled using JWT. The system ensures secure login, structured data management, and a clean UI for easy registration and navigation.',
      fullDescription: 'HealSync+ is an advanced hospital management system that digitizes and optimizes healthcare workflows. It provides seamless integration between different departments, enabling efficient patient care, appointment scheduling, medical records management, and billing processes. The system is designed with healthcare professionals in mind, offering intuitive interfaces and robust security features.',
      tech: ['React', 'Tailwind CSS', 'PostgreSQL', 'JavaScript'],
      techIcons: ['⚛️', '💨', '🐘', '🟨'],
      image: hms,
      github: 'https://github.com/saif-dev-19/hospital-management',
      live: 'https://hospital-management-wine-gamma.vercel.app/',
      status: 'Running',
      duration: '5 months',
      features: ['Patient Management', 'Appointment Scheduling', 'Medical Records', 'Billing System', 'Reports'],
    },
    // {
    //   title: 'TaskFlow - Project Management',
    //   description: 'A comprehensive project management tool built with modern web technologies. Features include task tracking, team collaboration, deadline management, and progress visualization with interactive dashboards.',
    //   fullDescription: 'TaskFlow is a powerful project management platform designed to streamline team workflows and boost productivity. It offers comprehensive task management, real-time collaboration tools, advanced reporting, and intuitive project visualization. The platform supports agile methodologies and provides detailed analytics for project optimization.',
    //   tech: ['Python', 'Django', 'React', 'PostgreSQL', 'WebSocket'],
    //   techIcons: ['🐍', '🎯', '⚛️', '🐘', '🔌'],
    //   image: freelance, // Using existing image as placeholder
    //   github: 'https://github.com/saif-dev-19/taskflow',
    //   live: 'https://taskflow-demo.vercel.app/',
    //   status: 'In Progress',
    //   duration: '2 months',
    //   features: ['Task Management', 'Team Collaboration', 'Progress Tracking', 'Analytics Dashboard', 'File Sharing'],
    // },
    // {
    //   title: 'CodeShare - Developer Platform',
    //   description: 'A social platform for developers to share code snippets, collaborate on projects, and learn from each other. Features syntax highlighting, version control integration, and community-driven learning.',
    //   fullDescription: 'CodeShare is a vibrant developer community platform that facilitates knowledge sharing and collaboration. It provides advanced code editing capabilities, project showcasing, peer review systems, and educational resources. The platform supports multiple programming languages and integrates with popular development tools.',
    //   tech: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Docker'],
    //   techIcons: ['⚛️', '🟢', '🍃', '🔌', '🐳'],
    //   image: event, // Using existing image as placeholder
    //   github: 'https://github.com/saif-dev-19/codeshare',
    //   live: 'https://codeshare-platform.vercel.app/',
    //   status: 'Completed',
    //   duration: '3 months',
    //   features: ['Code Sharing', 'Syntax Highlighting', 'Version Control', 'Community Features', 'Learning Resources'],
    // },
    // {
    //   title: 'FinTrack - Personal Finance',
    //   description: 'A personal finance management application that helps users track expenses, manage budgets, and achieve financial goals. Features include expense categorization, budget planning, and financial insights.',
    //   fullDescription: 'FinTrack is a comprehensive personal finance management solution that empowers users to take control of their financial health. It offers intelligent expense tracking, budget optimization, investment monitoring, and personalized financial advice. The platform uses advanced analytics to provide actionable insights for better financial decisions.',
    //   tech: ['Flutter', 'Dart', 'Firebase', 'SQLite', 'Charts'],
    //   techIcons: ['📱', '🎯', '🔥', '💎', '📊'],
    //   image: phimart, // Using existing image as placeholder
    //   github: 'https://github.com/saif-dev-19/fintrack',
    //   live: 'https://fintrack-app.vercel.app/',
    //   status: 'Completed',
    //   duration: '4 months',
    //   features: ['Expense Tracking', 'Budget Planning', 'Financial Goals', 'Investment Monitoring', 'Reports & Analytics'],
    // },
    // {
    //   title: 'EduPortal - Learning Management',
    //   description: 'An online learning management system designed for educational institutions. Features include course management, student enrollment, assignment tracking, and progress monitoring.',
    //   fullDescription: 'EduPortal is a comprehensive learning management system that digitizes educational processes and enhances the learning experience. It provides robust course creation tools, interactive learning modules, assessment systems, and detailed progress tracking. The platform supports both synchronous and asynchronous learning methodologies.',
    //   tech: ['Python', 'Django', 'React', 'PostgreSQL', 'Redis'],
    //   techIcons: ['🐍', '🎯', '⚛️', '🐘', '🔴'],
    //   image: hms, // Using existing image as placeholder
    //   github: 'https://github.com/saif-dev-19/eduportal',
    //   live: 'https://eduportal-lms.vercel.app/',
    //   status: 'In Progress',
    //   duration: '6 months',
    //   features: ['Course Management', 'Student Enrollment', 'Assignment System', 'Progress Tracking', 'Interactive Learning'],
    // },
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
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: 'easeOut',
        delay: index * 0.1
      },
    }),
  };

  const displayedProjects = showAllProjects ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Featured Projects"
          subtitle="Showcasing my work in backend systems and full-stack applications"
        />

        <div className="code-section p-4 sm:p-6 md:p-8">
          <div className="line-numbers hidden sm:block">
            {Array.from({ length: showAllProjects ? 25 : 15 }, (_, i) => (
              <div key={i}>{i + 1}</div>
            ))}
          </div>
          <div className="sm:ml-12">
            <motion.div
              key={showAllProjects ? 'all-projects' : 'featured-projects'}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4"
            >
              {displayedProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  custom={index}
                  variants={cardVariants}
                  whileHover={{ y: -2, scale: 1.01 }}
                  onClick={() => setSelectedProject(project)}
                  className="glass rounded-lg overflow-hidden hover:glass-strong hover:neon-glow transition-all duration-300 group cursor-pointer hover-glow flex flex-col"
                >
                  {/* Project Image */}
                  <div className="relative h-28 sm:h-32 bg-gradient-to-br from-accent/20 to-accent/5 overflow-hidden flex-shrink-0">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-2 right-2">
                      <span className={`px-1.5 sm:px-2 py-0.5 sm:py-1 text-xs rounded-md font-medium terminal-text whitespace-nowrap ${
                        project.status === 'Completed' 
                          ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                          : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-3 sm:p-4 space-y-2 flex-1 flex flex-col">
                    <h3 className="text-sm sm:text-base font-semibold text-text group-hover:text-accent transition-colors terminal-text line-clamp-2 break-words">
                      <span className="code-tag">const</span> {project.title.split(' ')[0]} = <span className="code-comment">{"{"}</span>
                    </h3>
                    <p className="text-text/70 text-xs leading-relaxed line-clamp-2 break-words flex-1">
                      {project.description}
                    </p>

                    {/* Tech Stack - Real Icons */}
                    <div className="flex flex-wrap gap-1 pt-1">
                      {project.tech.slice(0, 4).map((tech, i) => (
                        <span key={i} className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-accent/10 text-accent text-xs rounded border border-accent/20 terminal-text whitespace-nowrap">
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 4 && (
                        <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-accent/10 text-accent text-xs rounded border border-accent/20 whitespace-nowrap">
                          +{project.tech.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Links */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedProject(project);
                        }}
                        className="flex items-center gap-1 text-text/70 hover:text-accent transition-colors text-xs bg-accent/10 px-1.5 sm:px-2 py-1 rounded border border-accent/20 hover:bg-accent/20 whitespace-nowrap"
                      >
                        <Info size={12} className="flex-shrink-0" />
                        <span>Details</span>
                      </motion.button>
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-1 text-text/70 hover:text-accent transition-colors text-xs whitespace-nowrap"
                      >
                        <Github size={12} className="flex-shrink-0" />
                        <span>Code</span>
                      </motion.a>
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-1 text-text/70 hover:text-accent transition-colors text-xs whitespace-nowrap"
                      >
                        <ExternalLink size={12} className="flex-shrink-0" />
                        <span>Live</span>
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* See All Projects Button */}
            {!showAllProjects && projects.length > 3 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mt-8"
              >
                <motion.button
                  onClick={() => setShowAllProjects(true)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary terminal-text"
                >
                  <span className="code-comment">// </span>
                  showAllProjects({projects.length})
                </motion.button>
              </motion.div>
            )}

            {/* Show Less Button */}
            {showAllProjects && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mt-8"
              >
                <motion.button
                  onClick={() => setShowAllProjects(false)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary terminal-text"
                >
                  <span className="code-comment">// </span>
                  showLess()
                </motion.button>
              </motion.div>
            )}
          </div>
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="glass-strong rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto neon-glow-strong m-4"
              >
                {/* Modal Header */}
                <div className="sticky top-0 glass-strong border-b border-accent/20 p-4 sm:p-6 flex justify-between items-start gap-4 z-10">
                  <div className="flex-1 min-w-0">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold gradient-text terminal-text break-words">{selectedProject.title}</h2>
                    <div className="flex flex-wrap items-center gap-2 sm:gap-4 mt-2">
                      <span className={`px-2 sm:px-3 py-0.5 sm:py-1 text-xs sm:text-sm rounded-full font-medium whitespace-nowrap ${
                        selectedProject.status === 'Completed' 
                          ? 'bg-terminal-green/20 text-terminal-green border border-terminal-green/30' 
                          : 'bg-cyber-blue/20 text-cyber-blue border border-cyber-blue/30'
                      }`}>
                        {selectedProject.status}
                      </span>
                      <div className="flex items-center gap-2 text-text/60">
                        <Calendar size={14} className="flex-shrink-0" />
                        <span className="text-xs sm:text-sm whitespace-nowrap">{selectedProject.duration}</span>
                      </div>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSelectedProject(null)}
                    className="p-2 glass rounded-lg text-accent hover:neon-glow transition-all duration-300 flex-shrink-0"
                  >
                    <X size={20} className="sm:w-6 sm:h-6" />
                  </motion.button>
                </div>

                <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                  {/* Project Image Gallery */}
                  <div className="relative rounded-xl overflow-hidden border border-accent/30 neon-glow">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-100 md:h-100 object-cover"
                    />
                    <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 glass px-2 sm:px-3 py-1 rounded-md">
                      <span className="text-xs terminal-text text-accent whitespace-nowrap">
                        <span className="code-comment">// </span>
                        screenshot.png
                      </span>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                    <div className="space-y-3 sm:space-y-4">
                      <h3 className="text-lg sm:text-xl font-bold terminal-text break-words">
                        <span className="code-comment">/* </span>
                        <span className="code-tag">Project Overview</span>
                        <span className="code-comment"> */</span>
                      </h3>
                      <div className="glass p-3 sm:p-4 rounded-lg">
                        <p className="text-text/80 leading-relaxed terminal-text text-xs sm:text-sm break-words">
                          {selectedProject.fullDescription}
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="text-base sm:text-lg font-semibold terminal-text mb-2 sm:mb-3 break-words">
                          <span className="code-comment">// </span>
                          <span className="code-tag">features</span>
                          <span className="text-accent">[]</span>
                        </h4>
                        <div className="glass p-3 sm:p-4 rounded-lg">
                          <ul className="space-y-1.5 sm:space-y-2">
                            {selectedProject.features?.map((feature, i) => (
                              <li key={i} className="flex items-start gap-2 text-text/70 text-xs sm:text-sm">
                                <span className="text-green-400 mt-0.5 sm:mt-1 terminal-text flex-shrink-0">✓</span>
                                <span className="terminal-text break-words">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3 sm:space-y-4">
                      <h3 className="text-lg sm:text-xl font-bold terminal-text break-words">
                        <span className="code-comment">// </span>
                        <span className="code-tag">techStack</span>
                        <span className="text-accent">{`{}`}</span>
                      </h3>
                      <div className="glass p-3 sm:p-4 rounded-lg">
                        <div className="grid grid-cols-1 gap-1.5 sm:gap-2">
                          {selectedProject.tech.map((tech, i) => (
                            <div key={tech} className="flex items-center gap-2 sm:gap-3 p-1.5 sm:p-2 bg-background/30 rounded-md hover:bg-accent/10 transition-colors">
                              <div className="w-5 h-5 sm:w-6 sm:h-6 bg-accent/20 rounded flex items-center justify-center flex-shrink-0">
                                <span className="text-accent text-xs font-bold">
                                  {tech.charAt(0)}
                                </span>
                              </div>
                              <span className="text-text/90 font-medium terminal-text text-xs sm:text-sm break-words">{tech}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-2 sm:space-y-3">
                        <motion.a
                          href={selectedProject.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 glass rounded-lg font-medium hover:glass-strong hover:neon-glow transition-all duration-300 terminal-text text-sm whitespace-nowrap"
                        >
                          <Github size={16} className="flex-shrink-0" />
                          <span className="code-comment">// </span>
                          <span className="break-keep">viewSource()</span>
                        </motion.a>
                        <motion.a
                          href={selectedProject.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full btn-primary flex items-center justify-center gap-2 text-sm whitespace-nowrap"
                        >
                          <ExternalLink size={16} className="flex-shrink-0" />
                          <span className="code-comment">// </span>
                          <span className="break-keep">liveDemo()</span>
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;