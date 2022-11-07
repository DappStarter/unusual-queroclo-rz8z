require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install inhale fresh turn bitter birth shift protect include kitchen swallow tennis'; 
let testAccounts = [
"0xe1a208422669a701188000e0051efb84f2a63228952756db7604ec3f49e2e97c",
"0x3cdc678d290de3707a41b5fd230fe72bf9819956070dfd2f5455bec86fc8f145",
"0x4a7a5b361db80752fda468abffee3bad31b4047cb013e1e6fe0bca4191fb1b7c",
"0xacd6369785dc4bd8c1c2733e4c4a327dde9ed7540aa8e80847e5d53e88efe237",
"0x5a0edc58668266f70b01ae5358ceb3db569178558446e14a18e3f7230f1e3b35",
"0x8a520aa5757b6362de66c9a4eca54a59dc447a5f598d458ef181786c53e81104",
"0xf50199b12074986031039fb67b57b6d5cab9c0831cea99b1a71f113e64ac77b2",
"0x40d7bf52347f8899eecc5c2863b63e35572d12d896ad4b603d83c4e20ff79318",
"0xf87c5fd61db6330a75443d7a622d3855e4f1f06ae65504c043f2540139d6e7bd",
"0xb18d8afbbc8a21234b5152c94a13b956eef5e0a3f2572b4f45ee710c25a342aa"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


