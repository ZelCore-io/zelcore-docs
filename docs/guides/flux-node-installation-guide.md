---
sidebar_position: 11
title: Flux Node Installation Guide
description: "Complete guide to installing and running a Flux node through ZelCore. Hardware requirements, setup steps, and node management."
keywords: [flux node setup, install flux node, zelcore flux node, run flux node]
---

# Flux Node Installation Guide

## Overview

This guide helps you successfully install and configure Flux nodes using the multitoolbox installer or manual installation methods. Based on common support issues, we focus on preventing and resolving the most frequent installation problems on Ubuntu and Docker environments.

## Prerequisites

Before starting your Flux node installation, ensure you meet these requirements:

### System Requirements

- **Operating System:** Ubuntu 20.04 or 22.04 LTS (recommended) or custom OS
- **RAM:** Minimum 8GB (16GB recommended)
- **CPU:** 4+ cores recommended
- **Storage:** 200GB+ SSD storage
- **Network:** Static public IP address, stable internet connection
- **Ports:** Open required ports (16125, 16127)

### Recommended Configurations

**Best success rate:**
- Fresh Ubuntu 20.04 or 22.04 LTS installation
- Dedicated server or VPS (not shared hosting)
- Clean system without conflicting services
- Up-to-date package repositories

**Alternative option:**
- ArcaneOS (pre-configured Flux node operating system)
- Simplifies installation and reduces dependency issues

## Installation Methods

### Method 1: Multitoolbox Installer (Recommended)

The multitoolbox is the official automated Flux node installation tool.

**Step 1: Prepare System**

Update your system packages first:

```bash
sudo apt-get update && sudo apt-get upgrade -y
```

**Step 2: Download Multitoolbox**

```bash
wget https://raw.githubusercontent.com/RunOnFlux/fluxnode-multitool/master/multitoolbox.sh
```

**Step 3: Make Executable**

```bash
chmod +x multitoolbox.sh
```

**Step 4: Run Installer**

```bash
./multitoolbox.sh
```

**Step 5: Follow Prompts**

The installer will:
1. Check system requirements
2. Install dependencies (MongoDB, Docker, Flux daemon)
3. Configure node settings
4. Bootstrap blockchain sync
5. Start Flux services

**Common prompts you'll see:**
- Choice of node tier (Cumulus/Nimbus/Stratus)
- Flux address for rewards
- Collateral transaction details
- Network configuration

**Step 6: Monitor Installation**

Installation can take 30-90 minutes depending on:
- Internet connection speed
- Server specifications
- Bootstrap download/sync time

### Method 2: Docker Installation

Some users prefer Docker-based installations for better isolation.

**Step 1: Install Docker**

```bash
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
```

**Step 2: Install Docker Compose**

```bash
sudo curl -L "https://github.com/docker/compose/releases/download/v2.20.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```

**Step 3: Follow Flux Docker Installation Guide**

Refer to official Flux documentation for Docker-specific setup:
- https://github.com/RunOnFlux/flux

### Method 3: ArcaneOS (Easiest for Beginners)

ArcaneOS is a pre-configured operating system designed specifically for Flux nodes.

**Advantages:**
- All dependencies pre-installed
- Optimized configurations
- Fewer installation failures
- Better for users unfamiliar with Linux

**How to use ArcaneOS:**
1. Download ArcaneOS image from official Flux resources
2. Flash to USB or install on server
3. Boot from ArcaneOS
4. Follow simplified node setup wizard

## Common Installation Issues

### Issue 1: Docker Installation Failing

**Symptoms:**
- "Docker daemon failed to start"
- "Cannot connect to Docker socket"
- Docker service crashes during installation

**Solutions:**

**Check Docker status:**
```bash
sudo systemctl status docker
```

**Restart Docker:**
```bash
sudo systemctl restart docker
```

**Check Docker logs:**
```bash
sudo journalctl -u docker.service
```

**Common fixes:**
1. **Conflicting Docker versions:**
   ```bash
   sudo apt-get remove docker docker-engine docker.io containerd runc
   sudo apt-get install docker-ce docker-ce-cli containerd.io
   ```

