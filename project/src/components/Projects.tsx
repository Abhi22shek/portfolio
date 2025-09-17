import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaPalette, FaDatabase } from 'react-icons/fa';
import AnimatedText from './AnimatedText';

const initialProjects = [
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

const comingSoonProjects = [
  {
    title: 'Project Alpha',
    description: 'A brief description of Project Alpha.',
  },
  {
    title: 'Project Beta',
    description: 'A brief description of Project Beta.',
  },
];

const Projects = () => {
  const [projects, setProjects] = useState(() => {
    const savedProjects = localStorage.getItem('projects');
    return savedProjects ? JSON.parse(savedProjects) : initialProjects;
  });
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [newProject, setNewProject] = useState({
    title: '', description: '', image: '', technologies: '', category: 'frontend', github: '', live: '', featured: true,
  });

  useEffect(() => {
    localStorage.setItem('projects', JSON.stringify(projects));
  }, [projects]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewProject(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const technologies = newProject.technologies.split(',').map(tech => tech.trim());
    const projectToAdd = { ...newProject, technologies, featured: newProject.featured };
    setProjects(prev => [projectToAdd, ...prev]);
    setNewProject({
      title: '', description: '', image: '', technologies: '', category: 'frontend', github: '', live: '', featured: true,
    });
  };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === 'admin') {
      setIsAdminMode(true);
      setShowPasswordModal(false);
      setPasswordInput('');
      setPasswordError('');
    } else {
      setPasswordError('Incorrect password.');
      setPasswordInput('');
    }
  };

  const featuredProjects = projects.filter((p: any) => p.featured);
  const filteredProjects = activeCategory === 'all' ? projects : projects.filter((p: any) => p.category === activeCategory);

  return (
    <section id='projects' className="relative bg-black">
      {/* Immersive Showcase for Featured Projects */}
      <div className="relative h-screen overflow-y-scroll snap-y snap-mandatory">
        <div className="h-screen w-screen snap-start flex flex-col items-center justify-center text-center p-8 bg-gradient-to-b from-black to-gray-900">
          <AnimatedText el="h2" text="My Projects" className="text-5xl md:text-7xl font-bold text-white mb-6" />
          <AnimatedText el="p" text="Scroll down to explore a selection of my featured work." className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto" />
          <motion.div className="absolute bottom-10 text-white animate-bounce" initial={{ y: 0 }} animate={{ y: [0, -10, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5" />
            </svg>
          </motion.div>
        </div>
        {featuredProjects.map((project: any, index: number) => (
          <div key={`showcase-${index}`} className="h-screen w-screen snap-start relative flex items-center justify-center p-8 bg-black">
            <div className="absolute inset-0 z-0">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-20 blur-sm" />
              <div className="absolute inset-0 bg-black/60" />
            </div>
            <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center relative z-10">
              <motion.div className="text-left" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: 'easeOut' }} viewport={{ root: null, once: false, amount: 0.5 }}>
                <h3 className="text-4xl lg:text-5xl font-bold text-white mb-4">{project.title}</h3>
                <p className="text-white/80 text-lg mb-6 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-3 mb-8">
                  {project.technologies.map((tech: string) => (
                    <span key={tech} className="px-4 py-2 bg-blue-500/10 text-blue-300 text-sm font-medium rounded-full border border-blue-500/30">{tech}</span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <motion.a href={project.github} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-white/10 text-white rounded-full flex items-center gap-2" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}><FaGithub /> GitHub</motion.a>
                  <motion.a href={project.live} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-blue-600 text-white rounded-full flex items-center gap-2" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}><FaExternalLinkAlt /> Live Demo</motion.a>
                </div>
              </motion.div>
              <motion.div className="hidden md:block" initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease: 'easeOut' }} viewport={{ root: null, once: false, amount: 0.5 }}>
                <img src={project.image} alt={project.title} className="rounded-lg shadow-2xl shadow-blue-500/20" />
              </motion.div>
            </div>
          </div>
        ))}
      </div>

      {/* Restored Project Grid Section */}
      <div className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">All Projects</h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">A complete collection of my work.</p>
          </div>

          {/* Category Filter & Admin Button */}
          <div className="flex justify-center gap-4 mb-12">
            {categories.map(({ id, label, icon: Icon }) => (
              <motion.button key={id} onClick={() => setActiveCategory(id)} className={`px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300 ${activeCategory === id ? 'bg-blue-600 text-white shadow-lg' : 'bg-white/10 text-white/80 hover:bg-white/20 border border-white/20'}`} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}><Icon size={18} />{label}</motion.button>
            ))}
            <motion.button onClick={() => { if (isAdminMode) setIsAdminMode(false); else setShowPasswordModal(true); }} className={`px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300 ${isAdminMode ? 'bg-red-600 text-white shadow-lg' : 'bg-white/10 text-white/80 hover:bg-white/20 border border-white/20'}`} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>{isAdminMode ? 'Exit Admin' : 'Admin'}</motion.button>
          </div>

          {/* Password Modal */}
          <AnimatePresence>
            {showPasswordModal && (
              <motion.div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <motion.div className="bg-gray-800 border border-gray-700 rounded-2xl p-8 shadow-lg w-full max-w-md" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}>
                  <h3 className="text-2xl font-bold text-white mb-6">Admin Access</h3>
                  <form onSubmit={handlePasswordSubmit}>
                    <input type="password" placeholder="Password" value={passwordInput} onChange={(e) => setPasswordInput(e.target.value)} className="w-full bg-white/20 text-white placeholder-white/60 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    {passwordError && <p className="text-red-500 text-sm mt-2">{passwordError}</p>}
                    <div className="mt-6 flex justify-end gap-4">
                      <button type="button" onClick={() => setShowPasswordModal(false)} className="px-6 py-2 rounded-full text-white/80 hover:bg-white/10 transition-colors">Cancel</button>
                      <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">Enter</button>
                    </div>
                  </form>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Admin Form */}
          <AnimatePresence>
            {isAdminMode && (
              <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 my-8">
                <h3 className="text-2xl font-bold text-white mb-6">Add New Project</h3>
                <form onSubmit={handleFormSubmit}>
                  {/* Form inputs */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input type="text" name="title" value={newProject.title} onChange={handleInputChange} placeholder="Title" className="bg-white/20 text-white placeholder-white/60 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <input type="text" name="image" value={newProject.image} onChange={handleInputChange} placeholder="Image URL" className="bg-white/20 text-white placeholder-white/60 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <textarea name="description" value={newProject.description} onChange={handleInputChange} placeholder="Description" className="bg-white/20 text-white placeholder-white/60 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 md:col-span-2" rows={4}></textarea>
                    <input type="text" name="technologies" value={newProject.technologies} onChange={handleInputChange} placeholder="Technologies (comma-separated)" className="bg-white/20 text-white placeholder-white/60 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <select name="category" value={newProject.category} onChange={handleInputChange} className="bg-white/20 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"><option value="frontend">Frontend</option><option value="backend">Backend</option></select>
                    <input type="text" name="github" value={newProject.github} onChange={handleInputChange} placeholder="GitHub URL" className="bg-white/20 text-white placeholder-white/60 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <input type="text" name="live" value={newProject.live} onChange={handleInputChange} placeholder="Live URL" className="bg-white/20 text-white placeholder-white/60 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div className="mt-6 text-right"><button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors">Add Project</button></div>
                </form>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Projects Grid */}
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project: any, index: number) => (
                <motion.div key={`grid-${project.title}`} layout initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5, delay: index * 0.1 }} className="group" onHoverStart={() => setHoveredProject(project.title)} onHoverEnd={() => setHoveredProject(null)}>
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="relative overflow-hidden aspect-video">
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                      <motion.div className="absolute inset-0 bg-black/70 flex items-center justify-center gap-4" initial={{ opacity: 0 }} animate={{ opacity: hoveredProject === project.title ? 1 : 0 }} transition={{ duration: 0.3 }}>
                        <motion.a href={project.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}><FaGithub size={20} className="text-white" /></motion.a>
                        <motion.a href={project.live} target="_blank" rel="noopener noreferrer" className="p-3 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}><FaExternalLinkAlt size={20} className="text-white" /></motion.a>
                      </motion.div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                      <p className="text-white/70 text-sm mb-4 leading-relaxed">{project.description.length > 120 ? `${project.description.substring(0, 120)}...` : project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 4).map((tech: string) => (<span key={tech} className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30">{tech}</span>))}
                        {project.technologies.length > 4 && (<span className="px-3 py-1 text-xs text-white/50">+{project.technologies.length - 4} more</span>)}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Coming Soon Section */}
          <motion.div className="text-center my-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }} viewport={{ once: true }}>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Coming Soon</h3>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">Exciting projects that are currently in development</p>
          </motion.div>
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.6 }}>
            {comingSoonProjects.map((project, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
                <h4 className="text-xl font-semibold text-white mb-2">{project.title}</h4>
                <p className="text-white/60">{project.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;