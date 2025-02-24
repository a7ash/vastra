'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const events = [
  {
    title: "TECH QUIZ",
    description: "A technical textile challenge for teams of two, featuring themed quizzes, a surprise round, and rapid-fire questions testing up-to-date knowledge of the textile industry. From fiber science to fashion technology, showcase your expertise across various domains of textile engineering. Get ready for an intellectually stimulating experience that will challenge your understanding and keep you on the edge of your seat!",
    contacts: [
      "Namita B.: 9321520686"
    ],
    image: "/images/tech quiz.jpg"
  },
  {
    title: "DRAW YOUR VISION",
    description: "An individual competition where participants transform a plain white T-shirt into a wearable masterpiece using paint by unleashing their vision. Let your creativity flow in this unique textile design competition! Whether you're passionate about traditional patterns or contemporary fashion, this is your chance to showcase your artistic vision. Join us in this exciting journey where art meets engineering!",
    contacts: [
      "Aishwarya G.: 9552235788"
    ],
    image: "/images/draw your vision.jpg"
  },
  {
    title: "DRESS TO IMPRESS",
    description: "Teams of two collaborate to design, style, and present a themed outfit. One member models the creation while the other assists, blending artistic innovation with sophistication. Step into the spotlight with your unique style! Our fashion design competition challenges you to create stunning outfits that combine creativity with technical expertise. From concept to execution, show us how you can transform fabric into fashion.",
    contacts: [
      "Uday K.: 8329961259"
    ],
    image: "/images/dress to impress.jpg"
  },
  {
    title: "PAPER PRESENTATION",
    description: "Teams deliver structured presentations (via PPT) on assigned topics, focusing on textile industry innovations, applications, or future advancements. Share your research and groundbreaking ideas with a panel of industry experts. From sustainable materials to smart textiles, this is your platform to contribute to the future of textile engineering through academic excellence!",
    contacts: [
      "Lokesh G.: 9619936431"
    ],
    image: "/images/paper presentation.jpg"
  }
];

export default function Events() {
  return (
    <div className="min-h-screen relative">
      {/* Background Images */}
      <div className="absolute inset-0">
        <Image
          src="/images/eventsnew.jpg"
          alt="Events Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0">
          <Image
            src="/images/bora background.jpg"
            alt="Bora Background"
            fill
            className="object-cover opacity-60 mix-blend-overlay"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/40" /> {/* Overlay for better text readability */}
      </div>

      {/* Content */}
      <div className="relative pt-32 px-4 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto max-w-6xl"
        >
          <h1 className="text-6xl font-domine text-center mb-16 text-white drop-shadow-[0_8px_16px_rgba(255,255,255,0.8)]">Events</h1>
          
          <div className="space-y-16">
            {events.map((event, index) => (
              <div key={index} className="flex items-center gap-8">
                {/* Image on the left for odd indices (0, 2) */}
                {index % 2 === 0 && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="w-1/3 relative rounded-xl overflow-hidden shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] transition-all duration-500"
                  >
                    <div className="relative" style={{ paddingTop: '75%' }}> {/* 4:3 aspect ratio container */}
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </motion.div>
                )}

                {/* Text Box */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="flex-1 bg-grey-light/95 backdrop-blur-sm p-8 rounded-xl shadow-[8px_8px_0px_0px_rgba(172,66,110,1)] hover:shadow-[12px_12px_0px_0px_rgba(172,66,110,1)] transition-all duration-500"
                >
                  <h3 className="text-2xl font-domine mb-4 text-grey-text tracking-wide">{event.title}</h3>
                  <p className="text-lg text-grey-text/90 font-domine mb-6">{event.description}</p>
                  <div className="border-t border-grey-text/20 pt-4">
                    <h4 className="text-lg font-domine mb-2 text-grey-text">Contact:</h4>
                    <div className="flex flex-col space-y-1">
                      {event.contacts.map((contact, idx) => (
                        <p key={idx} className="text-grey-text/90 font-domine">{contact}</p>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Image on the right for even indices (1, 3) */}
                {index % 2 === 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="w-1/3 relative rounded-xl overflow-hidden shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] transition-all duration-500"
                  >
                    <div className="relative" style={{ paddingTop: '75%' }}> {/* 4:3 aspect ratio container */}
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
} 