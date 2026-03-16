---
sidebar_position: 2
---

# Fusion FAQ

## What does "Hold" status mean for my Fusion swap?

**Answer:**

"Hold" status means the exchange provider (ChangeHero, ChangeNow, SimpleSwap, or Changelly) has flagged your swap order for manual review. This is a security and compliance measure used by providers, not a ZelCore issue.

**Common reasons for "Hold" status:**

- Large transaction amounts (typically $1,000+)
- First-time swap with that provider
- Security flags on source or destination addresses
- Compliance screening requirements
- Unusual swap patterns or routes
- Provider's automated fraud detection triggered

**What happens during "Hold":**

The provider's compliance team manually reviews your transaction. This process typically takes 12-48 hours. They may:
- Request KYC (Know Your Customer) verification
- Ask for additional transaction details
- Simply approve after review
- In rare cases, refund if they cannot process

**What to do:**

1. Wait 12-24 hours for provider to contact you (check email and spam folder)
2. If no contact after 24 hours, reach out to the provider directly with your order ID
3. Be prepared to provide KYC documents if requested
4. Do not create additional swap orders until this one resolves

**Your funds are safe** - the provider has received them and will either complete the swap, request verification, or refund.

**Related:**
- [Comprehensive Troubleshooting Guide for Fusion Swaps](../../guides/troubleshooting-fusion-swap-issues/)

---

## My swap is stuck on "Awaiting blockchain confirmation" for hours. What's wrong?

**Answer:**

This status means either your source transaction needs more blockchain confirmations, or the provider's nodes are having sync issues.

**Quick diagnosis:**

1. **Check your transaction on a blockchain explorer:**
   - Copy your transaction hash from ZelCore
   - Visit the appropriate explorer (etherscan.io for ETH, bscscan.com for BSC, etc.)
   - Check the confirmation count

2. **Confirmation requirements:**
   - Most providers require 5-20 confirmations
   - During network congestion, confirmations take longer
   - Some blockchains (Bitcoin) can take 30-60 minutes for sufficient confirmations

**If confirmations are sufficient but status unchanged:**

1. Wait 2-4 additional hours (provider nodes may be syncing)
2. If still stuck after 4+ hours, contact the provider support directly
3. Provide your order ID and transaction hash
4. Provider may need to manually refresh their node sync

**Common scenarios:**

- **ETH swaps during high gas:** Can take 30-90 minutes for confirmations
- **FLUX swaps:** Typically need 10-15 confirmations (15-25 minutes)
- **BSC swaps:** Usually fast, 5-10 confirmations (1-3 minutes)
- **SOL/TRX swaps:** Very fast confirmations, if stuck it's provider-side

**Related:**
- [Troubleshooting Fusion Swap Issues](../../guides/troubleshooting-fusion-swap-issues/)

---

## I sent crypto for a swap but didn't receive anything on the destination chain. What should I do?

**Answer:**

Don't panic - this is the most common Fusion issue and almost always gets resolved. Your funds are with the exchange provider, not lost.

**Immediate steps:**

1. **Verify your source transaction went through:**
   - Check blockchain explorer with your transaction hash
   - Confirm it has sufficient confirmations (10+ is safe)
   - Make sure the transaction succeeded (not failed)

2. **Check the swap status in ZelCore:**
   - Open Fusion history
   - Find your order
   - Note the exact status message
   - Record the order ID

3. **Check destination address:**
   - Verify on blockchain explorer that nothing has arrived
   - Make sure you're checking the correct address and blockchain
   - Some tokens take time to appear in wallet interface

4. **Determine expected processing time:**
   - Normal swaps: 15-60 minutes after confirmations
   - Cross-chain swaps: 30 minutes to 2 hours
   - "Hold" status: 12-48 hours
   - During high volume: Up to 6 hours

**If outside normal timeframes:**

1. **Contact the provider directly** (ChangeHero, ChangeNow, SimpleSwap, or Changelly)
2. Provide:
   - Order ID
   - Source transaction hash
   - Destination address
   - How long you've been waiting
3. **Provider support contacts** are listed in the troubleshooting guide
4. Do not create duplicate orders - wait for resolution

**Important:** Contact the swap provider, not ZelCore support initially. The provider controls the funds and must resolve payout issues.

**Related:**
- [Troubleshooting Fusion Swap Issues](../../guides/troubleshooting-fusion-swap-issues/)

---

## Which chains are most commonly affected by Fusion swap issues?

**Answer:**

Based on support tickets, the most frequently affected chains in Fusion swaps are:

**Most common source/destination chains:**

1. **FLUX** - Popular for both buying and selling
2. **BNB Smart Chain (BSC)** - High volume, generally reliable but can have delays
3. **Ethereum (ETH)** - Can be slow during high gas periods
4. **Solana (SOL)** - Usually fast but occasionally provider liquidity issues
5. **Tron (TRX)** - Generally fast, occasional holds for compliance
6. **Base** - Newer chain, sometimes slower provider support
7. **Avalanche (AVAX)** - Moderate volume, occasional delays
8. **Algorand (ALGO)** - Less common, may have longer processing times

**Why certain chains have more issues:**

- **High volume chains (FLUX, BSC, ETH)** generate more tickets simply due to usage
- **Ethereum swaps** are more expensive and slower during high gas periods
- **Newer chains (Base)** may have less mature provider integration
- **Less common chains (ALGO)** may have limited provider liquidity
- **Large FLUX swaps** are common and more likely to trigger KYC

**Chain-specific tips:**

- **ETH swaps:** Expect longer times during high gas, use fast gas fees
- **FLUX swaps:** Usually smooth, but larger amounts ($1,000+) often flagged
- **BSC swaps:** Generally fastest and most reliable
- **SOL swaps:** Check provider has SOL liquidity before swapping large amounts
- **Less common chains:** Start with small test swaps first

**Related:**
- [Troubleshooting Fusion Swap Issues](../../guides/troubleshooting-fusion-swap-issues/)

---

## How do I contact the exchange provider handling my swap?

