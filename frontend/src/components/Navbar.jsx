import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, TrendingUp } from 'lucide-react';
import clsx from 'clsx';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Courses', path: '/courses' },
  { name: 'Free Trading', path: '/free-trading' },
  { name: 'Testimonials', path: '/testimonials' },
  { name: 'About Us', path: '/about' },
  { name: 'Contact Us', path: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={clsx(
        'fixed top-[60px] left-0 right-0 z-50 transition-all duration-300 w-full',
        scrolled 
          ? 'bg-white/60 backdrop-blur-xl border-b border-white/20 shadow-[0_8px_32px_rgba(15,23,42,0.08)]' 
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-2 group">
            <motion.div 
              whileHover={{ rotate: 12, scale: 1.1 }}
              className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-500 via-blue-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/30"
            >
              <TrendingUp className="text-white w-6 h-6" />
            </motion.div>
            <span className="text-lg font-bold tracking-tight bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent hidden sm:inline">
              Assets Legacy <span className="text-blue-600">FX Academy</span>
            </span>
            <span className="text-lg font-bold tracking-tight text-blue-600 sm:hidden">
              ALXA
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={clsx(
                  'text-sm font-medium transition-all duration-300 relative group',
                  location.pathname === link.path ? 'text-blue-600 font-semibold' : 'text-slate-600 hover:text-blue-600'
                )}
              >
                {link.name}
                <span className={clsx(
                  'absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-300',
                  location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                )} />
              </Link>
            ))}
            <Link
              to="/register"
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/40 transition-all duration-300 transform hover:scale-105"
            >
              Register Now
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-600 hover:text-blue-600 transition-colors p-2"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/80 backdrop-blur-xl border-t border-white/20 shadow-lg overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1 max-w-7xl mx-auto">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={clsx(
                      'block px-4 py-3 rounded-lg font-medium transition-all duration-300',
                      location.pathname === link.path 
                        ? 'bg-blue-50 text-blue-600 font-semibold' 
                        : 'text-slate-600 hover:bg-slate-50 hover:text-blue-600'
                    )}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="pt-4 mt-4 border-t border-white/20"
              >
                <Link
                  to="/register"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full text-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold shadow-lg hover:shadow-blue-500/40 transition-all duration-300"
                >
                  Register Now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
