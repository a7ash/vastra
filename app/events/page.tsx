'use client';

import { motion } from 'framer-motion';

export default function Events() {
  return (
    <div className="min-h-screen pt-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto"
      >
        <h1 className="text-4xl font-domine text-center mb-8">Events</h1>
        {/* Content will be added later */}
      </motion.div>
    </div>
  );
} 