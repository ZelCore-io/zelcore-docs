---
sidebar_position: 9
---

# Platform-Specific FAQ

## iOS ZelCore Limitations: Why are swap and exchange features disabled?

**Answer:**

Swap and exchange features are currently **disabled in the iOS version of ZelCore** due to Apple App Store policies. This is not a bug or technical issue - it's a deliberate restriction required to maintain App Store compliance.

**What is affected on iOS:**

- **Fusion swap feature** - Not available
- **FusionX** - Not available
- **SSP (Simple Swap Protocol)** - Not available
- **In-app exchange/swap functionality** - Disabled
- **Third-party exchange integrations** - Limited or disabled

**What still works on iOS:**

- All wallet functions (send, receive, manage assets)
- Viewing balances and transaction history
- FluxNodes app and node management
- Security features (backup, PIN, biometrics)
- Portfolio tracking
- Adding/removing assets
- Address book
- Settings and customization
- ZelID functionality

**Why this restriction exists:**

Apple's App Store has strict policies regarding cryptocurrency exchange functionality within apps. To comply with these requirements and maintain ZelCore's presence on the App Store, swap/exchange features must be disabled in the iOS version.

**Workarounds for iOS users:**

**Option 1: Use ZelCore Desktop** (Recommended)
- Download ZelCore desktop version for Mac, Windows, or Linux
- Access to full swap/exchange functionality
- Same wallet and seed phrase works across platforms
- Available at zelcore.io

**Option 2: Use External Exchange or DEX**
- Send crypto from iOS ZelCore to a centralized exchange
- Perform swaps on the exchange
- Withdraw back to ZelCore
- Examples: Binance, Coinbase, KuCoin

**Option 3: Use Web-Based DEX**
- Export/import your wallet to a browser-based wallet (MetaMask, TrustWallet web)
- Use decentralized exchanges (Uniswap, PancakeSwap, etc.)
- Perform swaps there
- Send results back to ZelCore iOS

**Option 4: Access Desktop Version Temporarily**
- If you don't have regular access to desktop
- Use ZelCore desktop on a friend's computer or library computer
- Restore your wallet using seed phrase
- Perform necessary swaps
- Log out and delete wallet when done (for security)

**How to sync between iOS and Desktop:**

Your ZelCore wallet is controlled by your seed phrase, not the device:

1. **On iOS ZelCore:**
   - Go to Settings
   - View and securely store your seed phrase (if not already done)

2. **On Desktop ZelCore:**
   - Download and install from zelcore.io
   - Choose "Restore Wallet" during setup
   - Enter your seed phrase
   - Your assets, addresses, and settings sync automatically

3. **Important:**
   - Both versions access the same wallet
   - Changes on one device reflect on the other (after sync)
   - Keep seed phrase secure and private

**Cross-platform compatibility:**

ZelCore seed phrase works across:
- iOS mobile app
- Android mobile app
- Windows desktop
- Mac desktop
- Linux desktop

You can access full functionality by using desktop when needed, while maintaining mobile access for daily wallet operations.

**Will this change in the future?**

The ZelCore team is continuously evaluating App Store policies and exploring compliant solutions to potentially restore swap functionality to iOS. However, there is no confirmed timeline for when or if this will change.

**Recommendations for iOS users:**

1. **For basic wallet needs:** iOS app is fully functional
2. **For occasional swaps:** Use desktop version when needed
3. **For frequent trading:** Consider using Android or desktop as primary device
4. **For emergencies:** Know how to restore wallet on desktop quickly

**Other platform limitations:**

Currently, this limitation is specific to iOS. Android and desktop versions have full swap/exchange functionality available.

**Related:**
- [ZelCore Installation Guide](../../getting-started/installation/) - How to install desktop version
- [Wallet FAQ](../../faq/wallet-faq/) - General wallet questions
- [Fusion FAQ](../../faq/fusion-faq/) - Swap functionality details (desktop/Android)

---

## Are there other differences between iOS, Android, and Desktop ZelCore?

**Answer:**

While ZelCore strives for feature parity across platforms, there are some differences:

**iOS-Specific Limitations:**
- Swap/exchange features disabled (see above)
- Some experimental features may arrive later than other platforms
- Biometric authentication uses Face ID or Touch ID

**Android Advantages:**
- Full swap/exchange functionality
- Some features may be tested on Android first
- Biometric authentication uses fingerprint or face unlock
- Generally fewer app store restrictions

