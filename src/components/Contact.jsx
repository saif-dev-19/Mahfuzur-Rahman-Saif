import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, CheckCircle, AlertCircle } from 'lucide-react';
import SectionTitle from './SectionTitle';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate form processing delay for better UX
    setTimeout(() => {
      try {
        // Create mailto link with form data
        const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
        const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
        const mailtoLink = `mailto:mahfujurrahmansaif@gmail.com?subject=${subject}&body=${body}`;
        
        window.open(mailtoLink, '_blank');
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } catch (error) {
        console.error('Contact form error:', error);
        setSubmitStatus('error');
      } finally {
        setIsSubmitting(false);
      }
    }, 1000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'mahfujurrahmansaif@gmail.com', href: 'mailto:mahfujurrahmansaif@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+880 1626478828', href: '#' },
    { icon: MapPin, label: 'Location', value: 'Mirpur,Dhaka', href: '#' },
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Get In Touch"
          subtitle="Let's discuss your next project or opportunity"
        />

        <div className="code-section p-4 sm:p-6 md:p-8">
          <div className="line-numbers hidden sm:block">
            {Array.from({ length: 25 }, (_, i) => (
              <div key={i}>{i + 1}</div>
            ))}
          </div>
          <div className="sm:ml-12">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6 md:space-y-8"
              >
              <div>
                <h3 className="text-xl sm:text-2xl font-bold terminal-text mb-3 sm:mb-4 break-words">
                  <span className="code-comment">/* </span>
                  <span className="code-tag">Let's Connect</span>
                  <span className="code-comment"> */</span>
                </h3>
                <div className="glass p-3 sm:p-4 rounded-lg">
                  <p className="text-text/70 leading-relaxed terminal-text text-xs sm:text-sm break-words">
                    <span className="code-comment">// </span>
                    I'm always interested in hearing about new projects and opportunities.
                    <br />
                    <span className="code-comment">// </span>
                    Whether you have a question or just want to say hi, feel free to reach out!
                  </p>
                </div>
              </div>

              <div className="space-y-3 sm:space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, x: 10 }}
                    className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 glass rounded-lg hover:glass-strong hover:neon-glow transition-all duration-300"
                  >
                    <div className="p-2 sm:p-3 bg-accent/20 rounded-lg neon-glow flex-shrink-0">
                      <info.icon className="text-accent" size={20} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-text/60 text-xs sm:text-sm terminal-text">{info.label}</p>
                      <p className="text-text font-medium text-sm sm:text-base break-all">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-start gap-2 p-3 sm:p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400"
                >
                  <CheckCircle size={18} className="flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm break-words">Message sent successfully! Your email client may have opened, or I'll get back to you soon.</span>
                </motion.div>
              )}
              
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-start gap-2 p-3 sm:p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400"
                >
                  <AlertCircle size={18} className="flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm break-words">Failed to send message. Please try again or contact me directly.</span>
                </motion.div>
              )}

                <div>
                  <label htmlFor="name" className="block text-text mb-2 font-medium terminal-text text-sm sm:text-base break-words">
                    <span className="code-tag">const</span> <span className="text-accent">name</span> = <span className="code-comment">"</span>
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.01, y: -1 }}
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 glass border border-accent/20 rounded-lg text-text focus:outline-none focus:border-accent focus:neon-glow transition-all duration-300 terminal-text hover-glow text-sm sm:text-base"
                    placeholder="Enter your name..."
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-text mb-2 font-medium terminal-text text-sm sm:text-base break-words">
                    <span className="code-tag">const</span> <span className="text-accent">email</span> = <span className="code-comment">"</span>
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.01, y: -1 }}
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 glass border border-accent/20 rounded-lg text-text focus:outline-none focus:border-accent focus:neon-glow transition-all duration-300 terminal-text hover-glow text-sm sm:text-base"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-text mb-2 font-medium terminal-text text-sm sm:text-base break-words">
                    <span className="code-tag">const</span> <span className="text-accent">message</span> = <span className="code-comment">`</span>
                  </label>
                  <motion.textarea
                    whileFocus={{ scale: 1.01, y: -1 }}
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 glass border border-accent/20 rounded-lg text-text focus:outline-none focus:border-accent focus:neon-glow transition-all duration-300 resize-none terminal-text hover-glow text-sm sm:text-base"
                    placeholder="Type your message here..."
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    className={`flex-1 btn-primary text-sm sm:text-base whitespace-nowrap ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin flex-shrink-0" />
                        <span className="code-comment">// </span>
                        <span className="break-keep">sending...</span>
                      </>
                    ) : (
                      <div className='flex justify-center'>
                        <Send size={16} className="flex-shrink-0 mt-1" />
                        <span className="code-comment">// </span>
                        <span className="break-keep">sendMessage()</span>
                      </div>
                    )}
                  </motion.button>

                  {/* <motion.a
                    href="mailto:mahfujurrahmansaif@gmail.com?subject=Portfolio Contact&body=Hi Mahfuz,%0D%0A%0D%0AI'd like to get in touch with you.%0D%0A%0D%0ABest regards"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-4 sm:px-6 py-2 sm:py-3 glass border border-accent/30 rounded-lg text-accent hover:glass-strong hover:neon-glow transition-all duration-300 flex items-center justify-center gap-2 terminal-text font-medium text-sm sm:text-base whitespace-nowrap"
                  >
                    <Mail size={16} className="flex-shrink-0" />
                    <span className="code-comment">// </span>
                    Direct Email
                  </motion.a> */}
                </div>
              </form>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
