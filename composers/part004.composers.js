// Файл part001.composers.js
const { Composer, Markup } = require('telegraf');
const { part005Composer } = require('./part005.composers');
const { part004Message } = require('../message');

const part004Composer = new Composer();


part004Composer.action('part004', async (ctx) => {
  try {
    const photo = {
      source: '././img/space_base.jpg'  
    };
    const message = (part004Message[0]);
    await ctx.answerCbQuery();
    await ctx.replyWithPhoto(photo, {
      caption: message,
      reply_markup: {
        inline_keyboard: [
          [
            { text: 'Продолжить', callback_data: 'part005' }
          ]
        ]
      }
    });
  } catch(e) {
    console.error(e);
  }
});

part004Composer.use(part005Composer);

module.exports = { part004Composer };

