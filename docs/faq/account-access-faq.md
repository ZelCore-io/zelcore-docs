---
sidebar_position: 5
---

# Account Access FAQ

Common questions about logging in, syncing, recovering, and accessing your ZelCore account across devices.

## Account Types and Login

### What's the difference between a legacy account and a seed phrase account?

**Answer:**

ZelCore has two account types with different login methods:

**Legacy Account (Old System):**
- Uses username and password to log in
- Created before 2022
- Centralized account system
- Being phased out
- Still works but migration recommended

**Seed Phrase Account (Modern System):**
- Uses 12 or 24-word seed phrase
- Industry-standard BIP44 protocol
- No username/password
- Fully decentralized
- Recommended for all users

**How to tell which you have:**
- If you log in with username/password → Legacy account
- If you have a 12/24-word seed phrase → Modern account

**Related:**
- [Understanding ZelCore Accounts](../../getting-started/understanding-zelcore-accounts/)
- [Migrating to Seed Phrase Account](../../guides/migrating-legacy-to-seed-phrase/)

---

### Should I migrate from legacy to seed phrase?

**Answer:**

**Yes, migration is strongly recommended.** Here's why:

**Benefits of migrating:**
- Better security with BIP44 standard
- Full ownership without reliance on ZelCore servers
- Works with other BIP44-compatible wallets
- Access to latest features and updates
- Future-proof as legacy accounts are being deprecated

**When to migrate:**
- As soon as you have 30-60 minutes of free time
- When you can carefully follow the migration process
- After updating ZelCore to the latest version

**Legacy account status:**
- Still functional now
- No immediate deadline
- But will be phased out eventually
- Earlier migration is better

**Related:**
- [Complete Migration Guide](../../guides/migrating-legacy-to-seed-phrase/)

---

### How do I know if I have a seed phrase?

**Answer:**

**If you have a modern account:**
- You wrote down 12 or 24 words when creating your wallet
- These words are in a specific order
- You don't use a username/password to log in

**If you're unsure:**

1. **Check your records:**
   - Look for a written recovery phrase
   - 12 or 24 common English words
   - Numbered in sequence

2. **Check in ZelCore (if logged in):**
   - Go to Settings → Security → Show Seed Phrase
   - Requires authentication
   - If option doesn't exist, you may have legacy account

3. **Based on login method:**
   - If you enter username/password → No seed phrase (legacy account)
   - If you enter PIN/biometric per device → You have a seed phrase

**If you have a legacy account without seed phrase:**
- You need to migrate to generate a seed phrase
- See [Migration Guide](../../guides/migrating-legacy-to-seed-phrase/)

**Related:**
- [Understanding ZelCore Accounts](../../getting-started/understanding-zelcore-accounts/)

---

## Sync vs Register - New Device Setup

### What's the difference between "Sync" and "Register" on a new device?

**Answer:**

This is one of the most common sources of confusion. Understanding the difference is critical:

**"Sync" or "Import Wallet":**
- **Use when:** You already have a ZelCore account
- **What it does:** Gives you access to your EXISTING wallet
- **You need:** Your seed phrase or legacy credentials
- **Result:** You see your existing funds and transaction history

**"Register" or "Create New Wallet":**
- **Use when:** You're a brand new ZelCore user
- **What it does:** Creates a COMPLETELY NEW wallet
- **You need:** Nothing - generates new seed phrase
- **Result:** Empty wallet with new addresses

**The confusion:**
- "Sync" does NOT sync automatically
- You must provide your credentials
- Many users choose "Register" by mistake
- This creates a second empty wallet

**Think of it like email:**
- Sync = Log into existing email account
- Register = Create brand new email account

**Related:**
- [Understanding ZelCore Accounts](../../getting-started/understanding-zelcore-accounts/)

---

### I chose "Register" instead of "Sync" and my balance is zero. What do I do?

**Answer:**

**Don't panic - your funds are safe!** This is a very common mistake. You created a new empty wallet instead of accessing your existing one.

**Quick fix:**

1. **Close ZelCore completely**
   - Force quit the app
   - Don't just minimize it

2. **Reopen ZelCore**
   - Look for "Account Switcher" or "Manage Accounts"
   - Or log out and return to welcome screen

3. **Choose "Sync" or "Import Wallet" this time**
   - NOT "Register" or "Create New"
   - Select "Import from Seed Phrase" or "Legacy Login"

4. **Enter your credentials:**
   - For seed phrase accounts: Enter your 12/24 words
   - For legacy accounts: Enter username and password

5. **Your funds will appear**
   - Original wallet is unchanged
   - Funds were always on the blockchain
   - You just created a second empty wallet by accident

**Optional:**
- You can keep both wallets
- Use account switcher to manage multiple accounts
- Or ignore the empty wallet

**Related:**
- [Understanding ZelCore Accounts](../../getting-started/understanding-zelcore-accounts/)

