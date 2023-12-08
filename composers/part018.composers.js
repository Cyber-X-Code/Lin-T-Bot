// part018.composers.js
const { Scenes, Markup } = require('telegraf');

const part018 = new Scenes.BaseScene('part018');

const { part018Message } = require('../message');

part018.enter(async (ctx) => {
  try {
    const message018 = part018Message;
    const photo018 = { source: '././img/kali_2.png' };

    await ctx.replyWithPhoto(photo018, {
      caption: `${ message018 }`,
      reply_markup: {
        inline_keyboard: [[{ text: 'Продолжить приключения', callback_data: 'goPart019' }]]
      }
    });
    } catch(error) {
      console.error(error);
    }
  });

part018.action('goPart019', async (ctx) => {
  await ctx.answerCbQuery();
  await ctx.scene.enter('part019');
})

module.exports = { part018 };
