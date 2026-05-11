import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import clsx from 'clsx';

export default function AnnouncementBar() {
  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: (custom) => ({
      opacity: 1,
      transition: {
        delay: custom * 0.15,
        duration: 0.5,
      },
    }),
  };

  const pulseVariants = {
    initial: { scale: 1 },
    animate: {
      scale: 1.05,
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: 'reverse',
      },
    },
  };

  const buttonHover = {
    scale: 1.05,
    boxShadow: '0 10px 25px rgba(59, 130, 246, 0.4)',
  };

  return (
    <>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className={clsx(
          'relative w-full overflow-hidden',
          'bg-gradient-to-r from-blue-50 via-blue-50 to-white',
          'dark:from-slate-900 dark:via-slate-900 dark:to-slate-800'
        )}
      >
        {/* Trading Pattern Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Gradient overlay with trading theme */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `
                radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
                linear-gradient(45deg, transparent 30%, rgba(59, 130, 246, 0.05) 50%, transparent 70%)
              `,
            }}
          />

          {/* Animated chart line pattern */}
          <svg
            className="absolute w-full h-full opacity-5"
            preserveAspectRatio="none"
            viewBox="0 0 1200 100"
          >
            <polyline
              points="0,50 100,30 200,60 300,40 400,55 500,35 600,50 700,45 800,60 900,40 1000,55 1100,50 1200,45"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-blue-400"
            />
          </svg>

          {/* Candlestick glow effect */}
          <div
            className="absolute top-1/2 left-1/4 w-64 h-40 rounded-full blur-3xl opacity-20 pointer-events-none"
            style={{
              background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
            }}
          />
        </div>

        {/* Content Container */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8">
            {/* Left Section - Main Announcement */}
            <motion.div
              custom={0}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="flex items-center gap-3 flex-shrink-0"
            >
              <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-2xl md:text-3xl"
              >
                🔥
              </motion.span>
              <div className="flex flex-col">
                <p className="text-sm md:text-base font-bold text-gray-900 dark:text-white leading-tight">
                  Join Our Free Basic Class
                </p>
                <p className="text-xs md:text-sm text-gray-700 dark:text-gray-300 font-medium">
                  about Trading Fundamentals
                </p>
              </div>
            </motion.div>

            {/* Middle Section - Responsive Divider & Training Info */}
            <motion.div
              custom={1}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="hidden md:flex items-center gap-4 flex-shrink-0"
            >
              <div className="h-8 w-1 bg-gradient-to-b from-blue-300 to-purple-300 rounded-full opacity-50" />
              <div className="flex items-center gap-2">
                <motion.span
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-xl"
                >
                  📅
                </motion.span>
                <div className="flex flex-col">
                  <p className="text-sm font-bold text-gray-900 dark:text-white">
                    Free 5 Days Live Training
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    🎥 Zoom / Google Meet
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Mobile Training Info */}
            <motion.div
              custom={1}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="md:hidden flex flex-col items-center gap-2 text-center"
            >
              <p className="text-sm font-bold text-gray-900 dark:text-white">
                📅 Free 5 Days Live Training
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                🎥 Zoom / Google Meet
              </p>
            </motion.div>

            {/* Right Section - CTA Button */}
            <motion.div
              custom={2}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="flex-shrink-0"
            >
              <Link to="/register">
                <motion.button
                  whileHover={buttonHover}
                  whileTap={{ scale: 0.95 }}
                  className={clsx(
                    'relative px-6 md:px-8 py-2.5 md:py-3 rounded-lg font-semibold',
                    'text-white text-sm md:text-base',
                    'bg-gradient-to-r from-blue-600 to-purple-600',
                    'hover:from-blue-700 hover:to-purple-700',
                    'shadow-lg hover:shadow-xl',
                    'flex items-center gap-2',
                    'transition-all duration-300',
                    'border border-blue-500/50 hover:border-blue-400',
                    'overflow-hidden group'
                  )}
                >
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 group-hover:animate-pulse" />

                  {/* Button content */}
                  <span className="relative font-bold">Register Free Now</span>
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="relative"
                  >
                    <ArrowRight size={18} />
                  </motion.span>
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Bottom Glow Effect */}
        <div
          className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-30"
          style={{
            boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)',
          }}
        />
      </motion.div>

      {/* Divider line */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent" />
    </>
  );
}
