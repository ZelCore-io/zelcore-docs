---
sidebar_position: 23
title: bStocks in ZelCore - Tokenized US Stocks Guide
description: "What bStocks are, how tokenized US stocks work in ZelCore on BNB Smart Chain, which countries are restricted, fees, risks, and where to learn more."
keywords: [bstocks, tokenized stocks, tokenized us equities, binance bstocks, bnb smart chain stocks, zelcore stocks, buy stocks with crypto, tokenized securities]
---

# bStocks in ZelCore: Tokenized US Stocks Guide

bStocks are tokenized US equities that trade as BEP-20 tokens on BNB Smart Chain (BSC). ZelCore lists them alongside your other assets, so you can hold Microsoft, Nvidia, Apple, Tesla and dozens of other names in the same self-custodial wallet as your crypto, buy them with USDT or BNB through the built-in swap, and track them with live prices and charts.

This guide explains what a bStock actually is, how ZelCore integrates it, which regions are excluded and how ZelCore enforces that, and what to watch out for before you buy.

For click-by-click instructions see the walkthroughs:

- [Buy and manage bStocks on ZelCore Desktop](/docs/walkthroughs/bstocks-desktop)
- [Buy and manage bStocks on ZelCore Mobile](/docs/walkthroughs/bstocks-mobile)

---

## What is a bStock?

A bStock is a digital certificate representing one share of a US-listed stock or ETF. Each token is backed 1:1 by the real share, which is held by a US-registered broker-dealer in a bankruptcy-remote structure. The token itself is a standard BEP-20 token on BNB Smart Chain that you hold in your own wallet.

Key facts, as published by the issuer:

| | |
|---|---|
| Issuer | BTech Holdings Ltd, a Binance group affiliate |
| Regulatory basis | FSRA-approved prospectus, Abu Dhabi Global Market (ADGM); admitted to the FSRA Official List |
| Backing | 1:1 by the underlying share, held by a regulated US broker-dealer; conversions handled by Nest Trading Ltd (ADGM) with Alpaca Securities on the stock side |
| Network | BNB Smart Chain (BEP-20) |
| Ticker convention | Underlying ticker plus a **B** suffix: `MSFTB` (Microsoft), `NVDAB` (Nvidia), `AAPLB` (Apple), `TSLAB` (Tesla), `QQQB` (Invesco QQQ ETF) |
| Trading | 24/7 on-chain, including weekends and US market holidays |
| Issuer fees | No commission, custody, management or conversion fee. Network fees and trading spreads still apply |

