const availableCryptoId = ["bitcoin","ethereum","tether","usd-coin","binance-coin","xrp","binance-usd","cardano","solana","dogecoin","polkadot","wrapped-bitcoin","avalanche","tron","multi-collateral-dai","shiba-inu","polygon","litecoin","crypto-com-coin","unus-sed-leo",
"near-protocol","ftx-token","uniswap","bitcoin-cash","chainlink","monero","stellar","bitcoin-bep2","algorand","flow","cosmos","ethereum-classic","decentraland",
"elrond-egld","vechain","internet-computer","filecoin","tezos","the-sandbox","kucoin-token","zcash","hedera-hashgraph","pancakeswap","maker","defichain","eos","axie-infinity","aave","klaytn","theta","trueusd","huobi-token","the-graph","fantom","trustnote","thorchain",
"helium","paxos-standard","bitcoin-sv","iota","ecash","quant","nexo","neo","okb","chiliz","stacks","kusama","zilliqa","loopring","dash","waves","pax-gold","terrausd","enjin-coin","convex-finance","gala","basic-attention-token","celo","harmony","kava","amp","curve-dao-token","gnosis-gno",
"xinfin-network","decred","mina","kyber-network","arweave","kadena","compound","nem","gatetoken","holo","fei-protocol","qtum","lido-dao","1inch","wemix","symbol","0x","livepeer","iotex","counos-x","bancor","omg","theta-fuel","yearn-finance","oasis-network","icon","bitcoin-gold","secret",
"iostoken","swissborg","audius","ravencoin","ankr","synthetix-network-token","just","serum","dogelon","skale-network","ecomi","siacoin","horizen","golem-network-tokens","wax","gemini-dollar","ontology","binaryx","render-token","uma","mxc","braintrust","polymath-network","voyager-token",
"storj","keystone-of-opportunity-knowledge","hive-blockchain","playdapp","wootrade","rocket-pool","whitecoin","illuvium","digibyte","trust-wallet-token","rally","renbtc","celsius","casper","sushiswap","keep-network","radio-caca","persistence","velas","nervos-network","conflux-network","nano",
"lisk","telcoin","ren","dydx","ceek-vr","wink","ocean-protocol","pirate-chain","titanswap","syscoin","digitalbits","stasis-euro","anyswap","orbs","chromia","fetch","injective-protocol","celer-network","pundix-new","nucypher","power-ledger","civic","xyo","ontology-gas","status","wirex-token",
"raydium","origintrail","tribe","metisdao","coti","request","nxm","ultra","ardor","vulcan-forged-pyr","function-x","joe","maple","steem","cartesi","frax-share","dent","revain","wazirx","bitmax-token","moonriver","nest-protocol","vethor-token","yield-guild-games","metal","btc-standard-hashrate-token","funtoken","stormx",
"origin-protocol","sun-token","metahero","abbc-coin","myneighboralice","telos","swipe","perpetual-protocol","orchid","energy-web-token","olympus","mdex","reef","mobox","verge","aelf","aavegotchi","aragon","lukso","uquid-coin","superfarm","bifrost","platoncoin","augur","numeraire","prometeus","energi","strike",
"stratis","rsk-infrastructure-framework","standard-tokenization-protocol","ergo","badger-dao","rlc","api3","alpha-finance-lab","moviebloc","centrality","nkn","utrust","dero","klever","mask-network","singularitynet","loom-network","ampleforth","aioz-network","ark","radicle","reserve-rights","glitzkoin","origin-dollar",
"enzyme","dvision-network","celo-dollar","radix","band-protocol","certik","polkastarter","idex","venus","proton","fox-token","xdai","freeway-token","efforce","kardiachain","truefi-token","deeper-network","defi-pulse-index","deapcoin","bakerytoken","balancer","dusk-network","thunder-token","akash-network","ampleforth-governance-token",
"aergo","tomochain","mainframe","lcx","presearch","orion-protocol","unibright","yearn-finance-ii","platon","axel","polyswarm","hathor","safepal","wanchain","adventure-gold","alchemix","tokocrypto","seedify-fund","arpa-chain","covalent","rmrk","torn","marlin","trustswap","handshake","phantasma","elastos","lto-network","clover",
"tokenlon-network-token","troy","dia","travala","velo","bitshares","verasity","harvest-finance","adx-net","phala-network","super-zero-protocol","district0x","linear","alien-worlds","komodo","irisnet","groestlcoin","contentos","rai","babyswap","singularitydao","cudos","hard-protocol","wrapped-ncg","haven-protocol","terra-virtua-kolect",
"coinex-token","keep3rv1","assemble-protocol","wilder-world","yield-app","karura","ribbon-finance","paris-saint-germain-fan-token","streamr","derivadao","cortex","automata-network","morpheus-network","aeternity","fio-protocol","mantra-dao","six","rarible","tranchess","stox","bluzelle","bonfida","kleros","superrare","sonm","quickswap",
"redfox-labs","gas","frontier","quantstamp","firo","measurable-data-token","barnbridge","drep-new","cocos-bcx","whale","kin","student-coin","allianceblock","fusion","nuls","shiden-network","litentry","ramp","kryll","lattice-token","stafi","xmon","dexe","parsiq","selfkey","maps","tellor","x-world-games","saito","e-money-coin","akropolis","pluton",
"taboo-token","bella-protocol","mithril","mirror-protocol","aion","apollo-currency","crpt","bosagora","fc-barcelona-fan-token","bytom","waltonchain","beam","dock","apenft","dodo","time-new-bank","dforce","newscrypto","suku","router-protocol","gifto","nimiq","ariva","insurace","polkadex","cream-finance","powerpool","solanium","oneledger",
"the-force-protocol","dora-factory","vite","new-bitshares","gamercoin","ternoa","v-systems","burger-swap","sentinel","chainx","zkswap","dego-finance","hackenai","sora","cellframe","unifi-protocol-dao","prizm","shyft-network","stratos","vidt-datalink","grin","perlin","chain-guardians","xeno-token","arcblock","lossless","pivx","sharetoken","rubic",
"tokenclub","revv","epns","polkafoundry","dotmoovs","pendle","oraichain-token","antimatter","sentivate","pangolin","metahash","meta","dsla-protocol","paid-network","acent","sylo","unilend","polkamon","nebulas-token","openocean","polkamarkets","wom-protocol","nav-coin","populous","baasid","roobee","jupiter","hapi-one","morpheus-labs","ubix-network",
"exeedme","julswap","seele","multivac","dentacoin","konomi-network","gameswap","mahadao","pickle-finance","cardstack"]

