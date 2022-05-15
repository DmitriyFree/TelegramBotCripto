const axios = require('axios').default

module.exports  = async (apiUrl) => {
  const resultObj = {
    data: [],
    errors: false
  }
  await axios.get(apiUrl)
    .then((response) => {
      const data = response.data.data
      resultObj.data = data;
    })
    .catch ((error) => {
      console.log('Failed to get data from remote api', error)
      resultObj.errors = true
    })
    return resultObj;

}