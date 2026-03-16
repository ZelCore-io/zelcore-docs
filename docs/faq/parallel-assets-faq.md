---
sidebar_position: 7
---

# Parallel Assets FAQ

## What are Flux Parallel Assets (PA)?

**Answer:**

Flux Parallel Assets (PA) are rewards distributed to FluxNode operators who participate in the Flux parallel mining ecosystem. These assets represent claimable amounts of various Flux parallel chain tokens.

**Key characteristics:**

- **Earned by:** FluxNode operators participating in parallel mining
- **Types:** Various Flux parallel assets (Flux-BASE, Flux-BSC, Flux-ETH, Flux-SOL, Flux-TRX, Flux-AVAX)
- **Accumulation:** PA credits build up over time based on node activity
- **Claiming:** Must be manually claimed through Fusion interface in ZelCore
- **Distribution:** Can claim to specific parallel chains or use "Claim All" to consolidate to native FLUX

**Related:**
- [Claiming Flux Parallel Assets: Complete Guide](../../guides/claiming-parallel-assets/)

---

## How do I claim my Parallel Assets rewards?

**Answer:**

PA rewards are claimed through the Fusion interface in ZelCore. There are two main methods:

**Method 1: Claim specific parallel assets**

1. Open ZelCore and navigate to Fusion (or FusionX/SSP)
2. Find the Parallel Assets or PA Claims section
3. Select the parallel asset type you want to claim (Flux-BASE, Flux-BSC, etc.)
4. Enter the amount to claim
5. Ensure you have gas token for that blockchain (ETH for Base, BNB for BSC, etc.)
6. Submit the claim transaction
7. Wait for blockchain confirmations (5-20 minutes)

**Method 2: Use "Claim All" to consolidate to native FLUX**

1. Open Fusion in ZelCore
2. Find the Parallel Assets section
3. Click "Claim All" button
4. Review that ALL PA credits will be converted to native FLUX
5. Ensure you have native FLUX for transaction gas
6. Submit the claim
7. Native FLUX will be sent to your Flux wallet

**Important:** "Claim All" consolidates all PA credits into native FLUX, not to individual parallel chains.

