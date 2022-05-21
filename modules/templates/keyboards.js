const {Markup} = require('telegraf');

const mainKeyboard = Markup
  .keyboard(
    [
      ['/totalInfo'],
      ['/rates', '/crypto'],
      ['/help'],
    ], {})
  .oneTime()

const ratesKeyboard = Markup
  .keyboard(
    [
      ['UAH', 'RUB'],
      [ 'EUR', 'PLN', 'KZT'],
      ['GBP', 'SEK'],
      ['/main']
    ], {})
  .oneTime();

const cryptoKeyboard = Markup
  .keyboard(
    [
      ['bitcoin', 'ethereum'],
      [ 'xrp', 'litecoin', 'cardano'],
      ['stellar', 'solana'],
      ['/main']
    ], {})
  .oneTime();

module.exports = {
  mainKeyboard,
  ratesKeyboard,
  cryptoKeyboard
}