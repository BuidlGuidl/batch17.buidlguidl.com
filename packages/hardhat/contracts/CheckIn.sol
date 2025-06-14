//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

interface IBatchRegistry {
    function checkIn() external;
}



contract CheckIn is Ownable{
    address private batchRegistryAddress;

    constructor (address _batchRegistry, address initialOwner) Ownable(initialOwner){
        batchRegistryAddress = _batchRegistry;
    }


    function callCheckIn() public onlyOwner{
        IBatchRegistry(batchRegistryAddress).checkIn();
    }

}
