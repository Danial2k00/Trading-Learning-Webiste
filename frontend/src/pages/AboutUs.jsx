import { motion } from 'framer-motion';
import { Target, Eye, TrendingUp } from 'lucide-react';

export default function AboutUs() {
  return (
    <div className="w-full pt-10 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Mentor Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.02 }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/30 to-cyan-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all opacity-60 group-hover:opacity-100" />
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Head Mentor" 
              className="relative z-10 rounded-3xl border border-white/30 shadow-2xl shadow-blue-500/20 grayscale hover:grayscale-0 transition-all duration-500 object-cover"
            />
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="absolute bottom-6 right-6 premium-card px-6 py-4 z-20 backdrop-blur-xl"
            >
              <div className="font-bold text-2xl bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">8+ Years</div>
              <div className="text-slate-600 text-sm font-medium">Trading Experience</div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
                Meet The <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Founder</span>
              </h1>
            </div>
            <p className="text-slate-600 text-lg leading-relaxed">
              Hi, I'm the founder of Assets Legacy FX Academy. I started my trading journey with a blown account and no direction. It took me years of trial and error to decode how institutions actually move the market.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
              My goal is to cut down your learning curve. I teach exactly what I trade. No indicator setups, no complex algorithms. Just pure price action, volume analysis, and solid risk management.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-6">
              <motion.div 
                whileHover={{ y: -4 }}
                className="premium-card p-6 text-center"
              >
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">SEBI</div>
                <div className="text-slate-600 text-sm font-medium">Registered Research Analyst</div>
              </motion.div>
              <motion.div 
                whileHover={{ y: -4 }}
                className="premium-card p-6 text-center"
              >
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">CMT</div>
                <div className="text-slate-600 text-sm font-medium">Chartered Market Technician</div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="premium-card p-10 rounded-3xl group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            <motion.div whileHover={{ rotate: 12, scale: 1.1 }} className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/10 flex items-center justify-center mb-6">
              <Eye className="w-7 h-7 text-blue-600" />
            </motion.div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h2>
            <p className="text-slate-600 leading-relaxed">
              To build a community of independent traders who don't rely on tips or signal groups, but trust their own analysis to generate consistent wealth from the stock market.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -8 }}
            className="premium-card p-10 rounded-3xl group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            <motion.div whileHover={{ rotate: 12, scale: 1.1 }} className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/10 flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-blue-600" />
            </motion.div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h2>
            <p className="text-slate-600 leading-relaxed">
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
              <p className="text-subtext">Officially launched Assets Legacy FX Academy. Crossed 5,000+ active students.</p>
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
