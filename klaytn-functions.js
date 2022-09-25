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
  const kip17 = new caver.kct.kip7(address);
  const make_token = await caver.kct.kip7.deploy({
    name: 'Vote',
    symbol: 'VOT'
  }, address);
  //const ret2 = await caver.kas.kip17.getToken('', 1);
  //console.log(ret2);
  kip7.detectInterface();
}

async function createToken7(){
  new_token = caver.kct.kip7.deploy({
    name: 'Jasmine',
    symbol: 'JAS',
    decimals: 18,
    initialSupply: '100000000000000000000',
  }, address);
  const kip7 = caver.kct.kip7.create('0xea29c8091d615c6f51592d17c8282fa187ed0b50');
  kip7.totalSupply().then(console.log);
}

createToken7();
