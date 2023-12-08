// part019.composers.js
const { Scenes, Markup } = require('telegraf');

const part020 = new Scenes.BaseScene('part020');

const { part020Message } = require('../message')

part020.enter(async (ctx) => {
  await ctx.reply(part020Message[0])});

part020.on('text', async (ctx) => {
    try {
      if (ctx.message.text.toLowerCase() === 'ls') {
        await ctx.reply('Вывод команды ls')
        await ctx.replyWithPhoto({ source: '././img/ls-2.png' }, Markup.inlineKeyboard([
          Markup.button.callback('Продолжить', 'goPart021')
        ]))
      } else {
        await ctx.reply('Неверный ответ, попробуйте еще раз.')
      }
    } catch(error) {
      console.error(error);
    }
  });

  part020.action('goPart021', async (ctx) => {
    await ctx.answerCbQuery();
    await ctx.scene.enter('part021');
  })

module.exports = { part020 };
