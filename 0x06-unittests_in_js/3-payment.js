const Utils = require('./utils');

function sendPaymentRequestToApi (totalamount, totalshipping) {
  const result = Utils.calculateNumber(totalamount, totalshipping);
  console.log(`The total is: ${result}`);
}

module.exports = sendPaymentRequestToApi;
