# code

## contents

- [code](#code)
  - [contents](#contents)
  - [AWS](#aws)
  - [building a aws amazon linux default machine](#building-a-aws-amazon-linux-default-machine)
    - [set /.ssh/config to automatically accept new host fingerprints](#set-sshconfig-to-automatically-accept-new-host-fingerprints)


## AWS

## building a aws amazon linux default machine

create a default aws amazon linux machine and allow access from both ssh and https

choose a known key pair to login with 

### set /.ssh/config to automatically accept new host fingerprints

```yaml
# i think we only need one of these, possibly the top one only 
StrictHostKeyChecking=accept-new
Host *
    StrictHostKeyChecking no
```

now connect to instance

```bash
# connect to instance
ssh -i alpine.pem ec2-user@54.174.97.126
```

now configure machine

```bash
# what version of linux am i running
uname -a
# Linux ip-172-31-29-138.ec2.internal 6.1.66-91.160.amzn2023.x86_64 #1 SMP PREEMPT_DYNAMIC Wed Dec 13 04:50:24 UTC 2023 x86_64 x86_64 x86_64 GNU/Linux
uname -srm
# Linux 6.1.66-91.160.amzn2023.x86_64 x86_64
hostnamectl
#  Static hostname: ip-172-31-29-138.ec2.internal
#        Icon name: computer-vm
#          Chassis: vm 🖴
#       Machine ID: a581245290b34a2dbe124ece0e9883ee
#          Boot ID: ff5f522c75824786bfb8cc2841451d6a
#   Virtualization: xen
# Operating System: Amazon Linux 2023
#      CPE OS Name: cpe:2.3:o:amazon:amazon_linux:2023
#           Kernel: Linux 6.1.66-91.160.amzn2023.x86_64
#     Architecture: x86-64
#  Hardware Vendor: Xen
#   Hardware Model: HVM domU
# Firmware Version: 4.11.amazon
cat /etc/*release
# Amazon Linux release 2023 (Amazon Linux)
# NAME="Amazon Linux"
# VERSION="2023"
# ID="amzn"
# ID_LIKE="fedora"
# VERSION_ID="2023"
# PLATFORM_ID="platform:al2023"
# PRETTY_NAME="Amazon Linux 2023"
# ANSI_COLOR="0;33"
# CPE_NAME="cpe:2.3:o:amazon:amazon_linux:2023"
# HOME_URL="https://aws.amazon.com/linux/"
# BUG_REPORT_URL="https://github.com/amazonlinux/amazon-linux-2023"
# SUPPORT_END="2028-03-15"
# Amazon Linux release 2023 (Amazon Linux)
cat /etc/os-release
# NAME="Amazon Linux"
# VERSION="2023"
# ID="amzn"
# ID_LIKE="fedora"
# VERSION_ID="2023"
# PLATFORM_ID="platform:al2023"
# PRETTY_NAME="Amazon Linux 2023"
# ANSI_COLOR="0;33"
# CPE_NAME="cpe:2.3:o:amazon:amazon_linux:2023"
# HOME_URL="https://aws.amazon.com/linux/"
# BUG_REPORT_URL="https://github.com/amazonlinux/amazon-linux-2023"
# SUPPORT_END="2028-03-15"
# check os is up to date
sudo yum update
sudo yum upgrade
# check http libraries are up to date
sudo yum update httpd
# install apache
sudo yum install httpd -y
# install firewall
sudo yum install firewalld
# enable firewall
sudo systemctl enable firewalld
# start firewall
sudo systemctl start firewalld
# check firewall is running
sudo firewall-cmd --state
# running
# get zones
sudo firewall-cmd --permanent --get-zones
# FedoraServer FedoraWorkstation block dmz drop external home internal public trusted work
# add http to firewall
sudo firewall-cmd --zone=public --add-service=http --permanent
# success
# add https to firewall
sudo firewall-cmd --zone=public --add-service=https --permanent
# success
# add ports to firewall
sudo firewall-cmd --zone=public --add-port=80/tcp
sudo firewall-cmd --zone=public --add-port=443/tcp
sudo firewall-cmd --zone=public --add-port=443/udp
sudo firewall-cmd --zone=public --add-port=80/udp
sudo firewall-cmd --zone=public --list-ports
sudo firewall-cmd --zone=public --add-port=5000/tcp
sudo firewall-cmd --zone=public --list-ports
# 80/tcp 443/tcp 5000/tcp 80/udp 443/udp
# list services
sudo firewall-cmd --get-services
```
