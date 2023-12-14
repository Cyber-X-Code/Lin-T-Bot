// part027.composers.js
const { Scenes, Markup } = require('telegraf');

const part027 = new Scenes.BaseScene('part027');

const { part027Message } = require('../message')

part027.enter(async (ctx) => {
  await ctx.reply(part027Message[0])});

part027.on('text', async (ctx) => {
    try {
      if (ctx.message.text.toLowerCase() === 'ls') {
        await ctx.reply('Вывод команды ls')
        await ctx.replyWithPhoto({ source: '././img/ls_start_sh.png' }, Markup.inlineKeyboard([
          Markup.button.callback('Продолжить', 'goPart028')
        ]))
      } else {
        await ctx.reply('Неверный ответ, попробуйте еще раз.')
      }
    } catch(error) {
      console.error(error);
    }
  });

  part027.action('goPart028', async (ctx) => {
    await ctx.answerCbQuery();
    await ctx.scene.enter('part028');
  })

module.exports = { part027 };
