---
sidebar_position: 1
---

# Troubleshooting Balance and Sync Issues

## Overview

If your assets are showing on blockchain explorers but not displaying correctly in ZelCore, this guide will help you resolve the issue. Balance display problems can occur due to backend node synchronization issues, outdated app versions, or local client sync problems.

This guide covers the most effective solutions for resolving balance visibility and wallet synchronization problems across both desktop and mobile versions of ZelCore.

## Prerequisites

- ZelCore wallet installed (desktop or mobile)
- Your wallet credentials and access
- Internet connection
- Basic knowledge of your wallet's asset addresses

## Common Symptoms

You may be experiencing balance sync issues if you notice:

- Assets visible on blockchain explorers but showing zero balance in ZelCore
- Transactions confirmed on-chain but not reflected in your wallet
- Missing tokens or assets that you know you own
- Wallet balance stuck at an old value
- Some assets displaying correctly while others don't

## Step-by-Step Solutions

### Solution 1: Run Smartify (Recommended First Step)

Smartify is ZelCore's built-in tool that refreshes your wallet's connection to backend nodes and resyncs your balances. This resolves most balance display issues.

#### On Desktop:

1. Open ZelCore wallet
2. Navigate to **Settings** (gear icon in the top right)
3. Scroll down to find the **Smartify** button
4. Click **Smartify**
5. Wait for the process to complete (this may take 1-3 minutes)
6. Check if your balances are now displaying correctly

#### On Mobile:

1. Open ZelCore app
2. Tap the **Menu** icon (three horizontal lines)
3. Go to **Settings**
4. Scroll down and tap **Smartify**
5. Wait for the synchronization to complete
6. Return to your wallet dashboard to verify balances

**What Smartify does:**
- Refreshes all blockchain connections
- Resyncs account balances from blockchain networks
- Clears cached data that may be outdated
- Reconnects to backend nodes

### Solution 2: Change Backend or Proxy Settings

If Smartify doesn't resolve the issue, the problem may be with the specific backend node you're connected to. Changing your backend or proxy can establish a connection to a more reliable node.

#### Desktop:

1. Open ZelCore
2. Go to **Settings** (gear icon)
3. Find **Backend** or **Proxy** settings
4. Select a different backend server from the dropdown menu
   - Try switching between available regions (US, EU, Asia)
   - If using a specific proxy, try switching to "Auto" or vice versa
5. Click **Save** or **Apply**
6. Run Smartify again (see Solution 1)
7. Check your balances

#### Mobile:

1. Open ZelCore app
2. Go to **Settings**
3. Look for **Backend** or **Network Settings**
4. Change to a different backend server
5. Save the changes
6. Run Smartify
7. Verify your balances

**Note:** Backend options may vary depending on your ZelCore version and the specific blockchain experiencing issues.

### Solution 3: Update ZelCore

Outdated versions of ZelCore may have compatibility issues with blockchain networks or lack important bug fixes. Keeping your app updated is essential.

#### Desktop:

