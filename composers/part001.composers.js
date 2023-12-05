// Файл part001.composers.js
const { Composer, Markup } = require('telegraf');
const { part002Composer } = require('./part002.composers');
const { part001Message } = require('../message');

const part001Composer = new Composer();


part001Composer.action('part001', (ctx) => {
  const photo = {
    source: '././img/systers.jpg'  
  };
  const message = (part001Message[0]);
  ctx.replyWithPhoto(photo, {
    caption: message,
    reply_markup: {
      inline_keyboard: [
        [
          { text: 'Продолжить', callback_data: 'part002' }
        ]
      ]
    }
  });
});

part001Composer.use(part002Composer);

module.exports = { part001Composer };

