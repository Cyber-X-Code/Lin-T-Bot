const { Composer, Markup } = require('telegraf');
const { part001Message } = require('../message');

const part006Composer = new Composer();


part006Composer.action('part006', (ctx) => {
  const photo = {
    source: '././img/systers.jpg'  
  };
  const message = (part001Message[0]);
  ctx.replyWithPhoto(photo, {
    caption: message,
    reply_markup: {
      inline_keyboard: [
        [
          { text: 'Продолжить', callback_data: 'part006' }
        ]
      ]
    }
  });
});

//part006Composer.use(part007Composer);

module.exports = { part006Composer };

