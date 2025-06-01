import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaMedal, FaCertificate } from 'react-icons/fa';

const achievements = [
  {
    id: 1,
    title: "Best Developer Award",
    description: "Received for outstanding contributions to open-source projects in 2024.",
    icon: <FaTrophy className="text-yellow-400 text-4xl" />,
  },
  {
    id: 2,
    title: "Hackathon Champion",
    description: "Won 1st place in the Global CodeFest 2023 with an innovative app.",
    icon: <FaMedal className="text-blue-400 text-4xl" />,
  },
  {
    id: 3,
    title: "Certified Expert",
    description: "Earned Advanced React Certification from a leading tech institute.",
    icon: <FaCertificate className="text-green-400 text-4xl" />,
  },
];

const AchievementsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotate: -5 },
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
      transition: {
        type: "spring",
        stiffness: 200,
      },
    },
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 to-indigo-900">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center text-white mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Achievements
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {achievements.map((achievement) => (
            <motion.div
              key={achievement.id}
              className="bg-white/10 backdrop-blur-lg rounded-lg p-6 text-white flex flex-col items-center text-center"
              variants={cardVariants}
              whileHover="hover"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
              >
                {achievement.icon}
              </motion.div>
              <h3 className="text-xl font-semibold mt-4">{achievement.title}</h3>
              <p className="mt-2 text-gray-300">{achievement.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;