---
sidebar_position: 9
title: Flux Fusion Bridge Guide
description: "Bridge FLUX tokens across chains using ZelCore Fusion feature. Step-by-step guide for cross-chain FLUX transfers."
keywords: [flux bridge, fusion bridge, cross chain flux, zelcore flux bridge]
---

# Flux Fusion Bridge Guide: Bridging Between Flux Parallel Chains

## Overview

The Flux Fusion Bridge enables users to bridge FLUX tokens between different blockchain networks through Flux's parallel asset system. This guide explains how Flux parallel chains work, the gas requirements for each chain, and how to troubleshoot common bridging issues.

Flux has deployed wrapped versions of FLUX on multiple blockchains (Flux-BASE, Flux-BSC, Flux-ETH, Flux-SOL, Flux-TRX, Flux-AVAX), creating a multi-chain ecosystem. When bridging between these chains using Fusion, users frequently encounter issues related to gas fees, provider availability, and KYC requirements.

**Important:** Bridging Flux parallel assets through Fusion uses third-party exchange providers (ChangeHero, ChangeNow, SimpleSwap, Changelly), not the native Flux bridge. These are swap operations, not native bridge transfers.

## Understanding Flux Parallel Chains

### What are Flux Parallel Assets?

Flux parallel assets are wrapped versions of FLUX tokens deployed on different blockchain networks. Each version represents the same value but exists on a different chain:

- **FLUX (Native)** - The original Flux blockchain
- **Flux-BASE** - FLUX on Base network (Layer 2 Ethereum)
- **Flux-BSC** - FLUX on BNB Smart Chain
- **Flux-ETH** - FLUX on Ethereum mainnet
- **Flux-SOL** - FLUX on Solana
- **Flux-TRX** - FLUX on Tron
- **Flux-AVAX** - FLUX on Avalanche C-Chain

### Key Concept: Different Chains = Different Gas Tokens

**This is the most common source of confusion:** Each Flux parallel asset requires the native gas token of its respective blockchain for transactions.

**Common mistake:** Users try to bridge Flux-BASE to Flux-BSC but only have ETH on Ethereum mainnet, not ETH on Base network, or don't have BNB for the BSC destination.

## Gas Requirements for Each Chain

### Flux-BASE (Base Network)

**Gas token required:** ETH (on Base network, not Ethereum mainnet)

**Important distinction:**
- Base is a Layer 2 network built on Ethereum
- You need ETH specifically on the Base network
- ETH on Ethereum mainnet will NOT work for Flux-BASE transactions
- Base ETH is separate from mainnet ETH

**How to get Base ETH:**
- Bridge ETH from Ethereum mainnet to Base using the official Base bridge (bridge.base.org)
- Purchase ETH on Base through a centralized exchange that supports Base withdrawals (Coinbase)
- Use Fusion to swap another token to ETH on Base
- Bridge from other L2s that connect to Base

**Typical gas cost:** $0.01 - $0.10 per transaction

### Flux-BSC (BNB Smart Chain)

**Gas token required:** BNB (BEP-20)

**Important notes:**
- BNB Smart Chain uses BNB for gas fees
- This is different from BNB on Binance Beacon Chain
- Most centralized exchanges support BSC withdrawals

**How to get BNB on BSC:**
- Withdraw BNB from centralized exchanges (select "BEP-20" or "BSC" network)
- Use Fusion to swap to BNB on BSC
- Bridge from other chains to BSC

**Typical gas cost:** $0.10 - $0.50 per transaction

### Flux-ETH (Ethereum Mainnet)

**Gas token required:** ETH (on Ethereum mainnet)

**Important notes:**
- Ethereum mainnet has the highest gas fees
- Gas prices vary significantly based on network congestion
- Plan for higher costs during peak times

**How to get ETH on Ethereum:**
- Withdraw ETH from any major centralized exchange
- Bridge from other chains
- This is the most accessible chain for obtaining gas

**Typical gas cost:** $2 - $50+ per transaction (highly variable)

### Flux-SOL (Solana)

**Gas token required:** SOL

**Important notes:**
- Solana has very low gas fees
- Extremely fast transaction confirmations
- Most exchanges support Solana withdrawals

**How to get SOL:**
- Withdraw SOL from centralized exchanges
- Use Fusion to swap to SOL
- Bridge from other chains

**Typical gas cost:** $0.0001 - $0.01 per transaction

### Flux-TRX (Tron)

**Gas token required:** TRX

**Important notes:**
- Tron has low gas fees
- Fast confirmations
- Widely supported by exchanges

**How to get TRX:**
- Withdraw TRX from centralized exchanges
- Use Fusion to swap to TRX
- Many fiat on-ramps support TRX

**Typical gas cost:** $0.01 - $0.20 per transaction

### Flux-AVAX (Avalanche C-Chain)

**Gas token required:** AVAX

**Important notes:**
- Avalanche C-Chain (Contract Chain) is EVM-compatible
- Moderate gas fees
- Good exchange support

**How to get AVAX:**
- Withdraw AVAX from centralized exchanges (select "C-Chain" or "ERC-20")
- Use Fusion to swap to AVAX
- Bridge from other chains

**Typical gas cost:** $0.50 - $2.00 per transaction

## Pre-Bridge Checklist

Before initiating a Flux Fusion bridge swap, verify the following:

### 1. Understand What You're Swapping

- [ ] You're clear on which Flux parallel asset you currently hold
- [ ] You understand which chain you want to bridge to
- [ ] You know these are swap operations through providers, not native bridges

### 2. Gas Requirements on BOTH Chains

