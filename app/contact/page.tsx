'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Contact() {
  return (
    <div className="min-h-screen relative">
      {/* Background with overlay */}
      <div className="fixed inset-0">
        <Image
          src="/images/gallerybg3.jpg"
          alt="Contact Background"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-black/40" /> {/* Overlay for better text visibility */}
      </div>

      {/* Content */}
      <div className="relative min-h-screen pt-32 px-4 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto max-w-4xl"
        >
          <h1 className="text-6xl font-domine text-center mb-16 text-white drop-shadow-[0_8px_16px_rgba(115,57,69,0.8)]">
            Contact Us
          </h1>
          
          {/* Content will be added once provided */}
          
        </motion.div>
      </div>
    </div>
  );
} 