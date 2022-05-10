const cryptoApiHandler = require("./cryptoApiHandler");
const dot = require('dotenv');

dot.config();

function cryptoThrottle() {

  const url = process.env.URL;
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
    for (let i = 0; i < dataList.length; i++) {
        if (i >= maxRank) break;
        returnedData.data.push(dataList[i]);
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
  }
};