---

### What does "Sync" actually sync? Is it automatic?

**Answer:**

**"Sync" is a misleading name** - it's not automatic synchronization. Here's what it really means:

**What "Sync" really does:**
- It's actually "Import existing wallet to this device"
- Requires you to provide seed phrase or login credentials
- Downloads your wallet configuration to the new device
- Connects to blockchain nodes to fetch your balances

**What "Sync" does NOT do:**
- Does NOT automatically sync across devices
- Does NOT remember your credentials from other devices
- Does NOT transfer data from another device
- Does NOT backup your wallet automatically

**Why the confusion:**
- Many apps use "sync" to mean automatic cloud sync
- ZelCore's "sync" is really "import" or "restore"
- The naming causes widespread confusion

**What actually syncs automatically:**
- Transaction history (from blockchain)
- Balance updates (via Smartify)
- Asset lists (after initial sync)

**What requires manual action:**
- Initial setup on new device (must enter seed phrase)
- Account recovery (must have seed phrase)
- Cross-device access (must import on each device)

**Related:**
- [Understanding ZelCore Accounts](../../getting-started/understanding-zelcore-accounts/)

---

## Accessing Account on New Device

### How do I access my ZelCore account on a new phone/computer?

**Answer:**

Follow these steps carefully to access your existing account on a new device:

**Step 1: Install ZelCore**
- Download from zelcore.io (desktop) or app store (mobile)
- Install and open the app

**Step 2: Choose the CORRECT option**
- Select "Sync," "Import Wallet," or "Restore from Seed Phrase"
- **DO NOT** select "Register" or "Create New Wallet"

**Step 3: Choose account type**

**For seed phrase accounts:**
1. Select "Import from Seed Phrase" or similar
2. Enter all 12 or 24 words in exact order
3. Verify spelling and order
4. Continue

**For legacy accounts:**
1. Look for "Legacy Account" or "Username/Password Login"
2. May be under "Advanced" or "More Options"
3. Enter your username and password
4. Log in

**Step 4: Set up device authentication**
- Create PIN, password, or use biometric
- This is DEVICE-SPECIFIC
- Different from your seed phrase

**Step 5: Wait for sync**
- App will connect to blockchain nodes
- May take 1-3 minutes
- Run Smartify if balances don't appear immediately

**Step 6: Verify**
- Check that all assets appear
- Verify balances match expectations
- Test sending/receiving if needed

**Common mistakes to avoid:**
- ❌ Choosing "Create New" instead of "Import"
- ❌ Typing seed phrase with errors
- ❌ Using wrong word order
- ❌ Confusing device PIN with seed phrase

**Related:**
- [Understanding ZelCore Accounts](../../getting-started/understanding-zelcore-accounts/)

---

### Do I need to sync my account every time I switch devices?

**Answer:**

**You don't "sync" between devices** - you import your wallet to each device independently.

**How it works:**

**Initial setup on each device:**
- Import wallet once per device using seed phrase
- Set up device-specific authentication
- After initial import, that device stays logged in

**Subsequent use:**
- Open ZelCore and authenticate (PIN/biometric)
- No need to re-enter seed phrase each time
- Balances update automatically via blockchain connection

**Switching between devices:**
- Each device maintains its own logged-in session
- No manual syncing needed
- Transactions appear on all devices (from blockchain)
- Settings may vary per device

**When you need your seed phrase again:**
- Setting up a brand new device
- Recovering after losing a device
- Reinstalling ZelCore
- Factory reset of device

**Data that stays in sync automatically:**
- Balances (from blockchain)
- Transactions (from blockchain)
- Assets (after initial setup)

**Data that doesn't sync:**
- Device-specific settings
- Local PIN/password
- Custom labels or notes (device-specific)

**Related:**
- [Understanding ZelCore Accounts](../../getting-started/understanding-zelcore-accounts/)

---

### I lost my phone. How do I recover my account?

**Answer:**

If you have your seed phrase, recovery is straightforward. If not, recovery may be difficult or impossible.

**If you HAVE your seed phrase:**

**Immediate steps:**
1. Get a new device (phone/computer)
2. Install ZelCore
3. Choose "Import Wallet" or "Sync"
4. Enter your 12 or 24-word seed phrase
5. Your wallet will be fully restored

**Your funds are safe:**
- Cryptocurrency is on the blockchain, not the device
- Seed phrase gives access to your funds
- All balances will appear after import

**Additional security steps:**
1. Change any passwords if phone was stolen
2. Enable D2FA on new device
3. Review security settings
4. Consider if anyone accessed your seed phrase

**If you DON'T HAVE your seed phrase:**

**For seed phrase accounts:**
- **Recovery is impossible** without the seed phrase
- No backdoor or recovery method exists
- Funds are permanently inaccessible
- This is why seed phrase backup is critical

