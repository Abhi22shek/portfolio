import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
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

const Projects = () => {
  const featuredProjects = initialProjects.filter(p => p.featured);

  return (
    <section id='projects' className="relative bg-black">
      <div className="relative h-screen overflow-y-scroll snap-y snap-mandatory">
        {/* Header Slide */}
        <div className="h-screen w-screen snap-start flex flex-col items-center justify-center text-center p-8 bg-gradient-to-b from-black to-gray-900">
          <AnimatedText
            el="h2"
            text="My Projects"
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          />
          <AnimatedText
            el="p"
            text="Scroll down to explore a selection of my featured work."
            className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto"
          />
          <motion.div
            className="absolute bottom-10 text-white animate-bounce"
            initial={{ y: 0 }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5" />
            </svg>
          </motion.div>
        </div>

        {/* Project Slides */}
        {featuredProjects.map((project, index) => (
          <div key={index} className="h-screen w-screen snap-start relative flex items-center justify-center p-8 bg-black">
            <div className="absolute inset-0 z-0">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover opacity-20 blur-sm"
              />
              <div className="absolute inset-0 bg-black/60" />
            </div>

            <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center relative z-10">
              {/* Text Content */}
              <motion.div
                className="text-left"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                viewport={{ root: null, once: false, amount: 0.5 }}
              >
                <h3 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                  {project.title}
                </h3>
                <p className="text-white/80 text-lg mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-blue-500/10 text-blue-300 text-sm font-medium rounded-full border border-blue-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <motion.a href={project.github} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-white/10 text-white rounded-full flex items-center gap-2" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <FaGithub /> GitHub
                  </motion.a>
                  <motion.a href={project.live} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-blue-600 text-white rounded-full flex items-center gap-2" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <FaExternalLinkAlt /> Live Demo
                  </motion.a>
                </div>
              </motion.div>

              {/* Image Content */}
              <motion.div
                className="hidden md:block"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                viewport={{ root: null, once: false, amount: 0.5 }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-lg shadow-2xl shadow-blue-500/20"
                />
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;