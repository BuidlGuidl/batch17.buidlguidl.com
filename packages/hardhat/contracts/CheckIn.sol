// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

interface IBatchRegistry {
    function checkIn() external;
}

contract CheckIn {
    IBatchRegistry public batchRegistry;
    address public owner;

    constructor(address _batchRegistry) {
        batchRegistry = IBatchRegistry(_batchRegistry);
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the contract owner");
        _;
    }

    function checkIn() external onlyOwner {
        batchRegistry.checkIn();
    }
}
