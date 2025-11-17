---
sidebar_position: 3
---

# Security FAQ

## My wallet was hacked and funds were stolen. Can ZelCore reverse the transaction or recover my funds?

**Answer:**

No. We understand this is extremely difficult to hear, but cryptocurrency transactions are permanent and irreversible by design. Once a transaction is confirmed on the blockchain, it cannot be undone, reversed, or cancelled by anyone - including ZelCore, blockchain developers, or any authority.

**Why funds cannot be recovered:**

- **Blockchain finality** - Transactions are designed to be permanent once confirmed
- **Decentralization** - There is no central authority that controls the blockchain
- **Non-custodial wallet** - ZelCore doesn't hold your funds; they exist on the blockchain controlled by private keys
- **No reversal mechanism** - The blockchain has no "undo" or "chargeback" function
- **Irreversibility is a feature** - This is what makes cryptocurrency trustless and censorship-resistant

**What you should do immediately:**

1. Stop using the compromised wallet
2. Create a new wallet on a clean device with a new seed phrase
3. Transfer any remaining funds to the new secure wallet
4. Scan all devices for malware
5. Document the theft with transaction IDs and screenshots

**Related:**
- [Responding to Wallet Compromise](/docs/guides/responding-to-wallet-compromise) - Step-by-step incident response
- [Security Best Practices](/docs/guides/security-best-practices) - Prevent future compromises

---

## Can ZelCore trace where my stolen cryptocurrency went?

**Answer:**

While all cryptocurrency transactions are publicly visible on blockchain explorers, ZelCore cannot identify who controls the wallet addresses or force the return of funds.

**What is possible:**

- **View transactions** - Anyone can see transactions on blockchain explorers
- **Follow the trail** - You can track where funds moved from address to address
- **See addresses** - Wallet addresses receiving funds are publicly visible

**What is NOT possible:**

- **Identify owners** - Wallet addresses don't reveal personal identities
- **Freeze funds** - No one can freeze or lock cryptocurrency in a wallet
- **Force returns** - Cannot compel anyone to send funds back
- **Seize wallets** - No central authority can take control of a wallet

**For investigation:**

- Document all transaction IDs (TxIDs) and recipient addresses
- Report to law enforcement if the amount is significant (typically $10,000+ USD)
- Law enforcement may work with blockchain analysis firms
- Expect limited success - most cryptocurrency theft goes unsolved

**Related:**
- [Responding to Wallet Compromise](/docs/guides/responding-to-wallet-compromise)

---

## I shared my seed phrase with someone claiming to be ZelCore support. What should I do?

**Answer:**

**You have been scammed. Act immediately.**

ZelCore support will NEVER ask for your seed phrase, private keys, or passwords. Anyone who asks for these is a scammer, no exceptions.

**Immediate actions:**

1. **Assume your wallet is compromised** - The scammer has full access
2. **Use a different, clean device** - Don't use the device you were using with the scammer
3. **Create a NEW wallet** - Generate a completely new wallet with a new seed phrase
4. **Transfer remaining funds** - Move any funds still in the compromised wallet to your new wallet
5. **Never reuse the old seed phrase** - That wallet is permanently compromised

**The compromised wallet is lost:**

- Once someone has your seed phrase, they always have access
- You cannot "change" your seed phrase or "reset" the wallet
- Creating a new wallet is the only solution
- Do not send additional funds to the compromised wallet

**Report the scam:**

- Block and report the scammer on the platform where they contacted you
- Report to the platform's abuse team (Discord, Telegram, Twitter, etc.)
- Warn others in the community
- Report to law enforcement if significant funds were stolen

**Related:**
- [Responding to Wallet Compromise](/docs/guides/responding-to-wallet-compromise)
- [Security Best Practices](/docs/guides/security-best-practices)

---

## How do I store my seed phrase safely?

**Answer:**

Your seed phrase is the master key to all your cryptocurrency. Proper storage is critical.

**DO:**

