import React from "react";
import { motion } from "framer-motion";
import SkillsMarquee from './SkillsMarquee';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-maroon/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm passionate about creating digital experiences that combine beautiful design with powerful functionality.
            With a focus on modern web technologies, I bring ideas to life through clean code and intuitive interfaces.
          </p>
        </motion.div>

        {/* Journey Section - Moved up for better flow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20 max-w-4xl mx-auto"
        >
          <div className="bg-white/5 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-white/10 hover:border-maroon/30 transition-all duration-300">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">
              My Journey
            </h3>
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                I'm a passionate full-stack developer with a keen eye for design and a love for creating
                seamless digital experiences. My journey in web development started with curiosity and
                has evolved into a dedicated pursuit of excellence.
              </p>
              <p>
                I specialize in modern web technologies including React, Node.js, and various databases.
                My approach combines technical expertise with creative problem-solving to deliver solutions
                that not only work flawlessly but also provide exceptional user experiences.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to open-source
                projects, or sharing knowledge with the developer community.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Skills Section */}
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Technical Expertise
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto mb-12">
            Here are the technologies I work with to bring ideas to life
          </p>
        </motion.div>
        <SkillsMarquee />
      </div>
    </section>
  );
};

export default About;
