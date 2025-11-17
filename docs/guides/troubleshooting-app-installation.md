---
sidebar_position: 6
---

# Troubleshooting ZelCore App Installation and Updates

## Overview

This guide addresses common problems users encounter when installing, updating, or auto-updating ZelCore wallet applications across different platforms (Windows, macOS, Linux, iOS, Android). Whether you're experiencing installation failures, update errors, or auto-update issues, this guide provides systematic solutions for each platform.

ZelCore releases regular updates to improve security, add features, and fix bugs. Keeping your app updated is critical for security and functionality, so resolving installation and update issues promptly is important.

## Prerequisites

- Administrator/root access on your device (for desktop installations)
- Stable internet connection
- Sufficient storage space (at least 500MB free)
- Your wallet backup phrase or credentials (in case reinstallation is needed)

## Common Symptoms

You may be experiencing installation or update issues if you notice:

- App fails to install with error messages
- Auto-update downloads but doesn't apply
- Update process hangs or freezes
- App won't launch after update
- "Installation failed" or "Update failed" errors
- Download completes but installation doesn't start
- App crashes immediately after updating
- Version number doesn't change after update attempt

## Windows Installation and Update Issues

### Issue 1: Installation Blocked by Windows Defender / SmartScreen

**Symptoms:**
- Windows shows "Windows protected your PC" message
- SmartScreen blocks installation
- Defender flags installer as potential threat

**Solution:**

**Step 1: Verify installer authenticity**

Always download ZelCore from official sources:
- Official website: https://zelcore.io
- Official GitHub releases: https://github.com/zelcash/zelcore/releases

**Check file signature:**
1. Right-click the installer file
2. Select **Properties**
3. Go to **Digital Signatures** tab
4. Verify signer is legitimate ZelCore/Zel Technologies

**Step 2: Allow installation through SmartScreen**

1. When SmartScreen warning appears, click **More info**
2. Click **Run anyway**
3. Proceed with installation

**Step 3: Add exception in Windows Defender** (if blocked)

1. Open **Windows Security**
2. Go to **Virus & threat protection**
3. Click **Manage settings** under "Virus & threat protection settings"
4. Scroll to **Exclusions**
5. Click **Add or remove exclusions**
6. Click **Add an exclusion** > **File**
7. Browse to the ZelCore installer and select it
8. Run installer again

**Prevention:**
- Always download from official sources
- Keep Windows Defender updated
- Verify digital signatures before installing

### Issue 2: "Cannot Install - Another Version Running"

**Symptoms:**
- Installer reports existing version is running
- Installation fails with "close application" message
- Update process stuck

**Solution:**

**Step 1: Close ZelCore completely**

1. Right-click ZelCore icon in system tray (bottom right)
2. Select **Quit** or **Exit**
3. Wait 10 seconds

**Step 2: Force close if still running**

1. Press **Ctrl + Shift + Esc** to open Task Manager
2. Look for **ZelCore** or **zelcore.exe** in Processes
3. Select it and click **End Task**
4. Also end any related processes (ZelCore Helper, etc.)

**Step 3: Retry installation**

Run the installer again. It should now proceed.

**Step 4: If still blocked - restart Windows**

```
Restart your computer and attempt installation immediately after login
```

### Issue 3: Auto-Update Downloads But Doesn't Apply

**Symptoms:**
- ZelCore shows "Update downloaded"
- Notification says to restart app to apply
- After restart, still on old version
- Update notification keeps reappearing

**Solution:**

**Step 1: Manual update download**

Instead of relying on auto-update:

1. Visit https://zelcore.io
2. Download latest version manually
3. Run installer (will upgrade existing installation)
4. Launch ZelCore
5. Verify version number in Settings

**Step 2: Clear update cache**

1. Close ZelCore completely
2. Navigate to: `%APPDATA%\ZelCore`
3. Delete the **pending-update** folder (if exists)
4. Delete **update-cache** folder (if exists)
5. Restart ZelCore
6. Allow auto-update to download fresh

**Step 3: Check permissions**

Updates may fail if ZelCore lacks write permissions:

