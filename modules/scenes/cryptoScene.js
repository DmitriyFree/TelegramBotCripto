const {Scenes, Composer} = require('telegraf');

const cryptoDataManager = require('../api/cryptoDataManager');
const telegramAnswerHandler = require('../answers/telegramAnswerHandler');
const textCommandValidator = require('../helpers/textCommandValidator');

const messages = require('../templates/messages');
const keyboards = require('../templates/keyboards')

const composer1  = new Composer();

composer1.command('/crypto', async (ctx) => {
  await ctx.reply(messages.cryptoQuestion, keyboards.cryptoKeyboard)
  return ctx.wizard.next();
});

const composer2  = new Composer();

composer2.command('start', async (ctx) => {
  await ctx.replyWithHTML(messages.start, keyboards.mainKeyboard);
  return ctx.scene.leave();
})

composer2.hears('Главное меню', async (ctx) => {
  await ctx.replyWithHTML(messages.start, keyboards.mainKeyboard);
  return ctx.scene.leave();
})

composer2.on('text', async (ctx) => {
  try {
    const text = ctx.message.text;
    const responseObj = textCommandValidator.isCrypto(text);
    if (!responseObj.isValid) {
      await ctx.reply(messages.cryptoError);
      await ctx.reply(messages.cryptoQuestion)
      return ctx.wizard.selectStep(1);
    } else {
      const data = await cryptoDataManager.getCrytocurrencyById(responseObj.validKey);
      if (data.errors) {
        await ctx.reply(messages.readDataError);
        await ctx.reply(messages.cryptoQuestion)
        return ctx.wizard.selectStep(1);
      } else {
        telegramAnswerHandler.randerCryptocurrency(ctx, data.data);
        return ctx.wizard.selectStep(1);
      }

    }
  } catch (e) {
    console.log('CryptoScene error', e);
    await ctx.scene.leave();
  }

})
composer2 .action('repeat', async (ctx) => {
  await ctx.reply(messages.cryptoQuestion)
  return ctx.wizard.selectStep(1);
});
composer2 .action('exit', async (ctx) => {
  await ctx.replyWithHTML(messages.start, keyboards.mainKeyboard);
  return ctx.scene.leave();
});
composer2.on('message', async (ctx) => {
  await ctx.reply(messages.wrongQuery);
  await ctx.reply(messages.cryptoQuestion);
  return ctx.wizard.selectStep(1);
})

const start = new Scenes.WizardScene('cryptoWizard', composer1 , composer2);

module.exports = start;

