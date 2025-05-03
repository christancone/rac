'use client';

import { motion } from 'framer-motion';

interface StatisticsCardProps {
  title: string;
  value: number;
  icon: React.ReactNode;
  color: string;
}

const StatisticsCard = ({ title, value, icon, color }: StatisticsCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      className={`bg-white/5 backdrop-blur-lg rounded-xl shadow-lg p-6 border border-white/10 hover:border-white/20 transition-all duration-300 ${color}`}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-400">{title}</p>
          <p className="text-3xl font-bold mt-2 text-white">{value}</p>
        </div>
        <div className="p-3 rounded-full bg-white/10 backdrop-blur-sm">
          {icon}
        </div>
      </div>
    </motion.div>
  );
};

export default StatisticsCard; 