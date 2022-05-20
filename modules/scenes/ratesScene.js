const {Markup, Scenes, Composer} = require('telegraf');

const cryptoDataManager = require('../cryptoDataManager');
const telegramAnswerHandler = require('../telegramAnswerHandler');
const textCommandHelper = require('../textCommandHelper');

const texts = require('../templates/texts');

const composer1 = new Composer();

composer1.on('text', async (ctx) => {
  await ctx.reply(texts.ratesQuestion,
    Markup.keyboard([['UAH', 'RUB'],[ 'EUR', 'PLN', 'KZT'], ['GBP', 'SEK'], ['/main']], {}).oneTime()
  )
  return ctx.wizard.next();
})

const composer2 = new Composer();

composer2 .on('text', async (ctx) => {
  const text = ctx.message.text;
  if (!textCommandHelper.isRates(texts.ratesQuestion)) {
    await ctx.reply('Формат не верный');
    await ctx.reply(text,
    Markup.keyboard([['UAH', 'RUB'],[ 'EUR', 'PLN', 'KZT'], ['GBP', 'SEK'], ['/main']], {}).oneTime()
    )
    return ctx.wizard.selectStep(1);
  } else {
    const data = await cryptoDataManager.getRatesById(texts.ratesQuestion);
    if (data.errors) {
      await ctx.telegram.sendMessage(chatId, "Ошыбка!!! Не удалось получить данные");
      await ctx.reply(text)
      return ctx.wizard.selectStep(1);
    } else {
      telegramAnswerHandler.reanderOneCoin(ctx, data.data);
      return ctx.wizard.selectStep(1);
    }

  }
})
composer2 .action('repeat', async (ctx) => {
  await ctx.reply(texts.ratesQuestion)
  return ctx.wizard.selectStep(1);
});
composer2 .action('exit', async (ctx) => {
  await ctx.replyWithHTML(texts.start, Markup.keyboard([
    ['/crypto'],
    ['/rates'],
  ]));
  return ctx.scene.leave();
});

const ratesWizard = new Scenes.WizardScene('ratesWizard', composer1, composer2);

module.exports = ratesWizard;