const cryptoSymbols = ["BTC","ETH","USDT","USDC","BNB","XRP","BUSD","ADA","SOL","DOGE","DOT","WBTC","AVAX","TRX","DAI","SHIB","MATIC","LTC","CRO","LEO","NEAR","FTT","UNI","BCH","LINK","XMR","XLM","BTCB","ALGO","FLOW","ATOM",
"ETC","MANA","EGLD","VET","ICP","FIL","XTZ","SAND","KCS","ZEC","HBAR","CAKE","MKR","DFI","EOS","AXS","AAVE","KLAY","THETA","TUSD","HT","GRT","FTM","TTT","RUNE","HNT","USDP","BSV","MIOTA","XEC","QNT","NEXO","NEO","OKB","CHZ","STX","KSM","ZIL","LRC","DASH","WAVES",
"PAXG","UST","ENJ","CVX","GALA","BAT","CELO","ONE","KAVA","AMP","CRV","GNO","XDC","DCR","MINA","KNC","AR","KDA","COMP","XEM","GT","HOT","FEI","QTUM","LDO","1INCH","WEMIX","XYM","ZRX","LPT","IOTX","CCXX","BNT","OMG","TFUEL","YFI","ROSE","ICX","BTG","SCRT","IOST",
"CHSB","AUDIO","RVN","ANKR","SNX","JST","SRM","ELON","SKL","OMI","SC","ZEN","GLM","WAXP","GUSD","ONT","BNX","RNDR","UMA","MXC","BTRST","POLY","VGX","STORJ","KOK","HIVE","PLA","WOO","RPL","XWC","ILV","DGB","TWT","RLY","RENBTC","CEL","CSPR","SUSHI","KEEP","RACA",
"XPRT","VLX","CKB","CFX","XNO","LSK","TEL","REN","DYDX","CEEK","WIN","OCEAN","ARRR","TITAN","SYS","XDB","EURS","ANY","ORBS","CHR","FET","INJ","CELR","PUNDIX","NU","POWR","CVC","XYO","ONG","SNT","WXT","RAY","TRAC","TRIBE","METIS","COTI","REQ","NXM","UOS","ARDR",
"PYR","FX","JOE","MPL","STEEM","CTSI","FXS","DENT","REV","WRX","ASD","MOVR","NEST","VTHO","YGG","MTL","BTCST","FUN","STMX","OGN","SUN","HERO","ABBC","ALICE","TLOS","SXP","PERP","OXT","EWT","OHM","MDX","REEF","MBOX","XVG","ELF","GHST","ANT","LYXE","UQC","SUPER",
"BFC","PLTC","REP","NMR","PROM","NRG","STRK","STRAX","RIF","STPT","ERG","BADGER","RLC","API3","ALPHA","MBL","CENNZ","NKN","UTK","DERO","KLV","MASK","AGIX","LOOM","AMPL","AIOZ","ARK","RAD","RSR","GTN","OUSD","MLN","DVI","CUSD","EXRD","BAND","CTK","POLS","IDEX",
"XVS","XPR","FOX","STAKE","FWT","WOZX","KAI","TRU","DPR","DPI","DEP","BAKE","BAL","DUSK","TT","AKT","FORTH","AERGO","TOMO","MFT","LCX","PRE","ORN","UBT","YFII","LAT","AXEL","NCT","HTR","SFP","WAN","AGLD","ALCX","TKO","SFUND","ARPA","CQT","RMRK","TORN","POND",
"SWAP","HNS","SOUL","ELA","LTO","CLV","LON","TROY","DIA","AVA","VELO","BTS","VRA","FARM","ADX","PHA","SERO","DNT","LINA","TLM","KMD","IRIS","GRS","COS","RAI","BABY","SDAO","CUDOS","HARD","WNCG","XHV","TVK","CET","KP3R","ASM","WILD","YLD","KAR","RBN","PSG","DATA",
"DDX","CTXC","ATA","MNW","AE","FIO","OM","SIX","RARI","CHESS","STX","BLZ","FIDA","PNK","RARE","SNM","QUICK","RFOX","GAS","FRONT","QSP","FIRO","MDT","BOND","DREP","COCOS","WHALE","KIN","STC","ALBT","FSN","NULS","SDN","LIT","RAMP","KRL","LTX","FIS","XMON","DEXE",
"PRQ","KEY","MAPS","TRB","XWG","SAITO","NGM","AKRO","PLU","TABOO","BEL","MITH","MIR","AION","APL","CRPT","BOA","BAR","BTM","WTC","BEAM","DOCK","NFT","DODO","TNB","DF","NWC","SUKU","ROUTE","GTO","NIM","ARV","INSUR","PDEX","CREAM","CVP","SLIM","OLT","FOR","DORA",
"VITE","NBS","GHX","CAPS","VSYS","BURGER","DVPN","PCX","ZKS","DEGO","HAI","XOR","CELL","UNFI","PZM","SHFT","STOS","VIDT","GRIN","PERL","CGG","XNO","ABT","LSS","PIVX","SHR","RBC","TCT","REVV","PUSH","PKF","MOOV","PENDLE","ORAI","MATTER","SNTVT","PNG","MHC","MTA",
"DSLA","PAID","ACE","SYLO","UFT","PMON","NAS","OOE","POLK","WOM","NAV","PPT","BAAS","ROOBEE","JUP","HAPI","MITX","UBX","XED","JULD","SEELE","MTV","DCN","KONO","GSWAP","MAHA","PICKLE","CARD"]

