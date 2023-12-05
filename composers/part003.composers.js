const { Composer, Markup } = require('telegraf');
const { part004Composer } = require('./part004.composers');
const { part003Message } = require('../message');

const part003Composer = new Composer();

part003Composer.action('part003', (ctx) => {
  const photo = {
    source: '././img/space_base.jpg'  
  };
  const message = (part003Message[0]);
  ctx.replyWithPhoto(photo, {
    caption: message,
    reply_markup: {
      inline_keyboard: [
        [
          { text: 'Продолжить', callback_data: 'part004' }
        ]
      ]
    }
  });
});

part003Composer.use(part004Composer);

module.exports = { part003Composer };

