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

- **Fees and limits.** Fees are included in the quote shown before you continue. Each offer shows an **Includes Fee** amount. Hover over it to see the network fee and the transaction fee. The rate is a separate line on the card. Fees, limits and payment methods are shown in the app before you confirm.
- **Where the coins go.** You choose one of your own Zelcore wallet addresses, and the coins go there.
- **Availability.** Buy and Sell are available on desktop, Android and iOS. Purchase can vary by region, and the app shows what is available on your device.

To sell crypto back to fiat, use the separate **Sell** item in the main menu instead.

## Providers, countries and payment methods

Purchase connects you to third-party providers. As of October 2026 they are MoonPay, Guardarian, Topper, Onramper and FinchPay. Selling crypto for fiat (the **Sell** menu) uses MoonPay, Guardarian, Topper and Onramper. Each provider decides which countries it serves, which payment methods it accepts and how it checks your identity. The offers you see depend on your country, amount and currency.

The table sums up each provider's own pages as of October 2026. Follow the links for the current rules.

| Provider | Buy / Sell | Countries | Payment methods (examples) | Identity checks | Provider fee |
| --- | --- | --- | --- | --- | --- |
| MoonPay | Buy and Sell | [Unsupported countries](https://support.moonpay.com/en/articles/380968-moonpay-s-unsupported-countries). Not available in, among others, China, India, Japan and Russia. | Card, Apple Pay, Google Pay, PayPal, SEPA, UK Faster Payments, PIX and more, depending on country ([payment methods](https://support.moonpay.com/en/articles/380823-moonpay-s-supported-payment-methods)) | ID check, with requirements that vary by region ([verification tiers](https://dev.moonpay.com/platform/guides/verification-tiers)) | Up to 4.5%, with a minimum fee; network fee extra ([pricing](https://www.moonpay.com/legal/pricing_disclosure)) |
| Guardarian | Buy and Sell | [Payment methods by country](https://guardarian.com/payment-methods) | Card, Apple Pay, Revolut Pay, SEPA, PIX, SPEI and more, depending on country ([payment methods](https://guardarian.com/payment-methods)) | ID check ([AML policy](https://guardarian.com/aml-policy)) | Shown in the quote |
| Topper | Buy and Sell | [Where Topper is available](https://support.topperpay.com/hc/en-us/articles/8926552924572-Where-is-Topper-available). Paused in the European Economic Area since 1 July 2026 ([notice](https://support.topperpay.com/hc/en-us/articles/28564092554524)). In New York, sell only ([New York](https://support.topperpay.com/hc/en-us/articles/29650900527260-Using-Topper-in-New-York)). | Card, Apple Pay, Google Pay, PayPal (US and UK), SEPA, Pix ([payment methods](https://support.topperpay.com/hc/en-us/articles/8926549139612)) | ID and selfie check ([how to verify](https://support.topperpay.com/hc/en-us/articles/8926525220636-How-to-verify-my-identity)) | Buy: 4.25% by card, Apple Pay or Google Pay, 0.99% by SEPA. Sell: 2.75% to a card. Minimum $3.99 ([fees](https://support.topperpay.com/hc/en-us/articles/8926549324444-Topper-costs-and-fees)) |
| Onramper | Buy and Sell | Routes you to one of its partner providers, so coverage depends on that provider ([about Onramper](https://docs.onramper.com/docs/getting-started.md)) | Depends on the provider it routes you to ([payment methods](https://docs.onramper.com/docs/supported-payment-methods.md)) | Done by the provider it routes you to ([identity checks](https://knowledge.onramper.com/why-do-i-have-to-verify-my-identity)) | No fee of its own on top of the provider's ([end-user fees](https://knowledge.onramper.com/what-are-the-end-user-fees)) |
| FinchPay | Buy only | Not available in the United States or the United Kingdom, among others ([terms](https://finchpay.io/terms-of-service)) | Card and local methods, depending on country ([FAQ](https://finchpay.io/faq)) | ID check ([FAQ](https://finchpay.io/faq)) | Shown during the purchase, all costs included ([FAQ](https://finchpay.io/faq)) |

Good to know:

- **You choose how to pay on the provider's checkout page.** The fee can depend on the payment method. For example, Topper charges less for SEPA than for a card.
- **Your first purchase usually needs an ID check** with the provider, on its checkout page.
- **Limits** are set by the provider and depend on your country, currency, payment method and verification level. The app shows a provider's minimum or maximum when your amount is outside it.
- **Support.** For a payment problem, contact the provider whose checkout you used.

Provider rules change often. Check the provider's own page if you're not sure whether it serves your country.

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
- [Swap crypto: fees and limits](/docs/guides/swaps-fees-and-limits/)
- [Send and receive crypto](/docs/guides/send-and-receive/)
- [Fusion swap FAQ](/docs/faq/fusion-faq/)
- [Security best practices](/docs/security/best-practices/)
- [Zelcore support](https://support.zelcore.io)
