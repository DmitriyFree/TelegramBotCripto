const {Markup} = require('telegraf');

const main = Markup.keyboard([
  ['/totalInfo'],
  ['/crypto'],
  ['/rates'],
])
.oneTime()
.resize()

module.exports = {main}