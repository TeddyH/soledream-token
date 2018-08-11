const MyContract = artifacts.require("MyContract");

contract("MyContract", (accounts) => {

    const owner = accounts[0];

    const myAccount = accounts[3];

    const myFriendAccount = accounts[2];

    before(async () => {
        console.log("before ...");
        cont = await MyContract.new({from: owner});
    });

    // beforeEach(async () => {
    //
    // });

    it("이더리움을 보낸다.", async() => {

        let investor = accounts[2];
        let result = await cont.sendTransaction({value: web3.toWei(1, 'ether'), from: investor, gas: 5000000, gasPrice: '200000000000' });


    });

});