/*
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/equity-screener', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
});
*/

import mongoose from '../config/database';

const Schema = new mongoose.Schema({
  symbol:{
    type:String,
    trim:true
  },
  companyName:{
    type:String,
    trim:true
  },
  exchange:{
    type:String,
    trim:true
  },
  industry:{
    type:String,
    trim:true
  },
  website:{
    type:String,
    trim:true
  },
  description:{
    type:String,
    trim:true
  },
  CEO:{
    type:String,
    trim:true
  },
  issueType:{
    type:String,
    trim:true
  },
  sector:{
    type:String,
    trim:true
  },
  tags:{
    0	:{
      type:String,
      trim:true
    },
    1	:{
      type:String,
      trim:true
    },
    2	:{
      type:String,
      trim:true
    },
  }
});

export const companyProfile = mongoose.model('companyProfile', Schema);

