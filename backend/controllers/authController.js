import Admin from '../models/Admin.js';
import jwt from 'jsonwebtoken';

const DEFAULT_ADMIN_USERNAME = 'admin';
const DEFAULT_ADMIN_PASSWORD = 'admin123';

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET || 'super_secret_jwt_key_here', {
    expiresIn: '30d',
  });
};

export const loginAdmin = async (req, res) => {
  try {
    const { username, password } = req.body;
    
    const admin = await Admin.findOne({ username });

    if (admin && (await admin.matchPassword(password))) {
      res.status(200).json({
        success: true,
        token: generateToken(admin._id),
        admin: {
          _id: admin._id,
          username: admin.username,
        },
      });
    } else {
      res.status(401).json({ success: false, message: 'Invalid Credentials' });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error logging in', error: error.message });
  }
};

export const registerInitialAdmin = async (req, res) => {
  try {
    const { username, password } = req.body;
    
    const adminExists = await Admin.findOne({ username });
    if (adminExists) {
      return res.status(400).json({ success: false, message: 'Admin already exists' });
    }

    const admin = await Admin.create({
      username,
      password
    });

    if (admin) {
      res.status(201).json({
        success: true,
        token: generateToken(admin._id),
        admin: {
          _id: admin._id,
          username: admin.username,
        },
      });
    } else {
      res.status(400).json({ success: false, message: 'Invalid admin data' });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error registering admin', error: error.message });
  }
};

export const ensureDefaultAdmin = async () => {
  const existingAdmin = await Admin.findOne({ username: DEFAULT_ADMIN_USERNAME });
  if (!existingAdmin) {
    await Admin.create({
      username: DEFAULT_ADMIN_USERNAME,
      password: DEFAULT_ADMIN_PASSWORD,
    });
    console.log('Default admin created: admin');
  }
};
