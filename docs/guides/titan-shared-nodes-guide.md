---
sidebar_position: 6
---

# Titan Shared Nodes Guide

## Overview

Titan Shared Nodes allow you to earn Flux node rewards without the technical knowledge, hardware requirements, or full collateral needed to run a complete Flux node. This guide covers purchasing Titan shares, understanding how shared nodes work, troubleshooting common issues like missing stakes or "Multisig requested" delays, and maximizing your Titan investment.

Titan is a fractional node ownership service that pools contributions from multiple users to run professional Flux nodes, distributing rewards proportionally to share ownership.

## What Are Titan Shared Nodes?

### Core Concept

Traditional Flux nodes require:
- **Significant collateral:** 1,000 FLUX (Cumulus), 12,500 FLUX (Nimbus), or 40,000 FLUX (Stratus)
- **Technical expertise:** Server management, networking, troubleshooting
- **Infrastructure:** VPS or dedicated server with specific requirements
- **Time commitment:** Monitoring, updates, maintenance

**Titan Shared Nodes remove these barriers:**

- **Lower entry cost:** Purchase fractional shares (much less than full node collateral)
- **No technical knowledge needed:** Titan manages the servers and infrastructure
- **Passive income:** Earn proportional rewards without active management
- **Professional operation:** Higher uptime than typical self-managed nodes
- **Integrated with ZelCore:** Purchase and monitor directly in wallet

### How Titan Works

**The process:**

1. **Multiple users purchase shares** of a Titan node
2. **Shares combine to fund** one or more complete Flux nodes (Cumulus, Nimbus, or Stratus tier)
3. **Titan operates the node(s)** using professional infrastructure
4. **Node earns Flux rewards** from the network
5. **Rewards are distributed** proportionally to shareholders
6. **You receive your share** directly to your ZelCore wallet

**Example:**

- Titan Nimbus node requires 12,500 FLUX collateral
- 50 users each purchase 250 FLUX worth of shares
- Combined 12,500 FLUX funds a Nimbus node
- Node earns 100 FLUX per month in rewards
- Each shareholder receives 2 FLUX per month (100 ÷ 50)
- Proportional to share size

### Titan vs. Running Your Own Node

| Aspect | Titan Shared Node | Self-Managed Flux Node |
|--------|-------------------|------------------------|
| **Collateral Required** | Flexible (buy shares of any size) | 1,000 / 12,500 / 40,000 FLUX |
| **Technical Skills** | None needed | Linux, networking, troubleshooting |
| **Hardware** | Not needed (Titan provides) | VPS or dedicated server required |
| **Setup Time** | Minutes (purchase in ZelCore) | Hours to days (initial setup) |
| **Maintenance** | None (Titan handles) | Ongoing (updates, monitoring) |
| **Control** | None (Titan manages) | Full control over node |
| **Uptime** | Professional (typically 99%+) | Varies based on your management |
| **Rewards** | Proportional to share size | Full node rewards (minus costs) |
| **Risk** | Service dependency on Titan | Technical failures, your responsibility |
| **Exit** | Sell shares (varies by liquidity) | Full control, keep all collateral |

