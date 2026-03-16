---
sidebar_position: 10
---

# Claiming Flux Parallel Assets: Complete Guide

## Overview

This guide explains how to claim Flux Parallel Assets (PA) earned through Flux parallel mining. Users frequently encounter issues when claiming PA rewards, including "claiming amount exceeds maximum allowable" errors, whitelisting requirements, and confusion about the "claim all" functionality that consolidates rewards into native Flux.

Parallel Assets are rewards distributed to FluxNode operators for participating in the Flux parallel mining ecosystem. These assets must be claimed through the Fusion interface in ZelCore, and understanding the claiming process, requirements, and potential issues will help you successfully claim your PA rewards.

## Understanding Parallel Assets

### What are Parallel Assets?

Parallel Assets (PA) are a reward mechanism within the Flux ecosystem:

- **Distribution method:** Rewards for FluxNode operators who participate in parallel mining
- **Types:** Various Flux parallel chain tokens (Flux-BASE, Flux-BSC, Flux-ETH, etc.)
- **Claim location:** Fusion app within ZelCore
- **Claim timing:** PA credits accumulate over time and must be manually claimed
- **Conversion:** "Claim all" consolidates multiple PA types into native FLUX

### PA Credits System

**How PA credits work:**

- FluxNode operators earn PA credits based on node performance and parallel mining participation
- Credits represent claimable amounts of various Flux parallel assets
- Credits accumulate until manually claimed through the Fusion interface
- Different parallel chains may have different credit accumulation rates

**Where to view PA credits:**

1. Open ZelCore
2. Navigate to Fusion (or FusionX/SSP)
3. Look for "Parallel Assets" or "PA Claims" section
4. Available credits will be displayed by parallel chain type

### Parallel Asset Types Available for Claiming

Based on the Flux parallel mining ecosystem, PA rewards may include:

- **Flux-BASE** - Rewards on Base network
- **Flux-BSC** - Rewards on BNB Smart Chain
- **Flux-ETH** - Rewards on Ethereum mainnet
- **Flux-SOL** - Rewards on Solana
- **Flux-TRX** - Rewards on Tron
- **Flux-AVAX** - Rewards on Avalanche C-Chain
- **Native FLUX** - When using "claim all" function

## Prerequisites for Claiming PA Rewards

Before attempting to claim Parallel Assets, ensure you have the following:

### 1. Eligible FluxNode and Parallel Mining Participation

- [ ] You operate an active FluxNode (Cumulus, Nimbus, or Stratus)
- [ ] Your node has participated in parallel mining activities
- [ ] Your node status is CONFIRMED (not DOS or EXPIRED)
- [ ] PA credits have accumulated in your account

### 2. Gas Requirements for Claiming

**Critical:** Each claim transaction requires gas on the corresponding blockchain.

**Gas token needed by parallel asset type:**

- **Claiming Flux-BASE:** Requires ETH on Base network
- **Claiming Flux-BSC:** Requires BNB on BNB Smart Chain
- **Claiming Flux-ETH:** Requires ETH on Ethereum mainnet
- **Claiming Flux-SOL:** Requires SOL on Solana
- **Claiming Flux-TRX:** Requires TRX on Tron
- **Claiming Flux-AVAX:** Requires AVAX on Avalanche C-Chain
- **Claiming to native FLUX:** Requires FLUX for transaction fee

**Recommended gas amounts:**

- Base/BSC/SOL/TRX: $2-5 worth of native gas token
- Ethereum mainnet: $10-20 worth of ETH (higher gas costs)
- Avalanche: $5-10 worth of AVAX
- Native FLUX: 1-2 FLUX for fees

### 3. Wallet Setup

- [ ] Destination blockchain is activated in ZelCore
- [ ] Destination wallet has sufficient gas for claiming transaction
- [ ] You have access to your wallet's private keys or seed phrase
- [ ] Destination address is correct for the chosen blockchain

### 4. Whitelisting Requirements

Some addresses may require whitelisting before claiming:

- **Whitelist service:** Managed by runonflux snapshot/whitelist service
- **When required:** Not all addresses need whitelisting; typically for new claimants or specific addresses flagged for verification
- **How to check:** Attempt claim; error will indicate if whitelisting needed
- **Whitelisting process:** Contact Flux support through official Discord channels

## Step-by-Step: Claiming Parallel Assets

