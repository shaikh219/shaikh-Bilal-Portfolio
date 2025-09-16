// // 'use client';

// // import React from 'react';
// // import Head from 'next/head';
// // import MotionWrapper from '@/components/MotionWrapper';

// // const About: React.FC = () => {
// //   return (
// //     <>
// //       <Head>
// //         <title>About | Shaikh Bilal</title>
// //       </Head>

// //       <MotionWrapper
// //         id="about"
// //         className="max-w-4xl mx-auto px-4 py-20"
// //         delay={0.2}
// //       >
// //         <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
// //           About Me
// //         </h2>

// //         <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
// //           I'm <strong>Shaikh Bilal</strong>, a postgraduate in Computer Applications (MCA) with a
// //           strong passion for web development, teaching, and data analytics. My background combines
// //           hands-on coding, technical instruction, and real-world internship experience.
// //         </p>

// //         <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
// //           As a <strong>Computer Teacher</strong>, I taught Python and MS Office to over 50 students,
// //           maintaining a 95% lab competency rate and managing the school’s website and computer lab
// //           systems to reduce downtime by 30%.
// //         </p>

// //         <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
// //           During my internship at <strong>Nascency Pvt Ltd</strong>, I helped develop responsive web
// //           applications using HTML, CSS, JavaScript, and PHP, and worked closely with senior developers
// //           on both front-end and back-end features.
// //         </p>

// //         <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
// //           I’m proficient in <strong>Python</strong>, <strong>SQL</strong>, <strong>Power BI</strong>,{' '}
// //           <strong>Java</strong>, and <strong>React</strong>. I’ve also earned certifications in SQL
// //           and Data Science, and love working on data-driven projects and dashboards.
// //         </p>

// //         <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
// //           I recently completed my MCA from Government Engineering College, Aurangabad, and I'm
// //           currently looking for opportunities where I can grow as a developer and contribute to
// //           meaningful projects in software development and data analytics.
// //         </p>

// //         <div className="text-center mt-8">
// //           <a
// //             href="/Shaikh_Bilal_Resume.pdf"
// //             download
// //             className="inline-block px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
// //           >
// //             Download Resume
// //           </a>
// //         </div>
// //       </MotionWrapper>
// //     </>
// //   );
// // };

// // export default About;
// 'use client';

// import React from 'react';
// import Head from 'next/head';
// import MotionWrapper from '@/components/MotionWrapper';
// import Image from 'next/image';

// const About: React.FC = () => {
//   return (
//     <>
//       <Head>
//         <title>About | Shaikh Bilal</title>
//       </Head>
//       <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black text-white ">
//         {/* Subtle blurred background effect */}
//         <div className="absolute -top-20 -left-20 w-[300px] h-[300px] bg-blue-500 blur-3xl opacity-20 rounded-full z-0" />
//         <div className="absolute top-10 right-10 w-[200px] h-[200px] bg-purple-500 blur-2xl opacity-10 rounded-full z-0" />

//         <MotionWrapper id="about" className="relative z-10 max-w-4xl mx-auto text-center" delay={0.1}>
//           {/* Profile Image */}
//           <Image
//             src="/images/Profile.png"
//             alt="Shaikh Bilal"
//             width={100}
//             height={100}
//             className="mx-auto rounded-full border-4 border-blue-600 shadow-lg mb-6"
//           />

//           <h2 className="text-4xl font-bold mb-6">About Me</h2>

//           {/* Info Cards */}
// <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left text-gray-200">
//   {/* Experience */}
//   <div className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700 hover:shadow-blue-500/30 transition duration-300">
//     <h3 className="text-xl font-semibold mb-2">🧠 Experience</h3>
//     <ul className="text-sm leading-relaxed space-y-1">
//       <li>👨‍🏫 1yr Computer Teacher</li>
//       <li>💼 Internship at Nascency Pvt Ltd</li>
//       <li>🎯 50+ students trained</li>
//     </ul>
//   </div>

