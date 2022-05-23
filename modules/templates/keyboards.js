const {Markup} = require('telegraf');

const mainKeyboard = Markup
  .keyboard(
    [
      ['/totalInfo'],
      ['/rates', '/crypto'],
      ['/converter'],
      ['/help'],
    ], {})
  .resize()
  .oneTime()


const ratesKeyboard = Markup
  .keyboard(
    [
      ['UAH', 'RUB'],
      [ 'EUR', 'PLN', 'KZT'],
      ['GBP', 'SEK'],
      ['Главное меню']
    ], {})
  .resize()
  .oneTime()



const cryptoKeyboard = Markup
  .keyboard(
    [
      ['bitcoin', 'ethereum'],
      [ 'litecoin', 'XRP', 'ADA'],
      ['DOGE', 'DOT'],
      ['Главное меню']
    ], {})
  .resize()
  .oneTime()

const converterKeyboard = Markup
  .keyboard(
    [
      ['Главное меню']
    ], {})
  .resize()
  .oneTime()

module.exports = {
  mainKeyboard,
  ratesKeyboard,
  cryptoKeyboard,
  converterKeyboard
}