const availableRatesId = ["iov-blockchain","belize-dollar","papua-new-guinean-kina","multi-collateral-dai","serbian-dinar","ion","qtum","osmosis","palladium-ounce","mauritanian-ouguiya-(pre-2018)","malaysian-ringgit","waves","netherlands-antillean-guilder","congolese-franc",
"macanese-pataca","lesotho-loti","japanese-yen","djiboutian-franc","gibraltar-pound","armenian-dram","zambian-kwacha","norwegian-krone","czech-republic-koruna","romanian-leu","swiss-franc","vanuatu-vatu","polish-zloty","irisnet","cayman-islands-dollar","aruban-florin","kyrgystani-som",
"burundian-franc","croatian-kuna","saudi-riyal","indian-rupee","moldovan-leu","bangladeshi-taka","turkish-lira","binance-coin","somali-shilling","jamaican-dollar","liberian-dollar","rwandan-franc","comorian-franc","saint-helena-pound","weth","dogecoin","mozambican-metical","argentine-peso",
"manx-pound","dash","bitcoin","moroccan-dirham","guatemalan-quetzal","new-taiwan-dollar","honduran-lempira","silver-ounce","barbadian-dollar","macedonian-denar","guernsey-pound","botswanan-pula","euro","jersey-pound","terrausd","angolan-kwanza","haitian-gourde","sentinel","bolivian-boliviano",
"persistence","thorchain","cape-verdean-escudo","jordanian-dinar","chilean-unit-of-account-(uf)","salvadoran-colón","cuban-convertible-peso","hong-kong-dollar","surinamese-dollar","gambian-dalasi","cfa-franc-beac","new-zealand-dollar","mauritanian-ouguiya","danish-krone","omani-rial","samoan-tala",
"ugandan-shilling","gold-ounce","australian-dollar","litecoin","chinese-yuan-renminbi","sierra-leonean-leone","kazakhstani-tenge","fijian-dollar","hungarian-forint","solomon-islands-dollar","united-states-dollar","são-tomé-and-príncipe-dobra-(pre-2018)","laotian-kip","cosmos","kuwaiti-dinar","yemeni-rial",
"indonesian-rupiah","maldivian-rufiyaa","sri-lankan-rupee","guinean-franc","bulgarian-lev","zcash","icelandic-króna","bosnia-herzegovina-convertible-mark","bitcoin-cash","russian-ruble","special-drawing-rights","myanma-kyat","sudanese-pound","north-korean-won","panamanian-balboa","cambodian-riel","malagasy-ariary",
"swazi-lilangeni","azerbaijani-manat","egyptian-pound","ethiopian-birr","chilean-peso","guyanaese-dollar","ethereum","são-tomé-and-príncipe-dobra","uzbekistan-som","eritrean-nakfa","afghan-afghani","cfa-franc-bceao","bahraini-dinar","dominican-peso","cuban-peso","tether","ukrainian-hryvnia","crypto-com-coin",
"ghanaian-cedi","bhutanese-ngultrum","mexican-peso","brazilian-real","zimbabwean-dollar","trinidad-and-tobago-dollar","cfp-franc","paraguayan-guarani","colombian-peso","iraqi-dinar","nicaraguan-córdoba","mongolian-tugrik","thai-baht","eos","south-african-rand","vietnamese-dong","namibian-dollar","united-arab-emirates-dirham",
"east-caribbean-dollar","nigerian-naira","israeli-new-sheqel","lebanese-pound","platinum-ounce","south-sudanese-pound","mauritian-rupee","tanzanian-shilling","tajikistani-somoni","syrian-pound","brunei-dollar","singapore-dollar","british-pound-sterling","likecoin","swedish-krona","chinese-yuan-(offshore)","nepalese-rupee",
"costa-rican-colón","georgian-lari","venezuelan-bolívar-soberano","algerian-dinar","qatari-rial","libyan-dinar","iranian-rial","uruguayan-peso","seychellois-rupee","falkland-islands-pound","canadian-dollar","bermudan-dollar","malawian-kwacha",
"peruvian-nuevo-sol","belarusian-ruble","philippine-peso","tunisian-dinar","turkmenistani-manat","kenyan-shilling","south-korean-won","pakistani-rupee"]