- [ ] You have gas tokens on the SOURCE chain (to send the transaction)
- [ ] You have gas tokens on the DESTINATION chain (to interact with received assets)
- [ ] You understand the gas token differs between chains

### 3. Wallet Setup

- [ ] You have the destination chain added in ZelCore
- [ ] You've verified the destination address is correct
- [ ] You have access to your private keys or seed phrase (for security)

### 4. Provider Selection

- [ ] You've checked which providers support your desired route
- [ ] You're aware of provider fees (typically 0.5-2%)
- [ ] You understand KYC may be required for large amounts

### 5. Amount Considerations

- [ ] Keep swap amounts under $1,000 to reduce KYC likelihood
- [ ] Account for provider fees in your calculation
- [ ] Consider doing a small test swap first

### 6. Documentation Ready

- [ ] Have screenshots ready to take of order ID
- [ ] Know how to access blockchain explorers for verification
- [ ] Have provider contact information saved

## Common Errors and Solutions

### Error: "Insufficient funds to pay chains.base.name transaction fee"

**What this means:** You don't have enough ETH on Base network to pay for the transaction gas fee.

**Common scenario:** You're trying to send Flux-BASE but only have ETH on Ethereum mainnet, or you have zero ETH on Base.

**Solution:**

1. **Acquire ETH on Base network:**
   - Option A: Bridge ETH from Ethereum mainnet to Base using bridge.base.org
   - Option B: Use Fusion to swap a small amount of another asset to ETH on Base
   - Option C: Withdraw ETH to Base from Coinbase or another exchange supporting Base

2. **How much ETH do you need?**
   - Minimum: $0.50-$1.00 worth of ETH on Base
   - Recommended: $2-$5 worth for multiple transactions

3. **Verify you have Base ETH:**
   - Open ZelCore
   - Navigate to ETH (Ethereum)
   - Check that your Base network wallet shows an ETH balance
   - If zero, you need to acquire Base ETH first

**Prevention:** Always maintain a small amount of native gas token on each chain you use.

### Error: "Price unavailable"

**What this means:** The exchange provider cannot determine the current exchange rate for your swap route.

**Common causes:**
- Provider liquidity issues for this specific route
- Temporary API issues with price feeds
- Unusual or uncommon swap pair
- Market volatility causing provider to pause pricing

**Solution:**

1. **Wait 15-30 minutes and try again** - Often resolves automatically
2. **Try a different provider:**
   - ZelCore Fusion shows multiple providers
   - Switch to ChangeNow, ChangeHero, or SimpleSwap
3. **Check if the route is supported:**
   - Not all providers support all Flux parallel chain pairs
   - May need to do a two-step swap (e.g., Flux-BASE → FLUX native → Flux-BSC)
4. **Reduce swap amount:**
   - Large amounts may exceed provider liquidity
   - Try a smaller amount to test
5. **Check provider status:**
   - Visit provider websites for maintenance announcements
   - Check ZelCore Discord for known issues

**Prevention:** Use well-established routes (Flux-BSC and Flux-ETH are most liquid).

### Error: "No providers available"

**What this means:** None of the integrated exchange providers can currently process your swap request.

**Common causes:**
- All providers are experiencing issues simultaneously
- Your swap route is not supported by any provider
- Maintenance windows for multiple providers
- Region restrictions (less common)
- Your IP or account flagged by providers

**Solution:**

1. **Verify the swap route is valid:**
   - Check if both source and destination chains are supported
   - Try a more common route (e.g., to Flux-BSC or Flux-ETH first)

2. **Wait and retry:**
   - Provider maintenance typically resolves within hours
   - Check provider Twitter accounts for status updates

3. **Use an alternative method:**
   - Use the native Flux bridge if bridging to/from native FLUX
   - Go through a centralized exchange (CEX route):
     - Send to exchange
     - Withdraw on desired chain
   - Use a different DEX or bridge service outside ZelCore

4. **Check ZelCore official channels:**
   - Discord: May have announcements about provider issues
   - Twitter: @zelcore for service updates

5. **Consider network/VPN issues:**
   - Some providers may have regional restrictions
   - Try disabling VPN if using one, or try a different VPN server

**Prevention:** Keep accounts with centralized exchanges as backup bridging routes.

### Issue: KYC Hold on Flux Bridge Swaps

**What this means:** The exchange provider has flagged your swap for Know Your Customer verification.

**Common triggers for Flux swaps:**
- Amounts over $1,000 (FLUX price volatility means this threshold changes)
- First-time swap with a particular provider
- Rapid succession of large swaps
- Wallets flagged in provider databases
- Compliance screening requirements

**Solution:**

1. **Expect KYC for large amounts:**
   - Flux swaps over $1,000 are frequently flagged
   - This is normal provider behavior, not an error

2. **Respond promptly to KYC requests:**
   - Check email (including spam folder) for provider contact
   - Complete KYC through provider's secure portal
   - Typical documents: Government ID, selfie, proof of address

3. **Verification timeline:**
   - Submission to approval: 24-72 hours typically
   - Some providers faster (12-24 hours)
   - Complex cases may take up to 5 business days

4. **If you prefer to avoid KYC:**
   - Keep individual swap amounts under $500-$750
   - Split large swaps into multiple smaller transactions
   - Use different providers for different swaps
   - Be aware: Multiple small swaps may also trigger review

5. **After KYC completion:**
   - Provider approves and processes swap
   - Your account may have higher limits for future swaps
   - KYC is typically valid for future swaps with same provider

**Important:** KYC requirements come from exchange providers, not ZelCore or Flux. ZelCore cannot bypass or expedite KYC processes.

### Issue: Swap Taking Longer Than Expected