**Desktop Advantages:**
- Larger screen for better portfolio visualization
- Full swap/exchange functionality
- Advanced features often debut on desktop first
- Better for managing large portfolios or multiple nodes
- Easier for complex operations (batch transactions, etc.)
- Access to all experimental features

**Mobile Advantages (Both iOS and Android):**
- Biometric security (fingerprint, face recognition)
- Push notifications (where supported)
- Portable access to wallet
- Quick balance checks
- Easier QR code scanning for addresses

**Feature availability priority:**

New features typically roll out in this order:
1. Desktop (Mac/Windows/Linux)
2. Android
3. iOS (after App Store review and compliance verification)

**Cross-platform features (available on all):**

- Wallet creation, import, and restore
- Send and receive all supported cryptocurrencies
- Portfolio balance tracking
- Transaction history
- FluxNodes app
- Security settings
- ZelID
- Multi-wallet support
- Address book
- Custom asset addition

**Best practice for power users:**

Use desktop for:
- Swaps and exchanges
- FluxNode setup and management
- Large transactions
- Portfolio analysis

Use mobile for:
- Daily balance checks
- Receiving payments (QR codes)
- Quick sends
- On-the-go access

**Related:**
- [Getting Started with ZelCore](../../getting-started/installation/)

---

## Can I use the same wallet on both iOS and Desktop?

**Answer:**

**Yes,** you can use the same ZelCore wallet across iOS, Android, and Desktop platforms simultaneously. Your wallet is controlled by your seed phrase, not by any specific device.

**How it works:**

1. **Seed phrase is the key:**
   - Your seed phrase controls your wallet
   - Any device with your seed phrase accesses the same wallet
   - Blockchain addresses remain the same across all platforms

2. **To add your wallet to another device:**
   - Install ZelCore on the new device
   - Select "Restore Wallet" or "Import Wallet"
   - Enter your seed phrase
   - Your assets, addresses, and most settings sync automatically

