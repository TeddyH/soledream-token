const SoleDreamToken = artifacts.require("./SoleDreamToken.sol");

module.exports = function(deployer) {
    deployer.deploy(SoleDreamToken);
};

