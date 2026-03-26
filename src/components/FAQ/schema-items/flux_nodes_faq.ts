const items = [
  { question: `What does it mean when my Flux Node shows DOS (Denial of Service) status?`, answer: `DOS (Denial of Service) status means your node has been temporarily banned from the Flux network due to repeated failures to respond to network requests or benchmark checks. This is a protective mechanism to maintain network quality.` },
  { question: `Why does my node show EXPIRED status and how do I fix it?`, answer: `EXPIRED status indicates your node's confirmation transaction has expired on the blockchain, usually after prolonged downtime or persistent connectivity issues.` },
  { question: `My node shows "Flux not confirmed" or "Not Confirmed" - what should I do?`, answer: `"Not Confirmed" status means the Flux network cannot verify your node's registration transaction or the confirmation hasn't been properly recognized yet.` },
  { question: `What is multitoolbox and how do I use it?`, answer: `Multitoolbox is the essential diagnostic and management tool for Flux Nodes. It provides comprehensive status information, identifies problems, and helps troubleshoot issues.` },
  { question: `Should I use UPnP or manual port forwarding for my Flux Node?`, answer: `Recommendation: Manual port forwarding is more reliable and recommended for production Flux Nodes.` },
  { question: `Which ports do I need to forward for my Flux Node?`, answer: `Flux Nodes require four ports to be accessible from the internet:` },
  { question: `My benchmark keeps failing even though my node meets the requirements. Why?`, answer: `Benchmark failures despite meeting tier requirements usually indicate resource constraints, daemon sync issues, or network connectivity problems.` },
  { question: `What should I do after updating FluxOS, daemon, or my system?`, answer: `Updates can temporarily affect node operations. Follow these post-update steps to ensure everything restarts correctly:` },
  { question: `Can I use DMZ instead of port forwarding for my Flux Node?`, answer: `No, DMZ is not recommended for Flux Nodes. Use manual port forwarding instead.` },
  { question: `How do I know if my Flux daemon is fully synchronized?`, answer: `A fully synchronized daemon is critical for proper node operation. Here's how to verify sync status:` },
  { question: `What are the differences between Cumulus, Nimbus, and Stratus node tiers?`, answer: `Flux offers three node tiers with different resource requirements and collateral amounts. Higher tiers earn proportionally more rewards.` },
  { question: `Why did my node enter DOS state after my router reset or power outage?`, answer: `Power outages and router resets commonly cause DOS states due to extended downtime and configuration loss.` },
  { question: `Can I run multiple Flux Nodes on the same network/router?`, answer: `Not recommended for residential networks. Multiple nodes behind a single router create port conflicts and management complexity.` },
  { question: `How often should I check my Flux Node, and what should I monitor?`, answer: `Regular monitoring prevents issues before they cause DOS or EXPIRED states. Here's a practical monitoring schedule:` },
  { question: `Why is my node showing the wrong IP address or not updating to my current IP?`, answer: `Node IP address issues typically occur when your public IP changes (dynamic IP) or when the node is detecting an internal/private IP instead of your public-facing IP address.` },
  { question: `How do I check what my node's current public IP address is?`, answer: `There are multiple ways to verify your node's public IP address, both from the node itself and externally:` },
  { question: `Where can I get help if the troubleshooting guide doesn't solve my issue?`, answer: `The Flux community offers multiple support channels. Here's where to get help and what to include in your request:` },
];

export default items;
