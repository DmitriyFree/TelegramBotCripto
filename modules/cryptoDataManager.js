const cryptoApiHandler = require("./cryptoApiParser");
const ratesApiHandler = require('./ratesApiParser');
const dot = require('dotenv');

dot.config();

function cryptoThrottle() {

  const url = `${process.env.URLAPI}/assets`;
  const dalay = process.env.DELAY || 60000;
  let isThrottle = false;
  const savedCryptoData = {
    data: [],
    errors: false
  };

  async function wrapper() {

    if(isThrottle) {
      return savedCryptoData;
    }
    isThrottle = true;
    const responseData = await cryptoApiHandler.getCryptoData(url);
    if (responseData.errors) {
      savedCryptoData.errors = true;
    } else {
      savedCryptoData.data = responseData.data;
    }
    setTimeout(()=>{
      isThrottle = false;
    }, dalay)
    return savedCryptoData;
  }
  return wrapper;

}

function ratesThrottle() {

  const url = `${process.env.URLAPI}/rates`;
  const dalay = process.env.DELAY || 60000;
  let isThrottle = false;
  const savedCryptoData = {
    data: [],
    errors: false
  };

  async function wrapper() {

    if(isThrottle) {
      return savedCryptoData;
    }
    isThrottle = true;
    const responseData = await ratesApiHandler.getCryptoData(url);
    if (responseData.errors) {
      savedCryptoData.errors = true;
    } else {
      savedCryptoData.data = responseData.data;
    }
    setTimeout(()=>{
      isThrottle = false;
    }, dalay)
    return savedCryptoData;
  }
  return wrapper;

}

module.exports = {
  async getCryptocurrencyByRank(maxRank) {
    const throtlle = cryptoThrottle();
    const response = await throtlle();
    const returnedData = {
      data: [],
      errors: false
    }
    if (response.errors) {
      returnedData.errors = true;
    }
    for (let i = 0; i < response.data.length; i++) {
        if (i >= maxRank) break;
        returnedData.data.push(response.data[i]);
    }
    return returnedData;
  },
  async getCrytocurrencyById(id){
    const throtlle = cryptoThrottle();
    const response = await throtlle();
    const returnedData = {
      data: [],
      errors: false
    }
    if (response.errors) {
      returnedData.errors = false;
    } else {
      returnedData.data = response.data.find((item) => item.id === id);
    }
    return returnedData;
  },
  async getRatesByRank(maxRank) {
    const throtlle = ratesThrottle();
    const response = await throtlle();
    const returnedData = {
      data: [],
      errors: false
    }
    if (response.errors) {
      returnedData.errors = true;
    }

    for (let i = 0; i < response.data.length; i++) {
        if (i >= maxRank) break;
        returnedData.data.push(response.data[i]);
    }
    return returnedData;
  },
  async getRatesById(id) {
    const throtlle = ratesThrottle();
    const response = await throtlle();
    const returnedData = {
      data: [],
      errors: false
    }
    if (response.errors) {
      returnedData.errors = false;
    } else {
      const list = response.data;
      returnedData.data = list.find((item) => item.id === id || item.symbol === id);
    }
    return returnedData;
  }
};