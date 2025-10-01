'use client';

import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MotionWrapper from '@/components/MotionWrapper';
import ProjectCard from '@/components/ProjectCard';
import VantaBackground from '@/components/vanta_background';
import { Typewriter } from 'react-simple-typewriter';
import Lottie from 'lottie-react';
import aiAnimation from '@/lottie/ai.json';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio built with Next.js, Tailwind CSS, and Framer Motion.',
    image: '/images/Projects/portfolio.png',
    technologies: ['Next.js', 'Tailwind CSS', 'TypeScript'],
    github: 'https://github.com/shaikh219/shaikh-Bilal-Portfolio',
    demo: 'https://shaikh-bilal-portfolio.vercel.app/',
  },
  {
    title: 'Weather App',
    description: 'Real-time weather forecasting using OpenWeatherMap API.',
    image: '/images/projects/Weather.png',
    technologies: ['React', 'API', 'CSS'],
    github: 'https://github.com/yourusername/weather-app',
    demo: '',
  },
];

const quotes = [
  "First, solve the problem. Then, write the code.",
  "Experience is the name everyone gives to their mistakes.",
  "Java is to JavaScript what car is to Carpet.",
  "Knowledge is power, but enthusiasm pulls the switch.",
];

const DailyDevQuote = () => {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  }, []);

  return (
    <p className="italic text-center text-gray-500 dark:text-purple-200 mt-8">
      “{quote}”
    </p>
  );
};

const Index: React.FC = () => {
  return (
    <>
      <Head>
        <title>Shaikh Mohammad Bilal | Portfolio</title>
        <meta name="description" content="Portfolio of Shaikh Mohammad Bilal" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <VantaBackground /> */}
      <Header />

      <main className="pt-24 px-4 max-w-7xl mx-auto space-y-24 relative z-10 text-gray-900 dark:text-white">
        {/* Hero Section */}
        <MotionWrapper id="home" className="text-center" delay={0.1}>
          <div className="w-32 h-32 mx-auto mb-6 rounded-full border-4 border-purple-500 shadow-xl overflow-hidden">
            <img
              src="Public/images/Profile.jpg"
              alt="Shaikh Bilal"
              className="object-cover w-full h-full"
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
            Hi, I'm <span className="text-purple-600 dark:text-purple-400">Shaikh Mohammad Bilal</span>
          </h1>
          <p className="mt-4 text-xl font-light text-gray-600 dark:text-purple-200">
            <Typewriter
              words={['Data Enthusiast 💻', 'Cloud Enthusiast ☁️', 'AI Explorer 🤖', 'Teacher 🎨']}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </p>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-gray-600 dark:text-purple-200">
            I use data to uncover insights, build predictive models, and help businesses make smarter decisions with the help of analytics and machine learning.
          </p>

          <div className="w-full md:w-1/2 mx-auto mt-8">
            <Lottie animationData={aiAnimation} loop={true} />
          </div>

          <DailyDevQuote />
        </MotionWrapper>

        {/* About Section */}
        <MotionWrapper id="about" delay={0.2}>
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="text-gray-700 dark:text-purple-200 leading-relaxed max-w-3xl">
            I'm a data scientist passionate about turning complex data into actionable insights and intelligent solutions. I enjoy exploring data, building predictive models, and creating analytics tools that drive better decisions. My experience spans machine learning, statistical analysis, and cloud-based data pipelines.
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
          <h2 className="text-3xl font-bold mb-6">Contact</h2>
          <p className="text-gray-700 dark:text-purple-200 max-w-2xl mb-4">
            Interested in working together or have a question? Reach out and let’s connect!
          </p>
          <a
            href="bilalbagmar@gmail.com"
            className="inline-block mt-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl shadow hover:from-purple-700 hover:to-blue-700 transition"
          >
            Say Hello
          </a>
        </MotionWrapper>
      </main>

      <Footer />
    </>
  );
};

export default Index;
// 'use client';

// import React, { useEffect, useState } from 'react';
// import Head from 'next/head';
// import Header from '@/components/Header';
// import Footer from '@/components/Footer';
// import MotionWrapper from '@/components/MotionWrapper';
// import ProjectCard from '@/components/ProjectCard';
// import VantaBackground from '@/components/vanta_background';
// import { Typewriter } from 'react-simple-typewriter';

