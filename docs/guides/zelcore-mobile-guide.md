---
sidebar_position: 15
title: ZelCore Mobile Wallet — iOS and Android Guide
description: "Complete guide to using ZelCore mobile crypto wallet on iOS and Android. Setup, features, platform differences, and mobile-specific tips."
keywords: [mobile crypto wallet, zelcore ios, zelcore android, crypto wallet app]
---

# ZelCore Mobile Crypto Wallet — Complete iOS and Android Guide

## Overview

ZelCore is a powerful mobile crypto wallet available on both iOS and Android, giving you full access to a multi-asset crypto wallet app directly from your phone. Whether you are checking balances on the go, sending transactions, or managing your portfolio, the ZelCore mobile experience is designed to provide the same comprehensive functionality as the desktop version while taking advantage of mobile-specific features like biometric authentication and push notifications.

This guide covers everything you need to know about using ZelCore on your mobile device, including installation, platform differences between ZelCore iOS and ZelCore Android, mobile security features, and tips for getting the most out of your mobile wallet setup.

## Installing ZelCore on Mobile

### ZelCore on iOS

To install ZelCore on your iPhone or iPad:

1. Open the **App Store** on your iOS device.
2. Search for **ZelCore**.
3. Tap **Get** to download and install the app.
4. Open ZelCore and either create a new account or log in with your existing credentials.

**Requirements:**
- iOS 14.0 or later
- Compatible with iPhone and iPad
- Approximately 150 MB of storage space

### ZelCore on Android

To install ZelCore on your Android device:

1. Open the **Google Play Store**.
2. Search for **ZelCore**.
3. Tap **Install** to download the app.
4. Open ZelCore and create a new account or log in.

**Requirements:**
- Android 8.0 (Oreo) or later
- Approximately 100 MB of storage space
- Google Play Services recommended but not strictly required

