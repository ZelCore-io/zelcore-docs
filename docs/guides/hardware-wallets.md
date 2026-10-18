---
title: Ledger and Trezor on Zelcore Desktop
description: "Use a Ledger or Trezor with Zelcore desktop: import accounts, sign sends on the device, see which coins can send, and fix connection errors."
keywords: [zelcore ledger desktop, zelcore trezor desktop, hardware wallet zelcore desktop, import ledger zelcore desktop, trezor experimental features desktop]
---

# Ledger and Trezor on Zelcore Desktop

Hardware wallets work in the Zelcore desktop app only; the mobile app and the browser extension don't support them. In the desktop app, choose **Import a Wallet** > **Hardware Wallet**, pick your Ledger, or your Trezor after turning on **Experimental Features** (desktop), and import the addresses you want. Your keys stay on the device. Zelcore desktop builds each transaction, and you approve it on the device. A hardware wallet can only sign sends from the **Send** screen.

:::info Applies to Zelcore 8.39
Written for Zelcore 8.39.0 (October 2026).
:::

## Before you start

- **Use the desktop app.** Hardware wallets need the desktop app's USB connection. Mobile and the browser extension don't offer the **Hardware Wallet** import.
- **Ledger (desktop):** connect it over USB. Bluetooth isn't supported. Unlock the device and open the app for the coin you want to import. Keep your Ledger firmware and the coin's Ledger app up to date.
- **Trezor (desktop):** Trezor is experimental. First turn on **Settings** > **Extras** > **Experimental Features**. It needs Trezor Bridge (or the Trezor Suite desktop app, which includes it) running on your computer. If Zelcore desktop shows "To allow a secure communication between your Trezor device and Zelcore App, please install" with a **Trezor Bridge** button, install Trezor Bridge or Trezor Suite.
- **Tested devices (desktop):** Zelcore desktop is tested with the Ledger Nano X. Other Ledger devices that run the same Ledger coin apps are not tested with Zelcore desktop. No Trezor model is listed as tested with Zelcore desktop, and some Trezor coins are marked in the app as available only on certain Trezor models.

<!-- screenshot: hardware-wallets-4 (Settings > Extras with the Experimental Features switch) -->

## Import a hardware wallet account

1. In Zelcore desktop, open the wallet selector at the top of **Portfolio** (**See More Wallets**, which opens when you hover over it) and choose **Import a Wallet**.
   ![See More Wallets menu in Portfolio with the wallet list, Import a Wallet and Configure Wallet](./images/moving-funds-from-other-wallets/moving-1-see-more-wallets.webp)
2. In **Import External Wallet**, choose **Hardware Wallet**.
   ![Import External Wallet dialog with Wallet Private Key and Hardware Wallet](./images/moving-funds-from-other-wallets/moving-2-import-external-wallet.webp)
3. At "Select the brand of wallet you'd like to set up.", choose Ledger or Trezor (desktop). Trezor only appears when **Experimental Features** is on (desktop).
   <!-- screenshot: hardware-wallets-3 (brand picker with Ledger, and Trezor when Experimental Features is on, desktop) -->
4. Follow the steps the wizard shows:
   1. **Select Coin**: pick the coin to import.
      <!-- screenshot: hardware-wallets-5 (Select Coin step) -->
   2. **Select Address**: pick the address or addresses to import.
   3. **Open App on Device**: open the coin's app on the device. For a Ledger (desktop), a status line shows the device model and the app that is open.
      <!-- screenshot: hardware-wallets-6 (Open App on Device step with the device status line) -->
   4. **Confirm & Import**: confirm the address on the device when it shows "Confirm address import on device".
      <!-- screenshot: hardware-wallets-7 (Select Address and Confirm & Import) -->
   5. **Finish up or keep adding**: import another coin, or finish.
5. At "Give your (name) wallet a display name.", type a name. Zelcore shows "Wallet imported successfully!".

## Which coins work (as of October 2026)

**Ledger on desktop, import:** Ethereum and EVM networks, Bitcoin, Algorand, Polkadot, Solana, Stellar, Tron, XRP, NEO, EOS, Kusama, Ontology and Kaspa.

**Ledger on desktop, send from Zelcore:** Ethereum, Ethereum Classic, BNB Smart Chain, Polygon and native KAS. Other Ledger accounts on desktop, such as Bitcoin, Solana, XRP and Tron, can view balances and receive, but sends from them aren't supported in Zelcore yet. Use your Ledger's own app for those. KRC-20 tokens on a Ledger (desktop) can't be sent yet. Before you receive funds on an imported Ledger (desktop) account for any other coin, make sure you can spend from it with the vendor's software.

