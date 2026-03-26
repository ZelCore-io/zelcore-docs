---
sidebar_position: 20
title: Migrating from Legacy to Seed Phrase
description: "Migrate your ZelCore legacy account to a modern seed phrase account. Step-by-step guide for upgrading your wallet security."
keywords: [migrate legacy wallet, seed phrase migration, upgrade zelcore account, legacy to seed phrase]
---

# Migrating from Legacy to Seed Phrase Account

A comprehensive guide to safely migrating your ZelCore legacy username/password account to a modern seed phrase (BIP44) account.

## Overview

ZelCore is transitioning from legacy username/password accounts to modern seed phrase (BIP44) accounts. This migration provides:

- **Better security:** Industry-standard BIP44 protocol
- **Full ownership:** Complete control of your funds without reliance on ZelCore servers
- **Portability:** Use your seed phrase with any BIP44-compatible wallet
- **Future compatibility:** Legacy accounts are being phased out
- **Modern FluxID:** Access to the latest Flux ecosystem features

**Time required:** 30-60 minutes (depending on number of assets)

**Difficulty:** Moderate - follow steps carefully

## Before You Begin

### Important Warnings

:::danger Critical Security Notes
1. **Never share your seed phrase with anyone** - not even ZelCore support
2. **Write down your new seed phrase immediately** - losing it means losing access to your funds
3. **Keep both accounts until migration is complete and verified**
4. **This process does NOT happen automatically** - you must manually transfer funds
5. **Double-check all addresses** before sending funds
:::

### What You'll Need

**Required:**
- ✅ Access to your current legacy account (username and password)
- ✅ Paper and pen to write down your new seed phrase
- ✅ 30-60 minutes of uninterrupted time
- ✅ Stable internet connection
- ✅ Updated version of ZelCore

**Optional but recommended:**
- ✅ Second device to verify addresses
- ✅ Cryptocurrency for transaction fees (small amounts)
- ✅ Backup device or location for seed phrase copy

### Understanding the Process

Migration involves:
1. Creating a new seed phrase account
2. Transferring all assets from legacy to new account
3. Verifying all transfers completed successfully
4. Securely storing your new seed phrase
5. (Optional) Retiring your legacy account

**This is NOT an automatic conversion** - you're creating a new account and moving funds to it.

## Prerequisites

### Step 1: Update ZelCore

Ensure you have the latest version:

**Desktop:**
1. Visit zelcore.io
2. Download the latest version
3. Install and restart

**Mobile:**
1. Open your app store (iOS App Store or Google Play)
2. Search for "ZelCore"
3. Tap "Update" if available

### Step 2: Verify Legacy Account Access

