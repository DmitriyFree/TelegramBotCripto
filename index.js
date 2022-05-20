const {Telegraf, Markup, Context, Scenes, Composer, session,} = require('telegraf');
const dot = require('dotenv');

const cryptoDataManager = require('./modules/cryptoDataManager');
const telegramAnswerHandler = require('./modules/telegramAnswerHandler');

const cryptoWizard = require('./modules/scenes/cryptoScene');
const ratesWizard = require('./modules/scenes/ratesScene');

const texts = require('./modules/templates/texts');

dot.config();

const token = process.env.TOKEN;

const bot = new Telegraf(token);

bot.start((ctx) => ctx.replyWithHTML(texts.start));

bot.help((ctx) => ctx.reply(texts.help));

bot.command('commands', async (ctx) => {
  try {
    return ctx.setMyCommands([
     {command: 'start', description: 'start'},
     {command: 'help', description: 'help'},
     {command: 'main', description: 'Главная панель'},
    ]);
  } catch (e) {
    console.log(e);
  }
});

bot.command('main', async (ctx) => {
  isCryptoHandler = true;
  return await ctx.reply('Основная панель выбере что интересует', Markup
    .keyboard([
      ['/totalInfo']
      ['/crypto'],
      ['/rates'],
    ])
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


// Scenes
const scenes = new Scenes.Stage([cryptoWizard, ratesWizard]);
bot.use(session());
bot.use(scenes.middleware());
bot.command("crypto", Scenes.Stage.enter("cryptoWizard"));
bot.command('rates', Scenes.Stage.enter('ratesWizard'));


bot.launch();

process.once('SIGINT', () => bot.stop('SIGINT'))


