const request = require('request')
const CompanyProfile = require('../models/company_profile')

require('../db/mongoose')

const getOne = (ticker,callback) => {
  request({
    url:`https://api.iextrading.com/1.0/stock/${ticker}/company`,
    json:true
  },(error,response,body) => {
    if(!error && response.statusCode === 200){
      const cP = new CompanyProfile(body)
      const coPro = cP.save()

      callback(undefined,body)
      console.log(`Security ${body.symbol} saved`)
    }else{
      callback(`Unable to fetch ${body.symbol} company profile.`)
    }
  })
}

const getAll = (ticker,callback) => {
  let i = 0

  while(i<=ticker.length){
      request({
        url:`https://api.iextrading.com/1.0/stock/${ticker[i]}/company`,
        json:true
      },(error,response,body) => {

        if(!error && response.statusCode === 200){
          const cP = new CompanyProfile(body)
          const coPro = cP.save()
          console.log(coPro)

          callback(undefined,body);
          console.log(`Security ${body.symbol} saved`);
        }else{
          callback(`Unable to fetch ${body.symbol} company profile.`);
        }
      });
      i++;
      // if(i%50===0){
      //    setTimeout(() => {
      //      console.log('____________________________Waiting to not be blocked________________________')
      //    }, 30000)
      // }
    }
}

module.exports = {getOne,getAll}
