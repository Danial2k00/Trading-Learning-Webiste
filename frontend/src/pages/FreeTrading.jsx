import { motion } from 'framer-motion';
import { PlayCircle, BookOpen, MessageCircle } from 'lucide-react';

const basics = [
  { title: 'What is Stock Market?', desc: 'Understand the core mechanics of buyers and sellers.' },
  { title: 'Candlestick Basics', desc: 'Learn to read the language of the market.' },
  { title: 'Support & Resistance', desc: 'Identify where institutions buy and sell.' },
  { title: 'Risk Management', desc: 'The holy grail of consistent profitability.' }
];

export default function FreeTrading() {
  return (
    <div className="w-full pt-16 pb-24 bg-gradient-to-b from-background via-secondary to-background">
      {/* Animated background elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-text mb-6">
            Free <span className="bg-gradient-to-r from-primary via-blue-600 to-accent bg-clip-text text-transparent">Trading Education</span>
          </h1>
          <p className="text-lg text-subtext leading-relaxed">
            Build your foundation with our free resources and community support. Start learning today without any cost or commitment.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          {/* Left: Learning Basics */}
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-8">Market Basics Series</h2>
            <div className="space-y-4">
              {basics.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="group bg-gradient-to-br from-white/90 via-secondary/50 to-white/90 p-6 rounded-2xl border border-white/40 backdrop-blur-xl shadow-[0_8px_32px_rgba(31,41,55,0.08)] hover:shadow-[0_8px_32px_rgba(37,99,235,0.12)] transition-all duration-300 flex items-start gap-4 relative overflow-hidden"
                >
                  {/* Accent background */}
                  <div className="absolute -top-10 -right-10 w-24 h-24 bg-primary/5 rounded-full blur-xl group-hover:bg-primary/10 transition-all duration-300"></div>

                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-blue-600/20 flex items-center justify-center shrink-0 border border-primary/30 relative z-10"
                  >
                    <BookOpen className="text-primary w-6 h-6" />
                  </motion.div>
                  <div className="relative z-10">
                    <h3 className="text-lg font-bold text-text mb-1.5">{item.title}</h3>
                    <p className="text-subtext text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Video Section */}
          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="relative h-[500px]">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur opacity-0 hover:opacity-100 transition duration-500"></div>
            
            <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-primary/5 to-white/90 rounded-3xl border border-white/40 backdrop-blur-xl shadow-[0_8px_32px_rgba(31,41,55,0.08)] flex items-center justify-center overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              
              <div className="text-center relative z-10">
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-20 h-20 rounded-full bg-gradient-to-r from-primary to-blue-600 flex items-center justify-center mx-auto mb-6 shadow-xl shadow-primary/40 cursor-pointer group-hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] transition-all duration-300 border border-white/30 backdrop-blur-sm"
                >
                  <PlayCircle className="w-10 h-10 text-white" fill="white" />
                </motion.div>
                <p className="text-text font-bold text-lg">Watch Full Playlist</p>
                <p className="text-subtext text-sm mt-2">8+ hours of premium trading content</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Community Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl p-12 md:p-16 border border-white/30 backdrop-blur-xl bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 shadow-[0_8px_32px_rgba(31,41,55,0.08)] overflow-hidden"
        >
          {/* Background gradient accents */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block mb-6"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-blue-600/20 flex items-center justify-center border border-primary/30 backdrop-blur-sm">
                <MessageCircle className="w-8 h-8 text-primary" />
              </div>
            </motion.div>

            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">Join Our Free Community</h2>
            <p className="text-subtext mb-10 text-lg leading-relaxed max-w-xl mx-auto">
              Access daily market analysis, important support/resistance levels, and connect with a thriving community of traders who are committed to mastery.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 flex-wrap">
              <motion.a 
                href="#" 
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#0088cc] to-[#0077b3] text-white font-bold flex items-center justify-center gap-2 hover:shadow-[0_8px_32px_rgba(0,136,204,0.3)] transition-all shadow-lg"
              >
                <MessageCircle className="w-5 h-5" />
                Join Telegram
              </motion.a>
              <motion.a 
                href="https://wa.me/971562976323" 
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#25D366] to-[#20bd5a] text-white font-bold flex items-center justify-center gap-2 hover:shadow-[0_8px_32px_rgba(37,209,102,0.3)] transition-all shadow-lg"
              >
                <MessageCircle className="w-5 h-5" />
                Join WhatsApp
              </motion.a>
            </div>

            <p className="text-subtext text-sm mt-8">No spam • Only value • Active daily support</p>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