const ratesSymbols = ["IOV","BZD","PGK","DAI","RSD","ION","QTUM","OSMO","XPD","MRO","MYR","WAVES","ANG","CDF","MOP","LSL","JPY","DJF","GIP","AMD","ZMW","NOK","CZK","RON","CHF","VUV","PLN","IRIS","KYD","AWG","KGS","BIF","HRK","SAR","INR","MDL",
"BDT","TRY","BNB","SOS","JMD","LRD","RWF","KMF","SHP","WETH","DOGE","MZN","ARS","IMP","DASH","BTC","MAD","GTQ","TWD","HNL","XAG","BBD","MKD","GGP","BWP","EUR","JEP","UST","AOA","HTG","DVPN","BOB","XPRT","RUNE","CVE","JOD","CLF","SVC","CUC","HKD",
"SRD","GMD","XAF","NZD","MRU","DKK","OMR","WST","UGX","XAU","AUD","LTC","CNY","SLL","KZT","FJD","HUF","SBD","USD","STD","LAK","ATOM","KWD","YER","IDR","MVR","LKR","GNF","BGN","ZEC","ISK","BAM","BCH","RUB","XDR","MMK","SDG","KPW","PAB","KHR","MGA",
"SZL","AZN","EGP","ETB","CLP","GYD","ETH","STN","UZS","ERN","AFN","XOF","BHD","DOP","CUP","USDT","UAH","CRO","GHS","BTN","MXN","BRL","ZWL","TTD","XPF","PYG","COP","IQD","NIO","MNT","THB","EOS","ZAR","VND","NAD","AED","XCD","NGN","ILS","LBP","XPT",
"SSP","MUR","TZS","TJS","SYP","BND","SGD","GBP","LIKE","SEK","CNH","NPR","CRC","GEL","VES","DZD","QAR","LYD","IRR","UYU","SCR","FKP","CAD","BMD","MWK","PEN","BYN","PHP","TND","TMT","KES","KRW","PKR"]


module.exports = {
  isCrypto(value) {
    const returnedObj = {
      isValid: false,
      validKey: ''
    }
    if (availableCryptoId.includes(value)) {
      returnedObj.isValid = true
      returnedObj.validKey = value;
    } else {
      const compareVale = value.toUpperCase();
      if (cryptoSymbols.includes(compareVale)) {
        returnedObj.isValid = true
        returnedObj.validKey = compareVale
      }
    }
    return returnedObj;
  },
  isRates(value) {
    const returnedObj = {
      isValid: false,
      validKey: ''
    }
    if (availableRatesId.includes(value)) {
      returnedObj.isValid = true
      returnedObj.validKey = value
    } else {
      const compareVale = value.toUpperCase()
      if (ratesSymbols.includes(compareVale)) {
        returnedObj.isValid = true
        returnedObj.validKey = compareVale
      }
    }
    return returnedObj
  }
}