import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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

  // Premium ticker tape content
  const tickerItems = [
    { icon: '🔥', text: 'Join Our Free Basic Class about Trading' },
    { icon: '📅', text: 'Free 5 Days Live Training' },
    { icon: '🎥', text: 'Conducted via Zoom / Google Meet' },
  ];

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

      {/* PREMIUM TICKER MARQUEE - Continuous Scrolling */}
      <div className="relative h-full flex items-center overflow-hidden">
        {/* Gradient fade effect - Left */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-blue-50 to-transparent z-20 pointer-events-none" />
        
        {/* Gradient fade effect - Right */}
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-blue-50 to-transparent z-20 pointer-events-none" />

        {/* Continuous Scrolling Marquee */}
        <motion.div
          className="flex items-center gap-12 whitespace-nowrap py-3"
          animate={{ x: [0, -2000] }}
          transition={{
            x: {
              duration: 30,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'linear',
            },
          }}
        >
          {/* Multiple sets of ticker items for seamless loop */}
          {[...Array(4)].map((_, setIndex) => (
            <div key={setIndex} className="flex items-center gap-12">
              {tickerItems.map((item, idx) => (
                <div
                  key={`${setIndex}-${idx}`}
                  className="flex items-center gap-2 px-6 flex-shrink-0 group"
                >
                  {/* Animated Icon */}
                  <motion.span
                    animate={{ rotate: [0, 10, -5, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: 'reverse',
                    }}
                    className="text-lg md:text-xl flex-shrink-0"
                  >
                    {item.icon}
                  </motion.span>

                  {/* Ticker Text */}
                  <span className="font-bold text-xs md:text-sm text-text drop-shadow-sm group-hover:text-primary transition-colors duration-300">
                    {item.text}
                  </span>

                  {/* Divider */}
                  {idx < tickerItems.length - 1 && (
                    <div className="w-1 h-4 bg-gradient-to-b from-primary/30 to-transparent rounded-full ml-6 flex-shrink-0" />
                  )}
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom glow line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent pointer-events-none"
        style={{
          boxShadow: '0 0 15px rgba(37, 99, 235, 0.4)',
        }}
      />

      {/* CTA Button - Fixed on right side (optional floating button) */}
      <div className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-30">
        <Link to="/register">
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(37, 99, 235, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            className="relative px-5 md:px-6 py-2 rounded-xl font-bold text-xs md:text-sm text-white overflow-hidden group
              bg-gradient-to-r from-primary to-accent hover:from-blue-700 hover:to-cyan-600
              shadow-lg hover:shadow-2xl transition-all duration-300
              border border-primary/50 hover:border-primary/70
              flex items-center gap-1.5 whitespace-nowrap"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Button content */}
            <span className="relative">Register</span>
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="relative hidden md:inline"
            >
              <ArrowRight size={16} />
            </motion.span>
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
}
