const {Telegraf, Markup} = require('telegraf')
const cryptoDataManager = require('./modules/cryptoDataManager');
const answerHandler = require('./modules/telegramAnswerHandler');
const dot = require('dotenv');

dot.config();

const token = process.env.TOKEN;

const bot = new Telegraf(token);

bot.start((ctx) => ctx.reply('Welcome'))

bot.command('crypto', (ctx) => {
  return ctx.reply(
    'Выберите криптовалюту',
    Markup.keyboard([['bitcoin', 'ethereum'],[ 'xrp', 'litecoin', 'cardano'], ['stellar', 'solana']], {})
  )
})

bot.on('text', async (ctx) => {
  const listCrypto = [
    'bitcoin',         'ethereum',          'tether',
    'binance-coin',    'usd-coin',          'xrp',
    'solana',          'cardano',           'binance-usd',
    'dogecoin',        'terrausd',          'polkadot',
    'avalanche',       'wrapped-bitcoin',   'shiba-inu',
    'steth',           'tron',              'multi-collateral-dai',
    'polygon',         'terra-luna',        'near-protocol',
    'crypto-com-coin', 'litecoin',          'unus-sed-leo',
    'ftx-token',       'bitcoin-cash',      'uniswap',
    'chainlink',       'algorand',          'stellar',
    'cosmos',          'bitcoin-bep2',      'ethereum-classic',
    'monero',          'frax',              'vechain',
    'elrond-egld',     'internet-computer', 'filecoin',
    'the-sandbox',     'decentraland',      'defichain',
    'tezos',           'theta',             'pancakeswap',
    'eos',             'hedera-hashgraph',  'axie-infinity',
    'thorchain',       'aave',              'kucoin-token',
    'klaytn',          'fantom',            'flow',
    'helium',          'trueusd',           'zcash',
    'huobi-token',     'convex-finance',    'waves',
    'bitcoin-sv',      'trustnote',         'the-graph',
    'maker',           'ecash',             'iota',
    'nexo',            'neo',               'paxos-standard',
    'curve-dao-token', 'quant',             'okb',
    'stacks',          'neutrino-usd',      'zilliqa',
    'chiliz',          'celo',              'kusama',
    'dash',            'loopring',          'gala',
    'harmony',         'xinfin-network',    'liquity-usd',
    'enjin-coin',      'mina',              'basic-attention-token',
    'gnosis-gno',      'pax-gold',          'lido-dao',
    'holo',            'compound',          'decred',
    'amp',             'arweave',           'nem',
    'icon',            'theta-fuel',        'kava',
    'yearn-finance'
  ];
  const text = ctx.message.text;

  let isCryptoId = false;
  listCrypto.forEach((item) => {
    if (item == text) {
      isCryptoId = true;
    }
  });
  if (isCryptoId) {
    const data = await cryptoDataManager.getCrytocurrencyById(text);
    if (data.errors) {
      ctx.telegram.sendMessage(chatId, "Ошыбка!!! Не удалось получить данные");
    } else {
      answerHandler.randerCryptocurrency(ctx, data.data);
    }
  }
})

// bot.command('str', async (ctx) => {
//   const data = await cdm.getCryptocurrencyByRank(100);
//   const arr = [];
//   data.forEach((item) => {
//      arr.push(item.id);
//   });
//   console.log(arr);
// })


// bot.command('custom', async (ctx) => {
//   return await ctx.reply('Custom buttons keyboard', Markup
//     .keyboard([
//       ['🔍 Search', '😎 Popular'], // Row1 with 2 buttons
//       ['☸ Setting', '📞 Feedback'], // Row2 with 2 buttons
//       ['📢 Ads', '⭐️ Rate us', '👥 Share'] // Row3 with 3 buttons
//     ])
//     .oneTime()
//     .resize()
//   )
// })


bot.launch();


