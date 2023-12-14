// partEnd.composers.js
const { Scenes, Markup } = require('telegraf');

const partEnd = new Scenes.BaseScene('partEnd');

const { endGame } = require('../message');

partEnd.enter(async (ctx) => {
  try {
    const messageEnd = endGame;
    const salut = { source: '././video/salut.mp4' };

    await ctx.replyWithVideo(salut, {
      caption: `${ messageEnd }`
    })
  } catch(error) {
    console.error(error)
  }
});

// partEnd.enter(async (ctx) => {
//   try {
//     const messageEnd = endGame;
//     const salut = { source: '././video/salut.mp4' };

//     await ctx.replyWithVideo(salut, {
//       caption: `${ messageEnd }`,
//       reply_markup: {
//         inline_keyboard: [[{ text: 'Начать приключения с начала?', callback_data: 'goPart001' }]]
//       }
//     });
//     } catch(error) {
//       console.error(error);
//     }
//   });

// partEnd.action('Part001', async (ctx) => {
//   await ctx.answerCbQuery();
//   await ctx.scene.enter('/start');
// });

module.exports = { partEnd };



// await ctx.reply(part009Message[0])});