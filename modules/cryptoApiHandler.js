const apiReader = require('./apiReader')

function parsCriptoData(data) {
  const returnedData = [];
  try {
    data.forEach((item) => {
      const newItem = {
        id: item.id,
        rank: item.rank,
        symbol: item.symbol,
        name: item.name,
        priceUsd: item.priceUsd,
        change: item.changePercent24Hr
      }
      returnedData.push(newItem);
     })
  } catch (e) {
    console.log('error in function parsCriptoData parameter data is empty or no valid', e);
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
       returnedData.data = parsCriptoData(data.data);
    } else {
      returnedData.errors = true;
    }
    return returnedData;
  }
}