const {Scenes, Composer} = require('telegraf');

const cryptoDataManager = require('../api/cryptoDataManager');
const telegramAnswerHandler = require('../answers/telegramAnswerHandler');
const textCommandHelper = require('../helpers/textCommandHelper');

const messeges = require('../templates/messeges');
const keyboards = require('../templates/keyboards');

const composer1 = new Composer();

composer1.command('/rates', async (ctx) => {
  await ctx.reply(messeges.ratesQuestion, keyboards.ratesKeyboard);
  return ctx.wizard.next();
})

const composer2 = new Composer();

composer2 .on('text', async (ctx) => {
  try {
    const text = ctx.message.text;
    if (text.includes('/')) return ctx.scene.leave();
    if (!textCommandHelper.isRates(text)) {
      await ctx.reply(messeges.ratesError);
      await ctx.reply(text, keyboards.ratesKeyboard);
      return ctx.wizard.selectStep(1);
    } else {
      const data = await cryptoDataManager.getRatesById(text);
      if (data.errors) {
        await ctx.telegram.sendMessage(chatId, messeges.readDataError);
        await ctx.reply(text);
        return ctx.wizard.selectStep(1);
      } else {
        telegramAnswerHandler.reanderOneCoin(ctx, data.data);
        return ctx.wizard.selectStep(1);
      }

    }
  } catch (e) {
    console.log('RatesScene error', e);
    await ctx.reply(messeges.defaultError);
    return ctx.wizard.selectStep(1);
  }
})

composer2 .action('repeat', async (ctx) => {
  await ctx.reply(messeges.ratesQuestion);
  return ctx.wizard.selectStep(1);
});

composer2 .action('exit', async (ctx) => {
  await ctx.replyWithHTML(messeges.start, keyboards.mainKeyboard);
  return ctx.scene.leave();
});

const ratesWizard = new Scenes.WizardScene('ratesWizard', composer1, composer2);

module.exports = ratesWizard;