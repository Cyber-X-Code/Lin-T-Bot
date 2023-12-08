// part010.composers.js
const { Scenes, Markup } = require('telegraf');

const part010 = new Scenes.BaseScene('part010');

const { part010Message } = require('../message')

part010.enter(async (ctx) => {
  await ctx.reply(part010Message[0])});

part010.on('text', async (ctx) => {
    try {
      if (ctx.message.text.toLowerCase() === 'cd videocam') {
        await ctx.reply('Вывод команды cd VideoCam')
        await ctx.replyWithPhoto({ source: '././img/cd_VideoCam.png' }, Markup.inlineKeyboard([
          Markup.button.callback('Продолжить', 'goPart011')
        ]))
      } else {
        await ctx.reply('Неверный ответ, попробуйте еще раз.')
      }
    } catch(error) {
      console.error(error);
    }
  });

  part010.action('goPart011', async (ctx) => {
    await ctx.answerCbQuery();
    await ctx.scene.enter('part011');
  })

module.exports = { part010 };