3. **What syncs automatically:**
   - All cryptocurrency balances
   - Wallet addresses (receive addresses)
   - Transaction history from blockchain
   - Asset list (which coins/tokens you've added)

4. **What doesn't sync automatically:**
   - Local app settings (display preferences, theme)
   - Biometric settings (device-specific)
   - App-level customizations
   - Address book (may need manual setup on each device)

**Security considerations:**

- **Never share your seed phrase** - Anyone with it controls your wallet
- **Use biometric locks** - Enable on each device for quick access
- **Log out when needed** - If sharing a computer temporarily
- **Backup seed phrase securely** - Don't rely on one device
- **Use different passwords** - If using app-level passwords on different devices

**Common use case:**

Many users maintain:
- **iOS ZelCore** for mobile access and balance checks
- **Desktop ZelCore** for swaps, exchanges, and portfolio management
- Same wallet, accessed from whichever device is most convenient

**Important notes:**

1. **Simultaneous access is safe** - You can have the same wallet open on multiple devices
2. **Transactions made on one device** appear on all devices (after blockchain confirmation)
3. **No manual syncing required** - Balances update automatically from blockchain
4. **Platform-specific features** - Some features (like swaps) only work on specific platforms

**Workflow example:**

Morning:
- Check balance on iOS while commuting (viewing only)

Afternoon:
- Receive payment on iOS (scan QR code)

Evening:
- Open desktop version to swap tokens (iOS can't do swaps)
- Check iOS - balance updated automatically

**Related:**
- [Security Best Practices](../../guides/security-best-practices/)
- [Wallet Backup and Recovery](../../getting-started/create-wallet/)

---

## What happens if I delete ZelCore from my iPhone?

**Answer:**

Deleting ZelCore from your iPhone does **not** delete your cryptocurrency. Your crypto is stored on the blockchain, not in the app. However, you must have your seed phrase to restore access.

**What happens when you delete the app:**

1. **Your cryptocurrency is safe** - Still on the blockchain, controlled by your seed phrase
2. **App data is removed** - Local settings, cached data, and app itself are deleted
3. **You lose access temporarily** - Until you reinstall and restore with seed phrase
4. **No funds are lost** - As long as you have your seed phrase backed up

**Before deleting the app:**

**Critical: Verify you have your seed phrase saved securely**

1. Open ZelCore
2. Go to Settings
3. View/export your seed phrase
4. Write it down on paper or store in secure password manager
5. Verify you've written it correctly (check spelling of each word)
6. Store in safe location

**Without your seed phrase, you cannot recover your wallet after deletion.**

**After deleting the app:**

To regain access:

1. Reinstall ZelCore from App Store
2. Open the app
3. Select "Restore Wallet" or "Import Wallet"
4. Enter your seed phrase
5. Your wallet and all balances are restored

**What's restored:**
- All wallet addresses
- All cryptocurrency balances
- Transaction history (from blockchain)
- Asset list

**What's not restored:**
- Local app settings (theme, display preferences)
- Biometric settings (must re-enable)
- App-level passwords
- Some customizations

**Common scenarios:**

**Scenario 1: iPhone upgrade or replacement**
- Get new iPhone
- Reinstall ZelCore
- Restore with seed phrase
- All assets accessible on new device

**Scenario 2: App issues or bugs**
- Delete ZelCore
- Reinstall fresh copy
- Restore with seed phrase
- Often fixes app-level issues

**Scenario 3: Selling or giving away iPhone**
- **Before wiping phone:** Verify seed phrase is securely backed up
- Delete ZelCore or wipe entire phone
- Your crypto remains safe on blockchain
- Restore on new device when ready

**If you lost your seed phrase:**

If you delete the app WITHOUT having your seed phrase backed up:
- **You will lose access to your funds permanently**
- There is no customer service that can recover it
- ZelCore does not store your seed phrase
- This is the nature of self-custody - you are your own bank

**Prevention:**

1. **Backup seed phrase immediately** when creating wallet
2. **Test your backup** by restoring on another device
3. **Store securely** in multiple physical locations
4. **Never store seed phrase digitally** (no photos, cloud storage, emails)
5. **Verify you can access backup** before deleting app or wiping devices

**Related:**
- [Security Best Practices](../../guides/security-best-practices/)
- [Wallet Backup Guide](../../getting-started/create-wallet/)

---

## Can I transfer my ZelCore wallet from iOS to Android?

**Answer:**

**Yes,** you can easily access your ZelCore wallet on Android (or any other platform) using your seed phrase. This is the same process as using your wallet on multiple devices.

**How to transfer/access wallet on Android:**

1. **On your iOS device (before switching):**
   - Open ZelCore
   - Go to Settings
   - Securely backup your seed phrase
   - Write it down or store in password manager
   - Verify accuracy

2. **On your Android device:**
   - Download ZelCore from Google Play Store
   - Install and open the app
   - Select "Restore Wallet" or "Import Wallet"
   - Enter your seed phrase
   - Your wallet is now accessible on Android

3. **Result:**
   - Same wallet addresses
   - Same balances
   - Same transaction history
   - All assets available

**Important: This is not a "transfer"**

You're not moving your wallet from iOS to Android. You're accessing the same wallet on a different device. Your cryptocurrency remains on the blockchain, and you can access it from any device with your seed phrase.

**You can keep both:**

- Keep ZelCore on iOS for basic wallet functions
- Also use ZelCore on Android for full functionality (including swaps)
- Both devices access the same wallet simultaneously
- Changes on one device reflect on the other

**Why switch to Android?**

If you're considering switching from iOS to Android ZelCore:

**Android advantages:**
- Full swap/exchange functionality (Fusion, FusionX, SSP)
- No Apple-imposed restrictions
- Feature updates may arrive sooner
- More experimental features available

**What you'll gain:**
- Access to in-app swaps and exchanges
- Full feature parity with desktop
- More flexibility for trading

**What remains the same:**
- All core wallet functions
- Same security features
- Same assets and balances
- Same seed phrase controls wallet

**Migration checklist:**

- [ ] Backup seed phrase from iOS ZelCore securely
- [ ] Download ZelCore on Android (Google Play Store)
- [ ] Restore wallet using seed phrase
- [ ] Verify all balances match
- [ ] Test sending/receiving on Android
- [ ] Enable biometric security on Android
- [ ] Set up app-level password (if desired)
- [ ] Decide if keeping iOS version or deleting

**After migration:**

You can:
- Delete ZelCore from iOS if you no longer need it
- Keep both versions for redundancy
- Use Android as primary, iOS as backup viewer

**Security reminder:**

- Your seed phrase works on any platform
- Never share your seed phrase
- Seed phrase is the only way to recover wallet
- Keep it secure during and after migration

**Related:**
- [iOS Limitations FAQ](#ios-zelcore-limitations-why-are-swap-and-exchange-features-disabled) (above)
- [Getting Started Guide](../../getting-started/installation/)
