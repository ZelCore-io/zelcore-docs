---
sidebar_position: 1
title: Security Best Practices
description: "Protect your crypto assets with Zelcore security best practices. Learn about seed phrase safety, 2FA setup, and self-custodial wallet security."
keywords: [crypto wallet security, self custodial wallet, private cryptocurrency wallet, seed phrase security, crypto security best practices, wallet security, seed phrase safety]
---

# Security Best Practices

Keep your seed phrase offline on paper or metal, never share it with anyone (Zelcore staff will never ask for it) and never store it digitally. Transactions are irreversible and Zelcore cannot recover stolen funds, so also protect your device, use a strong password and authentication, check every address before you send and learn to recognize scams.

Background: [Crypto Scams: Red Flags and Safe Habits Guide](https://zelcore.io/academy/basics/crypto-safety-scams-and-safe-habits)

## How Zelcore Wallets Work

- **Private keys control your funds** - Your seed phrase/private keys are the only way to access and move your cryptocurrency
- **Keys are stored locally** - Zelcore is a non-custodial wallet, meaning you (and only you) control your private keys
- **No central recovery** - Unlike bank accounts, there is no customer service that can reverse transactions or recover stolen funds
- **Blockchain finality** - Transactions on the blockchain are permanent and cannot be undone

### Common Attack Vectors

Attackers typically gain access through:

1. **Phishing attacks** - Fake websites, emails, or apps that steal your seed phrase or private keys
2. **Malware and keyloggers** - Software that records your keystrokes or screenshots your screen
3. **Insecure storage** - Seed phrases stored digitally (screenshots, cloud storage, email, notes apps)
4. **Social engineering** - Scammers impersonating support staff to trick you into revealing your seed phrase
5. **Compromised devices** - Using infected computers or phones to access wallets
6. **Clipboard hijacking** - Malware that changes wallet addresses you copy/paste
7. **Physical theft** - Unauthorized physical access to devices or written seed phrases
8. **Supply chain attacks** - Pre-compromised devices or tampered hardware wallets

## Seed Phrase Security

Your 12, 18 or 24-word seed phrase is the master key to your wallet. Lose it, and you lose access to your funds forever. Compromise it, and someone else gains full access.

### Do's ✅

- **Write it down on paper** (or metal backup cards) immediately after wallet creation
- **Store in a secure location** like a fireproof safe or bank vault / safety deposit box
- **Create multiple copies** and store them in different secure locations
- **Use metal seed phrase storage** for protection against fire and water damage
- **Verify you've written it correctly** before storing
- **Keep it private** - treat it like your bank PIN

### Don'ts ❌

- **Never share with anyone** - not even Zelcore support, family, or friends
- **Never store digitally** - no photos, screenshots, cloud storage (Google Drive, iCloud, Dropbox, etc.), or emails
- **Never send it** via email, text message, or any messaging app
- **Never keep it in note-taking apps** (Notes, Evernote, OneNote, etc.) or on your computer in any form (text files, documents, etc.)
- **Never keep photos of it** on your phone
- **Never type it into websites** claiming to "validate" your wallet
- **Never save it in a password manager** or any other online storage
- **Don't split words** across different locations incorrectly

Zelcore staff will NEVER ask for your seed phrase. No legitimate support personnel from any cryptocurrency service will ever need it. If someone asks for your seed phrase, it is a scam - no exceptions.

:::danger Critical Security Warning
If someone gains access to your seed phrase, they have complete control of your funds. There is no way to reverse transactions or recover stolen crypto.
:::

## Password & Authentication

### Strong Password Guidelines

Create a robust password for your Zelcore wallet:

- **Minimum 12 characters**
- Mix of uppercase and lowercase letters
- Include numbers and special symbols
- Avoid dictionary words
- Don't reuse passwords from other services
- Consider using a password manager to generate and store this password (never your seed phrase)

### Biometric Authentication

When available, biometric authentication offers strong security with convenience:

- **Face ID / Touch ID** (iOS)
- **Fingerprint** (Android, some Windows devices)
- **Windows Hello** (Desktop)

Benefits:
- Cannot be guessed or brute-forced
- Faster access than typing passwords
- Unique to your device
- Processed locally (never sent to servers)

Also set a PIN/password on the device itself, not just biometrics (biometrics can be compelled).

### Decentralized 2FA (d2FA)

d2FA protects your account with a numeric PIN that is stored encrypted on the Flux blockchain. To enable it:

1. Make sure your first Flux address holds a small amount of confirmed FLUX (about 0.0002) for the activation transaction
2. Open **Apps** → **Flux ID** → **Next** → **Flux ID d2FA**, then click **Create d2FA**
3. Enter your PIN in **New PIN** and **Verify PIN**
4. Choose where the PIN is used: **Used for logging into Zelcore**, **Used for secure tasks such as transacting, viewing Private Keys and Flux ID operations**, or both
5. Tick the box confirming you have backed up your PIN, then enter your password
6. The PIN is set after the transaction is confirmed on the blockchain and you log in again

When the secure-tasks option is on, Zelcore asks for the PIN before actions such as sending, swapping, Fusion deposits, viewing private keys or your seed phrase, and WalletConnect requests. Write the PIN down when you create it and store it apart from your seed phrase.

### Two-Factor Authentication on Other Services

Exchanges, email and other accounts connected to your crypto activity need their own protection:

- Enable two-factor authentication (2FA) where available
- Use authenticator apps (Google Authenticator, Authy), not SMS when possible
- Store your 2FA backup codes securely offline

## Device Security

Your device's security is fundamental to wallet security. A compromised device means compromised wallets.

### Keep Software Updated

- Update Zelcore when a new version is released
- Keep your operating system current
- Update browser if using extension
- Enable automatic security updates

### Device Best Practices

- **Enable device encryption** (FileVault, BitLocker, etc.)
- **Use screen lock** with password or biometric
- **Install antivirus/anti-malware** software
- **Avoid rooted/jailbroken devices** for wallets, especially for large amounts
- **Lock your device** when not in use
- **Use strong, unique passwords** for your device

**On desktop:**
- Avoid downloading software from untrusted sources
- Don't use public or shared computers to access your wallet
- Use a dedicated computer for cryptocurrency if holding significant amounts

**On mobile:**
- Only download Zelcore from official app stores (Apple App Store, Google Play)
- Don't install apps from unknown sources

### Network Security

Public networks are easier to compromise.

- **Avoid public WiFi** (coffee shops, airports, hotels) for wallet access and cryptocurrency transactions
- **Use a trusted VPN** if you must use public or untrusted networks
- **Never perform transactions** on public networks
- **Assume all public networks are actively monitored**
- **Enable firewall** on your device
- **Use trusted networks** for wallet access

## Transaction Security

### Verify Before Sending

Always double-check transaction details:

1. **Recipient address** - verify every character
2. **Amount** - ensure correct quantity
3. **Network/Chain** - confirm the right blockchain (sending on the wrong network means permanent loss)
4. **Transaction fee** - review gas costs

:::tip Pro Tip
Send a small test transaction first when sending to a new address, especially for large amounts.
:::

### Address Verification

- Copy-paste addresses (don't type manually)
- Verify the first and last 6 characters at minimum
- Use address book for frequently used addresses
- Scan QR codes for mobile transfers (reduces errors)
- Watch for clipboard hijacking malware that changes addresses when you paste

### Beware of Phishing

Attackers create convincing fake communications to steal your credentials. Common phishing tactics:

- Fake Zelcore websites or apps
- Emails claiming to be from Zelcore, or claiming your wallet needs "verification" or "security updates"
- Messages about unauthorized transactions requiring you to "confirm your seed phrase"
- Social media messages offering "support" (Twitter, Telegram, Discord)
- Websites asking for seed phrases
- Pop-ups or notifications claiming you need to "re-enter your recovery phrase"
- Too-good-to-be-true giveaways

How to protect yourself:

- Bookmark the official Zelcore website and always use the bookmark
- Check URLs carefully (zelcore.io is official, ze1core.io is fake)
- Never click links in unsolicited emails about your wallet
- Contact support only through the official help desk ([support.zelcore.io](https://support.zelcore.io))

**Remember**: Zelcore will never ask for your seed phrase, password, or private keys, and will never email you asking for them.

## Hardware Wallet Security

For maximum security, especially with large holdings:

### Why Use Hardware Wallets?

- Private keys never leave the device
- Physical confirmation required for transactions
- Immune to computer malware
- Can be used even on compromised computers

### Supported Devices

- **Ledger** (Zelcore desktop only): Nano S, Nano S Plus, Nano X
- **Trezor** (Zelcore desktop only): One, Model T

### Hardware Wallet Best Practices

- Buy directly from manufacturer
- Verify device is genuine and unopened
- Keep device firmware updated
- Store device in a secure location
- Keep hardware wallet seed phrase separate from Zelcore seed phrase
- Use PIN protection on the device

### For Large Holdings

If you hold significant cryptocurrency value:

1. **Use a hardware wallet** - Consider Ledger or Trezor (used with Zelcore desktop) for cold storage of large amounts
2. **Implement multi-signature** - Require multiple keys to authorize transactions
3. **Maintain a "hot wallet" for daily use** - Keep only small amounts in mobile/desktop wallets
4. **Use dedicated devices** - Air-gapped computer or dedicated phone for crypto only
5. **Regular security audits** - Periodically review and update your security practices
6. **Estate planning** - Ensure trusted individuals can access funds if something happens to you (see [Estate Planning](#estate-planning))

### Operational Security (OPSEC)

Don't advertise your cryptocurrency holdings:

- Avoid posting about your crypto investments on social media
- Don't discuss specific amounts or values publicly
- Be cautious about who knows you hold cryptocurrency
- Use pseudonymous accounts for crypto discussions
- Be aware that blockchain transactions are public (addresses can be linked to identities)

## Recognizing Scams

### Common Crypto Scams

#### 1. Fake Support
- Scammers impersonating Zelcore support
- Asking for seed phrases or private keys
- Offering to "fix" wallet issues

**Protection**: Only contact support through [official channels](https://support.zelcore.io).

#### 2. Phishing Websites
- Fake Zelcore websites (zelc0re.io, ze1core.io, etc.)
- Lookalike domains
- Typosquatting

**Protection**: Always download Zelcore from the official website at [zelcore.io](https://zelcore.io) and bookmark the URL.

#### 3. Fake Giveaways
- "Send 1 ETH, get 2 ETH back" scams
- Celebrity impersonators
- Social media giveaway scams

**Protection**: No legitimate giveaway asks you to send crypto first.

#### 4. Dust Attacks
- Small amounts of tokens sent to your address
- Attempting to track your transactions
- Sometimes containing malicious smart contracts

**Protection**: Don't interact with unknown tokens; use Zelcore's hide feature.

#### 5. Social Engineering
- Fake job offers
- Romance scams
- Investment opportunities with guaranteed returns

**Protection**: Be skeptical of unsolicited messages and offers.

#### 6. Fake Wallet Apps

Fake wallet apps are a common attack vector. Download Zelcore from official sources only:

- Website: [zelcore.io](https://zelcore.io)
- Apple App Store: Search "Zelcore" (verify publisher)
- Google Play Store: Search "Zelcore" (verify publisher)
- Official GitHub releases (for advanced users)

Warning signs of fake apps:
- Slightly misspelled names (ZeICore, ZelCor3, etc.)
- Different publisher/developer names
- Poor reviews or recently published
- Requests for seed phrases during "updates"
- Unusual permissions requests

### Signs of Scam Attempts

Warning signs you're being targeted:

- Unsolicited contact from "support" via DM (Discord, Telegram, Twitter)
- Urgent language requiring immediate action
- Requests for your seed phrase, private keys, or passwords
- Links to "verify" your wallet or "claim" rewards
- Offers that seem too good to be true (airdrops, giveaways, investment opportunities)
- Pressure to "act now" or lose access/funds
- Fake emergency situations ("your wallet will be locked")

## Account Recovery

### Backup Strategy

Your seed phrase is your backup. Implement a robust backup strategy:

1. **Primary backup**: Seed phrase written on paper in safe
2. **Secondary backup**: Duplicate in different location
3. **Tertiary backup**: Metal seed phrase storage in bank vault

When creating a new wallet:

1. Write down your seed phrase on paper
2. Verify each word carefully
3. After writing it down, close the wallet, use the "Recover Wallet" function and enter your seed phrase to ensure it's correct
4. Only then transfer funds to the wallet
5. Store the written phrase securely immediately

For long-term storage:

- Use archival-quality paper or metal backup
- Store in a fireproof, waterproof safe
- Consider geographic distribution (home safe + bank safety deposit box)
- Never tell others where your backup is stored

### Test Your Backups

Verify your backup works before you need it:

1. Import wallet on a test device using backup
2. Verify all assets appear
3. Confirm you can access funds
4. Delete test wallet after verification

- Use a small test wallet to practice recovery
- Simulate the recovery process with your actual seed phrase only with extreme care
- Ensure you can read and understand your handwriting
- Verify the backup hasn't degraded (check annually)
- Never test recovery on a device you don't fully trust

### Estate Planning

Consider crypto in your estate planning:

- Document where seed phrases are stored
- Create instructions for heirs
- Consider a crypto-aware estate attorney
- Use secure methods, such as attorney-held sealed instructions
- Use multi-signature wallets for inheritance (advanced)

## Regular Security Checks

Security is an ongoing process.

### Monthly Security Audit

Perform these checks regularly:

- [ ] Verify seed phrase is stored securely
- [ ] Review active sessions and devices
- [ ] Check for Zelcore updates
- [ ] Review recent transactions
- [ ] Update device passwords
- [ ] Verify d2FA is enabled
- [ ] Review address book entries
- [ ] Check connected dApps (WalletConnect)

Also:

- Check for any unauthorized wallet activity weekly
- Review your security practices quarterly
- Update all software regularly (OS, Zelcore, antivirus)
- Test your backup recovery process annually (with a small test wallet)

### Security Settings Review

Open **Apps** → **Flux ID** → **Flux ID d2FA** and check that d2FA is active.

## Emergency Procedures

For the full procedure, see [Responding to Wallet Compromise](../../guides/responding-to-wallet-compromise/).

### Signs Your Wallet May Be Compromised

Immediate action required if you notice:

- Transactions you didn't authorize appearing in your history
- Balance decreases you can't explain
- Unknown addresses in your transaction history
- Wallet settings changed without your action
- Failed login attempts or unauthorized access notifications
- Your seed phrase backup is missing or moved

### If You Suspect Compromise

If you believe your wallet is compromised:

1. **Don't panic** - think clearly
2. **Stop using the compromised wallet** and do NOT send more funds to it
3. **Create a new wallet** with a new seed phrase immediately, on a clean, trusted device
4. **Transfer remaining funds** from the compromised wallet to the new wallet, if you still have control
5. **Change all passwords** on the compromised device and all related passwords
6. **Scan all devices for malware** thoroughly
7. **Review how the compromise may have occurred**
8. **Document the incident** with transaction IDs and timestamps, for potential legal action
9. **Report to authorities** if significant funds lost

**Important:** Once funds are stolen and confirmed on the blockchain, they cannot be recovered. Focus on securing remaining assets and preventing future compromises.

### If Device is Lost or Stolen

1. **Do not attempt remote wipe** if it contains crypto
2. **Create new wallet** on secure device immediately
3. **Import seed phrase** from backup
4. **Transfer all funds** to newly created wallet addresses
5. **Abandon old wallet** (consider it compromised)

### Why Stolen Cryptocurrency Cannot Be Recovered

- Blockchain transactions are designed to be irreversible
- There is no central authority to reverse transactions
- Zelcore does not control the blockchain networks
- Even with transaction IDs, funds cannot be frozen or reversed
- Law enforcement has limited capability to trace or recover crypto
- Smart contracts and DeFi protocols cannot reverse confirmed transactions

This is by design - it's what makes cryptocurrency trustless and censorship-resistant. The tradeoff is that users must take complete responsibility for security.

## Security Resources

### Official Channels

- **Website**: [zelcore.io](https://zelcore.io)
- **Support**: [support.zelcore.io](https://support.zelcore.io)
- **Discord**: [discord.gg/runonflux](https://discord.gg/runonflux)
- **Twitter**: [@zelcore_io](https://twitter.com/zelcore_io)
- **GitHub**: [github.com/zelcore-io](https://github.com/zelcore-io)

### Staying Informed

- Follow official Zelcore channels (Twitter, Discord, website)
- Read security advisories when published
- Join cryptocurrency security communities
- Stay informed about new attack vectors
- Learn from others' security incidents (without revealing your own holdings)

### Report Security Issues

Found a security vulnerability?

- **Do not** disclose publicly
- Email security@zelcore.io (if available)
- Report through official channels
- Responsible disclosure is appreciated

## Conclusion

**You are your own bank.** With the power and freedom of cryptocurrency comes complete responsibility for security. There is no customer service to call if you lose your funds, no FDIC insurance, no chargebacks, and no account recovery.

Security is an ongoing process, not a one-time setup. Stay vigilant, keep learning, and always prioritize the safety of your assets.

:::tip Remember
The most secure wallet is worthless if you lose access to your seed phrase. Balance security with accessibility, and always maintain proper backups.
:::

## Related

- [Responding to a Wallet Compromise](/docs/guides/responding-to-wallet-compromise)
- [Self-Custodial Wallets Explained](/docs/guides/self-custodial-wallets-explained)
- [Security FAQ](/docs/faq/security-faq)
- [Create a New Wallet](/docs/getting-started/create-wallet)
- [Wallet FAQ](/docs/faq/wallet-faq)
- [Install Zelcore](/docs/getting-started/installation)
