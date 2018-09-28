var CredentialOrgFactoryA = artifacts.require("CredentialOrgFactoryA");
var CredentialOrgFactoryB = artifacts.require("CredentialOrgFactoryB");

module.exports = async function(deployer, accounts) {
  let credOrgFactoryA, credOrgFactoryB;

  await Promise.all([
    deployer.deploy(CredentialOrgFactoryA),
    deployer.deploy(CredentialOrgFactoryB),
  ]);

  instances = await Promise.all([
    CredentialOrgFactoryA.deployed(),
    CredentialOrgFactoryB.deployed()
  ])

  credOrgFactoryA = instances[0];
  credOrgFactoryB = instances[1];

  results = await Promise.all([
    console.log("Addresses for Contracts:"),
    console.log("CredentialOrgFactoryA: " + credOrgFactoryA.address),
    console.log("CredentialOrgFactoryB: " + credOrgFactoryB.address),
    //aAdmin.setContractAddress("Child", bChild.address),
    //cChild1.setAdminContractAddress(aAdmin.address)
  ]);

};