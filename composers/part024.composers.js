// part024.composers.js
const { Scenes, Markup } = require('telegraf');

const part024 = new Scenes.BaseScene('part024');

const { part024Message } = require('../message')

part024.enter(async (ctx) => {
  await ctx.reply(part024Message[0])});

part024.on('text', async (ctx) => {
    try {
      if (ctx.message.text.toLowerCase() === 'sudo systemctl status andromeda') {
        await ctx.reply('Вывод команды status andromeda')
        await ctx.replyWithPhoto({ source: '././img/status_andromeda.png' }, Markup.inlineKeyboard([
          Markup.button.callback('Продолжить', 'goPart025')
        ]))
      } else {
        await ctx.reply('Неверный ответ, попробуйте еще раз.')
      }
    } catch(error) {
      console.error(error);
    }
  });

  part024.action('goPart025', async (ctx) => {
    await ctx.answerCbQuery();
    await ctx.scene.enter('part025');
  })

module.exports = { part024 };
