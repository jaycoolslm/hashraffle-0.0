// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

error Raffle__NotOpen();
error Raffle__InsufficientPlayers();
error Raffle__InsufficientHbarSent();
error Raffle__TxFailed();

contract Raffle {
    address payable[] players;
    bool raffleOpen = true;
    address lastWinner;

    function sendAndAddParticipant() external payable {
        if (!raffleOpen) {
            revert Raffle__NotOpen();
        }

        if (msg.value < 100000000) {
            revert Raffle__InsufficientHbarSent();
        }

        players.push(payable(msg.sender));
    }

    function checkRaffleState() private returns (bool upKeepNeeded) {
        bool enoughPlayers = players.length > 2;
        bool hasBalance = address(this).balance > 0;
        upKeepNeeded = (raffleOpen && enoughPlayers && hasBalance);
        raffleOpen = false;
        return upKeepNeeded;
    }

    function processWinner(uint random) external {
        bool upKeepNeeded = checkRaffleState();

        if (!upKeepNeeded) {
            revert Raffle__InsufficientPlayers();
        }

        address payable recentWinner = players[random];
        lastWinner = recentWinner;
        players = new address payable[](0);
        (bool success, ) = recentWinner.call{value: address(this).balance}("");

        if (!success) {
            revert Raffle__TxFailed();
        }

        raffleOpen = true;
    }

    function getNumPlayers() public view returns (uint) {
        return players.length;
    }

    function getLastWinner() public view returns (address) {
        return lastWinner;
    }
}