**For legacy accounts:**
- Password recovery may be available
- Contact ZelCore support
- May require identity verification
- Not guaranteed but possible

**Prevention for future:**
- Write down seed phrase immediately
- Store in multiple secure locations
- Test recovery on different device
- Keep backup device with ZelCore installed

**Related:**
- [Security Best Practices](../../security/best-practices/)

---

## D2FA and Security

### What is D2FA and how is it different from regular 2FA?

**Answer:**

**D2FA** stands for "Decentralized Two-Factor Authentication" - ZelCore's enhanced security feature.

**How D2FA works:**
- Uses distributed blockchain network for verification
- No centralized server stores your authentication data
- Requires your D2FA PIN for high-value transactions
- More secure than traditional SMS or app-based 2FA

**Key differences from regular 2FA:**

**Traditional 2FA:**
- Centralized servers (Google, SMS)
- Vulnerable to server hacks
- Can be intercepted (SMS)
- Requires internet connection to central server

**ZelCore D2FA:**
- Decentralized blockchain-based
- No central point of failure
- Cannot be intercepted
- Uses distributed node network

**When D2FA is required:**
- Large transaction amounts
- Changing security settings
- Withdrawing funds
- Can be configured in settings

**Setting up D2FA:**
1. Go to Settings → Security
2. Enable D2FA
3. Create D2FA PIN (6-8 digits)
4. Confirm PIN
5. Backup PIN securely

**Related:**
- [Security Best Practices](../../security/best-practices/)

---

### I forgot my D2FA PIN. How do I reset it?

**Answer:**

You can reset your D2FA PIN using your seed phrase, but the process requires careful steps.

**For seed phrase accounts:**

1. **Have your seed phrase ready:**
   - All 12 or 24 words
   - In correct order
   - Spelled correctly

2. **Reset D2FA:**
   - Go to Settings → Security → D2FA
   - Look for "Reset D2FA" or "Forgot PIN"
   - May need to re-import wallet

3. **Re-import method (if needed):**
   - Log out of ZelCore
   - Choose "Import Wallet"
   - Enter your seed phrase
   - Set up new D2FA PIN during import

4. **Set new PIN:**
   - Choose a memorable but secure PIN
   - Write it down in secure location
   - Don't use same PIN as device authentication

**For legacy accounts:**

- Contact ZelCore support
- May require identity verification
- Process may take 24-48 hours

**Prevention:**
- Write down D2FA PIN when you create it
- Store separately from seed phrase
- Don't use birthdates or obvious numbers
- Test D2FA after setting up

**Security note:**
- Anyone with your seed phrase can reset D2FA
- Keep seed phrase extremely secure
- D2FA adds security but seed phrase is ultimate key

**Related:**
- [Security Best Practices](../../security/best-practices/)

---

### D2FA keeps failing when I try to approve transactions. What's wrong?

**Answer:**

D2FA failures usually relate to connectivity, incorrect PIN, or sync issues.

**Common causes and solutions:**

**1. Incorrect PIN:**
- Verify you're entering the correct D2FA PIN
- D2FA PIN is different from device PIN
- Check for typos or caps lock
- Try resetting PIN if you're unsure

**2. Internet connection issues:**
- D2FA requires internet to communicate with blockchain nodes
- Check your connection is stable
- Try switching between WiFi and mobile data
- Disable VPN temporarily

**3. App needs update:**
- Update ZelCore to latest version
- Restart app after updating
- Try D2FA again

**4. D2FA sync issues:**
- Go to Settings → Smartify
- Run Smartify to refresh connections
- Try D2FA transaction again

**5. Blockchain node problems:**
- Specific blockchain nodes may be down
- Try changing backend server (Settings → Backend)
- Wait a few minutes and retry

**6. Time sync issues (desktop):**
- Computer clock must be accurate
- Set to automatic time sync
- Correct timezone
- D2FA uses timestamps for verification

**Step-by-step troubleshooting:**

1. Verify internet connection
2. Update ZelCore
3. Run Smartify
4. Verify D2FA PIN is correct
5. Check device time is accurate
6. Try different backend server
7. Restart ZelCore
8. Try transaction again

**If still failing:**
- Transaction amount may be below D2FA threshold
- Disable and re-enable D2FA
- Contact support with error messages

**Related:**
- [Security Best Practices](../../security/best-practices/)

---

## FluxID and Legacy Accounts

### What is FluxID and do I need it?

**Answer:**

**FluxID** is your decentralized identity in the Flux ecosystem, integrated with ZelCore accounts.

**What FluxID provides:**
- Single sign-on for Flux ecosystem apps
- Decentralized authentication
- Access to Flux services and dApps
- Integration with ZelCore wallet

**Modern FluxID (with seed phrase accounts):**
- Created automatically with new seed phrase accounts
- Managed through your seed phrase
- Fully decentralized
- No separate credentials needed

