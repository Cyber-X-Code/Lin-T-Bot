const { Composer } = require('telegraf');
const { part006Composer } = require('./part006.composers');

const part005Composer = new Composer();

part005Composer.action('part005', async (ctx) => {
  await ctx.reply('Команда ls');
  await ctx.answerCbQuery();
});

part005Composer.on('text', async (ctx) => {
  const answerPart005 = ctx.message.text.toLowerCase();

  try {
    if (answerPart005 === 'ls') {
      await ctx.replyWithPhoto({
        source: '././img/ls.png'
      });
      await ctx.reply('(Вывод команды ls)', {
        reply_markup: {
          inline_keyboard: [
            [{ text: 'Верно! Продолжить Приключения!', callback_data: 'part006' }]
          ]
        }
      });
    } else {
      await ctx.reply('Неверный ответ. Попробуйте еще раз.');
    }
  } catch(e) {
    console.error(e)
  }
});

part005Composer.use(part006Composer);
module.exports = { part005Composer };
