const { Composer } = require('telegraf');
const { part006Composer } = require('./part006.composers');

const part005Composer = new Composer();

part005Composer.action('part005', (ctx) => {
  ctx.reply('Команда ls');
});

part005Composer.on('text', (ctx) => {
  const answerPart005 = ctx.message.text.toLowerCase();

  if (answerPart005 === 'ls') {
    ctx.replyWithPhoto({
      source: '././img/ls.png'
    }).then(() => {
      ctx.reply('(Вывод команды ls)', {
        reply_markup: {
          inline_keyboard: [
            [{ text: 'Верно! Продолжить Приключения!', callback_data: 'part006' }]
          ]
        }
      });
    });
  } else {
    ctx.reply('Неверный ответ. Попробуйте еще раз.', {
      
    });
  }
});

part005Composer.use(part006Composer);
module.exports = { part005Composer };
