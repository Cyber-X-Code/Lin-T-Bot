// Файл part001.composers.js
const { Composer, Markup } = require('telegraf');
const { partEndComposer } = require('./partEnd.composers');
const { part006Message } = require('../message');

const part006Composer = new Composer();


part006Composer.action('part006', async (ctx) => {
  try {
    const photo = {
      source: '././img/x270.jpg'  
    };
    const message = (part006Message[0]);
    await ctx.answerCbQuery();
    await ctx.replyWithPhoto(photo, {
      caption: message,
      reply_markup: {
        inline_keyboard: [
          [
            { text: 'Продолжить', callback_data: 'partEnd' }
          ]
        ]
      }
    });
  } catch(e) {
    console.error(e);
  }
});

part006Composer.use(partEndComposer);

module.exports = { part006Composer };

