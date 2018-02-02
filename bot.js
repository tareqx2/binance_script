const binance = require('node-binance-api');
let config = require('./config');
binance.options({
  'APIKEY': config.api_key,
  'APISECRET':config.api_secret,
});

let retry = setInterval(setLimitOrder,10000);

function setLimitOrder() {
  binance.sell("NANOBTC", config.xrb_amount, config.sell_price,{type:'LIMIT'}, (error, response) => {
    if(error) {
      console.log(error);
    } else {
      console.log(response);
      clearInterval(retry);
    }
  });
}
