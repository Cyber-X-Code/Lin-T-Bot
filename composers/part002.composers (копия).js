// part002.composers.js

const { Scenes, Markup } = require('telegraf')

// Создаем сцену
const part002 = new Scenes.BaseScene('part002')

part002.enter((ctx) => {
  ctx.reply(
    'Команда для создания директорий?'
  )
})

part002.on('text', (ctx) => {
  if (ctx.message.text.toLowerCase() === 'mkdir') {
    ctx.reply('Верный ответ!')
    ctx.scene.enter('part003')
  } else {
    ctx.reply('Неверный ответ, попробуйте еще раз.')
  }
})

module.exports = { part002 }