:::info What you do not get
A bStock is not a share. You do not hold the stock directly, you have no voting rights, and you cannot claim dividends in cash. Read the [issuer's FAQ](https://www.bstocks.finance/en/faq) and [Binance's bStocks FAQ](https://www.binance.com/en/support/faq/detail/f0c03cd6509a4085b4cce1636f16be38) before you buy.
:::

### Dividends and stock splits

bStocks use a **share multiplier** (BNB Chain standard BEP-677) instead of minting or burning tokens:

- **Dividends** are not paid out. The net dividend, after a flat 30% US withholding tax, is reinvested into the underlying stock and reflected by increasing the multiplier. Your token count stays the same, but each token now represents slightly more than one share.
- **Stock splits** adjust the multiplier in the same way.

ZelCore reads the multiplier from the token contract and shows the adjusted balance. On the coin page, hover or tap the **Tokenized US equity** chip to see the current ratio, for example `1 token = 1.002349 shares`. When the ratio is exactly 1 the line is hidden.

During dividend processing Binance pauses deposits, withdrawals and conversions of the affected stock; during a split all services for that stock pause. Prices in ZelCore keep showing the last known value until trading resumes.

### Prices outside US market hours

bStocks trade around the clock, but the underlying shares only trade during US market hours. Outside those hours the on-chain price is set by supply and demand and can drift away from the stock's last close. Liquidity is usually thinner at night and on weekends, so expect wider spreads, and expect a gap when the US market reopens.

---

## How bStocks work inside ZelCore

### Where they live

bStocks are BSC tokens, so they use the same BSC address as your BNB and USDT (BEP-20) in each wallet. Gas for sending or swapping is paid in BNB.

### Adding a bStock

There are three ways in:

1. **The intro banner.** The first time you log in on a device where bStocks are available, ZelCore shows a one-time "US stocks, now in your wallet" banner. **Browse bStocks** opens the Add bStocks dialog.
2. **Manage Assets → Add bStocks.** A dedicated dialog with a search box, live price and 24h change for every listed stock, and an **Add** button per row.
3. **Manage Assets → Add Assets.** The regular asset dialog has a **Tokenized Stocks (bStocks)** section.

The list is served by ZelCore's API from Binance's current bStocks catalogue, so new listings appear without an app update. At the time of writing there are around 65 stocks and ETFs; the exact set changes as Binance lists more.

### Buying and selling

You buy a bStock by swapping into it, and sell by swapping out, using ZelCore's built-in **Swap Tokens** screen. The dedicated provider is **Binance Web3**, which routes the trade through Binance's on-chain liquidity. Other DEX aggregators (for example Rango) may also quote the pair, and ZelCore marks the best rate.

| | |
|---|---|
| Pay with | USDT (BSC) or BNB |
| Sell into | USDT (BSC) |
| Rate type | Float. The final amount can differ slightly from the quote |
| Fee | BSC gas in BNB, shown before you confirm. Binance Web3 currently charges no service fee on stablecoin-to-bStock swaps; DEX pools charge their own liquidity fee |
| Cross-chain | Not supported directly. Swap ETH, SOL or other chains into USDT on BSC first, then into the bStock |

Every swap is a normal on-chain transaction signed by your wallet. ZelCore never holds your funds and there is no Binance account or KYC step inside the app.

### Charts and price data

Spot prices, 24h change and history charts come from Binance Spot via ZelCore's rates service. The 24h, 7d, 1m, 3m, 1y and all-time ranges work exactly as they do for any other coin.

### Sending and receiving

bStocks can be sent to any BSC address and received on your ZelCore BSC address like any BEP-20 token. Keep a little BNB for gas.

:::warning Only send to wallets you control or that support bStocks
Tokens sent to an exchange deposit address that does not support bStocks are usually lost. Check with the receiving platform first.
:::

---

## Country restrictions and how ZelCore handles them

### Who can hold bStocks

bStocks are offered only under the ADGM prospectus, to eligible users in permitted jurisdictions. The issuer's terms explicitly exclude **US persons and anyone located in the United States**, and Binance publishes a wider restricted-country list that also covers a number of other jurisdictions. That list changes over time, so ZelCore does not hardcode it.

Enforcement has two layers on Binance's side:

- **Eligibility checks** on minting, redemption and conversion, which only happen on Binance itself.
- **On-chain restrictions.** The token contracts can blacklist addresses. Binance states that accessing bStocks from a restricted jurisdiction, for example through a VPN, can lead to your address being blacklisted, after which you may no longer be able to transfer, trade or redeem those tokens.

### What ZelCore does

ZelCore checks availability every time you open the app, based on the country of your internet connection, using the same restricted-country data Binance publishes. The check is done by ZelCore's servers, not by your device, and it is deliberately fail-closed: if the country cannot be determined, bStocks are treated as unavailable.

When your region is **allowed**, everything in this guide is visible.

When your region is **restricted**:

| Surface | Behaviour |
|---|---|
| Intro banner | Never shown |
| Add bStocks dialog and the Tokenized Stocks section of Add Assets | Hidden. bStocks are not offered |
| Swap Tokens | bStocks are removed from both sides of the pair picker and the **Swap** action is disabled on bStock coin cards. Binance Web3 also refuses the trade server-side, so it cannot be bypassed |
| bStocks you already hold | Still visible, with the **Tokenized US equity** chip, price and chart. You can still **Send** and **Receive** them, since those are ordinary BSC transactions that do not involve Binance. You can also remove them from your portfolio through Manage Assets → Hide |

ZelCore does not show a separate "not available in your region" message. If you expected to see bStocks and cannot find them, region restriction is the most likely reason.

:::warning Do not use a VPN to get around the restriction
ZelCore's check is based on your connection. Circumventing it violates the issuer's terms and, more importantly, exposes your BSC address to blacklisting by the token contracts. Tokens in a blacklisted address can become permanently untradeable.
:::

### Travelling

If you buy bStocks in an allowed country and then open ZelCore in a restricted one, the swap actions disappear but your holdings do not. They return to normal when you are back in an allowed region.

---

## Risks to understand before buying

- **Price divergence.** The on-chain price can move away from the underlying stock, especially outside US market hours or when liquidity is thin.
- **Corporate-action pauses.** Deposits, conversions and sometimes trading pause around dividends and splits.
- **Issuer and custody risk.** You rely on BTech Holdings, its broker and custodian. bStocks are not covered by SIPC or FDIC insurance.
- **Transfer restrictions.** The issuer can freeze or blacklist addresses under its terms.
- **Tax.** Dividend reinvestment after US withholding may still be a taxable event where you live. bStocks may be treated as securities or derivatives depending on your jurisdiction.
- **Regulatory change.** Tokenized securities are an active area of regulation in the US, EU and elsewhere. Availability can change at short notice.
- **Self-custody.** As with everything in ZelCore, losing your seed phrase means losing the tokens. There is no issuer recovery.

---

## Frequently asked questions

**Do I need a Binance account?**
No. Buying, holding, sending and selling bStocks in ZelCore is entirely on-chain and self-custodial. A Binance account is only needed if you want to redeem a bStock for the real share, which is done on Binance, not in ZelCore.

**Why does my bStock balance show more shares than tokens?**
Reinvested dividends raise the share multiplier. The chip on the coin page shows the current ratio.

**Why is the Market Cap or Supply shown as 0?**
Supply figures are not published per bStock the way they are for crypto assets, so those fields stay at zero. Price and volume are accurate.

**Can I swap one bStock directly for another?**
Quotes for stock-to-stock pairs depend on the router finding a path. If no provider quotes the pair, sell into USDT first and then buy the second stock.

**Why do I see two providers for the same swap?**
Binance Web3 is the dedicated bStocks route. Other DEX aggregators may also find the pair through public liquidity pools. ZelCore shows all quotes and tags the best one.

**I'm in an allowed country but bStocks are missing.**
Make sure you are on ZelCore 8.36 or later, that you are not using a VPN or proxy that exits in a restricted country, and restart the app so the availability check runs again.

---

## Resources

Official bStocks and Binance pages:

- [bStocks official site](https://www.bstocks.finance/en) and [FAQ](https://www.bstocks.finance/en/faq)
- [Binance bStocks landing page](https://www.binance.com/en/bstocks-landing)
- [Binance bStocks FAQ](https://www.binance.com/en/support/faq/detail/f0c03cd6509a4085b4cce1636f16be38)
- [Binance Academy: What are bStocks?](https://www.binance.com/en/academy/articles/what-are-bstocks-a-guide-to-tokenized-stocks-on-binance)
- [Launch announcement (June 2026)](https://www.binance.com/support/announcement/detail/2c0c92ed15ac42d1b14bb1eac00d22bb)
- [Proof of Collateral](https://www.binance.com/en/proof-of-collateral/bstocks)
- [bStocks legal documentation: prospectus, admission notices and disclosures](https://www.binance.com/en/about-legal/bstocks-digital-securities-documentation)
- [Binance Terms of Use](https://www.binance.com/en/terms) and [Risk Warning](https://www.binance.com/en/risk-warning)

Technical background:

- [BNB Chain: Introducing bStocks on BNB Chain](https://www.bnbchain.org/en/blog/introducing-bstocks-on-bnb-chain-trade-24-7-with-zero-fees-deploy-across-defi-protocols-with-full-self-custody)
- [BEP-677: Scaled UI amounts (the share multiplier standard)](https://github.com/bnb-chain/BEPs/blob/master/BEPs/BEP-677.md)
- [Binance Web3 Wallet developer docs](https://web3.binance.com/en/dev-docs)

Related ZelCore guides:

- [Managing ERC-20 and BEP-20 tokens](/docs/guides/managing-erc20-tokens)
- [Troubleshooting Fusion swap issues](/docs/guides/troubleshooting-fusion-swap-issues)
- [Security best practices](/docs/guides/security-best-practices)

:::info Disclaimer
This guide is for information only and is not investment, legal or tax advice. bStocks are issued by BTech Holdings Ltd, not by ZelCore. Availability, fees and terms are set by the issuer and can change. Always check the official documentation linked above.
:::
