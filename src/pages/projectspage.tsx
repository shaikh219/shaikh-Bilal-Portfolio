'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '@/components/ProjectCard';
import MotionWrapper from '@/components/MotionWrapper';

const techFilters = ['All', 'React', 'Next.js', 'Python', 'Machine Learning'];
const projects = [
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio built with Next.js, Tailwind CSS, and Framer Motion.',
    image: '/images/Projects/Portfolio.png',
    technologies: ['Next.js', 'Tailwind', 'TypeScript'],
    github: 'https://github.com/shaikh219/shaikh-Bilal-Portfolio',
    demo: 'https://shaikh-bilal-portfolio.vercel.app/',
  },
  {
    title: 'Weather App',
    description: 'Real-time weather app using OpenWeatherMap API.',
    image: '/images/Projects/weather.png',
    technologies: ['React', 'API', 'CSS'],
    github: 'https://github.com/shaikh219/Weather',
    demo: 'https://weather-app-demo.com',
  },
  {
    title: 'Loan Default Prediction',
    description: 'ML-powered app that predicts loan defaults using financial data.',
    image: '/images/Projects/Loan-default.png',
    technologies: ['Python', 'Machine Learning'],
    github: 'https://github.com/shaikh219/loan-default',
    demo: '#',
  },
];

const ProjectsSection: React.FC = () => {
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const [view, setView] = useState<'grid' | 'list'>('grid');

  const filtered = selectedTech
    ? projects.filter((p) => p.technologies.includes(selectedTech))
    : projects;

  return (
    <MotionWrapper id="projects" className="relative max-w-6xl mx-auto px-4 py-20" delay={0.2}>
      {/* Background orb */}
      <motion.div
        className="absolute top-0 left-[-100px] w-96 h-96 bg-gradient-to-tr from-purple-500 to-blue-400 rounded-full blur-3xl opacity-30 z-[-1]"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 60, repeat: Infinity }}
      />

      <h2 className="text-3xl font-semibold text-center text-gray-900 dark:text-white mb-6">
        Projects
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
        These showcase skills in frontend, backend, and full-stack development — crafted with detail and care.
      </p>

      {/* Filter buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {techFilters.map((tech) => (
          <motion.button
            key={tech}
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedTech(tech === 'All' ? null : tech)}
            className={`px-4 py-2 rounded-full border transition font-medium
              ${
                selectedTech === tech || (tech === 'All' && selectedTech === null)
                  ? 'bg-blue-600 text-white shadow'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white'
              }`}
          >
            {tech}
          </motion.button>
        ))}
      </div>

      {/* View toggle */}
      <div className="flex justify-center mb-8">
        <button
          onClick={() => setView(view === 'grid' ? 'list' : 'grid')}
          className="text-sm px-4 py-2 border rounded hover:bg-blue-600 hover:text-white transition"
        >
          Toggle to {view === 'grid' ? 'List' : 'Grid'} View
        </button>
      </div>

      {/* Projects Grid/List */}
      {filtered.length === 0 ? (
        <p className="text-center text-gray-500 dark:text-gray-400">No projects found for {selectedTech}.</p>
      ) : (
        <motion.div
          className={`${
            view === 'grid' ? 'grid md:grid-cols-2 lg:grid-cols-3' : 'flex flex-col'
          } gap-8`}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {filtered.map((project, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>
      )}
    </MotionWrapper>
  );
};

export default ProjectsSection;