- **Write it on paper** - Use paper or specialized metal backup cards
- **Store offline** - Never store digitally in any form
- **Use a safe** - Keep in a fireproof, waterproof safe or safety deposit box
- **Multiple locations** - Keep copies in separate secure locations
- **Verify accuracy** - Test the seed phrase by recovering your wallet before funding it
- **Tell no one** - Don't share where you store your backup

**DO NOT:**

- Take screenshots or photos
- Store in cloud services (Google Drive, iCloud, Dropbox, OneDrive, etc.)
- Save in password managers (unless using hardware-secured options)
- Send via email, text, or messaging apps
- Store on your computer in any form
- Keep in note-taking apps
- Store digitally anywhere
- Write it on anything that could be easily lost

**Advanced options:**

- **Metal backup devices** - Fireproof and waterproof seed phrase storage (Cryptosteel, Billfodl)
- **Multiple locations** - Split storage between home safe and bank safety deposit box
- **Shamir's Secret Sharing** - Split seed into parts requiring threshold to recover (advanced)

**Testing your backup:**

- Before funding a wallet, test recovery with your written seed phrase
- Ensure your handwriting is legible
- Verify each word matches the official BIP39 word list
- Never test recovery on a device you don't fully trust

**Related:**
- [Security Best Practices](/docs/guides/security-best-practices)

---

## Someone contacted me offering to help recover my stolen crypto. Is this legitimate?

**Answer:**

**No. This is a scam. Block them immediately.**

After a wallet compromise, scammers often target victims with fake "recovery services." These are always scams designed to steal more money or information from you.

**Common recovery scams:**

- "Blockchain recovery experts" claiming they can reverse transactions
- Requests for upfront payment to "trace" or "recover" funds
- Asking for your new seed phrase to "help secure" your wallet
- Promising to "hack back" the attacker
- Fake law enforcement or legal professionals
- "Inside contacts" at exchanges or blockchain companies

**The truth:**

- **Blockchain transactions cannot be reversed** - Once confirmed, they're permanent
- **No one can "hack back"** - Attackers use secure wallets too
- **Legitimate help is free** - Real support never requires upfront payment
- **Never share new seed phrases** - Anyone asking is a scammer

**If you need help:**

