// part028.composers.js
const { Scenes, Markup } = require('telegraf');

const part029 = new Scenes.BaseScene('part029');

const { part029Message } = require('../message')

part029.enter(async (ctx) => {
  await ctx.reply(part029Message[0])});

part029.on('text', async (ctx) => {
    try {
      if (ctx.message.text.toLowerCase() === './start') {
        await ctx.reply('Вывод команды ./start')
        await ctx.replyWithPhoto({ source: '././img/start_script_start.png' }, Markup.inlineKeyboard([
          Markup.button.callback('Продолжить', 'goPart030')
        ]))
      } else {
        await ctx.reply('Неверный ответ, попробуйте еще раз.')
      }
    } catch(error) {
      console.error(error);
    }
  });

  part029.action('goPart030', async (ctx) => {
    await ctx.answerCbQuery();
    await ctx.scene.enter('part030');
  })

module.exports = { part029 };
