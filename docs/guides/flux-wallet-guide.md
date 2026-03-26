---
sidebar_position: 21
title: How to Use FLUX in ZelCore
description: "Complete guide to managing FLUX cryptocurrency in ZelCore. Send, receive, stake FLUX, run nodes, and use Flux Fusion for cross-chain transfers."
keywords: [flux wallet, flux crypto wallet, manage flux, flux staking]
---

# How to Use FLUX in Your ZelCore Wallet

FLUX is the native cryptocurrency of the Flux decentralized cloud infrastructure ecosystem, and ZelCore serves as the premier **flux wallet** for managing every aspect of your FLUX holdings. From basic sending and receiving to **FLUX staking**, node operation, and cross-chain transfers via Flux Fusion, ZelCore provides the deepest integration with the Flux ecosystem of any wallet available. This guide covers everything you need to know about managing **flux crypto** within ZelCore.

## What Is FLUX?

### The Flux Ecosystem

Flux is a decentralized cloud infrastructure platform that allows anyone to deploy and run applications on a globally distributed network of nodes. Think of it as a decentralized alternative to centralized cloud services like AWS or Google Cloud. The FLUX token is the economic backbone of this ecosystem.

FLUX serves multiple purposes within the network:

- **Node collateral:** Operators lock FLUX to run infrastructure nodes that power the Flux cloud.
- **Transaction fees:** Used to pay for computational resources and transactions on the Flux blockchain.
- **Governance:** FLUX holders participate in governance decisions that shape the network's future.
- **Incentive mechanism:** Node operators and miners earn FLUX rewards for securing the network and providing computational resources.

### Why FLUX and ZelCore Are Deeply Connected

ZelCore and Flux share a common origin. ZelCore was originally built as the wallet for the Zel ecosystem, which evolved into what is now Flux. This shared history means ZelCore has the most comprehensive and deeply integrated support for FLUX of any wallet. Features like Flux node management, Flux Fusion bridging, and parallel asset support are built directly into ZelCore's core functionality rather than being added as afterthoughts.

## Adding FLUX to Your ZelCore Wallet

FLUX is typically enabled by default in new ZelCore wallets due to the deep integration between the two platforms. However, if you need to add it manually:

1. **Open ZelCore** and log in.
2. **Navigate to Portfolio** and tap the asset management button.
3. **Search for "FLUX"** in the asset list.
4. **Enable FLUX** to add it to your active portfolio.

Your FLUX address is derived automatically from your seed phrase. If you are setting up ZelCore for the first time, follow the [wallet creation guide](/docs/getting-started/create-wallet/) first.

:::tip
ZelCore supports FLUX on the native Flux blockchain as well as parallel assets on Ethereum, BNB Smart Chain, Solana, Tron, and other networks. Make sure you are working with the correct version of FLUX for your intended use case.
:::

## Sending and Receiving FLUX

### Receiving FLUX

To receive FLUX in ZelCore:

1. Select **FLUX** from your portfolio.
2. Tap **Receive** to view your FLUX address and QR code.
3. Share the address with the sender.
4. Confirm the transaction on a Flux block explorer once it arrives.

FLUX addresses on the native blockchain start with a `t1` prefix. If someone is sending FLUX from an exchange, ensure the exchange supports withdrawals on the native Flux network. Some exchanges only support FLUX as an ERC-20 or BEP-20 token — in those cases, you would need to use the corresponding parallel asset address instead.

### Sending FLUX

To send FLUX from ZelCore:

1. Select **FLUX** from your portfolio.
2. Tap **Send**.
3. Enter the recipient's FLUX address or scan their QR code.
4. Enter the amount to send.
5. Review the transaction fee (typically very low on the native Flux network).
6. Confirm and broadcast the transaction.

Flux blockchain transactions typically confirm within two minutes. The network uses a proof-of-work consensus mechanism, so confirmations depend on block production timing.

### UTXO Considerations

The Flux blockchain uses a UTXO (Unspent Transaction Output) model, similar to Bitcoin. This means your balance is composed of individual transaction outputs rather than a single account balance. In most cases, ZelCore handles UTXO management automatically. However, if you have received many small transactions, you may accumulate a large number of small UTXOs that can make transactions slower or more expensive to construct.

:::info
If you notice that transactions are taking longer to build or that fees seem higher than expected, UTXO consolidation may help. ZelCore provides tools for this — consult the wallet interface for consolidation options.
:::

## FLUX Staking with ZelCore

### How FLUX Staking Works

ZelCore offers staking functionality through its Earn feature, allowing you to put your FLUX to work earning rewards. **FLUX staking** through ZelCore is designed to be accessible even for users who do not want to run their own infrastructure nodes.

### Getting Started with Staking

1. Open ZelCore and navigate to the **Earn** or **Staking** section.
2. Select **FLUX** from the available staking options.
3. Choose the amount of FLUX you wish to stake.
4. Review the terms, including lock-up periods and estimated rewards.
5. Confirm your stake.

Staking rewards vary based on network conditions and the total amount of FLUX staked across the network. ZelCore displays current estimated rates within the staking interface.

For a detailed walkthrough with current reward rates and tier information, see the [FLUX staking guide](/docs/walkthroughs/staking-flux/).

## Running Flux Nodes Through ZelCore

### Node Tiers

One of ZelCore's most distinctive features is its integrated support for running Flux infrastructure nodes. The Flux network has three node tiers, each with different collateral requirements and reward structures:

