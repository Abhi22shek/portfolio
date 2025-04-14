import  { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaPalette, FaDatabase, FaStar } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import ThemeToggle from './ThemeToggle';
// Add this import at the top
import DarkThemeParticles from './DarkThemeParticles';

const projects = [
  {
    title: '3d iphone website',
    description: 'Developed a fully responsive 3D iPhone showcase website with an interactive user interface, optimized for all screen sizes. .',
    image: './project-1.png',
    technologies: ['React', 'Threejs', 'Gsap', 'tailwind'],
    category: 'frontend',
    github: 'https://github.com/Abhi22shek/Iphone_website.git',
    live: 'https://iphone-website-one.vercel.app/',
    featured: true
  },
  {
    title: 'Interactive Quiz platfform',
    description: 'An interactive quiz platform with timed quizzes, answer feedback highlighting wrong and correct options, and a history tracking feature',
    image: './project-3.png',
    technologies: ['React',  'Nodejs', 'express', 'mondoDb', 'taiwind , 'razorpay', 'Clipdrop Api' ,'JWT/bcrypt],
    category: 'frontend',
    github: 'https://github.com/Abhi22shek/Interactive-Quiz.git',
    live: 'https://interactive-quiz-five.vercel.app',
    featured: true
  },
  
  {
    title: 'Social Media Dashboard',
    description: 'Analytics dashboard for social media performance tracking with predictive analytics.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60',
    technologies: ['React', 'D3.js', 'Express', 'MongoDB'],
    category: 'backend',
    github: '#',
    live: '#',
    featured: false
  }
];