**FluxID Legacy (with old accounts):**
- Tied to username/password accounts
- Centralized authentication
- Being phased out
- Migrate to modern FluxID recommended

**Do you need FluxID:**
- **Yes, if** you use Flux ecosystem services
- **Yes, if** you use Flux dApps
- **No, if** you only use ZelCore for basic wallet functions
- Automatically included with modern accounts

**FluxID features:**
- SSO (Single Sign-On) for Flux services
- Decentralized identity verification
- Integration with Flux nodes
- Access control for dApps

**How to check your FluxID:**
1. Open ZelCore
2. Go to Settings or Profile
3. Look for "FluxID" section
4. Shows your FluxID identifier

**Related:**
- [Understanding ZelCore Accounts](../../getting-started/understanding-zelcore-accounts/)

---

### How do I migrate from FluxID Legacy to modern FluxID?

**Answer:**

FluxID migration happens automatically when you migrate from a legacy account to a seed phrase account.

**Migration process:**

**Step 1: Migrate to seed phrase account**
- Follow the [Migration Guide](../../guides/migrating-legacy-to-seed-phrase/)
- This creates a modern seed phrase account
- Modern FluxID is created automatically

**Step 2: FluxID is created**
- No separate setup needed
- FluxID is linked to your seed phrase
- Inherits security from seed phrase account

**Step 3: Update Flux services**
- Log into Flux services with new FluxID
- Update any connected dApps
- May need to re-authenticate services

**What happens to old FluxID Legacy:**
- Remains accessible (for now)
- Being phased out
- Migrate services to new FluxID
- Eventually will be deprecated

**Benefits of modern FluxID:**
- Better security (decentralized)
- Integrated with seed phrase
- Access to latest Flux features
- Future-proof

**Important notes:**
- Can't migrate FluxID separately from account
- Must migrate entire account to seed phrase
- Both FluxIDs can coexist during transition
- Old FluxID will eventually be unsupported

**Related:**
- [Migrating to Seed Phrase Account](../../guides/migrating-legacy-to-seed-phrase/)
- [Understanding ZelCore Accounts](../../getting-started/understanding-zelcore-accounts/)

---

## Account Recovery and Errors

### I can't log in to my legacy account. What should I try?

**Answer:**

Legacy account login issues usually involve credentials, account status, or app version.

**Troubleshooting steps:**

**1. Verify credentials:**
- Username is case-sensitive
- Password is case-sensitive
- Check for extra spaces
- Try variations you commonly use

**2. Find legacy login option:**
- May not be on main screen
- Look for "Advanced Options"
- Check for "Legacy Account" button
- May be under "More Login Options"

**3. Update ZelCore:**
- Download latest version from zelcore.io
- Legacy support may require recent version
- Install and restart
- Try logging in again

**4. Password reset (if available):**
- Look for "Forgot Password" link
- Follow password reset process
- Check email for reset link
- Create new password

**5. Check account status:**
- Verify account hasn't been locked
- Check email for notifications from ZelCore
- May need to contact support for unlocking

**6. Clear app cache:**
- **Mobile:** Settings → Apps → ZelCore → Clear Cache
- **Desktop:** Delete cache folders in data directory
- Restart ZelCore
- Try logging in

**7. Network issues:**
- Legacy accounts require server connection
- Check internet connection
- Try different network (WiFi vs mobile data)
- Disable VPN temporarily

**If still unable to log in:**

**Contact ZelCore Support:**
- Email: support@zel.network
- Discord: discord.gg/runonflux
- Provide username (NOT password)
- Describe error messages
- Include ZelCore version

**Prevention for future:**
- Migrate to seed phrase account as soon as access is restored
- Seed phrase accounts don't have login issues
- Write down credentials in secure location

**Related:**
- [Migrating to Seed Phrase Account](../../guides/migrating-legacy-to-seed-phrase/)

---

### I entered my seed phrase but ZelCore says it's invalid. What's wrong?

**Answer:**

Seed phrase errors usually involve typos, wrong words, incorrect order, or wrong word count.

**Common issues and solutions:**

**1. Word order is wrong:**
- Words must be in EXACT order
- Word #1 must be first, word #12 must be last
- Write numbers next to each word
- Verify order matches original backup

**2. Spelling errors:**
- Check each word carefully
- BIP39 word list has specific valid words
- Common confusions: "world" vs "word", "through" vs "though"
- All lowercase usually
- No punctuation

**3. Wrong number of words:**
- Should be exactly 12 or 24 words
- Not 13, not 11
- Count carefully
- Verify against backup

**4. Extra spaces:**
- Only single space between words
- No spaces at beginning or end
- No double spaces
- Trim all whitespace

**5. Wrong word list language:**
- Most seed phrases are English
- Some wallets support other languages
- Try English first
- Check what language you used originally

