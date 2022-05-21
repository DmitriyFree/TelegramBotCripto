const availableCryptoId = ['bitcoin','ethereum','tether','binance-coin', 'usd-coin', 'xrp',
'solana','cardano', 'binance-usd','dogecoin','terrausd', 'polkadot',
'avalanche','wrapped-bitcoin','shiba-inu','steth','tron', 'multi-collateral-dai',
'polygon','terra-luna', 'near-protocol','crypto-com-coin','litecoin', 'unus-sed-leo',
'ftx-token','bitcoin-cash','uniswap','chainlink','algorand','stellar',
'cosmos','bitcoin-bep2','ethereum-classic','monero','frax','vechain',
'elrond-egld','internet-computer', 'filecoin','the-sandbox','decentraland','defichain',
'tezos','theta','pancakeswap','eos','hedera-hashgraph','axie-infinity',
'thorchain','aave','kucoin-token','klaytn','fantom','flow',
'helium','trueusd','zcash','huobi-token','convex-finance','waves',
'bitcoin-sv','trustnote','the-graph','maker','ecash','iota',
'nexo','neo','paxos-standard','curve-dao-token','quant','okb',
'stacks','neutrino-usd','zilliqa','chiliz','celo','kusama',
'dash','loopring','gala','harmony','xinfin-network','liquity-usd',
'enjin-coin','mina','basic-attention-token','gnosis-gno','pax-gold','lido-dao',
'holo','compound','decred','amp','arweave','nem',
'icon','theta-fuel','kava','yearn-finance'];

const availableRatesId = ['iov-blockchain',"djiboutian-franc","bosnia-herzegovina-convertible-mark","laotian-kip",
"netherlands-antillean-guilder","ion","bulgarian-lev","cayman-islands-dollar","papua-new-guinean-kina","osmosis","polish-zloty","cambodian-riel","gambian-dalasi",
"mauritanian-ouguiya-(pre-2018)","manx-pound","uruguayan-peso","bitcoin-cash","crypto-com-coin","jamaican-dollar","yemeni-rial","iranian-rial","peruvian-nuevo-sol","bitcoin","somali-shilling",
"aruban-florin","ukrainian-hryvnia","danish-krone","armenian-dram","irisnet","dogecoin","saudi-riyal","macedonian-denar","south-korean-won","costa-rican-colón","belarusian-ruble","omani-rial",
"seychellois-rupee","new-taiwan-dollar","liberian-dollar","surinamese-dollar","venezuelan-bolívar-soberano","weth","botswanan-pula","mozambican-metical","brunei-dollar","salvadoran-colón","eos",
"cfa-franc-beac","swedish-krona","kuwaiti-dinar","gibraltar-pound","serbian-dinar","mexican-peso","fijian-dollar","colombian-peso","honduran-lempira","uzbekistan-som","lesotho-loti","vanuatu-vatu",
"barbadian-dollar","russian-ruble","terrausd","multi-collateral-dai","malaysian-ringgit","guernsey-pound","macanese-pataca","swiss-franc","guatemalan-quetzal","jordanian-dinar","bhutanese-ngultrum","euro","congolese-franc","saint-helena-pound",
"cuban-convertible-peso","icelandic-króna","chinese-yuan-(offshore)","burundian-franc","samoan-tala","solomon-islands-dollar","comorian-franc","tunisian-dinar","chilean-unit-of-account-(uf)","mongolian-tugrik","litecoin","turkish-lira",
"mauritanian-ouguiya","south-african-rand","romanian-leu","namibian-dollar","mauritian-rupee","algerian-dinar","binance-coin","platinum-ounce","ugandan-shilling","libyan-dinar","indonesian-rupiah","angolan-kwanza","tajikistani-somoni","dash",
"myanma-kyat","moldovan-leu","united-states-dollar","thai-baht","bangladeshi-taka","cosmos","sierra-leonean-leone","guyanaese-dollar","hong-kong-dollar","jersey-pound","kenyan-shilling","syrian-pound","sentinel","ethereum","egyptian-pound","guinean-franc",
"sudanese-pound","north-korean-won","haitian-gourde","panamanian-balboa","são-tomé-and-príncipe-dobra-(pre-2018)","australian-dollar","indian-rupee","malagasy-ariary","azerbaijani-manat","malawian-kwacha","israeli-new-sheqel","lebanese-pound",
"rwandan-franc","eritrean-nakfa","chinese-yuan-renminbi","persistence","vietnamese-dong","georgian-lari","ethiopian-birr","thorchain","cuban-peso","czech-republic-koruna","belize-dollar","moroccan-dirham","cfp-franc","nepalese-rupee",
"paraguayan-guarani","zimbabwean-dollar","pakistani-rupee","tanzanian-shilling","iraqi-dinar","gold-ounce","nicaraguan-córdoba","croatian-kuna","kazakhstani-tenge","japanese-yen","united-arab-emirates-dirham","sri-lankan-rupee","palladium-ounce","east-caribbean-dollar",
"falkland-islands-pound","qtum","norwegian-krone","hungarian-forint","canadian-dollar","bahraini-dinar","são-tomé-and-príncipe-dobra","south-sudanese-pound","singapore-dollar","dominican-peso","swazi-lilangeni","british-pound-sterling","chilean-peso","likecoin",
"brazilian-real","zcash","new-zealand-dollar","kyrgystani-som","silver-ounce","cfa-franc-bceao","maldivian-rufiyaa","qatari-rial","afghan-afghani","bolivian-boliviano","trinidad-and-tobago-dollar","cape-verdean-escudo","waves","zambian-kwacha","argentine-peso",
"bermudan-dollar","ghanaian-cedi","nigerian-naira","turkmenistani-manat","philippine-peso","tether","special-drawing-rights"];

