import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  BiBriefcase,
  BiSolidGraduation,
  BiCalendar,
  BiMap
} from 'react-icons/bi';

const experiences = [

  {
    title: 'Frontend Developer',
    company: 'Safe Your Web',
    location: 'Delhi,india',
    period: '2024[october] - 2025[january]',
    description: 'Developed and maintained web applications using React and other modern web development tools.',
    achievements: [
      'Developed and maintained web applications using React and other modern web development tools.',
      'Implemented responsive design and cross-browser compatibility.',
      'Collaborated with cross-functional teams to deliver high-quality products.'
    ],
    type: 'Internship'
  },
  {
    title: 'Bachelor in Computer Science',
    company: 'Shushila devi Bansal college of Technology ',
    location: 'Indore, Madhya Pradesh',
    period: '2021 - 2025',
    description: 'Foundation in Computer Science and Programming.',
    achievements: [
      ""
    ],
    type: 'education'
  }
];

const Experience = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section id="experience" className="py-32 relative">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-maroon/20 rounded-full blur-[100px] mix-blend-screen" />
        <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-maroon/10 rounded-full blur-[100px] mix-blend-screen" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Experience & Education</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            My professional journey and educational background in technology and software development.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto" ref={containerRef}>
          {experiences.map((exp, index) => {
            // Create a progress value for each experience item
            const progress = useTransform(
              scrollYProgress,
              [index / experiences.length, (index + 1) / experiences.length],
              [0, 1]
            );
            
            return (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: exp.type === 'work' ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative pl-8 pb-16 last:pb-0"
              >
                {/* Timeline line with scroll animation */}
                <motion.div 
                  className="absolute left-[7px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-white via-white/50 to-transparent"
                  style={{ scaleY: progress }}
                  initial={{ scaleY: 0 }}
                  transition={{ duration: 0.5 }}
                />
                
                {/* Timeline dot with pulse animation */}
                <motion.div 
                  className="absolute left-0 top-1 w-3.5 h-3.5 rounded-full bg-white shadow-[0_0_20px_rgba(255,255,255,0.5)]"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: [0, 1.2, 1] }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  style={{
                    boxShadow: "0 0 20px rgba(255, 255, 255, 0.5)"
                  }}
                />
                
                <div className="glass-effect p-8 rounded-2xl">
                  <div className="flex flex-wrap items-start gap-4 mb-6">
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-white/20 to-transparent">
                      {exp.type === 'work' ? (
                        <BiBriefcase className="w-5 h-5 text-white" />
                      ) : (
                        <BiSolidGraduation className="w-5 h-5 text-white" />
                      )}
                      <span className="text-white font-medium">{exp.type === 'work' ? 'Work' : 'Education'}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-white/60">
                      <BiCalendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-white/60">
                      <BiMap className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-semibold mb-2">{exp.title}</h3>
                  <h4 className="text-xl text-white/80 mb-4">{exp.company}</h4>
                  <p className="text-white/70 mb-6">{exp.description}</p>
                  
                  <div className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-white" />
                        <p className="text-white/80">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;