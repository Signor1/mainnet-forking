# Uniswap Router Contract Interaction Script

## Description

This script interacts with at least two functions on the Uniswap router contract using Solidity and Hardhat. It demonstrates how to interact with the Uniswap router contract on the Ethereum mainnet by forking the mainnet.

## Features

- Interacts with the Uniswap router contract to demonstrate two different functions.
- Utilizes Solidity and Hardhat for script development.
- Demonstrates interaction with real contracts on the Ethereum mainnet by forking the network.

## Prerequisites

Before running the script, ensure you have the following installed:

- Node.js
- npm (Node Package Manager)
- Hardhat

## Installation

1. Clone this repository:

```bash
git clone <repository-url>
```

2. Navigate to the project directory:

```bash
cd <project-directory>
```

3. Install dependencies:

```bash
npm install
```

## Usage

1. Update the script file (`interact-with-uniswap-router.js`) with your desired interactions with the Uniswap router contract.

2. Run the Hardhat script:

```bash
npx hardhat run scripts/interact-with-uniswap-router.js
```

3. Follow the prompts or review the console output for the results of the interactions.

## Screenshots

This is the screenshot of my first interaction with Uniswap. Here, I added liquidity
<img src="https://github.com/Signor1/mainnet-forking/blob/3bde0c56ec9fee7fce805221802aa3e5ce7ba07d/screenshots/addLiquidity.png"/>


Here is another screenshot of my second interaction with Uniswap. I interacted with the swapExactTokensForTokensSupportingFeeOnTransferTokens function.
<img src="https://github.com/Signor1/mainnet-forking/blob/6aa275417898d0d1ec5dc369dce576f31a5faeea/screenshots/swapExactTokensForTokensSupportingFee.png"/>

## Help

If you encounter any issues or have questions about running the script, please feel free to open an issue in this repository.

## Authors

- Emmanuel Omemgboji
- Contact: [Emmanuel Omemgboji](mailto:emmanuelomemgboji@gmail.com)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
