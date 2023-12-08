// part004.composers.js

const { Scenes } = require('telegraf')

// Создаем сцену
const part004 = new Scenes.BaseScene('part004')

part004.enter((ctx) => {
  ctx.reply('Поздравляем! Вы успешно завершили курс!')
})

module.exports = { part004 }
