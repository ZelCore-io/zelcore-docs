---
sidebar_position: 11
---

# Responding to Wallet Compromise

## Overview

This guide provides immediate action steps if you suspect or confirm that your ZelCore wallet has been compromised. Time is critical when responding to a security incident.

**Critical Information:**

- Cryptocurrency transactions are permanent and irreversible
- Once funds leave your wallet and are confirmed on the blockchain, they cannot be recovered
- ZelCore cannot reverse, freeze, or retrieve stolen funds
- Law enforcement has very limited ability to recover cryptocurrency
- Your immediate priority is protecting any remaining assets

## Immediate Response (First 15 Minutes)

### Step 1: Assess the Situation

**Check if the compromise is real:**

1. **Verify the transactions on a blockchain explorer:**
   - Go to the appropriate blockchain explorer (see list below)
   - Enter your wallet address
   - Confirm unauthorized transactions actually occurred
   - Sometimes display issues in ZelCore can be mistaken for theft

2. **Common blockchain explorers:**
   - **Bitcoin:** blockchain.com or blockchair.com
   - **Ethereum:** etherscan.io
   - **Flux:** explorer.runonflux.io
   - **Kadena:** explorer.chainweb.com
   - **Ravencoin:** ravencoin.network
   - **Other chains:** Search "[blockchain name] explorer"

3. **Document everything:**
   - Take screenshots of unauthorized transactions
   - Note the transaction IDs (TxID/hash)
   - Record wallet addresses involved (both yours and recipient addresses)
   - Note the exact amounts and timestamps
   - Screenshot your wallet history

**If transactions ARE confirmed on the blockchain:** Proceed to Step 2 immediately.

**If no unauthorized transactions appear on the blockchain:** You may have a display issue, not a compromise. See [Troubleshooting Balance & Sync Issues](/guides/troubleshooting-balance-sync-issues/).

### Step 2: Stop All Activity Immediately

**Do NOT:**

- Send any more funds to the compromised wallet
- Try to "move" funds quickly (attackers may have scripts monitoring your wallet)
- Panic and make rushed decisions
- Continue using the compromised device
- Share your seed phrase with anyone claiming they can help

**DO:**

- Disconnect the compromised device from the internet if possible
- Close ZelCore on all devices
- Remain calm - you need clear judgment for next steps

### Step 3: Secure Remaining Funds (If Any)

**If you still have funds in the compromised wallet:**

**Warning:** The attacker likely has your private keys. They may be monitoring the wallet for new activity. Moving funds requires careful execution.

1. **Use a completely different, clean device:**
   - Do NOT use the device where the compromise occurred
   - Use a different computer, phone, or tablet
   - Ensure this device is malware-free (run updated antivirus scan)
   - Use a trusted, secure network (not public WiFi)

