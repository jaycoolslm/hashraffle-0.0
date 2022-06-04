// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import {
    AccountId,
    PrivateKey,
    Client,
    ContractId,
    ContractExecuteTransaction,
    ContractCallQuery,
    ContractFunctionParameters
} from '@hashgraph/sdk'

const accountId = AccountId.fromString(process.env.OPERATOR_ID)
const privateKey = PrivateKey.fromString(process.env.OPERATOR_KEY)
const client = Client.forTestnet().setOperator(accountId, privateKey)


const contractIdStr = '0.0.34814406'
const contractId = ContractId.fromString(contractIdStr)



export default async (req, res) => {

    let participants = await getNumberOfPlayers()

    const body = JSON.parse(req.body)

    console.log(body.success)

    if (body.success) {

        if (participants > 2) {
            await processWinner(participants)
            res.send(0)
            return
        }

        res.send(participants)
    } else {
        console.log('No request')
    }

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

const processWinner = async (number) => {
    const randomNumber = Math.floor(Math.random() * number)

    const winner = new ContractExecuteTransaction()
        .setContractId(contractId)
        .setGas(100000)
        .setFunction(
            "processWinner",
            new ContractFunctionParameters()
                .addUint256(randomNumber)
        )
        .freezeWith(client)

    const winnerSubmit = await winner.execute(client)
    const receipt = await winnerSubmit.getReceipt(client)

    console.log(`- Sent to winnner: ${receipt.status.toString()}`);
}