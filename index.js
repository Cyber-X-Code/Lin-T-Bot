// Файл index.js
const { Telegraf, Markup } = require('telegraf');
require('dotenv').config()

const token = process.env.TOKEN
const bot = new Telegraf(token);

const { part001Composer } = require('./composers/part001.composers');
const { welcomeMessage } = require('./message');


bot.start((ctx) => {
  const image = {
    source: './img/Linux-Logo.png'
  };
  
  const message = {
    caption: (welcomeMessage[0]),
    reply_markup: Markup.inlineKeyboard([
      Markup.callbackButton('Начать', 'part001')
    ])
  };

  ctx.replyWithPhoto(image, message);

  // ctx.replyWithPhoto(image, message, {
    
  // });
});

bot.use(part001Composer);

bot.launch();



// // Файл index.js
// const { Telegraf, Markup } = require('telegraf');
// require('dotenv').config()

// const token = process.env.TOKEN
// const bot = new Telegraf(token);

// const { part001Composer } = require('./composers/part001.composers');
// const { welcomeMessage } = require('./message');

// bot.start((ctx) => {
//   const image = {
//     source: './img/Linux-Logo.png'
//   };

//   ctx.replyWithPhoto(image, {
//     caption: (welcomeMessage[0]),
//     reply_markup: Markup.inlineKeyboard([
//       Markup.callbackButton('Продолжить', 'part001')
//     ])
//   });
// });

// bot.start((ctx) => {
//   const image = {
//     source: './img/igor.jpg'
//   };

//   const message = {
//     caption: (welcomeMessage[0]),
//     reply_markup: Markup.inlineKeyboard([
//       Markup.callbackButton('Начать', 'part001')
//     ])
//   };

//   ctx.replyWithPhoto(image, message);
// });

// bot.use(part001Composer);

// bot.launch();
