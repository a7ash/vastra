'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import BackgroundImages from './components/BackgroundImages';

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
      {/* Background Images */}
      <BackgroundImages />

      {/* Decorative Borders */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1.5, delay: 1 }}
        className="fixed inset-0 pointer-events-none z-10"
      >
        <div className="absolute inset-8 border border-white/20">
          <div className="absolute inset-0 p-1">
            <Image
              src="/images/borders.jpg"
              alt=""
              fill
              className="object-fill opacity-40 mix-blend-overlay"
              priority
            />
          </div>
        </div>
      </motion.div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Main Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/bora background.jpg"
            alt="Bora Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" /> {/* Overlay for better text readability */}
        </div>

        {/* Enhanced grain texture */}
        <div className="absolute inset-0 bg-grain-pattern opacity-[0.15] mix-blend-overlay" />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.1] mix-blend-overlay" />
        <div className="absolute inset-0 bg-noise-pattern opacity-[0.05] mix-blend-multiply" />
        <div className="absolute inset-0 bg-spray-gradient mix-blend-overlay opacity-30" />
        
        {/* Cyber sigilist elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-64 h-64 opacity-20">
            <svg viewBox="0 0 100 100" className="w-full h-full animate-spin-slow">
              <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-grey-light" />
              <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-grey-light" />
              <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-grey-light" />
              <line x1="10" y1="50" x2="90" y2="50" stroke="currentColor" strokeWidth="0.5" className="text-grey-light" />
              <line x1="50" y1="10" x2="50" y2="90" stroke="currentColor" strokeWidth="0.5" className="text-grey-light" />
            </svg>
          </div>
          <div className="absolute bottom-0 right-0 w-64 h-64 opacity-20">
            <svg viewBox="0 0 100 100" className="w-full h-full animate-spin-reverse-slow">
              <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-grey-light" />
              <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-grey-light" />
              <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-grey-light" />
              <line x1="5" y1="50" x2="95" y2="50" stroke="currentColor" strokeWidth="0.5" className="text-grey-light" />
              <line x1="50" y1="5" x2="50" y2="95" stroke="currentColor" strokeWidth="0.5" className="text-grey-light" />
              <line x1="15" y1="15" x2="85" y2="85" stroke="currentColor" strokeWidth="0.5" className="text-grey-light" />
              <line x1="85" y1="15" x2="15" y2="85" stroke="currentColor" strokeWidth="0.5" className="text-grey-light" />
            </svg>
          </div>
          <div className="absolute top-0 right-0 w-48 h-48 opacity-20">
            <svg viewBox="0 0 100 100" className="w-full h-full animate-spin-slower">
              <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-grey-light" />
              <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-grey-light" />
              <line x1="15" y1="50" x2="85" y2="50" stroke="currentColor" strokeWidth="0.5" className="text-grey-light" />
              <line x1="50" y1="15" x2="50" y2="85" stroke="currentColor" strokeWidth="0.5" className="text-grey-light" />
              <line x1="25" y1="25" x2="75" y2="75" stroke="currentColor" strokeWidth="0.5" className="text-grey-light" />
              <line x1="75" y1="25" x2="25" y2="75" stroke="currentColor" strokeWidth="0.5" className="text-grey-light" />
            </svg>
          </div>
          <div className="absolute bottom-0 left-0 w-56 h-56 opacity-20">
            <svg viewBox="0 0 100 100" className="w-full h-full animate-spin-reverse-slower">
              <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-grey-light" />
              <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-grey-light" />
              <line x1="10" y1="50" x2="90" y2="50" stroke="currentColor" strokeWidth="0.5" className="text-grey-light" />
              <line x1="50" y1="10" x2="50" y2="90" stroke="currentColor" strokeWidth="0.5" className="text-grey-light" />
              <line x1="20" y1="20" x2="80" y2="80" stroke="currentColor" strokeWidth="0.5" className="text-grey-light" />
              <line x1="80" y1="20" x2="20" y2="80" stroke="currentColor" strokeWidth="0.5" className="text-grey-light" />
            </svg>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="container relative z-10 py-20"
        >
          {/* Add flowing ribbons */}
          <div className="flowing-ribbon flowing-ribbon-left" />
          <div className="flowing-ribbon flowing-ribbon-right" />

          {/* Event Logo with enhanced mandala styling */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="text-center mb-24 relative mt-48"
          >
            <motion.div
              initial={{ opacity: 0, scale: 1.2 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative mb-8"
            >
              <div className="relative">
                {/* Arc Text */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[600px] h-[600px] absolute">
                    <svg viewBox="0 0 200 200" className="w-full h-full">
                      <defs>
                        <path
                          id="curve1"
                          d="M 10 100 A 90 90 0 1 1 190 100 A 90 90 0 1 1 10 100"
                          fill="none"
                          transform="rotate(-90, 100, 100)"
                        />
                        <path
                          id="curve2"
                          d="M 25 100 A 75 75 0 1 1 175 100 A 75 75 0 1 1 25 100"
                          fill="none"
                          transform="rotate(-90, 100, 100)"
                        />
                      </defs>
                      <text className="fill-white text-[0.9rem] font-oldEnglish tracking-[0.1em]">
                        <textPath href="#curve1" textAnchor="middle" startOffset="50%">
                          VJTI, Department of Textile Engineers
                        </textPath>
                      </text>
                      <text className="fill-white text-[0.5rem] font-oldEnglish tracking-[0.05em]">
                        <textPath href="#curve2" textAnchor="middle" startOffset="50%">
                          presents
                        </textPath>
                      </text>
                    </svg>
                  </div>
                </div>

                <Image
                  src="/images/Vastra logo.png"
                  alt="VASTRA Logo"
                  width={300}
                  height={300}
                  className="mx-auto relative z-10"
                  priority
                />
                {/* Enhanced Charkha design */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[500px] h-[500px] absolute">
                    <svg viewBox="0 0 200 200" className="w-full h-full animate-spin-slow">
                      <g className="text-white/70">
                        {/* Main wheel */}
                        <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="3" fill="none" />
                        <circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="3" fill="none" />
                        {/* Spokes */}
                        {[...Array(24)].map((_, i) => (
                          <g key={i} transform={`rotate(${i * 15} 100 100)`}>
                            <line x1="100" y1="20" x2="100" y2="180" stroke="currentColor" strokeWidth="2" />
                          </g>
                        ))}
                        {/* Center hub */}
                        <circle cx="100" cy="100" r="10" fill="currentColor" />
                      </g>
                    </svg>
                  </div>
                  <div className="w-[450px] h-[450px] absolute">
                    <svg viewBox="0 0 200 200" className="w-full h-full animate-spin-reverse-slow">
                      <g className="text-white/80">
                        {/* Secondary wheel */}
                        <circle cx="100" cy="100" r="70" stroke="currentColor" strokeWidth="3" fill="none" />
                        {/* Cross spokes */}
                        {[...Array(12)].map((_, i) => (
                          <g key={i} transform={`rotate(${i * 30} 100 100)`}>
                            <line x1="40" y1="100" x2="160" y2="100" stroke="currentColor" strokeWidth="2" />
                          </g>
                        ))}
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 1.2 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative mt-16"
            >
              <h1 className="font-domine text-8xl md:text-[12rem] text-white mb-8 relative z-10 drop-shadow-[0_8px_16px_rgba(115,57,69,0.8)]">
                VASTRA
              </h1>
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-[#AC426E] text-white px-8 py-3 rounded-xl inline-block shadow-xl shadow-[#673973]/20"
            >
              <p className="text-2xl md:text-3xl font-domine tracking-wider">ON 12TH MARCH</p>
            </motion.div>
          </motion.div>

          {/* Event Features */}
          <div className="grid md:grid-cols-4 gap-6 mt-24">
            {events.map((event, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02, transition: { duration: 0.2 } }}
                className="bg-grey-light/95 backdrop-blur-sm p-6 rounded-xl shadow-[8px_8px_0px_0px_rgba(109,42,75,1)] hover:shadow-[12px_12px_0px_0px_rgba(109,42,75,1)] transition-all duration-500"
              >
                <h3 className="text-xl font-domine mb-3 text-grey-text tracking-wide">{event.title}</h3>
                <p className="text-grey-text/90 font-domine">{event.description}</p>
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
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 0 20px rgba(172, 66, 110, 0.4)'
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#AC426E] text-white px-10 py-4 text-xl font-domine tracking-wider rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#AC426E]/0 via-white/20 to-[#AC426E]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
              GET READY!
            </motion.button>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-24 text-center"
          >
            <div className="bg-grey-light/95 backdrop-blur-sm rounded-xl py-6 px-8 inline-block shadow-[8px_8px_0px_0px_rgba(109,42,75,1)] transition-all duration-500">
              <h4 className="text-grey-text font-domine mb-4 text-xl">Secretaries</h4>
              <div className="flex flex-col md:flex-row justify-center md:space-x-8 space-y-2 md:space-y-0">
                <p className="text-grey-text/90 font-medium">Piyush Khismatrao: 8557730755</p>
                <p className="text-grey-text/90 font-medium">Virashri Kamane: 8356924200</p>
              </div>
            </div>
            <p className="text-white text-base mt-4 font-domine tracking-wide opacity-100">For further info, check us out on - </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex justify-center space-x-6 mt-4"
          >
            <a href="https://www.instagram.com/vastravjti?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-light transition-colors duration-200">
              <span className="sr-only">Instagram</span>
              <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="https://www.youtube.com/@VASTRAVJTI" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-light transition-colors duration-200">
              <span className="sr-only">YouTube</span>
              <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/vastra-vjti-0019812b1/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-light transition-colors duration-200">
              <span className="sr-only">LinkedIn</span>
              <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </motion.div>

          {/* Address */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="text-center mt-12 text-white/80"
          >
            <p className="font-domine text-sm leading-relaxed">
              Veermata Jijabai Technological Institute<br />
              H R Mahajani Rd, Matunga East, Mumbai, Maharashtra 400019
            </p>
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