**Related:**
- [Step-by-Step Claiming Guide](../../guides/claiming-parallel-assets/#step-by-step-claiming-parallel-assets)

---

## What does "claiming amount exceeds maximum allowable" mean?

**Answer:**

This error indicates you're attempting to claim more PA credits than allowed in a single transaction, or your accumulated credits exceed system limits.

**Common causes:**

- Individual claim transaction limits exceeded
- PA credits accumulated for too long, reaching high amounts
- Address requires whitelisting for large claims
- Anti-fraud security measures triggering on high-value claims

**Solutions:**

**1. Claim smaller amounts:**
- Split your claim into multiple smaller transactions
- Try claiming 50% of available credits at a time
- Wait a few minutes between claims
- Gradually claim all credits over multiple transactions

**2. Contact Flux support for whitelisting:**
- Join Flux Discord: https://discord.gg/runonflux
- Request whitelisting in #general-support channel
- Provide your Flux wallet address and error details
- Wait 24-48 hours for whitelist approval
- Retry claim after confirmation

**3. Use "Claim All" function:**
- May have different limit thresholds than individual claims
- Consolidates to native FLUX in single transaction
- Can bypass individual parallel asset claim limits

**Prevention:**
- Claim PA rewards regularly (monthly recommended)
- Don't let credits accumulate for extended periods
- Smaller, frequent claims avoid hitting limits

**Related:**
- [Complete Error Solutions Guide](../../guides/claiming-parallel-assets/#error-claiming-amount-exceeds-maximum-allowable)

---

## Why are my PA claims not appearing in ZelCore?

**Answer:**

Several reasons can cause PA credits to not display in the Fusion interface:

**Common causes and solutions:**

**1. Node not participating in parallel mining:**
- Verify your FluxNode is enrolled in parallel mining activities
- Check node status is CONFIRMED (not DOS or EXPIRED)
- Contact Flux support to confirm parallel mining participation
- Not all nodes automatically earn PA rewards

**2. Insufficient accumulation time:**
- PA credits take time to accumulate (typically 1-4 weeks for meaningful amounts)
- New nodes or recently confirmed nodes won't show credits immediately
- Check back after your node has been active for a few weeks

**3. Recently claimed:**
- If you claimed recently, credits will be zero temporarily
- New credits take time to accumulate after claiming
- Check your Fusion transaction history to verify recent claims

**4. ZelCore sync issue:**
- Close and completely restart ZelCore
- Navigate to Settings → Sync or Refresh
- Manually sync all wallets
- Return to Fusion PA Claims section
- Credits should now appear if they exist

**5. Node status preventing accumulation:**
- DOS or EXPIRED status pauses PA accumulation
- Resolve node issues first using [Flux Node Troubleshooting Guide](../../guides/troubleshooting-flux-node-status-issues/)
- Once node returns to CONFIRMED, PA accumulation resumes

**Verification steps:**

1. Check FluxNode status in ZelCore FluxNodes app (should be CONFIRMED)
2. Verify node has been active and CONFIRMED for sufficient time
3. Restart ZelCore and manually sync
4. Check Fusion transaction history for recent claims
5. Contact Flux support if node is eligible but credits still missing

**Related:**
- [Troubleshooting PA Claims Not Appearing](../../guides/claiming-parallel-assets/#error-pa-claims-not-appearing-or-no-claimable-pa-credits)

---

## What does "Claim All" do and why did I get native FLUX instead of parallel assets?

**Answer:**

"Claim All" is working as designed. This function consolidates ALL your PA credits into native FLUX, regardless of which parallel chains the credits represent.

**How "Claim All" works:**

- Aggregates all PA credits (Flux-BASE, Flux-BSC, Flux-ETH, etc.)
- Converts total value to native FLUX equivalent
- Sends consolidated FLUX to your native Flux wallet
- Single transaction on Flux blockchain
- Requires only native FLUX for gas fee

**What "Claim All" does NOT do:**

- Does NOT send Flux-BASE to Base network
- Does NOT send Flux-BSC to BSC
- Does NOT distribute to multiple parallel chains
- Does NOT preserve parallel asset diversity

**When to use "Claim All":**

Use if you want:
- Native FLUX instead of parallel assets
- Simplicity (one transaction vs multiple)
- Gas savings (one fee instead of multiple chain fees)
- Don't need holdings on specific parallel chains

**When to use individual claims:**

Claim individually if you want:
- Specific parallel assets on their blockchains
- Portfolio diversified across multiple chains
- To use parallel assets for trading or DeFi on specific chains
- Holdings of Flux-BASE, Flux-BSC, Flux-ETH, etc.

**If you wanted parallel assets but used "Claim All":**

You can bridge your native FLUX to parallel assets:
1. Use Fusion bridge in ZelCore
2. Bridge native FLUX to desired parallel chain (Flux-BASE, Flux-BSC, etc.)
3. Follow [Flux Fusion Bridge Guide](../../guides/flux-fusion-bridge-guide/)
4. Result: Same end goal, just requires additional bridging step

**Related:**
- [Understanding "Claim All" Behavior](../../guides/claiming-parallel-assets/#issue-claim-all-consolidates-to-native-flux-not-parallel-assets)

---

## What gas do I need to claim Parallel Assets?

**Answer:**

Gas requirements depend on which parallel asset you're claiming (or if using "Claim All"):

**Gas by parallel asset type:**

- **Claiming Flux-BASE:** Requires ETH on Base network (NOT Ethereum mainnet)
- **Claiming Flux-BSC:** Requires BNB on BNB Smart Chain
- **Claiming Flux-ETH:** Requires ETH on Ethereum mainnet
- **Claiming Flux-SOL:** Requires SOL on Solana
- **Claiming Flux-TRX:** Requires TRX on Tron
- **Claiming Flux-AVAX:** Requires AVAX on Avalanche C-Chain
- **Using "Claim All":** Requires native FLUX for transaction fee

**Recommended gas amounts to maintain:**

- Base/BSC/SOL/TRX: $2-5 worth of native gas token
- Ethereum mainnet: $10-20 worth of ETH (higher gas costs)
- Avalanche: $5-10 worth of AVAX
- Native FLUX (for "Claim All"): 1-2 FLUX

**How to get gas tokens:**

**Option 1: Exchange withdrawals**
- Withdraw gas token from centralized exchange
- **Critical:** Select correct network (Base for Flux-BASE, BSC for Flux-BSC, etc.)
- Send to your ZelCore wallet address for that network

**Option 2: Bridge between chains**
- Example: Bridge ETH from Ethereum mainnet to Base using bridge.base.org
- Use official bridges for each blockchain
- Wait for bridge completion (5-30 minutes)

**Option 3: Use Fusion to acquire gas**
- If you have other assets on target chain, swap small amount to gas token
- Example: Have USDT on BSC? Swap $5 to BNB for gas

**Option 4: Use "Claim All" to simplify**
- Only requires native FLUX for gas
- Avoids need for multiple gas tokens across chains
- Consolidates all PA to native FLUX

**Important:** You cannot claim without sufficient gas on the claiming blockchain. Acquire gas before attempting claims.

**Related:**
- [Gas Acquisition Strategies](../../guides/claiming-parallel-assets/#gas-acquisition-strategies-for-pa-claims)
- [Flux Fusion Bridge Guide: Gas Requirements](../../guides/flux-fusion-bridge-guide/#gas-requirements-for-each-chain)

---

## Why does my claim require whitelisting?

**Answer:**

Whitelisting is a security measure managed by the runonflux snapshot/whitelist service to protect PA distribution integrity.

**When whitelisting is required:**

- **First-time PA claimants:** New addresses claiming for the first time
- **High claim amounts:** Large accumulated PA credits trigger verification
- **Address verification:** Ensures claiming addresses are legitimate FluxNode operator addresses
- **Security flags:** Addresses flagged for additional verification
- **Anti-fraud measures:** Protects against fraudulent claims

**How to get whitelisted:**

**Step 1: Verify eligibility**
- Confirm your FluxNode is CONFIRMED status
- Verify you're using your registered FluxNode address
- Check node has been active and participating in parallel mining

**Step 2: Contact Flux support**
1. Join Flux Discord: https://discord.gg/runonflux
2. Navigate to #general-support or #parallel-assets channel
3. Post a clear request with:
   - Your Flux wallet address
   - Node tier (Cumulus/Nimbus/Stratus)
   - Error message received when attempting claim
   - Amount attempting to claim
4. Wait for Flux team response

**Step 3: Provide verification if requested**
- Proof of FluxNode ownership
- Transaction history
- Additional address verification
- Screenshots of errors

**Step 4: Wait for whitelist processing**
- Typically completed within 24-48 hours
- May take up to 72 hours during high volume
- Confirmation provided in Discord thread
- No email notification sent

**Step 5: Retry claim**
- Once confirmed whitelisted, retry your PA claim
- Should now succeed
- If still failing, report back to support

**Prevention:**
- Claim PA rewards regularly to avoid large accumulations requiring whitelisting
- Maintain CONFIRMED node status consistently
- Respond promptly to any Flux team verification requests

**Related:**
- [Complete Whitelisting Guide](../../guides/claiming-parallel-assets/#issue-whitelisting-required)

---

## How often should I claim my PA rewards?

**Answer:**

**Recommended claiming frequency: Monthly**

This balances gas costs, convenience, and avoiding accumulation issues.

**Claiming frequency guidelines:**

**Monthly (Recommended):**
- Good balance between gas costs and accumulation
- Prevents excessive buildup that could trigger limits or whitelisting
- Gas costs justified by claim amounts
- Easy to maintain as routine

**When credits reach meaningful amounts:**
- Claim when value justifies gas costs on that blockchain
- Low-gas chains (BSC, SOL, TRX): Can claim more frequently
- High-gas chains (ETH mainnet): Let accumulate longer to justify gas
- Balance cost of gas against claim value

**Quarterly (Minimum):**
- Avoid claiming less frequently than every 3 months
- Very old accumulated credits may require whitelisting
- Large amounts may hit "exceeds maximum allowable" limits
- Risk of claim process changes over time

**Avoid these patterns:**

**Too frequent (weekly or more):**
- Wastes gas on small claim amounts
- Gas fees may exceed claim value
- Unnecessary transaction costs

**Too infrequent (6+ months):**
- High accumulation may require whitelisting
- Risk of hitting maximum claim limits
- More complex troubleshooting if issues arise
- Claim procedures may change with Flux updates

**Factors affecting optimal frequency:**

1. **PA accumulation rate:** Higher-earning nodes may claim more often
2. **Gas costs on claim chains:** Claim more often on low-gas chains
3. **Your preference:** Native FLUX ("Claim All") vs specific parallel assets
4. **Market conditions:** May time claims based on gas prices (especially ETH)

**Best practice strategy:**

- Set monthly reminder to check PA credits
- Claim when credits reach $20-50+ value (covers gas with margin)
- For low-gas chains, can claim more frequently
- For Ethereum mainnet claims, wait for favorable gas conditions
- Use "Claim All" for simplest approach (one monthly claim)

**Related:**
- [Claiming Best Practices](../../guides/claiming-parallel-assets/#summary-and-best-practices)

---

## Can I claim PA rewards if my node is in DOS or EXPIRED status?

**Answer:**

**PA accumulation pauses during DOS and EXPIRED states.** You must resolve node status issues before PA credits will resume accumulating.

**Understanding PA accumulation and node status:**

**CONFIRMED status (Normal):**
- PA credits accumulate based on parallel mining activity
- Can claim existing PA credits
- Credits continue accumulating as long as node remains CONFIRMED

**DOS (Denial of Service) status:**
- PA accumulation pauses when node enters DOS
- Cannot earn new PA credits until DOS expires
- Existing PA credits from before DOS should still be claimable
- Must wait for DOS period to expire (typically 24-48 hours)
- Fix underlying issues causing DOS

**EXPIRED status:**
- PA accumulation stops when node expires
- Cannot earn new PA credits until node re-confirmed
- Existing PA credits from before expiration should still be claimable
- Must re-confirm node through ZelCore

**Steps to resume PA accumulation:**

**For DOS status:**
1. Identify cause of DOS (port issues, daemon sync, benchmark failures)
2. Fix underlying problems using [Flux Node Troubleshooting Guide](../../guides/troubleshooting-flux-node-status-issues/)
3. Wait for DOS period to expire (24-48 hours)
4. Verify node returns to CONFIRMED status
5. PA accumulation resumes automatically

**For EXPIRED status:**
1. Ensure node is healthy (daemon synced, benchmark passing, ports accessible)
2. Re-confirm node through ZelCore FluxNodes app
3. Wait for confirmation transaction (6-10 minutes)
4. Node returns to CONFIRMED status
5. PA accumulation resumes

**Claiming existing PA credits:**

- PA credits accumulated before DOS/EXPIRED should remain claimable
- Try claiming through Fusion interface
- If claim fails, wait until node returns to CONFIRMED
- Credits don't disappear, but accumulation is paused

**Prevention:**

- Maintain CONFIRMED node status through regular monitoring
- Address node issues promptly before they cause DOS or EXPIRED
- Keep node daemon synced
- Ensure ports remain accessible
- Monitor benchmark health
- Use UptimeRobot or similar for downtime alerts

**Timeline expectations:**

- Fix node issues: Hours to days depending on problem
- DOS expiration: 24-48 hours after issues resolved
- Re-confirmation: 6-10 minutes for transaction
- PA accumulation resume: Immediate once CONFIRMED
- New credits available: 1-4 weeks depending on activity

**Related:**
- [Troubleshooting Flux Node Status Issues](../../guides/troubleshooting-flux-node-status-issues/)
- [Flux Nodes FAQ: DOS Status](../../faq/flux-nodes-faq/#what-does-it-mean-when-my-flux-node-shows-dos-denial-of-service-status)
- [Flux Nodes FAQ: EXPIRED Status](../../faq/flux-nodes-faq/#why-does-my-node-show-expired-status-and-how-do-i-fix-it)

---

## What's the difference between claiming to parallel chains vs "Claim All" to native FLUX?

**Answer:**

These are two distinct claiming methods with different outcomes:

**Individual Parallel Asset Claims:**

**What it does:**
- Claims specific PA type to its blockchain (Flux-BASE to Base, Flux-BSC to BSC, etc.)
- You receive the parallel asset on that specific chain
- Maintains asset diversity across blockchains
- Multiple transactions if claiming multiple PA types

**Gas required:**
- Native gas token of each claiming blockchain
- Flux-BASE → Need ETH on Base
- Flux-BSC → Need BNB on BSC
- Flux-ETH → Need ETH on Ethereum
- Different gas per chain

**Use when you want:**
- Specific parallel assets for trading or DeFi on those chains
- Portfolio spread across multiple blockchains
- To hold Flux-BASE, Flux-BSC, Flux-ETH separately
- Chain-specific use cases

**"Claim All" Function:**

**What it does:**
- Consolidates ALL PA credits (all types) into native FLUX
- Single transaction on Flux blockchain
- You receive only native FLUX, no parallel assets
- All PA credits cleared at once

**Gas required:**
- Only native FLUX for transaction fee
- 1-2 FLUX recommended
- Much simpler than acquiring gas on multiple chains

**Use when you want:**
- Native FLUX instead of parallel assets
- Simplest claiming process (one transaction)
- Gas cost savings (one fee vs multiple)
- Don't need holdings on specific parallel chains
- Want FLUX for node operations or centralized exchange trading

**Comparison table:**

| Aspect | Individual Claims | "Claim All" |
|--------|------------------|-------------|
| **Result** | Parallel assets on respective chains | Native FLUX only |
| **Transactions** | Multiple (one per PA type) | Single transaction |
| **Gas needed** | Multiple chain gas tokens | Only native FLUX |
| **Gas cost** | Higher (multiple fees) | Lower (single fee) |
| **Complexity** | More complex (manage multiple chains) | Simpler |
| **Portfolio** | Diversified across chains | Consolidated to native FLUX |
| **Use case** | Chain-specific needs, DeFi | General holding, trading |

**Can I change my mind?**

Yes:
- If you used "Claim All" and want parallel assets: Bridge native FLUX to desired parallel chains using Fusion
- If you claimed to parallel chains and want native FLUX: Bridge parallel assets to native FLUX using Fusion
- Bridging adds extra transaction fees and time, but provides flexibility

**Most common choice:**

Many users prefer "Claim All" for:
- Simplicity (one claim action)
- Lower total gas costs
- Native FLUX is most liquid for trading
- Can always bridge later if specific parallel assets needed

**Related:**
- [Understanding "Claim All" Behavior](../../guides/claiming-parallel-assets/#method-2-using-claim-all-to-consolidate-to-native-flux)
- [Flux Fusion Bridge Guide](../../guides/flux-fusion-bridge-guide/)

---

## Do all FluxNodes automatically earn PA rewards?

**Answer:**

**No, not all FluxNodes automatically earn PA rewards.** Parallel Assets are earned specifically through participation in Flux parallel mining activities.

**Requirements for earning PA rewards:**

1. **Active FluxNode:** You must operate a FluxNode (Cumulus, Nimbus, or Stratus tier)
2. **CONFIRMED status:** Node must be in CONFIRMED status (not DOS or EXPIRED)
3. **Parallel mining participation:** Node must be enrolled in parallel mining activities
4. **Eligibility criteria:** Meet any minimum requirements for parallel mining (uptime, performance, etc.)
5. **Active participation:** Node must be actively participating, not just running

**How to verify your node is earning PA:**

**Check 1: Node status**
- Open ZelCore FluxNodes app
- Verify node shows CONFIRMED status
- DOS or EXPIRED nodes don't accumulate PA

**Check 2: Parallel mining participation**
- Consult Flux official documentation on parallel mining enrollment
- Not all nodes are automatically enrolled
- May require specific configuration or opt-in

**Check 3: PA credits accumulation**
- Open Fusion in ZelCore
- Navigate to Parallel Assets or PA Claims section
- After 2-4 weeks of eligible operation, should see PA credits
- If zero after sufficient time, node may not be participating

**Check 4: Contact Flux support**
- Join Flux Discord: https://discord.gg/runonflux
- Ask in #general-support about parallel mining participation
- Provide your FluxNode information
- Team can verify if your node is enrolled

**Common reasons nodes don't earn PA:**

- **Not enrolled in parallel mining:** Enrollment process may be required
- **Insufficient uptime:** Nodes need consistent uptime to participate
- **Performance issues:** Benchmark failures or DOS states interrupt participation
- **Tier restrictions:** Some parallel mining may have tier requirements (verify with Flux team)
- **New nodes:** Very new nodes may have waiting period before PA accumulation begins

**How to enroll in parallel mining (if not enrolled):**

1. Check Flux official documentation for enrollment process
2. May be automatic for CONFIRMED nodes, or may require action
3. Consult Flux Discord #general-support for current enrollment procedures
4. Ensure node meets all technical requirements
5. Verify node has been CONFIRMED for minimum duration

**Timeline for first PA accumulation:**

- After enrollment/confirmation: 1-4 weeks typical
- PA credits accumulate gradually
- Don't expect large amounts immediately
- Regular monthly claims become feasible over time

**Prevention and optimization:**

- Maintain CONFIRMED node status consistently
- Monitor node health regularly
- Keep benchmark passing
- Ensure optimal uptime (99%+ recommended)
- Address DOS/EXPIRED issues immediately
- Verify parallel mining participation upon node setup

**Related:**
- [Flux Node Status Troubleshooting](../../guides/troubleshooting-flux-node-status-issues/)
- [Flux Nodes FAQ](../../faq/flux-nodes-faq/)
- Flux official documentation on parallel mining (external)

---

## Can I claim PA rewards to a different address than my FluxNode wallet?

**Answer:**

**Generally no, PA claims are designed to go to your ZelCore wallet addresses associated with your FluxNode account.**

**How PA claiming addresses work:**

**Default behavior:**
- PA claims are sent to your ZelCore wallet addresses for the corresponding blockchain
- Claiming Flux-BASE → Your Base wallet address in ZelCore
- Claiming Flux-BSC → Your BSC wallet address in ZelCore
- "Claim All" → Your native Flux wallet address in ZelCore
- These addresses are tied to your FluxNode registration

**Why custom addresses aren't supported:**

1. **Security:** Ensures rewards go to legitimate node operator
2. **Verification:** Claims tied to registered FluxNode addresses
3. **Fraud prevention:** Prevents redirecting rewards to unauthorized addresses
4. **Simplicity:** Reduces complexity and potential for errors

**If you need rewards in different address:**

**Option 1: Transfer after claiming (Recommended)**
1. Claim PA rewards to your ZelCore wallets (standard process)
2. Wait for claim confirmations
3. Transfer from ZelCore to your desired external address
4. Use ZelCore's send function or bridge if needed
5. Full control, maintains security

**Option 2: Change ZelCore wallet (Not recommended for active nodes)**
- Could potentially change wallet addresses in ZelCore
- May disrupt FluxNode association
- Risk of complications with node registration
- Not recommended unless necessary

**Claiming to exchanges:**

**Not recommended:**
- PA claim interface doesn't support direct exchange deposits
- Exchange addresses have specific requirements (memo, destination tag, etc.)
- Risk of loss if claim process incompatible with exchange
- Better approach: Claim to ZelCore, then transfer to exchange

**Best practice:**

1. Always claim PA rewards to your ZelCore wallets
2. Verify rewards received in ZelCore
3. Transfer to external addresses or exchanges if needed
4. Maintain clean separation: Claiming → ZelCore, Transfers → External destinations
5. Reduces risk of errors or lost funds

**Related:**
- [Step-by-Step Claiming Process](../../guides/claiming-parallel-assets/#step-by-step-claiming-parallel-assets)

---

## What are the typical gas costs for claiming PA rewards?

**Answer:**

Gas costs for PA claims vary significantly by blockchain. Understanding costs helps you optimize claiming strategy.

**Gas costs by blockchain:**

**Low-cost chains (claim more frequently):**

- **Solana (Flux-SOL):** $0.0001 - $0.01 per claim
  - Extremely low, negligible cost
  - Can claim frequently without concern

- **Base (Flux-BASE):** $0.01 - $0.10 per claim
  - Layer 2 benefits, very affordable
  - Good for regular claiming

- **Tron (Flux-TRX):** $0.01 - $0.20 per claim
  - Very affordable
  - Claim regularly without issue

- **BSC (Flux-BSC):** $0.10 - $0.50 per claim
  - Low cost, most popular for Flux parallel assets
  - Good balance of cost and liquidity

- **Native FLUX ("Claim All"):** $0.01 - $0.10 per claim
  - Very affordable on Flux blockchain
  - Best cost efficiency for consolidation

**Moderate-cost chains:**

- **Avalanche (Flux-AVAX):** $0.50 - $2.00 per claim
  - Moderate cost
  - Let accumulate to $20-50+ before claiming

**High-cost chains (claim less frequently):**

- **Ethereum mainnet (Flux-ETH):** $2 - $50+ per claim
  - **Highly variable** based on network congestion
  - Peak hours: $20-50+ gas
  - Off-peak hours: $2-10 gas
  - Let accumulate significantly before claiming
  - Consider using "Claim All" to avoid ETH gas

**Factors affecting gas costs:**

1. **Network congestion:** More activity = higher fees
2. **Time of day:** US business hours often higher gas (especially ETH)
3. **Day of week:** Weekends typically lower gas prices
4. **Gas price settings:** Can adjust speed/cost trade-off
5. **Transaction complexity:** PA claims are simple transactions (predictable costs)

**Cost optimization strategies:**

**1. Batch claims appropriately:**
- Let credits accumulate to justify gas costs
- Claim when PA value significantly exceeds gas cost (10x minimum)
- Example: If gas is $0.50, wait until PA value is $5+

**2. Choose optimal timing for Ethereum:**
- Check gas prices on etherscan.io before claiming Flux-ETH
- Claim during low-gas periods:
  - Weekends
  - Late night UTC (2-8 AM)
  - When gwei &lt;30 (check etherscan)
- Can save $10-40 per claim

**3. Prioritize low-cost chains:**
- Claim from BSC, SOL, TRX more frequently (cheap gas)
- Let ETH mainnet claims accumulate longer
- Use "Claim All" to consolidate to native FLUX (low gas)

**4. Use "Claim All" for best gas efficiency:**
- Single transaction fee (native FLUX gas)
- Total cost: $0.01 - $0.10 typically
- Instead of multiple claims across chains costing $5-20+ combined
- Trade-off: Get native FLUX instead of parallel assets

**Example cost comparison:**

**Claiming individually:**
- Flux-BASE: $0.05 gas
- Flux-BSC: $0.30 gas
- Flux-ETH: $15 gas (during peak)
- Total: $15.35 gas

**Using "Claim All":**
- Single native FLUX transaction: $0.05 gas
- Savings: $15.30 (96% reduction)

**When gas costs are too high:**

If gas exceeds PA claim value:
- Wait longer for more PA to accumulate
- Use "Claim All" instead of individual claims
- Consider opportunity cost of waiting vs claiming
- For very high ETH gas, may wait weeks for favorable conditions

**Related:**
- [Fees and Costs for PA Claims](../../guides/claiming-parallel-assets/#fees-and-costs-for-pa-claims)
- [Gas Acquisition Strategies](../../guides/claiming-parallel-assets/#gas-acquisition-strategies-for-pa-claims)

---

## What happens to unclaimed PA rewards if I stop running my FluxNode?

**Answer:**

**Unclaimed PA credits should remain claimable even if you stop running your FluxNode**, but there are important considerations and limitations.

**General principle:**

- PA credits earned while your node was active are yours
- Credits don't automatically disappear when node stops
- Should be claimable through Fusion interface regardless of current node status

**Practical considerations:**

**Scenario 1: Node temporarily offline (planned maintenance, etc.)**
- PA credits accumulated before offline period remain claimable
- PA accumulation pauses while offline
- Claim existing credits anytime through Fusion
- Resume node: PA accumulation continues

**Scenario 2: Node enters DOS or EXPIRED**
- Existing PA credits should still be claimable
- New PA accumulation stops
- Claim what's available before or after resolving status
- Credits don't disappear due to node status changes

**Scenario 3: Permanently stop running FluxNode**
- PA credits earned up to that point should remain claimable
- No new PA accumulation without active node
- Claim all remaining credits through Fusion
- No expiration date specified for unclaimed credits

**Scenario 4: Very long period of inactivity (months/years)**
- Old PA credits may require whitelisting to claim
- Flux ecosystem may change claim procedures over time
- Recommended: Claim all PA before permanently stopping node
- Contact Flux support if issues claiming old credits

**Best practices when stopping a FluxNode:**

**Before shutting down permanently:**

1. **Claim all PA rewards:**
   - Check Fusion for any available PA credits
   - Claim all credits using "Claim All" or individual claims
   - Verify claims completed successfully
   - Ensure you have gas for claiming transactions

2. **Document your information:**
   - Record your Flux wallet addresses
   - Save FluxNode registration details
   - Keep transaction hashes of claims
   - Document any remaining unclaimed amounts

3. **Verify zero PA balance:**
   - After claiming, confirm PA credits show zero
   - Check Fusion transaction history
   - Ensure all rewards collected

4. **Maintain wallet access:**
   - Keep ZelCore wallet and seed phrase secure
   - Even without active node, wallet contains your claimed rewards
   - Access needed if claiming old PA in future

**What if you forgot to claim before stopping?**

1. **PA credits should still exist** associated with your Flux address
2. **Reopen ZelCore** and check Fusion PA Claims section
3. **Attempt to claim** even without active node
4. **If claim fails:**
   - Contact Flux support with your node details
   - Explain situation: Node inactive but have unclaimed PA
   - Support may assist with claim or whitelist for claiming
5. **May need to briefly reactive node** in some cases

**Unknown long-term retention:**

- No published PA credit expiration policy
- Claim procedures may change with Flux updates
- Safest approach: Claim all PA before stopping node
- Don't rely on indefinite storage of unclaimed credits

**Prevention:**

- Claim PA rewards regularly (monthly) while node is active
- Don't let PA accumulate excessively
- Before planned node shutdown, claim all rewards
- Monitor node status to avoid unexpected shutdowns losing claim opportunity

**Related:**
- [Claiming Process](../../guides/claiming-parallel-assets/#step-by-step-claiming-parallel-assets)
- [FluxNode Status Issues](../../guides/troubleshooting-flux-node-status-issues/)

---

## Where can I get help with PA claiming issues?

**Answer:**

The Flux community provides support through official channels. Here's where to get help and what to include:

**Official Flux Discord (Primary support):**

**Best channel for PA issues:**
- **#general-support** - For PA claiming questions and troubleshooting
- **#parallel-assets** - If dedicated channel exists
- **#technical-discussion** - For complex PA claiming issues

**Join:** https://discord.gg/runonflux

**When to use:** Most PA claiming issues, whitelisting requests, claim errors, eligibility questions

**Response time:** Usually within 1-24 hours

**Flux Telegram:**

Active community with real-time support
- Good for quick PA claiming questions
- Community often responds quickly
- Less structured than Discord

**When to use:** Quick questions about PA claims, general guidance

**What to include in support requests:**

**Essential information:**

1. **Issue description:**
   - Clear explanation of the problem
   - Exact error message (copy/paste or screenshot)
   - What you were attempting (claim type, amount)

2. **FluxNode information:**
   - Node tier (Cumulus, Nimbus, Stratus)
   - Node status (CONFIRMED, DOS, EXPIRED)
   - How long node has been running
   - Flux wallet address

3. **PA claim details:**
   - Which PA type attempting to claim (Flux-BASE, Flux-BSC, etc.)
   - Amount attempting to claim
   - Gas available on claiming chain
   - Using "Claim All" or individual claim

4. **Troubleshooting attempted:**
   - Steps you've already tried
   - Results of each attempt
   - Whether issue persists after retries

5. **Timeline:**
   - When issue started
   - How long you've had unclaimed PA
   - Recent changes to node or wallet

**Good support request example:**

```
ISSUE: PA claim showing "claiming amount exceeds maximum allowable"

FluxNode Info:
- Tier: Nimbus
- Status: CONFIRMED
- Running for: 6 months
- Flux address: [address]

Claim Details:
- Attempting to claim: Flux-BSC
- Amount: 150 Flux-BSC credits
- Gas available: Yes, 0.5 BNB in BSC wallet
- Have not claimed for 4 months

Troubleshooting tried:
1. Attempted smaller claim (75 Flux-BSC) - same error
2. Tried "Claim All" - same error
3. Waited 48 hours and retried - same error

Request: Need whitelisting or guidance on maximum claim amount.

Thank you!
```

**Poor support request example:**

```
PA claims broken help!!
```

**Don't share in support requests:**

- Private keys or seed phrases (NEVER)
- Wallet passwords
- Personal identifying information beyond necessary

**Response expectations:**

**Quick questions:** Usually answered within hours

**Whitelisting requests:**
- Acknowledgment: Within 24 hours
- Processing: 24-48 hours
- Completion notification in Discord thread

**Complex issues:** May require back-and-forth, testing, or escalation to developers

**When to contact support:**

**Contact Flux support for:**
- Whitelisting requests (required for some claims)
- "Claiming amount exceeds maximum" persisting with small amounts
- PA credits should exist but aren't showing
- Eligibility or parallel mining participation questions
- Claim transaction succeeded but balance never appeared
- Need clarification on PA mechanics

**Contact ZelCore support for:**
- ZelCore app crashes when accessing Fusion
- App not displaying PA claims section
- Wallet sync issues
- ZelCore interface problems

**ZelCore Support:**
- **Discord:** Official ZelCore Discord
- **Email:** support@zel.network
- **Twitter:** @zelcore

**Before asking - search first:**

- Review [Claiming Parallel Assets Guide](../../guides/claiming-parallel-assets/)
- Search Discord #general-support for similar issues
- Check if your question is in this FAQ
- Many questions already answered in documentation

**Support resources:**

- **Flux Discord:** https://discord.gg/runonflux (primary)
- **Flux website:** runonflux.io
- **Flux documentation:** docs.runonflux.io
- **Twitter:** @RunOnFlux
- **ZelCore Discord:** For wallet issues
- **GitHub:** For bug reports (if applicable)

**Community guidelines:**

- Be respectful and patient
- Don't spam multiple channels
- Provide complete information upfront
- Help others when you can
- Share solutions when resolved

**Related:**
- [When to Contact Support](../../guides/claiming-parallel-assets/#when-to-contact-support)
- [Flux Nodes FAQ: Where to Get Help](../../faq/flux-nodes-faq/#where-can-i-get-help-if-the-troubleshooting-guide-doesnt-solve-my-issue)
