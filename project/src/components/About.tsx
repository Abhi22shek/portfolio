import React from "react";
import { motion } from "framer-motion";
import AnimatedText from './AnimatedText';
import {
  Html5, Css3, FileJson, ReactLogo, NextjsIcon, NodejsIcon, MongoDBIcon,
  PostgreSQLIcon, ExpressIcon, TailwindIcon, Git, Github, WebSocketIcon, SocketIOIcon
} from '../utils/logo';

const skills = [
  { name: "HTML", icon: Html5 }, { name: "CSS", icon: Css3 }, { name: "JavaScript", icon: FileJson },
  { name: "React.js", icon: ReactLogo }, { name: "Next.js", icon: NextjsIcon }, { name: "Node.js", icon: NodejsIcon },
  { name: "MongoDB", icon: MongoDBIcon }, { name: "PostgreSQL", icon: PostgreSQLIcon }, { name: "Express.js", icon: ExpressIcon },
  { name: "Tailwind", icon: TailwindIcon }, { name: "Git", icon: Git }, { name: "GitHub", icon: Github },
  { name: "WebSocket", icon: WebSocketIcon }, { name: "Socket.IO", icon: SocketIOIcon },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-24">
          <AnimatedText el="h2" text="About Me" className="text-4xl md:text-5xl font-bold mb-6 text-white" />
          <AnimatedText
            el="p"
            text="I'm passionate about creating digital experiences that combine beautiful design with powerful functionality."
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          />
        </div>

        {/* Asymmetrical Collage Layout */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          {/* Left Column: Text */}
          <motion.div
            className="lg:col-span-3 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white">My Journey</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a passionate full-stack developer with a keen eye for design and a love for creating
              seamless digital experiences. My journey in web development started with curiosity and
              has evolved into a dedicated pursuit of excellence.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              I specialize in modern web technologies including React, Node.js, and various databases,
              combining technical expertise with creative problem-solving to deliver solutions
              that not only work flawlessly but also provide exceptional user experiences.
            </p>
          </motion.div>

          {/* Right Column: Image & Skills */}
          <motion.div
            className="lg:col-span-2 relative h-full"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full h-full">
              {/* Profile Image */}
              <img
                src="https://cdn3d.iconscout.com/3d/free/thumb/free-man-with-laptop-and-coffee-cup-3d-illustration-4041113-3342047.png"
                alt="3D Avatar of a developer"
                className="relative z-10 w-full h-auto drop-shadow-2xl"
              />
              {/* Skill Chips */}
              <div className="absolute inset-0 z-0">
                {skills.map((skill, index) => {
                  const Icon = skill.icon;
                  const positions = [
                    { top: '5%', left: '10%', size: 40 }, { top: '20%', left: '80%', size: 32 },
                    { top: '35%', left: '5%', size: 36 }, { top: '80%', left: '15%', size: 44 },
                    { top: '60%', left: '85%', size: 48 }, { top: '90%', left: '50%', size: 30 },
                    { top: '5%', left: '60%', size: 28 }, { top: '45%', left: '95%', size: 38 },
                  ];
                  const pos = positions[index % positions.length];

                  return (
                    <motion.div
                      key={skill.name}
                      className="absolute bg-white/10 backdrop-blur-sm p-3 rounded-full border border-white/20"
                      style={{ top: pos.top, left: pos.left }}
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 0.5 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Icon size={pos.size} />
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