### Method 1: Claiming Individual Parallel Assets

This method allows you to claim specific PA types to their respective parallel chains.

**Step 1: Access Fusion PA Claims**

1. Open ZelCore
2. Navigate to **Fusion** (or FusionX/SSP)
3. Look for **Parallel Assets**, **PA Claims**, or similar section
4. Your available PA credits should be displayed

**Step 2: Select PA Type to Claim**

1. Review available PA credits by type:
   - Flux-BASE credits
   - Flux-BSC credits
   - Flux-ETH credits
   - Other parallel chain credits
2. Select the parallel asset you want to claim
3. Note the claimable amount

**Step 3: Verify Gas Requirements**

1. Check which gas token is needed for your selected parallel asset:
   - Claiming Flux-BASE → Need ETH on Base network
   - Claiming Flux-BSC → Need BNB on BSC
   - Claiming Flux-ETH → Need ETH on Ethereum mainnet
   - And so on for other chains
2. Verify you have sufficient gas in the corresponding wallet
3. If insufficient gas, acquire gas first before claiming (see Gas Acquisition section below)

**Step 4: Enter Claim Amount**

1. Enter the amount of PA credits you want to claim
2. You may claim partial amounts if you don't want to claim all credits at once
3. Review any warnings or messages displayed
4. Note: Some claims have minimum or maximum limits

**Step 5: Review Destination**

1. Verify the destination address shown
2. Should be your ZelCore wallet address for the corresponding blockchain
3. Double-check the blockchain network is correct
4. Take a screenshot for your records

**Step 6: Initiate Claim**

1. Click **Claim** or **Submit** button
2. Review claim details in confirmation screen
3. Verify all information is correct
4. Approve the transaction

**Step 7: Complete Transaction**

1. Transaction will be broadcast to the appropriate blockchain
2. Confirm the transaction in your wallet
3. Wait for blockchain confirmations
4. Check transaction hash on blockchain explorer

**Step 8: Verify Receipt**

1. Wait for confirmations (typically 5-15 minutes depending on blockchain)
2. Check your balance in ZelCore for the claimed parallel asset
3. Balance should update once transaction confirms
4. If balance doesn't update, try refreshing the app or manually syncing

**Expected timeframes:**

- Fast chains (BSC, SOL, TRX): 5-10 minutes
- Moderate chains (BASE, AVAX): 10-20 minutes
- Slower chains (ETH during high gas): 20-60 minutes

### Method 2: Using "Claim All" to Consolidate to Native FLUX

The "Claim All" function consolidates all PA credits into native Flux, regardless of which parallel chains the credits represent.

**Important:** "Claim All" converts ALL parallel asset credits into native FLUX on the Flux blockchain. You will NOT receive parallel assets on their respective chains.

**Step 1: Access PA Claims**

1. Open ZelCore
2. Navigate to Fusion
3. Find the Parallel Assets or PA Claims section
4. Look for **Claim All** button or option

**Step 2: Review Total Claimable Amount**

1. "Claim All" shows the total value of all PA credits
2. This will be converted to native FLUX
3. Review the FLUX amount you will receive
4. Note any conversion rates or fees displayed

**Step 3: Verify Native FLUX Gas**

1. Check that you have native FLUX for transaction fees
2. Recommended: 1-2 FLUX available for gas
3. Ensure Flux wallet in ZelCore is activated and synced

**Step 4: Confirm Claim All**

1. Click **Claim All**
2. Review confirmation screen
3. Understand that ALL PA credits will be consolidated to native FLUX
4. Verify destination is your native FLUX wallet address
5. Approve the transaction

**Step 5: Transaction Processing**

1. Transaction is broadcast to Flux blockchain
2. Confirm the transaction in your wallet
3. Save transaction hash for reference
4. Wait for blockchain confirmations

**Step 6: Verify Native FLUX Receipt**

1. After confirmations (typically 10-15 minutes), check native FLUX balance
2. Balance should reflect claimed amount minus transaction fee
3. PA credits should now show zero or be cleared
4. If balance doesn't update, refresh ZelCore or sync wallet

**Why use "Claim All":**

- **Simplicity:** One transaction instead of multiple claims
- **Gas savings:** One transaction fee instead of multiple
- **Native FLUX preference:** If you want to hold native FLUX rather than parallel assets
- **Convenience:** Don't need gas on multiple chains, only native FLUX

