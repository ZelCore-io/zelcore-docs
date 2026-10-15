---
sidebar_position: 2
title: Create a New Wallet
description: "Create a new Zelcore wallet with a secure seed phrase. Learn how to set up your self-custodial crypto wallet from scratch."
keywords: [create crypto wallet, zelcore setup, seed phrase wallet, new wallet setup]
---

# Create a New Wallet

To create a Zelcore wallet, open the app, click **Get Started**, generate a 12, 18 or 24-word seed phrase (24 is the default), write it down and verify it, then name the wallet and set an Easy Login passphrase. Setting up d2FA afterwards is optional but recommended.

:::info Applies to Zelcore 8.39
Written for Zelcore 8.39.0 (October 2026).
:::

This page is the complete text procedure. For the same steps with screenshots, see the [Zelcore Wallet Setup Guide](/docs/walkthroughs/zelcore-setup-guide). For background on seed phrases, see [Seed phrases explained](https://zelcore.io/academy/basics/seed-phrases-explained) on zelcore.io.

## Before You Start

Creating a wallet generates a **seed phrase** (recovery phrase). It is the master key to your wallet. You need it to:

- Recover your wallet if you lose access to your device
- Import your wallet on another device
- Restore your assets

:::danger Important Security Notice
**Never share your seed phrase with anyone!** Zelcore will never ask for your seed phrase. Anyone with access to your seed phrase has full control of your funds.
:::

## Step-by-Step Guide

### 1. Launch Zelcore

Open the Zelcore application on your device (desktop, mobile, or browser extension). If you still need to install it, see [Installation](/docs/getting-started/installation).

### 2. Start Registration

On the welcome screen, click **Get Started** to open the Register screen.

### 3. Choose the Seed Phrase Length

Select **12 Words**, **18 Words** or **24 Words**. 24 words is selected by default. Then click **Generate Seed Phrase**.

To restore a wallet you already have, click **Import Seed Phrase** instead and follow [Import an Existing Wallet](/docs/getting-started/import-wallet).

### 4. Write Down Your Seed Phrase

Zelcore shows the words numbered in order.

1. Write down every word **in the exact order** on paper
2. Store the paper in a secure, offline location (safe, vault, etc.)
3. Consider making more than one copy, stored in different secure locations
4. **Never** store your seed phrase digitally (screenshots, cloud storage, etc.)

Tick **I have saved my seed phrase in a secure location.** and click **Next**.

:::warning
If you lose your seed phrase and your device is lost or damaged, you permanently lose access to your wallet. There is no way to recover it.
:::

### 5. Verify Your Seed Phrase

Zelcore asks you to import the seed phrase again to check that you wrote it down correctly. Enter the words in order and click **Verify**. You will see **Seed phrase verified successfully.**

### 6. Name the Wallet and Set an Easy Login Passphrase

Enter a **Seed Label** (a name for this seed phrase; Zelcore fills in a default) and an **Easy Login Passphrase** of at least 8 characters that includes at least two of: uppercase letter, lowercase letter, number, symbol. Then confirm the passphrase. Use a passphrase you don't use anywhere else.

On devices with biometrics, Zelcore asks whether to use biometrics for Easy Login; if you accept, you don't set a passphrase.

Click **Register**. You can now log in with your Easy Login passphrase.

### 7. First Login

On the first login on a device, Zelcore runs **Smartify**, which checks your wallets for existing balances. This is useful when you restore an existing wallet on a new device.

### 8. Set Up d2FA (Optional but Recommended)

d2FA (decentralized two-factor authentication) protects your account with a numeric PIN that is stored encrypted on the Flux blockchain. To set it up:

1. Keep a small amount of FLUX (about 0.0002) in your first Flux address for the activation transaction
2. Open **Apps** → **Flux ID** → **Next** → **Flux ID d2FA**, then click **Create d2FA**
3. Enter and verify your PIN, choose whether it is used for logging in, for secure tasks (sending, viewing private keys, Flux ID operations), or both, and confirm you have backed up the PIN
4. Enter your password; the PIN is active after the transaction is confirmed and you log in again

:::warning
Write the d2FA PIN down when you create it and keep it apart from your seed phrase. Zelcore asks you to confirm that you have backed it up before it creates the PIN.
:::

## Best Practices for Wallet Security

### Seed Phrase Security
- ✅ Write it on paper and store securely offline
- ✅ Create multiple copies in different secure locations
- ✅ Consider using metal seed phrase storage for fire/water protection
- ❌ Never share with anyone
- ❌ Never store digitally or in cloud services
- ❌ Never take screenshots

### Device Security
- Use a strong, unique Easy Login passphrase
- Keep your device's operating system updated
- Enable device encryption
- Use trusted networks (avoid public WiFi for transactions)

### Additional Security
- Set up d2FA for transactions and other secure tasks
- Consider connecting a hardware wallet (Ledger or Trezor, used with Zelcore desktop)

For more, see [Security Best Practices](/docs/security/best-practices).

## Troubleshooting

### I didn't write down my seed phrase
Open your account page and choose **Show Seed Phrase** (Zelcore asks you to authenticate first). Write it down immediately.

### I want to create multiple wallets
Zelcore supports multiple wallets. Use **Add Wallet** in the app to create another one.

### Need more help?
- Visit the [Support Center](https://support.zelcore.io)
- Join the [Discord community](https://discord.gg/runonflux)

## Related

- [Import an Existing Wallet](/docs/getting-started/import-wallet)
- [Zelcore Wallet Setup Guide (with screenshots)](/docs/walkthroughs/zelcore-setup-guide)
- [Understanding Zelcore Accounts](/docs/getting-started/understanding-zelcore-accounts)
- [Security Best Practices](/docs/security/best-practices)
- [Install Zelcore](/docs/getting-started/installation)
