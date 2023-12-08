// part008.composers.js
const { Scenes, Markup } = require('telegraf');

const part007 = new Scenes.BaseScene('part007');

const { part007Message } = require('../message')

part007.enter(async (ctx) => {
  await ctx.reply(part007Message[0])});

part007.on('text', async (ctx) => {
    try {
      if (ctx.message.text.toLowerCase() === 'ls -a') {
        await ctx.reply('Вывод команды ls -a')
        await ctx.replyWithPhoto({ source: '././img/ls_-a.png' }, Markup.inlineKeyboard([
          Markup.button.callback('Продолжить', 'goPart008')
        ]))
      } else {
        await ctx.reply('Неверный ответ, попробуйте еще раз.')
      }
    } catch(error) {
      console.error(error);
    }
  });

  part007.action('goPart008', async (ctx) => {
    await ctx.answerCbQuery();
    await ctx.scene.enter('part008');
  })

module.exports = { part007 };
