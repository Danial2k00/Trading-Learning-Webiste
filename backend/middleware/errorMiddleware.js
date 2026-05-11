import { sendError } from '../utils/apiResponse.js';

export const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

export const errorHandler = (err, req, res, next) => {
  // If status is 200 but we reached error handler, change to 500
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  
  console.error(`[Error]: ${err.message}`);
  
  return sendError(res, statusCode, err.message, process.env.NODE_ENV === 'production' ? null : err.stack);
}