1. Navigate to ZelCore installation folder (usually `C:\Program Files\ZelCore`)
2. Right-click the folder > **Properties**
3. Go to **Security** tab
4. Click **Edit**
5. Select your user account
6. Ensure **Full control** is checked
7. Click **OK** and **Apply**

**Step 4: Reinstall ZelCore**

If updates continue failing:

1. **BACKUP YOUR WALLET** (write down seed phrase)
2. Uninstall ZelCore via Windows Settings > Apps
3. Delete folder: `C:\Program Files\ZelCore` (if remains)
4. Delete folder: `%APPDATA%\ZelCore`
5. Download fresh installer from zelcore.io
6. Install as administrator (right-click installer > Run as administrator)
7. Restore wallet from backup

### Issue 4: Installer Crashes or Hangs

**Symptoms:**
- Installer starts but freezes
- Progress bar stuck
- "Not responding" in Task Manager
- Installation never completes

**Solution:**

**Step 1: Run installer as administrator**

1. Right-click installer file
2. Select **Run as administrator**
3. Allow UAC prompt
4. Proceed with installation

**Step 2: Disable antivirus temporarily**

Some antivirus software interferes with installers:

1. Temporarily disable antivirus (not Windows Defender)
2. Run installer
3. Re-enable antivirus after installation completes

**Step 3: Check disk space**

```
Open File Explorer > This PC
Check available space on C: drive
Ensure at least 1GB free space
```

**Step 4: Download installer again**

Previous download may be corrupted:

1. Delete existing installer file
2. Clear browser cache
3. Download fresh installer from zelcore.io
4. Verify download completed (check file size)
5. Run new installer

**Step 5: Use compatibility mode**

For older Windows versions:

1. Right-click installer
2. Select **Properties**
3. Go to **Compatibility** tab
4. Check **Run this program in compatibility mode for:**
5. Select **Windows 8** or **Windows 7**
6. Click **Apply** and **OK**
7. Run installer

## macOS Installation and Update Issues

### Issue 1: "App Cannot Be Opened Because Developer Cannot Be Verified"

**Symptoms:**
- macOS Gatekeeper blocks installation
- Message about unidentified developer
- App won't open after installation

**Solution:**

**Step 1: Allow installation in System Settings**

**For macOS Ventura (13.0+):**

1. Download ZelCore from zelcore.io
2. Try to open the app
3. When blocked, go to **System Settings** > **Privacy & Security**
4. Scroll down to **Security** section
5. You'll see message about ZelCore being blocked
6. Click **Open Anyway**
7. Confirm by clicking **Open**

**For macOS Monterey and earlier:**

1. Go to **System Preferences** > **Security & Privacy**
2. Click **General** tab
3. Click the lock icon and enter password
4. Find message about ZelCore being blocked
5. Click **Open Anyway**
6. Confirm when prompted

**Step 2: Alternative method - Control + Click**

1. Locate ZelCore app in Applications folder
2. Hold **Control** key and click the app
3. Select **Open** from menu
4. Click **Open** in dialog box
5. This creates permanent exception

**Step 3: Command line override** (for advanced users)

```bash
xattr -cr /Applications/ZelCore.app
```

Then open app normally.

### Issue 2: DMG Won't Mount or Install

**Symptoms:**
- DMG file won't open
- "Resource busy" error
- Image verification fails
- Disk image won't mount

**Solution:**

**Step 1: Re-download DMG**

1. Delete existing DMG file
2. Clear Downloads folder
3. Clear Safari/Chrome cache
4. Download fresh from zelcore.io
5. Verify download completed fully

**Step 2: Verify and mount via Terminal**

```bash
# Navigate to Downloads
cd ~/Downloads

# Verify DMG integrity
hdiutil verify ZelCore-[version].dmg

# If verification passes, mount it
hdiutil attach ZelCore-[version].dmg
```

Replace `[version]` with actual filename.

**Step 3: Check for corrupted download**

Compare file size with what's listed on download page. If smaller, download was incomplete.

**Step 4: Use different browser**

If using Safari, try Chrome or Firefox, or vice versa.

### Issue 3: Auto-Update Fails on macOS

**Symptoms:**
- Update downloads but doesn't install
- "Update failed" notification
- App still on old version after restart

**Solution:**

**Step 1: Manual update**

