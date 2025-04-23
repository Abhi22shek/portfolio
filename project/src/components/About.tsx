import React from "react";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
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
  {
    name: "HTML",
    icon: Html5,
    color: "#E34F26",
    level: 90,
  },
  {
    name: "CSS",
    icon: Css3,
    color: "#1572B6",
    level: 85,
  },
  {
    name: "JavaScript",
    icon: FileJson,
    color: "#F7DF1E",
    level: 88,
  },
  {
    name: "React.js",
    icon: ReactLogo,
    color: "#61DAFB",
    level: 92,
  },
  {
    name: "Next.js",
    icon: NextjsIcon,
    color: "#103022",
    level: 85,
  },
  {
    name: "Node.js",
    icon: NodejsIcon,
    color: "#339933",
    level: 87,
  },
  {
    name: "MongoDB",
    icon: MongoDBIcon,
    color: "#47A248",
    level: 82,
  },
  {
    name: "PostgreSQL",
    icon: PostgreSQLIcon,
    color: "#336791",
    level: 84,
  },
  {
    name: "Express.js",
    icon: ExpressIcon,
    color: "#000000",
    level: 86,
  },
  {
    name: "Tailwind",
    icon: TailwindIcon,
    color: "#38B2AC",
    level: 90,
  },
  {
    name: "Git",
    icon: Git,
    color: "#F05032",
    level: 88,
  },
  {
    name: "GitHub",
    icon: Github,
    color: "#181717",
    level: 89,
  },
  {
    name: "WebSocket",
    icon: WebSocketIcon,
    color: "#105050",
    level: 89,
  },
  {
    name: "Socket.IO",
    icon: SocketIOIcon,
    color: "#105010",
    level: 87,
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 sm:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-maroon/20 rounded-full blur-[80px] sm:blur-[100px] mix-blend-screen" />
        <div className="absolute bottom-0 right-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-maroon/10 rounded-full blur-[80px] sm:blur-[100px] mix-blend-screen" />
      </div>

      <style>
        {`
          /* Hide scrollbars for all elements in the about section */
          #about *::-webkit-scrollbar {
            display: none !important;
            width: 0 !important;
            height: 0 !important;
            background: transparent !important;
          }

          #about * {
            -ms-overflow-style: none !important;
            scrollbar-width: none !important;
          }
          
          /* Enhanced fog effect for marquee containers */
          .marquee-container {
            position: relative !important;
            overflow: hidden !important;
          }
          
          .marquee-container::before,
          .marquee-container::after {
            content: '';
            position: absolute;
            top: 0;
            bottom: 0;
            width: 15%;
            z-index: 10;
            pointer-events: none;
          }
          
          .marquee-container::before {
            left: 0;
            background: linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0));
          }
          
          .marquee-container::after {
            right: 0;
            background: linear-gradient(to left, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0));
          }

          .marquee-container.left-marquee {
            height: auto !important;
            position: relative;
            z-index: 1;
          }

          .marquee-container.right-marquee {
            height: auto !important;
            position: relative;
            z-index: 1;
          }

          .marquee {
            overflow: hidden !important;
            height: 100% !important;
          }

          .skill-container {
            overflow: hidden !important;
            position: relative !important;
          }

          /* Enhanced marquee effects */
          .skill-card {
            transform-origin: center;
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important;
          }
          
          .skill-card:hover {
            transform: scale(1.08) !important;
            z-index: 20 !important; /* Increased z-index to appear above fog */
            box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.3) !important;
          }
          
          .skill-progress {
            position: relative;
            overflow: hidden;
          }
          
          .skill-progress::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
            transform: translateX(-100%);
            animation: shimmer 2s infinite;
          }
          
          @keyframes shimmer {
            100% {
              transform: translateX(100%);
            }
          }
          
          /* Floating animation for cards */
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-5px); }
            100% { transform: translateY(0px); }
          }
          
          .floating-animation {
            animation: float 3s ease-in-out infinite;
          }

          /* Card entrance and exit animations */
          @keyframes fadeInRight {
            from {
              opacity: 0;
              transform: translateX(-20px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          
          @keyframes fadeInLeft {
            from {
              opacity: 0;
              transform: translateX(20px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          
          .left-enter {
            animation: fadeInRight 0.5s forwards;
          }
          
          .right-enter {
            animation: fadeInLeft 0.5s forwards;
          }

          /* Additional fixes for specific browsers */
          @supports (-moz-appearance:none) {
            .marquee-container, .marquee, .skill-container {
              scrollbar-width: none !important;
            }
          }

          @supports (-webkit-appearance:none) {
            .marquee-container, .marquee, .skill-container {
              &::-webkit-scrollbar {
                display: none !important;
              }
            }
          }
        `}
      </style>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            My skills and technologies I work with to create amazing digital experiences.
          </p>
        </motion.div>
        
        {/* Skills Marquee Section with Enhanced Fog Effect */}
        <div className="space-y-8 overflow-hidden sm:space-y-16 skill-container">
          {/* First row of skills with left direction */}
          <div className="relative">
            <Marquee
              speed={30}
              direction="left"
              className="py-4 sm:py-8 left-marquee"
              pauseOnHover={true}
              style={{ height: "auto" }}
            >
              {skills.slice(0, skills.length / 2).map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={skill.name}
                    className="mx-4 sm:mx-8 glass-effect px-4 sm:px-8 py-3 sm:py-6 rounded-xl sm:rounded-2xl flex items-center gap-3 sm:gap-6 skill-card floating-animation tilt-effect"
                    style={{ 
                      minWidth: "200px", 
                      maxWidth: "300px",
                      animationDelay: `${index * 0.2}s`,
                      "--glow-color": `${skill.color}50`
                    } as React.CSSProperties}
                    whileHover={{
                      boxShadow: `0 0 30px ${skill.color}30`,
                      borderColor: `${skill.color}50`,
                      y: -5
                    }}
                  >
                    <div className="relative group overflow-hidden">
                      <div
                        className="absolute inset-0 rounded-lg sm:rounded-xl bg-gradient-to-r from-[var(--start-color)] to-[var(--end-color)] opacity-20 blur-lg group-hover:opacity-40 transition-opacity duration-500"
                        style={
                          {
                            "--start-color": skill.color,
                            "--end-color": `${skill.color}50`,
                          } as React.CSSProperties
                        }
                      />
                      <div className="relative w-10 h-10 sm:w-16 sm:h-16 rounded-lg sm:rounded-xl bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center border border-white/10 group-hover:border-white/30 transition-all duration-500 pulse-animation" style={{ animationDelay: `${index * 0.1}s` }}>
                        <motion.div
                          initial={{ rotate: 0 }}
                          whileHover={{ rotate: 360, scale: 1.2 }}
                          transition={{ duration: 0.8, ease: "easeInOut" }}
                          className="tilt-content"
                        >
                          <Icon
                            size={24}
                            className="sm:w-8 sm:h-8"
                            style={{ color: skill.color }}
                          />
                        </motion.div>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0 tilt-content">
                      <h3
                        className="text-sm sm:text-xl font-semibold mb-2 sm:mb-3 truncate"
                        style={{ color: skill.color }}
                      >
                        {skill.name}
                      </h3>
                      <div className="w-full h-1.5 sm:h-2 bg-white/10 rounded-full overflow-hidden skill-progress">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.2 }}
                          className="h-full rounded-full glow-on-hover"
                          style={{
                            backgroundColor: skill.color,
                            boxShadow: `0 0 20px ${skill.color}50`,
                          }}
                        />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </Marquee>
          </div>

          {/* Second row of skills with right direction */}
          <div className="relative">
            <Marquee
              speed={20}
              direction="right"
              className="py-4 sm:py-8 right-marquee"
              pauseOnHover={true}
              style={{ height: "auto" }}
            >
              {skills.slice(skills.length / 2).map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={skill.name}
                    className="mx-4 sm:mx-8 glass-effect px-4 sm:px-8 py-3 sm:py-6 rounded-xl sm:rounded-2xl flex items-center gap-3 sm:gap-6 skill-card floating-animation tilt-effect"
                    style={{ 
                      minWidth: "200px", 
                      maxWidth: "300px",
                      animationDelay: `${index * 0.2}s`,
                      "--glow-color": `${skill.color}50`
                    } as React.CSSProperties}
                    whileHover={{
                      boxShadow: `0 0 30px ${skill.color}30`,
                      borderColor: `${skill.color}50`,
                      y: -5
                    }}
                  >
                    <div className="relative group">
                      <div
                        className="absolute inset-0 rounded-lg sm:rounded-xl bg-gradient-to-r from-[var(--start-color)] to-[var(--end-color)] opacity-20 blur-lg group-hover:opacity-40 transition-opacity duration-500"
                        style={
                          {
                            "--start-color": skill.color,
                            "--end-color": `${skill.color}50`,
                          } as React.CSSProperties
                        }
                      />
                      <div className="relative w-10 h-10 sm:w-16 sm:h-16 rounded-lg sm:rounded-xl bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center border border-white/10 group-hover:border-white/30 transition-all duration-500 pulse-animation" style={{ animationDelay: `${index * 0.1}s` }}>
                        <motion.div
                          initial={{ rotate: 0 }}
                          whileHover={{ rotate: 360, scale: 1.2 }}
                          transition={{ duration: 0.8, ease: "easeInOut" }}
                          className="tilt-content"
                        >
                          <Icon
                            size={24}
                            className="sm:w-8 sm:h-8"
                            style={{ color: skill.color }}
                          />
                        </motion.div>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0 tilt-content">
                      <h3
                        className="text-sm sm:text-xl font-semibold mb-2 sm:mb-3 truncate"
                        style={{ color: skill.color }}
                      >
                        {skill.name}
                      </h3>
                      <div className="w-full h-1.5 sm:h-2 bg-white/10 rounded-full overflow-hidden skill-progress">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.2 }}
                          className="h-full rounded-full glow-on-hover"
                          style={{
                            backgroundColor: skill.color,
                            boxShadow: `0 0 20px ${skill.color}50`,
                          }}
                        />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
