'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';


const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projectspage' },
  { name: 'Contact', href: '/contact' },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState<string>('/');

  useEffect(() => {
    const handleScroll = () => {
      const hash = window.location.hash || '/';
      setActive(hash);
    };

    window.addEventListener('hashchange', handleScroll);
    return () => window.removeEventListener('hashchange', handleScroll);
  }, []);

  return (
    <motion.header
      className="fixed top-0 left-0 w-full bg-white dark:bg-black shadow-md z-50"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
         <link rel="icon" href="/favicon.ico" />
        <Link href="/" className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          MyPortfolio
        </Link>

        <nav className="hidden md:flex gap-6 items-center">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`transition-colors duration-200 ${
                active === item.href
                  ? 'text-blue-500'
                  : 'text-gray-700 dark:text-gray-200 hover:text-blue-500'
              }`}
            >
              {item.name}
            </a>
          ))}
          <ThemeToggle />
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 dark:text-gray-200 focus:outline-none"
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-black px-4 pb-4 space-y-3">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => {
                setActive(item.href);
                setIsOpen(false);
              }}
              className={`block transition-colors duration-200 ${
                active === item.href
                  ? 'text-blue-500'
                  : 'text-gray-800 dark:text-gray-100 hover:text-blue-500'
              }`}
            >
              {item.name}
            </a>
          ))}
          <ThemeToggle />
        </div>
      )}
    </motion.header>
  );
};

export default Header;
