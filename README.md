# MessageTest

MessageTest is intended to be example of how require messages cost significant cost to use.

![size variation](./contractVariations.png?raw=true "size variations")


## What it does
It takes the same contract, one with messages (A), and one without messages (B), deploys, and allows you to see the size differences

## Getting Started

These prerequisites and repository files should allow a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites 

1. Truffle install - https://github.com/trufflesuite/truffle

Truffle should be installed properly on your machine.   See the above link for how to do this.

2. ganache install - https://truffleframework.com/docs/ganache/quickstart

Install ganache or ganache-cli per your choice.

3. project files (this git collection) in a local directory.  (if you are reading this you should have access.)

Unzip/Clone the Repository to a local directory

### Installing

1. Copy files to CredentialVerify Directory
2. run ganache
3. Compile truffle
Compile the project in standard manner from the directory where the files are located.

```
truffle compile
```

4. Migrate
Migrate the project to the blockchain.
```
truffle migrate --reset
```

## Built With

* [Truffle Suite](https://truffleframework.com) - Truffle Suite Framework.
* [ganache-cli](https://github.com/trufflesuite/ganache-cli) - Ganache-cli (command line)

## Author
Richard Noordam

