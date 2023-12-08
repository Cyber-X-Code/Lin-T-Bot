// part019.composers.js
const { Scenes, Markup } = require('telegraf');

const part022 = new Scenes.BaseScene('part022');

const { part022Message } = require('../message')

part022.enter(async (ctx) => {
  await ctx.reply(part022Message[0])});

part022.on('text', async (ctx) => {
    try {
      if (ctx.message.text.toLowerCase() === 'shutdown now') {
        await ctx.reply('Вывод команды shutdown now')
        await ctx.replyWithPhoto({ source: '././img/shutdown.png' }, Markup.inlineKeyboard([
          Markup.button.callback('Продолжить', 'goPartEnd')
        ]))
      } else {
        await ctx.reply('Неверный ответ, попробуйте еще раз.')
      }
    } catch(error) {
      console.error(error);
    }
  });

  part022.action('goPartEnd', async (ctx) => {
    await ctx.answerCbQuery();
    await ctx.scene.enter('partEnd');
  })

module.exports = { part022 };
