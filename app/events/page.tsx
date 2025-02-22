'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const events = [
  {
    title: "TECH QUIZ",
    description: "A technical textile challenge for teams of two, featuring themed quizzes, a surprise round, and rapid-fire questions testing up-to-date knowledge of the textile industry. From fiber science to fashion technology, showcase your expertise across various domains of textile engineering. Get ready for an intellectually stimulating experience that will challenge your understanding and keep you on the edge of your seat!",
    contacts: [
      "Namita B.: 9321520686"
    ]
  },
  {
    title: "DRAW YOUR VISION",
    description: "An individual competition where participants transform a plain white T-shirt into a wearable masterpiece using paint by unleashing their vision. Let your creativity flow in this unique textile design competition! Whether you're passionate about traditional patterns or contemporary fashion, this is your chance to showcase your artistic vision. Join us in this exciting journey where art meets engineering!",
    contacts: [
      "Aishwarya G.: 9552235788"
    ]
  },
  {
    title: "DRESS TO IMPRESS",
    description: "Teams of two collaborate to design, style, and present a themed outfit. One member models the creation while the other assists, blending artistic innovation with sophistication. Step into the spotlight with your unique style! Our fashion design competition challenges you to create stunning outfits that combine creativity with technical expertise. From concept to execution, show us how you can transform fabric into fashion.",
    contacts: [
      "Uday K.: 8329961259"
    ]
  },
  {
    title: "PAPER PRESENTATION",
    description: "Teams deliver structured presentations (via PPT) on assigned topics, focusing on textile industry innovations, applications, or future advancements. Share your research and groundbreaking ideas with a panel of industry experts. From sustainable materials to smart textiles, this is your platform to contribute to the future of textile engineering through academic excellence!",
    contacts: [
      "Lokesh G.: 9619936431"
    ]
  }
];

export default function Events() {
  return (
    <div className="min-h-screen relative">
      {/* Background Images */}
      <div className="absolute inset-0">
        <Image
          src="/images/events bg.jpg"
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
          className="container mx-auto max-w-3xl"
        >
          <h1 className="text-6xl font-domine text-center mb-16 text-white drop-shadow-[0_8px_16px_rgba(115,57,69,0.8)]">Events</h1>
          
          <div className="space-y-8">
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-grey-light/95 backdrop-blur-sm p-8 rounded-xl shadow-[8px_8px_0px_0px_rgba(109,42,75,1)] hover:shadow-[12px_12px_0px_0px_rgba(109,42,75,1)] transition-all duration-500"
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
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
} 