**Cumulus Nodes**
- **Collateral:** 1,000 FLUX
- **Requirements:** Lowest hardware specifications
- **Rewards:** Base tier reward share
- **Best for:** Users who want to participate in the Flux network with a moderate investment

**Nimbus Nodes**
- **Collateral:** 12,500 FLUX
- **Requirements:** Mid-range hardware specifications
- **Rewards:** Higher reward share than Cumulus
- **Best for:** More committed participants with larger holdings

**Stratus Nodes**
- **Collateral:** 40,000 FLUX
- **Requirements:** Highest hardware specifications
- **Rewards:** Highest reward share
- **Best for:** Serious infrastructure operators with significant FLUX holdings

### Managing Nodes in ZelCore

ZelCore provides tools to manage the wallet side of Flux node operation:

- **Collateral locking:** Lock the required FLUX amount for your chosen node tier.
- **Node status monitoring:** View whether your node is confirmed, active, or requires attention.
- **Reward tracking:** Monitor the FLUX rewards earned from node operation.

:::warning
Running a Flux node requires both the collateral locked in your ZelCore wallet AND a server meeting the hardware requirements for your chosen tier. The wallet handles the collateral side, but you must separately provision and maintain the server infrastructure. For full node setup instructions, consult the [Flux node FAQ](/docs/faq/flux-nodes-faq/).
:::

## Flux Fusion: Cross-Chain FLUX Transfers

### What Is Flux Fusion?

Flux Fusion is a bridge that enables FLUX to exist and move across multiple blockchain networks. Through Fusion, you can transfer your native FLUX to parallel representations on Ethereum (as an ERC-20 token), BNB Smart Chain (as a BEP-20 token), Solana, Tron, and other supported networks.

### Why Use Flux Fusion?

- **DeFi access:** Use FLUX in Ethereum or BSC-based DeFi protocols like Uniswap, PancakeSwap, or lending platforms.
- **Exchange compatibility:** Some exchanges only support FLUX on specific networks. Fusion lets you move FLUX to the network your exchange supports.
- **Liquidity provision:** Provide liquidity for FLUX trading pairs on decentralized exchanges across multiple chains.
- **Portfolio flexibility:** Hold FLUX alongside other assets on the same network for easier management.

### Using Flux Fusion in ZelCore

1. Open ZelCore and navigate to the **Fusion** feature.
2. Select the **source network** (e.g., native Flux blockchain).
3. Select the **destination network** (e.g., Ethereum).
4. Enter the amount of FLUX to bridge.
5. Review the bridging fee and estimated completion time.
6. Confirm the transaction.

Fusion transactions typically complete within minutes, depending on the confirmation requirements of the source and destination networks. For troubleshooting Fusion transfers, see the [Flux Fusion bridge guide](/docs/guides/flux-fusion-bridge-guide/).

### Understanding Parallel Assets

Parallel assets are representations of FLUX on other blockchains. Each parallel asset is backed 1:1 by native FLUX locked in the Fusion bridge contracts. The parallel assets currently supported include:

- **FLUX on Ethereum (ERC-20)**
- **FLUX on BNB Smart Chain (BEP-20)**
- **FLUX on Solana (SPL)**
- **FLUX on Tron (TRC-20)**
- **FLUX on other supported chains**

ZelCore lets you manage all of these parallel assets alongside your native FLUX holdings. Each parallel asset appears as a separate entry in your portfolio with its own address corresponding to the respective blockchain's address format.

## FLUX Tokenomics and Supply

Understanding FLUX tokenomics helps contextualize staking rewards and node economics:

- **Maximum supply:** 440 million FLUX
- **Block reward distribution:** Split between miners, node operators, and the Flux Foundation
- **Halving schedule:** Block rewards decrease over time following a predetermined schedule
- **Deflationary mechanisms:** Transaction fees and certain bridge operations remove FLUX from circulation

The economic model incentivizes long-term holding and active participation in the network through node operation, which secures the decentralized cloud infrastructure that is central to the Flux platform's value proposition.

## Common Issues and Tips

### FLUX Balance Not Appearing

If your FLUX balance does not display correctly:

- Pull down on the portfolio screen to refresh balances.
- Verify the transaction on a Flux block explorer using your address.
- Ensure you are looking at the correct FLUX asset (native vs. parallel).
- Restart ZelCore and log in again.

### Choosing Between Native FLUX and Parallel Assets

- Use **native FLUX** for node collateral, mining rewards, and direct Flux blockchain transactions.
- Use **parallel assets** for DeFi participation, specific exchange deposits, and cross-chain interoperability.
- Remember that moving between native and parallel requires a Fusion bridge transaction.

### Keeping FLUX Secure

- Enable D2FA on your ZelCore account for an additional layer of security.
- Never share your seed phrase, even with people claiming to be Flux or ZelCore support.
- Use a dedicated device or profile for managing significant FLUX holdings.

For more information about ZelCore and the Flux ecosystem, visit [zelcore.io](https://zelcore.io/).

## Summary

ZelCore is the most fully integrated wallet for managing FLUX across every dimension of the Flux ecosystem. Whether you are simply holding and transferring FLUX, staking for rewards, operating infrastructure nodes, or bridging across chains with Flux Fusion, ZelCore provides the tools to do it all from a single interface. The deep connection between ZelCore and Flux means that new Flux features and capabilities are reflected in ZelCore faster and more completely than in any other wallet.
