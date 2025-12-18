import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ExternalLink, X, Calendar, Building } from 'lucide-react';
import SectionTitle from './SectionTitle';
import phitronCert from '../media/certificate/phitron.jpg';
import python from '../media/certificate/python.jpg';
import ILC from '../media/certificate/ILC.jpg';
import flutter from '../media/certificate/flutter.jpg';
import icpc from '../media/certificate/icpc.jpg';


const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const certificates = [
    {
      title: 'CS Fundamentals With Phitron: Fall 2024',
      issuer: 'Phitron',
      date: 'Nov-2025',
      credentialId: 'PHBATCH66222961007',
      image: phitronCert,
      description: 'Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database',
      skills: ['C', 'C++', 'Python', 'Data Structure & Algorithm',"OOP","Database"],
      verifyUrl: ' https://phitron.io/verification',
    },
    {
      title: 'Advanced Foundations of Python Programming',
      issuer: 'Udemy',
      date: 'Oct-2023',
      credentialId: 'UC-b96f406c-8de9-4eb1-b7b1-990946140925',
      image: python,
      description: 'This course provides an in-depth exploration of advanced Python programming concepts to help you become a proficient Python developer. Through hands-on training, you’ll master advanced collections (such as named tuples, default dictionaries, counters, and queues), advanced functions (zipping, unzipping, lambda functions, and memory views) etc.',
      skills: ['Python','OOP'],
      verifyUrl: 'ude.my/UC-b96f406c-8de9-4eb1-b7b1-990946140925',
    },
    {
      title: 'International Leadership Competition',
      issuer: 'International Leadership Competition(ILC 1.0)',
      date: 'May-2025',
      credentialId: '',
      image: ILC,
      description: 'Successfully completed the ILC 1.0 Know How Live Course, demonstrating commitment to continuous learning and professional development. This certificate reflects my ability to acquire new knowledge, adapt to structured training, and apply practical insights to real-world challenges.',
      skills: ['Soft Skill'],
      verifyUrl: '#',
    },
    {
      title: 'The 2023 ICPC Asia Dhaka Regional Contest 04-04 November 2023',
      issuer: 'icpc.foundation',
      date: 'Nov-2023',
      credentialId: '',
      image: icpc,
      description: 'Awarded the Honorable Mention at the ICPC Asia Dhaka Regional Contest 2024, recognizing strong problem-solving skills, algorithmic thinking, and competitive programming excellence. This achievement highlights my ability to tackle complex computational challenges under time constraints and demonstrates teamwork, analytical reasoning, and proficiency in advanced programming concepts.',
      skills: ['Problem Solving','Data Structure & Algorithm'],
      verifyUrl: '',
    },
    {
      title: 'Mobile App Development With Dart & Flutter',
      issuer: 'PeopleNTech',
      date: 'Nov-2023',
      credentialId: '16926111626',
      image: flutter,
      description: 'Completed a 90-hour course on Dart & Flutter at PeopleNTech Institute of IT from August to November 2023, gaining hands-on experience in cross-platform mobile app development.',
      skills: ['Dart','Flutter','OOP','API','Provider'],
      verifyUrl: '',
    },
    // {
    //   title: 'HashiCorp Certified: Terraform Associate',
    //   issuer: 'HashiCorp',
    //   date: 'April 2023',
    //   credentialId: 'TERRA-22222',
    //   image: '/certificates/terraform.jpg',
    //   description: 'Infrastructure as Code expertise using Terraform for cloud provisioning',
    //   skills: ['Terraform', 'IaC', 'DevOps', 'Automation'],
    //   verifyUrl: '#',
    // },
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
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="certificates" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Certifications"
          subtitle="Professional certifications and credentials"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.credentialId}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              onClick={() => setSelectedCert(cert)}
              className="bg-secondary rounded-xl overflow-hidden border border-accent/20 hover:border-accent/50 transition-all duration-300 cursor-pointer group flex flex-col"
            >
              {/* Certificate Image */}
              <div className="relative h-40 sm:h-48 bg-gradient-to-br from-accent/20 to-accent/5 overflow-hidden flex-shrink-0">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    // Fallback if image doesn't load
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback placeholder */}
                <div className="absolute inset-0 hidden items-center justify-center bg-secondary/80 backdrop-blur-sm">
                  <Award className="text-accent" size={48} />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-secondary to-transparent opacity-60" />
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="absolute top-2 sm:top-4 right-2 sm:right-4 p-1.5 sm:p-2 bg-accent rounded-full"
                >
                  <Award className="text-white" size={16} />
                </motion.div>
              </div>

              {/* Certificate Info */}
              <div className="p-4 sm:p-6 space-y-2 sm:space-y-3 flex-1 flex flex-col">
                <h3 className="text-sm sm:text-base md:text-lg font-bold text-text group-hover:text-accent transition-colors line-clamp-2 break-words">
                  {cert.title}
                </h3>
                <div className="flex items-start gap-2 text-text/70 text-xs sm:text-sm min-w-0">
                  <Building size={12} className="text-accent flex-shrink-0 mt-0.5" />
                  <span className="break-words">{cert.issuer}</span>
                </div>
                <div className="flex items-center gap-2 text-text/60 text-xs sm:text-sm">
                  <Calendar size={12} className="text-accent flex-shrink-0" />
                  <span className="whitespace-nowrap">{cert.date}</span>
                </div>
                <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-2 mt-auto">
                  {cert.skills.slice(0, 3).map((skill) => (
                    <span
                      key={skill}
                      className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-background text-accent text-xs rounded border border-accent/30 whitespace-nowrap"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Certificate Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-secondary rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-accent/30 shadow-2xl m-4"
            >
              {/* Close Button */}
              <div className="sticky top-0 bg-secondary/95 backdrop-blur-sm border-b border-accent/20 p-4 flex justify-between items-center gap-4 z-10">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-text break-words">Certificate Details</h2>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSelectedCert(null)}
                  className="p-2 bg-accent/10 hover:bg-accent/20 rounded-lg text-accent transition-colors flex-shrink-0"
                >
                  <X size={20} className="sm:w-6 sm:h-6" />
                </motion.button>
              </div>

              <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                {/* Certificate Image */}
                <div className="relative rounded-xl overflow-hidden border border-accent/30">
                  <img
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    className="w-full h-auto"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  {/* Fallback */}
                  <div className="hidden w-full h-48 sm:h-64 items-center justify-center bg-gradient-to-br from-accent/20 to-accent/5">
                    <Award className="text-accent" size={64} />
                  </div>
                </div>

                {/* Certificate Details */}
                <div className="space-y-3 sm:space-y-4">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-text break-words">{selectedCert.title}</h3>
                  
                  <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="flex items-start gap-2 sm:gap-3 p-3 bg-background rounded-lg min-w-0">
                      <Building className="text-accent flex-shrink-0 mt-0.5" size={18} />
                      <div className="min-w-0 flex-1">
                        <p className="text-text/60 text-xs">Issued By</p>
                        <p className="text-text font-medium text-sm sm:text-base break-words">{selectedCert.issuer}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 sm:gap-3 p-3 bg-background rounded-lg min-w-0">
                      <Calendar className="text-accent flex-shrink-0 mt-0.5" size={18} />
                      <div className="min-w-0 flex-1">
                        <p className="text-text/60 text-xs">Issue Date</p>
                        <p className="text-text font-medium text-sm sm:text-base whitespace-nowrap">{selectedCert.date}</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 sm:p-4 bg-background rounded-lg">
                    <p className="text-text/60 text-xs mb-1">Credential ID</p>
                    <p className="text-text font-mono text-xs sm:text-sm break-all">{selectedCert.credentialId}</p>
                  </div>

                  <p className="text-text/70 leading-relaxed text-sm sm:text-base break-words">{selectedCert.description}</p>

                  <div>
                    <h4 className="text-accent font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Skills Covered:</h4>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {selectedCert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 bg-accent/10 text-accent rounded-lg border border-accent/30 font-medium text-xs sm:text-sm whitespace-nowrap"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <motion.a
                    href={selectedCert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 transition-colors text-sm sm:text-base whitespace-nowrap"
                  >
                    <ExternalLink size={18} className="flex-shrink-0" />
                    <span>Verify Certificate</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;
