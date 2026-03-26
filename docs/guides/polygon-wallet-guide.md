---
sidebar_position: 18
title: How to Use Polygon (MATIC/POL) in ZelCore
description: "Complete guide to managing Polygon in your ZelCore wallet. Send, receive, and use MATIC/POL with low fees on Polygon's Layer 2 network."
keywords: [polygon wallet, matic wallet, polygon crypto wallet, polygon layer 2]
---

# How to Use Polygon in Your ZelCore Wallet

Polygon is one of the most widely adopted Layer 2 scaling solutions for Ethereum, and ZelCore provides a fully featured **polygon wallet** experience that makes it straightforward to manage your MATIC and POL tokens. Whether you are a DeFi participant, an NFT collector, or simply someone looking for a reliable **MATIC wallet** to handle everyday transactions, this guide covers everything you need to know about using Polygon within ZelCore.

## What Is Polygon and Why Does It Matter?

### Polygon as an Ethereum Layer 2 Network

Polygon (formerly Matic Network) is a **Polygon Layer 2** scaling framework that runs alongside the Ethereum mainnet. Its primary purpose is to solve two of Ethereum's biggest pain points: high gas fees and slow transaction throughput. While Ethereum's base layer processes roughly 15 transactions per second, Polygon can handle thousands of transactions per second at a fraction of the cost.

Polygon achieves this by processing transactions on its own proof-of-stake sidechain and periodically committing checkpoints back to the Ethereum mainnet. This means you get the security guarantees of Ethereum with the speed and affordability of a dedicated network.

### Key Benefits of Using Polygon

- **Low transaction fees:** Most Polygon transactions cost fractions of a cent, making it ideal for frequent transfers, DeFi interactions, and micro-transactions.
- **Fast confirmations:** Transactions on Polygon typically confirm within two seconds, compared to minutes on Ethereum's base layer.
- **Ethereum compatibility:** Polygon is fully EVM-compatible, meaning any application or token built for Ethereum can run on Polygon with minimal modifications.
- **Broad ecosystem:** Thousands of decentralized applications, including Aave, Uniswap, QuickSwap, and OpenSea, support Polygon.
- **Strong backing:** Polygon has received institutional support from major players in the crypto industry and maintains one of the largest active user bases among Layer 2 networks.

### The MATIC to POL Transition

In 2023, the Polygon community approved a governance proposal to migrate from the MATIC token to a new token called POL. This transition was designed to support Polygon's expanded vision as a multi-chain ecosystem. POL serves as the native gas and staking token across Polygon networks.

:::info
If you hold MATIC, migration to POL is handled at the protocol level. In ZelCore, your balance will reflect the current token standard supported on the Polygon network. You do not need to perform a manual swap.
:::

## Adding Polygon to Your ZelCore Wallet

Before you can send or receive tokens on Polygon, you need to enable the asset within ZelCore. If you have not yet set up your wallet, follow the [wallet creation guide](/docs/getting-started/create-wallet/) first.

### Step-by-Step Instructions

1. **Open ZelCore** and log in to your account.
2. **Navigate to the Portfolio** screen where your assets are listed.
3. **Tap the "+" button** or go to the asset management section.
4. **Search for "Polygon"** or "MATIC" in the asset list.
5. **Toggle Polygon on** to add it to your active portfolio.
6. Your Polygon address will be generated automatically from your seed phrase using HD wallet derivation.

Once Polygon is added, you will see it listed in your portfolio with your balance and a receive address ready to use.

:::tip
ZelCore supports both the Polygon native network and ERC-20 MATIC/POL on Ethereum. Make sure you select the correct network when sending or receiving. Sending Polygon-network tokens to an Ethereum address (or vice versa) without bridging will result in inaccessible funds.
:::

## Sending and Receiving MATIC/POL in ZelCore

### Receiving Polygon Tokens

To receive MATIC, POL, or any Polygon-based token:

1. Open ZelCore and select **Polygon** from your portfolio.
2. Tap **Receive** to display your Polygon address and QR code.
3. Share your address with the sender or scan the QR code.
4. Confirm that the sender is sending on the **Polygon network**, not Ethereum mainnet.

Your address on Polygon will look identical to an Ethereum address (starting with `0x`), because Polygon is EVM-compatible. However, the network used for the transaction determines where the funds arrive.

### Sending Polygon Tokens

To send MATIC or POL from ZelCore:

1. Select **Polygon** from your portfolio.
2. Tap **Send**.
3. Enter the recipient's address or scan their QR code.
4. Enter the amount you wish to send.
5. Review the transaction details, including the estimated gas fee (typically less than $0.01).
6. Confirm and submit the transaction.

Transactions on Polygon usually confirm within a few seconds. You can track the status using Polygonscan by searching for the transaction hash.

### Understanding Gas Fees on Polygon

