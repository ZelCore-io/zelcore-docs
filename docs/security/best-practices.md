---
sidebar_position: 1
title: Security Best Practices
description: "Protect your crypto assets with ZelCore security best practices. Learn about seed phrase safety, 2FA setup, and self-custodial wallet security."
keywords: [crypto wallet security, self custodial wallet, private cryptocurrency wallet, seed phrase security]
---

# Security Best Practices

Protecting your cryptocurrency assets requires following security best practices. Zelcore provides multiple layers of security, but your habits play a crucial role in keeping your funds safe.

## Seed Phrase Security

Your seed phrase is the master key to your wallet. Lose it, and you lose access to your funds forever. Compromise it, and someone else gains full access.

### Do's ✅

- **Write it down on paper** immediately after wallet creation
- **Store in a secure location** like a safe or bank vault
- **Create multiple copies** and store them in different secure locations
- **Use metal seed phrase storage** for protection against fire and water damage
- **Verify you've written it correctly** before storing
- **Keep it private** - treat it like your bank PIN

### Don'ts ❌

- **Never share with anyone** - not even Zelcore support
- **Never store digitally** - no photos, screenshots, cloud storage, or emails
- **Never type it into websites** claiming to "validate" your wallet
- **Never save in password managers** (unless using encrypted, offline managers)
- **Don't split words** across different locations incorrectly

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
- Consider using a password manager for generation and storage

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

### Decentralized 2FA (d2FA)

Enable d2FA for an additional security layer:

1. Go to **Settings** → **Security**
2. Select **Enable d2FA**
3. Follow the setup process
4. Confirm with your authentication method

Benefits of d2FA:
- Authentication keys distributed across decentralized nodes
- No single point of failure
- Required for transactions and sensitive operations
- Protection even if device is compromised

## Device Security

Your device's security is fundamental to wallet security.

### Keep Software Updated

- Update Zelcore regularly (weekly releases)
- Keep your operating system current
- Update browser if using extension
- Enable automatic security updates

### Device Best Practices

- **Enable device encryption** (FileVault, BitLocker, etc.)
- **Use screen lock** with password or biometric
- **Install antivirus/anti-malware** software
- **Avoid rooted/jailbroken devices** for large amounts
- **Lock your device** when not in use

### Network Security

- **Avoid public WiFi** for cryptocurrency transactions
- **Use VPN** when on untrusted networks
- **Enable firewall** on your device
- **Use trusted networks** for wallet access

## Transaction Security

### Verify Before Sending

Always double-check transaction details:

1. **Recipient address** - verify every character
2. **Amount** - ensure correct quantity
3. **Network/Chain** - confirm the right blockchain
4. **Transaction fee** - review gas costs

:::tip Pro Tip
Send a small test transaction first when sending to a new address, especially for large amounts.
:::

### Address Verification

- Copy-paste addresses (don't type manually)
- Verify the first and last 6 characters
- Use address book for frequently used addresses
- Scan QR codes for mobile transfers (reduces errors)
- Watch for clipboard hijacking malware

### Beware of Phishing

Common phishing tactics:

- Fake Zelcore websites or apps
- Emails claiming to be from Zelcore
- Social media messages offering "support"
- Websites asking for seed phrases
- Too-good-to-be-true giveaways

**Remember**: Zelcore will never ask for your seed phrase, password, or private keys.

## Hardware Wallet Security

For maximum security, especially with large holdings:

### Why Use Hardware Wallets?

- Private keys never leave the device
- Physical confirmation required for transactions
- Immune to computer malware
- Can be used even on compromised computers

### Supported Devices

- **Ledger**: Nano S, Nano S Plus, Nano X
- **Trezor**: One, Model T

### Hardware Wallet Best Practices

- Buy directly from manufacturer
- Verify device is genuine and unopened
- Keep device firmware updated
- Store device in a secure location
- Keep hardware wallet seed phrase separate from Zelcore seed phrase
- Use PIN protection on the device

## Recognizing Scams

### Common Crypto Scams

#### 1. Fake Support
- Scammers impersonating Zelcore support
- Asking for seed phrases or private keys
- Offering to "fix" wallet issues

**Protection**: Only contact support through [official channels](https://support.runonflux.io).

#### 2. Phishing Websites
- Fake Zelcore websites (zelc0re.io, ze1core.io, etc.)
- Lookalike domains
- Typosquatting

**Protection**: Always download ZelCore from the official website at [zelcore.io](https://zelcore.io) and bookmark the URL.

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

## Account Recovery

### Backup Strategy

Implement a robust backup strategy:

1. **Primary backup**: Seed phrase written on paper in safe
2. **Secondary backup**: Duplicate in different location
3. **Tertiary backup**: Metal seed phrase storage in bank vault
4. **Digital backup**: Encrypted, offline password manager (optional)

### Test Your Backups

Periodically verify your backups:

1. Import wallet on a test device using backup
2. Verify all assets appear
3. Confirm you can access funds
4. Delete test wallet after verification

### Estate Planning

Consider crypto in your estate planning:

- Document where seed phrases are stored
- Create instructions for heirs
- Consider a crypto-aware estate attorney
- Use multi-signature wallets for inheritance (advanced)

## Regular Security Checks

### Monthly Security Audit

Perform these checks regularly:

- [ ] Verify seed phrase is stored securely
- [ ] Review active sessions and devices
- [ ] Check for Zelcore updates
- [ ] Review recent transactions
- [ ] Update device passwords
- [ ] Verify 2FA is enabled
- [ ] Review address book entries
- [ ] Check connected dApps (WalletConnect)

### Security Settings Review

Go to **Settings** → **Security** and verify:

- d2FA is enabled
- Biometric authentication is active
- Auto-lock timeout is appropriate
- Transaction confirmations are enabled
- Address validation is on

## Emergency Procedures

### If You Suspect Compromise

If you believe your wallet is compromised:

1. **Don't panic** - think clearly
2. **Create a new wallet** immediately on a secure device
3. **Transfer funds** from compromised wallet to new wallet
4. **Change all passwords** on the compromised device
5. **Scan for malware** thoroughly
6. **Report to authorities** if significant funds lost

### If Device is Lost or Stolen

1. **Do not attempt remote wipe** if it contains crypto
2. **Create new wallet** on secure device immediately
3. **Import seed phrase** from backup
4. **Transfer all funds** to newly created wallet addresses
5. **Abandon old wallet** (consider it compromised)

## Security Resources

### Official Channels

- **Website**: [zelcore.io](https://zelcore.io)
- **Support**: [zelcore.io/support](https://zelcore.io/support)
- **Discord**: [discord.gg/runonflux](https://discord.gg/runonflux)
- **Twitter**: [@zelcore_io](https://twitter.com/zelcore_io)
- **GitHub**: [github.com/zelcore-io](https://github.com/zelcore-io)

### Report Security Issues

Found a security vulnerability?

- **Do not** disclose publicly
- Email security@zelcore.io (if available)
- Report through official channels
- Responsible disclosure is appreciated

## Conclusion

Security is an ongoing process, not a one-time setup. Stay vigilant, keep learning, and always prioritize the safety of your assets.

:::tip Remember
The most secure wallet is worthless if you lose access to your seed phrase. Balance security with accessibility, and always maintain proper backups.
:::
