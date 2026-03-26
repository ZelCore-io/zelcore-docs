---
sidebar_position: 17
title: Managing ERC-20 Tokens in ZelCore
description: "How to send, receive, and manage ERC-20 tokens on Ethereum in your ZelCore wallet. Complete guide to ERC-20 token management and gas fees."
keywords: [erc20 wallet, erc20 tokens, ethereum token wallet, manage erc20]
---

# Managing ERC-20 Tokens in Your ZelCore ERC20 Wallet

## Overview

ZelCore functions as a comprehensive ERC20 wallet, giving you full control over your Ethereum-based tokens alongside hundreds of other cryptocurrencies. ERC-20 tokens represent the largest and most diverse token ecosystem in crypto, powering everything from stablecoins and DeFi governance to utility tokens and digital collectibles. This guide walks you through managing ERC-20 tokens in ZelCore, understanding Ethereum gas fees, and navigating the broader Ethereum token landscape — including Layer 2 alternatives that can save you money on transactions.

## What Are ERC-20 Tokens?

ERC-20 is the most widely adopted token standard in cryptocurrency. Defined by Ethereum Improvement Proposal 20, the ERC-20 standard specifies a set of rules that every compliant token must follow. This standardization ensures that all ERC-20 tokens work seamlessly with wallets, exchanges, and decentralized applications across the Ethereum ecosystem.

### How ERC-20 Tokens Work

Every ERC-20 token is a smart contract deployed on the Ethereum blockchain. The smart contract maintains a ledger of token balances and defines functions for transferring tokens between addresses. When you "hold" an ERC-20 token, what actually exists is an entry in that token's smart contract associating your Ethereum address with a balance.

Key technical points:

- **Shared address:** All ERC-20 tokens use your Ethereum (ETH) address. You do not need a separate address for each token.
- **Smart contract interactions:** Every ERC-20 transfer is a smart contract transaction, which requires gas (paid in ETH).
- **Permissionless creation:** Anyone can create an ERC-20 token. This means the ecosystem includes both legitimate projects and scam tokens — always research before interacting with unfamiliar tokens.
- **Composability:** Because all ERC-20 tokens follow the same standard, they can be freely combined in DeFi protocols, traded on decentralized exchanges, and used as collateral in lending platforms.

### Popular ERC-20 Tokens

| Token | Symbol | Category | Description |
|---|---|---|---|
| Tether | USDT | Stablecoin | Dollar-pegged stablecoin, largest by market cap |
| USD Coin | USDC | Stablecoin | Circle's regulated dollar-pegged stablecoin |
| Chainlink | LINK | Oracle | Decentralized oracle network token |
| Uniswap | UNI | DeFi | Governance token for the Uniswap DEX |
| Aave | AAVE | DeFi | Governance token for the Aave lending protocol |
| Shiba Inu | SHIB | Meme | Community-driven meme token |
| Wrapped Bitcoin | WBTC | Wrapped Asset | Bitcoin represented as an ERC-20 token |
| Dai | DAI | Stablecoin | Decentralized, crypto-collateralized stablecoin |
| Lido Staked Ether | stETH | Liquid Staking | Represents staked ETH in the Lido protocol |

:::info
There are thousands of ERC-20 tokens in existence. ZelCore supports a curated list of the most popular and legitimate tokens. If a specific token is not listed, it may be available through custom token addition features.
:::

## Adding ERC-20 Tokens to ZelCore

### Step 1: Ensure Ethereum (ETH) Is in Your Portfolio

Before managing ERC-20 tokens, add Ethereum to your ZelCore portfolio:

1. Open ZelCore and go to the **Portfolio** screen.
2. Tap **+** to add an asset.
3. Search for **Ethereum** or **ETH**.
4. Select Ethereum and add it to your portfolio.

Having ETH in your portfolio is essential because every ERC-20 transaction requires ETH for gas fees. Without ETH, you cannot send any ERC-20 tokens.

### Step 2: Add ERC-20 Tokens

To add specific ERC-20 tokens:

1. Tap **+** on the Portfolio screen.
2. Search for the token name or symbol (for example, **USDC** or **LINK**).
3. If the token exists on multiple networks, select the **ERC-20** or **Ethereum** version.
4. The token appears in your portfolio, using the same address as your ETH wallet.

