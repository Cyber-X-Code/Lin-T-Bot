// part005.composers.js
const { Scenes, Markup } = require('telegraf');

const part005 = new Scenes.BaseScene('part005');

const { part005Message } = require('../message')

part005.enter(async (ctx) => {
  await ctx.reply(part005Message[0])});

part005.on('text', async (ctx) => {
    try {
        if (ctx.message.text.toLowerCase() === 'pwd') {
            await ctx.reply('Вывод команды pwd')
            await ctx.replyWithPhoto({ source: '././img/pwd.png' }, Markup.inlineKeyboard([
              Markup.button.callback('Продолжить', 'goPart006')
            ]))
          } else {
            await ctx.reply('Неверный ответ, попробуйте еще раз.')
        }
    } catch(error) {
        console.error(error);
    }
  });

  part005.action('goPart006', async (ctx) => {
    await ctx.answerCbQuery();
    await ctx.scene.enter('part006');
  })

module.exports = { part005 };
