// part014.composers.js
const { Scenes, Markup } = require('telegraf');

const part014 = new Scenes.BaseScene('part013');

const { part014Message } = require('../message')

part014.enter(async (ctx) => {
  await ctx.reply(part014Message[0])});

part014.on('text', async (ctx) => {
    try {
      if (ctx.message.text.toLowerCase() === 'shutdown now') {
        await ctx.reply('Вывод команды shutdown now')
        await ctx.replyWithPhoto({ source: '././img/shutdown.png' }, Markup.inlineKeyboard([
          Markup.button.callback('Продолжить', 'goPart015')
        ]))
      } else {
        await ctx.reply('Неверный ответ, попробуйте еще раз.')
      }
    } catch(error) {
      console.error(error);
    }
  });

  part014.action('goPart015', async (ctx) => {
    await ctx.answerCbQuery();
    await ctx.scene.enter('part015');
  })

module.exports = { part014 };
