import { useEffect, useState } from 'react';
import { Outlet, useNavigate, Link, NavLink } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { LayoutDashboard, LogOut, TrendingUp, UserPlus, Users, BookOpen, BarChart3, Settings, Menu, X } from 'lucide-react';
import { Toaster } from 'react-hot-toast';

export default function AdminLayout() {
  const navigate = useNavigate();
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const navItems = [
    { label: 'Dashboard', icon: LayoutDashboard, to: '/admin/dashboard', isRoute: true },
    { label: 'Registrations', icon: UserPlus, to: '/admin/registrations', isRoute: true },
    { label: 'Students', icon: Users, to: '/admin/students', isRoute: true },
    { label: 'Courses', icon: BookOpen },
    { label: 'Analytics', icon: BarChart3 },
    { label: 'Settings', icon: Settings, to: '/admin/settings', isRoute: true },
  ];

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/admin');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin');
  };

  const renderSidebar = (mobile = false) => (
    <div className={`w-72 h-full bg-white/75 backdrop-blur-xl border-r border-[#0F172A]/10 shadow-[0_18px_50px_rgba(15,23,42,0.08)] ${mobile ? '' : 'hidden md:flex'} flex-col`}>
      <div className="p-6 border-b border-[#0F172A]/10 flex items-center justify-between">
        <Link to="/admin/dashboard" className="flex items-center gap-3" onClick={() => setIsMobileSidebarOpen(false)}>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#06B6D4] flex items-center justify-center shadow-md">
            <TrendingUp className="text-white w-5 h-5" />
          </div>
          <span className="text-xl font-bold text-[#0F172A]">
            Admin<span className="text-[#2563EB]">Panel</span>
          </span>
        </Link>
        {mobile && (
          <button
            onClick={() => setIsMobileSidebarOpen(false)}
            className="p-2 rounded-lg text-[#64748B] hover:bg-white/70 transition-colors"
            aria-label="Close sidebar"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            if (item.isRoute) {
              return (
                <li key={item.label}>
                  <NavLink
                    to={item.to}
                    end
                    onClick={() => setIsMobileSidebarOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                        isActive
                          ? 'bg-gradient-to-r from-[#2563EB]/10 to-[#06B6D4]/10 text-[#2563EB] border border-[#2563EB]/20 shadow-sm'
                          : 'text-[#334155] hover:bg-white/80 hover:text-[#0F172A]'
                      }`
                    }
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </NavLink>
                </li>
              );
            }
            return (
              <li key={item.label}>
                <button
                  type="button"
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-[#334155] hover:bg-white/80 hover:text-[#0F172A] transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              </li>
            );
          })}
          <li className="pt-2">
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-[#DC2626] hover:bg-red-50 transition-colors font-medium"
            >
              <LogOut className="w-5 h-5" />
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );

  return (
    <div className="flex h-screen bg-gradient-to-b from-[#F8FAFC] to-[#EEF4FF] text-[#0F172A]">
      <Toaster position="top-right" toastOptions={{ className: 'glass text-text' }} />

      {renderSidebar()}

      <AnimatePresence>
        {isMobileSidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileSidebarOpen(false)}
              className="fixed inset-0 bg-[#0F172A]/30 z-40 md:hidden"
            />
            <motion.aside
              initial={{ x: -320, opacity: 0.95 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -320, opacity: 0.95 }}
              transition={{ type: 'spring', stiffness: 260, damping: 28 }}
              className="fixed top-0 left-0 h-full z-50 md:hidden"
            >
              {renderSidebar(true)}
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      <main className="flex-1 overflow-auto bg-transparent">
        <div className="md:hidden sticky top-0 z-30 px-4 py-3 border-b border-[#0F172A]/10 bg-white/75 backdrop-blur-xl flex items-center justify-between">
          <button
            onClick={() => setIsMobileSidebarOpen(true)}
            className="p-2 rounded-lg text-[#334155] hover:bg-white transition-colors"
            aria-label="Open sidebar"
          >
            <Menu className="w-5 h-5" />
          </button>
          <div className="font-semibold text-[#0F172A]">Admin Panel</div>
          <button onClick={handleLogout} className="p-2 rounded-lg text-[#DC2626] hover:bg-red-50 transition-colors" aria-label="Logout">
            <LogOut className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4 sm:p-6 md:p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
