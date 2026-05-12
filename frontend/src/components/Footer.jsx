import { Link } from 'react-router-dom';
import { TrendingUp, Mail, Phone, MapPin, Clock, Facebook, Linkedin, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-transparent via-white/40 to-white/60 backdrop-blur-xl border-t border-white/20">
      {/* Decorative blur circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform">
                <TrendingUp className="text-white w-6 h-6" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Assets Legacy <span className="text-blue-600">FX</span>
              </span>
            </Link>
            <p className="text-slate-600 text-sm leading-relaxed">
              Premium trading education platform designed to transform beginners into consistent, profitable professionals through real-world price action and institutional strategies.
            </p>
            <div className="flex gap-3 pt-2">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center text-blue-600 hover:bg-gradient-to-br hover:from-blue-500/40 hover:to-cyan-500/40 transition-all border border-blue-500/20"
                  title={label}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-text font-semibold mb-6 text-lg">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'Courses', path: '/courses' },
                { name: 'Free Trading', path: '/free-trading' },
                { name: 'Testimonials', path: '/testimonials' },
                { name: 'About Us', path: '/about' },
                { name: 'Contact Us', path: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-slate-600 hover:text-blue-600 transition-colors text-sm font-medium group flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-text font-semibold mb-6 text-lg">Legal</h3>
            <ul className="space-y-3">
              {[
                'Terms & Conditions',
                'Privacy Policy',
                'Refund Policy',
                'Disclaimer',
              ].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-slate-600 hover:text-blue-600 transition-colors text-sm font-medium group flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Dubai Office */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-text font-semibold mb-6 text-lg">Dubai Office</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-600 shrink-0 flex-shrink-0 mt-0.5" />
                <div className="text-slate-600 text-sm leading-relaxed">
                  Office No 1206<br />
                  Centurion Star Tower<br />
                  Port Saeed - Deira<br />
                  Dubai - UAE
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-600 shrink-0" />
                <a href="tel:+971562976323" className="text-slate-600 hover:text-blue-600 transition-colors text-sm font-medium">
                  +971 56 297 6323
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-blue-600 shrink-0" />
                <span className="text-slate-600 text-sm font-medium">Sat-Thu: 9AM-6PM</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-600 shrink-0" />
                <a href="mailto:support@assetslegacyfx.com" className="text-slate-600 hover:text-blue-600 transition-colors text-sm font-medium">
                  support@assetslegacyfx.com
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-white/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-slate-600 text-sm font-medium">
            © {currentYear} Assets Legacy FX Academy. All rights reserved.
          </p>
          <p className="text-slate-500 text-xs text-center md:text-right max-w-xl leading-relaxed">
            Trading in financial markets involves substantial risk of loss and is not suitable for every investor. Past performance does not guarantee future results. Always practice proper risk management.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
