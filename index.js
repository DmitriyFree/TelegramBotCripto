const {Telegraf, Markup, Context, Scenes, Composer, session,} = require('telegraf');
const dot = require('dotenv');

const cryptoDataManager = require('./modules/api/cryptoDataManager');
const telegramAnswerHandler = require('./modules/answers/telegramAnswerHandler');

const cryptoWizard = require('./modules/scenes/cryptoScene');
const ratesWizard = require('./modules/scenes/ratesScene');
const converterWizard = require('./modules/scenes/converterScene');

const messeges = require('./modules/templates/messages');
const keyboards = require('./modules/templates/keyboards');

dot.config();

const token = process.env.TOKEN;

const bot = new Telegraf(token);

// Scenes
try {
  const scenes = new Scenes.Stage([cryptoWizard, ratesWizard, converterWizard]);
  bot.use(session());
  bot.use(scenes.middleware());
  bot.command('converter', Scenes.Stage.enter('converterWizard'))
  bot.command('crypto', Scenes.Stage.enter('cryptoWizard'));
  bot.command('rates', Scenes.Stage.enter('ratesWizard'));
} catch (e) {
  console.log('Error in scenes', e);
}

const commands = [
  {command: 'start', description: 'приветствие'},
  {command: 'rates', description: 'валюта'},
  {command: 'crypto', description: 'криптовалюта'},
  {command: 'converter', description: 'конвертер'},
  {command: 'help', description: 'справка'}
]

bot.start(async (ctx) => await ctx.replyWithHTML(messeges.start, keyboards.mainKeyboard));
bot.help(async (ctx) => await ctx.replyWithHTML(messeges.help));

bot.command('commands', async (ctx) => {
  try {
    return ctx.setMyCommands(commands);
  } catch (e) {
    console.log(e);
  }
});

bot.command('totalInfo', async (ctx) => {

  try {
    const response = await cryptoDataManager.getRatesByRank(200);
    if(response.errors) {
      ctx.telegram.sendMessage(chatId, messeges.readDataError);
    } else {
      telegramAnswerHandler.randerTotalRates(ctx, response.data);
    }
  } catch (e) {
    console.log('Error in totalInfo command', e);
    await ctx.reply(messeges.defaultError);
  }
})

bot.launch();

process.once('SIGINT', () => bot.stop('SIGINT'))


