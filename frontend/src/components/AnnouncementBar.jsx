import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function AnnouncementBar() {
  // Marquee animation - continuous scrolling from right to left
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
      className="fixed top-0 left-0 right-0 h-[60px] w-full z-40 overflow-hidden bg-gradient-to-r from-blue-50 via-blue-50/90 to-blue-50 border-b border-blue-100/50"
    >
      {/* Background Effects - Premium Trading Theme */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Backdrop blur */}
        <div className="absolute inset-0 backdrop-blur-sm" />

        {/* Animated glowing circles (like homepage hero) */}
        <div className="absolute top-1/2 -left-48 w-96 h-96 bg-primary/15 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute top-1/2 -right-48 w-96 h-96 bg-accent/15 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />

        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/20" />
      </div>

      {/* Content Container */}
      <div className="relative h-full flex items-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4 md:gap-6">
          {/* LEFT: Animated Marquee Text */}
          <div className="flex-1 min-w-0 overflow-hidden">
            <motion.div
              variants={marqueeVariants}
              animate="animate"
              className="flex whitespace-nowrap gap-12"
            >
              {/* First set of scrolling text */}
              <div className="flex items-center gap-2 px-2">
                <motion.span
                  animate={{ rotate: [0, 15, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-xl flex-shrink-0"
                >
                  🔥
                </motion.span>
                <span className="font-bold text-sm text-text drop-shadow-sm">
                  Join Our Free Basic Class about Trading
                </span>
              </div>

              {/* Duplicate for seamless infinite loop */}
              <div className="flex items-center gap-2 px-2">
                <motion.span
                  animate={{ rotate: [0, 15, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-xl flex-shrink-0"
                >
                  🔥
                </motion.span>
                <span className="font-bold text-sm text-text drop-shadow-sm">
                  Join Our Free Basic Class about Trading
                </span>
              </div>
            </motion.div>
          </div>

          {/* CENTER: Training Info (Desktop/XL only) */}
          <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 bg-white/40 rounded-full backdrop-blur border border-white/50 shadow-sm flex-shrink-0">
            <motion.span
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-lg"
            >
              📅
            </motion.span>
            <div className="flex flex-col gap-0">
              <span className="text-xs font-bold text-text leading-tight">Free 5 Days Live Training</span>
              <span className="text-xs text-subtext leading-tight">🎥 Zoom / Google Meet</span>
            </div>
          </div>

          {/* RIGHT: CTA Button */}
          <div className="flex-shrink-0">
            <Link to="/register">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(37, 99, 235, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="relative px-5 md:px-7 py-2 rounded-xl font-bold text-xs md:text-sm text-white overflow-hidden group
                  bg-gradient-to-r from-primary to-accent hover:from-blue-700 hover:to-cyan-600
                  shadow-lg hover:shadow-2xl transition-all duration-300
                  border border-primary/50 hover:border-primary/70
                  flex items-center gap-1.5 whitespace-nowrap"
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
                  <ArrowRight size={16} />
                </motion.span>
              </motion.button>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom glow line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent pointer-events-none"
        style={{
          boxShadow: '0 0 15px rgba(37, 99, 235, 0.4)',
        }}
      />
    </motion.div>
  );
}
