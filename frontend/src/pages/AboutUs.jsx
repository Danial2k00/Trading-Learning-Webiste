import { motion } from 'framer-motion';
import { Target, Eye, TrendingUp } from 'lucide-react';

export default function AboutUs() {
  return (
    <div className="w-full pt-10 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Mentor Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="relative">
            <div className="absolute inset-0 bg-primary/10 blur-[100px] rounded-full" />
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Head Mentor" 
              className="relative z-10 rounded-3xl border border-black/5 shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute bottom-6 right-6 bg-card p-4 rounded-xl border border-black/5 shadow-lg z-20">
              <div className="font-bold text-xl text-text">8+ Years</div>
              <div className="text-primary text-sm font-medium">Trading Experience</div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
            <h1 className="text-4xl md:text-5xl font-bold text-text mb-6">
              Meet The <span className="text-primary">Mentor</span>
            </h1>
            <p className="text-subtext text-lg leading-relaxed mb-6">
              Hi, I'm the founder of TradePro. I started my trading journey with a blown account and no direction. It took me years of trial and error to decode how institutions actually move the market.
            </p>
            <p className="text-subtext text-lg leading-relaxed mb-8">
              My goal is to cut down your learning curve. I teach exactly what I trade. No indicator setups, no complex algorithms. Just pure price action, volume analysis, and solid risk management.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-card shadow-sm p-4 rounded-xl border border-black/5">
                <div className="text-2xl font-bold text-primary mb-1">SEBI</div>
                <div className="text-subtext text-sm">Registered Research Analyst</div>
              </div>
              <div className="bg-card shadow-sm p-4 rounded-xl border border-black/5">
                <div className="text-2xl font-bold text-primary mb-1">CMT</div>
                <div className="text-subtext text-sm">Chartered Market Technician</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card p-10 rounded-3xl border border-black/5 shadow-md"
          >
            <Eye className="w-12 h-12 text-primary mb-6" />
            <h2 className="text-2xl font-bold text-text mb-4">Our Vision</h2>
            <p className="text-subtext leading-relaxed">
              To build a community of independent traders who don't rely on tips or signal groups, but trust their own analysis to generate consistent wealth from the stock market.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-card p-10 rounded-3xl border border-black/5 shadow-md"
          >
            <Target className="w-12 h-12 text-primary mb-6" />
            <h2 className="text-2xl font-bold text-text mb-4">Our Mission</h2>
            <p className="text-subtext leading-relaxed">
              To provide high-quality, practical, and institutional-level trading education at an affordable price, ensuring that every retail trader has the tools to succeed.
            </p>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-text mb-12">Our Journey</h2>
          <div className="relative border-l-2 border-primary/20 md:mx-auto md:w-max px-6 space-y-12 text-left">
            <div className="relative">
              <div className="absolute -left-[35px] w-4 h-4 rounded-full bg-primary mt-1.5" />
              <h3 className="text-xl font-bold text-text">2018</h3>
              <p className="text-subtext">Started the trading journey. Learned through immense losses and struggles.</p>
            </div>
            <div className="relative">
              <div className="absolute -left-[35px] w-4 h-4 rounded-full bg-primary mt-1.5" />
              <h3 className="text-xl font-bold text-text">2020</h3>
              <p className="text-subtext">Achieved consistent profitability. Started mentoring close friends.</p>
            </div>
            <div className="relative">
              <div className="absolute -left-[35px] w-4 h-4 rounded-full bg-primary mt-1.5" />
              <h3 className="text-xl font-bold text-text">2023</h3>
              <p className="text-subtext">Officially launched TradePro. Crossed 5,000+ active students.</p>
            </div>
            <div className="relative">
              <div className="absolute -left-[35px] w-4 h-4 rounded-full bg-primary shadow-[0_0_10px_#2563EB] mt-1.5 ring-4 ring-primary/20" />
              <h3 className="text-xl font-bold text-primary">Today</h3>
              <p className="text-subtext font-medium">Building India's most premium trading community.</p>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