// const projects = [
//   {
//     title: 'Portfolio Website',
//     description: 'A personal portfolio built with Next.js, Tailwind CSS, and Framer Motion.',
//     image: '/images/projects/app.png',
//     technologies: ['Next.js', 'Tailwind CSS', 'TypeScript'],
//     github: 'https://github.com/yourusername/portfolio',
//     demo: 'https://yourportfolio.com',
//   },
//   {
//     title: 'Weather App',
//     description: 'Real-time weather forecasting using OpenWeatherMap API.',
//     image: '/images/projects/app.png',
//     technologies: ['React', 'API', 'CSS'],
//     github: 'https://github.com/yourusername/weather-app',
//     demo: 'https://weather-demo.com',
//   },
// ];

// const quotes = [
//   "First, solve the problem. Then, write the code.",
//   "Experience is the name everyone gives to their mistakes.",
//   "Java is to JavaScript what car is to Carpet.",
//   "Knowledge is power, but enthusiasm pulls the switch.",
// ];

// const DailyDevQuote = () => {
//   const [quote, setQuote] = useState("");

//   useEffect(() => {
//     const randomIndex = Math.floor(Math.random() * quotes.length);
//     setQuote(quotes[randomIndex]);
//   }, []);

//   return (
//     <p className="italic text-center text-gray-800 dark:text-gray-400 mt-8">
//       “{quote}”
//     </p>
//   );
// };

// const Index: React.FC = () => {
//   return (
//     <>
//       <Head>
//         <title>Shaikh Mohammad Bilal | Portfolio</title>
//         <meta name="description" content="Portfolio of Shaikh Mohammad Bilal" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <VantaBackground />
//       <Header />
//       <main className="pt-24 px-4 max-w-6xl mx-auto space-y-24 relative z-10">
//         {/* Home Section */}
//         <MotionWrapper id="home" className="text-center" delay={0.1}>
//           <img
//             src="/images/Profile.png"
//             alt="Shaikh Bilal"
//             className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-blue-500 object-cover shadow-lg"
//           />
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white ">
//             Hi, I'm <span className="text-blue-600 dark:text-blue-400">Shaikh Mohammad Bilal</span>
//           </h1>
//           <p className="mt-2 text-xl text-gray-800 dark:text-gray-300 font-medium">
//             <Typewriter
//               words={[
//                 'Data Enthusiast 💻',
//                 'Cloud Enthusiast ☁️',
//                 'AI Explorer 🤖',
//                 'Teacher 🎨',
//               ]}
//               loop={true}
//               cursor
//               cursorStyle="|"
//               typeSpeed={70}
//               deleteSpeed={50}
//               delaySpeed={1000}
//             />
//           </p>
//           <p className="mt-4 text-lg text-gray-800 dark:text-gray-300 max-w-2xl mx-auto">
//             Building responsive, performant, and user-focused web experiences using modern technologies.
//           </p>
//           <DailyDevQuote />
//         </MotionWrapper>

//         {/* About Section */}
//         <MotionWrapper id="about" delay={0.2}>
//           <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">About Me</h2>
//           <p className="text-gray-800 dark:text-gray-300 leading-relaxed max-w-3xl">
//             I'm a developer passionate about solving problems with clean code and meaningful UI. I enjoy working across the stack and have experience building dynamic, accessible web applications using modern frameworks and cloud technologies.
//           </p>
//         </MotionWrapper>

//         {/* Projects Section */}
//         <MotionWrapper id="projects" delay={0.3}>
//           <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Projects</h2>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {projects.map((project, idx) => (
//               <ProjectCard key={idx} {...project} />
//             ))}
//           </div>
//         </MotionWrapper>

//         {/* Contact Section */}
//         <MotionWrapper id="contact" delay={0.4}>
//           <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Contact</h2>
//           <p className="text-gray-800 dark:text-gray-300 max-w-2xl mb-4">
//             Interested in working together or have a question? Reach out and let’s connect!
//           </p>
//           <a
//             href="mailto:your@email.com"
//             className="inline-block mt-2 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
//           >
//             Say Hello
//           </a>
//         </MotionWrapper>
//       </main>

//       <Footer />
//     </>
//   );
// };

// export default Index;
