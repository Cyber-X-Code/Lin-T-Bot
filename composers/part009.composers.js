// part009.composers.js
const { Scenes, Markup } = require('telegraf');

const part009 = new Scenes.BaseScene('part009');

const { part009Message } = require('../message')

part009.enter(async (ctx) => {
  await ctx.reply(part009Message[0])});

part009.on('text', async (ctx) => {
    try {
      if (ctx.message.text.toLowerCase() === 'cd ..') {
        await ctx.reply('Вывод команды cd ..')
        await ctx.replyWithPhoto({ source: '././img/cd.png' }, Markup.inlineKeyboard([
          Markup.button.callback('Продолжить', 'goPart010')
        ]))
      } else {
        await ctx.reply('Неверный ответ, попробуйте еще раз.')
      }
    } catch(error) {
      console.error(error);
    }
  });

  part009.action('goPart010', async (ctx) => {
    await ctx.answerCbQuery();
    await ctx.scene.enter('part010');
  })

module.exports = { part009 };
