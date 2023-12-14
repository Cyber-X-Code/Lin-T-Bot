// partOver.composers.js
const { Scenes, Markup } = require('telegraf');

const partOver = new Scenes.BaseScene('partOver');

const { partOverMessage } = require('../message');

partOver.enter(async (ctx) => {
  try {
    const messageEnd = partOverMessage;
    const salut = { source: '././video/gameOver.mp4' };

    await ctx.replyWithVideo(salut, {
      caption: `${ messageEnd }`,
      reply_markup: {
        inline_keyboard: [[{ text: 'Вернуться на шаг назад', callback_data: 'goPart015' }]]
      }
    });
  } catch(error) {
    console.error(error)
  }
});

partOver.action('goPart015', async (ctx) => {
  await ctx.answerCbQuery();
  await ctx.scene.enter('part015');
});

module.exports = { partOver };

