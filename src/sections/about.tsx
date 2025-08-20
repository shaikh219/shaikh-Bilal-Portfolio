'use client';

import React from 'react';
import MotionWrapper from '@/components/MotionWrapper';

const About: React.FC = () => {
  return (
    <MotionWrapper
      id="about"
      className="max-w-4xl mx-auto px-4 py-20"
      delay={0.2}
    >
      <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
        About Me
      </h2>

      <div className="space-y-5 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
        <p>
          I'm <strong>Shaikh Bilal</strong>, a postgraduate in Computer Applications (MCA) with a
          strong passion for <strong>web development</strong>, <strong>teaching</strong>, and
          <strong> data analytics</strong>. My background blends practical coding, instructional
          experience, and real-world internships.
        </p>

        <p>
          As a <strong>Computer Teacher</strong>, I taught Python and MS Office to 50+ students,
          maintained a 95% lab success rate, and managed the school's website and IT infrastructure
          — reducing downtime by 30%.
        </p>

        <p>
          During my internship at <strong>Nascency Pvt Ltd</strong>, I worked on responsive websites
          using HTML, CSS, JavaScript, and PHP — contributing to both frontend and backend tasks
          alongside senior developers.
        </p>

        <p>
          I'm confident using <strong>Python</strong>, <strong>SQL</strong>, <strong>React</strong>,
          <strong> Power BI</strong>, and <strong>Java</strong>, with certifications in SQL and Data
          Science. I enjoy building apps, automating workflows, and visualizing insights.
        </p>

        <p>
          I recently completed my MCA at Government Engineering College, Aurangabad, and I’m actively
          seeking opportunities to grow as a developer and contribute to impactful projects.
        </p>
      </div>

      <div className="text-center mt-10">
        <a
          href="/Shaikh_Bilal_Resume.pdf"
          download
          aria-label="Download Resume"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Download Resume
        </a>
      </div>
    </MotionWrapper>
  );
};

export default About;