2. **Create a NEW wallet with a NEW seed phrase:**
   - Install ZelCore from official sources only (https://zelcore.io)
   - Generate a completely new wallet
   - Write down the new seed phrase on paper
   - Verify you wrote it correctly
   - **NEVER reuse the old seed phrase or any part of it**

3. **Transfer remaining funds quickly but carefully:**
   - From the clean device, access your COMPROMISED wallet
   - Send remaining funds to your NEW wallet address
   - Verify the recipient address character by character
   - Use appropriate gas/fees to ensure fast confirmation
   - Monitor the transaction on blockchain explorer

4. **Expect competition:**
   - Attackers may have scripts that automatically sweep any new funds
   - If an attacker has your private keys, they can compete to drain funds
   - You may need to use higher transaction fees to outpace them
   - Some funds may be lost during this process

**If all funds are already gone:** Skip to Step 4.

### Step 4: Abandon the Compromised Wallet

**The compromised wallet is permanently unsafe:**

- Once a private key is compromised, that wallet can never be secure again
- Do not send any funds to this wallet in the future
- The attacker will always have access
- You cannot "reclaim" or "fix" a compromised wallet
- You must create a new wallet with a new seed phrase

**Important:** Changing your ZelCore account password does NOT secure a compromised wallet. The attacker has your private keys, which are independent of your account password.

## Detailed Investigation (Hours 1-24)

### Step 5: Identify the Attack Vector

**Understanding how you were compromised prevents future incidents:**

**Review these common attack vectors:**

1. **Phishing:**
   - Did you enter your seed phrase on any website recently?
   - Did you click links in emails about your wallet?
   - Did you download ZelCore from an unofficial source?
   - Did you interact with anyone claiming to be support?

2. **Malware/Keyloggers:**
   - Have you installed any new software recently?
   - Downloaded any files from untrusted sources?
   - Visited suspicious websites?
   - Clicked on ads or pop-ups?

3. **Insecure storage:**
   - Was your seed phrase stored digitally anywhere?
   - Screenshots, cloud storage, email, notes apps?
   - Password manager that was compromised?
   - Text messages or chat apps?

4. **Physical access:**
   - Does anyone else have physical access to your devices?
   - Could someone have seen your screen or found your written seed phrase?
   - Have you written or discussed your seed phrase in visible/recordable areas?

5. **Compromised device:**
   - Is the device jailbroken, rooted, or running unofficial software?
   - Have you used public or shared computers?
   - Connected to untrusted networks?

6. **Clipboard hijacking:**
   - Did you copy/paste wallet addresses?
   - Malware can change addresses when you paste them

### Step 6: Scan All Devices

**Clean every device that accessed the wallet:**

**Desktop/Laptop:**
1. Update your antivirus/anti-malware software
2. Run a full system scan with multiple tools:
   - Windows Defender (Windows)
   - Malwarebytes (all platforms)
   - Bitdefender, Kaspersky, or Norton
3. Check for keyloggers specifically
4. Review installed programs (uninstall anything unfamiliar)
5. Check browser extensions (remove any you don't recognize)
6. Clear browser cache and cookies
7. Consider a full OS reinstall if malware is found

**Mobile:**
1. Update to the latest OS version
2. Run mobile security scans (Lookout, Norton Mobile, etc.)
3. Review all installed apps (uninstall anything suspicious)
4. Check app permissions (remove excessive permissions)
5. Factory reset if you cannot identify the source of compromise

**Network:**
1. Change your WiFi password
2. Update router firmware
3. Check for unknown devices on your network
4. Consider that your entire network may be compromised

### Step 7: Change All Related Credentials

**Assume related accounts may also be compromised:**

1. **Change passwords for:**
   - Your ZelCore account
   - Email accounts
   - Any cryptocurrency exchanges
   - Financial accounts
   - Cloud storage services
   - Social media accounts
   - Any account using the same or similar passwords

2. **Enable two-factor authentication (2FA):**
   - Use authenticator apps (Google Authenticator, Authy)
   - Avoid SMS-based 2FA when possible
   - Store backup codes securely offline

3. **Review account activity:**
   - Check login history on all accounts
   - Look for unauthorized access
   - Revoke any unknown sessions/devices

### Step 8: Document the Incident

**Create a comprehensive record:**

**Collect all evidence:**
- Transaction IDs (TxIDs) of unauthorized transfers
- Timestamps of all suspicious activity
- Recipient wallet addresses
- Screenshots from blockchain explorers
- Your wallet addresses (both sending and receiving)
- Amounts stolen (in crypto and USD equivalent at time of theft)
- Timeline of events leading to discovery

**Why documentation matters:**
- Required for potential law enforcement reports
- Needed for tax documentation (theft losses may be deductible)
- Helps identify patterns if you were part of a larger attack
- Useful for community warnings to prevent others from falling victim
- May be required for insurance claims (if you have crypto insurance)

## What ZelCore Can and Cannot Do

### What ZelCore CANNOT Do

**It's critical to understand the limitations:**

1. **Cannot reverse transactions:**
   - Blockchain transactions are permanent by design
   - Once confirmed, they cannot be undone
   - ZelCore does not control any blockchain network
   - No one can "cancel" or "charge back" cryptocurrency transactions

2. **Cannot recover stolen funds:**
   - ZelCore is a non-custodial wallet (you control the keys, not ZelCore)
   - ZelCore does not have access to your private keys
   - There is no central vault or insurance fund
   - Stolen cryptocurrency cannot be "refunded"

3. **Cannot trace or freeze funds:**
   - While transactions are public on explorers, wallets are pseudonymous
   - ZelCore cannot identify who controls a wallet address
   - Cannot freeze or seize funds in any wallet
   - Cannot force recipients to return funds

4. **Cannot identify attackers:**
   - Wallet addresses don't reveal personal identities
   - Attackers use mixing services and multiple wallets
   - Technical tracing requires law enforcement with blockchain analysis firms
   - Most cryptocurrency theft goes unsolved

### What ZelCore CAN Do

**Limited support options available:**

1. **Provide technical guidance:**
   - Help you understand what happened
   - Explain how to secure new wallets
   - Offer best practices for prevention
   - Guide you through proper backup procedures

2. **Assist with security review:**
   - Help identify potential vulnerabilities
   - Recommend security improvements
   - Provide educational resources

3. **Document patterns:**
   - Track reported compromises for pattern analysis
   - Issue community warnings about active threats
   - Update security recommendations based on new attack vectors

4. **Connect with resources:**
   - Provide information on reporting to authorities
   - Share blockchain analysis resources
   - Direct to community support channels

## Reporting to Authorities

### When to Report

**Consider reporting to law enforcement if:**

- The stolen amount is significant (typically $10,000+ USD)
- You have substantial evidence
- The attack was sophisticated or part of a larger scheme
- You were targeted specifically (not a random attack)
- You can identify the attacker or their methods

### How to Report

**Gather information before reporting:**

1. **Prepare your documentation:**
   - Complete incident timeline
   - All transaction IDs and addresses
   - Value stolen (in crypto and USD)
   - Evidence of unauthorized access
   - Any communication with attackers

2. **Report to appropriate agencies:**

   **United States:**
   - FBI Internet Crime Complaint Center (IC3): https://www.ic3.gov
   - Local police department (cybercrime division if available)
   - FinCEN (for large amounts)

   **International:**
   - Your country's cybercrime division
   - Interpol (for international cases)
   - Local law enforcement

3. **Contact cryptocurrency exchanges:**
   - If stolen funds moved to known exchanges
   - Provide transaction evidence
   - Request wallet freeze (rarely successful)
   - Some exchanges cooperate with law enforcement

**Set realistic expectations:**
- Most cryptocurrency theft is not solved
- Law enforcement has limited resources and expertise
- Recovery is rare even with arrests
- The process can take months or years
- Focus on prevention of future incidents

## Tax Implications

### Reporting Theft Losses

**Consult a tax professional familiar with cryptocurrency:**

**United States (IRS guidance):**
- Cryptocurrency theft may be deductible as a casualty loss
- Requires documentation of the theft
- May need to file Form 4684
- Subject to various limitations and thresholds
- Rules changed with Tax Cuts and Jobs Act (2018)
- Deductibility depends on individual circumstances

**Other jurisdictions:**
- Tax treatment varies by country
- Some allow theft loss deductions
- Documentation is universally important
- Consult local tax authorities or accountants

**Important:** Properly report cryptocurrency holdings and losses to avoid tax compliance issues. The theft doesn't erase your obligation to report.

## Preventing Future Compromises

### Setting Up a New Secure Wallet

**Start fresh with proper security:**

1. **Use a clean, trusted device:**
   - Factory reset device if previously compromised
   - Update to latest OS version
   - Install security software before wallet

2. **Download from official sources only:**
   - https://zelcore.io for desktop
   - Official app stores for mobile (verify publisher)
   - Verify checksums for advanced users

3. **Create and protect new seed phrase:**
   - Generate a completely new wallet
   - Write seed phrase on paper ONLY
   - Never type it on any device or app
   - Store in a secure, offline location
   - Create duplicate backups in separate locations

4. **Test the backup:**
   - Recover the wallet from seed phrase
   - Verify it works before funding
   - Only then send funds to the new wallet

5. **Implement security best practices:**
   - See [Security Best Practices Guide](/guides/security-best-practices/)
   - Use strong, unique passwords
   - Enable all available security features
   - Keep software updated
   - Limit device access to the wallet

### Ongoing Vigilance

**Maintain security long-term:**

- Review wallet activity regularly (weekly minimum)
- Keep all software updated
- Never share your seed phrase
- Be suspicious of unsolicited contact
- Use hardware wallets for large holdings
- Educate yourself on new threats
- Join security-focused cryptocurrency communities

## Emotional and Psychological Support

### Dealing with Loss

**Losing cryptocurrency to theft is traumatic:**

- Feelings of violation, anger, and helplessness are normal
- Many victims blame themselves - this is an attack, not your fault
- The irreversible nature of cryptocurrency makes it especially difficult
- Don't make rash decisions while emotional

**Healthy coping:**
- Take time to process before making new investment decisions
- Learn from the incident without dwelling on blame
- Connect with others who have experienced similar losses
- Focus on protecting remaining assets and preventing future incidents
- Consider taking a break from cryptocurrency if needed

**Avoid common pitfalls:**
- Don't fall for "recovery services" scams (they want additional money and can't help)
- Don't trust people who contact you claiming they can retrieve funds
- Don't invest in "sure thing" opportunities to "make back" your losses
- Don't share your story publicly with specific amounts (makes you a target)

## Community Resources

### Support and Education

**Learn and connect safely:**

- Official ZelCore Discord (support channels)
- r/zelcoreio on Reddit
- Cryptocurrency security communities
- Local cryptocurrency meetups (be cautious about discussing losses)

**Educational resources:**
- [Security Best Practices](/guides/security-best-practices/)
- [Security FAQ](/faq/security-faq/)
- Cryptocurrency security courses
- Blockchain security blogs and newsletters

### Scam Warning

**After a compromise, you may be targeted by recovery scammers:**

**Common recovery scams:**
- "Blockchain recovery experts" who claim they can reverse transactions
- People asking for upfront payment to "trace" or "recover" funds
- Requests for your new seed phrase to "help" secure your wallet
- Promises to "hack back" the attacker
- Fake law enforcement or legal services

**Remember:**
- Legitimate help never requires upfront payment
- No one can reverse confirmed blockchain transactions
- Never share your new seed phrase with anyone
- Be extremely skeptical of unsolicited contact

## Summary: Key Takeaways

1. **Cryptocurrency theft is permanent** - Once confirmed on the blockchain, funds cannot be recovered
2. **Secure remaining assets immediately** - Create a new wallet on a clean device
3. **Never reuse a compromised wallet** - The attacker always has access to compromised private keys
4. **Document everything** - For law enforcement, taxes, and learning
5. **Identify how it happened** - Prevent the same attack vector from succeeding again
6. **Implement proper security** - Follow all best practices from this point forward
7. **Stay vigilant** - Security is an ongoing responsibility
8. **Beware of recovery scams** - No one can reverse blockchain transactions

## Related Documentation

- [Security Best Practices](/guides/security-best-practices/) - Comprehensive security guide
- [Security FAQ](/faq/security-faq/) - Common security questions
- [Wallet FAQ](/faq/wallet-faq/) - General wallet information
- [Troubleshooting Balance & Sync Issues](/guides/troubleshooting-balance-sync-issues/) - Display vs. actual theft

## Final Words

We understand this is an incredibly difficult situation. The irreversible nature of cryptocurrency makes theft especially painful. While the stolen funds likely cannot be recovered, you can protect yourself going forward.

Learn from this incident, implement proper security measures, and help others avoid the same fate by sharing general lessons (without making yourself a target).

Stay secure, and don't let this incident keep you from the legitimate benefits of cryptocurrency - just approach it with the proper respect for security it requires.