1. Open ZelCore
2. Log in with your username and password
3. Verify you can see all your assets
4. Write down all cryptocurrencies you hold (you'll need to transfer each one)

### Step 3: Document Your Current Holdings

Create a list of:
- Each cryptocurrency you hold
- The amount of each
- Any custom tokens or assets
- Note any staking positions or locked funds

**Example list:**
```
- Bitcoin (BTC): 0.25 BTC
- Ethereum (ETH): 2.5 ETH
- Flux (FLUX): 1000 FLUX
- USDT (ERC-20): 500 USDT
```

### Step 4: Check Transaction Fees

You'll need small amounts of each cryptocurrency for transaction fees:
- Bitcoin network: ~$1-5 in BTC
- Ethereum network: ~$5-20 in ETH (for ETH and ERC-20 tokens)
- Other networks: varies, usually under $1

**Make sure you have enough for fees before starting.**

## Step-by-Step Migration Process

### Phase 1: Create Your New Seed Phrase Account

#### Step 1: Access Account Creation

**Option A: Using Account Switcher (Recommended)**
1. In your current ZelCore, look for account/profile menu
2. Select "Add Account" or "Create New Account"
3. Choose "Create New Wallet" or "Register"

**Option B: On a Different Device**
1. Install ZelCore on another device
2. Open ZelCore
3. Choose "Create New Wallet" or "Register"

**Option C: In Same App (Advanced)**
1. Note your legacy credentials
2. Log out of legacy account
3. Choose "Create New Wallet"

:::tip Recommendation
Use Option A (account switcher) if available - it's easiest to manage both accounts simultaneously.
:::

#### Step 2: Create the New Account

1. Choose "Create New Wallet" or "Register"
2. Set up device authentication:
   - PIN code (numeric)
   - Password (alphanumeric)
   - Biometric (if available)
3. ZelCore will generate your seed phrase

#### Step 3: Write Down Your Seed Phrase

**This is the most critical step:**

1. ZelCore displays 12 or 24 words
2. Write ALL words on paper in exact order
3. **Number each word** (1-12 or 1-24)
4. **Double-check spelling** of each word
5. Store paper in a secure location immediately
6. **Never photograph or digitally store your seed phrase**

**Example format:**
```
1. word
2. example
3. correct
...
12. phrase
```

#### Step 4: Verify Your Seed Phrase

1. ZelCore will ask you to confirm words
2. Select words in the correct order
3. Verify all words match what you wrote down
4. If prompted, write the phrase down again for additional verification

#### Step 5: Complete New Account Setup

1. Enable D2FA (recommended for security)
2. Note your new account is empty (this is expected)
3. You now have TWO accounts:
   - **Legacy account:** Has your current funds
   - **New seed phrase account:** Empty, waiting for transfers

### Phase 2: Transfer Your Assets

Now you'll move each cryptocurrency from your legacy account to your new seed phrase account.

#### Important: Transfer Order

**Transfer in this order:**
1. **Base cryptocurrencies first** (BTC, ETH, FLUX, etc.)
2. **Tokens second** (ERC-20, BEP-20, etc.)

**Why:** You need base cryptocurrency for transaction fees when sending tokens.

#### Step 6: Set Up Asset Receiving

**In your NEW seed phrase account:**

1. Select the first cryptocurrency to transfer
2. If not already added, add it to your asset list
3. Go to the **Receive** tab
4. Copy the receiving address
5. **Verify the address is correct** (check first/last 4-6 characters)

**Pro tip:** Send the address to yourself via secure note, or keep both accounts open side-by-side.

#### Step 7: Send From Legacy Account

**Switch to your LEGACY account:**

1. Select the same cryptocurrency
2. Go to the **Send** tab
3. Paste your new account's receiving address
4. **Verify address is correct** - compare carefully!
5. Choose amount:
   - **First transfer:** Send a small test amount (e.g., $10-20 worth)
   - **Subsequent transfers:** Send remaining balance minus fee reserve
6. Review transaction details
7. Confirm and send

#### Step 8: Verify Transfer Completion

1. **Wait for confirmation:**
   - Bitcoin: 10-60 minutes (1-6 confirmations)
   - Ethereum: 1-15 minutes (12+ confirmations)
   - Others: varies by network

2. **Check new account:**
   - Switch to your new seed phrase account
   - Run Smartify (Settings → Smartify)
   - Verify the funds appear
   - Check amount is correct

3. **Verify on blockchain explorer:**
   - Copy your new account's address
   - Check on appropriate blockchain explorer
   - Confirm transaction shows as confirmed

#### Step 9: Repeat for Each Asset

For each cryptocurrency in your list:

1. Add asset to new account (if not already added)
2. Get receiving address from new account
3. Send from legacy account
4. Wait for confirmation
5. Verify in new account
6. Check off your list
7. Move to next asset

**For tokens (ERC-20, BEP-20, etc.):**
- Make sure you have base cryptocurrency first (ETH, BNB, etc.) for fees
- Transfer base crypto first, then tokens
- Some tokens may need to be manually added in new account

### Phase 3: Handle Special Cases

#### D2FA Migration

If you have D2FA enabled on your legacy account:

1. **New account D2FA:**
   - Set up fresh D2FA in your new account
   - Create a new D2FA PIN
   - This is separate from legacy D2FA

2. **Legacy D2FA:**
   - Keep enabled until all transfers complete
   - Can disable after confirming migration success

#### Staked or Locked Assets

**If you have staking positions:**

1. **Check lock periods:**
   - Determine when assets unlock
   - Note any unstaking periods

2. **Options:**
   - **Wait for unlock:** Keep legacy account until assets unlock, then transfer
   - **Unstake now:** Unstake, wait for unlock period, then transfer
   - **Bridge after unlock:** If there's a bridge function, use after unstaking

3. **Document staking rewards:**
   - Note which assets generate rewards
   - Set up staking in new account after transfer

#### Custom Tokens

**For tokens not in default list:**

1. **Get token details from legacy account:**
   - Contract address
   - Token symbol
   - Decimals
   - Network (ERC-20, BEP-20, etc.)

2. **Add to new account:**
   - Go to asset management
   - Select "Add Custom Token"
   - Enter token details
   - Verify before transferring

#### Large Holdings

**For large amounts (personal risk threshold):**

1. **Test transfer first:**
   - Send small amount (1-5%)
   - Verify receipt
   - Then send remainder

2. **Split into batches:**
   - Multiple smaller transactions
   - Reduces risk
   - Verify each batch

3. **Transaction limits:**
   - Some blockchains have per-transaction limits
   - May require multiple sends

### Phase 4: Verification and Cleanup

#### Step 10: Complete Final Verification

**Create a verification checklist:**

1. **Compare balances:**
   - Legacy account (should be near zero)
   - New account (should have all funds)
   - Total should match your original list

2. **Check all assets transferred:**
   - Review your original holdings list
   - Verify each asset appears in new account
   - Confirm amounts match (minus transaction fees)

3. **Test new account:**
   - Send a small test transaction
   - Receive a small test transaction
   - Verify Smartify works
   - Check all features function

4. **Verify seed phrase access:**
   - On a different device, import wallet using seed phrase
   - Confirm all assets appear
   - This proves your seed phrase works for recovery

#### Step 11: Secure Your Seed Phrase

**Critical security steps:**

1. **Physical storage:**
   - Write on durable paper (or metal plate)
   - Store in fireproof/waterproof safe
   - Consider multiple copies in different locations

2. **Never store digitally:**
   - No photos
   - No cloud storage
   - No password managers
   - No digital notes

3. **Consider additional copies:**
   - Second secure location (different building)
   - Split across multiple secure locations (advanced)
   - Metal backup plates for durability

4. **Document for heirs (optional):**
   - Sealed envelope with trusted person
   - Safe deposit box
   - Estate planning documentation

#### Step 12: Legacy Account Handling

**After confirming all transfers:**

**Option 1: Keep Legacy Account as Backup (Recommended for 30 days)**
- Leave small amounts in legacy account
- Keep credentials secure
- Verify new account works perfectly
- After 30 days, retire legacy account

**Option 2: Retire Legacy Account Immediately**
- Withdraw all remaining funds
- Leave minimal amount (or nothing)
- Keep credentials stored securely just in case
- Legacy accounts remain accessible even if retired

**Do NOT:**
- ❌ Delete username/password credentials yet
- ❌ Share that you're no longer using legacy account
- ❌ Close or delete the account (ZelCore may need to deprecate it officially)

## Common Migration Issues

### "I can't remember my legacy password"

**Solution:**
1. Try password recovery (if available in legacy system)
2. Check for password hints or documentation
3. Try common variations you might have used
4. Contact ZelCore support for account recovery options

**Prevention for future:**
- Set up new account immediately if you can't access legacy
- Transfer funds once you regain access

### "Transaction failed when sending to new account"

**Possible causes and solutions:**

**Insufficient fees:**
- Check you have enough for network fees
- Add more base cryptocurrency for fees
- Try during low network congestion

**Wrong address:**
- Verify you copied the correct address
- Check address is for correct network (BTC vs BCH, ETH vs BSC, etc.)
- Some addresses are network-specific

**Amount too large:**
- Network or wallet limits
- Try sending smaller amounts
- Split into multiple transactions

**UTXO issues (for BTC-based coins):**
- Too many small UTXOs
- See [UTXO Consolidation Guide](../../guides/utxo-consolidation-guide/)

### "New account isn't showing transferred funds"

**Solutions:**

1. **Run Smartify:**
   - Settings → Smartify
   - Wait 1-3 minutes
   - Check again

2. **Check blockchain explorer:**
   - Verify transaction confirmed
   - If confirmed on blockchain, it's a display issue
   - If not confirmed, transaction may be pending

3. **Wait for confirmations:**
   - Bitcoin: can take 10-60 minutes
   - Ethereum: usually 1-15 minutes
   - Check network status for delays

4. **Verify correct network:**
   - ETH vs ERC-20
   - BSC vs BEP-20
   - Ensure asset added to correct network

### "I wrote down the wrong seed phrase"

**If you still have access to the account:**
1. Go to Settings → Security → Show Seed Phrase
2. Write down the CORRECT seed phrase
3. Verify it word by word
4. Test recovery on different device

**If you lost access:**
- If no funds transferred yet, create new account
- If funds already transferred, contact ZelCore support immediately
- This is why test transfers are recommended

### "I accidentally sent to the wrong address"

**Immediate steps:**

1. **Check if transaction confirmed:**
   - If not confirmed, some wallets allow cancellation
   - Usually via "Replace By Fee" (RBF) or similar

2. **If confirmed:**
   - Cryptocurrency transactions are irreversible
   - If you sent to another address you own, access that wallet
   - If sent to unknown address, funds are likely lost

3. **Prevention:**
   - Always verify addresses character by character
   - Use address book for frequent recipients
   - Test with small amounts first
   - Use copy/paste, never type manually

### "Migration is taking too long"

**Normal timeframes:**

- **Simple migration (1-5 assets):** 30-60 minutes
- **Complex migration (5-15 assets):** 1-3 hours
- **Very complex (15+ assets, staking, tokens):** 3-6 hours

**If genuinely stuck:**
- Take a break, resume later
- Migration can happen over several days
- Keep both accounts until complete
- No rush - legacy accounts still function

### "D2FA issues after migration"

**Common problems:**

**D2FA PIN not working in new account:**
- New account has separate D2FA
- Create new D2FA PIN for new account
- Old PIN was for legacy account only

**Can't set up D2FA:**
- Update ZelCore to latest version
- Check internet connection
- Try disabling and re-enabling
- Contact support if persistent

## Migration Checklist

Use this checklist to track your progress:

### Pre-Migration
- [ ] Updated ZelCore to latest version
- [ ] Verified legacy account access
- [ ] Created list of all holdings
- [ ] Confirmed sufficient funds for transaction fees
- [ ] Set aside 30-60 minutes uninterrupted time

### Account Creation
- [ ] Created new seed phrase account
- [ ] Written down seed phrase on paper
- [ ] Verified seed phrase
- [ ] Stored seed phrase securely
- [ ] Set up device authentication
- [ ] Enabled D2FA (optional)

### Asset Transfer
For EACH asset:
- [ ] Asset 1: ________________
  - [ ] Added to new account
  - [ ] Copied receiving address
  - [ ] Sent test amount
  - [ ] Verified test transfer
  - [ ] Sent remaining balance
  - [ ] Verified full transfer

- [ ] Asset 2: ________________
  - [ ] Added to new account
  - [ ] Copied receiving address
  - [ ] Sent test amount
  - [ ] Verified test transfer
  - [ ] Sent remaining balance
  - [ ] Verified full transfer

(Continue for all assets...)

### Verification
- [ ] All assets transferred
- [ ] Balances match (minus fees)
- [ ] Test send/receive in new account
- [ ] Smartify works in new account
- [ ] Tested seed phrase recovery on different device
- [ ] Seed phrase securely stored in multiple locations

### Cleanup
- [ ] Legacy credentials documented and stored
- [ ] Decided on legacy account handling
- [ ] Removed minimal/zero balance from legacy account
- [ ] Updated personal records with new account info

## Best Practices

### Security During Migration

1. **Never rush the process**
   - Take your time
   - Verify each step
   - It's okay to pause and resume

2. **Use test transactions**
   - Small amounts first
   - Verify receipt
   - Then send larger amounts

3. **Keep records**
   - Note transaction IDs
   - Keep copies of addresses used
   - Document dates and amounts

4. **Maintain access to both accounts**
   - Don't disable legacy until confirmed
   - Keep credentials for both
   - Verify everything works

### Minimizing Fees

1. **Consolidate before migrating:**
   - If you have many small UTXOs
   - See [UTXO Consolidation Guide](../../guides/utxo-consolidation-guide/)

2. **Monitor network fees:**
   - Use during low congestion times
   - Check fee estimators
   - Bitcoin: weekends often cheaper
   - Ethereum: late night/early morning often cheaper

3. **Batch token transfers:**
   - Send all ERC-20 tokens together if possible
   - Minimize separate Ethereum transactions

### Recovery Planning

1. **Test your seed phrase:**
   - Import on different device
   - Verify assets appear
   - Then remove from test device

2. **Document recovery process:**
   - Write down steps for family
   - Note where seed phrase is stored
   - Include in estate planning

3. **Create recovery instructions:**
   - Simple guide for non-technical heirs
   - Location of seed phrase
   - How to access funds

## After Migration

### Recommended Next Steps

1. **Security audit:**
   - Review all security settings
   - Enable all available security features
   - Set up transaction limits if available

2. **Familiarize with new account:**
   - Explore new features
   - Test all functionality
   - Update personal documentation

3. **Update external records:**
   - If you shared addresses with others, provide new ones
   - Update any auto-pay or recurring payment addresses
   - Update addresses on exchanges or services

4. **Regular maintenance:**
   - Run Smartify weekly
   - Keep ZelCore updated
   - Verify seed phrase annually (check you can still read it)

### Using Your New Seed Phrase Account

**Key differences from legacy:**

- **No username/password:** Only seed phrase for recovery
- **Device-specific authentication:** Each device has its own PIN/password
- **Modern FluxID:** Access to latest Flux ecosystem features
- **Better portability:** Works with other BIP44 wallets

**Important habits:**

- Never share seed phrase with anyone
- Store seed phrase offline only
- Use Smartify regularly for balance refresh
- Keep ZelCore updated
- Review security settings periodically

## Getting Help

### If You Get Stuck

1. **Review this guide carefully**
   - Read relevant sections again
   - Check troubleshooting section
   - Verify you followed all steps

2. **Check FAQ:**
   - [Account Access FAQ](../../faq/account-access-faq/)
   - [Wallet FAQ](../../faq/wallet-faq/)

3. **Contact support:**
   - ZelCore support: support@zel.network
   - Discord: discord.gg/runonflux
   - Remember: Support will NEVER ask for your seed phrase

4. **Community resources:**
   - Official ZelCore Discord
   - Community forums
   - Social media channels

### Support Information to Provide

If contacting support, include:

- **What step you're on** in the migration process
- **What you expected** to happen
- **What actually happened** (error messages, etc.)
- **Assets involved** (which cryptocurrency)
- **Transaction IDs** (if applicable)
- **Screenshots** (never include seed phrase!)

**Never include:**
- ❌ Your seed phrase
- ❌ Your full private keys
- ❌ Your exact holdings amounts (for privacy)
- ❌ Login credentials

## Frequently Asked Questions

### Can I undo the migration?

No, cryptocurrency transactions are irreversible. However, you can:
- Transfer funds back to legacy account if needed
- Keep both accounts active
- Choose which to use going forward

### Will I lose my transaction history?

Transaction history is stored on the blockchain, not in ZelCore:
- All transactions remain visible on blockchain explorers
- New account starts with blank in-app history
- Historical data isn't migrated, but transactions are permanent on blockchain

### Do I have to migrate?

Not immediately, but:
- Legacy accounts are being phased out
- Future updates may not support legacy accounts
- Migration is recommended for security and compatibility
- Delay may limit future features

### Can I use both accounts?

Yes:
- Both accounts can remain active
- You can use account switcher
- Useful during transition period
- Recommended until migration fully verified

### What happens to my legacy account?

- Remains accessible
- You can leave minimal funds if desired
- May eventually be deprecated by ZelCore
- Keep credentials secure even if inactive

### Will migration affect my tax records?

Migration involves transfers, which may be:
- Considered taxable events in some jurisdictions
- Should be documented for tax purposes
- Consult tax professional for your situation
- Keep records of all transaction IDs and dates

## Summary

Migrating from a legacy account to a seed phrase account:

✅ **Improves security** with industry-standard BIP44
✅ **Increases portability** across wallets
✅ **Ensures future compatibility** with ZelCore updates
✅ **Provides full ownership** of your funds

**Remember:**
- Take your time - no need to rush
- Test with small amounts first
- Verify every step
- Store seed phrase securely offline
- Keep both accounts until verified

With careful attention to detail, migration is straightforward and significantly improves your ZelCore experience.

## Related Documentation

- [Understanding ZelCore Accounts](../../getting-started/understanding-zelcore-accounts/)
- [Account Access FAQ](../../faq/account-access-faq/)
- [Security Best Practices](../../security/best-practices/)
- [UTXO Consolidation Guide](../../guides/utxo-consolidation-guide/)
- [Create a New Wallet](../../getting-started/create-wallet/)
