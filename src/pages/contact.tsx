'use client';

import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import MotionWrapper from '@/components/MotionWrapper';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        'YOUR_SERVICE_ID',   // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID',  // Replace with your EmailJS template ID
        e.currentTarget,
        'YOUR_PUBLIC_KEY'    // Replace with your EmailJS public key
      )
      .then(() => {
        setSubmitted(true);
        setLoading(false);
        e.currentTarget.reset(); // Clear form
      })
      .catch((error) => {
        console.error('EmailJS error:', error);
        setLoading(false);
      });
  };

  return (
    <MotionWrapper id="contact" className="max-w-xl mx-auto px-4 py-20" delay={0.2}>
      <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-4">
        Contact Me
      </h2>
      <p className="text-gray-600 dark:text-gray-300 text-center mb-8">
        Whether you want to collaborate, hire me, or just say hello — feel free to drop a message.
      </p>

      <div className="bg-white dark:bg-gray-900 shadow-xl dark:shadow-lg rounded-xl p-6 md:p-8 backdrop-blur-lg border border-gray-200 dark:border-gray-700">
        {submitted ? (
          <p
            className="text-green-600 dark:text-green-400 text-center text-lg font-medium"
            aria-live="polite"
          >
            ✅ Thank you! I’ll get back to you soon.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Your Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                placeholder="e.g. Shaikh Bilal"
                className="mt-1 px-4 py-3 rounded-md w-full border dark:bg-gray-800 dark:border-gray-700 dark:text-white"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Your Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="e.g. bilal@example.com"
                className="mt-1 px-4 py-3 rounded-md w-full border dark:bg-gray-800 dark:border-gray-700 dark:text-white"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Your Message
              </label>
              <textarea
                name="message"
                id="message"
                required
                rows={5}
                placeholder="Type your message here..."
                className="mt-1 px-4 py-3 rounded-md w-full border dark:bg-gray-800 dark:border-gray-700 dark:text-white"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 rounded-md transition"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        )}
      </div>
    </MotionWrapper>
  );
};

export default Contact;
