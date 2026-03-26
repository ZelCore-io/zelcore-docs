const items = [
  { question: `What's the difference between a legacy account and a seed phrase account?`, answer: `ZelCore has two account types with different login methods:` },
  { question: `Should I migrate from legacy to seed phrase?`, answer: `Yes, migration is strongly recommended. Here's why:` },
  { question: `How do I know if I have a seed phrase?`, answer: `If you have a modern account:
- You wrote down 12 or 24 words when creating your wallet
- These words are in a specific order
- You don't use a username/password to log in` },
  { question: `What's the difference between "Sync" and "Register" on a new device?`, answer: `This is one of the most common sources of confusion. Understanding the difference is critical:` },
  { question: `I chose "Register" instead of "Sync" and my balance is zero. What do I do?`, answer: `Don't panic - your funds are safe! This is a very common mistake. You created a new empty wallet instead of accessing your existing one.` },
  { question: `What does "Sync" actually sync? Is it automatic?`, answer: `"Sync" is a misleading name - it's not automatic synchronization. Here's what it really means:` },
  { question: `How do I access my ZelCore account on a new phone/computer?`, answer: `Follow these steps carefully to access your existing account on a new device:` },
  { question: `Do I need to sync my account every time I switch devices?`, answer: `You don't "sync" between devices - you import your wallet to each device independently.` },
  { question: `I lost my phone. How do I recover my account?`, answer: `If you have your seed phrase, recovery is straightforward. If not, recovery may be difficult or impossible.` },
  { question: `What is D2FA and how is it different from regular 2FA?`, answer: `D2FA stands for "Decentralized Two-Factor Authentication" - ZelCore's enhanced security feature.` },
  { question: `I forgot my D2FA PIN. How do I reset it?`, answer: `You can reset your D2FA PIN using your seed phrase, but the process requires careful steps.` },
  { question: `D2FA keeps failing when I try to approve transactions. What's wrong?`, answer: `D2FA failures usually relate to connectivity, incorrect PIN, or sync issues.` },
  { question: `What is FluxID and do I need it?`, answer: `FluxID is your decentralized identity in the Flux ecosystem, integrated with ZelCore accounts.` },
  { question: `How do I migrate from FluxID Legacy to modern FluxID?`, answer: `FluxID migration happens automatically when you migrate from a legacy account to a seed phrase account.` },
  { question: `I can't log in to my legacy account. What should I try?`, answer: `Legacy account login issues usually involve credentials, account status, or app version.` },
  { question: `I entered my seed phrase but ZelCore says it's invalid. What's wrong?`, answer: `Seed phrase errors usually involve typos, wrong words, incorrect order, or wrong word count.` },
  { question: `I accidentally created a new account instead of accessing my old one. Can I switch?`, answer: `Yes, you can easily switch between accounts. Creating an extra account doesn't affect your original one.` },
  { question: `Can I have multiple ZelCore accounts?`, answer: `Yes, ZelCore supports multiple accounts, and you can switch between them easily.` },
  { question: `"Migration required" message - what does this mean?`, answer: `This message indicates you have a legacy account that needs to be migrated to a modern seed phrase account.` },
  { question: `How should I securely store my seed phrase?`, answer: `Your seed phrase is the key to your funds. Proper storage is critical.` },
  { question: `Should I use the same seed phrase on multiple devices?`, answer: `Yes, that's how it's designed to work. Your seed phrase gives access to your wallet on any device.` },
  { question: `What should I do before getting a new phone or computer?`, answer: `Critical: Verify you have your seed phrase BEFORE replacing your device.` },
  { question: `Where can I get help if I'm still having issues?`, answer: `Multiple support channels are available for ZelCore assistance.` },
];

export default items;
