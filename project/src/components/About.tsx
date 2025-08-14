import React from "react";
import { motion } from "framer-motion";

// Skill cards data matching the reference image
const skills = [
  { name: "React", icon: "⚛️", color: "#61DAFB", bgColor: "from-blue-500/20 to-cyan-500/20", borderColor: "border-blue-500/30" },
  { name: "TypeScript", icon: "📘", color: "#3178C6", bgColor: "from-blue-600/20 to-indigo-600/20", borderColor: "border-blue-600/30" },
  { name: "JavaScript", icon: "🟨", color: "#F7DF1E", bgColor: "from-yellow-500/20 to-orange-500/20", borderColor: "border-yellow-500/30" },
  { name: "Tailwind CSS", icon: "🎨", color: "#38B2AC", bgColor: "from-teal-500/20 to-cyan-500/20", borderColor: "border-teal-500/30" },
  
  { name: "Next.js", icon: "🔺", color: "#000000", bgColor: "from-gray-700/20 to-gray-900/20", borderColor: "border-gray-600/30" },
  { name: "Vue.js", icon: "💚", color: "#4FC08D", bgColor: "from-green-500/20 to-emerald-500/20", borderColor: "border-green-500/30" },
  { name: "Node.js", icon: "🟢", color: "#339933", bgColor: "from-green-600/20 to-lime-600/20", borderColor: "border-green-600/30" },
  { name: "PostgreSQL", icon: "🐘", color: "#336791", bgColor: "from-blue-700/20 to-indigo-700/20", borderColor: "border-blue-700/30" },
  
  { name: "Supabase", icon: "⚡", color: "#3ECF8E", bgColor: "from-emerald-500/20 to-teal-500/20", borderColor: "border-emerald-500/30" },
  { name: "MongoDB", icon: "🍃", color: "#47A248", bgColor: "from-green-700/20 to-emerald-700/20", borderColor: "border-green-700/30" },
  { name: "Git", icon: "🔧", color: "#F05032", bgColor: "from-orange-500/20 to-red-500/20", borderColor: "border-orange-500/30" },
  { name: "Docker", icon: "🐳", color: "#2496ED", bgColor: "from-blue-500/20 to-sky-500/20", borderColor: "border-blue-500/30" },
  
  { name: "Webpack", icon: "📦", color: "#8DD6F9", bgColor: "from-sky-400/20 to-blue-400/20", borderColor: "border-sky-400/30" },
  { name: "Vite", icon: "⚡", color: "#646CFF", bgColor: "from-indigo-500/20 to-purple-500/20", borderColor: "border-indigo-500/30" },
  { name: "Figma", icon: "🎨", color: "#F24E1E", bgColor: "from-red-500/20 to-pink-500/20", borderColor: "border-red-500/30" },
  { name: "Adobe XD", icon: "🔷", color: "#FF61F6", bgColor: "from-pink-500/20 to-purple-500/20", borderColor: "border-pink-500/30" },
];

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-[#0a0a0f] to-[#1a1a2e] relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-indigo-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Minimal Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            About Me
          </motion.h2>
          
          {/* Minimal Introduction */}
          <motion.p 
            className="text-xl md:text-2xl text-blue-200/80 max-w-3xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Passionate full-stack developer crafting modern web experiences with clean code and innovative design.
          </motion.p>
        </motion.div>

        {/* Skills Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Tech Stack
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Technologies I use to build amazing digital experiences
          </p>
        </motion.div>

        {/* Skills Grid - Card Style */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.08, 
                y: -8,
                rotateY: 5,
                boxShadow: `0 20px 40px ${skill.color}20`
              }}
              whileTap={{ scale: 0.95 }}
              className={`relative group cursor-pointer overflow-hidden rounded-2xl bg-gradient-to-br ${skill.bgColor} backdrop-blur-sm border ${skill.borderColor} hover:border-white/30 transition-all duration-500`}
            >
              {/* Glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${skill.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Content */}
              <div className="relative z-10 p-4 md:p-6 flex flex-col items-center text-center min-h-[120px] md:min-h-[140px] justify-center">
                {/* Icon */}
                <motion.div
                  className="text-3xl md:text-4xl mb-3 filter drop-shadow-lg"
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: [0, -10, 10, 0],
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {skill.icon}
                </motion.div>
                
                {/* Name */}
                <h4 className="text-white font-semibold text-sm md:text-base leading-tight group-hover:text-white transition-colors duration-300">
                  {skill.name}
                </h4>
                
                {/* Animated underline */}
                <motion.div
                  className="w-0 h-0.5 bg-gradient-to-r from-white/50 to-white/80 mt-2 group-hover:w-full transition-all duration-500"
                  style={{ backgroundColor: skill.color }}
                />
              </div>

              {/* Sparkle effect on hover */}
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="text-white/50 text-xs"
                >
                  ✨
                </motion.div>
              </div>

              {/* Ripple effect */}
              <motion.div
                className="absolute inset-0 rounded-2xl"
                whileHover={{
                  background: `radial-gradient(circle at center, ${skill.color}15 0%, transparent 70%)`
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-300 text-lg mb-6">
            Ready to bring your ideas to life?
          </p>
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-full hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Let's Work Together
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
