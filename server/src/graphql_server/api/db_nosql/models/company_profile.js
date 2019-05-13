import mongoose from '../config/database';

const schema = new mongoose.Schema({
  symbol:{
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true,
    validate: () => { }
  },
  companyName:{
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate: () => { }
  },
  exchange:{
    type: String,
    trim: true,
    lowercase: true,
    validate: () => { }
  },
  industry:{
    type: String,
    trim: true,
    lowercase: true,
    validate: () => { }
  },
  website:{
    type: String,
    trim: true,
    lowercase: true,
    validate: () => { }
  },
  description:{
    type: String,
    trim: true,
    lowercase: true,
    validate: () => { }
  },
  CEO:{
    type: String,
    trim: true,
    lowercase: true,
    validate: () => { }
  },
  issueType:{
    type: String,
    trim: true,
    lowercase: true,
    validate: () => { }
  },
  sector:{
    type: String,
    trim: true,
    lowercase: true,
    validate: () => { }
  },
  tags:{
    type: [String],
    default: ['default-value1', 'default-value2'],
  }
});

export const companyProfile = mongoose.model('companyProfile', schema);