**Trezor on desktop, import and send:** Bitcoin, Bitcoin Cash, Bitcoin Gold, Dash, Litecoin, Ethereum and Ethereum Classic.

**Trezor on desktop, import only:** Bitcore, Cardano, Dogecoin, DigiByte, Firo, Ravencoin, XRP, Vertcoin, Zcash, BNB BEP2, EOS, Komodo, Stellar and Tezos BEP20. Cardano, XRP, BNB BEP2, EOS and Tezos BEP20 are marked in the app as available only on certain Trezor models (desktop).

## Send from a hardware wallet

1. In Zelcore desktop, open the coin on the hardware wallet account and select **Send**. The screen shows "This transaction is protected with on device signing".
   <!-- screenshot: hardware-wallets-8 (Send screen on a Ledger wallet with the on-device signing note, desktop) -->
2. Enter the recipient and amount and confirm, as in [Send and Receive Crypto in Zelcore](./send-and-receive.md). The fee is shown in the app before you confirm.
3. When Zelcore shows "Please sign transaction on device", check the details on the device screen and approve them there.

**Kaspa on a Ledger (desktop):** a send that has to combine many small coins needs more than one approval. Zelcore desktop tells you how many: "This send needs (count) approvals on your Ledger: first to combine small coins, then the payment itself. Nothing is broadcast until all of them are approved." You can't attach a message to a send from a Ledger (desktop).

## What a hardware wallet can't do in Zelcore

On desktop, a hardware wallet account signs sends from the **Send** screen only. Since 8.39.0, Zelcore hides or refuses the actions it can't sign, with a message, instead of failing part-way:

- Swaps, Sell and Earn
- WalletConnect connections (hardware wallet accounts aren't offered when you connect a dApp)
- Sign Message
- The Igra bridge, Kaspa UTXO consolidation, FluxNode actions and FluxDrive payments

<!-- screenshot: hardware-wallets-9 (swap refusal message for a hardware wallet) -->

## Hardware wallet error messages

### Could not connect to your hardware wallet. Make sure it is plugged in, unlocked, and the correct app is open, then try again.

Plug the device in, unlock it and open the app for the coin you are using, then try again.

### There was an error loading your device. Try re-connecting.

Unplug the device, plug it back in, unlock it and start the import again.

### Something went wrong. Try re-connecting your device.

Re-connect the device and try again. If it keeps happening, restart Zelcore desktop.

### If your brand is disabled, make sure the device is properly connected and is not waiting for user input.

The brand button is greyed out. Check the cable and look at the device screen: it may be waiting for you to enter the PIN or confirm something.

### Swaps can't be paid from a hardware wallet yet. Choose another wallet.

Pick a software wallet as the source of the swap, or send the funds to one first.

### This wallet uses a hardware wallet, which can only sign sends from the Send screen.

The action you started needs a signature the hardware wallet can't give in Zelcore. Use the **Send** screen, or use a software wallet for this action.

### The transaction was rejected on the Ledger. Nothing was sent. (desktop)

You, or the device, declined the transaction on the Ledger (desktop). Start the send again and approve it on the device.

### A message can't be attached when sending from a Ledger. Remove the message and try again. (desktop)

Clear the message field on the **Send** screen and send again.

### This Ledger wallet's key doesn't match the sending address. Import the address from your Ledger again. (desktop)

Import the address from your Ledger again with **Import a Wallet** > **Hardware Wallet** (desktop).

### There was an error signing the transaction!

The device didn't return a signature. Check that it is connected, unlocked and on the right app, then send again.

### There was an error broadcasting the transaction!

The signed transaction didn't reach the network. Check your connection and try again.

**Fixed in 8.39.0 (desktop):** Ledger sends no longer show "Unknown error" while the device waits for your approval, and a Ledger no longer gets stuck on "Loading device…". If you see either, update Zelcore desktop.

Background: [Why hardware wallets matter](https://zelcore.io/academy/basics/why-hardware-wallets-matter) (Zelcore Academy).

## Related

- [Security Best Practices](../security/best-practices.md)
- [Import a Wallet](../getting-started/import-wallet.md)
- [Set Up d2FA in Zelcore](../security/d2fa.md)
- [Connect Zelcore to dApps with WalletConnect](./walletconnect.md)
- [Send and Receive Crypto in Zelcore](./send-and-receive.md)
- [Move Funds from Another Wallet to Zelcore](./moving-funds-from-other-wallets.md)
- [Zelcore support](https://support.zelcore.io)
