---
sidebar_position: 23
title: Buy Crypto with Fiat in Zelcore
description: "Buy crypto with a card or bank account from Zelcore's Purchase screen: pick a provider, check the fee, send coins to your own address, and track the order."
keywords: [buy crypto zelcore, zelcore purchase, fiat on-ramp, buy crypto with credit card, buy crypto bank account, purchase history]
---

# Buy Crypto with Fiat in Zelcore

To buy crypto with a card or bank account, open **Purchase** in the Zelcore main menu, enter an amount, choose a provider from the offers and finish the payment on the provider's checkout page. The coins arrive at a wallet address you choose in your own Zelcore wallet.

:::info Applies to Zelcore 8.39
Written for Zelcore 8.39.0 (October 2026). The steps follow the desktop app.
:::

Background: [how Zelcore's swap aggregator and on-ramps fit together](https://zelcore.io/academy/defi/zelcore-fusion-swap-aggregator).

## What Purchase does

The **Purchase** screen is titled **Purchase Crypto with Fiat**. You enter how much fiat you want to spend and which crypto you want. Zelcore then shows offers from third-party fiat providers on a **Select Provider** screen. Each offer is a card with the provider's name, the amounts it quotes, an **Includes Fee** amount and the rate. The first card is tagged **Best Value**.

The payment itself happens on the provider's checkout, which opens in a separate browser window, not inside Zelcore.

- **Providers, countries and payment methods.** The available providers depend on your country and are shown in the app. The list can change, so this page does not name them.
- **Fees and limits.** Each offer shows an **Includes Fee** amount. Hover over it to see the network fee and the transaction fee. The rate is a separate line on the card. Fees, limits and payment methods are shown in the app before you confirm.
- **Where the coins go.** You choose one of your own Zelcore wallet addresses, and the coins go there.
- **Availability.** Purchase can vary by platform and region, and the app shows what is available on your device.

To sell crypto back to fiat, use the separate **Sell** item in the main menu instead.

## Buy crypto step by step

<!-- screenshot: buying-crypto-01-purchase-screen -->

1. Open **Purchase** from the left menu.
2. Choose the fiat currency and enter the amount you want to spend. Zelcore shows an **Includes Fee** amount under it once it has a quote.
3. Choose the crypto you want to buy.

<!-- screenshot: buying-crypto-02-wallet-address-selector -->

4. Under **Select a wallet address to place the currency**, pick the address that should receive the coins.

<!-- screenshot: buying-crypto-04-disclaimer -->

5. Tick the checkbox for **I agree with Zelcore Disclaimer**. The PDF is linked in the app and also available at [OnrampDisclaimer.pdf](https://cdn.zelcore.workers.dev/OnrampDisclaimer.pdf). Zelcore will not continue without it.
6. Click **Proceed**. If no provider can fill your amount, Zelcore says so and stays on this screen.

<!-- screenshot: buying-crypto-03-provider-offers -->

7. On the **Select Provider** screen, click the offer you want. Compare the **Includes Fee** amounts and the amounts you would receive, not only the rate. Use **Back** to change your amount.
8. Click **Proceed**. The provider's checkout opens in a browser window. Complete the payment there.
9. Track the order under **Purchase History**, or use **Track Purchase** on the order.

## Track a purchase

<!-- screenshot: buying-crypto-05-purchase-history -->

**Purchase History** lists your orders. Each one shows a status:

- **Purchase Processing**: the order is still being handled.
- **Purchase Completed**: the order is done.
- **Purchase Failed**: the order did not go through. Check the provider's checkout page or contact the provider with the order details, and contact [Zelcore support](https://support.zelcore.io) if you need help with the Zelcore side.

An older flow is still reachable as **Legacy Purchase**.

## Troubleshooting

### No available fiat provider found. Please adjust amount

The providers could not fill an order of that size for the pair you chose. Try a different amount, fiat currency or crypto, then check the offers again.

### Under minimum of (amount)

Your amount is below that provider's minimum. The message shows the minimum in place of the amount. Raise your amount, or choose another provider. Limits are shown in the app before you confirm.

### Above maximum of (amount)

Your amount is above that provider's maximum. The message shows the maximum in place of the amount. Lower your amount, or choose another provider.

### Please select fiat provider

You clicked **Proceed** on the **Select Provider** screen without choosing an offer. Click an offer card, then click **Proceed** again.

### Please agree with Zelcore Disclaimer

The disclaimer checkbox is not ticked. Tick it, then click **Proceed** again.

### Purchase of this asset is currently not available

Buying that asset is not offered right now. Pick another asset, or try again later.

## Related

- [Zelcore features overview](/docs/features/overview/)
- [NFT gallery](/docs/guides/nft-gallery/)
- [Fusion swap FAQ](/docs/faq/fusion-faq/)
- [Security best practices](/docs/security/best-practices/)
- [Zelcore support](https://support.zelcore.io)
