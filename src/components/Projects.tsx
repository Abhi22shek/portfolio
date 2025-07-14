@@ .. @@
 import { useState, useEffect } from 'react';
 import { motion, AnimatePresence } from 'framer-motion';
 import { FaGithub, FaExternalLinkAlt, FaCode, FaPalette, FaDatabase } from 'react-icons/fa';
+import projectsData from '../data/projects.json';

-const projects = [
-  {
-    title: 'FullStack Real-time Chat Application',
-    description: 'I built a real-time chat application where users can securely sign up, log in, and exchange instant messages, images, and documents. The app shows online/offline status, allows profile and theme customization, and works smoothly on both desktop and mobile.',
-    image: './project-4.png',
-    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "TailwindCSS"],
-    category: 'backend',
-    github: 'https://github.com/Abhi22shek/fullStack_Chat-App.git',
-    live: 'https://fullstack-chat-app-ayqr.onrender.com/',
-    featured: true
-  },
-  {
-    title: 'Imagify Text to Photos Generation',
-    description: 'A fully responsive AI SaaS MERN stack application where users can securely log in, buy credits using Razorpay, and generate photos from text. Users spend credits to create AI-generated images.',
-    image: './project-3.png',
-    technologies: ['React', 'Node.js', 'MongoDB', 'Razorpay', 'AI API'],
-    category: 'backend',
-    github: 'https://github.com/Abhi22shek/Imagify.git',
-    live: 'https://imagify-beige-three.vercel.app/',
-    featured: true
-  },
-  {
-    title: '3D iPhone Website',
-    description: 'Developed a fully responsive 3D iPhone showcase website with an interactive user interface, optimized for all screen sizes.',
-    image: './project-1.png',
-    technologies: ['React', 'Three.js', 'GSAP', 'Tailwind'],
-    category: 'frontend',
-    github: 'https://github.com/Abhi22shek/Iphone_website.git',
-    live: 'https://iphone-website-one.vercel.app/',
-    featured: true
-  },
-  {
-    title: 'Interactive Quiz Platform',
-    description: 'An interactive quiz platform with timed quizzes, answer feedback highlighting wrong and correct options, and a history tracking feature.',
-    image: './project-2.png',
-    technologies: ['React', 'Tailwind'],
-    category: 'frontend',
-    github: 'https://github.com/Abhi22shek/Interactive-Quiz.git',
-    live: 'https://interactive-quiz-five.vercel.app',
-    featured: true
-  },
-];

 const categories = [
@@ .. @@
   const [hoveredProject, setHoveredProject] = useState<string | null>(null);

-  const filteredProjects = projects.filter(project => {
+  const filteredProjects = projectsData.filter(project => {
     if (activeCategory === 'all') return project.featured;