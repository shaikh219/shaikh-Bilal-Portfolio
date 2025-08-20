'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MotionWrapper from '@/components/MotionWrapper';
import ProjectCard from '@/components/ProjectCard';
import Head from 'next/head';
const projects = [
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio built with Next.js, Tailwind CSS, and Framer Motion.',
    image: '/images/projects/app.png',
    technologies: ['Next.js', 'Tailwind CSS', 'TypeScript'],
    github: 'https://github.com/yourusername/portfolio',
    demo: 'https://yourportfolio.com',
  },
  {
    title: 'Weather App',
    description: 'Real-time weather forecasting using OpenWeatherMap API.',
    image: '/images/projects/app.png',
    technologies: ['React', 'API', 'CSS'],
    github: 'https://github.com/yourusername/weather-app',
    demo: 'https://weather-demo.com',
  },
  // Add more projects...
];

const index: React.FC = () => {
  return (
    <>
      <Header />

        

      <Head>
         <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="pt-24 px-4 max-w-6xl mx-auto space-y-24">

        {/* Home Section */}
        <MotionWrapper id="home" className="text-center" delay={0.1}>
               {/* Profile Image */}
      <img
        src="/images/Profile.png"
        alt="Shaikh Bilal"
        className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-blue-500 object-cover shadow-md"
      />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Hi, I'm <span className="text-blue-600 dark:text-blue-400">Shaikh mohammad bilal</span>
          </h1>
        
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Full-stack developer crafting responsive, performant, and user-focused web experiences.
          </p>
        </MotionWrapper>

        {/* About Section */}
        <MotionWrapper id="about" delay={0.2}>
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">About Me</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl">
            I'm a developer passionate about solving problems with clean code and meaningful UI. I enjoy working across the stack and have experience building dynamic, accessible web applications using modern frameworks and cloud technologies.
          </p>
        </MotionWrapper>

        {/* Projects Section */}
        <MotionWrapper id="projects" delay={0.3}>
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <ProjectCard key={idx} {...project} />
            ))}
          </div>
        </MotionWrapper>

        {/* Contact Section */}
        <MotionWrapper id="contact" delay={0.4}>
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Contact</h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mb-4">
            Interested in working together or have a question? Reach out and let’s connect!
          </p>
          <a
            href="mailto:your@email.com"
            className="inline-block mt-2 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Say Hello
          </a>
        </MotionWrapper>
      </main>

      <Footer />
    </>
  );
};

export default index;