// Файл part001.composers.js
const { Composer, Markup } = require('telegraf');
const { endGame } = require('../message')

const partEndComposer = new Composer();


partEndComposer.action('partEnd', async (ctx) => {
  try {
    const salut = {
      source: '././video/salut.mp4'  
    };
    const message = (endGame[0]);
    await ctx.answerCbQuery();
    await ctx.replyWithVideo(salut, {
      caption: message,
      reply_markup: {
        inline_keyboard: [
          [
            { text: 'Повторит приключения! Начать сначала!', callback_data: 'part001' }
          ]
        ]
      },
      supports_streaming: true
    });
  } catch(e) {
    console.error(e);
  }
});

//part007Composer.use(part007Composer);

module.exports = { partEndComposer };



// const { Composer, Markup } = require('telegraf');
// const { endGame } = require('../message');

// const partEndComposer = new Composer();
// let userTasks = {}; 

// partEndComposer.action('partEnd', async (ctx) => {
//   try {
//     const userId = ctx.from.id;

//     if (!userTasks[userId]) {
//       userTasks[userId] = {
//         currentTaskIndex: 0
//       };
//     }

//     const { currentTaskIndex } = userTasks[userId];

//     const photo = {
//       source: '././img/saliut.jpg'  
//     };
//     const message = endGame[currentTaskIndex];
//     await ctx.answerCbQuery();
//     await ctx.replyWithPhoto(photo, {
//       caption: message,
//       reply_markup: {
//         inline_keyboard: [
//           [
//             { text: 'Повторит приключения! Начать сначала!', callback_data: 'part001' }
//           ]
//         ]
//       }
//     });
//   } catch(e) {
//     console.error(e);
//   }
// });

// //part007Composer.use(part007Composer);

// module.exports = { partEndComposer };
