---
sidebar_position: 4
---

# Flux Nodes FAQ

## What does it mean when my Flux Node shows DOS (Denial of Service) status?

**Answer:**

DOS (Denial of Service) status means your node has been temporarily banned from the Flux network due to repeated failures to respond to network requests or benchmark checks. This is a protective mechanism to maintain network quality.

**Common causes:**
- Ports not properly forwarded (most common - 60% of cases)
- UPnP failures or conflicts
- Daemon synchronization issues
- Extended periods of downtime
- Network connectivity problems

**What happens during DOS:**
- Your node cannot earn rewards
- Node is excluded from the network
- DOS status typically expires after 24-48 hours
- Must resolve underlying issue before node can rejoin

**How to resolve:**
1. Run multitoolbox to diagnose the issue
2. Verify all ports (16125, 16127, 16224, 16225) are properly forwarded
3. Ensure daemon is fully synchronized
4. Check that benchmark is passing
5. Wait for DOS period to expire
6. Monitor to prevent recurrence

**Related:**
- [Comprehensive Flux Node Troubleshooting Guide](/docs/guides/troubleshooting-flux-node-status-issues)

---

## Why does my node show EXPIRED status and how do I fix it?

**Answer:**

EXPIRED status indicates your node's confirmation transaction has expired on the blockchain, usually after prolonged downtime or persistent connectivity issues.

**Main causes:**
- Extended offline period (node down for several days)
- Daemon fell out of sync for an extended time
- Network connectivity loss during critical periods
- Collateral transaction issues

**How to fix EXPIRED status:**

1. **Ensure node is healthy first:**
   - Daemon must be fully synced: `flux-cli getinfo`
   - Benchmark must be passing: `flux-cli getbenchstatus`
   - All ports must be accessible from internet
   - Run multitoolbox to verify everything is working

2. **Re-confirm your node:**
   - Open ZelCore FluxNodes app
   - Select your node
   - Click "Confirm Node"
   - Send confirmation transaction (costs 1 FLUX fee)
   - Wait for blockchain confirmations (6-10 minutes)

3. **Verify confirmation:**
   - Check node status in ZelCore
   - Run `flux-cli getzelnodestatus` on your node
   - Should show "CONFIRMED" status

**Important:** Don't attempt to re-confirm until you've resolved the underlying issue that caused the expiration, or the problem will recur.

