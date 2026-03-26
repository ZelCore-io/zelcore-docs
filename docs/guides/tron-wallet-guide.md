---
sidebar_position: 16
title: How to Use TRON (TRX) in ZelCore
description: "Complete guide to managing TRON (TRX) in your ZelCore wallet. Send, receive, and manage TRX and TRC-20 tokens with ZelCore's multi-chain support."
keywords: [tron wallet, trx wallet, tron crypto wallet, manage trx]
---

# How to Use TRON (TRX) in Your ZelCore Tron Wallet

## Overview

ZelCore provides full-featured tron wallet support, allowing you to send, receive, and manage TRX alongside hundreds of other cryptocurrencies in a single application. As a TRX wallet integrated into a multi-chain environment, ZelCore makes it easy to work with the TRON blockchain whether you are transferring TRX, interacting with TRC-20 tokens, or exploring the broader TRON crypto ecosystem. This guide covers everything from initial setup to advanced topics like TRON's energy and bandwidth resource model.

## What Is TRON?

TRON is a high-performance blockchain platform designed for decentralized applications and high-throughput token transfers. Founded in 2017, the TRON blockchain has grown into one of the most actively used networks in the cryptocurrency space, processing millions of transactions daily.

### Key Features of the TRON Blockchain

- **High throughput:** TRON can process approximately 2,000 transactions per second, far exceeding many competing blockchains.
- **Low fees:** Transaction costs on TRON are a fraction of a cent in most cases, making it one of the most economical networks for everyday use.
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

## Adding TRON (TRX) to ZelCore

### Step 1: Create or Log In to Your ZelCore Account

If you are new to ZelCore, follow the [wallet creation guide](/docs/getting-started/create-wallet/) to set up your account. If you already have an account, simply log in.

### Step 2: Add TRX to Your Portfolio

1. From the **Portfolio** screen, tap the **+** button to add an asset.
2. Search for **TRON** or **TRX**.
3. Select **TRON (TRX)** from the results.
4. TRX now appears in your portfolio with your unique TRON address.

Your TRON address in ZelCore begins with the letter **T** followed by a string of alphanumeric characters (for example, `TXyz...abc`). This same address is used for receiving both TRX and any TRC-20 tokens.

## Sending TRX

To send TRX from ZelCore:

1. Select **TRX** from your portfolio.
2. Tap **Send**.
3. Enter the recipient's TRON address (must start with "T").
4. Enter the amount of TRX to send.
5. Review the transaction details and fee estimate.
6. Confirm the transaction.

**Fee considerations:**

- Sending TRX is a simple transfer that consumes only **bandwidth**, not energy.
- If you have available bandwidth (from staking or the free daily allocation), the transfer may cost zero TRX.
- If you have no available bandwidth, a small TRX fee (typically less than 1 TRX) will be charged.

:::tip
Simple TRX-to-TRX transfers are the cheapest transactions on the TRON network. If you have any staked bandwidth, these transfers are often completely free.
:::

## Receiving TRX

To receive TRX in ZelCore:

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
- **Free daily allocation:** Every TRON account receives a small amount of free bandwidth each day (approximately 1,500 bandwidth points).
- **How to get more:** Stake TRX for bandwidth.
- **What consumes it:** All transactions, including simple TRX transfers and TRC-20 token transfers.

### Energy

- **What it is:** A resource required specifically for smart contract execution.
- **No free allocation:** Unlike bandwidth, energy is not given for free. You must either stake TRX for energy or pay TRX directly when the transaction is processed.
- **What consumes it:** Any transaction that involves a smart contract — this includes all TRC-20 token transfers, DeFi interactions, and NFT operations.
- **Why it matters:** Energy costs are the primary reason TRC-20 transfers are not always free, even though the TRON network is generally inexpensive.

### Resource Cost Summary

| Transaction Type | Bandwidth Required | Energy Required | Typical TRX Cost |
|---|---|---|---|
| TRX transfer | Yes | No | Free to ~0.3 TRX |
| TRC-20 token transfer | Yes | Yes | 5-15 TRX |
| Smart contract interaction | Yes | Yes | Varies |
| Account activation (first tx) | Yes | No | ~1 TRX |