**Answer:**

You must contact the specific provider handling your swap, not ZelCore. Here's how to identify and contact them:

**Step 1: Identify your provider**

1. Open ZelCore
2. Go to Fusion (or FusionX/SSP)
3. Find your swap order in history
4. The provider name is displayed (ChangeHero, ChangeNow, SimpleSwap, or Changelly)
5. Record your Order ID

**Step 2: Contact the provider**

**ChangeHero:**
- Email: support@changehero.io
- Status page: changehero.io/status
- Response time: 12-24 hours
- Best for: Email with order ID

**ChangeNow:**
- Live chat: changenow.io (chat widget)
- Email: support@changenow.io
- Status: changenow.io/exchange/txs/[ORDER_ID]
- Response time: Chat 1-4 hours, Email 12-24 hours
- Best for: Live chat for urgent issues

**SimpleSwap:**
- Email: support@simpleswap.io
- Telegram: @SimpleSwapSupportBot
- Status: simpleswap.io/track
- Response time: Email 12-48 hours, Telegram 2-8 hours
- Best for: Telegram for faster response

**Changelly:**
- Support portal: changelly.com/support
- Ticket system: Submit ticket with category "Exchange Issue"
- Response time: 24-48 hours
- Best for: Complex issues needing detailed explanation

**What to include in your message:**

- Order ID from ZelCore
- Source transaction hash
- Clear description of issue
- How long you've been waiting
- Screenshots if helpful
- Your destination address

**Related:**
- [Troubleshooting Fusion Swap Issues](../../guides/troubleshooting-fusion-swap-issues/)

---

## Will I need to provide KYC for my Fusion swap?

**Answer:**

**Most swaps do not require KYC**, but certain swaps may be flagged for Know Your Customer (KYC) verification by the exchange provider.

**When KYC is typically required:**

- Transaction amounts over $1,000 (threshold varies by provider)
- First-time swap with a specific provider
- Swaps from or to certain geographic regions
- Security flags on wallet addresses involved
- Unusual swap patterns or amounts
- Provider's automated compliance screening triggers
- Certain cryptocurrency pairs considered higher risk

**What KYC involves:**

