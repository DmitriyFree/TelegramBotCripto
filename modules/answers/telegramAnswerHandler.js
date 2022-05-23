const { Markup } = require("telegraf");
const messages = require('../templates/messages');

function findRates(data, symbol, isFiat) {

  if (isFiat) {
    const resp = data.find((item) => item.symbol === symbol);
    const price = (1 / resp.rate).toFixed(2);
    return price;
  } else {
    const resp = data.find((item) => item.symbol === symbol);
    const price = (1 * resp.rate).toFixed(2);
    return price;
  }

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
      `\nRапитализация ${(1 * data.capitalization).toFixed(0)}`;
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
      `\nЦена: 1USD => ${(1 / data.rate).toFixed(2)} ${data.symbol}`;
      await ctx.reply(stringAnswer, Markup.inlineKeyboard([[
      Markup.button.callback('Продолжыть', 'repeat'),
      Markup.button.callback('Выйти в главное меню', 'exit'),
      ]]));
    } catch (e) {
      console.log('Render rateItem error', e);
      await ctx.reply(messages.defaultError);
    }

  },

  randerTotalRates: async (ctx, data) => {

    try {
      const stringAnswer =
        `<b>Общая статистика</b> \n\n<b>Валюты</b>`+
        `\nГривня 🇺🇦: 1USD = ${findRates(data, 'UAH', true)} UAH`+
        `\nРубль 🇷🇺: 1USD = ${findRates(data, 'RUB', true)} RUB`+
        `\nЕвро: 🇪🇺: 1USD = ${findRates(data, 'EUR', true)} EUR`+
        `\n\n<b>Криптовалюты цены в USD</b>`+
        `\nБиткоин: 1BTC = ${findRates(data, 'BTC', false)}`+
        `\nЕфириум: 1ETH = ${findRates(data, 'ETH', false)}`+
        `\nЛайткоин: 1LTC = ${findRates(data, 'LTC', false)}`+
        `\n\n<b>Металы</b>`+
        `\nЗолото: 1XAU = ${findRates(data, 'XAU', false)}`+
        `\nСеребро: 1XAG = ${findRates(data, 'XAG', false)}`
      await ctx.replyWithHTML(stringAnswer);
    } catch (e) {
      console.log('Render totalInfo error', e);
      await ctx.reply(messages.defaultError);
    }


  }
}