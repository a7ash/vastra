'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Increased to 30 cells for more images
  const gridCells = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    <div className="min-h-screen relative">
      {/* Background with overlay and scrolling effect */}
      <div className="absolute inset-0 min-h-full">
        <Image
          src="/images/gallery-bg.jpg"
          alt="Gallery Background"
          fill
          className="object-cover object-bottom"
          priority
        />
        <div className="absolute inset-0">
          <Image
            src="/images/bora background.jpg"
            alt="Bora Background"
            fill
            className="object-cover object-bottom opacity-60 mix-blend-overlay"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative pt-32 px-4 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto"
        >
          <h1 className="text-6xl font-domine text-center mb-16 text-white drop-shadow-[0_8px_16px_rgba(115,57,69,0.8)]">Gallery</h1>
          
          {/* Grid for images - adjusted for landscape orientation */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gridCells.map((cell) => (
              <motion.div
                key={cell}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: cell * 0.05 }}
                className="relative aspect-video rounded-xl overflow-hidden group cursor-pointer bg-white/10 backdrop-blur-sm border-2 border-dashed border-white/20 hover:border-white/40 transition-all duration-300"
                onClick={() => {
                  const img = document.querySelector(`#gallery-img-${cell}`) as HTMLImageElement;
                  if (img?.src) setSelectedImage(img.src);
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center text-white/50">
                  {/* Placeholder for image */}
                  <img
                    id={`gallery-img-${cell}`}
                    alt={`Gallery Image ${cell}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Lightbox - adjusted for landscape images */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="relative w-full max-w-6xl"
            onClick={e => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Selected gallery image"
              className="w-full h-auto rounded-lg"
            />
            <button
              className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
} 