**6. Autocorrect interference:**
- Disable autocorrect when entering
- Type manually, don't use voice
- Verify each word individually
- Use on-screen keyboard if available

**Verification tips:**

**Check against BIP39 word list:**
- Official word list: github.com/bitcoin/bips/blob/master/bip-0039/english.txt
- All words must be from this list
- Only 2048 valid words
- If word isn't on list, it's misspelled

**Common misspellings:**

- "wolf" vs "women"
- "abandon" vs "ability"
- "all" vs "always"
- "example" vs "expand"

**Double-check your backup:**
- Re-read original written phrase
- Look for smudged or unclear words
- Compare what you wrote to what you're typing
- Check if you accidentally skipped a word

**Try import on different device:**
- Sometimes app-specific issues
- Try desktop vs mobile
- Try different version of ZelCore
- Rules out device-specific problems

**If seed phrase is definitely correct but still failing:**

1. **Try different import method:**
   - Some wallets have "advanced import"
   - Try selecting BIP44 specifically
   - May need to specify derivation path

2. **Verify seed phrase elsewhere:**
   - Try importing in another BIP44 wallet (MetaMask, Trust Wallet)
   - If works there, issue is ZelCore-specific
   - If fails everywhere, seed phrase is wrong

3. **Check for variant seed phrases:**
   - Some people write down multiple seed phrases
   - Verify you're using correct one
   - Check all backups you have

**Last resort - if you're logged in elsewhere:**
- Access account on device where still logged in
- Go to Settings → Security → Show Seed Phrase
- Write down correct phrase
- Compare to what you've been trying

**Prevention:**
- Write clearly when backing up
- Use printed templates
- Create multiple backups
- Verify seed phrase immediately after creating
- Test recovery before storing large amounts

**Related:**
- [Create a New Wallet](../../getting-started/create-wallet/)
- [Security Best Practices](../../security/best-practices/)

---

### I accidentally created a new account instead of accessing my old one. Can I switch?

**Answer:**

**Yes, you can easily switch between accounts.** Creating an extra account doesn't affect your original one.

**How to access your original account:**

**Method 1: Account Switcher (Recommended)**

1. **Look for account menu:**
   - Top right corner or settings
   - "Accounts," "Profiles," or "Switch Account"
   - May be a profile icon

2. **Add your original account:**
   - Select "Add Account" or "Import Account"
   - Choose "Import from Seed Phrase" or "Legacy Login"
   - Enter your original credentials

3. **Switch between accounts:**
   - Use account switcher menu
   - Select which account to view
   - Both accounts remain accessible

**Method 2: Log Out and Log In**

1. **Log out of current account:**
   - Settings → Log Out
   - Or Account → Sign Out

2. **Return to welcome screen:**
   - Choose "Sync" or "Import"
   - Enter your original seed phrase or credentials

3. **Access original account:**
   - Your funds will appear
   - Original account is unchanged

**Method 3: Delete and Reinstall (Not recommended)**

1. Delete ZelCore app
2. Reinstall ZelCore
3. Choose "Import" or "Sync"
4. Enter original credentials

**Your original account is safe:**
- Creating new account doesn't affect old one
- Funds remain on blockchain
- Both accounts can coexist
- You can use both or ignore the new one

**Going forward:**

**To use both accounts:**
- Keep both imported
- Use account switcher to change between them
- Useful for separating funds

**To use only original:**
- Just ignore the new empty account
- Or remove it from account list if option exists
- Focus on your original account

**Prevention next time:**
- Remember: "Sync/Import" = existing account
- "Register/Create" = new account
- Read options carefully before selecting

**Related:**
- [Understanding ZelCore Accounts](../../getting-started/understanding-zelcore-accounts/)

---

### Can I have multiple ZelCore accounts?

**Answer:**

**Yes, ZelCore supports multiple accounts**, and you can switch between them easily.

**How to use multiple accounts:**

**Method 1: Multiple seed phrases**
- Create or import multiple seed phrase accounts
- Each has its own 12/24-word phrase
- Use account switcher to change between them
- Each account is completely independent

**Method 2: Multiple devices**
- Use different accounts on different devices
- Device A: Account 1
- Device B: Account 2
- No need to switch

**Method 3: Combination**
- Import multiple accounts on one device
- Also keep separate accounts on different devices
- Maximum flexibility

**Common use cases:**

**Personal vs Business:**
- Separate account for business transactions
- Different account for personal crypto
- Clean separation for tax purposes

**Security tiers:**
- Hot wallet for daily use (small amounts)
- Cold wallet for storage (large amounts)
- Different seed phrases for each

**Testing vs Production:**
- Test account for experimenting
- Main account for actual funds
- Learn without risking main funds

**Family accounts:**
- Separate accounts for family members
- Each person has their own seed phrase
- Can all be on same device (with different profiles)

**Managing multiple accounts:**

