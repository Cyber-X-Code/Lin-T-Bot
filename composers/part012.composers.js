// part012.composers.js
const { Scenes, Markup } = require('telegraf');

const part012 = new Scenes.BaseScene('part012');

const { part012Message } = require('../message')

part012.enter(async (ctx) => {
  await ctx.reply(part012Message[0])});

part012.on('text', async (ctx) => {
    try {
      if (ctx.message.text.toLowerCase() === 'cd /var/lib/motioneye') {
        await ctx.reply('Вывод команды cd /var/lib/motioneye')
        await ctx.replyWithPhoto({ source: '././img/cd_motioneye.png' }, Markup.inlineKeyboard([
          Markup.button.callback('Продолжить', 'goPart013')
        ]))
      } else {
        await ctx.reply('Неверный ответ, попробуйте еще раз.')
      }
    } catch(error) {
      console.error(error);
    }
  });

  part012.action('goPart013', async (ctx) => {
    await ctx.answerCbQuery();
    await ctx.scene.enter('part013');
  })

module.exports = { part012 };
