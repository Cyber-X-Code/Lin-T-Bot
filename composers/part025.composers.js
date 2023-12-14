// part025.composers.js
const { Scenes, Markup } = require('telegraf');

const part025 = new Scenes.BaseScene('part025');

const { part025Message } = require('../message')

part025.enter(async (ctx) => {
  await ctx.reply(part025Message[0])});

part025.on('text', async (ctx) => {
    try {
      if (ctx.message.text.toLowerCase() === 'ls') {
        await ctx.reply('Вывод команды ls')
        await ctx.replyWithPhoto({ source: '././img/ls_andromeda.png' }, Markup.inlineKeyboard([
          Markup.button.callback('Продолжить', 'goPart026')
        ]))
      } else {
        await ctx.reply('Неверный ответ, попробуйте еще раз.')
      }
    } catch(error) {
      console.error(error);
    }
  });

  part025.action('goPart026', async (ctx) => {
    await ctx.answerCbQuery();
    await ctx.scene.enter('part026');
  })

module.exports = { part025 };
