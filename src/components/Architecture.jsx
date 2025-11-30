import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Network, Shield, Zap } from 'lucide-react';
import SectionTitle from './SectionTitle';

const Architecture = () => {
  const caseStudies = [
    {
      title: 'Microservices Migration',
      icon: Layers,
      challenge: 'Monolithic application struggling with scalability and deployment bottlenecks',
      solution: 'Decomposed into 12 microservices with API gateway, service mesh, and event-driven communication',
      results: ['99.9% uptime', '5x faster deployments', '60% cost reduction'],
      tech: ['Kubernetes', 'Istio', 'RabbitMQ', 'Docker'],
    },
    {
      title: 'High-Performance API',
      icon: Zap,
      challenge: 'API response times exceeding 2 seconds under load, affecting user experience',
      solution: 'Implemented caching strategy, database optimization, and load balancing with CDN integration',
      results: ['200ms avg response', '10K req/sec capacity', '95% cache hit rate'],
      tech: ['Redis', 'PostgreSQL', 'Nginx', 'CloudFlare'],
    },
    {
      title: 'Distributed System Design',
      icon: Network,
      challenge: 'Need for fault-tolerant system processing millions of transactions daily',
      solution: 'Built distributed architecture with CQRS pattern, event sourcing, and eventual consistency',
      results: ['Zero data loss', 'Auto-recovery', 'Horizontal scaling'],
      tech: ['Kafka', 'Cassandra', 'Consul', 'Prometheus'],
    },
    {
      title: 'Security Hardening',
      icon: Shield,
      challenge: 'Multiple security vulnerabilities and compliance requirements for financial data',
      solution: 'Implemented zero-trust architecture, encryption at rest/transit, and comprehensive audit logging',
      results: ['SOC 2 compliant', 'Zero breaches', 'Automated security scans'],
      tech: ['Vault', 'OAuth2', 'TLS', 'SIEM'],
    },
  ];

  return (
    <section id="architecture" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Architecture & Case Studies"
          subtitle="Real-world solutions to complex technical challenges"
        />

        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-secondary rounded-xl p-8 border border-accent/20 hover:border-accent/50 transition-all duration-300"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="inline-block p-4 bg-accent/10 rounded-lg mb-6"
              >
                <study.icon className="text-accent" size={32} />
              </motion.div>

              <h3 className="text-2xl font-bold text-text mb-4">{study.title}</h3>

              <div className="space-y-4">
                <div>
                  <h4 className="text-accent font-semibold mb-2">Challenge</h4>
                  <p className="text-text/70 text-sm">{study.challenge}</p>
                </div>

                <div>
                  <h4 className="text-accent font-semibold mb-2">Solution</h4>
                  <p className="text-text/70 text-sm">{study.solution}</p>
                </div>

                <div>
                  <h4 className="text-accent font-semibold mb-2">Results</h4>
                  <ul className="space-y-1">
                    {study.results.map((result, i) => (
                      <li key={i} className="flex items-center gap-2 text-text/70 text-sm">
                        <span className="text-accent">✓</span>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {study.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-background text-accent text-xs rounded-full border border-accent/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Architecture;