**Typical timeframes for Flux bridge swaps:**

**Fast routes (30-60 minutes):**
- Flux-BSC ↔ Flux-TRX
- Flux-SOL ↔ Flux-BSC
- Same chain token swaps

**Moderate routes (1-2 hours):**
- Flux-BASE ↔ Flux-BSC
- Flux-BASE ↔ Flux-ETH
- Native FLUX ↔ any parallel asset
- Flux-AVAX swaps

**Slower routes (2-4 hours):**
- Flux-ETH involved swaps (during high gas periods)
- Less common pairs
- During high provider volume

**Extended processing (12-48 hours):**
- Swaps on "Hold" status
- KYC required
- Large amounts under review

**When to be concerned:**
- Normal route taking 6+ hours with no status change
- "Awaiting confirmation" for hours despite 20+ confirmations
- "Hold" status beyond 48 hours with no provider contact
- Any status unchanged for 24+ hours

**Solution:**

1. **Verify blockchain confirmations** (Step 2 in general troubleshooting)
2. **Check provider status pages** for maintenance or issues
3. **Contact provider directly** after 6 hours for normal swaps, 48 hours for "Hold" status
4. **Provide all documentation:** Order ID, transaction hash, destination address

**Prevention:** Allow ample time for swaps to complete before needing access to funds. Don't bridge assets you need immediately.

## Step-by-Step: Bridging Flux Parallel Assets

### Example: Bridging from Flux-BASE to Flux-BSC

This example demonstrates the complete process and highlights common pitfalls:

**Prerequisites:**
- [ ] Flux-BASE tokens in your ZelCore wallet
- [ ] ETH on Base network for gas (source chain)
- [ ] BNB on BSC for gas (destination chain)
- [ ] Both chains activated in ZelCore

**Step 1: Prepare Gas Tokens**

1. **Check your Base ETH balance:**
   - Open ZelCore → Ethereum → Base network
   - Verify you have at least $1-2 worth of ETH on Base
   - If zero, bridge ETH to Base first using bridge.base.org

2. **Check your BSC BNB balance:**
   - Open ZelCore → BNB → Smart Chain
   - Verify you have at least $1-2 worth of BNB
   - If zero, withdraw BNB from an exchange (BEP-20 network) or use Fusion to acquire BNB

**Step 2: Initiate the Swap**

1. Open ZelCore
2. Navigate to **Fusion** (or FusionX/SSP)
3. Select **From:** Flux-BASE
4. Select **To:** Flux-BSC
5. Enter the amount you want to bridge
6. Review provider quotes:
   - Check exchange rate
   - Note provider fees (usually 0.5-2%)
   - Compare different providers
7. Select the provider with the best rate
8. **Important:** Review the destination address - verify it's your BSC Flux address
9. Click **Continue** or **Swap**

**Step 3: Review and Confirm**

1. Double-check the swap details:
   - Source: Flux-BASE (Base network)
   - Destination: Flux-BSC (BNB Smart Chain)
   - Amount and expected receive amount
   - Destination address is correct
   - Provider fees are acceptable
2. **Take a screenshot** of this screen
3. Click **Confirm** to create the order

**Step 4: Complete the Transaction**

1. ZelCore will prompt you to send Flux-BASE to the provider's address
2. Confirm the transaction in your wallet
3. **Critical:** Make sure you have sufficient ETH on Base for the transaction fee
4. Transaction will be broadcast to Base network
5. **Save your Order ID** displayed in ZelCore

**Step 5: Monitor Progress**

1. Check Fusion history in ZelCore for status updates
2. Copy your transaction hash
3. Verify on Base blockchain explorer (basescan.org):
   - Confirm transaction was successful
   - Check number of confirmations (need 10-15 typically)
4. Status will update in ZelCore as provider processes:
   - "Confirming" - Waiting for blockchain confirmations
   - "Exchanging" - Provider is processing the swap
   - "Sending" - Provider is sending to your BSC address
   - "Finished" - Swap complete

**Step 6: Verify Receipt**

1. Once status shows "Finished", check your BSC Flux balance in ZelCore
2. May take a few minutes for balance to update in app
3. Verify on BSC blockchain explorer (bscscan.com):
   - Search your BSC address
   - Confirm incoming Flux-BSC transaction
4. If balance doesn't update, try refreshing the app or manually syncing

**Expected timeline:** 1-2 hours for Base ↔ BSC swaps

### Common Mistakes to Avoid

1. **Mixing up gas tokens:**
   - Don't assume ETH on Ethereum mainnet works for Base
   - Each chain needs its own native gas token

2. **Insufficient gas on destination:**
   - You can't use received Flux tokens without gas on that chain
   - Always have gas ready on destination before bridging

3. **Wrong destination address:**
   - Verify you're sending to the correct chain's address
   - Base addresses look identical to Ethereum addresses (EVM)
   - Triple-check before confirming

4. **Ignoring provider fees:**
   - Account for 0.5-2% provider fees
   - You'll receive less than you send
   - Factor this into your swap amount

5. **Bridging during maintenance:**
   - Check provider status before large swaps
   - Avoid bridging during known network congestion

## Alternative Bridging Methods

If Fusion bridge swaps are unavailable or unsuitable, consider these alternatives:

### 1. Native Flux Bridge

**When to use:** Bridging between native FLUX and Flux parallel assets

**Advantages:**
- Official Flux bridge
- No KYC requirements
- Potentially lower fees
- Direct bridge, not a swap

**Disadvantages:**
- May have different chains supported
- Requires understanding of bridge mechanics
- Separate interface from ZelCore

**Access:** Visit the official Flux bridge documentation or dApp

