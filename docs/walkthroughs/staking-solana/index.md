---
sidebar_position: 3
title: How to Stake Solana (SOL) with ZelCore Earn
description: Step-by-step guide to staking Solana using the ZelCore Earn feature via the Chorus One staking provider.
keywords: [zelcore, solana, sol, staking, earn, apy, chorus one, validator]
---

# How to Stake Solana (SOL) with ZelCore Earn

This guide walks you through staking Solana (SOL) using ZelCore's Earn feature. You'll learn how to navigate to Earn, select Solana as the staking chain, enter a stake amount, and confirm your stake through the Chorus One validator.

---

## Prerequisites

- A ZelCore wallet with SOL tokens (minimum 0.01 SOL to stake)
- ZelCore desktop application installed and logged in

---

## Step 1: Open the Earn Feature

From your **Portfolio** overview, expand the left sidebar and click **Earn** to open the staking dashboard.

![Portfolio overview showing wallet holdings including Solana](./images/01-portfolio-overview.jpg)

![Sidebar navigation with Earn option highlighted](./images/02-sidebar-earn-navigation.jpg)

The **Earn** section is accessible from the left sidebar navigation, alongside Portfolio, Swap, Apps, Purchase, Sell, and NFTs.

---

## Step 2: Select Solana as the Staking Chain

On the Earn dashboard, use the **Selected Chain** selector to choose **Solana**. The dashboard displays an overview of your Solana staking activity:

![Earn dashboard with Solana selected showing zero staking positions](./images/03-earn-solana-dashboard.jpg)

- **Total Staked** — The total amount of SOL currently staked (0 SOL if no positions exist)
- **Total Rewards** — Accumulated staking rewards
- **Available to Stake** — Your unstaked SOL balance available for staking

Below the summary cards, you can see the staking provider details:

| Detail | Value |
|--------|-------|
| Staking Provider | Chorus One |
| Current Epoch | 940 |
| Est. APY | ~7.42% |
| Active Validators | 775 |

:::tip
You can switch the selected chain at any time to view or manage stakes on different networks.
:::

---

## Step 3: Start the Staking Process

Click the **Stake** button to begin. The staking process follows a two-step wizard: **Enter Amount** and **Confirm Stake**.

![Enter amount to stake form with Stake Amount field and MAX button](./images/04-enter-stake-amount.jpg)

The staking form displays:

- **Stake Amount** — Input field for the amount of SOL to stake
- **MAX** button — Automatically fills the maximum available amount
- **Available to Stake** — Shows your available SOL balance (e.g., 0.2034 SOL)
- **Min** — The minimum staking amount (0.01 SOL)

:::info
A small amount of SOL (0.00228288 SOL) must remain in your wallet for rent. This is automatically reserved and cannot be staked.
:::

---

## Step 4: Enter the Stake Amount

Type the amount of SOL you want to stake. In this example, we enter **0.1 SOL**. Once a valid amount is entered, the **Continue** button becomes active.

![Stake amount field showing 0.1 SOL entered with Continue button active](./images/05-amount-entered.jpg)

Click **Continue** to proceed to the confirmation step.

---

## Step 5: Review and Confirm the Stake

The confirmation screen displays a summary of your staking details. Review the information carefully before confirming.

![Confirm Stake screen showing validator, staked amount, estimated APY, and commission](./images/06-confirm-stake.jpg)

| Detail | Value |
|--------|-------|
| Validator | voteRn...UJjd |
| Staked | 0.1 SOL |
| Est. APY | ~8.07% |
| Commission | 0% |

:::warning
Staking activates after ~2 days (1 epoch). Rewards begin after ~4-6 days. Your SOL will be locked during this activation period.
:::

Click **Confirm Stake** to submit the staking transaction.

---

## Step 6: Verify Your Staking Position

After confirming, you are returned to the Earn dashboard. Your new staking position appears with an **Activating** status while it processes through the current epoch.

![Earn dashboard showing 0.1000 SOL staked with Activating status under Chorus One validator](./images/07-stake-activating.jpg)

The dashboard now reflects your updated staking summary:

- **Total Staked** — 0.1000 SOL (1 position)
- **Status** — Activating
- **Validator** — Chorus One
- **Est. APY** — ~7.42%

Once the stake activates in the next epoch (~2 days), the status will change to **Active** and you will begin earning rewards.

---

## Summary

You have successfully staked SOL using ZelCore's Earn feature. Your stake will activate in the next Solana epoch and begin generating rewards shortly after. You can return to the Earn dashboard at any time to monitor your staking position, view accumulated rewards, or create additional stakes.
