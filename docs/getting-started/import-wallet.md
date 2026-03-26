---
sidebar_position: 3
title: Import an Existing Wallet
description: "Import your existing cryptocurrency wallet into ZelCore using a seed phrase, private key, or legacy account migration."
keywords: [import wallet, restore crypto wallet, seed phrase recovery, migrate wallet]
---

# Import Existing Wallet

Already have a Zelcore wallet or want to import from another wallet? Learn how to restore or import your existing crypto wallet.

## Import Methods

Zelcore supports multiple import methods:

1. **Seed Phrase (Mnemonic)** - 12, 18, or 24 words
2. **Private Key** - WIF or hex format
3. **Hardware Wallet** - Ledger or Trezor devices
4. **WalletConnect** - Connect mobile wallet to dApps

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
If you're importing from another wallet (like MetaMask, Trust Wallet, etc.), make sure you're using the correct seed phrase format. Most wallets use BIP39 standard which is compatible with Zelcore.
:::

### Compatible Wallets

Zelcore can import seed phrases from:
- MetaMask
- Trust Wallet
- Exodus
- Atomic Wallet
- MyEtherWallet
- Other BIP39-compatible wallets

## Import from Private Key

Import individual blockchain addresses using private keys.

### Supported Formats

- **WIF** (Wallet Import Format) - Common for Bitcoin-based chains
- **Hex** - Raw hexadecimal private key (64 characters)

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

Integrate your Ledger or Trezor hardware wallet for enhanced security.

### Supported Devices

- **Ledger**: Nano S, Nano S Plus, Nano X
- **Trezor**: One, Model T

### Connection Steps

#### Desktop
1. Connect your hardware wallet to your computer via USB
2. Unlock the device and open the appropriate blockchain app
3. In Zelcore, go to **Settings** → **Hardware Wallets**
4. Select your device type (Ledger or Trezor)
5. Follow the on-screen pairing instructions
6. Approve the connection on your hardware device

#### Mobile
1. Ensure your hardware wallet supports Bluetooth (Ledger Nano X only)
2. Enable Bluetooth on your mobile device
3. In Zelcore, go to **Settings** → **Hardware Wallets**
4. Select **Ledger Nano X**
5. Follow the pairing process
6. Approve the connection on both devices

:::info
Hardware wallet transactions require physical confirmation on the device, providing an additional security layer.
:::

## Import via WalletConnect

Connect your Zelcore mobile wallet to desktop dApps or vice versa.

### Desktop to Mobile

1. On the desktop dApp, click the WalletConnect QR code
2. Open Zelcore mobile app
3. Tap **WalletConnect** icon
4. Scan the QR code
5. Approve the connection

### Mobile to Desktop

1. Open Zelcore browser extension
2. Click **WalletConnect**
3. Select **Mobile Connection**
4. Scan the QR code with your mobile Zelcore app

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

- [Support Center](https://zelcore.io/support)
- [Discord Community](https://discord.gg/runonflux)
- [Contact Support](https://zelcore.io/support) via the app
