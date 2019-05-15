//COMPANIES PROFILE https://api.iextrading.com/1.0/
export const companyProfileUrl = symbol => `https://api.iextrading.com/1.0/stock/${symbol}/company`;
export const companyProfileUrlProxy = (port, symbol) => `http://localhost:${port}/?url=https://api.iextrading.com/1.0/stock/${symbol}/company`;

//COMPANIES DIVIDENS https://api.iextrading.com/1.0/
export const companyDividendsUrl = (symbol, range) => `https://api.iextrading.com/1.0/stock/${symbol}/dividends/${range}`;

//COMPANIES UPCOMING IPOs https://api.iextrading.com/1.0/
export const companyUpcomingIPO = (symbol, range) => `https://api.iextrading.com/1.0/stock/market/upcoming-ipos`;

