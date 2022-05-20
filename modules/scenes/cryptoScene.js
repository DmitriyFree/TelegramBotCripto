const {Markup, Scenes, Composer} = require('telegraf');

const cryptoDataManager = require('../cryptoDataManager');
const telegramAnswerHandler = require('../telegramAnswerHandler');
const textCommandHelper = require('../textCommandHelper');

const texts = require('../templates/texts');

const composer1  = new Composer();

composer1.command('/crypto', async (ctx) => {
  await ctx.reply(texts.cryptoQuestion,
  Markup.keyboard([['bitcoin', 'ethereum'],[ 'xrp', 'litecoin', 'cardano'], ['stellar', 'solana'], ['/main']], {}).oneTime())
  return ctx.wizard.next();
});

const composer2  = new Composer();
composer2 .on('text', async (ctx) => {
  const text = ctx.message.text;
  if (text.includes('/') || !textCommandHelper.isCrypto(text)) {
    await ctx.reply('Формат не верный');
    await ctx.reply(texts.cryptoQuestion,
    Markup.keyboard([['bitcoin', 'ethereum'],[ 'xrp', 'litecoin', 'cardano'], ['stellar', 'solana'], ['/main']], {}).oneTime())
    return ctx.wizard.selectStep(1);
  } else {
    const data = await cryptoDataManager.getCrytocurrencyById(text);
    if (data.errors) {
      await ctx.telegram.sendMessage(chatId, "Ошыбка!!! Не удалось получить данные");
      await ctx.reply(texts.cryptoQuestion)
      return ctx.wizard.selectStep(1);
    } else {
      telegramAnswerHandler.randerCryptocurrency(ctx, data.data);
      return ctx.wizard.selectStep(1);
    }

  }
})
composer2 .action('repeat', async (ctx) => {
  await ctx.reply(texts.cryptoQuestion)
  return ctx.wizard.selectStep(1);
});
composer2 .action('exit', async (ctx) => {
  await ctx.replyWithHTML(texts.start, Markup.keyboard([
    ['/crypto'],
    ['/rates'],
  ]));
  return ctx.scene.leave();
});

const start = new Scenes.WizardScene('start', composer1 , composer2);

module.exports = start;

