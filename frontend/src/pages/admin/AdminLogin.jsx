import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Lock, User, Loader2, TrendingUp, Eye, EyeOff } from 'lucide-react';
import { motion } from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';

export default function AdminLogin() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState('');
  
  const { register, handleSubmit, formState: { errors } } = useForm();

  useEffect(() => {
    if (localStorage.getItem('adminToken')) {
      navigate('/admin/dashboard');
    }
  }, [navigate]);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setLoginError('');
    try {
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
      const res = await axios.post(`${API_URL}/admin/login`, data);
      
      if (res.data?.success && res.data?.token) {
        localStorage.setItem('adminToken', res.data.token);
        toast.success('Login successful');
        navigate('/admin/dashboard');
      }
    } catch (error) {
      const message = error.response?.data?.message || 'Invalid Credentials';
      setLoginError(message);
      toast.error(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#F8FAFC] to-[#EEF4FF] relative overflow-hidden">
      <Toaster position="top-right" toastOptions={{ className: 'glass text-text' }} />

      <div className="absolute top-16 left-16 w-[280px] h-[280px] bg-[#2563EB]/10 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute bottom-16 right-16 w-[280px] h-[280px] bg-[#06B6D4]/10 rounded-full blur-[90px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full space-y-8 bg-white/75 backdrop-blur-xl p-10 rounded-3xl border border-white/70 shadow-[0_18px_50px_rgba(15,23,42,0.10)] relative z-10"
      >
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#06B6D4] flex items-center justify-center mb-4 shadow-md">
            <TrendingUp className="text-white w-8 h-8" />
          </div>
          <h2 className="text-3xl font-bold text-[#0F172A]">Admin Login</h2>
          <p className="text-[#64748B] text-sm mt-2">Sign in to manage registrations</p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={loginError ? { opacity: 1, y: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className={`${loginError ? 'block' : 'hidden'} rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600`}
          >
            {loginError}
          </motion.div>

          <div className="space-y-4">
            <div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-[#94A3B8]" />
                </div>
                <input
                  type="text"
                  {...register("username", { required: "Username is required" })}
                  className="block w-full pl-10 bg-white/80 border border-[#CBD5E1] rounded-xl px-4 py-3 text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 focus:border-[#2563EB] transition-colors"
                  placeholder="Username"
                />
              </div>
              {errors.username && <p className="mt-1 text-sm text-red-500">{errors.username.message}</p>}
            </div>

            <div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-[#94A3B8]" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  {...register("password", { required: "Password is required" })}
                  className="block w-full pl-10 pr-12 bg-white/80 border border-[#CBD5E1] rounded-xl px-4 py-3 text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 focus:border-[#2563EB] transition-colors"
                  placeholder="Password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-[#64748B] hover:text-[#0F172A] transition-colors"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
              {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>}
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex justify-center py-4 px-4 border border-transparent rounded-xl shadow-sm text-lg font-bold text-white bg-[#2563EB] hover:bg-[#1D4ED8] transition-all disabled:opacity-70"
          >
            {isSubmitting ? <Loader2 className="w-6 h-6 animate-spin" /> : 'Sign In'}
          </button>
        </form>
      </motion.div>
    </div>
  );
}