2. **Permission issues:**
   ```bash
   sudo usermod -aG docker $USER
   # Log out and log back in
   ```

3. **Storage driver issues:**
   - Edit `/etc/docker/daemon.json`
   - Set appropriate storage driver for your system

### Issue 2: MongoDB/Sysbench Problems

**Symptoms:**
- "MongoDB failed to install"
- "sysbench: command not found"
- Database connection errors

**Solutions:**

**Install MongoDB manually:**
```bash
wget -qO - https://www.mongodb.org/static/pgp/server-6.0.asc | sudo apt-key add -
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list
sudo apt-get update
sudo apt-get install -y mongodb-org
sudo systemctl start mongod
sudo systemctl enable mongod
```

**Install sysbench:**
```bash
sudo apt-get install sysbench
```

**Verify MongoDB is running:**
```bash
sudo systemctl status mongod
```

### Issue 3: Missing Dependencies

**Symptoms:**
- "Package not found" errors
- "Failed to locate package"
- Installation stops due to missing components

**Solution:**

**Refresh package repositories:**
```bash
sudo apt-get update
sudo apt-get upgrade -y
```

**Install common missing dependencies:**
```bash
sudo apt-get install -y build-essential pkg-config libc6-dev m4 g++-multilib \
  autoconf libtool ncurses-dev unzip git python3 python3-zmq zlib1g-dev \
  curl bsdmainutils automake
```

**If on Ubuntu 22.04 with specific errors:**
```bash
sudo apt-get install -y libssl-dev libboost-all-dev
```

### Issue 4: Daemon/Service Errors

**Symptoms:**
- Flux daemon won't start
- "fluxd: command not found"
- Service crashes immediately after starting

**Solutions:**

**Check daemon status:**
```bash
flux-cli getinfo
```

**Check daemon logs:**
```bash
tail -f ~/.flux/debug.log
```

**Restart Flux daemon:**
```bash
flux-cli stop
sudo systemctl restart zelcash
```

**Common fixes:**

1. **Corrupted configuration:**
   - Backup and regenerate `flux.conf`
   - Verify correct format and parameters

2. **Port conflicts:**
   ```bash
   sudo netstat -tulpn | grep 16125
   # Kill any conflicting process
   ```

3. **Blockchain corruption:**
   - Re-download bootstrap (see below)

### Issue 5: Bootstrap/Sync Issues

**Symptoms:**
- Blockchain sync stuck or very slow
- "Syncing headers" never completes
- Years behind current block height

**Solutions:**

**Method 1: Use Bootstrap (Fastest)**

```bash
# Stop Flux daemon
flux-cli stop

# Download and extract bootstrap
cd ~/.flux
wget https://fluxnodeservice.com/daemon_bootstrap.tar.gz
tar -xvf daemon_bootstrap.tar.gz

# Start daemon
sudo systemctl start zelcash
```

**Method 2: Force resync**

```bash
flux-cli stop
cd ~/.flux
rm -rf blocks chainstate
# Daemon will resync from network on restart
sudo systemctl start zelcash
```

**Monitor sync progress:**
```bash
watch flux-cli getinfo
# Check "blocks" vs "headers" - should eventually match
```

### Issue 6: Kernel Version Issues

**Symptoms:**
- "Kernel version not supported"
- Docker or system compatibility errors
- Installation checks fail

**Solution:**

**Check kernel version:**
```bash
uname -r
```

**Update kernel (Ubuntu):**
```bash
sudo apt-get install --install-recommends linux-generic-hwe-20.04
sudo reboot
```

**For Ubuntu 22.04:**
```bash
sudo apt-get install --install-recommends linux-generic
sudo reboot
```

### Issue 7: Repository/Package Source Issues

**Symptoms:**
- "Failed to fetch" errors
- "Release file not valid"
- Unable to locate packages

**Solution:**

**Reset package sources:**
```bash
sudo rm -rf /var/lib/apt/lists/*
sudo apt-get clean
sudo apt-get update
```

**Change to different mirror:**
Edit `/etc/apt/sources.list` and change mirror to local/regional server.

**For specific package issues:**
```bash
sudo add-apt-repository universe
sudo add-apt-repository multiverse
sudo apt-get update
```

