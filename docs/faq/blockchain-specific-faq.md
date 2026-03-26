---
sidebar_position: 6
title: Blockchain-Specific FAQ
description: "Answers to blockchain-specific questions in ZelCore — chain differences, token standards, network fees, and cross-chain functionality."
keywords: [blockchain faq, crypto chain differences, token standards, erc20 trc20]
---

# Blockchain-Specific FAQ

## Kadena (KDA) Questions

### What is Kadena's multi-chain architecture and why does it matter?

**Answer:**

Kadena uses a unique blockchain design called "Chainweb" with 20 parallel chains (Chain 0 through Chain 19) that work together as one network. Unlike most blockchains with a single chain, Kadena splits its operations across multiple chains for better scalability and throughput.

**Why this matters for you:**

- Your KDA can exist on any of these 20 chains
- KDA on Chain 0 is separate from KDA on Chain 1 (different balances)
- You need to specify which chain when sending or receiving KDA
- Exchanges typically only accept specific chains (usually Chain 0)
- Moving KDA between chains requires a "cross-chain transfer"

**Think of it like:** A building with 20 floors. Your KDA might be on floor 3, but someone asking for it is on floor 5. You need to move it between floors (chains) to deliver it to the right place.

**Related:**
- [Complete Kadena (KDA) Guide](../../guides/kadena-kda-guide/)

---

### Which Kadena chain should I use?

**Answer:**

**Chain 0 is recommended as the default for most users.**

**Reasons to use Chain 0:**
- Most widely supported across exchanges and services
- Default for most major exchanges (Binance, KuCoin, etc.)
- Easiest to manage and least confusing
- Most liquidity and activity
- Better support from wallets and tools

**When you might use other chains:**
- Your mining pool pays to a specific chain
- Using specific DeFi protocols on other chains
- Following instructions from an exchange using another chain
- Advanced users separating funds for organization

**Key rule:** Always verify which chain the recipient expects before sending. When in doubt, ask or use Chain 0.

**Related:**
- [Complete Kadena (KDA) Guide](../../guides/kadena-kda-guide/)

---

### How do I know which Kadena chain my KDA is on?

**Answer:**

There are three ways to check which chain holds your KDA:

**Method 1: Check ZelCore**
1. Open ZelCore and select Kadena (KDA)
2. Look for chain information displayed with your balance
3. May show "KDA - Chain 0" or similar
4. Check transaction history for chain details

**Method 2: Use Kadena Block Explorer**
1. Visit https://explorer.chainweb.com or https://kdabox.com
2. Search for your KDA address (k:...)
3. Explorer will show your balance on each chain
4. You may have KDA on multiple chains

**Method 3: Check Transaction History**
1. Look at where you received the KDA from
2. Check the transaction hash in a block explorer
3. Transaction details will show which chain it occurred on

**Pro tip:** Use a block explorer to see all your KDA across all chains at once. You might have KDA on multiple chains without realizing it.

**Related:**
- [Complete Kadena (KDA) Guide](../../guides/kadena-kda-guide/)

---

### What does "ERR_BAD_REQUEST" mean when sending KDA?

**Answer:**

`ERR_BAD_REQUEST` means ZelCore or the Kadena network rejected your transaction because something is wrong with the transaction details.

**Most common causes:**

1. **Chain mismatch:** You're trying to send from Chain 0 to an address expecting Chain 1
2. **Wrong address format:** Missing "k:" prefix or invalid characters
3. **KDA on different chain:** You have KDA but not on the chain you're trying to send from
4. **Insufficient gas:** Not enough KDA left for transaction fees
5. **Sync issues:** ZelCore not properly synced with Kadena network

**Quick fixes:**

1. **Verify chain alignment:**
   - Ask recipient which chain they need
   - Check which chain your KDA is on
   - Perform cross-chain transfer if mismatched

2. **Check address format:**
   - Ensure address starts with "k:"
   - No extra spaces or special characters
   - Re-copy the address if needed

3. **Run Smartify:**
   - Go to Settings > Smartify
   - Refreshes network connections

4. **Update ZelCore:**
   - Download latest version from zelcore.io
   - Fixes many compatibility issues

5. **Leave extra for fees:**
   - Don't send your entire balance
   - Keep 0.01-0.1 KDA for transaction fees

