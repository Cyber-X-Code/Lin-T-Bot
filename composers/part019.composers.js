// part019.composers.js
const { Scenes, Markup } = require('telegraf');

const part019 = new Scenes.BaseScene('part019');

const { part019Message } = require('../message')

part019.enter(async (ctx) => {
  await ctx.reply(part019Message[0])});

part019.on('text', async (ctx) => {
    try {
      if (ctx.message.text.toLowerCase() === 'cd /var/lib/motioneye') {
        await ctx.reply('Вывод команды /var/lib/motioneye')
        await ctx.replyWithPhoto({ source: '././img/cd_motioneye_2.png' }, Markup.inlineKeyboard([
          Markup.button.callback('Продолжить', 'goPart020')
        ]))
      } else {
        await ctx.reply('Неверный ответ, попробуйте еще раз.')
      }
    } catch(error) {
      console.error(error);
    }
  });

  part019.action('goPart020', async (ctx) => {
    await ctx.answerCbQuery();
    await ctx.scene.enter('part020');
  })

module.exports = { part019 };
