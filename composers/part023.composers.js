// part023.composers.js
const { Scenes, Markup } = require('telegraf');
// Создаем сцену
const part023 = new Scenes.BaseScene('part023');

const { part023Message } = require('../message');

part023.enter(async (ctx) => {
  try {
    const message023 = part023Message;
    const photo023 = { source: '././img/server_ai.jpeg' };
  
    await ctx.replyWithPhoto(photo023, {
      caption: `${ message023 }`,
      reply_markup: {
        inline_keyboard: [[{ text: 'Подойти к серверу', callback_data: 'goPart024' }, { text: 'Пройти к реактору', callback_data: 'goPartOver' }]]
      }
    });
    } catch(error) {
      console.error(error);
    }
  });

// Обработка кнопки ""
part023.action('goPart024', async (ctx) => {
  await ctx.answerCbQuery();
  await ctx.scene.enter('part024');
});

part023.action('goPartOver', async (ctx) => {
    await ctx.answerCbQuery();
    await ctx.scene.enter('partOver');
  });

module.exports = { part023 };

