---
sidebar_position: 8
---

# Kadena (KDA) Complete Guide

## Overview

Kadena is unique among blockchain networks because it uses a multi-chain architecture called "Chainweb." Unlike most blockchains that have a single chain, Kadena has multiple parallel chains (Chain 0, Chain 1, Chain 2, etc.) that work together. This guide explains how Kadena's chain system works, how to manage KDA in ZelCore, and how to resolve common issues related to chain selection and transfers.

Understanding Kadena's chain architecture is essential for successfully sending, receiving, and managing KDA tokens, especially when interacting with exchanges, wallets like EckoWallet, or the Kadena Community Fork.

## Understanding Kadena's Multi-Chain Architecture

### What Are Kadena Chains?

Kadena operates 20 parallel chains (Chain 0 through Chain 19) that all work together as one network:

- **Each chain is independent:** Has its own blocks, transactions, and state
- **Chains are braided together:** Connected through cross-chain transfers
- **All chains share security:** Protected by the same proof-of-work consensus
- **Same KDA token:** KDA exists across all chains with the same value

**Think of it like this:**
Imagine a highway system with 20 parallel lanes (chains). Your car (KDA) can drive on any lane, but you need to explicitly change lanes (cross-chain transfer) to move between them. Each lane has its own traffic and addresses.

### Chain 0, Chain 1, Chain 2... What's the Difference?

From a user perspective:
- **Functionally identical:** All chains work the same way
- **Different addresses:** Your KDA on Chain 0 has a different address than Chain 1
- **Separate balances:** KDA on Chain 0 is separate from KDA on Chain 1
- **Cross-chain transfers required:** Moving KDA between chains requires a special transaction

**Key point:** When someone sends you KDA, you need to know WHICH CHAIN they're sending it to. When you send KDA, you need to specify WHICH CHAIN the recipient expects it on.

## Legacy Addresses vs Chain-Specific Addresses

### What Is a "Legacy Address"?

In Kadena's early days, some wallets and services used addresses that weren't clearly associated with a specific chain. These are often called "legacy addresses" and can cause confusion.

**Legacy address characteristics:**
- May not clearly indicate which chain they belong to
- Can receive KDA but may cause issues with sending or displaying
- Often start with "k:" prefix
- May work across multiple chains in some contexts but not others

**Example:** `k:abc123def456...`

### Chain-Specific Addresses (Modern Standard)

Modern Kadena addresses are explicitly tied to a specific chain:

**Chain-specific address characteristics:**
- Clearly associated with a specific chain (0-19)
- Format: `k:address` on Chain X
- Recommended for all current operations
- Required by most exchanges and modern wallets

**Example:**
- Chain 0: `k:abc123def456...` (on Chain 0)
- Chain 1: `k:abc123def456...` (on Chain 1)

**Important:** The SAME address string (e.g., `k:abc123def456`) can exist on MULTIPLE chains, but they represent DIFFERENT balances. Always verify which chain an address is on.

## How to Check Which Chain Your KDA Is On

### Method 1: Using ZelCore

1. Open ZelCore
2. Select **Kadena (KDA)** from your assets
3. Look at your wallet information:
   - The chain number should be displayed with your address
   - May show "KDA - Chain 0" or similar
4. Check your transaction history:
   - Recent transactions will show which chain they occurred on

### Method 2: Using Kadena Block Explorers

Visit a Kadena block explorer and search for your address:

**Recommended Explorers:**
- **Kadena Explorer:** https://explorer.chainweb.com
- **KDABox:** https://kdabox.com
- **Kadena Mainnet Explorer:** https://mainnet.chainweb.com

**How to use:**
1. Copy your KDA address from ZelCore
2. Paste it into the explorer search
3. Look for "Chain" information in the results
4. Check balances per chain - you may have KDA on multiple chains

### Method 3: Contact the Sender

If you're expecting KDA from someone:
- Ask them which chain they sent to
- Verify the transaction hash (TxID)
- Look up the TxID in a block explorer to see the destination chain

## How to Send KDA to the Correct Chain

### Before Sending KDA

**Critical pre-send checklist:**

1. **Confirm the destination chain:**
   - Ask the recipient: "Which Kadena chain should I send to?"
   - Exchanges usually specify (e.g., "Deposit to Chain 0 only")
   - Wallets may have default chains

2. **Verify you have KDA on the required chain:**
   - Check your balance on the specific chain needed
   - If your KDA is on a different chain, perform a cross-chain transfer first

3. **Get the correct address:**
   - Ensure you have the recipient's full k: address
   - Verify the chain number

### Sending KDA in ZelCore