//   {/* Skills */}
//   <div className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700 hover:shadow-blue-500/30 transition duration-300">
//     <h3 className="text-xl font-semibold mb-2">💻 Skills</h3>
//     <ul className="text-sm leading-relaxed space-y-1">
//       <li>✔ Python, Java, SQL</li>
//       <li>✔ React, Tailwind, JavaScript</li>
//       <li>✔ Power BI, Data Analytics</li>
//     </ul>
//   </div>

//   {/* Tools */}
//   <div className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700 hover:shadow-blue-500/30 transition duration-300">
//     <h3 className="text-xl font-semibold mb-2">🛠 Tools</h3>
//     <ul className="text-sm leading-relaxed space-y-1">
//       <li>🧩 VS Code, GitHub</li>
//       <li>📊 Power BI, Excel</li>
//       <li>🌐 HTML/CSS, PHP</li>
//     </ul>
//   </div>

//   {/* Education */}
//   <div className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700 hover:shadow-blue-500/30 transition duration-300">
//     <h3 className="text-xl font-semibold mb-2">🎓 Education</h3>
//     <ul className="text-sm leading-relaxed space-y-1">
//       <li>📘 MCA – GEC Aurangabad</li>
//       <li>🏆 Certified in SQL & Data Science</li>
//     </ul>
//   </div>
// </div>


//           {/* Resume Button */}
//           <div className="mt-10">
//             <a
//               href="/Shaikh_Bilal_Resume.pdf"
//               download
//               className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-lg font-semibold transition"
//             >
//               📄 Download Resume
//             </a>
//           </div>
//         </MotionWrapper>
//       </section>
//     </>
//   );
// };

// export default About;
'use client';

import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import MotionWrapper from '@/components/MotionWrapper';
import Image from 'next/image';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const About: React.FC = () => {
  const cards = [
    {
      title: '🧠 Experience',
      items: ['👨‍🏫 1yr Computer Teacher', '💼 Internship at Nascency Pvt Ltd', '🎯 50+ students trained'],
    },
    {
      title: '💻 Skills',
      items: ['✔ Python, Java, SQL', '✔ React, Tailwind, JavaScript', '✔ Power BI, Data Analytics'],
    },
    {
      title: '🛠 Tools',
      items: ['🧩 VS Code, GitHub', '📊 Power BI, Excel', '🌐 HTML/CSS, PHP'],
    },
    {
      title: '🎓 Education',
      items: ['📘 MCA – GEC Aurangabad', '🏆 Certified in SQL & Data Science'],
    },
    
  ];

  return (
    <>
      <Head>
        <title>About | Shaikh Bilal</title>
      </Head>

      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black text-white transition-colors duration-500">
        {/* Blurred Background Effects */}
        <div className="absolute -top-20 -left-20 w-[300px] h-[300px] bg-blue-500 blur-3xl opacity-20 rounded-full z-0" />
        <div className="absolute top-10 right-10 w-[200px] h-[200px] bg-purple-500 blur-2xl opacity-10 rounded-full z-0" />

        <MotionWrapper id="about" className="relative z-10 max-w-4xl mx-auto text-center" delay={0.1}>
          <Image
            src="/images/Profile.jpg"
            alt="Shaikh Bilal"
            width={128}
            height={128}
            className="mx-auto rounded-full border-4 border-blue-600 dark:border-blue-400 shadow-lg mb-6"
          />

          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10">
            I'm a passionate developer and educator who loves crafting websites, building data dashboards,
            and making technology easier to understand for everyone.
          </p>

          {/* Info Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left text-gray-200">
            {cards.map((card, i) => (
              <motion.div
                key={card.title}
                className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700 hover:shadow-blue-500/30 transition duration-300"
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
              >
                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                <ul className="text-sm leading-relaxed space-y-1">
                  {card.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Resume Download Button */}
          <div className="mt-10">
            <a
              href="/Shaikh_Bilal_Resume.pdf"
              download
              aria-label="Download Resume PDF"
              className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-lg font-semibold transition"
            >
              📄 Download Resume
            </a>
          </div>

          {/* Quote */}
          <blockquote className="italic text-gray-400 mt-12">
            “Experience is the name everyone gives to their mistakes.” – Oscar Wilde
          </blockquote>
        </MotionWrapper>
      </section>
    </>
  );
};

export default About;
