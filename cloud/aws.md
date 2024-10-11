# code

## contents

- [code](#code)
  - [contents](#contents)
  - [202420 AWS update](#202420-aws-update)
  - [terms](#terms)
  - [AWS](#aws)
  - [building a aws amazon linux default machine](#building-a-aws-amazon-linux-default-machine)
    - [set /.ssh/config to automatically accept new host fingerprints](#set-sshconfig-to-automatically-accept-new-host-fingerprints)

## 202420 AWS update

## terms

- EC2 is split down into regions, availability zones, local zones, aws outposts, wavelength zones
- EC2 region is a geographic area
- EC2 availability zone is a location within a region
- EC2 local zones allow placing resources close to your end users
- EC2 outposts places AWS services in a particular data center
- EC2 wavelength zone delivers content to the edge of 5G networks to be close to users on mobile networks
- VPC is virtual private cloud is a logical private network and can consist of a gateway, multiple subnets, multiple machine instances per subnet, and one availability zone per subnet
- VPC internet gateway connects to the public internet
- VPC endpoint connects to AWS services privately
- VPC peering connection can route traffic between two endpoints
- VPC route tables route traffic between VPC subnets
- Traffic Mirroring takes a copy of network traffic and sends it to security devices for monitoring
- Transmit Gateway is a central hub
- Flow log
- VPN connections connects your real physical network to your virtual network
- vm instance is virtualised hardware
- vm instance is virtualised hardware
- container is virtualised operating system on which we run an app - code, libraries, runtime, environment variables and config
- container is a virtualised operating system


## AWS

- AWS
    - Terms
        - EC2 → Load Balance
            - Application Load Balancer
                - Enhances classic load balancer
                - Path routing to different target groups
                - Hosting routing routes to different hosts
                - IPV6
                - WAF
                - Good when using containers - request routing based on different ports!
                - Request tracing
    - EC2 Compute
        - Cloudwatch
        - Autoscale in/out
        - Autoscale VM Group then traffic from load balancer
            1. Launch Configuration - security
            2. Autoscaling group - which network, instance min max desired, load balancer
            3. Autoscaling policy - triggers eg Cloudwatch CPU 80%
        - EC2 Elastic Compute Cloud
            - Compute = CPU
            - Elastic Beanstalk - monitors CPU, RAM, Disk, Network
        - ECS Elastic Container Service for microservices
        - EKS Elastic Kubernetes Service
        - AWS Lambda - no server needed
        - AWS Fargate - container serverless - auto manage infrastructure
    - DB
        - RDS Relational - Aurora, Postgres, Maria, Oracle
            - RDS
        - Non Relational Dynamo
    - S3 Simple Storage Service
        - Object storage - files split up and replicated
        - EBS Elastic Block Storage - mimics real hard drive with File IO
            - Durable - auto replicated with block-level replication
            - snapshots - recreate volume from snapshots
            - copy snapshots to another region for protection
            - encrypted ebs volumes
            - resize dynamically
        - Uses
            - Analytics is main use
            - Backup - data at rest
            - Replication for fault tolerance
            - Media hosting
            - Website hosting
        - SLA 99.9%
        - Replication guaranteed eventually
        - bucket
        - durability - auto replication across 2
        - scale to high volume of requests
        - access data via http and https access on the api endpoints
        - aws s3 cp myFile.txt s3://my-bucket/myFile.txt
        - aws s3 sync myFolder s3://my-bucket/myFolder
        - aws s3 ls s3://my-bucket —recursive
        - example of use
            - assets needed by an app eg media, logs
            - static web hosting
            - backup and disaster recovery
            - 
        
    - Identity
        - IAM Users Groups Roles.
            - Roles applied to apps
        - ADS AWS Directory Service uses Microsoft AD
        - Cognito sign in via FB
        - IAM Users and Groups and Roles
            - apply roles to apps
        - ADS AWS Directory Service - use Microsoft AD
        - Cognito - sign in via Facebook or Google
    - Monitor and Audit
        - Cloudwatch
            - alarms
            - logs
            - events
        - CloudTrail - logs to S3 bucket
            - Can log all AWS admin access for example
        - 
    - Developer
        - SDK for .NET
        - Toolkit for Visual Studio / VSCode / Jetbrains Rider
        - Tools for Powershell
        - AWS CLI
        - .NET Core CLI to deploy
        - Toolkit for Azure Devops
        - CDK Cloud Development Kit
    - Infrastructure
        - Regions host ≥ 2 availability zones
            - optimise latency
            - minimise cost
            - regulatory costs
        - Availability Zones supplied by different electricity supplier!
            - collection of data centres inside one region
            - each data centre in zone is connected by high speed links
        - Edge Zones = CDN = Cloud Front
    - VPC Virtual Private Cloud
        - PAYG on demand compute

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
