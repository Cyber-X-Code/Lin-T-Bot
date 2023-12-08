// part002.composers.js
const { Scenes, Markup } = require('telegraf');

const part002 = new Scenes.BaseScene('part002');

const { part002Message } = require('../message');
//const { part003 } = require('./part003.composers');

part002.enter(async (ctx) => {
  try {
    const message002 = part002Message;
    const photo002 = { source: '././img/systers.jpg' };

    await ctx.replyWithPhoto(photo002, {
      caption: `${ message002 }`,
      reply_markup: {
        inline_keyboard: [[{ text: 'Продолжить приключения!', callback_data: 'goPart003' }]]
      }
    });
    } catch(error) {
      console.error(error);
    }
  });

part002.action('goPart003', async (ctx) => {
  await ctx.answerCbQuery();
  await ctx.scene.enter('part003');
});

module.exports = { part002 };