const {Scenes, Composer} = require('telegraf');

const cryptoDataManager = require('../api/cryptoDataManager');
const textCommandHelper = require('../helpers/textCommandValidator');

const messages = require('../templates/messages');
const keyboards = require('../templates/keyboards');

const composer1 = new Composer();

composer1.command('/converter', async (ctx) => {
  await ctx.reply(messages.convertStart, keyboards.converterKeyboard);
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

composer2 .on('text', async (ctx) => {
  try {
    const text = ctx.message.text;
    const keys = text.split(' ');
    const validObj = {
      isValid: false,
      keys: []
    }

    let isValid = false;

    if (keys.length >= 3) {
      isValid = true;
      if (keys.length === 3) keys.unshift(1);
    }

    if (isValid) {
      const v1 = (!isNaN(keys[0]));
      const v2 = (textCommandHelper.isRates(keys[1]));
      const v3 = (keys[2].includes('in'));
      const v4 = (textCommandHelper.isRates(keys[3]));
      if (v1 && v2.isValid && v3 && v4.isValid) {
        validObj.isValid = true;
        validObj.keys.push(keys[0]);
        validObj.keys.push(v2.validKey);
        validObj.keys.push(keys[2]);
        validObj.keys.push(v4.validKey);
      }
    }

    if (validObj.isValid) {

      const resp1 = await cryptoDataManager.getRatesById(validObj.keys[1]);
      const resp2 = await cryptoDataManager.getRatesById(validObj.keys[3]);

      const result = (resp1.data.rate / resp2.data.rate) * validObj.keys[0];
      const endResult = result.toFixed(2);

      await ctx.reply(endResult);
    } else {
      await ctx.reply('Запро не коретен');
    }
    return ctx.wizard.selectStep(1);


  } catch (e) {
    console.log('Converter error', e);
    await ctx.scene.leave();
  }
})

composer2.on('message', async (ctx) => {
  await ctx.reply(messages.wrongQuery);
  await ctx.reply(messages.convertStart);
  return ctx.wizard.selectStep(1);
})

const converterWizard = new Scenes.WizardScene('converterWizard', composer1, composer2);

module.exports = converterWizard;