#### Step 1: Select the Correct Chain

1. Open ZelCore
2. Go to **Kadena (KDA)**
3. Navigate to the **Send** tab
4. **Look for chain selection options:**
   - Some ZelCore versions show chain selector dropdown
   - May display "Chain 0", "Chain 1", etc.
   - Ensure you're on the correct chain

#### Step 2: Enter Recipient Details

1. **Recipient Address:** Paste the full k: address
2. **Amount:** Enter the amount of KDA to send
3. **Chain:** Verify the chain is correct (if selectable)
4. **Memo (optional):** Some exchanges require a memo/tag

#### Step 3: Verify Before Sending

**CRITICAL VERIFICATION:**
- ✓ Recipient address is correct
- ✓ Chain matches what recipient expects
- ✓ Amount is correct
- ✓ You have sufficient KDA on this specific chain
- ✓ You have enough for transaction fees

#### Step 4: Send and Confirm

1. Click **Send**
2. Review the transaction details one more time
3. Confirm the transaction
4. Save the transaction hash (TxID) for your records
5. Wait for blockchain confirmations

### Cross-Chain Transfers (Moving KDA Between Chains)

If your KDA is on Chain 1 but you need to send it on Chain 0, you must perform a cross-chain transfer first.

**In ZelCore:**

1. Go to Kadena (KDA)
2. Look for **Cross-Chain Transfer** or **Bridge** option
3. Select:
   - **Source Chain:** Where your KDA currently is (e.g., Chain 1)
   - **Destination Chain:** Where you need it (e.g., Chain 0)
   - **Amount:** How much KDA to move
4. Complete the transfer
5. **Wait for confirmation** (cross-chain transfers can take 5-15 minutes)
6. Verify the KDA arrived on the destination chain
7. Now you can send to your final recipient

**Note:** Cross-chain transfers have small fees and require gas (usually minimal KDA).

## Exchange Deposits and Withdrawals

### Depositing KDA to Exchanges

**Most exchanges only accept KDA on specific chains** (usually Chain 0).

**Step-by-step for exchange deposits:**

1. **Log into your exchange account**
2. **Go to KDA deposit section**
3. **READ THE CHAIN REQUIREMENT:**
   - Will say something like "Chain 0 only" or "Deposit to Chain 1"
   - **THIS IS CRITICAL** - sending to wrong chain may lose funds
4. **Copy the deposit address**
5. **Note any memo/tag requirements**
6. **In ZelCore:**
   - Verify you have KDA on the required chain
   - If not, do a cross-chain transfer first
   - Send to the exchange address on the CORRECT chain
7. **Wait for confirmations** (exchanges typically require 10-50 confirmations)
8. **Verify deposit appears in exchange balance**

**Common Exchange Chain Requirements:**
- **Most major exchanges:** Chain 0
- **Some DEXs:** May use Chain 1 or other chains
- **Always verify:** Check exchange deposit instructions

### Withdrawing KDA from Exchanges

**When withdrawing from exchanges to ZelCore:**

1. **In ZelCore:**
   - Go to Kadena (KDA)
   - Go to **Receive** tab
   - Copy your receiving address
   - **Note which chain** ZelCore is using (usually Chain 0)

2. **In the exchange:**
   - Go to KDA withdrawal section
   - Paste your ZelCore address
   - **Select the chain** (if option available)
   - Match the chain to your ZelCore chain
   - Enter amount
   - Complete 2FA/verification

3. **Wait for processing:**
   - Exchange processing time: varies (5 min - 24 hours)
   - Blockchain confirmations: 5-15 minutes

4. **Verify in ZelCore:**
   - Check your KDA balance
   - Run **Smartify** if balance doesn't appear
   - Check transaction history

**If withdrawal doesn't appear:**
- Verify transaction on blockchain explorer using TxID
- Check if exchange sent to correct chain
- Run Smartify in ZelCore
- Wait for sufficient confirmations

## ERR_BAD_REQUEST Troubleshooting

### What Is ERR_BAD_REQUEST?

`ERR_BAD_REQUEST` is an error that occurs when ZelCore (or Kadena network) rejects your transaction request due to invalid parameters or formatting issues.

### Common Causes

1. **Chain mismatch:**
   - Trying to send from Chain 0 to an address expecting Chain 1
   - Address and chain don't align

2. **Invalid address format:**
   - Missing "k:" prefix
   - Malformed address string
   - Special characters or spaces

3. **Insufficient balance on specific chain:**
   - You have KDA, but not on the chain you're trying to send from
   - Example: 100 KDA on Chain 0, trying to send from Chain 1

