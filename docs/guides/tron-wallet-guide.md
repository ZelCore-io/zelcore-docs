---
sidebar_position: 16
title: How to Use TRON (TRX) and TRC-20 in Zelcore
description: "Send, receive and manage TRON (TRX) and TRC-20 tokens like USDT in your Zelcore wallet, with TRX fees, energy and bandwidth explained."
keywords: [tron wallet, trx wallet, tron crypto wallet, manage trx, trc20 wallet, trc20 tokens, usdt tron wallet, manage trc20]
---

# How to Use TRON (TRX) in Zelcore

## Overview

In Zelcore you can send, receive and manage TRX and TRC-20 tokens (such as USDT on TRON) alongside 100,000+ other assets on 80+ blockchains (as of October 2026). This guide covers everything from initial setup to TRC-20 token management, troubleshooting, and TRON's energy and bandwidth resource model.

## What Is TRON?

TRON is a high-performance blockchain platform designed for decentralized applications and high-throughput token transfers. Founded in 2017, the TRON blockchain has grown into one of the most actively used networks in the cryptocurrency space, processing millions of transactions daily.

### Key Features of the TRON Blockchain

- **High throughput:** TRON can process approximately 2,000 transactions per second, far exceeding many competing blockchains.
- **Low fees:** A simple TRX transfer is often free within your daily free bandwidth. TRC-20 transfers cost more because they also use energy (see [Resource Cost Summary](#resource-cost-summary)).
- **Fast finality:** Blocks are produced every 3 seconds, and transactions reach finality quickly.
- **Delegated Proof of Stake (DPoS):** TRON uses a DPoS consensus mechanism where 27 elected Super Representatives produce blocks and validate transactions.
- **Smart contract support:** TRON supports Solidity-based smart contracts, making it compatible with many Ethereum-developed tools and patterns.
- **Large ecosystem:** TRON hosts a substantial DeFi ecosystem, NFT marketplaces, and the majority of USDT transfers globally.

### TRX: The Native Token

TRX is the native cryptocurrency of the TRON network. It serves several purposes:

- **Transaction fees:** TRX is used to pay for network resources (energy and bandwidth) when resources are not available through staking.
- **Staking:** TRX holders can stake their tokens to earn energy and bandwidth, reducing or eliminating transaction fees.
- **Governance:** TRX holders can vote for Super Representatives who govern the network.
- **Medium of exchange:** TRX is traded on virtually every major cryptocurrency exchange.

## Adding TRON (TRX) to Zelcore

### Step 1: Create or Log In to Your Zelcore Account

If you have not already installed Zelcore, follow the [installation guide](/docs/getting-started/installation/). Zelcore is available on Windows, macOS, Linux, iOS, and Android.

If you are new to Zelcore, follow the [wallet creation guide](/docs/getting-started/create-wallet/) to set up your account. If you already have an account, simply log in.

### Step 2: Add TRX to Your Portfolio

1. From the **Portfolio** screen, tap the **+** button to add an asset.
2. Search for **TRON** or **TRX**.
3. Select **TRON (TRX)** from the results.
4. TRX now appears in your portfolio with your unique TRON address.

Your TRON address in Zelcore begins with the letter **T** followed by a string of alphanumeric characters (for example, `TXyz...abc`). This same address is used for receiving both TRX and any TRC-20 token.

Adding TRX is essential even if you only plan to hold TRC-20 tokens, because TRC-20 token transactions require TRX for energy and bandwidth fees.

## Sending TRX

To send TRX from Zelcore:

1. Select **TRX** from your portfolio.
2. Tap **Send**.
3. Enter the recipient's TRON address (must start with "T").
4. Enter the amount of TRX to send.
5. Review the transaction details and fee estimate.
6. Confirm the transaction.

**Fee considerations:**

- Sending TRX is a simple transfer that consumes only **bandwidth**, not energy.
- If you have available bandwidth (from staking or the free daily allocation), the transfer may cost zero TRX.
- If you have no available bandwidth, a small TRX fee is charged (about 0.3 TRX as of October 2026; the exact fee is shown in the app before you confirm).

:::tip
Simple TRX-to-TRX transfers are the cheapest transactions on the TRON network. If you have any staked bandwidth, these transfers are often completely free.
:::

## Receiving TRX

To receive TRX in Zelcore:

1. Select **TRX** from your portfolio.
2. Tap **Receive**.
3. Copy your TRON address or display the QR code.
4. Share the address with the sender.

**Important notes:**

- Always double-check the address before sharing. TRON addresses start with "T".
- If receiving from an exchange, select the **TRON (TRX)** network during withdrawal. Selecting the wrong network (such as ERC-20) will send to a different blockchain, and recovery may be difficult or impossible.
- TRON addresses are case-sensitive. Use copy-paste rather than typing manually.

## Understanding TRON's Energy and Bandwidth

TRON has a unique resource model that differs from most blockchains. Instead of a simple gas fee like Ethereum, TRON uses two separate resources: **energy** and **bandwidth**.

### Bandwidth

- **What it is:** A resource consumed by every TRON transaction to cover the data transmitted to the network.
- **Free daily allocation:** Every activated TRON account can use up to 600 free bandwidth points in a rolling 24-hour window (as of October 2026; TRON can change this value).
- **How to get more:** Stake TRX for bandwidth.
- **What consumes it:** All transactions, including simple TRX transfers and TRC-20 token transfers.

### Energy

- **What it is:** A resource required specifically for smart contract execution.
- **No free allocation:** Unlike bandwidth, energy is not given for free. You must either stake TRX for energy or pay TRX directly when the transaction is processed.
- **What consumes it:** Any transaction that involves a smart contract — this includes all TRC-20 token transfers, DeFi interactions, and NFT operations.
- **Why it matters:** Energy costs are the primary reason TRC-20 transfers are not always free, even though the TRON network is generally inexpensive.

### Resource Cost Summary

Approximate costs when you have not staked TRX for resources, as of October 2026. Network prices can change; the exact fee is shown in the app before you confirm.

| Transaction | Resources used | Approximate TRX cost |
|---|---|---|
| TRX transfer | Bandwidth | Free within your daily free bandwidth, otherwise about 0.3 TRX |
| TRX transfer to an address that isn't activated yet | Bandwidth, plus the account creation fee | About 1 TRX more than a normal transfer |
| TRC-20 token transfer (such as USDT) | Bandwidth and energy | 5-15 TRX (0 TRX if your staked energy and bandwidth cover it) |
| Other smart contract interaction | Bandwidth and energy | Varies |

The exact fee for a transaction is shown in the app before you confirm.

:::info
Staking TRX for energy is the most cost-effective strategy if you frequently send TRC-20 tokens: it can significantly reduce or eliminate your per-transaction fees. The staked TRX is not spent — it remains yours and can be unstaked after a waiting period (14 days as of October 2026).
:::

## Managing TRC-20 Tokens in Zelcore

Your Zelcore TRON wallet supports TRC-20 tokens, including the widely used USDT on TRON. TRC-20 tokens share the same address as your TRX wallet.

### What Are TRC-20 Tokens?

TRC-20 is a technical standard for tokens built on the TRON blockchain. Similar to how ERC-20 defines the rules for tokens on Ethereum, TRC-20 defines the rules for tokens on TRON. Any project or individual can create a TRC-20 token, and all TRC-20 tokens share a common set of functions that make them compatible with wallets, exchanges, and decentralized applications across the TRON ecosystem.

Key characteristics of TRC-20 tokens:

- **Built on TRON:** Every TRC-20 token exists on the TRON blockchain and follows its consensus rules.
- **Low transaction fees:** TRC-20 transfers are significantly cheaper than equivalent ERC-20 transfers on Ethereum.
- **Fast confirmations:** TRON produces blocks approximately every 3 seconds, so TRC-20 token transfers confirm quickly.
- **Requires TRX for gas:** Every TRC-20 token transaction requires a small amount of TRX to pay for network resources. Without TRX in your wallet, you cannot send TRC-20 tokens unless you have staked enough energy and bandwidth.
- **Wide adoption:** Major stablecoins like USDT and USDC are available as TRC-20 tokens, and billions of dollars in value flow through the TRC-20 standard daily.

#### Popular TRC-20 Tokens

| Token | Symbol | Description |
|---|---|---|
| Tether | USDT | The most widely used stablecoin, pegged to the US dollar |
| USD Coin | USDC | Circle's dollar-pegged stablecoin |
| BitTorrent | BTT | The token powering the BitTorrent ecosystem |
| JUST | JST | Governance token for the JustLend and JustStable protocols |
| SUN | SUN | TRON's DeFi governance token |
| WINkLink | WIN | Oracle and gaming token on TRON |

:::info
USDT on TRON (TRC-20) accounts for a significant portion of all USDT transfers globally. Many users prefer the TRC-20 version over the ERC-20 version specifically because of its lower fees.
:::

### Adding TRC-20 Tokens

Once you have added TRX to your portfolio, add each TRC-20 token you want to see:

1. Tap **+** on the Portfolio screen.
2. Search for the token name (for example, **USDT**).
3. When multiple network options appear, select the **TRC-20** or **TRON** version of the token.
4. The token appears in your portfolio, sharing the same address as your TRX wallet.

:::tip
When searching for USDT, you may see multiple versions (ERC-20, TRC-20, BEP-20, etc.). Make sure you select the TRC-20 version if you intend to transact on the TRON network. Sending tokens to the wrong network version can result in lost funds.
:::

### Receiving TRC-20 Tokens

1. Select the TRC-20 token you want to receive (or TRX — the address is the same).
2. Tap **Receive** to display your TRON address and QR code.
3. Share this address with the sender.

**Important considerations:**

- Your TRON address works for all TRC-20 tokens. You do not need a different address for each token.
- Always verify the address carefully before sharing it. Copy-paste directly from Zelcore rather than typing it manually.
- If you are receiving from an exchange, make sure the exchange supports TRC-20 withdrawals and that you select the TRON network during withdrawal.

### Sending TRC-20 Tokens

1. Select the TRC-20 token in your portfolio.
2. Tap **Send**.
3. Enter the recipient's TRON address.
4. Enter the amount to send.
5. Review the transaction details, including the network fee.
6. Confirm and authorize the transaction.

### Understanding TRX Gas Requirements

This is the most common source of confusion for TRC-20 token users. Every TRC-20 transaction requires TRX to pay for TRON network resources:

- **Energy:** Required for smart contract execution (all TRC-20 transfers are smart contract interactions).
- **Bandwidth:** Required for broadcasting the transaction data to the network.

If you do not have enough TRX in your wallet, the transaction will fail. As a rule of thumb, keep at least **10-20 TRX** in your wallet at all times to cover transaction fees for TRC-20 transfers.

:::warning
A common mistake is having USDT (TRC-20) in your wallet but no TRX. Without TRX, you cannot send your USDT or any other TRC-20 token unless you have staked enough energy and bandwidth. Always ensure you have a small TRX balance for fees.
:::

### How Much TRX Do You Need for Fees?

See the [Resource Cost Summary](#resource-cost-summary) above. Most users who do not stake for resources should expect to pay 5-15 TRX per TRC-20 transfer (as of October 2026). The exact fee is shown in the app before you confirm.

### TRC-20 vs. ERC-20: Which Should You Use?

Many popular tokens exist on both TRON (TRC-20) and Ethereum (ERC-20):

| Factor | TRC-20 (TRON) | ERC-20 (Ethereum) |
|---|---|---|
| **Transaction fee** | Free with staked resources, otherwise 5-15 TRX (as of October 2026) | Depends on Ethereum gas prices; shown in the app before you confirm |
| **Confirmation speed** | ~3 seconds | ~12 seconds (plus finality time) |
| **Ecosystem size** | Large, growing | Largest in crypto |
| **DeFi availability** | Moderate | Extensive |
| **Exchange support** | Widely supported | Universally supported |

For simple transfers, especially stablecoins like USDT, TRC-20 is often the better choice due to its lower fees. For access to the broadest DeFi ecosystem, ERC-20 remains dominant.

## TRON DeFi Ecosystem

The TRON blockchain hosts a growing decentralized finance ecosystem. Some notable platforms include:

- **JustLend:** A lending and borrowing protocol where you can earn interest on TRX and TRC-20 tokens.
- **SunSwap:** A decentralized exchange for swapping TRC-20 tokens directly on the TRON network.
- **JustStable (USDJ):** A decentralized stablecoin system built on TRON.
- **APENFT:** An NFT marketplace and platform on TRON.

While Zelcore does not directly integrate all DeFi platforms, you can use Zelcore as your primary TRON wallet to hold and manage the tokens used across these ecosystems. Transfer TRX and TRC-20 tokens from Zelcore to interact with TRON DeFi applications as needed.

## Troubleshooting Common TRON Issues

### Transaction Shows as Failed

If a TRX or TRC-20 transaction fails or is not confirming:

- **Insufficient bandwidth or energy:** The most common cause. Ensure you have enough TRX to cover the resource cost. For TRC-20 transfers, keep at least 10-20 TRX available.
- **Invalid address:** Verify the recipient address starts with "T" and is a valid TRON address. TRC-20 tokens can only be sent to TRON addresses.
- **Network congestion:** Rare on TRON but possible during extreme activity. Transactions may take slightly longer; wait a few minutes and try again.

### TRX Balance Not Showing

- Pull down on the portfolio screen to force a balance refresh.
- Verify the transaction on [Tronscan](https://tronscan.org/) by searching your address.
- Ensure your internet connection is stable.
- Check the [blockchain-specific FAQ](/docs/faq/blockchain-specific-faq/) for additional troubleshooting steps.

### TRC-20 Token Balance Not Showing

If you have received TRC-20 tokens but they do not appear in Zelcore:

1. **Verify the token is added to your portfolio.** Zelcore will not display a token balance unless the specific token is added to your asset list.
2. **Check the correct network.** Ensure you are looking at the TRC-20 version of the token, not the ERC-20 or BEP-20 version.
3. **Allow time for sync.** Zelcore periodically refreshes balances. Pull down to refresh or wait a few moments.
4. **Verify on a block explorer.** Visit [Tronscan](https://tronscan.org/) and search your TRON address to independently verify that the tokens arrived.

For persistent balance issues, consult the [troubleshooting balance sync guide](/docs/guides/troubleshooting-balance-sync-issues/).

### Receiving TRX from an Exchange

Exchanges may impose minimum withdrawal amounts and charge their own withdrawal fees (separate from TRON network fees). Common tips:

- Select **TRX** or **TRON** as the withdrawal network on the exchange.
- Double-check your Zelcore TRON address before confirming.
- Allow a few minutes for the exchange to process and broadcast the withdrawal.

### Account Not Activated

A new TRON address is activated by its first incoming transfer, and it can't send transactions before that. If your Zelcore TRON wallet is brand new, receive some TRX first. Sending TRX to an address that isn't activated yet costs the sender a 1 TRX account creation fee (as of October 2026).

### Sent Tokens to the Wrong Network

If you accidentally sent TRC-20 tokens to an Ethereum address (or vice versa), recovery depends on whether you control the private keys for that address on the other network. This is a situation where self-custodial wallets have an advantage — because you hold your keys, you may be able to access the same address on the correct network. However, this is an advanced recovery scenario and is not always possible.

:::warning
Do not confuse TRON's TRX with tokens on other networks. If someone sends you "TRX" via Ethereum or another chain, it is a wrapped version and will not appear in your TRON wallet. Always confirm the sender is using the native TRON network.
:::

## Why Choose TRON in Zelcore

Zelcore's TRON wallet integration offers several advantages:

- **Unified portfolio:** Manage TRX alongside Bitcoin, Ethereum, and 100,000+ other assets on 80+ blockchains in one application.
- **Full TRC-20 support:** Access all major TRC-20 tokens without needing a separate TRON-specific wallet.
- **Cross-platform:** Use the same TRON wallet on desktop, iOS, and Android.
- **Self-custodial:** Your TRON private keys are generated and stored locally on your device. Zelcore never has access to your funds.
- **No additional setup:** Adding TRX to Zelcore takes seconds. No special TRON wallet configuration is required.

For more information about TRON support and Zelcore's broader ecosystem integration, visit [zelcore.io/ecosystem/projects/tron](https://zelcore.io/ecosystem/projects/tron).

## Summary

TRON is one of the most actively used blockchains in crypto, and Zelcore manages TRX and TRC-20 tokens. The key points to remember:

1. Always keep TRX in your wallet to cover transaction fees, including for TRC-20 transfers.
2. Understand the difference between bandwidth and energy.
3. When adding tokens, select the correct network version (TRC-20 for TRON).
4. Your TRON address in Zelcore works for TRX and all TRC-20 tokens.
5. Always verify addresses and networks before sending or receiving, and check Tronscan if balances do not update immediately.

With Zelcore's multi-chain support, you can manage your entire crypto portfolio — including TRON — from a single, self-custodial application.
