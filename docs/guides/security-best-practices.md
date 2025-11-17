---
sidebar_position: 10
---

# Security Best Practices for ZelCore Wallet

## Overview

This guide provides essential security practices to protect your ZelCore wallet and cryptocurrency assets. Following these guidelines significantly reduces the risk of unauthorized access, theft, and compromise of your funds.

**Important:** Cryptocurrency transactions are irreversible by design. Once funds are sent from your wallet, they cannot be recovered, reversed, or traced back by ZelCore or any centralized authority. Prevention is your only protection.

## Understanding Wallet Security

### How ZelCore Wallets Work

- **Private keys control your funds** - Your seed phrase/private keys are the only way to access and move your cryptocurrency
- **Keys are stored locally** - ZelCore is a non-custodial wallet, meaning you (and only you) control your private keys
- **No central recovery** - Unlike bank accounts, there is no customer service that can reverse transactions or recover stolen funds
- **Blockchain finality** - Transactions on the blockchain are permanent and cannot be undone

### Common Attack Vectors

Based on extensive analysis of wallet compromises, attackers typically gain access through:

1. **Phishing attacks** - Fake websites, emails, or apps that steal your seed phrase or private keys
2. **Malware and keyloggers** - Software that records your keystrokes or screenshots your screen
3. **Insecure storage** - Seed phrases stored digitally (screenshots, cloud storage, email, notes apps)
4. **Social engineering** - Scammers impersonating support staff to trick you into revealing your seed phrase
5. **Compromised devices** - Using infected computers or phones to access wallets
6. **Clipboard hijacking** - Malware that changes wallet addresses you copy/paste
7. **Physical theft** - Unauthorized physical access to devices or written seed phrases
8. **Supply chain attacks** - Pre-compromised devices or tampered hardware wallets

## Critical Security Rules

### Rule 1: Never Share Your Seed Phrase

**Your 12 or 24-word seed phrase is the master key to all your funds.**

- Never share it with anyone, including ZelCore support, family, or friends
- ZelCore staff will NEVER ask for your seed phrase
- No legitimate support personnel from any cryptocurrency service will ever need your seed phrase
- If someone asks for your seed phrase, it is a scam - no exceptions

### Rule 2: Store Your Seed Phrase Offline

**Digital storage is vulnerable to hacking. Use physical, offline storage only.**

**DO:**
- Write your seed phrase on paper or metal backup cards
- Store in a secure, fireproof safe or safety deposit box
- Keep multiple copies in separate secure locations
- Use metal seed phrase storage solutions for fire/water resistance
- Consider splitting storage across different secure locations (advanced users)

**DO NOT:**
- Screenshot your seed phrase
- Store in cloud services (Google Drive, iCloud, Dropbox, etc.)
- Save in password managers (unless using a dedicated hardware-secured option)
- Send via email, text message, or any messaging app
- Store in note-taking apps (Notes, Evernote, OneNote, etc.)
- Keep photos of your seed phrase on your phone
- Store on your computer in any form (text files, documents, etc.)

### Rule 3: Verify All Transactions

**Always double-check transaction details before confirming.**

- Verify the recipient address character by character (check first 6 and last 6 characters minimum)
- Confirm the amount being sent
- Check the blockchain network (sending on wrong network = permanent loss)
- For large amounts, send a small test transaction first
- Be aware of clipboard hijacking malware that changes addresses when you paste

### Rule 4: Keep Your Devices Secure

**A compromised device means compromised wallets.**

**Desktop Security:**
- Keep your operating system and security software updated
- Use reputable antivirus/anti-malware software
- Avoid downloading software from untrusted sources
- Don't use public or shared computers to access your wallet
- Use a dedicated computer for cryptocurrency if holding significant amounts
- Enable full-disk encryption
- Use strong, unique passwords for your device

