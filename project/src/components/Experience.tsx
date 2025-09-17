import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import AnimatedText from './AnimatedText';
import {
  BiBriefcase,
  BiSolidGraduation,
  BiCalendar,
  BiMap,
  BiCode,
  BiTrendingUp
} from 'react-icons/bi';

const experiences = [
  {
    title: 'Frontend Developer',
    company: 'Safe Your Web',
    location: 'Delhi, India',
    period: 'Oct 2024 - Jan 2025',
    description: 'Developed and maintained modern web applications using React and contemporary development practices.',
    achievements: [
      'Built responsive web applications with React and modern CSS frameworks',
      'Implemented cross-browser compatibility and mobile-first design principles',
      'Collaborated with design and backend teams to deliver seamless user experiences',
      'Optimized application performance and implemented best practices'
    ],
    type: 'work',
    icon: BiCode,
    color: '#3B82F6'
  },
  {
    title: 'Bachelor in Computer Science',
    company: 'Shushila Devi Bansal College of Technology',
    location: 'Indore, Madhya Pradesh',
    period: '2021 - 2025',
    description: 'Comprehensive study in Computer Science with focus on software development and modern technologies.',
    achievements: [
      'Strong foundation in programming languages and software engineering principles',
      'Completed projects in web development, data structures, and algorithms',
      'Participated in coding competitions and technical workshops',
      'Maintained excellent academic performance throughout the program'
    ],
    type: 'education',
    icon: BiSolidGraduation,
    color: '#10B981'
  }
];

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"]
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-maroon/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <AnimatedText
            el="h2"
            text="Experience & Education"
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
          />
          <AnimatedText
            el="p"
            text="My journey in technology, from education to professional experience."
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          />
        </div>

        {/* Timeline */}
        <div ref={ref} className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <motion.div
              style={{ scaleY }}
              className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-maroon via-blue-500 to-maroon opacity-20 origin-top"
            />
            
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative flex items-start mb-12 last:mb-0"
                >
                  {/* Timeline Dot */}
                  <motion.div 
                    className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-white/5 backdrop-blur-sm border-2 border-white/10 hover:border-maroon/30 transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Icon 
                      className="w-8 h-8" 
                      style={{ color: exp.color }}
                    />
                  </motion.div>
                  
                  {/* Content */}
                  <div className="ml-8 flex-1">
                    <motion.div 
                      className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-maroon/30 transition-all duration-300"
                      whileHover={{ y: -5 }}
                    >
                      {/* Header */}
                      <div className="flex flex-wrap items-center gap-4 mb-6">
                        <span 
                          className="px-3 py-1 rounded-full text-sm font-medium text-white bg-gradient-to-r"
                          style={{ 
                            backgroundImage: `linear-gradient(to right, ${exp.color}, ${exp.color}88)` 
                          }}
                        >
                          {exp.type === 'work' ? 'Work Experience' : 'Education'}
                        </span>
                        
                        <div className="flex items-center gap-2 text-gray-400">
                          <BiCalendar className="w-4 h-4" />
                          <span className="text-sm">{exp.period}</span>
                        </div>
                        
                        <div className="flex items-center gap-2 text-gray-400">
                          <BiMap className="w-4 h-4" />
                          <span className="text-sm">{exp.location}</span>
                        </div>
                      </div>
                      
                      {/* Title and Company */}
                      <h3 className="text-2xl font-bold mb-2 text-white">
                        {exp.title}
                      </h3>
                      <h4 className="text-lg font-semibold mb-4 text-gray-300">
                        {exp.company}
                      </h4>
                      
                      {/* Description */}
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {exp.description}
                      </p>
                      
                      {/* Achievements */}
                      <div className="space-y-3">
                        {exp.achievements.map((achievement, i) => (
                          <motion.div 
                            key={i} 
                            className="flex items-start gap-3"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 * i }}
                          >
                            <div 
                              className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                              style={{ backgroundColor: exp.color }}
                            />
                            <p className="text-gray-300 text-sm leading-relaxed">
                              {achievement}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 max-w-4xl mx-auto"
        >
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-maroon/30 transition-all duration-300">
            <div className="text-center">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.8 }}
              >
                <BiTrendingUp className="w-12 h-12 mx-auto mb-4 text-maroon" />
              </motion.div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                Continuous Learning
              </h3>
              <p className="text-gray-300 max-w-2xl mx-auto">
                I'm constantly expanding my skill set and staying updated with the latest technologies. 
                My goal is to create innovative solutions that make a positive impact in the digital world.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;