// https:eth-goerli.g.alchemy.com/v2/EjcoXzFaD8z5eqmSq80Sw2BeyKpPaY2z

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli:{
      url: 'https://eth-goerli.g.alchemy.com/v2/EjcoXzFaD8z5eqmSq80Sw2BeyKpPaY2z',
      accounts: ['3504c794766086c04cdb25a9abe5bf18cc058f52b43ec55615e0850a781f6f2e']
    }
  }
}