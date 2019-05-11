const request = require('request')
const financials = require('../models/financials.js')
require('../db/mongoose')

const getOne = (ticker,callback) => {
  request({
    url:`https://api.iextrading.com/1.0/stock/${ticker}/financials`,
    json:true
  },(error,response,body) => {
    if(!error && response.statusCode === 200){
      const bS = new financials(body)
      const bash = bS.save()

      callback(undefined,body)
      console.log(`Security ${body.symbol} saved`)
    }else{
      callback(`Unable to fetch ${body.symbol} financial reports.`)
    }
  })
}

const getAll = (tickers,callback) => {
  tickers.forEach((ticker)=>{
    setTimeout(()=>{
      request({
        url:`https://api.iextrading.com/1.0/stock/${ticker}/financials`,
        json:true
      },(error,response,body) => {

        if(!error && response.statusCode === 200){
          const bS = new financials(body)
          const bash = bS.save()

          callback(undefined,body);
          console.log(`Security ${body.symbol} saved`);
        }else{
          callback(`Unable to fetch ${ticker} income statement.`);
        }
      })
    },0)
  })
}

module.exports = {
  getOne,
  getAll
}
