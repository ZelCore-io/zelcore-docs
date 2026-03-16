---
sidebar_position: 2
---

# Troubleshooting Fusion Swap Issues

## Overview

If your Fusion swap order is showing as "Hold", "Awaiting blockchain confirmation", stuck in processing, or you've sent funds but haven't received them on the destination chain, this guide will help you understand and resolve the issue.

Fusion swaps in ZelCore are powered by third-party exchange providers (ChangeHero, ChangeNow, SimpleSwap, Changelly). Most stuck swaps are due to provider-side processing issues, KYC requirements, or blockchain confirmation delays - not ZelCore itself. This guide will help you diagnose the problem and take the right steps to resolve it.

## Prerequisites

- Access to your ZelCore wallet
- Your Fusion swap order ID or transaction hash
- The email or contact information used for the swap (if any)
- Your source and destination wallet addresses

## Common Symptoms

You may be experiencing a Fusion swap issue if you notice:

- Swap order status showing "Hold" for extended periods
- Status stuck on "Awaiting blockchain confirmation" for hours or days
- Funds deducted from source chain but nothing received on destination chain
- Order showing "Finished" but no receiving transaction
- Swap requiring unexpected KYC (Know Your Customer) verification
- No status updates after initial transaction confirmation
- Provider showing different status than ZelCore displays

## Understanding Fusion Swap Statuses

### Normal Swap Flow

A successful swap typically goes through these stages:

1. **Waiting for deposit** - Provider waiting for your blockchain transaction
2. **Confirming** - Your transaction is being confirmed on the source blockchain
3. **Exchanging** - Provider is processing the swap
4. **Sending** - Funds being sent to your destination address
5. **Finished** - Swap completed successfully

### Problem Statuses

- **Hold**: Provider has flagged the transaction for review (security, compliance, or technical reasons)
- **Awaiting blockchain confirmation**: Stuck waiting for confirmations (may indicate blockchain congestion or provider node issues)
- **Finished (no receive tx)**: Provider marked as complete but funds not received
- **Failed**: Swap cancelled or rejected by provider

## Step-by-Step Troubleshooting

### Step 1: Identify Your Swap Provider

First, determine which third-party provider is handling your swap:

