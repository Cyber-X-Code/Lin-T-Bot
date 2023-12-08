// part006.composers.js
const { Scenes, Markup } = require('telegraf');

const part006 = new Scenes.BaseScene('part006');

const { part006Message } = require('../message')

part006.enter(async (ctx) => {
  await ctx.reply(part006Message[0])});

part006.on('text', async (ctx) => {
    try {
      if (ctx.message.text.toLowerCase() === 'ls') {
        await ctx.reply('Вывод команды ls')
        await ctx.replyWithPhoto({ source: '././img/ls.png' }, Markup.inlineKeyboard([
          Markup.button.callback('Продолжить', 'goPart007')
        ]))
      } else {
        await ctx.reply('Неверный ответ, попробуйте еще раз.')
      }
    } catch(error) {
      console.error(error);
    }
  });

  part006.action('goPart007', async (ctx) => {
    await ctx.answerCbQuery();
    await ctx.scene.enter('part007');
  })

module.exports = { part006 };
