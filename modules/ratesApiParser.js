const apiReader = require('./remoteApiReader')

function parsRates(data) {

  const returnedData = {
    data: [],
    errors: false
  };
  try {
    data.forEach((item) => {
      const newItem = {
        id: item.id,
        symbol: item.symbol,
        currencySymbol: item.currencySymbol,
        rate: item.rateUsd,
        type: item.type
      }
      returnedData.data.push(newItem);
     })
  } catch (e) {
    console.log('error in function parsNationalRates parameter data is empty or no valid', e);
    returnedData.errors = false;
  }
  return returnedData;
}

module.exports = {
  getCryptoData: async (url) => {
    const returnedData = {
      data: [],
      errors: false
    }
    const data = await apiReader(url);
    if (!data.errors) {
      const parsedData = parsRates(data.data);
      if (parsedData.errors) {
        returnedData.errors = true;
      } else {
        returnedData.data = parsedData.data;
      }

    } else {
      returnedData.errors = true;
    }
    return returnedData;
  }
}