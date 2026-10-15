---
sidebar_position: 22
title: "Zelcore for Windows: Download and Setup"
description: "How to download, install, and set up Zelcore crypto wallet on Windows. Complete guide for Windows 10 and Windows 11 desktop wallet setup."
keywords: [windows wallet, zelcore windows, crypto wallet desktop, zelcore download windows]
---

# Zelcore for Windows: Download and Setup

:::info Applies to Zelcore 8.39
Written for Zelcore desktop 8.39.0 (October 2026).
:::

Zelcore desktop runs on Windows 10 and Windows 11. This page covers the Windows-specific parts: downloading and installing, antivirus prompts, updates and troubleshooting. To create your wallet after installing, follow [Create a New Wallet](/docs/getting-started/create-wallet).

## System Requirements

Before downloading Zelcore, verify that your Windows system meets the following requirements:

### Minimum Requirements

- **Operating System:** Windows 10 (version 1903 or later) or Windows 11
- **Processor:** 64-bit Intel or AMD processor, 1.5 GHz or faster
- **RAM:** 4 GB minimum (8 GB recommended)
- **Storage:** 500 MB of available disk space
- **Internet:** Broadband internet connection required for balance syncing and transaction broadcasting
- **Display:** 1280 x 720 resolution or higher

### Recommended Specifications

For the smoothest experience, particularly if you manage a large number of assets or run Flux node management features:

- **RAM:** 8 GB or more
- **Storage:** SSD with 1 GB of available space
- **Internet:** Stable connection with low latency

:::info
Zelcore is a light client — it does not download full blockchain data to your computer. Storage requirements remain modest regardless of how many assets you manage.
:::

## Downloading Zelcore for Windows

### Official Download Source

Always download Zelcore from the official source to avoid tampered or malicious software:

