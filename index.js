// Файл index.js
const { Telegraf, Markup } = require('telegraf');
const { part001Composer } = require('./composers/part001.composers');
const { welcomeMessage } = require('./message');

const bot = new Telegraf('');

bot.start((ctx) => {
  const image = {
    source: './img/igor.jpg'
  };

  ctx.replyWithPhoto(image, {
    caption: (welcomeMessage[0]),
    reply_markup: Markup.inlineKeyboard([
      Markup.callbackButton('Продолжить', 'part001')
    ])
  });
});

bot.start((ctx) => {
  // Загружаем картинку
  const image = {
    source: './img/igor.jpg'
  };

  const message = {
    caption: (welcomeMessage[0]),
    reply_markup: Markup.inlineKeyboard([
      Markup.callbackButton('Начать', 'part001')
    ])
  };

  ctx.replyWithPhoto(image, message);
});


bot.use(part001Composer);

bot.launch();