**Mobile Security:**
- Only download ZelCore from official app stores (Apple App Store, Google Play)
- Keep your phone's OS updated
- Use device encryption and biometric locks
- Avoid jailbroken (iOS) or rooted (Android) devices for wallets
- Don't install apps from unknown sources
- Use a PIN/password, not just biometrics (biometrics can be compelled)

### Rule 5: Download ZelCore from Official Sources Only

**Fake wallet apps are a common attack vector.**

**Official sources:**
- Website: https://zelcore.io
- Apple App Store: Search "ZelCore" (verify publisher)
- Google Play Store: Search "ZelCore" (verify publisher)
- Official GitHub releases (for advanced users)

**Warning signs of fake apps:**
- Slightly misspelled names (ZeICore, ZelCor3, etc.)
- Different publisher/developer names
- Poor reviews or recently published
- Requests for seed phrases during "updates"
- Unusual permissions requests

### Rule 6: Beware of Phishing Attempts

**Attackers create convincing fake communications to steal your credentials.**

**Common phishing tactics:**
- Fake emails claiming your wallet needs "verification" or "security updates"
- Messages about unauthorized transactions requiring you to "confirm your seed phrase"
- Fake customer support on social media (Twitter, Telegram, Discord)
- Websites that look like ZelCore but have slightly different URLs
- Pop-ups or notifications claiming you need to "re-enter your recovery phrase"

