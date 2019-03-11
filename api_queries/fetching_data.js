const request = require('request');

var getFinancials = (ticker,callback) => {
  request({
    url:`https://api.iextrading.com/1.0/stock/${ticker}/financials`,
    json:true
  },(error,response,body) => {

    if(!error && response.statusCode === 200){
      callback(undefined,body);
    }else{
      callback(`Unable to fetch ${ticker} income statement.`);
    }
  });
};

var getAll = (ticker,callback) => {
  var i = 0;
  while(i<=ticker.length){
    request({
      url:`https://api.iextrading.com/1.0/stock/${ticker[i]}/financials`,
      json:true
    },(error,response,body) => {

      if(!error && response.statusCode === 200){
        callback(undefined,body);
      }else{
        callback(`Unable to fetch ${ticker[i]} income statement.`);
      }
    });
    i++;
  }
};

module.exports = {
  getFinancials,
  getAll
};
