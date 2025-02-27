'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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

  const sections = [
    {
      title: "Our Artistic Talent",
      images: [
        '/art_team/IMG-20250208-WA0046.jpg',
        '/art_team/IMG-20250208-WA0043.jpg',
        '/art_team/IMG-20250208-WA0045.jpg',
        '/art_team/IMG-20250208-WA0042.jpg',
        '/art_team/IMG-20250208-WA0041.jpg',
        '/art_team/IMG-20250208-WA0025.jpg',
        '/art_team/IMG-20250208-WA0024.jpg',
        '/art_team/IMG-20250208-WA0023.jpg'
      ]
    },
    {
      title: "The Alumni Get together",
      images: [
        '/gtg/IMG-20250208-WA0073.jpg',
        '/gtg/IMG-20250208-WA0039.jpg',
        '/gtg/IMG-20250208-WA0038.jpg',
        '/gtg/IMG-20250208-WA0037.jpg',
        '/gtg/IMG-20250208-WA0036.jpg',
        '/gtg/IMG-20250208-WA0035.jpg',
        '/gtg/IMG-20250208-WA0034.jpg',
        '/gtg/IMG-20250208-WA0033.jpg',
        '/gtg/IMG-20250208-WA0031.jpg',
        '/gtg/IMG-20250208-WA0030.jpg',
        '/gtg/IMG-20250208-WA0029.jpg',
        '/gtg/IMG-20250208-WA0028.jpg',
        '/gtg/IMG-20250208-WA0027.jpg'
      ]
    },
    {
      title: "Last year's Team",
      images: [
        '/images/24vastragallery/1.jpg',
        '/images/24vastragallery/2.jpg',
        '/images/24vastragallery/3.jpg',
        '/images/24vastragallery/4.jpg',
        '/images/24vastragallery/5.jpg',
        '/images/24vastragallery/6.jpg',
        '/images/24vastragallery/7.jpg',
        '/images/24vastragallery/8.jpg'
      ]
    },
    {
      title: "The Fashion Contest",
      images: [
        '/images/tfc/1t.jpg',
        '/images/tfc/2t.jpg',
        '/images/tfc/3t.jpg',
        '/images/tfc/4t.jpg',
        '/images/tfc/5t.jpg',
        '/images/tfc/6t.jpg'
      ]
    }
  ];

  return (
    <div className="min-h-screen relative">
      {/* Background with overlay */}
      <div className="fixed inset-0">
        <Image
          src="/images/gallerybg5.jpg"
          alt="Gallery Background"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        <div className="absolute inset-0">
          <Image
            src="/images/bora background.jpg"
            alt="Bora Background"
            fill
            className="object-cover opacity-60 mix-blend-overlay"
            priority
            quality={100}
          />
        </div>
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative min-h-screen pt-32 px-4 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto"
        >
          <motion.h1
            variants={floatingAnimation}
            initial="initial"
            animate={["animate", "floating"]}
            className="text-6xl font-domine text-center mb-16 text-white drop-shadow-[0_8px_16px_rgba(115,57,69,0.8)]"
          >
            Gallery
          </motion.h1>
          
          {/* Sections */}
          <div className="space-y-24">
            {sections.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: sectionIndex * 0.2 }}
                className="relative"
              >
                <h2 className="text-4xl font-domine text-white mb-8 text-center drop-shadow-[0_4px_8px_rgba(115,57,69,0.6)] relative">
                  {section.title}
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-[120%]">
                    <motion.svg 
                      viewBox="0 0 120 12" 
                      className="w-full h-3 text-white/60"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{
                        duration: 2,
                        ease: "easeInOut",
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                    >
                      <motion.path
                        d="M 0,6 Q 20,1 40,6 T 80,6 T 120,6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </motion.svg>
                  </div>
                </h2>
                
                {/* Grid for images */}
                <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 md:gap-8">
                  {section.images.map((imagePath, index) => (
                    <motion.div
                      key={`${sectionIndex}-${index}`}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      className="relative w-full cursor-pointer group"
                      onClick={() => setSelectedImage(imagePath)}
                    >
                      <div className="relative w-full rounded-lg md:rounded-xl overflow-hidden shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] md:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] md:hover:shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] transition-all duration-300">
                        <div className="relative pt-[100%] md:pt-[75%]"> {/* Square for mobile, 4:3 for desktop */}
                          <Image
                            src={imagePath}
                            alt={`${section.title} Image ${index + 1}`}
                            fill
                            className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            sizes="(max-width: 768px) 33vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        </div>
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-300" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Lightbox */}
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
            <Image
              src={selectedImage}
              alt="Selected gallery image"
              width={1920}
              height={1080}
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