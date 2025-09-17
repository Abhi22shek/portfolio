import React from 'react';
import { motion } from 'framer-motion';
import {
  Html5, Css3, FileJson, ReactLogo, NextjsIcon, NodejsIcon, MongoDBIcon,
  PostgreSQLIcon, ExpressIcon, TailwindIcon, Git, Github, WebSocketIcon, SocketIOIcon
} from '../utils/logo';

const skills = [
  { name: "HTML", icon: Html5 }, { name: "CSS", icon: Css3 }, { name: "JavaScript", icon: FileJson },
  { name: "React.js", icon: ReactLogo }, { name: "Next.js", icon: NextjsIcon }, { name: "Node.js", icon: NodejsIcon },
  { name: "MongoDB", icon: MongoDBIcon }, { name: "PostgreSQL", icon: PostgreSQLIcon }, { name: "Express.js", icon: ExpressIcon },
  { name: "Tailwind", icon: TailwindIcon }, { name: "Git", icon: Git }, { name: "GitHub", icon: Github },
  { name: "WebSocket", icon: WebSocketIcon }, { name: "Socket.IO", icon: SocketIOIcon },
];

const SkillsMarquee = () => {
  return (
    <div className="w-full overflow-x-hidden whitespace-nowrap py-8">
      <motion.div
        className="flex"
        animate={{
          x: ['0%', '-50%'],
        }}
        transition={{
          ease: 'linear',
          duration: 25,
          repeat: Infinity,
        }}
      >
        {[...skills, ...skills].map((skill, index) => {
          const Icon = skill.icon;
          return (
            <div key={index} className="flex-shrink-0 w-40 flex flex-col items-center justify-center p-4 m-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
              <Icon size={48} className="text-gray-300" />
              <span className="mt-3 text-sm font-medium text-white">{skill.name}</span>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default SkillsMarquee;