**Keep organized:**
- Label accounts clearly ("Main," "Trading," "Savings")
- Use different device PINs if helpful
- Document which seed phrase goes with which account

**Security considerations:**
- Store each seed phrase separately
- Label seed phrase backups clearly
- Don't mix up seed phrases
- Each account is independent security-wise

**Switching between accounts:**
1. Open account switcher (usually in settings or top menu)
2. Select account to view
3. All accounts stay logged in
4. Quick switching without re-entering seed phrase

**Limitations:**
- Each account requires separate import on each device
- Settings don't sync between accounts
- Transaction history is per account
- Need to track multiple seed phrases

**Related:**
- [Create a New Wallet](../../getting-started/create-wallet/)
- [Security Best Practices](../../security/best-practices/)

---

## Common Error Messages

### "Account not found" when trying to log in

**Answer:**

This error usually means incorrect credentials or account type mismatch.

**For seed phrase accounts:**

**Possible causes:**
1. **Entering wrong seed phrase:**
   - Verify each word carefully
   - Check word order
   - Ensure correct spelling

2. **Using wrong import method:**
   - May need to select "BIP44" specifically
   - Try "Advanced Import" options
   - Verify derivation path if available

3. **Account on different network:**
   - Some wallets support testnet vs mainnet
   - Ensure importing to correct network
   - Usually mainnet for real funds

**Solutions:**
- Double-check seed phrase against backup
- Try import on different device
- Verify seed phrase works in another BIP44 wallet
- Contact support if persistent

**For legacy accounts:**

**Possible causes:**
1. **Wrong username:**
   - Case-sensitive
   - Check for typos
   - Verify spacing

2. **Account deprecated or migrated:**
   - May have been automatically migrated
   - Check email for migration notices
   - Try seed phrase import instead

3. **Server issues:**
   - Legacy accounts require server connection
   - Server may be temporarily down
   - Wait and retry

**Solutions:**
- Verify username is exact
- Check for migration emails
- Update ZelCore to latest version
- Contact support for account status

**Related:**
- [Understanding ZelCore Accounts](../../getting-started/understanding-zelcore-accounts/)

---

### "Cannot connect to server" errors when syncing

**Answer:**

Server connection errors prevent ZelCore from syncing your account data and balances.

**Quick fixes:**

**1. Check internet connection:**
- Verify you're online
- Test with browser or other app
- Try different network (WiFi vs mobile data)
- Restart router if needed

**2. Update ZelCore:**
- Download latest version
- Server endpoints may have changed
- Older versions may not work

**3. Change backend server:**
- Go to Settings → Backend or Proxy
- Select different server (try different region)
- Save and restart ZelCore
- Try syncing again

**4. Disable VPN:**
- VPNs can block blockchain node connections
- Disable temporarily
- Try syncing
- Re-enable after successful sync

**5. Firewall/Antivirus:**
- May be blocking ZelCore
- Add ZelCore to allowed applications
- Temporarily disable to test
- Re-enable after confirming that's the issue

**6. Wait and retry:**
- Servers may be temporarily down
- Wait 15-30 minutes
- Try again later

**Advanced troubleshooting:**

**Check server status:**
- Visit ZelCore Discord or Twitter
- Check for service announcements
- Other users may report issues
- Confirms if problem is widespread

**Clear cache:**
- Settings → Apps → ZelCore → Clear Cache (mobile)
- Delete cache folders (desktop)
- Restart ZelCore
- Try connecting again

**Reinstall ZelCore:**
- Uninstall app
- Reinstall latest version
- Import account again
- Should clear connection issues

**If persistent:**
- May be ISP-level blocking
- Try mobile hotspot
- Use different network entirely
- Contact support with details

**Related:**
- [Troubleshooting Balance & Sync Issues](../../guides/troubleshooting-balance-sync-issues/)

---

### "Migration required" message - what does this mean?

**Answer:**

This message indicates you have a legacy account that needs to be migrated to a modern seed phrase account.

**What it means:**

**Your account type:**
- You have a legacy username/password account
- Legacy accounts are being phased out
- Migration to seed phrase recommended
- Not an immediate emergency but important

**Why you see this:**
- ZelCore is updating account infrastructure
- Legacy system being deprecated
- Modern accounts have better security
- Encourages users to upgrade

**What happens if you don't migrate:**

**Short term:**
- Account continues working
- No immediate disruption
- Full access to funds

**Long term:**
- Future updates may not support legacy accounts
- New features may require modern accounts
- Eventually legacy system will be sunset
- Migration will become required

**How to respond:**

**Option 1: Migrate now (recommended)**
- Follow [Migration Guide](../../guides/migrating-legacy-to-seed-phrase/)
- Takes 30-60 minutes
- One-time process
- Future-proofs your account

**Option 2: Postpone**
- Click "Later" or "Remind Me"
- Account continues working
- Reminder will appear again
- Migrate when you have time