- Contact ZelCore through official channels only (https://zelcore.io/support)
- Join official ZelCore Discord or community channels
- Consult our documentation
- Never respond to unsolicited DMs claiming to offer help

**Related:**
- [Responding to Wallet Compromise](/docs/guides/responding-to-wallet-compromise)

---

## Is it safe to store my seed phrase in a password manager?

**Answer:**

**Not recommended** for most users. While more secure than many digital storage methods, password managers still represent a digital attack surface.

**Risks of password manager storage:**

- Password managers can be hacked or breached
- Master password compromise exposes everything
- Keylogger malware can capture master password
- Cloud sync means seed phrase exists on remote servers
- Company could be compromised or go out of business
- You're trusting a third party with your most critical secret

**If you choose to use one:**

- Only use reputable, audited password managers (1Password, Bitwarden, KeePass)
- Use maximum security settings
- Enable 2FA on the password manager
- Store only in local vault, not cloud-synced
- Use a extremely strong, unique master password
- Consider this suitable only for small amounts

**Better alternatives:**

- **Physical storage** - Paper in a safe is more secure for most users
- **Metal backups** - Fireproof and waterproof seed phrase storage
- **Hardware wallets** - For large holdings, seed never touches computer
- **Geographic distribution** - Multiple physical locations

**Best practice:**

For significant cryptocurrency holdings, keep your seed phrase completely offline. The inconvenience is far less painful than losing your funds to a digital breach.

**Related:**
- [Security Best Practices](/docs/guides/security-best-practices)

---

## I took a screenshot of my seed phrase. Is that okay?

**Answer:**

**No. Delete it immediately and move your funds to a new wallet.**

Screenshots of seed phrases are one of the most common ways wallets get compromised.

**Why screenshots are dangerous:**

- **Cloud backup** - Most phones automatically back up photos to cloud services (iCloud, Google Photos)
- **Malware access** - Malware can scan your device for images containing seed phrases
- **Device compromise** - If your phone is hacked, stolen, or compromised, screenshots are accessible
- **Sync across devices** - Cloud-synced photos appear on all your devices, multiplying exposure
- **Third-party apps** - Photo editing apps, photo storage apps, and other software can access your screenshots
- **Recovery by others** - Even deleted screenshots can be recovered from backups

**What to do now:**

1. **Delete the screenshot** from all devices and cloud storage
2. **Delete from "Recently Deleted"** folders
3. **Check cloud backups** (iCloud, Google Photos) and delete from there
4. **Create a new wallet** with a new seed phrase on a clean device
5. **Transfer your funds** to the new wallet
6. **Write the new seed phrase on paper only**

**Going forward:**

- Never photograph your seed phrase
- Never screenshot it
- Never type it on your device except when recovering a wallet
- Write it on paper and store it securely offline

**Related:**
- [Security Best Practices](/docs/guides/security-best-practices)
- [Responding to Wallet Compromise](/docs/guides/responding-to-wallet-compromise)

---

## How can I tell if a ZelCore support person is legitimate?

**Answer:**

**Simple rule: Legitimate ZelCore support will NEVER send you a DM (direct message) first, and will NEVER ask for your seed phrase or private keys.**

**How scammers operate:**

- Watch for support requests in public channels (Discord, Telegram, Reddit)
- Send you a DM claiming to be support staff
- Use official-looking usernames and profile pictures
- Create urgency ("your wallet will be locked," "immediate action required")
- Ask for seed phrases, private keys, or "verification"
- Send links to fake websites that look like ZelCore

**Red flags - SCAM indicators:**

- Unsolicited DM (you didn't initiate private contact)
- Asking for seed phrase, private keys, or passwords
- Requesting remote access to your device
- Asking you to send cryptocurrency to "verify" your wallet
- Links to websites (always go directly to https://zelcore.io)
- Urgent language or pressure tactics
- Offering "exclusive" deals or "limited time" solutions

**How to get legitimate support:**

1. **Official website** - https://zelcore.io/support
2. **Public channels** - Ask in official Discord or Telegram (get help in public, not DM)
3. **Email** - Contact through official website forms only
4. **Never** via unsolicited DM on any platform

**Verify official channels:**

- Check pinned messages in official Discord/Telegram for real support channels
- Look for verified badges (but know they can be faked)
- When in doubt, ignore DMs and use official website
- Cross-reference with information on official ZelCore website

**If you're unsure:**

- Ignore the DM
- Ask in public official channels if the contact is legitimate
- Go directly to https://zelcore.io
- Never share sensitive information via DM

**Related:**
- [Security Best Practices](/docs/guides/security-best-practices)

---

## What should I do if I accidentally sent crypto to the wrong address?

**Answer:**

Unfortunately, cryptocurrency transactions are permanent and irreversible. If you sent funds to the wrong address, they likely cannot be recovered.

**Understanding the situation:**

- **Blockchain transactions are final** - Once confirmed, they cannot be undone
- **No central authority** - There's no company or organization that can reverse it
- **Address control** - Only the person controlling that address can send the funds back
- **ZelCore cannot help** - As a non-custodial wallet, ZelCore doesn't control addresses or blockchains

**Possible scenarios:**

**1. Sent to your own address on wrong blockchain:**
- Example: Sent ETH to your Bitcoin address
- Funds may be recoverable if you control the same seed phrase on both chains
- Requires technical knowledge or professional help
- Not all blockchains support this recovery

**2. Sent to someone else's address:**
- If you know who controls the address, contact them and request return
- Be polite and offer to cover transaction fees for return
- No obligation for them to return funds
- If it's an exchange, contact their support (some help, many don't)

**3. Sent to a smart contract or burn address:**
- Funds are likely permanently lost
- Smart contracts may not be able to return funds
- Burn addresses are designed to destroy cryptocurrency

**Prevention for future:**

- **Always verify addresses** - Check first 6 and last 6 characters minimum
- **Use address book** - Save frequent addresses to avoid typos
- **Send small test amounts** - For large transfers, test with a small amount first
- **Double-check blockchain** - Ensure you're sending on the correct network
- **Be aware of clipboard malware** - Malware can change copied addresses
- **Take your time** - Rushing leads to mistakes

**Related:**
- [Security Best Practices](/docs/guides/security-best-practices)

---

## Can someone access my ZelCore wallet if they have my phone or computer?

**Answer:**

It depends on your security settings, but potentially yes - this is why device security is critical.

**Access levels:**

**1. Physical access to unlocked device:**
- Full access to your wallet if ZelCore is already open
- Can send transactions, view balances, and export data
- This is why you should lock your device when not in use

**2. Physical access to locked device:**
- If they can unlock your device (PIN, password, biometric), they have access
- Biometrics (fingerprint, face) can be compelled in some jurisdictions
- Strong PIN/password is your first line of defense

**3. Physical access with technical knowledge:**
- Advanced attackers may extract data from storage
- Encryption helps but isn't perfect against sophisticated attacks
- Seed phrase stored on device can be extracted

**Protection measures:**

**Device level:**
- Use strong PIN/password (not just biometrics)
- Enable full-disk encryption (FileVault on Mac, BitLocker on Windows)
- Auto-lock after short timeout (1-2 minutes)
- Keep devices physically secure
- Don't leave devices unattended in public

**Wallet level:**
- Enable app-specific password/PIN if available
- Don't store seed phrase on the device
- Log out when not actively using
- Use hardware wallet for large amounts

**If device is lost or stolen:**

1. Immediately access your wallet from another secure device
2. Transfer all funds to a new wallet with new seed phrase
3. The compromised wallet is now unsafe
4. Report device theft to authorities
5. Remote wipe device if possible (Find My iPhone, Android Device Manager)

**Best practice:**

- Treat your device as potentially compromised if it leaves your control
- Never leave devices unattended in public
- Use hardware wallets for significant holdings
- Keep seed phrase offline and separate from devices

**Related:**
- [Security Best Practices](/docs/guides/security-best-practices)

---

## I haven't used ZelCore in months/years. Are my funds safe?

**Answer:**

Yes, your funds are safe on the blockchain. Inactivity doesn't affect your cryptocurrency holdings.

**Understanding long-term storage:**

- **Blockchain persistence** - Your funds exist on the blockchain, not in ZelCore
- **No expiration** - Cryptocurrency doesn't expire or get deactivated
- **ZelCore is just a window** - The wallet app displays blockchain data but doesn't hold your funds
- **Private keys are permanent** - Your seed phrase will always control your funds

**What you should do after a long absence:**

1. **Update ZelCore** - Download the latest version from https://zelcore.io
2. **Use secure device** - Ensure your device is malware-free
3. **Verify on blockchain explorer** - Confirm your balance on the blockchain before opening wallet
4. **Run Smartify** - After opening ZelCore, run Smartify to sync
5. **Review security** - Check for any unauthorized transactions

**If balances don't show immediately:**

- Don't panic - this is likely a sync issue
- Run Smartify in Settings
- Wait 5-10 minutes for full sync
- Verify on blockchain explorer to confirm funds are there

**Security considerations after inactivity:**

- **Review your seed phrase storage** - Ensure it's still secure and readable
- **Check for compromised devices** - Scan for malware before accessing wallet
- **Update security practices** - Review current best practices
- **Consider if you were targeted** - Long inactivity can be an attack pattern

**Many compromises happen after long inactivity because:**

- Users' security practices may have degraded
- Old devices may be compromised
- Users might have forgotten proper security procedures
- Attackers may have had time to plan targeted attacks

**Best practice:**

- Check your wallet at least monthly
- Keep your seed phrase secure and accessible
- Stay informed about security best practices
- Run Smartify regularly even if not actively trading

**Related:**
- [Security Best Practices](/docs/guides/security-best-practices)
- [Troubleshooting Balance & Sync Issues](/docs/guides/troubleshooting-balance-sync-issues)

---

## Is it safe to use ZelCore on public WiFi?

**Answer:**

**Not recommended,** especially for transactions. Public WiFi networks are a significant security risk.

**Risks of public WiFi:**

- **Man-in-the-middle attacks** - Attackers can intercept your network traffic
- **Fake access points** - Criminals create fake WiFi networks to capture data
- **Unencrypted networks** - Many public WiFi networks have no security
- **Malicious users** - Other users on the network may be scanning for targets
- **Network monitoring** - Owners of public networks can see your traffic

**What attackers can potentially do:**

- Intercept wallet addresses you copy/paste
- See what cryptocurrency services you access
- Identify you as a cryptocurrency user (making you a target)
- Install malware through network attacks
- Capture unencrypted data

**If you must use public WiFi:**

1. **Use a trusted VPN** - Encrypt all your traffic (NordVPN, ProtonVPN, etc.)
2. **Only check balances** - Don't perform transactions
3. **Don't access seed phrase** - Never recover or create wallets on public WiFi
4. **Verify HTTPS** - Ensure all connections are encrypted
5. **Disable auto-connect** - Don't let devices automatically join networks
6. **Forget the network** - Remove public WiFi after use

**Better alternatives:**

- **Mobile data** - Use your phone's cellular connection (more secure than public WiFi)
- **Personal hotspot** - Use your phone as a WiFi hotspot for your laptop
- **Wait** - If possible, wait until you have a secure connection
- **Trusted networks** - Only use networks you control or trust

**Safest practice:**

- Only access cryptocurrency wallets on secure, trusted networks
- Use mobile data instead of public WiFi
- Avoid cryptocurrency transactions in public entirely
- Save non-urgent transactions for when you're on a secure network

**Related:**
- [Security Best Practices](/docs/guides/security-best-practices)

---

## How do I know if my wallet has been compromised?

**Answer:**

Monitor for these warning signs of wallet compromise:

**Definite signs of compromise:**

- **Unauthorized transactions** - Outgoing transactions you didn't make appearing in your history or on blockchain explorers
- **Balance decreases** - Funds missing without your action
- **Unknown recipient addresses** - Transactions to addresses you don't recognize
- **Multiple small test transactions** - Attackers often send tiny amounts first to test access

**Warning signs that suggest potential compromise:**

- **Unexpected password resets** - Password change emails you didn't request
- **Login alerts** - Notifications of logins from unknown devices or locations
- **Changes to settings** - Wallet settings modified without your action
- **Missing seed phrase backup** - Your written seed phrase moved or missing
- **Device behaving strangely** - Unusual device behavior, slowness, or crashes

**How to verify:**

1. **Check blockchain explorers** - View your wallet address on the appropriate explorer
2. **Review complete transaction history** - Look for any transactions you don't recognize
3. **Verify all balances** - Compare wallet display to blockchain reality
4. **Check recent activity** - Review login history if available

**If you suspect compromise:**

**Act immediately** - Time is critical. See [Responding to Wallet Compromise](/docs/guides/responding-to-wallet-compromise) for detailed steps:

1. Verify the compromise on blockchain explorer
2. Use a clean device to create a new wallet
3. Transfer any remaining funds to the new wallet
4. Never reuse the compromised seed phrase
5. Scan all devices for malware
6. Document everything

**Prevention:**

- Check wallet activity regularly (weekly minimum)
- Set up blockchain explorer bookmarks for quick checking
- Monitor your addresses even when not actively using the wallet
- Keep email notifications enabled for account activity
- Review security practices regularly

**False alarms:**

Sometimes what looks like compromise is actually:
- Display issues in ZelCore (run Smartify)
- Forgotten transactions you made
- Transactions from linked wallets or services
- Time zone confusion on transaction timestamps

Always verify on blockchain explorer before assuming compromise.

**Related:**
- [Responding to Wallet Compromise](/docs/guides/responding-to-wallet-compromise)
- [Security Best Practices](/docs/guides/security-best-practices)

---

## Are hardware wallets more secure than ZelCore?

**Answer:**

For large holdings, yes. Hardware wallets provide additional security layers that software wallets cannot match.

**Hardware wallet advantages:**

- **Offline key storage** - Private keys never touch internet-connected devices
- **Physical security** - Requires physical possession to authorize transactions
- **Malware resistance** - Keys can't be stolen by computer malware
- **Separate device** - Isolated from compromised computers/phones
- **PIN protection** - Additional authentication layer

**When to use hardware wallets:**

- Holdings worth $10,000+ USD (adjust based on your risk tolerance)
- Long-term storage ("cold storage")
- Funds you don't need frequent access to
- Maximum security priority

**When ZelCore software wallet is appropriate:**

- Smaller amounts for daily use
- Funds you need quick access to ("hot wallet")
- Learning and exploring cryptocurrency
- Active trading or frequent transactions

**Best practice: Split strategy**

Most cryptocurrency users should use both:

1. **Hardware wallet** - Store the majority of holdings (80-90%)
2. **Software wallet (ZelCore)** - Keep smaller amounts for daily use (10-20%)

This balances security with convenience.

**Popular hardware wallets:**

- Ledger (Nano S Plus, Nano X)
- Trezor (Model One, Model T)
- Foundation Passport
- Coldcard (Bitcoin only, maximum security)

**Important notes:**

- Hardware wallets cost money ($50-$200)
- You still need to protect your seed phrase (same risks apply)
- Hardware wallets can fail or be lost (backup seed phrase is critical)
- Fake hardware wallets exist (buy only from official sources)
- Setup requires technical comfort

**ZelCore remains secure when used properly:**

Following security best practices makes ZelCore very secure for most users. Hardware wallets add an extra layer, but aren't necessary for everyone - especially those with smaller holdings or who need frequent access.

**Related:**
- [Security Best Practices](/docs/guides/security-best-practices)

---

## What happens to my cryptocurrency if ZelCore the company disappears?

**Answer:**

**Your cryptocurrency remains safe.** This is one of the key advantages of non-custodial wallets like ZelCore.

**Why your funds are safe:**

- **You control the keys** - Your seed phrase gives you complete control independent of ZelCore
- **Funds are on the blockchain** - Your cryptocurrency exists on public blockchains, not on ZelCore's servers
- **Open standards** - Your seed phrase follows BIP39 standard, compatible with many wallets
- **Non-custodial design** - ZelCore never has access to your private keys or funds

**What would happen if ZelCore disappeared:**

1. **Your funds remain on the blockchain** - Completely unaffected
2. **Your seed phrase still works** - Can be imported into other wallets
3. **You maintain full control** - All access through your seed phrase

**How to recover without ZelCore:**

If ZelCore became unavailable, you would:

1. Choose another compatible wallet (Exodus, Trust Wallet, MetaMask for ETH, etc.)
2. Use the "Import/Recover Wallet" function
3. Enter your ZelCore seed phrase
4. Access all your funds in the new wallet

**This is different from custodial services:**

- **Custodial** (like some exchanges): Company holds your keys, if they disappear your funds may be lost
- **Non-custodial** (like ZelCore): You hold your keys, company disappearing doesn't affect your access

**Important caveat:**

ZelCore-specific features or services might be lost (like Fusion swap history), but your underlying cryptocurrency remains secure and accessible.

**Best practice:**

- Keep your seed phrase secure offline
- Know that it's compatible with other wallets
- Test recovering your wallet in another compatible wallet (with a small test wallet) so you know the process
- Don't rely on any single company for access to your funds

**This is the power of decentralization:**

Your cryptocurrency truly belongs to you, not to any company. Your seed phrase is your proof of ownership and means of access, regardless of what happens to wallet software companies.

**Related:**
- [Security Best Practices](/docs/guides/security-best-practices)
