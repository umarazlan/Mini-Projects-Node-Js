import https from 'https';
import  Readline, { createInterface }  from 'readline';
import chalk from 'chalk';

const rl = createInterface({
    input : process.stdin,
    output : process.stdout,
});

const apiKey = '30e56e3faa5f6060fb9423b3'
const URL = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`

const convertCurrency = (amount, rate)=>{
  return (amount * rate).toFixed(2);//? to fixed methed is use for only getting to value after decimal
}



https.get(URL,(response) => {
   //! By response we can get all three things like Data, end, error
   let data = '';
   response.on('data',(chunk) => {
       data += chunk;
   });
   response.on('end',() => {
       const rates = JSON.parse(data).conversion_rates;

       rl.question('Enter the amount in Usd:',(amount)=>{
        rl.question('Enter the target currency (eg:PKR,EUR,MYR):',(currency)=>{
             const rate = rates[currency.toUpperCase()];
             if (rate) {
                console.log(chalk.blue.bgRed.bold(`${amount} USD is approximately ${convertCurrency(amount,rate)} ${currency}`));
             }
             else
             {
                console.log (`Invalid Currency Code !!`)
             }
             rl.close();
        })
       })
   })
})

//! amount = 90 USD
//! currency = PKR
//! 90usd = how much PKR
//!  1 USD = ? PKR if you know
//? 90 USD = how much you will get 