---
sidebar_position: 5
---

# Troubleshooting Flux Node Status Issues

## Overview

This comprehensive guide addresses the most common Flux Node operational issues, including DOS (Denial of Service), EXPIRED, and "Flux not confirmed" states. Despite nodes sometimes passing benchmarks, these status problems can prevent your node from participating in the Flux network and earning rewards.

This guide covers systematic troubleshooting for all node tiers (Cumulus, Nimbus, and Stratus) and helps you diagnose and resolve network configuration, daemon synchronization, and post-update issues.

## Prerequisites

- A Flux Node (Cumulus, Nimbus, or Stratus tier)
- SSH access to your node
- Basic command-line knowledge
- Access to your router's admin panel (for network troubleshooting)
- ZelCore wallet with FluxNodes app installed

## Understanding Node States

### DOS (Denial of Service) State

**What it means:** Your node has been temporarily banned from the network due to repeated failures to respond to network requests.

**Common causes:**
- Port forwarding not properly configured
- UPnP failures or conflicts
- Firewall blocking incoming connections
- Node repeatedly going offline
- Daemon sync issues causing timeouts

**Impact:** Node cannot earn rewards and is excluded from the network until the DOS status expires.

### EXPIRED State

**What it means:** Your node's confirmation transaction has expired on the blockchain, usually after a prolonged period of being offline or unresponsive.

**Common causes:**
- Extended downtime (node offline for too long)
- Collateral transaction became invalid
- Network connectivity loss during critical confirmation period
- Daemon fell out of sync for extended period

**Impact:** Node must be re-confirmed with a new transaction to rejoin the network.

### Flux Not Confirmed / Not Confirmed State

**What it means:** The network cannot verify your node's registration or the confirmation transaction hasn't been properly recognized.

**Common causes:**
- Recent node setup where confirmation is still pending
- Daemon not fully synced when confirmation was attempted
- Network propagation delays
- Incorrect node configuration in ZelCore
- Blockchain reorganization affecting confirmation transaction

**Impact:** Node appears in your ZelCore but isn't active on the network.

## Node Tier Requirements

Before troubleshooting, verify your node meets the tier requirements:

### Cumulus Requirements
- **CPU:** 2 cores (4 recommended)
- **RAM:** 8 GB
- **SSD:** 220 GB
- **Bandwidth:** 25 Mbps
- **Collateral:** 1,000 FLUX

### Nimbus Requirements
- **CPU:** 4 cores (6 recommended)
- **RAM:** 32 GB
- **SSD:** 440 GB
- **Bandwidth:** 50 Mbps
- **Collateral:** 12,500 FLUX

### Stratus Requirements
- **CPU:** 8 cores (12 recommended)
- **RAM:** 64 GB
- **SSD:** 880 GB
- **Bandwidth:** 100 Mbps
- **Collateral:** 40,000 FLUX

## Step-by-Step Troubleshooting

### Step 1: Run Multitoolbox Diagnostic

Multitoolbox is the essential diagnostic tool for Flux Nodes. It provides comprehensive information about your node's status, configuration, and potential issues.

#### Access Multitoolbox:

```bash
cd ~/ && wget https://raw.githubusercontent.com/RunOnFlux/fluxnode-multitool/master/multitoolbox.sh && bash multitoolbox.sh
```

Or if already installed:

```bash
cd ~/zelflux && bash multitoolbox.sh
```

#### What to Check in Multitoolbox Output:

1. **Flux Daemon Status:**
   - Is the daemon running and synced?
   - Current block height vs network height
   - Connection count

2. **Benchmark Status:**
   - Is benchmark running?
   - Recent benchmark results (passed/failed)
   - Benchmark score

3. **Network Configuration:**
   - External IP address
   - Ports status (open/closed)
   - UPnP status

4. **FluxOS Status:**
   - Version number
   - Sync status
   - API connectivity

5. **Docker Status:**
   - Running containers
   - Syncthing status
   - Resource usage

**Save the output:** When seeking support, always include your multitoolbox output. Copy the full output to a text file for reference.

### Step 2: Check Daemon Synchronization

A fully synchronized daemon is critical for node operations. Many status issues stem from sync problems.

#### Check Sync Status:

```bash
flux-cli getinfo
```

**Look for:**
- `"blocks"`: Your current block height
- `"connections"`: Should be 8+ for healthy connectivity

#### Compare with Network:

```bash
flux-cli getblockchaininfo
```

Check the `"blocks"` and `"headers"` values. They should match or be very close.

#### If Daemon is Not Synced:

**Option 1: Wait for natural sync** (can take hours)

**Option 2: Bootstrap the blockchain** (faster, 30-60 minutes):

```bash
cd ~/ && wget https://fluxnodeservice.com/daemon_bootstrap.sh && bash daemon_bootstrap.sh
```

**Option 3: Restart daemon:**

```bash
flux-cli stop
sleep 10
fluxd
```

Wait 5 minutes and check sync status again with `flux-cli getinfo`.

#### Daemon Connection Errors

If you encounter connection errors when trying to run daemon commands, you may see errors like:

**Common daemon connection errors:**
- `error: couldn't connect to server: unknown (code -1)`
- `error: Could not connect to the server`
- `connect ECONNREFUSED 127.0.0.1:16127`
- `socket hang up`
- Connection timeout errors
- RPC connection failed

**What these errors mean:**

These errors indicate that the Flux daemon is either not running, not responding, or the RPC interface is not accessible. The daemon must be running and responsive for your node to function.

**Immediate diagnostic steps:**

**1. Check if daemon process is running:**

```bash
ps aux | grep fluxd
```

Should show `fluxd` process running. If nothing appears, daemon is not running.

**2. Check daemon logs for errors:**

```bash
tail -50 ~/.flux/debug.log
```

Look for recent error messages that might explain why daemon stopped or won't start.

**3. Test daemon responsiveness:**

```bash
flux-cli getinfo
```

If this returns data, daemon is running. If error, daemon is not responding.

**Solutions for daemon connection errors:**

**Solution 1: Daemon not running - Start it**

```bash
fluxd
```

Wait 2-3 minutes, then test:

```bash
flux-cli getinfo
```

**Solution 2: Daemon crashed - Check why**

View recent logs to identify crash cause:

```bash
tail -100 ~/.flux/debug.log
```

Common crash reasons:
- Corrupted database
- Insufficient disk space
- Memory issues
- Configuration errors
- Port conflicts

**Solution 3: Daemon stuck - Force restart**

```bash
# Stop daemon (may timeout if stuck)
flux-cli stop

# Wait
sleep 10

# If still running, force kill
pkill -9 fluxd

# Wait
sleep 5

# Start fresh
fluxd
```

Monitor logs during startup:

```bash
tail -f ~/.flux/debug.log
```

**Solution 4: RPC port blocked - Check firewall**

Verify RPC port (16127) is accessible locally:

```bash
netstat -tuln | grep 16127
```

Should show `127.0.0.1:16127` listening.