1. Open ZelCore
2. Navigate to **Fusion** (or **FusionX** / **SSP**)
3. Find your order in the swap history
4. Note the provider name: ChangeHero, ChangeNow, SimpleSwap, or Changelly
5. Record your **Order ID** (you'll need this for support)

**Why this matters:** Each provider has different processing times, policies, and support channels. You'll need to contact them directly for most issues.

### Step 2: Verify Blockchain Confirmations

Confirm your source transaction is actually on the blockchain:

1. **Copy your source transaction hash** from ZelCore
2. **Visit the appropriate blockchain explorer:**
   - **FLUX:** explorer.runonflux.io
   - **Ethereum (ETH):** etherscan.io
   - **BNB Smart Chain (BSC):** bscscan.com
   - **Solana (SOL):** solscan.io
   - **Tron (TRX):** tronscan.org
   - **Base:** basescan.org
   - **Avalanche (AVAX):** snowtrace.io
   - **Algorand (ALGO):** algoexplorer.io
3. **Paste your transaction hash** in the search bar
4. **Check confirmations:**
   - Most swaps require 5-20 confirmations depending on the blockchain
   - If confirmations are insufficient, wait for more blocks
   - If transaction failed or is pending, that's your issue

**Common blockchain issues:**
- Network congestion causing slow confirmations
- Insufficient gas/transaction fees (transaction stuck)
- Transaction rejected by network
- Wrong contract address or token type sent

### Step 3: Check Swap Time Expectations

Different swap routes have different processing times:

**Typical Processing Times:**

- **Fast blockchains (SOL, TRX, BSC):** 5-30 minutes after confirmations
- **Ethereum swaps:** 15-60 minutes (depends on gas fees and confirmations)
- **FLUX swaps:** 20-45 minutes
- **Cross-chain swaps:** 30 minutes to 2 hours
- **During high volume:** Can extend to 2-6 hours

**"Hold" status often requires:** 12-48 hours for provider review

If your swap is within these timeframes, wait a bit longer before escalating.

### Step 4: Contact the Provider Directly

Most stuck swaps must be resolved by the exchange provider, not ZelCore. Here's how to contact each provider:

#### ChangeHero Support

**Best method:** Email support with your order ID

1. Email: **support@changehero.io**
2. Subject line: "Order [YOUR_ORDER_ID] - Status Issue"
3. Include:
   - Order ID
   - Source transaction hash
   - Issue description ("Hold status", "Not received", etc.)
   - Your destination address

**Response time:** Usually 12-24 hours
**Website:** changehero.io/status (check order status)

#### ChangeNow Support

**Best method:** Live chat or email

1. **Live chat:** Go to changenow.io and use chat widget
2. **Email:** support@changenow.io
3. **Status check:** changenow.io/exchange/txs/[ORDER_ID]
4. Include all order details and transaction hashes

**Response time:** Live chat: 1-4 hours, Email: 12-24 hours

#### SimpleSwap Support

**Best method:** Email or Telegram

1. **Email:** support@simpleswap.io
2. **Telegram:** @SimpleSwapSupportBot
3. **Status check:** simpleswap.io/track
4. Provide order ID and describe the issue

**Response time:** Email: 12-48 hours, Telegram: 2-8 hours

#### Changelly Support

**Best method:** Support ticket system

1. Go to **changelly.com/support**
2. Submit a support ticket
3. Select category: "Exchange Issue"
4. Include order ID and transaction details

**Response time:** 24-48 hours

### Step 5: Handle KYC Requirements

Some swaps may be flagged for KYC (Know Your Customer) verification, especially:

- Large transaction amounts (typically $1,000+)
- First-time swaps with a provider
- Transactions from or to certain regions
- Security flags on blockchain addresses

**If KYC is required:**

1. **Provider will email you** (check spam folder)
2. **Follow their KYC process:**
   - Usually requires: government ID, selfie, proof of address
   - Submit documents through provider's portal
   - Wait for verification (typically 24-72 hours)
3. **After approval:** Swap will be processed normally
4. **If denied:** Provider will initiate refund to source address

**Important:** ZelCore does not control KYC requirements. These are mandated by the exchange providers based on their compliance policies.

### Step 6: Check for Provider Maintenance or Issues

Sometimes providers experience technical issues or maintenance:

1. **Check provider status pages:**
   - ChangeHero: changehero.io (announcements section)
   - ChangeNow: Check their Twitter @ChangeNOW_io
   - SimpleSwap: Check their Telegram community
   - Changelly: changelly.com (status updates)

2. **Check ZelCore official channels:**
   - Discord: Official ZelCore server
   - Twitter: @zelcore
   - Telegram: ZelCore community

**If provider maintenance is ongoing:** Wait for service restoration, then contact provider support if issue persists.

### Step 7: Document Everything

Keep records of your swap for support purposes:

**Essential information to save:**

- Order ID from ZelCore Fusion
- Source transaction hash (sending blockchain)
- Source wallet address (where you sent from)
- Destination wallet address (where you should receive)
- Screenshots of order status in ZelCore
- Screenshots of blockchain confirmations
- Any emails or communications from provider
- Dates and times of each status change

This documentation will speed up support resolution significantly.

## Common Issues and Specific Solutions

### Issue: Order Stuck on "Hold" for Days

**Cause:** Provider's automated security system flagged the transaction for manual review.

**Solution:**
1. Contact the provider immediately (don't wait longer)
2. Provide all transaction details
3. Be prepared to answer security questions or provide KYC
4. Ask for estimated resolution time
5. Follow up every 24 hours if no response

**Timeline:** Usually resolved within 48-72 hours after provider contact.

### Issue: "Awaiting Blockchain Confirmation" for Hours

**Cause:** Either blockchain congestion, insufficient confirmations, or provider node sync issues.

**Solution:**
1. Check your transaction on blockchain explorer
2. Verify it has sufficient confirmations (20+ is safe)
3. If confirmations are sufficient but status unchanged:
   - Wait 2-4 additional hours
   - Contact provider support with transaction hash
   - Provider may need to manually sync their nodes
4. If transaction has no confirmations after 2+ hours:
   - Check if transaction failed
   - Verify you used correct amount and address
   - May need to resend transaction

### Issue: Swap Shows "Finished" but No Funds Received

**Cause:** Provider marked as complete but payout transaction failed or wasn't broadcast.

**Solution:**
1. Check destination address on blockchain explorer
2. Verify the address matches what you provided
3. If no incoming transaction visible:
   - Contact provider immediately
   - Request the outgoing transaction hash
   - Provider must rebroadcast or investigate
4. If transaction exists but failed:
   - Provider typically will retry or refund
   - Contact them with explorer link showing failed tx

### Issue: Wrong Amount Received

**Cause:** Exchange rate changes, hidden fees, or provider error.

**Solution:**
1. Review the exchange rate locked at order creation
2. Check provider's fee structure (usually 0.5-2%)
3. Network fees on destination chain also deducted
4. If amount is significantly wrong (>5% from expected):
   - Contact provider with calculation showing discrepancy
   - Request explanation or adjustment
5. Small variations (1-3%) are typically due to rate slippage and are normal

### Issue: Funds Deducted but Order Not Created

**Cause:** Transaction sent to wrong address or order creation failed.

**Solution:**
1. Verify you sent to provider's deposit address (from ZelCore Fusion order)
2. Check if you have an order ID in ZelCore
3. If order exists in ZelCore:
   - Contact provider with order ID
   - Transaction should be linked to order
4. If no order exists but transaction sent:
   - This is critical - contact provider IMMEDIATELY
   - Provide transaction hash and intended order details
   - Provider may be able to manually create order

### Issue: Multiple Swaps Stuck with Same Provider

**Cause:** Provider experiencing widespread technical issues or your account flagged.

**Solution:**
1. Check if provider has announced maintenance or issues
2. Contact support mentioning all affected order IDs
3. May indicate account-level issue requiring KYC or verification
4. Consider using alternative provider for future swaps
5. Don't create new orders until existing ones are resolved

### Issue: "Contact Fusion Support" Error Message

**Cause:** Provider has encountered a technical issue, critical processing error, or requires manual intervention beyond standard "Hold" status.

**Solution:**

This error indicates the provider cannot automatically process your swap and needs direct communication.

**Immediate steps:**

1. **Do NOT create a new swap** - This won't resolve the issue and creates more confusion
2. **Screenshot the error** - Capture the exact message and order ID
3. **Note all transaction details:**
   - Order ID from ZelCore
   - Source transaction hash (blockchain confirmation)
   - Provider name (ChangeHero, ChangeNow, SimpleSwap, or Changelly)
   - Amount sent and expected to receive
   - Time when swap was initiated

**Contact the provider immediately:**

The error message specifically indicates provider-side intervention is required. ZelCore cannot resolve this - you must contact the exchange provider directly.

**For ChangeHero orders:**
- Email: support@changehero.io
- Subject: "URGENT: Order [ORDER_ID] - Contact Fusion Support Error"
- Include: All transaction details, screenshots, description of error
- Expected response: 12-24 hours

**For ChangeNow orders:**
- Use live chat: changenow.io (fastest)
- Or email: support@changenow.io
- Reference order ID immediately in chat
- Include screenshots and error message
- Expected response: Chat 1-4 hours, Email 12-24 hours

**For SimpleSwap orders:**
- Telegram: @SimpleSwapSupportBot (fastest)
- Email: support@simpleswap.io
- Mention "Contact Fusion Support" error explicitly
- Provide full order details
- Expected response: Telegram 2-8 hours, Email 12-48 hours

**For Changelly orders:**
- Submit ticket: changelly.com/support
- Category: "Exchange Issue - Critical"
- Detailed description with error message
- Attach screenshots
- Expected response: 24-48 hours

**What the provider needs to do:**

This error typically requires provider staff to:
- Manually review your transaction on blockchain
- Link your payment to the order in their system
- Investigate why automated processing failed
- Manually process the swap OR issue refund
- Provide explanation of what went wrong

**Common causes of this error:**

1. **Order creation failed but payment sent:**
   - Your blockchain transaction succeeded
   - Provider's order system failed to create order properly
   - Payment received but not linked to order
   - Requires manual order creation by provider

2. **Technical glitch during processing:**
   - Provider's automated systems encountered error
   - Swap stuck in intermediate state
   - Needs manual intervention to complete or refund

3. **Blockchain confirmation issue:**
   - Payment received but blockchain data incomplete
   - Provider cannot verify transaction details automatically
   - Manual verification needed

4. **Provider system maintenance side effect:**
   - Swap created during provider update or maintenance
   - System changes caused processing interruption
   - Staff needs to manually complete

**Timeline expectations:**

- **Initial provider response:** 12-48 hours
- **Issue investigation:** 1-3 business days
- **Resolution (swap completion or refund):** 3-7 business days
- **Complex cases:** Up to 10 business days

**If provider doesn't respond:**

After 48 hours with no response:
1. Follow up with the same provider through alternative channel
2. Reference your original support ticket or email
3. Escalate through provider's social media if available
4. After 5+ days, contact ZelCore support for guidance

**Important notes:**

- **Your funds are not lost** - Provider has received them and must either complete swap or refund
- **ZelCore cannot access provider systems** - Only the provider can resolve this
- **This is a provider issue, not ZelCore bug** - Error message correctly directs you to contact them
- **Document everything** - Save all communications, screenshots, and transaction hashes
- **Be patient but persistent** - Provider must resolve, but may take several days

**Prevention:**

While this error is rare and largely unavoidable:
- Avoid creating swaps during known provider maintenance windows
- Check provider status pages before large swaps
- Keep individual swap amounts moderate (reduces complexity)
- Save order confirmation details immediately after creation
- Consider test swap if route or provider is new to you

**Timeline:** Usually resolved within 3-5 business days after provider contact, though complex cases may take up to 10 days.

### Issue: Insufficient Gas/Fees on Target Chain

**Cause:** You don't have enough of the target chain's native token to pay transaction fees when receiving funds.

**Important:** This is one of the most common reasons for swap failures or delayed completions, especially for users new to cross-chain swaps.

**Understanding gas requirements:**

**What is gas?**

Each blockchain requires you to pay transaction fees in its native token:
- **Ethereum:** Requires ETH for gas
- **BNB Smart Chain:** Requires BNB for gas
- **Polygon:** Requires MATIC for gas
- **Avalanche:** Requires AVAX for gas
- **Arbitrum:** Requires ETH for gas
- **Optimism:** Requires ETH for gas
- **Base:** Requires ETH for gas
- **Fantom:** Requires FTM for gas
- **Solana:** Requires SOL for gas
- **Tron:** Requires TRX for gas/energy

**Why you need gas on the destination chain:**

Even though the swap provider sends you tokens, you need gas in your destination wallet to:
- Accept/process incoming transactions (some chains)
- Later move or swap those tokens
- Interact with DeFi protocols
- Send tokens to exchanges or other wallets

**Common gas-related swap issues:**

**1. Swap completes but you can't move received tokens:**

Most common scenario:
- Swap successfully sends tokens to your wallet
- Tokens appear in your balance
- But you have 0 ETH/BNB/MATIC/etc. for gas
- Cannot send tokens anywhere
- Tokens are "stuck" until you add gas

**Example:**
- You swap USDT (on Ethereum) to USDC (on Polygon)
- Receive USDC successfully to Polygon address
- But have 0 MATIC in wallet
- Cannot send USDC anywhere without MATIC for gas
- Need to acquire MATIC to unstuck the USDC

**2. Smart contract token swaps fail without gas:**

For ERC-20 and similar tokens:
- Receiving the token may require gas (contract interaction)
- Swap provider sends transaction
- Your wallet needs gas to process it
- If insufficient gas, transaction may fail
- Provider sees failure, may retry or refund

**3. Gas price volatility during swap:**

- Gas fees fluctuate based on network congestion
- Swap created during low gas
- Payout happens during high gas
- Provider's gas estimation may be insufficient
- Can delay or fail transaction

**How to prevent gas issues:**

**Before creating a swap:**

**1. Research target chain gas requirements:**

Typical amounts needed (as of current rates):
- **Ethereum:** $5-20 worth of ETH (can be very high during congestion)
- **BNB Smart Chain:** $0.50-2 worth of BNB
- **Polygon:** $0.10-0.50 worth of MATIC
- **Avalanche:** $0.50-2 worth of AVAX
- **Arbitrum/Optimism/Base:** $0.50-3 worth of ETH (L2s are cheaper than mainnet)
- **Fantom:** $0.10-1 worth of FTM
- **Solana:** $0.01-0.10 worth of SOL
- **Tron:** $0.10-1 worth of TRX

**2. Acquire gas BEFORE swapping:**

Best practice workflow:

1. **Check your destination wallet:** Do you already have gas tokens?
2. **If not, acquire gas first:**
   - Option A: Buy small amount of native token on exchange, send to wallet
   - Option B: Use Fusion to swap small amount to native token first
   - Option C: Use faucets (for testnets) or on-ramps
3. **Verify gas is in wallet** before executing main swap
4. **Then proceed with your main swap**

**Example workflow:**
- Want to swap 1000 USDT (Ethereum) to USDC (Polygon)
- First, swap $5 of USDT to MATIC (send to your Polygon address)
- Wait for MATIC to arrive and confirm
- Then swap remaining USDT to USDC (Polygon)
- Now you have MATIC gas to move the USDC later

**3. Keep gas buffer in each chain you use:**

Long-term strategy:
- Maintain small balance of native token on each chain
- $5-10 worth is usually sufficient for multiple transactions
- Replenish when it gets low
- Treat it as operational cost of multi-chain usage

**What to do if you're already stuck (have tokens but no gas):**

**Solution 1: Send gas from another wallet/exchange:**

If you have native token elsewhere:
1. Buy or transfer native token on exchange (ETH, BNB, MATIC, etc.)
2. Withdraw to your wallet address on that chain
3. Wait for confirmation
4. Now you have gas to move your stuck tokens

**Solution 2: Use a gas faucet (for some chains):**

Some chains offer small free amounts:
- Search for "[chain name] faucet" (e.g., "Polygon faucet")
- Usually very small amounts (enough for 1-2 transactions)
- May require social media verification
- Not available for all chains

**Solution 3: Use cross-chain gas services:**

Some services send gas cross-chain:
- LayerZero Gas Service
- Other cross-chain bridges with gas airdrop features
- Usually charge fee but convenient

**Solution 4: Ask in community for small gas donation:**

Last resort:
- Post in blockchain community (Discord, Telegram, Reddit)
- Explain you're stuck without gas
- Provide your wallet address
- Someone may send small amount
- Offer to pay back once unstuck

**Swap-specific considerations:**

**Swapping TO expensive gas chains (Ethereum mainnet):**

Extra caution needed:
- Ethereum gas is most expensive
- Make sure destination address already has ETH
- Or swap small amount to ETH first
- Consider using L2s (Arbitrum, Optimism, Base) instead when possible

**Swapping large amounts:**

For high-value swaps:
- Ensure more gas than usual (higher priority fees)
- Network congestion can spike fees
- Better to have too much gas buffer than too little

**Swapping during network congestion:**

If chain is congested:
- Gas prices are higher
- Transactions take longer
- Provider may need higher gas to complete payout
- Consider waiting for lower congestion
- Or ensure extra gas buffer

**Testing with small amounts:**

Best practice for new chains:
1. **Test swap first:** Small amount to new chain
2. **Verify gas requirements:** See actual fees
3. **Ensure you have enough gas** for future transactions
4. **Then do larger swap** with confidence

**Provider-specific gas handling:**

**ChangeHero, ChangeNow, SimpleSwap, Changelly:**
- Provider pays gas for outgoing transaction (to send you tokens)
- Gas is included in their fee/spread
- You don't pay gas for receiving
- BUT you still need gas in wallet to later move tokens

**What providers DON'T cover:**
- Gas for you to later move the tokens
- Gas for smart contract interactions
- Future transaction fees

**Prevention checklist before any swap:**

- [ ] Researched destination chain gas requirements
- [ ] Checked current gas prices on destination chain
- [ ] Verified I have sufficient gas token in destination wallet
- [ ] Or planned to acquire gas first via separate swap
- [ ] Confirmed destination wallet address is correct
- [ ] Understand gas token for that chain (ETH, BNB, MATIC, etc.)

**Special case: First time using a chain:**

If this is your first time receiving tokens on a specific chain:

1. **Do gas swap first (small amount):**
   - Swap $5-10 worth to native token
   - Send to destination address
   - Wait for confirmation
   - Verify you can see it in wallet

2. **Then do main swap:**
   - Now you have gas for operations
   - Less stressful than being stuck

**Gas estimation resources:**

**Check current gas prices:**
- **Ethereum:** https://etherscan.io/gastracker
- **BNB Smart Chain:** https://bscscan.com/gastracker
- **Polygon:** https://polygonscan.com/gastracker
- **Avalanche:** https://snowtrace.io/gastracker
- **Arbitrum:** https://arbiscan.io/gastracker

**Gas calculators:**
- Most blockchain explorers have gas trackers
- Show current "fast/standard/slow" prices
- Estimate cost for common operations

**Common misconceptions:**

**Myth 1: "The swap includes gas for me to use tokens later"**
- **Reality:** No. Provider pays gas to send TO you, but you need gas for YOUR future transactions.

**Myth 2: "I don't need gas just to receive tokens"**
- **Partial truth:** Receiving is usually free, but you'll immediately need gas to do anything with them.

**Myth 3: "I can swap later to get gas"**
- **Problem:** If you have 0 gas, you can't initiate a swap FROM those tokens (need gas to send them).

**Myth 4: "Small amounts don't need gas"**
- **Reality:** Every transaction needs gas, regardless of amount.

**Related scenarios:**

**Scenario A: "My swap finished but tokens not showing"**
- Check if destination chain requires gas to activate account (some chains)
- Verify transaction on blockchain explorer
- May need minimum balance to create account (SOL, TRX have minimums)

**Scenario B: "Swap pending on sending but I'm receiving to new chain"**
- Make sure destination wallet has gas ready
- Reduces friction when swap completes
- Won't be stuck immediately after receiving

**Best long-term practice:**

**Maintain gas reserves across chains you use:**

Set up "gas fund" for each blockchain:
- Ethereum: $20-50 ETH
- BNB Smart Chain: $5-10 BNB
- Polygon: $2-5 MATIC
- Avalanche: $5-10 AVAX
- Arbitrum/Optimism/Base: $5-10 ETH
- Others: $2-10 depending on usage

**Replenish when low:**
- Set reminders to check monthly
- Add gas before it hits zero
- Prevents being stuck

**Track gas spending:**
- Note how much gas typical operations cost
- Helps estimate buffer needed
- Adjust reserves based on actual usage

**Key takeaway:**

**Always have gas on the destination chain BEFORE swapping TO that chain.** This is not optional - it's essential for managing your crypto effectively.

**Related:**
- Understanding Blockchain Confirmations
- Multi-Chain Wallet Management

---

## Prevention Tips

To minimize Fusion swap issues in the future:

- **Ensure gas on destination chain:** Always have native token (ETH, BNB, MATIC, etc.) on the target chain BEFORE swapping - see "Insufficient Gas/Fees on Target Chain" section above
- **Use stable networks:** Avoid swapping during known network congestion
- **Double-check addresses:** Verify destination address before confirming
- **Start with small amounts:** Test swaps with smaller amounts first
- **Allow sufficient gas:** Use recommended gas fees for source transactions
- **Save order details immediately:** Screenshot or record order ID right away
- **Check provider status:** Look for maintenance announcements before swapping
- **Be aware of limits:** Large swaps more likely to trigger KYC
- **Use established providers:** Stick to ChangeHero, ChangeNow, SimpleSwap, Changelly
- **Monitor blockchain confirmations:** Check explorer for confirmation status
- **Keep ZelCore updated:** Latest version may have improved provider integrations

## When to Contact ZelCore Support

Contact ZelCore support (not provider support) if:

- You cannot determine which provider handled your swap
- ZelCore app is not showing your order at all
- You suspect a ZelCore app bug (not provider issue)
- Provider support is unresponsive for 5+ days
- You need help interpreting provider responses
- Multiple users reporting same issue (possible systemic problem)

**Important:** For stuck swaps, orders on "Hold", or missing funds, you MUST contact the provider first. ZelCore cannot access provider systems or expedite their processing.

**ZelCore Support Resources:**
- Discord: Official ZelCore Discord server (best for community help)
- Email: support@zel.network
- Twitter: @zelcore (for status updates and announcements)

## Understanding Fusion Architecture

**How Fusion works:**

ZelCore Fusion is an aggregator that connects you to third-party exchange providers. When you create a swap:

1. ZelCore shows you rates from multiple providers
2. You select the best rate
3. ZelCore creates an order with that provider on your behalf
4. You send crypto to the provider's deposit address
5. Provider processes the exchange
6. Provider sends swapped crypto to your destination address
7. ZelCore displays the status updates from provider

**Key point:** ZelCore does not hold, process, or control your funds during a swap. The third-party provider is responsible for the actual exchange, including KYC, fraud prevention, and payout processing.

**This means:**
- Provider policies apply (not ZelCore policies)
- Provider support must resolve most issues
- KYC requirements come from providers
- Processing times depend on provider operations
- ZelCore cannot override provider holds or decisions

## Refunds and Failed Swaps

**When can you get a refund?**

- Swap cancelled before processing
- KYC verification failed or declined
- Technical issue prevents swap completion
- Provider determines swap cannot be completed

**Refund process:**

1. Provider initiates refund to source address
2. Refund typically processed within 24-72 hours
3. May be subject to blockchain network fees
4. You receive crypto in original currency (not swapped)
5. Provider will notify you by email

**If refund doesn't arrive:**

1. Check source address on blockchain explorer
2. Verify provider said refund was sent
3. Request refund transaction hash from provider
4. Contact provider if refund transaction missing or failed

## Related Documentation

- [Using ZelCore Fusion for Crypto Swaps](../../features/overview/)
- Understanding Blockchain Confirmations
- [ZelCore Security Best Practices](../../security/best-practices/)
- [Fusion FAQ](../../faq/fusion-faq/)

## Technical Background

**Why do swaps get stuck?**

Fusion swaps involve multiple steps across different blockchains:

1. **Source blockchain confirmation** (5-20 blocks typically)
2. **Provider receives and verifies** (automated system checks)
3. **Compliance screening** (automated fraud/AML checks)
4. **Exchange execution** (provider performs the swap)
5. **Destination blockchain payout** (provider broadcasts transaction)

Any of these steps can experience delays:
- Blockchain congestion affects confirmations
- Large amounts trigger manual review
- Provider liquidity issues delay execution
- Destination chain fees or node issues delay payout
- Compliance flags require human intervention

**Is my crypto safe during issues?**

Generally yes, but the risk profile differs from using ZelCore's wallet directly:

- Once sent to provider, they control the funds (not you)
- Reputable providers (ChangeHero, ChangeNow, etc.) are established services
- Funds are eventually processed, refunded, or require KYC
- Very few swaps result in permanent loss with established providers
- Always verify you're using legitimate provider addresses from ZelCore

**Best practice:** Only swap amounts you're comfortable having in a third party's control for 24-48 hours during processing.