### 2. Centralized Exchange Route

**When to use:** Large amounts, want to avoid KYC via swap providers, or need specific chains

**Process:**
1. Send Flux parallel asset to centralized exchange
2. Trade to a stable coin or major crypto
3. Withdraw to desired chain

**Advantages:**
- Often faster for large amounts
- KYC already completed
- Can change chains easily

**Disadvantages:**
- Requires exchange account
- Trading fees plus withdrawal fees
- Not all exchanges support all Flux parallel assets
- Requires trust in centralized entity

**Supported exchanges:** Check CoinMarketCap or CoinGecko for exchanges listing FLUX

### 3. Multi-Hop Swaps

**When to use:** Direct route unavailable or has issues

**Example:** Flux-BASE → FLUX native → Flux-BSC (two separate swaps)

**Advantages:**
- Can work around provider limitations
- More route options

**Disadvantages:**
- Double the fees
- More time required
- More gas needed
- More complexity and potential failure points

## Troubleshooting Specific Chain Issues

### Base Network Issues

**Common problems:**
- "Insufficient ETH on Base" despite having ETH on mainnet
- Transactions failing due to Base network congestion (rare)
- Base not showing up in provider options

**Solutions:**
1. Bridge ETH from mainnet to Base using official Base bridge
2. Verify you're on Base network, not Ethereum mainnet in ZelCore
3. Check Base network status: status.base.org
4. Ensure ZelCore is updated (older versions may have Base integration issues)

### BSC Network Issues

**Common problems:**
- Wrong network selected (Beacon Chain vs Smart Chain)
- BNB showing but can't pay transaction fees
- High slippage or failed swaps

**Solutions:**
1. Verify you're using BNB Smart Chain (BSC), not Binance Beacon Chain
2. Ensure you have BEP-20 BNB, not BEP-2
3. Check BSC network status: bscscan.com
4. Increase slippage tolerance if swaps failing

### Ethereum Mainnet Issues

**Common problems:**
- High gas fees making small swaps uneconomical
- Transactions stuck pending for hours
- Out of gas errors

**Solutions:**
1. Check gas prices on etherscan.io before swapping
2. Use fast gas settings for time-sensitive swaps
3. Consider waiting for lower gas periods (weekends, late night UTC)
4. For small amounts, use Layer 2 solutions (like Base) instead

### Solana Issues

**Common problems:**
- "Account not rent-exempt" errors
- Transaction failures despite sufficient gas
- Provider liquidity issues for Flux-SOL

**Solutions:**
1. Ensure you have at least 0.01 SOL (more than minimum rent-exempt amount)
2. Check Solana network status: status.solana.com
3. Solana can have network congestion; retry if transaction fails
4. Flux-SOL less common, may need to use alternative route

### Tron Issues

