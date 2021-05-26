const HDWalletProvider = require('truffle-hdwallet-provider')
const Web3 = require('web3')
const { interface, bytecode } = require('./compile')

const provider = new HDWalletProvider(
    'novel orient axis pencil icon ready club text ceiling force bind like',
    // 'https://rinkeby.infura.io/v3/ad508aa2845e411ca2f1da76e004d9e3',
    'https://kovan.infura.io/v3/5bf00e94c4824b989d8f249c71619f07',
)
const web3 = new Web3(provider)

const deploy = async () => {
    const accounts = await web3.eth.getAccounts()

    console.log('Attempting to deploy from account', accounts[0])

    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode, arguments: ['Hi there!'] })
        .send({ gas: '1000000', from: accounts[0] })

    console.log('Contract deployed to', result.options.address)
}

deploy()