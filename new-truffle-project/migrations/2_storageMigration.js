const StorageVal = artifacts.require("StorageVal");

module.exports = function (deployer) {
  deployer.deploy(StorageVal);
};
