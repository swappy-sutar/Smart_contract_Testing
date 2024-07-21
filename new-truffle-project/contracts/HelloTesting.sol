// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract HelloTesting {

    function getMessage()public pure returns (string memory) {
        return "good morning";
    }

    function getNum()public pure returns(uint){
        return 1;
    }
}
  