const { Composer, Markup } = require('telegraf');
const { part004Composer } = require('./part004.composers');
const { part003Message } = require('../message');

const part003Composer = new Composer();
let userTasks = {}; 

part003Composer.action('part003', async (ctx) => {
  try {
    const userId = ctx.from.id;

    if (!userTasks[userId]) {
      userTasks[userId] = {
        currentTaskIndex: 0
      };
    }

    const { currentTaskIndex } = userTasks[userId];

    const photo = {
      source: '././img/igor.jpg'  
    };
    const message = part003Message[currentTaskIndex];
    await ctx.answerCbQuery();
    await ctx.replyWithPhoto(photo, {
      caption: message,
      reply_markup: {
        inline_keyboard: [
          [
            { text: 'Продолжить', callback_data: 'part004' }
          ]
        ]
      }
    });
  } catch(e) {
    console.error(e);
  }
});

part003Composer.use(part004Composer);

module.exports = { part003Composer };
