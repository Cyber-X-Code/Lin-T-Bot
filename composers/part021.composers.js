// part021.composers.js
const { Scenes, Markup } = require('telegraf');

const part021 = new Scenes.BaseScene('part021');

const { part021Message } = require('../message')

part021.enter(async (ctx) => {
  await ctx.reply(part021Message[0])});

part021.on('text', async (ctx) => {
    try {
      if (ctx.message.text.toLowerCase() === 'ls camera120') {
        await ctx.reply('Вывод команды ls Camera120')
        await ctx.replyWithPhoto({ source: '././img/ls-3.png' }, Markup.inlineKeyboard([
          Markup.button.callback('Продолжить', 'goPart022')
        ]))
      } else {
        await ctx.reply('Неверный ответ, попробуйте еще раз.')
      }
    } catch(error) {
      console.error(error);
    }
  });

  part021.action('goPart022', async (ctx) => {
    await ctx.answerCbQuery();
    await ctx.scene.enter('part022');
  })

module.exports = { part021 };
