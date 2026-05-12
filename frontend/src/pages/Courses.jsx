import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle2, Clock, MonitorPlay, Users } from 'lucide-react';

const courses = [
  {
    id: 'price-action',
    title: 'Advanced Price Action',
    level: 'Beginner to Advanced',
    duration: '2 Months',
    format: 'Live Zoom Sessions',
    price: '₹14,999',
    popular: true,
    features: [
      'Basics of Stock Market',
      'Candlestick Psychology',
      'Support & Resistance Mastery',
      'Trendline & Channels',
      'Volume Analysis',
      'Risk Management Rules',
      'Lifetime Community Access'
    ]
  },
  {
    id: 'options-strategist',
    title: 'Options Strategist Pro',
    level: 'Intermediate to Advanced',
    duration: '1.5 Months',
    format: 'Live Market Classes',
    price: '₹19,999',
    popular: false,
    features: [
      'Options Greeks Decoded',
      'Option Chain Analysis',
      'Directional & Non-Directional Strategies',
      'Expiry Day Special Strategies',
      'Adjustment Techniques',
      'Capital Allocation Rules',
      '1 Month Live Trading Support'
    ]
  },
  {
    id: 'masterclass',
    title: 'Ultimate Masterclass',
    level: 'All Levels',
    duration: '3.5 Months',
    format: 'Hybrid (Pre-recorded + Live)',
    price: '₹29,999',
    popular: false,
    features: [
      'Complete Price Action Module',
      'Complete Options Module',
      'Swing Trading Strategies',
      'Commodity & Forex Basics',
      'Psychology Building Sessions',
      '1-on-1 Mentorship Session',
      'Lifetime Premium Support'
    ]
  }
];

export default function Courses() {
  return (
    <div className="w-full pt-16 pb-20 bg-gradient-to-b from-background via-secondary to-background">
      {/* Animated background elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-text mb-4">
            Premium <span className="bg-gradient-to-r from-primary via-blue-600 to-accent bg-clip-text text-transparent">Trading Courses</span>
          </h1>
          <p className="text-lg text-subtext leading-relaxed">
            Structured learning paths crafted by market professionals to transform you from a beginner into an independent, profitable trader.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {courses.map((course, idx) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15 }}
              whileHover={{ y: -8 }}
              className="group relative h-full"
            >
              {/* Glow effect for popular card */}
              {course.popular && (
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 to-accent/30 rounded-3xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
              )}

              <div className={`relative h-full rounded-3xl p-8 border backdrop-blur-xl transition-all duration-300 flex flex-col overflow-hidden ${
                course.popular 
                  ? 'bg-gradient-to-br from-white/95 via-primary/5 to-white/95 border-primary/40 shadow-[0_8px_32px_rgba(37,99,235,0.15)]' 
                  : 'bg-gradient-to-br from-white/90 via-secondary/50 to-white/90 border-white/40 shadow-[0_8px_32px_rgba(31,41,55,0.08)] group-hover:shadow-[0_8px_32px_rgba(37,99,235,0.12)]'
              }`}
              >
                {/* Background gradient accent */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-all duration-300"></div>

                {course.popular && (
                  <motion.div 
                    initial={{ y: -20 }}
                    animate={{ y: 0 }}
                    className="absolute -top-4 left-1/2 -translate-x-1/2 z-10"
                  >
                    <div className="bg-gradient-to-r from-primary to-blue-600 text-white font-bold px-4 py-1.5 rounded-full text-xs shadow-lg shadow-primary/40 backdrop-blur-sm border border-white/20">
                      Most Popular
                    </div>
                  </motion.div>
                )}

                {/* Course Header */}
                <div className="relative z-10 mb-6 pb-6 border-b border-white/30">
                  <div className="inline-block mb-3 px-3 py-1 rounded-lg bg-primary/10 border border-primary/20">
                    <span className="text-xs font-bold text-primary">{course.level}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-text mb-3">{course.title}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">{course.price}</span>
                    <span className="text-subtext text-sm">/course</span>
                  </div>
                </div>

                {/* Course Details */}
                <div className="relative z-10 space-y-3 mb-7 flex-grow">
                  <div className="flex items-center gap-3 text-subtext hover:text-primary transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-xs text-subtext/70 uppercase tracking-wide">Duration</div>
                      <span className="font-semibold text-text">{course.duration}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-subtext hover:text-primary transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <MonitorPlay className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-xs text-subtext/70 uppercase tracking-wide">Format</div>
                      <span className="font-semibold text-text">{course.format}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-subtext hover:text-primary transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-xs text-subtext/70 uppercase tracking-wide">Batch</div>
                      <span className="font-semibold text-text">Limited Size</span>
                    </div>
                  </div>
                </div>

                {/* Features List */}
                <div className="relative z-10 space-y-2.5 mb-8 pb-8 border-b border-white/30">
                  <div className="font-bold text-text mb-3.5 text-sm uppercase tracking-wider">What You'll Master:</div>
                  {course.features.map((feature, i) => (
                    <motion.div 
                      key={i} 
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.15 + i * 0.05 }}
                      className="flex items-start gap-2.5 group/feature"
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5 group-hover/feature:scale-110 transition-transform" />
                      <span className="text-subtext text-sm leading-relaxed group-hover/feature:text-text transition-colors">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.div 
                  className="relative z-10"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    to={`/register?course=${course.id}`}
                    className={`w-full py-3.5 px-4 rounded-xl font-bold text-center transition-all shadow-lg hover:shadow-xl transform flex items-center justify-center gap-2 group/btn ${
                      course.popular 
                        ? 'bg-gradient-to-r from-primary to-blue-600 text-white hover:shadow-[0_8px_32px_rgba(37,99,235,0.4)] hover:from-primary hover:to-blue-700' 
                        : 'bg-gradient-to-r from-primary/80 to-blue-600/80 text-white hover:from-primary hover:to-blue-600 hover:shadow-[0_8px_32px_rgba(37,99,235,0.3)]'
                    }`}
                  >
                    Enroll Now
                    <CheckCircle2 className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 border border-primary/10 rounded-3xl p-8 md:p-12"
        >
          <h3 className="text-3xl font-bold text-text mb-8 text-center">Why Assets Legacy FX Academy?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div whileHover={{ y: -5 }} className="text-center">
              <div className="text-5xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent mb-3">10,000+</div>
              <p className="text-subtext text-lg">Traders trained to profitability</p>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} className="text-center">
              <div className="text-5xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent mb-3">94%</div>
              <p className="text-subtext text-lg">Student success rate</p>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} className="text-center">
              <div className="text-5xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent mb-3">24/7</div>
              <p className="text-subtext text-lg">Dedicated support available</p>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
