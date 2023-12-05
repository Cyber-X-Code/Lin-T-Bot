const { Composer } = require('telegraf');
const { part005Composer } = require('./part005.composers');

const part004Composer = new Composer();

part004Composer.action('part004', (ctx) => {
  ctx.reply('Команда pwd');
});

part004Composer.on('text', (ctx) => {
  const answerPart004 = ctx.message.text.toLowerCase();

  if (answerPart004 === 'pwd') {
    ctx.replyWithPhoto({
      source: '././img/pwd.png'
    }).then(() => {
      ctx.reply('(Вывод команды pwd)', {
        reply_markup: {
          inline_keyboard: [
            [{ text: 'Верно! Продолжить Приключения!', callback_data: 'part005' }]
          ]
        }
      });
    });
  } else {
    ctx.reply('Неверный ответ. Попробуйте еще раз.', {
      
    });
  }
});

part004Composer.use(part005Composer);
module.exports = { part004Composer };
