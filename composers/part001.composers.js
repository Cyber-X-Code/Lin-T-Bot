// part001.composers.js
const { Scenes, Markup } = require('telegraf');
// Создаем сцену
const part001 = new Scenes.BaseScene('part001');

const { part001Message } = require('../message');

part001.enter(async (ctx) => {
  try {
    const message001 = part001Message;
    const photo001 = { source: '././img/igor.jpg' };
  
    await ctx.replyWithPhoto(photo001, {
      caption: `${ message001 }`,
      reply_markup: {
        inline_keyboard: [[{ text: 'Продолжить приключения!', callback_data: 'goPart002' }]]
      }
    });
    } catch(error) {
      console.error(error);
    }
  });

// Обработка кнопки ""
part001.action('goPart002', async (ctx) => {
  await ctx.answerCbQuery();
  await ctx.scene.enter('part002');
});

module.exports = { part001 };


// part001.enter((ctx) => {
//   ctx.reply(
//     'Начнем приключения?',
//     Markup.inlineKeyboard([
//       Markup.button.callback('Конечно Начать!', 'GO_TO_PART002')
//     ])
//   )
// })