const ratesSymbols = ["DJF","LBP","BNB","DVPN","LYD","FJD","WAVES","BYN","HRK","UAH","BMD","GNF","TMT","HNL","UZS","KYD","ZEC","XDR","DAI","MGA","IOV","PLN","EUR","NOK","NAD","ION","PHP","JMD","AED","CAD","QTUM","SRD","MOP","MYR","OSMO","BDT","AWG","MZN","GGP",
"MRO","YER","STN","ETB","XAF","UYU","ISK","CLP","CVE","GBP","BRL","RWF","XPRT","PEN","IRIS","NIO","DKK","COP","PKR","MWK","XAG","SAR","XOF","CHF","FKP","CNH","VES","AMD","BOB","WETH","ILS","MAD","DOP","MRU","HTG","TWD","OMR","TTD","HUF","XAU","DASH","KMF","PGK",
"GIP","VUV","CLF","BBD","SOS","LAK","UST","BAM","SDG","GTQ","ETH","BND","SBD","JOD","CUC","USDT","KES","WST","CRO","TND","MNT","CDF","TJS","RUB","ZAR","PYG","JPY","SGD","SZL","KWD","ZMW","GEL","AOA","GYD","SEK","IDR","USD","LTC","ATOM","KHR","SLL","IMP","BZD",
"SYP","XPD","AFN","BGN","BCH","IRR","KPW","PAB","STD","LKR","CZK","UGX","AZN","BTC","BTN","HKD","AUD","BHD","RSD","ANG","ERN","TRY","NGN","SVC","CUP","LSL","KZT","MKD","MDL","ZWL","GHS","TZS","EOS","BIF","MUR","RON","CNY","GMD","RUNE","XCD","NPR","THB","VND",
"ARS","KRW","XPT","DOGE","EGP","DZD","SSP","IQD","XPF","MMK","MXN","NZD","BWP","SHP","CRC","LIKE","LRD","SCR","KGS","MVR","QAR","JEP","INR"];


module.exports = {
  isCrypto(value) {
    if (availableCryptoId.includes(value)) return true;
    else return false;
  },
  isRates(value) {
    if (availableRatesId.includes(value) || ratesSymbols.includes(value)) return true;
    else return false;
  }
}