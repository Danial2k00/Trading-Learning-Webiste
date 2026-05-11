import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

// Public Components
import AnnouncementBar from './components/AnnouncementBar';
import Header from './components/Header';
import Footer from './components/Footer';

// Public Pages
import Home from './pages/Home';
import Courses from './pages/Courses';
import FreeTrading from './pages/FreeTrading';
import Testimonials from './pages/Testimonials';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Register from './pages/Register';

// Admin Components
import AdminLayout from './pages/admin/AdminLayout';
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminProtectedRoute from './pages/admin/AdminProtectedRoute';
import AdminSectionPlaceholder from './pages/admin/AdminSectionPlaceholder';

const PublicLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* SECTION 1: Announcement Bar - Top of page */}
      <AnnouncementBar />
      
      {/* SECTION 2: Header/Navbar - Below announcement */}
      <Header />
      
      {/* SECTION 3: Main Content - Below both header sections */}
      <main className="flex-grow pt-[120px]">
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <Toaster position="top-right" toastOptions={{ className: 'glass text-text' }} />
      <Routes>
        {/* Public Routes */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/free-trading" element={<FreeTrading />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLogin />} />
        <Route element={<AdminProtectedRoute />}>
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route
              path="students"
              element={<AdminSectionPlaceholder title="Students" description="Manage and review student profiles and progress in one place." />}
            />
            <Route
              path="registrations"
              element={<AdminSectionPlaceholder title="Registrations" description="Track and manage all course registrations with filtering and exports." />}
            />
            <Route
              path="settings"
              element={<AdminSectionPlaceholder title="Settings" description="Configure platform preferences, admin controls, and account security." />}
            />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
