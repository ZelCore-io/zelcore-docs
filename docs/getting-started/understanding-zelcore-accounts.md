---
sidebar_position: 1
---

# Understanding ZelCore Accounts

Learn about ZelCore's account system, the transition from legacy to modern accounts, and how to access your wallet on different devices.

## Introduction

ZelCore has evolved significantly over the years, and understanding the difference between legacy and modern account types is crucial for a smooth experience. This guide will help you understand:

- The difference between legacy username/password accounts and modern seed phrase accounts
- What "sync" and "register" mean on new devices
- How to access your wallet on a new device without accidentally creating a new account
- The role of FluxID in your account

## Account Types in ZelCore

### Modern Accounts (Seed Phrase / BIP44)

**What it is:**
Modern ZelCore accounts use a **seed phrase** (also called a recovery phrase or mnemonic phrase) - typically 12 or 24 words that serve as the master key to your wallet.

**Key features:**
- Industry-standard BIP44 protocol
- Works across all devices and platforms
- No username or password required
- Complete control and ownership of your funds
- Can be imported into other BIP44-compatible wallets
- Recommended for all new users

**How to identify:**
- You have a 12 or 24-word seed phrase
- You don't use a username/password to log in
- You use a PIN, password, or biometric authentication on each device

### Legacy Accounts (Username/Password)

**What it is:**
Older ZelCore accounts created before the BIP44 migration used a username and password system.

**Key features:**
- Required username and password login
- Used ZelCore's proprietary account system
- Synced across devices through ZelCore servers
- Being phased out in favor of seed phrase accounts

**Status:**
- **Legacy accounts are being deprecated**
- You can still access existing legacy accounts
- **You should migrate to a seed phrase account**
- New legacy accounts cannot be created

**How to identify:**
- You log in with a username and password
- Your account was created before 2022
- You don't have a seed phrase (or it was optional)

## Understanding "Sync" vs "Register" on New Devices

When you open ZelCore on a new device, you'll see these options. Many users get confused here and accidentally create new accounts.

### "Sync" - Access Existing Account

**Use "Sync" when:**
- You already have a ZelCore account
- You want to access your existing wallet on this new device
- You have your seed phrase or legacy login credentials

**What it does:**
- Imports your existing wallet to the new device
- Requires your seed phrase (modern accounts) or username/password (legacy accounts)
- Gives you access to your existing funds and transaction history

**Important:** "Sync" does NOT sync automatically - you must provide your credentials!

### "Register" - Create New Account

**Use "Register" when:**
- You are a completely new ZelCore user
- You want to create a brand new wallet
- You don't have any existing ZelCore accounts

**What it does:**
- Creates a completely new wallet with a new seed phrase
- Generates new addresses for all cryptocurrencies
- Does NOT give you access to any existing accounts

**Warning:** If you choose "Register" when you meant to choose "Sync," you'll create a new empty wallet and won't see your existing funds. Your funds are safe, but you'll need to go back and choose "Sync" instead.

## Common Confusion Scenarios

### "I got a new phone and my balance is zero!"

**What happened:**
You likely chose "Register" (create new account) instead of "Sync" (access existing account).

**Solution:**
1. You didn't lose your funds - they're still on the blockchain
2. Close ZelCore completely
3. Reopen it and choose "Sync" this time
4. Enter your seed phrase or legacy credentials
5. Your funds will appear

### "I'm trying to sync but it's asking for a seed phrase I don't have"

**What happened:**
You have a legacy account (username/password) but are trying to use modern account sync.

**Solution:**
1. Look for a "Legacy Account" or "Username/Password" login option
2. Use your original username and password
3. After logging in, consider migrating to a seed phrase account
4. See our [Migration Guide](/docs/guides/migrating-legacy-to-seed-phrase) for help

### "I created a new account by accident and can't see my funds"

**What happened:**
You chose "Register" when you meant "Sync."

**Solution:**
1. Your original funds are safe - you just created a second wallet
2. Go back to the welcome screen or account selection
3. Choose "Sync" or "Import" instead
4. Enter your original seed phrase or legacy credentials
5. You'll see your funds again

## FluxID vs FluxID Legacy

### FluxID (Modern)

**What it is:**
FluxID is a decentralized identity system integrated with modern ZelCore accounts.

**Features:**
- Linked to your seed phrase account
- Used for Flux ecosystem services
- Decentralized authentication
- No username/password required

**How it works:**
- Created automatically with modern seed phrase accounts
- Managed through your seed phrase
- Used for dApps and Flux services

### FluxID Legacy

**What it is:**
The older FluxID system used with legacy username/password accounts.

**Features:**
- Tied to username/password accounts
- Centralized authentication
- Being phased out

**Recommendation:**
If you have a FluxID Legacy account, migrate to a modern FluxID by migrating to a seed phrase account.

## D2FA and D2FA PIN

### What is D2FA?

**D2FA** stands for "Decentralized Two-Factor Authentication" - an additional security layer for ZelCore transactions.

**How it works:**
- Uses a distributed network to verify transactions
- More secure than traditional 2FA
- No reliance on a single centralized service
- Protected by blockchain technology

### What is D2FA PIN?

**D2FA PIN** is a personal identification number you set up for your D2FA.

**Purpose:**
- Confirms high-value transactions
- Prevents unauthorized sends
- Adds an extra security layer beyond device authentication