1. Visit the official ZelCore website: [https://zelcore.io](https://zelcore.io)
2. Download the latest version for your operating system
3. Install the update (your wallet data will be preserved)
4. Open the updated ZelCore
5. Run Smartify
6. Check your balances

#### Mobile (iOS):

1. Open the **App Store**
2. Search for "ZelCore"
3. If an update is available, tap **Update**
4. Wait for installation to complete
5. Open ZelCore
6. Run Smartify

#### Mobile (Android):

1. Open **Google Play Store**
2. Search for "ZelCore"
3. If an update is available, tap **Update**
4. Wait for installation to complete
5. Open ZelCore
6. Run Smartify

### Solution 4: Clear Cache and Resync (Advanced)

If the above solutions don't work, you may need to clear your local cache. This forces ZelCore to completely resync with the blockchain.

**Warning:** Before proceeding, ensure you have:
- Your recovery phrase/seed phrase written down and stored securely
- All private keys backed up
- Any important addresses saved

#### Desktop:

1. Close ZelCore completely
2. Navigate to your ZelCore data directory:
   - **Windows:** `%APPDATA%/ZelCore`
   - **macOS:** `~/Library/Application Support/ZelCore`
   - **Linux:** `~/.config/ZelCore`
3. Locate and delete (or rename) the cache folders:
   - `cache` folder
   - `Local Storage` folder (if present)
4. Restart ZelCore
5. Log back into your wallet
6. Run Smartify
7. Allow time for complete resync (may take several minutes)

#### Mobile:

1. Go to your device's **Settings**
2. Find **Apps** or **Application Manager**
3. Locate **ZelCore**
4. Tap **Storage**
5. Tap **Clear Cache** (NOT "Clear Data" - this will erase your wallet)
6. Open ZelCore
7. Run Smartify

### Solution 5: Verify on Block Explorer

To confirm your assets are actually on the blockchain before troubleshooting further:

1. Locate your wallet address for the specific asset:
   - In ZelCore, select the asset
   - Tap/click on the address to copy it
2. Visit the appropriate block explorer:
   - Bitcoin: blockchain.com or blockchair.com
   - Ethereum: etherscan.io
   - Flux: explorer.runonflux.io
   - Other chains: search for "[blockchain name] explorer"
3. Paste your address in the search bar
4. Verify your balance and recent transactions

If the balance shows correctly on the explorer but not in ZelCore, proceed with the solutions above.

## Common Issues and Additional Troubleshooting

### Issue: Smartify Completes but Balance Still Not Showing

**Solution:**
1. Wait 5-10 minutes and check again (blockchain sync can have delays)
2. Try changing backend server (Solution 2)
3. Update to the latest ZelCore version (Solution 3)
4. If the issue persists for more than 24 hours, contact support

### Issue: Only Some Assets Are Missing

**Solution:**
1. The issue may be specific to that blockchain's nodes
2. Check if the blockchain is undergoing maintenance
3. Try removing and re-adding the specific asset in ZelCore
4. Run Smartify after re-adding

### Issue: Balance Shows Correctly After Smartify but Disappears Again

**Solution:**
1. This indicates a persistent backend connection issue
2. Change your backend/proxy settings permanently
3. Check your internet connection stability
4. Ensure your firewall isn't blocking ZelCore

### Issue: Mobile App Won't Complete Smartify

**Solution:**
1. Ensure you have a stable internet connection
2. Try switching between WiFi and mobile data
3. Force close the app completely and try again
4. Clear the app cache (see Solution 4)
5. Update to the latest app version

### Issue: Balance Incorrect After Receiving a Transaction

**Solution:**
1. Verify the transaction is confirmed on the blockchain explorer
2. Some blockchains require multiple confirmations
3. Run Smartify to force a resync
4. If recently sent, wait for network confirmations to complete

## Prevention Tips

To minimize balance sync issues in the future:

- **Keep ZelCore updated:** Enable automatic updates or check regularly
- **Regular Smartify:** Run Smartify weekly as preventive maintenance
- **Stable internet:** Use reliable internet connections when checking balances
- **Monitor updates:** Follow ZelCore announcements for known issues
- **Backup regularly:** Always maintain secure backups of your wallet

## When to Contact Support

Contact ZelCore support if:

- Solutions above don't resolve the issue after 24-48 hours
- You've verified assets on blockchain but they never appear in ZelCore
- You encounter error messages during Smartify
- The issue affects multiple different blockchains simultaneously
- You suspect a security issue or unauthorized access

**Support Resources:**
- Discord: Official ZelCore Discord server
- Email: support@zel.network
- Twitter: @zelcore for status updates

## Related Documentation

- [Wallet Security Best Practices](/docs/security/best-practices)
- [Understanding Blockchain Explorers](/docs/guides/using-block-explorers) (if available)
- [ZelCore Features Overview](/docs/features/overview)

## Technical Background

**Why do sync issues occur?**

ZelCore relies on backend nodes to query blockchain data. When these nodes:
- Fall out of sync with the blockchain
- Experience high load or downtime
- Have network connectivity issues

...your wallet may display outdated or missing balance information. Smartify forces your wallet to reconnect and fetch fresh data from the blockchain, resolving most of these issues.

**Is my crypto safe during sync issues?**

Yes. Your cryptocurrency remains secure on the blockchain. Balance display issues are purely cosmetic - they affect what you see in ZelCore's interface, not the actual blockchain state. Your assets are always controlled by your private keys, regardless of what the wallet displays.
