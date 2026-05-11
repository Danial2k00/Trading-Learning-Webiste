import { useState, useEffect } from 'react';
import { Users, TrendingUp, Calendar, BookOpen, Trash2, Download, Search } from 'lucide-react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import axios from 'axios';


export default function AdminDashboard() {
  const [stats, setStats] = useState(null);
  const [registrations, setRegistrations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCourse, setFilterCourse] = useState('');

  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

  const fetchData = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const config = { headers: { Authorization: `Bearer ${token}` } };
      
      const [statsRes, regRes] = await Promise.all([
        axios.get(`${API_URL}/admin/dashboard`, config),
        axios.get(`${API_URL}/admin/users${filterCourse ? `?course=${filterCourse}` : ''}`, config)
      ]);

      setStats(statsRes.data?.data || null);
      setRegistrations(regRes.data?.data || []);
    } catch (error) {
      toast.error('Failed to fetch data');
      if (error.response?.status === 401) {
        localStorage.removeItem('adminToken');
        window.location.href = '/admin';
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterCourse]);

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this record?')) return;
    
    try {
      const token = localStorage.getItem('adminToken');
      await axios.delete(`${API_URL}/admin/registrations/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      toast.success('Deleted successfully');
      setRegistrations(registrations.filter(r => r._id !== id));
      // update stats basically
      setStats(prev => ({ ...prev, totalRegistrations: prev.totalRegistrations - 1 }));
    } catch (error) {
      toast.error('Failed to delete');
    }
  };

  const exportToExcel = () => {
    // Dynamic import to keep bundle small if we used a library, 
    // but let's implement simple CSV download for ease without adding heavy dependencies
    const headers = ['Date', 'Name', 'Phone', 'City', 'Course'];
    const csvContent = [
      headers.join(','),
      ...filteredRegistrations.map(r => [
        new Date(r.createdAt).toLocaleDateString(),
        `"${r.name || r.fullName || ''}"`,
        `"${r.contact || r.contactNumber || ''}"`,
        `"${r.city}"`,
        `"${r.course}"`
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", `registrations_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredRegistrations = registrations.filter(r => 
    (r.name || r.fullName || '').toLowerCase().includes(searchTerm.toLowerCase()) || 
    (r.contact || r.contactNumber || '').includes(searchTerm)
  );

  if (loading) {
    return (
      <div className="flex h-full items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#2563EB]" />
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="space-y-6"
    >
      <div className="bg-white/60 backdrop-blur-xl border border-white/70 rounded-3xl p-6 shadow-[0_10px_40px_rgba(15,23,42,0.06)]">
        <h1 className="text-3xl font-bold text-[#0F172A]">Dashboard Overview</h1>
        <p className="text-[#475569] mt-1">Track registrations, students, and growth with a clean premium view.</p>
      </div>

      {/* Stats Cards */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.08 } },
        }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
      >
        <motion.div
          variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
          whileHover={{ y: -3 }}
          className="bg-white/70 backdrop-blur-xl p-6 rounded-2xl border border-white/70 shadow-[0_12px_35px_rgba(15,23,42,0.08)]"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-[#2563EB]/10 flex items-center justify-center">
              <Users className="w-6 h-6 text-[#2563EB]" />
            </div>
          </div>
          <div className="text-3xl font-bold text-[#0F172A] mb-1">{stats?.totalRegistrations || 0}</div>
          <div className="text-[#64748B] text-sm">Total Registrations</div>
        </motion.div>

        <motion.div
          variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
          whileHover={{ y: -3 }}
          className="bg-white/70 backdrop-blur-xl p-6 rounded-2xl border border-white/70 shadow-[0_12px_35px_rgba(15,23,42,0.08)]"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-[#10B981]/10 flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-[#10B981]" />
            </div>
          </div>
          <div className="text-3xl font-bold text-[#0F172A] mb-1">{stats?.totalStudents || 0}</div>
          <div className="text-[#64748B] text-sm">Total Students</div>
        </motion.div>

        <motion.div
          variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
          whileHover={{ y: -3 }}
          className="bg-white/70 backdrop-blur-xl p-6 rounded-2xl border border-white/70 shadow-[0_12px_35px_rgba(15,23,42,0.08)]"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-[#06B6D4]/10 flex items-center justify-center">
              <Calendar className="w-6 h-6 text-[#06B6D4]" />
            </div>
          </div>
          <div className="text-3xl font-bold text-[#0F172A] mb-1">{stats?.todayRegistrations || 0}</div>
          <div className="text-[#64748B] text-sm">Today's Registrations</div>
        </motion.div>

        <motion.div
          variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
          whileHover={{ y: -3 }}
          className="bg-white/70 backdrop-blur-xl p-6 rounded-2xl border border-white/70 shadow-[0_12px_35px_rgba(15,23,42,0.08)]"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-[#2563EB]/10 flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-[#2563EB]" />
            </div>
          </div>
          <div className="text-3xl font-bold text-[#0F172A] mb-1">{stats?.monthlyGrowth || 0}</div>
          <div className="text-[#64748B] text-sm">Monthly Growth</div>
        </motion.div>
      </motion.div>

      {/* Data Table */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="bg-white/75 backdrop-blur-xl rounded-3xl border border-white/70 overflow-hidden shadow-[0_14px_40px_rgba(15,23,42,0.08)]"
      >
        <div className="p-5 sm:p-6 border-b border-[#E2E8F0] flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <h2 className="text-xl font-bold text-[#0F172A]">Recent Registrations</h2>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94A3B8]" />
              <input 
                type="text" 
                placeholder="Search name/phone..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2.5 bg-white/80 border border-[#CBD5E1] rounded-xl text-sm text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 focus:border-[#2563EB] transition-colors min-w-[220px]"
              />
            </div>
            
            <select 
              value={filterCourse}
              onChange={(e) => setFilterCourse(e.target.value)}
              className="px-4 py-2.5 bg-white/80 border border-[#CBD5E1] rounded-xl text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 focus:border-[#2563EB] appearance-none"
            >
              <option value="">All Courses</option>
              <option value="Price Action Trading">Price Action</option>
              <option value="Options Strategist">Options Strategist</option>
              <option value="Advanced Trading">Masterclass</option>
            </select>

            <button 
              onClick={exportToExcel}
              className="flex items-center gap-2 px-4 py-2.5 bg-[#2563EB]/10 text-[#2563EB] border border-[#2563EB]/20 rounded-xl text-sm font-medium hover:bg-[#2563EB] hover:text-white transition-colors"
            >
              <Download className="w-4 h-4" /> Export CSV
            </button>
          </div>
        </div>

        <div className="overflow-x-auto max-h-[520px]">
          <table className="w-full text-left border-collapse">
            <thead className="sticky top-0 z-10">
              <tr className="bg-[#F8FAFC] text-[#64748B] text-sm border-b border-[#E2E8F0]">
                <th className="p-4 font-semibold">Name</th>
                <th className="p-4 font-semibold">Contact</th>
                <th className="p-4 font-semibold">City</th>
                <th className="p-4 font-semibold">Course</th>
                <th className="p-4 font-semibold">Date</th>
                <th className="p-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {filteredRegistrations.length > 0 ? (
                filteredRegistrations.map((reg) => (
                  <tr key={reg._id} className="border-b border-[#F1F5F9] hover:bg-[#F8FAFC] transition-colors">
                    <td className="p-4 font-medium text-[#0F172A]">{reg.name || reg.fullName}</td>
                    <td className="p-4 text-[#334155]">{reg.contact || reg.contactNumber}</td>
                    <td className="p-4 text-[#334155]">{reg.city}</td>
                    <td className="p-4">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-[#06B6D4]/10 text-[#0EA5B7] border border-[#06B6D4]/20">
                        {reg.course}
                      </span>
                    </td>
                    <td className="p-4 text-[#334155]">{new Date(reg.createdAt).toLocaleDateString()}</td>
                    <td className="p-4 text-right">
                      <button 
                        onClick={() => handleDelete(reg._id)}
                        className="p-2 rounded-lg text-red-500 hover:bg-red-50 transition-colors"
                        title="Delete Record"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="p-8 text-center text-[#64748B]">
                    No registrations found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </motion.div>
    </motion.div>
  );
}
