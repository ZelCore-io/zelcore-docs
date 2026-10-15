---
sidebar_position: 3
title: "Restore or Import a Zelcore Wallet"
sidebar_label: "Import an Existing Wallet"
description: "Restore or import a Zelcore wallet from a seed phrase (12, 18 or 24 words), a private key or a hardware wallet (desktop), or migrate a legacy account."
keywords: [import wallet, restore crypto wallet, seed phrase recovery, migrate wallet]
---

# Import Existing Wallet

You can import a Zelcore wallet from a seed phrase (12, 18 or 24 words), a private key (WIF or hex) or a Ledger or Trezor hardware wallet (Zelcore desktop only). A seed phrase is the most common method and restores the whole wallet; a private key imports a single address.

:::info Applies to Zelcore 8.39
Written for Zelcore 8.39.0 (October 2026).
:::

Background: [Backing Up and Recovering Your Zelcore Wallet](https://zelcore.io/academy/how-to/backing-up-recovering-wallet)

## Import Methods

Zelcore supports multiple import methods:

1. **Seed Phrase (Mnemonic)** - 12, 18, or 24 words
2. **Private Key** - WIF or hex format
3. **Hardware Wallet** - Ledger or Trezor devices (Zelcore desktop only)

WalletConnect is not an import method: it connects a wallet you already have to dApps.

## Import from Seed Phrase

The most common method for restoring a wallet is using your seed phrase.

### Step-by-Step

1. **Open Zelcore** and navigate to the welcome screen
2. Select **"Import Existing Wallet"** or **"Restore Wallet"**
3. Choose **"Seed Phrase"** as the import method
4. Enter your seed phrase:
   - Type or paste all 12/18/24 words in the correct order
   - Ensure proper spelling and spacing
   - Words are case-insensitive but must be from the BIP39 word list
5. **Verify** the words are correct
6. Set up your **authentication method** (biometric, PIN, or password)
7. Wait for the wallet to sync and restore your assets

:::tip
If you're importing from another wallet (like MetaMask, Trust Wallet, etc.), make sure you're using the correct seed phrase format. Zelcore restores standard 12-, 18- or 24-word BIP-39 recovery phrases (English word list). It doesn't support an extra BIP-39 passphrase.
:::

### Compatible Wallets

Zelcore restores standard BIP-39 recovery phrases. Bitcoin and Ethereum-style addresses match the first account of most standard wallets, such as MetaMask. Some chains, Solana among them, use different addresses than wallets such as Phantom, so check each balance after restoring and move funds if an address doesn't match.

A phrase from another wallet that does not use an extra BIP-39 passphrase can be restored in Zelcore, for example from:
- MetaMask
- Trust Wallet
- Exodus
- Atomic Wallet
- MyEtherWallet
- Other BIP-39 wallets

## Import from Private Key

Import individual blockchain addresses using private keys.

### Supported Formats

- **WIF** (Wallet Import Format) - Common for Bitcoin-based chains
- **Hex** - Raw hexadecimal private key (64 characters)

Private keys you import are stored only on that device and are not part of your recovery phrase. Back up each imported private key separately.

### Steps

1. Open Zelcore and go to **Settings**
2. Navigate to **Wallets** → **Import**
3. Select **"Private Key"**
4. Choose the blockchain (Bitcoin, Ethereum, etc.)
5. Enter your private key
6. Confirm and authenticate

:::warning Security Note
Only import private keys on devices you trust. Never import private keys on shared or public devices.
:::

## Connect Hardware Wallet

Ledger and Trezor work with Zelcore desktop only (USB); the mobile app and the browser extension can't pair a hardware wallet. In Zelcore desktop, open the wallet selector in **Portfolio**, choose **Import a Wallet** > **Hardware Wallet** and follow the wizard; Trezor (desktop) needs **Experimental Features** turned on first. For the full steps, the coins each device supports and hardware wallet errors, see [Ledger and Trezor on Zelcore Desktop](../guides/hardware-wallets.md).

## Connecting to dApps with WalletConnect

WalletConnect connects your Zelcore wallet to a dApp; it doesn't import a wallet. See [Connect Zelcore to dApps with WalletConnect](../guides/walletconnect.md).

## Troubleshooting

### My balance isn't showing after import

**Solution:**
- Give the wallet time to sync (can take a few minutes)
- Ensure you're connected to the internet
- Check if you've selected the correct blockchain network
- Some blockchains require manual asset addition

### "Invalid seed phrase" error

**Possible causes:**
- Incorrect word order
- Misspelled words
- Wrong number of words (must be 12, 18, or 24)
- Not a BIP39-compliant phrase

**Solution:**
- Double-check each word carefully
- Ensure words are from the BIP39 word list
- Try importing one more time with careful attention to spelling

### Hardware wallet not detected

**Solution:**
- Ensure device firmware is up to date
- Check USB cable connection (use the original cable)
- Make sure the blockchain app is open on the device
- Try a different USB port
- Restart Zelcore and reconnect

### Different balance than expected

**Possible reasons:**
- Imported only one address instead of the full wallet
- Using a different derivation path
- Assets on different blockchain networks

**Solution:**
- Ensure you imported the full seed phrase, not individual keys
- Check all supported blockchains for your assets
- Contact support if balances are missing

## Security Reminders

- ✅ Only import wallets on your personal devices
- ✅ Verify you're using the official Zelcore application
- ✅ Never share your seed phrase or private keys
- ✅ Use hardware wallets for large amounts
- ❌ Don't import wallets on public/shared computers
- ❌ Don't store recovery phrases digitally

## Next Steps

After successfully importing your wallet, you can start managing your crypto assets in Zelcore.

## Need Help?

- [Support Center](https://support.zelcore.io)
- [Discord Community](https://discord.gg/runonflux)
- [Contact Support](https://support.zelcore.io) via the app

## Related

- [Create a New Wallet](/docs/getting-started/create-wallet)
- [Migrating from Legacy to Seed Phrase](/docs/guides/migrating-legacy-to-seed-phrase)
- [Move Funds from Another Wallet to Zelcore](/docs/guides/moving-funds-from-other-wallets)
- [Ledger and Trezor on Zelcore Desktop](/docs/guides/hardware-wallets)
- [Connect Zelcore to dApps with WalletConnect](/docs/guides/walletconnect)
- [Understanding Zelcore Accounts](/docs/getting-started/understanding-zelcore-accounts)
- [Account Access FAQ](/docs/faq/account-access-faq)
- [Security Best Practices](/docs/security/best-practices)
