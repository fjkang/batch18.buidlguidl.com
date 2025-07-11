//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import "@openzeppelin/contracts/access/Ownable.sol";

contract CheckIn is Ownable {
    // 保存BatchRegistry合约地址
    address batchRegistry_addr;

    constructor(address _batchRegistry_addr) Ownable(msg.sender) {
        batchRegistry_addr = _batchRegistry_addr;
    }

    function checkIn() external onlyOwner {
        IBatchRegistry(batchRegistry_addr).checkIn();
    }
}

interface IBatchRegistry {
    function checkIn() external;
}
