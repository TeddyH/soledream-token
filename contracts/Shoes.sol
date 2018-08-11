pragma solidity ^0.4.24;

contract Shoes {

    constructor() public {

    }

    function () public payable {
        buyShoes(msg.sender);

    }

    function buyShoes(address _beneficiary) public payable {
        uint256 weiAmount = msg.value;
        _test(_beneficiary, weiAmount);

    }

    function _test(address _beneficiary, uint256 _weiAmount) internal {
        require(_beneficiary != address(0));
        require(_weiAmount != 0);
    }
}
