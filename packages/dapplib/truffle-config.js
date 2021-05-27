require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arena occur venture stone cruise random coin include process slot giant'; 
let testAccounts = [
"0x711a54cf743f7d5239af44d65855825f2c906ecc94b5913e0b7eb50955d5f9b9",
"0x256512f40535c3202fc05911e2e1fb71bbe7a37d4a30c0be5d471a89e322d7ec",
"0x470f6b86b72169807205ce3c4a63564b5546cbbb889db501a39119a7dd50d17c",
"0x978aa7f48733c1ebab31c012baee131d46925395d7bbc864584355c57c1a9059",
"0x451183a289d4b3275838d14ad5b2cc81a05a24b0177b25c4c074070a6792aebe",
"0xab6cc7f7869c50c15967323890c7c4c1fad44e051f84bd668edd3f336c0eeb5a",
"0xc6379346d1121a579c3510115ee764d917aaf7c09cdfc075344f6551f66dcb03",
"0xd64cb561df4c45dce41d150999e7bec649b1f227a564bd0788f4cf0fdb14a74a",
"0x51a6d76d7344b798263bd8e656b08def60fa595929f1ea784e2cda24b54d1213",
"0xb67e22af36a36ac350f94c2f10639a447ab1afbbbb2d1ec8430d01446bdcd11b"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

