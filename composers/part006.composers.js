const { Composer, Markup } = require('telegraf');
const { part001Message } = require('../message');

const part006Composer = new Composer();


part006Composer.action('part006', async (ctx) => {
  try {
    const photo = {
      source: '././img/systers.jpg'  
    };
    const message = (part001Message[0]);
    await ctx.answerCbQuery();
    await ctx.replyWithPhoto(photo, {
      caption: message,
      reply_markup: {
        inline_keyboard: [
          [
            { text: 'Продолжить', callback_data: 'part006' }
          ]
        ]
      }
    });
  } catch(e) {
    console.error(e)
  }
});

//part006Composer.use(part007Composer);

module.exports = { part006Composer };