**Related:**
- [Troubleshooting Flux Node Status Issues - Re-confirmation Process](/docs/guides/troubleshooting-flux-node-status-issues#step-8-re-confirming-your-node-for-expirednot-confirmed)

---

## My node shows "Flux not confirmed" or "Not Confirmed" - what should I do?

**Answer:**

"Not Confirmed" status means the Flux network cannot verify your node's registration transaction or the confirmation hasn't been properly recognized yet.

**For new node setups:**
- Wait 30-60 minutes for network propagation
- Verify confirmation transaction has blockchain confirmations
- Check on explorer.runonflux.io that transaction is confirmed

**For nodes stuck in this state:**

1. **Verify daemon is fully synced:**
   ```bash
   flux-cli getinfo
   ```
   Compare block height with https://explorer.runonflux.io

2. **Check your confirmation transaction:**
   - In ZelCore, find the transaction hash
   - Verify on blockchain explorer
   - Must have 10+ confirmations

3. **Common issues:**
   - Daemon wasn't synced when you confirmed
   - Used wrong IP address (internal instead of public)
   - Ports not accessible when confirmation occurred
   - Insufficient or incorrect collateral amount

4. **Solution if daemon wasn't synced:**
   - Wait for full daemon synchronization
   - Re-confirm through ZelCore FluxNodes app
   - Monitor for 30 minutes

**Prevention:** Always ensure daemon is 100% synced before confirming or re-confirming your node.

**Related:**
- [Troubleshooting Guide - Not Confirmed Scenario](/docs/guides/troubleshooting-flux-node-status-issues#scenario-3-not-confirmed-status-but-benchmark-passes)

---

## What is multitoolbox and how do I use it?

**Answer:**

Multitoolbox is the essential diagnostic and management tool for Flux Nodes. It provides comprehensive status information, identifies problems, and helps troubleshoot issues.

**How to access multitoolbox:**

**If not installed:**
```bash
cd ~/ && wget https://raw.githubusercontent.com/RunOnFlux/fluxnode-multitool/master/multitoolbox.sh && bash multitoolbox.sh
```

**If already installed:**
```bash
cd ~/zelflux && bash multitoolbox.sh
```

**What multitoolbox shows:**
- Flux daemon status and synchronization
- Benchmark status and recent results
- Network configuration and port status
- UPnP status
- FluxOS version and health
- Docker container status
- External IP address
- Resource usage (CPU, RAM, disk)

**When to use multitoolbox:**
- Diagnosing any node issue
- Checking overall node health
- Verifying configuration
- Before seeking support (always provide output)
- Weekly maintenance checks

**Saving multitoolbox output:**

When contacting support, save the full output:
```bash
bash multitoolbox.sh > multitoolbox_output.txt
```

Then share the file contents with support team.

**Related:**
- [Troubleshooting Guide - Step 1: Run Multitoolbox](/docs/guides/troubleshooting-flux-node-status-issues#step-1-run-multitoolbox-diagnostic)

---

## Should I use UPnP or manual port forwarding for my Flux Node?

**Answer:**

**Recommendation: Manual port forwarding** is more reliable and recommended for production Flux Nodes.

**Manual Port Forwarding (Recommended):**

**Pros:**
- More reliable and stable
- Doesn't depend on router UPnP support
- Survives router reboots
- Easier to troubleshoot
- Industry best practice for servers

**Cons:**
- Requires one-time router configuration
- Need to access router admin panel

**How to set up:**
1. Find your node's internal IP address
2. Log into router admin panel
3. Create port forwarding rules for ports: 16125, 16127, 16224, 16225
4. Point all to your node's internal IP
5. Save and reboot router

**UPnP (Universal Plug and Play):**

**Pros:**
- Automatic configuration
- No manual router setup needed

**Cons:**
- Can fail silently
- Not supported on all routers
- May conflict with existing rules
- Can reset unexpectedly
- Less reliable for production use

**Problems with UPnP:**
- Often disabled on enterprise networks
- Doesn't work with some router models
- Can be disabled by router firmware updates
- May not survive router reboots

**If you're currently using UPnP and having issues:**
1. Switch to manual port forwarding
2. Disable UPnP in router
3. Delete any UPnP-created rules
4. Set up manual rules
5. Your node stability should improve significantly

**Related:**
- [Troubleshooting Guide - Port Forwarding Configuration](/docs/guides/troubleshooting-flux-node-status-issues#step-4-configure-port-forwarding-upnp-vs-manual)

---

## Which ports do I need to forward for my Flux Node?

**Answer:**

Flux Nodes require **four ports** to be accessible from the internet:

**Required Ports:**
- **16125** - Flux daemon P2P (peer-to-peer communication)
- **16127** - Flux daemon RPC (remote procedure calls)
- **16224** - FluxOS API (application interface)
- **16225** - FluxOS communication

**Port forwarding configuration:**

For each port, create a rule in your router:
- **External Port:** [port number]
- **Internal Port:** [same port number]
- **Internal IP:** [your node's internal IP address]
- **Protocol:** TCP (or Both TCP/UDP if available)

**How to find your node's internal IP:**
```bash
hostname -I
```

Example: `192.168.1.100`

**Testing port accessibility:**

External test (from any computer):
- Visit https://www.yougetsignal.com/tools/open-ports/
- Enter your node's public IP
- Test each port (16125, 16127, 16224, 16225)
- All should show "open"

Internal test (on your node):
```bash
sudo ufw status
```

Should show all four ports as ALLOW.

**If ports show closed:**
- Verify port forwarding rules in router
- Check firewall on node (UFW)
- Ensure you're using node's public IP for external tests
- Restart router after making changes

**Related:**
- [Troubleshooting Guide - Port Configuration](/docs/guides/troubleshooting-flux-node-status-issues#step-3-verify-port-configuration)

---

## My benchmark keeps failing even though my node meets the requirements. Why?

**Answer:**

Benchmark failures despite meeting tier requirements usually indicate resource constraints, daemon sync issues, or network connectivity problems.

**Common causes and solutions:**

**1. Daemon not synchronized (Most common):**
```bash
flux-cli getinfo
```
Compare your block height with https://explorer.runonflux.io
- **Solution:** Wait for full sync or bootstrap blockchain

**2. Insufficient actual resources:**
- CPU at 80%+ usage
- RAM exhausted or swapping
- Disk space below 20% free

**Check resources:**
```bash
# CPU and RAM
htop

# Disk space
df -h
```

**Solutions:**
- Close unnecessary applications
- Upgrade to higher tier if consistently maxed
- Clean Docker images: `docker system prune -a`

**3. Network connectivity issues:**

Test packet loss:
```bash
ping -c 100 8.8.8.8
```

If packet loss >5%:
- Contact hosting provider or ISP
- Consider different hosting location

**4. Docker/Syncthing problems:**

Check container status:
```bash
docker ps -a
```

All should show "Up". If any show "Exited":
```bash
docker logs [container-name]
docker restart [container-name]
```

**5. Port accessibility:**

Benchmark requires internet accessibility. Verify ports:
- Use multitoolbox
- Check port forwarding is correct
- Test externally with port checker tool

**If benchmark still fails:**
1. Restart FluxOS: `pm2 restart flux`
2. Restart daemon: `flux-cli stop && sleep 10 && fluxd`
3. Full reboot: `sudo reboot`
4. Run multitoolbox for detailed diagnostics

**Related:**
- [Troubleshooting Guide - Benchmark Failures](/docs/guides/troubleshooting-flux-node-status-issues#step-6-resolve-benchmark-failures)

---

## What should I do after updating FluxOS, daemon, or my system?

**Answer:**

Updates can temporarily affect node operations. Follow these post-update steps to ensure everything restarts correctly:

**After FluxOS Update:**

1. **Wait 10-15 minutes** for FluxOS to fully restart
2. **Check status:**
   ```bash
   pm2 status
   ```
   Both `flux` and `fluxbenchd` should show "online"

3. **If showing "errored":**
   ```bash
   pm2 restart flux
   pm2 restart fluxbenchd
   ```

4. **Monitor logs:**
   ```bash
   pm2 logs flux
   ```

**After Flux Daemon Update:**

1. **Verify daemon is running:**
   ```bash
   flux-cli getinfo
   ```

2. **If not running:**
   ```bash
   flux-cli stop
   sleep 10
   fluxd
   ```

3. **Wait for sync** (daemon may need to re-sync)

**After System Updates (apt upgrade):**

System updates can affect Docker and services:

1. **Restart Docker:**
   ```bash
   sudo systemctl restart docker
   ```

2. **Full reboot recommended:**
   ```bash
   sudo reboot
   ```

3. **After reboot, verify everything:**
   - Run multitoolbox
   - Check daemon sync: `flux-cli getinfo`
   - Verify FluxOS: `pm2 status`
   - Check benchmark: `flux-cli getbenchstatus`

**Common post-update issues:**

- **Docker containers stopped:** `docker ps -a` and restart any stopped containers
- **Syncthing errors:** Usually resolved by FluxOS restart
- **Benchmark fails:** Wait for daemon to fully sync, then restart benchmark

**Prevention tip:** Always run multitoolbox before and after updates to compare states and catch issues early.

**Related:**
- [Troubleshooting Guide - Post-Update Issues](/docs/guides/troubleshooting-flux-node-status-issues#step-7-post-update-troubleshooting)

---

## Can I use DMZ instead of port forwarding for my Flux Node?

**Answer:**

**No, DMZ is not recommended for Flux Nodes.** Use manual port forwarding instead.

**What is DMZ?**

DMZ (Demilitarized Zone) places a device outside your router's firewall, exposing ALL ports to the internet.

**Why DMZ is not recommended:**

**Security risks:**
- Exposes every port on your node to the internet
- Removes firewall protection
- Increases vulnerability to attacks
- Only the four Flux ports need to be accessible

**Technical issues:**
- Only one device can be in DMZ
- May conflict with port forwarding rules
- Router might ignore specific forwarding configurations
- Harder to troubleshoot

**Proper approach:**

1. **Disable DMZ** in router settings
2. **Use manual port forwarding** for only the required ports (16125, 16127, 16224, 16225)
3. **Keep UFW enabled** on your node for additional security
4. **Use fail2ban** for additional intrusion protection

**If currently using DMZ:**

Migration steps:
1. Log into router admin panel
2. Disable DMZ for your node's IP
3. Save changes
4. Set up manual port forwarding (see previous FAQs)
5. Restart router
6. Restart node
7. Run multitoolbox to verify ports are accessible
8. Monitor for 24 hours

**Result:** Better security with same functionality.

**Related:**
- [Troubleshooting Guide - Router DMZ Issues](/docs/guides/troubleshooting-flux-node-status-issues#step-5-router-dmz-configuration-issues)
- [Security Best Practices](/docs/guides/security-best-practices)

---

## How do I know if my Flux daemon is fully synchronized?

**Answer:**

A fully synchronized daemon is critical for proper node operation. Here's how to verify sync status:

**Check sync status:**

```bash
flux-cli getinfo
```

**Look for these fields:**

- **"blocks":** Your current block height
- **"connections":** Should be 8 or higher

**Compare with network:**

```bash
flux-cli getblockchaininfo
```

**Key indicators:**

- `"blocks"` and `"headers"` should match or be very close (within 1-2 blocks)
- If `"blocks"` is significantly behind `"headers"`, daemon is still syncing

**External verification:**

Compare your block height with the network:
- Visit https://explorer.runonflux.io
- Check the current block height
- Your daemon should match (within 1-2 blocks)

**What "fully synced" means:**

- Your blocks = network blocks
- Headers = blocks (or very close)
- Connections 8+
- No sync errors in logs

**If not syncing:**

**Option 1: Wait for natural sync**
- Can take hours depending on how far behind
- Monitor progress: `watch -n 30 flux-cli getinfo`

**Option 2: Bootstrap (faster - recommended):**
```bash
cd ~/ && wget https://fluxnodeservice.com/daemon_bootstrap.sh && bash daemon_bootstrap.sh
```
- Takes 30-60 minutes
- Downloads verified blockchain data

**Option 3: Restart daemon:**
```bash
flux-cli stop
sleep 10
fluxd
```
- Try if daemon appears stuck
- Check logs: `tail -f ~/.flux/debug.log`

**Why sync matters:**

- Benchmarks will fail if not synced
- Confirmations won't work
- Node will enter DOS state
- Cannot participate in network operations

**Check sync regularly:** Before confirming node, after updates, and when troubleshooting any issue.

**Related:**
- [Troubleshooting Guide - Daemon Synchronization](/docs/guides/troubleshooting-flux-node-status-issues#step-2-check-daemon-synchronization)

---

## What are the differences between Cumulus, Nimbus, and Stratus node tiers?

**Answer:**

Flux offers three node tiers with different resource requirements and collateral amounts. Higher tiers earn proportionally more rewards.

**Cumulus (Entry-level tier):**

- **CPU:** 2 cores (4 recommended)
- **RAM:** 8 GB
- **SSD:** 220 GB
- **Bandwidth:** 25 Mbps
- **Collateral:** 1,000 FLUX
- **Rewards:** Base reward tier
- **Best for:** Entry-level node operators, testing

**Nimbus (Mid-tier):**

- **CPU:** 4 cores (6 recommended)
- **RAM:** 32 GB
- **SSD:** 440 GB
- **Bandwidth:** 50 Mbps
- **Collateral:** 12,500 FLUX
- **Rewards:** 12.5x Cumulus rewards
- **Best for:** Serious node operators, VPS hosting

**Stratus (High-tier):**

- **CPU:** 8 cores (12 recommended)
- **RAM:** 64 GB
- **SSD:** 880 GB
- **Bandwidth:** 100 Mbps
- **Collateral:** 40,000 FLUX
- **Rewards:** 40x Cumulus rewards
- **Best for:** Professional operators, dedicated servers

**Choosing your tier:**

**Start with Cumulus if:**
- New to Flux Nodes
- Testing before larger investment
- Limited budget for collateral
- Learning node operations

**Choose Nimbus if:**
- Experienced with nodes
- Want better ROI than Cumulus
- Can afford collateral and hosting
- Most popular tier for serious operators

**Choose Stratus if:**
- Maximum rewards desired
- Have significant FLUX holdings
- Can afford high-performance hosting
- Want to maximize network contribution

**Important notes:**

- All tiers must meet **minimum** requirements
- Recommended specs provide headroom for apps/updates
- Insufficient resources cause benchmark failures
- Cannot "upgrade" a running node - must deploy new node
- Collateral must be exact amount (1000, 12500, or 40000 FLUX)

**Cost considerations:**

Beyond collateral, factor in:
- Monthly hosting costs (VPS)
- Bandwidth charges
- Electricity (if self-hosting)
- Backup/monitoring tools

**ROI varies by:**
- FLUX price
- Network size
- Hosting costs
- Tier chosen

**Related:**
- [Flux Node Setup Guide](/docs/get-started/flux-node-setup) (if available)
- [Troubleshooting Guide - Node Tier Requirements](/docs/guides/troubleshooting-flux-node-status-issues#node-tier-requirements)

---

## Why did my node enter DOS state after my router reset or power outage?

**Answer:**

Power outages and router resets commonly cause DOS states due to extended downtime and configuration loss.

**What happens during power outage:**

1. **Node goes offline** - stops responding to network requests
2. **Network marks node as unresponsive** - after missed ping/benchmark checks
3. **DOS protection activates** - after repeated failures
4. **Port forwarding may reset** - some routers clear rules on power loss

**Why this causes DOS:**

- Extended downtime triggers DOS protection
- When power returns, ports may no longer be forwarded
- Daemon may be out of sync
- Network still considers node unreliable

**Recovery steps:**

1. **Verify power is stable** before proceeding

2. **Check router configuration:**
   - Log into router admin
   - Verify port forwarding rules still exist
   - Re-create if necessary (16125, 16127, 16224, 16225)
   - Reboot router after changes

3. **Check daemon sync:**
   ```bash
   flux-cli getinfo
   ```
   Compare with https://explorer.runonflux.io
   - If out of sync, wait for sync or bootstrap

4. **Run multitoolbox:**
   - Verify all systems operational
   - Check port status
   - Confirm benchmark passing

5. **Wait for DOS to expire:**
   - Usually 24-48 hours from when issue occurred
   - Monitor node during this time
   - Ensure no new issues develop

6. **If EXPIRED instead of DOS:**
   - Re-confirm node through ZelCore
   - Only after fixing all issues

**Prevention strategies:**

**Hardware protection:**
- **UPS (Uninterruptible Power Supply)** - Essential for node reliability
  - Provides power during outages
  - Allows graceful shutdown
  - Prevents sudden power loss damage

**Router configuration:**
- **Save port forwarding to permanent memory** (if router supports)
- **Document configuration** - screenshot port forwarding rules for quick restoration
- **Static IP or DHCP reservation** - prevents IP address changes
- **Disable automatic router reboots** (if enabled)

**Hosting alternatives:**
- **VPS hosting** - Professional datacenters have backup power
  - No power outage concerns
  - Better uptime guarantees
  - Professional network management

**Monitoring:**
- Set up uptime monitoring (UptimeRobot, Pingdom)
- Configure alerts for downtime
- Can respond quickly to issues

**Best practice:** For serious node operations, use VPS hosting with SLA guarantees rather than home hosting vulnerable to power/network issues.

**Related:**
- [Troubleshooting Guide - EXPIRED After Power Outage](/docs/guides/troubleshooting-flux-node-status-issues#scenario-2-expired-after-router-reset-or-power-outage)

---

## Can I run multiple Flux Nodes on the same network/router?

**Answer:**

**Not recommended for residential networks.** Multiple nodes behind a single router create port conflicts and management complexity.

**The core problem:**

Each Flux Node requires the same ports (16125, 16127, 16224, 16225) to be accessible. When multiple nodes share one public IP:
- Port forwarding conflicts (can't forward same port to multiple devices)
- Network congestion
- Router resource limits
- Troubleshooting becomes extremely complex

**Viable solutions:**

**Option 1: Different Public IP Addresses (Best)**

Use VPS hosting:
- Each node gets dedicated public IP
- No port conflicts
- Professional network infrastructure
- Better uptime and reliability
- Easier management

Cost-effective VPS providers for Flux Nodes:
- Contabo
- Hetzner
- DigitalOcean
- Vultr
- Other hosting providers

**Option 2: Multiple Public IPs from ISP**

Some ISPs offer multiple static IPs:
- Request additional IPs from your ISP
- Usually business-tier service required
- More expensive than VPS
- Each node connects through different IP
- Requires advanced networking knowledge

**Option 3: Different Physical Locations**

Distribute nodes geographically:
- Some at home, some on VPS
- Some at different properties
- Friend/family hosting
- Co-location services

**What doesn't work:**

**Different ports per node:**
- Flux protocol requires specific ports
- Custom port configuration not officially supported
- Highly complex, not recommended
- Support won't help with custom setups

**DMZ for one node:**
- Only helps one node
- Doesn't solve multi-node issue
- Security risk

**Recommendation for multiple nodes:**

If running multiple Flux Nodes:
1. **Use VPS hosting** for each
2. **Choose different hosting providers** (diversification)
3. **Different geographic locations** (network diversity)
4. **Monitor each independently**
5. **Stagger maintenance** (don't update all at once)

**Cost comparison:**

**Home hosting multiple nodes:**
- Single ISP connection
- Port conflict issues
- Complex troubleshooting
- Single point of failure
- Lower reliability

**VPS hosting multiple nodes:**
- ~$5-15/month per Cumulus
- ~$15-30/month per Nimbus
- ~$40-80/month per Stratus
- Better uptime
- Easier management
- Professional infrastructure

**Special case - Single VPS with multiple IPs:**

Some VPS providers offer multiple IPs on one server:
- Could theoretically run multiple nodes
- Requires advanced configuration
- Not officially supported
- Resource conflicts possible
- Generally not recommended

**Best practice:** One node per VPS/dedicated server with its own public IP.

**Related:**
- [Troubleshooting Guide - Multiple Nodes Scenario](/docs/guides/troubleshooting-flux-node-status-issues#scenario-6-multiple-nodes-on-same-network)

---

## How often should I check my Flux Node, and what should I monitor?

**Answer:**

Regular monitoring prevents issues before they cause DOS or EXPIRED states. Here's a practical monitoring schedule:

**Daily Monitoring (5 minutes):**

**Check in ZelCore FluxNodes app:**
- Node status (CONFIRMED = good)
- Last reward payment
- Overall health indicator

**Quick SSH check:**
```bash
flux-cli getinfo
```
Verify:
- Daemon is running
- Block height is current
- Connections are 8+

**Weekly Maintenance (15-30 minutes):**

**1. Run multitoolbox:**
```bash
cd ~/zelflux && bash multitoolbox.sh
```
Save output for comparison

**2. Check benchmark:**
```bash
flux-cli getbenchstatus
```
Should show passing status

**3. Verify resource usage:**
```bash
htop  # Check CPU and RAM
df -h # Check disk space
```
Ensure adequate headroom

**4. Test port accessibility:**
Use https://www.yougetsignal.com/tools/open-ports/
Test all four ports

**5. Review logs for errors:**
```bash
pm2 logs flux --lines 50
tail -n 50 ~/.flux/debug.log
```

**6. Check for updates:**
- FluxOS updates
- Daemon updates
- System updates: `sudo apt update`

**Monthly Maintenance (30-60 minutes):**

**1. Deep system review:**
```bash
sudo journalctl -xe | grep -i error
```
Review system logs for errors

**2. Docker cleanup:**
```bash
docker system df  # Check Docker space usage
docker system prune -a  # Clean if needed
```

**3. Security audit:**
```bash
sudo ufw status  # Verify firewall
sudo fail2ban-client status  # If using fail2ban
```

**4. Router configuration review:**
- Log into router
- Verify port forwarding rules intact
- Check for firmware updates

**5. Backup verification:**
- Verify you have wallet recovery phrases secure
- Document node configuration
- Screenshot important settings

**6. Performance trending:**
- Compare multitoolbox outputs over time
- Track resource usage trends
- Note any degradation

**Automated Monitoring (Set and Forget):**

**Uptime monitoring:**
- **UptimeRobot** (free tier available)
- **Pingdom**
- **Better Uptime**

Configure to ping your node's IP:Port and alert on downtime

**Alert setup:**
- Email alerts
- Discord/Telegram webhook
- SMS (for critical nodes)

**Advanced monitoring (optional):**

**Grafana + Prometheus:**
- Real-time dashboards
- Historical metrics
- Resource trending
- Custom alerts

**Node monitoring scripts:**
```bash
# Example daily check script
#!/bin/bash
flux-cli getinfo > /tmp/flux_status.txt
if ! grep -q "blocks" /tmp/flux_status.txt; then
    echo "Flux daemon not responding!" | mail -s "Node Alert" your@email.com
fi
```

**What to watch for - Warning signs:**

**Immediate action needed:**
- Daemon stops responding
- Benchmark failures
- DOS/EXPIRED status
- Ports showing closed
- CPU/RAM consistently >90%
- Disk space &lt;20%

**Investigate soon:**
- Connection count dropping (&lt;8 peers)
- Daemon sync lagging behind network
- Docker containers restarting frequently
- Increasing error count in logs
- Benchmark scores declining

**Monitor:**
- Gradual resource usage increase
- Occasional connection dips
- Minor benchmark score variations

**Maintenance checklist template:**

```
Daily (5 min):
[ ] ZelCore status check
[ ] flux-cli getinfo

Weekly (20 min):
[ ] Run multitoolbox
[ ] Check benchmark
[ ] Review resources (htop, df)
[ ] Test ports externally
[ ] Scan logs for errors
[ ] Check for updates

Monthly (45 min):
[ ] System log review
[ ] Docker cleanup
[ ] Router config review
[ ] Security audit
[ ] Performance trending
[ ] Backup verification
```

**Time investment vs reliability:**

- **10-15 min/week monitoring** = Catch 90% of issues early
- **Automated monitoring** = 24/7 protection with instant alerts
- **Reactive only** = Higher DOS risk, more downtime, lost rewards

**Best practice:** Set up automated uptime monitoring (free UptimeRobot) + weekly manual review. This balances time investment with reliability.

**Related:**
- [Troubleshooting Guide - Prevention and Maintenance](/docs/guides/troubleshooting-flux-node-status-issues#prevention-and-maintenance)

---

## Why is my node showing the wrong IP address or not updating to my current IP?

**Answer:**

Node IP address issues typically occur when your public IP changes (dynamic IP) or when the node is detecting an internal/private IP instead of your public-facing IP address.

**Common symptoms:**

- Node shows 192.168.x.x or 10.x.x.x (private IP) instead of public IP
- IP address in ZelCore doesn't match your actual public IP
- Node status shows incorrect IP after router reboot or ISP change
- Cannot re-confirm node because IP is wrong
- Ports show as accessible but node still has connectivity issues

**Understanding IP detection:**

**Public IP vs Private IP:**

- **Public IP:** Your internet-facing address (visible to the world)
  - Example: 203.0.113.45
  - Assigned by your ISP
  - What Flux network needs to see
  - Required for node connectivity

- **Private IP:** Your local network address (internal only)
  - Examples: 192.168.1.100, 10.0.0.5, 172.16.0.10
  - Assigned by your router
  - Not accessible from internet
  - Cannot be used for Flux node registration

**Common causes of IP detection issues:**

**1. FluxOS detecting private IP instead of public:**

Most common cause - FluxOS configuration is using wrong IP detection method.

**Check your current detected IP:**
```bash
flux-cli getzelnodestatus
```

Look for the "ip" field. If it shows 192.168.x.x, 10.x.x.x, or 172.x.x.x, it's detecting private IP.

**Find your actual public IP:**
```bash
curl ifconfig.me
```
or
```bash
curl icanhazip.com
```

This should show your real public IP address.

**2. Dynamic IP that changed:**

Your ISP assigned you a new public IP address:
- ISP router rebooted
- DHCP lease expired
- ISP changed your assignment
- Power outage caused IP reassignment

**3. Behind NAT/CGNAT (Carrier-Grade NAT):**

Some ISPs use CGNAT which makes running public nodes difficult:
- You're assigned a shared public IP
- True public IP is at ISP level
- Port forwarding may not work properly
- Node cannot be reached from internet

**4. VPS IP configuration issues:**

For VPS-hosted nodes:
- Wrong network interface selected
- IPv6 detected instead of IPv4
- Cloud provider internal IP detected
- Need to configure specific public IP

**How to fix IP detection issues:**

**Solution 1: Update FluxOS IP configuration**

If FluxOS is detecting wrong IP:

1. **Find your public IP:**
   ```bash
   curl ifconfig.me
   ```
   Note this IP address.

2. **Update FluxOS configuration:**
   ```bash
   nano ~/.fluxbenchmark/benchmark_config.json
   ```

3. **Find the IP setting** and update to your public IP

4. **Restart FluxOS:**
   ```bash
   pm2 restart flux
   pm2 restart fluxbenchd
   ```

5. **Verify new IP:**
   ```bash
   flux-cli getzelnodestatus
   ```

**Solution 2: Re-confirm node with correct IP**

If your public IP changed:

1. **Verify your current public IP:**
   ```bash
   curl ifconfig.me
   ```

2. **Check daemon is synced:**
   ```bash
   flux-cli getinfo
   ```
   Compare block height with https://explorer.runonflux.io

3. **Open ZelCore FluxNodes app**

4. **Select your node**

5. **Click "Update IP"** or **"Re-confirm Node"**

6. **Enter your current public IP** (from step 1)

7. **Confirm transaction** (costs 1 FLUX fee)

8. **Wait for blockchain confirmations** (10-20 minutes)

9. **Verify update:**
   ```bash
   flux-cli getzelnodestatus
   ```
   Should now show correct IP.

**Solution 3: Configure static/reserved IP**

**For home hosting:**

Request static IP from ISP:
- Contact your internet provider
- Request static IP service (may cost extra)
- Eliminates IP change issues
- Permanent solution for home nodes

**Or configure DHCP reservation:**
- Log into router
- Find node's MAC address
- Create DHCP reservation for node's internal IP
- Ensures internal IP stays constant
- Still need to handle public IP changes from ISP

**For VPS hosting:**

Most VPS providers offer static IPs automatically:
- Verify in VPS control panel
- Note the assigned public IP
- Configure FluxOS to use that specific IP
- Should not change unless you modify VPS

**Solution 4: Check for CGNAT issues**

**Test if you're behind CGNAT:**

1. **Find your public IP as seen by your node:**
   ```bash
   curl ifconfig.me
   ```

2. **Check what IP your router reports:**
   - Log into router admin panel
   - Look for "WAN IP" or "Public IP"

3. **If these don't match:**
   - You're likely behind CGNAT
   - Your "public IP" is actually another private IP (100.64.x.x is common CGNAT range)
   - Node operation will be very difficult

**CGNAT solutions:**

- **Request public IP from ISP** (may cost extra or require business plan)
- **Use VPN with port forwarding** (some VPNs offer public IPs)
- **Switch to VPS hosting** (recommended - avoids all CGNAT issues)
- **Use IPv6 if ISP provides** (advanced configuration)

**Solution 5: VPS-specific IP configuration**

For cloud/VPS nodes detecting wrong IP:

1. **Find your VPS public IP:**
   - Check VPS provider control panel
   - Note the assigned public IPv4 address

2. **Check network interfaces:**
   ```bash
   ip addr show
   ```
   Look for your public IP in the output.

3. **If public IP not shown:**
   - Some cloud providers use NAT
   - Public IP is at hypervisor level
   - Configure FluxOS to use specific IP from control panel

4. **Update FluxOS config** with public IP from provider

**Verification steps:**

After fixing IP detection:

1. **Verify FluxOS shows correct IP:**
   ```bash
   flux-cli getzelnodestatus | grep ip
   ```

2. **Test port accessibility with your public IP:**
   - Go to https://www.yougetsignal.com/tools/open-ports/
   - Enter your public IP
   - Test ports 16125, 16127, 16224, 16225
   - All should show "open"

3. **Check in ZelCore FluxNodes app:**
   - Node should show correct public IP
   - Status should be CONFIRMED
   - No connectivity warnings

4. **Run multitoolbox:**
   ```bash
   cd ~/zelflux && bash multitoolbox.sh
   ```
   Should show correct public IP and all ports accessible.

**Prevention:**

**For home hosting:**
- Get static IP from ISP
- Set up monitoring to alert on IP changes
- Document re-confirmation process for quick recovery

**For VPS hosting:**
- Use providers that guarantee static IPs
- Document your assigned IP
- Configure FluxOS explicitly (don't rely on auto-detection)

**General:**
- Check IP detection during initial setup
- Verify after any network changes
- Run multitoolbox regularly to catch issues early

**When IP changes are unavoidable:**

If you have dynamic IP that changes periodically:

1. **Monitor for changes:**
   - Set up script to check IP daily
   - Alert yourself when it changes

2. **Re-confirm promptly:**
   - Don't wait for DOS/EXPIRED status
   - Re-confirm within hours of IP change
   - Minimizes downtime and lost rewards

3. **Consider VPS migration:**
   - If IP changes frequently, home hosting may not be viable
   - VPS provides stable IP and better reliability
   - Cost vs downtime calculation

**Related:**
- [Troubleshooting Guide - Port Configuration](/docs/guides/troubleshooting-flux-node-status-issues#step-3-verify-port-configuration)
- [Node Re-confirmation Process](/docs/guides/troubleshooting-flux-node-status-issues#step-8-re-confirming-your-node-for-expirednot-confirmed)

---

## How do I check what my node's current public IP address is?

**Answer:**

There are multiple ways to verify your node's public IP address, both from the node itself and externally:

**Method 1: From the node via command line (Most reliable)**

SSH into your node and run:

```bash
curl ifconfig.me
```

or alternatively:

```bash
curl icanhazip.com
```

or:

```bash
curl api.ipify.org
```

**Method 2: Check what FluxOS has registered**

See what IP your node thinks it has:

```bash
flux-cli getzelnodestatus
```

Look for the "ip" field in the output. This should match your public IP from Method 1.

**Method 3: Check in ZelCore FluxNodes app**

1. Open ZelCore
2. Go to FluxNodes app
3. Select your node
4. IP address is displayed in node details

**Method 4: Check your router (for home hosting)**

1. Log into router admin panel
2. Look for "WAN IP", "Public IP", or "Internet IP"
3. This is the IP assigned by your ISP

**Method 5: External website (from any device)**

From any computer on your home network:
- Visit https://whatismyipaddress.com
- Shows your public IP as seen from the internet

**Verification - Do all methods match?**

**If they all match:** Your IP detection is working correctly.

**If FluxOS shows different IP than external checks:**
- FluxOS is detecting wrong IP (likely private IP)
- See previous FAQ: "Why is my node showing the wrong IP address?"
- Need to update FluxOS configuration

**If router shows different IP than external checks:**
- You may be behind CGNAT (Carrier-Grade NAT)
- ISP is using shared public IPs
- Difficult to run public nodes in this setup
- Contact ISP for true public IP or consider VPS hosting

**Best practice check:**

Run this complete verification:

```bash
echo "Public IP (external):" && curl -s ifconfig.me
echo ""
echo "FluxOS registered IP:" && flux-cli getzelnodestatus | grep -o '"ip":"[^"]*"'
```

Both should show the same IP address. If they don't, you have an IP detection issue that needs fixing.

**When to check your IP:**

- During initial node setup (before confirming)
- After router reboots or power outages
- After ISP changes or service interruptions
- When node enters DOS or EXPIRED status
- Monthly as part of routine maintenance
- Before re-confirming your node

**Related:**
- [Troubleshooting Guide - IP Detection](/docs/guides/troubleshooting-flux-node-status-issues)
- [Port Configuration](/docs/guides/troubleshooting-flux-node-status-issues#step-3-verify-port-configuration)

---

## Where can I get help if the troubleshooting guide doesn't solve my issue?

**Answer:**

The Flux community offers multiple support channels. Here's where to get help and what to include in your request:

**Official Flux Discord (Primary support):**

**Best channels:**
- **#node-support** - For FluxOS, daemon, and node operation issues
- **#general-support** - For ZelCore and account questions
- **#technical-discussion** - For in-depth technical issues

**Join:** https://discord.gg/runonflux

**Response time:** Usually within 1-24 hours depending on complexity

**Flux Telegram:**

Active community support with real-time assistance
- Good for quick questions
- Community often responds faster than Discord
- Less structured than Discord

**Flux Official Forum:**

- In-depth technical discussions
- Searchable archive of solved issues
- Good for complex problems requiring detailed explanation

**What to include in support requests:**

**Essential information:**

1. **Node tier:** Cumulus, Nimbus, or Stratus

2. **Full multitoolbox output:**
   ```bash
   bash multitoolbox.sh > output.txt
   ```
   Share the entire output (use pastebin for long output)

3. **Daemon info:**
   ```bash
   flux-cli getinfo
   flux-cli getbenchstatus
   ```

4. **Network setup:**
   - VPS or home-hosted?
   - Hosting provider (if VPS)
   - Home router model (if home-hosted)
   - Port forwarding method (manual or UPnP)

5. **Timeline:**
   - When did the issue start?
   - What changed before it started?
   - Has it worked before?

6. **Steps you've tried:**
   - List troubleshooting steps already attempted
   - Results of each attempt

**How to format for better help:**

**Good support request example:**

```
ISSUE: Flux Node stuck in DOS state

Tier: Nimbus
Hosting: Contabo VPS
Setup: Manual port forwarding

Timeline:
- Node was CONFIRMED and working fine for 2 weeks
- Entered DOS state 3 days ago
- No VPS changes or updates

Troubleshooting tried:
1. Ran multitoolbox (attached)
2. Verified daemon synced (block 12345, network is 12346)
3. Benchmark passing
4. All ports show open externally
5. Restarted FluxOS (pm2 restart flux)
6. Waiting for DOS to expire

Multitoolbox output: [paste or pastebin link]

Question: Is there anything else I should check?
Should I re-confirm once DOS expires?
```

**Poor support request example:**

```
my node is broken help
```

**Using Pastebin for long output:**

For multitoolbox or long logs:
1. Visit https://pastebin.com
2. Paste your output
3. Set expiration (1 week recommended)
4. Click "Create New Paste"
5. Share the link in support channel

**Don't share in support requests:**

- Private keys or seed phrases (NEVER)
- Wallet passwords
- Router login credentials
- Personal identifying information

**Response expectations:**

**Quick questions:** Usually answered within hours

**Complex issues:** May require:
- Multiple back-and-forth exchanges
- Testing different solutions
- Waiting for DOS/expiration periods
- Escalation to developers

**Be patient and responsive:**
- Check back for follow-up questions
- Provide requested information promptly
- Update thread when issue is resolved (helps others)

**Before asking - search first:**

Check if your issue is already documented:
1. Search Discord #node-support channel
2. Review troubleshooting guide
3. Check Flux documentation
4. Search Telegram history

**Common questions already covered:**
- Port forwarding setup
- DOS/EXPIRED recovery
- Daemon sync issues
- Benchmark failures
- Post-update problems

**Escalation path:**

For issues that remain unsolved:
1. Community support (Discord/Telegram)
2. Detailed issue in Forum
3. GitHub issue (if suspected bug)
4. Direct team contact (for critical issues only)

**Support resources summary:**

- **Discord #node-support:** https://discord.gg/runonflux
- **Telegram:** Official Flux Telegram group
- **Documentation:** https://docs.runonflux.io
- **Forum:** Official Flux community forum
- **GitHub:** https://github.com/RunOnFlux (for bug reports)

**Community guidelines:**

- Be respectful and patient
- Don't spam multiple channels with same question
- Search before asking
- Help others when you can
- Share solutions when your issue is resolved

**Remember:** The Flux community is helpful, but providing detailed information in your initial request significantly speeds up getting help.

**Related:**
- [Troubleshooting Guide - When to Seek Help](/docs/guides/troubleshooting-flux-node-status-issues#when-to-seek-help)
