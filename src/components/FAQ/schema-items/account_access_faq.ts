const items = [
  { question: `What's the difference between a legacy account and a seed phrase account?`, answer: `Zelcore has two account types with different login methods:` },
  { question: `Should I migrate from legacy to seed phrase?`, answer: `Yes, migration is strongly recommended. Legacy (username and password) login is deprecated and will be phased out. It still works in Zelcore 8.39, but migrate to a seed-phrase wallet now. Official migration page: https://zelcore.io/legacy-login-deprecated` },
  { question: `How do I know if I have a seed phrase?`, answer: `If you have a modern account:
- You wrote down 12 or 24 words when creating your wallet
- These words are in a specific order
- You don't use a username/password to log in` },
  { question: `What's the difference between "Sync" and "Register" on a new device?`, answer: `This is one of the most common sources of confusion. Understanding the difference is critical:` },
  { question: `I chose "Register" instead of "Sync" and my balance is zero. What do I do?`, answer: `Don't panic - your funds are safe! This is a very common mistake. You created a new empty wallet instead of accessing your existing one.` },
  { question: `What does "Sync" actually sync? Is it automatic?`, answer: `"Sync" is a misleading name - it's not automatic synchronization. Here's what it really means:` },
  { question: `How do I access my Zelcore account on a new phone/computer?`, answer: `Follow these steps carefully to access your existing account on a new device:` },
  { question: `Do I need to sync my account every time I switch devices?`, answer: `You don't "sync" between devices - you import your wallet to each device independently.` },
  { question: `I lost my phone. How do I recover my account?`, answer: `If you have your seed phrase, recovery is straightforward. If not, recovery may be difficult or impossible.` },
  { question: `What is d2FA and how is it different from regular 2FA?`, answer: `d2FA (decentralized two-factor authentication) is a numeric PIN of up to 10 digits that you create in the Flux ID app. Zelcore stores it encrypted on the Flux blockchain, so no Zelcore server holds it, and reads it at each login. Unlike SMS or authenticator-app 2FA, it is a PIN you choose, and nobody at Zelcore can reset it.` },
  { question: `I forgot my d2FA PIN. How do I reset it?`, answer: `Zelcore can't reset or recover a d2FA PIN, and restoring your seed phrase doesn't reset it. If the PIN is used only for secure tasks, you can still log in and set a new PIN under Apps → Flux ID → Next → Flux ID d2FA → Change d2FA with your account password. If the PIN is used for logging in, you can't use the account in Zelcore without it.` },
  { question: `d2FA keeps failing when I try to approve transactions. What's wrong?`, answer: `Usually the PIN is wrong (it is digits only, up to 10, and not your device PIN or password), or you changed it recently: a new PIN works only after the change transaction is confirmed and you log in again. At login, a d2FA check error means Zelcore couldn't reach the Flux network.` },
  { question: `What is FluxID and do I need it?`, answer: `FluxID is your decentralized identity in the Flux ecosystem, integrated with Zelcore accounts.` },
  { question: `How do I migrate from FluxID Legacy to modern FluxID?`, answer: `FluxID migration happens automatically when you migrate from a legacy account to a seed phrase account.` },
  { question: `I can't log in to my legacy account. What should I try?`, answer: `Legacy account login issues usually involve credentials, account status, or app version.` },
  { question: `I entered my seed phrase but Zelcore says it's invalid. What's wrong?`, answer: `Seed phrase errors usually involve typos, wrong words, incorrect order, or wrong word count.` },
  { question: `I accidentally created a new account instead of accessing my old one. Can I switch?`, answer: `Yes, you can easily switch between accounts. Creating an extra account doesn't affect your original one.` },
  { question: `Can I have multiple Zelcore accounts?`, answer: `Yes, Zelcore supports multiple accounts, and you can switch between them easily.` },
  { question: `"Migration required" message - what does this mean?`, answer: `This message indicates you have a legacy account that needs to be migrated to a modern seed phrase account. Legacy (username and password) login is deprecated and will be phased out. It still works in Zelcore 8.39, but migrate to a seed-phrase wallet now.` },
  { question: `How should I securely store my seed phrase?`, answer: `Your seed phrase is the key to your funds. Proper storage is critical.` },
  { question: `Should I use the same seed phrase on multiple devices?`, answer: `Yes, that's how it's designed to work. Your seed phrase gives access to your wallet on any device.` },
  { question: `What should I do before getting a new phone or computer?`, answer: `Critical: Verify you have your seed phrase BEFORE replacing your device.` },
  { question: `Where can I get help if I'm still having issues?`, answer: `Multiple support channels are available for Zelcore assistance.` },
];

export default items;
