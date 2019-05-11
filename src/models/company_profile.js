const mongoose = require('mongoose')

const companyProfileSchema = new mongoose.Schema({
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
})

const cP = mongoose.model('companyProfile', companyProfileSchema)

module.exports = cP
