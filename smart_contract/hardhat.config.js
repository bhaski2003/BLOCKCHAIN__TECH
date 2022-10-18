require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-goerli.g.alchemy.com/v2/MopkaRquxVn1WQ40Yr6VJTaIcQ6UPhHV',
      accounts: ['521ac294b56c0e12b1607a25dc6362c8fb77ac4afe34f3f6325ef3fe415f0189'],
    },
  },
};