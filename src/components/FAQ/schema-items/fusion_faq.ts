const items = [
  { question: `What does "Hold" status mean for my Fusion swap?`, answer: `"Hold" status means the exchange provider (ChangeHero, ChangeNow, SimpleSwap, or Changelly) has flagged your swap order for manual review. This is a security and compliance measure used by providers, not a ZelCore issue.` },
  { question: `My swap is stuck on "Awaiting blockchain confirmation" for hours. What's wrong?`, answer: `This status means either your source transaction needs more blockchain confirmations, or the provider's nodes are having sync issues.` },
  { question: `I sent crypto for a swap but didn't receive anything on the destination chain. What should I do?`, answer: `Don't panic - this is the most common Fusion issue and almost always gets resolved. Your funds are with the exchange provider, not lost.` },
  { question: `Which chains are most commonly affected by Fusion swap issues?`, answer: `Based on support tickets, the most frequently affected chains in Fusion swaps are:` },
  { question: `How do I contact the exchange provider handling my swap?`, answer: `You must contact the specific provider handling your swap, not ZelCore. Here's how to identify and contact them:` },
  { question: `Will I need to provide KYC for my Fusion swap?`, answer: `Most swaps do not require KYC, but certain swaps may be flagged for Know Your Customer (KYC) verification by the exchange provider.` },
  { question: `My swap shows "Finished" but I didn't receive the crypto. What happened?`, answer: `This means the provider marked the order as complete on their end, but either the payout transaction failed or wasn't properly broadcast to the blockchain.` },
  { question: `How long should a Fusion swap normally take?`, answer: `Swap timing depends on the blockchains involved and the provider's processing speed.` },
  { question: `What's the difference between ZelCore Fusion, FusionX, and SSP?`, answer: `These are all ZelCore's swap aggregation features - they use the same underlying third-party exchange providers but may have different interfaces or feature sets.` },
  { question: `Can ZelCore support help if my Fusion swap is stuck?`, answer: `Short answer: For most stuck swaps, you must contact the exchange provider directly. ZelCore support has limited ability to help with provider-side issues.` },
  { question: `Are my funds safe when a Fusion swap is stuck or on "Hold"?`, answer: `Generally yes, but it's important to understand the different stages of fund custody:` },
  { question: `What are Flux parallel chains and why do I need different gas tokens for each?`, answer: `Flux parallel chains are wrapped versions of FLUX tokens deployed on different blockchain networks (Flux-BASE, Flux-BSC, Flux-ETH, Flux-SOL, Flux-TRX, Flux-AVAX). Each exists as a separate token on its respective blockchain.` },
  { question: `Why am I getting "insufficient funds to pay chains.base.name transaction fee" when I have ETH?`, answer: `This error means you don't have ETH on the Base network specifically. Having ETH on Ethereum mainnet does NOT work for Base transactions.` },
  { question: `Why does my Flux bridge swap show "no providers available"?`, answer: `"No providers available" means none of the integrated exchange providers (ChangeHero, ChangeNow, SimpleSwap, Changelly) can currently process your specific Flux bridge swap route.` },
  { question: `How do I bridge between Flux parallel chains (Flux-BASE, Flux-BSC, etc.)?`, answer: `Bridging between Flux parallel chains in ZelCore uses the Fusion swap aggregator, which connects you to third-party exchange providers. This is a swap operation, not a native bridge transfer.` },
  { question: `My Flux bridge swap has been on "Hold" for KYC. What should I do?`, answer: `"Hold" status with KYC requirement is common for Flux bridge swaps, especially for amounts over $1,000. This is a security and compliance measure from the exchange provider.` },
  { question: `I'm getting "requested amount not within provider limits" error. What does this mean?`, answer: `This error means the amount you're trying to swap is either too small (below minimum) or too large (above maximum) for the exchange provider's limits. Each provider (ChangeNow, ChangeHero, SimpleSwap, Changelly) sets their own limits for each trading pair.` },
  { question: `I'm getting "Your location is not yet supported" error when trying to swap. What can I do?`, answer: `This error means the exchange provider (ChangeNow, ChangeHero, SimpleSwap, or Changelly) doesn't offer services in your geographic region due to regulatory restrictions or compliance requirements.` },
  { question: `Why do provider limits and restrictions vary so much between different swap providers?`, answer: `Provider limits and geographic restrictions vary because each exchange provider (ChangeNow, ChangeHero, SimpleSwap, Changelly) is an independent business operating under different:
- Business strategies
- Regulatory jurisdictions
- Liquidity sources
- Risk management policies
- Compliance require...` },
];

export default items;
