// Файл part001.composers.js
const { Composer, Markup } = require('telegraf');
const { part003Composer } = require('./part003.composers');
const { part002Message } = require('../message');

const part002Composer = new Composer();


part002Composer.action('part002', async (ctx) => {
  try {
    const photo = {
      source: '././img/systers.jpg'  
    };
    const message = (part002Message[0]);
    await ctx.answerCbQuery();
    await ctx.replyWithPhoto(photo, {
      caption: message,
      reply_markup: {
        inline_keyboard: [
          [
            { text: 'Продолжить', callback_data: 'part003' }
          ]
        ]
      }
    });
  } catch(e) {
    console.error(e);
  }
});

part002Composer.use(part003Composer);

module.exports = { part002Composer };

