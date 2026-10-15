---
sidebar_position: 13
title: Self-Custodial Wallets Explained
description: "What is a self-custodial crypto wallet and why does it matter? Learn how Zelcore keeps you in full control of your private keys and funds."
keywords: [self custodial crypto wallet, private cryptocurrency wallet, non custodial wallet, wallet security]
---

# Self-Custodial Wallets Explained

A self-custodial wallet is one where you, and only you, hold the private keys that control your crypto. Zelcore is self-custodial. This page explains what that means in Zelcore: where your keys live, what Zelcore stores, and what you are responsible for. For general background on wallet types, see [What is a crypto wallet?](https://zelcore.io/academy/basics/what-is-a-crypto-wallet) on zelcore.io.

## Custodial vs. Self-Custodial

| | Custodial wallet (for example, an exchange account) | Self-custodial wallet (Zelcore) |
|---|---|---|
| **Who holds private keys** | The service provider | You |
| **Access control** | Platform can restrict access | You have unrestricted access |
| **If the company fails** | Funds may be lost | Funds stay on the blockchain; restore with your seed phrase |
| **Responsibility for security** | Shared (platform + your login) | Entirely yours |

Ledger and Trezor hardware wallets are also self-custodial, and you can use them with Zelcore desktop.

:::info
Self-custody comes with responsibility. There is no "forgot password" option: if you lose your seed phrase, your funds are unrecoverable.
:::

## How Zelcore Implements Self-Custody

### Private Keys Stay on Your Device

When you [create a Zelcore wallet](/docs/getting-started/create-wallet/), your private keys are generated locally on your device. They are encrypted with your password and stored only on your device. Zelcore's servers never see, transmit, or store your private keys, and the Zelcore team cannot access your funds.

### Seed Phrase as Your Master Backup

During wallet creation, Zelcore generates a seed phrase (also called a recovery phrase or mnemonic) of 12, 18 or 24 words; 24 is the default. Every key for every supported blockchain is derived from this one phrase.

1. **Write it down on paper.** No screenshots, cloud storage or notes apps.
2. **Store it in a secure physical location**, such as a fireproof safe.
3. **Never share it with anyone.** Zelcore support will never ask for your seed phrase.
4. **Consider a metal backup**, which resists fire, water and corrosion.

### Encrypted Local Storage

Zelcore encrypts your wallet data with your password. Someone with access to your device's file system cannot extract private keys without it. Use a strong password that you don't reuse anywhere else.

### d2FA

d2FA protects your account with a numeric PIN that is stored encrypted on the Flux blockchain. If you turn on its secure-tasks option, Zelcore asks for it before you send, swap, view private keys or use Flux ID. See step 8 of [Create a New Wallet](/docs/getting-started/create-wallet) to set it up.

### No Server-Side Dependency for Funds

Your funds exist on the blockchain, not in Zelcore's infrastructure. If Zelcore's servers went offline, your crypto would remain on the blockchain and accessible through any compatible wallet using your seed phrase.

## Common Questions

### What happens if Zelcore shuts down?

Your crypto is on the blockchain, not in Zelcore's software. You can import your seed phrase into any compatible BIP-39 wallet and regain access to your funds.

### Can Zelcore freeze my funds?

No. Zelcore cannot freeze, restrict, or access your funds. Only you can authorize transactions.

### Can I use Zelcore alongside a hardware wallet?

Yes, on desktop. Zelcore desktop works with Ledger and Trezor hardware wallets, so the keys for those accounts stay on the hardware device.

## Next Steps

- [Create a New Wallet](/docs/getting-started/create-wallet/)
- [Security Best Practices](/docs/security/best-practices/)
- [Security FAQ](/docs/faq/security-faq/)
