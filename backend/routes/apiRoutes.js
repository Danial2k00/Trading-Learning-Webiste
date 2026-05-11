import express from 'express';
import { registerCourse, getRegistrations, deleteRegistration, getStats, getAdminDashboard, getAdminUsers } from '../controllers/registrationController.js';
import { loginAdmin, registerInitialAdmin } from '../controllers/authController.js';
import { protect } from '../middleware/auth.js';
import { validateRegistration } from '../middleware/validationMiddleware.js';

const router = express.Router();

// ==========================================
// REGISTRATION ROUTES
// ==========================================
// Apply validation middleware before controller
router.post('/register', validateRegistration, registerCourse);

// ==========================================
// ADMIN AUTH ROUTES
// ==========================================
router.post('/admin/login', loginAdmin);
router.post('/admin/seed', registerInitialAdmin);

// ==========================================
// PROTECTED ADMIN ROUTES
// ==========================================
router.get('/admin/registrations', protect, getRegistrations);
router.delete('/admin/registrations/:id', protect, deleteRegistration);
router.get('/admin/stats', protect, getStats);
router.get('/admin/dashboard', protect, getAdminDashboard);
router.get('/admin/users', protect, getAdminUsers);

export default router;
