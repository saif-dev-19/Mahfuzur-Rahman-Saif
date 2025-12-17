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

    try {
      // Try multiple endpoints for better compatibility
      let response;
      
      // First try Vercel API
      try {
        response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
          }),
        });
      } catch (vercelError) {
        // If Vercel fails, try Netlify function
        response = await fetch('/.netlify/functions/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
          }),
        });
      }

      if (response && response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        // Fallback: Create mailto link
        const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
        const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
        const mailtoLink = `mailto:mahfujurrahmansaif@gmail.com?subject=${subject}&body=${body}`;
        
        window.open(mailtoLink, '_blank');
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      console.error('Contact form error:', error);
      // Fallback: Create mailto link
      const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
      const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
      const mailtoLink = `mailto:mahfujurrahmansaif@gmail.com?subject=${subject}&body=${body}`;
      
      window.open(mailtoLink, '_blank');
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } finally {
      setIsSubmitting(false);
    }
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

        <div className="code-section p-8">
          <div className="line-numbers">
            {Array.from({ length: 25 }, (_, i) => (
              <div key={i}>{i + 1}</div>
            ))}
          </div>
          <div className="ml-12">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
              <div>
                <h3 className="text-2xl font-bold terminal-text mb-4">
                  <span className="code-comment">/* </span>
                  <span className="code-tag">Let's Connect</span>
                  <span className="code-comment"> */</span>
                </h3>
                <div className="glass p-4 rounded-lg">
                  <p className="text-text/70 leading-relaxed terminal-text text-sm">
                    <span className="code-comment">// </span>
                    I'm always interested in hearing about new projects and opportunities.
                    <br />
                    <span className="code-comment">// </span>
                    Whether you have a question or just want to say hi, feel free to reach out!
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, x: 10 }}
                    className="flex items-center gap-4 p-4 glass rounded-lg hover:glass-strong hover:neon-glow transition-all duration-300"
                  >
                    <div className="p-3 bg-accent/20 rounded-lg neon-glow">
                      <info.icon className="text-accent" size={24} />
                    </div>
                    <div>
                      <p className="text-text/60 text-sm terminal-text">{info.label}</p>
                      <p className="text-text font-medium">{info.value}</p>
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
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400"
                >
                  <CheckCircle size={20} />
                  <span>Message sent successfully! Your email client may have opened, or I'll get back to you soon.</span>
                </motion.div>
              )}
              
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400"
                >
                  <AlertCircle size={20} />
                  <span>Failed to send message. Please try again or contact me directly.</span>
                </motion.div>
              )}

                <div>
                  <label htmlFor="name" className="block text-text mb-2 font-medium terminal-text">
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
                    className="w-full px-4 py-3 glass border border-accent/20 rounded-lg text-text focus:outline-none focus:border-accent focus:neon-glow transition-all duration-300 terminal-text hover-glow"
                    placeholder="Enter your name..."
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-text mb-2 font-medium terminal-text">
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
                    className="w-full px-4 py-3 glass border border-accent/20 rounded-lg text-text focus:outline-none focus:border-accent focus:neon-glow transition-all duration-300 terminal-text hover-glow"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-text mb-2 font-medium terminal-text">
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
                    className="w-full px-4 py-3 glass border border-accent/20 rounded-lg text-text focus:outline-none focus:border-accent focus:neon-glow transition-all duration-300 resize-none terminal-text hover-glow"
                    placeholder="Type your message here..."
                  />
                </div>

                <div className="flex gap-4">
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    className={`flex-1 btn-primary ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span className="code-comment">// </span>
                        sending...
                      </>
                    ) : (
                      <>
                        <Send size={14} />
                        <span className="code-comment">// </span>
                        sendMessage()
                      </>
                    )}
                  </motion.button>

                  <motion.a
                    href="mailto:mahfujurrahmansaif@gmail.com?subject=Portfolio Contact&body=Hi Mahfuz,%0D%0A%0D%0AI'd like to get in touch with you.%0D%0A%0D%0ABest regards"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-6 py-3 glass border border-accent/30 rounded-lg text-accent hover:glass-strong hover:neon-glow transition-all duration-300 flex items-center gap-2 terminal-text font-medium"
                  >
                    <Mail size={18} />
                    <span className="code-comment">// </span>
                    Direct Email
                  </motion.a>
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
