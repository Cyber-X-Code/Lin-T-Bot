const { Composer, Markup } = require('telegraf');
const { part002Composer } = require('./part002.composers');
const { part001Message } = require('../message');

const part001Composer = new Composer();
let userTasks = {}; // Объект для хранения заданий каждого пользователя

part001Composer.action('part001', async (ctx) => {
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
      source: '././img/igor.jpg'  
    };
    const message = part001Message[currentTaskIndex];
    await ctx.answerCbQuery();
    await ctx.replyWithPhoto(photo, {
      caption: message,
      reply_markup: {
        inline_keyboard: [
          [
            { text: 'Продолжить', callback_data: 'part002' }
          ]
        ]
      }
    });
  } catch(e) {
    console.error(e);
  }
});

part001Composer.use(part002Composer);

module.exports = { part001Composer };


// NO ID USER

// // Файл part001.composers.js
// const { Composer, Markup } = require('telegraf');
// const { part002Composer } = require('./part002.composers');
// const { part001Message } = require('../message');

// const part001Composer = new Composer();


// part001Composer.action('part001', async (ctx) => {
//   try {
//     const photo = {
//       source: '././img/igor.jpg'  
//     };
//     const message = (part001Message[0]);
//     await ctx.answerCbQuery();
//     await ctx.replyWithPhoto(photo, {
//       caption: message,
//       reply_markup: {
//         inline_keyboard: [
//           [
//             { text: 'Продолжить', callback_data: 'part002' }
//           ]
//         ]
//       }
//     });
//   } catch(e) {
//     console.error(e);
//   }
// });

// part001Composer.use(part002Composer);

// module.exports = { part001Composer };

