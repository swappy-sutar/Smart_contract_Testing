// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract StorageVal{
    string public message ;

    function setmessage(string memory _message1)public {
        message = _message1;
    }

      function getmessage()public view returns(string memory){
        return message;
    }
}