4. **Gas fee issues:**
   - Not enough KDA to cover transaction fees
   - Gas price set incorrectly

5. **Network/node issues:**
   - Backend nodes not synced
   - Temporary Kadena network problems

6. **Outdated ZelCore version:**
   - Old app version with bugs or incompatibilities

### Troubleshooting Steps

**Step 1: Verify Chain Alignment**
1. Confirm which chain the recipient expects
2. Check which chain your KDA is on
3. Ensure they match
4. If mismatch, perform cross-chain transfer first

**Step 2: Validate Address Format**
1. Check recipient address starts with "k:"
2. Ensure no extra spaces or characters
3. Re-copy address from source if needed
4. Test with small amount first

**Step 3: Check Balance on Specific Chain**
1. In ZelCore, verify your KDA balance for the specific chain
2. Use block explorer to confirm balance per chain
3. If KDA is on wrong chain, transfer it first

**Step 4: Ensure Sufficient Gas**
1. Keep extra KDA for transaction fees (usually 0.001-0.01 KDA)
2. Don't try to send your entire balance (leave room for fees)

**Step 5: Update and Refresh**
1. Update ZelCore to latest version
2. Run **Smartify** in Settings
3. Change backend server if needed
4. Restart ZelCore

**Step 6: Try Alternative Methods**
1. Use smaller transaction amount (test with 0.1 KDA)
2. Try different backend server
3. Wait 30 minutes and try again (network issues may be temporary)
4. Consider using EckoWallet or other Kadena wallet as alternative

**Step 7: Advanced Troubleshooting**
1. Clear ZelCore cache (see Balance & Sync guide)
2. Check Kadena network status on official channels
3. Verify no ongoing Kadena network maintenance
4. Contact ZelCore support with error details

### Error Message Variations

**"ERR_BAD_REQUEST: Chain mismatch"**
- Solution: Verify chain alignment, perform cross-chain transfer

**"ERR_BAD_REQUEST: Invalid recipient"**
- Solution: Validate address format, ensure k: prefix

**"ERR_BAD_REQUEST: Insufficient funds"**
- Solution: Check balance on specific chain, ensure gas coverage

**"ERR_BAD_REQUEST: Gas estimation failed"**
- Solution: Update ZelCore, run Smartify, change backend

## EckoWallet Integration

### What Is EckoWallet?

EckoWallet (formerly Chainweaver) is a popular Kadena-specific wallet that can be used alongside or as an alternative to ZelCore for managing KDA.

### Using ZelCore with EckoWallet

**Common scenarios:**

1. **Receiving from EckoWallet users:**
   - Get your ZelCore KDA receive address
   - Tell the sender which chain (usually Chain 0)
   - Wait for transaction confirmation

2. **Sending to EckoWallet users:**
   - Ask for their k: address and chain
   - Follow standard sending procedure
   - EckoWallet users may have accounts on multiple chains

3. **Switching between wallets:**
   - Both wallets can use the same Kadena address if using same private keys
   - Import/export private keys to use both wallets
   - Balances will sync automatically since both read from blockchain

### EckoWallet-Specific Considerations

**Chain compatibility:**
- EckoWallet shows all 20 chains clearly
- Easy to see which chain has which balance
- Can perform cross-chain transfers directly in EckoWallet

**Account naming:**
- EckoWallet uses "accounts" (k: addresses)
- Same account name can exist on multiple chains
- Always verify chain when transacting

**If having issues with ZelCore:**
- Try viewing/sending KDA via EckoWallet as backup
- EckoWallet can help diagnose chain-specific issues
- Both wallets read from same blockchain source

## Kadena Community Fork Migration

### What Was the Kadena Community Fork?

In Kadena's history, there were updates to the network protocol and community-led improvements. Some older wallets or services needed migration to remain compatible.

### Do I Need to Migrate in ZelCore?

**If you're using the latest ZelCore version:**
- No manual migration usually needed
- ZelCore handles protocol updates automatically
- Keep app updated for best compatibility

**Signs you might need attention:**
- Using very old ZelCore version (1+ years old)
- KDA balance not appearing despite being on blockchain
- Transaction errors mentioning "deprecated" or "old format"

### How to Ensure Compatibility

1. **Update ZelCore:**
   - Download latest version from zelcore.io
   - Install update
   - Run Smartify after updating

2. **Verify addresses:**
   - Check your KDA address format (should have k: prefix)
   - Use block explorer to confirm address is valid

3. **Test small transaction:**
   - Send 0.1 KDA to yourself
   - If successful, full functionality confirmed

