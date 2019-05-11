const request = require('request')
const BalanceSheet = require('../models/balance_sheet.js')
require('../db/mongoose')

const getOne = (ticker,callback) => {

  request({
    url:`https://api.iextrading.com/1.0/stock/${ticker}/financials`,
    json:true
  },(error,response,body) => {

    if(!error && response.statusCode === 200){
      const bS = new BalanceSheet(body)
      const bash = bS.save()

      callback(undefined,body);
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
          const bS = new BalanceSheet(body)
          const bash = bS.save()

          callback(undefined,body);
          console.log(`Security ${body.symbol} saved`);
        }else{
          callback(`Unable to fetch ${ticker} income statement.`);
        }
      })
    },2000)
  })
  // let i = 0
  //
  // while(i<=ticker.length){
  //     request({
  //       url:`https://api.iextrading.com/1.0/stock/${ticker[i]}/financials`,
  //       json:true
  //     },(error,response,body) => {
  //
  //       if(!error && response.statusCode === 200){
  //         const bS = new BalanceSheet(body)
  //         const bash = bS.save()
  //
  //         callback(undefined,body);
  //         console.log(`Security ${body.symbol} saved`);
  //       }else{
  //         callback(`Unable to fetch ${body.symbol} income statement.`);
  //       }
  //     });
  //     i++;
  //   }
}

module.exports = {
  getOne,
  getAll
}
