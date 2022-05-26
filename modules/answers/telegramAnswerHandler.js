const { Markup } = require("telegraf")
const messages = require('../templates/messages')

function findRates(data, symbol, isFiat) {

  if (isFiat) {
    const resp = data.find((item) => item.symbol === symbol)
    const price = (1 / resp.rate).toFixed(2)
    return price
  } else {
    const resp = data.find((item) => item.symbol === symbol)
    const price = (1 * resp.rate).toFixed(2)
    return price
  }

}
function parseNumber(value) {
  let result = value
  if (result.length == 1) result = ' ' + result + ' '
  return result
}

function parseSymbol(value) {
  let count = 5 - parseInt(value.length)
  let result = value
  while (count > 0) {
    result = result + '  '
    count = count - 1
  }
  return result


}

function parseCap(value) {

  let result = parseInt(value)+''
  const length = result.length
  if(length > 9) {
    const full = result.slice(0, -7)
    const second = full.slice(-2)
    const first = full.slice(0, -2)
    result = first + ',' + second + ' B'
  }
  if(length > 6 && length < 10) {
    const full = result.slice(0, -4)
    const second = full.slice(-2)
    const first = full.slice(0, -2)
    result = first + ',' + second + ' M'
  }
  if(length < 7) {
    const full = result.slice(0, -1)
    const second = full.slice(-2)
    const first = full.slice(0, -2)
    result = first + ',' + second + ' K'
  }

  return result;
}

function paresPrice(price) {
  let indent = '       '
  return indent + (1 * price).toFixed(2)
}

module.exports = {

  randerCryptocurrency: async (ctx, data) => {
    try {
      const stringAnswer =
      `✅  <b>${data.name}</b>`+
      `\nСимвол: ${data.symbol}`+
      `\nРанг: ${data.rank}`+
      `\nЦена: ${(1 * data.priceUsd).toFixed(2)}`+
      `\nИзменение: ${(1 * data.change).toFixed(2)}%`+
      `\nRапитализация ${(1 * data.capitalization).toFixed(0)}`
      ctx.replyWithHTML(stringAnswer, Markup.inlineKeyboard([[
      Markup.button.callback('Продолжыть', 'repeat'),
      Markup.button.callback('Выйти в главное меню', 'exit'),
      ]]));
    } catch (e) {
      console.log('Render cryptocurrencyItem error', e);
      await ctx.reply(messages.defaultError);
    }


  },

  reanderOneCoin: async (ctx, data) => {

    try {
      const stringAnswer =
      `✅  Название: ${data.id}`+
      `\nСимвол: ${data.symbol}`+
      `\nЦена: 1USD => ${(1 / data.rate).toFixed(2)} ${data.symbol}`
      await ctx.reply(stringAnswer, Markup.inlineKeyboard([[
      Markup.button.callback('Продолжыть', 'repeat'),
      Markup.button.callback('Выйти в главное меню', 'exit'),
      ]]));
    } catch (e) {
      console.log('Render rateItem error', e)
      await ctx.reply(messages.defaultError)
    }

  },

  randerTotalRates: async (ctx, data) => {

    try {
      const stringAnswer =
        `<b>Общая статистика</b> \n\n<b>Валюты</b>`+
        `\nГривня 🇺🇦: 1USD = ${findRates(data, 'UAH', true)} UAH`+
        `\nРубль 🇷🇺: 1USD = ${findRates(data, 'RUB', true)} RUB`+
        `\nЕвро: 🇪🇺: 1USD = ${findRates(data, 'EUR', true)} EUR`+
        `\nФунт: 🇬🇧: 1USD = ${findRates(data, 'GBP', true)} GBR`+
        `\n\n<b>Криптовалюты цены в USD</b>`+
        `\nБиткоин: 1BTC = ${findRates(data, 'BTC', false)}`+
        `\nЕфириум: 1ETH = ${findRates(data, 'ETH', false)}`+
        `\nЛайткоин: 1LTC = ${findRates(data, 'LTC', false)}`+
        `\n\n<b>Металы унция в USD</b>`+
        `\nЗолото: 1XAU = ${findRates(data, 'XAU', false)}`+
        `\nСеребро: 1XAG = ${findRates(data, 'XAG', false)}`+
        `\nПаладий: 1XPD = ${findRates(data, 'XPD', false)}`+
        `\nПлатина: 1XPT = ${findRates(data, 'XPT', false)}`
      await ctx.replyWithHTML(stringAnswer)
    } catch (e) {
      console.log('Render totalInfo error', e)
      await ctx.reply(messages.defaultError)
    }


  },

  renderTop20Crypto: async (ctx, data) => {
    let answer = '<b>Топ 20 криптовалют по капиталу</b>\n\n'+
                '<b>#  Символ  Капитал  Цена</b>'
    data.forEach((item) => {
      answer = answer + `\n${parseNumber(item.rank)} ${parseSymbol(item.symbol)}  ${parseCap(item.capitalization)} ${paresPrice(item.priceUsd)}`
    })
    ctx.replyWithHTML(answer)
  }
}