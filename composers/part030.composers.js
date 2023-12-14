// part030.composers.js
const { Scenes, Markup } = require('telegraf');

const part030 = new Scenes.BaseScene('part030');

const { part030Message } = require('../message');

part030.enter(async (ctx) => {
  try {
    const message030 = part030Message;
    const photo030 = { source: '././img/ai.jpg' };
  
    await ctx.replyWithPhoto(photo030, {
      caption: `${ message030 }`,
      reply_markup: {
        inline_keyboard: [[{ text: 'Продолжить приключения!', callback_data: 'goPartEnd' }]]
      }
    });
    } catch(error) {
      console.error(error);
    }
  });

// Обработка кнопки ""
part030.action('goPartEnd', async (ctx) => {
  await ctx.answerCbQuery();
  await ctx.scene.enter('partEnd');
})

module.exports = { part030 };
