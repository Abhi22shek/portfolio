@@ .. @@
 import React from 'react';
 import { motion } from 'framer-motion';
 import {
   BiBriefcase,
   BiSolidGraduation,
   BiCalendar,
   BiMap,
   BiCode,
   BiTrendingUp
 } from 'react-icons/bi';
+import experiencesData from '../data/experiences.json';

-const experiences = [
-  {
-    title: 'Frontend Developer',
-    company: 'Safe Your Web',
-    location: 'Delhi, India',
-    period: 'Oct 2024 - Jan 2025',
-    description: 'Developed and maintained modern web applications using React and contemporary development practices.',
-    achievements: [
-      'Built responsive web applications with React and modern CSS frameworks',
-      'Implemented cross-browser compatibility and mobile-first design principles',
-      'Collaborated with design and backend teams to deliver seamless user experiences',
-      'Optimized application performance and implemented best practices'
-    ],
-    type: 'work',
-    icon: 'BiCode',
-    color: '#3B82F6'
-  },
-  {
-    title: 'Bachelor in Computer Science',
-    company: 'Shushila Devi Bansal College of Technology',
-    location: 'Indore, Madhya Pradesh',
-    period: '2021 - 2025',
-    description: 'Comprehensive study in Computer Science with focus on software development and modern technologies.',
-    achievements: [
-      'Strong foundation in programming languages and software engineering principles',
-      'Completed projects in web development, data structures, and algorithms',
-      'Participated in coding competitions and technical workshops',
-      'Maintained excellent academic performance throughout the program'
-    ],
-    type: 'education',
-    icon: 'BiSolidGraduation',
-    color: '#10B981'
-  }
-];
+// Icon mapping for dynamic icon rendering
+const iconMap = {
+  BiCode,
+  BiSolidGraduation,
+  BiBriefcase
+};

 const Experience = () => {
@@ .. @@
             {/* Timeline Line */}
             <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-maroon via-blue-500 to-maroon opacity-20"></div>
             
-            {experiences.map((exp, index) => {
-              const Icon = exp.icon;
+            {experiencesData.map((exp, index) => {
+              const Icon = iconMap[exp.icon as keyof typeof iconMap] || BiCode;
               return (