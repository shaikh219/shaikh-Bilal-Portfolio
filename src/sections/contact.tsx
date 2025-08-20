'use client';

import React, { useState } from 'react';
import MotionWrapper from '@/components/MotionWrapper';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;

    // Simulate API/form logic
    setTimeout(() => {
      form.reset();
      setSubmitted(true);
      setLoading(false);
    }, 1000);
  };

  return (
    <MotionWrapper
      id="contact"
      className="max-w-4xl mx-auto px-4 py-20"
      delay={0.2}
    >
      <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
        Contact Me
      </h2>

      <p className="text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto">
        Whether you want to collaborate, hire me, or just say hello — feel free to drop a message.
      </p>

      {submitted ? (
        <p className="text-green-600 dark:text-green-400 text-center text-lg">
          ✅ Thank you! I’ll get back to you soon.
        </p>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-6 max-w-xl mx-auto"
        >
          <input
            type="text"
            name="name"
            aria-label="Your Name"
            required
            placeholder="Your Name"
            className="px-4 py-3 rounded border dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 ring-blue-500"
          />
          <input
            type="email"
            name="email"
            aria-label="Your Email"
            required
            placeholder="Your Email"
            className="px-4 py-3 rounded border dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 ring-blue-500"
          />
          <textarea
            name="message"
            rows={5}
            aria-label="Your Message"
            required
            placeholder="Your Message"
            className="px-4 py-3 rounded border dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 ring-blue-500"
          ></textarea>
          <button
            type="submit"
            disabled={loading}
            className={`bg-blue-600 text-white font-semibold py-3 px-6 rounded transition ${
              loading
                ? 'opacity-60 cursor-not-allowed'
                : 'hover:bg-blue-700'
            }`}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      )}
    </MotionWrapper>
  );
};

export default Contact;
