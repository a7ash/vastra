import Image from 'next/image';
import { motion } from 'framer-motion';

const BackgroundImages = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Phase 1 Image */}
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 2, delay: 0.2 }}
        className="absolute top-0 left-0 w-1/2 h-1/2"
      >
        <div className="relative w-full h-full">
          <Image
            src="/images/pha 1.jpg"
            alt="Phase 1"
            fill
            className="object-cover blur-sm"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
        </div>
      </motion.div>

      {/* Phase 2 Image */}
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 2, delay: 0.4 }}
        className="absolute top-0 right-0 w-1/2 h-1/2"
      >
        <div className="relative w-full h-full">
          <Image
            src="/images/pha 2.jpg"
            alt="Phase 2"
            fill
            className="object-cover blur-sm"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-l from-black/80 to-transparent" />
        </div>
      </motion.div>

      {/* Phase 3 Image */}
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 2, delay: 0.6 }}
        className="absolute bottom-0 left-0 w-1/2 h-1/2"
      >
        <div className="relative w-full h-full">
          <Image
            src="/images/pha 3.jpg"
            alt="Phase 3"
            fill
            className="object-cover blur-sm"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        </div>
      </motion.div>

      {/* Phase 4 Image */}
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 2, delay: 0.8 }}
        className="absolute bottom-0 right-0 w-1/2 h-1/2"
      >
        <div className="relative w-full h-full">
          <Image
            src="/images/pha 4.jpg"
            alt="Phase 4"
            fill
            className="object-cover blur-sm"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-tl from-black/80 to-transparent" />
        </div>
      </motion.div>

      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black/50" />
    </div>
  );
};

export default BackgroundImages; 