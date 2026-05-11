import mongoose from 'mongoose';

const registrationSchema = new mongoose.Schema(
  {
    name: { 
      type: String, 
      required: [true, 'Name is required'],
      trim: true 
    },
    contact: { 
      type: String, 
      required: [true, 'Contact number is required'],
      trim: true
    },
    city: { 
      type: String, 
      required: [true, 'City is required'],
      trim: true
    },
    course: { 
      type: String, 
      required: [true, 'Course selection is required'],
      enum: ['Price Action Trading', 'Options Strategist', 'Advanced Trading']
    }
  },
  {
    timestamps: true // Automatically adds createdAt and updatedAt
  }
);

export default mongoose.model('Registration', registrationSchema);
