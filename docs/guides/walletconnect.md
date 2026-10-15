---
title: Connect Zelcore to dApps with WalletConnect
description: "Connect Zelcore to a dApp with WalletConnect: paste the pairing link, check the domain and scam warnings, approve requests, and fix pairing errors."
keywords: [zelcore walletconnect, walletconnect uri, connect zelcore to dapp, walletconnect pairing error, zelcore dapp, reown]
---

# Connect Zelcore to dApps with WalletConnect

WalletConnect lets a dApp (a decentralized exchange, an NFT marketplace and so on) ask your Zelcore wallet to connect and to sign transactions. On the dApp, choose WalletConnect and copy the pairing link. In Zelcore, click the WalletConnect icon in the top bar, paste the link into **Wallet Connect URI** and select **Connect**. Check the dApp's name, website and any warning, pick the wallet to share, then select **Approve**. Every transaction or signature the dApp asks for later opens its own request in Zelcore, which you approve or reject.

:::info Applies to Zelcore 8.39
Written for Zelcore 8.39.0 (October 2026).
:::

Zelcore uses WalletConnect v2 through Reown WalletKit. The desktop app, the mobile app and the browser extension use the same WalletConnect screens. On mobile, scan the QR code or paste the pairing link. Hardware wallet accounts can't connect to dApps; see [hardware wallets on Zelcore desktop](./hardware-wallets.md).

## Connect a dApp

1. On the dApp, choose **Connect Wallet** (or similar) and pick WalletConnect. Copy the pairing link. It starts with `wc:`.
2. In Zelcore, click the WalletConnect icon in the top bar.
   <!-- screenshot: walletconnect-1 (top bar with the WalletConnect icon highlighted) -->
3. Paste the link into **Wallet Connect URI** and select **Connect**. The button only works once the field starts with `wc:`.
   <!-- screenshot: walletconnect-2 (dropdown with the Wallet Connect URI field and Connect button) -->
4. The **Incoming Proposal** dialog opens with a countdown. Check:
   - the dApp's name and website, and the domain check under it (see [Check the dApp before you approve](#check-the-dapp-before-you-approve))
   - any scam warning
   - the message "Approval will share relevant wallet information with (name). Do you approve?"
5. Under **Select wallet**, choose the wallet to share with the dApp.
   <!-- screenshot: walletconnect-3 (Incoming Proposal with dApp name and URL, Domain match label, Select wallet, Approve and Reject) -->
6. Select **Approve**, or **Reject** if anything looks wrong. If d2FA is on for secure tasks, enter your PIN (see [Set Up d2FA](../security/d2fa.md)).
7. Zelcore confirms with "You have successfully paired with (url)." The dApp now shows your address as connected.

You can also open a `wc:` link directly, and Zelcore opens the same proposal.

### Connect on mobile

On mobile, tap **Scan** and scan the dApp's WalletConnect QR code, or copy the WalletConnect link and paste it into the WalletConnect field. A connection usually stays active for up to 7 days unless the dApp renews it or you disconnect sooner. After that, connect again from the dApp.

## Check the dApp before you approve

**Domain check.** Each proposal and request shows one of these labels:

- "Domain match: The domain linked to this request has been verified as this application's domain."
- "Unverified: The domain sending the request cannot be verified."
- "Mismatch: The application's domain doesn't match the sender of this request."
- "Threat: This domain is flagged as malicious and potentially harmful."

**Scam and drainer screening.** Since 8.38.0, Zelcore checks the dApp's website against known scam and drainer lists before you approve a WalletConnect connection or request. On a request, it also checks the recipient and any token spender.

- "This site is flagged as a scam or phishing site": selecting **Approve** opens a red **This looks like a scam** dialog. **Approve anyway** stays disabled until you tick **I understand this is likely a scam and I could lose funds**. Select **Cancel** unless you are sure.
- "This site has warning signs": the proposal shows this warning. Double-check the website before you continue.
- "This app did not give a valid website address, so it could not be checked for scams. Only continue if you trust it."

<!-- screenshot: walletconnect-4 (a flagged-dApp scam warning, only if a safe example is available) -->

Screening only catches sites and addresses on known lists. No warning does not mean a dApp is safe; check every request before you approve.

