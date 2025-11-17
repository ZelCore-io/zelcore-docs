---
sidebar_position: 8
---

# ZelCore Apps FAQ

## I sent payment for an app purchase (DAO, Titan, Marketplace, Presearch) but it went to the wrong wallet. What happened?

**Answer:**

This issue occurs when you have multiple wallets in ZelCore and payment was sent from the wrong wallet address, or when you didn't verify which wallet was active before confirming the purchase.

**Understanding ZelCore's multi-wallet system:**

ZelCore allows you to manage multiple independent wallets simultaneously:
- Each wallet has its own set of addresses across all blockchains
- Apps use the **currently active/selected wallet** for transactions
- Switching wallets changes which addresses are used for payments
- Many users don't realize they've switched wallets before making purchases

**Common scenarios:**

**Scenario 1: Wrong wallet was active during purchase**
- You switched to a different wallet earlier (to check balances, etc.)
- When making app purchase, ZelCore used that wallet's address
- Payment went to the currently active wallet, not your intended wallet
- Solution: The crypto is safe, just in a different wallet within your ZelCore

**Scenario 2: Misunderstood which wallet should receive payment**
- App purchases require payment FROM your wallet TO the app/service
- The payment leaves your wallet (doesn't come to it)
- Confusion about payment direction can make it seem like "wrong wallet"
- Solution: Check the wallet you sent FROM - that's the correct source

**Scenario 3: Expected refund or credit to wrong wallet**
- Made purchase, expected refund or credit back
- Came back to different wallet than you intended
- Refunds go to the source wallet address
- Solution: Check all your wallets in ZelCore

**How to find your payment:**

**Step 1: Check all wallets in ZelCore**

1. Open ZelCore
2. Go to Settings > Wallets
3. Switch between each wallet you have
4. Check transaction history in each wallet
5. Look for the payment amount on the blockchain you used

**Step 2: Verify on blockchain explorer**

1. Copy the transaction hash if you have it
2. Visit the appropriate blockchain explorer:
   - FLUX: explorer.runonflux.io
   - BNB: bscscan.com
   - ETH: etherscan.io
   - etc.
3. Check which address the transaction came from
4. Search for that address in each of your ZelCore wallets

**Step 3: Identify the wallet with the payment**

1. Once found, note which wallet contains that address
2. Switch to that wallet in ZelCore
3. Your payment is there (or was sent from there)

**Recovering access to the payment:**

**If payment is in another wallet within your ZelCore:**

Good news - you have full access! The funds are in a wallet you control.

1. Switch to the correct wallet in ZelCore
2. The balance or transaction history will show there
3. For app purchases: Contact the app support to link purchase to correct wallet
4. You may need to provide proof of payment from the wallet

**If payment was sent to an address you don't control:**

This is rare but can happen if you:
- Manually entered a destination address incorrectly
- Copy-pasted wrong address
- Address was clipboard-hijacked by malware

**Solutions:**
1. If it was sent to another exchange or service: Contact them to recover
2. If sent to unknown address: Unfortunately cannot be reversed
3. Prevention: Always verify destination address before confirming

**For app-specific recovery:**

Different apps have different procedures:

**DAO purchases:**
1. Contact Flux DAO support through official channels
2. Provide transaction hash showing payment
3. Provide correct wallet address for account linking
4. DAO team can manually link purchase to correct account
5. Discord: Official Flux Discord #dao channel

**Titan Node purchases:**
1. Contact Titan support (support provided through Flux channels)
2. Provide proof of payment (transaction hash)
3. Provide ZelID and correct wallet address
4. Support can reassign purchase to correct wallet
5. May require identity verification

**Marketplace purchases:**
1. Contact the seller or Marketplace support
2. Provide transaction details and correct wallet
3. Seller can manually process order for correct account
4. Keep all communication records

**Presearch purchases (node stakes, etc.):**
1. Contact Presearch support: support@presearch.io
2. Provide transaction hash and Presearch account details
3. Presearch team can manually credit your account
4. Include wallet address that made payment

**Prevention for future purchases:**

**1. Verify active wallet BEFORE purchasing:**
- Check Settings > Wallets to see which is active
- Look at wallet name displayed at top of ZelCore
- Verify the wallet contains the funds you intend to use
- Make sure it's the wallet you want associated with the purchase

**2. Double-check during purchase flow:**
- Note the wallet name/address being used
- Verify it matches your intended wallet
- Don't rush through confirmation screens
- Read all details before clicking "Confirm"

**3. Keep detailed records:**
- Screenshot wallet name before purchase
- Save transaction hash immediately after sending
- Record date, time, amount, and purpose
- Keep this information for support inquiries

**4. Use wallet labels effectively:**
- Name your wallets clearly (e.g., "Main Wallet", "Trading", "Nodes")
- Use ZelCore's wallet naming feature in Settings
- Avoid having too many wallets unless necessary
- Clear naming prevents confusion

**5. For recurring purchases:**
- Always use the same wallet for same service/app
- Create a dedicated wallet for node purchases if needed
- Document which wallet is for which purpose

**Important notes:**

**ZelCore's responsibility:**
- ZelCore correctly processed the transaction from your active wallet
- The app used the wallet you had selected at time of purchase
- This is user error (wrong wallet selected), not a ZelCore bug
- ZelCore cannot reverse blockchain transactions

**Your responsibility:**
- Verify which wallet is active before making purchases
- Understand you control multiple wallets
- Keep track of which wallet is for what purpose
- Contact app/service support to reassign purchases if needed

**App/Service responsibility:**
- Some services can manually link purchases to correct account
- Requires proof of payment and correct wallet information
- Timeline varies by service (typically 2-7 days)
- Not all services can reassign purchases

**Can this be prevented by ZelCore?**

Feature requests for future versions:
- Confirmation screen showing wallet name before purchase
- Warning when switching wallets
- Option to lock wallet selection during app sessions
- More prominent wallet indicator in UI

**Current best practice:** Always check Settings > Wallets before any app purchase to confirm correct wallet is active.

**Related:**
- Managing Multiple Wallets in ZelCore (if available)
- [Wallet FAQ](/faq/wallet-faq/)

---

## Which ZelCore apps are available and what do they do?

**Answer:**

ZelCore integrates several apps within the wallet interface, providing access to Flux ecosystem services and partner applications.

**Flux Ecosystem Apps:**

**FluxNodes App**
- **Purpose:** Manage your Flux nodes (Cumulus, Nimbus, Stratus)
- **Features:**
  - View node status and uptime
  - Confirm and start nodes
  - Monitor node rewards
  - Check benchmark results
  - Receive node status notifications
- **Requirement:** Own a Flux node and collateral (1,000/12,500/40,000 FLUX)
- **Platform:** Desktop and Mobile

**Flux DAO App**
- **Purpose:** Participate in Flux decentralized governance
- **Features:**
  - Vote on Flux proposals
  - Create governance proposals (with sufficient FLUX)
  - View proposal history and results
  - Participate in community decision-making
- **Requirement:** Hold FLUX to vote (voting power based on holdings)
- **Platform:** Desktop and Mobile

**Titan Shared Nodes App**
- **Purpose:** Purchase fractional shares of Flux nodes
- **Features:**
  - Buy Titan node shares (fraction of full node)
  - Earn proportional rewards without full node requirement
  - Lower barrier to entry than full node
  - Managed by Titan service (you don't manage server)
- **Requirement:** Smaller FLUX amount than full node
- **Platform:** Desktop and Mobile
- **Note:** Different from running your own Flux node

**Marketplace App**
- **Purpose:** Buy and sell digital goods and services
- **Features:**
  - Purchase items using cryptocurrency
  - List items for sale
  - Browse community marketplace offerings
  - Crypto-native transactions
- **Requirement:** Crypto balance for purchases
- **Platform:** Desktop (primary), limited mobile

**Partner/Integrated Apps:**

**Presearch App**
- **Purpose:** Access Presearch decentralized search engine
- **Features:**
  - Search the web through decentralized network
  - Earn PRE tokens for searches (when using Presearch account)
  - Privacy-focused alternative to Google
  - Integrated directly in ZelCore
- **Requirement:** Optional Presearch account for rewards
- **Platform:** Desktop
- **Note:** Can use without account, but rewards require Presearch signup

**Kadena App**
- **Purpose:** Interact with Kadena blockchain ecosystem
- **Features:**
  - Access Kadena DeFi protocols
  - Manage KDA and Kadena tokens
  - Interact with Kadena dApps
- **Requirement:** KDA holdings
- **Platform:** Desktop and Mobile

**Stats & Utilities:**

**Portfolio App**
- View aggregated balance across all assets
- Track portfolio performance
- See holdings distribution
- Monitor total value in fiat

**Rewards App**
- Track staking rewards
- View node earnings
- Monitor all passive income sources
- Historical earnings data

**How to access apps:**

1. Open ZelCore (Desktop or Mobile)
2. Look for "Apps" section or tab
3. Click/tap on desired app
4. App opens within ZelCore interface
5. Some apps require additional setup or accounts

**App availability by platform:**

| App | Desktop | Mobile | Notes |
|-----|---------|--------|-------|
| FluxNodes | Yes | Yes | Full functionality both |
| DAO | Yes | Yes | Full functionality both |
| Titan | Yes | Yes | Full functionality both |
| Marketplace | Yes | Limited | Better on desktop |
| Presearch | Yes | No | Desktop only |
| Kadena | Yes | Yes | Full functionality both |

**Important notes:**

**Apps are integrated but often separate services:**
- Many apps connect to external services (Titan, Presearch, etc.)
- Purchases or actions may be processed by third parties
- Support for app-specific issues may require contacting app provider
- ZelCore provides the interface, but backend is often separate service

**Payments within apps:**
- Use your ZelCore wallet balances
- Transactions are real blockchain transactions
- Always verify amounts and addresses before confirming
- Check which wallet is active before app purchases

**Future apps:**
- ZelCore frequently adds new integrated apps
- Check announcements for new integrations
- App availability may vary by region or jurisdiction

**Related:**
- [FluxNodes FAQ](/faq/flux-nodes-faq/)
- [I sent payment to wrong wallet (app purchases)](#i-sent-payment-for-an-app-purchase-dao-titan-marketplace-presearch-but-it-went-to-the-wrong-wallet-what-happened)

---

## How do I know which wallet is active when using ZelCore apps?

**Answer:**

Understanding which wallet is active is crucial for app purchases and transactions. Here's how to check and control your active wallet.

**How to check your active wallet:**

**Desktop:**

1. **Top of the screen:**
   - Look at the very top of ZelCore interface
   - Wallet name is displayed (e.g., "Main Wallet", "Wallet 2")
   - This is the currently active wallet

2. **Settings > Wallets:**
   - Click Settings (gear icon)
   - Select "Wallets"
   - Active wallet is highlighted or marked as "Active"
   - Shows all your wallets

3. **Address verification:**
   - Open any asset (e.g., FLUX, BTC)
   - Click "Receive"
   - Check the address shown
   - This address belongs to your active wallet

**Mobile:**

1. **Swipe menu:**
   - Swipe right to open menu
   - Top section shows active wallet name
   - Wallet icon and name displayed prominently

2. **Settings > Wallets:**
   - Tap Settings
   - Select "Wallets"
   - Active wallet indicated
   - Can switch wallets here

3. **Quick check:**
   - Look at address when receiving
   - Verify in transaction history
   - Each wallet has distinct transaction history

**How to switch wallets:**

**Desktop:**

1. Go to Settings > Wallets
2. Click on the wallet you want to use
3. Select "Activate" or "Switch to this wallet"
4. Interface updates to show new active wallet
5. Verify wallet name changed at top of screen

**Mobile:**

1. Swipe to open menu
2. Tap current wallet name at top
3. List of wallets appears
4. Tap desired wallet
5. Wallet switches immediately
6. Verify new wallet name shown

**Best practices for app purchases:**

**Before EVERY app purchase:**

1. **Stop and check active wallet**
   - Don't rush through purchase
   - Explicitly check Settings > Wallets
   - Verify correct wallet is active

2. **Verify balance in correct wallet**
   - Check you have sufficient funds
   - Ensure funds are in the active wallet
   - Don't assume without checking

3. **Note the wallet name**
   - Mentally note or write down active wallet
   - Some purchases ask for confirmation
   - Be ready to verify

4. **Read confirmation screens**
   - App purchases show source address/wallet
   - Verify this is correct before confirming
   - Transaction cannot be reversed once sent

**Create a pre-purchase checklist:**

- [ ] Check Settings > Wallets for active wallet
- [ ] Verify wallet name matches intended wallet
- [ ] Confirm balance is sufficient in this wallet
- [ ] Understand this wallet will be linked to purchase
- [ ] Ready to proceed with purchase

**Common mistakes to avoid:**

**1. Assuming same wallet is always active:**
- ZelCore remembers last active wallet
- If you switched for any reason, it stays switched
- Always verify, don't assume

**2. Checking balance without checking wallet:**
- You might see balance in Asset view
- But not realize you're in wrong wallet
- Must explicitly check wallet name

**3. Switching wallets for other task, forgetting to switch back:**
- Check an address in Wallet B
- Forget to switch back to Wallet A
- Make purchase from Wallet B accidentally

**4. Not reading confirmation dialogs:**
- Confirmation shows source address
- Users click through without reading
- Miss opportunity to catch wrong wallet

**Advanced tip: Wallet naming strategy**

**Use clear, descriptive wallet names:**

Good examples:
- "Main - Personal Holdings"
- "Trading - Active Use"
- "Nodes - FluxNodes Only"
- "Cold Storage - Long Term"

Poor examples:
- "Wallet 1", "Wallet 2" (not descriptive)
- "asdfjkl" (meaningless)
- "Test" (ambiguous)

**To rename wallet:**

1. Settings > Wallets
2. Select wallet
3. Edit name/label
4. Save changes
5. Clear names prevent confusion

**Visual indicators to add:**

While ZelCore shows wallet name:
- Get in habit of looking for it
- Make it part of your mental checklist
- Don't proceed until you've verified
- Develop muscle memory for checking

**What if you're unsure:**

If ever uncertain which wallet is active:

1. **Don't proceed with purchase**
2. Go to Settings > Wallets
3. Verify active wallet explicitly
4. If still confused, switch to intended wallet deliberately
5. Re-verify before continuing

**Better safe than sorry** - taking 10 seconds to verify wallet can prevent hours of support communications and days of waiting for purchase reassignment.

**Related:**
- [I sent payment to wrong wallet](#i-sent-payment-for-an-app-purchase-dao-titan-marketplace-presearch-but-it-went-to-the-wrong-wallet-what-happened)
- Managing Multiple Wallets in ZelCore (if available)

---

## Can app purchases be refunded or transferred to a different wallet?

**Answer:**

Generally, **app purchases themselves cannot be automatically refunded or transferred** once the blockchain transaction is complete. However, some app services can manually reassign purchases to different accounts or wallets.

**Understanding the issue:**

**Blockchain transactions are irreversible:**
- Once crypto is sent, it cannot be pulled back
- The blockchain transaction is permanent
- "Refund" requires the recipient to send crypto back
- "Transfer" requires service/app to manually reassign

**App purchases involve multiple parties:**
- **You:** Send payment from wallet
- **Blockchain:** Processes and confirms transaction
- **App/Service:** Receives payment and provides service/access
- **ZelCore:** Facilitates transaction interface only

**ZelCore cannot:**
- Reverse blockchain transactions
- Access app/service systems to reassign purchases
- Issue refunds on behalf of third-party services
- Transfer purchases between wallets automatically

**App/Service may be able to:**
- Manually link purchase to different account
- Verify payment and reassign access
- Provide service to correct wallet after verification
- Issue refund in rare cases (at their discretion)

**By app/service type:**

### Flux DAO Purchases

**Can they reassign?** Sometimes, case-by-case basis

**Process:**
1. Contact Flux DAO support (Flux Discord #dao channel)
2. Provide transaction hash proving payment
3. Provide correct ZelID and wallet address
4. Explain the situation clearly
5. Wait for team review (3-7 days)

**Likelihood:** Moderate - depends on purchase type and circumstances

### Titan Shared Node Purchases

**Can they reassign?** Yes, in most cases

**Process:**
1. Contact Titan support through Flux official channels
2. Provide transaction proof
3. Provide correct wallet address and ZelID
4. May require identity verification
5. Timeline: 5-10 business days typically

**Likelihood:** Good - Titan support has been accommodating for honest mistakes

**Important:** Must be genuine error (wrong wallet), not trying to transfer ownership to another person

### Marketplace Purchases

**Can they reassign?** Depends on seller

**Process:**
1. Contact the individual seller directly
2. Explain purchase went to wrong wallet
3. Provide proof of payment (transaction hash)
4. Provide correct delivery address/wallet
5. Seller decides whether to accommodate

**Likelihood:** Varies greatly - depends on seller's policy and goodwill

**Note:** Marketplace transactions are peer-to-peer, no central authority to appeal to

### Presearch Node Stakes/Purchases

**Can they reassign?** Sometimes

**Process:**
1. Contact Presearch support: support@presearch.io
2. Provide transaction details
3. Provide Presearch account information
4. Explain wrong wallet used for payment
5. Wait for support team review

**Likelihood:** Moderate - Presearch support handles case-by-case

**Note:** Presearch is separate from Flux/ZelCore, so their policies apply

**What increases chances of reassignment:**

**1. Legitimate honest mistake:**
- Clear evidence of user error (not fraud attempt)
- You control both wallets (can prove it)
- Reasonable explanation (multi-wallet confusion)

**2. Quick reporting:**
- Contact support immediately when discovered
- Don't wait days or weeks
- Shows it's a genuine error

**3. Complete documentation:**
- Provide transaction hash
- Provide both wallet addresses (wrong and correct)
- Screenshots if helpful
- Clear explanation of what happened

**4. Reasonable request:**
- Not trying to transfer to another person
- Both wallets are yours in your ZelCore
- Can prove ownership of both
- Service/access not yet used or only partially used

**5. Professional communication:**
- Polite, clear support request
- All information included upfront
- Patient with response time
- Understanding it's at their discretion

**What hurts chances of reassignment:**

- Trying to transfer purchase to someone else (ownership transfer)
- Delayed reporting (weeks/months later)
- Purchase already used/consumed
- Incomplete information or documentation
- Demanding/aggressive communication
- Previous similar requests (pattern of "mistakes")

**Alternative: Keep purchase in "wrong wallet"**

Sometimes easier approach:

**Instead of reassigning purchase, use that wallet for the service:**

1. Accept purchase is linked to that wallet
2. Use that wallet for the app going forward
3. Rename wallet to reflect its purpose
4. Example: Rename "Wallet 2" to "DAO Voting Wallet"

**Advantages:**
- Immediate solution, no waiting
- No need for support intervention
- You control both wallets anyway
- Simple and clean

**When this makes sense:**
- Purchase was small value
- You don't mind using different wallet for that app
- Support is unlikely to reassign
- You want immediate access to purchase

**Actual refunds (getting crypto back):**

**Very rare, only in specific circumstances:**

1. **Service not delivered:**
   - You paid but service/app never activated
   - Technical failure on app/service side
   - Service discontinued before delivery

2. **Fraudulent transaction:**
   - Wallet compromised and unauthorized purchase
   - Must prove fraud (difficult)
   - Requires police report typically

3. **App/service error:**
   - They made technical mistake
   - Charged wrong amount
   - Double-charged

**Process for actual refund:**
1. Contact app/service support with evidence
2. Explain why refund is warranted
3. Provide refund address (blockchain address for return)
4. Wait for their decision and processing
5. Timeline: 7-30 days if approved

**Prevention is best policy:**

Since reassignment/refunds are difficult:

**Always verify active wallet before purchase** (see other FAQ in this section)

**Create purchase routine:**
1. Check Settings > Wallets
2. Verify active wallet
3. Confirm balance
4. Read purchase confirmation
5. Only then approve transaction

**Related:**
- [I sent payment to wrong wallet](#i-sent-payment-for-an-app-purchase-dao-titan-marketplace-presearch-but-it-went-to-the-wrong-wallet-what-happened)
- [How do I know which wallet is active?](#how-do-i-know-which-wallet-is-active-when-using-zelcore-apps)

---

## I purchased FluxCloud or FluxDrive storage but my deployment isn't activating. What should I do?

**Answer:**

FluxCloud and FluxDrive are decentralized storage and compute services running on the Flux network. Purchase activation issues typically stem from payment confirmation delays, network synchronization, or deployment configuration problems.

**Understanding FluxCloud and FluxDrive:**

**FluxCloud:**
- Decentralized cloud compute platform
- Deploy applications and services on Flux network
- Pay with FLUX tokens
- Runs on distributed Flux nodes globally

**FluxDrive:**
- Decentralized storage solution
- Store files across Flux network
- Pay for storage capacity with FLUX
- Distributed, redundant file storage

**Both services require:**
- Payment confirmation on blockchain
- Network propagation of deployment request
- Available Flux nodes to host service
- Time for deployment activation

**Common activation issues:**

### Issue 1: Payment not yet confirmed on blockchain

**Symptoms:**
- Just sent payment
- Purchase shows pending
- Nothing activating yet

**Cause:** Blockchain requires confirmations before service activates

**Solution:**

**Wait for confirmations:**
1. FLUX transactions need 10+ confirmations typically
2. Each confirmation takes ~2 minutes
3. Total wait time: 20-30 minutes minimum
4. Check transaction status on blockchain explorer

**How to check:**
1. Get transaction hash (TxID) from ZelCore
2. Visit explorer.runonflux.io
3. Search for your transaction
4. Check number of confirmations
5. Wait until sufficient confirmations reached

**When to worry:**
- After 1 hour with 50+ confirmations and still not active
- Then investigate further

### Issue 2: Payment went to wrong wallet

**Symptoms:**
- Payment confirmed but service not linked to your account
- Can't see deployment in dashboard
- FluxCloud/FluxDrive doesn't recognize purchase

**Cause:** Sent payment from different wallet than expected

**Solution:**

See the main FAQ entry: [I sent payment for an app purchase to wrong wallet](#i-sent-payment-for-an-app-purchase-dao-titan-marketplace-presearch-but-it-went-to-the-wrong-wallet-what-happened)

**For FluxCloud/FluxDrive specifically:**
1. Contact Flux support through official Discord
2. Provide transaction hash showing payment
3. Provide correct wallet address and ZelID
4. Explain wallet mismatch
5. Support can manually link purchase

**Channels:**
- Flux Discord: #fluxcloud-support or #general-support
- Provide: TxID, wallet address, ZelID, issue description

### Issue 3: Network propagation delay

**Symptoms:**
- Payment confirmed on blockchain
- Right wallet used
- Still not showing in FluxCloud/FluxDrive dashboard

**Cause:** Flux network needs time to propagate deployment request across nodes

**Solution:**

**Wait for network propagation:**
1. Even after blockchain confirmation, network needs time
2. Deployment request must reach available nodes
3. Can take 30-60 minutes
4. Patience is key

**Check deployment status:**
1. Log into FluxCloud/FluxDrive dashboard
2. Check "Deployments" or "My Services" section
3. Look for pending deployments
4. Status may show "Pending", "Waiting for nodes", or similar

**If over 2 hours:**
1. Refresh dashboard (hard refresh: Ctrl+F5 or Cmd+Shift+R)
2. Log out and log back in
3. Clear browser cache
4. Try different browser
5. Contact support if still not showing

### Issue 4: Insufficient available nodes

**Symptoms:**
- Payment confirmed
- Deployment shows as "Waiting for nodes" indefinitely
- Service not starting

**Cause:** Not enough Flux nodes available to host your deployment specifications

**Solution:**

**Reduce resource requirements:**

If your deployment requests high resources (CPU, RAM, storage):
1. Scale down requirements
2. Request fewer resources
3. Try smaller configuration
4. More nodes can fulfill smaller requests

**Check network capacity:**
1. Visit home.runonflux.io
2. Check network statistics
3. See how many nodes are available
4. High network usage may delay deployment

**Wait for node availability:**
1. Nodes come online and offline dynamically
2. Wait a few hours
3. Network capacity changes over time
4. May auto-deploy when nodes become available

**Alternative deployment region:**
1. If specifying region/tier, try different one
2. Some regions may have more availability
3. Flexibility increases chances of deployment

### Issue 5: Deployment configuration error

**Symptoms:**
- Payment successful
- Deployment attempted but fails
- Error messages in dashboard

**Cause:** Configuration of deployment has errors

**Solution:**

**Review deployment settings:**
1. Check Docker image name is correct
2. Verify environment variables are valid
3. Ensure port configurations are proper
4. Review resource limits are realistic

**Common configuration mistakes:**
- Invalid Docker image reference
- Typos in environment variables
- Port conflicts
- Requesting more resources than available tiers
- Incorrect command or entry point

**Fix and redeploy:**
1. Cancel failed deployment
2. Correct configuration errors
3. Resubmit deployment
4. Monitor for success

**Check deployment logs:**
1. Access deployment logs if available
2. Look for specific error messages
3. Address errors mentioned
4. Consult FluxCloud documentation

### Issue 6: Insufficient FLUX balance for ongoing costs

**Symptoms:**
- Deployment started but stopped
- Service was active, now inactive
- Balance ran out

**Cause:** FluxCloud/FluxDrive services have ongoing costs, not just one-time payment

**Solution:**

**Understand pricing model:**
- Initial payment activates service
- Ongoing usage costs FLUX over time
- Must maintain sufficient balance
- Service pauses if balance depleted

**Add more FLUX:**
1. Check your FluxCloud/FluxDrive balance
2. Add more FLUX to account
3. Service should resume automatically
4. Monitor balance regularly

**Set up auto-top-up (if available):**
1. Configure automatic balance replenishment
2. Prevents service interruptions
3. Maintains continuous operation

### Issue 7: Browser/cache issues preventing dashboard display

**Symptoms:**
- Payment confirmed
- Deployment likely active
- But not showing in dashboard

**Cause:** Browser cache or session issues

**Solution:**

**Clear cache and refresh:**
1. Clear browser cache completely
2. Clear cookies for Flux domains
3. Hard refresh page (Ctrl+F5 or Cmd+Shift+R)
4. Try incognito/private browsing mode

**Try different browser:**
1. Chrome, Firefox, Brave, Edge all work
2. Sometimes one browser has issues
3. Test in alternative browser
4. Determines if browser-specific

**Disable browser extensions:**
1. Ad blockers can interfere
2. Privacy extensions may block scripts
3. Try with all extensions disabled
4. Re-enable one by one to find culprit

**Check internet connection:**
1. Stable connection required
2. VPN may cause issues
3. Try without VPN if using one

### Issue 8: Account/ZelID authentication issues

**Symptoms:**
- Can't log into FluxCloud/FluxDrive
- Dashboard shows "not authorized"
- Can't see purchases

**Cause:** ZelID authentication problem or wrong account

**Solution:**

**Verify ZelID login:**
1. Ensure using correct ZelID
2. Check ZelID in ZelCore matches login
3. Try logging out and back in
4. Verify wallet linked to ZelID

**Multiple ZelIDs:**
1. If you have multiple ZelIDs
2. May have purchased under different one
3. Check all your ZelIDs
4. Find which one has the purchase

**Reset authentication:**
1. Log out completely
2. Clear cookies
3. Restart browser
4. Log in fresh with correct ZelID

**Contact support for account issues:**
1. Flux Discord #general-support
2. Explain authentication problem
3. Provide ZelID and transaction proof
4. Support can verify account status

**Immediate troubleshooting checklist:**

When FluxCloud/FluxDrive purchase doesn't activate:

- [ ] **Wait 30 minutes minimum** after payment
- [ ] **Check transaction confirmations** on blockchain explorer
- [ ] **Verify correct wallet was used** for payment
- [ ] **Refresh dashboard** (hard refresh)
- [ ] **Clear browser cache** and try again
- [ ] **Check deployment status** in dashboard
- [ ] **Verify FLUX balance** for ongoing costs
- [ ] **Try different browser** to rule out browser issues
- [ ] **Check Flux network status** for outages
- [ ] **Review deployment configuration** for errors
- [ ] **Wait 2 hours total** before escalating
- [ ] **Contact Flux support** if still not resolved

**Information to provide to support:**

When contacting Flux support about activation issues:

**Essential information:**
1. **Transaction hash (TxID)** showing payment
2. **Wallet address** used for payment
3. **ZelID** associated with account
4. **Service purchased** (FluxCloud or FluxDrive)
5. **Amount paid** and expected service
6. **Time of purchase**
7. **Current status** (what you see in dashboard)
8. **Error messages** if any
9. **Screenshots** of dashboard and transaction

**Where to get help:**
- **Flux Discord:** discord.gg/runonflux
  - #fluxcloud-support channel
  - #general-support channel
  - Active community and team support
- **Flux Telegram:** Official Flux group
- **FluxCloud documentation:** docs.runonflux.io

**Prevention tips:**

**Before purchasing FluxCloud/FluxDrive:**

1. **Verify active wallet:**
   - Check Settings > Wallets in ZelCore
   - Ensure correct wallet is active
   - Verify wallet has sufficient FLUX

2. **Understand pricing:**
   - One-time deployment cost
   - Plus ongoing usage costs
   - Budget for both

3. **Plan deployment specs:**
   - Know what resources you need
   - Don't over-spec (wastes FLUX)
   - Don't under-spec (may not run properly)
   - Check current node availability

4. **Save transaction details:**
   - Screenshot payment confirmation
   - Note transaction hash immediately
   - Record wallet used
   - Timestamp purchase

5. **Monitor after purchase:**
   - Don't just pay and forget
   - Check within 30 minutes
   - Verify activation
   - Address issues early

**Understanding deployment timelines:**

**Normal activation timeline:**
1. **Payment sent:** 0 minutes
2. **Blockchain confirmation:** 20-30 minutes (10+ confirmations)
3. **Network propagation:** 30-60 minutes
4. **Node assignment:** Varies (5 minutes to 2 hours)
5. **Deployment activation:** 5-15 minutes after node assigned
6. **Total typical time:** 1-3 hours from payment to active

**Extended but acceptable:**
- Up to 6 hours during high network load
- Up to 12 hours if node availability is low
- Overnight for complex deployments

**Too long (investigate):**
- Over 24 hours without activation
- Contact support at this point
- Likely specific issue needing attention

**Common misconceptions:**

**"I paid, so it should work instantly"**
- False: Blockchain confirmations take time
- Network propagation is not instant
- Node assignment requires available resources
- Expect 1-3 hours minimum

**"Payment was expensive, so it's a one-time cost"**
- False: FluxCloud/FluxDrive have ongoing costs
- Initial payment may include limited credits
- Must maintain balance for continued service
- Check pricing model details

**"If dashboard doesn't show it, payment failed"**
- False: Display issues are common
- Clear cache and refresh before worrying
- Try different browser
- Check blockchain to verify payment succeeded

**"Support can instantly fix any issue"**
- Partially true: Manual intervention takes time
- Support can help but not always instant
- Provide complete information for faster help
- Patience is required

**Advanced: Understanding FluxCloud/FluxDrive architecture**

**How activation works:**

1. **Payment on blockchain:**
   - You send FLUX to FluxCloud/FluxDrive smart contract
   - Blockchain confirms transaction
   - Creates record of purchase

2. **Flux network sees payment:**
   - Flux nodes monitor blockchain
   - Detect FluxCloud/FluxDrive payment
   - Parse deployment parameters
   - Add to deployment queue

3. **Node assignment:**
   - Available Flux nodes bid on deployment
   - System assigns deployment to suitable node(s)
   - Selected nodes prepare to host

4. **Deployment execution:**
   - Nodes pull Docker image or prepare storage
   - Configure environment
   - Start service
   - Report to network

5. **Activation complete:**
   - Service accessible
   - Dashboard updates
   - You can use deployed service

**Where delays occur:**
- Blockchain confirmations (always required)
- Network seeing the confirmed transaction
- Finding available nodes matching requirements
- Nodes downloading and configuring deployment
- Dashboard syncing with network state

**Your service is safe:**

Important to understand:
- If payment is on blockchain, it's recorded
- Deployment will activate or FLUX can be refunded
- Not lost in the ether
- Flux network is distributed and reliable
- Patience and proper channels resolve issues

**Related:**
- [I sent payment to wrong wallet](#i-sent-payment-for-an-app-purchase-dao-titan-marketplace-presearch-but-it-went-to-the-wrong-wallet-what-happened)
- [Which ZelCore apps are available?](#which-zelcore-apps-are-available-and-what-do-they-do)
- [How do I know which wallet is active?](#how-do-i-know-which-wallet-is-active-when-using-zelcore-apps)

