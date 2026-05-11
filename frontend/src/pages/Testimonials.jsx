import { motion } from 'framer-motion';
import { Star, Quote, PlayCircle } from 'lucide-react';

const testimonials = [
  {
    name: "Rahul Verma",
    role: "Full-time Trader",
    image: "https://i.pravatar.cc/150?img=11",
    text: "Before joining TradePro, I blew my account twice. The advanced price action concepts taught here completely changed my perspective. I've been consistently profitable for 6 months now.",
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
    <div className="w-full pt-10 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-6xl font-bold text-text mb-6">Student <span className="text-primary">Success</span> Stories</h1>
            <p className="text-lg text-subtext">
              Don't just take our word for it. Hear from our students who have transformed their trading careers.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((test, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-card p-8 rounded-3xl border border-black/5 relative shadow-md hover:shadow-xl transition-shadow"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-black/5" />
              
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <img src={test.image} alt={test.name} className="w-16 h-16 rounded-full border-2 border-primary shadow-sm" />
                <div>
                  <h3 className="text-xl font-bold text-text">{test.name}</h3>
                  <p className="text-primary font-medium text-sm">{test.role}</p>
                </div>
              </div>
              
              <div className="flex gap-1 mb-4 relative z-10">
                {[...Array(test.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              
              <p className="text-subtext leading-relaxed italic relative z-10">"{test.text}"</p>
            </motion.div>
          ))}
        </div>

        {/* Video Testimonials Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <h2 className="text-3xl font-bold text-text mb-12">Live Interview Sessions</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-card aspect-video rounded-2xl border border-black/5 flex items-center justify-center relative overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-shadow">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
                <img src={`https://picsum.photos/seed/${i + 50}/600/400`} alt="Video thumbnail" className="absolute inset-0 w-full h-full object-cover" />
                <div className="w-16 h-16 rounded-full bg-white/95 text-primary shadow-lg flex items-center justify-center z-20 group-hover:scale-110 transition-transform backdrop-blur-sm">
                  <PlayCircle className="w-8 h-8 ml-1" />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
}
