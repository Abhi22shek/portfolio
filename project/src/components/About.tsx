import React from "react";
import { motion } from "framer-motion";
import AnimatedText from './AnimatedText';
const skills = [
  { name: "HTML", icon: 'https://cdn3d.iconscout.com/3d/free/thumb/free-html-5-logo-4386865-3644137.png' },
  { name: "CSS", icon: 'https://cdn3d.iconscout.com/3d/free/thumb/free-css-3-logo-4386867-3644139.png' },
  { name: "JavaScript", icon: 'https://cdn3d.iconscout.com/3d/free/thumb/free-javascript-3d-icon-png-download-7577991.png' },
  { name: "React.js", icon: 'https://cdn3d.iconscout.com/3d/free/thumb/free-react-js-logo-3d-icon-png-download-4642758.png' },
  { name: "Node.js", icon: 'https://cdn3d.iconscout.com/3d/free/thumb/free-node-js-logo-9294867-7578013.png' },
  { name: "Tailwind", icon: 'https://cdn3d.iconscout.com/3d/free/thumb/free-tailwind-css-logo-4386878-3644150.png' },
  { name: "MongoDB", icon: 'https://cdn3d.iconscout.com/3d/free/thumb/free-mongodb-logo-4386873-3644145.png' },
  { name: "GitHub", icon: 'https://cdn3d.iconscout.com/3d/free/thumb/free-github-logo-4386864-3644136.png' },
  { name: "Next.js", icon: 'https://cdn3d.iconscout.com/3d/free/thumb/free-next-js-logo-4386870-3644142.png' },
  { name: "PostgreSQL", icon: 'https://cdn3d.iconscout.com/3d/free/thumb/free-postgresql-logo-4386876-3644148.png' },
  { name: "Express.js", icon: 'https://cdn3d.iconscout.com/3d/free/thumb/free-express-js-logo-4386879-3644151.png' },
  { name: "Git", icon: 'https://cdn3d.iconscout.com/3d/free/thumb/free-git-logo-4386869-3644141.png' },
  { name: "WebSocket", icon: 'https://cdn3d.iconscout.com/3d/free/thumb/free-api-3d-icon-7577994.png' },
  { name: "Socket.IO", icon: 'https://cdn3d.iconscout.com/3d/free/thumb/free-cloud-service-3d-icon-7578000.png' },
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
            <img
              src="https://cdn3d.iconscout.com/3d/free/thumb/free-man-with-laptop-and-coffee-cup-3d-illustration-4041113-3342047.png"
              alt="3D Avatar of a developer"
              className="w-full h-full object-contain"
            />
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
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {skills.map((skill, index) => {
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl flex flex-col items-center justify-center gap-4 border border-white/10 text-center aspect-square"
              >
                {skill.icon && (
                  <img src={skill.icon} alt={`${skill.name} 3D Icon`} className="w-16 h-16 object-contain" />
                )}
                <h3 className="text-white font-semibold text-sm mt-auto">{skill.name}</h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
