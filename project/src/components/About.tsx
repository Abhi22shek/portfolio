import React from "react";
import { motion } from "framer-motion";

// Skills data with proper icons and colors matching reference
const skills = [
  { name: "React", icon: "⚛️", color: "#61DAFB", gradient: "from-cyan-400/20 to-blue-500/20" },
  { name: "TypeScript", icon: "🔷", color: "#3178C6", gradient: "from-blue-500/20 to-indigo-600/20" },
  { name: "JavaScript", icon: "🟡", color: "#F7DF1E", gradient: "from-yellow-400/20 to-orange-500/20" },
  { name: "Tailwind CSS", icon: "🎨", color: "#06B6D4", gradient: "from-cyan-400/20 to-teal-500/20" },
  
  { name: "Next.js", icon: "▲", color: "#000000", gradient: "from-gray-600/20 to-gray-800/20" },
  { name: "Vue.js", icon: "💚", color: "#4FC08D", gradient: "from-green-400/20 to-emerald-500/20" },
  { name: "Node.js", icon: "🟢", color: "#339933", gradient: "from-green-500/20 to-lime-600/20" },
  { name: "PostgreSQL", icon: "🐘", color: "#336791", gradient: "from-blue-600/20 to-indigo-700/20" },
  
  { name: "Supabase", icon: "⚡", color: "#3ECF8E", gradient: "from-emerald-400/20 to-green-500/20" },
  { name: "MongoDB", icon: "🍃", color: "#47A248", gradient: "from-green-500/20 to-emerald-600/20" },
  { name: "Git", icon: "📊", color: "#F05032", gradient: "from-orange-500/20 to-red-500/20" },
  { name: "Docker", icon: "🐋", color: "#2496ED", gradient: "from-blue-500/20 to-sky-600/20" },
  
  { name: "Webpack", icon: "📦", color: "#8DD6F9", gradient: "from-sky-400/20 to-blue-500/20" },
  { name: "Vite", icon: "⚡", color: "#646CFF", gradient: "from-violet-500/20 to-purple-600/20" },
  { name: "Figma", icon: "🎨", color: "#F24E1E", gradient: "from-red-500/20 to-pink-500/20" },
  { name: "Adobe XD", icon: "🔷", color: "#FF61F6", gradient: "from-pink-500/20 to-purple-600/20" },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-[#0a0a0f] via-[#0f0f23] to-[#1a1a2e] relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/6 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-indigo-500/5 to-transparent rounded-full animate-pulse" style={{ animationDelay: '4s' }} />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black_40%,transparent_100%)]" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.h2 
            className="text-6xl md:text-7xl font-black mb-8 bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent tracking-tight"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            About Me
          </motion.h2>
          
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-2xl md:text-3xl text-blue-200/90 font-light leading-relaxed mb-4">
              Full Stack Developer & UI/UX Designer
            </p>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
              Creating seamless digital experiences with modern technologies
            </p>
          </motion.div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Tech Arsenal
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
          </div>

          {/* Enhanced Skills Grid */}
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 md:gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.08,
                    delayChildren: 0.2
                  }
                }
              }}
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={{
                    hidden: { opacity: 0, y: 30, scale: 0.8 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      transition: {
                        duration: 0.6,
                        ease: "easeOut"
                      }
                    }
                  }}
                  whileHover={{ 
                    scale: 1.1,
                    y: -12,
                    rotateX: 5,
                    rotateY: 5,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative cursor-pointer"
                >
                  {/* Main Card */}
                  <div className={`
                    relative overflow-hidden rounded-3xl p-6 md:p-8
                    bg-gradient-to-br ${skill.gradient}
                    backdrop-blur-xl
                    border border-white/10 
                    hover:border-white/30
                    shadow-xl shadow-black/20
                    hover:shadow-2xl hover:shadow-black/40
                    transition-all duration-500 ease-out
                    min-h-[140px] md:min-h-[160px]
                    flex flex-col items-center justify-center text-center
                  `}>
                    
                    {/* Glow Effect */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: `radial-gradient(circle at 50% 50%, ${skill.color}15, transparent 70%)`
                      }}
                    />
                    
                    {/* Shine Effect */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                      initial={false}
                      whileHover={{
                        background: [
                          'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)',
                          'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)'
                        ],
                        x: ['-100%', '100%']
                      }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                    />

                    {/* Content */}
                    <div className="relative z-10">
                      {/* Icon */}
                      <motion.div
                        className="text-4xl md:text-5xl mb-4 filter drop-shadow-2xl"
                        whileHover={{ 
                          scale: 1.3,
                          rotate: [0, -8, 8, 0],
                          filter: "drop-shadow(0 0 20px rgba(255,255,255,0.3))"
                        }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                      >
                        {skill.icon}
                      </motion.div>
                      
                      {/* Name */}
                      <motion.h4 
                        className="text-white font-bold text-base md:text-lg leading-tight tracking-wide"
                        whileHover={{ 
                          scale: 1.05,
                          textShadow: `0 0 20px ${skill.color}50`
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        {skill.name}
                      </motion.h4>
                      
                      {/* Animated Line */}
                      <motion.div
                        className="w-0 h-1 mx-auto mt-3 rounded-full group-hover:w-12 transition-all duration-500 ease-out"
                        style={{ backgroundColor: skill.color }}
                      />
                    </div>

                    {/* Corner Sparkles */}
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <motion.div
                        animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        className="text-white/60 text-sm"
                      >
                        ✨
                      </motion.div>
                    </div>

                    {/* Pulse Effect */}
                    <motion.div
                      className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100"
                      animate={{
                        boxShadow: [
                          `0 0 0 0 ${skill.color}00`,
                          `0 0 0 8px ${skill.color}10`,
                          `0 0 0 16px ${skill.color}00`
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Enhanced CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="max-w-2xl mx-auto mb-8">
            <p className="text-xl text-gray-300 mb-6">
              Let's build something amazing together
            </p>
            
            <motion.button
              className="group relative px-10 py-5 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 text-white font-bold text-lg rounded-full overflow-hidden shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-500"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {/* Button shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              
              <span className="relative z-10 flex items-center gap-3">
                Get In Touch
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
