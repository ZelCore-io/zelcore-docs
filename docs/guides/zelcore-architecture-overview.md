---
sidebar_position: 19
title: ZelCore Architecture — How the Wallet Works
description: "Understand how ZelCore's multi-chain wallet architecture works. Learn about key derivation, backend infrastructure, and cross-platform sync."
keywords: [wallet core, zelcore architecture, multi chain wallet, how crypto wallets work]
---

# ZelCore Architecture — Understanding the Wallet Core

Understanding how a crypto wallet works under the hood helps you make better decisions about security, backup strategies, and asset management. ZelCore's **wallet core** is the engine that powers its **multi chain wallet** capabilities, handling everything from key generation to transaction signing across hundreds of blockchain networks. This guide provides a detailed look at how ZelCore's architecture is designed, what happens when you create a wallet, and why these technical foundations matter for everyday use.

## The Foundation: Seed Phrases and Key Derivation

### BIP-39 — From Mnemonic to Master Key

At the heart of every ZelCore wallet is a seed phrase, typically 24 words generated according to the BIP-39 standard. This mnemonic phrase is not just a human-readable backup — it is a deterministic representation of a master cryptographic seed from which all of your private keys are derived.

When you create a new wallet in ZelCore, the following process occurs:

1. **Entropy generation:** ZelCore generates 256 bits of cryptographically secure random data.
2. **Mnemonic encoding:** The entropy is encoded into a 24-word mnemonic phrase using the BIP-39 wordlist (2048 possible words).
3. **Seed derivation:** The mnemonic, combined with an optional passphrase, is run through the PBKDF2-HMAC-SHA512 key-stretching function to produce a 512-bit master seed.
4. **Master key creation:** The master seed is used to generate a master private key and a master chain code, which together form the root of the hierarchical deterministic (HD) wallet tree.

:::info
The 24-word seed phrase is the single most critical piece of information in your wallet. Anyone who obtains it can derive every private key your wallet has ever generated or will generate. Protect it accordingly. For detailed guidance, review the [security best practices guide](/docs/security/best-practices/).
:::

### BIP-44 — Hierarchical Deterministic Wallet Structure

ZelCore uses the BIP-44 standard to organize keys in a tree-like hierarchy. This standard defines a derivation path format:

```
m / purpose' / coin_type' / account' / change / address_index
```

Each component serves a specific role:

