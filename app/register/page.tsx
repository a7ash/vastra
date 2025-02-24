'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

const floatingAnimation: Variants = {
  initial: { 
    opacity: 0, 
    y: -20 
  },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.2
    }
  },
  floating: { 
    y: [-5, 5],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse" as const,
      ease: "easeInOut"
    }
  }
};

export default function Register() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5; // Slows down the video to half speed
    }
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/gallerynewbg.jpg"
          alt="Register Background"
          fill
          className="object-cover w-full h-full"
          priority
        />
        <div className="absolute inset-0 bg-black/30" /> {/* Light overlay for better text visibility */}
      </div>

      {/* Content */}
      <div className="relative pt-32 px-4 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto max-w-4xl"
        >
          {/* Header */}
          <motion.h1
            variants={floatingAnimation}
            initial="initial"
            animate={["animate", "floating"]}
            className="text-7xl font-brimons text-center mb-16 text-[#ffe159]"
          >
            REGISTER NOW!!!
          </motion.h1>
          
          {/* Content Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="relative rounded-xl overflow-hidden shadow-[12px_12px_0px_0px_rgba(255,225,89,1)]"
          >
            {/* Black overlay */}
            <div className="absolute inset-0 bg-black/25" />
            
            {/* Content */}
            <div className="relative p-12">
              <p className="text-3xl font-helvetica-255 mb-12 text-white text-center tracking-wide">
                Click on the link below to register for the various events
              </p>
              
              <div className="flex justify-center mb-12">
                <motion.a
                  href="https://linktr.ee/Vastra_25"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-4xl font-helvetica-255 text-[#ffe159] hover:text-white transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  @linktr.ee/Vastra_25
                </motion.a>
              </div>

              <div className="text-center space-y-6">
                <p className="text-2xl font-helvetica-255 text-white">
                  Last date to register: <span className="text-[#ffe159] font-bold">1st March 2025</span>
                </p>
                <p className="text-xl font-helvetica-255 text-[#ffe159] italic">
                  Time's running. Hurry upp!
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
} 