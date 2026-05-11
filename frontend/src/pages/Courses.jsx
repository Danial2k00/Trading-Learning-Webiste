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
    <div className="w-full pt-8 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-text mb-4">Our Premium <span className="text-primary">Courses</span></h1>
            <p className="text-lg text-subtext">
              Structured learning paths designed to take you from a complete beginner to an independent profitable trader.
            </p>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 items-stretch">
          {courses.map((course, idx) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              className={`bg-card rounded-3xl p-6 border relative flex flex-col h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                course.popular ? 'border-primary shadow-xl ring-1 ring-primary/20' : 'border-black/5 shadow-md'
              }`}
            >
              {course.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white font-semibold px-3.5 py-1 rounded-full text-xs shadow-md">
                  Most Popular
                </div>
              )}

              <div className="mb-4 border-b border-black/5 pb-4">
                <h3 className="text-xl font-bold text-text mb-1.5">{course.title}</h3>
                <div className="text-xs text-primary font-semibold mb-3">{course.level}</div>
                <div className="text-3xl font-bold text-text">{course.price}</div>
              </div>

              <div className="space-y-2.5 mb-5 flex-grow">
                <div className="flex items-center gap-2.5 text-subtext text-sm">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-2.5 text-subtext text-sm">
                  <MonitorPlay className="w-4 h-4 text-primary" />
                  <span>{course.format}</span>
                </div>
                <div className="flex items-center gap-2.5 text-subtext text-sm">
                  <Users className="w-4 h-4 text-primary" />
                  <span>Limited Batch Size</span>
                </div>
              </div>

              <div className="space-y-2 mb-5">
                <div className="font-semibold text-text mb-2.5 text-sm">What you'll learn:</div>
                {course.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-subtext text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <Link
                to={`/register?course=${course.id}`}
                className={`w-full py-3 rounded-xl font-semibold text-center transition-all shadow-sm hover:shadow-md ${
                  course.popular 
                    ? 'bg-primary text-white hover:bg-blue-700' 
                    : 'bg-primary/5 border border-primary/20 text-primary hover:bg-primary hover:text-white'
                }`}
              >
                Enroll Now
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
