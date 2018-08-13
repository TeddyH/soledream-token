pragma solidity ^0.4.24;

import "openzeppelin-solidity/contracts/token/ERC20/MintableToken.sol";

contract SoleDreamToken is MintableToken {
    string public name = "SoleDream Token";
    string public symbol = "SLDT";
    uint public decimals = 18;
    uint public INITIAL_SUPPLY = 1000000 * (10 ** decimals); // 백만개

    constructor() public {
        totalSupply_ = INITIAL_SUPPLY;
        balances[msg.sender] = INITIAL_SUPPLY;
    }
}