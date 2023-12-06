const { Composer, Markup } = require('telegraf');
const { partEndComposer } = require('./partEnd.composers');
const { part006Message } = require('../message');

const part006Composer = new Composer();
let userTasks = {}; 

part006Composer.action('part006', async (ctx) => {
  try {
    const userId = ctx.from.id;

    if (!userTasks[userId]) {
      userTasks[userId] = {
        currentTaskIndex: 0
      };
    }

    const { currentTaskIndex } = userTasks[userId];

    const photo = {
      source: '././img/x270.jpg'  
    };
    const message = part006Message[currentTaskIndex];
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
