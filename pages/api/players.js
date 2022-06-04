import {
    AccountId,
    PrivateKey,
    Client,
    ContractId,
    ContractCallQuery
} from '@hashgraph/sdk'

const accountId = AccountId.fromString(process.env.OPERATOR_ID)
const privateKey = PrivateKey.fromString(process.env.OPERATOR_KEY)
const client = Client.forTestnet().setOperator(accountId, privateKey)


const contractIdStr = '0.0.34814406'
const contractId = ContractId.fromString(contractIdStr)

export default async (req, res) => {

    const players = await getNumberOfPlayers()
    const lastWinner = await getLastPlayer()

    res.send({
        players,
        lastWinner
    })

}

const getNumberOfPlayers = async () => {
    const numberOfPlayers = new ContractCallQuery()
        .setContractId(contractId)
        .setGas(25000)
        .setFunction("getNumPlayers")

    const numberOfPlayersResult = await numberOfPlayers.execute(client)

    const number = numberOfPlayersResult.getUint256()
    console.log(`Number of players: ${number}`)

    return number
}


const getLastPlayer = async () => {
    const lastPlayerQuery = new ContractCallQuery()
        .setContractId(contractId)
        .setGas(100000)
        .setFunction("getLastWinner")

    const lastPlayerResult = await lastPlayerQuery.execute(client)

    const lastPlayer = AccountId.fromSolidityAddress(lastPlayerResult.getAddress())
    console.log(`Last winner: ${lastPlayer}`)

    return lastPlayer.toString()
}