---
sidebar_position: 24
title: Private Swaps with InstaSwap - DEX, Private and ZK Badges
description: "Swap privately in ZelCore with InstaSwap: decentralized routing, private settlement and zero-knowledge swaps. What the DEX, PRIVATE and ZK badges mean."
keywords: [private swap, private crypto swap, zk swap, zero knowledge swap, instaswap, decentralized swap, cross-chain swap, zelcore swap, monero swap, no kyc swap]
---

# Private Swaps with InstaSwap

ZelCore's built-in swap includes **InstaSwap**, a decentralized cross-chain swap provider that can also settle a swap **privately**, so the coins you receive cannot be linked on-chain to the coins you sent. It appears in the provider list as three separate options, each marked with badges, so you can choose how private you want a swap to be.

---

## The three InstaSwap options

| Provider | Badges | What happens | Typical time |
|---|---|---|---|
| **InstaSwap** | DEX | Your swap is routed through decentralized liquidity (THORChain, Chainflip, NEAR Intents and others). It is visible on-chain like any normal swap. | Minutes |
| **InstaSwap Private** | DEX · PRIVATE | Your deposit is settled through a private liquidity layer that pays out from a shared pool, so your deposit and your payout are not linked on-chain. | Minutes |
| **InstaSwap ZK** | DEX · ZK | The swap goes through a zero-knowledge (zk-SNARK) shielded pool: the strongest privacy InstaSwap offers. | **Can take more than an hour** |

### What the badges mean

- **DEX** — decentralized. The swap is routed through on-chain liquidity, not through an account on a centralized exchange. The same badge marks other decentralized providers such as Rango and Binance Web3.
- **PRIVATE** — private settlement. The deposit and the payout cannot be linked on-chain, and the swap usually completes within minutes. It is only offered for pairs that have a private route; for other pairs choose InstaSwap ZK.
- **ZK** — zero-knowledge settlement through a shielded pool. A cryptographic proof authorizes the payout without revealing the sender, the destination, the token or the amount to a public observer. It works for every supported token, but generating the proof means **a ZK swap can take more than an hour**, and it adds a small shielding fee.

ZelCore explains the badges in the app as well: under the list of offers, and again on the swap summary for the provider you picked, so the ZK timing is in front of you before you confirm. On desktop you can also hover over a badge.

:::info Not a mixer
A private InstaSwap swap still sends **your own funds to the address you choose**. InstaSwap states that every transaction passes KYT/AML screening and that settlement records can be disclosed to an auditor.
:::

---

## How to make a private swap

1. Open **Swap** in ZelCore and choose the asset you want to sell and the asset you want to receive.
2. Enter the amount. ZelCore asks every provider for a quote and lists the offers, best rate first.
3. Pick **InstaSwap Private** or **InstaSwap ZK** from the list. The PRIVATE or ZK badge on the card confirms which one you selected. Private rails usually return slightly less than the public one, because the privacy layer has its own costs.
4. Review and confirm. ZelCore creates the swap and sends your deposit to the InstaSwap deposit address shown, exactly as for any other provider.
5. Follow the swap in your swap history. A ZK swap can stay in **Exchanging** for more than an hour while its proof is generated; that is expected, and your funds are not stuck.

Use **Track** in the swap history to open the swap on InstaSwap's own site.

---

## Good to know

- **Minimum amount.** InstaSwap routes need at least about $11 per swap, and some pairs more; the swap screen shows the minimum for the pair you picked.
- **No KYC, no account.** InstaSwap does not require an account or identity verification for these swaps.
- **Deposit deadline.** Send the deposit promptly: you have 60 minutes (3 hours for Bitcoin and Bitcoin Cash). An order that is not funded in time shows as **Expired** in your history. If your deposit arrived just after the deadline, ZelCore keeps checking the order: on many routes InstaSwap still completes or refunds it, and the history updates by itself. If it stays expired, contact InstaSwap support with the swap ID and your deposit transaction hash.
- **Send the amount shown.** Sending a little more is fine: the swap uses everything you sent. Sending less can lead to a refund instead of a swap.
- **Compliance screening.** InstaSwap screens addresses before it creates an order. If an address is refused, no order is created and nothing needs to be sent.
- **Addresses that need a memo or destination tag** (for example an exchange deposit address for XRP) cannot be used to receive an InstaSwap payout or refund. Use a personal wallet address; your ZelCore address always works.
- **Refunds.** If a swap cannot complete after your deposit arrived, InstaSwap refunds it to your ZelCore address on the network you sent from; the history shows **Refunded**.
- **Availability.** InstaSwap supports dozens of blockchains, including Bitcoin, Ethereum and its layer 2s, Solana, Monero, Zcash, Litecoin, Dogecoin, XRP and more. Which pairs are offered depends on what InstaSwap can route at the time of your quote. InstaSwap is available in ZelCore on desktop, mobile (including iPhone and iPad) and the browser extension.

---

## Related

- [Zelcore features overview](/docs/features/overview)
- [Self-custodial wallets explained](/docs/guides/self-custodial-wallets-explained)
- [Security best practices](/docs/guides/security-best-practices)
