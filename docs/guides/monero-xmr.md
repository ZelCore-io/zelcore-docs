---
sidebar_position: 12
title: "Monero (XMR) in Zelcore"
description: "Send and receive Monero (XMR) in Zelcore desktop: the 10-block spendable rule, estimated fees, rescanning for missing transactions and common XMR errors."
keywords: [monero wallet, xmr wallet, zelcore monero, send xmr, monero spendable balance, monero rescan, monero light wallet, view key]
---

# Monero (XMR) in Zelcore

Zelcore holds Monero (XMR) as a light wallet: a backend server scans the Monero blockchain for your address, and Zelcore builds and signs your transactions. You send and receive XMR from the Monero screen in **Portfolio**. Two things work differently from other coins: only funds older than 10 blocks (about 30 minutes) can be spent, and the fee is an estimate until the transaction is built.

:::info Applies to Zelcore 8.39
Written for Zelcore 8.39.0 (October 2026). The steps on this page are for the Zelcore desktop app.
:::

Background: [Privacy Coins in 2026: Zcash, Monero, and Zelcore](https://zelcore.io/academy/coin-guides/privacy-coins-zec-xmr) on Zelcore Academy.

## How Monero works in Zelcore

- **Light wallet**: Zelcore does not run a Monero full node. A backend server keeps your address in sync with the blockchain, and the Monero screen shows how far the scan has got.
- **Loads on first use**: since 8.39.0, the desktop app loads its Monero code the first time you open Monero, so the first open can take a moment longer.
- **Keys**: Zelcore can show your **View Key Public** and **View Key Secret**. The secret view key lets whoever holds it see your incoming transactions, so share it only with a service you trust.

<!-- screenshot: monero-1 Monero coin screen with balance and sync status -->

## Receive XMR

1. Open **Portfolio** and select **Monero**.
2. Select **Receive**.
3. Copy the **Wallet Address** or show its QR code to the sender.

Incoming XMR shows in your balance first and becomes spendable once it is older than 10 blocks.

<!-- screenshot: monero-4 Receive panel with XMR address -->

## Send XMR

1. Open **Portfolio** and select **Monero**.
2. Select **Send**.
3. Enter the recipient's XMR address or OpenAlias name. If the OpenAlias record is not DNSSEC-authenticated, Zelcore warns you to double-check the address.
4. Enter the amount, or select **Max**.
5. Read the fee. Zelcore shows an approximate fee; the exact fee is known only when the transaction is built, which takes a few seconds.
6. Confirm. With d2FA on, the button reads **Verify PIN and Send**.

A transaction you just sent may not show correctly in the transaction table, or in your balance, until it confirms.

For the general send and receive screens, see [Send and Receive Crypto in Zelcore](./send-and-receive.md).

<!-- screenshot: monero-2 Send form showing the fee-approximation warning -->

## Why your spendable balance is lower than your balance

Monero can only use outputs that are older than 10 blocks (about 30 minutes) to build a transaction. If you sent or received XMR recently, part of your balance is locked until those outputs are 10 blocks old. Wait about 30 minutes and try again. The same rule applies to the change from your own last send.

## Rescan for missing transactions

If you think your address received XMR before the point the backend started scanning from, start a rescan from an earlier block.

1. Open **Portfolio** and select **Monero**.
2. In the action row, select the scan status button. It reads **Start Block:** or **Start Trans.:** followed by a number, depending on the backend.
3. The **Rescan Monero** dialog shows the scan progress. Enter the block height to scan from in **Scanning Start height**. (On some backends the field asks for the **Number of Blocks to rescan** instead.)
4. Confirm.

A rescan can take a couple of hours. On some backends a rescan must first be approved by the Zelcore team and can take up to a week; the dialog says so when this applies. For help with a rescan, contact [Zelcore support](https://support.zelcore.io).

<!-- screenshot: monero-3 Rescan dialog with Scanning Start height -->

## Monero error messages

### "Insufficient funds" when you have an XMR balance

Part of your balance is newer than 10 blocks and cannot be spent yet. Wait about 30 minutes, or send a smaller amount.

### "Please enter Start Block"

The rescan dialog needs a block height. Enter the height to scan from.

### "Entered Number of Blocks to rescan is bigger than current blockchain height"

The number you entered is higher than the current Monero block height. Enter a smaller number.

### "Not a valid Monero secret view key"

The secret view key is mistyped or incomplete. Copy the full key again.

### "Sorry, we do not offer Full Node support for Monero at this moment."

Zelcore runs Monero through a light-wallet backend only; a full-node mode is not available.

## Related

- [Send and Receive Crypto in Zelcore](./send-and-receive.md)
- [Blockchain-Specific FAQ: Monero](../faq/blockchain-specific-faq.mdx#monero-xmr-questions)
- [Troubleshooting Balance and Sync Issues](./troubleshooting-balance-sync-issues.md)
- [Zelcore support](https://support.zelcore.io)