**Option 3: Ignore (not recommended)**
- Message will keep appearing
- Eventually migration may be required
- Earlier migration is easier

**Migration benefits:**
- Better security (BIP44 standard)
- Full account ownership
- Works with other wallets
- Access to latest features
- No more migration warnings

**What migration involves:**
- Creating new seed phrase account
- Transferring funds to new account
- Securing new seed phrase
- See [Migration Guide](../../guides/migrating-legacy-to-seed-phrase/) for details

**Is it safe to migrate:**
- Yes, well-documented process
- Funds remain secure throughout
- Many users have migrated successfully
- Take your time and follow guide

**Related:**
- [Complete Migration Guide](../../guides/migrating-legacy-to-seed-phrase/)
- [Understanding ZelCore Accounts](../../getting-started/understanding-zelcore-accounts/)

---

## Best Practices

### How should I securely store my seed phrase?

**Answer:**

Your seed phrase is the key to your funds. Proper storage is critical.

**Best practices:**

**Physical storage:**
- ✅ Write on paper with permanent pen
- ✅ Use metal backup plates for durability
- ✅ Store in fireproof/waterproof safe
- ✅ Create multiple copies in different secure locations
- ✅ Number each word clearly (1-12 or 1-24)

**What NOT to do:**
- ❌ Never store digitally (photos, files, cloud)
- ❌ Never share with anyone (including "support")
- ❌ Never enter on websites (except wallet import)
- ❌ Don't store with other important documents that could be stolen
- ❌ Don't store in obviously labeled containers ("Bitcoin seed")

**Multiple copies strategy:**
- **Copy 1:** Primary safe at home
- **Copy 2:** Safety deposit box at bank
- **Copy 3:** With trusted family member in sealed envelope
- Different physical locations protect against disaster

**Advanced options:**

**Metal backup plates:**
- Fire-resistant
- Water-resistant
- Long-lasting
- Available from crypto hardware vendors

**Split storage (advanced):**
- Split seed phrase into parts
- Store parts in different locations
- Requires combining to access funds
- More complex but more secure

**Estate planning:**
- Instructions for heirs
- Sealed envelope with lawyer
- Safe deposit box with trusted executor
- Document how to access funds

**What to include with seed phrase:**
- Date created
- "ZelCore seed phrase" label
- Recovery instructions for family
- DO NOT include account balances or values

**Testing your backup:**
- After creating wallet, import on different device
- Verify seed phrase works
- Then remove from test device
- Proves your backup is correct

**Security reminders:**
- Anyone with seed phrase controls your funds
- No recovery method if lost
- Store like you're storing gold bars
- Review storage location security annually

**Related:**
- [Security Best Practices](../../security/best-practices/)
- [Create a New Wallet](../../getting-started/create-wallet/)

---

### Should I use the same seed phrase on multiple devices?

**Answer:**

**Yes, that's how it's designed to work.** Your seed phrase gives access to your wallet on any device.

**How it works:**

**One seed phrase, many devices:**
- Import same seed phrase on phone, tablet, computer
- All devices access same wallet
- Same addresses, same balances
- Transactions appear on all devices

**Device-specific settings:**
- Each device has its own PIN/password
- Local settings don't sync
- Can have different security on each device
- One device compromised doesn't automatically compromise others

**Security considerations:**

**Benefits of multiple devices:**
- Backup if one device fails
- Convenience of access anywhere
- No single point of failure

**Risks:**
- Each device is a potential vulnerability
- If one device compromised, wallet at risk
- More devices = larger attack surface
- Lost/stolen device could expose funds

**Best practices:**

**Secure each device:**
- Strong device PIN/password
- Biometric authentication if available
- Device encryption enabled
- Keep devices updated

**Limit active devices:**
- Only import on devices you actively use
- Don't import on public/shared computers
- Remove wallet from devices you no longer use

**Consider device trust levels:**

**High security devices (large amounts):**
- Desktop at home
- Personal phone
- Well-secured devices
- Where you keep most funds

**Convenience devices (small amounts):**
- Mobile for daily use
- Keep minimal balances
- For routine transactions

**Never import on:**
- ❌ Public computers
- ❌ Work computers you don't own
- ❌ Shared family devices
- ❌ Devices you don't fully control

**If device is lost/stolen:**

**Immediate actions:**
1. **Transfer funds to new wallet:**
   - Create new seed phrase on different device
   - Transfer all crypto to new wallet
   - Old wallet is now compromised

2. **Don't reuse old seed phrase:**
   - Generate completely new seed phrase
   - Old phrase may be compromised
   - Start fresh for security

**Recommended setup:**

**Most users:**
- Primary device (phone or desktop)
- Backup device (kept secure at home)
- Both import same seed phrase
- Daily use on primary only

**High-security users:**
- Single device for large amounts
- Different wallet for daily use
- Limit exposure of main holdings

