'use client';

import { motion } from 'framer-motion';
import { announcements } from '../config/content';

export default function Announcements() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-12 text-center text-white"
        >
          Announcements
        </motion.h1>

        <div className="space-y-6">
          {announcements.map((announcement, index) => (
            <motion.div
              key={announcement.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <h2 className="text-xl font-bold text-white">{announcement.title}</h2>
                {announcement.important && (
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-900/50 text-blue-400 backdrop-blur-sm">
                    Important
                  </span>
                )}
              </div>
              <p className="text-gray-300 mb-4">{announcement.description}</p>
              <p className="text-sm text-gray-400">{announcement.date}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
} 