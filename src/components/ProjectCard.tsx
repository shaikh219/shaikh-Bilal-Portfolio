'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  demo?: string;
};

// Emoji + Color Mapping for Technologies
const techIconMap: Record<string, { label: string; className: string }> = {
  'Next.js': { label: '⚙️ Next.js', className: 'bg-gray-800 text-white' },
  React: { label: '⚛️ React', className: 'bg-blue-100 text-blue-800' },
  'Tailwind': { label: '🌬️ Tailwind', className: 'bg-cyan-100 text-cyan-800' },
  'TypeScript': { label: '📘 TS', className: 'bg-indigo-100 text-indigo-800' },
  'Python': { label: '🐍 Python', className: 'bg-yellow-100 text-yellow-800' },
  'Machine Learning': { label: '🧠 ML', className: 'bg-pink-100 text-pink-800' },
  API: { label: '🔌 API', className: 'bg-teal-100 text-teal-800' },
  CSS: { label: '🎨 CSS', className: 'bg-blue-50 text-blue-700' },
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  technologies,
  github,
  demo,
}) => {
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 40 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="rounded-2xl overflow-hidden border border-gray-700 bg-white dark:bg-gray-900 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col"
    >
      {/* Image Hover */}
      <div className="relative group">
        <img
          src={image}
          alt={`Preview of ${title}`}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-lg font-semibold">
          {title}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
        <p className="text-sm text-gray-700 dark:text-gray-300 flex-grow">{description}</p>

        {/* Tech Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {technologies.map((tech) => {
            const tag = techIconMap[tech] || {
              label: tech,
              className: 'bg-gray-200 text-gray-800',
            };
            return (
              <span
                key={tech}
                className={`text-xs font-medium px-2 py-1 rounded-full ${tag.className}`}
              >
                {tag.label}
              </span>
            );
          })}
        </div>

        {/* Links */}
        <div className="flex gap-4 mt-4 text-sm text-gray-600 dark:text-gray-300">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-white transition"
            >
              <FaGithub /> Code
            </a>
          )}
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-white transition"
            >
              <FaExternalLinkAlt /> Live
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
