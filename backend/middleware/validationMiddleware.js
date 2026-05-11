import { sendError } from '../utils/apiResponse.js';

export const validateRegistration = (req, res, next) => {
  const { name, contact, city, course } = req.body;
  
  const errors = {};

  // Check missing body
  if (Object.keys(req.body).length === 0) {
    return sendError(res, 400, 'Validation Failed', { body: 'Request body is missing' });
  }

  // Validate Name
  if (!name || typeof name !== 'string' || name.trim() === '') {
    errors.name = 'Valid name is required';
  }

  // Validate Contact (assuming 10 digits as a standard)
  const phoneRegex = /^[0-9]{10}$/;
  if (!contact || !phoneRegex.test(contact)) {
    errors.contact = 'Valid 10-digit contact number is required';
  }

  // Validate City
  if (!city || typeof city !== 'string' || city.trim() === '') {
    errors.city = 'City is required';
  }

  // Validate Course
  const validCourses = ['Price Action Trading', 'Options Strategist', 'Advanced Trading'];
  if (!course || !validCourses.includes(course)) {
    errors.course = 'Valid course selection is required';
  }

  // If there are validation errors, return 400 response
  if (Object.keys(errors).length > 0) {
    return sendError(res, 400, 'Validation Failed', errors);
  }

  next();
};