**Related:**
- [Complete Kadena (KDA) Guide](../../guides/kadena-kda-guide/)
- [ERR_BAD_REQUEST Troubleshooting Section](../../guides/kadena-kda-guide/#err_bad_request-troubleshooting)

---

### How do I send KDA to an exchange?

**Answer:**

Exchanges are strict about which Kadena chain they accept. Sending to the wrong chain may result in lost deposits or delayed support tickets.

**Step-by-step process:**

**1. Check exchange requirements:**
   - Log into your exchange
   - Go to KDA deposit section
   - **READ CAREFULLY** which chain they accept (usually Chain 0)
   - Note if they require a memo or tag

**2. Verify your KDA is on the correct chain:**
   - Check which chain your KDA is currently on
   - If it's on the wrong chain, perform a cross-chain transfer first
   - Wait for cross-chain transfer to complete (5-15 minutes)

**3. Get the deposit address:**
   - Copy the exchange's KDA deposit address
   - Verify it has the "k:" prefix
   - Double-check you copied it completely

**4. Send from ZelCore:**
   - Go to KDA in ZelCore
   - Select **Send** tab
   - Paste exchange address
   - **Verify chain is correct**
   - Enter amount
   - Add memo/tag if required
   - Review everything carefully
   - Send transaction

**5. Wait and verify:**
   - Exchanges require 10-50 confirmations (typically 10-30 minutes)
   - Check transaction status on block explorer
   - Verify deposit appears in exchange balance

**Common exchange chain requirements:**
- **Binance:** Chain 0
- **KuCoin:** Chain 0
- **Gate.io:** Chain 0
- **Most exchanges:** Chain 0
- **Always verify:** Check your specific exchange

**If deposit doesn't appear:**
- Verify you sent to the correct chain
- Check transaction on block explorer with TxID
- Wait for sufficient confirmations
- Contact exchange support with transaction hash

**Related:**
- [Complete Kadena (KDA) Guide](../../guides/kadena-kda-guide/)
- [Exchange Deposits Section](../../guides/kadena-kda-guide/#depositing-kda-to-exchanges)

---

### How do I move KDA between different chains (cross-chain transfer)?

**Answer:**

Moving KDA between Kadena chains (e.g., from Chain 1 to Chain 0) requires a special transaction called a "cross-chain transfer."

**In ZelCore:**

**Step 1: Access Cross-Chain Transfer**
1. Open ZelCore
2. Go to Kadena (KDA)
3. Look for **Cross-Chain Transfer** or **Bridge** option
4. (Location varies by ZelCore version)

**Step 2: Configure Transfer**
1. **Source Chain:** Select where your KDA currently is (e.g., Chain 1)
2. **Destination Chain:** Select where you want it (e.g., Chain 0)
3. **Amount:** Enter how much KDA to move
4. **Review:** Verify source and destination are correct

**Step 3: Complete Transfer**
1. Click **Transfer** or **Send**
2. Confirm the transaction
3. Save the transaction hash

**Step 4: Wait for Completion**
1. Cross-chain transfers take **5-15 minutes** typically
2. May take up to 30-60 minutes during high network activity
3. Run Smartify if balance doesn't update automatically
4. Verify KDA arrived on destination chain

**Important notes:**
- Small fee required (typically 0.001-0.01 KDA)
- You need a tiny amount of KDA on source chain for gas
- Cannot send entire balance (need to leave some for fees)
- Transfer creates two blockchain transactions (one on each chain)

**If cross-chain transfer seems stuck:**
- Wait at least 30 minutes before worrying
- Check both source and destination chains on block explorer
- Run Smartify in ZelCore
- Update ZelCore to latest version
- Check Kadena network status

**Alternative method:**
- Use EckoWallet (Kadena-specific wallet) for cross-chain transfers
- Often has clearer UI for multi-chain operations

**Related:**
- [Complete Kadena (KDA) Guide](../../guides/kadena-kda-guide/)
- [Cross-Chain Transfer Section](../../guides/kadena-kda-guide/#cross-chain-transfers-moving-kda-between-chains)

---

### What is a "legacy address" in Kadena and why does it matter?

**Answer:**

A "legacy address" refers to older Kadena address formats that may not be clearly associated with a specific chain. These can cause confusion and compatibility issues.

**Legacy address characteristics:**
- From Kadena's early days or old wallets
- May not clearly show which chain they belong to
- Often start with "k:" but lack clear chain context
- Can receive KDA but may have issues displaying or sending
- May work across chains in some contexts but not others

**Modern chain-specific addresses:**
- Clearly associated with a specific chain (0-19)
- Same format but used with explicit chain specification
- Required by most exchanges and modern services
- Recommended for all current operations

**Why it matters:**
- Legacy addresses can cause sync issues in wallets
- Exchanges may reject deposits from legacy address formats
- Can make it unclear which chain your KDA is on
- May cause ERR_BAD_REQUEST errors

**What to do if you have a legacy address:**

1. **Update ZelCore:** Latest versions handle both legacy and modern formats
2. **Check which chain your KDA is on:** Use block explorer
3. **For new transactions:** Use clear chain-specific addressing
4. **If having issues:**
   - Run Smartify
   - Update ZelCore
   - Consider exporting/importing to regenerate addresses
   - Use EckoWallet to view/manage if ZelCore has issues

**Best practice:** Always specify the chain explicitly when sharing your KDA address. Say "Chain 0: k:address123" instead of just "k:address123".

**Related:**
- [Complete Kadena (KDA) Guide](../../guides/kadena-kda-guide/)
- [Legacy Addresses Section](../../guides/kadena-kda-guide/#legacy-addresses-vs-chain-specific-addresses)

---

### Can I use EckoWallet with ZelCore for Kadena?

**Answer:**

Yes! EckoWallet and ZelCore can be used together or as alternatives for managing Kadena (KDA). Each has different strengths.

**Using both wallets:**

- **Same blockchain:** Both read from Kadena blockchain
- **Same addresses:** Can use the same k: addresses if using same keys
- **Import/Export:** Can import private keys between wallets
- **Different interfaces:** Each shows chain information differently

**When to use EckoWallet:**

1. **Better multi-chain visibility:** Shows all 20 chains clearly
2. **Clearer cross-chain transfers:** More intuitive interface
3. **ZelCore issues:** If ZelCore has sync problems with KDA
4. **Kadena-specific features:** Built specifically for Kadena
5. **Troubleshooting:** Verify which chain has your KDA

**When to use ZelCore:**

1. **Multi-asset wallet:** Manage many cryptocurrencies in one place
2. **Integrated exchange:** Built-in swap features
3. **Mobile convenience:** Strong mobile app
4. **All-in-one solution:** Don't need separate wallets

**How to use both:**

**Method 1: Same wallet, two interfaces**
1. Export private key from ZelCore
2. Import into EckoWallet
3. Both wallets now control same KDA

**Method 2: Separate wallets**
1. Use ZelCore as main wallet
2. Use EckoWallet for verification or troubleshooting
3. Keep separate addresses

**Best practice:**
- Keep ZelCore as primary multi-asset wallet
- Install EckoWallet as backup for Kadena-specific operations
- Use EckoWallet when you need clear chain visibility
- Verify transactions on both when troubleshooting

**Important security note:** Only import keys between wallets you trust. Never share private keys with anyone or input them into unknown websites.

**Related:**
- [Complete Kadena (KDA) Guide](../../guides/kadena-kda-guide/)
- [EckoWallet Integration Section](../../guides/kadena-kda-guide/#eckowallet-integration)

---

### Why isn't my KDA showing in ZelCore even though I see it on the blockchain explorer?

**Answer:**

If the Kadena block explorer shows your KDA balance but ZelCore doesn't, this is a display/sync issue, not a loss of funds.

**Common causes specific to Kadena:**

1. **Wrong chain view:** ZelCore might be showing Chain 0, but your KDA is on Chain 3
2. **Sync issues:** ZelCore not synced with Kadena network
3. **Outdated version:** Old ZelCore version with limited chain support
4. **Backend node issues:** Kadena nodes not responding properly
5. **Legacy address issues:** Old address format causing display problems

**Solutions in order:**

**1. Verify which chain has your KDA**
   - Check block explorer (explorer.chainweb.com)
   - Note which chain(s) show balance
   - Compare to which chain ZelCore is displaying

**2. Run Smartify**
   - Go to Settings in ZelCore
   - Click/tap Smartify
   - Wait 1-3 minutes
   - Check if balance appears

**3. Update ZelCore**
   - Download latest version from zelcore.io
   - Newer versions have better multi-chain support
   - Restart and run Smartify

**4. Change backend server**
   - Go to Settings > Backend
   - Switch to different server
   - Run Smartify again

**5. Check chain support**
   - Some older ZelCore versions only show Chain 0
   - Your KDA might be on a different chain
   - Use EckoWallet to view all chains if needed

**6. Clear cache**
   - Clear ZelCore cache (see Balance & Sync guide)
   - Restart app
   - Run Smartify

**If balance still doesn't show:**
- Verify on block explorer that KDA is truly there
- Use EckoWallet as alternative viewer
- Contact ZelCore support with:
  - Your k: address
  - Which chain has the balance
  - Transaction hash showing the deposit
  - ZelCore version you're using

**Your KDA is safe:** If it's on the blockchain explorer, your funds are secure. This is purely a display issue with ZelCore.

**Related:**
- [Complete Kadena (KDA) Guide](../../guides/kadena-kda-guide/)
- [Troubleshooting Balance & Sync Issues](../../guides/troubleshooting-balance-sync-issues/)

---

### What should I know about the Kadena Community Fork migration?

**Answer:**

The Kadena Community Fork refers to protocol updates and community-led improvements to the Kadena network. If you're using a current version of ZelCore, you likely don't need to worry about this.

**Do you need to take action?**

**Probably not if:**
- Using ZelCore version from the last 6 months
- Your KDA balance shows correctly
- You can send/receive KDA without errors
- Addresses use modern k: format

**You might need attention if:**
- Using very old ZelCore version (1+ years old)
- KDA balance not appearing despite being on blockchain
- Getting errors mentioning "deprecated" or "old format"
- Having address format issues

**How to ensure compatibility:**

**Step 1: Update ZelCore**
1. Download latest version from zelcore.io
2. Install the update
3. Your wallet data is preserved automatically
4. Run Smartify after updating

**Step 2: Verify your addresses**
1. Check your KDA address has k: prefix
2. Use block explorer to confirm address is valid
3. Ensure you can see your balance

**Step 3: Test functionality**
1. Try sending 0.1 KDA to yourself
2. If successful, full compatibility confirmed
3. Check cross-chain transfer works

**If you experience issues:**

1. **Update first:** Fixes most compatibility issues
2. **Try EckoWallet:** Import your keys to verify access
3. **Contact support:** Mention "Kadena fork compatibility"
4. **Don't panic:** Your KDA is safe on blockchain even if display issues occur

**Technical background:**

Kadena has evolved over time with protocol improvements. Modern wallets like ZelCore automatically handle these changes through updates. The "fork" terminology can sound scary, but it's just normal blockchain evolution.

**Key point:** Keep ZelCore updated, and you won't have any fork-related issues.

**Related:**
- [Complete Kadena (KDA) Guide](../../guides/kadena-kda-guide/)
- [Kadena Community Fork Section](../../guides/kadena-kda-guide/#kadena-community-fork-migration)

---

### I sent KDA to an exchange but they say they didn't receive it. What do I do?

**Answer:**

If an exchange says they didn't receive your KDA deposit, the most common cause is sending to the wrong Kadena chain.

**Immediate troubleshooting steps:**

**Step 1: Verify the transaction on blockchain**
1. Get your transaction hash (TxID) from ZelCore
2. Search it on https://explorer.chainweb.com
3. Confirm the transaction was successful
4. **Check which chain it was sent on**

**Step 2: Verify exchange requirements**
1. Go back to exchange's KDA deposit instructions
2. Check which chain they require (usually Chain 0)
3. Compare to which chain you sent on

**Step 3: Check confirmations**
1. Exchanges typically require 10-50 confirmations
2. Kadena confirmations take a few minutes each
3. Wait at least 30-60 minutes before escalating

**Common scenarios and solutions:**

**Scenario A: Sent to wrong chain**
- **Problem:** Sent to Chain 1, exchange only accepts Chain 0
- **Solution:**
  - Contact exchange support immediately
  - Provide transaction hash
  - Explain you sent to wrong chain
  - Some exchanges can recover, others cannot
  - May take several days for support to resolve

**Scenario B: Missing memo/tag**
- **Problem:** Exchange required memo but you didn't include one
- **Solution:**
  - Contact exchange support with transaction hash
  - Provide the memo that should have been used
  - Exchange can usually credit manually

**Scenario C: Insufficient confirmations**
- **Problem:** Transaction confirmed but not enough confirmations yet
- **Solution:**
  - Wait longer (be patient)
  - Check exchange's required confirmation count
  - Transaction will credit automatically once requirements met

**Scenario D: Correct chain but not showing**
- **Problem:** Sent to correct chain, enough confirmations, still not credited
- **Solution:**
  - Double-check the deposit address was correct
  - Verify on blockchain explorer funds arrived at exchange address
  - Contact exchange support with transaction hash
  - Usually credits within 24 hours once investigated

**Information to provide to exchange support:**
- Transaction hash (TxID)
- Amount sent
- Date and time
- Which chain you sent on
- Your ZelCore address (sender)
- Their deposit address (recipient)
- Screenshot of blockchain explorer showing transaction

**Prevention for next time:**
1. Always verify which chain exchange accepts
2. Read deposit instructions carefully
3. Double-check memo/tag requirements
4. Test with small amount first (0.1 KDA)
5. Save all transaction details immediately

**If exchange refuses to help:**
- If you sent to wrong chain, KDA may be unrecoverable from exchange
- Your KDA is not "lost" on the blockchain, but exchange may not have access
- This is why verifying chain requirements is critical

**Related:**
- [Complete Kadena (KDA) Guide](../../guides/kadena-kda-guide/)
- [Exchange Deposits Section](../../guides/kadena-kda-guide/#depositing-kda-to-exchanges)

---

### How can I avoid Kadena chain-related problems?

**Answer:**

Most Kadena issues in ZelCore come from chain confusion or mismatches. Follow these best practices to avoid problems:

**Before Every Transaction:**

1. **Always ask: "Which chain?"**
   - When receiving: "Which chain should I give you?"
   - When sending: "Which chain do you need?"
   - When depositing to exchange: Read which chain they accept

2. **Verify before sending:**
   - Check recipient's chain requirement
   - Verify your KDA is on that chain
   - If not, do cross-chain transfer first
   - Confirm address format (k: prefix)

3. **Test with small amounts:**
   - Send 0.1 KDA first as test
   - Verify it arrives correctly
   - Then send remaining amount

**General Best Practices:**

4. **Use Chain 0 as default:**
   - Most widely supported
   - Easiest to manage
   - Fewer compatibility issues
   - Consolidate your KDA to Chain 0 when possible

5. **Keep ZelCore updated:**
   - Download updates from zelcore.io
   - Better chain support in newer versions
   - Bug fixes and improvements

6. **Run Smartify regularly:**
   - Weekly maintenance recommended
   - After updates
   - When balance doesn't look right

7. **Learn to use block explorers:**
   - https://explorer.chainweb.com
   - Verify transactions independently
   - Check balances per chain
   - Confirm where your KDA actually is

8. **Document your chains:**
   - Keep notes of which chains you use
   - Track mining payouts by chain
   - Remember exchange requirements
   - Less confusion later

9. **Have backup wallet:**
   - Install EckoWallet as backup
   - Better multi-chain visibility
   - Use for verification when needed

10. **Understand cross-chain transfers:**
    - Learn how to move KDA between chains
    - Practice with small amounts
    - Know it takes 5-15 minutes
    - Keep small amount for gas fees

**Exchange-Specific Prevention:**

- **Save deposit instructions:** Screenshot or bookmark
- **Create checklist:** Chain requirement, memo needed, etc.
- **First deposit is always a test:** Send small amount first
- **Verify before large transfers:** Confirm test deposit credited

**Mining-Specific Prevention:**

- **Set pool to Chain 0:** Easier to manage
- **Or dedicate one chain for mining:** Keep mining separate
- **Regular consolidation:** Move to main chain periodically

**What to always have on hand:**

- Block explorer bookmarks
- ZelCore app updated
- Basic understanding of which chains you use
- Contact info for support
- This guide bookmarked!

**Remember:** Taking 30 seconds to verify the chain can save hours or days of support tickets and stress.

**Related:**
- [Complete Kadena (KDA) Guide](../../guides/kadena-kda-guide/)
- [Prevention and Best Practices Section](../../guides/kadena-kda-guide/#prevention-and-best-practices)

---

## Monero (XMR) Questions

### I'm getting "not enough spendable" error when trying to send Monero, but I have a balance. Why?

**Answer:**

The "not enough spendable" error with Monero (XMR) occurs when your displayed balance includes funds that aren't yet available to spend. This is unique to Monero's privacy features and confirmation requirements.

**Why this happens:**

Monero requires funds to have **10 confirmations** before they become "spendable." This is a network-level requirement for privacy and security, not a ZelCore limitation.

**Understanding Monero balance states:**

Your Monero wallet actually has multiple balance categories:
- **Total balance:** All XMR in your wallet (including locked)
- **Unlocked balance:** XMR with 10+ confirmations (spendable)
- **Locked balance:** Recent XMR with fewer than 10 confirmations (not yet spendable)

**Common scenarios:**

**Scenario 1: Recent deposit**
- You received XMR 5 minutes ago
- Balance shows correctly
- But funds need 10 confirmations (~20 minutes)
- Must wait before sending

**Scenario 2: Previous send not fully confirmed**
- You sent XMR recently
- Change returned to your wallet
- Change needs 10 confirmations
- Can't use change yet for new transaction

**Scenario 3: Multiple small deposits**
- Received several small XMR payments
- Some confirmed, some not yet
- Only confirmed portion is spendable
- Rest shows as locked

**Solutions:**

**1. Wait for confirmations (most common solution)**

Simply wait for your XMR to unlock:
- **Time needed:** ~20 minutes for 10 confirmations
- **Monero block time:** ~2 minutes per block
- **Check progress:** Use Monero block explorer

**How to check confirmations:**
1. Get your transaction hash (TxID)
2. Visit xmrchain.net or localmonero.co/blocks
3. Search for your transaction
4. Check confirmation count
5. When it reaches 10, XMR becomes spendable

**2. Check your actual spendable balance**

In ZelCore:
1. Go to Monero (XMR)
2. Look for balance breakdown if available
3. May show "Locked" vs "Unlocked" amounts
4. Only unlocked amount is spendable

**3. Send smaller amount**

If part of your balance is unlocked:
- Try sending less than your full balance
- May work if you have some confirmed funds
- Error message may indicate exact spendable amount

**4. Run Smartify**

Refresh your wallet sync:
1. Go to Settings > Smartify
2. Wait for completion
3. Check if spendable balance updates
4. May resolve sync-related display issues

**5. Rescan wallet (if persistent)**

If balance seems wrong after confirmations:
1. In ZelCore, look for Monero rescan option
2. Or export private keys to official Monero wallet
3. Import there and rescan
4. Verifies actual spendable balance

**Prevention tips:**

1. **Wait after receiving:**
   - Always wait 20-30 minutes after deposit
   - Ensures full confirmation
   - Avoid "not enough spendable" errors

2. **Space out transactions:**
   - Don't send XMR immediately after sending
   - Change needs time to confirm
   - Wait between sends

3. **Plan ahead:**
   - If you know you'll need to send XMR soon
   - Receive/consolidate it in advance
   - Give time for confirmations

4. **Check before urgent sends:**
   - Verify spendable balance first
   - Don't assume total balance is sendable
   - Test with small amount if unsure

**Understanding why Monero works this way:**

Monero's 10-confirmation requirement protects privacy:
- Prevents double-spend attacks
- Maintains transaction privacy guarantees
- Standard across all Monero wallets
- Network-level rule, not wallet-specific

**Related:**
- [Troubleshooting Balance & Sync Issues](../../guides/troubleshooting-balance-sync-issues/)

---

### My Monero transaction failed with "Error 500" or broadcast error. What should I do?

**Answer:**

"Error 500" or broadcast errors when sending Monero typically indicate that ZelCore's Monero node couldn't process or broadcast your transaction to the network. This is usually temporary and has several solutions.

**Common causes:**

1. **Node sync issues:** ZelCore's backend Monero node is out of sync
2. **Network congestion:** Monero network experiencing high load
3. **Node connectivity:** Temporary connection issues to Monero nodes
4. **Outdated wallet sync:** Your local wallet not fully synced
5. **Transaction construction failure:** Issue building the transaction

**Immediate solutions:**

**Solution 1: Wait and retry (simplest)**

1. Wait 5-10 minutes
2. Try sending again
3. Node issues often resolve quickly
4. Many broadcast errors are temporary

**Solution 2: Run Smartify**

Refresh wallet connections:
1. Go to Settings in ZelCore
2. Click/tap Smartify
3. Wait for completion (1-3 minutes)
4. Try sending transaction again
5. Refreshes connection to Monero nodes

**Solution 3: Change backend/proxy**

Switch to different Monero node:
1. Go to Settings > Backend (or Proxy)
2. Select different server
3. Save changes
4. Run Smartify
5. Attempt transaction again

Different nodes may have better connectivity.

**Solution 4: Update ZelCore**

Ensure you're on latest version:
1. Download latest ZelCore from zelcore.io
2. Install update
3. Restart application
4. Run Smartify
5. Try transaction again

Newer versions have better node management.

**Solution 5: Restart ZelCore**

Simple but effective:
1. Completely close ZelCore
2. Wait 30 seconds
3. Reopen ZelCore
4. Run Smartify
5. Attempt transaction

Clears any stuck processes.

**Solution 6: Check Monero network status**

Verify it's not network-wide issue:
1. Visit Monero community channels (Reddit, Discord)
2. Check if others reporting issues
3. Visit Monero block explorers (xmrchain.net)
4. See if network is processing blocks normally

If network-wide, must wait for resolution.

**Solution 7: Use official Monero wallet**

If ZelCore consistently fails:
1. Export your Monero private key from ZelCore
2. Import into official Monero GUI or CLI wallet
3. Let it sync (may take time)
4. Send transaction from official wallet
5. Monero's own wallet has direct node access

**Advanced solution: Rescan wallet**

If error persists and seems balance-related:
1. Look for Monero rescan option in ZelCore
2. Or use official wallet with rescan
3. Rebuilds wallet state from blockchain
4. May take 30-60 minutes
5. Fixes sync-related broadcast issues

**Understanding Error 500:**

"Error 500" is a generic server error meaning:
- Backend node couldn't process your request
- Could be node-side issue
- Could be transaction construction problem
- Not necessarily a problem with your funds
- Usually temporary

**Prevention:**

1. **Keep ZelCore updated:**
   - Latest versions have better node handling
   - Improved error recovery
   - Better Monero integration

2. **Run Smartify regularly:**
   - Weekly preventive maintenance
   - Keeps wallet synced
   - Prevents sync-related errors

3. **Check before urgent sends:**
   - Test with small amount first if critical
   - Verify wallet is synced
   - Ensure enough confirmations on balance

4. **Have backup plan:**
   - Keep official Monero wallet installed
   - Know your seed phrase/private key
   - Can always use alternative wallet

**When to worry:**

**Don't worry if:**
- Error happens once or twice
- Resolves after Smartify or wait
- Other transactions work
- No other symptoms

**Do investigate if:**
- Error persists for hours
- Happens on every transaction attempt
- Balance seems incorrect
- Other ZelCore functions also failing

**Important:** Broadcast errors don't mean you lost funds. Your XMR is safe on the blockchain. The error just means the transaction couldn't be sent to network.

**Related:**
- [Troubleshooting Balance & Sync Issues](../../guides/troubleshooting-balance-sync-issues/)

---

### My incoming Monero transaction isn't showing in ZelCore, but the sender says it's confirmed. What should I do?

**Answer:**

If someone sent you Monero (XMR) and you can verify the transaction on blockchain explorers but it's not showing in ZelCore, this is a wallet sync issue that can usually be fixed.

**First: Verify the transaction exists**

Before troubleshooting, confirm the transaction is real:

1. **Get transaction details from sender:**
   - Transaction hash (TxID)
   - Amount sent
   - Your receiving address they used

2. **Check on Monero explorer:**
   - Visit xmrchain.net or localmonero.co/blocks
   - Search for the transaction hash
   - Verify it shows as confirmed
   - Note the block height it was included in

3. **Verify correct address:**
   - Confirm sender used YOUR Monero address from ZelCore
   - XMR addresses are long (start with 4 or 8)
   - Even one wrong character = wrong address

**If transaction is confirmed on blockchain:**

**Solution 1: Run Smartify (try this first)**

1. Open ZelCore
2. Go to Settings
3. Click/tap Smartify
4. Wait for completion (1-3 minutes)
5. Check Monero balance

This fixes most sync issues.

**Solution 2: Change backend server**

1. Go to Settings > Backend (or Proxy)
2. Switch to different server
3. Save changes
4. Run Smartify again
5. Check balance

Different backend may sync better.

**Solution 3: Update ZelCore**

1. Download latest version from zelcore.io
2. Install update
3. Restart ZelCore
4. Run Smartify
5. Check for transaction

Newer versions have improved Monero support.

**Solution 4: Rescan Monero wallet**

Monero wallets sometimes need rescanning:

**In ZelCore (if available):**
1. Look for Monero-specific settings
2. Find "Rescan" or "Restore height" option
3. Set restore height to block before transaction
4. Initiate rescan
5. Wait for completion (10-30 minutes)

**Using official Monero wallet:**
1. Export your Monero private key from ZelCore
2. Import into Monero GUI or CLI wallet
3. Set restore height to block before transaction (check on explorer)
4. Let wallet rescan blockchain
5. XMR should appear
6. Can use Monero wallet or wait for ZelCore to sync

**Solution 5: Clear cache and restart**

1. Clear ZelCore cache (varies by platform)
2. Restart ZelCore
3. Run Smartify
4. Allow time to resync

**Solution 6: Check restore height**

Monero wallets use a "restore height" - the blockchain height from which they start scanning:

1. If transaction occurred before your restore height
2. Wallet won't see it
3. Need to set lower restore height
4. Usually requires rescan

**Why this happens:**

**Monero's privacy creates sync challenges:**
- Transactions are encrypted on blockchain
- Wallet must scan every block to find YOUR transactions
- If wallet state is wrong, can miss transactions
- Requires your private view key to decrypt

**Common causes of missing incoming XMR:**
- Wallet restore height set too high
- Backend node out of sync
- Local wallet cache corrupted
- ZelCore didn't scan the specific block
- Node connectivity issues during that timeframe

**Prevention:**

1. **Run Smartify regularly:**
   - Weekly recommended
   - Keeps wallet synced
   - Catches transactions promptly

2. **Keep ZelCore updated:**
   - Better Monero node support
   - Improved scanning
   - Bug fixes

3. **Verify receiving address before giving it out:**
   - Screenshot your XMR address
   - Provide correct address to sender
   - One character wrong = different wallet

4. **Have official Monero wallet as backup:**
   - Can always verify with official wallet
   - Import same keys
   - Ultimate fallback

**Understanding the delay:**

Unlike most cryptocurrencies where balance updates are instantaneous (just need confirmations), Monero requires your wallet to:
1. Scan the blockchain
2. Decrypt transactions using your view key
3. Identify which transactions are yours
4. Update balance

This makes Monero more private but requires proper sync.

**Your XMR is safe:**

Important to understand: If the transaction is confirmed on blockchain explorers and was sent to your correct address, your XMR is safe. It's not lost, just not displayed in ZelCore yet. Rescanning or using official Monero wallet will reveal it.

**When to contact support:**

Contact ZelCore support if:
- Tried all solutions above
- Transaction confirmed 24+ hours ago
- Rescan doesn't help
- Other Monero functions also broken
- Need help exporting to official wallet

**Related:**
- [Troubleshooting Balance & Sync Issues](../../guides/troubleshooting-balance-sync-issues/)

---

### What is Monero "rescan" and when do I need to do it?

**Answer:**

A Monero "rescan" forces your wallet to re-examine the blockchain from a specific point to find all transactions belonging to you. Due to Monero's privacy features, this is sometimes necessary to ensure your wallet displays the correct balance and transaction history.

**Why Monero needs rescanning:**

Unlike transparent blockchains (Bitcoin, Ethereum) where any wallet can see all transactions, Monero transactions are private:
- All transactions are encrypted on the blockchain
- Your wallet must decrypt each transaction using your private view key
- Wallet "scans" blockchain to find which transactions are yours
- If scan is incomplete or corrupted, you'll miss transactions

**When you need to rescan:**

**1. After importing/recovering wallet:**
- Imported Monero wallet from seed or keys
- Need to scan entire blockchain history
- Finds all your historical transactions

**2. Missing incoming transactions:**
- Someone sent you XMR (confirmed on explorer)
- Not showing in your wallet
- Rescan will find it

**3. Balance shows zero but shouldn't:**
- You know you have XMR
- Wallet shows nothing
- Rescan rebuilds balance

**4. After Monero protocol upgrades:**
- Major Monero network updates
- Wallet may need to rescan with new rules
- Ensures compatibility

**5. Wallet sync issues:**
- Inconsistent balance
- Missing transaction history
- Strange behavior

**How to rescan in ZelCore:**

**Method 1: If ZelCore has rescan option**

1. Open ZelCore
2. Go to Monero (XMR) settings
3. Look for "Rescan" or "Restore from height" option
4. Enter restore height (block number to scan from)
   - Use 0 for full history (slow)
   - Use block number before first transaction (faster)
5. Initiate rescan
6. Wait for completion (10 minutes to several hours)

**Method 2: Using Smartify (light rescan)**

1. Go to Settings
2. Run Smartify
3. This does a light refresh
4. May fix minor sync issues
5. Faster than full rescan

**Method 3: Update and rescan**

1. Update ZelCore to latest version
2. Latest version may have better Monero backend
3. Run Smartify after updating
4. May automatically rescan

**How to rescan using official Monero wallet:**

If ZelCore rescan doesn't work or isn't available:

**Step 1: Export your keys from ZelCore**

1. In ZelCore, find Monero private key export option
2. Safely note your:
   - Mnemonic seed (25 words), OR
   - Private spend key and private view key
3. Also note your receiving address (verify it's correct)

**Step 2: Download Monero GUI Wallet**

1. Visit getmonero.org
2. Download official Monero GUI for your OS
3. Verify download authenticity (important for security)
4. Install wallet

**Step 3: Restore wallet in Monero GUI**

1. Open Monero GUI
2. Select "Restore wallet from keys or mnemonic seed"
3. Enter your seed or keys
4. **Set restore height:**
   - Use block number from before your first transaction
   - Check explorer for block height
   - Or use 0 for complete scan (very slow)
5. Create wallet password
6. Begin restore

**Step 4: Wait for sync**

1. Monero GUI will download blockchain
2. Then scan for your transactions
3. Full sync can take hours or days (depending on restore height)
4. Progress bar shows status

**Step 5: Verify balance**

1. Once sync complete, check balance
2. Should show all your XMR
3. Transaction history should be complete
4. Can send from Monero GUI if needed

**Step 6: Return to ZelCore**

1. Your keys are same in both wallets
2. Can continue using ZelCore
3. Monero GUI remains as backup
4. Both wallets access same XMR

**Understanding restore height:**

**Restore height = blockchain block number to start scanning from**

**Examples:**
- **Restore height 0:** Scan entire blockchain (complete history)
- **Restore height 2500000:** Scan from block 2,500,000 onward
- **Restore height = recent block:** Only scan recent activity

**How to determine restore height:**
1. Check when you first received XMR (date)
2. Look up Monero block height for that date
3. Use block slightly before (e.g., 1 week earlier)
4. Wallet scans from that point forward

**Find block height for date:**
- Visit moneroblocks.info or xmrchain.net
- Look at historical blocks
- Match date to block height

**Rescan time estimates:**

**Full scan (restore height 0):**
- Scans entire Monero blockchain
- 1-7 days depending on hardware
- Use only if necessary

**Partial scan (recent restore height):**
- Scans from specific point
- Minutes to hours
- Faster and usually sufficient

**In ZelCore Smartify:**
- Light refresh
- 1-3 minutes
- May not catch deep issues

**Important notes:**

**1. Your XMR is always safe:**
- Rescan doesn't change blockchain
- Just updates wallet's view of your balance
- Keys control XMR, not wallet display

**2. Patience is required:**
- Monero scanning can be slow
- Privacy features require thorough checking
- Don't interrupt rescan process

**3. Keep keys safe:**
- If exporting to Monero GUI
- Never share keys with anyone
- Store backup securely
- Anyone with keys controls your XMR

**4. Both wallets work:**
- Can use ZelCore and Monero GUI with same keys
- They access same funds
- Useful to have both options

**Prevention:**

1. **Run Smartify regularly:**
   - Keeps ZelCore synced
   - Reduces need for deep rescans

2. **Update ZelCore:**
   - Better Monero support over time
   - Fewer sync issues

3. **Note restore height when creating wallet:**
   - If you created wallet at block X
   - Never need to scan before X
   - Saves time on future rescans

**Related:**
- [Troubleshooting Balance & Sync Issues](../../guides/troubleshooting-balance-sync-issues/)

---

### How do I export my Monero private keys from ZelCore to use in another wallet?

**Answer:**

Exporting your Monero private keys from ZelCore allows you to access your XMR in the official Monero wallet or other Monero-compatible wallets. This is useful for rescanning, verifying balance, or using advanced features.

**Important security warnings:**

**Before exporting keys:**
- Your private keys give COMPLETE control over your Monero
- Anyone with your keys can steal all your XMR
- Never share keys with anyone
- Don't enter keys into unknown websites or apps
- Only use official Monero wallet or trusted wallets
- Consider your environment (no cameras, screen recording, etc.)

**How to export in ZelCore:**

**Step 1: Access Monero wallet**

1. Open ZelCore
2. Go to your Monero (XMR) wallet
3. Find settings or key export option (location varies by version)

**Step 2: Locate private key options**

Look for options like:
- "Export private key"
- "Show seed phrase"
- "Backup wallet"
- "View mnemonic"

**Step 3: Export keys**

ZelCore should provide one or both:

**Option A: Mnemonic seed (25 words)**
- 25-word recovery phrase
- Easiest for importing to Monero GUI
- Write down ALL 25 words in exact order
- Include the 25th word (checksum)

**Option B: Hexadecimal keys**
- Private spend key (long hexadecimal string)
- Private view key (long hexadecimal string)
- Public address
- Note all three

**Step 4: Safely store**

1. Write keys on paper (most secure)
2. Or save in encrypted file
3. Store in secure location
4. Never in cloud or email unless encrypted
5. Create multiple backups

**What to export:**

**For Monero GUI import, you need:**

**Minimum (one of these):**
- 25-word mnemonic seed, OR
- Private spend key + private view key

**Helpful additional info:**
- Wallet address (to verify)
- Restore height (block number when wallet created)

**Using exported keys in Monero GUI:**

**Step 1: Download Monero GUI**

1. Visit getmonero.org
2. Download official wallet for your OS
3. Verify download (check hashes)
4. Install wallet

**Step 2: Restore wallet**

**If you have 25-word seed:**
1. Open Monero GUI
2. Select "Restore wallet from mnemonic seed"
3. Enter your 25 words in order
4. Set wallet password
5. Enter restore height (or 0 for full scan)
6. Click "Create wallet"

**If you have private keys:**
1. Open Monero GUI
2. Select "Restore wallet from keys"
3. Enter:
   - Account address
   - Private spend key
   - Private view key
4. Set wallet password
5. Enter restore height
6. Click "Create wallet"

**Step 3: Sync blockchain**

1. Monero GUI will sync
2. Downloads blockchain data
3. Scans for your transactions
4. Wait for completion (hours to days)

**Step 4: Access your XMR**

1. Once synced, balance appears
2. Can send/receive normally
3. Advanced features available
4. Full control over XMR

**Common issues when exporting:**

**Issue 1: Can't find export option in ZelCore**

- Check ZelCore documentation for your version
- Try Settings > Security > Private keys
- Update to latest ZelCore version
- Contact ZelCore support for guidance

**Issue 2: Only seeing public address**

- Public address alone isn't enough
- Need private keys or seed
- Look for "Show private key" option
- May require additional authentication

**Issue 3: 24 words instead of 25**

- Monero uses 25-word seeds (not 24)
- Ensure you have all 25 words
- 25th word is checksum/verification
- If only 24, may be wrong export or different wallet type

**After exporting, you can:**

1. **Import to Monero GUI:**
   - Access same XMR from official wallet
   - Better for troubleshooting
   - More advanced features

2. **Verify balance independently:**
   - Check if ZelCore showing correct balance
   - Monero GUI shows definitive balance

3. **Perform deep rescan:**
   - Monero GUI rescans entire blockchain
   - Finds all transactions
   - Fixes sync issues

4. **Send XMR if ZelCore has issues:**
   - If ZelCore broadcast failing
   - Use Monero GUI to send
   - Direct node connection

**Important: Same keys = same wallet**

Understanding the concept:
- ZelCore and Monero GUI with same keys access SAME XMR
- Not two separate wallets
- Just different interfaces to same blockchain account
- Sending from one affects the other
- Both see same transactions

**Security best practices:**

1. **Physical security:**
   - Write seed on paper, not digital
   - Store in fireproof safe
   - Consider metal backup for fire protection
   - Multiple secure locations

2. **Digital security:**
   - If saving digitally, encrypt the file
   - Use strong encryption (VeraCrypt, etc.)
   - Never plain text
   - Definitely not in email or cloud

3. **Verification:**
   - After writing seed, verify accuracy
   - Double-check each word
   - Test recovery with small amount first

4. **Environment:**
   - No cameras around when viewing keys
   - No screen sharing software
   - Trusted device only
   - Secure internet connection

**When to export keys:**

**Good reasons:**
- Need to rescan with Monero GUI
- Want backup in official wallet
- ZelCore has persistent issues
- Want to verify balance independently
- Preparing for device change

**Not necessary:**
- Normal ZelCore usage works fine
- Just to check balance (use explorer)
- Someone asks for keys (NEVER share)

**Remember:** Your keys, your Monero. Protect them like the valuable asset they represent.

**Related:**
- [Troubleshooting Balance & Sync Issues](../../guides/troubleshooting-balance-sync-issues/)
- [Wallet Security Best Practices](../../guides/security-best-practices/)

---

## Solana (SOL) Questions

### My Solana transactions are failing with "blockhash not found" or similar errors. What's wrong?

**Answer:**

Solana transaction failures, especially after network upgrades or during periods of network congestion, are often caused by the blockchain's unique architecture and ZelCore's interaction with Solana RPC nodes.

**Common error messages:**

- "Blockhash not found"
- "Transaction simulation failed"
- "Block height exceeded"
- "Unable to confirm transaction"
- "Network request failed"
- "Transaction expired"

**Why Solana transactions fail:**

**1. Solana's blockhash expiration:**
- Solana transactions require a recent blockhash
- Blockhashes expire very quickly (approximately 60-90 seconds)
- If transaction isn't confirmed before expiration, it fails
- Much faster expiration than Bitcoin or Ethereum

**2. Network congestion:**
- High network activity causes delays
- Transactions may not be processed before blockhash expires
- Priority fees become more important during congestion
- Network upgrades can temporarily increase failures

**3. RPC node issues:**
- ZelCore connects to Solana through RPC nodes
- Node may be out of sync or overloaded
- Node might not have latest blockhash
- Connection issues between ZelCore and node

**4. After network upgrades:**
- Solana has frequent network upgrades
- New consensus rules or protocol changes
- RPC nodes need time to update
- Temporary incompatibilities during transition

**Immediate solutions:**

**Solution 1: Wait and retry (simplest)**

1. Wait 2-3 minutes after failed transaction
2. Solana network often self-corrects quickly
3. Retry the transaction
4. If fails again, proceed to other solutions

**Solution 2: Run Smartify**

Refresh ZelCore's connection to Solana network:

1. Go to Settings in ZelCore
2. Click/tap Smartify
3. Wait for completion (1-3 minutes)
4. Try transaction again
5. Forces reconnection to RPC nodes with fresh state

**Solution 3: Update ZelCore**

1. Check if newer ZelCore version is available
2. Download from zelcore.io
3. Install update
4. Restart ZelCore
5. Run Smartify
6. Retry transaction

Network upgrades often require wallet updates for compatibility.

**Solution 4: Change backend/proxy server**

Switch to different Solana RPC endpoint:

1. Go to Settings > Backend (or Proxy)
2. Select different server
3. Save changes
4. Run Smartify
5. Attempt transaction again

Different RPC nodes may have better sync or lower load.

**Solution 5: Reduce transaction complexity**

If sending to multiple recipients or complex transaction:

1. Break into smaller, simpler transactions
2. Send one at a time
3. Wait for each to confirm before next
4. Simpler transactions have higher success rate

**Solution 6: Increase priority fee (if available)**

During network congestion:

1. Look for priority fee or network fee setting
2. Increase slightly above default
3. Higher priority = faster processing
4. Helps avoid blockhash expiration

Note: ZelCore may not expose priority fee controls. If not available, timing and retry is your best strategy.

**Solution 7: Use Phantom or Solflare wallet temporarily**

If ZelCore consistently fails:

1. Export your Solana private key from ZelCore
2. Import into Phantom or Solflare wallet
3. Send transaction from native Solana wallet
4. They often have better Solana RPC connectivity
5. Return to ZelCore after urgent transaction

**How to export Solana key from ZelCore:**
1. Go to Solana in ZelCore
2. Find private key export option
3. Safely note your private key or seed phrase
4. Import into Phantom/Solflare using their import function

**Understanding Solana network upgrades:**

**Solana upgrades frequently:**
- Scheduled network upgrades every few months
- Improve performance and add features
- Can temporarily affect transaction success rates
- Usually resolved within 24-48 hours

**What happens during upgrades:**
- Validators update to new version
- Brief period of higher failure rates
- RPC nodes may lag behind
- Wallets need compatibility updates

**How to know if it's an upgrade issue:**

1. **Check Solana status:**
   - Visit status.solana.com
   - Check Solana Twitter (@solana)
   - Look for upgrade announcements
   - Community channels (Discord, Reddit)

2. **Check if widespread:**
   - Search "Solana transaction issues" on Twitter
   - Check Solana subreddit
   - If many users reporting, likely network-wide
   - If just you, likely ZelCore/RPC specific

3. **Timeline:**
   - Network-wide issues resolve in hours to 1-2 days
   - ZelCore-specific issues need wallet update or workaround

**Prevention tips:**

**1. Time your transactions:**
- Avoid sending during peak congestion
- Check Solana network activity first
- If urgent, increase priority fee
- Patience during network upgrades

**2. Keep ZelCore updated:**
- Updates include Solana compatibility improvements
- Better RPC node handling
- Bug fixes for transaction construction
- Check for updates monthly

**3. Run Smartify regularly:**
- Weekly maintenance recommended
- Keeps RPC connections fresh
- Prevents stale blockhash issues
- Quick preventive measure

**4. Monitor Solana network:**
- Follow @solana on Twitter
- Join Solana Discord
- Aware of planned upgrades
- Expect temporary issues during upgrades

**5. Have backup wallet:**
- Keep Phantom or Solflare installed
- Import same keys
- Use if ZelCore has issues
- Multiple access points to your SOL

**When to worry vs. when to wait:**

**Don't worry if:**
- Error happens once or twice
- Resolves with retry
- Solana network upgrade just happened
- Other ZelCore functions working fine

**Do investigate if:**
- Fails repeatedly over hours
- Balance shows incorrectly
- Other Solana wallets also failing
- Errors persist days after network upgrade

**Specific error troubleshooting:**

**"Blockhash not found":**
- RPC node doesn't have that blockhash anymore
- Transaction took too long to process
- Run Smartify and retry immediately
- If persistent, change backend server

**"Transaction simulation failed":**
- Transaction would fail if executed
- Check you have enough SOL for fee
- Verify recipient address is correct
- May indicate insufficient balance or invalid operation

**"Block height exceeded":**
- Transaction expired (blockhash too old)
- Retry transaction to get fresh blockhash
- If keeps happening, RPC node is slow

**"Unable to confirm transaction":**
- Transaction may have been sent but confirmation uncertain
- Check Solana explorer (solscan.io or explorer.solana.com)
- Search your address to see if transaction appeared
- If confirmed on chain, just display issue in ZelCore

**Checking transaction status on blockchain:**

1. Get your Solana address from ZelCore
2. Visit solscan.io
3. Search your address
4. Check recent transactions
5. See if failed transaction appears
6. Confirms whether it's send issue vs. display issue

**Advanced: Understanding Solana's transaction lifecycle**

**Why Solana is different:**

Unlike Bitcoin/Ethereum:
- Extremely fast finality (400ms)
- But also fast expiration of transaction validity
- Trade-off: speed vs. longer validity window
- Requires more real-time connectivity

**Transaction steps:**
1. Wallet gets recent blockhash from RPC node
2. Transaction constructed with blockhash
3. Transaction signed
4. Broadcast to network
5. Must be confirmed within ~60-90 seconds
6. Otherwise blockhash expires and transaction invalid

**Where it can fail:**
- Step 1: RPC node slow or out of sync
- Step 4: Network congestion delays broadcast
- Step 5: Not processed before expiration
- Between steps: Any delay can cause failure

**When network is healthy:**
- Transactions confirm in 1-2 seconds
- Rarely fail
- Smooth experience

**When network is stressed:**
- Delays at any step
- Higher failure rates
- Multiple retries needed
- Frustrating user experience

**Important notes:**

**Your SOL is safe:**
- Failed transactions don't lose funds
- SOL remains in wallet if transaction fails
- Can retry as many times as needed
- No penalty for failed attempts

**Small fee may be charged:**
- Even failed transactions may consume tiny fee
- Usually 0.000005 SOL (negligible)
- For network processing
- Don't worry about losing significant SOL to fees

**ZelCore vs. Solana:**
- Most issues are Solana network behavior
- Not ZelCore bugs
- All wallets experience similar issues during congestion
- Native Solana wallets may handle slightly better

**Related:**
- [Troubleshooting Balance & Sync Issues](../../guides/troubleshooting-balance-sync-issues/)

---