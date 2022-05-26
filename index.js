const {Telegraf, Scenes, session,} = require('telegraf')
const dot = require('dotenv')

const cryptoDataManager = require('./modules/api/cryptoDataManager')
const telegramAnswerHandler = require('./modules/answers/telegramAnswerHandler')

const cryptoWizard = require('./modules/scenes/cryptoScene')
const ratesWizard = require('./modules/scenes/ratesScene')
const converterWizard = require('./modules/scenes/converterScene')

const messages = require('./modules/templates/messages')
const keyboards = require('./modules/templates/keyboards')

dot.config()

const token = process.env.TOKEN

const bot = new Telegraf(token)

// Scenes
try {
  const scenes = new Scenes.Stage([cryptoWizard, ratesWizard, converterWizard]);
  bot.use(session())
  bot.use(scenes.middleware())
  bot.command('converter', Scenes.Stage.enter('converterWizard'))
  bot.command('crypto', Scenes.Stage.enter('cryptoWizard'))
  bot.command('rates', Scenes.Stage.enter('ratesWizard'))
} catch (e) {
  console.log('Error in scenes', e)
}

const commands = [
  {command: 'start', description: 'приветствие'},
  {command: 'totalinfo', description: 'основные валюты и криптовальты'},
  {command: 'cryptotop20', description: 'топ 20 криптовалют по капитализации'},
  {command: 'rates', description: 'валюта'},
  {command: 'crypto', description: 'криптовалюта'},
  {command: 'converter', description: 'конвертер валют'},
  {command: 'help', description: 'справка'}
]

bot.start(async (ctx) => await ctx.replyWithHTML(messages.start, keyboards.mainKeyboard))
bot.help(async (ctx) => await ctx.replyWithHTML(messages.help))

bot.command('commands', async (ctx) => {
  try {
    return ctx.setMyCommands(commands)
  } catch (e) {
    console.log(e)
  }
});


bot.command('totalinfo', async (ctx) => {

  try {
    const response = await cryptoDataManager.getRatesByRank(200)

    if(response.errors) {
      ctx.telegram.sendMessage(chatId, messages.readDataError)
    } else {
      telegramAnswerHandler.randerTotalRates(ctx, response.data)
    }
  } catch (e) {
    console.log('Error in totalInfo command', e)
    await ctx.reply(messeges.defaultError)
  }
})

bot.command('cryptotop20', async (ctx) => {
  try {
    const response = await cryptoDataManager.getCryptocurrencyByRank(20);

    if(response.errors) {
      ctx.telegram.sendMessage(chatId, messages.readDataError)
    } else {
      telegramAnswerHandler.renderTop20Crypto(ctx, response.data)
    }
  } catch (e) {
    console.log('Error in cryptoTop', e)
    await ctx.reply(messages.defaultError)
  }
})


bot.launch()

process.once('SIGINT', () => bot.stop('SIGINT'))


