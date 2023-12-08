// part003.composers.js

const { Scenes, Markup } = require('telegraf')

// Создаем сцену
const part003 = new Scenes.BaseScene('part003')

part003.enter((ctx) => {
  ctx.reply(
    'Вывести содержимое директорий?'
  )
})

part003.on('text', (ctx) => {
  if (ctx.message.text.toLowerCase() === 'ls') {
    ctx.reply('Верный ответ!')
    ctx.scene.enter('part004')
  } else {
    ctx.reply('Неверный ответ, попробуйте еще раз.')
  }
})

module.exports = { part003 }
