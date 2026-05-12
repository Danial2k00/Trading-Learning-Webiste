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
        {/* Premium Animated Background */}
        <div className="absolute inset-0 z-0 stock-pattern">
          {/* Animated blur circles */}
          <motion.div
            animate={{ y: [0, 50, 0] }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-blue-500/30 to-cyan-500/20 rounded-full blur-3xl pointer-events-none"
          />
          <motion.div
            animate={{ y: [0, -50, 0] }}
            transition={{ duration: 25, repeat: Infinity }}
            className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-3xl pointer-events-none"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Animated badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/70 backdrop-blur-xl border border-blue-200/50 shadow-lg shadow-blue-500/10"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 animate-pulse" />
                <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Live Mentorship Batches Open
                </span>
              </motion.div>

              {/* Main headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-5xl lg:text-7xl font-bold leading-tight text-slate-900"
              >
                Master the Markets with <br />
                <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                  Precision & Confidence
                </span>
              </motion.h1>

              {/* Subheading */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl text-slate-600 max-w-xl leading-relaxed"
              >
                Join our premium trading education platform. Learn price action, options strategies, and institutional concepts through live Zoom classes and lifetime mentorship.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="flex flex-wrap items-center gap-4 pt-4"
              >
                <Link
                  to="/register"
                  className="group px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold text-lg hover:shadow-2xl hover:shadow-blue-500/40 transition-all transform hover:scale-105 flex items-center gap-2 shadow-xl"
                >
                  Start Learning Now
                  <motion.div
                    group-hover={{ x: 5 }}
                    className="w-5 h-5"
                  >
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.div>
                </Link>
                <Link
                  to="/courses"
                  className="px-8 py-4 rounded-full bg-white/70 backdrop-blur-xl border border-white/50 text-slate-900 font-bold text-lg hover:bg-white/90 transition-all flex items-center gap-2 shadow-lg"
                >
                  <Play className="w-5 h-5 text-blue-600" />
                  Explore Courses
                </Link>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 pt-8 border-t border-white/20"
              >
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map((i) => (
                    <motion.img
                      key={i}
                      whileHover={{ scale: 1.2, zIndex: 10 }}
                      src={`https://i.pravatar.cc/100?img=${i + 10}`}
                      alt="Student"
                      className="w-12 h-12 rounded-full border-2 border-white shadow-lg cursor-pointer"
                    />
                  ))}
                </div>
                <div className="text-base text-slate-600 font-medium">
                  Joined by <span className="font-bold text-slate-900">10,000+</span> successful traders
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 via-cyan-50/30 to-blue-50/50 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -5 }}
                  className="premium-card p-6 md:p-8 flex flex-col items-center text-center group"
                >
                  <motion.div 
                    whileHover={{ rotate: 12, scale: 1.1 }}
                    className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/10 flex items-center justify-center mb-4 group-hover:from-blue-500/40 group-hover:to-cyan-500/20 transition-all"
                  >
                    <Icon className="w-7 h-7 text-blue-600" />
                  </motion.div>
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-slate-600 text-sm md:text-base font-medium">{stat.label}</div>
                  <motion.div 
                    whileHover={{ rotate: 12, scale: 1.1 }}
                    className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/10 flex items-center justify-center mb-4 group-hover:from-blue-500/40 group-hover:to-cyan-500/20 transition-all"
                  >
                    <Icon className="w-7 h-7 text-blue-600" />
                  </motion.div>
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-slate-600 text-sm md:text-base font-medium">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/30 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Why Assets Legacy <br />
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                FX Academy?
              </span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              We don't just teach theory. We trade live with you and provide the practical knowledge required to survive and thrive in real markets.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Live Market Classes',
                desc: 'Learn directly in the live market via Zoom. Watch concepts play out in real-time.',
                icon: Play,
                color: 'from-blue-500/20 to-cyan-500/10'
              },
              {
                title: 'Lifetime Mentorship',
                desc: 'Access to premium community and weekend doubt clearing sessions for a lifetime.',
                icon: Users,
                color: 'from-purple-500/20 to-blue-500/10'
              },
              {
                title: 'Institutional Strategies',
                desc: 'We focus on smart money concepts, liquidity, and advanced price action.',
                icon: TrendingUp,
                color: 'from-cyan-500/20 to-blue-500/10'
              }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
                whileHover={{ y: -8 }}
                className="premium-card p-8 md:p-10 group relative overflow-hidden"
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`} />

                <motion.div 
                  whileHover={{ rotate: 12, scale: 1.1 }}
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:shadow-lg transition-all`}
                >
                  <feature.icon className="w-8 h-8 text-blue-600" />
                </motion.div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Sessions Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 stock-pattern opacity-40 pointer-events-none" />
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
