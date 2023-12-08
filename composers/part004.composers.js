// part004.composers.js
const { Scenes } = require('telegraf');

const part004 = new Scenes.BaseScene('part004');

const { part004Message } = require('../message');

part004.enter(async (ctx) => {
  try {
    const message004 = part004Message;
    const photo004 = { source: '././img/space_base.jpg' };

    await ctx.replyWithPhoto(photo004, {
      caption: `${ message004 }`,
      reply_markup: {
        inline_keyboard: [[{ text: 'Продолжить приключения!', callback_data: 'goPart005' }]]
      }
    })
    } catch(error) {
      console.error(error);
    }
  });

part004.action('goPart005', async (ctx) => {
  await ctx.answerCbQuery();
  await ctx.scene.enter('part005');
})

module.exports = { part004 };
