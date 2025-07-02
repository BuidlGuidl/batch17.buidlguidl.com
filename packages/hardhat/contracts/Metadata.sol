//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

contract Metadata {
    string name;
    uint8[3] color;
    constructor() {
        name = "Bobby Liu";
        color = [0x50, 0x50, 0x50];
    }

    function getName() public view returns (string memory) {
        return name;
    }

    function getColor() public view returns (uint8[3] memory) {
        return color;
    }
}
