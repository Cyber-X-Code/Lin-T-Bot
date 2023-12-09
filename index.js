// Импортируем необходимые библиотеки
const { Telegraf, Markup, Scenes } = require('telegraf');
require('dotenv').config();

// Импортируем наши сцены из отдельного файла
const { scenes } = require('./scenes.js');

const { welcomeMessage } = require('./message.js');

const { getSession, saveSession } = require('./sessionManager');

// Инициализируем бота с вашим токеном
const bot = new Telegraf(process.env.BOT_TOKEN);

// Создаем менеджер сцен
const stage = new Scenes.Stage(scenes);

// Используем сессию и сцену
bot.use(async (ctx, next) => {
  const id = `${ctx.chat.id}:${ctx.from.id}`;
  ctx.session = await getSession(id);
  await next();
  if (ctx.session) {
    await saveSession(id, ctx.session);
  }
});
bot.use(stage.middleware());

bot.start(async (ctx) => {
  const welcomeMsg = welcomeMessage;
  const photo = { source: './img/Linux-Logo.png' };

  await ctx.replyWithPhoto(photo, {
    caption: `${welcomeMsg}`,
    reply_markup: {
      inline_keyboard: [[{ text: 'Начать', callback_data: 'start' }]]
    }
  });
});

// Обработка кнопки "Начать"
bot.action('start', (ctx) => {
  ctx.answerCbQuery();
  ctx.scene.enter('part001')
});

// Запускаем бота
bot.launch();


// NO BASE DATA

// // Импортируем необходимые библиотеки
// const { Telegraf, Markup, Scenes, session } = require('telegraf');
// require('dotenv').config();

// // Импортируем наши сцены из отдельного файла
// const { scenes } = require('./scenes.js');

// const { welcomeMessage } = require('./message.js');

// // Инициализируем бота с вашим токеном
// const bot = new Telegraf(process.env.BOT_TOKEN);

// // Создаем менеджер сцен
// const stage = new Scenes.Stage(scenes);

// // Используем сессию и сцену
// bot.use(session())
// bot.use(stage.middleware());

// bot.start(async (ctx) => {
//   const welcomeMsg = welcomeMessage;
//   const photo = { source: './img/Linux-Logo.png' };

//   await ctx.replyWithPhoto(photo, {
//     caption: `${welcomeMsg}`,
//     reply_markup: {
//       inline_keyboard: [[{ text: 'Начать', callback_data: 'start' }]]
//     }
//   });
// });

// // Обработка кнопки "Начать"
// bot.action('start', (ctx) => {
//   ctx.answerCbQuery();
//   ctx.scene.enter('part001')
// });

// // Запускаем бота
// bot.launch();


// // // Импортируем необходимые библиотеки
// // const { Telegraf, Markup, Scenes, session } = require('telegraf')

// // // Импортируем наши сцены
// // const { part001 } = require('./composers/part001.composers.js')
// // const { part002 } = require('./composers/part002.composers.js')
// // const { part003 } = require('./composers/part003.composers.js')
// // const { part004 } = require('./composers/part004.composers.js')

// // // Инициализируем бота с вашим токеном
// // const bot = new Telegraf('6982892958:AAEFNqgFDd2wFTddmSLPGTij3N2v8085CqA')

// // // Создаем менеджер сцен
// // const stage = new Scenes.Stage([part001, part002, part003, part004])

// // // Используем сессию и сцену
// // bot.use(session())
// // bot.use(stage.middleware())

// // // Начальное сообщение
// // bot.start((ctx) => {
// //   ctx.reply(
// //     `Привет, ${ctx.from.first_name}! Готовы начать?`,
// //     Markup.inlineKeyboard([
// //       Markup.button.callback('Начать', 'START')
// //     ])
// //   )
// // })

// // // Обработка кнопки "Начать"
// // bot.action('START', (ctx) => ctx.scene.enter('part001'))

// // // Запускаем бота
// // bot.launch()
