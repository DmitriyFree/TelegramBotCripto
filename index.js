const {Telegraf, Markup} = require('telegraf');
const dot = require('dotenv');

const cryptoDataManager = require('./modules/cryptoDataManager');
const telegramAnswerHandler = require('./modules/telegramAnswerHandler');
const textCommandHelper = require('./modules/textCommandHelper');

dot.config();

const token = process.env.TOKEN;

const bot = new Telegraf(token);


let isCryptoHandler = true;

bot.start((ctx) => ctx.replyWithHTML(
  'Я помогу узнать свежую информацию по криптовалюте а также ставку национальных валют и металов.'+
  '\n\nОзнакомиться с основными командами здесь /help для общего понимания как работает бот'+
  '\n\n<b>Основные команды</b>'+
  '\n/totalInfo - общая информация на даный момент'+
  '\n/rates - ставки бирж на валюту и драгметалы'+
  '\n/crypto - криптовалюты'+
  '\n\n/help - справка по командах')
);

bot.help((ctx) => ctx.reply(
  '\n\n/totalInfo - общая информация'+
  '\n/rates - ставки инфо'+
  '\n/crypto - криптовалюты инфо')

);

bot.command('main', async (ctx) => {
  isCryptoHandler = true;
  return await ctx.reply('Основная панель выбере что интересует', Markup
    .keyboard([
      ['/crypto'],
      ['/rates'],
    ])
    .oneTime()
    .resize()
  )
})

bot.command('crypto', (ctx) => {
  isCryptoHandler = true;
  return ctx.reply(
    'Введите название или символ криптовалюты или выберете на панели с права',
    Markup.keyboard([['bitcoin', 'ethereum'],[ 'xrp', 'litecoin', 'cardano'], ['stellar', 'solana'], ['/main']], {}).oneTime()
  )
})

bot.command('rates', (ctx) => {
  isCryptoHandler = false;
  return ctx.reply(
    'Введите название или символ валюты или мктала или выберете подходящее на панели с права',
    Markup.keyboard([['ukrainian-hryvnia', 'russian-ruble'],[ 'euro', 'polish-zloty', 'kazakhstani-tenge'], ['british-pound-sterling', 'swedish-krona'], ['/main']], {}).oneTime()
  )
})


bot.command('totalInfo', async (ctx) => {

  const response = await cryptoDataManager.getRatesByRank(192);

  if(response.errors) {
    ctx.telegram.sendMessage(chatId, "Ошыбка!!! Не удалось получить данные");
  } else {
    telegramAnswerHandler.randerTotalRates(ctx, response.data);
  }


})

bot.on('text', async (ctx) => {

  const text = ctx.message.text;

  if (isCryptoHandler) {
    if (textCommandHelper.isCrypto(text)) {
      const data = await cryptoDataManager.getCrytocurrencyById(text);
      if (data.errors) {
        ctx.telegram.sendMessage(chatId, "Ошыбка!!! Не удалось получить данные");
      } else {
        telegramAnswerHandler.randerCryptocurrency(ctx, data.data);
      }
    }
  } else {
    if (textCommandHelper.isRates(text)) {
      const response = await cryptoDataManager.getRatesById(text);
      if (response.errors) {
        ctx.telegram.sendMessage(chatId, "Ошыбка!!! Не удалось получить данные");
      } else {
        telegramAnswerHandler.reanderOneCoin(ctx, response.data);
      }
    }
  }
})

bot.launch();

process.once('SIGINT', () => bot.stop('SIGINT'))


