const { Composer, Markup } = require('telegraf');
const { part005Composer } = require('./part005.composers');
const { part004Message } = require('../message');

const part004Composer = new Composer();
let userTasks = {}; // Объект для хранения заданий каждого пользователя

part004Composer.action('part004', async (ctx) => {
  try {
    const userId = ctx.from.id;

    // Проверяем, есть ли уже задания для данного пользователя
    if (!userTasks[userId]) {
      userTasks[userId] = {
        currentTaskIndex: 0
      };
    }

    const { currentTaskIndex } = userTasks[userId];

    const photo = {
      source: '././img/space_base.jpg'  
    };
    const message = part004Message[currentTaskIndex];
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
