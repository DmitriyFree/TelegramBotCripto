const {Scenes, Composer} = require('telegraf');

const cryptoDataManager = require('../api/cryptoDataManager');
const telegramAnswerHandler = require('../answers/telegramAnswerHandler');
const textCommandValidator = require('../helpers/textCommandValidator');

const messages = require('../templates/messages');
const keyboards = require('../templates/keyboards');

const composer1 = new Composer();

composer1.command('/rates', async (ctx) => {
  await ctx.reply(messages.ratesQuestion, keyboards.ratesKeyboard);
  return ctx.wizard.next();
})

const composer2 = new Composer();

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
    const text = ctx.message.text.split(' ')[0];
    const responseObj = textCommandValidator.isRates(text)
    if (!responseObj.isValid) {
      await ctx.reply(messages.ratesError);
      await ctx.reply(messages.ratesQuestion);
      return ctx.wizard.selectStep(1);
    } else {
      const data = await cryptoDataManager.getRatesById(responseObj.validKey);
      if (data.errors) {
        await ctx.reply(messages.readDataError);
        await ctx.reply(messages.ratesQuestion);
        return ctx.wizard.selectStep(1);
      } else {
        telegramAnswerHandler.reanderOneCoin(ctx, data.data);
        return ctx.wizard.selectStep(1);
      }
    }

  } catch (e) {
    console.log('RatesScene error', e);
    await ctx.scene.leave();
  }
})

composer2.action('repeat', async (ctx) => {
  await ctx.replyWithHTML(messages.ratesQuestion);
  return ctx.wizard.selectStep(1);
});

composer2.action('exit', async (ctx) => {
  await ctx.replyWithHTML(messages.start, keyboards.mainKeyboard);
  return ctx.scene.leave();
});

composer2.on('message', async (ctx) => {
  await ctx.reply(messages.wrongQuery);
  await ctx.reply(messages.ratesQuestion);
  return ctx.wizard.selectStep(1);
})

const ratesWizard = new Scenes.WizardScene('ratesWizard', composer1, composer2);

module.exports = ratesWizard;