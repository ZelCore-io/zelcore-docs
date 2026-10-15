---
sidebar_position: 19
title: Zelcore Architecture — How the Wallet Works
description: "Understand how Zelcore's multi-chain wallet architecture works. Learn about key derivation, backend infrastructure, and cross-platform sync."
keywords: [wallet core, zelcore architecture, multi chain wallet, how crypto wallets work]
---

# Zelcore Architecture

Zelcore derives every key on your device from a BIP-39 seed phrase using BIP-44, stores the keys encrypted on your device and signs each transaction locally, so only the signed transaction is broadcast and your private keys and seed phrase never leave the device. Zelcore's backend connects the app to blockchain nodes to query balances, broadcast signed transactions, retrieve history and estimate fees.

For general background on seed phrases, see [Seed phrases explained](https://zelcore.io/academy/basics/seed-phrases-explained) on zelcore.io.

## Seed Phrase and Key Derivation

### The Seed Phrase

Every Zelcore seed phrase wallet starts from a BIP-39 seed phrase. When you [create a wallet](/docs/getting-started/create-wallet), you choose 12, 18 or 24 words (128, 192 or 256 bits of entropy); 24 words is the default. Every private key in the wallet is derived from this phrase.

:::info
Anyone who obtains your seed phrase can derive every private key your wallet has generated or will generate. See [Security Best Practices](/docs/security/best-practices/).
:::

### BIP-44 Derivation

Zelcore organizes keys with the BIP-44 standard:

```
m / purpose' / coin_type' / account' / change / address_index
```

Each blockchain has its own coin type (for example 0 for Bitcoin, 60 for Ethereum, 19167 for Flux), so each gets its own branch of the tree. When you add an asset, Zelcore derives its key from your existing seed on that branch rather than creating a new random key. There is no network call and no extra secret to store.

What this means for you:

- **One backup covers everything.** Your seed phrase recovers all wallets on all supported blockchains.
- **Deterministic recovery.** Restoring the seed phrase on a new device derives the same keys and addresses, so your balances reappear.
- **Moving to another wallet.** Another wallet that follows BIP-39 and BIP-44 can derive the same keys from your seed phrase.

## Multi-Chain Support

Zelcore supports 100,000+ assets on 80+ blockchains (as of October 2026). Each blockchain has its own module for its transaction format, address encoding and signing, and token standards such as ERC-20, BEP-20 and KRC-20 add assets without a separate module per token. The interface presents the same actions for every chain: send, receive, view balance and view transaction history.

## Backend Infrastructure

Zelcore's backend connects the app to blockchain nodes to:

- **Query balances** for your addresses
- **Broadcast** signed transactions
- **Retrieve transaction history**
- **Estimate fees** from current network conditions

The backend runs on the Flux decentralized cloud, with nodes operated around the world. If a balance does not appear or a transaction fails, the cause can be local or on this network side; see [Troubleshooting Balance Sync Issues](/docs/guides/troubleshooting-balance-sync-issues).

## Cross-Platform Sync

Zelcore runs on Windows, macOS, Linux, iOS and Android. Your seed phrase is all you need to rebuild the wallet on any of them. Zelcore also syncs data that can't be derived from the seed phrase, encrypted with your wallet credentials:

- Which assets you have enabled and how they are organized
- Contact labels and address book entries
- App settings and display preferences

These never leave your device:

- **Private keys and seed phrases.** They exist only in encrypted form on your device.
- **Biometric data** used for local authentication.
- **Session tokens**, which are device-specific.

## Security Architecture

### Encryption at Rest

Sensitive data on your device, including derived private keys, is stored encrypted. The encryption key comes from your login credentials, so the data on disk is unreadable without your password.

### d2FA

d2FA protects your account with a numeric PIN that is stored encrypted on the Flux blockchain. If you turn on its secure-tasks option, Zelcore asks for it before you send, swap, view private keys or use Flux ID. It doesn't use SMS, email or a central 2FA server. To set it up, see step 8 of [Create a New Wallet](/docs/getting-started/create-wallet).

### Transaction Signing

All transactions are signed on your device:

1. Zelcore builds the unsigned transaction with data from the backend nodes (UTXOs, nonce, gas price, etc.).
2. The private key is derived from your seed and signs the transaction locally.
3. Only the signed transaction, which does not contain the private key, is broadcast to the network.

For what this means for custody, see [Self-Custodial Wallets Explained](/docs/guides/self-custodial-wallets-explained/).
