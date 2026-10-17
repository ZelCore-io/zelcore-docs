---
sidebar_position: 8
title: "Kadena (KDA) in Zelcore: Chain Transfers"
sidebar_label: "Kadena (KDA) Guide"
description: "Send, receive and move KDA between Kadena's 20 chains in Zelcore, use k: accounts, deposit to exchanges and fix chain mismatches after the community fork."
keywords: [kadena wallet, kda guide, kadena chain transfer, zelcore kadena, kadena community edition, "k: account"]
---

# Kadena (KDA) in Zelcore

Kadena runs 20 parallel chains (Chain 0 to Chain 19), and your KDA balance is kept separately on each one. To send KDA in Zelcore, confirm which chain the recipient expects, make sure your KDA is on that chain (move it with a cross-chain transfer if it is not), then send.

:::info Applies to Zelcore 8.39
Written for Zelcore 8.39.0 (October 2026).
:::

:::info Kadena status (October 2026)
Kadena LLC ended its business operations on 21 October 2025. The blockchain itself kept running. On 8 November 2025 the network moved to Kadena Community Edition, a community-run continuation with new node software, and it is still producing blocks. Your addresses, keys and balances did not change, and you did not need to do anything in Zelcore. Kadena Community Edition says it is independent and not affiliated with Kadena LLC. Several exchanges removed KDA trading after the shutdown, so check that your exchange still supports KDA before you deposit. Sources: [Kadena LLC announcement](https://x.com/kadena_io/status/1980720876371779761), [Kadena Community Edition](https://kda-chain.org), [Decrypt, 22 Oct 2025](https://decrypt.co/345392/crypto-exchanges-delisting-kadena-65-price-plunge-shutdown-plans).
:::

## How Kadena's chains work

- Kadena is one network made of 20 chains that run side by side. Each chain has its own blocks and its own balances.
- It is the same KDA on every chain. Chain 3 is not worth less than Chain 7.
- Your account name is the same on every chain, but the balance on each chain is separate. 10 KDA on Chain 0 and 0 KDA on Chain 1 means you can send on Chain 0 only.
- To move KDA from one chain to another you make a cross-chain transfer. A normal send never changes chains.
- Every send is paid with a small KDA fee, on the chain you send from.

## k: accounts and legacy accounts

Each Zelcore wallet has two Kadena accounts for the same key. Pick the one you want in the account selector on the Kadena screen.

- **k: account** (starts with `k:` followed by your public key). Use this one. It is the standard Kadena account, and Zelcore recommends it.
- **Legacy account** (your bare public key, without `k:`). Older Kadena tools used it. Do not give it out for new deposits. Zelcore warns you if a legacy account on a chain is not controlled by your key, and tells you not to use it.

Some Kadena tokens only work with k: accounts. For example, zUSD runs on Chain 2 and requires a k: account.

## Check which chain holds your KDA

1. Open Zelcore and select **Kadena (KDA)**.
2. Open the **Chain ID** selector. It lists Chain 0 to Chain 19 with the KDA balance on each.
3. Zelcore opens on Chain 0 until you pick another chain. Your history shows the transactions of the selected chain.

If a balance is missing, the KDA is probably on another chain. Check the other chains in the selector first. You can also look up a transaction hash on the [Kadena Community Edition explorer](https://explorer.chainweb-community.org/mainnet).

## Receive KDA

1. Select **Kadena (KDA)**, then choose the chain the sender will use in the **Chain ID** selector.
2. Open **Receive** and copy your `k:` account.
3. Tell the sender the account **and the chain**.

KDA tokens use the same account and chain. You also need a little KDA on the same chain to pay fees when you send a token (FLUX-KDA transfers are the exception: they do not need KDA for fees).

## Send KDA

1. Select **Kadena (KDA)** and choose the chain your KDA is on in the **Chain ID** selector.
2. Open **Send** and paste the recipient's account (a `k:` account, or an `r:` SpireKey account).
3. Set **Destination Chain ID** to the chain the recipient expects. Leave it on the same chain as your own for a normal send.
4. Enter the amount, check the fee Zelcore shows, and confirm.

Before you send, check that:

- the account is correct and starts with `k:` or `r:`,
- the destination chain is the one the recipient or exchange asked for,
- you have enough KDA on the chain you send from, plus the fee (do not send your entire balance),
- the recipient's account exists on the destination chain. If it does not exist there yet, Zelcore asks for the receiver's public key.

Send a small test amount first when the recipient is new.

## Move KDA between chains (cross-chain transfer)

Use a cross-chain transfer when your KDA is on one chain and you need it on another, for example to match an exchange's deposit chain.

1. In the **Chain ID** selector, choose the chain your KDA is on now.
2. Open **Send**, enter your own `k:` account as the recipient, and set **Destination Chain ID** to the chain you want.
3. Enter the amount and confirm. Zelcore warns that this is a cross-chain transfer.
4. Keep Zelcore open. A cross-chain transfer takes up to about 4 minutes. Zelcore finishes it for you with Kadena's public gas station.
5. Switch the **Chain ID** selector to the destination chain and check that the balance arrived.

If the KDA left the first chain but has not arrived after about 15 minutes, use **Finish Cross Chain Transfer** on the Kadena screen. It opens a community tool that completes a transfer that did not finish. If it still does not arrive, contact [Zelcore support](https://support.zelcore.io) with the transaction hash.

## Deposit to and withdraw from an exchange

- Exchange support for KDA has shrunk since October 2025. Open the exchange's KDA deposit page and check that deposits and withdrawals are open before you move any funds.
- Follow the exchange's instructions for the network and chain. If the exchange does not name a chain, ask its support before sending.
- To deposit, make sure your KDA is on the required chain (see the cross-chain section), send the amount to the exchange's account, then wait for the exchange to credit it.
- To withdraw to Zelcore, copy your `k:` account from **Receive** and tell the exchange your chain if it asks. Then open the same chain in the **Chain ID** selector to see the arrival.

If an exchange cannot see your deposit, send its support the transaction hash, the amount, the chain you used and the deposit account. A deposit on a chain the exchange does not read is not lost on the blockchain, but only the exchange can credit it.

## KDA tokens

Zelcore supports FLUX-KDA, BABE, KDL, BKA, KDS, MOK, KDX, SKDX (Chain 2 only) and zUSD. You can add other Kadena tokens with **Import Kadena Token**, using the token's contract name. Token liquidity on Kadena has dropped since October 2025, so you may not find a market for every token.

## Troubleshooting

### My KDA balance is missing or zero

1. Open the **Chain ID** selector and check every chain. The KDA may be on another chain.
2. Check you are on the right account. Switch between your `k:` account and your legacy account in the account selector.
3. Run **Smartify**, or change the **Backend** in **Settings** and try again. See [Troubleshooting Balance & Sync Issues](../../guides/troubleshooting-balance-sync-issues/).
4. Update Zelcore to the latest version.
5. If the sender gave you a transaction hash, search it on the [explorer](https://explorer.chainweb-community.org/mainnet) to see which chain and account it went to.

Your KDA is safe as long as the transaction is on the blockchain. A missing balance in Zelcore is a display or chain issue, not a loss of funds.

### My send fails or shows ERR_BAD_REQUEST

`ERR_BAD_REQUEST` means the Kadena service rejected the transaction. The usual causes:

1. **No KDA on the chain you send from.** Check the **Chain ID** selector. Move KDA there first if needed.
2. **Not enough KDA for the fee.** Leave a small amount unsent.
3. **Wrong or malformed account.** Copy it again. It should start with `k:` (or `r:`).
4. **The receiver does not exist on the destination chain yet.** Ask the receiver for their public key, or send to a chain where they already have funds.
5. **A temporary network or service problem.** Wait a few minutes and try again, or change the **Backend** in **Settings**.

Update Zelcore and run **Smartify** before you retry.

### A cross-chain transfer did not finish

Wait up to 15 minutes, then use **Finish Cross Chain Transfer** (see above). Look the transfer up in the explorer by its hash: if the first half is confirmed, the KDA is waiting for the destination chain and the transfer can still be finished.

### Sent to the wrong chain

The KDA is not lost. If the recipient is you, open that chain in the **Chain ID** selector and move it with a cross-chain transfer. If the recipient is an exchange, contact its support with the hash.

## Other Kadena wallets

You can also hold KDA in other wallets. [Kadena Community Edition lists them](https://kda-chain.org/wallets). Zelcore support can only help with Zelcore. Never share your seed phrase or private keys with another app or person to "check" a balance.

## Frequently asked questions

### Can I lose KDA by sending to the wrong chain?

Not on the blockchain. The KDA sits on the chain you sent it to, under the same account, and the owner of the key can move it. A deposit to an exchange on a chain the exchange does not read has to be credited by the exchange.

### Do I need a different seed phrase for each chain?

No. One seed phrase controls your account on all 20 chains. Only the balances are separate.

### Which chain should I use?

The one where your KDA is, or the one your recipient or exchange asks for. No chain is worth more than another.

### Can I send from Chain 0 straight to an account on Chain 1?

Yes. Set **Destination Chain ID** to 1 on the Send tab. It is a cross-chain transfer, so it takes a few minutes.

### Is Kadena still supported in Zelcore?

Yes. Sending, receiving, chain switching, cross-chain transfers and KDA tokens work in Zelcore on desktop, mobile and the browser extension.

## Getting help

1. Run **Smartify** and update Zelcore.
2. Check the explorer for the transaction.
3. Contact [Zelcore support](https://support.zelcore.io) with your `k:` account, the chain, the transaction hash and any error message.

## Related documentation

- [Troubleshooting Balance & Sync Issues](../../guides/troubleshooting-balance-sync-issues/)
- [Sending and Receiving Crypto](../../guides/send-and-receive/)
- [Wallet Security Best Practices](../../security/best-practices/)
- [Kadena Community Edition](https://kda-chain.org)
