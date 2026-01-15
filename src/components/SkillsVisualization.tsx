import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Html5, Css3, FileJson, ReactLogo, NextjsIcon, NodejsIcon, 
  MongoDBIcon, PostgreSQLIcon, ExpressIcon, TailwindIcon, Git, Github 
} from '../utils/logo';

const skills = [
  { name: "React.js", icon: ReactLogo, level: 92, category: "Frontend", color: "#61DAFB" },
  { name: "JavaScript", icon: FileJson, level: 88, category: "Frontend", color: "#F7DF1E" },
  { name: "Node.js", icon: NodejsIcon, level: 87, category: "Backend", color: "#339933" },
  { name: "HTML", icon: Html5, level: 90, category: "Frontend", color: "#E34F26" },
  { name: "CSS", icon: Css3, level: 85, category: "Frontend", color: "#1572B6" },
  { name: "MongoDB", icon: MongoDBIcon, level: 82, category: "Database", color: "#47A248" },
  { name: "PostgreSQL", icon: PostgreSQLIcon, level: 84, category: "Database", color: "#336791" },
  { name: "Express.js", icon: ExpressIcon, level: 86, category: "Backend", color: "#000000" },
  { name: "Tailwind", icon: TailwindIcon, level: 90, category: "Frontend", color: "#38B2AC" },
  { name: "Git", icon: Git, level: 88, category: "Tools", color: "#F05032" },
];

const categories = ["All", "Frontend", "Backend", "Database", "Tools"];

const SkillsVisualization = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [viewMode, setViewMode] = useState<'bars' | 'circular'>('bars');

  const filteredSkills = activeCategory === "All" 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-maroon/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Interactive visualization of my technical skills and proficiency levels
          </p>

          {/* View Mode Toggle */}
          <div className="flex justify-center gap-4 mb-8">
            <motion.button
              onClick={() => setViewMode('bars')}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                viewMode === 'bars' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white/10 text-white/80 hover:bg-white/20'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Bar View
            </motion.button>
            <motion.button
              onClick={() => setViewMode('circular')}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                viewMode === 'circular' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white/10 text-white/80 hover:bg-white/20'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Circular View
            </motion.button>
          </div>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-maroon text-white shadow-lg'
                  : 'bg-white/10 text-white/80 hover:bg-white/20 border border-white/20'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Skills Display */}
        <div className={`grid gap-8 ${
          viewMode === 'bars' 
            ? 'grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto' 
            : 'grid-cols-2 md:grid-cols-3 lg:grid-cols-5 max-w-6xl mx-auto'
        }`}>
          {filteredSkills.map((skill, index) => {
            const Icon = skill.icon;
            
            if (viewMode === 'circular') {
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center"
                >
                  <div className="relative w-24 h-24 mb-4">
                    {/* Circular Progress */}
                    <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="rgba(255,255,255,0.1)"
                        strokeWidth="8"
                        fill="none"
                      />
                      <motion.circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke={skill.color}
                        strokeWidth="8"
                        fill="none"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: skill.level / 100 }}
                        transition={{ duration: 1.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        style={{
                          pathLength: skill.level / 100,
                          strokeDasharray: "251.2",
                          strokeDashoffset: 251.2 * (1 - skill.level / 100),
                        }}
                      />
                    </svg>
                    
                    {/* Icon in center */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Icon size={24} style={{ color: skill.color }} />
                    </div>
                    
                    {/* Percentage */}
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                      <span className="text-xs text-white/60 bg-black/50 px-2 py-1 rounded">
                        {skill.level}%
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-white font-medium text-center text-sm">
                    {skill.name}
                  </h3>
                </motion.div>
              );
            }

            // Bar view
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group flex items-center gap-4 bg-white/5 p-6 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                {/* Icon */}
                <div className="flex-shrink-0">
                  <Icon
                    size={32}
                    style={{ color: skill.color }}
                    className="drop-shadow-md group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                <div className="flex-grow">
                  {/* Name and Percentage */}
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-white font-semibold text-lg">{skill.name}</h3>
                    <span className="text-sm text-gray-400 font-mono">{skill.level}%</span>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="w-full bg-black/30 rounded-full h-2 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, delay: 0.3 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="h-full rounded-full relative overflow-hidden"
                      style={{ backgroundColor: skill.color }}
                    >
                      {/* Shimmer effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        animate={{
                          x: ["-100%", "100%"],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 1 + index * 0.2
                        }}
                      />
                    </motion.div>
                  </div>
                  
                  {/* Category */}
                  <div className="mt-2">
                    <span className="text-xs text-gray-500 bg-gray-800/50 px-2 py-1 rounded">
                      {skill.category}
                    </span>
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

export default SkillsVisualization;