4. **If issues persist:**
   - Consider importing your private keys to EckoWallet temporarily
   - Contact ZelCore support mentioning "Kadena fork compatibility"

## Chain Mismatch Issues and Solutions

### Common Chain Mismatch Scenarios

#### Scenario 1: Exchange Sent to Wrong Chain

**Problem:** Exchange sent KDA to Chain 1, but you gave them Chain 0 address

**Solution:**
1. Contact exchange support immediately with transaction hash
2. In ZelCore, check if you can access multiple chains
3. The KDA may be accessible on Chain 1 in ZelCore
4. If not visible, you may need to add Chain 1 view
5. Perform cross-chain transfer to move it to correct chain

#### Scenario 2: Your KDA Is on Chain 2, Exchange Only Accepts Chain 0

**Problem:** You have KDA on Chain 2, need to deposit to exchange accepting only Chain 0

**Solution:**
1. In ZelCore, perform cross-chain transfer
2. Source: Chain 2
3. Destination: Chain 0
4. Amount: Total you want to deposit (minus fees)
5. Wait for cross-chain transfer confirmation
6. Then send from Chain 0 to exchange

#### Scenario 3: Received KDA on Unexpected Chain

**Problem:** Someone sent you KDA on Chain 8, but you expected Chain 0

**Solution:**
1. Verify the KDA arrived using block explorer
2. In ZelCore, access the correct chain view (Chain 8)
3. You can either:
   - Keep it on Chain 8 for future use
   - Cross-chain transfer to Chain 0 or your preferred chain
4. KDA is not lost, just on different chain

#### Scenario 4: Cannot See KDA That Explorer Shows

**Problem:** Block explorer shows KDA on Chain 3, but ZelCore shows zero balance

**Solution:**
1. Run Smartify in ZelCore
2. Verify ZelCore is showing the correct chain view
3. Update ZelCore to latest version
4. Change backend server
5. Check if ZelCore supports all chains (some older versions only showed Chain 0)
6. Consider using EckoWallet to view if ZelCore doesn't support the chain

### How to Avoid Chain Mismatches

**Best practices:**

1. **Always ask before transacting:**
   - "Which chain should I send to?"
   - "Which chain are you using?"

2. **Stick to Chain 0 when possible:**
   - Most widely supported
   - Default for most exchanges
   - Fewer compatibility issues

3. **Document your chains:**
   - Keep notes of which chains you use
   - Remember where mining payouts go
   - Track exchange requirements

4. **Use cross-chain transfers proactively:**
   - Consolidate KDA onto one chain regularly
   - Easier to manage everything on Chain 0

5. **Test with small amounts:**
   - Before sending large amounts, test with 0.1 KDA
   - Verify it arrives on correct chain
   - Then send remaining amount

## Common Issues and Solutions

### Issue: Missing KDA Balance in ZelCore

**Symptoms:**
- Block explorer shows KDA balance
- ZelCore shows zero or incorrect amount

**Solutions:**
1. Run Smartify
2. Verify which chain the KDA is on (explorer)
3. Check if ZelCore is displaying correct chain
4. Update ZelCore
5. Change backend server
6. Clear cache and resync

**Related:** [Troubleshooting Balance & Sync Issues](/docs/guides/troubleshooting-balance-sync-issues)

### Issue: Cannot Send KDA - Transaction Fails

**Symptoms:**
- Send button doesn't work
- ERR_BAD_REQUEST error
- Transaction rejected

**Solutions:**
1. Verify chain alignment (sender and recipient)
2. Check address format (k: prefix)
3. Ensure sufficient balance on specific chain
4. Leave extra KDA for gas fees
5. Update ZelCore
6. Run Smartify
7. Try smaller amount first

### Issue: Cross-Chain Transfer Not Completing

**Symptoms:**
- Cross-chain transfer stuck
- KDA disappeared from source chain but not on destination
- Transfer taking longer than expected

**Solutions:**
1. **Wait patiently:** Cross-chain transfers can take 15-30 minutes
2. Check blockchain explorer for transaction status
3. Look for transaction on BOTH chains (source and destination)
4. Run Smartify after sufficient time
5. If stuck for over 1 hour, check Kadena network status
6. Contact support with transaction hash

### Issue: Exchange Won't Credit KDA Deposit

**Symptoms:**
- Sent KDA to exchange
- Transaction confirmed on blockchain
- Balance not showing in exchange

**Solutions:**
1. Verify you sent to correct chain (exchanges specify which chain)
2. Check transaction has required confirmations (typically 10-50)
3. Look up transaction on explorer using TxID
4. Ensure you included memo/tag if required
5. Contact exchange support with:
   - Transaction hash
   - Amount sent
   - Chain used
   - Deposit address