1. Go to https://zelcore.io
2. Download latest macOS version
3. Open DMG file
4. Drag ZelCore to Applications (replace existing)
5. Launch app
6. Verify version in Settings

**Step 2: Check app permissions**

1. Go to **System Settings** > **Privacy & Security**
2. Check **Full Disk Access** - ensure ZelCore is listed and enabled
3. Check **Accessibility** - ensure ZelCore is listed and enabled
4. Restart ZelCore

**Step 3: Clear update cache**

```bash
# Close ZelCore first
# Then in Terminal:
rm -rf ~/Library/Application\ Support/ZelCore/pending-update
rm -rf ~/Library/Application\ Support/ZelCore/update-cache
```

Restart ZelCore and allow update to download again.

**Step 4: Reinstall cleanly**

```bash
# BACKUP YOUR WALLET FIRST

# Close ZelCore, then:
rm -rf /Applications/ZelCore.app
rm -rf ~/Library/Application\ Support/ZelCore
rm -rf ~/Library/Caches/ZelCore

# Download fresh from zelcore.io
# Install and restore wallet
```

### Issue 4: App Crashes After Update

**Symptoms:**
- ZelCore opens then immediately crashes
- Crash reporter appears
- Can't access wallet after updating

**Solution:**

**Step 1: Check Console logs**

1. Open **Console** app (in Applications > Utilities)
2. Select your Mac in sidebar
3. Search for "ZelCore"
4. Look for crash logs or error messages
5. Note any errors mentioning missing files or permissions

**Step 2: Reset app preferences**

```bash
# Close ZelCore
rm ~/Library/Preferences/io.zelcore.wallet.plist
```

Launch ZelCore again. Settings will reset but wallet remains.

**Step 3: Clear cache only** (preserves wallet)

```bash
rm -rf ~/Library/Caches/ZelCore
```

**Step 4: Reinstall without deleting wallet data**

```bash
# BACKUP WALLET FIRST (just to be safe)

# Delete app only
rm -rf /Applications/ZelCore.app

# Download and install fresh copy
# Wallet data in ~/Library/Application Support/ZelCore remains intact
```

**Step 5: Check macOS version compatibility**

Ensure your macOS version is supported:
- macOS 10.13 (High Sierra) or later typically required
- Check ZelCore release notes for minimum version

## Linux Installation and Update Issues

### Issue 1: AppImage Won't Run

**Symptoms:**
- AppImage file won't execute
- Permission denied errors
- Nothing happens when double-clicking

**Solution:**

**Step 1: Make AppImage executable**

```bash
cd ~/Downloads
chmod +x ZelCore-*.AppImage
```

Then run:

```bash
./ZelCore-*.AppImage
```

**Step 2: Install FUSE** (required for AppImage)

**Ubuntu/Debian:**
```bash
sudo apt update
sudo apt install fuse libfuse2
```

**Fedora:**
```bash
sudo dnf install fuse fuse-libs
```

**Arch:**
```bash
sudo pacman -S fuse2
```

**Step 3: Run with --appimage-extract**

If FUSE issues persist:

```bash
./ZelCore-*.AppImage --appimage-extract
cd squashfs-root
./zelcore
```

### Issue 2: DEB/RPM Package Installation Fails

**Symptoms:**
- Package manager errors
- Dependency conflicts
- Installation aborts

**Solution:**

**For DEB (Ubuntu/Debian):**

```bash
# Install dependencies first
sudo apt update
sudo apt install -f

# Install ZelCore
sudo dpkg -i zelcore_*.deb

# If dependency errors:
sudo apt --fix-broken install
```

**For RPM (Fedora/CentOS):**

```bash
# Fedora
sudo dnf install zelcore-*.rpm

# CentOS
sudo yum install zelcore-*.rpm

# If dependency errors:
sudo dnf install -y [missing-package]
```

**Step 3: Use package manager GUI**

**Ubuntu:**
- Double-click .deb file
- Opens in Ubuntu Software
- Click Install

**Fedora:**
- Double-click .rpm file
- Opens in Software
- Click Install

### Issue 3: Auto-Update Not Working on Linux

**Note:** Auto-update is limited on Linux depending on installation method.

**Solution:**

**For AppImage users:**

AppImage doesn't auto-update. Manual update required:

