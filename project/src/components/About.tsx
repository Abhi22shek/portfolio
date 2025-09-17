import React from "react";
import { motion } from "framer-motion";
import AnimatedText from './AnimatedText';
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
        <div className="text-center mb-16">
          <AnimatedText
            el="h2"
            text="About Me"
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
          />
          <AnimatedText
            el="p"
            text="I'm passionate about creating digital experiences that combine beautiful design with powerful functionality. With a focus on modern web technologies, I bring ideas to life through clean code and intuitive interfaces."
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          />
        </div>

        {/* Bento Grid Layout */}
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
          {/* Journey Item */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:col-span-2 bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">
              My Journey
            </h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                I'm a passionate full-stack developer with a keen eye for design and a love for creating 
                seamless digital experiences. My journey in web development started with curiosity and 
                has evolved into a dedicated pursuit of excellence.
              </p>
              <p>
                I specialize in modern web technologies including React, Node.js, and various databases,
                combining technical expertise with creative problem-solving.
              </p>
            </div>
          </motion.div>

          {/* Profile Picture Item */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="md:col-span-1 bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 flex items-center justify-center"
          >
            <div className="w-48 h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center">
              <span className="text-gray-400">Profile Pic</span>
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <div className="text-center my-16">
          <AnimatedText
            el="h3"
            text="Technical Expertise"
            className="text-2xl md:text-3xl font-bold text-white mb-4"
          />
          <AnimatedText
            el="p"
            text="Here are the technologies I work with to bring ideas to life"
            className="text-gray-300 max-w-2xl mx-auto"
          />
        </div>

        {/* Skills Bento Grid */}
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.slice(0, 8).map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl flex flex-col items-center justify-center gap-4 border border-white/10 text-center"
              >
                <Icon
                  size={40}
                  style={{ color: skill.color }}
                  className="drop-shadow-lg"
                />
                <h3 className="text-white font-semibold text-sm">{skill.name}</h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
