// part008.composers.js
const { Scenes, Markup } = require('telegraf');

const part008 = new Scenes.BaseScene('part008');

const { part008Message } = require('../message')

part008.enter(async (ctx) => {
  await ctx.reply(part008Message[0])});

part008.on('text', async (ctx) => {
    try {
      if (ctx.message.text.toLowerCase() === 'ls /home/user') {
        await ctx.reply('Вывод команды ls /home/user')
        await ctx.replyWithPhoto({ source: '././img/ls_home.png' }, Markup.inlineKeyboard([
          Markup.button.callback('Продолжить', 'goPart009')
        ]))
      } else {
        await ctx.reply('Неверный ответ, попробуйте еще раз.')
      }
    } catch(error) {
      console.error(error);
    }
  });

  part008.action('goPart009', async (ctx) => {
    await ctx.answerCbQuery();
    await ctx.scene.enter('part009');
  })

module.exports = { part008 };
