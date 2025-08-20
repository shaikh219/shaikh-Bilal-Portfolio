'use client';

import React from 'react';
import ProjectCard from '@/components/ProjectCard';
import MotionWrapper from '@/components/MotionWrapper';
import projects from '@/data/projects.json';

type Project = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  demo?: string;
};

const ProjectsSection: React.FC = () => {
  return (
    <MotionWrapper
      id="projects"
      className="max-w-6xl mx-auto px-4 py-20"
      delay={0.2}
    >
      <h2
        id="projects-title"
        className="text-3xl font-semibold text-gray-900 dark:text-white mb-6 text-center"
      >
        Projects
      </h2>

      <p className="text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto">
        A selection of my work — including websites, apps, and data-driven dashboards.
      </p>

      {projects.length > 0 ? (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {(projects as Project[]).map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 dark:text-gray-400">
          No projects available right now. Check back soon!
        </p>
      )}
    </MotionWrapper>
  );
};

export default ProjectsSection;