:::warning
Many popular tokens like USDT, USDC, and LINK exist on multiple blockchains (Ethereum, TRON, BSC, Polygon, etc.). Always verify you are adding the ERC-20 version if you intend to transact on the Ethereum network. Sending tokens to the wrong network can result in lost funds.
:::

For detailed installation instructions if you are new to ZelCore, refer to the [installation guide](/docs/getting-started/installation/).

## Receiving ERC-20 Tokens

To receive ERC-20 tokens in ZelCore:

1. Select the ERC-20 token (or ETH — the address is identical) from your portfolio.
2. Tap **Receive** to display your Ethereum address and QR code.
3. Share this address with the sender.

**Key points:**

- Your Ethereum address works for all ERC-20 tokens. One address receives ETH, USDT, USDC, LINK, and every other ERC-20 token.
- When receiving from an exchange, always select **Ethereum (ERC-20)** as the withdrawal network. Selecting a different network (like TRON or BNB Chain) will send to a different blockchain.
- Verify the address carefully. Ethereum addresses start with **0x** followed by 40 hexadecimal characters.

## Sending ERC-20 Tokens

To send ERC-20 tokens from ZelCore:

1. Select the ERC-20 token in your portfolio.
2. Tap **Send**.
3. Enter the recipient's Ethereum address (starting with 0x).
4. Enter the amount to send.
5. Review the transaction details, including the estimated gas fee.
6. Confirm and authorize the transaction.

### Understanding Gas Fees

Gas fees are the most important concept to understand when working with ERC-20 tokens on Ethereum. Every transaction on Ethereum requires gas, and ERC-20 transfers typically cost more gas than simple ETH transfers because they involve smart contract execution.

**How gas fees are calculated:**

- **Gas limit:** The maximum amount of computational work your transaction can consume. ERC-20 transfers typically require 50,000-80,000 gas units.
- **Base fee:** Set by the network based on demand. This portion of the fee is burned (permanently removed from supply).
- **Priority fee (tip):** An optional tip to validators to prioritize your transaction.
- **Total cost:** Gas limit x (base fee + priority fee) = total gas cost in ETH.

**Typical ERC-20 transfer costs:**

| Network Condition | Approximate Cost (USD equivalent) |
|---|---|
| Low congestion | $1 - $5 |
| Normal congestion | $5 - $15 |
| High congestion | $15 - $50+ |

:::tip
Gas fees fluctuate significantly based on network demand. If your transaction is not time-sensitive, wait for periods of lower activity (typically weekends or late nights in US time zones) to save on fees. Gas tracker tools can help you identify optimal times.
:::

### ETH Gas Fees: The Critical Requirement

The single most important rule for ERC-20 token management is this: **you must hold ETH to pay gas fees.** Even if you have thousands of dollars in ERC-20 tokens, you cannot move them without ETH in the same wallet.

A common situation: a user receives USDT (ERC-20) but has no ETH. They cannot send, swap, or do anything with the USDT until they acquire ETH for gas. Always maintain a small ETH balance (at least 0.01-0.05 ETH) to ensure you can transact when needed.

## Layer 2 Alternatives: Lower Fees for Token Transfers

Ethereum's gas fees have driven the development of Layer 2 scaling solutions that offer dramatically lower transaction costs while maintaining security through the Ethereum network.

### What Are Layer 2s?

Layer 2 networks process transactions off the main Ethereum chain (Layer 1) and periodically settle the results back to Ethereum. This allows them to offer:

- **Much lower fees:** Often 90-99% cheaper than Layer 1.
- **Faster confirmations:** Sub-second transaction finality in many cases.
- **Ethereum security:** Transactions are ultimately secured by the Ethereum network.

### Popular Layer 2 Networks Supported by ZelCore

| Network | Type | Typical Transfer Cost | Notes |
|---|---|---|---|
| Optimism | Optimistic Rollup | $0.01 - $0.50 | Large DeFi ecosystem |
| Arbitrum | Optimistic Rollup | $0.01 - $0.50 | Most TVL of any L2 |
| Polygon | Sidechain/L2 | $0.001 - $0.10 | Extremely low fees |
| Base | Optimistic Rollup | $0.01 - $0.30 | Built by Coinbase |

:::info
If you frequently transfer stablecoins or other tokens and want to minimize fees, consider using Layer 2 versions of your tokens. Many major tokens (USDT, USDC, DAI) are available on these networks. Just make sure both sender and recipient are using the same network.
:::

