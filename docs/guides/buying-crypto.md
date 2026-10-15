---
sidebar_position: 23
title: Buy Crypto with Fiat in Zelcore
description: "Buy crypto with a card or bank account from Zelcore's Purchase screen: pick a provider, check the fee, send coins to your own address, and track the order."
keywords: [buy crypto zelcore, zelcore purchase, fiat on-ramp, buy crypto with credit card, buy crypto bank account, purchase history]
---

# Buy Crypto with Fiat in Zelcore

To buy crypto with a card or bank account, open **Purchase** in the Zelcore main menu, enter an amount, pick a provider from the offers and finish the payment on the provider's checkout page. The coins arrive at a wallet address you choose in your own Zelcore wallet.

:::info Applies to Zelcore 8.39
Written for Zelcore 8.39.0 (October 2026). The steps follow the desktop app. Screens on mobile can differ in layout.
:::

Background: [how Zelcore's swap aggregator and on-ramps fit together](https://zelcore.io/academy/defi/zelcore-fusion-swap-aggregator).

## What Purchase does

The **Purchase** screen is titled **Purchase Crypto with Fiat**. You enter how much fiat you want to spend and which crypto you want. Zelcore then shows offers from third-party fiat providers. Each offer is a card with the provider's name and the amounts it quotes.

The payment itself happens on the provider's checkout page, not inside Zelcore. The provider sells you the crypto and sends it to the wallet address you picked.

- **Providers, countries and payment methods.** The available providers depend on your country and are shown in the app. The list can change, so this page does not name them.
- **Fees and limits.** The rate on each offer is labelled **Includes Fee**. Fees, limits and payment methods are shown in the app before you confirm.
- **Where the coins go.** You choose one of your own Zelcore wallet addresses, and the coins go there.
- **Availability.** Purchase can vary by platform and region, and the app shows what is available on your device.

To sell crypto back to fiat, use the separate **Sell** item in the main menu instead.

## Buy crypto step by step

<!-- screenshot: buying-crypto-01-purchase-screen -->

1. Open **Purchase** from the left menu.
2. Choose the fiat currency and enter the amount you want to spend.
3. Choose the crypto you want to buy.

<!-- screenshot: buying-crypto-02-wallet-address-selector -->

4. When Zelcore asks you to **Select a wallet address to place the currency**, pick the address that should receive the coins.

<!-- screenshot: buying-crypto-03-provider-offers -->

5. Review the offers and choose one with **Select Provider**. Each rate shows **Includes Fee**, so compare the amount you would receive, not only the headline price.

<!-- screenshot: buying-crypto-04-disclaimer -->

6. Read and agree to the Zelcore Disclaimer. The PDF is linked in the app and also available at [OnrampDisclaimer.pdf](https://cdn.zelcore.workers.dev/OnrampDisclaimer.pdf). You must agree before you can continue.
7. Continue to the provider's checkout and complete the payment there.
8. Track the order under **Purchase History**, or use **Track Purchase** on the order.

## Track a purchase

<!-- screenshot: buying-crypto-05-purchase-history -->

**Purchase History** lists your orders. Each one shows a status:

- **Purchase Processing**: the order is still being handled.
- **Purchase Completed**: the order is done.
- **Purchase Failed**: the order did not go through. Check the provider's checkout page or contact the provider with the order details, and contact [Zelcore support](https://support.zelcore.io) if you need help with the Zelcore side.

An older flow is still reachable as **Legacy Purchase**.

## Troubleshooting

### No available fiat provider found. Please adjust amount

No provider can serve that amount for the currency pair you chose. Change the amount, or try a different fiat currency or crypto, then check the offers again.

### Under minimum of (amount)

Your amount is below that provider's minimum. The message shows the minimum in place of the amount. Raise your amount, or choose another provider. Limits are shown in the app before you confirm.

### Above maximum of (amount)

Your amount is above that provider's maximum. The message shows the maximum in place of the amount. Lower your amount, or choose another provider.

### Please select fiat provider

You tried to continue without choosing an offer. Choose a provider with **Select Provider**, then continue.

### Please agree with Zelcore Disclaimer

You must agree to the Zelcore Disclaimer before you can continue to the provider's checkout. Agree to it, then continue.

### Purchase of this asset is currently not available

Buying that asset is not offered right now. Pick another asset, or try again later.

### Purchase history is unavailable

Zelcore could not load your orders. Check your internet connection and open **Purchase History** again. If the order was paid, the provider's confirmation is the record to keep.

## Related

- [Zelcore features overview](/docs/features/overview/)
- [NFT gallery](/docs/guides/nft-gallery/)
- [Fusion swap FAQ](/docs/faq/fusion-faq/)
- [Security best practices](/docs/security/best-practices/)
- [Zelcore support](https://support.zelcore.io)
