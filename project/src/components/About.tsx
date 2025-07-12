import React from "react";
import { motion } from "framer-motion";
import {
  Html5,
  Css3,
  FileJson,
  ReactLogo,
  NextjsIcon,
  NodejsIcon,
  MongoDBIcon,
  PostgreSQLIcon,
  ExpressIcon,
  TailwindIcon,
  Git,
  Github,
  WebSocketIcon,
  SocketIOIcon,
} from '../utils/logo';

const skills = [
  { name: "HTML", icon: Html5, color: "#E34F26", level: 90 },
  { name: "CSS", icon: Css3, color: "#1572B6", level: 85 },
  { name: "JavaScript", icon: FileJson, color: "#F7DF1E", level: 88 },
  { name: "React.js", icon: ReactLogo, color: "#61DAFB", level: 92 },
  { name: "Next.js", icon: NextjsIcon, color: "#000000", level: 85 },
  { name: "Node.js", icon: NodejsIcon, color: "#339933", level: 87 },
  { name: "MongoDB", icon: MongoDBIcon, color: "#47A248", level: 82 },
  { name: "PostgreSQL", icon: PostgreSQLIcon, color: "#336791", level: 84 },
  { name: "Express.js", icon: ExpressIcon, color: "#000000", level: 86 },
  { name: "Tailwind", icon: TailwindIcon, color: "#38B2AC", level: 90 },
  { name: "Git", icon: Git, color: "#F05032", level: 88 },
  { name: "GitHub", icon: Github, color: "#181717", level: 89 },
  { name: "WebSocket", icon: WebSocketIcon, color: "#105050", level: 89 },
  { name: "Socket.IO", icon: SocketIOIcon, color: "#105010", level: 87 },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-900  to-black relative overflow-hidden">
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

        {/* Skills Section */}
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

        {/* Skills List - New Design */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group flex items-center gap-4 bg-transparent"
              >
                {/* Icon */}
                <div className="flex-shrink-0">
                  <Icon
                    size={28}
                    style={{ color: skill.color }}
                    className="drop-shadow-md group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                <div className="flex-grow">
                  {/* Name and Percentage */}
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-white font-medium">{skill.name}</h3>
                    <span className="text-sm text-gray-400">{skill.level}%</span>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="w-full bg-black/30 rounded-full h-1 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: skill.color }}
                    />
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

export default About;