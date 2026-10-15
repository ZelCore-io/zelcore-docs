---
sidebar_position: 4
title: "Swap Crypto in Zelcore: Fees and Limits"
description: "How to swap crypto in Zelcore: compare provider quotes, fixed and float rates, the fees and min/max limits shown before you confirm, and swap errors."
keywords: [zelcore swap, swap crypto, crypto swap fees, swap limits, minimum swap amount, fixed rate swap, float rate swap, instaswap]
---

# Swap Crypto in Zelcore: Fees, Rates and Limits

To swap one asset for another in Zelcore, open **Swap**, choose the asset you sell and the asset you buy, enter an amount, pick an offer, check the **Transaction Summary** and select **Swap Now**. Quotes come from the swap providers shown in the app. The rate, the fees and each provider's minimum and maximum amounts are shown in the app before you confirm.

:::info Applies to Zelcore 8.39
Written for Zelcore 8.39.0 (October 2026).
:::

Background: [Zelcore Fusion Swap: Aggregator, Slippage, and On-Ramps](https://zelcore.io/academy/defi/zelcore-fusion-swap-aggregator) on Zelcore Academy.

## How to swap

The steps are the same on desktop, mobile and the browser extension, which share the same swap screen. On mobile and in the extension, open **Swap** from the app menu.

1. Select **Swap** (on desktop, in the left menu). The **Swap Tokens** screen opens.
2. Under **Choose Selling Asset**, pick the asset you want to sell and the wallet it comes from.
3. In **Enter amount to sell**, type the amount.
4. Under **Choose Buying Asset**, pick the asset you want to receive.
5. Zelcore asks the swap providers for quotes. Offers appear under **Featured Provider** and **All Rates**. The best-priced offer is tagged **Best Rate**.
6. Pick an offer and read the **Transaction Summary**: **Rate**, **Rate Type**, **Fee**, **Network Fee** (when the provider reports one) and **You'll Receive**.
7. Select **Swap Now**. If d2FA is on, the button reads **Verify PIN and Swap** and asks for your PIN before Zelcore signs.

<!-- screenshot: swaps-1 Swap screen empty state with selling/buying selectors -->
<!-- screenshot: swaps-2 Quote list with Featured Provider, All Rates, a Best Rate tag and a DEX/Private/ZK badge -->
<!-- screenshot: swaps-5 Transaction Summary with Rate, Rate Type, Fee, Network Fee tooltip and Swap Now -->

## Fixed and float rates

Each offer has a **Rate Type**:

- **Fixed**: the rate does not change. The amount you receive is the amount shown in the summary.
- **Float**: the rate follows the current market price. The amount you receive can differ slightly from the amount shown in the summary.

## What a swap costs

The **Transaction Summary** shows every cost before you confirm:

- **Fee** is the network fee for sending your asset to the provider, paid from your wallet.
- **Network Fee**, when the provider reports one, is paid by the provider to the destination blockchain. It is already deducted from the amount you receive.
- Any provider margin is already included in the quoted **Rate**.

Fees change with the network and the provider, so this page gives no figures. They are shown in the app before you confirm.

## Minimum and maximum amounts

Limits are set by each provider and differ by trading pair. Select **Show Pair Limits** to see the minimum and maximum for each provider. If your amount is below every provider's minimum, or outside the limits of the offer you picked, Zelcore shows an error (see below) and you can change the amount. You also need enough balance to cover the amount and the **Fee**.

<!-- screenshot: swaps-4 Show Pair Limits expanded (Min/Max per provider) -->

## Provider badges: DEX, Private and ZK

Some offers carry a badge. Open **What the badges mean** in the app for the legend.

- **DEX**: routed through on-chain liquidity such as DEXs and cross-chain protocols, not a custodial exchange account.
- **Private**: your deposit and your payout cannot be linked on-chain. Usually completes within minutes.
- **ZK**: zero-knowledge settlement through a shielded pool, the strongest privacy. A ZK swap can take more than an hour to complete.

Zelcore 8.39.0 added InstaSwap as a provider in all three forms. To use an InstaSwap offer you agree to the InstaSwap terms in the app.

<!-- screenshot: swaps-3 Badge legend open ("What the badges mean") -->

## d2FA, scam screening and hardware wallets

- **d2FA**: with d2FA on, **Swap Now** becomes **Verify PIN and Swap** and the swap is signed only after you enter your PIN.
- **Scam screening**: if a swap matches a known scam or drainer list, Zelcore warns you before you sign. **Swap anyway** continues; stop instead if you did not expect the warning.
- **Hardware wallets (desktop)**: a swap cannot be paid from a hardware-wallet account. Choose a software wallet as the selling wallet.

<!-- screenshot: swaps-6 d2FA prompt with "Verify PIN and Swap" -->

## Track a swap

On the **Swap Tokens** screen, select **View Transaction History**. Pick the swap and select **Track Exchange** to follow its status with the provider. A swap that stays pending for a long time is covered in [Troubleshooting Fusion Swap Issues](./troubleshooting-fusion-swap-issues.md).

<!-- screenshot: swaps-7 Transaction history / Track Exchange for a completed swap -->

## Where swaps are available

Swap availability can vary by platform and region. If **Swap** does not appear in your menu, it is not available for your device or region; the app shows what you can use.

## Swap error messages

### "We haven't found any providers for this pair"

No provider currently offers this pair. Try another buying asset, or swap through a common asset in two steps.

### "No providers available to swap an amount this low"

Your amount is below every provider's minimum. Raise the amount and check **Show Pair Limits**.

### "Requested amount is not within provider limits"

The amount is outside the minimum or maximum of the offer you picked. Check **Show Pair Limits** and adjust the amount, or pick another offer.

### "Minimum amount of [token] to send is [minimum]"

The provider's minimum for this asset is higher than your amount. Enter at least the minimum shown.

### "Your [token] balance is [available]. Please input an amount below [available]."

The amount is more than your balance. Enter a smaller amount, and leave room for the **Fee**.

### "Your [token] balance is below [minimum] threshold. Please add more [token] to your wallet."

Your whole balance is below the provider's minimum. Add more of the asset before you swap.

### "Swaps can't be paid from a hardware wallet yet. Choose another wallet."

The selling wallet is a hardware-wallet account (desktop). Pick a software wallet instead.

### "There was an error creating this swap"

The provider did not accept the swap. Request new quotes and try again, or pick another offer. If it keeps failing, contact [Zelcore support](https://support.zelcore.io).

### "Exchange refused by InstaSwap!"

InstaSwap declined this exchange. Pick an offer from another provider.

## Related

- [Send and Receive Crypto in Zelcore](./send-and-receive.md)
- [Troubleshooting Fusion Swap Issues](./troubleshooting-fusion-swap-issues.md)
- [Security Best Practices](../security/best-practices.md)
- [Zelcore support](https://support.zelcore.io)
