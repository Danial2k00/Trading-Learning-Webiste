import { motion } from 'framer-motion';
import { Star, Quote, PlayCircle } from 'lucide-react';

const testimonials = [
  {
    name: "Rahul Verma",
    role: "Full-time Trader",
    image: "https://i.pravatar.cc/150?img=11",
    text: "Before joining Assets Legacy FX Academy, I blew my account twice. The advanced price action concepts taught here completely changed my perspective. I've been consistently profitable for 6 months now.",
    rating: 5
  },
  {
    name: "Sneha Patil",
    role: "Part-time Trader",
    image: "https://i.pravatar.cc/150?img=5",
    text: "The Options Strategist course is phenomenal. The way option Greeks are simplified is something I haven't seen anywhere else. The live market support is a game-changer.",
    rating: 5
  },
  {
    name: "Amit Kumar",
    role: "Beginner",
    image: "https://i.pravatar.cc/150?img=8",
    text: "I started from zero. The structured approach and the focus on psychology and risk management saved me from making rookie mistakes. Highly recommended for beginners.",
    rating: 5
  },
  {
    name: "Priya Sharma",
    role: "Swing Trader",
    image: "https://i.pravatar.cc/150?img=9",
    text: "The masterclass provided me with the tools to scan and hold trades confidently. The mentorship didn't end with the course; the community is incredibly supportive.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <div className="w-full pt-16 pb-24 bg-gradient-to-b from-background via-secondary to-background">
      {/* Animated background elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-text mb-6">
            Student <span className="bg-gradient-to-r from-primary via-blue-600 to-accent bg-clip-text text-transparent">Success Stories</span>
          </h1>
          <p className="text-lg text-subtext leading-relaxed">
            Real results from real traders who transformed their careers at Assets Legacy FX Academy. Hear directly from our alumni who are now profitably trading.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {testimonials.map((test, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              {/* Glow background */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>

              <div className="relative h-full rounded-3xl p-8 bg-gradient-to-br from-white/90 via-secondary/50 to-white/90 border border-white/40 backdrop-blur-xl shadow-[0_8px_32px_rgba(31,41,55,0.08)] group-hover:shadow-[0_8px_32px_rgba(37,99,235,0.12)] transition-all duration-300 overflow-hidden">
                
                {/* Accent background */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-all duration-300"></div>

                {/* Quote icon background */}
                <Quote className="absolute top-6 right-6 w-16 h-16 text-primary/5 group-hover:text-primary/10 transition-all duration-300" />
                
                {/* User info */}
                <div className="flex items-center gap-4 mb-6 relative z-10">
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="w-16 h-16 rounded-full border-2 border-primary overflow-hidden shadow-lg flex-shrink-0"
                  >
                    <img src={test.image} alt={test.name} className="w-full h-full object-cover" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold text-text">{test.name}</h3>
                    <p className="text-primary font-semibold text-sm">{test.role}</p>
                  </div>
                </div>
                
                {/* Rating stars */}
                <div className="flex gap-1.5 mb-5 relative z-10">
                  {[...Array(test.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.1 + i * 0.05 }}
                    >
                      <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                    </motion.div>
                  ))}
                </div>
                
                {/* Testimonial text */}
                <p className="text-subtext leading-relaxed relative z-10 font-medium">
                  <span className="text-primary font-bold">"</span>{test.text}<span className="text-primary font-bold">"</span>
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Video Testimonials Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">Live Interview Sessions</h2>
          <p className="text-subtext mb-12 max-w-2xl mx-auto">Watch our students share their transformation journey and the impact of Assets Legacy FX Academy on their trading career.</p>

          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative"
              >
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>

                <div className="relative aspect-video rounded-3xl border border-white/30 backdrop-blur-xl overflow-hidden flex items-center justify-center bg-gradient-to-br from-white/80 to-primary/5 shadow-[0_8px_32px_rgba(31,41,55,0.08)] group-hover:shadow-[0_8px_32px_rgba(37,99,235,0.12)] transition-all duration-300">
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/0 group-hover:from-black/20 transition-all duration-300 z-10" />
                  
                  {/* Thumbnail image */}
                  <img 
                    src={`https://picsum.photos/seed/${i + 50}/600/400`} 
                    alt={`Video testimonial ${i}`} 
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                  
                  {/* Play button */}
                  <motion.div 
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative z-20 w-20 h-20 rounded-full bg-gradient-to-r from-primary to-blue-600 shadow-xl flex items-center justify-center cursor-pointer group-hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] transition-all duration-300 backdrop-blur-sm border border-white/30"
                  >
                    <PlayCircle className="w-10 h-10 text-white" fill="white" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
}