Every transaction on Polygon requires a small amount of POL (or MATIC) to pay for gas. Even though fees are extremely low, you must always keep a small balance of the native token in your wallet to cover gas costs. If your balance drops to zero, you will not be able to send tokens or interact with decentralized applications until you acquire more.

## Bridging Assets Between Ethereum and Polygon

One of the most common tasks for Polygon users is moving assets between Ethereum's mainnet and the Polygon network. This process is called bridging.

### How Bridging Works

Bridging locks your tokens on one network and mints an equivalent amount on the other. For example, if you bridge 100 USDC from Ethereum to Polygon, your USDC is locked in a smart contract on Ethereum and 100 USDC is made available to you on Polygon.

### Bridging Options

- **Polygon Portal (formerly Polygon Bridge):** The official bridge maintained by the Polygon team. It is the most secure option but can take time for withdrawals from Polygon back to Ethereum (up to several hours due to checkpoint requirements).
- **Third-party bridges:** Services like Hop Protocol, Across, and Stargate offer faster bridging with varying fee structures.
- **Centralized exchanges:** Many exchanges allow you to withdraw directly to the Polygon network. This is often the simplest method if you are purchasing tokens.

:::warning
Always double-check the network you are bridging to and from. Sending tokens to the wrong network without a bridge can result in lost funds. If you are managing ERC-20 tokens alongside Polygon assets, review the [ERC-20 token management guide](/docs/guides/managing-erc20-tokens/) for more details.
:::

## Exploring the Polygon DeFi Ecosystem

Polygon hosts one of the most vibrant decentralized finance ecosystems in crypto. With low fees and fast transactions, it is an excellent environment for DeFi activities.

### Popular Polygon DeFi Protocols

- **Aave (Polygon):** Lending and borrowing with some of the lowest fees in DeFi.
- **QuickSwap:** The leading decentralized exchange on Polygon, similar to Uniswap.
- **Curve Finance (Polygon):** Stablecoin swaps with minimal slippage.
- **Balancer (Polygon):** Automated portfolio management and liquidity provision.
- **Beefy Finance:** Yield optimization across multiple Polygon protocols.

### Connecting ZelCore to Polygon DApps

ZelCore supports WalletConnect, which allows you to connect your wallet to most Polygon-based decentralized applications. To connect:

1. Open the DApp in your browser.
2. Select **WalletConnect** as the connection method.
3. Scan the QR code with ZelCore or paste the connection URI.
4. Approve the connection in ZelCore.
5. Interact with the DApp as you normally would.

Because Polygon's gas fees are so low, DeFi activities that would cost $20-$50 on Ethereum often cost less than $0.01 on Polygon.

## Polygon Compared to Other Layer 2 Networks

Polygon is one of several Layer 2 solutions competing for Ethereum users. Others include Optimism, Arbitrum, and zkSync. Each has its own approach to scaling:

- **Polygon PoS:** Uses a proof-of-stake sidechain with its own validator set. Fastest and cheapest, but relies on its own security model.
- **Optimism and Arbitrum:** Use optimistic rollups that inherit more of Ethereum's security but have longer withdrawal periods.
- **zkSync and Polygon zkEVM:** Use zero-knowledge proofs for the strongest security guarantees but are newer and still maturing.

ZelCore supports multiple Layer 2 networks, giving you flexibility to choose the right network for your needs. For a look at how ZelCore integrates with other Layer 2 solutions, visit the [ZelCore ecosystem page](https://zelcore.io/ecosystem/projects/optimism).

## Common Issues and Troubleshooting

### Balance Not Showing

If your Polygon balance does not appear in ZelCore, try the following:

- Pull down on the portfolio screen to force a balance refresh.
- Ensure you are looking at the correct network (Polygon vs. Ethereum).
- Check Polygonscan to verify that your funds are at the expected address.
- Restart ZelCore and log in again.

### Transaction Stuck or Pending

Polygon transactions rarely get stuck, but if one does:

- Wait a few minutes, as network congestion can occasionally cause delays.
- Check Polygonscan for the transaction status.
- If the transaction is pending for an extended period, it may need to be replaced with a higher gas fee transaction.

### Sent to the Wrong Network

If you accidentally sent Polygon tokens to an Ethereum address or vice versa, your funds may still be recoverable. Because Polygon and Ethereum share the same address format, the tokens exist at the same address on the other network. You can typically access them by connecting your wallet to the correct network.

For additional help with wallet-related questions, consult the [wallet FAQ](/docs/faq/wallet-faq/).

## Summary

Polygon offers one of the best combinations of speed, cost, and ecosystem support among Ethereum scaling solutions. With ZelCore's native Polygon wallet support, you get a secure and intuitive interface for managing MATIC/POL tokens, bridging assets, and participating in the Polygon DeFi ecosystem. Low fees make it accessible for users of all sizes, and ZelCore's multi-chain architecture means your Polygon assets sit alongside all of your other crypto holdings in one place.
