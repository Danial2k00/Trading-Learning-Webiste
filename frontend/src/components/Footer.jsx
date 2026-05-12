import { Link } from 'react-router-dom';
import { TrendingUp, Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-secondary via-secondary to-primary/5 border-t border-black/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-primary to-accent flex items-center justify-center shadow-sm">
                <TrendingUp className="text-white w-5 h-5" />
              </div>
              <span className="text-lg font-bold text-text">
                Assets Legacy <span className="text-primary">FX</span>
              </span>
            </Link>
            <p className="text-subtext text-sm leading-relaxed">
              Premium trading education platform designed to transform beginners into consistent, profitable professionals through real-world price action and institutional strategies.
            </p>

          </div>

          <div>
            <h3 className="text-text font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-subtext hover:text-primary transition-colors text-sm">Home</Link></li>
              <li><Link to="/courses" className="text-subtext hover:text-primary transition-colors text-sm">Courses</Link></li>
              <li><Link to="/free-trading" className="text-subtext hover:text-primary transition-colors text-sm">Free Trading</Link></li>
              <li><Link to="/testimonials" className="text-subtext hover:text-primary transition-colors text-sm">Testimonials</Link></li>
              <li><Link to="/about" className="text-subtext hover:text-primary transition-colors text-sm">About Us</Link></li>
              <li><Link to="/contact" className="text-subtext hover:text-primary transition-colors text-sm">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-text font-semibold mb-6">Legal</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-subtext hover:text-primary transition-colors text-sm">Terms & Conditions</a></li>
              <li><a href="#" className="text-subtext hover:text-primary transition-colors text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-subtext hover:text-primary transition-colors text-sm">Refund Policy</a></li>
              <li><a href="#" className="text-subtext hover:text-primary transition-colors text-sm">Disclaimer</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-text font-semibold mb-6">Dubai Office</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="w-5 h-5 text-primary shrink-0 flex-shrink-0 mt-0.5" />
                <div className="text-subtext">
                  Office No 1206<br />
                  Centurion Star Tower<br />
                  Port Saeed - Deira<br />
                  Dubai - UAE
                </div>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:+971562976323" className="text-subtext hover:text-primary transition-colors">+971 56 297 6323</a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Clock className="w-5 h-5 text-primary shrink-0" />
                <span className="text-subtext">Sat - Thu: 9AM - 6PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-black/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-subtext text-sm">
            © {new Date().getFullYear()} Assets Legacy FX Academy. All rights reserved.
          </p>
          <p className="text-gray-400 text-xs text-center md:text-right max-w-xl">
            Trading in financial markets involves substantial risk of loss and is not suitable for every investor. Past performance does not guarantee future results. Always practice proper risk management.
          </p>
        </div>
      </div>
    </footer>
  );
}
