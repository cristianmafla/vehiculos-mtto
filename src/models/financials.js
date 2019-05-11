const mongoose = require('mongoose')

const balanceSheetSchema = new mongoose.Schema({

    symbol: {
      type:String,
      trim:true
    },
    financials:[{
     reportDate: {
         type: Date,
         trim: true
     },
     grossProfit: {
         type: Number,
         trim: true
     },
     costOfRevenue: {
         type: Number,
         trim: true
     },
     operatingRevenue: {
         type: Number,
         trim: true
     },
     totalRevenue: {
         type: Number,
         trim: true
     },
     operatingIncome: {
         type: Number,
         trim: true
     },
     netIncome: {
         type: Number,
         trim: true
     },
     researchAndDevelopment: {
         type: Number,
         trim: true
     },
     operatingExpense: {
         type: Number,
         trim: true
     },
     currentAssets: {
         type: Number,
         trim: true
     },
     totalAssets: {
         type: Number,
         trim: true
     },
     totalLiabilities: {
         type: Number,
         trim: true
     },
     currentCash: {
         type: Number,
         trim: true
     },
     currentDebt: {
         type: Number,
         trim: true
     },
     totalCash: {
         type: Number,
         trim: true
     },
     totalDebt: {
         type: Number,
         trim: true
     },
     shareholderEquity: {
         type: Number,
         trim: true
     },
     cashChange: {
         type: Number,
         trim: true
     },
     cashFlow: {
         type: Number,
         trim: true
     },
     operatingGainsLosses: {
         type: String,
         trim: true
     }
   }]
})

const bS = mongoose.model('financials', balanceSheetSchema)

module.exports = bS