### Issue: Don't Know Which Chain My KDA Is On

**Symptoms:**
- Have KDA but unsure of chain
- Received from multiple sources
- Want to consolidate

**Solutions:**
1. Use block explorer to search your address
2. Explorer will show balances per chain
3. In ZelCore, check transaction history for chain info
4. Create a spreadsheet tracking your KDA by chain
5. Use EckoWallet for clearer multi-chain view

## Advanced Topics

### Gas Fees on Kadena

**How gas works:**
- Very low fees (typically 0.001-0.01 KDA per transaction)
- Paid in KDA regardless of chain
- Required for both regular and cross-chain transfers

**Gas considerations:**
- Always keep small amount of KDA for fees
- Cannot send entire balance (need to leave gas)
- Cross-chain transfers require gas on source chain

### Mining KDA to Specific Chains

**If you're mining Kadena:**
- Configure your mining pool to pay to specific chain
- Most pools allow chain selection
- Recommendation: Use Chain 0 for easier management
- Or use Chain 1 as mining chain, periodically transfer to Chain 0 for storage

### Multiple Chain Strategy

**Advanced users may use multiple chains:**
- **Chain 0:** Main holdings and exchange interactions
- **Chain 1:** Mining rewards
- **Chain 2+:** DeFi activities, specialized uses

**Benefits:**
- Separation of concerns
- Easier accounting
- Risk distribution

**Complexity:**
- Need to track multiple balances
- More cross-chain transfers required
- Can confuse recipients

## Frequently Asked Questions

### Can I lose KDA by sending to the wrong chain?

Technically, the KDA isn't "lost" - it's just on a different chain than expected. If you have the private keys, you can access it and perform a cross-chain transfer. However, if you sent to an exchange address on the wrong chain, the exchange may not be able to credit it (contact their support).

### How long do cross-chain transfers take?

Typical cross-chain transfers take 5-15 minutes. In times of high network congestion, they may take up to 30-60 minutes. If a transfer takes longer than 1 hour, check the Kadena network status.

### Do I need separate private keys for each chain?

No. The same Kadena private key/seed phrase controls your address across all chains. Your "k:address" is the same on all chains, but the balances are separate.

### Which chain should I use by default?

Chain 0 is recommended as the default for most users. It's the most widely supported, most exchanges use it, and it's easiest to manage.

### Can I send from Chain 0 directly to a Chain 1 address?

No. You must first perform a cross-chain transfer to move your KDA from Chain 0 to Chain 1, then send it to the final recipient on Chain 1.

### Why doesn't ZelCore show all 20 chains?

Some older ZelCore versions have limited chain support. Update to the latest version for best multi-chain support. If you need access to a specific chain that ZelCore doesn't show clearly, consider using EckoWallet.

### Is KDA on Chain 0 worth the same as KDA on Chain 5?

Yes. KDA has the same value regardless of which chain it's on. The chain is just a location within the Kadena network, not a different token.

## Prevention and Best Practices

**To avoid Kadena chain issues:**

1. **Always verify chain before transacting**
2. **Use Chain 0 as default when possible**
3. **Keep ZelCore updated**
4. **Double-check exchange deposit requirements**
5. **Test with small amounts first**
6. **Document which chains you use**
7. **Run Smartify regularly**
8. **Learn to use block explorers**
9. **Keep backup wallet (EckoWallet) available**
10. **Join Kadena community for updates**

## Getting Help

**If you encounter Kadena-specific issues in ZelCore:**

1. **Check this guide first** for common solutions
2. **Run Smartify** as first troubleshooting step
3. **Use block explorers** to verify blockchain state
4. **Update ZelCore** to latest version
5. **Try EckoWallet** as backup/verification tool
6. **Contact ZelCore Support:**
   - Discord: Official ZelCore server
   - Email: support@zel.network
   - Include: Transaction hash, chain info, error messages

**Kadena-specific resources:**
- Kadena Official Discord: https://discord.io/kadena
- Kadena Documentation: https://docs.kadena.io
- EckoWallet: https://www.eckowallet.com

## Related Documentation

- [Troubleshooting Balance & Sync Issues](/docs/guides/troubleshooting-balance-sync-issues)
- [Wallet Security Best Practices](/docs/guides/security-best-practices)
- [Understanding Blockchain Explorers](#) (if available)

---

**Remember:** Kadena's multi-chain architecture is unique and powerful, but requires understanding to use correctly. When in doubt, always verify the chain, test with small amounts, and consult block explorers to see the true state of your KDA.