- **Purpose (44'):** Indicates the wallet follows the BIP-44 standard.
- **Coin type:** A unique identifier for each blockchain (e.g., 0 for Bitcoin, 60 for Ethereum, 19167 for Flux).
- **Account:** Allows multiple logical accounts under the same seed.
- **Change:** Distinguishes between external (receiving) and internal (change) addresses.
- **Address index:** Sequential index for generating multiple addresses.

This hierarchical approach is what allows ZelCore to function as a multi-chain wallet from a single seed phrase. Each blockchain gets its own branch of the derivation tree, ensuring that keys for Bitcoin, Ethereum, Flux, and every other supported asset are mathematically independent while remaining reproducible from the same root seed.

### Why This Matters for Users

The practical implications of this **crypto wallet architecture** are significant:

- **One backup covers everything.** Your 24-word seed phrase is sufficient to recover all wallets across all supported blockchains.
- **Deterministic recovery.** If you restore your seed phrase on a new device, ZelCore derives the exact same keys in the exact same order. Your addresses and balances reappear without any additional data.
- **No key file management.** Unlike some wallet designs that require you to export and import individual key files, ZelCore's HD structure eliminates that complexity.

## Multi-Chain Support Architecture

### How ZelCore Supports 275+ Assets

Supporting hundreds of blockchains from a single application requires careful architectural planning. ZelCore achieves this through several layers:

**Chain-specific modules:** Each supported blockchain has a dedicated module within ZelCore that understands the network's transaction format, address encoding, signing algorithm, and consensus rules. For example:

- Bitcoin-based chains (BTC, LTC, FLUX) use secp256k1 elliptic curve cryptography with UTXO transaction models.
- Ethereum-based chains (ETH, Polygon, Arbitrum) use the same secp256k1 curve but with account-based transaction models and RLP encoding.
- Chains like Kadena use entirely different cryptographic primitives and transaction formats.

**Unified interface layer:** Despite the differences between blockchains, ZelCore presents a consistent user experience. The interface layer translates chain-specific operations (address generation, transaction building, fee estimation) into a common set of actions: send, receive, view balance, and view transaction history.

**Token standards support:** Beyond native blockchain currencies, ZelCore supports token standards like ERC-20, BEP-20, and KRC-20, multiplying the number of manageable assets without requiring separate chain modules for each token.

### Address Generation Across Chains

When you add a new asset to your ZelCore portfolio, the wallet does not generate a new random key. Instead, it derives the appropriate key from your existing master seed using the coin type specified in BIP-44. This means:

- Adding Bitcoin derives keys from the `m/44'/0'/0'` path.
- Adding Ethereum derives keys from the `m/44'/60'/0'` path.
- Adding Flux derives keys from the `m/44'/19167'/0'` path.

Each derivation is instant and deterministic. There is no network call required and no additional secrets to store.

## Backend Node Infrastructure

### The Role of Backend Nodes

A crypto wallet is only as reliable as its connection to the blockchain networks it supports. ZelCore maintains backend infrastructure that communicates with blockchain nodes to:

- **Query balances:** Check the current state of your addresses on each blockchain.
- **Broadcast transactions:** Submit signed transactions to the network for inclusion in a block.
- **Retrieve transaction history:** Fetch past transactions for display in your wallet.
- **Estimate fees:** Query the network for current fee conditions to suggest appropriate transaction fees.

### Flux-Powered Infrastructure

ZelCore's backend infrastructure leverages the Flux decentralized cloud platform. Flux nodes distributed around the world run the blockchain node software that ZelCore connects to. This provides several advantages:

- **Decentralization:** No single point of failure. If one node goes down, ZelCore can route to another.
- **Geographic distribution:** Nodes are operated globally, reducing latency regardless of where you are located.
- **Reliability:** The Flux network incentivizes node operators to maintain uptime, ensuring consistent service.

To learn more about the full scope of ZelCore's platform capabilities, visit the [ZelCore features page](https://zelcore.io/ecosystem/features).

## Cross-Platform Sync Mechanism

### How Sync Works

ZelCore is available on Windows, macOS, Linux, iOS, and Android. A key feature is the ability to access the same wallet across multiple devices. This is possible because of the deterministic key derivation described above — your seed phrase is all that is needed to reconstruct your wallet on any platform.

However, ZelCore also syncs additional data that is not derivable from the seed phrase alone:

- **Portfolio preferences:** Which assets you have enabled and how they are organized.
- **Contact labels and address book entries.**
- **App settings and display preferences.**

This data is encrypted with your wallet credentials and stored securely so that it can be retrieved when you log in on a new device. The encryption ensures that even if the sync data were intercepted, it would be unreadable without your credentials.

### What Is NOT Synced

For security reasons, certain data never leaves your device:

- **Private keys and seed phrases** are never transmitted over the network. They exist only in encrypted form on your local device.
- **Biometric data** used for local authentication stays on the device.
- **Session tokens** are device-specific and cannot be reused across platforms.

## Security Architecture

### Encryption at Rest

When ZelCore is not actively in use, all sensitive data — including derived private keys — is encrypted on your device. The encryption key is derived from your login credentials, meaning that without your username and password, the data on disk is unreadable.

### D2FA — Decentralized Two-Factor Authentication

ZelCore offers a unique security feature called D2FA (Decentralized Two-Factor Authentication). Unlike traditional 2FA that relies on a centralized service, D2FA uses cryptographic signatures from a second device to authorize sensitive operations. This means:

- No reliance on SMS or email, which are vulnerable to SIM-swapping and phishing.
- No centralized 2FA server that could be compromised.
- Authentication is handled entirely between your devices using public-key cryptography.

For details on setting up D2FA and other security measures, see the [account access FAQ](/docs/faq/account-access-faq/).

### Transaction Signing

All transactions are signed locally on your device. ZelCore never sends your private keys to a server. The signing process works as follows:

1. ZelCore constructs the unsigned transaction using data from the backend nodes (UTXOs, nonce, gas price, etc.).
2. The appropriate private key is derived from your seed and used to sign the transaction locally.
3. Only the signed transaction (which does not contain the private key) is broadcast to the network.

This approach ensures that your keys remain under your control at all times, which is the fundamental principle of self-custody. For a deeper exploration of why self-custody matters, read the [self-custodial wallets guide](/docs/guides/self-custodial-wallets-explained/).

## Why Architecture Matters for Everyday Users

You do not need to understand elliptic curve cryptography to use ZelCore effectively. However, understanding the architecture at a high level helps in practical ways:

- **Backup confidence:** Knowing that one seed phrase secures everything reduces anxiety about losing access to your assets.
- **Security awareness:** Understanding that keys never leave your device helps you evaluate the real risks (physical device access, phishing) versus imagined ones (server hacks stealing your keys).
- **Troubleshooting:** When a balance does not appear or a transaction fails, understanding that ZelCore relies on backend nodes helps you diagnose whether the issue is local or network-related.
- **Wallet migration:** If you ever need to move to a different wallet, understanding BIP-39 and BIP-44 compatibility tells you whether your seed phrase will work in another application.

## Summary

ZelCore's wallet core architecture combines industry-standard key derivation (BIP-39 and BIP-44), chain-specific transaction modules, decentralized backend infrastructure, and robust encryption to deliver a secure multi-chain wallet experience. Every design decision — from hierarchical deterministic key generation to local transaction signing to Flux-powered backend nodes — serves the goal of giving you full control over your assets with minimal complexity. The result is a wallet that manages 275+ assets from a single seed phrase while keeping your private keys firmly in your hands.
