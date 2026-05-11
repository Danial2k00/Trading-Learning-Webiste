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
    <div className="w-full pt-10 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-6xl font-bold text-text mb-6">Free <span className="text-primary">Education</span> Hub</h1>
            <p className="text-lg text-subtext">
              Start your trading journey with our free resources. Build a strong foundation before jumping into the live markets.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
            <h2 className="text-3xl font-bold text-text mb-6">Market Basics Series</h2>
            <div className="space-y-4">
              {basics.map((item, i) => (
                <div key={i} className="bg-card p-6 rounded-2xl border border-black/5 shadow-sm flex items-start gap-4 hover:border-primary/30 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <BookOpen className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-text mb-2">{item.title}</h3>
                    <p className="text-subtext text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="relative h-[500px]">
            <div className="absolute inset-0 bg-card rounded-3xl border border-black/5 shadow-md flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-blue-500/5" />
              <div className="text-center relative z-10">
                <PlayCircle className="w-20 h-20 text-primary mx-auto mb-4 opacity-80 cursor-pointer hover:scale-110 transition-transform hover:opacity-100" />
                <p className="text-text font-medium">Watch Full Playlist on YouTube</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Community Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card rounded-3xl p-12 border border-primary/10 shadow-lg text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px]" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <MessageCircle className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-text mb-4">Join Our Free Community</h2>
            <p className="text-subtext mb-8">
              Get daily pre-market analysis, important levels, and interact with fellow traders. No spam, only pure value.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#" className="px-8 py-4 rounded-xl bg-[#0088cc] text-white font-bold flex items-center gap-2 hover:bg-[#0077b3] transition-colors shadow-sm">
                Join Telegram
              </a>
              <a href="#" className="px-8 py-4 rounded-xl bg-[#25D366] text-white font-bold flex items-center gap-2 hover:bg-[#20bd5a] transition-colors shadow-sm">
                Join WhatsApp
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