**When to choose Titan:**
- You want Flux exposure without technical complexity
- Lower capital available (can't afford full node)
- Prefer passive investment over active management
- Trust Titan's professional operation
- Want diversification (own shares in multiple nodes)

**When to choose self-managed:**
- You have technical expertise and enjoy node operation
- Want full control and maximum rewards
- Have capital for full node collateral
- Can commit to ongoing maintenance
- Prefer decentralization (not relying on third party)

## Purchasing Titan Shares in ZelCore

### Prerequisites

Before purchasing Titan shares:

- **ZelCore wallet** (Desktop or Mobile) installed and set up
- **FLUX balance** sufficient for purchase amount plus transaction fees
- **Understanding** of which wallet is active (if you have multiple wallets)
- **Reviewed Titan terms** and understand it's a managed service

### Step-by-Step Purchase Process

#### Step 1: Access Titan App in ZelCore

**Desktop:**

1. Open ZelCore
2. Navigate to **Apps** section
3. Find and click **Titan** or **Titan Shared Nodes**
4. Titan interface loads within ZelCore

**Mobile:**

1. Open ZelCore app
2. Tap **Apps** tab or menu
3. Select **Titan**
4. Titan interface opens

#### Step 2: Review Available Titan Nodes

The Titan interface shows:

- **Available nodes** with share availability
- **Node tier** (Cumulus, Nimbus, Stratus)
- **Total node size** (collateral requirement)
- **Shares available** for purchase
- **Price per share** (in FLUX)
- **Minimum and maximum** purchase amounts
- **Expected rewards** (estimated, not guaranteed)

**Understanding node tiers:**

- **Cumulus Shared Nodes:** Smallest tier, lower rewards per node, lower barrier
- **Nimbus Shared Nodes:** Mid-tier, moderate rewards
- **Stratus Shared Nodes:** Highest tier, best rewards per node, typically higher minimum

**Choosing a node:**

Considerations:
- **Your budget:** How much FLUX can you commit?
- **Reward expectations:** Higher tiers = better rewards per FLUX staked
- **Availability:** Some tiers may be fully subscribed
- **Diversification:** Consider spreading across multiple nodes/tiers

#### Step 3: Select Purchase Amount

1. **Choose node tier** you want to purchase shares in
2. **Enter FLUX amount** you want to stake
3. **System shows:**
   - Number of shares this represents
   - Your percentage of the node
   - Estimated rewards (approximate, varies with network)
   - Transaction fee
4. **Verify amount** is within your budget and acceptable

**Minimum amounts:**

Titan typically has minimum purchase requirements:
- Varies by node tier
- Usually 50-500 FLUX minimum
- Check current requirements in Titan app

**Maximum amounts:**

- Limited by shares available in that specific node
- Cannot exceed available shares
- May be capped per user for fairness

#### Step 4: Verify Active Wallet

**CRITICAL STEP - DO NOT SKIP:**

1. Before clicking "Purchase", check **Settings > Wallets**
2. Verify the **correct wallet is active**
3. Your Titan shares will be linked to this wallet's address
4. Ensure this is the wallet you intend to use long-term for Titan

**Why this matters:**

- Titan shares are linked to the wallet address used for purchase
- Changing wallets later requires support intervention (if possible at all)
- Rewards will be sent to the purchasing wallet's address
- You cannot easily transfer shares between wallets

**See Apps FAQ for detailed wallet verification steps:**
- [How do I know which wallet is active?](../../faq/apps-faq/#how-do-i-know-which-wallet-is-active-when-using-zelcore-apps)

#### Step 5: Confirm Purchase

1. Click **"Purchase Shares"** or similar button
2. **Review confirmation screen:**
   - FLUX amount being sent
   - Destination address (Titan multisig address)
   - Transaction fee
   - Source wallet/address
3. **Double-check all details**
4. Click **"Confirm"** to broadcast transaction

#### Step 6: Wait for Blockchain Confirmation

**After confirming:**

1. Transaction is broadcast to Flux blockchain
2. ZelCore shows transaction as "Pending"
3. Wait for **blockchain confirmations** (typically 10-20 confirmations)
4. Confirmation time: **15-30 minutes** usually

**During this time:**
- Do NOT close ZelCore (can interrupt monitoring)
- Do NOT purchase duplicate shares (wait for confirmation first)
- You can check transaction on Flux explorer if desired

**Check transaction on explorer:**

1. Copy transaction hash from ZelCore
2. Visit https://explorer.runonflux.io
3. Paste transaction hash
4. Verify transaction is confirmed

#### Step 7: Multisig Processing (Common Delay Point)

**After blockchain confirmation, Titan must process your purchase:**

**What is "Multisig requested"?**

Titan uses multisignature wallet security:
- Your payment goes to a multisig address (shared control)
- Multiple Titan operators must approve transaction
- This adds security but introduces processing time
- You'll see "Multisig requested" status during this period

**Normal multisig processing time:**

- **Typical:** 24-72 hours
- **During high volume:** 3-5 days
- **Weekends/holidays:** May extend timeline
- **First-time purchases:** Sometimes take longer for verification

**What happens during multisig processing:**

1. Titan operators verify your transaction on blockchain
2. Confirm payment amount and source
3. Verify node has capacity for new shares
4. Multiple operators sign approval (security measure)
5. Your shares are officially allocated
6. You receive confirmation

**Status indicators:**

- **"Pending"** - Blockchain confirmation in progress
- **"Multisig requested"** - Waiting for Titan operator signatures
- **"Confirmed"** - Shares allocated, you're officially a shareholder
- **"Active"** - Node is operational, earning rewards

#### Step 8: Verify Share Allocation

**After multisig completes:**

1. Open Titan app in ZelCore
2. Go to **"My Shares"** or **"My Nodes"** section
3. Verify your purchase appears:
   - Node tier and ID
   - Number of shares owned
   - FLUX amount staked
   - Status (should show "Active" or "Earning")
   - Estimated rewards

**If shares don't appear after 5 days:**

See troubleshooting section below.

### Transaction Fees

**Blockchain transaction fee:**
- Standard Flux network fee (typically 0.001-0.01 FLUX)
- Paid to Flux miners, not Titan
- Deducted from your wallet balance

**Titan service fee:**
- Titan takes a percentage of node rewards (not upfront)
- Typically 10-20% of earned rewards (check current Titan terms)
- Deducted automatically from rewards before distribution
- Not paid at purchase time

**Total cost:**
- FLUX amount for shares + small blockchain fee
- No large upfront fees beyond your stake

## Understanding Titan Rewards

### How Rewards Work

**Reward generation:**

1. **Flux node operates** and participates in network
2. **Network assigns tasks** to the node (app hosting, compute, storage)
3. **Node completes tasks** and validates transactions
4. **Network pays rewards** in FLUX to the node's collateral address
5. **Titan collects rewards** from all managed nodes
6. **Titan deducts service fee** (typically 10-20%)
7. **Remaining rewards distributed** proportionally to shareholders

**Reward frequency:**

- Nodes earn rewards **continuously** (per block)
- Titan typically distributes to shareholders **weekly or bi-weekly**
- Check Titan documentation for current distribution schedule
- Rewards sent directly to your ZelCore wallet address

**Reward variability:**

Rewards are **not fixed** - they fluctuate based on:

- **Network activity:** More apps running = more rewards
- **Node tier:** Stratus earns more than Nimbus, Nimbus more than Cumulus
- **Node uptime:** Higher uptime = more rewards (Titan maintains 99%+ typically)
- **Network reward rate:** Changes based on Flux tokenomics
- **Your share percentage:** More shares = more rewards

**Example reward calculation:**

Assumptions:
- You own 500 FLUX worth of shares in Nimbus node
- Total Nimbus node: 12,500 FLUX
- Your share: 500 ÷ 12,500 = 4%
- Node earns 100 FLUX in a month
- Titan fee: 15% (15 FLUX)
- Remaining to distribute: 85 FLUX
- Your share: 85 × 4% = 3.4 FLUX per month

**Annual percentage:**
- 3.4 FLUX/month × 12 = 40.8 FLUX/year
- On 500 FLUX stake = 8.16% annual return
- (These are example numbers, actual returns vary)

### Monitoring Your Rewards

**In ZelCore Titan app:**

1. Open Titan app
2. Navigate to **"My Shares"** or **"Rewards"**
3. View:
   - **Total rewards earned** (all-time)
   - **Pending rewards** (not yet distributed)
   - **Last distribution** date and amount
   - **Next expected distribution** (if shown)

**In ZelCore transaction history:**

1. Select FLUX asset in ZelCore
2. View transaction history
3. Look for incoming transactions from Titan addresses
4. These are your reward distributions

**Reward expectations:**

Realistic expectations (approximate, not guaranteed):
- **Cumulus shares:** 5-10% annual return on FLUX staked
- **Nimbus shares:** 7-12% annual return
- **Stratus shares:** 9-15% annual return
- Subject to market conditions, network activity, Titan fees

**These are NOT guaranteed** - returns fluctuate based on network conditions.

### Compounding Rewards

**Manual compounding:**

To reinvest rewards for compound growth:

1. Wait for reward distribution to your wallet
2. Use earned FLUX to purchase additional Titan shares
3. Larger stake = larger future rewards
4. Repeat process to compound over time

**Benefits of compounding:**
- Accelerates growth over time
- Increases your share percentage in nodes
- Maximizes long-term returns

**Consideration:**
- Transaction fees eat into small compounding amounts
- May make sense to wait for larger accumulated rewards
- Calculate if gas fees are worth it for amount compounding

## Common Issues and Troubleshooting

### Issue 1: Stakes Missing - Shares Don't Appear After Purchase

**Symptoms:**
- You purchased Titan shares
- Transaction confirmed on blockchain
- Shares don't show in Titan app "My Shares" section
- Days or weeks have passed

**Common causes:**

1. **Still in multisig processing:**
   - Normal wait: 24-72 hours
   - Check Titan status updates
   - Be patient, especially during high volume

2. **Wrong wallet active:**
   - You purchased from Wallet A
   - But viewing Titan app while Wallet B is active
   - Shares are linked to purchasing wallet

3. **Titan system delay or glitch:**
   - Rare but possible
   - Usually resolves within a week
   - May require support contact

4. **Insufficient purchase amount:**
   - Didn't meet minimum requirements
   - Transaction may be pending refund
   - Check with Titan support

**Troubleshooting steps:**

**Step 1: Verify blockchain transaction**

1. Find your purchase transaction in ZelCore history
2. Copy transaction hash
3. Check on https://explorer.runonflux.io
4. Verify:
   - Transaction confirmed (20+ confirmations)
   - Sent to correct Titan address
   - Amount matches intended purchase

**Step 2: Check correct wallet is active**

1. Go to Settings > Wallets in ZelCore
2. Verify which wallet you used for purchase (check transaction history)
3. Switch to that wallet if not currently active
4. Open Titan app again
5. Check if shares appear now

**Step 3: Wait for multisig processing**

If transaction confirmed but shares not allocated:

- Normal processing: 24-72 hours
- High volume periods: 3-5 days
- Check back daily
- Look for "Multisig requested" status if visible

**Step 4: Contact Titan support**

If shares still missing after 7 days:

1. **Gather documentation:**
   - Transaction hash
   - Date and time of purchase
   - Amount of FLUX sent
   - Destination address (from transaction)
   - Your ZelCore wallet address (sender)
   - Screenshots of transaction and Titan app

2. **Contact Titan support:**
   - **Discord:** Official Flux Discord, look for Titan channel or support
   - **Telegram:** Titan support channel (if available)
   - **Email:** Contact through official Flux/Titan support (check Titan app for contact info)

3. **Provide information:**
   - "I purchased Titan shares on [date] and they haven't appeared"
   - "Transaction hash: [hash]"
   - "Amount: [FLUX amount]"
   - "Wallet address: [your address]"
   - "Waited [X days] and shares not showing in My Shares"

4. **Wait for response:**
   - Typical response: 2-5 business days
   - Titan team will investigate
   - They can manually allocate shares if purchase verified

**Expected resolution time:** 5-10 business days after contacting support

### Issue 2: "Multisig Requested" Status for Extended Period

**Symptoms:**
- Purchase shows "Multisig requested" status
- Days or over a week have passed
- No progress to "Confirmed" or "Active" status
- Uncertainty about whether purchase will complete

**Understanding multisig delays:**

**Normal processing:**
- Titan uses multisignature wallets for security
- Multiple operators must sign to approve allocation
- Requires coordination among Titan team members
- 24-72 hours is typical

**Extended delays happen due to:**

1. **High purchase volume:**
   - Many users purchasing simultaneously
   - Queue of multisig approvals to process
   - Titan processes in order received

2. **Operator availability:**
   - Multisig requires multiple operators online
   - Weekends, holidays, time zones affect availability
   - Not all operators available 24/7

3. **Node capacity verification:**
   - Titan must verify specific node has capacity
   - May need to allocate to different node
   - Additional coordination time

4. **Unusual purchase patterns:**
   - Very large purchase amounts
   - First-time purchaser verification
   - Source address flagged for manual review (rare)

**What to do:**

**If under 5 days:**

- **Be patient** - This is often normal during high volume
- **Check Titan announcements:**
  - Discord channels
  - Telegram updates
  - Twitter @fluxofficial
- **No action needed yet** - Wait for processing

**If 5-7 days:**

- **Check for Titan updates:**
  - Look for announcements about delays
  - Community may be discussing similar experiences
- **Verify transaction** on blockchain (should be confirmed)
- **Prepare to contact support** if reaches 7+ days

**If over 7 days:**

**Contact Titan support:**

1. **Message through official channels:**
   - Flux Discord (Titan support channel)
   - Telegram (Titan community)
   - Official support email

2. **Provide details:**
   - "Purchase has been in 'Multisig requested' status for [X days]"
   - Transaction hash
   - Purchase date and amount
   - Node tier purchased
   - Your wallet address

3. **Ask for status update:**
   - "Can you provide an update on when multisig will complete?"
   - "Is there an issue preventing approval?"
   - "What additional information do you need from me?"

4. **Follow up:**
   - If no response in 3-4 days, follow up politely
   - Use multiple channels (Discord + Telegram)
   - Community managers can escalate

**Expected timeline:**

- Support response: 2-5 days
- Issue investigation: 2-3 days
- Multisig completion after investigation: 1-3 days
- **Total:** 7-14 days from support contact to resolution

**In very rare cases:**

If multisig cannot complete due to technical issue:
- Titan will refund your FLUX
- Refund goes to source address
- You can try purchasing again
- Titan should explain reason for failure

**Your funds are safe:**
- Multisig means your FLUX is secured
- Cannot be lost during processing
- Will either complete or be refunded
- Patience is key

### Issue 3: Rewards Not Received or Smaller Than Expected

**Symptoms:**
- You own Titan shares showing as "Active"
- Expected rewards distribution
- No rewards received, or amount much less than expected
- Unsure if something is wrong

**Understanding reward expectations:**

**Rewards are variable, not fixed:**

- Network activity fluctuates
- Node uptime can vary slightly
- Flux tokenomics affect reward rates
- Titan fee percentage
- Your share of total node

**Common reasons for low/missing rewards:**

**1. Node recently became active:**
- New nodes take time to start earning
- May not earn significantly for first 1-2 weeks
- Rewards ramp up as node proves uptime

**2. Distribution schedule:**
- Titan distributes weekly or bi-weekly (check schedule)
- You may be checking between distributions
- Rewards accumulate, then distribute in batches

**3. Very small share:**
- If you own small percentage of node
- Individual distribution may be very small (< 1 FLUX)
- May not distribute until threshold reached

**4. Node downtime:**
- If node went offline (rare with Titan professional management)
- Rewards stop during downtime
- Affects all shareholders proportionally

**5. Network reward rate decreased:**
- Flux network adjusts rewards based on tokenomics
- Some periods have lower overall rewards
- Affects all node operators

**6. Incorrect calculation of expectations:**
- Online calculators may be outdated
- Don't account for Titan fees accurately
- Network conditions different than calculator assumptions

**Troubleshooting steps:**

**Step 1: Verify shares are active**

1. Open Titan app in ZelCore
2. Check "My Shares"
3. Verify status shows **"Active"** or **"Earning"**
4. If not active, node may not be earning yet

**Step 2: Check distribution schedule**

1. Look for Titan announcements about distribution frequency
2. Note when last distribution occurred
3. Calculate when next should be expected
4. You may simply be checking too early

**Step 3: Review transaction history**

1. Open FLUX asset in ZelCore
2. View full transaction history
3. Filter by date range since share purchase
4. Look for incoming transactions from Titan addresses
5. Rewards may be smaller than expected but still arriving

**Step 4: Calculate realistic expectations**

Use this formula:

```
Your monthly reward = (Node monthly reward × (1 - Titan fee %)) × Your share %

Example:
- Nimbus node earns ~100 FLUX/month (varies)
- Titan fee: 15% (0.15)
- Your shares: 500 FLUX out of 12,500 total (4%)

Calculation:
= (100 × (1 - 0.15)) × 0.04
= (100 × 0.85) × 0.04
= 85 × 0.04
= 3.4 FLUX/month
```

Compare to what you've actually received.

**Step 5: Compare with community**

1. Check Titan community channels (Discord, Telegram)
2. Ask if others receiving rewards normally
3. If widespread issue, Titan will announce
4. If just you, may be specific to your account

**Step 6: Contact Titan support**

If rewards genuinely missing:

**Provide:**
- Your wallet address (shareholder address)
- Node ID (if known)
- Amount of shares owned
- When shares became active
- Last reward received (if any)
- Expected vs actual rewards (with calculation)

**Ask:**
- "Are rewards being distributed to my address?"
- "Is my node operational and earning?"
- "Can you verify my share allocation is correct?"

**Response time:** 3-7 days typically

**Expected resolution:**

- Titan verifies node status
- Confirms distribution schedule
- May manually send missing rewards if error found
- Explains discrepancy if expectations were incorrect

### Issue 4: Withdrawal Delays - Why Are My Withdrawals Taking So Long?

**Symptoms:**
- You requested a withdrawal from Titan
- Withdrawal shows as pending or processing for extended period
- Funds haven't arrived in your wallet after several days
- Uncertainty about when withdrawal will complete

**Understanding Titan withdrawal delays:**

**Normal withdrawal processing:**

Titan withdrawals are not instant due to the nature of node collateral management:

1. **Withdrawal request submitted** in Titan app
2. **Node collateral adjustment** required (Titan must rebalance)
3. **Multisig approval process** (same security as deposits)
4. **FLUX unlocked and sent** to your wallet
5. **Blockchain confirmation** completes withdrawal

**Typical withdrawal timelines:**

- **Small withdrawals (rewards only):** 24-72 hours
- **Partial share withdrawals:** 3-7 days
- **Full share withdrawals:** 5-14 days
- **During high volume:** Can extend significantly

**Why withdrawals take longer than deposits:**

**Collateral rebalancing complexity:**

Unlike deposits (which just add to a pool), withdrawals require:
- Recalculating node collateral distribution
- Potentially moving shares between nodes
- Ensuring remaining node has minimum collateral
- Coordinating with other shareholders
- Multisig signatures from multiple operators

**Multisig processing (same as deposits):**

- Multiple Titan operators must sign approval
- Requires coordination and availability
- Security measure to protect all users
- Typically adds 24-72 hours minimum

**Node operational constraints:**

- Cannot withdraw if it would drop node below collateral minimum
- May need to wait for node cycle completion
- Titan may need to restructure node allocations
- More complex than simple wallet transfer

**What affects withdrawal speed:**

**Faster processing:**
- Withdrawing only accumulated rewards
- Standard business hours (weekdays)
- Normal network volume
- Smaller withdrawal amounts

**Slower processing:**
- Full share withdrawals requiring rebalancing
- Weekends and holidays (operator availability)
- High volume of withdrawal requests
- Very large withdrawal amounts
- First-time withdrawal (additional verification)

**Troubleshooting delayed withdrawals:**

**If withdrawal pending under 7 days:**

1. **Be patient** - This is often normal for Titan withdrawals
2. **Check Titan announcements:**
   - Discord channels for withdrawal updates
   - Telegram community discussions
   - May be announced delays during high volume
3. **Verify withdrawal request was submitted:**
   - Check Titan app withdrawal history
   - Confirm request shows as "Processing" or "Pending"
4. **No action needed yet** - Wait for processing to complete

**If withdrawal pending 7-14 days:**

1. **Check for status updates** in Titan app
2. **Look for email from Titan** (check spam folder)
3. **Review community channels** for similar reports
4. **Prepare to contact support** if approaching 14 days

**If withdrawal pending over 14 days:**

**Contact Titan support:**

1. **Gather information:**
   - Withdrawal request date and time
   - Amount requested to withdraw
   - Your wallet address (where withdrawal should go)
   - Current status in Titan app
   - Screenshots of withdrawal request and status

2. **Contact through official channels:**
   - Flux Discord (Titan support channel)
   - Telegram (Titan community/support)
   - Email support (check Titan app for contact)

3. **Provide details in message:**
   - "I requested a withdrawal on [date]"
   - "Amount: [FLUX amount]"
   - "Current status: [Pending/Processing]"
   - "It's been [X days] - can you provide status update?"
   - "Destination wallet address: [your address]"

4. **Ask specific questions:**
   - "What is causing the delay?"
   - "When can I expect withdrawal to complete?"
   - "Is there an issue with my withdrawal?"
   - "What additional information do you need?"

**Expected support timeline:**

- Initial response: 2-5 business days
- Issue investigation: 2-4 days
- Resolution (withdrawal completion): 3-7 days after investigation
- Total: 10-20 days from support contact in complex cases

**Common withdrawal delay causes:**

**High withdrawal volume:**
- Many users withdrawing simultaneously
- Titan processes queue in order received
- Can significantly extend timelines during market volatility

**Node rebalancing complexity:**
- Your withdrawal requires moving shares between nodes
- Waiting for appropriate node cycle timing
- Coordinating multiple node adjustments

**Operator availability:**
- Multisig requires multiple operators online
- Weekends, holidays, time zones affect speed
- Not 24/7 processing like automated systems

**Verification requirements:**
- First-time withdrawal may require identity verification
- Large withdrawal amounts flagged for review
- Security checks to prevent unauthorized withdrawals

**Technical issues:**
- Rare but possible: System glitches delay processing
- Node operational issues preventing rebalancing
- Blockchain network congestion affecting payouts

**Your funds are safe:**

Important reassurances:
- Withdrawal delays don't mean funds are lost
- Multisig security protects your FLUX during processing
- Will either complete withdrawal or remain in your shares
- Titan has processed thousands of withdrawals
- Patience is key during processing

**Prevention and expectations:**

**Set realistic expectations:**
- Withdrawals are NOT instant (unlike regular wallet transfers)
- Plan for 7-14 day timeline for substantial withdrawals
- Reward withdrawals typically faster than share withdrawals
- Consider withdrawal timing (avoid weekends/holidays if urgent)

**Best practices:**
- Don't rely on Titan for immediate liquidity needs
- Withdraw rewards regularly if you need frequent access
- Plan large withdrawals well in advance
- Keep some liquid FLUX outside Titan for emergencies

**Alternatives to full withdrawal:**

If you need some liquidity but not full exit:
- **Withdraw only accumulated rewards** (much faster)
- **Partial share withdrawal** instead of full withdrawal
- **Keep core position** in Titan while accessing rewards
- **Stagger withdrawals** over time instead of one large request

**Related:**
- See "Issue 5: Want to Sell/Withdraw Titan Shares" below for exit strategy details

---

### Issue 5: Want to Sell/Withdraw Titan Shares

**Symptoms:**
- You own Titan shares
- Want to exit position and recover FLUX
- Unsure how to sell or if it's possible

**Important: Titan share liquidity varies**

**Titan shares are NOT the same as your FLUX:**

- Your FLUX was contributed to fund a node
- Node requires locked collateral to operate
- You cannot simply "withdraw" FLUX like from a wallet
- Shares represent your ownership stake in the node

**Options for exiting:**

**Option 1: Wait for node unlock/disbanding (if applicable)**

- Some Titan nodes have time commitments (6 months, 1 year, etc.)
- After commitment period, node may disband
- Collateral returned to shareholders proportionally
- Check your specific node terms

**Timeline:** Depends on node terms, can be months to years

**Option 2: Sell shares to another user (if Titan supports)**

- Titan may have built-in marketplace for share trading
- List your shares for sale
- Another user purchases your shares
- You receive FLUX from buyer

**Availability:** Check Titan app for "Sell Shares" or "Marketplace" feature

**Considerations:**
- May need to sell at discount to attract buyers
- Liquidity depends on demand
- Transfer takes time for multisig approval

**Option 3: Request buyback from Titan (if offered)**

- Some managed node services offer buyback
- Titan may purchase your shares at current market rate
- Usually at slight discount to market value

**Check Titan terms** to see if buyback is available

**Option 4: Wait and accumulate rewards**

If immediate exit isn't critical:
- Continue earning rewards
- Eventually rewards exceed your initial stake
- Effective "recovery" over time through rewards

**Example:**
- Stake 500 FLUX
- Earn ~8% annually = 40 FLUX/year
- After ~12.5 years, rewards = initial stake
- But you still own the shares for future rewards

**What NOT to do:**

- **Don't expect instant liquidity** - This isn't a trading asset
- **Don't send shares** - They're not transferable like tokens
- **Don't demand refund** - Titan committed your FLUX to node collateral

**Before purchasing Titan shares:**

Understand:
- This is a medium to long-term commitment
- Liquidity is limited compared to trading FLUX
- Best for users comfortable locking funds
- Exit options may be limited

**To check exit options:**

1. Open Titan app
2. Look for "Sell" or "Withdraw" options
3. Read Titan terms and conditions
4. Contact Titan support to clarify exit policies
5. Community channels may have recent info on liquidity

### Issue 5: Purchased from Wrong Wallet

**Symptoms:**
- Purchased Titan shares
- Realized you used wrong ZelCore wallet
- Want shares associated with different wallet

**This is a critical issue** - see Apps FAQ for detailed guidance:

- [I sent payment for app purchase to wrong wallet](../../faq/apps-faq/#i-sent-payment-for-an-app-purchase-dao-titan-marketplace-presearch-but-it-went-to-the-wrong-wallet-what-happened)

**Quick summary:**

**Can shares be transferred between your wallets?**

**Sometimes, with Titan support help:**

1. Contact Titan support immediately
2. Provide proof you control both wallets
3. Provide transaction hash and both addresses
4. Request manual reassignment
5. Wait 7-14 days for review and decision

**Success depends on:**
- Catching error quickly
- Both wallets are yours (can prove it)
- Shares not yet actively earning (easier to reassign before activation)
- Titan policy and discretion

**Alternative: Just use that wallet for Titan going forward**

Often easier:
- Accept shares are in "wrong" wallet
- Use that wallet for Titan purposes
- Rename wallet to "Titan Rewards Wallet"
- Keep using it for future Titan purchases

**Prevention:**
- ALWAYS check Settings > Wallets before purchasing
- Verify active wallet name
- Don't rush through purchase
- See: [How to verify active wallet](../../faq/apps-faq/#how-do-i-know-which-wallet-is-active-when-using-zelcore-apps)

## Best Practices and Tips

### Before Purchasing

**Do your research:**

- [ ] Understand Titan is a managed service (you don't control nodes)
- [ ] Review current Titan fee structure
- [ ] Calculate realistic reward expectations
- [ ] Understand liquidity limitations (hard to exit)
- [ ] Check community feedback on Titan performance
- [ ] Read Titan terms and conditions fully

**Prepare your wallet:**

- [ ] Ensure sufficient FLUX balance (purchase amount + fees)
- [ ] Verify correct wallet is active
- [ ] Rename wallet if needed for clarity
- [ ] Have wallet backed up securely

**Plan your purchase:**

- [ ] Decide which node tier (Cumulus, Nimbus, Stratus)
- [ ] Determine purchase amount (within budget)
- [ ] Consider diversifying across multiple nodes/tiers
- [ ] Check minimum purchase requirements
- [ ] Calculate expected ROI timeline

### During Purchase

**Double-check everything:**

- [ ] Active wallet is correct (Settings > Wallets)
- [ ] Purchase amount is accurate
- [ ] Node tier is as intended
- [ ] Destination address looks correct
- [ ] Transaction fee is reasonable
- [ ] Read confirmation screen completely

**Document the purchase:**

- [ ] Screenshot purchase confirmation
- [ ] Save transaction hash
- [ ] Note date, time, amount
- [ ] Record node tier and ID if shown
- [ ] Keep for support purposes if needed

### After Purchase

**Monitor the process:**

- [ ] Watch for blockchain confirmation (15-30 min)
- [ ] Note when multisig status appears
- [ ] Check daily for status changes
- [ ] Be patient during multisig (24-72 hours normal)
- [ ] Verify shares appear in "My Shares" after allocation

**Track your investment:**

- [ ] Record initial stake amount
- [ ] Track rewards as they arrive
- [ ] Calculate actual vs expected returns
- [ ] Monitor node status regularly
- [ ] Keep records for tax purposes

**Stay informed:**

- [ ] Follow Titan announcements (Discord, Telegram)
- [ ] Join Flux community discussions
- [ ] Watch for changes in fee structure or terms
- [ ] Be aware of distribution schedule changes
- [ ] Learn from other shareholders' experiences

### Maximizing Returns

**Compounding strategy:**

1. Let rewards accumulate to meaningful amount
2. Reinvest into additional shares
3. Compound increases your stake over time
4. Consider gas fees vs compounding amount
5. Set a threshold (e.g., every 100 FLUX earned)

**Diversification:**

- Spread investment across multiple node tiers
- Don't put all FLUX into single node
- Reduces risk if one node has issues
- Balances reward variability

**Long-term perspective:**

- Titan shares are best for long-term holding (1+ years)
- Short-term price fluctuations shouldn't drive decisions
- Focus on accumulating rewards over time
- Patience is key to good returns

**Tax considerations:**

- Track all rewards received (taxable income in many jurisdictions)
- Keep records of dates and amounts
- Consult tax professional for your situation
- Understand implications before investing

## When to Contact Support

**Contact Titan support if:**

- Shares missing after 7 days
- Multisig requested for over 7 days with no update
- No rewards received after 30 days of active status
- Node status shows errors or offline
- Need to resolve wrong wallet issue
- Have questions about node performance
- Suspect technical issue with allocation

**How to contact Titan support:**

**Primary channels:**

1. **Flux Discord:**
   - Join official Flux Discord server
   - Look for Titan channel or general support
   - Tag community managers if needed
   - Response time: 1-3 days typically

2. **Telegram:**
   - Flux/Titan community group
   - Ask questions, community often helps
   - Titan reps sometimes present
   - Faster for general questions

3. **Official support email:**
   - Check Titan app or Flux website for email
   - Use for detailed issues requiring documentation
   - Include all relevant transaction info
   - Response time: 3-7 days

**Information to provide:**

When contacting support, always include:

- Your ZelCore wallet address (shareholder address)
- Transaction hash of purchase
- Date and amount of purchase
- Node tier purchased
- Current status (multisig requested, missing, etc.)
- Screenshots if helpful
- Clear description of issue

**Support response expectations:**

- Initial response: 2-5 business days
- Issue investigation: 3-7 days
- Resolution: 7-14 days total
- Complex issues may take longer
- Be patient and polite

**Community support:**

Before contacting official support:
- Ask in Flux Discord or Telegram
- Community members often have solutions
- May find others with same issue
- Faster than waiting for official support
- But verify information from official sources

## Related Documentation

- [ZelCore Apps FAQ](../../faq/apps-faq/) - General app purchase issues, wrong wallet troubleshooting
- [Flux Nodes FAQ](../../faq/flux-nodes-faq/) - Understanding Flux nodes
- Managing Multiple Wallets in ZelCore (if available)

## Additional Resources

- **Flux Website:** https://runonflux.io
- **Flux Documentation:** https://docs.runonflux.io
- **Flux Explorer:** https://explorer.runonflux.io
- **Flux Discord:** Official Flux community server (find Titan channels)
- **Titan App:** Access directly in ZelCore under Apps

## Conclusion

Titan Shared Nodes provide an accessible way to earn Flux node rewards without the technical complexity and capital requirements of running your own node. While the service introduces dependency on Titan's management and has liquidity limitations, it offers passive income potential for users comfortable with longer-term commitments.

**Key takeaways:**

- Titan makes Flux node rewards accessible to more users
- Purchase process is simple but requires wallet verification
- Multisig processing (24-72 hours) is normal, be patient
- Rewards are variable based on network conditions
- Liquidity is limited - treat as longer-term investment
- Professional management typically means higher uptime than self-managed
- Contact support if issues persist beyond normal timeframes

**Success with Titan requires:**
- Patience during multisig and activation
- Realistic expectations about rewards
- Long-term investment perspective
- Proper wallet verification before purchasing
- Regular monitoring and record-keeping

By following this guide and best practices, you can successfully invest in Titan Shared Nodes and earn passive Flux rewards while avoiding common pitfalls like wrong wallet purchases and unrealistic return expectations.
