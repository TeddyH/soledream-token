pragma solidity ^0.4.24;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/SoleDreamToken.sol";

contract TestSoleDreamToken {

    function testInitialBalanceUsingDeployedContract() public {
        SoleDreamToken soleDreamToken = SoleDreamToken(DeployedAddresses.SoleDreamToken());

        uint expected = 1000000;
//        address owner_0 = soleDreamToken.tokenOwner(0);

        Assert.equal(soleDreamToken.balanceOf(owner_0), expected, "Owner should have 1000000 SoleDreamToken initially");
    }

    function testInitialBalanceWithNewSoleDreamToken() public {
        SoleDreamToken soleDreamToken = new SoleDreamToken();

        uint expected = 1000000;

        Assert.equal(soleDreamToken.balanceOf(msg.sender), expected, "Owner should have 1000000 SoleDreamToken initially");
    }

}