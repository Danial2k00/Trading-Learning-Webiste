import Registration from '../models/Registration.js';
import { sendSuccess } from '../utils/apiResponse.js';

/**
 * @desc    Register a new student for a course
 * @route   POST /api/register
 * @access  Public
 */
export const registerCourse = async (req, res, next) => {
  try {
    const { name, contact, city, course } = req.body;
    
    // Create new registration
    const newRegistration = await Registration.create({
      name,
      contact,
      city,
      course
    });

    // Return standardized success response
    return sendSuccess(res, 201, 'Registration Successful', newRegistration);

  } catch (error) {
    // Pass to global error handler
    next(error);
  }
};

/**
 * @desc    Get all registrations
 * @route   GET /api/admin/registrations
 * @access  Private/Admin
 */
export const getRegistrations = async (req, res, next) => {
  try {
    const query = req.query.course ? { course: req.query.course } : {};
    const registrations = await Registration.find(query).sort({ createdAt: -1 });
    
    // Assuming admin dashboard expects just an array for now based on old code, 
    // or we can standardize this too if admin dashboard is updated.
    res.status(200).json(registrations);
  } catch (error) {
    next(error);
  }
};

export const deleteRegistration = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Registration.findByIdAndDelete(id);
    res.status(200).json({ message: 'Registration deleted successfully' });
  } catch (error) {
    next(error);
  }
};

export const getStats = async (req, res, next) => {
  try {
    const totalRegistrations = await Registration.countDocuments();
    
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const todayRegistrations = await Registration.countDocuments({ createdAt: { $gte: today } });

    const courseStats = await Registration.aggregate([
      { $group: { _id: "$course", count: { $sum: 1 } } }
    ]);

    const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    const monthlyGrowth = await Registration.countDocuments({ createdAt: { $gte: firstDayOfMonth } });

    res.status(200).json({
      totalRegistrations,
      todayRegistrations,
      courseStats,
      monthlyGrowth
    });
  } catch (error) {
    next(error);
  }
};

export const getAdminDashboard = async (req, res, next) => {
  try {
    const totalRegistrations = await Registration.countDocuments();

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const todayRegistrations = await Registration.countDocuments({ createdAt: { $gte: today } });

    const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    const monthlyGrowth = await Registration.countDocuments({ createdAt: { $gte: firstDayOfMonth } });

    res.status(200).json({
      success: true,
      data: {
        totalRegistrations,
        totalStudents: totalRegistrations,
        todayRegistrations,
        monthlyGrowth,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const getAdminUsers = async (req, res, next) => {
  try {
    const query = req.query.course ? { course: req.query.course } : {};
    const registrations = await Registration.find(query).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      data: registrations,
    });
  } catch (error) {
    next(error);
  }
};