If not showing, daemon may not have bound to RPC port.

**Check firewall isn't blocking local RPC:**

```bash
sudo ufw status
```

Local RPC (127.0.0.1:16127) should not need firewall rules, but verify no overly restrictive rules.

**Solution 5: Corrupted configuration - Reset**

If daemon won't start due to configuration errors:

```bash
# Backup current config
cp ~/.flux/flux.conf ~/.flux/flux.conf.backup

# Edit configuration
nano ~/.flux/flux.conf
```

Verify these critical settings exist:
```
rpcuser=your_rpc_username
rpcpassword=your_rpc_password
rpcallowip=127.0.0.1
rpcport=16127
server=1
daemon=1
```

Save and try starting daemon again.

**Solution 6: Corrupted blockchain database - Resync**

If daemon crashes on startup mentioning database corruption:

**Option A: Bootstrap (recommended - faster)**

```bash
# Stop daemon
flux-cli stop

# Wait
sleep 10

# Run bootstrap
cd ~/ && wget https://fluxnodeservice.com/daemon_bootstrap.sh && bash daemon_bootstrap.sh
```

**Option B: Full resync (slower)**

```bash
# Stop daemon
flux-cli stop

# Backup wallet if you have funds in daemon wallet
cp ~/.flux/wallet.dat ~/wallet_backup.dat

# Remove blockchain data (keeps wallet)
rm -rf ~/.flux/blocks
rm -rf ~/.flux/chainstate

# Restart daemon
fluxd
```

Will resync from genesis (takes 4-12 hours).

**Solution 7: Check disk space**

Daemon may fail to start if disk is full:

```bash
df -h
```

If root partition (/) is >95% full:
1. Free up space (see Scenario 7 in this guide)
2. Restart daemon after freeing space

**Solution 8: Check system resources**

Daemon may crash due to insufficient RAM:

```bash
free -h
```

If swap is heavily used or RAM is exhausted:
- Close unnecessary services
- Restart node to clear memory
- Consider upgrading to higher tier if consistently maxed

**Monitoring daemon health:**

After resolving connection errors, monitor daemon:

**1. Watch daemon status:**

```bash
watch -n 10 flux-cli getinfo
```

Should show increasing block count and stable connections.

**2. Monitor daemon logs:**

```bash
tail -f ~/.flux/debug.log
```

Watch for repeated errors or warnings.

**3. Check daemon uptime:**

Once daemon is running, verify it stays running:

```bash
# Check after 30 minutes
flux-cli uptime
```

**Prevention of daemon connection errors:**

**1. Enable daemon auto-restart:**

Create systemd service or cron job to automatically restart daemon if it crashes.

**2. Monitor disk space:**
- Keep 20%+ free space
- Regular cleanup
- Alerts at 80% usage

**3. Keep daemon updated:**
- Check for daemon updates monthly
- Update before issues occur
- Follow Flux announcement channels

**4. Regular maintenance:**
- Weekly daemon status checks
- Monthly log review
- Verify connections and sync

**5. Resource monitoring:**
- Ensure adequate RAM/CPU
- Watch for resource exhaustion
- Upgrade tier if needed

**When daemon errors persist:**

If daemon connection errors continue after trying these solutions:

1. **Join Flux Discord #node-support**
   - Provide full error messages
   - Share daemon log excerpts
   - Describe troubleshooting steps tried

2. **Include in support request:**
   - Output of `flux-cli getinfo` (if works)
   - Last 50 lines of debug.log
   - System resource status (RAM, disk, CPU)
   - When error started occurring
   - Recent changes to node/system

3. **Consider full node reinstall:**
   - If daemon corruption is severe
   - After backing up collateral and keys
   - Fresh installation may be faster than debugging
   - Preserve your collateral transaction info

**Expected timeline:**
- Simple daemon restart: 2-5 minutes
- Daemon crash recovery: 10-30 minutes
- Bootstrap resync: 30-60 minutes
- Full blockchain resync: 4-12 hours

### Step 3: Verify Port Configuration

Port forwarding issues are the most common cause of DOS and connectivity problems.

#### Required Ports for Flux Nodes:

- **16125** - Flux daemon P2P
- **16127** - Flux daemon RPC
- **16224** - FluxOS API
- **16225** - FluxOS communication

All ports must be accessible from the internet to your node's internal IP address.

#### Test Port Accessibility:

Use multitoolbox or manually test:

```bash
# From within your node
sudo ufw status
```

Should show ports 16125, 16127, 16224, 16225 as ALLOW.

#### External Port Testing:

From an external source (your home computer), visit:
- https://www.yougetsignal.com/tools/open-ports/

Enter your node's public IP and test each port (16125, 16127, 16224, 16225).

### Step 4: Configure Port Forwarding (UPnP vs Manual)

#### Understanding UPnP:

UPnP (Universal Plug and Play) automatically configures port forwarding on compatible routers. However, UPnP can:
- Fail silently
- Conflict with existing rules
- Be disabled on enterprise networks
- Not work with certain router models

#### Checking UPnP Status:

In multitoolbox, look for UPnP status. If it shows "failed" or "disabled":

**Option 1: Enable UPnP on your router**

1. Log into your router admin panel (usually 192.168.1.1 or 192.168.0.1)
2. Find UPnP settings (location varies by router model)
3. Enable UPnP
4. Save and reboot router
5. Restart your Flux Node
6. Run multitoolbox to verify

**Option 2: Manual Port Forwarding (Recommended)**

Manual port forwarding is more reliable and recommended for serious node operators:

1. **Find your node's internal IP address:**
   ```bash
   hostname -I
   ```
   Example output: `192.168.1.100`

2. **Log into your router admin panel**

3. **Locate Port Forwarding settings:**
   - May be under "Advanced Settings", "NAT", "Virtual Servers", or "Port Forwarding"