Screening is on by default. You can turn it off with **Screen transactions for scams** in **Settings** > **Security**.

## Approve or reject a request

When the connected dApp asks for a signature, an **Incoming Request** dialog opens: "(name) coming from (url) asks you to approve the request below." The request type is shown, for example **Personal Sign**, **Send Transaction**, **Sign Transaction** or **Sign Typed Data (v4)** on EVM networks, and **Sign Transaction** or **Sign Message** on Solana.

1. Read the request. For a transaction, check the recipient, amount and network.
2. Select **Approve**, or **Reject**.
3. If d2FA is on for secure tasks, enter your PIN.
4. Zelcore shows the progress: **Transaction Signing...**, **Transaction Submitted**, then **Transaction Sent Successfully**.

<!-- screenshot: walletconnect-5 (Incoming Request, for example Personal Sign, with Approve and Reject) -->

On Cardano, Zelcore refuses a dApp transaction that doesn't protect your collateral, and says so.

## Supported networks (as of October 2026)

- **EVM:** Ethereum, Avalanche C-Chain, Polygon, BNB Smart Chain, Base, Arbitrum, Fantom, Optimism, Blast, ZkSync Era, Ink, Kasplex, IgraLabs, XDC Network, Sonic and Hyperliquid HyperEVM
- **Other networks:** Solana, Kadena, Sui, Cosmos Hub, Osmosis and Cardano

If a dApp requires a network Zelcore doesn't support, Zelcore rejects the pairing (see [Invalid Chain(s) Request](#invalid-chains-request)).

## Disconnect a dApp

1. Click the WalletConnect icon in the top bar. It is blue while a session is active.
2. Find the dApp in the list of paired dApps. Open **Connected Chains** to see which networks it uses.
3. Select **Disconnect**.

<!-- screenshot: walletconnect-6 (paired dApps list with Disconnect) -->

Disconnecting stops the dApp from sending new requests. It doesn't undo token approvals you already signed on the blockchain.

## WalletConnect error messages

### Error Pairing

"There was an error while attempting to pair with (url). If the problem persists try refreshing dApp (url) and/or attempting to re-pair." Refresh the dApp, copy a new pairing link and connect again.

### Pairing Request Error. Please try a new pairing URL

The link was already used or isn't valid. Copy a fresh link from the dApp.

### Pairing Request Expired

"Incoming session proposal has expired." The countdown ran out before you approved. Copy a new link from the dApp and connect again.

### Invalid Chain(s) Request

"Required chains, not supported by Zelcore, were requested by (url). Pair request has been rejected." The dApp requires a network Zelcore doesn't support. Check the [supported networks](#supported-networks-as-of-october-2026), or choose a supported network on the dApp before you pair.

### Error: Wallet Connect already pending

Zelcore is still handling an earlier connection. Approve or reject the open proposal, wait for it to finish, then try again. Related messages: "Error: Wallet Connect proposal is pending" and "Error: Wallet Connect already has a sessions".

### Error approving session. Session was rejected

The connection failed while it was being approved. Refresh the dApp and pair again.

### Error processing request. Please try again

The request couldn't be completed. Try again from the dApp.

### Transaction Send Error

"There was an error while processing your transaction. This error originated from Wallet Connect and/or (url)." Check the dApp and your balance, then try again.

### Wallet Connect: Network Disconnected

Zelcore lost its connection to the WalletConnect network. Check your internet connection. Zelcore shows "Wallet Connect: Network Connected" when it is back.

### This wallet uses a hardware wallet, which can only sign sends from the Send screen.

The request came to a hardware wallet account, which can't sign dApp requests. Connect a software wallet instead.

Background: [Connecting Zelcore with WalletConnect](https://zelcore.io/academy/how-to/connecting-zelcore-walletconnect) (Zelcore Academy) explains pairings, sessions and on-chain token approvals.

## Related

- [Set Up d2FA in Zelcore](../security/d2fa.md)
- [Zelcore Browser Extension](./browser-extension.md)
- [Hardware wallets on Zelcore desktop](./hardware-wallets.md)
- [Security Best Practices](../security/best-practices.md)
- [Zelcore support](https://support.zelcore.io)
