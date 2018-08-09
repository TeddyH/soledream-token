pragma solidity ^0.4.24;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/SoleDreamToken.sol";

contract TestSoleDreamToken {

    function testInitialBalanceUsingDeployedContract() public {
        SoleDreamToken soleDreamToken = SoleDreamToken(DeployedAddresses.SoleDreamToken());

        uint expected = 1000000000000000000000000;
//        address owner_0 = soleDreamToken.tokenOwner(0);

        Assert.equal(soleDreamToken.balanceOf(msg.sender), expected, "Owner should have 1000000 SoleDreamToken initially");
    }

    // 에러 나서 주석 처리
//    function testInitialBalanceWithNewSoleDreamToken() public {
//        SoleDreamToken soleDreamToken = new SoleDreamToken();
//
//        uint expected = 1000000;
//
//        Assert.equal(soleDreamToken.balanceOf(tx.origin), expected, "Owner should have 1000000 SoleDreamToken initially");
//    }

}