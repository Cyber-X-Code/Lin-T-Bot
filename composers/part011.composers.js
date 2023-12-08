// part011.composers.js
const { Scenes, Markup } = require('telegraf');

const part011 = new Scenes.BaseScene('part011');

const { part011Message } = require('../message')

part011.enter(async (ctx) => {
  await ctx.reply(part011Message[0])});

part011.on('text', async (ctx) => {
    try {
      if (ctx.message.text.toLowerCase() === 'ls -l') {
        await ctx.reply('Вывод команды ls -l')
        await ctx.replyWithPhoto({ source: '././img/ls_-l.png' }, Markup.inlineKeyboard([
          Markup.button.callback('Продолжить', 'goPart012')
        ]))
      } else {
        await ctx.reply('Неверный ответ, попробуйте еще раз.')
      }
    } catch(error) {
      console.error(error);
    }
  });

  part011.action('goPart012', async (ctx) => {
    await ctx.answerCbQuery();
    await ctx.scene.enter('part012');
  })

module.exports = { part011 };
