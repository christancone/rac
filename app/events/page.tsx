'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { events } from '../config/content';

export default function Events() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-12 text-center text-white"
        >
          Upcoming Events
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.article
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-900/50 text-blue-400 backdrop-blur-sm">
                    {event.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2 text-white">{event.title}</h2>
                <p className="text-gray-300 mb-4">{event.description}</p>
                
                <div className="space-y-2 text-sm text-gray-400">
                  <p><span className="font-medium text-white">Date:</span> {event.date}</p>
                  <p><span className="font-medium text-white">Time:</span> {event.time}</p>
                  <p><span className="font-medium text-white">Location:</span> {event.location}</p>
                  <p><span className="font-medium text-white">Attendees:</span> {event.details.attendees}</p>
                  <p><span className="font-medium text-white">Duration:</span> {event.details.duration}</p>
                  <p><span className="font-medium text-white">Registration:</span> {event.details.registration}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </main>
  );
} 