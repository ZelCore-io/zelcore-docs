---
sidebar_position: 14
title: Managing TRC-20 Tokens in ZelCore
description: "How to send, receive, and manage TRC-20 tokens like USDT on TRON in your ZelCore wallet. Complete guide to TRC-20 token management."
keywords: [trc20 wallet, trc20 tokens, usdt tron wallet, manage trc20]
---

# Managing TRC-20 Tokens in Your ZelCore TRC20 Wallet

## Overview

ZelCore serves as a full-featured TRC20 wallet, allowing you to send, receive, and manage TRC-20 tokens seamlessly alongside hundreds of other cryptocurrencies. TRC-20 tokens — including the widely used USDT on TRON — benefit from extremely low transaction fees and fast confirmation times, making the TRON network one of the most popular choices for everyday token transfers. This guide covers everything you need to know about TRC-20 token management in ZelCore, from initial setup to advanced troubleshooting.

## What Are TRC-20 Tokens?

TRC-20 is a technical standard for tokens built on the TRON blockchain. Similar to how ERC-20 defines the rules for tokens on Ethereum, TRC-20 defines the rules for tokens on TRON. Any project or individual can create a TRC-20 token, and all TRC-20 tokens share a common set of functions that make them compatible with wallets, exchanges, and decentralized applications across the TRON ecosystem.

### Key Characteristics of TRC-20 Tokens

