// part028.composers.js
const { Scenes, Markup } = require('telegraf');

const part028 = new Scenes.BaseScene('part028');

const { part028Message } = require('../message')

part028.enter(async (ctx) => {
  await ctx.reply(part028Message[0])});

part028.on('text', async (ctx) => {
    try {
      if (ctx.message.text.toLowerCase() === 'chmod +x start.sh') {
        await ctx.reply('Вывод команды chmod +x')
        await ctx.replyWithPhoto({ source: '././img/chmod_start.png' }, Markup.inlineKeyboard([
          Markup.button.callback('Продолжить', 'goPart029')
        ]))
      } else {
        await ctx.reply('Неверный ответ, попробуйте еще раз.')
      }
    } catch(error) {
      console.error(error);
    }
  });

  part028.action('goPart029', async (ctx) => {
    await ctx.answerCbQuery();
    await ctx.scene.enter('part029');
  })

module.exports = { part028 };
