// part013.composers.js
const { Scenes, Markup } = require('telegraf');

const part013 = new Scenes.BaseScene('part013');

const { part013Message } = require('../message')

part013.enter(async (ctx) => {
  await ctx.reply(part013Message[0])});

part013.on('text', async (ctx) => {
    try {
      if (ctx.message.text.toLowerCase() === 'ls') {
        await ctx.reply('Вывод команды ls')
        await ctx.replyWithPhoto({ source: '././img/ls_motioneye.png' }, Markup.inlineKeyboard([
          Markup.button.callback('Продолжить', 'goPart014')
        ]))
      } else {
        await ctx.reply('Неверный ответ, попробуйте еще раз.')
      }
    } catch(error) {
      console.error(error);
    }
  });

  part013.action('goPart014', async (ctx) => {
    await ctx.answerCbQuery();
    await ctx.scene.enter('part014');
  })

module.exports = { part013 };
