'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import StatisticsCard from './components/StatisticsCard';
import { heroContent, statistics, aboutContent, projects, events } from './config/content';
import { 
  ChartBarIcon, 
  UserGroupIcon, 
  CalendarIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';
import { useRef } from 'react';
import { useScroll, useTransform } from 'framer-motion';

export default function Home() {
  const featuredProjects = projects.slice(0, 3);
  const featuredEvents = events.slice(0, 3);
  const heroRef = useRef(null);
  const { scrollY } = useScroll();
  // Animate scale, y, and opacity of the hero title as user scrolls
  const scale = useTransform(scrollY, [0, 200], [1, 0.6]);
  const y = useTransform(scrollY, [0, 200], [0, -60]);
  const opacity = useTransform(scrollY, [0, 120], [1, 0]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroContent.backgroundImage}
            alt="Hero Background"
            fill
            className="object-cover opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 to-gray-800/80" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 flex flex-col items-center"
        >
          <motion.div
            style={{ scale, y, opacity }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl px-8 py-8 shadow-xl max-w-2xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg">
              {heroContent.title}
            </h1>
            <p className="text-xl sm:text-2xl text-gray-200 max-w-3xl mx-auto">
              {heroContent.subtitle}
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Statistics Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12 text-white"
          >
            Our Impact
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StatisticsCard
              title="Total Projects"
              value={statistics.totalProjects}
              icon={<ChartBarIcon className="h-6 w-6 text-blue-400" />}
              color="hover:bg-blue-500/10"
            />
            <StatisticsCard
              title="Active Members"
              value={statistics.activeMembers}
              icon={<UserGroupIcon className="h-6 w-6 text-purple-400" />}
              color="hover:bg-purple-500/10"
            />
            <StatisticsCard
              title="Planned Projects"
              value={statistics.plannedProjects}
              icon={<CalendarIcon className="h-6 w-6 text-pink-400" />}
              color="hover:bg-pink-500/10"
            />
          </div>
        </div>
      </motion.section>

      {/* Featured Projects Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        viewport={{ once: true }}
        className="py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex justify-between items-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
            <Link
              href="/projects"
              className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
            >
              View All Projects
              <ArrowRightIcon className="h-5 w-5" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="relative h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-900/50 text-blue-400 backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="text-sm text-gray-400">
                    <p><span className="font-medium text-white">Impact:</span> {project.details.impact}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Featured Events Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
        className="py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex justify-between items-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white">Upcoming Events</h2>
            <Link
              href="/events"
              className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
            >
              View All Events
              <ArrowRightIcon className="h-5 w-5" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredEvents.map((event, index) => (
              <motion.article
                key={event.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
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
                  <h3 className="text-xl font-bold mb-2 text-white">{event.title}</h3>
                  <p className="text-gray-300 mb-4">{event.description}</p>
                  <div className="text-sm text-gray-400">
                    <p><span className="font-medium text-white">Date:</span> {event.date}</p>
                    <p><span className="font-medium text-white">Location:</span> {event.location}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        viewport={{ once: true }}
        className="py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/10"
          >
            <h2 className="text-3xl font-bold mb-6 text-white">{aboutContent.title}</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              {aboutContent.description}
            </p>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}
