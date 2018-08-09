const SoleDreamToken = artifacts.require("SoleDreamToken.sol");

const assert = require("chai").assert;
const truffleAssert = require('truffle-assertions');


contract("TokenTest", (accounts) => {

    const owner = accounts[0];

    const myAccount = accounts[3];


    before(async () => {
        console.log("before ...");
        token = await SoleDreamToken.new({ from: owner });
    });

    beforeEach(async () => {
        console.log("beforeEach ...");
        console.log("SLDT address : " + token.address);
        console.log("Owner address : " + owner);

    });

    it("총 제공량 확인", async () => {
        const totalSupply = await token.totalSupply();
        console.log("total supply : " + totalSupply);
        assert.isTrue(totalSupply > 0, "발행량 없음..");
    });

    it("토큰 발행 확인", async () => {
        console.log("wife token address : " + token.address);
        console.log("owner address : " + owner);

        const ownerTokenBalance = await wifeCoin.balanceOf(owner);
        console.log("owner TokenBalance : " + ownerTokenBalance);

        assert.isTrue(ownerTokenBalance > 0, "토큰 없음..");
    });

    it("transfer test", async () => {
        console.log("wife token address : " + wifeCoin.address);
        console.log("owner address : " + owner);
        console.log("accounts[2] : " + accounts[2]);

        let tx = await wifeCoin.transfer(accounts[2], 20000000000, {from: owner});

        // truffleAssert.eventEmitted(tx, "Transfer", (ev) => {
        //     return true;
        // });

        truffleAssert.eventNotEmitted(tx, "Transfer");

        assert.isTrue(wifeCoin.balanceOf(accounts[2]) > 0, "transfer fail. to : " + accounts[2] + ", value : " + 20000000000);
    });

});