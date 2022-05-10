module.exports = {
  randerCryptocurrency: (matchedContext, data) => {
    const chatId = matchedContext.message.chat.id;
    const stringAnswer =
    `Название: ${data.name}
Символ: ${data.symbol}
Ранг: ${data.rank}
Цена: ${data.priceUsd}
Изменение: ${data.change}
    `;
    matchedContext.telegram.sendMessage(chatId, stringAnswer);
  }
}