**Related:**
- [Security Best Practices](../../security/best-practices/)

---

### What should I do before getting a new phone or computer?

**Answer:**

**Critical: Verify you have your seed phrase BEFORE replacing your device.**

**Essential pre-replacement checklist:**

**1. Verify seed phrase access:**
- Open ZelCore on current device
- Go to Settings → Security → Show Seed Phrase
- Verify it matches your written backup
- If no backup, write it down NOW
- Test the phrase by importing on different device (optional but recommended)

**2. Document your setup:**
- List all assets you have
- Note any custom tokens
- Screenshot settings (not including sensitive info)
- Note any special configurations

**3. Test recovery (recommended):**
- Install ZelCore on a different device
- Import using seed phrase
- Verify all assets appear
- Then remove from test device
- Proves your backup works

**4. Secure additional backups:**
- Create second seed phrase copy
- Store in different location
- Update storage if needed

**After getting new device:**

**Setup process:**
1. Install ZelCore on new device
2. Choose "Sync" or "Import Wallet"
3. Enter your seed phrase
4. Set up device authentication
5. Run Smartify
6. Verify all assets appear

**Old device handling:**

**Before wiping old device:**
- Verify new device works completely
- Check all balances on new device
- Test sending/receiving on new device
- Keep old device functional for a week (backup)

**When ready to wipe:**
- Log out of ZelCore on old device
- Uninstall ZelCore
- Factory reset device
- Seed phrase remains safe (on paper)

**What NOT to do:**
- ❌ Don't wipe old device before setting up new one
- ❌ Don't assume seed phrase is backed up - verify
- ❌ Don't skip testing recovery
- ❌ Don't rush the process

**Emergency scenarios:**

**Old device died/broken:**
- Install ZelCore on new device
- Import using seed phrase
- Your funds are safe on blockchain
- Seed phrase is all you need

**Lost/stolen device:**
- Get new device
- Import with seed phrase
- Consider transferring to new wallet (new seed phrase)
- Old wallet may be compromised

**Device upgrade timeline:**

**Week before:**
- Verify seed phrase backup
- Test recovery if possible
- Document setup

**Day of upgrade:**
- Set up ZelCore on new device
- Verify everything works
- Keep old device active

**Week after:**
- Confirm new device works perfectly
- Then wipe old device

**Related:**
- [Security Best Practices](../../security/best-practices/)
- [Understanding ZelCore Accounts](../../getting-started/understanding-zelcore-accounts/)

---

## Getting Help

### Where can I get help if I'm still having issues?

**Answer:**

Multiple support channels are available for ZelCore assistance.

**Official ZelCore Support:**

**Email:**
- support@zel.network
- Include detailed description
- Screenshots (never of seed phrase!)
- ZelCore version
- Operating system

**Discord (Recommended):**
- discord.gg/runonflux
- Active community and support team
- #zelcore-support channel
- Quick responses
- Other users can help

**Social Media:**
- Twitter: @zelcore_io
- Updates and announcements
- Can DM for support
- Public timeline for issues

**Documentation:**
- docs.zelcore.io
- Comprehensive guides
- FAQs and troubleshooting
- Step-by-step instructions

**What to include when asking for help:**

**Always provide:**
- What you were trying to do
- What actually happened
- Error messages (exact text)
- ZelCore version
- Device type (phone/desktop, OS)
- Steps you've already tried

**Never include:**
- ❌ Your seed phrase
- ❌ Your private keys
- ❌ Your D2FA PIN
- ❌ Your passwords
- ❌ Exact wallet balances (for privacy)

**Support will NEVER ask for:**
- ❌ Your seed phrase
- ❌ Your private keys
- ❌ Your password
- ❌ Remote access to your device
- ❌ To send them crypto for "verification"

**Scam awareness:**

**Real support:**
- Official channels only
- Never asks for seed phrase
- Never asks for funds
- Provides help freely

**Scam warning signs:**
- DMs from "support" (support won't DM first usually)
- Asks for seed phrase
- Requests funds to "verify" account
- Urgency or threats
- Unofficial channels

**Community resources:**

**Reddit:**
- r/ZelCore
- Community discussions
- User experiences
- Not official support

**Telegram:**
- Official ZelCore group
- Community help
- Announcements

**GitHub:**
- Technical issues
- Open source code
- Bug reports
- For developers

**Response times:**

**Discord:**
- Usually within hours
- Active community
- Fastest for common issues

**Email:**
- 24-48 hours typically
- More formal
- Better for complex issues

**Before contacting support:**

1. Check this FAQ
2. Search existing documentation
3. Try troubleshooting steps
4. Search Discord for similar issues
5. Then contact if still stuck

**Related:**
- All documentation at [docs.zelcore.io](../../intro/)
- [Security Best Practices](../../security/best-practices/)