1. Download latest AppImage from zelcore.io
2. Make executable: `chmod +x ZelCore-*.AppImage`
3. Replace old AppImage
4. Run new version

**For DEB/RPM users:**

Updates may come through system package manager if repository was added.

**Check for updates:**

```bash
# Ubuntu/Debian
sudo apt update
sudo apt upgrade zelcore

# Fedora
sudo dnf upgrade zelcore
```

**Manual update:**

Download new DEB/RPM and install over existing.

### Issue 4: Missing Dependencies

**Symptoms:**
- Error messages about missing libraries
- App won't launch after installation
- "Library not found" errors

**Solution:**

**Common missing dependencies:**

**Ubuntu/Debian:**
```bash
sudo apt install \
  libgtk-3-0 \
  libnotify4 \
  libnss3 \
  libxss1 \
  libxtst6 \
  xdg-utils \
  libatspi2.0-0 \
  libdrm2 \
  libgbm1 \
  libxcb-dri3-0
```

**Fedora:**
```bash
sudo dnf install \
  gtk3 \
  libnotify \
  nss \
  libXScrnSaver \
  libXtst \
  xdg-utils \
  at-spi2-core \
  libdrm \
  mesa-libgbm
```

**Check for missing libraries:**

```bash
ldd /opt/ZelCore/zelcore | grep "not found"
```

Install any libraries shown as "not found".

## iOS Installation and Update Issues

### Issue 1: App Won't Download from App Store

**Symptoms:**
- Download starts but stops
- "Cannot download" error
- App grayed out in App Store

**Solution:**

**Step 1: Check iOS version compatibility**

1. Go to Settings > General > About
2. Check iOS version
3. ZelCore typically requires iOS 12.0 or later
4. Update iOS if needed: Settings > General > Software Update

**Step 2: Check storage space**

1. Go to Settings > General > iPhone Storage
2. Ensure at least 500MB free
3. Delete unused apps or media if needed

**Step 3: Restart device**

1. Power off iPhone/iPad completely
2. Wait 30 seconds
3. Power on
4. Try download again

**Step 4: Check Apple ID and payment method**

1. Go to Settings > [Your Name] > Media & Purchases
2. Sign out
3. Sign back in
4. Verify payment method is valid (even for free apps)
5. Try download again

**Step 5: Reset App Store cache**

1. Open App Store
2. Tap your profile icon (top right)
3. Scroll down and pull to refresh
4. Search for ZelCore again
5. Download

### Issue 2: App Update Fails or Hangs

**Symptoms:**
- Update starts but never completes
- Progress circle spins indefinitely
- "Unable to Update" message

**Solution:**

**Step 1: Pause and resume update**

1. Tap the app icon on home screen
2. This pauses the update
3. Tap again to resume
4. Wait for completion

**Step 2: Delete and reinstall**

**CRITICAL: BACKUP WALLET FIRST**

1. **Write down your 12/24-word seed phrase**
2. **Verify you have backup phrase before proceeding**
3. Delete ZelCore app (long-press icon > Remove App)
4. Go to App Store
5. Re-download ZelCore
6. Restore wallet from seed phrase

**Step 3: Check network connection**

- Switch between Wi-Fi and cellular
- Try different Wi-Fi network
- Disable VPN if active

**Step 4: Update iOS first**

Sometimes app updates require newer iOS:

1. Go to Settings > General > Software Update
2. Install any pending iOS updates
3. Restart device
4. Try app update again

### Issue 3: Auto-Update Disabled

**Symptoms:**
- ZelCore doesn't update automatically
- Always on old version
- Manual updates required

**Solution:**

**Enable automatic updates:**

1. Go to Settings > App Store
2. Turn on **App Updates** toggle
3. ZelCore will now auto-update when connected to Wi-Fi

**Or update manually:**

1. Open App Store
2. Tap profile icon (top right)
3. Scroll down to **Available Updates**
4. Find ZelCore
5. Tap **Update**

## Android Installation and Update Issues

### Issue 1: "App Not Installed" Error

**Symptoms:**
- APK downloaded but won't install
- "App not installed" message
- Installation blocked

**Solution:**

**Step 1: Enable installation from unknown sources**

