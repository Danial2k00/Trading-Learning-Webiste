import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, CheckCircle2, TrendingUp, Users, Award } from 'lucide-react';

const stats = [
  { label: 'Active Students', value: '10,000+', icon: Users },
  { label: 'Success Rate', value: '94%', icon: TrendingUp },
  { label: 'Live Sessions', value: '500+', icon: Play },
  { label: 'Expert Awards', value: '15+', icon: Award },
];

const liveFeatures = [
  'Live market analysis',
  'Real-time doubt support',
  'Screen sharing sessions',
  'Recorded session access',
  'Beginner friendly explanation',
  'Interactive mentorship',
];

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 pb-16 overflow-hidden">
        {/* Full Section Animated Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/hero-bg.png" 
            alt="Hero Background" 
            className="absolute inset-0 w-full h-full object-cover opacity-80" 
          />
          {/* Gradient overlay to ensure text is perfectly readable */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent" />
          <div className="absolute inset-0 bg-white/30 backdrop-blur-[1px]" />
          
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-pulse delay-1000" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-primary/10 text-primary text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Live Mentorship Batches Open
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-text drop-shadow-sm">
                Master the Markets with <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Precision
                </span>
              </h1>
              
              <p className="text-lg text-subtext max-w-xl leading-relaxed font-medium">
                Join our premium trading education platform. Learn price action, options strategies, and institutional concepts through live Zoom classes and lifetime mentorship.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link
                  to="/register"
                  className="px-8 py-4 rounded-xl bg-primary text-white font-bold text-lg hover:bg-blue-700 hover:shadow-[0_0_30px_rgba(37,99,235,0.3)] transition-all flex items-center gap-2 group shadow-md"
                >
                  Start Learning Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/courses"
                  className="px-8 py-4 rounded-xl bg-white shadow-sm border border-black/5 text-text font-bold text-lg hover:bg-gray-50 transition-all flex items-center gap-2"
                >
                  <Play className="w-5 h-5 text-primary" />
                  View Courses
                </Link>
              </div>

              <div className="flex items-center gap-4 pt-8 border-t border-black/5">
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map((i) => (
                    <img
                      key={i}
                      src={`https://i.pravatar.cc/100?img=${i + 10}`}
                      alt="Student"
                      className="w-12 h-12 rounded-full border-2 border-white shadow-sm"
                    />
                  ))}
                </div>
                <div className="text-sm text-subtext flex items-center h-12">
                  <span>Joined by <strong className="text-text">10,000+</strong> successful traders</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="mt-12 py-12 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center sm:justify-around lg:justify-between items-center gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-black/5 rounded-2xl p-6 flex flex-col items-center min-w-[200px]"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-text mb-1">{stat.value}</div>
                    <div className="text-subtext text-sm font-medium">{stat.label}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 relative overflow-hidden bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-text mb-6">Why Assets Legacy <span className="text-primary">FX Academy</span>?</h2>
            <p className="text-subtext text-lg">We don't just teach theory. We trade live with you and provide the practical knowledge required to survive and thrive in real markets.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Live Market Classes',
                desc: 'Learn directly in the live market via Zoom. Watch concepts play out in real-time.',
                icon: Play
              },
              {
                title: 'Lifetime Mentorship',
                desc: 'Access to premium community and weekend doubt clearing sessions for a lifetime.',
                icon: Users
              },
              {
                title: 'Institutional Strategies',
                desc: 'We focus on smart money concepts, liquidity, and advanced price action.',
                icon: TrendingUp
              }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="bg-card p-8 rounded-3xl border border-black/5 hover:border-primary/20 shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-text mb-4">{feature.title}</h3>
                <p className="text-subtext leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Zoom & Google Meet Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-white to-emerald-50/60" />
        <div className="absolute top-12 left-10 w-56 h-56 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-8 w-64 h-64 bg-emerald-300/20 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
              Live Interactive Sessions
            </h2>
            <p className="text-subtext text-base md:text-lg leading-relaxed">
              All classes are conducted through Live Zoom and Google Meet sessions. Attend live trading classes from anywhere with real-time market explanation, doubt clearing, and direct mentor interaction.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="glass rounded-3xl p-6 md:p-8 h-full"
            >
              <h3 className="text-2xl font-bold text-text mb-2">Live Interactive Sessions</h3>
              <p className="text-subtext leading-relaxed mb-5">
                Experience professional, mentor-led classes designed to simplify market concepts and improve decision-making in real trading conditions.
              </p>
              <div className="grid sm:grid-cols-2 gap-x-4 gap-y-3">
                {liveFeatures.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.06 }}
                    className="flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span className="text-sm text-subtext">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.12 }}
              className="rounded-3xl p-6 md:p-8 border border-white/60 bg-white/65 backdrop-blur-xl shadow-[0_20px_70px_rgba(15,23,42,0.08)] h-full"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  whileHover={{ scale: 1.03 }}
                  className="rounded-2xl bg-white/85 border border-white/70 shadow-[0_10px_35px_rgba(59,130,246,0.18)] p-5"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#2D8CFF]/10 flex items-center justify-center mb-4">
                    <svg viewBox="0 0 48 48" className="w-7 h-7" aria-hidden="true">
                      <path fill="#2D8CFF" d="M18 14h11c2.2 0 4 1.8 4 4v12c0 2.2-1.8 4-4 4H18c-2.2 0-4-1.8-4-4V18c0-2.2 1.8-4 4-4z" />
                      <path fill="#2D8CFF" d="M34 21.4l7-4.2c1-.6 2.3.1 2.3 1.3v11c0 1.2-1.3 1.9-2.3 1.3l-7-4.2v-5.2z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-text mb-1">Zoom Classes</h4>
                  <p className="text-sm text-subtext">High clarity live sessions with interactive mentor walkthroughs.</p>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 4.4, repeat: Infinity, ease: 'easeInOut' }}
                  whileHover={{ scale: 1.03 }}
                  className="rounded-2xl bg-white/85 border border-white/70 shadow-[0_10px_35px_rgba(16,185,129,0.18)] p-5"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#00AC47]/10 flex items-center justify-center mb-4">
                    <svg viewBox="0 0 48 48" className="w-7 h-7" aria-hidden="true">
                      <path fill="#00AC47" d="M14 18.7v10.6a2.7 2.7 0 0 0 2.7 2.7h12.6l5.8 4.7c.9.7 2.3.1 2.3-1V18.3c0-1.1-1.4-1.7-2.3-1L29.3 22H16.7a2.7 2.7 0 0 0-2.7 2.7z" />
                      <path fill="#00832D" d="M29.3 22v10h-12a3.3 3.3 0 0 1-3.3-3.3v-3.4a3.3 3.3 0 0 1 3.3-3.3h12z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-text mb-1">Google Meet</h4>
                  <p className="text-sm text-subtext">Smooth collaboration, doubt support, and guided practice calls.</p>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="mt-5 rounded-2xl border border-primary/10 bg-gradient-to-r from-primary/5 to-emerald-100/40 p-4"
              >
                <p className="text-sm text-text font-medium">
                  Attend from anywhere with stable, beginner-friendly sessions focused on clarity, execution, and confidence.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
