---
title: Zelcore Browser Extension
description: "Install the Zelcore browser extension on Chrome, Brave or Edge, switch between side panel and popup, and see what the extension includes."
keywords: [zelcore browser extension, zelcore chrome extension, zelcore brave, zelcore edge, zelcore side panel, crypto wallet extension]
---

# Zelcore Browser Extension

The Zelcore browser extension is a Zelcore wallet in your browser. Install it from the Chrome Web Store listing, which Chrome, Brave and Edge all use. Firefox isn't listed as of October 2026. After installing, create a new account or restore your existing one with the same seed phrase you use on desktop and mobile, so the same addresses appear. The extension opens in the browser's side panel by default, or as a popup.

:::info Applies to Zelcore 8.39
Written for Zelcore 8.39.0 (October 2026).
:::

## Install the extension

1. Open the official [Zelcore listing on the Chrome Web Store](https://chromewebstore.google.com/detail/zelcore/khpdakhaigcopakcondjleibgpdjpmck). Install only from this listing. Brave and Edge use the same listing.
   <!-- screenshot: browser-extension-1 (Chrome Web Store listing with Add to Chrome) -->
2. Select **Add to Chrome** and confirm.
3. Pin Zelcore to the browser toolbar from the browser's extensions menu, so it is one click away.
   <!-- screenshot: browser-extension-2 (toolbar with the pinned Zelcore icon) -->
4. Click the Zelcore icon and create a new account or log in to an existing one. See [Create a Wallet](../getting-started/create-wallet.md) or [Import a Wallet](../getting-started/import-wallet.md).
   <!-- screenshot: browser-extension-3 (first run: create or import) -->
5. If you created a new account, write down the seed phrase before you add funds.

## Side panel or popup

Clicking the Zelcore icon opens the extension in the browser's side panel. To change this, right-click the Zelcore icon in the toolbar:

- **Open as Popup** or **Open as Side Panel** opens Zelcore that way once.
- **Default: Popup** or **Default: Side Panel** sets what a click on the icon opens.

<!-- screenshot: browser-extension-6 (side panel open) -->

## What the extension includes

The extension uses the same screens and labels as the desktop app:

- **Portfolio** and coin screens, to send and receive
- **Swap**
- **Apps**, with tiles such as **Flux ID** (for [d2FA](../security/d2fa.md)), **Purchase Crypto**, **Sell Crypto**, **Earn**, **Fusion**, **NFTs**, **FIO Crypto Handle** and **Zelcore+**. Tiles appear when the service is available to you, so your **Apps** screen shows what you can use.
- **WalletConnect**, from the icon in the top bar, to connect to dApps (see [Connect Zelcore to dApps with WalletConnect](./walletconnect.md))
- Tax & CSV export, which saves files through your browser's downloads. Most tax-tool layouts come with Zelcore+.

<!-- screenshot: browser-extension-4 (popup portfolio with a few assets) -->

zelcore.io describes the extension's assets as a curated set of major assets (Bitcoin, Ethereum, Solana, Kaspa, Kadena and more), as a companion to the desktop wallet.

## What the extension doesn't do

- **Hardware wallets:** not supported. Hardware wallets work only in the [Zelcore desktop app](./hardware-wallets.md).
- **Firefox:** not listed as of October 2026.

## Permissions the extension asks for

The extension is built on Manifest V3. It asks the browser for storage, unlimited storage, scripting, downloads, side panel and context menu permissions, and runs a content script on every page you open. The context menu permission is what adds the right-click options above.

## If something goes wrong

The extension shows the same messages as the desktop app. Fixes are on these pages:

- d2FA and PIN messages: [Set Up d2FA in Zelcore](../security/d2fa.md#d2fa-error-messages)
- WalletConnect pairing and request messages: [WalletConnect error messages](./walletconnect.md#walletconnect-error-messages)
- Anything else: [Zelcore support](https://support.zelcore.io)

## Related

- [Install Zelcore](../getting-started/installation.md)
- [Zelcore Mobile Guide](./zelcore-mobile-guide.md)
- [Connect Zelcore to dApps with WalletConnect](./walletconnect.md)
- [Set Up d2FA in Zelcore](../security/d2fa.md)
- [Security Best Practices](../security/best-practices.md)
