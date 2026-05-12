import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { User, Phone, MapPin, BookOpen, Loader2 } from 'lucide-react';
import toast from 'react-hot-toast';
import axios from 'axios';

export default function Register() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { register, handleSubmit, formState: { errors }, setValue } = useForm();

  useEffect(() => {
    // Pre-fill course if passed in URL query params
    const searchParams = new URLSearchParams(location.search);
    const courseId = searchParams.get('course');
    if (courseId) {
      if (courseId === 'price-action') setValue('course', 'Price Action Trading');
      if (courseId === 'options-strategist') setValue('course', 'Options Strategist');
      if (courseId === 'masterclass') setValue('course', 'Advanced Trading');
    }
  }, [location, setValue]);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      // Use the environment variable if available, else fallback to localhost for development
      const API_URL = import.meta.env.VITE_API_URL;

      const res = await axios.post(`${API_URL}/api/register`, data);
      if (res.status === 201) {
        toast.success('Registration successful! Our team will contact you shortly.');
        setTimeout(() => navigate('/'), 2000);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-background via-secondary to-background">
      {/* Animated background elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full relative"
      >
        {/* Glow background */}
        <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-accent/30 rounded-3xl blur opacity-0 hover:opacity-75 transition duration-500"></div>

        <div className="relative bg-gradient-to-br from-white/95 via-primary/2 to-white/95 p-8 md:p-10 rounded-3xl border border-white/40 backdrop-blur-xl space-y-8 shadow-[0_8px_32px_rgba(31,41,55,0.12)]">
          
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-2">Secure Your Seat</h2>
            <p className="text-subtext text-sm leading-relaxed">Join the next batch and transform your trading journey with Assets Legacy FX Academy.</p>
          </motion.div>

          <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
            
            {/* Full Name */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="group"
            >
              <label className="block text-sm font-semibold text-text mb-2">Full Name</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-primary" />
                </div>
                <input
                  type="text"
                  {...register("name", { required: "Full name is required" })}
                  className="block w-full pl-10 bg-secondary/50 border border-black/5 rounded-xl px-4 py-3.5 text-text placeholder-subtext/50 focus:outline-none focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all shadow-inner group-hover:border-black/10"
                  placeholder="John Doe"
                />
              </div>
              {errors.name && <p className="mt-1.5 text-sm text-red-500 font-medium">{errors.name.message}</p>}
            </motion.div>

            {/* Contact Number */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="group"
            >
              <label className="block text-sm font-semibold text-text mb-2">Contact Number</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <input
                  type="tel"
                  {...register("contact", { 
                    required: "Contact number is required",
                    pattern: { value: /^[0-9]{10}$/, message: "Enter a valid 10-digit number" }
                  })}
                  className="block w-full pl-10 bg-secondary/50 border border-black/5 rounded-xl px-4 py-3.5 text-text placeholder-subtext/50 focus:outline-none focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all shadow-inner group-hover:border-black/10"
                  placeholder="+971 50 123 4567"
                />
              </div>
              {errors.contact && <p className="mt-1.5 text-sm text-red-500 font-medium">{errors.contact.message}</p>}
            </motion.div>

            {/* City */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="group"
            >
              <label className="block text-sm font-semibold text-text mb-2">City</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <input
                  type="text"
                  {...register("city", { required: "City is required" })}
                  className="block w-full pl-10 bg-secondary/50 border border-black/5 rounded-xl px-4 py-3.5 text-text placeholder-subtext/50 focus:outline-none focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all shadow-inner group-hover:border-black/10"
                  placeholder="Dubai"
                />
              </div>
              {errors.city && <p className="mt-1.5 text-sm text-red-500 font-medium">{errors.city.message}</p>}
            </motion.div>

            {/* Course Dropdown */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="group"
            >
              <label className="block text-sm font-semibold text-text mb-2">Select Course</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <BookOpen className="h-5 w-5 text-primary" />
                </div>
                <select
                  {...register("course", { required: "Please select a course" })}
                  className="block w-full pl-10 bg-secondary/50 border border-black/5 rounded-xl px-4 py-3.5 text-text focus:outline-none focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all appearance-none shadow-inner group-hover:border-black/10"
                >
                  <option value="">Choose your course...</option>
                  <option value="Price Action Trading">Price Action Trading</option>
                  <option value="Options Strategist">Options Strategist Pro</option>
                  <option value="Advanced Trading">Advanced Trading Masterclass</option>
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 text-primary pointer-events-none">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
              </div>
              {errors.course && <p className="mt-1.5 text-sm text-red-500 font-medium">{errors.course.message}</p>}
            </motion.div>

          </form>

          {/* Submit Button */}
          <motion.button
            type="button"
            onClick={handleSubmit(onSubmit)}
            disabled={isSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-4 px-4 rounded-xl shadow-lg hover:shadow-xl text-lg font-bold text-white bg-gradient-to-r from-primary to-blue-600 hover:from-primary hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Registering...</span>
              </>
            ) : (
              <>
                <span>Submit Registration</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </>
            )}
          </motion.button>

          {/* Footer note */}
          <p className="text-center text-xs text-subtext/70">
            Our team will contact you within 24 hours during business days. No spam, just pure value.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