:::warning
Always download ZelCore from the official App Store or Google Play Store. Never install ZelCore from third-party APK sites or unofficial sources, as these may contain malware. You can verify the official download links at [zelcore.io/mobile-wallet](https://zelcore.io/mobile-wallet).
:::

For step-by-step installation instructions with additional detail, see the [installation guide](/docs/getting-started/installation/).

## Setting Up Your Mobile Wallet

### Creating a New Wallet

If you are new to ZelCore:

1. Open the app and tap **Create Account**.
2. Choose a strong username and password. Your password encrypts your wallet data locally on your device.
3. ZelCore will generate your **seed phrase** — a set of 24 words that serve as the master backup for all your private keys.
4. **Write down your seed phrase on paper.** Do not take a screenshot or store it digitally. This is the only way to recover your wallet if you lose your device.
5. Confirm your seed phrase by entering the requested words.
6. Your wallet is now ready to use.

### Logging In with an Existing Account

If you already use ZelCore on another device:

1. Open the app and tap **Log In**.
2. Enter your ZelCore username and password.
3. If you have two-factor authentication (2FA) or D2FA enabled, complete the verification step.
4. Your portfolio and settings will sync automatically.

:::info
ZelCore accounts can be used across multiple devices simultaneously. Your portfolio settings, added assets, and preferences sync between devices, while your private keys are generated independently on each device from your seed phrase.
:::

## Mobile-Specific Features

### Biometric Authentication

One of the most convenient mobile features is biometric login:

- **iOS:** Face ID or Touch ID
- **Android:** Fingerprint sensor or face unlock (device-dependent)

To enable biometrics:

1. Go to **Settings** within ZelCore.
2. Find the **Biometric Authentication** or **Security** section.
3. Toggle biometric login on.
4. Authenticate with your biometric to confirm.

Once enabled, you can unlock ZelCore with a quick fingerprint scan or face recognition instead of typing your password each time. This strikes a balance between security and convenience for day-to-day mobile use.

### D2FA (Decentralized Two-Factor Authentication)

ZelCore's D2FA system works seamlessly on mobile. D2FA uses the Flux blockchain to provide decentralized two-factor authentication that does not depend on a centralized server. This is especially valuable on mobile, where devices are more likely to be lost or stolen than desktop computers.

When D2FA is enabled, any login attempt or sensitive action requires approval from your registered 2FA device, adding a strong layer of protection even if someone obtains your username and password.

### Push Notifications

ZelCore mobile supports push notifications that alert you to:

- Incoming transactions
- Portfolio value changes
- App updates and announcements

Configure notifications in your device's system settings under the ZelCore app preferences.

### QR Code Scanning

Mobile devices make it easy to send crypto using QR codes:

1. Navigate to the **Send** screen for any asset.
2. Tap the **QR code icon** next to the address field.
3. Point your camera at the recipient's QR code.
4. The address (and optionally the amount) will auto-fill.

This eliminates the error-prone process of manually typing or pasting long cryptocurrency addresses.

## Platform Differences: iOS vs. Android

While ZelCore aims to provide a consistent experience across platforms, there are some differences to be aware of:

### Feature Availability

| Feature | iOS | Android |
|---|---|---|
| Core wallet functions (send/receive) | Full support | Full support |
| Multi-asset portfolio | Full support | Full support |
| Biometric authentication | Face ID / Touch ID | Fingerprint / Face Unlock |
| In-app token swaps | Limited (Apple restrictions) | Full support |
| D2FA | Full support | Full support |
| Fusion (cross-chain swaps) | Limited availability | Full support |
| Direct APK updates | Not available | Available from zelcore.io |
| Background sync | Limited by iOS | More flexible |

### iOS-Specific Considerations

Apple's App Store policies impose certain restrictions on cryptocurrency wallet apps:

- **Swap limitations:** Apple restricts certain in-app cryptocurrency exchange features. Some swap or exchange functionalities available on Android and desktop may be limited or unavailable on iOS. If you need full swap access, consider using the ZelCore desktop app or Android version.
- **Update timing:** iOS app updates go through Apple's review process, which can delay releases by several days compared to Android or desktop.
- **Background activity:** iOS is more aggressive about suspending background apps, which can affect balance sync timing.

### Android-Specific Considerations

- **APK availability:** In addition to the Google Play Store, ZelCore offers direct APK downloads from the official website. This is useful in regions where the Play Store may not carry the app.
- **Permissions:** Android may request additional permissions for camera (QR scanning), biometrics, and notifications. Grant these for the best experience.
- **Custom ROMs:** ZelCore is tested on stock Android. Custom ROMs may work but are not officially supported and may affect biometric features.

:::tip
If you use both iOS and Android devices, you can install ZelCore on both and log in with the same account. Your portfolio configuration will sync, giving you flexibility to use whichever device is convenient.
:::

## Syncing ZelCore Between Mobile and Desktop

ZelCore is designed for multi-device use. Here is how syncing works:

### What Syncs Automatically

- Your account credentials (username/password)
- Portfolio asset list (which coins you have added)
- General preferences and settings

### What Does Not Sync

- Transaction history is pulled from the blockchain, so it appears on all devices independently
- Biometric settings are device-specific
- Notification preferences are device-specific

### Best Practices for Multi-Device Use

1. **Use the same account** on all devices for a consistent experience.
2. **Keep all devices updated** to the latest ZelCore version to avoid compatibility issues.
3. **Enable D2FA** for security across all devices — if one device is compromised, the attacker still cannot access your wallet without the second factor.

For questions about accessing your account across devices, see the [account access FAQ](/docs/faq/account-access-faq/).

## Mobile Security Best Practices

Using a crypto wallet on a mobile device requires extra vigilance. Your phone is with you everywhere, making it more exposed to physical theft, network attacks, and social engineering.

### Device-Level Security

- **Enable device lock:** Use a strong PIN, password, or biometric to lock your phone. If your device has no lock screen, anyone who picks it up can attempt to open ZelCore.
- **Keep your OS updated:** Operating system updates patch security vulnerabilities. Always install them promptly.
- **Avoid rooted/jailbroken devices:** Rooting (Android) or jailbreaking (iOS) removes security protections that help keep your wallet safe. ZelCore may not function correctly on modified devices.
- **Use a secure network:** Avoid using public Wi-Fi for crypto transactions. If you must use public Wi-Fi, connect through a VPN.

### App-Level Security

- **Enable biometric authentication** so that even if someone gains access to your unlocked phone, they still need your biometric to open ZelCore.
- **Enable D2FA** for login and transaction authorization.
- **Log out when not in use** if you are in a high-risk environment.
- **Do not store your seed phrase on your phone** — no notes app, no photos, no cloud documents.

:::warning
If your mobile device is lost or stolen, immediately use another device to access your ZelCore account and transfer your funds to a new wallet. If you suspect your credentials are compromised, generate a new seed phrase and move all assets immediately.
:::

## Troubleshooting Mobile-Specific Issues

### App Crashes or Freezes

- **Update the app:** Ensure you are running the latest version of ZelCore.
- **Restart the app:** Force-close ZelCore and reopen it.
- **Restart your device:** A fresh device restart resolves many transient issues.
- **Reinstall the app:** If problems persist, uninstall and reinstall ZelCore. You can log back in with your credentials. Your funds are safe on the blockchain.

### Balance Not Updating

Mobile network connectivity can cause balance display delays:

- Switch between Wi-Fi and cellular data to rule out network issues.
- Pull down on the portfolio screen to force a refresh.
- Check your balance on a block explorer to verify the on-chain state.

### Biometric Authentication Not Working

- Verify that biometrics are enabled in both your device settings and ZelCore settings.
- Re-register your biometric data in your device's settings if it has become unreliable.
- As a fallback, you can always log in with your username and password.

For platform-specific troubleshooting, consult the [platform-specific FAQ](/docs/faq/platform-specific-faq/).

## Summary

ZelCore's mobile crypto wallet app delivers a comprehensive cryptocurrency management experience on both iOS and Android. While there are minor platform differences — particularly around swap availability on iOS — the core functionality of sending, receiving, and managing hundreds of assets is fully available on both platforms. By enabling biometric authentication and D2FA, keeping your device and app updated, and following mobile security best practices, you can confidently manage your crypto portfolio from anywhere.