- **Built on TRON:** Every TRC-20 token exists on the TRON blockchain and follows its consensus rules.
- **Low transaction fees:** TRON transactions typically cost a fraction of a cent, making TRC-20 transfers significantly cheaper than equivalent ERC-20 transfers on Ethereum.
- **Fast confirmations:** TRON produces blocks approximately every 3 seconds, so TRC-20 token transfers confirm quickly.
- **Requires TRX for gas:** Every TRC-20 token transaction requires a small amount of TRX (TRON's native token) to pay for network resources. Without TRX in your wallet, you cannot send TRC-20 tokens.
- **Wide adoption:** Major stablecoins like USDT and USDC are available as TRC-20 tokens, and billions of dollars in value flow through the TRC-20 standard daily.

### Popular TRC-20 Tokens

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

## Setting Up Your ZelCore Wallet for TRC-20 Tokens

### Step 1: Install ZelCore

If you have not already installed ZelCore, download it from the [official website](https://zelcore.io/ecosystem/projects/tron) or follow the detailed [installation guide](/docs/getting-started/installation/). ZelCore is available on Windows, macOS, Linux, iOS, and Android.

### Step 2: Add TRON (TRX) to Your Portfolio

Before you can manage TRC-20 tokens, you need to add the TRON asset to your ZelCore portfolio:

1. Open ZelCore and navigate to the **Portfolio** screen.
2. Tap the **+** button to add a new asset.
3. Search for **TRON** or **TRX**.
4. Select TRON and add it to your portfolio.

Adding TRX is essential because TRC-20 token transactions require TRX for energy and bandwidth fees. Your TRON address in ZelCore is the same address you will use to receive any TRC-20 token.

### Step 3: Add Specific TRC-20 Tokens

To add individual TRC-20 tokens to your portfolio:

1. Tap the **+** button again from the Portfolio screen.
2. Search for the TRC-20 token you want (for example, **USDT**).
3. When multiple network options appear, select the **TRC-20** or **TRON** version.
4. The token will appear in your portfolio, sharing the same address as your TRX wallet.

:::tip
When searching for USDT, you may see multiple versions (ERC-20, TRC-20, BEP-20, etc.). Make sure you select the TRC-20 version if you intend to transact on the TRON network. Sending tokens to the wrong network version can result in lost funds.
:::

## Receiving TRC-20 Tokens

To receive TRC-20 tokens in ZelCore:

1. Open ZelCore and select the TRC-20 token you want to receive (or TRX — the address is the same).
2. Tap **Receive** to display your TRON address and QR code.
3. Share this address with the sender.

**Important considerations:**

- Your TRON address works for all TRC-20 tokens. You do not need a different address for each token.
- Always verify the address carefully before sharing it. Copy-paste directly from ZelCore rather than typing it manually.
- If you are receiving from an exchange, make sure the exchange supports TRC-20 withdrawals and that you select the TRON network during withdrawal.

## Sending TRC-20 Tokens

To send TRC-20 tokens from ZelCore:

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
A common mistake is having USDT (TRC-20) in your wallet but no TRX. Without TRX, you cannot send your USDT or any other TRC-20 token. Always ensure you have a small TRX balance for fees.
:::

### How Much TRX Do You Need for Fees?

TRC-20 transfer costs vary depending on network conditions and your account's resource allocation:

| Scenario | Approximate TRX Cost |
|---|---|
| Simple TRC-20 transfer (with bandwidth/energy) | 0 TRX (free if resources are staked) |
| Simple TRC-20 transfer (without staked resources) | 5-15 TRX |
| Transfer to a new address (first-time activation) | 15-30 TRX |
| Complex smart contract interaction | Varies |

Most casual users who do not stake for resources should expect to pay between 5 and 15 TRX per TRC-20 transfer.

## Troubleshooting Common TRC-20 Issues

### TRC-20 Token Balance Not Showing

If you have received TRC-20 tokens but they do not appear in ZelCore:

1. **Verify the token is added to your portfolio.** ZelCore will not display a token balance unless the specific token is added to your asset list.
2. **Check the correct network.** Ensure you are looking at the TRC-20 version of the token, not the ERC-20 or BEP-20 version.
3. **Allow time for sync.** ZelCore periodically refreshes balances. Pull down to refresh or wait a few moments.
4. **Verify on a block explorer.** Visit [Tronscan](https://tronscan.org/) and search your TRON address to independently verify that the tokens arrived.

For persistent balance issues, consult the [troubleshooting balance sync guide](/docs/guides/troubleshooting-balance-sync-issues/).

### Transaction Stuck or Failed

If a TRC-20 transaction is not confirming:

- **Insufficient TRX:** The most common cause. Check that you have enough TRX to cover energy and bandwidth costs.
- **Network congestion:** During high-traffic periods, transactions may take slightly longer. TRON is generally fast, but delays can occur.
- **Invalid address:** Double-check that you entered a valid TRON address. TRC-20 tokens can only be sent to TRON addresses.

### Sent Tokens to the Wrong Network

If you accidentally sent TRC-20 tokens to an Ethereum address (or vice versa), recovery depends on whether you control the private keys for that address on the other network. This is a situation where self-custodial wallets have an advantage — because you hold your keys, you may be able to access the same address on the correct network. However, this is an advanced recovery scenario and is not always possible.

## TRC-20 vs. ERC-20: Which Should You Use?

Many popular tokens exist on both TRON (TRC-20) and Ethereum (ERC-20). Here is a comparison to help you decide:

| Factor | TRC-20 (TRON) | ERC-20 (Ethereum) |
|---|---|---|
| **Transaction fee** | Very low (cents or free) | High (several dollars or more) |
| **Confirmation speed** | ~3 seconds | ~12 seconds (plus finality time) |
| **Ecosystem size** | Large, growing | Largest in crypto |
| **DeFi availability** | Moderate | Extensive |
| **Exchange support** | Widely supported | Universally supported |

For simple transfers, especially stablecoins like USDT, TRC-20 is often the better choice due to its lower fees. For access to the broadest DeFi ecosystem, ERC-20 remains dominant.

## Advanced: TRON Resource Model

Understanding TRON's resource model helps you optimize your TRC-20 transaction costs:

- **Bandwidth:** Earned passively by holding TRX or by staking TRX. Each account gets a small free daily bandwidth allocation. Simple TRX transfers consume only bandwidth.
- **Energy:** Required for smart contract calls (including all TRC-20 transfers). Energy is obtained only by staking TRX. Without staked energy, you pay TRX directly to cover the cost.
- **Staking for resources:** If you frequently transact with TRC-20 tokens, staking TRX for energy can significantly reduce or eliminate your per-transaction fees.

For a deeper dive into TRON's resource system and other TRON-specific topics, see the [blockchain-specific FAQ](/docs/faq/blockchain-specific-faq/).

## Summary

ZelCore provides a robust TRC20 wallet experience, supporting the full range of TRC-20 token management including sending, receiving, and monitoring your token balances. The key points to remember are:

1. Always keep TRX in your wallet to cover transaction fees for TRC-20 transfers.
2. When adding tokens, select the correct network version (TRC-20 for TRON).
3. Your TRON address in ZelCore works for all TRC-20 tokens.
4. Verify transactions independently on Tronscan if balances do not update immediately.

By following these guidelines, you can take full advantage of TRON's low fees and fast confirmations for your day-to-day token transfers.
