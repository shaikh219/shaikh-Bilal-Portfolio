'use client';

import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-8 mt-12 border-t dark:border-gray-700">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} MyPortfolio. All rights reserved.
        </p>

        <div className="flex gap-4 text-xl">
          <a
            href="bilalbagmar@gmail.com"
            aria-label="Email"
            className="hover:text-blue-500 focus:outline-none focus-visible:ring-2 ring-blue-400 rounded transition"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/shaikh219"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-blue-500 focus:outline-none focus-visible:ring-2 ring-blue-400 rounded transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/shaikh-bilal-bagmar219"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-blue-500 focus:outline-none focus-visible:ring-2 ring-blue-400 rounded transition"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
