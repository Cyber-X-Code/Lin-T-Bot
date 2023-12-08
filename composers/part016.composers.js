// part016.composers.js
const { Scenes, Markup } = require('telegraf');

const part016 = new Scenes.BaseScene('part016');

const { part016Message } = require('../message');

part016.enter(async (ctx) => {
  try {
    const message016 = part016Message;
    const photo016 = { source: '././img/kali.png' };

    await ctx.replyWithPhoto(photo016, {
      caption: `${ message016 }`,
      reply_markup: {
        inline_keyboard: [[{ text: 'Продолжить приключения', callback_data: 'goPart017' }]]
      }
    });
    } catch(error) {
      console.error(error);
    }
  });

part016.action('goPart017', async (ctx) => {
  await ctx.answerCbQuery();
  await ctx.scene.enter('part017');
})

module.exports = { part016 };
