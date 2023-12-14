// part026.composers.js
const { Scenes, Markup } = require('telegraf');

const part026 = new Scenes.BaseScene('part026');

const { part026Message } = require('../message')

part026.enter(async (ctx) => {
  await ctx.reply(part026Message[0])});

part026.on('text', async (ctx) => {
    try {
      if (ctx.message.text.toLowerCase() === 'cd andromeda') {
        await ctx.reply('Вывод команды cd Andromeda')
        await ctx.replyWithPhoto({ source: '././img/cd_andromeda.png' }, Markup.inlineKeyboard([
          Markup.button.callback('Продолжить', 'goPart027')
        ]))
      } else {
        await ctx.reply('Неверный ответ, попробуйте еще раз.')
      }
    } catch(error) {
      console.error(error);
    }
  });

  part026.action('goPart027', async (ctx) => {
    await ctx.answerCbQuery();
    await ctx.scene.enter('part027');
  })

module.exports = { part026 };
