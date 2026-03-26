const items = [
  { question: `I sent payment for an app purchase (DAO, Titan, Marketplace, Presearch) but it went to the wrong wallet. What happened?`, answer: `This issue occurs when you have multiple wallets in ZelCore and payment was sent from the wrong wallet address, or when you didn't verify which wallet was active before confirming the purchase.` },
  { question: `Which ZelCore apps are available and what do they do?`, answer: `ZelCore integrates several apps within the wallet interface, providing access to Flux ecosystem services and partner applications.` },
  { question: `How do I know which wallet is active when using ZelCore apps?`, answer: `Understanding which wallet is active is crucial for app purchases and transactions. Here's how to check and control your active wallet.` },
  { question: `Can app purchases be refunded or transferred to a different wallet?`, answer: `Generally, app purchases themselves cannot be automatically refunded or transferred once the blockchain transaction is complete. However, some app services can manually reassign purchases to different accounts or wallets.` },
  { question: `I purchased FluxCloud or FluxDrive storage but my deployment isn't activating. What should I do?`, answer: `FluxCloud and FluxDrive are decentralized storage and compute services running on the Flux network. Purchase activation issues typically stem from payment confirmation delays, network synchronization, or deployment configuration problems.` },
];

export default items;
