const items = [
  { question: `What are Flux Parallel Assets (PA)?`, answer: `Flux Parallel Assets (PA) are rewards distributed to FluxNode operators who participate in the Flux parallel mining ecosystem. These assets represent claimable amounts of various Flux parallel chain tokens.` },
  { question: `How do I claim my Parallel Assets rewards?`, answer: `PA rewards are claimed through the Fusion interface in ZelCore. There are two main methods:` },
  { question: `What does "claiming amount exceeds maximum allowable" mean?`, answer: `This error indicates you're attempting to claim more PA credits than allowed in a single transaction, or your accumulated credits exceed system limits.` },
  { question: `Why are my PA claims not appearing in ZelCore?`, answer: `Several reasons can cause PA credits to not display in the Fusion interface:` },
  { question: `What does "Claim All" do and why did I get native FLUX instead of parallel assets?`, answer: `"Claim All" is working as designed. This function consolidates ALL your PA credits into native FLUX, regardless of which parallel chains the credits represent.` },
  { question: `What gas do I need to claim Parallel Assets?`, answer: `Gas requirements depend on which parallel asset you're claiming (or if using "Claim All"):` },
  { question: `Why does my claim require whitelisting?`, answer: `Whitelisting is a security measure managed by the runonflux snapshot/whitelist service to protect PA distribution integrity.` },
  { question: `How often should I claim my PA rewards?`, answer: `Recommended claiming frequency: Monthly` },
  { question: `Can I claim PA rewards if my node is in DOS or EXPIRED status?`, answer: `PA accumulation pauses during DOS and EXPIRED states. You must resolve node status issues before PA credits will resume accumulating.` },
  { question: `What's the difference between claiming to parallel chains vs "Claim All" to native FLUX?`, answer: `These are two distinct claiming methods with different outcomes:` },
  { question: `Do all FluxNodes automatically earn PA rewards?`, answer: `No, not all FluxNodes automatically earn PA rewards. Parallel Assets are earned specifically through participation in Flux parallel mining activities.` },
  { question: `Can I claim PA rewards to a different address than my FluxNode wallet?`, answer: `Generally no, PA claims are designed to go to your ZelCore wallet addresses associated with your FluxNode account.` },
  { question: `What are the typical gas costs for claiming PA rewards?`, answer: `Gas costs for PA claims vary significantly by blockchain. Understanding costs helps you optimize claiming strategy.` },
  { question: `What happens to unclaimed PA rewards if I stop running my FluxNode?`, answer: `Unclaimed PA credits should remain claimable even if you stop running your FluxNode, but there are important considerations and limitations.` },
  { question: `Where can I get help with PA claiming issues?`, answer: `The Flux community provides support through official channels. Here's where to get help and what to include:` },
];

export default items;
