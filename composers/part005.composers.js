// USER ID

const { Composer } = require('telegraf');
const { part006Composer } = require('./part006.composers');
const commandPart005 = require('./commandPart005.json');

const part005Composer = new Composer();
// Создаем объект, который будет хранить текущий индекс вопроса для каждого пользователя
const currentCommandIndexes = {};

part005Composer.action('part005', async (ctx) => {
  const userId = ctx.from.id;
  
  // Инициализируем текущий индекс вопроса для пользователя, если еще не сделали этого
  if (!currentCommandIndexes[userId]) {
    currentCommandIndexes[userId] = 0;
  }

  const currentIndex = currentCommandIndexes[userId];
  const question = commandPart005[currentIndex].question;
  
  await ctx.reply(question);
  await ctx.answerCbQuery();
});

part005Composer.on('text', async (ctx) => {
  const userId = ctx.from.id;
  const answer = ctx.message.text.toLowerCase();

  try {
    // Получаем текущий индекс вопроса для пользователя
    const currentIndex = currentCommandIndexes[userId];
  
    if (answer === commandPart005[currentIndex].command) {
      const currentCommand = commandPart005[currentIndex];
      
      if (currentCommand.image) {
        await ctx.replyWithPhoto({
          source: currentCommand.image
        });
      }
      
      await ctx.reply(currentCommand.output);

      currentCommandIndexes[userId]++;

      if (currentCommandIndexes[userId] >= commandPart005.length) {
        ctx.reply('Продолжаем приключения?', {
          reply_markup: {
            inline_keyboard: [
              [{ text: 'Конечно продолжаем!', callback_data: 'part006' }]
            ]
          }
        });
      } else {
        ctx.reply('Продолжить приключения?', {
          reply_markup: {
            inline_keyboard: [
              [{ text: 'Продолжить!', callback_data: 'part005' }]
            ]
          }
        });
      }
    } else {
      await ctx.reply('Неверный ответ. Попробуйте еще раз.');
    }
  } catch(e) {
    console.error(e);
  }
});

part005Composer.use(part006Composer);
module.exports = { part005Composer };


// NO ID USER

// const { Composer } = require('telegraf');
// const { part006Composer } = require('./part006.composers');
// const commandPart005 = require('./commandPart005.json');

// const part005Composer = new Composer();
// let currentCommandIndex = 0;

// part005Composer.action('part005', async (ctx) => {
//   await ctx.reply(commandPart005[currentCommandIndex].question);
//   await ctx.answerCbQuery();
// });

// part005Composer.on('text', async (ctx) => {
//   const answerPart005 = ctx.message.text.toLowerCase();

//   try {
//     if (answerPart005 === commandPart005[currentCommandIndex].command) {
//       if (commandPart005[currentCommandIndex].image) {
//         await ctx.replyWithPhoto({
//           source: commandPart005[currentCommandIndex].image
//         });
//       }
      
//       await ctx.reply(commandPart005[currentCommandIndex].output);

//       currentCommandIndex++;

//       if (currentCommandIndex >= commandPart005.length) {
//         ctx.reply('Продолжаем приключения?', {
//           reply_markup: {
//             inline_keyboard: [
//               [{ text: 'Конечно продолжаем!', callback_data: 'part006' }]
//             ]
//           }
//         });
//       } else {
//         ctx.reply('Продолжить приключения?', {
//           reply_markup: {
//             inline_keyboard: [
//               [{ text: 'Продолжить!', callback_data: 'part005' }]
//             ]
//           }
//         });
//       }
//     } else {
//       await ctx.reply('Неверный ответ. Попробуйте еще раз.');
//     }
//   } catch(e) {
//     console.error(e)
//   }
// });

// part005Composer.use(part006Composer);
// module.exports = { part005Composer };