**For Android 8.0+:**
1. Go to Settings > Apps & notifications
2. Tap **Special app access**
3. Tap **Install unknown apps**
4. Select your browser (Chrome, Firefox, etc.)
5. Enable **Allow from this source**

**For Android 7.x and earlier:**
1. Go to Settings > Security
2. Enable **Unknown sources**
3. Confirm when warned

**Step 2: Download from official source only**

- Google Play Store (recommended)
- Official ZelCore website: zelcore.io

Do not install from third-party APK sites.

**Step 3: Check storage space**

1. Go to Settings > Storage
2. Ensure at least 500MB free
3. Clear cache if needed: Settings > Storage > Cached data > Clear

**Step 4: Verify APK isn't corrupted**

1. Delete downloaded APK
2. Clear browser cache
3. Re-download from zelcore.io
4. Install fresh download

### Issue 2: "Package Conflicts with Existing Package"

**Symptoms:**
- Installation fails with conflict error
- Trying to install APK over Play Store version (or vice versa)

**Solution:**

**CRITICAL: BACKUP WALLET FIRST**

**Step 1: Backup wallet**
1. Open ZelCore (if accessible)
2. Write down 12/24-word seed phrase
3. Verify backup phrase is correct

**Step 2: Uninstall existing version**
1. Go to Settings > Apps
2. Find ZelCore
3. Tap **Uninstall**
4. Confirm

**Step 3: Install fresh**
1. Install from Google Play Store (recommended)
2. Or install APK from zelcore.io
3. Restore wallet from seed phrase

**Note:** Don't mix APK and Play Store installations - choose one method.

### Issue 3: Google Play Update Fails

**Symptoms:**
- Update won't download
- "Error downloading" message
- Update pending indefinitely

**Solution:**

**Step 1: Clear Google Play Store cache**

1. Go to Settings > Apps
2. Find **Google Play Store**
3. Tap **Storage**
4. Tap **Clear Cache** (NOT Clear Data)
5. Go back and find **Google Play Services**
6. Repeat: Storage > Clear Cache

**Step 2: Restart device**

Power off and restart Android device.

**Step 3: Check Google account**

1. Go to Settings > Accounts
2. Find your Google account
3. Tap it
4. Tap menu (three dots) > Remove account
5. Restart device
6. Add account back: Settings > Accounts > Add account
7. Try update again

**Step 4: Check date and time**

Incorrect date/time can cause Play Store errors:

1. Go to Settings > System > Date & time
2. Enable **Automatic date & time**
3. Enable **Automatic time zone**

**Step 5: Uninstall and reinstall**

**BACKUP WALLET FIRST**

1. Backup seed phrase
2. Uninstall ZelCore
3. Open Play Store
4. Search for ZelCore
5. Install
6. Restore wallet

### Issue 4: APK Installation Blocked by Play Protect

**Symptoms:**
- Google Play Protect blocks APK installation
- "Harmful app blocked" message
- Can't install from zelcore.io

**Solution:**

**Step 1: Verify APK source**

Only download APK from official zelcore.io - never from third-party sites.

**Step 2: Temporarily disable Play Protect**

1. Open Google Play Store
2. Tap profile icon > Play Protect
3. Tap gear icon (settings)
4. Disable **Scan apps with Play Protect**
5. Install ZelCore APK
6. Re-enable Play Protect after installation

**Step 3: Use Play Store instead**

Recommended approach:
- Install from Google Play Store
- Avoids Play Protect issues
- Automatic updates included

## Cross-Platform General Solutions

### Solution 1: Check Internet Connection

Many installation/update issues stem from connectivity:

**Test connection:**
- Open browser and visit zelcore.io
- Verify page loads completely
- Try downloading a small file
- Disable VPN if active
- Switch networks (Wi-Fi to cellular or vice versa)

**For slow connections:**
- Use stable Wi-Fi instead of cellular
- Pause other downloads
- Avoid peak usage times

### Solution 2: Verify Download Integrity

**Check file size:**
- Compare downloaded file size with official listing
- Partial downloads will fail installation

**Re-download if needed:**
- Delete incomplete download
- Clear browser cache
- Download fresh copy

### Solution 3: Backup Before Troubleshooting

