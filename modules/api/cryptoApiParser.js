const apiReader = require('./remoteApiReader')

function parsCriptoData(data) {
  const returnedData = {
    data: [],
    errors: false
  };
  try {
    data.forEach((item) => {
      const newItem = {
        id: item.id,
        rank: item.rank,
        symbol: item.symbol,
        name: item.name,
        priceUsd: item.priceUsd,
        capitalization: item.marketCapUsd,
        change: item.changePercent24Hr
      }
      returnedData.data.push(newItem)
     })
  } catch (e) {
    console.log('error in function parsCriptoData parameter data is empty or no valid', e)
    returnedData.errors = true
  }
  return returnedData
}

module.exports = {
  getCryptoData: async (apiUrl) => {
    const returnedData = {
      data: [],
      errors: false
    }
    const data = await apiReader(apiUrl)
    if (!data.errors) {
       const parsedData = parsCriptoData(data.data)
       if (parsedData.errors) returnedData.errors = true
       else returnedData.data = parsedData.data
    } else {
      returnedData.errors = true
    }
    return returnedData
  }
}