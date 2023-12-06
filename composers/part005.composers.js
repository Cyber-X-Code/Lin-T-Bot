const { Composer } = require('telegraf');
const { part006Composer } = require('./part006.composers');
const commandPart005 = require('./commandPart005.json');

const part005Composer = new Composer();
let userCommands = {}; // Объект для хранения команд каждого пользователя

part005Composer.action('part005', async (ctx) => {
  const userId = ctx.from.id;

  // Проверяем, есть ли уже задания для данного пользователя
  if (!userCommands[userId]) {
    userCommands[userId] = {
      currentCommandIndex: 0
    };
  }

  const { currentCommandIndex } = userCommands[userId];
  await ctx.reply(commandPart005[currentCommandIndex].question);
  await ctx.answerCbQuery();
});

part005Composer.on('text', async (ctx) => {
  const userId = ctx.from.id;
  const answerPart005 = ctx.message.text.toLowerCase();

  try {
    if (userCommands[userId]) {
      const { currentCommandIndex } = userCommands[userId];
      
      if (answerPart005 === commandPart005[currentCommandIndex].command) {
        if (commandPart005[currentCommandIndex].image) {
          await ctx.replyWithPhoto({
            source: commandPart005[currentCommandIndex].image
          });
        }
      
        await ctx.reply(commandPart005[currentCommandIndex].output);
  
        userCommands[userId].currentCommandIndex++;
  
        if (userCommands[userId].currentCommandIndex >= commandPart005.length) {
          ctx.reply('Продолжаем приключения?', {
            reply_markup: {
              inline_keyboard: [
                [{ text: 'Конечно продолжаем!', callback_data: 'part006' }]
              ]
            }
          });
          // Удаляем задания пользователя после их выполнения
          delete userCommands[userId];
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
    }
  } catch(e) {
    console.error(e)
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
