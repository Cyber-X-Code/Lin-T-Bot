// part017.composers.js
const { Scenes, Markup } = require('telegraf');

const part017 = new Scenes.BaseScene('part017');

const { part017Message } = require('../message');

part017.enter(async (ctx) => {
  try {
    const message017 = part017Message;
    const photo017 = { source: '././img/dnevnik.png' };

    await ctx.replyWithPhoto(photo017, {
      caption: `${ message017 }`,
      reply_markup: {
        inline_keyboard: [[{ text: 'Продолжить приключения', callback_data: 'goPart018' }]]
      }
    });
    } catch(error) {
      console.error(error);
    }
  });

part017.action('goPart018', async (ctx) => {
  await ctx.answerCbQuery();
  await ctx.scene.enter('part018');
})

module.exports = { part017 };