**Common issues:**
- **Forgot D2FA PIN:** Can be reset using your seed phrase
- **D2FA not working:** Check that you're connected to the internet
- **D2FA setup failed:** Try updating ZelCore to the latest version

## How to Access Your Account on a New Device

### For Modern Seed Phrase Accounts

**Step 1: Install ZelCore**
- Download ZelCore on your new device
- Open the app

**Step 2: Choose "Sync" or "Import Wallet"**
- Do NOT choose "Register" or "Create New Wallet"
- Look for "Sync," "Import," or "Restore from Seed Phrase"

**Step 3: Enter Your Seed Phrase**
- Enter all 12 or 24 words in the exact order
- Double-check for typos
- Words are usually lowercase

**Step 4: Set Device Authentication**
- Create a new PIN, password, or use biometrics
- This is specific to this device only
- Different from your seed phrase

**Step 5: Verify**
- Wait for the wallet to sync (may take a few minutes)
- Run Smartify to refresh balances
- Check that your funds appear

### For Legacy Username/Password Accounts

**Step 1: Install ZelCore**
- Download ZelCore on your new device
- Open the app

**Step 2: Look for Legacy Login Option**
- May be labeled "Legacy Account," "Username/Password Login," or similar
- May need to tap "More Options" or similar

**Step 3: Enter Credentials**
- Enter your original username
- Enter your original password
- Case-sensitive

**Step 4: Syncing**
- Your account will sync from ZelCore servers
- May take a few minutes

**Step 5: Consider Migration**
- Legacy accounts are being deprecated
- Follow our [Migration Guide](/docs/guides/migrating-legacy-to-seed-phrase)
- Migrate to a seed phrase account for better security and future compatibility

## Key Differences Summary

| Feature | Legacy Account | Modern Seed Phrase Account |
|---------|---------------|----------------------------|
| **Login Method** | Username + Password | Seed Phrase |
| **Account Type** | Centralized | Decentralized (BIP44) |
| **Portability** | ZelCore only | Any BIP44 wallet |
| **Security** | Username/password | Seed phrase (12-24 words) |
| **Recovery** | Password reset available | Seed phrase only - no reset |
| **Future Support** | Being phased out | Fully supported |
| **Recommended** | No - migrate | Yes |
| **FluxID Type** | FluxID Legacy | FluxID (modern) |

## Critical Reminders

### Never Share Your Seed Phrase
- Your seed phrase is the key to your funds
- ZelCore support will NEVER ask for your seed phrase
- Anyone with your seed phrase can steal all your cryptocurrency
- Store it offline in a secure location

### "Sync" vs "Register" on New Device
- **Sync/Import** = Access existing account (use this most of the time)
- **Register/Create** = Brand new account (only for new users)
- Choosing wrong option won't lose funds, but will cause confusion

### Legacy Account Users
- Legacy accounts still work but are being deprecated
- Migrate to a seed phrase account as soon as possible
- See our [Migration Guide](/docs/guides/migrating-legacy-to-seed-phrase)

### Backup Your Seed Phrase
- Write it down on paper (not digitally)
- Store in multiple secure locations
- Test recovery on a different device before storing large amounts

## Troubleshooting

### I don't know if I have a legacy or modern account

**Check these signs:**

**You have a legacy account if:**
- You log in with a username and password
- You created your account before 2022
- You don't have a seed phrase written down

**You have a modern account if:**
- You have a 12 or 24-word seed phrase
- You use PIN/biometric/password on each device (not username)
- You created your account after 2022

### I can't find my seed phrase

**For modern accounts:**
- Open ZelCore on a device where you're logged in
- Go to Settings → Security → Show Seed Phrase
- Requires authentication
- **Write it down immediately**

**For legacy accounts:**
- Legacy accounts may not have a seed phrase
- You need to migrate to generate a seed phrase
- See [Migration Guide](/docs/guides/migrating-legacy-to-seed-phrase)

### I accidentally created a new account

**Don't panic - your funds are safe:**
1. Close ZelCore
2. Reopen and look for account switcher or "Manage Accounts"
3. Choose "Add Account" or "Import Account"
4. Select "Sync" or "Import from Seed Phrase"
5. Enter your original seed phrase or legacy credentials
6. Both accounts will be accessible

### ZelCore keeps asking me to migrate

**This is normal:**
- ZelCore is transitioning away from legacy accounts
- Migration is highly recommended
- Follow our [Migration Guide](/docs/guides/migrating-legacy-to-seed-phrase)
- Your funds will be safe during migration

## Next Steps

- **New users:** [Create a new wallet](/docs/getting-started/create-wallet)
- **Legacy users:** [Migrate to seed phrase account](/docs/guides/migrating-legacy-to-seed-phrase)
- **Having trouble accessing your account?** [Account Access FAQ](/docs/faq/account-access-faq)
- **Security concerns:** [Security Best Practices](/docs/security/best-practices)

## Related Documentation

- [Create a New Wallet](/docs/getting-started/create-wallet)
- [Import an Existing Wallet](/docs/getting-started/import-wallet)
- [Migrating from Legacy to Seed Phrase](/docs/guides/migrating-legacy-to-seed-phrase)
- [Account Access FAQ](/docs/faq/account-access-faq)
- [Security Best Practices](/docs/security/best-practices)
