import React from 'react'

const RaffleModal = ({ players, lastWinner }) => {
    return (
        <div className='raffle-modal'>
            <h4>Current participants: {players}</h4>
            <h4>Players needed for next winner: {3 - players}</h4>
            <h4>Last winner: {lastWinner}</h4>
        </div>
    )
}

export default RaffleModal