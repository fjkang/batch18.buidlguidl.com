// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {BatchRegistry} from "./BatchRegistry.sol";

interface ICheckIn {
  function checkMeIn() external;
}

contract CheckIn is ICheckIn {
  BatchRegistry public immutable batchRegistry;
  address public immutable owner = 0x1F3bfa0620f95fda15E67F3e8FA459A258559E94;

  constructor(address _batchRegistry) payable {
    batchRegistry = BatchRegistry(payable(_batchRegistry));
  }

  function checkMeIn() public {
    require(msg.sender == owner, "You aren't the owner");
    batchRegistry.checkIn();
  }
}