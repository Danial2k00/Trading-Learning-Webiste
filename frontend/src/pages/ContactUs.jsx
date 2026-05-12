import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

export default function ContactUs() {
  const contactCards = [
    {
      icon: MapPin,
      title: 'Office Address',
      content: 'Office No 1206, Centurion Star Tower, Port Saeed - Deira, Dubai - United Arab Emirates',
      color: 'from-blue-500/20 to-cyan-500/20'
    },
    {
      icon: Phone,
      title: 'Phone Number',
      content: '+971 56 297 6323',
      link: 'tel:+971562976323',
      color: 'from-purple-500/20 to-pink-500/20'
    },
    {
      icon: Mail,
      title: 'Email Support',
      content: 'support@assetslegacyfx.com',
      link: 'mailto:support@assetslegacyfx.com',
      color: 'from-green-500/20 to-emerald-500/20'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      content: 'Saturday - Thursday: 9:00 AM - 6:00 PM (GST)',
      color: 'from-orange-500/20 to-red-500/20'
    }
  ];

  return (
    <div className="w-full pt-10 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-6xl font-bold text-text mb-6">Get in <span className="text-primary">Touch</span></h1>
            <p className="text-lg text-subtext">
              Have questions about our courses or need support? We're here to help you on your trading journey.
            </p>
          </motion.div>
        </div>

        {/* Premium Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {contactCards.map((card, index) => {
            const Icon = card.icon;
            const content = (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative h-full rounded-2xl p-8 border border-white/20 backdrop-blur-xl shadow-[0_8px_32px_rgba(31,41,55,0.1)] hover:shadow-[0_8px_32px_rgba(37,99,235,0.2)] transition-all duration-300 group overflow-hidden`}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-50 group-hover:opacity-75 transition-opacity duration-300`} />

                {/* Animated Border Gradient */}
                <div className="absolute inset-0 border border-transparent rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content */}
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-4 border border-white/20 group-hover:bg-primary/20 group-hover:border-primary/50 transition-all duration-300 shadow-lg">
                    <Icon className="w-7 h-7 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-lg font-bold text-text mb-3 group-hover:text-primary transition-colors">{card.title}</h3>
                  <p className="text-subtext text-sm leading-relaxed group-hover:text-text transition-colors">
                    {card.content}
                  </p>
                </div>
              </motion.div>
            );

            return card.link ? (
              <a href={card.link} key={index}>
                {content}
              </a>
            ) : (
              content
            );
          })}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side: Google Map & WhatsApp */}
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="space-y-8">

            {/* Google Map */}
            <div className="rounded-3xl overflow-hidden border border-black/5 shadow-lg h-[400px]">
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen=""
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.2357892234635!2d55.30779!3d25.246395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b8d8d8d8d8d%3A0x3e5f6b8d8d8d8d8d!2sCenturion%20Star%20Tower%2C%20Deira%2C%20Dubai!5e0!3m2!1sen!2sae!4v1234567890"
              />
            </div>

            {/* WhatsApp CTA */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-[#25D366]/20 via-[#128C7E]/20 to-[#075E54]/20 border border-[#25D366]/30 p-8 rounded-3xl shadow-lg backdrop-blur-xl"
            >
              <h3 className="text-2xl font-bold text-text mb-3 flex items-center gap-2">
                <Send className="w-6 h-6 text-[#25D366]" />
                Fastest Response
              </h3>
              <p className="text-subtext mb-6">Message us directly on WhatsApp for immediate assistance regarding courses and trading education.</p>
              <a
                href="https://wa.me/971562976323"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] text-white font-bold hover:bg-[#20bd5a] transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <Send className="w-5 h-5" /> Chat on WhatsApp
              </a>
            </motion.div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
            <form className="bg-gradient-to-br from-card to-white border border-black/5 p-8 rounded-3xl space-y-6 shadow-lg backdrop-blur-xl">
              <h2 className="text-2xl font-bold text-text mb-8">Send us a Message</h2>

              <div className="space-y-4">
                <div className="group">
                  <label className="block text-sm font-semibold text-text mb-2">Full Name</label>
                  <input
                    type="text"
                    className="w-full bg-secondary/50 border border-black/5 rounded-xl px-4 py-3.5 text-text placeholder-subtext/50 focus:outline-none focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all shadow-inner group-hover:border-black/10"
                    placeholder="John Doe"
                  />
                </div>

                <div className="group">
                  <label className="block text-sm font-semibold text-text mb-2">Email Address</label>
                  <input
                    type="email"
                    className="w-full bg-secondary/50 border border-black/5 rounded-xl px-4 py-3.5 text-text placeholder-subtext/50 focus:outline-none focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all shadow-inner group-hover:border-black/10"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="group">
                  <label className="block text-sm font-semibold text-text mb-2">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full bg-secondary/50 border border-black/5 rounded-xl px-4 py-3.5 text-text placeholder-subtext/50 focus:outline-none focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all shadow-inner group-hover:border-black/10"
                    placeholder="+971 50 XXX XXXX"
                  />
                </div>

                <div className="group">
                  <label className="block text-sm font-semibold text-text mb-2">Subject</label>
                  <input
                    type="text"
                    className="w-full bg-secondary/50 border border-black/5 rounded-xl px-4 py-3.5 text-text placeholder-subtext/50 focus:outline-none focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all shadow-inner group-hover:border-black/10"
                    placeholder="What is this about?"
                  />
                </div>

                <div className="group">
                  <label className="block text-sm font-semibold text-text mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full bg-secondary/50 border border-black/5 rounded-xl px-4 py-3.5 text-text placeholder-subtext/50 focus:outline-none focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all shadow-inner resize-none group-hover:border-black/10"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>
              </div>

              <motion.button
                type="button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-blue-600 text-white font-bold hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] transition-all flex justify-center items-center gap-2 shadow-lg"
              >
                Send Message
                <Send className="w-5 h-5" />
              </motion.button>

              <p className="text-xs text-subtext/70 text-center mt-4">
                We typically respond within 24 hours during business days.
              </p>
            </form>
          </motion.div>
        </div>

        {/* Additional Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 border border-primary/10 rounded-3xl p-8 md:p-12"
        >
          <h3 className="text-2xl font-bold text-text mb-4">Why Choose Assets Legacy FX Academy?</h3>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">10,000+</div>
              <p className="text-subtext">Active traders trained globally</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">94%</div>
              <p className="text-subtext">Success rate among our students</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <p className="text-subtext">Community support available</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
