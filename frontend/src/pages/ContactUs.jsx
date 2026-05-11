import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactUs() {
  return (
    <div className="w-full pt-10 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-6xl font-bold text-text mb-6">Get in <span className="text-primary">Touch</span></h1>
            <p className="text-lg text-subtext">
              Have questions about our courses or need support? We're here to help you.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="space-y-8">
            <div className="bg-card p-8 rounded-3xl border border-black/5 shadow-md">
              <h2 className="text-2xl font-bold text-text mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-subtext">Call/WhatsApp</div>
                    <div className="text-lg font-medium text-text">+1 (555) 123-4567</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-subtext">Email Support</div>
                    <div className="text-lg font-medium text-text">support@tradepro.com</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-subtext">Office</div>
                    <div className="text-lg font-medium text-text">123 Financial District, Wall Street, NY</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card p-8 rounded-3xl border border-success/20 bg-gradient-to-br from-success/5 to-transparent shadow-md">
              <h3 className="text-xl font-bold text-text mb-2">Fastest Response</h3>
              <p className="text-subtext mb-6">Message us directly on WhatsApp for immediate assistance regarding courses.</p>
              <a href="#" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] text-white font-bold hover:bg-[#20bd5a] transition-colors shadow-sm">
                <Send className="w-5 h-5" /> Chat on WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
            <form className="bg-card p-8 rounded-3xl border border-black/5 space-y-6 shadow-md">
              <h2 className="text-2xl font-bold text-text mb-6">Send us a Message</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-subtext mb-2">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-secondary border border-black/5 rounded-xl px-4 py-3 text-text focus:outline-none focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all shadow-inner"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-subtext mb-2">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full bg-secondary border border-black/5 rounded-xl px-4 py-3 text-text focus:outline-none focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all shadow-inner"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-subtext mb-2">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full bg-secondary border border-black/5 rounded-xl px-4 py-3 text-text focus:outline-none focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all shadow-inner"
                    placeholder="How can we help you?"
                  />
                </div>
              </div>

              <button type="button" className="w-full py-4 rounded-xl bg-primary text-white font-bold hover:bg-blue-700 hover:shadow-lg transition-all flex justify-center items-center gap-2">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