**ALWAYS backup wallet before:**
- Uninstalling app
- Clearing app data
- Reinstalling
- Major troubleshooting

**Backup process:**
1. Open ZelCore (if accessible)
2. Go to Settings
3. Find your wallet's seed phrase or backup option
4. Write down 12 or 24-word seed phrase
5. Store securely offline
6. Verify you can read all words clearly

### Solution 4: Use Official Download Sources Only

**Safe sources:**
- https://zelcore.io (official website)
- Google Play Store (Android)
- Apple App Store (iOS)
- Official GitHub releases: https://github.com/zelcash/zelcore/releases

**Never download from:**
- Third-party APK sites
- Unofficial mirrors
- Torrent sites
- Suspicious links in emails or messages

### Solution 5: Check System Requirements

**Minimum requirements vary by platform:**

**Windows:**
- Windows 7 or later (Windows 10/11 recommended)
- 2GB RAM minimum (4GB recommended)
- 500MB free disk space

**macOS:**
- macOS 10.13 (High Sierra) or later
- 2GB RAM minimum
- 500MB free disk space

**Linux:**
- Ubuntu 18.04+ / Debian 9+ / Fedora 30+
- 2GB RAM minimum
- 500MB free disk space
- FUSE support (for AppImage)

**iOS:**
- iOS 12.0 or later
- 200MB free storage

**Android:**
- Android 6.0 (Marshmallow) or later
- 200MB free storage

## Preventing Future Issues

### Keep App Updated

**Enable auto-updates:**

**Windows/macOS/Linux:**
- ZelCore checks for updates automatically
- Apply updates when notified

**iOS:**
- Settings > App Store > App Updates (enable)

**Android:**
- Play Store > Settings > Auto-update apps > Over Wi-Fi only

### Maintain Adequate Storage

**Monitor free space:**
- Keep at least 1GB free on desktop systems
- Keep at least 500MB free on mobile devices
- Clear cache regularly

### Use Stable Internet

**For updates:**
- Connect to reliable Wi-Fi
- Avoid updating on cellular (especially large updates)
- Don't interrupt downloads

### Backup Regularly

**Best practices:**
- Write down seed phrase when creating wallet
- Store backup offline and securely
- Verify backup before major changes
- Test restoration process once

## When to Seek Additional Help

Contact ZelCore support if:

- Installation fails after trying all platform-specific solutions
- Updates consistently fail despite troubleshooting
- App crashes persist after clean reinstall
- Error messages not covered in this guide
- You cannot access wallet after update failure

### Where to Get Help

**Official ZelCore Discord:**
- #zelcore-support channel
- Provide: Platform, ZelCore version, specific error messages, steps tried

**ZelCore Telegram:**
- Active community support
- Share screenshots of errors (but NEVER share seed phrases)

**ZelCore Website:**
- https://zelcore.io/support
- Submit support tickets
- Check FAQs

**When asking for help, include:**
1. Operating system and version (Windows 11, macOS 14.2, Android 13, etc.)
2. ZelCore version you're trying to install/update to
3. Exact error message (screenshot if possible)
4. Steps you've already tried from this guide
5. Whether this is fresh install or update

**NEVER share in support channels:**
- Seed phrases
- Private keys
- Wallet passwords
- ZelID credentials

## Related Documentation

- [ZelCore Installation Guide](/getting-started/installation/) (if available)
- [Troubleshooting Balance and Sync Issues](/guides/troubleshooting-balance-sync-issues/)
- [Security Best Practices](/guides/security-best-practices/)
- [Wallet Backup and Recovery](/getting-started/create-wallet/) (if available)

## Conclusion

Most ZelCore installation and update issues can be resolved through:

1. **Platform-specific troubleshooting** - Follow the section for your OS
2. **Clean reinstallation** - Often the most reliable fix (always backup first)
3. **Using official sources** - Avoid third-party downloads
4. **Adequate resources** - Ensure sufficient storage and stable internet
5. **Proper permissions** - Allow necessary system access

**Key takeaway:** ALWAYS backup your wallet (seed phrase) before uninstalling or major troubleshooting. With your seed phrase secured, you can always recover your wallet even if you need to completely reinstall the app.

For most users, manual download from zelcore.io and clean installation resolves persistent update issues across all platforms.
