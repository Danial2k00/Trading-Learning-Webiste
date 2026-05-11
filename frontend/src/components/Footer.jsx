import { Link } from 'react-router-dom';
import { TrendingUp, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-secondary border-t border-black/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center shadow-sm">
                <TrendingUp className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-bold text-text">
                Trade<span className="text-primary">Pro</span>
              </span>
            </Link>
            <p className="text-subtext text-sm leading-relaxed">
              Premium trading education platform designed to transform beginners into consistent, profitable professionals through real-world price action and options strategies.
            </p>

          </div>

          <div>
            <h3 className="text-text font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/courses" className="text-subtext hover:text-primary transition-colors text-sm">Our Courses</Link></li>
              <li><Link to="/free-trading" className="text-subtext hover:text-primary transition-colors text-sm">Free Education</Link></li>
              <li><Link to="/testimonials" className="text-subtext hover:text-primary transition-colors text-sm">Success Stories</Link></li>
              <li><Link to="/about" className="text-subtext hover:text-primary transition-colors text-sm">About Mentor</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-text font-semibold mb-6">Legal</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-subtext hover:text-primary transition-colors text-sm">Terms & Conditions</a></li>
              <li><a href="#" className="text-subtext hover:text-primary transition-colors text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-subtext hover:text-primary transition-colors text-sm">Refund Policy</a></li>
              <li><a href="#" className="text-subtext hover:text-primary transition-colors text-sm">Disclaimer</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-text font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span className="text-subtext">123 Financial District, Wall Street, NY 10005</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span className="text-subtext">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span className="text-subtext">support@tradepro.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-black/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-subtext text-sm">
            © {new Date().getFullYear()} TradePro Education. All rights reserved.
          </p>
          <p className="text-gray-400 text-xs text-center md:text-right max-w-xl">
            Trading in financial markets involves substantial risk of loss and is not suitable for every investor. The valuation of financial products may fluctuate, and, as a result, clients may lose more than their original investment.
          </p>
        </div>
      </div>
    </footer>
  );
}
