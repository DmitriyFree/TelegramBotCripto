const start =
  'Я помогу узнать свежую информацию по криптовалюте а также ставку национальных валют и металов.'+
  '\n\nОзнакомиться с основными командами здесь /help для общего понимания как работает бот'+
  '\n\n<b>Основные команды</b>'+
  '\n/totalinfo - цены на основные валюты и криптовальты'+
  '\n/cryptotop20 - топ 20 криптовалют по капитализации'+
  '\n/rates - цены на валюту и драгметалы'+
  '\n/crypto - криптовалюта инфо'+
  '\n\n/converter - конвертер валют'+
  '\n\n/help - справка по командах'

const help =
  '<b>Узнать цену</b>'+
  '\n/totalinfo - ценам на основные валюты и криптовальты'+
  '\n/rates - цены на валюту и драгметалы'+
  '\n/crypto - криптовалюта инфо'+
  '\n/cryptotop20  - топ 20 криптовалют по капитализации'+
  '\n\n<b>Другие команды</b>'+
  '\n/converter - конвертер валют'+
  '\n/help - справка по командах'+
  '\n\nПомощь по командах а также Список доступных валют смотрите <a href="https://dmitriyfree.github.io/cryptotgbotres/">здесь</a>'

const cryptoQuestion = 'Введите название или символ криптовалюты'
const ratesQuestion = 'Введите или выберете на панели кнопок название валюты или символ (символ доступен в формате aA-zZ)'

const convertStart = 'Введите комманду по примеру \n 10 USD in EUR'

const wrongQuery = 'Формат запроса не верен'

const cryptoError = '🚫 Криптовалюта с таким названием не найдена'
const ratesError = '🚫 Данные с таким названием не найдены'
const readDataError = '🚫 Ошыбка!!! Не удалось получить данные'
const defaultError = '🚫 Ошыбка!!! Что-то пошло не так'


module.exports = {start, help, cryptoQuestion, ratesQuestion, convertStart, wrongQuery, cryptoError, ratesError, readDataError, defaultError}