**How to protect yourself:**
- Bookmark the official ZelCore website and always use the bookmark
- Check URLs carefully (zelcore.io is official, ze1core.io is fake)
- Never click links in unsolicited emails about your wallet
- ZelCore will never email you asking for your seed phrase or private keys
- Contact support only through official channels (https://zelcore.io/support)

### Rule 7: Use Strong Passwords and 2FA

**Even though ZelCore is non-custodial, account security still matters.**

- Use a unique, strong password for your ZelCore account
- Never reuse passwords across services
- Enable two-factor authentication (2FA) where available
- Use authenticator apps (Google Authenticator, Authy), not SMS when possible
- Store your 2FA backup codes securely offline

### Rule 8: Be Cautious with Public WiFi

**Public networks are easier to compromise.**

- Avoid accessing your wallet on public WiFi (coffee shops, airports, hotels)
- If you must use public WiFi, use a trusted VPN
- Never perform transactions on public networks
- Assume all public networks are actively monitored

## Advanced Security Practices

### For Large Holdings

If you hold significant cryptocurrency value:

1. **Use a hardware wallet** - Consider Ledger or Trezor for cold storage of large amounts
2. **Implement multi-signature** - Require multiple keys to authorize transactions
3. **Maintain a "hot wallet" for daily use** - Keep only small amounts in mobile/desktop wallets
4. **Use dedicated devices** - Air-gapped computer or dedicated phone for crypto only
5. **Regular security audits** - Periodically review and update your security practices
6. **Estate planning** - Ensure trusted individuals can access funds if something happens to you (use secure methods like attorney-held sealed instructions)

### Operational Security (OPSEC)

**Don't advertise your cryptocurrency holdings:**

- Avoid posting about your crypto investments on social media
- Don't discuss specific amounts or values publicly
- Be cautious about who knows you hold cryptocurrency
- Use pseudonymous accounts for crypto discussions
- Be aware that blockchain transactions are public (addresses can be linked to identities)

### Regular Maintenance

**Security is an ongoing process:**

- Review your security practices quarterly
- Update all software regularly (OS, ZelCore, antivirus)
- Check for any unauthorized wallet activity weekly
- Test your backup recovery process annually (with a small test wallet)
- Stay informed about new threats through official ZelCore channels

## Red Flags and Warning Signs

### Signs Your Wallet May Be Compromised

**Immediate action required if you notice:**

- Transactions you didn't authorize appearing in your history
- Balance decreases you can't explain
- Unknown addresses in your transaction history
- Wallet settings changed without your action
- Failed login attempts or unauthorized access notifications
- Your seed phrase backup is missing or moved

**What to do immediately:**

1. Do NOT send more funds to potentially compromised wallets
2. If you still have control, transfer remaining funds to a new, secure wallet immediately
3. Use a clean, trusted device to create the new wallet
4. Scan all devices for malware
5. Review how the compromise may have occurred
6. Document everything for potential legal action

### Signs of Scam Attempts

**Warning signs you're being targeted:**

- Unsolicited contact from "support" via DM (Discord, Telegram, Twitter)
- Urgent language requiring immediate action
- Requests for your seed phrase, private keys, or passwords
- Links to "verify" your wallet or "claim" rewards
- Offers that seem too good to be true (airdrops, giveaways, investment opportunities)
- Pressure to "act now" or lose access/funds
- Fake emergency situations ("your wallet will be locked")

## Recovery and Backup

### Proper Backup Procedures

**Your seed phrase is your backup - protect it properly:**

1. **When creating a new wallet:**
   - Write down your seed phrase on paper
   - Verify each word carefully
   - Test the backup by recovering the wallet
   - Store the written phrase securely immediately

2. **Verification process:**
   - After writing down your seed phrase, close the wallet
   - Use the "Recover Wallet" function
   - Enter your seed phrase to ensure it's correct
   - Only then transfer funds to the wallet

3. **Long-term storage:**
   - Use archival-quality paper or metal backup
   - Store in a fireproof, waterproof safe
   - Consider geographic distribution (home safe + bank safety deposit box)
   - Never tell others where your backup is stored

### Testing Your Backup

**Verify your backup works before you need it:**

- Use a small test wallet to practice recovery
- Simulate the recovery process with your actual seed phrase (extremely carefully)
- Ensure you can read and understand your handwriting
- Verify the backup hasn't degraded (check annually)
- Never test recovery on a device you don't fully trust

## What to Do If Compromised

See our dedicated guide: [Responding to Wallet Compromise](/docs/guides/responding-to-wallet-compromise)

**Immediate steps:**

1. Stop using the compromised wallet immediately
2. Do not send additional funds to it
3. Use a clean device to create a new wallet with a new seed phrase
4. Transfer any remaining funds from the compromised wallet to the new one
5. Scan all devices for malware
6. Change all related passwords
7. Document the incident with transaction IDs and timestamps

**Important:** Once funds are stolen and confirmed on the blockchain, they cannot be recovered. Focus on securing remaining assets and preventing future compromises.

## Educational Resources

### Understanding Blockchain Finality

**Why stolen cryptocurrency cannot be recovered:**

- Blockchain transactions are designed to be irreversible
- There is no central authority to reverse transactions
- ZelCore does not control the blockchain networks
- Even with transaction IDs, funds cannot be frozen or reversed
- Law enforcement has limited capability to trace or recover crypto
- Smart contracts and DeFi protocols cannot reverse confirmed transactions

This is by design - it's what makes cryptocurrency trustless and censorship-resistant. The tradeoff is that users must take complete responsibility for security.

### Staying Informed

**Keep up with security threats:**

- Follow official ZelCore channels (Twitter, Discord, website)
- Read security advisories when published
- Join cryptocurrency security communities
- Stay informed about new attack vectors
- Learn from others' security incidents (without revealing your own holdings)

## Related Documentation

- [Responding to Wallet Compromise](/docs/guides/responding-to-wallet-compromise) - Immediate actions if your wallet is compromised
- [Security FAQ](/docs/faq/security-faq) - Common security questions and answers
- [Wallet FAQ](/docs/faq/wallet-faq) - General wallet questions
- [Getting Started with ZelCore](/docs/get-started/installation) - Initial setup and installation

## Final Reminder

**You are your own bank.** With the power and freedom of cryptocurrency comes complete responsibility for security. There is no customer service to call if you lose your funds, no FDIC insurance, no chargebacks, and no account recovery.

The practices in this guide are not optional - they are essential. Every compromised wallet could have been prevented by following these security measures.

Stay safe, stay vigilant, and protect your assets.