### Bridging Between Layer 1 and Layer 2

To move tokens from Ethereum Layer 1 to a Layer 2 network, you need to use a bridge. Bridging involves locking your tokens on Layer 1 and receiving equivalent tokens on the Layer 2 network. ZelCore supports multiple networks, so you can manage both your Layer 1 and Layer 2 token balances from the same wallet.

## Troubleshooting ERC-20 Token Issues

### Token Balance Not Showing

If you have received ERC-20 tokens but they are not visible in ZelCore:

1. **Add the token to your portfolio.** ZelCore does not automatically display every ERC-20 token. You must manually add the specific token to your asset list.
2. **Check the network.** Confirm you are looking at the ERC-20 version, not a version on another chain.
3. **Refresh your portfolio.** Pull down on the portfolio screen to force a balance update.
4. **Verify on Etherscan.** Search your Ethereum address on [Etherscan](https://etherscan.io/) to confirm the tokens are in your wallet on-chain.

### Transaction Pending for a Long Time

If your ERC-20 transaction has been pending for an extended period:

- **Low gas fee:** The most likely cause. If you set a gas fee below the current market rate, validators may not include your transaction in a block. You may need to wait for network congestion to decrease.
- **Nonce issues:** Ethereum transactions from a single address must be processed in order. If an earlier transaction is stuck, all subsequent transactions will wait.
- **Network congestion:** During peak periods, even normally-priced transactions can experience delays.

### Transaction Failed

Common reasons for failed ERC-20 transactions:

- **Insufficient ETH for gas:** You did not have enough ETH to cover the gas cost. The gas fee is still charged even for failed transactions.
- **Insufficient token balance:** You attempted to send more tokens than you hold.
- **Smart contract error:** The token's smart contract rejected the transaction for a protocol-specific reason.
- **Gas limit too low:** The transaction ran out of gas before completing. This is rare with standard ERC-20 transfers but can happen with complex contract interactions.

### Scam Tokens in Your Wallet

If you see unfamiliar tokens in your Ethereum address on a block explorer:

- **Do not interact with them.** Scam tokens are commonly "airdropped" to active addresses. Attempting to sell or transfer these tokens may trigger a malicious smart contract.
- **Ignore them.** If the token does not appear in ZelCore's curated list, it is likely not legitimate.
- **Never visit URLs in token names.** Some scam tokens encode phishing URLs directly in their token name or symbol.

For staking-related questions about Ethereum, see the [Ethereum staking walkthrough](/docs/walkthroughs/ethereum-staking/). For general wallet questions, visit the [wallet FAQ](/docs/faq/wallet-faq/).

## ERC-20 vs. Other Token Standards

If you are deciding which network to use for a token that exists on multiple chains:

| Factor | ERC-20 (Ethereum L1) | TRC-20 (TRON) | BEP-20 (BNB Chain) | L2 (Optimism, Arbitrum, etc.) |
|---|---|---|---|---|
| **Fees** | Highest | Very low | Low | Very low |
| **Speed** | ~12 seconds | ~3 seconds | ~3 seconds | ~2 seconds |
| **Ecosystem** | Largest | Large | Large | Growing rapidly |
| **Security** | Highest | High | High | Inherits Ethereum security |
| **Exchange support** | Universal | Wide | Wide | Expanding |

For more information about ZelCore's Ethereum integration, visit [zelcore.io/ecosystem/projects/ethereum](https://zelcore.io/ecosystem/projects/ethereum).

## Summary

ZelCore's ERC20 wallet capabilities make it straightforward to manage the full range of Ethereum-based tokens in a self-custodial environment. The essential points to remember are:

1. **Always hold ETH** in your wallet to pay for gas fees on ERC-20 transactions.
2. **Select the correct network** when adding tokens or receiving from exchanges — ERC-20 for Ethereum.
3. **Monitor gas fees** and time your transactions to avoid peak-price periods when possible.
4. **Consider Layer 2 networks** for frequent, cost-sensitive transfers.
5. **Be cautious of unknown tokens** — never interact with tokens you did not intentionally acquire.

By understanding how ERC-20 tokens work and how gas fees affect your transactions, you can effectively manage your Ethereum token portfolio in ZelCore with confidence.
