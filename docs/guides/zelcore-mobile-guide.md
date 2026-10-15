---
sidebar_position: 15
title: Zelcore Mobile Wallet — iOS and Android Guide
description: "Install Zelcore on iOS and Android, set up your mobile wallet, secure it and fix mobile-specific problems. Differences from desktop explained."
keywords: [mobile crypto wallet, zelcore ios, zelcore android, crypto wallet app]
---

# Zelcore Mobile: iOS and Android

Zelcore is available on iOS and Android. Install it from the App Store (iOS 15 or later) or the Android listing below, then set up biometric login and use the troubleshooting section for common mobile issues. To create your wallet after installing, follow [Create a New Wallet](/docs/getting-started/create-wallet).

Background: [Zelcore Setup: First-Time Wallet Guide (2026)](https://zelcore.io/academy/how-to/setting-up-zelcore-first-time)

## Installing Zelcore on Mobile

### Zelcore on iOS

To install Zelcore on your iPhone or iPad:

1. Open the **App Store** on your iOS device.
2. Search for **Zelcore**.
3. Tap **Get** to download and install the app.
4. Open Zelcore and either create a new account or log in with your existing credentials.

**Requirements:**
- iOS 15 or later
- Compatible with iPhone and iPad
- Approximately 150 MB of storage space

### Zelcore on Android

To install Zelcore on your Android device:

1. Open the **Google Play Store**.
2. Search for **Zelcore**.
3. Tap **Install** to download the app.
4. Open Zelcore and create a new account or log in.

**Requirements:**
- Android 8.0 (Oreo) or later
- Approximately 100 MB of storage space
- Google Play Services recommended but not strictly required

:::warning
Always download Zelcore from the official App Store or Google Play Store. Never install Zelcore from third-party APK sites or unofficial sources, as these may contain malware. You can verify the official download links at [zelcore.io/mobile-wallet](https://zelcore.io/mobile-wallet).
:::

For step-by-step installation instructions with additional detail, see the [installation guide](/docs/getting-started/installation/).

## Setting Up Your Mobile Wallet

The wallet steps are the same on every platform:

- New wallet: [Create a New Wallet](/docs/getting-started/create-wallet) (text) or the [Zelcore Wallet Setup Guide](/docs/walkthroughs/zelcore-setup-guide) (screenshots)
- Existing seed phrase: [Import an Existing Wallet](/docs/getting-started/import-wallet)
- d2FA: step 8 of [Create a New Wallet](/docs/getting-started/create-wallet)

### Biometric Authentication

One of the most convenient mobile features is biometric login:

- **iOS:** Face ID or Touch ID
- **Android:** Fingerprint sensor or face unlock (device-dependent)

To enable biometrics:

1. Go to **Settings** within Zelcore.
2. Find the **Biometric Authentication** or **Security** section.
3. Toggle biometric login on.
4. Authenticate with your biometric to confirm.

Once enabled, you can unlock Zelcore with your fingerprint or face instead of typing your passphrase each time.

## Mobile Security

Use a device lock, keep your OS updated, avoid rooted or jailbroken devices, and never keep your seed phrase on your phone (no notes app, photos or cloud documents). See [Security Best Practices](/docs/security/best-practices) for the full list.

## Troubleshooting Mobile-Specific Issues

### App Crashes or Freezes

- **Update the app:** Ensure you are running the latest version of Zelcore.
- **Restart the app:** Force-close Zelcore and reopen it.
- **Restart your device:** A fresh device restart resolves many transient issues.
- **Reinstall the app:** If problems persist, uninstall and reinstall Zelcore, then import your wallet with your seed phrase. Your funds stay on the blockchain.

### Balance Not Updating

Mobile network connectivity can cause balance display delays:

- Switch between Wi-Fi and cellular data to rule out network issues.
- Pull down on the portfolio screen to force a refresh.
- Check your balance on a block explorer to verify the on-chain state.

For more steps, see [Troubleshooting Balance Sync Issues](/docs/guides/troubleshooting-balance-sync-issues).

### Biometric Authentication Not Working

- Verify that biometrics are enabled in both your device settings and Zelcore settings.
- Re-register your biometric data in your device's settings if it has become unreliable.
- As a fallback, log in with your passphrase.

For platform-specific troubleshooting, consult the [platform-specific FAQ](/docs/faq/platform-specific-faq/).
