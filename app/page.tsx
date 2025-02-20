'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-poster overflow-hidden">
        <div className="absolute inset-0 bg-grain-pattern opacity-[0.15] mix-blend-overlay" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="container relative z-10 py-20"
        >
          {/* Institute Name */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mb-12"
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl py-6 px-8 shadow-xl inline-block">
              <h3 className="text-lg md:text-xl text-dark font-semibold mb-2">VEERMATA JIJABAI TECHNOLOGICAL INSTITUTE</h3>
              <h4 className="text-xl md:text-2xl text-secondary font-bold mb-4">DEPARTMENT OF TEXTILE ENGINEERING</h4>
              <p className="text-accent text-lg font-medium tracking-wide">Presents</p>
            </div>
          </motion.div>

          {/* Event Logo */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16 relative"
          >
            <motion.div
              initial={{ opacity: 0, scale: 1.2 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <h1 className="text-8xl md:text-[12rem] font-cooper text-white mb-4 relative z-10 drop-shadow-[0_0_30px_rgba(255,75,75,0.3)]">
                VASTRA
              </h1>
              <div className="absolute inset-0 flex items-center justify-center opacity-20">
                <span className="text-8xl md:text-[12rem] font-cooper text-dark blur-sm">VASTRA</span>
              </div>
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-secondary text-white px-8 py-3 rounded-full inline-block"
            >
              <p className="text-2xl md:text-3xl font-cooper">ON 12TH MARCH</p>
            </motion.div>
          </motion.div>

          {/* Event Features */}
          <div className="grid md:grid-cols-4 gap-6 mt-16">
            {events.map((event, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02, transition: { duration: 0.2 } }}
                className="bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-yellow-light/20"
              >
                <h3 className="text-xl font-cooper mb-3 text-secondary">{event.title}</h3>
                <p className="text-dark/70">{event.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-center mt-16"
          >
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: '#E63946' }}
              whileTap={{ scale: 0.95 }}
              className="bg-secondary text-white hover:bg-red-dark px-10 py-4 text-xl font-cooper rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              GET READY!
            </motion.button>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-16 text-center"
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl py-6 px-8 inline-block shadow-lg">
              <h4 className="text-dark font-cooper mb-4 text-xl">Secretaries</h4>
              <div className="flex flex-col md:flex-row justify-center md:space-x-8 space-y-2 md:space-y-0">
                <p className="text-secondary font-medium">Piyush Khismatrao: 8557730755</p>
                <p className="text-secondary font-medium">Virashri Kamane: 8356924200</p>
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex justify-center space-x-6 mt-8"
          >
            <a href="https://instagram.com/vastravjti" className="text-white hover:text-yellow-light transition-colors duration-200">
              <span className="sr-only">Instagram</span>
              <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="https://youtube.com/vastravjti" className="text-white hover:text-yellow-light transition-colors duration-200">
              <span className="sr-only">YouTube</span>
              <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
            <a href="https://linkedin.com/company/vastravjti" className="text-white hover:text-yellow-light transition-colors duration-200">
              <span className="sr-only">LinkedIn</span>
              <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}

const events = [
  {
    title: "TECH QUIZ",
    description: "Test your knowledge in textile technology and engineering."
  },
  {
    title: "DRAW YOUR VISION",
    description: "Showcase your creative textile design skills."
  },
  {
    title: "DRESS TO IMPRESS",
    description: "Fashion design and styling competition."
  },
  {
    title: "PAPER PRESENTATION",
    description: "Present your research and innovations in textiles."
  }
]; 