import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function AnnouncementBar() {
  // Marquee animation - scrolling text from right to left
  const marqueeVariants = {
    animate: {
      x: [0, -1000],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 20,
          ease: 'linear',
        },
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative w-full overflow-hidden bg-gradient-to-r from-blue-50 via-blue-50/90 to-blue-50 border-b border-blue-100/50"
    >
      {/* Animated Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Backdrop blur effect */}
        <div className="absolute inset-0 backdrop-blur-sm" />

        {/* Glowing animated circles - like homepage hero */}
        <div className="absolute top-1/2 -left-48 w-96 h-96 bg-primary/15 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute top-1/2 -right-48 w-96 h-96 bg-accent/15 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />

        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/20" />
      </div>

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 md:py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
          {/* Left Section - Animated Marquee */}
          <div className="flex-1 min-w-0 overflow-hidden">
            <motion.div
              variants={marqueeVariants}
              animate="animate"
              className="flex whitespace-nowrap gap-12"
            >
              {/* First set */}
              <div className="flex items-center gap-2 px-4">
                <motion.span
                  animate={{ rotate: [0, 15, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-xl md:text-2xl flex-shrink-0"
                >
                  🔥
                </motion.span>
                <span className="font-bold text-sm md:text-base text-text drop-shadow-sm">
                  Join Our Free Basic Class about Trading
                </span>
              </div>

              {/* Duplicate for seamless loop */}
              <div className="flex items-center gap-2 px-4">
                <motion.span
                  animate={{ rotate: [0, 15, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-xl md:text-2xl flex-shrink-0"
                >
                  🔥
                </motion.span>
                <span className="font-bold text-sm md:text-base text-text drop-shadow-sm">
                  Join Our Free Basic Class about Trading
                </span>
              </div>
            </motion.div>
          </div>

          {/* Center Section - Training Info (Hidden on mobile) */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0 px-4 py-2 bg-white/40 rounded-full backdrop-blur border border-white/50 shadow-sm">
            <motion.span
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-lg"
            >
              📅
            </motion.span>
            <div className="flex flex-col gap-0.5">
              <span className="text-xs font-bold text-text">Free 5 Days Live Training</span>
              <span className="text-xs text-subtext">🎥 Zoom / Google Meet</span>
            </div>
          </div>

          {/* Right Section - CTA Button */}
          <div className="flex-shrink-0">
            <Link to="/register">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(37, 99, 235, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="relative px-6 md:px-8 py-2.5 md:py-3 rounded-xl font-bold text-sm md:text-base text-white overflow-hidden group
                  bg-gradient-to-r from-primary to-accent hover:from-blue-700 hover:to-cyan-600
                  shadow-lg hover:shadow-2xl transition-all duration-300
                  border border-primary/50 hover:border-primary/70
                  flex items-center gap-2 whitespace-nowrap"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Button content */}
                <span className="relative">Register Free Now</span>
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="relative"
                >
                  <ArrowRight size={18} />
                </motion.span>
              </motion.button>
            </Link>
          </div>
        </div>

        {/* Mobile Training Info */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="lg:hidden flex items-center justify-center gap-2 mt-4 px-4 py-2 bg-white/40 rounded-lg backdrop-blur border border-white/50 mx-auto w-fit shadow-sm"
        >
          <motion.span
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-lg"
          >
            📅
          </motion.span>
          <div className="flex flex-col gap-0.5">
            <span className="text-xs font-bold text-text">Free 5 Days Live Training</span>
            <span className="text-xs text-subtext">🎥 Zoom / Google Meet</span>
          </div>
        </motion.div>
      </div>

      {/* Bottom glow line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
        style={{
          boxShadow: '0 0 15px rgba(37, 99, 235, 0.4)',
        }}
      />
    </motion.div>
  );
}