4. **Create port forwarding rules:**

   For each port (16125, 16127, 16224, 16225), create a rule:
   - **External Port:** [port number]
   - **Internal Port:** [same port number]
   - **Internal IP:** [your node's IP, e.g., 192.168.1.100]
   - **Protocol:** TCP (or Both TCP/UDP)
   - **Enabled:** Yes

5. **Save all rules and reboot your router**

6. **Verify with multitoolbox**

#### Static IP Configuration:

To prevent your node's internal IP from changing:

**Option A: DHCP Reservation** (Recommended)
1. In your router, find DHCP settings
2. Create a reservation linking your node's MAC address to a specific IP
3. This ensures the node always gets the same internal IP

**Option B: Static IP on Node**

Edit netplan configuration (Ubuntu example):

```bash
sudo nano /etc/netplan/01-netcfg.yaml
```

Change from DHCP to static (example):

```yaml
network:
  version: 2
  ethernets:
    ens3:
      dhcp4: no
      addresses: [192.168.1.100/24]
      gateway4: 192.168.1.1
      nameservers:
        addresses: [8.8.8.8, 8.8.4.4]
```

Apply changes:

```bash
sudo netplan apply
```

### Step 5: Router DMZ Configuration Issues

#### What is DMZ?

DMZ (Demilitarized Zone) places a device outside the router's firewall, exposing all ports to the internet. While this can "solve" port forwarding issues, it has significant security implications.

#### DMZ Conflicts with Flux Nodes:

If you previously set up DMZ for your node:

1. **DMZ can conflict with manual port forwarding** - Router may ignore specific forwarding rules
2. **Security risk** - All ports on your node are exposed
3. **Single device limitation** - Only one device can be in DMZ

#### Recommended Approach:

**Disable DMZ and use manual port forwarding instead:**

1. Log into router admin panel
2. Find DMZ settings (usually under Advanced or Security)
3. Disable DMZ for your node's IP
4. Save changes
5. Configure manual port forwarding (see Step 4)
6. Restart node and router
7. Test with multitoolbox

### Step 6: Resolve Benchmark Failures

Even if your node passes benchmarks occasionally, frequent failures indicate underlying issues.

#### Check Benchmark Status:

```bash
flux-cli getbenchstatus
```

Or use multitoolbox for detailed benchmark information.

#### Common Benchmark Failure Causes:

**1. Insufficient Resources:**
- CPU at or above 80% usage
- RAM exhausted
- Disk space critically low
- Bandwidth throttling

**Check resources:**

```bash
# CPU and RAM
htop

# Disk space
df -h

# Should have 20%+ free space on root partition
```

**Solutions:**
- Close unnecessary applications
- Upgrade server tier if resources are consistently maxed
- Clean up old Docker images: `docker system prune -a`

**2. Daemon Not Synced:**

Benchmark will fail if daemon isn't fully synchronized. Return to Step 2.

**3. Network Connectivity:**

Poor internet connection or packet loss causes benchmark failures.

**Test connection:**

```bash
# Ping test
ping -c 100 8.8.8.8

# Look for packet loss percentage
```

If packet loss >5%, contact your hosting provider or ISP.

**4. Docker/Syncthing Issues:**

Check Docker status:

```bash
docker ps -a
```

All containers should be "Up". If any show "Exited" or "Restarting":

```bash
docker logs [container-name]
```

Review logs for errors.

**Restart Docker:**

```bash
sudo systemctl restart docker
```

### Step 7: Post-Update Troubleshooting

Updates to FluxOS, daemon, or Docker can introduce temporary issues.

#### After Updating FluxOS:

1. **Wait 10-15 minutes** for FluxOS to fully restart and resync

2. **Check FluxOS status:**
   ```bash
   pm2 status
   ```

   Both `flux` and `fluxbenchd` should show "online"

3. **If status shows "errored":**
   ```bash
   pm2 logs flux
   pm2 logs fluxbenchd
   ```

   Review errors

4. **Restart FluxOS:**
   ```bash
   pm2 restart flux
   pm2 restart fluxbenchd
   ```

#### After Updating Flux Daemon:

1. **Verify daemon is running:**
   ```bash
   flux-cli getinfo
   ```

2. **If daemon won't start:**
   ```bash
   # Check daemon logs
   tail -f ~/.flux/debug.log
   ```

3. **Common fix - restart daemon:**
   ```bash
   flux-cli stop
   sleep 10
   fluxd
   ```

#### After System Updates (apt update/upgrade):

System updates can affect Docker and Syncthing:

1. **Restart Docker service:**
   ```bash
   sudo systemctl restart docker
   ```

2. **Restart node:**
   ```bash
   sudo reboot
   ```

3. **After reboot, verify all services:**
   - Run multitoolbox
   - Check daemon sync
   - Verify FluxOS status with `pm2 status`

### Step 8: Re-confirming Your Node (For EXPIRED/Not Confirmed)

If your node is EXPIRED or stuck in "Not Confirmed" state, you need to re-confirm it.

#### Prerequisites:

- Daemon must be fully synced
- Benchmark must be passing
- All ports must be properly forwarded
- Node must be accessible from the internet

#### Re-confirmation Process:

1. **In ZelCore (Desktop or Mobile):**
   - Open the **FluxNodes** app
   - Select your node
   - Click **"Confirm Node"**

2. **Enter your node details:**
   - Node IP address (public/external IP)
   - Node collateral address (where your 1000/12500/40000 FLUX is)
   - Zelcore identity (your ZelID)

3. **Send confirmation transaction:**
   - This requires 1 FLUX transaction fee
   - Ensure you have sufficient balance

4. **Wait for confirmations:**
   - Transaction needs blockchain confirmations (typically 6-10 minutes)
   - Monitor in ZelCore FluxNodes app

5. **Verify on node:**
   ```bash
   flux-cli getzelnodestatus
   ```

   Should show "CONFIRMED" after transaction has enough confirmations

#### If Confirmation Fails:

- **Daemon not synced:** Return to Step 2
- **Ports not accessible:** Return to Steps 3-5
- **Benchmark failing:** Return to Step 6
- **Wrong IP address:** Verify you used your PUBLIC IP, not internal IP
- **Insufficient collateral:** Verify exact collateral amount in address (1000/12500/40000 FLUX)

### Step 9: Firewall Configuration

Ubuntu's UFW (Uncomplicated Firewall) must allow Flux traffic.

#### Check Current Firewall Rules:

```bash
sudo ufw status
```

#### Expected Output:

```
Status: active

To                         Action      From
--                         ------      ----
22/tcp                     ALLOW       Anywhere
16125                      ALLOW       Anywhere
16127                      ALLOW       Anywhere
16224                      ALLOW       Anywhere
16225                      ALLOW       Anywhere
```

#### If Ports Are Missing:

```bash
sudo ufw allow 16125/tcp
sudo ufw allow 16127/tcp
sudo ufw allow 16224/tcp
sudo ufw allow 16225/tcp
sudo ufw reload
```

#### If UFW is Disabled:

```bash
sudo ufw enable
```

Then add the rules above.

**Important:** Don't disable UFW entirely as it provides essential security.

### Step 10: Check Network Connectivity and DNS

DNS resolution issues can prevent your node from communicating properly.

#### Test DNS Resolution:

```bash
nslookup explorer.runonflux.io
```

Should resolve to an IP address. If it fails:

#### Fix DNS:

Edit resolv.conf:

```bash
sudo nano /etc/resolv.conf
```

Add Google DNS servers:

```
nameserver 8.8.8.8
nameserver 8.8.4.4
```

Save and test again.

#### For Permanent DNS Configuration:

Edit netplan (if using):

```bash
sudo nano /etc/netplan/01-netcfg.yaml
```

Add nameservers under your network interface:

```yaml
nameservers:
  addresses: [8.8.8.8, 8.8.4.4]
```

Apply:

```bash
sudo netplan apply
```

## Common Issue Scenarios and Solutions

### Scenario 1: Node in DOS State After Working Fine

**Symptoms:**
- Node was confirmed and working
- Suddenly entered DOS state
- Benchmark still passing

**Likely Cause:** Network connectivity interruption or daemon sync issue

**Solution:**
1. Run multitoolbox and check all statuses
2. Verify daemon is fully synced (Step 2)
3. Test all ports are accessible (Step 3)
4. If ports are closed, check router settings haven't changed
5. Restart FluxOS: `pm2 restart flux`
6. Wait for DOS to expire (usually 24-48 hours)
7. Monitor to ensure issue doesn't recur

**Prevention:**
- Use static IP or DHCP reservation
- Monitor node regularly with automated alerts
- Keep daemon and FluxOS updated

### Scenario 2: EXPIRED After Router Reset or Power Outage

**Symptoms:**
- Power outage or router was reset
- Node shows EXPIRED when power restored
- Everything appears to be working locally

**Likely Cause:** Extended downtime caused expiration

**Solution:**
1. Verify daemon is synced (Step 2)
2. Verify all ports are forwarded correctly (router reset may clear rules) (Steps 3-5)
3. Run multitoolbox to confirm everything is healthy
4. Re-confirm node through ZelCore (Step 8)
5. Monitor for 24-48 hours to ensure stability

**Prevention:**
- Use UPS (Uninterruptible Power Supply) for your node
- Configure router to save port forwarding in non-volatile memory
- Document your port forwarding configuration for quick recovery

### Scenario 3: "Not Confirmed" Status, But Benchmark Passes

**Symptoms:**
- Fresh node setup or re-confirmation
- Benchmark passes
- Ports show as open
- Status remains "Not Confirmed"

**Likely Cause:** Daemon wasn't fully synced during confirmation OR network propagation delay

**Solution:**
1. Verify daemon is 100% synced:
   ```bash
   flux-cli getinfo
   ```
   Compare blocks to https://explorer.runonflux.io

2. Check confirmation transaction on blockchain:
   - In ZelCore, find your node's confirmation transaction
   - Check on explorer.runonflux.io
   - Verify it has 10+ confirmations

3. If daemon was not synced during confirmation:
   - Wait for daemon to fully sync
   - Re-confirm through ZelCore (Step 8)

4. If transaction is confirmed but node still not recognized:
   - Wait 30-60 minutes for network propagation
   - Restart FluxOS: `pm2 restart flux`
   - Check status again

5. Verify IP address used in confirmation matches node's public IP:
   ```bash
   curl ifconfig.me
   ```

### Scenario 4: Benchmark Fails After Docker/Syncthing Update

**Symptoms:**
- Node was working
- System updated Docker or Syncthing
- Benchmark now failing
- DOS state imminent or active

**Likely Cause:** Docker containers not restarted properly or Syncthing configuration issue

**Solution:**
1. Check Docker containers:
   ```bash
   docker ps -a
   ```

2. Restart any stopped containers:
   ```bash
   docker restart [container-name]
   ```

3. Restart Docker service:
   ```bash
   sudo systemctl restart docker
   ```

4. Check Syncthing:
   ```bash
   pm2 logs flux | grep syncthing
   ```

5. Full node restart:
   ```bash
   sudo reboot
   ```

6. After reboot, run multitoolbox
7. Monitor benchmark status for 1 hour

### Scenario 5: UPnP Shows Failed Despite Being Enabled

**Symptoms:**
- UPnP enabled in router
- Multitoolbox shows UPnP failed
- Ports appear closed

**Likely Cause:** UPnP doesn't work reliably on all routers OR conflicting manual rules

**Solution:**
1. **Abandon UPnP** - Switch to manual port forwarding (Step 4, Option 2)
2. In router, disable UPnP
3. Delete any existing UPnP-created rules
4. Manually create port forwarding for all 4 ports
5. Save and reboot router
6. Run multitoolbox to verify ports are open

**Why this works:** Manual port forwarding is more reliable and doesn't depend on UPnP protocol support.

### Scenario 6: Multiple Nodes on Same Network

**Symptoms:**
- Running multiple Flux Nodes behind one router
- Port conflicts or nodes interfering with each other
- Some nodes DOS, others working

**Likely Cause:** Port conflicts - each node needs unique ports OR unique public IP

**Solution:**

**Option 1: Different Public IPs** (Best)
- Use VPS/hosting with dedicated IPs for each node
- Or request multiple public IPs from ISP

**Option 2: Different Ports** (Complex)
- Not officially supported for Flux Nodes
- Each node would need custom port configuration
- Requires advanced networking knowledge
- Not recommended

**Option 3: Different Locations**
- Host nodes at different physical locations
- Use VPS hosting for some nodes

**Recommended:** Don't run multiple Flux Nodes behind a single residential router. Use VPS hosting.

### Scenario 7: Disk Full / Storage Issues Preventing Node Operation

**Symptoms:**
- Node shows errors or stops responding
- Benchmark failures
- Docker containers failing to start
- FluxOS errors related to disk space
- Multitoolbox warnings about storage

**Likely Cause:** Insufficient disk space or disk filling up over time

**Solution:**

**Step 1: Check disk usage immediately**

```bash
df -h
```

**Look for root partition (/) usage:**
- Should have **20%+ free space** minimum
- If usage is 90%+, this is critical
- If 95%+, node will fail operations

**Example output:**
```
Filesystem      Size  Used Avail Use% Mounted on
/dev/sda1       220G  198G   12G  94% /
```

In this example, 94% usage is too high and will cause issues.

**Step 2: Identify what's using space**

Check largest directories:

```bash
du -h --max-depth=1 / | sort -h
```

Common culprits:
- Docker images and containers
- Flux blockchain data
- System logs
- Syncthing data
- Temp files

**Step 3: Clean up Docker (usually biggest space saver)**

**Option 1: Remove unused images and containers (safe)**

```bash
docker system prune -a
```

This removes:
- Stopped containers
- Unused images
- Unused networks
- Build cache

**Confirm when prompted.** This is safe and often frees 10-50GB.

**Option 2: Check Docker disk usage**

```bash
docker system df
```

Shows space used by:
- Images
- Containers
- Volumes
- Build cache

**Step 4: Clean system logs**

Check log sizes:

```bash
sudo journalctl --disk-usage
```

If logs are using multiple GB:

```bash
sudo journalctl --vacuum-time=7d
```

Keeps only last 7 days of logs.

**Step 5: Clean package cache**

```bash
sudo apt clean
sudo apt autoclean
sudo apt autoremove
```

Removes old package files.

**Step 6: Check Flux daemon blockchain size**

```bash
du -sh ~/.flux
```

Should be reasonable size (10-30GB typically).

If unusually large:
- May have corrupted database
- Consider resyncing with bootstrap (see Step 2)

**Step 7: Check Syncthing usage**

```bash
du -sh ~/zelflux
```

If very large (50GB+), may need investigation.

**Step 8: Find large files**

```bash
find / -type f -size +1G 2>/dev/null
```

Lists all files over 1GB. Investigate any unexpected large files.

**Step 9: Restart services after cleanup**

After freeing space:

```bash
sudo systemctl restart docker
pm2 restart flux
pm2 restart fluxbenchd
```

**Step 10: Verify node recovery**

```bash
cd ~/zelflux && bash multitoolbox.sh
```

Check all statuses are healthy.

**Prevention:**

1. **Monitor disk usage weekly:**
   ```bash
   df -h
   ```

2. **Set up automated cleanup:**
   - Schedule weekly docker prune
   - Limit journal size permanently
   - Regular apt cleanup

3. **Choose appropriate server size:**
   - Cumulus: 220GB minimum, 300GB recommended
   - Nimbus: 440GB minimum, 500GB+ recommended
   - Stratus: 880GB minimum, 1TB+ recommended

4. **Regular maintenance:**
   - Monthly docker system prune
   - Weekly disk check
   - Monitor growth trends

5. **Enable disk alerts:**
   - Use monitoring tools
   - Set alerts at 80% usage
   - Act before reaching critical levels

**If disk is full and cleanup doesn't help:**

May need to:
1. **Upgrade server storage** (contact hosting provider)
2. **Migrate to larger VPS**
3. **Reinstall node with proper storage allocation**

**Timeline:** Cleanup usually frees space immediately. Node should recover within 30 minutes after cleanup and service restart.

### Scenario 8: Benchmark Failures Due to Storage/Disk Issues

**Symptoms:**
- Benchmark consistently failing
- Error messages mentioning disk I/O or storage
- Node previously passed benchmarks but now failing
- Multitoolbox shows benchmark errors

**Likely Cause:** Insufficient disk space, slow disk I/O, or corrupted storage

**Solution:**

**Step 1: Verify sufficient free space**

```bash
df -h
```

Must have 20%+ free on root partition.

If less than 20%, see Scenario 7 above for cleanup.

**Step 2: Test disk performance**

Benchmark tests disk I/O speed. Slow disks fail benchmarks.

**Test disk speed:**

```bash
sudo hdparm -tT /dev/sda
```

Or more detailed test:

```bash
dd if=/dev/zero of=/tmp/testfile bs=1G count=1 oflag=direct
```

**Expected results:**
- Read speed: 100+ MB/s minimum
- Write speed: 50+ MB/s minimum

**If speeds are much lower:**
- Disk may be failing
- I/O throttling by host
- Shared storage performance issues (VPS)

**Step 3: Check for disk errors**

```bash
sudo dmesg | grep -i error
```

Look for disk-related errors.

**Check SMART status (if available):**

```bash
sudo smartctl -a /dev/sda
```

Look for reallocated sectors or other warnings.

**Step 4: Verify Docker storage driver**

```bash
docker info | grep "Storage Driver"
```

Should show overlay2 (optimal) or similar modern driver.

**If using old driver (devicemapper, aufs):**

May need to reconfigure Docker for better performance.

**Step 5: Check inode usage**

Running out of inodes can cause failures even with free space:

```bash
df -i
```

Look at IUse% column. If 90%+, too many small files.

**To free inodes:**
- Delete unnecessary small files
- Clean up temp directories
- Remove old logs

**Step 6: Run benchmark manually**

```bash
flux-cli getbenchstatus
```

Check for specific error messages.

**Then run benchmark:**

```bash
flux-cli startbenchmark
```

Watch for errors in real-time.

**Step 7: Restart benchmark daemon**

```bash
pm2 restart fluxbenchd
pm2 logs fluxbenchd
```

Watch logs for disk-related errors.

**Step 8: If disk is actually failing**

**Symptoms of failing disk:**
- Slow performance
- I/O errors in dmesg
- SMART warnings
- Benchmark failures persist after cleanup

**Action:**
1. **Contact hosting provider immediately**
2. **Request disk replacement** or migration
3. **Backup critical data** (wallet backups)
4. **Prepare to migrate node** if disk replacement not possible

**Temporary workaround while waiting:**
- Free as much space as possible
- Reduce Docker containers
- May maintain partial operation

**Prevention:**

1. **Choose quality hosting:**
   - SSD storage (not HDD)
   - Dedicated resources (not oversold shared)
   - Good provider reputation

2. **Monitor disk health:**
   - Weekly SMART checks
   - Watch for performance degradation
   - Act on warnings early

3. **Maintain free space:**
   - Never let usage exceed 85%
   - Regular cleanup schedule
   - Automated monitoring

4. **Performance testing:**
   - Test disk speed monthly
   - Compare to baseline
   - Investigate degradation

**If upgrading storage:**

When migrating to larger/better disk:
1. Stop node services
2. Backup ~/.flux and ~/zelflux
3. Set up new disk/server
4. Restore data
5. Restart services
6. Re-confirm node if needed

**Timeline:** If just cleanup needed, 1-2 hours. If disk migration needed, 1-3 days.

### Scenario 9: SenseCap Mini PC / Router-specific Issues

**Symptoms:**
- Flux Node running on SenseCap M2 or similar mini PC
- Node randomly goes offline or enters DOS state
- Router shows UPnP enabled but ports not forwarding
- IP detection issues or double NAT scenarios
- Benchmarking failures despite adequate hardware
- Node works temporarily then disconnects

**Likely Cause:** SenseCap devices and similar mini PCs often face unique networking challenges due to consumer router configurations, UPnP limitations, and IP detection issues

**Solution:**

**Step 1: Verify SenseCap meets minimum requirements**

SenseCap M2 specifications:
- CPU: Typically adequate for Cumulus tier
- RAM: Check specific model (needs 8GB minimum for Cumulus)
- Storage: Verify 220GB+ available for Cumulus

Check if your SenseCap model supports your intended node tier.

**Step 2: Disable UPnP and use manual port forwarding**

SenseCap devices often have issues with UPnP on home routers:

1. **Log into your router** (usually 192.168.1.1 or 192.168.0.1)

2. **Disable UPnP completely:**
   - Find UPnP settings
   - Turn OFF UPnP
   - Save and apply

3. **Find your SenseCap's internal IP:**
   ```bash
   hostname -I
   ```
   Example: 192.168.1.150

4. **Create static DHCP reservation:**
   - In router settings, find DHCP or LAN settings
   - Create reservation linking SenseCap's MAC address to fixed IP
   - This prevents IP from changing

5. **Manually forward all Flux ports to SenseCap IP:**
   - Port 16125 TCP -> 192.168.1.150:16125
   - Port 16127 TCP -> 192.168.1.150:16127
   - Port 16224 TCP -> 192.168.1.150:16224
   - Port 16225 TCP -> 192.168.1.150:16225

6. **Save and reboot router**

**Step 3: Check for double NAT**

SenseCap devices behind certain routers may experience double NAT (Network Address Translation).

**Identify double NAT:**

1. Check your WAN IP on router:
   - Log into router
   - Check WAN/Internet IP address

2. Compare to actual public IP:
   ```bash
   curl ifconfig.me
   ```

3. If IPs don't match and router shows 10.x.x.x, 172.16.x.x, or 192.168.x.x as WAN IP, you have double NAT

**Solutions for double NAT:**

**Option A: Enable DMZ on upstream router** (if you have two routers)
- Place your main router in DMZ of upstream device
- Then configure port forwarding on main router

**Option B: Bridge mode on modem/router**
- If ISP provided modem/router combo, put it in bridge mode
- Let your own router handle NAT

**Option C: Contact ISP**
- Request public IP address
- Some ISPs use CGNAT (Carrier Grade NAT) which prevents node hosting

**Step 4: Router-specific configurations**

**Common router brands and Flux Node issues:**

**TP-Link routers:**
- UPnP often unreliable
- Solution: Manual port forwarding + disable UPnP
- Enable "Port Triggering" if port forwarding fails

**Netgear routers:**
- Some models have UPnP bugs
- Solution: Firmware update + manual port forwarding
- Check "Port Forwarding/Port Triggering" section

**ASUS routers:**
- Generally good UPnP support
- If issues: Update firmware to latest
- Use "Gaming" or "Server" port forwarding mode

**Linksys routers:**
- Older models have UPnP limitations
- Solution: Manual "Single Port Forwarding"
- Avoid "Port Range Forwarding"

**ISP-provided routers (Comcast, Spectrum, etc.):**
- Often locked down
- May not support advanced port forwarding
- Solution: Request bridge mode and use your own router

**Step 5: IP detection issues**

SenseCap nodes may report wrong IP to Flux network:

**Check reported IP:**
```bash
flux-cli getzelnodestatus
```

Look for IP field - should match your public IP.

**Get actual public IP:**
```bash
curl ifconfig.me
```

**If IPs don't match:**

1. **Update node IP:**
   - In ZelCore FluxNodes app
   - Edit node configuration
   - Enter correct public IP
   - Re-confirm node

2. **Check for dynamic IP:**
   - If your ISP assigns dynamic IP (changes periodically)
   - Consider DDNS (Dynamic DNS) solution
   - Or upgrade to static IP from ISP

**Step 6: SenseCap-specific networking**

**Check SenseCap network configuration:**

```bash
ip addr show
```

Verify network interface is properly configured.

**Check SenseCap's gateway:**
```bash
ip route show
```

Should show default route to your router.

**Test connectivity to router:**
```bash
ping -c 10 192.168.1.1
```

Replace with your router's IP. Should have 0% packet loss.

**Step 7: Firmware and system updates**

SenseCap devices need updated firmware:

1. **Check SenseCap firmware version:**
   - Access SenseCap management interface
   - Look for firmware updates

2. **Update Ubuntu/OS on SenseCap:**
   ```bash
   sudo apt update
   sudo apt upgrade
   ```

3. **Reboot after updates:**
   ```bash
   sudo reboot
   ```

**Step 8: Bandwidth and connectivity testing**

SenseCap on home network must share bandwidth:

**Test available bandwidth:**
```bash
# Install speedtest
sudo apt install speedtest-cli

# Run test
speedtest-cli
```

**Minimum requirements:**
- Cumulus: 25 Mbps down/up
- Nimbus: 50 Mbps down/up
- Stratus: 100 Mbps down/up

**If bandwidth is insufficient:**
- Reduce other network usage during testing
- Upgrade internet plan
- Consider if home network can support Flux Node

**Test connectivity stability:**
```bash
ping -c 1000 8.8.8.8
```

Should have &lt;1% packet loss. If higher, network is unstable.

**Step 9: SenseCap-specific benchmark issues**

**Resource monitoring on SenseCap:**

```bash
htop
```

Watch during benchmark:
- CPU should not max out at 100%
- RAM usage should stay below 80%
- Swap should not be heavily used

**If resources are maxed:**
- Close unnecessary services
- Check if SenseCap model is sufficient for tier
- May need to upgrade to higher tier SenseCap or VPS

**Step 10: Alternative - VPS hosting**

If SenseCap/home network issues persist:

**Consider migrating to VPS:**

Benefits:
- No router/port forwarding issues
- Static IP included
- Better uptime
- Higher bandwidth
- Easier management

**Recommended VPS providers for Flux Nodes:**
- Contabo
- Hetzner
- OVH
- Digital Ocean
- Vultr

Cost: Usually $10-50/month depending on tier

**Migration process:**
1. Set up VPS with Ubuntu
2. Install Flux Node on VPS
3. Transfer collateral if keeping same wallet
4. Deprecate SenseCap node or repurpose

**Prevention for SenseCap setups:**

1. **Use manual port forwarding from day one**
   - Don't rely on UPnP
   - Document your configuration

2. **Set static IP or DHCP reservation**
   - Prevent IP changes
   - Ensure consistency

3. **Monitor router uptime**
   - Router reboots break port forwarding temporarily
   - May need to re-confirm node after router issues

4. **Keep firmware updated**
   - Both SenseCap and router
   - Security and stability improvements

5. **Use quality router**
   - Consumer routers can be unreliable
   - Consider upgrading router if running node

6. **Regular connectivity tests**
   - Test ports weekly
   - Monitor for IP changes
   - Check multitoolbox output

7. **Plan for ISP issues**
   - Know your ISP's policies
   - Check if CGNAT is used
   - Consider static IP upgrade if available

**When to give up on SenseCap/home setup:**

Consider VPS if:
- Double NAT can't be resolved
- ISP uses CGNAT (no public IP)
- Router consistently fails to forward ports
- Frequent power/internet outages
- Bandwidth insufficient
- More than 3 DOS events per month

**Timeline:**
- Router configuration: 1-2 hours
- IP detection fix: 30 minutes - 2 hours
- VPS migration: 1-2 days

**Community resources for SenseCap:**
- Flux Discord #node-support channel
- Many SenseCap operators share configurations
- Ask about specific router models

### Scenario 10: Full Node / Daemon Database Corruption Errors

**Symptoms:**
- Flux daemon won't start or crashes on startup
- Errors mentioning "corrupted database", "bad block", or "database integrity"
- Daemon repeatedly syncing from beginning
- Node showing errors in multitoolbox related to daemon DB
- FluxOS can't connect to daemon due to corruption
- Node was working fine then suddenly daemon issues after crash/power loss

**Likely Cause:** Flux daemon's blockchain database (wallet.dat, block index, or chainstate) has become corrupted due to improper shutdown, disk errors, or power loss

**Solution:**

**Step 1: Identify the corruption**

Check daemon logs for corruption indicators:

```bash
tail -f ~/.flux/debug.log
```

Look for errors like:
- "Corrupted block database detected"
- "Error opening block database"
- "Database corruption"
- "Bad block"
- "Reindex required"
- "wallet.dat corrupt"

**Step 2: Stop daemon safely**

```bash
flux-cli stop
```

Wait 30 seconds to ensure clean shutdown.

**If daemon won't stop:**

```bash
killall fluxd
```

**Step 3: Backup current state (important)**

Before any recovery, backup existing data:

```bash
cd ~/.flux
mkdir backup_corrupted
cp -r blocks chainstate wallet.dat backup_corrupted/
```

This preserves your state in case recovery is needed.

**Step 4: Try reindex first (preserves blockchain data)**

Reindexing rebuilds database from existing blockchain files:

```bash
fluxd -reindex
```

**What this does:**
- Rebuilds block index from stored blocks
- Doesn't re-download entire blockchain
- Faster than full resync (1-3 hours vs 6-12 hours)
- Fixes most corruption issues

**Monitor progress:**

```bash
tail -f ~/.flux/debug.log
```

Look for reindexing progress. Wait for completion.

**If reindex completes successfully:**
1. Verify daemon is running: `flux-cli getinfo`
2. Check sync status: `flux-cli getblockchaininfo`
3. Restart FluxOS: `pm2 restart flux`
4. Run multitoolbox to verify all services healthy

**Step 5: If reindex fails - Bootstrap (recommended)**

If reindex doesn't fix corruption, use blockchain bootstrap:

**Stop daemon:**

```bash
flux-cli stop
sleep 10
```

**Remove corrupted data:**

```bash
cd ~/.flux
rm -rf blocks chainstate
```

**Download and apply bootstrap:**

```bash
cd ~/ && wget https://fluxnodeservice.com/daemon_bootstrap.sh && bash daemon_bootstrap.sh
```

**What bootstrap does:**
- Downloads clean blockchain snapshot
- Replaces corrupted blocks and chainstate
- Much faster than syncing from genesis
- Typically completes in 30-60 minutes

**Monitor bootstrap:**

The script shows progress. Once complete:

```bash
fluxd
```

Daemon starts with clean blockchain data.

**Verify sync:**

```bash
flux-cli getinfo
```

Check blocks are advancing and connections are established.

**Step 6: Wallet corruption (wallet.dat issues)**

If error specifically mentions wallet.dat:

**Symptoms:**
- "Error loading wallet.dat"
- "Wallet corrupted"
- "Cannot read wallet"

**Solution A: Salvage wallet**

```bash
flux-cli salvage
```

Or when starting daemon:

```bash
fluxd -salvagewallet
```

This attempts to recover wallet data.

**Solution B: Restore from wallet backup**

If you have backup of wallet.dat:

```bash
flux-cli stop
cd ~/.flux
mv wallet.dat wallet.dat.corrupt
cp /path/to/backup/wallet.dat .
fluxd
```

**Solution C: Use private keys to recreate**

If no backup and salvage fails:

1. If you have node's private key backed up
2. Stop daemon
3. Rename corrupt wallet: `mv wallet.dat wallet.dat.old`
4. Start daemon (creates new wallet): `fluxd`
5. Import private key: `flux-cli importprivkey "your_private_key"`

**Important:** This is why backing up wallet.dat and private keys is critical.

**Step 7: Complete nuclear option - Full resync**

If bootstrap and reindex both fail:

**Remove all blockchain data and resync from genesis:**

```bash
flux-cli stop
cd ~/.flux
rm -rf blocks chainstate peers.dat
fluxd
```

**This will:**
- Sync entire blockchain from network (6-12+ hours)
- Guarantee clean database
- Takes longest but most thorough

**Monitor sync progress:**

```bash
watch -n 10 flux-cli getinfo
```

Watch `blocks` value increase.

**Step 8: Check for underlying disk issues**

If corruption keeps recurring:

**Test disk health:**

```bash
sudo dmesg | grep -i error
```

Look for disk I/O errors.

**Check SMART status:**

```bash
sudo smartctl -a /dev/sda
```

Look for reallocated sectors or errors.

**Check disk space:**

```bash
df -h
```

Must have 20%+ free space.

**If disk is failing:**
- Contact hosting provider
- Migrate node to new server/disk
- Backup wallet.dat before migration

**Step 9: Restart dependent services**

After daemon recovery:

**Restart FluxOS:**

```bash
pm2 restart flux
pm2 restart fluxbenchd
```

**Restart Docker (if needed):**

```bash
sudo systemctl restart docker
```

**Verify all services:**

```bash
cd ~/zelflux && bash multitoolbox.sh
```

Check:
- Daemon synced
- Benchmark passing
- FluxOS connected
- All ports open

**Step 10: Re-confirm node if needed**

If node state is EXPIRED after corruption recovery:

1. Follow Step 8 in main guide (Re-confirming Your Node)
2. Ensure daemon fully synced first
3. Benchmark passing
4. Then re-confirm through ZelCore FluxNodes app

**Prevention:**

**1. Proper shutdowns:**
- Always stop daemon cleanly: `flux-cli stop`
- Never force kill unless absolutely necessary
- Wait for clean shutdown before reboots

**2. UPS (Uninterruptible Power Supply):**
- Protects against power loss during DB writes
- Critical corruption cause is sudden power loss
- Invest in UPS for serious node operation

**3. Regular backups:**

**Backup wallet.dat weekly:**

```bash
cp ~/.flux/wallet.dat ~/wallet_backup_$(date +%Y%m%d).dat
```

**Backup to remote location:**

```bash
scp ~/.flux/wallet.dat user@backup-server:/backup/flux/
```

**4. Monitor disk health:**
- Weekly SMART checks
- Watch for reallocated sectors
- Act on early warnings
- Replace aging drives proactively

**5. Adequate disk space:**
- Never let usage exceed 85%
- Corruption more likely on full disks
- Regular cleanup prevents issues

**6. Keep daemon updated:**
- Updates include DB handling improvements
- Bug fixes reduce corruption risk
- Follow Flux update announcements

**Understanding the issue:**

**Why corruption happens:**

1. **Improper shutdown:**
   - Power loss during database write
   - Force-killed daemon
   - System crash
   - Database left in inconsistent state

2. **Disk errors:**
   - Bad sectors
   - Failing drive
   - I/O errors during write
   - Physical disk problems

3. **Out of disk space:**
   - Database write fails mid-operation
   - Partial data written
   - Inconsistent state

4. **Software bugs:**
   - Rare but possible
   - Daemon bugs causing DB issues
   - Fixed in updates

**What files can be corrupted:**

- **blocks/**: Blockchain block data
- **chainstate/**: UTXO set and chain state
- **wallet.dat**: Your wallet and keys
- **peers.dat**: Network peer list
- **banlist.dat**: Banned peers

**Safe to delete for recovery:**
- blocks/
- chainstate/
- peers.dat
- banlist.dat

**NEVER delete without backup:**
- wallet.dat (contains your keys!)

**Timeline:**

- **Reindex:** 1-3 hours
- **Bootstrap:** 30-60 minutes
- **Full resync:** 6-12+ hours
- **Wallet salvage:** 5-30 minutes

**Recovery success rate:**

- **Reindex:** ~70% success for corruption
- **Bootstrap:** ~95% success (almost always works)
- **Full resync:** 100% (but slowest)
- **Wallet salvage:** ~50-80% depending on damage

**When to seek help:**

Contact Flux support if:
- Corruption keeps recurring despite fixes
- Wallet cannot be recovered
- Disk shows errors but can't replace immediately
- Need help with private key import
- Unsure about any recovery steps

**Related scenarios:**
- See Scenario 7 for disk space issues
- See Scenario 8 for storage-related benchmark failures
- See Step 2 for general daemon sync issues

---

### Scenario 11: Full Node Reporting Wrong Disk Space to Network

**Symptoms:**
- Node shows available but not receiving work
- Lower rewards than expected
- Network dashboard shows incorrect disk space
- Benchmark passes but node underutilized

**Likely Cause:** Node reporting incorrect available space to Flux network, reducing task assignments

**Solution:**

**Step 1: Check actual disk space**

```bash
df -h
```

Note actual available space.

**Step 2: Check what node is reporting**

```bash
flux-cli getbenchmarks
```

Look for storage-related fields.

**Or check node info:**

```bash
flux-cli getzelnodestatus
```

Compare reported values to actual.

**Step 3: Verify benchmark configuration**

Check FluxOS benchmark settings:

```bash
cat ~/zelflux/config/userconfig.js
```

Look for storage-related configuration.

**Step 4: Restart benchmark to refresh**

```bash
pm2 restart fluxbenchd
flux-cli startbenchmark
```

Wait 10-15 minutes, then check reported values again.

**Step 5: Check FluxOS status**

```bash
pm2 logs flux | grep -i storage
```

Look for errors or warnings about disk space detection.

**Step 6: Verify partition is correctly detected**

```bash
lsblk
df -h
mount
```

Ensure root partition is properly mounted and detected.

**Step 7: Update FluxOS**

Outdated FluxOS may have bugs in disk reporting:

1. Check current version:
   ```bash
   flux-cli getfluxnodeinfo
   ```

2. Update if outdated (use multitoolbox)

3. Restart after update

**Step 8: Re-run full benchmark**

```bash
flux-cli stopbenchmark
sleep 60
flux-cli startbenchmark
```

Full benchmark refresh may correct reporting.

**Step 9: Check for disk quota or limits**

Some VPS providers impose quotas:

```bash
quota
```

If quota is lower than physical disk, node reports quota value.

**Contact hosting provider** if quota is limiting node operation.

**Step 10: Monitor network view of node**

Use Flux network explorers or dashboards to see how network sees your node's resources.

Compare to actual resources.

**Prevention:**

1. **Keep FluxOS updated**
2. **Use standard disk configurations** (avoid complex RAID, LVM if possible)
3. **Monitor network view of node** monthly
4. **Ensure no quotas** from hosting provider
5. **Regular benchmark restarts** refresh reported values

**Timeline:** Usually corrects within 1-2 hours after benchmark restart. If persists, may need FluxOS update or configuration fix (1-2 days).

## Advanced Diagnostics

### Enable Debug Logging:

For deep troubleshooting, enable verbose logging:

```bash
# For Flux daemon
flux-cli stop
fluxd -debug=1

# Watch logs
tail -f ~/.flux/debug.log
```

### Monitor Real-time Node Status:

```bash
watch -n 10 flux-cli getzelnodestatus
```

Updates status every 10 seconds.

### Check Peer Connections:

```bash
flux-cli getpeerinfo
```

Shows all connected peers. Should have 8+ peers for healthy connectivity.

### Verify Collateral Transaction:

```bash
flux-cli getzelnodeoutputs
```

Shows your node's collateral transaction. Verify the exact amount (1000, 12500, or 40000 FLUX).

## Prevention and Maintenance

### Daily Monitoring Checklist:

- [ ] Check node status in ZelCore FluxNodes app
- [ ] Verify daemon is synced: `flux-cli getinfo`
- [ ] Check benchmark status: `flux-cli getbenchstatus`
- [ ] Monitor resource usage: `htop` and `df -h`

### Weekly Maintenance:

- [ ] Run multitoolbox and save output
- [ ] Check for FluxOS updates
- [ ] Review system logs: `sudo journalctl -xe`
- [ ] Test port accessibility externally
- [ ] Verify Docker containers are healthy

### Monthly Maintenance:

- [ ] Check for daemon updates
- [ ] System updates: `sudo apt update && sudo apt upgrade`
- [ ] Clean Docker: `docker system prune`
- [ ] Review router configuration (port forwarding rules still intact)
- [ ] Test fail-over procedures

### Automated Monitoring:

Consider setting up automated monitoring:

- **Uptime monitoring:** UptimeRobot, Pingdom
- **Alert on node down:** Configure Discord/Telegram alerts
- **Resource monitoring:** Grafana + Prometheus for advanced users

## When to Seek Help

Contact Flux community support if:

- Solutions in this guide don't resolve the issue after 48 hours
- You encounter error messages not covered here
- Multitoolbox shows errors you don't understand
- Your node repeatedly enters DOS despite fixing all known issues
- You suspect hardware failure or network provider issues

### Where to Get Help:

**Official Flux Discord:**
- #node-support channel
- #general-support for account questions
- When asking for help, always provide:
  - Node tier (Cumulus/Nimbus/Stratus)
  - Full multitoolbox output
  - Description of the issue and when it started
  - Steps you've already tried

**Flux Telegram:**
- Active community support
- Real-time assistance

**Flux Forum:**
- In-depth technical discussions
- Archive of solved issues

**Include in Support Requests:**
1. Multitoolbox output (full)
2. Output of `flux-cli getinfo`
3. Output of `flux-cli getbenchstatus`
4. Description of your network setup (VPS, home network, etc.)
5. Timeline of when issue started
6. What you've tried so far

## Related Documentation

- [Flux Node Setup Guide](/guides/flux-node-installation-guide/) (if available)
- [Flux Nodes FAQ](/faq/flux-nodes-faq/)
- [Network Security Best Practices](/guides/security-best-practices/)
- [ZelCore FluxNodes App Guide](/features/overview/) (if available)

## Additional Resources

- **Official Flux Documentation:** https://docs.runonflux.io
- **Flux Node Multitool GitHub:** https://github.com/RunOnFlux/fluxnode-multitool
- **Flux Explorer:** https://explorer.runonflux.io
- **Flux Website:** https://runonflux.io
- **Port Testing Tool:** https://www.yougetsignal.com/tools/open-ports/

## Conclusion

Flux Node status issues are almost always resolvable through systematic troubleshooting. The most common root causes are:

1. **Port forwarding misconfiguration** (60% of issues)
2. **Daemon sync problems** (25% of issues)
3. **Resource constraints** (10% of issues)
4. **Network connectivity** (5% of issues)

By following this guide methodically, starting with multitoolbox diagnostics and working through network configuration, daemon sync, and benchmark verification, you can restore your node to healthy operation and maintain consistent uptime for optimal rewards.

Remember: Preventive maintenance and monitoring are far more effective than reactive troubleshooting. Invest time in proper initial setup, regular monitoring, and staying current with updates to minimize future issues.
