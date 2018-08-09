const SoleDreamToken = artifacts.require("SoleDreamToken");

contract("SoleDreamToken", (accounts) => {

    const owner = accounts[0];

    const myAccount = accounts[3];

    before(async () => {
        console.log("before ...");
        token = await SoleDreamToken.new({ from: owner });
    });

    beforeEach(async () => {
        console.log("1. SLDT address : " + token.address);
        console.log("2. Owner address : " + owner);
        console.log("3. My account address : " + myAccount);
    });

    it("총 제공량", async () => {
        const totalSupply = await token.totalSupply();
        console.log("total supply : " + totalSupply);
        assert.isTrue(totalSupply > 0, "발행량 없음..");
    });

    it("토큰 발행", async () => {
        const ownerTokenBalance = await token.balanceOf(owner);
        console.log("owner TokenBalance : " + ownerTokenBalance);
        assert.isTrue(ownerTokenBalance > 0, "토큰 없음..");
    });


    it("토큰 전송", async () => {
        let value = 2000000000000000000;

        // gas : gas limit, gasPrice : 가스가격 (wei)
        let result = await token.transfer(myAccount, value, {from: owner});
        // let result = await token.transfer(accounts[2], 200000000, {from: owner, gas: 5000000, gasPrice: '200000000000'});
        // console.log("result : " + result); // result : [object Object]

        assert(result, "result is not null? ");
        let myBalance = await token.balanceOf(myAccount);

        assert.isTrue(myBalance > 0, "transfer fail. to : " + myAccount + ", value : " + value);

        assert.equal(myBalance, value, "transfer fail. to : " + myAccount + ", value : " + value);

    });

    // it("transfer test", async () => {
    //     console.log("accounts[2] : " + accounts[2]);
    //
    //     let tx = await token.transfer(accounts[2], 200000000, {from: owner});
    //
    //     // truffleAssert.eventEmitted(tx, "Transfer", (ev) => {
    //     //     return true;
    //     // });
    //
    //     // truffleAssert.eventNotEmitted(tx, "Transfer");
    //
    //     assert.isTrue(token.balanceOf(accounts[2]) > 0, "transfer fail. to : " + accounts[2] + ", value : " + 20000000000);
    // });

    // it("spender에게 tokens 수만큼 계좌에서 토큰을 가져갈 권한을 부여한다.", async () => {
    //     console.log("accounts[2] : " + accounts[2]);
    //
    //     let result = await token.approve(accounts[2], 20000000000, {from: owner});
    //     truffleAssert.eventNotEmitted(result, "Approval");
    //
    //
    //     assert.isTrue(result, "권한 부여 실패...");
    // });

    // it("from에서 to에게 allowed된 tokens를 전송한다.", async () => {
    //     const result = await wifeCoin.transferFrom(owner, accounts[2], 20000000000, {from: owner});
    //     assert.isTrue(result, "from :" + owner + ", to : " + accounts[2] + ", allowed된 tokens를 전송 실패");
    // });

    it("토큰 잔고 확인 after", async () => {
        const ownerTokenBalance = await token.balanceOf(owner);
        const myTokenBalance = await token.balanceOf(myAccount);

        console.log("owner : " + owner + ", balance : " + ownerTokenBalance);
        console.log("my account : " + myAccount + ", balance : " + myTokenBalance);

        let totalSupply = await token.totalSupply();

        assert.isTrue((totalSupply.toNumber() > ownerTokenBalance.toNumber()), "토큰 만땅");
        assert.isTrue(myTokenBalance > 0 , "토큰 추가 안됨");
    });
});