'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';
import Image from 'next/image';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Events', path: '/events' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Register', path: '/register' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#AC426E]/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16 border-b-2 border-white/40">
          <div className="flex items-center">
            <Image
              src="/images/transparent-bg.webp"
              alt="VJTI Logo"
              width={128}
              height={128}
              className="object-contain mr-8 -ml-4"
              priority
            />
            <Link href="/" className="flex items-center">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={`text-2xl font-oldEnglish ${
                  scrolled ? 'text-white' : 'text-white'
                } hover:text-yellow-light transition-colors duration-200`}
              >
                VASTRA
              </motion.span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            {navItems.map((item, index) => (
              <React.Fragment key={item.name}>
                <Link
                  href={item.path}
                  className={`nav-link font-oldEnglish text-lg px-4 py-2 transition-colors duration-200 ${
                    scrolled 
                      ? 'text-white hover:text-yellow-light' 
                      : 'text-white hover:text-yellow-light'
                  }`}
                >
                  {item.name}
                </Link>
                {index < navItems.length - 1 && (
                  <div className={`h-8 w-[2px] ${scrolled ? 'bg-white/40' : 'bg-white/40'}`} />
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white transition-colors duration-200"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-[#AC426E]/95 backdrop-blur-md rounded-b-2xl shadow-lg border-x-2 border-b-2 border-white/20"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="border-b-2 border-white/20 last:border-b-0"
                  >
                    <Link
                      href={item.path}
                      className="block px-3 py-2 text-base font-oldEnglish text-white hover:text-yellow-light transition-all duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation; 