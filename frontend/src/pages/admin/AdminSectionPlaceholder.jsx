import { motion } from 'framer-motion';

export default function AdminSectionPlaceholder({ title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="bg-white/70 backdrop-blur-xl border border-white/70 rounded-3xl p-8 shadow-[0_14px_40px_rgba(15,23,42,0.08)]"
    >
      <h1 className="text-2xl sm:text-3xl font-bold text-[#0F172A]">{title}</h1>
      <p className="text-[#475569] mt-2">{description}</p>
    </motion.div>
  );
}
