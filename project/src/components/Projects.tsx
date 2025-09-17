import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaPalette, FaDatabase } from 'react-icons/fa';

const projects = [
  {
    title: 'FullStack Real-time Chat Application',
    description: 'I built a real-time chat application where users can securely sign up, log in, and exchange instant messages, images, and documents. The app shows online/offline status, allows profile and theme customization, and works smoothly on both desktop and mobile.',
    image: './project-4.png',
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "TailwindCSS"],
    category: 'backend',
    github: 'https://github.com/Abhi22shek/fullStack_Chat-App.git',
    live: 'https://fullstack-chat-app-ayqr.onrender.com/',
    featured: true
  },
  {
    title: 'Imagify Text to Photos Generation',
    description: 'A fully responsive AI SaaS MERN stack application where users can securely log in, buy credits using Razorpay, and generate photos from text. Users spend credits to create AI-generated images.',
    image: './project-3.png',
    technologies: ['React', 'Node.js', 'MongoDB', 'Razorpay', 'AI API'],
    category: 'backend',
    github: 'https://github.com/Abhi22shek/Imagify.git',
    live: 'https://imagify-beige-three.vercel.app/',
    featured: true
  },
  {
    title: '3D iPhone Website',
    description: 'Developed a fully responsive 3D iPhone showcase website with an interactive user interface, optimized for all screen sizes.',
    image: './project-1.png',
    technologies: ['React', 'Three.js', 'GSAP', 'Tailwind'],
    category: 'frontend',
    github: 'https://github.com/Abhi22shek/Iphone_website.git',
    live: 'https://iphone-website-one.vercel.app/',
    featured: true
  },
  {
    title: 'Interactive Quiz Platform',
    description: 'An interactive quiz platform with timed quizzes, answer feedback highlighting wrong and correct options, and a history tracking feature.',
    image: './project-2.png',
    technologies: ['React', 'Tailwind'],
    category: 'frontend',
    github: 'https://github.com/Abhi22shek/Interactive-Quiz.git',
    live: 'https://interactive-quiz-five.vercel.app',
    featured: true
  },
];

const categories = [
  { id: 'all', label: 'All Projects', icon: FaCode },
  { id: 'frontend', label: 'Frontend', icon: FaPalette },
  { id: 'backend', label: 'Backend', icon: FaDatabase },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const filteredProjects = projects.filter(project => {
    if (activeCategory === 'all') return project.featured;
    return project.category === activeCategory;
  });

  return (
    <section id='projects' className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My Projects
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            A collection of projects showcasing my skills and experience
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex justify-center gap-4 mb-12">
          {categories.map(({ id, label, icon: Icon }) => (
            <motion.button
              key={id}
              onClick={() => setActiveCategory(id)}
              className={`px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300 ${
                activeCategory === id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white/10 text-white/80 hover:bg-white/20 border border-white/20'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon size={18} />
              {label}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ 
                  duration: 0.5,
                  delay: index * 0.1
                }}
                className="group"
                onHoverStart={() => setHoveredProject(project.title)}
                onHoverEnd={() => setHoveredProject(null)}
              >
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  {/* Project Image */}
                  <div className="relative overflow-hidden aspect-video">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    {/* Overlay with Links */}
                    <motion.div
                      className="absolute inset-0 bg-black/70 flex items-center justify-center gap-4"
                      initial={{ opacity: 0 }}
                      animate={{ 
                        opacity: hoveredProject === project.title ? 1 : 0 
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaGithub size={20} className="text-white" />
                      </motion.a>
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaExternalLinkAlt size={20} className="text-white" />
                      </motion.a>
                    </motion.div>
                  </div>
                  
                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {project.title}
                    </h3>
                    
                    <p className="text-white/70 text-sm mb-4 leading-relaxed">
                      {project.description.length > 120 
                        ? `${project.description.substring(0, 120)}...` 
                        : project.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-3 py-1 text-xs text-white/50">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* No Projects Message */}
        {filteredProjects.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-6xl mb-4 opacity-30">🔍</div>
            <h3 className="text-xl font-medium text-white mb-2">
              No projects found
            </h3>
            <p className="text-white/60">
              {activeCategory === 'all' 
                ? "No featured projects available yet." 
                : `No projects in the ${activeCategory} category yet.`}
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;