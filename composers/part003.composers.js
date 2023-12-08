// part003.composers.js
const { Scenes, Markup } = require('telegraf');

const part003 = new Scenes.BaseScene('part003');

const { part003Message } = require('../message');
//const { part004 } = require('./part004.composers');

part003.enter(async (ctx) => {
  try {
    const message003 = part003Message;
    const photo003 = { source: '././img/igor.jpg' };

    await ctx.replyWithPhoto(photo003, {
      caption: `${ message003 }`,
      reply_markup: {
        inline_keyboard: [[{ text: 'Продолжить приключения', callback_data: 'goPart004' }]]
      }
    });
    } catch(error) {
      console.error(error);
    }
  });

part003.action('goPart004', async (ctx) => {
  await ctx.answerCbQuery();
  await ctx.scene.enter('part004');
})

module.exports = { part003 };
