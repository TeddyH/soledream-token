pragma solidity ^0.4.24;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/SoleDreamToken.sol";

contract TestSoleDreamToken {

    function testInitialBalanceUsingDeployedContract() public {
        SoleDreamToken soleDreamToken = SoleDreamToken(DeployedAddresses.SoleDreamToken());

        uint expected = 1000000;

        Assert.equal(soleDreamToken.getBalance(tx.origin), expected, "Owner should have 10000 SoleDreamToken initially");
    }

    function testInitialBalanceWithNewSoleDreamToken() public {
        SoleDreamToken soleDreamToken = new SoleDreamToken();

        uint expected = 1000000;

        Assert.equal(soleDreamToken.getBalance(tx.origin), expected, "Owner should have 10000 SoleDreamToken initially");
    }

}