## Installation Verification

After installation, verify everything is working correctly:

### Check Daemon Status

```bash
flux-cli getinfo
```

Should show:
- Version number
- Block height (syncing or synced)
- Connections to network

### Check Benchmark

```bash
fluxbench-cli getbenchmarks
```

Should show completed benchmarks for your node tier.

### Check Docker

```bash
sudo docker ps
```

Should show running Flux containers.

### Check FluxOS

Visit in browser:
```
http://YOUR_IP:16127
```

Should show FluxOS dashboard.

## Post-Installation Steps

### 1. Complete Node Setup on ZelCore

After installation succeeds on your server:

1. Open ZelCore wallet
2. Go to Apps > FluxNodes
3. Add your node with:
   - IP address
   - Collateral transaction details
   - Node tier

### 2. Monitor Node Health

**Regular checks:**
- Node status in ZelCore
- FluxOS dashboard
- Benchmark status
- Uptime percentage

**Commands for monitoring:**
```bash
flux-cli getinfo        # General status
fluxbench-cli getstatus # Benchmark status
sudo docker ps          # Container status
```

### 3. Security Hardening

**Enable firewall:**
```bash
sudo ufw allow 22/tcp
sudo ufw allow 16125/tcp
sudo ufw allow 16127/tcp
sudo ufw enable
```

**Keep system updated:**
```bash
sudo apt-get update && sudo apt-get upgrade -y
```

### 4. Regular Maintenance

**Weekly tasks:**
- Check node is online and confirmed
- Verify uptime meets requirements
- Monitor disk space
- Check for Flux updates

**Monthly tasks:**
- Review logs for errors
- Update system packages
- Verify benchmark scores
- Check reward payouts

## Troubleshooting Commands Reference

Quick reference for common troubleshooting commands:

```bash
# Daemon commands
flux-cli getinfo                  # Node status
flux-cli getpeerinfo              # Network connections
flux-cli stop                     # Stop daemon
sudo systemctl start zelcash      # Start daemon
sudo systemctl restart zelcash    # Restart daemon

# Benchmark commands
fluxbench-cli getbenchmarks       # Benchmark status
fluxbench-cli getstatus           # Detailed status
fluxbench-cli restartnodebenchmarks # Restart benchmarks

# Docker commands
sudo docker ps                    # Running containers
sudo docker logs [container]      # Container logs
sudo systemctl restart docker     # Restart Docker

# System commands
df -h                             # Disk space
free -h                           # RAM usage
top                               # Process monitor
sudo systemctl status [service]   # Service status
tail -f ~/.flux/debug.log        # Watch daemon logs
```

## When to Use ArcaneOS Instead

Consider switching to ArcaneOS if you experience:

- Repeated installation failures on Ubuntu
- Complex dependency conflicts
- Unfamiliarity with Linux system administration
- Multiple failed troubleshooting attempts
- Desire for simpler, pre-configured setup

ArcaneOS eliminates most common installation issues by providing a purpose-built environment.

## Getting Help

If you continue experiencing installation issues:

**Official Flux Resources:**
- Flux Discord: https://discord.gg/flux (most active support)
- Flux Telegram: Official Flux support groups
- Flux Documentation: https://docs.runonflux.io

**ZelCore Support:**
- For node management within ZelCore app
- Discord: Official ZelCore channels
- Email: support@zel.network

**What to include in support requests:**
- Operating system and version
- Installation method (multitoolbox/Docker/manual)
- Full error messages
- What you've already tried
- Relevant log excerpts

**Log locations:**
- Flux daemon: `~/.flux/debug.log`
- Benchmark: `~/.fluxbenchmark/debug.log`
- Docker: `sudo journalctl -u docker.service`
- System: `/var/log/syslog`

## Related Documentation

- [Troubleshooting Flux Node Status Issues](../../guides/troubleshooting-flux-node-status-issues/) - For nodes that installed but have status/uptime problems
- [Flux Nodes FAQ](../../faq/flux-nodes-faq/) - Common questions about running Flux nodes

---

**Important:** Flux node installation can be complex. Don't hesitate to ask for help in official Flux channels. The community is very active and helpful for installation issues.
