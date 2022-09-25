const accessKeyId = "KASK5X57P66F4K5Q5XN1TZQG";
const secretAccessKey = "TP4IagZA0DYdktmFIWjDPa2gX4aW2OkPHnyl1UlN";
const address = '0x1b9978D88f0B9a248d7AeC134d50F2D4f5DC4966';
const chainId = 1001;

const CaverExtKAS = require('caver-js-ext-kas');
caver = new CaverExtKAS(chainId, accessKeyId, secretAccessKey);
//const accessOptions = new AccessOptions(accessKeyId, secretAccessKey, chainId)
//caver.initKASAPI(chainId, accessKeyId, secretAccessKey);
var net = require('net');
var client = new net.Socket();

async function blocknumber() {
  const blockNumber = await caver.rpc.klay.getBlockNumber();
  console.log(blockNumber);
}

async function contractList() {
  const ftContracts = await caver.kas.tokenHistory.getFTContractList()
  console.log(ftContracts)
}

async function createToken17(){
  //const kip17 = new caver.kct.kip7(address);
  new_token = await caver.kct.kip17.deploy({
    name: 'Vote',
    symbol: 'VOT'
  }, address);
  //const ret2 = await caver.kas.kip17.getToken('', 1);
  //console.log(ret2);
  //kip17.detectInterface();
}

async function createToken7(){
  new_token = caver.kct.kip7.deploy({
    name: 'Votes',
    symbol: 'VOT',
    decimals: 18,
    initialSupply: '100',
  }, address);
}

async function distributeToken(token_address, sender, recipient, amt){
  kip7 = new caver.kct.kip7(token_address);
  kip7.options.from = sender;
  kip7.transfer(recipient, amt);
}

for (x in list){
  
}

//distributeToken('0x470787668904f21a53801440906a00f8953d1c6b', address, '0xa2d46ba2c0b20652e1b8112060cb5a6c61cd91c7', 10);