**Common problems:**
- Energy/bandwidth confusion (Tron's resource model)
- Insufficient TRX for fees
- Provider processing delays

**Solutions:**
1. Maintain at least 20-50 TRX for fees and resources
2. Understand Tron uses energy/bandwidth for smart contracts
3. Check Tronscan.org for network status
4. TRX swaps usually fast; delays typically provider-side

### Avalanche Issues

**Common problems:**
- Wrong chain selected (X-Chain vs C-Chain)
- Insufficient AVAX for fees
- Provider routing issues

**Solutions:**
1. Ensure you're using C-Chain (Contract Chain) for Flux-AVAX
2. Verify you have at least 0.1 AVAX for multiple transactions
3. Check Avalanche network status: status.avax.network
4. C-Chain addresses start with 0x (EVM-compatible)

## Gas Acquisition Strategies

### Strategy 1: Small Initial Swap

Use Fusion to acquire gas tokens by swapping a small amount:

1. Identify which gas token you need (ETH on Base, BNB on BSC, etc.)
2. Swap a small amount of any asset you have to that gas token
3. Ensure the swap is on the correct network
4. Use this gas for your larger bridge swap

**Example:** Have Flux-BASE but no ETH on Base? Swap $5 worth of Flux-BASE to ETH on Base first.

### Strategy 2: Centralized Exchange Withdrawals

Withdraw gas tokens directly to the correct network:

1. Check which networks your exchange supports for withdrawals
2. Select the correct network (e.g., "Base" for Base ETH, "BSC" for BNB)
3. Withdraw small amount of gas token (e.g., $5-10 worth)
4. Verify it arrives on correct chain in ZelCore
5. Use for your bridge swaps

**Tip:** Coinbase has excellent Base network support for ETH withdrawals.

### Strategy 3: Multi-Asset Approach

Keep small amounts of gas tokens on all chains you use:

**Recommended baseline:**
- Base: $2-5 worth of ETH
- BSC: $2-5 worth of BNB
- Ethereum: $10-20 worth of ETH (higher due to gas costs)
- Solana: $2-5 worth of SOL
- Tron: $5-10 worth of TRX
- Avalanche: $5-10 worth of AVAX

**Benefits:**
- Always ready to transact
- Avoid emergency gas acquisition
- Reduces friction in bridge swaps

**Maintenance:** Top up when gas tokens get low.

### Strategy 4: Bridge Native Gas First

Before bridging Flux parallel assets, bridge gas tokens:

1. Identify destination chain
2. Bridge gas token to that chain first
3. Then bridge Flux parallel asset
4. Now you can interact with received Flux tokens

**Example for Base:**
1. Bridge ETH from Ethereum mainnet to Base using bridge.base.org
2. Then bridge Flux-BASE using Fusion
3. You now have both Flux-BASE and ETH on Base

## Provider-Specific Tips for Flux Bridges

### ChangeHero

**Best for:** Flux-BSC and Flux-ETH routes

**Characteristics:**
- Usually competitive rates for Flux swaps
- Moderate KYC threshold ($1,000-$1,500)
- Email support responsive in 12-24 hours

**Tips:**
- Good for mid-size swaps ($500-$2,000)
- Less strict on KYC than some providers
- Check their status page before large swaps

### ChangeNow

**Best for:** Fast processing, Flux-BASE routes

**Characteristics:**
- Fast automated processing
- Live chat support available
- Stricter KYC policies (can trigger at $500+)
- Good Base network integration

**Tips:**
- Best for smaller amounts (&lt;$500)
- Use live chat for quick issue resolution
- More likely to require KYC on first swap

### SimpleSwap

**Best for:** Less common routes, Flux-TRX

**Characteristics:**
- Supports wider variety of chains
- Telegram support can be helpful
- Moderate fees
- Good for uncommon Flux parallel asset pairs

**Tips:**
- Try if other providers show "No providers available"
- Response times vary (2-48 hours)
- Sometimes best rates on TRX and SOL routes

### Changelly

**Best for:** Large amounts with KYC already completed

**Characteristics:**
- More formal KYC process
- Typically requires KYC for >$1,000
- Detailed support ticket system
- Established reputation

**Tips:**
- Good if you don't mind KYC
- Better for large, infrequent swaps
- Slower support response (24-48 hours)
- More thorough compliance screening

## Security Considerations

### Verify Addresses

**Always double-check:**
1. Destination address is correct for the destination chain
2. Address is yours (not copied from clipboard malware)
3. Address format matches expected format for that chain

**Best practice:** Send small test amount first for new routes or addresses.

### Provider Legitimacy

**Only use swaps created through ZelCore:**
- Ensures provider addresses are legitimate
- Protects against phishing sites
- ZelCore integration is verified

**Never:**
- Use provider websites found through search engines
- Send to addresses from unsolicited emails
- Trust provider addresses from unofficial sources

### Private Key Safety

**During bridging:**
- Never share private keys or seed phrases
- Providers will NEVER ask for your keys
- KYC is separate from key custody
- Only ZelCore (your wallet) needs your keys to sign transactions

### Amount Limits

**Risk management:**
- Start with small test swaps for new routes
- Don't bridge more than you can afford to have in limbo for 48 hours
- Split very large amounts into multiple swaps
- Consider insurance/security for large amounts

## FAQ Specific to Flux Bridge

### Do I need FLUX native to bridge between parallel assets?

No, you can bridge directly between parallel assets (e.g., Flux-BASE to Flux-BSC) using Fusion. You don't need to go through native FLUX.

However, some routes may not be directly available. In that case, you might need to:
1. Bridge to native FLUX first
2. Then bridge to desired parallel asset

Or use a centralized exchange route.

### Which Flux parallel asset has the most liquidity?

**Highest liquidity:**
1. Flux-BSC - Most common, best provider support
2. Flux-ETH - Ethereum mainnet, widely available
3. Native FLUX - Original chain

**Moderate liquidity:**
4. Flux-BASE - Growing, good Base integration
5. Flux-AVAX - Decent support

**Lower liquidity:**
6. Flux-SOL - Less common, occasional provider issues
7. Flux-TRX - Supported but less frequent

**Tip:** For fastest, most reliable swaps, use Flux-BSC or Flux-ETH.

### Can I bridge Flux parallel assets using the native Flux bridge?

The native Flux bridge and Fusion bridge are different systems:

- **Native Flux bridge:** Official Flux ecosystem bridge, connects native FLUX to parallel assets
- **Fusion bridge:** ZelCore's swap aggregator using third-party providers

Check Flux official documentation for native bridge capabilities. Some users prefer native bridge for larger amounts to avoid KYC.

### Why are providers unavailable for my Flux bridge route?

**Common reasons:**
1. **Route not supported:** Not all providers support all Flux parallel asset pairs
2. **Low liquidity:** Uncommon pairs may not have provider liquidity
3. **Maintenance:** Provider temporarily offline
4. **Regional restrictions:** Some providers limit access by region (less common)

**Solutions:**
- Try a different time or day
- Use a multi-hop route (e.g., Flux-BASE → native FLUX → Flux-BSC)
- Check provider status pages
- Use centralized exchange route

### How long does Flux bridge KYC take?

**Typical timeline:**
- Document submission: 5-10 minutes
- Provider review: 24-72 hours
- Fast cases: 12-24 hours
- Complex cases: Up to 5 business days

**Factors affecting speed:**
- Provider workload (weekends slower)
- Quality of submitted documents
- Complexity of compliance checks
- First-time KYC vs existing customer

**After approval:** Your swap processes normally, and future swaps with that provider may have higher limits without additional KYC.

## Sending Flux Tokens to Exchanges: Network Selection Critical

One of the most common issues Flux users encounter is confusion when depositing FLUX to centralized exchanges. Because FLUX exists on multiple chains (native FLUX, Flux-ETH, Flux-BSC, Flux-BASE, etc.), selecting the correct network is critical.

### Understanding Exchange Deposits

**Key concept:** When depositing FLUX to an exchange, you must match the exchange's supported network exactly. Sending FLUX on the wrong network can result in lost funds.

**Common mistake scenario:**

1. User has native FLUX in ZelCore
2. Exchange supports "FLUX (ERC20)" or "FLUX-BSC"
3. User sends native FLUX to the exchange's deposit address
4. Funds arrive on wrong blockchain
5. Exchange cannot credit the deposit (different chain)
6. Recovery process required (if possible)

### Before Depositing to Any Exchange

**Step 1: Identify which Flux networks the exchange supports**

Different exchanges support different Flux parallel chains:

**Common exchange network support:**

- **Binance:** May support native FLUX, Flux-BSC (BEP20), Flux-ETH (ERC20)
- **KuCoin:** Check their deposit page for supported networks
- **Gate.io:** Typically supports multiple Flux chains
- **Other exchanges:** Verify on their deposit page

**How to check:**

1. Log into your exchange account
2. Navigate to deposit section
3. Search for "FLUX"
4. Look for network dropdown or network indicators
5. Note which networks are available

**Step 2: Verify you have FLUX on a supported network**

In ZelCore, check which Flux parallel asset you own:

- **FLUX (native)** - Native Flux blockchain
- **Flux-ETH** - FLUX on Ethereum (ERC20)
- **Flux-BSC** - FLUX on BNB Smart Chain (BEP20)
- **Flux-BASE** - FLUX on Base network
- **Flux-SOL** - FLUX on Solana
- **Flux-TRX** - FLUX on Tron
- **Flux-AVAX** - FLUX on Avalanche

**Step 3: Match your asset to exchange's supported network**

| You Have in ZelCore | Exchange Shows | Can Deposit? |
|---------------------|----------------|--------------|
| FLUX (native) | "FLUX" or "FLUX (Native)" | Yes |
| Flux-ETH | "FLUX (ERC20)" or "FLUX-ETH" | Yes |
| Flux-BSC | "FLUX (BEP20)" or "FLUX-BSC" | Yes |
| Flux-BASE | "FLUX (BASE)" | Yes (if exchange supports) |
| FLUX (native) | "FLUX (ERC20)" only | No - must bridge first |
| Flux-ETH | "FLUX (Native)" only | No - must bridge first |
| Flux-BSC | "FLUX (ERC20)" | No - different networks |

**Critical:** If you don't have FLUX on the exchange's supported network, you must bridge before depositing.

### Depositing FLUX to Exchange: Step-by-Step

**Scenario: Depositing native FLUX to Binance (supporting native FLUX network)**

**Step 1: Verify exchange network support**

1. Log into Binance
2. Go to Wallet > Fiat and Spot > Deposit
3. Search for "FLUX"
4. Check network dropdown
5. Confirm "FLUX" (native) is an option
6. Select "FLUX" (native) network

**Step 2: Get deposit address from exchange**

1. With "FLUX" network selected, click deposit address
2. Exchange generates deposit address
3. **Copy the address carefully**
4. Optional: Note any memo/tag if required (usually not for FLUX)
5. Screenshot the deposit page showing:
   - The address
   - The selected network
   - Any warnings or requirements

**Step 3: Verify in ZelCore you have native FLUX**

1. Open ZelCore
2. Find "FLUX" (not Flux-ETH, Flux-BSC, etc.)
3. Confirm you have sufficient balance
4. Ensure you have enough for:
   - Amount to deposit
   - Network transaction fees (usually small for native FLUX)

**Step 4: Send from ZelCore**

1. In ZelCore, select FLUX (native)
2. Click "Send"
3. Paste the exchange deposit address
4. **Double-check the address** character by character
5. Enter amount to send
6. Review transaction fee
7. Confirm and send transaction

**Step 5: Monitor transaction**

1. Copy transaction hash from ZelCore
2. Check on Flux explorer: explorer.runonflux.io
3. Wait for confirmations (typically 10-20 confirmations)
4. Exchange will credit after required confirmations

**Step 6: Verify deposit credited**

1. Check exchange deposit history
2. Status should show:
   - "Awaiting confirmations" → "Processing" → "Completed"
3. Balance should update in your exchange wallet
4. If delayed beyond stated time, check transaction on explorer

**Expected timeline:**
- Native FLUX: 10-30 minutes
- Flux-BSC: 3-10 minutes
- Flux-ETH: 10-30 minutes (can be longer during high gas)
- Flux-BASE: 5-15 minutes

### Common Exchange Deposit Mistakes

**Mistake 1: Wrong network selected**

**Problem:**
- Have Flux-BSC
- Exchange shows "FLUX (ERC20)" selected
- Deposit Flux-BSC to ERC20 address
- Funds sent to wrong blockchain

**Prevention:**
- Always verify network matches exactly
- BSC = BEP20, Ethereum = ERC20
- Native FLUX needs "FLUX" or "FLUX (Native)" selection

**Mistake 2: Depositing on unsupported network**

**Problem:**
- Exchange only supports native FLUX
- User deposits Flux-ETH (ERC20)
- Exchange doesn't have that network enabled
- Funds in limbo or unrecoverable

**Prevention:**
- Check exchange supported networks BEFORE sending
- If exchange doesn't support your network, bridge first
- Don't assume all exchanges support all Flux chains

**Mistake 3: Copying wrong address**

**Problem:**
- Multiple deposit addresses for different networks
- User copies Ethereum address while BSC network selected
- Or vice versa
- Address format may look similar (both EVM chains)

**Prevention:**
- Screenshot entire deposit page
- Verify network selection before copying address
- Double-check address immediately after pasting
- Send small test amount first

**Mistake 4: Insufficient network fees**

**Problem:**
- Try to deposit all FLUX
- Don't account for transaction fees
- Transaction fails or insufficient to send

**Prevention:**
- Leave small amount for network fees
- Example: If depositing 100 FLUX, send 99.5 FLUX
- Check estimated fee before sending entire balance

**Mistake 5: Exchange deposit temporarily suspended**

**Problem:**
- Exchange pauses FLUX deposits for maintenance
- User sends deposit anyway
- Transaction succeeds on blockchain but exchange doesn't credit
- Funds held until maintenance completes

**Prevention:**
- Check exchange announcements before depositing
- Look for "Deposits suspended" warnings on deposit page
- If suspended, wait for resumption before sending

### If You Sent FLUX to Wrong Network

**Scenario: Sent native FLUX to exchange's ERC20 address (or vice versa)**

**Immediate actions:**

1. **Don't panic** - Funds are not immediately lost
2. **Verify the transaction** on appropriate blockchain explorer
3. **Gather all information:**
   - Transaction hash
   - Sending address (your ZelCore address)
   - Receiving address (exchange address)
   - Network you sent on
   - Network exchange expected
   - Amount sent
   - Date and time of transaction

**Contact exchange support immediately:**

1. Open support ticket with exchange
2. Title: "Deposit on wrong network - FLUX"
3. Include all gathered information
4. Explain clearly:
   - You have FLUX on [your network]
   - Exchange's deposit was set to [different network]
   - You accidentally sent on wrong network
   - Request manual credit or assistance

**What to expect:**

**Best case:**
- Exchange has access to both networks
- They can manually locate and credit deposit
- May charge recovery fee (varies by exchange)
- Timeline: 3-14 days typically

**Moderate case:**
- Exchange supports the network you sent on, just not for FLUX
- They may be able to access funds with effort
- Higher recovery fee possible
- Timeline: 1-4 weeks

**Worst case:**
- Exchange doesn't support the network at all
- Funds may be unrecoverable through exchange
- May require technical recovery (if possible)
- Could be permanent loss

**Prevention is key:** Always verify network selection before sending.

### Bridging Before Exchange Deposit

If you have FLUX on a network your exchange doesn't support, bridge first:

**Example: Have Flux-BASE, exchange only supports native FLUX**

**Option 1: Use Fusion to bridge (via swap providers)**

1. In ZelCore, go to Fusion
2. Swap Flux-BASE → FLUX (native)
3. Wait for swap to complete (1-3 hours typically)
4. Then deposit native FLUX to exchange

**See the main sections of this guide for detailed Fusion bridging instructions.**

**Option 2: Use native Flux bridge**

1. Access official Flux bridge (check Flux documentation)
2. Bridge Flux-BASE → native FLUX
3. May have different fees and timeline than Fusion
4. Then deposit to exchange

**Option 3: Use different exchange**

1. Find exchange supporting your current network
2. Deposit Flux-BASE to that exchange
3. Trade or withdraw on desired network
4. Send to original exchange if needed

**Recommendation:** If depositing to exchange frequently, keep FLUX on the networks your exchanges support. Avoid unnecessary bridging fees and wait times.

### Exchange-Specific Tips

**Binance:**
- Typically supports multiple Flux networks
- Very clear network selection dropdown
- Suspends deposits occasionally for maintenance
- Fast crediting after confirmations (usually 15-30 mins)
- Has recovery process for wrong network deposits (with fees)

**KuCoin:**
- Check network options carefully on deposit page
- Sometimes lists networks differently (e.g., "Flux Chain" vs "FLUX")
- Good support for wrong network recovery
- May have minimum deposit amounts

**Gate.io:**
- Usually supports several Flux chains
- Network selection very visible
- Fast deposit processing
- Clear confirmation requirements shown

**Smaller exchanges:**
- May only support one Flux network
- Verify carefully which network before signing up
- Recovery for wrong network may be difficult or impossible
- Consider using larger exchanges for better support

### Best Practices for Exchange Deposits

1. **Always do small test deposit first**
   - Send $10-20 worth to test
   - Verify it credits correctly
   - Then send larger amount

2. **Screenshot everything**
   - Exchange deposit page with network selected
   - Address being copied
   - ZelCore send confirmation
   - Transaction hash
   - Useful if support needed

3. **Verify network matches exactly**
   - Check ZelCore asset name
   - Check exchange network selection
   - Confirm they're the same chain
   - Don't assume based on address format

4. **Account for fees**
   - Leave buffer for transaction fees
   - Don't try to send entire balance
   - Check fee estimate before confirming

5. **Check exchange status**
   - Look for "Deposits suspended" warnings
   - Check exchange announcements
   - Verify network is operational
   - Don't send during maintenance windows

6. **Save transaction details**
   - Transaction hash
   - Deposit address used
   - Amount and network
   - Timestamp
   - Needed for support if issues arise

7. **Understand confirmation requirements**
   - Exchange shows required confirmations
   - Native FLUX: typically 10-20 confirmations
   - Flux-BSC: typically 15-20 confirmations
   - Flux-ETH: typically 12-20 confirmations
   - Don't expect instant credit

8. **Use address book**
   - Save exchange deposit address in ZelCore
   - Label clearly with exchange name and network
   - Example: "Binance FLUX Native Deposit"
   - Reduces risk of using wrong address

### Withdrawing FLUX from Exchanges

**Equally important:** When withdrawing from exchange to ZelCore, same network matching applies.

**Before withdrawing:**

1. **Choose network on exchange**
   - Select which Flux network to withdraw on
   - Consider fees (BSC usually cheaper than Ethereum)
   - Consider speed (BSC, BASE usually faster)

2. **Get correct receiving address from ZelCore**
   - In ZelCore, select the matching Flux asset
   - For BSC withdrawal: Use Flux-BSC address
   - For native: Use FLUX (native) address
   - Go to Receive tab
   - Copy address

3. **Paste address in exchange withdrawal**
   - Verify network selection matches ZelCore asset
   - Double-check address
   - Enter amount
   - Confirm withdrawal

4. **Wait for arrival**
   - Exchange processes withdrawal (varies by exchange)
   - Blockchain confirmations
   - Should appear in ZelCore after confirmations

**Expected withdrawal times:**
- Exchange processing: 5 minutes - 2 hours (varies widely)
- Blockchain confirmation: 5-30 minutes (depends on network)
- Total: 30 minutes - 3 hours typically

### FAQ: Exchange Deposits

**Q: Can I deposit native FLUX to an exchange that only lists "FLUX (ERC20)"?**

No. You must bridge native FLUX to Flux-ETH first, then deposit the ERC20 version.

**Q: How do I know which Flux network my exchange supports?**

Check the deposit page on the exchange. It will show a network dropdown or network indicators (ERC20, BEP20, Native, etc.). If unclear, contact exchange support before depositing.

**Q: I sent FLUX on the wrong network 3 days ago. Exchange support hasn't responded. What should I do?**

Continue following up with exchange support every 2-3 days. Include ticket number in follow-ups. Recovery can take 1-4 weeks. If no response after 2 weeks, escalate through exchange's official channels (social media, community forums).

**Q: Does ZelCore charge fees for depositing to exchanges?**

ZelCore doesn't charge fees. You only pay the blockchain network transaction fee, which goes to miners/validators, not to ZelCore.

**Q: Why does my exchange require 20 confirmations for FLUX deposits?**

Exchanges set confirmation requirements for security. More confirmations reduce the risk of blockchain reorganizations affecting deposits. Native FLUX typically requires 10-20 confirmations (10-30 minutes).

**Q: Can I deposit Flux parallel assets directly between exchanges?**

Yes, but verify both exchanges support the same network. Example: If Exchange A supports Flux-BSC and Exchange B also supports Flux-BSC, you can withdraw from A (BSC) and deposit to B (BSC). Always verify network support on both ends.

**Q: What's the cheapest network for depositing/withdrawing FLUX?**

Currently:
- **Cheapest:** Flux-BSC (BSC fees ~$0.10-0.50) or Flux-TRX (Tron fees ~$0.01-0.20)
- **Moderate:** Native FLUX (~$0.01-0.10), Flux-BASE (~$0.01-0.10)
- **Expensive:** Flux-ETH (Ethereum fees $2-50+, varies greatly)

Choose based on exchange support and your needs.

**Q: My exchange deposit is "pending" for hours. Is this normal?**

Check the blockchain explorer to verify:
1. Transaction succeeded on blockchain
2. Number of confirmations received
3. Compare to exchange's required confirmations

If blockchain shows enough confirmations but exchange still pending, contact exchange support with transaction hash.

## When to Contact Support

### Contact Exchange Provider Support

Contact the swap provider (ChangeHero, ChangeNow, SimpleSwap, Changelly) if:

- Swap on "Hold" for more than 48 hours
- "Awaiting confirmation" despite 20+ confirmations
- Swap shows "Finished" but funds not received
- Need to provide KYC documents
- Swap stuck for more than 6 hours (normal routes)
- Provider-specific error messages

**Include in your message:**
- Order ID
- Source transaction hash
- Destination address
- Clear description of issue
- How long you've been waiting

### Contact ZelCore Support

Contact ZelCore support if:

- Cannot find your order ID in app
- ZelCore not showing status updates
- App crashes when trying to access Fusion
- Need help determining which provider to contact
- Provider unresponsive for 5+ business days
- Suspect ZelCore app issue (not provider issue)

**ZelCore Support:**
- Discord: Official ZelCore Discord server
- Email: support@zel.network
- Twitter: @zelcore

### Contact Flux Support

Contact Flux team if:

- Questions about native Flux bridge vs Fusion
- Flux parallel asset technical questions
- Issues with Flux blockchain itself
- Questions about Flux tokenomics or parallel asset system

**Flux Support:**
- Official Flux Discord
- Flux website: runonflux.io
- Twitter: @RunOnFlux

## Related Documentation

- [Troubleshooting Fusion Swap Issues](../../guides/troubleshooting-fusion-swap-issues/) - General Fusion troubleshooting
- [Fusion FAQ](../../faq/fusion-faq/) - Common Fusion questions
- Understanding Blockchain Confirmations - Learn about confirmations
- [ZelCore Security Best Practices](../../security/best-practices/) - Keep your assets secure

## Summary and Best Practices

**Key takeaways:**

1. **Flux parallel assets exist on different blockchains** - Each requires the native gas token of that blockchain
2. **Gas preparation is critical** - Have gas on both source and destination chains before bridging
3. **Fusion uses swap providers** - These are third-party services with KYC, holds, and varying support
4. **Common errors are gas-related** - Most issues stem from insufficient or wrong gas tokens
5. **Pre-bridge checklist prevents problems** - Review requirements before initiating swaps
6. **Provider contact is key** - For stuck swaps, contact the provider directly with your order ID

**Best practices:**

- Maintain small gas token balances on all chains you use
- Start with small test swaps on new routes
- Keep swap amounts under $1,000 to reduce KYC likelihood
- Save order IDs and transaction hashes immediately
- Understand gas requirements before bridging
- Allow 2-4 hours for normal swaps to complete
- Use established routes (Flux-BSC, Flux-ETH) for fastest processing
- Check provider status before large swaps
- Never bridge amounts you need immediate access to

**Remember:** Bridging Flux parallel assets through Fusion is a swap operation handled by third-party providers. Plan accordingly, prepare gas tokens, and allow sufficient time for processing.

For urgent issues or time-sensitive swaps, consider using centralized exchange routes or the native Flux bridge as alternatives.