Providers typically request:
- Government-issued photo ID (passport, driver's license)
- Selfie photo (to match ID)
- Proof of address (utility bill, bank statement)
- Sometimes: Source of funds explanation

**KYC process:**

1. Provider emails you requesting KYC (check spam folder)
2. You submit documents through their secure portal
3. Provider reviews (typically 24-72 hours)
4. If approved: Swap proceeds normally
5. If declined: Provider issues refund to source address

**Important notes:**

- KYC requirements come from the **provider**, not ZelCore
- ZelCore has no control over which swaps require KYC
- Different providers have different KYC thresholds
- KYC is for compliance with financial regulations
- Your information goes to the provider, not ZelCore
- Legitimate providers protect your KYC data securely

**To reduce KYC likelihood:**

- Keep individual swap amounts under $500-$1,000
- Use providers you've successfully swapped with before
- Avoid unusual hour swaps or repeated large transactions
- Ensure source wallet has transaction history (not brand new)

**Related:**
- [Troubleshooting Fusion Swap Issues](../../guides/troubleshooting-fusion-swap-issues/)

---

## My swap shows "Finished" but I didn't receive the crypto. What happened?

**Answer:**

This means the provider marked the order as complete on their end, but either the payout transaction failed or wasn't properly broadcast to the blockchain.

**Steps to resolve:**

1. **Verify on blockchain explorer first:**
   - Copy your destination address
   - Check on the appropriate blockchain explorer
   - Search for recent incoming transactions
   - Verify you're checking the correct blockchain

2. **Common scenarios:**

   **Scenario A: Transaction exists but failed**
   - You'll see a failed transaction on explorer
   - Provider's payout transaction didn't go through
   - Usually due to gas issues or network problems
   - Provider will need to rebroadcast

   **Scenario B: No transaction visible at all**
   - Nothing shows up on explorer
   - Payout was never broadcast
   - Provider's system marked it complete prematurely
   - Provider must investigate and send payout

   **Scenario C: Transaction pending**
   - Shows on explorer but unconfirmed
   - Wait for confirmations
   - If pending for hours, may be stuck (low gas)
   - Provider may need to speed up transaction

3. **Contact provider immediately:**
   - Explain swap shows "Finished" but no funds received
   - Provide order ID and destination address
   - Ask for the outgoing transaction hash
   - Request they investigate the payout

4. **Provider should:**
   - Verify payout was actually sent
   - Provide transaction hash if it exists
   - Rebroadcast if transaction failed
   - Manually process payout if never sent
   - Timeline: Usually resolved within 24-48 hours

**This issue is always on the provider side** - they must correct the payout problem.

**Related:**
- [Troubleshooting Fusion Swap Issues](../../guides/troubleshooting-fusion-swap-issues/)

---

## How long should a Fusion swap normally take?

**Answer:**

Swap timing depends on the blockchains involved and the provider's processing speed.

**Typical timeframes (after sufficient confirmations):**

**Fast swaps (5-30 minutes):**
- BSC &lt;&gt; TRX
- SOL &lt;&gt; BSC
- TRX &lt;&gt; any
- Same-chain token swaps

**Moderate swaps (30-60 minutes):**
- FLUX &lt;&gt; BSC
- FLUX &lt;&gt; ETH
- BSC &lt;&gt; ETH
- Most AVAX swaps
- ALGO swaps

**Slower swaps (1-2 hours):**
- ETH-involved swaps during high gas
- FLUX &lt;&gt; SOL
- Base-involved swaps
- Less common chain pairs
- During high provider volume

**Extended processing (2-6 hours):**
- Large amounts triggering additional checks
- During provider high volume periods
- New or less common token pairs
- Provider liquidity issues

**Orders requiring review (12-48 hours):**
- "Hold" status swaps
- KYC-required transactions
- Amounts over provider thresholds
- Compliance flagged orders

**Factors affecting speed:**

1. **Blockchain confirmation time:**
   - Fast: SOL, TRX, BSC (seconds to minutes)
   - Moderate: FLUX, AVAX, ALGO (5-15 minutes)
   - Slower: ETH during high gas (15-60 minutes)

2. **Provider processing:**
   - Automated orders: 5-15 minutes
   - Manual review: 12-48 hours

3. **Network conditions:**
   - Congestion slows confirmations
   - High gas prices on ETH impact timing

4. **Provider liquidity:**
   - Popular pairs are faster
   - Uncommon pairs may take longer

**When to be concerned:**

- Still processing after 6 hours (normal swap)
- "Hold" status longer than 48 hours without contact
- "Awaiting confirmation" for hours with 20+ confirmations
- Any status unchanged for 24+ hours

**Related:**
- [Troubleshooting Fusion Swap Issues](../../guides/troubleshooting-fusion-swap-issues/)

---

## What's the difference between ZelCore Fusion, FusionX, and SSP?

**Answer:**

These are all ZelCore's swap aggregation features - they use the same underlying third-party exchange providers but may have different interfaces or feature sets.

**Fusion:**
- Original swap feature in ZelCore
- Aggregates rates from multiple exchange providers
- Shows you the best rate available
- Supports most major blockchains
- Available on desktop and mobile

**FusionX:**
- Enhanced version of Fusion
- May include additional providers or features
- Same core functionality as Fusion
- Sometimes used for specific swap routes
- Same troubleshooting steps apply

**SSP (Smart Swap Protocol):**
- Advanced swap aggregation
- May optimize for specific factors (speed, price, reliability)
- Same underlying providers (ChangeHero, ChangeNow, etc.)
- Troubleshooting process is identical

**Key point:** All three use the same third-party exchange providers. Whether your swap is labeled Fusion, FusionX, or SSP:

- You still get an order ID
- Providers still handle the actual swap
- Same statuses appear ("Hold", "Finished", etc.)
- Contact the provider (not ZelCore) for stuck swaps
- Same troubleshooting steps apply

**For users:** The specific name doesn't matter for troubleshooting. Focus on:
1. Which provider is handling your swap
2. Your order ID
3. Following provider-specific support steps

**Related:**
- [Troubleshooting Fusion Swap Issues](../../guides/troubleshooting-fusion-swap-issues/)

---

## Can ZelCore support help if my Fusion swap is stuck?

**Answer:**

**Short answer:** For most stuck swaps, you must contact the exchange provider directly. ZelCore support has limited ability to help with provider-side issues.

**What ZelCore support CAN help with:**

- Issues with the ZelCore app itself (crashes, bugs, display problems)
- Cannot find your order ID or swap history
- ZelCore not showing order status updates
- App not connecting to provider APIs
- Suspected ZelCore software issues
- General guidance on the Fusion feature

**What ZelCore support CANNOT help with:**

- Expediting provider processing or "Hold" status
- Accessing provider systems to check order status
- Forcing providers to process KYC faster
- Overriding provider compliance decisions
- Directly contacting providers on your behalf
- Refunding or completing swaps (providers control funds)

**Why contact the provider directly:**

The third-party exchange providers (ChangeHero, ChangeNow, SimpleSwap, Changelly) operate independently:
- They control your funds during the swap
- They process the actual exchange
- They make KYC and compliance decisions
- They control payout timing
- Only they can resolve processing issues

**Correct contact flow:**

1. **First:** Contact the exchange provider (ChangeHero, ChangeNow, etc.)
2. **Provide:** Order ID, transaction hash, issue description
3. **Wait:** 24-48 hours for provider response
4. **If unresolved:** Follow up with provider
5. **After 5+ days of no provider response:** Contact ZelCore support for guidance

**When to contact ZelCore support:**

- Provider unresponsive for 5+ business days
- You cannot determine which provider handled your swap
- ZelCore app issues preventing access to order information
- You need help interpreting provider responses
- You suspect a widespread ZelCore-related issue

**Contact ZelCore:**
- Discord: Official ZelCore Discord server
- Email: support@zel.network
- Twitter: @zelcore (for announcements)

**Related:**
- [Troubleshooting Fusion Swap Issues](../../guides/troubleshooting-fusion-swap-issues/)

---

## Are my funds safe when a Fusion swap is stuck or on "Hold"?

**Answer:**

**Generally yes**, but it's important to understand the different stages of fund custody:

**Before sending to provider:**
- Funds are in your ZelCore wallet
- You have full control via your private keys
- 100% safe (as safe as your key security)

**After sending to provider (swap processing):**
- Provider controls the funds (not you, not ZelCore)
- You're trusting the exchange provider's security
- Reputable providers have good track records
- Funds are typically processed, refunded, or held for KYC

**During "Hold" status:**
- Provider has your funds in their system
- Flagged for manual review (security measure)
- Will be reviewed and either:
  - Approved and swap completed
  - KYC requested (you verify, then swap completes)
  - Refunded if cannot be processed
- Timeline: 12-48 hours typically

**Risk assessment:**

**Low risk scenarios:**
- Using established providers (ChangeHero, ChangeNow, SimpleSwap, Changelly)
- Normal "Hold" or processing delays
- Provider responsive to support inquiries
- Reasonable swap amounts and routes

**Higher risk scenarios:**
- Using unknown/new providers (stick to ZelCore's integrated providers)
- Provider completely unresponsive for weeks
- Provider website goes offline
- Extremely large amounts (keep swaps reasonable)

**Protection measures:**

1. **Only use swaps created through ZelCore** (ensures legitimate provider addresses)
2. **Start with small test swaps** when trying new routes
3. **Document everything** (order IDs, transaction hashes, screenshots)
4. **Maintain provider communications** (emails, support tickets)
5. **Don't ignore KYC requests** (respond promptly to avoid delays)

**What if something goes wrong:**

- Provider unresponsive: Escalate through multiple channels (email, chat, social media)
- Suspected fraud: Contact ZelCore support and relevant authorities
- Extended delays: Keep pressure on provider support
- Very rare: Some jurisdictions have crypto recovery processes

**Important context:**

Thousands of Fusion swaps complete successfully every day. Most stuck swaps are resolved within 48 hours. The integrated providers are established services with reputations to maintain. Issues are frustrating but rarely result in permanent loss.

**Best practice:** Only swap amounts you're comfortable having in a third party's control for 24-48 hours.

**Related:**
- [Troubleshooting Fusion Swap Issues](../../guides/troubleshooting-fusion-swap-issues/)
- [ZelCore Security Best Practices](../../security/best-practices/)

---

## What are Flux parallel chains and why do I need different gas tokens for each?

**Answer:**

Flux parallel chains are wrapped versions of FLUX tokens deployed on different blockchain networks (Flux-BASE, Flux-BSC, Flux-ETH, Flux-SOL, Flux-TRX, Flux-AVAX). Each exists as a separate token on its respective blockchain.

**Key concept:** Each parallel asset requires the native gas token of its blockchain, not FLUX itself.

**Gas requirements by chain:**

- **Flux-BASE:** Requires ETH on Base network (not Ethereum mainnet ETH)
- **Flux-BSC:** Requires BNB on BNB Smart Chain
- **Flux-ETH:** Requires ETH on Ethereum mainnet
- **Flux-SOL:** Requires SOL on Solana
- **Flux-TRX:** Requires TRX on Tron
- **Flux-AVAX:** Requires AVAX on Avalanche C-Chain

**Most common mistake:** Users try to bridge Flux-BASE but only have ETH on Ethereum mainnet, not on the Base network. Base is a separate Layer 2 network requiring Base-specific ETH.

**What you need before bridging:**

1. Gas token on the SOURCE chain (to send the transaction)
2. Gas token on the DESTINATION chain (to use the received tokens)
3. Understanding that these are different tokens on different networks

**How to get gas tokens:**

- Withdraw from centralized exchanges (select correct network)
- Use Fusion to swap a small amount to the gas token
- Bridge from another chain (e.g., bridge ETH from mainnet to Base)
- Keep small amounts of each gas token for convenience

**Why this matters:** You cannot send Flux parallel assets without the correct gas token, and you cannot use received assets on the destination chain without gas there.

**Related:**
- [Flux Fusion Bridge Guide](../../guides/flux-fusion-bridge-guide/) - Complete guide to bridging Flux parallel chains

---

## Why am I getting "insufficient funds to pay chains.base.name transaction fee" when I have ETH?

**Answer:**

This error means you don't have ETH on the Base network specifically. Having ETH on Ethereum mainnet does NOT work for Base transactions.

**Understanding the issue:**

Base is a Layer 2 network built on Ethereum. It's a separate blockchain with its own ETH supply:

- **ETH on Ethereum mainnet** = Cannot be used for Base transactions
- **ETH on Base network** = Required for all Base transactions (including Flux-BASE)

These are the same token (ETH) but on different networks. You must have ETH specifically on the Base network.

**How to get ETH on Base:**

**Method 1: Bridge from Ethereum mainnet**
1. Visit the official Base bridge: bridge.base.org
2. Connect your wallet
3. Bridge ETH from Ethereum mainnet to Base
4. Wait 5-10 minutes for bridging to complete
5. Minimum recommended: $2-5 worth of ETH

**Method 2: Withdraw from exchange**
1. Use Coinbase (excellent Base support) or other exchange supporting Base
2. Withdraw ETH
3. Select "Base" as the network (not "Ethereum" or "ERC-20")
4. Send to your Base address in ZelCore

**Method 3: Use Fusion to acquire Base ETH**
1. If you have other assets on Base, swap small amount to ETH
2. Use this ETH for future transactions
3. Keep at least $2-5 worth for multiple transactions

**How to verify you have Base ETH:**

1. Open ZelCore
2. Navigate to Ethereum (ETH) asset
3. Check "Base" network specifically
4. Should show ETH balance on Base
5. If zero, you need to acquire Base ETH first

**Prevention:** Always check which network a token is on before assuming you have the required gas.

**Related:**
- [Flux Fusion Bridge Guide](../../guides/flux-fusion-bridge-guide/) - Detailed guide on gas requirements for all chains

---

## Why does my Flux bridge swap show "no providers available"?

**Answer:**

"No providers available" means none of the integrated exchange providers (ChangeHero, ChangeNow, SimpleSwap, Changelly) can currently process your specific Flux bridge swap route.

**Common reasons:**

**1. Route not supported:**
- Not all providers support all Flux parallel chain pairs
- Some combinations have low liquidity
- Less common chains (Flux-SOL, Flux-TRX) have fewer provider options

**2. Temporary provider issues:**
- Provider maintenance windows
- API connectivity issues
- Liquidity shortages for specific pairs

**3. Multiple providers offline simultaneously:**
- Rare but possible during updates or network issues
- Check provider status pages

**4. Regional or account restrictions:**
- Some providers limit access by region (uncommon)
- Previous account flags with providers

**Solutions:**

**Try alternative routes:**
1. **Multi-hop swaps:** Bridge in two steps through a better-supported chain
   - Example: Flux-BASE → native FLUX → Flux-BSC
   - Or: Flux-BASE → Flux-ETH → Flux-BSC
2. Use more liquid pairs (Flux-BSC and Flux-ETH have best provider support)

**Wait and retry:**
1. Wait 30-60 minutes and try again
2. Provider maintenance typically resolves quickly
3. Check times: Try during different hours (US business hours often better)

**Use alternative methods:**
1. **Centralized exchange route:**
   - Send Flux to exchange that supports multiple chains
   - Withdraw on desired network
   - Bypasses provider issues entirely
2. **Native Flux bridge:**
   - Check if official Flux bridge supports your route
   - May have different chain combinations available

**Check status:**
1. Visit provider websites for maintenance announcements
2. Check ZelCore Discord for known issues
3. Check provider Twitter accounts (@ChangeNOW_io, etc.)

**Provider-specific tips:**

- **ChangeNow:** Usually best for Base and ETH routes
- **ChangeHero:** Good for BSC routes
- **SimpleSwap:** Often supports less common pairs
- **Changelly:** Established but may have stricter limits

**When this is persistent:**

If "no providers" appears consistently for days:
1. Your route may not be supported by any provider
2. Use centralized exchange or native bridge instead
3. Contact ZelCore support to report persistent issues
4. Consider if the route is economically viable (fees vs amount)

**Prevention:** Use well-established routes (Flux-BSC ↔ Flux-ETH) which have consistent provider support and high liquidity.

**Related:**
- [Flux Fusion Bridge Guide](../../guides/flux-fusion-bridge-guide/) - Complete guide including provider tips
- [Troubleshooting Fusion Swap Issues](../../guides/troubleshooting-fusion-swap-issues/) - General provider troubleshooting

---

## How do I bridge between Flux parallel chains (Flux-BASE, Flux-BSC, etc.)?

**Answer:**

Bridging between Flux parallel chains in ZelCore uses the Fusion swap aggregator, which connects you to third-party exchange providers. This is a swap operation, not a native bridge transfer.

**Quick start process:**

1. **Prepare gas tokens on BOTH chains:**
   - Source chain: Gas to send the transaction
   - Destination chain: Gas to use received tokens
   - See gas requirements below

2. **Open ZelCore Fusion:**
   - Navigate to Fusion (or FusionX/SSP)
   - Select "From": Your current Flux parallel asset (e.g., Flux-BASE)
   - Select "To": Desired Flux parallel asset (e.g., Flux-BSC)

3. **Enter amount and review:**
   - Enter how much to bridge
   - Review exchange rates from different providers
   - Select provider with best rate
   - Verify destination address is correct

4. **Confirm and send:**
   - Approve the transaction
   - Transaction will be sent to provider
   - Save your Order ID

5. **Monitor progress:**
   - Check Fusion history for status updates
   - Typical time: 1-4 hours depending on chains
   - Contact provider if stuck beyond normal timeframe

**Gas requirements (most important step):**

- **Flux-BASE:** ETH on Base network (NOT mainnet ETH)
- **Flux-BSC:** BNB on BNB Smart Chain
- **Flux-ETH:** ETH on Ethereum mainnet
- **Flux-SOL:** SOL on Solana
- **Flux-TRX:** TRX on Tron
- **Flux-AVAX:** AVAX on Avalanche C-Chain

**Recommended gas amounts to maintain:**
- Base/BSC/SOL/TRX: $2-5 worth
- Ethereum mainnet: $10-20 worth (higher fees)
- Avalanche: $5-10 worth

**Common issues and prevention:**

1. **"Insufficient funds" error:** You lack gas on source chain
   - Solution: Acquire gas token first, then bridge

2. **"No providers" error:** Route not supported or provider issues
   - Solution: Try different route or wait, or use CEX route

3. **"Price unavailable" error:** Provider cannot determine rate
   - Solution: Wait 30 minutes and retry, or try different provider

4. **KYC hold:** Large amounts flagged for verification
   - Prevention: Keep swaps under $500-1,000 to reduce likelihood

5. **Long processing times:** Normal for cross-chain swaps
   - Allow 2-4 hours for completion

**Best practices:**

- Do a small test swap first ($10-20) if bridging large amount
- Keep swap amounts under $1,000 to avoid KYC
- Have gas ready on destination chain before bridging
- Save Order ID and transaction hash immediately
- Check provider status before large swaps
- Use well-established routes (Flux-BSC, Flux-ETH) for fastest processing

**Alternative methods:**

1. **Native Flux bridge:** Check Flux official documentation for supported routes
2. **Centralized exchange:** Send to exchange, withdraw on desired chain
3. **Multi-hop swaps:** Bridge through intermediate chain if direct route unavailable

**Expected timeframes:**

- Fast routes (BSC, TRX, SOL): 30-90 minutes
- Moderate routes (BASE, ETH, AVAX): 1-2 hours
- Slow routes (ETH during high gas): 2-4 hours
- Hold/KYC status: 12-48 hours

**Related:**
- [Flux Fusion Bridge Guide](../../guides/flux-fusion-bridge-guide/) - Complete step-by-step guide with detailed instructions
- [Troubleshooting Fusion Swap Issues](../../guides/troubleshooting-fusion-swap-issues/) - What to do when swaps get stuck

---

## My Flux bridge swap has been on "Hold" for KYC. What should I do?

**Answer:**

"Hold" status with KYC requirement is common for Flux bridge swaps, especially for amounts over $1,000. This is a security and compliance measure from the exchange provider.

**Why Flux swaps trigger KYC frequently:**

- FLUX price volatility means dollar thresholds change
- Flux parallel asset swaps often exceed provider limits ($1,000-$1,500)
- First-time swaps with providers more likely to trigger review
- Flux tokens may have additional compliance screening
- Cross-chain swaps have higher scrutiny than same-chain swaps

**What to do:**

**1. Check for provider communication (within 24 hours):**
- Check email (including spam/junk folder)
- Provider will email requesting KYC documents
- Email typically arrives within 12-24 hours of "Hold" status

**2. Respond promptly with required documents:**

Providers typically request:
- Government-issued photo ID (passport, driver's license, national ID)
- Selfie photo holding ID or with current date
- Proof of address (utility bill, bank statement, lease agreement)
- Sometimes: Source of funds explanation

**3. Submit through provider's secure portal:**
- Provider email will include secure upload link
- Never send sensitive documents through regular email
- Ensure photos are clear and fully visible
- All corners of documents must be in frame

**4. Wait for verification (24-72 hours):**
- Initial review: 24-48 hours typical
- Complex cases: Up to 5 business days
- Weekends and holidays extend timeline
- Some providers faster (ChangeNow often 12-24 hours)

**5. After approval:**
- Provider will process your swap normally
- You may receive higher limits for future swaps with that provider
- KYC is usually valid for 6-12 months with same provider

**If KYC is denied:**
- Provider will initiate refund to your source address
- Refund typically processed within 24-72 hours
- You'll be notified by email
- Contact provider to understand denial reason

**If provider doesn't contact you:**

After 48 hours of "Hold" with no email:
1. Contact provider support directly with Order ID
2. Ask for KYC instructions
3. Check spam folder again thoroughly
4. Provide alternative email if needed

**To reduce future KYC likelihood:**

1. **Keep amounts smaller:** Under $500-750 per swap
2. **Split large swaps:** Multiple smaller transactions over time
3. **Use same provider:** After KYC completed, stay with that provider
4. **Build history:** Regular small swaps may increase limits
5. **Avoid suspicious patterns:** Don't do rapid succession of large swaps

**Provider KYC policies (approximate thresholds):**

- **ChangeNow:** $500-1,000 (can trigger on first swap)
- **ChangeHero:** $1,000-1,500
- **SimpleSwap:** $1,000+
- **Changelly:** $1,000+ (more formal KYC process)

**Important notes:**

- KYC is mandated by exchange providers, not ZelCore or Flux
- ZelCore cannot bypass KYC requirements
- This is standard financial compliance (AML/KYC regulations)
- Legitimate providers protect your data securely
- Your information goes to provider only, not ZelCore
- Refusing KYC will result in refund, not swap completion

**Privacy considerations:**

If you prefer to avoid KYC entirely:
- Keep all swaps under $300-500
- Use native Flux bridge (may not require KYC)
- Use centralized exchanges where you've already completed KYC
- Use decentralized exchanges (DEX) for token swaps
- Accept that cross-chain bridging often requires identity verification for compliance

**Your funds are safe:** Provider holds your crypto during KYC review. They will either complete the swap after verification or refund if KYC cannot be completed.

**Related:**
- [Flux Fusion Bridge Guide](../../guides/flux-fusion-bridge-guide/) - Includes KYC prevention strategies
- [Fusion FAQ: Will I need to provide KYC?](../../faq/fusion-faq/#will-i-need-to-provide-kyc-for-my-fusion-swap) - General KYC information

---

## I'm getting "requested amount not within provider limits" error. What does this mean?

**Answer:**

This error means the amount you're trying to swap is either too small (below minimum) or too large (above maximum) for the exchange provider's limits. Each provider (ChangeNow, ChangeHero, SimpleSwap, Changelly) sets their own limits for each trading pair.

**Understanding provider limits:**

Exchange providers set limits for several reasons:
- **Minimum limits:** Ensure transaction is profitable after fees and operational costs
- **Maximum limits:** Prevent liquidity depletion and manage risk exposure
- **Dynamic limits:** Change based on market conditions and available liquidity

**Common limit ranges:**

**Typical minimum amounts (varies by asset and provider):**
- **Bitcoin (BTC):** $50-100 minimum
- **Ethereum (ETH):** $30-80 minimum
- **FLUX:** $10-50 minimum
- **Stablecoins (USDT, USDC):** $20-50 minimum
- **Smaller altcoins:** Can be higher minimums

**Typical maximum amounts (varies significantly):**
- **Major pairs (BTC, ETH, USDT):** $5,000-$50,000+
- **Mid-cap coins (FLUX, AVAX):** $1,000-$10,000
- **Smaller coins:** $500-$5,000
- **Less liquid pairs:** Can be very low maximums

**Why you might see this error:**

**Amount too small:**
- Your swap is below provider's minimum
- After factoring in fees, the swap isn't economically viable
- Provider doesn't support micro-transactions for this pair

**Amount too large:**
- Your swap exceeds provider's liquidity for this pair
- Provider's risk management limits triggered
- Specific trading pair has low volume/liquidity
- Provider doesn't have enough reserves

**Solutions:**

**If amount is too small:**

1. **Increase swap amount:**
   - Add more to meet minimum threshold
   - Combine multiple small amounts
   - Wait until you have more to swap

2. **Try different provider:**
   - Some providers have lower minimums
   - Check all available providers in Fusion
   - ChangeNow often has lower minimums

3. **Try different asset pair:**
   - Swap to more common intermediate asset first
   - Example: Small altcoin → BTC → desired asset
   - More liquid pairs have lower minimums

4. **Use DEX for very small amounts:**
   - Decentralized exchanges may accept smaller swaps
   - May have higher percentage fees but work for tiny amounts

**If amount is too large:**

1. **Split into multiple swaps:**
   - Break large swap into 2-4 smaller transactions
   - Spread across different providers
   - Do swaps over time (hours or days apart)
   - Each swap stays under maximum limit

2. **Try different provider:**
   - Check all providers in Fusion for higher limits
   - ChangeNow often has highest limits
   - Changelly may support larger institutional amounts

3. **Use centralized exchange instead:**
   - Send to exchange (Binance, KuCoin, etc.)
   - Trade on exchange (much higher limits)
   - Withdraw to desired chain/asset
   - Better for very large amounts ($10,000+)

4. **Contact provider directly:**
   - For institutional or very large swaps
   - Some providers offer OTC (over-the-counter) desk
   - Can arrange special rates and limits
   - May require KYC verification

**How to check limits before swapping:**

**In Fusion:**
1. Enter your desired swap amount
2. Fusion will show providers that can handle it
3. If no providers available, amount is outside limits
4. Adjust amount up or down to see what's accepted

**On provider websites:**
- Most providers list limits on their websites
- Check specific pair limits (vary by combination)
- Limits change dynamically, so check at time of swap

**Provider-specific limit information:**

**ChangeNow:**
- Generally highest maximum limits
- Lower minimums for popular pairs
- Limits visible before swap confirmation
- Good for both small and large swaps

**ChangeHero:**
- Moderate minimums and maximums
- Consistent limits across pairs
- Good middle-ground option

**SimpleSwap:**
- Often lowest minimums
- Moderate maximums
- Good for smaller swaps
- May have lower maximums on less common pairs

**Changelly:**
- Higher minimums typically
- Can support larger amounts
- More formal platform
- Better for larger swaps

**Tips to avoid this error:**

1. **Start with moderate amounts:**
   - $100-500 for testing
   - Increase gradually if needed
   - Avoid extremes (too small or too large)

2. **Check multiple providers:**
   - Limits vary significantly between providers
   - One may accept when another doesn't
   - Fusion shows all available options

3. **Be flexible with amounts:**
   - If $1,000 doesn't work, try $900 or $800
   - Slightly adjusting amount may work
   - Limits aren't always round numbers

4. **Plan for large swaps:**
   - Use exchanges for amounts over $5,000-10,000
   - Better rates and higher limits
   - More suitable for large conversions

5. **Consider market conditions:**
   - Limits may tighten during high volatility
   - Weekends may have different limits
   - Try during high liquidity hours (US/EU business hours)

**Understanding dynamic limits:**

Provider limits aren't static:
- **Liquidity dependent:** If provider is low on asset, limits drop
- **Volatility responsive:** High price swings reduce maximums
- **Time-based:** Limits may be higher during peak trading hours
- **Demand-driven:** Popular pairs have higher limits

**Related:**
- [Troubleshooting Fusion Swap Issues](../../guides/troubleshooting-fusion-swap-issues/)

---

## I'm getting "Your location is not yet supported" error when trying to swap. What can I do?

**Answer:**

This error means the exchange provider (ChangeNow, ChangeHero, SimpleSwap, or Changelly) doesn't offer services in your geographic region due to regulatory restrictions or compliance requirements.

**Why this happens:**

**Regulatory compliance:**
- Different countries have different cryptocurrency regulations
- Providers must comply with local laws where they operate
- Some jurisdictions have strict or unclear crypto rules
- Providers block regions to avoid legal complications

**Common restricted regions:**

**Highly restricted (most providers):**
- United States (many providers block US users)
- Sanctioned countries (Iran, North Korea, Syria, Cuba, etc.)
- China and Hong Kong (in some cases)
- Some Middle Eastern countries

**Sometimes restricted:**
- New York State (stricter BitLicense requirements)
- Certain European countries with specific regulations
- Countries with recent regulatory changes
- Regions with AML/CFT concerns

**Provider-specific geographic availability:**

**ChangeNow:**
- Blocks US users and sanctioned countries
- Available in most of Europe
- Available in many Asian countries
- Limited access in some Middle East regions

**ChangeHero:**
- Similar restrictions to ChangeNow
- May have slightly different country list
- Check their terms for specifics

**SimpleSwap:**
- Generally more open geographically
- Still blocks sanctioned countries
- May work where others don't
- Check availability in Fusion

**Changelly:**
- More established, some US state availability
- Blocks many restricted regions
- May require KYC in some locations
- Broader but still limited

**Solutions and workarounds:**

**Important disclaimer:** Always comply with local laws. These are educational options, not recommendations to circumvent regulations.

**Option 1: Try different provider**

1. Check all providers in Fusion
2. One provider may accept your region when others don't
3. SimpleSwap sometimes has broader availability
4. Geographic restrictions vary by provider

**Option 2: Use VPN (understand risks)**

**Important warnings:**
- Using VPN may violate provider terms of service
- Could result in frozen funds or account suspension
- May trigger KYC requirements
- Risk of losing funds if caught
- Not legal advice - consult local laws

**If you choose to use VPN:**
- Use reputable VPN service
- Connect to country with clear crypto regulations
- Avoid frequent location changes (looks suspicious)
- Understand you're taking a risk
- Provider may still detect and block
- Start with very small test amounts

**Better alternatives than VPN:**

**Option 3: Use decentralized exchanges (DEX)**

DEX platforms don't have geographic restrictions:
- **Uniswap** (Ethereum and compatible chains)
- **PancakeSwap** (BSC)
- **SushiSwap** (Multi-chain)
- **Jupiter** (Solana)

**Advantages:**
- No geographic restrictions
- No KYC requirements
- True decentralization
- You maintain custody

**Disadvantages:**
- Limited to same-chain or connected-chain swaps
- Higher gas fees on some chains
- Need gas tokens for transactions
- More complex for beginners
- Can't do cross-chain swaps easily

**Option 4: Use centralized exchanges**

If available in your region:

1. **Send to exchange:**
   - Binance (available in many countries)
   - KuCoin (broad availability)
   - Gate.io (many regions)
   - Local exchanges in your country

2. **Trade on exchange:**
   - No swap provider needed
   - Exchange handles conversion
   - Often better rates for large amounts

3. **Withdraw to ZelCore:**
   - On desired chain
   - To desired asset

**Advantages:**
- Legal and compliant
- Higher limits
- Better rates often
- Customer support

**Disadvantages:**
- Requires account/KYC
- Withdrawal fees
- Takes longer
- Not all regions supported

**Option 5: Use peer-to-peer (P2P) platforms**

- **LocalBitcoins** (if available)
- **Bisq** (decentralized P2P)
- **HodlHodl** (non-custodial P2P)
- **Paxful** (broad availability)

Trade directly with other users in your region.

**Option 6: Use chain-native bridges**

For specific assets:
- **Flux Bridge:** For Flux parallel assets (if your location allows)
- **Official bridges:** Each blockchain's native bridge
- **May have different geographic policies**

**How to determine your options:**

**Step 1: Identify what's available in your region**

1. Research exchanges licensed in your country
2. Check DEX availability (usually unrestricted)
3. Ask in local crypto communities
4. Check official crypto regulations for your country

**Step 2: Choose compliant path**

1. Prioritize legal, compliant options
2. Use local exchanges if available
3. DEX for same-chain swaps
4. Consider P2P for some conversions

**Step 3: Plan multi-step if needed**

1. Swap on DEX within same chain
2. Send to compliant exchange
3. Convert there
4. Withdraw to desired chain

**Prevention:**

**If you're in restricted region:**

1. **Expect limitations:**
   - Fusion/Swap may not work for you
   - This is a regulatory issue, not ZelCore's choice
   - Providers make independent decisions

2. **Build alternative strategies:**
   - Maintain accounts on available exchanges
   - Learn to use DEX platforms
   - Keep gas tokens for DEX swaps
   - Plan ahead for conversions

3. **Stay informed:**
   - Regulations change frequently
   - New providers may support your region
   - ZelCore may integrate new swap options
   - Local exchanges may add features

**Important notes:**

- **Geographic restrictions are provider-level, not ZelCore**
- ZelCore simply integrates these providers
- ZelCore cannot override provider restrictions
- Complying with local laws is your responsibility
- Crypto regulations are complex and changing

**If you need swaps and are restricted:**

The most reliable, legal approach is:
1. Use DEX for same-chain token swaps
2. Use compliant centralized exchanges for larger conversions
3. Bridge using official blockchain bridges
4. Accept some limitations as part of compliance

**Related:**
- [Troubleshooting Fusion Swap Issues](../../guides/troubleshooting-fusion-swap-issues/)

---

## Why do provider limits and restrictions vary so much between different swap providers?

**Answer:**

Provider limits and geographic restrictions vary because each exchange provider (ChangeNow, ChangeHero, SimpleSwap, Changelly) is an independent business operating under different:
- Business strategies
- Regulatory jurisdictions
- Liquidity sources
- Risk management policies
- Compliance requirements

**Factors causing variation:**

**1. Regulatory jurisdiction:**

Each provider operates from different countries:
- **ChangeNow:** Operates from crypto-friendly jurisdiction
- **Changelly:** More established, different compliance approach
- **SimpleSwap:** Different regulatory strategy
- **ChangeHero:** Independent compliance decisions

Different home countries = different rules = different restrictions.

**2. Liquidity sources:**

**Providers with better liquidity:**
- Can offer higher maximum limits
- Support more trading pairs
- Have better rates
- More stable availability

**Providers with limited liquidity:**
- Lower maximum amounts
- Fewer supported pairs
- May have longer processing times
- More restrictive limits

**3. Risk management:**

Each provider assesses risk differently:
- **Conservative providers:** Lower limits, more KYC, fewer regions
- **Aggressive providers:** Higher limits, less KYC, broader availability
- **Balanced providers:** Moderate approach

**4. Business model:**

**Established providers (Changelly):**
- More formal KYC processes
- Higher compliance standards
- May support larger amounts
- More selective about regions
- Better for institutional users

**Newer providers (SimpleSwap, ChangeHero):**
- May be more flexible
- Lower minimums to compete
- Broader geographic availability
- Building market share

**5. AML/KYC policies:**

Anti-Money Laundering (AML) and Know Your Customer (KYC) requirements differ:

**Strict KYC providers:**
- Lower limits before triggering KYC
- More regions blocked
- Longer verification times
- More documentation required

**Flexible KYC providers:**
- Higher limits before KYC
- More regions accepted
- Faster processing
- Less documentation

**6. Trading pair specific:**

Even the same provider varies limits by pair:

**High liquidity pairs (BTC/USDT, ETH/USDT):**
- Higher maximums
- Lower minimums
- Better rates
- Always available

**Low liquidity pairs (obscure tokens):**
- Lower maximums
- Higher minimums
- Variable availability
- Less competitive rates

**How this affects you:**

**Advantages of multiple providers:**

1. **Choice and flexibility:**
   - If one provider blocks you, try another
   - Shop for best rates and limits
   - Different providers for different needs

2. **Competition benefits users:**
   - Providers compete on limits and rates
   - Better availability overall
   - More innovation

3. **Redundancy:**
   - If one provider has issues, others available
   - Different maintenance windows
   - More overall uptime

**Strategy for dealing with variation:**

**1. Start with Fusion's recommendations:**
- ZelCore Fusion shows all available providers
- Automatically ranks by rate and availability
- Easy comparison

**2. Know each provider's strengths:**

**ChangeNow:**
- Best for: Large amounts, popular pairs
- Geographic: Broad but blocks US/sanctioned
- Limits: Generally highest
- KYC threshold: ~$1,000-1,500

**ChangeHero:**
- Best for: Mid-range swaps
- Geographic: Similar to ChangeNow
- Limits: Moderate
- KYC threshold: ~$1,000-2,000

**SimpleSwap:**
- Best for: Small amounts, less common pairs
- Geographic: Often more permissive
- Limits: Lower minimums
- KYC threshold: Varies

**Changelly:**
- Best for: Larger swaps needing more formal approach
- Geographic: Selective but some US states
- Limits: Can support large amounts
- KYC threshold: More likely for any amount

**3. Plan based on your needs:**

**Small swaps ($10-100):**
- SimpleSwap often best
- Lower minimums
- Fast processing

**Medium swaps ($100-1,000):**
- Any provider usually works
- Shop for best rate
- Less likely to trigger KYC

**Large swaps ($1,000+):**
- ChangeNow often best limits
- Be prepared for KYC
- Consider splitting across providers
- Or use exchange instead

**Geographic restrictions:**
- Try all providers in Fusion
- Note which works for your region
- Stick with those providers
- Have backup plan (DEX or exchange)

**Why you shouldn't be too concerned:**

**Fusion aggregates everything:**
- You don't need to research each provider
- Fusion shows what's available for your specific swap
- Just choose the best rate from available options
- System handles provider selection

**Competition keeps improving:**
- Providers constantly adjusting to compete
- Limits generally increasing over time
- More regions getting access
- Better rates and service

**You have alternatives:**
- Centralized exchanges for large amounts or restricted regions
- DEX for permissionless swaps
- Multiple providers for redundancy

**Bottom line:**

Provider variation is normal and actually beneficial. It creates competition, provides options, and ensures you usually have at least one path forward. Use Fusion to see what's available for your specific situation, and choose the best option shown.

**Related:**
- [Troubleshooting Fusion Swap Issues](../../guides/troubleshooting-fusion-swap-issues/)
- [How do I contact the exchange provider?](../../faq/fusion-faq/#how-do-i-contact-the-exchange-provider-handling-my-swap)
