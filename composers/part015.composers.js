// part015.composers.js
const { Scenes, Markup } = require('telegraf');

const part015 = new Scenes.BaseScene('part015');

const { part015Message } = require('../message');

part015.enter(async (ctx) => {
  try {
    const message015 = part015Message;
    const photo015 = { source: '././img/x270.jpg' };

    await ctx.replyWithPhoto(photo015, {
      caption: `${ message015 }`,
      reply_markup: {
        inline_keyboard: [[{ text: 'Продолжить приключения', callback_data: 'goPart016' }]]
      }
    });
    } catch(error) {
      console.error(error);
    }
  });

part015.action('goPart016', async (ctx) => {
  await ctx.answerCbQuery();
  await ctx.scene.enter('part016');
})

module.exports = { part015 };
