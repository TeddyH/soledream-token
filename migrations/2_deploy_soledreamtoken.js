const soleDreamToken = artifacts.require("./SoleDreamToken.sol");

module.exports = function(deployer) {
    deployer.deploy(soleDreamToken);
};

