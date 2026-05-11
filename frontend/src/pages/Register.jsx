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
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full space-y-8 bg-card p-10 rounded-3xl border border-black/5 relative z-10 shadow-[0_8px_30px_rgb(0,0,0,0.08)]"
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold text-text mb-2">Secure Your Seat</h2>
          <p className="text-subtext text-sm">Join the next batch and transform your trading.</p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            
            {/* Full Name */}
            <div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-primary" />
                </div>
                <input
                  type="text"
                  {...register("name", { required: "Full name is required" })}
                  className="block w-full pl-10 bg-secondary border border-black/5 rounded-xl px-4 py-3 text-text placeholder-gray-400 focus:outline-none focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all shadow-inner"
                  placeholder="Full Name"
                />
              </div>
              {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
            </div>

            {/* Contact Number */}
            <div>
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
                  className="block w-full pl-10 bg-secondary border border-black/5 rounded-xl px-4 py-3 text-text placeholder-gray-400 focus:outline-none focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all shadow-inner"
                  placeholder="Contact Number"
                />
              </div>
              {errors.contact && <p className="mt-1 text-sm text-red-500">{errors.contact.message}</p>}
            </div>

            {/* City */}
            <div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <input
                  type="text"
                  {...register("city", { required: "City is required" })}
                  className="block w-full pl-10 bg-secondary border border-black/5 rounded-xl px-4 py-3 text-text placeholder-gray-400 focus:outline-none focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all shadow-inner"
                  placeholder="City"
                />
              </div>
              {errors.city && <p className="mt-1 text-sm text-red-500">{errors.city.message}</p>}
            </div>

            {/* Course Dropdown */}
            <div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <BookOpen className="h-5 w-5 text-primary" />
                </div>
                <select
                  {...register("course", { required: "Please select a course" })}
                  className="block w-full pl-10 bg-secondary border border-black/5 rounded-xl px-4 py-3 text-text focus:outline-none focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all appearance-none shadow-inner"
                >
                  <option value="">Select a Course</option>
                  <option value="Price Action Trading">Price Action Trading</option>
                  <option value="Options Strategist">Options Strategist</option>
                  <option value="Advanced Trading">Advanced Trading (Masterclass)</option>
                </select>
              </div>
              {errors.course && <p className="mt-1 text-sm text-red-500">{errors.course.message}</p>}
            </div>

          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex justify-center py-4 px-4 border border-transparent rounded-xl shadow-md text-lg font-bold text-white bg-primary hover:bg-blue-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <Loader2 className="w-6 h-6 animate-spin" />
            ) : (
              'Submit Registration'
            )}
          </button>
        </form>
      </motion.div>
    </div>
  );
}