:::info
Staking TRX for energy is the most cost-effective strategy if you frequently send TRC-20 tokens. The staked TRX is not spent — it remains yours and can be unstaked after a waiting period (typically 14 days).
:::

## Managing TRC-20 Tokens in ZelCore

Your ZelCore TRON wallet supports all TRC-20 tokens. Once you have added TRX to your portfolio, you can add any TRC-20 token using the same process:

1. Tap **+** on the Portfolio screen.
2. Search for the token name (for example, USDT).
3. Select the **TRC-20** version of the token.

TRC-20 tokens share the same address as your TRX wallet. For a comprehensive guide on TRC-20 token management, including sending, receiving, and troubleshooting, see the dedicated [TRC-20 tokens guide](/docs/guides/managing-trc20-tokens/).

## TRON DeFi Ecosystem

The TRON blockchain hosts a growing decentralized finance ecosystem. Some notable platforms include:

- **JustLend:** A lending and borrowing protocol where you can earn interest on TRX and TRC-20 tokens.
- **SunSwap:** A decentralized exchange for swapping TRC-20 tokens directly on the TRON network.
- **JustStable (USDJ):** A decentralized stablecoin system built on TRON.
- **APENFT:** An NFT marketplace and platform on TRON.

While ZelCore does not directly integrate all DeFi platforms, you can use ZelCore as your primary TRON wallet to hold and manage the tokens used across these ecosystems. Transfer TRX and TRC-20 tokens from ZelCore to interact with TRON DeFi applications as needed.

## Troubleshooting Common TRON Issues

### Transaction Shows as Failed

- **Insufficient bandwidth or energy:** The most common cause. Ensure you have enough TRX to cover the resource cost. For TRC-20 transfers, keep at least 10-20 TRX available.
- **Invalid address:** Verify the recipient address starts with "T" and is a valid TRON address.
- **Network congestion:** Rare on TRON but possible during extreme activity. Wait a few minutes and try again.

### TRX Balance Not Showing

- Pull down on the portfolio screen to force a balance refresh.
- Verify the transaction on [Tronscan](https://tronscan.org/) by searching your address.
- Ensure your internet connection is stable.
- Check the [blockchain-specific FAQ](/docs/faq/blockchain-specific-faq/) for additional troubleshooting steps.

### Receiving TRX from an Exchange

Exchanges may impose minimum withdrawal amounts and charge their own withdrawal fees (separate from TRON network fees). Common tips:

- Select **TRX** or **TRON** as the withdrawal network on the exchange.
- Double-check your ZelCore TRON address before confirming.
- Allow a few minutes for the exchange to process and broadcast the withdrawal.

### Account Not Activated

New TRON addresses must be "activated" by receiving at least 0.1 TRX (or any transaction) before they can send transactions. If your ZelCore TRON wallet is brand new, you need to receive TRX before you can send anything.

:::warning
Do not confuse TRON's TRX with tokens on other networks. If someone sends you "TRX" via Ethereum or another chain, it is a wrapped version and will not appear in your TRON wallet. Always confirm the sender is using the native TRON network.
:::

## Why Choose TRON in ZelCore

ZelCore's TRON wallet integration offers several advantages:

- **Unified portfolio:** Manage TRX alongside Bitcoin, Ethereum, and hundreds of other assets in one application.
- **Full TRC-20 support:** Access all major TRC-20 tokens without needing a separate TRON-specific wallet.
- **Cross-platform:** Use the same TRON wallet on desktop, iOS, and Android.
- **Self-custodial:** Your TRON private keys are generated and stored locally on your device. ZelCore never has access to your funds.
- **No additional setup:** Adding TRX to ZelCore takes seconds. No special TRON wallet configuration is required.

For more information about TRON support and ZelCore's broader ecosystem integration, visit [zelcore.io/ecosystem/projects/tron](https://zelcore.io/ecosystem/projects/tron).

## Summary

TRON is one of the most actively used blockchains in crypto, and ZelCore provides a complete tron crypto wallet experience for managing TRX and TRC-20 tokens. Remember to keep TRX in your wallet for transaction fees, understand the difference between bandwidth and energy, and always verify addresses and networks before sending or receiving. With ZelCore's multi-chain support, you can manage your entire crypto portfolio — including TRON — from a single, self-custodial application.
