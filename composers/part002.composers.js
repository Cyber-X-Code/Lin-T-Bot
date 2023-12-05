const { Composer, Markup } = require('telegraf');
const { part003Composer } = require('./part003.composers');
const { part002Message } = require('../message');

const part002Composer = new Composer();

part002Composer.action('part002', (ctx) => {
  const photo = {
    source: '././img/igor.jpg'  
  };
  const message = (part002Message[0]);
  ctx.replyWithPhoto(photo, {
    caption: message,
    reply_markup: {
      inline_keyboard: [
        [
          { text: 'Продолжить', callback_data: 'part003' }
        ]
      ]
    }
  });
});

part002Composer.use(part003Composer);

module.exports = { part002Composer };


