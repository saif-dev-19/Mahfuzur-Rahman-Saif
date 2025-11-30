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
    <section id="certificates" className="py-20 bg-background">
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
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.credentialId}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              onClick={() => setSelectedCert(cert)}
              className="bg-secondary rounded-xl overflow-hidden border border-accent/20 hover:border-accent/50 transition-all duration-300 cursor-pointer group"
            >
              {/* Certificate Image */}
              <div className="relative h-48 bg-gradient-to-br from-accent/20 to-accent/5 overflow-hidden">
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
                  <Award className="text-accent" size={64} />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-secondary to-transparent opacity-60" />
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="absolute top-4 right-4 p-2 bg-accent rounded-full"
                >
                  <Award className="text-white" size={20} />
                </motion.div>
              </div>

              {/* Certificate Info */}
              <div className="p-6 space-y-3">
                <h3 className="text-lg font-bold text-text group-hover:text-accent transition-colors line-clamp-2">
                  {cert.title}
                </h3>
                <div className="flex items-center gap-2 text-text/70 text-sm">
                  <Building size={14} className="text-accent" />
                  <span>{cert.issuer}</span>
                </div>
                <div className="flex items-center gap-2 text-text/60 text-sm">
                  <Calendar size={14} className="text-accent" />
                  <span>{cert.date}</span>
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                  {cert.skills.slice(0, 3).map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 bg-background text-accent text-xs rounded border border-accent/30"
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
              className="bg-secondary rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-accent/30 shadow-2xl"
            >
              {/* Close Button */}
              <div className="sticky top-0 bg-secondary/95 backdrop-blur-sm border-b border-accent/20 p-4 flex justify-between items-center z-10">
                <h2 className="text-2xl font-bold text-text">Certificate Details</h2>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSelectedCert(null)}
                  className="p-2 bg-accent/10 hover:bg-accent/20 rounded-lg text-accent transition-colors"
                >
                  <X size={24} />
                </motion.button>
              </div>

              <div className="p-6 space-y-6">
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
                  <div className="hidden w-full h-64 items-center justify-center bg-gradient-to-br from-accent/20 to-accent/5">
                    <Award className="text-accent" size={96} />
                  </div>
                </div>

                {/* Certificate Details */}
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold text-text">{selectedCert.title}</h3>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3 p-3 bg-background rounded-lg">
                      <Building className="text-accent" size={20} />
                      <div>
                        <p className="text-text/60 text-xs">Issued By</p>
                        <p className="text-text font-medium">{selectedCert.issuer}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-background rounded-lg">
                      <Calendar className="text-accent" size={20} />
                      <div>
                        <p className="text-text/60 text-xs">Issue Date</p>
                        <p className="text-text font-medium">{selectedCert.date}</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-background rounded-lg">
                    <p className="text-text/60 text-xs mb-1">Credential ID</p>
                    <p className="text-text font-mono">{selectedCert.credentialId}</p>
                  </div>

                  <p className="text-text/70 leading-relaxed">{selectedCert.description}</p>

                  <div>
                    <h4 className="text-accent font-semibold mb-3">Skills Covered:</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedCert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-4 py-2 bg-accent/10 text-accent rounded-lg border border-accent/30 font-medium"
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
                    className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 transition-colors"
                  >
                    <ExternalLink size={20} />
                    Verify Certificate
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