1. Open your web browser and navigate to [zelcore.io/wallet](https://zelcore.io/wallet).
2. Locate the **Windows** download button on the page.
3. Click the download button to begin downloading the installer file.
4. The file will be named something like `ZelCore-Setup-X.X.X.exe` where `X.X.X` is the version number.

:::warning
Never download Zelcore from unofficial sources, third-party download sites, or links shared in social media messages. Malicious actors have been known to distribute modified wallet installers that steal seed phrases and private keys. The only trustworthy source is the official Zelcore website.
:::

### Verifying the Download

For additional security, you can verify the integrity of the downloaded file:

- Check that the file size matches what is listed on the download page.
- If a checksum (SHA-256 hash) is provided on the Zelcore website, compare it to the hash of your downloaded file using PowerShell:

```powershell
Get-FileHash -Path "C:\Users\YourName\Downloads\ZelCore-Setup-X.X.X.exe" -Algorithm SHA256
```

- Verify that the digital signature on the installer is valid by right-clicking the file, selecting **Properties**, and checking the **Digital Signatures** tab.

## Installing Zelcore on Windows

### Step-by-Step Installation

1. **Locate the downloaded installer** in your Downloads folder or wherever your browser saved it.
2. **Double-click the installer** to begin the installation process.
3. **Windows SmartScreen may appear.** If you see a "Windows protected your PC" message, click **More info** and then **Run anyway**. This is common with newly released versions before Microsoft's SmartScreen database has fully categorized the file.
4. **Choose the installation type.** You can typically install for just your user account or for all users on the computer. Installing for your account only does not require administrator privileges.
5. **Select the installation directory.** The default location (`C:\Users\YourName\AppData\Local\Programs\ZelCore`) is recommended for most users.
6. **Wait for the installation to complete.** The process usually takes less than a minute.
7. **Launch Zelcore.** The installer may offer to launch Zelcore immediately, or you can find it in your Start menu.

### Windows Defender and Antivirus Considerations

Some antivirus software may flag Zelcore during installation or first launch. This is a common false positive that occurs because:

- Crypto wallet applications interact with cryptographic functions that some heuristic scanners find suspicious.
- Newly released versions may not yet be in the antivirus vendor's allow list.
- The application communicates with blockchain nodes over the internet, which some network monitors flag.

If your antivirus blocks Zelcore:

1. Check the antivirus quarantine to confirm the flagged file is the Zelcore installer or application.
2. Add an exclusion for the Zelcore installation directory in your antivirus settings.
3. For Windows Defender specifically: go to **Settings > Privacy & Security > Windows Security > Virus & threat protection > Manage settings > Exclusions** and add the Zelcore folder.

:::tip
If you are uncertain whether a flagged file is legitimate, re-download Zelcore from the official website and verify the file hash before adding exclusions. Never blindly whitelist files.
:::

## First Launch and Wallet Creation

When you launch Zelcore for the first time, the welcome screen offers to create a new wallet or import an existing one. The steps are the same on every platform:

- New wallet: [Create a New Wallet](/docs/getting-started/create-wallet) (text) or the [Zelcore Wallet Setup Guide](/docs/walkthroughs/zelcore-setup-guide) (screenshots)
- Existing seed phrase: [Import an Existing Wallet](/docs/getting-started/import-wallet)

## Configuring Zelcore on Windows

To set up d2FA after creating your wallet, see step 8 of [Create a New Wallet](/docs/getting-started/create-wallet).

### Windows-Specific Settings

**Startup behavior:**
You can configure Zelcore to launch automatically when Windows starts by adding it to your startup programs. Right-click the Zelcore shortcut, select **Properties**, and use the shortcut path in **Task Manager > Startup** or the **Startup** folder in your Start menu.

**Notifications:**
Zelcore can display Windows notifications for incoming transactions and important alerts. Ensure notifications are enabled in **Windows Settings > System > Notifications** for Zelcore.

**Firewall configuration:**
Zelcore needs outbound internet access to communicate with blockchain nodes. Windows Firewall typically allows this automatically after the first launch. If you use a third-party firewall, ensure Zelcore is allowed outbound connections on standard HTTPS ports.

## Keeping Zelcore Updated on Windows

Updates bring security patches, new asset support and bug fixes, so install them when offered.

### How to Update

Zelcore on Windows checks for updates automatically and will notify you when a new version is available. To update:

1. When prompted, click **Download Update** (or similar).
2. The update will download in the background.
3. Restart Zelcore when prompted to apply the update.
4. Your wallet data, seed phrase, and settings are preserved across updates.

Alternatively, you can manually check for updates by downloading the latest version from [zelcore.io/wallet](https://zelcore.io/wallet) and running the new installer. It will update the existing installation without affecting your wallet data.

## Troubleshooting Common Windows Issues

### Zelcore Will Not Launch

If Zelcore fails to start:

- **Restart your computer** and try again.
- **Check Task Manager** (Ctrl+Shift+Esc) for any Zelcore processes that may be running in the background. End them and relaunch.
- **Run as administrator:** Right-click the Zelcore shortcut and select "Run as administrator."
- **Reinstall:** Download a fresh copy from the official website and reinstall. Your wallet can be recovered from your seed phrase.

### Blank or White Screen on Launch

This is occasionally caused by GPU rendering issues:

- Try launching Zelcore with the `--disable-gpu` flag by modifying the shortcut target.
- Update your graphics drivers to the latest version.
- Ensure your Windows display scaling is set to 100% or 125% (very high scaling values can cause rendering issues).

### Slow Performance

If Zelcore feels sluggish on Windows:

- Close unnecessary browser tabs and applications to free up RAM.
- Ensure you are running the latest version of Zelcore.
- Reduce the number of enabled assets in your portfolio if you have added many that you do not actively use.
- Check your internet connection speed and stability.

### Wallet Not Syncing Balances

- Check your internet connection.
- Verify that your firewall or VPN is not blocking Zelcore's network connections.
- Restart the application.

For more steps, see [Troubleshooting Balance Sync Issues](/docs/guides/troubleshooting-balance-sync-issues).

## Summary

Download Zelcore only from [zelcore.io/wallet](https://zelcore.io/wallet), install with the default settings, then [create](/docs/getting-started/create-wallet) or [import](/docs/getting-started/import-wallet) your wallet. Keep the app updated and store your seed phrase offline.