**Why NOT to use "Claim All":**

- **Prefer parallel assets:** If you want Flux-BSC, Flux-ETH, etc., claim individually
- **Chain diversity:** Want holdings on multiple blockchains
- **Specific use cases:** Need parallel assets for bridging or trading on specific chains

## Common Errors and Solutions

### Error: "Claiming Amount Exceeds Maximum Allowable"

**What this means:** You're attempting to claim more PA credits than the system allows in a single transaction, or your total claimable amount exceeds a threshold limit.

**Common causes:**

1. **Single claim limit exceeded:** Some parallel asset claims have maximum per-transaction limits
2. **Accumulated credits too high:** Long periods without claiming can result in amounts exceeding limits
3. **Whitelisting required:** Addresses with high claim amounts may need whitelisting first
4. **System-imposed caps:** Anti-fraud measures may limit claim sizes for security

**Solutions:**

**Solution 1: Claim smaller amounts**

1. Instead of claiming all available credits at once, claim in smaller batches
2. Try claiming 50% of available credits
3. If successful, wait a few minutes and claim another portion
4. Repeat until all credits are claimed

**Solution 2: Contact support for whitelisting**

1. If the error persists with smaller amounts, whitelisting may be required
2. Join official Flux Discord: https://discord.gg/runonflux
3. Navigate to appropriate support channel (#general-support or #parallel-assets)
4. Provide:
   - Your Flux wallet address
   - Screenshot of the error
   - Amount you're attempting to claim
   - How long credits have been accumulating
5. Support team will initiate whitelisting process if needed
6. Wait 24-48 hours for whitelist approval
7. Retry claim after confirmation

**Solution 3: Wait for snapshot/whitelist service update**

1. The runonflux snapshot/whitelist service periodically updates
2. Some claim limits are adjusted during service updates
3. Wait 24-48 hours and retry claim
4. Check Flux Discord for announcements about service updates

**Solution 4: Use "Claim All" instead**

1. If individual parallel asset claims are failing, try "Claim All"
2. "Claim All" may have different limit thresholds
3. Consolidates all PA credits to native FLUX
4. May bypass individual parallel asset claim limits

**Prevention:**

- Claim PA rewards regularly (weekly or monthly) instead of letting them accumulate
- Don't wait extended periods before claiming
- Smaller, frequent claims avoid hitting maximum limits
- Monitor PA credits and claim before thresholds are reached

### Error: "PA Claims Not Appearing" or "No Claimable PA Credits"

**What this means:** The Fusion interface shows no PA credits available, but you believe you should have claimable rewards.

**Common causes:**

1. **Node not participating in parallel mining:** Your FluxNode isn't enrolled in parallel mining activities
2. **Insufficient time for accumulation:** PA credits take time to accumulate
3. **Already claimed:** Credits were previously claimed and you're checking shortly after
4. **Node status issues:** DOS or EXPIRED status prevents PA accumulation
5. **ZelCore sync issue:** App not displaying current PA balance
6. **Eligibility requirements not met:** Not all nodes automatically earn PA rewards

**Solutions:**

**Solution 1: Verify node participation**

1. Check that your FluxNode is actively participating in parallel mining
2. Node status should be CONFIRMED in ZelCore FluxNodes app
3. Review Flux documentation on parallel mining enrollment requirements
4. Contact Flux support to verify your node's parallel mining status

**Solution 2: Check node status and health**

1. Open ZelCore FluxNodes app
2. Verify node status is CONFIRMED (not DOS or EXPIRED)
3. If DOS or EXPIRED:
   - Resolve node issues first
   - PA accumulation pauses during these states
   - Resume claiming after node is CONFIRMED again
4. Refer to [Troubleshooting Flux Node Status Issues](../../guides/troubleshooting-flux-node-status-issues/)

**Solution 3: Wait for accumulation period**

1. PA credits accumulate over time based on node activity
2. New nodes or recently resolved nodes may not show credits immediately
3. Typical accumulation period: 1-4 weeks depending on activity
4. Check back periodically

**Solution 4: Refresh ZelCore and sync**

1. Close and reopen ZelCore completely
2. Navigate to Settings → Sync or Refresh
3. Manually sync all wallets
4. Return to Fusion PA Claims section
5. Check if credits now appear

**Solution 5: Check claim history**

1. In Fusion, look for transaction history or claim history
2. Verify you haven't already claimed recently
3. After claiming, it takes time for new credits to accumulate
4. Recent claims will show zero balance temporarily

**Solution 6: Verify eligibility requirements**

1. Confirm your FluxNode tier is eligible for parallel mining
2. Check minimum node uptime requirements
3. Verify your node has been CONFIRMED for sufficient duration
4. Contact Flux support to confirm eligibility criteria

**Prevention:**

- Maintain node in CONFIRMED status consistently
- Monitor node health regularly
- Track claim history to know when you last claimed
- Join Flux Discord for announcements about PA distribution changes

### Error: "Insufficient Funds to Pay Transaction Fee"

**What this means:** You don't have enough of the native gas token for the blockchain where you're claiming PA rewards.

**Common scenarios:**

- Claiming Flux-BASE but have zero ETH on Base network
- Claiming Flux-BSC but have zero BNB
- Claiming Flux-ETH but insufficient ETH for Ethereum mainnet gas
- Using "Claim All" but have zero native FLUX for fees

**Solutions:**

**Solution 1: Acquire gas token for the claiming chain**

Identify which gas token you need:

**For Flux-BASE claims:**
1. Need ETH on Base network (NOT Ethereum mainnet)
2. Options to get Base ETH:
   - Bridge ETH from Ethereum mainnet to Base using bridge.base.org
   - Withdraw ETH to Base from Coinbase or exchange supporting Base
   - Use Fusion to swap another asset to ETH on Base
3. Recommended amount: $2-5 worth of ETH on Base

**For Flux-BSC claims:**
1. Need BNB on BNB Smart Chain
2. Options to get BNB:
   - Withdraw BNB from exchange (select "BEP-20" or "BSC" network)
   - Use Fusion to swap to BNB on BSC
   - Bridge from other chains
3. Recommended amount: $2-5 worth of BNB

**For Flux-ETH claims:**
1. Need ETH on Ethereum mainnet
2. Options to get ETH:
   - Withdraw ETH from any major exchange
   - Most accessible chain for gas acquisition
3. Recommended amount: $10-20 worth of ETH (due to higher mainnet gas)

**For other parallel chains:**
- Flux-SOL: Need SOL on Solana ($2-5 worth)
- Flux-TRX: Need TRX on Tron ($2-5 worth)
- Flux-AVAX: Need AVAX on Avalanche C-Chain ($5-10 worth)

**For "Claim All" to native FLUX:**
1. Need native FLUX for transaction fee
2. Options to get FLUX:
   - Trade on exchange and withdraw to ZelCore
   - Receive from another wallet
   - Keep small amount of node rewards unclaimed to use for gas
3. Recommended amount: 1-2 FLUX

**Solution 2: Use "Claim All" if you have native FLUX gas**

1. If you lack gas on multiple parallel chains but have native FLUX
2. Use "Claim All" to consolidate to native FLUX
3. Only requires FLUX for transaction fee
4. Simplifies gas requirement to single blockchain

**Prevention:**

- Maintain small amounts of gas tokens on all chains you use
- Before claiming, verify gas availability on destination chain
- Keep 1-2 FLUX in native wallet for claiming fees
- Acquire gas before PA credits accumulate significantly

### Issue: Whitelisting Required

**What this means:** Your address needs to be added to the whitelist maintained by the runonflux snapshot/whitelist service before you can claim PA rewards.

**Why whitelisting is required:**

- **Security measure:** Prevents fraudulent or erroneous claims
- **New claimants:** First-time PA claimants may need whitelisting
- **High claim amounts:** Large accumulated credits may trigger whitelist requirement
- **Address verification:** Ensures claiming addresses are legitimate FluxNode operator addresses
- **Anti-fraud:** Protects PA distribution system integrity

**How to know if whitelisting is needed:**

1. Attempt to claim PA rewards
2. Error message will explicitly state "address needs whitelisting" or similar
3. May also show "not authorized" or "address not recognized"
4. Transaction will fail to submit

**Whitelisting process:**

**Step 1: Verify your FluxNode address**

1. Confirm the address attempting to claim is your registered FluxNode address
2. Check in ZelCore FluxNodes app
3. Verify node is CONFIRMED status
4. Make note of your Flux wallet address

**Step 2: Contact Flux support**

1. Join official Flux Discord: https://discord.gg/runonflux
2. Navigate to #general-support or #parallel-assets channel (if available)
3. Post a clear support request (see template below)
4. Wait for Flux team or moderator response

**Support request template:**

```
ISSUE: Parallel Assets whitelisting needed for claiming

FluxNode Information:
- Node tier: [Cumulus/Nimbus/Stratus]
- Node status: CONFIRMED
- Flux wallet address: [your address]
- Node IP: [optional, if requested]

Claim Details:
- PA type attempting to claim: [Flux-BASE/Flux-BSC/etc. or "Claim All"]
- Amount attempting to claim: [amount]
- Error message received: [copy exact error]

Request: Please whitelist my address for PA claims.

Thank you!
```

**Step 3: Provide verification if requested**

Flux team may request:
- Proof of FluxNode ownership
- Transaction history showing node confirmation
- Additional address verification
- Screenshots of error messages

Provide requested information promptly.

**Step 4: Wait for whitelist update**

1. Whitelisting typically processed within 24-48 hours
2. May take up to 72 hours during high volume
3. You'll receive confirmation in Discord when complete
4. No email notification typically sent

**Step 5: Retry claim after confirmation**

1. Once notified of whitelist approval, retry your PA claim
2. Follow normal claiming process
3. Transaction should now succeed
4. If still failing, report back to support

**Prevention:**

- Claim PA rewards regularly to avoid accumulation requiring whitelisting
- Use the same registered FluxNode address consistently
- Maintain CONFIRMED node status
- Respond promptly to any Flux team verification requests

### Issue: "Claim All" Consolidates to Native FLUX (Not Parallel Assets)

**What this means:** This is intentional behavior, not an error. The "Claim All" function is designed to consolidate all PA credits into native FLUX, not distribute them as parallel assets.

**Why this confuses users:**

- **Expectation mismatch:** Users expect "Claim All" to claim all parallel assets to their respective chains
- **Not clearly labeled:** Interface may not explicitly state consolidation behavior
- **First-time users:** Those unfamiliar with PA claiming assume "Claim All" distributes to parallel chains
- **Different from individual claims:** Individual PA claims go to parallel chains, "Claim All" goes to native FLUX

**Understanding "Claim All" behavior:**

**What "Claim All" does:**
- Aggregates ALL PA credits regardless of parallel chain type
- Converts total value to native FLUX equivalent
- Sends consolidated FLUX to your native Flux wallet
- Single transaction on Flux blockchain
- Requires only native FLUX for gas

**What "Claim All" does NOT do:**
- Does NOT distribute Flux-BASE to Base network
- Does NOT distribute Flux-BSC to BSC
- Does NOT distribute Flux-ETH to Ethereum
- Does NOT send to multiple parallel chains
- Does NOT preserve parallel asset diversity

**When to use "Claim All":**

Use "Claim All" if you want:
- Native FLUX instead of parallel assets
- Simplicity (one transaction vs multiple)
- Gas savings (one fee instead of multiple chain fees)
- Don't need holdings on specific parallel chains
- Prefer to hold native Flux for node operations or trading

**When to use individual PA claims:**

Claim individually if you want:
- Specific parallel assets (Flux-BASE, Flux-BSC, etc.)
- Holdings distributed across multiple blockchains
- To use parallel assets for bridging or trading
- Chain diversity in your portfolio
- To utilize parallel assets on specific DeFi platforms

**Solutions if you wanted parallel assets but used "Claim All":**

**Option 1: Bridge native FLUX to parallel assets**

1. You now have native FLUX from "Claim All"
2. Use Fusion bridge to convert native FLUX to desired parallel asset
3. Follow [Flux Fusion Bridge Guide](../../guides/flux-fusion-bridge-guide/)
4. Bridge to Flux-BASE, Flux-BSC, Flux-ETH, or other parallel chains
5. Result: Same end goal, just two-step process

**Option 2: Accept native FLUX**

1. Keep native FLUX for node operations, fees, or trading
2. Use on centralized exchanges
3. Hold for native Flux blockchain activities
4. Stake or participate in Flux ecosystem with native FLUX

**Prevention:**

- Read descriptions carefully before clicking "Claim All"
- If you want parallel assets, use individual PA claim options
- Test with small amounts first if uncertain
- Ask in Flux Discord if unsure about claiming methods

## Gas Acquisition Strategies for PA Claims

Having appropriate gas tokens before claiming is critical. Here are strategies to acquire gas:

### Strategy 1: Acquire Gas Before Accumulating PA Credits

**Proactive approach:**

1. When setting up FluxNode, acquire small amounts of gas on all potential claim chains
2. Recommended baseline holdings:
   - Base: $2-5 worth of ETH
   - BSC: $2-5 worth of BNB
   - Ethereum: $10-20 worth of ETH
   - Solana: $2-5 worth of SOL
   - Tron: $2-5 worth of TRX
   - Avalanche: $5-10 worth of AVAX
   - Native FLUX: 1-2 FLUX
3. Always ready to claim whenever PA credits accumulate
4. No emergency gas acquisition needed

### Strategy 2: Exchange Withdrawals to Correct Networks

**Most reliable method:**

1. Identify which parallel asset you'll be claiming
2. Withdraw gas token from centralized exchange to that network
3. **Critical:** Select correct network during withdrawal
   - For Flux-BASE claims: Withdraw ETH, select "Base" network
   - For Flux-BSC claims: Withdraw BNB, select "BSC" or "BEP-20" network
   - For Flux-ETH claims: Withdraw ETH, select "Ethereum" or "ERC-20" network
   - And so on for other chains
4. Send to your ZelCore wallet address for that network
5. Wait for exchange withdrawal processing (5-30 minutes typically)
6. Verify receipt in ZelCore before attempting PA claim

### Strategy 3: Use Fusion to Acquire Gas

**If you have other assets:**

1. Open ZelCore Fusion
2. Select an asset you currently hold on the target chain
3. Swap small amount to the gas token you need
4. Example: Have USDT on BSC but need BNB? Swap $5 USDT to BNB
5. Use acquired gas for PA claim
6. Works if you already have some asset on the destination chain

### Strategy 4: Bridge Gas Tokens Between Chains

**For specific cases:**

**Example: Need ETH on Base but have ETH on Ethereum mainnet**

1. Visit official Base bridge: bridge.base.org
2. Connect your wallet
3. Bridge ETH from Ethereum mainnet to Base
4. Minimum amount: $2-5 worth recommended
5. Wait 5-10 minutes for bridge completion
6. Verify ETH arrived on Base network in ZelCore
7. Use for Flux-BASE PA claims

**Other chain bridges:**

- Most parallel chains have official bridges or partner bridges
- Can also use third-party bridges (at your own risk)
- Always verify bridge legitimacy before using

### Strategy 5: Use "Claim All" to Avoid Multi-Chain Gas Requirements

**Simplification approach:**

1. If managing gas on multiple chains is complex or costly
2. Use "Claim All" function instead of individual claims
3. Only requires native FLUX for transaction fee
4. Consolidates all PA credits to native FLUX
5. Avoids need for ETH on Base, BNB on BSC, etc.
6. Trade-off: Get native FLUX instead of parallel assets, but can bridge later if desired

## Fees and Costs for PA Claims

Understanding the costs associated with claiming PA rewards:

### Gas Fees by Blockchain

**Typical gas costs for PA claim transactions:**

**Low-cost chains:**
- **BSC:** $0.10 - $0.50 per claim
- **Solana:** $0.0001 - $0.01 per claim (negligible)
- **Tron:** $0.01 - $0.20 per claim
- **Base:** $0.01 - $0.10 per claim (Layer 2 benefits)

**Moderate-cost chains:**
- **Avalanche:** $0.50 - $2.00 per claim
- **Native FLUX:** $0.01 - $0.10 per claim

**High-cost chains:**
- **Ethereum mainnet:** $2 - $50+ per claim (highly variable based on network congestion)

**Factors affecting gas costs:**

1. **Network congestion:** Higher activity = higher fees (especially Ethereum)
2. **Time of day:** Peak hours (US business hours) often have higher gas
3. **Gas price settings:** Can adjust for faster/slower confirmation with higher/lower fees
4. **Transaction complexity:** Standard claims are simple transactions with predictable fees

### Claiming Fee Structure

**Are there PA claim fees beyond gas?**

- **No additional platform fees:** ZelCore doesn't charge extra for PA claiming
- **Only blockchain gas fees:** You pay standard transaction fees for the blockchain
- **No percentage taken:** Full PA credit amount goes to you minus only gas
- **Claim all vs individual:** Same gas model, but "Claim All" is one transaction vs multiple

### Cost Optimization Strategies

**Minimize costs when claiming:**

1. **Batch claims:** Let PA credits accumulate to reasonable amount before claiming
   - Avoids paying gas for tiny claim amounts
   - Balance with not exceeding maximum claim limits
   - Recommended: Claim monthly or when credits reach meaningful threshold

2. **Choose low-cost chains:** If you have PA credits on multiple chains:
   - Claim from low-cost chains (BSC, SOL, TRX) more frequently
   - Let high-cost chains (ETH) accumulate longer to justify gas
   - Use "Claim All" to consolidate to native FLUX (low gas)

3. **Time your Ethereum claims:** If claiming Flux-ETH:
   - Check gas prices on etherscan.io before claiming
   - Claim during low-gas periods (weekends, late night UTC)
   - Wait for network congestion to decrease
   - Consider using "Claim All" instead to avoid ETH mainnet gas

4. **Use "Claim All" for gas efficiency:**
   - Single transaction fee vs multiple claim transactions
   - Native FLUX gas is low compared to ETH mainnet
   - If you don't need specific parallel assets, most cost-effective option

5. **Maintain gas token holdings:**
   - Small upfront investment in gas tokens
   - Avoid emergency gas acquisition at unfavorable rates
   - Ready to claim during optimal gas periods

## Parallel Assets FAQ

### Can I claim PA rewards without gas on the claiming chain?

No, you must have the native gas token of the blockchain you're claiming to. If claiming Flux-BSC, you need BNB. If claiming Flux-ETH, you need ETH on Ethereum mainnet. The only exception is using "Claim All" which only requires native FLUX for gas and consolidates all PA credits to native FLUX.

### How often should I claim my PA rewards?

**Recommended claiming frequency:**

- **Monthly claims:** Good balance between gas costs and accumulation
- **When credits reach meaningful amounts:** Claim when value justifies gas costs
- **Before approaching maximum limits:** Don't wait so long that you hit "exceeds maximum allowable" errors

Avoid claiming too frequently (wastes gas on small amounts) or too infrequently (may require whitelisting or hit limits).

### What happens to my PA credits if I don't claim them?

PA credits remain claimable indefinitely as long as your FluxNode remains active and CONFIRMED. However:

- Very old accumulated credits may require whitelisting
- Large amounts may hit maximum claim limits
- Claim procedures may change over time with Flux updates
- Recommended: Claim at least quarterly to avoid complications

### Do all FluxNodes earn PA rewards?

Not automatically. PA rewards are earned by FluxNodes participating in parallel mining activities. Verify your node is enrolled in parallel mining and meets eligibility requirements. Check with Flux official documentation or Discord for current parallel mining participation requirements.

### Can I claim PA rewards if my node is in DOS or EXPIRED status?

PA accumulation typically pauses when nodes enter DOS or EXPIRED status. You must resolve your node status issues first:

1. Fix DOS or EXPIRED status (see [Troubleshooting Flux Node Status Issues](../../guides/troubleshooting-flux-node-status-issues/))
2. Return node to CONFIRMED status
3. Wait for PA credits to resume accumulating
4. Then claim when credits are available

Any credits accumulated while CONFIRMED should still be claimable after resolving node issues.

### What's the difference between claiming to parallel chains vs "Claim All"?

**Individual parallel asset claims:**
- Claims specific PA type (Flux-BASE, Flux-BSC, etc.)
- Sends to that parallel chain (Base, BSC, etc.)
- Requires gas on that specific blockchain
- Multiple transactions if claiming multiple types
- Maintains parallel asset diversity

**"Claim All" function:**
- Consolidates ALL PA credits to native FLUX
- Single transaction on Flux blockchain
- Only requires native FLUX for gas
- Simpler, lower overall gas costs
- Results in native FLUX only, not parallel assets

### Why would I want parallel assets instead of native FLUX?

**Reasons to claim parallel assets:**

- **Chain-specific usage:** Need Flux-BSC for BSC DeFi, Flux-ETH for Ethereum DeFi, etc.
- **Trading opportunities:** Different exchanges and liquidity on parallel chains
- **Diversification:** Holdings spread across multiple blockchains
- **Lower transaction costs:** Some parallel chains (BSC, SOL) have lower fees than bridging
- **Future flexibility:** Can bridge later, but starting with desired chain saves a step

### Can I claim PA rewards directly to an exchange?

**Not recommended and may not be supported:**

- PA claims are designed to go to your ZelCore wallet addresses
- Sending directly to exchanges may not be possible through the claim interface
- Risk of loss if claim address doesn't match exchange requirements
- Better approach: Claim to ZelCore, then transfer to exchange if needed

### How do I know which gas token I need for claiming?

Match the gas token to the blockchain:

- **Flux-BASE claims:** ETH on Base network
- **Flux-BSC claims:** BNB on BNB Smart Chain
- **Flux-ETH claims:** ETH on Ethereum mainnet
- **Flux-SOL claims:** SOL on Solana
- **Flux-TRX claims:** TRX on Tron
- **Flux-AVAX claims:** AVAX on Avalanche
- **"Claim All" to native FLUX:** Native FLUX for gas

Each blockchain uses its native token for transaction fees. You cannot use ETH to claim on BSC, or BNB to claim on Ethereum, etc.

### What if I claimed but the balance doesn't show in my wallet?

**Troubleshooting steps:**

1. **Wait for confirmations:** Blockchain confirmations take time (5-20 minutes)
2. **Check transaction hash on explorer:** Verify transaction succeeded on blockchain
3. **Refresh ZelCore:** Close and reopen app, manually sync wallets
4. **Verify correct network:** Ensure you're checking the right blockchain in ZelCore
5. **Check claim history:** Confirm claim transaction was actually submitted
6. **Contact support:** If after 1 hour balance still missing, report to Flux support with transaction hash

Most "missing" claims appear after proper sync or waiting for confirmations.

## Related Documentation

- [Flux Fusion Bridge Guide](../../guides/flux-fusion-bridge-guide/) - Bridging between Flux parallel chains
- [Troubleshooting Flux Node Status Issues](../../guides/troubleshooting-flux-node-status-issues/) - Maintaining CONFIRMED node status
- [Flux Nodes FAQ](../../faq/flux-nodes-faq/) - Common FluxNode questions
- [Parallel Assets FAQ](../../faq/parallel-assets-faq/) - Quick answers to PA claim questions

## When to Contact Support

### Contact Flux Support

Contact Flux support through official channels if:

- Whitelisting is required and you need your address added
- PA claims consistently fail with "exceeds maximum allowable" despite small amounts
- You believe you should have PA credits but none are showing
- Transaction succeeded on blockchain but balance never appeared in ZelCore
- Questions about parallel mining participation or eligibility
- Claim errors not covered in this guide
- Need clarification on PA distribution mechanics

**Flux Support:**
- **Discord:** https://discord.gg/runonflux (preferred for PA issues)
- **Channels:** #general-support or #parallel-assets (if available)
- **Flux website:** runonflux.io
- **Twitter:** @RunOnFlux

### Contact ZelCore Support

Contact ZelCore support if:

- ZelCore app crashes when accessing Fusion PA claims
- App not displaying PA claims section
- Wallet sync issues preventing claim visibility
- Technical issues with ZelCore interface

**ZelCore Support:**
- **Discord:** Official ZelCore Discord server
- **Email:** support@zel.network
- **Twitter:** @zelcore

## Summary and Best Practices

**Key takeaways:**

1. **PA rewards require manual claiming** through Fusion in ZelCore
2. **Gas is required** on the blockchain you're claiming to (or native FLUX for "Claim All")
3. **"Claim All" consolidates to native FLUX**, not to parallel chains
4. **Regular claiming prevents issues** with maximum limits and whitelisting
5. **Whitelisting may be required** for first-time claimants or large amounts

**Best practices:**

- Maintain small gas token holdings on all potential claim chains
- Claim PA rewards monthly or when credits reach meaningful amounts
- Don't let PA credits accumulate for extended periods
- Use "Claim All" for simplicity if you don't need specific parallel assets
- Keep your FluxNode in CONFIRMED status for consistent PA accumulation
- Verify gas requirements before attempting claims
- Document transaction hashes for all claims
- Contact Flux support early if whitelisting is needed

**Remember:** Parallel Assets claiming is a reward distribution system for FluxNode operators participating in parallel mining. Understanding the claim process, gas requirements, and "Claim All" behavior will help you successfully claim your PA rewards without complications.
