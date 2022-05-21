const {Markup, Scenes, Composer} = require('telegraf');

const cryptoDataManager = require('../api/cryptoDataManager');
const telegramAnswerHandler = require('../answers/telegramAnswerHandler');
const textCommandHelper = require('../helpers/textCommandHelper');

const messeges = require('../templates/messeges');
const keyboards = require('../templates/keyboards')

const composer1  = new Composer();

composer1.command('/crypto', async (ctx) => {
  await ctx.reply(messeges.cryptoQuestion, keyboards.cryptoKeyboard)
  return ctx.wizard.next();
});

const composer2  = new Composer();
composer2 .on('text', async (ctx) => {
  const text = ctx.message.text;
  if (text.includes('/')) return ctx.scene.leave();
  if (!textCommandHelper.isCrypto(text)) {
    await ctx.reply(messeges.cryptoError);
    await ctx.reply(messeges.cryptoQuestion, keyboards.cryptoKeyboard)
    return ctx.wizard.selectStep(1);
  } else {
    const data = await cryptoDataManager.getCrytocurrencyById(text);
    if (data.errors) {
      await ctx.telegram.sendMessage(chatId, messeges.readDataError);
      await ctx.reply(messeges.cryptoQuestion)
      return ctx.wizard.selectStep(1);
    } else {
      telegramAnswerHandler.randerCryptocurrency(ctx, data.data);
      return ctx.wizard.selectStep(1);
    }

  }
})
composer2 .action('repeat', async (ctx) => {
  await ctx.reply(messeges.cryptoQuestion)
  return ctx.wizard.selectStep(1);
});
composer2 .action('exit', async (ctx) => {
  await ctx.replyWithHTML(messeges.start, keyboards.mainKeyboard);
  return ctx.scene.leave();
});

const start = new Scenes.WizardScene('cryptoWizard', composer1 , composer2);

module.exports = start;

