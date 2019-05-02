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
//
// userSchema.methods.toJSON = function (){
//     const user = this
//     const userObject = user.toObject()
//
//     delete userObject.password
//     delete userObject.tokens
//
//     return userObject
// }
//
// userSchema.methods.generateAuthToken = async function () {
//     const user = this
//     const token = jwt.sign({ _id: user._id.toString() }, 'thisismynewcourse')
//
//     user.tokens = user.tokens.concat({ token })
//     await user.save()
//
//     return token
// }
//
// userSchema.statics.findByCredentials = async (email, password) => {
//     const user = await User.findOne({ email })
//
//     if (!user) {
//         throw new Error('Unable to login')
//     }
//
//     const isMatch = await bcrypt.compare(password, user.password)
//
//     if (!isMatch) {
//         throw new Error('Unable to login')
//     }
//
//     return user
// }
//
// // Hash the plain text password before saving
// userSchema.pre('save', async function (next) {
//     const user = this
//
//     if (user.isModified('password')) {
//         user.password = await bcrypt.hash(user.password, 8)
//     }
//
//     next()
// })

const bS = mongoose.model('balanceSheet', balanceSheetSchema)

module.exports = bS