const categories = [
  { id: 'all', label: 'All Projects', icon: FaCode },
  { id: 'frontend', label: 'Frontend', icon: FaPalette },
  { id: 'backend', label: 'Backend', icon: FaDatabase },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [tappedProject, setTappedProject] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [project, setProjects] = useState(projects);
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminPassword, setAdminPassword] = useState("");
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  
  // Check if the device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle admin login
  const handleAdminLogin = () => {
    if (adminPassword === import.meta.env.VITE_ADMIN_PASSWORD ) { // Simple password for demo purposes
      setIsAdmin(true);
      setShowAdminLogin(false);
      setAdminPassword("");
    } else {
      alert("Incorrect password");
    }
  };

  // Toggle project featured status with animation feedback
  const toggleFeatured = (projectTitle: string) => {
    // Add visual feedback when toggling
    const element = document.getElementById(`project-${projectTitle}`);
    if (element) {
      element.classList.add('pulse-animation');
      setTimeout(() => element.classList.remove('pulse-animation'), 500);
    }
    
    setProjects(prevProjects => 
      prevProjects.map(project => 
        project.title === projectTitle 
          ? { ...project, featured: !project.featured }
          : project
      )
    );
  };

  // Filter projects based on category and featured status
  const filteredProjects = project.filter(project => {
    if (activeCategory === 'all') {
      return project.featured; // Only show featured projects in All category
    }
    return project.category === activeCategory;
  });

  // Inside the Projects component
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-maroon/20 rounded-full blur-[80px] sm:blur-[100px] mix-blend-screen" />
        <div className="absolute bottom-0 right-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-maroon/10 rounded-full blur-[80px] sm:blur-[100px] mix-blend-screen" />
      </div>
      
      {/* Dark theme particles */}
      <DarkThemeParticles />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-20"
        >
          <div className="flex justify-between items-center mb-4">
            <ThemeToggle className="ml-4" />
            
            {!isAdmin ? (
              <button 
                onClick={() => setShowAdminLogin(true)}
                className="text-xs text-white/50 hover:text-white/80 transition-colors"
              >
                Admin
              </button>
            ) : (
              <button 
                onClick={() => setIsAdmin(false)}
                className="text-xs text-maroon hover:text-maroon/80 transition-colors"
              >
                Exit Admin Mode
              </button>
            )}
          </div>

          {/* Admin Login Modal */}
          {showAdminLogin && (
            <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-gray-900 p-6 rounded-lg w-full max-w-sm"
              >
                <h3 className="text-xl font-semibold mb-4">Admin Login</h3>
                <input
                  type="password"
                  value={adminPassword}
                  onChange={(e) => setAdminPassword(e.target.value)}
                  placeholder="Enter password"
                  className="w-full p-2 mb-4 bg-gray-800 border border-gray-700 rounded text-white"
                  onKeyDown={(e) => e.key === 'Enter' && handleAdminLogin()}
                />
                <div className="flex justify-end gap-2">
                  <button 
                    onClick={() => setShowAdminLogin(false)}
                    className="px-4 py-2 bg-gray-800 rounded"
                  >
                    Cancel
                  </button>
                  <button 
                    onClick={handleAdminLogin}
                    className="px-4 py-2 bg-maroon rounded"
                  >
                    Login
                  </button>
                </div>
              </motion.div>
            </div>
          )}

          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            My Projects
          </motion.h2>
          <motion.p 
            className="text-base sm:text-xl text-white/80 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {activeCategory === 'all' 
              ? 'All my projects across different categories.'
              : 'Here are my projects in this category.'}
          </motion.p>
          
          {isMobile && (
            <motion.p
              className="text-sm text-maroon/80 mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              Tap on a project to see details and links
            </motion.p>
          )}
          
          {isAdmin && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-4 p-2 bg-maroon/20 rounded-lg inline-block"
            >
              <span className="text-maroon font-semibold">Admin Mode Active</span>
              <p className="text-xs text-white/70">You can now mark/unmark featured projects</p>
            </motion.div>
          )}
        </motion.div>

        <div className="flex justify-center gap-4 mb-16">
          {categories.map(({ id, label, icon: Icon }) => (
            <motion.button
              key={id}
              onClick={() => setActiveCategory(id)}
              className={`px-6 py-3 rounded-xl flex items-center gap-2 transition-all ${
                activeCategory === id
                  ? 'bg-gradient-to-r from-maroon to-maroon/80 text-white shadow-lg shadow-maroon/25'
                  : 'bg-white/5 text-white/80 hover:bg-white/10'
              }`}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0px 5px 15px rgba(224, 9, 9, 0.2)" 
              }}
              whileTap={{ scale: 0.95 }}
              // Add layout animation for smooth transitions
              layout
            >
              <motion.div
                // Add icon animation
                animate={{ rotate: activeCategory === id ? [0, 5, -5, 0] : 0 }}
                transition={{ duration: 0.5 }}
              >
                <Icon size={20} />
              </motion.div>
              {label}
            </motion.button>
          ))}
        </div>

        {/* Replace the grid with bento grid layout */}
        {filteredProjects.length > 0 ? (
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => {
                // Adjust card sizes to be smaller
                const isLarge = index === 0 || (project.featured && index < 2);
                const colSpan = isLarge ? "md:col-span-6" : "md:col-span-4";
                const rowSpan = isLarge ? "md:row-span-1" : "md:row-span-1";
                
                return (
                  <motion.div
                    id={`project-${project.title}`}
                    key={project.title}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    transition={{ 
                      duration: 0.5,
                      type: "spring",
                      stiffness: 100,
                      damping: 15,
                      delay: index * 0.1 // Staggered animation
                    }}
                    className={`group relative ${colSpan} ${rowSpan}`}
                    onHoverStart={() => setHoveredProject(project.title)}
                    onHoverEnd={() => setHoveredProject(null)}
                    onClick={() => {
                      if (isMobile) {
                        if (tappedProject === project.title) {
                          setTappedProject(null);
                        } else {
                          setTappedProject(project.title);
                        }
                      }
                    }}
                  >
                    {isAdmin && (
                      <div className="absolute -top-4 -right-4 z-20">
                        <motion.button
                          className="relative"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleFeatured(project.title);
                          }}
                        >
                          <FaStar 
                            className={`w-8 h-8 ${project.featured ? 'text-maroon fill-maroon' : 'text-white/30'}`} 
                          />
                          {project.featured && (
                            <div className="absolute inset-0 animate-ping-slow">
                              <FaStar className="w-8 h-8 text-maroon" />
                            </div>
                          )}
                        </motion.button>
                      </div>
                    )}

                    <motion.div 
                      className="project-card h-full bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-maroon/30 transition-all duration-300"
                      whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(224, 9, 9, 0.2)" }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="relative overflow-hidden aspect-video">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        {project.featured && !isAdmin && (
                          <motion.div 
                            className="absolute top-4 right-4 z-10"
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ 
                              type: "spring", 
                              stiffness: 260, 
                              damping: 20,
                              delay: 0.3 
                            }}
                          >
                            <FaStar className="w-6 h-6 text-maroon" />
                          </motion.div>
                        )}
                        
                        {/* Mobile tap indicator and overlay remain similar */}
                        {/* ... */}
                        
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent 
                                   flex items-end justify-between p-6"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: hoveredProject === project.title || tappedProject === project.title ? 1 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          {isMobile && tappedProject === project.title && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setTappedProject(null);
                              }}
                              className="absolute top-4 right-4 p-2 bg-white/10 rounded-full backdrop-blur-sm"
                            >
                              <IoMdClose size={20} className="text-white" />
                            </button>
                          )}
                          <div className="flex gap-4">
                            <motion.a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 bg-white/10 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors"
                              whileHover={{ scale: 1.1, y: -3 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <FaGithub size={20} className="text-white" />
                            </motion.a>
                            <motion.a
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 bg-white/10 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors"
                              whileHover={{ scale: 1.1, y: -3 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <FaExternalLinkAlt size={20} className="text-white" />
                            </motion.a>
                          </div>
                        </motion.div>
                      </div>
                      
                      <div className="p-6">
                        <motion.h3 
                          className="text-xl font-semibold mb-2"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 + 0.2 }}
                        >
                          {project.title}
                        </motion.h3>
                        
                        <motion.p 
                          className="text-white/70 text-sm mb-4"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: index * 0.1 + 0.3 }}
                        >
                          {isLarge 
                            ? project.description 
                            : project.description.length > 80 
                              ? `${project.description.substring(0, 80)}...` 
                              : project.description}
                        </motion.p>
                        
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.slice(0, isLarge ? undefined : 3).map((tech, techIndex) => (
                            <motion.span
                              key={tech}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3, delay: index * 0.1 + 0.4 + (techIndex * 0.1) }}
                              className="px-3 py-1 bg-gradient-to-r from-maroon/10 to-maroon/5 
                                       border border-maroon/20 rounded-full text-xs text-maroon"
                            >
                              {tech}
                            </motion.span>
                          ))}
                          {!isLarge && project.technologies.length > 3 && (
                            <motion.span
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3, delay: index * 0.1 + 0.7 }}
                              className="px-2 py-1 text-xs text-white/50"
                            >
                              +{project.technologies.length - 3} more
                            </motion.span>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="col-span-full text-center py-16"
          >
            <div className="text-6xl mb-4 opacity-50">🔍</div>
            <h3 className="text-xl font-medium mb-2">No projects found</h3>
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
