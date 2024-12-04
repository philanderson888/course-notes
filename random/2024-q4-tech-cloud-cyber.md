# cloud

## Contents

- [cloud](#cloud)
  - [Contents](#contents)
  - [202412 learning from baddie for business](#202412-learning-from-baddie-for-business)
  - [202412 cloud](#202412-cloud)
  - [202412 web](#202412-web)
  - [202410 cloud](#202410-cloud)
  - [202410 cloud history](#202410-cloud-history)
  - [202410 aws](#202410-aws)
  - [202410 cloud terms](#202410-cloud-terms)
  - [202410 data](#202410-data)
  - [202410 saas](#202410-saas)
  - [202410 security](#202410-security)
  - [202410 vm](#202410-vm)
  - [202410 data](#202410-data-1)
  - [202410 encryption](#202410-encryption)
  - [202410 docker commands](#202410-docker-commands)
  - [202410 google cloud](#202410-google-cloud)
  - [202410 azure cloud](#202410-azure-cloud)
  - [202410 cloud benefits](#202410-cloud-benefits)
  - [202410 saas iaas paas](#202410-saas-iaas-paas)
  - [202410 cloud history](#202410-cloud-history-1)
    - [big data](#big-data)
    - [azure](#azure)
- [AWS](#aws)
      - [IAM Security](#iam-security)
        - [IAM Policy](#iam-policy)
      - [Network Security](#network-security)
        - [VPC Virtual Private Cloud](#vpc-virtual-private-cloud)
    - [AWS secure web app demo](#aws-secure-web-app-demo)
  - [AWS Container Services](#aws-container-services)
  - [AWS Abstracted Services](#aws-abstracted-services)
  - [AWS Environment Security](#aws-environment-security)
    - [IAM](#iam)
    - [AWS Cloudwatch Application Logs](#aws-cloudwatch-application-logs)
    - [Amazon Inspector : Vulnerability Scanning](#amazon-inspector--vulnerability-scanning)
- [AWS Container Security](#aws-container-security)
  - [AWS VPC Virtual Private Cloud](#aws-vpc-virtual-private-cloud)
    - [AWS KMS key service](#aws-kms-key-service)
    - [AWS Example : Bank](#aws-example--bank)
    - [RDS relational database](#rds-relational-database)
    - [EMR big data](#emr-big-data)
    - [Elastic beanstalk - app deployment](#elastic-beanstalk---app-deployment)
    - [AWS Environment Variables](#aws-environment-variables)
  - [Serverless Computing](#serverless-computing)
- [Load Balancing](#load-balancing)
  - [Types Of Load Balancer](#types-of-load-balancer)
    - [Cloud](#cloud-1)
    - [Ported from real machines](#ported-from-real-machines)
    - [Software Load Balancer](#software-load-balancer)
    - [Global Route Balancing With Route 53](#global-route-balancing-with-route-53)
    - [Latency-based routing](#latency-based-routing)
  - [Considerations Of Load Balancing](#considerations-of-load-balancing)
    - [Scaling Infrastructure](#scaling-infrastructure)
    - [Scaling Load Balancers](#scaling-load-balancers)
    - [NGINX Load Balancing](#nginx-load-balancing)
- [infrastructure as code](#infrastructure-as-code)
  - [contents](#contents-1)
  - [bash](#bash)
- [Cloud Labs](#cloud-labs)
    - [Install AWS Linux](#install-aws-linux)
    - [AWS RDS database access](#aws-rds-database-access)
    - [AWS Securing Access To S3](#aws-securing-access-to-s3)
    - [Installing Linux with a GUI](#installing-linux-with-a-gui)
    - [Windows with RDP](#windows-with-rdp)
- [DevOps Intro](#devops-intro)
    - [CI-CD-CD](#ci-cd-cd)
  - [Vagrant](#vagrant)
    - [Vagrant : get started guide](#vagrant--get-started-guide)
    - [Vagrant with Hyper-V](#vagrant-with-hyper-v)
    - [Vagrant With Virtualbox](#vagrant-with-virtualbox)
    - [CMD (not powershell) terminal as admin :](#cmd-not-powershell-terminal-as-admin-)
    - [Vagrant Initial Steps](#vagrant-initial-steps)
- [set dns](#set-dns)
- [add to config fileconfig.hostsupdater.aliases = \["development.local"\]](#add-to-config-fileconfighostsupdateraliases--developmentlocal)
- [this is the script which works](#this-is-the-script-which-works)
- [Now access via](#now-access-via)
  - [Provisioning](#provisioning)
    - [Provision A Folder](#provision-a-folder)
    - [which](#which)
    - [update and upgrade](#update-and-upgrade)
    - [nginx](#nginx)
    - [Provisioning an environment](#provisioning-an-environment)
    - [Running your app](#running-your-app)
    - [Ubuntu Install Node](#ubuntu-install-node)
  - [Environment Variables](#environment-variables)
  - [Packer](#packer)
    - [Intro To Packer](#intro-to-packer)
    - [Packer simple commands](#packer-simple-commands)
  - [Provisioning](#provisioning-1)
    - [Provisioning can can be done via](#provisioning-can-can-be-done-via)
  - [Terraform](#terraform)
  - [Chef](#chef)
    - [Downloading Chef](#downloading-chef)
    - [Kitchen](#kitchen)
- [Docker](#docker)
    - [Install Docker](#install-docker)
    - [Hello World](#hello-world)
    - [DockerFiles](#dockerfiles)
    - [Building a docker file](#building-a-docker-file)
    - [Docker with ports](#docker-with-ports)
    - [Run docker in the background](#run-docker-in-the-background)
    - [NginX](#nginx-1)
    - [Node Sample App](#node-sample-app)
    - [Pushing Docker Container to Docker Hub](#pushing-docker-container-to-docker-hub)
  - [docker and node](#docker-and-node)
    - [server.js](#serverjs)
    - [Docker Environment Variables](#docker-environment-variables)
    - [Docker Compose - YAML multi-docker environments](#docker-compose---yaml-multi-docker-environments)
  - [.NET on Docker](#net-on-docker)
  - [Docker with .NET](#docker-with-net)
    - [Container sample: Run a simple application](#container-sample-run-a-simple-application)
    - [Container sample: Run a web application](#container-sample-run-a-web-application)
    - [Building a sample .NET Core application on Docker](#building-a-sample-net-core-application-on-docker)
    - [Worked Example With Commands](#worked-example-with-commands)
  - [Creating And Running Docker From Visual Studio](#creating-and-running-docker-from-visual-studio)
    - [Run a .NET ASP Core Web App On Docker](#run-a-net-asp-core-web-app-on-docker)
    - [Push New Docker Image To Docker Hub](#push-new-docker-image-to-docker-hub)
    - [Run Docker Image From Azure](#run-docker-image-from-azure)
- [Docker Images In Azure](#docker-images-in-azure)
  - [Push And Use A Docker Image From Azure](#push-and-use-a-docker-image-from-azure)
    - [Deploy Container Image In Azure From Docker Hub](#deploy-container-image-in-azure-from-docker-hub)
- [Kubernetes](#kubernetes)
  - [Kubernetes Terminology](#kubernetes-terminology)
  - [Orchestration](#orchestration)
  - [Kubernetes Basic Online Tutorial](#kubernetes-basic-online-tutorial)
    - [Windows Install kubectl](#windows-install-kubectl)
    - [Ubuntu Install Kubernetes](#ubuntu-install-kubernetes)
- [install on Linux 2](#install-on-linux-2)
  - [Kubernetes Verify](#kubernetes-verify)
    - [MiniKube](#minikube)
    - [Kubernetes Commands](#kubernetes-commands)
    - [Kubernetes Deployments](#kubernetes-deployments)
  - [Kubernetes Deployment Tutorial](#kubernetes-deployment-tutorial)
- [show all nodes](#show-all-nodes)
  - [Kubernetes Pods And Nodes](#kubernetes-pods-and-nodes)
  - [Extra Kubernetes Commands](#extra-kubernetes-commands)
  - [Kubernetes Services](#kubernetes-services)
  - [Kubernetes Service Tutorial](#kubernetes-service-tutorial)
  - [Puppet](#puppet)
  - [Ansible](#ansible)
    - [Enable Linux Ubuntu On Windows](#enable-linux-ubuntu-on-windows)
      - [Install Ansible On Ubuntu](#install-ansible-on-ubuntu)
    - [Install Ansible On Windows](#install-ansible-on-windows)
    - [Install Ansible On MAC](#install-ansible-on-mac)
    - [Creating 3 Virtual Machines On MAC](#creating-3-virtual-machines-on-mac)
    - [Ansible playbook](#ansible-playbook)
  - [Azure Devops](#azure-devops)
    - [Blockchain](#blockchain)
- [HyperV](#hyperv)
  - [Nested Virtualisation](#nested-virtualisation)
    - [NAT](#nat)
  - [Nano Server](#nano-server)
  - [Security Features](#security-features)
    - [VM Checkpoint](#vm-checkpoint)
  - [Failover Cluster](#failover-cluster)
  - [Shared Hard Drives .vhdx](#shared-hard-drives-vhdx)
  - [Active Memory Dump](#active-memory-dump)
    - [VM node fairness](#vm-node-fairness)
    - [VM Start Order](#vm-start-order)
  - [Storage Microsoft](#storage-microsoft)
    - [Storage QoS](#storage-qos)
    - [Commercial Cloud Storage Solutions](#commercial-cloud-storage-solutions)
  - [VMGroups](#vmgroups)
  - [VM Management Groups](#vm-management-groups)
  - [VM Migration](#vm-migration)
    - [VPN Split Tunneling](#vpn-split-tunneling)
    - [PSC Password Settings Container](#psc-password-settings-container)
    - [Offline Files lab](#offline-files-lab)
- [cyber](#cyber)
    - [202410 cyber](#202410-cyber)
      - [202410 vulnerability scanning tools](#202410-vulnerability-scanning-tools)
      - [202410 network scanning tools](#202410-network-scanning-tools)
      - [202410 cyber government bodies](#202410-cyber-government-bodies)
      - [202410 cyber corporate tools](#202410-cyber-corporate-tools)
      - [202410 osint](#202410-osint)
    - [202410 cyber games](#202410-cyber-games)
    - [202410 cyber labs](#202410-cyber-labs)
    - [202410 git](#202410-git)
  - [202410 reconnaisance](#202410-reconnaisance)
  - [202410 osint](#202410-osint-1)
  - [202410 social engineering](#202410-social-engineering)
  - [202410 scanning](#202410-scanning)
  - [202410 cyber attacking](#202410-cyber-attacking)
  - [202410 cyber controls](#202410-cyber-controls)
  - [202410 standards bodies](#202410-standards-bodies)
  - [202410 frameworks](#202410-frameworks)
  - [202410 nist](#202410-nist)
  - [202410 controls](#202410-controls)
  - [202410 monitoring](#202410-monitoring)
  - [202410 incidents](#202410-incidents)
  - [202410 types of attack](#202410-types-of-attack)
  - [202410 web site hacking](#202410-web-site-hacking)
  - [202410 response](#202410-response)
  - [202410 forensics](#202410-forensics)
  - [202410 passwords](#202410-passwords)
  - [202410 hashing](#202410-hashing)
  - [202410 intrusion detection and prevention](#202410-intrusion-detection-and-prevention)
  - [202410 incident response](#202410-incident-response)
  - [risk](#risk)
  - [202410 cyber terms](#202410-cyber-terms)
- [cyber glossary 1 of 3](#cyber-glossary-1-of-3)
  - [bastion host](#bastion-host)
  - [birthday attack](#birthday-attack)
  - [command injection](#command-injection)
  - [dd](#dd)
  - [dig = nslookup](#dig--nslookup)
  - [dirbuster](#dirbuster)
  - [exploit framework](#exploit-framework)
  - [metasploit](#metasploit)
  - [ids](#ids)
    - [securityonion ids](#securityonion-ids)
    - [squert and sguil](#squert-and-sguil)
    - [snort ids traffic monitor](#snort-ids-traffic-monitor)
  - [MAC Overflow Attack](#mac-overflow-attack)
  - [Vulnerability scanner](#vulnerability-scanner)
  - [Exploit framework - launch attacks](#exploit-framework---launch-attacks)
- [cyber glossary 2 of 3](#cyber-glossary-2-of-3)
  - [Bastion Host](#bastion-host-1)
  - [Syslog](#syslog)
  - [Birthday Attack](#birthday-attack-1)
  - [DIG = NSLOOKUP](#dig--nslookup-1)
  - [Tasting](#tasting)
  - [Kiwi Syslog](#kiwi-syslog)
  - [Nikto - web server vulnerability](#nikto---web-server-vulnerability)
  - [Packet Analyzer](#packet-analyzer)
  - [Hacking Groups](#hacking-groups)
  - [Certs](#certs)
- [cyber glossary 3 of 3](#cyber-glossary-3-of-3)
  - [802.1x](#8021x)
  - [Analysis Of network traffic](#analysis-of-network-traffic)
  - [Certifications In Cyber](#certifications-in-cyber)
  - [CFAA Computer Fraud And Abuse Act](#cfaa-computer-fraud-and-abuse-act)
  - [Credential Stuffing](#credential-stuffing)
  - [Crimeware - General Tools](#crimeware---general-tools)
  - [Dark Web](#dark-web)
  - [DTP Dynamic Trunking Protocol](#dtp-dynamic-trunking-protocol)
  - [EHR Electronic Health Record](#ehr-electronic-health-record)
  - [Man In The Middle Attack](#man-in-the-middle-attack)
  - [multihomed firewall](#multihomed-firewall)
  - [Netflow](#netflow)
  - [net user](#net-user)
  - [net groups](#net-groups)
  - [network segmentation](#network-segmentation)
  - [nslookup](#nslookup)
  - [os fingerprinting](#os-fingerprinting)
  - [packet analysis](#packet-analysis)
  - [penetration test steps](#penetration-test-steps)
  - [vulnerability scan steps](#vulnerability-scan-steps)
  - [incident response steps](#incident-response-steps)
  - [PIPEDA](#pipeda)
  - [protocol analysis](#protocol-analysis)
  - [Reverse Proxy Server](#reverse-proxy-server)
  - [Safe Harbor Privacy Principles](#safe-harbor-privacy-principles)
  - [service discovery](#service-discovery)
  - [shares](#shares)
  - [sharepoint](#sharepoint)
  - [sinkhole](#sinkhole)
  - [smurf attack](#smurf-attack)
  - [social media profiling](#social-media-profiling)
  - [syslog](#syslog-1)
  - [system isolation](#system-isolation)
  - [Sysvol](#sysvol)
  - [Targeted Attack And Tools](#targeted-attack-and-tools)
  - [trend analysis](#trend-analysis)
  - [Virtual Network Types](#virtual-network-types)
  - [vm sprawl](#vm-sprawl)
  - [WIDS Wireless Intrusion Detection](#wids-wireless-intrusion-detection)
  - [Wireless Analysis](#wireless-analysis)
  - [wireshark](#wireshark)
  - [Targeted Spray](#targeted-spray)
  - [Wordscrape - go through whole intranet](#wordscrape---go-through-whole-intranet)
  - [Aircrack-ng](#aircrack-ng)
  - [ArcSight SIEM](#arcsight-siem)
  - [Autopsy](#autopsy)
  - [Beaconing](#beaconing)
  - [Black hole](#black-hole)
  - [Blind FTP](#blind-ftp)
  - [Blue team](#blue-team)
  - [Bluejack](#bluejack)
  - [Snarf : steal data](#snarf--steal-data)
  - [Bluesnarf : steal data](#bluesnarf--steal-data)
  - [Bro Linux IDS](#bro-linux-ids)
  - [Cacti Logging](#cacti-logging)
  - [CAN Controller Area network](#can-controller-area-network)
  - [PLC Programmable Logic Controllers](#plc-programmable-logic-controllers)
  - [CAPTCHA](#captcha)
  - [CAR Corrective Action Report](#car-corrective-action-report)
  - [Cellebrite : extract mobile data](#cellebrite--extract-mobile-data)
  - [UFED - Extract data off mobiles](#ufed---extract-data-off-mobiles)
  - [Check Point : firewall](#check-point--firewall)
  - [CIS Center for Internet Security](#cis-center-for-internet-security)
  - [SANS](#sans)
  - [CISO](#ciso)
  - [COBIT](#cobit)
  - [CSIRT](#csirt)
  - [CVE](#cve)
  - [Cybersquatting](#cybersquatting)
  - [Hijacking](#hijacking)
  - [EMET](#emet)
  - [NX No Execute](#nx-no-execute)
  - [DEP Data Execution Prevention](#dep-data-execution-prevention)
  - [EnCase Forensic : Case Management](#encase-forensic--case-management)
  - [Flood Guard : prevent DDoS](#flood-guard--prevent-ddos)
  - [Latent = hidden](#latent--hidden)
  - [FTK Forensic Tool Kit](#ftk-forensic-tool-kit)
  - [Fuzzing](#fuzzing)
  - [Google Hacking](#google-hacking)
  - [Helix : Linux Live CD](#helix--linux-live-cd)
  - [Heuristic](#heuristic)
  - [Imperva SecureSphere WAF](#imperva-securesphere-waf)
  - [MITM Interception Proxy](#mitm-interception-proxy)
  - [Jump Box](#jump-box)
  - [escrow = 3rd party trust](#escrow--3rd-party-trust)
  - [M of N](#m-of-n)
  - [Kill Chain](#kill-chain)
  - [CVE Common Vulnerabilities and Exposures](#cve-common-vulnerabilities-and-exposures)
  - [MoA : Memorandum Of Agreement](#moa--memorandum-of-agreement)
  - [ModSecurity WAF](#modsecurity-waf)
  - [MRTG Multi Router Traffic Grapher SNMP](#mrtg-multi-router-traffic-grapher-snmp)
  - [Nagios = open source stats on services](#nagios--open-source-stats-on-services)
  - [NAPT = NAT](#napt--nat)
  - [NAXSI = nginX Anti XSS and SQL Injection](#naxsi--nginx-anti-xss-and-sql-injection)
  - [Nessus vulnerability scanner](#nessus-vulnerability-scanner)
  - [NetScout](#netscout)
  - [Nikto - web server vulnerability scanner](#nikto---web-server-vulnerability-scanner)
  - [NIST](#nist)
  - [Nmap network mapper](#nmap-network-mapper)
  - [OODA Observe, Orient, Decide, Act](#ooda-observe-orient-decide-act)
  - [OS Fingerprint = identify OS](#os-fingerprint--identify-os)
  - [OSINT Open Source Intelligence](#osint-open-source-intelligence)
  - [OSSIM Open Source Security Info Mgt](#ossim-open-source-security-info-mgt)
  - [OVAL language](#oval-language)
  - [OWASP Open Web App Security Project](#owasp-open-web-app-security-project)
  - [PAC Proxy Auto Config](#pac-proxy-auto-config)
  - [Palo Alto IDS](#palo-alto-ids)
  - [Password cracker](#password-cracker)
  - [PCI DSS](#pci-dss)
  - [PHI Personal Health Info](#phi-personal-health-info)
  - [PII](#pii)
  - [PVLAN Private VLAN](#pvlan-private-vlan)
  - [Privilege Escalation](#privilege-escalation)
  - [QRadar SIEM](#qradar-siem)
  - [Qualys cloud vulnerability](#qualys-cloud-vulnerability)
  - [rootkit](#rootkit)
  - [RPO Recovery point objective](#rpo-recovery-point-objective)
  - [RTO Recovery time objective](#rto-recovery-time-objective)
  - [SABSA](#sabsa)
  - [SANS SysAdmin, Network, Security](#sans-sysadmin-network-security)
  - [SCADA](#scada)
  - [SCAP baseline audit](#scap-baseline-audit)
  - [SCEP Certificate Enrolment](#scep-certificate-enrolment)
  - [SCP send files](#scp-send-files)
  - [SEH exception handler](#seh-exception-handler)
  - [SMTP Open Relay](#smtp-open-relay)
  - [SourceFire IDS](#sourcefire-ids)
  - [Splunk SIEM](#splunk-siem)
  - [SPML](#spml)
  - [taskkill](#taskkill)
  - [tasklist](#tasklist)
  - [tcpdump](#tcpdump)
  - [TOGAF](#togaf)
  - [Trusted Foundry](#trusted-foundry)
  - [UAT User Acceptance Testing](#uat-user-acceptance-testing)
  - [UEFI UNC](#uefi-unc)
  - [VAS Vulnerability Assessment](#vas-vulnerability-assessment)
  - [White Team : admin](#white-team--admin)
  - [Write Blocker](#write-blocker)
  - [XACML](#xacml)
  - [Xmas Attack](#xmas-attack)
  - [XSRF : Authenticated session attack](#xsrf--authenticated-session-attack)
  - [XSS Cross Site Scripting](#xss-cross-site-scripting)
  - [Zero day attack : new software](#zero-day-attack--new-software)
  - [Ports](#ports)
    - [LDAP SECURE WITH SSL 636](#ldap-secure-with-ssl-636)
    - [RADIUS 1812/3 OR 1645/6](#radius-18123-or-16456)
    - [TACACS+ port 49](#tacacs-port-49)
    - [LDP 389](#ldp-389)
    - [LDAPS 636](#ldaps-636)
  - [ADS Alternate Data Streams](#ads-alternate-data-streams)
  - [TTP Tactics, Techniques and Procedures](#ttp-tactics-techniques-and-procedures)
  - [SIEM Security Info and Event Mgt](#siem-security-info-and-event-mgt)
  - [Exfiltration = data out](#exfiltration--data-out)
  - [Exploits](#exploits)
    - [Flame](#flame)
    - [Operation Olympic Games](#operation-olympic-games)
    - [Mydoom](#mydoom)
    - [Shamoon](#shamoon)
    - [Melissa](#melissa)
    - [Zeroaccess rootkit](#zeroaccess-rootkit)
    - [Heartbleed vulnerability](#heartbleed-vulnerability)
  - [OpenSSL](#openssl)
  - [EXPLOIT MODULE](#exploit-module)
  - [PAYLOAD](#payload)
  - [Discovery scanner Nmap](#discovery-scanner-nmap)
  - [Banner Grabbing](#banner-grabbing)
  - [Lua scripting language](#lua-scripting-language)
  - [Footprint](#footprint)
    - [Network topology discovery](#network-topology-discovery)
  - [Fingerprint](#fingerprint)
    - [fpdns does DNS fingerprinting](#fpdns-does-dns-fingerprinting)
    - [hassh does SSH fingerprinting](#hassh-does-ssh-fingerprinting)
    - [ja3 does SSL fingerprinting](#ja3-does-ssl-fingerprinting)
  - [Burner phone](#burner-phone)
  - [Pivot Point of entry](#pivot-point-of-entry)
  - [httrack.com - website download](#httrackcom---website-download)
  - [Droplet - mini vm](#droplet---mini-vm)
  - [SSL3.0 old](#ssl30-old)
  - [bulletproof ISP](#bulletproof-isp)
  - [Google hacking](#google-hacking-1)
  - [Google Dork](#google-dork)
  - [Ripping = website copier](#ripping--website-copier)
  - [C2 = Command and Control](#c2--command-and-control)
  - [PIVOT POINT = HACKER POINT OF ACCESS](#pivot-point--hacker-point-of-access)
  - [APT Advanced Persistent Threat](#apt-advanced-persistent-threat)
  - [Pen test 6 RULES OF ENGAGEMENT](#pen-test-6-rules-of-engagement)
  - [CVSS](#cvss)
  - [WIFI pineapple](#wifi-pineapple)
  - [bash bunny](#bash-bunny)
  - [lan turtle](#lan-turtle)
  - [Dark Web Scanning](#dark-web-scanning)
  - [Hacking Techniques](#hacking-techniques)
  - [Password Crackers](#password-crackers)
  - [Hosting](#hosting)
  - [Hacker Tools](#hacker-tools)
  - [Hashing](#hashing)
  - [Offensive Tools](#offensive-tools)
- [red team tools](#red-team-tools)
    - [dirbuster](#dirbuster-1)
  - [burpsuite](#burpsuite)
  - [getent](#getent)
    - [hping3](#hping3)
  - [mac overflow attack](#mac-overflow-attack-1)
  - [tasting](#tasting-1)
  - [defensive tools](#defensive-tools)
    - [ids](#ids-1)
      - [securityonion](#securityonion)
      - [squert and sguil](#squert-and-sguil-1)
      - [snort packet/traffic monitoring](#snort-packettraffic-monitoring)
  - [sheep dip](#sheep-dip)
  - [neither red nor blue team tools](#neither-red-nor-blue-team-tools)
  - [degauss](#degauss)
  - [cyber random terms](#cyber-random-terms)
  - [cyber a-z terms](#cyber-a-z-terms)



## 202412 learning from baddie for business

- make content for tiktok fist and then distribute to other platforms
- be consistent eg 2 to 3 times a week
- focus on quality 
- keep remaking posts until you see traction
- try pinterest as well!!!
- see yourself as a content created
- main form of money is short form video creation
- digital assets ... make them 
- if you have a skill then create long form on youtube and use your short form social media to funnel the people you know onto the long form content from the short form social media sites
- youtube assets are digital assets over 5 to 10 years
- sell digital products eg books, songs
- get and keep a stable income !!! first !!! that is where i am  !!!
- social media will actually pay you to keep and stay on their platform
- tiktok live streams even faceless ... try it ... 
- tiktok shop affiliate
- tiktop creativity program - post videos over 1 minute
- facebook pays ads on reels
- facebook pays in-stream ads for videos over 3 minutes
- instagram ads on reels ... low payouts ...
- instagram add url to a) caption b) story in sticker icon => link => url c) bio d) reel e) pay for ad with link
- can post shorts to pinterest, twitter, youtube shorts, snapchat, instagram, facebook, tiktok
- can share facebook reels to groups within that niche
- facebook monetisation for videos over 4 minutes
- ecommerce store 34000 dollars wow
- tiktok live streams for pointing to the store



## 202412 cloud

CDK cloud development kit



## 202412 web

zod are types for javascript

?= operator returns [error, null] or [null, result] 

```js
async function fetchData() {
  try {
    const response = await fetch("https://api.example.com/data");
    try {
      const data = await response.json();
      return data;
    } catch (parseError) {
      console.error('Failed to parse JSON:', parseError);
    }
  } catch (networkError) {
    console.error('Network error:', networkError);
  }
}
// becomes
async function fetchData() {
  const [networkError, response] ?= await fetch("https://api.example.com/data");
  if (networkError) return console.error('Network error:', networkError);
  const [parseError, data] ?= await response.json();
  if (parseError) return console.error('Failed to parse JSON:', parseError);
  return data;
}
// or add error handler
function customErrorHandler() {
  return {
    [Symbol.result]() {
      return [new Error("Custom error message"), null];
    },
  };
}

const [error, result] ?= customErrorHandler();
// overall we can simplify to one line
const [error, data] ?= await fetch("https://api.example.com/data");
// also
await using [error, resource] ?= getResource();
// handle errors first ... fail fast

```







## 202410 cloud 

## 202410 cloud history

aws 2006 created

## 202410 aws

pillars
- security
- performance
- reliability
- operation
- cost


## 202410 cloud terms

private cloud runs on your local servers

aws has 16 geographic regions

scale horizontally builds more nodes

scale vertically makes nodes more powerful

self healing

public cloud hosted on shared servers

private cloud self hosted on dedicated servers

hybrid cloud mix of private and public cloud servers

aws iam identity access management manages users and roles

rbac role based access control

jea just enough administration

cloud federation provides trust and authentication

saml security assertion markup language provides xml authentication

sso single sign on 

openid connect is built on oauth2.0

kms key management service to store keys

cloudwatch logs

subnet

route 53 dns

load balancing

rds relational database service

data lake raw unprocessed data

aws inspector does vulnerability management

service provider eg aws google azure

compute is cpu and ram

compute storage network is cpu ram hard disk and network all of which are required to run a virtual machine

container virtualises the operating system kernel on top of which we run some code using 1) container image 2) runtime 3) instruction set

docker provides running containers

dockerfile provides a) settings b) applications c) services

docker image stored in docker hub

docker engine creates new docker containers

provision an image is to make it ready to run

kubernetes orchestrates docker containers

k8s = kubernetes

kubectl is kubernetes command line tool

minikube can be used to learn kubernetes

vagrant by hashicorp builds develop and test environments

packer by hashicorp builds production environments

terraform by hashicorp builds configuration management using yaml and go

puppet uses agent and is written in ruby where desired state configuration is used to 

ansible by red hat is complex agentless tool using yaml and python to deploy software, configure systems, update systems, provide continual deployment of software, is a simpler version of puppet

ansible configures and manages docker after deployment

saltstack

chef by progress uses agent to provide configuration management using ruby

Chef by Progress - configuration management for software using Ruby - best choice for changeable environments, has agent on nodes, $14k/year for 100 nodes

immutable cannot be changed

jenkins older tool written in java and it provides testing and ci cd deployment

spinnaker is app configuration management tool by oracle

microservices

redis is in-memory database and cache

rdb redis database can persist hourly and daily backups

google compute provides virtual machines

azure rackspace analyses data

puppet version control system config

conjur manages secrets

cloud foundry pushes apps to live instantly

aws cloud formation creates templates to make deployment standardised

capex buy hardware up front

opex operational expenditure pay monthly

iaas lets you build from the ground up

paas means the provider manages the hardware and operating system

risk register list of items which can break

caas communications as a service

caas containers as a service

maas monitoring as a service

naas network as a service

faas function as a service lambda

infrastructure as cloud fully manage using yaml and json

sqs simple queue service one by one

swagger version your api

elk stack elastic search + logstash + kibana

apache lucene is open source linux search software using java 

elastic search allows searching of logs for information since 2010

logstash loads data into aws search engine for data processing

kibana runs analytics on data

data firehose delivers real time streaming data from a provider to a destination with a single unit maximum size of 1MB

grafana visualises logs

prometheus monitors data and is written in go

multi tenant app has one host but multiple users

self healing detects anomalies and redeploys containers

nginx load balancer

apache spark batches work done eg data science or machine learning on a single machine or cluster

apache hadoop allows scaling up by distributing work across sets of clusters, thus ensuring reliability even if a cluster fails

arn amazon resource name is an endpoint

ecr elastic container registry is list of containers 

aws fargate lets aws manage the containers running aws lambda code

ECS elastic container service

EKS elastic kubernetes service

container isolation

aws signer ensures code is hashed

aws code whisperer can highlight security issues as code is being written

aws code guru security can scan for code vulernabilities

docker compose uses yaml to create and manage apps which span across multiple docker containers

docker swarm is a simplified version of kubernetes and provides quick scaling

docker engine builds and runs your docker files so they go live and are usable

dtr docker trusted registry of docker images

bml build measure learn used in cloud computing to iterate quickly

hcl hashicorp configuration language is JSON for deloyment similar to YAML

runbook automation 

privilege identity management is used to manage administrators and what they can do

dsc desired state configuration 

express route is like a dedicated leased line

privilege session management

conjur manages identity and secrets

idempotency uses random hashes to ensure a repeatable operation is not repeated twice unintentionally eg a shopping cart 'buy' button

openshift by red hat runs containers

aws fault domain has a set of power and network

aws availability set is a group of aws fault domains so that if one goes down the other stays up

aws outpost runs aws services on local machine

openstack is open source competitor to aws for private cloud and is supported by dell and redhat

rackspace = openstack and just tend to make the servers available and storage

aws iot greengrass is iot pushed to the edge of the cloud for deployment and monitoring

elastic beanstalk deploys an agnostic application framework so you dont have to worry about the underlying hardware or operating system or library versions running the software - you just deploy your app there and let aws manage the app environment.  it's like netlify where they just manage the app completely and you just deploy it there and aws does all the rest

enrypt data at rest, in transit, vms, databases, logs

log security events, authentication, should be encrypted, should be audited

aws cloudwatch does logging and analysis

aws cloudtrail logs all internal configuration changes

sns simple notification service for alerts

compliance eg fips, pci, iso

framework is set of standards eg nist 

asymmetric keys slow but secure

symmetric keys fast but short term

ssl symmetric session key

ra registration authority approves certificate providers

ca certificate authority approves certificates

## 202410 data

data repository is software to store data

data warehouse is a suite of repositories

data lake has unstructured raw data

data mart is a subset of a data warehouse for a particular purpose

data cube multi dimensional eg time

## 202410 saas

saas is pay monthly so easier to manage costs

saas can easily scale up with low up front costs

saas removes need for local servers etc

saas lets provider manage hardware operating system libraries and underlying support structure eg security, uptime, availability, patching, monitoring

saas crm manages customer relationships eg salesforce

saas erp enterprise resource planning is a suite of apps to run a company

saas legal data protection issues - where and how is your data stored

saas limitations - customisation and integration

transport mode is computer to server over vpn

tunnele mode is router to router over vpn

## 202410 security

something you know password

something you have token

something you are biometric

multifactor

sso

saml pass federated details

oauth open authentication standards

openid authenticates and gains access via oauth

dac discretionary explicit permissions

mac mandatory by government classification

rbac role based access

abac attribute based combination of the above plus other eg time of day

object = user or resource

authenticate = grant access

authorise = level of access once authenticated

network segmentation through switch router vpn firewall

microsegmentation depending on eg identity and access roles and permissions

ids

ips

network ids ips

host ids ips

antivirus

microservices communicate via messages

devsecops 

nagios open source log monitor and alert

zero trust means to trust no one

security of users, network and data

## 202410 vm

start

stop

storage

snapshot

## 202410 data

voice

video

data in transit 

data at rest

data in use

data being created

data already classified

shared responsibility - aws does hardware, os, firewall, network, endpoints and the customer secures data, config, user management

## 202410 encryption

key archival server archives old keys

ipsec is encryption in transit providing encryption, integrity, anti-replay, non-repudiation

ah provides integrity, authentication, anti-replay

esp provides integrity, authentication, encryption, anti-replay

ike facilitates key exchange

isakmp internet security association and key management protocol 

sa security association is live connection

rsa is PKI and can be used to creates and securely exchange session keys

aes advanced encryption standard is for sessions

dh diffie hellman creates symmetric key over a public channel

stream cipher individual bytes

block cipher aes des

pptp vpn tunnel

l2tp/ipsec

gre/ipsec cisco

sstp over https

openvpn over https

## 202410 docker commands

```shell
# build an image
docker build
# pull from internet
docker pull
# run
docker run
# list
docker ps -a
```

## 202410 google cloud

gke google kubernetes engine

google stackdriver alerts monitor log

## 202410 azure cloud

azure application inisghts monitors performance of live apps

aks azure kubernetes service

azure stack is a suite of software and services which can run in azure, on the edge, or locally

azure stack hub runs azure services locally

azure data lake has premium 15 cents per gigabyte, hot 2 cents, cool 1 cent, cold 0.4 cents, archive 0.2 cents 

## 202410 cloud benefits

subscription

speed of change

fail fast

patch quickly

update quickly

scale up in machine power

scale out in numbers

innovate

self healing 

availability match geographical nodes

monitor compliance

## 202410 saas iaas paas

iaas infrastructure is the raw virtual machines, networks, storage, clusters and load balancing

pass platform is the operating system configured to suit the user and also libraries installed, and databases 

saas software is the custom app running live for the user

iaas examples sccm, ec2, azure rackspace, google compute

paas examples are sql, dot net

## 202410 cloud history

mainframes with thin clients

hardware virtualisation in 2000s

docker containers



### big data

- Apache Hadoop allows for distributed processing 
- Apache Spark runs data engineering on clusters
- Apache Hive stores big data to SQL
- Apache Kafka is used for big data stream processing



### azure

- application insights - app stats and issues
- DocumentDB is NoSQL
- ExpressRoute
- HDInsight is big data analytics
- StorSimple - cloud NAS/SAN
- Traffic Manager - DNS and load balancing
- Fabric Controller manages VM clusters
- identity
  - can sync with local AD
  - ADFS Federated Services can provide identity services eg 2FA across platforms

# AWS

#### IAM Security

- Principal is the person we are giving permissions to 
- Action is what is being applied
- Resource is which properties are being accessed

Least Privilege - minimal permissions

##### IAM Policy

    - Identity Policy applies to a principal
    - Resource Policy applies to a resource

#### Network Security

Defense in depth : multi-layered approach

##### VPC Virtual Private Cloud

This is a logical network to which permissions can be applied

It consists of 

- Subnet (ranges of IP)
- Route tables to direct traffic
- Gateway to communicate with outside world


### AWS secure web app demo 

in Intro to AWS Cloud Security Course at Secure Communication part

```
Goal : communicate web app to database in AWS
decrypt data with key
view app logs CloudTrail
view aws logs CloudWatch
```

## AWS Container Services

- RDS - we secure data and access
- EMR Elastic Map Reduce allows Big Data Frameworks to run in the cloud - we secure data and access
- Elastic Beanstalk - deploy apps - user configures firewall and encrypts data

## AWS Abstracted Services

```
customer receives endpoint url

S3 storage
DynamoDB (NoSQL)
SQS Simple Queuing Service which can trigger a lambda function
Glacier stores cold archive data
```

## AWS Environment Security

### IAM

```
Can provide access to users
Can authorize access to resources
Can authorize federated users eg Facebook or Google users in IAM=>IdentityProviders

IAM Policy to allow open access
{
"Sid":
"Effect":....
"Action":"dynamodb":*",
"Resource":"*"
}

IAM for one table
{
"Sid":
"Effect":"Allow",
"Action [
 "dynamodb:Get*",
 "dynamodb:Query"
],
"Resource":"arn:aws:dynamodb":*:*:table/MyTable"
}

```

### AWS Cloudwatch Application Logs

```
Important to have application logs for troubleshooting
Can query logs
Alarms
  Alert admins with SNS Simple Notification Service
  Autoscaling when CPU exceeds EC2 threshold (also called elastic scaling)
Demo
	Cloudwatch > Logs > /name-of-service/name-of-event/hash-of-log
	Logs => can create an alarm also => metrics => lambda => select function => choose to
    alarm on errors
  

```

### Amazon Inspector : Vulnerability Scanning

```
Provides vulnerability scan
Recommend best practice
Can install agents on EC2 instances also directly
Limit possibility of cyber attack
```








# AWS Container Security

AWS manage OS and service

AWS and customer share

IAM

firewall

Customer secures data

## AWS VPC Virtual Private Cloud

Lab in ‘Intro to AWS Cloud Security’ Pluralsight

Create a subnet

public

private

Gateway to internet or private network

NAT allow private instances access to public internet

Virtual private cloud consists of a least 2 subnets : one private and one public

Private subnet

- Database
- Background Services

Public subnet

- NAT Gateway
- Web instances

both subnets connect to a router which connects to the internet

should restrict unauthorised access

### AWS KMS key service

- Customer Master Key can be managed by customer or AWS
- KMS protected in HSM hardware module

### AWS Example : Bank

Access via API which calls database. Data is encrypted on database but decrypted with KMS key and sent to customer

### RDS relational database

### EMR big data

### Elastic beanstalk - app deployment

### AWS Environment Variables

In JSON files AWS keys can be kept in %USERPROFILE%.aws\\credentials file for example

[default]
aws_access_key_id=<your access key id>
aws_secret_access_key=<your secret access key>

## Serverless Computing

Serverless = function-as-a-service

# Load Balancing

NGINX
API Gateway
nginx.com
AWS Route53
Auto scaling
NGINX controller
Caching content
Content distribution networks
AWS Pattern
AWS Quick Start guide to NGINX
Load balancers solve the problem of 
   Performance
   Scale up : Vertical : More CPU/RAM/Hard Drive
   Scale out : horizontal : add more computers
   Availability
   Economy
Server-side load balancers
Network load balancers : OSI layer 3 : good for balancing raw network load
Application load balancers : OSI layer 7 : more advanced as content of packets known
IAAS Infrastructure As A Service - render VM via API

## Types Of Load Balancer

### Cloud

Elastic Load Balancer (AWS)

ALB Application Load Balancer

NLB Network Load Balancer

### Ported from real machines

### Software Load Balancer
Installed on top of OS

### Global Route Balancing With Route 53
Enables you to direct your users to the closest endpoint geographically around the globe
Geolocation routing allows specifying endpoints by region geographically

### Latency-based routing
Detects closest region based on lowest DNS latency which beats geographic distance

## Considerations Of Load Balancing

### Scaling Infrastructure

Must be able to register and de-register nodes from load balancing pools through automation

### Scaling Load Balancers

Must be able to scale load balancers

### NGINX Load Balancing

- NGINX is an Application Deliver Contoller
- NGINX is a load balancer
- NGINX is a reverse proxy
- NGINX can load balance TCP, UDP, HTTP, HTTPS, Email
- NGINX is extensible via C and LUA
- NGINX has MODSECURITY3 which turns NGINX into a WAF Web Application Firewall
- NGINX offers authentication via JWT web tokens`






# infrastructure as code

## contents

- [infrastructure as code](#infrastructure-as-code)
  - [contents](#contents)
  - [bash](#bash)



## bash

```
cht.sh
when-life-gives-you-lemons-write-better-error-messages
alias myip=curl 1.2.3.4
function mkcd() { mkdir -p "$@" && cd "&@" }
function gitpush() { git add . && git commit -m "$@" && git push }
/.bash_profile
  alias chrome="open -a 'Google Chrome'"
```



# Cloud Labs

### Install AWS Linux 

```
EC2 => launch => choose AMI => Free => Launch => Key pair => Store
### restric access
chmod 400 keypair.pem
EC2 => instance => connect => use given code to connect
```

### AWS RDS database access

```
Create mysql database
add security group with inbound and outbound rules
can configure inbound rules to only allow set ip addresses
```

### AWS Securing Access To S3

```
view files
create public files
restrict access to bucket
 - public
 - access control list
 - bucket policies

Lab
Create bucket
Add image
Make image public
Click on URL to view image in browser

Access by 
- public ?
- access control lists
- advanced bucket policy for others to access eg restrict access per user in a shared s3
   bucket

```

### Installing Linux with a GUI

```
# install basic terminal tools
sudo apt install tmux git ranger vim
# 2GB download takes a while
sudo apt install lubuntu-desktop -y
# List Block Storage Volumes ie Drives
lsblk
# create a filing system on volume /dev/xvdb
sudo mke2fs /dev/xvdb
# go to /mnt path to get on this volume
sudo mount /dev/xvdb /mnt   
```

### Windows with RDP

Lab : creating a VM in Azure

# DevOps Intro

[https://github.com/spartaglobal/new-curriculum/tree/master/devops/mutable-pipelines/devops-intro](https://github.com/spartaglobal/new-curriculum/tree/master/devops/mutable-pipelines/devops-intro)

### CI-CD-CD

Continuous Integration

Continuous Delivery

Continuous Deployment

## Vagrant

### Vagrant : get started guide

[https://learn.hashicorp.com/vagrant/#getting-started](https://learn.hashicorp.com/vagrant/#getting-started)

Vagrant can use scripts from `Packer`, `Chef` or `Ansible` to provsion and create and run virtual machines

### Vagrant with Hyper-V

```
# enable with 
Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Hyper-V -All
# create and run first default vm  (this failed on Windows!)
vagrant box add hashicorp/bionic64
# show machines
vagrant box list
vagrant up 
```

### Vagrant With Virtualbox

[https://github.com/spartaglobal/new-curriculum/tree/master/devops/mutable-pipelines/dev-environments](https://github.com/spartaglobal/new-curriculum/tree/master/devops/mutable-pipelines/dev-environments)

```
choco install virtualbox -y
choco install vagrant -y
restart-computer
```


Virtual box drivers are not installed !
Manually install : right click on .inf and install

### CMD (not powershell) terminal as admin :
sc start vboxdrv

Control panel => Network Adapters => VBox Host Only Network 
 => Properties => Install => Service => Add => Oracle 
 => choose the only service there => OK

Remove HyperV

### Vagrant Initial Steps

Vagrant files are written in Ruby!

```bash
# Create Vagrantfile
vagrant init

# Set a more specific version
vagrant init ubuntu/xenial64

### This is the copy of the Vagrant file which works now
Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/xenial64"
end

# In windows, make sure HyperV is not conflicting with VirtualBox - turn it off and reboot
bcdedit /set hypervisorlaunchtype off          (on or auto to restore it)

# turn on (5-10 minutes)
vagrant up

# log in
vagrant ssh

# update
sudo apt-get update -y

# install nginx
sudo apt-get install nginx -y

# start nginx
sudo systemctl start nginx

# check if running
ps aux | grep nginx
service nginx status

# start also with this command
sudo service nginx start/stop
    

# see which service is using port 80
netstat -tulpn | grep :80

# if it works you can now do, in a browser
http://localhost:80  
# and a web page will appear

# reload machine with new configuration
vagrant reload

# or

# take down vm then boot up again

```bash
vagrant destroy -f && vagrant up
```

# set dns

```bash
vagrant plugin install vagrant-hostsupdater
```

# add to config fileconfig.hostsupdater.aliases = ["development.local"]

# this is the script which works


```bash
Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/xenial64"
  config.vm.network "private_network", ip: "192.168.10.100"
  config.hostsupdater.aliases = ["development.local"]
end
```

# Now access via 

http://192.168.10.100

http://development.local


## Provisioning

[https://github.com/spartaglobal/new-curriculum/tree/master/devops/mutable-pipelines/provisioning](https://github.com/spartaglobal/new-curriculum/tree/master/devops/mutable-pipelines/provisioning)

Provision = configure and setup an environment

- Folders
- Files
- Programs
- Scripts

### Provision A Folder

```bash
# maps /app to /app on VM

Vagrant.configure("2") do |config|

  config.vm.box = "ubuntu/xenial64"
  config.vm.network "private_network", ip: "192.168.10.100"
  config.hostsupdater.aliases = ["development.local"]

  # Synced app folder
  config.vm.synced_folder "app", "/app"
  config.vm.synced_folder "c:/app", ls"/app"  # windows

end
```

### which

```bash
# find out the path to an executable
which ruby
```

### update and upgrade

```bash
# update metadata
sudo apt update
# upgrade
sudo apt-get upgrade -y
```

### nginx

```bash
sudo apt-get install nginx -y
```

### Provisioning an environment

```bash
mkdir environment
cd environment
touch provision.sh

# add this to provision.sh

#!/bin/bash

sudo apt-get update -y
sudo apt-get upgrade -y
sudo apt-get install nginx -y

sudo apt-get install python-software-properties
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt-get install nodejs -y
sudo npm install pm2 -g


# Now add this provisioning to our Vagrant script

Vagrant.configure("2") do |config|

  config.vm.box = "ubuntu/xenial64"
  config.vm.network "private_network", ip: "192.168.10.100"
  config.hostsupdater.aliases = ["development.local"]

  # Synced app folder
  config.vm.synced_folder "/Users/Shared/Vagrant/starter-code/app", "/home/ubuntu/app"

  # Provisioning
  config.vm.provision "shell", path: "environment/provision.sh"

end

# Try running the app with (on Windows)

vagrant destroy -f; vagrant up; vagrant ssh 

# also play around with adding data to files remotely
# add to new file
echo hello > testfile.txt
echo ' ' >> .bashrc 
echo hello >> .bashrc
echo ' ' >> .bashrc
echo 'export VAR_01=variable01' >> .bashrc
echo 'export VAR_02=variable02' >> .bashrc
# also
echo 'test' >> /home/vagrant/.bashrc

# This is the sample
require 'spec_helper'

describe package('nginx') do
  it { should be_installed }
end

describe service("nginx") do
  it { should be_running }
  it { should be_enabled }
end

describe port(80) do
  it { should be_listening }
end

describe package('nodejs') do
  it { should be_installed }
end

describe command('nodejs --version') do
  its(:stdout) { should match /v6./ }
end

describe package('pm2') do
  it { should be_installed.by('npm') }
end

describe package('git') do
  it { should be_installed }
end

describe command('git --version') do
  its(:stdout) { should match /2\.7\../ }
end
```

### Running your app

```bash
vagrant ssh
cd ../ubuntu/app
npm install
node app.js

# on local machine go to 
http://development.local:3000 and the test app should appear
```






### Ubuntu Install Node

```bash
#!/bin/bash
sudo apt update -y
sudo apt upgrade -y
sudo apt install nginx -y
sudo apt install python-software-properties
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt install nodejs -y
sudo npm install pm2 -g
```






## Environment Variables

```bash
#!/bin/bash

sudo apt-get update -y
sudo apt-get upgrade -y
sudo apt-get install nginx -y

sudo apt-get install python-software-properties
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt-get install nodejs -y
sudo npm install pm2 -g

echo 'hello' > testfile.txt

echo ' ' >> .bashrc 
echo 'export VAR_01=variable01' >> .bashrc
echo 'export VAR_02=variable02' >> .bashrc
echo 'export VAR_03=variable03' >> /home/vagrant/.bashrc

echo 'VAR_01 is ' + $VAR_01
echo 'VAR_02 is ' + $VAR_02
echo 'VAR_03 is ' + $VAR_03

echo ' ' >> .bashrc 
echo 'export VAR_01=variable01' >> .bashrc
echo 'export VAR_02=variable02' >> .bashrc
echo 'export VAR_03=variable03' >> /home/vagrant/.bashrc

# does not work
echo 'VAR_01 is '
echo $VAR_01
echo 'VAR_02 is '
echo $VAR_02
echo 'VAR_03 is '
echo $VAR_03
echo 'VAR_01 is ' + echo $VAR_01

# works
echo 'echo $VAR_01' >> test.sh
sudo chmod 777 test.sh

# does not work
./test.sh

# works
echo '=============================='
echo 'The tail contents of .bashrc :'
tail .bashrc
```

## Packer

### Intro To Packer

Packer creates images and runs them on AWS

choco install packer

Packer creates machine images

Packer with devops to build a new server

Packer IAAS

Packer produces replaceable images

Vagrant can replaced by Packer

### Packer simple commands

```bash
choco install packer
packer validate template.json
# create and run an AWS snapshot from which to build an image
packer build template.json
```

## Provisioning

Creates and runs a virtual machine from scratch

VM template can be used to provision a new virtual machine

### Provisioning can can be done via

Chef

Puppet

Ansible

Powershell

Bash

## Terraform 

by HashiCorps - provisioning

[Terraform by HashiCorp](https://www.terraform.io/)

## Chef

Vagrant

    Crude

Chef

    Fully automated upgrade to Vagrant
    
    Use Ruby
    
    CDK Chef Development Kit
    
        chef
        chef-client
        knife
        Test Kitchen
        ChefSpec
        CookStyle
        FoodCritic
        InSpec
        
    
    Chef workstation
    
        
    
        Create 
        
            Cookbook
            Recipe
        
            Test Kitchen
            
        Test cookbook
            
        Talk to Chef Server using 
        
            knife
            chef
        
        Synchronise versions
        
        Ensures critical data stored in data bags
        
        Replaces ChefDK
            
            
        
        
    Chef Client Nodes 
    
        these are the machines managed by Chef
        
        Chef client is installed on each node
        
            used to configure client to desired state
            
            performs all tasks configured in run-list
            
            pull down any config data from server
            
            uploads completed data to the server
    
    Chef Server
    
        Stores
        
            configuration data
        
            cookbooks
        
            Policies
        
            Metadata describing each node
            
    Chef Supermarket
        
        Stores community cookbooks

### Downloading Chef

    Download from 
    
        https://downloads.chef.io/chefdk/
    
    Vagrant 
    
        Install from https://www.vagrantup.com/downloads.html
        
    Create a folder and run
        
        chef generate cookbook node

### Kitchen

    Runs all tools
    
    Create cookbook first = container
    
        Kitchen create
        Kitchen converge
        
        One cookbook can have 2 recipies
            Eg
                One for Node
                One for Mongo
    
    Chef generate cookbook node
    
    Then create recipes which are the provisioning script which gets executed
    
        Eg Python
        Eg MongoDB
    
        Package "nginx"   does  apt-get install nginx/ apt-get update.../ apt-get upgrade /  npm install / npm update / npm upgrade
        
        
    
    Then command 'kitchen create'

Chef Attributes

Chef Template

Chef CI

Unit Test

    Package "nginx"
    Include_recipe "nodejs"
    Nodejs_npm 'pm2'
    Service "nginx" do
        Action [  :enable, :start  ]
      End
    
    
    Kitchen test (is a unit test)
    
        runs the whole kitchen

Integration test

    Runs the recipes

ChefSpec = unit testing application

    Chef unit test means 'will this work in theory'

InSpec = Integration testing application

    Integration test in chef means 'have you actually run it'

source “https://supermarket.chef.io” cookbook `nodejs`,`~5.0.0.0` metadata

kitchen verify - runs the integration test

kitchen diagnose –all

Make a change

    chef exec
    rspec 
    
        . . run unit tests
        
    kitchen converge
    
    kitchen verify
    
    kitchen test
    
    Then push to github



# Docker

Docker is the world’s leading software container platform.

Docker is a container technology in which containers are packed up with necessary libraries and dependencies in a standardized unit for software development

[https://github.com/spartaglobal/new-curriculum/tree/master/devops/orchestration-and-containerization/docker-intro](https://github.com/spartaglobal/new-curriculum/tree/master/devops/orchestration-and-containerization/docker-intro)

### Install Docker

[https://hub.docker.com/search?offering=community&type=edition](https://hub.docker.com/search?offering=community&type=edition)

### Hello World

```bash
docker --version
docker run hello-world

# download and run ubuntu and load up a bash command line inside the ubuntu
docker run -it ubuntu bash

# list images
docker image ls
# list containers
docker container ls --all

# run ubuntu with more advanced command
docker run --interactive --tty ubuntu bash

# install ping
apt-get install -y iputils-ping

# hostname
hostname
```

### DockerFiles

```bash
FROM ubuntu:16.04

RUN apt-get update -y
RUN apt-get upgrade -y
```

### Building a docker file

```bash
docker build .

# tag with a name

docker build . -t simple-app

# run the command from the parent folder
docker build simple-app --tag simple-app

# view images
docker images

# run an image
docker run simple-app

# running images
docker ps

FROM ubuntu:16.04

RUN apt-get update -y
RUN apt-get upgrade -y
RUN apt-get install nginx -y

# run nginx in foregreound mode
CMD nginx -g 'daemon off;'

## rebuild and run
docker build . -t simple-app
docker run simple-app
```

### Docker with ports

```bash
docker run -p 80:80 simple-app
```

### Run docker in the background

```bash
# start docker as a background service
docker run -p 80:80 -d simple-app
# stop it
docker stop <<id>>
docker rm <<id>>

# remove image
docker rmi <<id>>
```

### NginX

```bash
# download and run docker instance running nginx
docker run --detach --publish 80:80 --name webserver nginx 

# view the instance in your browser by going to http://localhost 

# stop the container 
docker container stop webserver
# start it
docker container start webserver
# remove it
docker container rm <<name1>> <<name2>>
```

### Node Sample App

```bash
# download it
git clone https://github.com/dockersamples/node-bulletin-board
cd node-bulletin-board/bulletin-board-app
# build it
cd .. (so we are in node-bulletin-board folder)
docker build bulletin-board-app --tag bulletinboard:1.0
# run it
docker run --publish 8000:8080 --detach --name bb bulletinboard:1.0
# view app at http://localhost:8000
# remove running container
docker rm bb --force
```

### Pushing Docker Container to Docker Hub

```bash
Docker Hub => Repositories => Create
philanderson888/test-node-app

# on the Docker CLI
docker tag bulletinboard:1.0 philanderson888/test-node-app
docker push philanderson888/test-node-app
```

## docker and node

http://toobler.com/blog/how-to-get-a-node-js-application-into-a-docker-container
        
```json
package.json
{
    “name”: “docker_web_app”,
    “version”: “1.0.0”,
    “description”: “Node.js on Docker”,
    “author”: “First Last <first.last@example.com>”,
    “main”: “server.js”,
    “scripts”: {
        “start”: “node server.js”
    },
    “dependencies”: {
        “express”: “^4.13.3”
    }
}
```

### server.js

```js
'use strict';
const express = require('express');
// Constants
const PORT = 8080;
// App
const app = express();
app.get('/', function (req, res) {
res.send('Hello world\\\\n');
});
app.listen(PORT);
console.log('Running on <http://localhost>:' + PORT);

# Create a Dockerfile
touch Dockerfile
    
### Build image from LTS 'argon' version of node
FROM node:argon

### build working directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

### install dependencies    
COPY package.json /usr/src/app/
RUN npm install
            
### copy source code into docker image
COPY . /usr/src/app
```

### Docker Environment Variables

The standard for protecting sensitive credentials in production environments is to use Environment Variables Docker, via docker-compose and docker-compose.yml, easily allows developers to introduce environment variables and values, but you don’t want to commit those to a repo, so the answer is creating a docker-compose.override.yml file on your local machine which contains the sensitive information: The information in docker-compose.override.yml is added to (or overrides) the directives in docker-compose.yml. Since git and mercurial will allow you to commit docker-compose.override.yml files, the other important step is adding your docker-compose.override.yml file to your .gitignore or .hgignore file, preventing the file from being seen from the two version control tools. docker-compose.override.yml

### Docker Compose - YAML multi-docker environments

Docker Compose provides configuration and running of multi-docker environments using YAML

## .NET on Docker

## Docker with .NET

```
How to run an [ASP.NET](<http://asp.net/>) web application inside a Docker container

<https://blogs.msdn.microsoft.com/allthingscontainer/2016/10/04/>
     windows-containers-how-to-containerize-a-asp-net-web-api-application-
     in-windows-using-docker

<https://docs.microsoft.com/en-gb/virtualization/windowscontainers/index>

<https://channel9.msdn.com/Blogs/containers/Containers-101-with-Microsoft-and-Docker>
```

[https://hub.docker.com/r/microsoft/dotnet/](https://hub.docker.com/r/microsoft/dotnet/)

### Container sample: Run a simple application

```
You can quickly run a container with a pre-built .NET Core Docker image, based on the .NET Core console sample.

Type the following command to run a sample console application:

docker run --rm mcr.microsoft.com/dotnet/core/samples

```

### Container sample: Run a web application

```
You can quickly run a container with a pre-built .NET Core Docker image, based on the ASP.NET Core sample.

Type the following command to run a sample web application:

docker run -it --rm -p 8000:80 --name aspnetcore_sample mcr.microsoft.com/dotnet/core/samples:aspnetapp

```

### Building a sample .NET Core application on Docker

https://docs.microsoft.com/en-us/dotnet/core/docker/building-net-docker-images

Clone the sample app

```bash
git clone <https://github.com/dotnet/dotnet-docker/>
```

Move to the root directory of this repository then type

```bash
cd samples

cd aspnetapp

docker build --pull -t aspnetapp .

docker run --name aspnetcore_sample --rm -it -p 8000:80 aspnetapp
```

### Worked Example With Commands

```bash
# list running containers
docker container ls

# remove container
docker container kill ce2df9017968

# list images
docker image ls

# list images with id
docker images -a

# remove image
docker rmi 99f959836f85

# run docker image
docker run --name aspnetcore_sample --rm -it -p 8000:80 aspnetapp

# Type <http://localhost:8000> and view a running ASP app

```

## Creating And Running Docker From Visual Studio

### Run a .NET ASP Core Web App On Docker

Make sure Docker Desktop is running

File, New [ASP.NET](<http://asp.NET>) Core web app and include Docker support or Project, Right click and add docker support.

Choose Linux (Not Windows)

Build and run the project

### Push New Docker Image To Docker Hub

```bash
docker ps (running)

docker ps -a  (all images)

docker login —username=philanderson888

docker images

REPOSITORY                             TAG                 IMAGE ID            CREATED             SIZE
dockersupport                          dev                 b23fdedefa86        57 minutes ago      207MB

// tag the image
docker tag b23fdedefa86    philanderson888/dockersupport:version01
docker push philanderson888/dockersupport

// docker image will now be available at <https://hub.docker.com/> 

    

```

### Run Docker Image From Azure

```bash
### Log in
portal.azure.com
### Connect to Azure Cloud Shell

### create a resource group
az group create --name docker-container-test --location uksouth

## create DNS name to expose to the internet
DNS_NAME_LABEL=aci-demo-$RANDOM

### Create instance

az container create \\
  --resource-group docker-container-test \\
  --name docker-container \\
  --image philanderson888/dockersupport \\
  --ports 80 \\
  --dns-name-label philanderson888-docker-asp-net-core-web-app \\
  --location uksouth

### Actually this did not work so did it in the GUI

{
    "$schema": "<https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#>",
    "contentVersion": "1.0.0.0",
    "parameters": {
        "location": {
            "type": "string"
        },
        "containerName": {
            "type": "string"
        },
        "imageType": {
            "type": "string",
            "allowedValues": [
                "Public",
                "Private"
            ]
        },
        "imageName": {
            "type": "string"
        },
        "osType": {
            "type": "string",
            "allowedValues": [
                "Linux",
                "Windows"
            ]
        },
        "numberCpuCores": {
            "type": "string"
        },
        "memory": {
            "type": "string"
        },
        "restartPolicy": {
            "type": "string",
            "allowedValues": [
                "OnFailure",
                "Always",
                "Never"
            ]
        },
        "ipAddressType": {
            "type": "string"
        },
        "ports": {
            "type": "array"
        },
        "dnsNameLabel": {
            "type": "string"
        }
    },
    "resources": [
        {
            "location": "[parameters('location')]",
            "name": "[parameters('containerName')]",
            "type": "Microsoft.ContainerInstance/containerGroups",
            "apiVersion": "2018-10-01",
            "properties": {
                "containers": [
                    {
                        "name": "[parameters('containerName')]",
                        "properties": {
                            "image": "[parameters('imageName')]",
                            "resources": {
                                "requests": {
                                    "cpu": "[int(parameters('numberCpuCores'))]",
                                    "memoryInGB": "[float(parameters('memory'))]"
                                }
                            },
                            "ports": "[parameters('ports')]"
                        }
                    }
                ],
                "restartPolicy": "[parameters('restartPolicy')]",
                "osType": "[parameters('osType')]",
                "ipAddress": {
                    "type": "[parameters('ipAddressType')]",
                    "ports": "[parameters('ports')]",
                    "dnsNameLabel": "[parameters('dnsNameLabel')]"
                }
            },
            "tags": {}
        }
    ]

### Check status

az container show \\
  --resource-group learn-deploy-aci-rg \\
  --name mycontainer \\
  --query "{FQDN:ipAddress.fqdn,ProvisioningState:provisioningState}" \\
  --out table

### Navigate to the FQDN to view your running container
FQDN                                    ProvisioningState
--------------------------------------  -------------------
aci-demo.eastus.azurecontainer.io       Succeeded

<https://aci-demo.eastus.azurecontainer.io>  in browser!

```

# Docker Images In Azure

## Push And Use A Docker Image From Azure

It is possible to create our own custom docker image, and then push this to Azure to use

```bash
git clone <https://github.com/dotnet/dotnet-docker>
cd dotnet-docker
cd samples
cd dotnetapp 
docker build --pull -t dotnetapp .
docker run --rm dotnetapp
az login
```

### Deploy Container Image In Azure From Docker Hub

portal.azure.com

New => Web app for container

Add the docker hub name with tag












# Kubernetes

Orchestrates multiple containers

## Kubernetes Terminology

## Orchestration

- so we don’t have to deploy containers individually
- picture of real coordination in a real orchestra

    Orchestrator : dynamic management

    ```
        Examples : Kubernetes, DC/OS, Nomad, Swarm
    ```

```
Master - controls replication, scheduling, external load balancers, public ip
Node - like a VM running container images
Pod - service consisting of one or more container images
   

Master - coordinates the cluster - schedules, maintains state, scales, rolls out updates
Node - VM or physical computer which serves as a worker machine in a Kubernetes cluster
Kubelet - agent software on each Node - manages the node and communicates with the master
Kubernetes API - Exposed by the master and used by the nodes and end users
Cluster
Minikube - lightweight version of Kubernetes
   cluster   -   start, stop, status, delete
```

## Kubernetes Basic Online Tutorial

[https://kubernetes.io/docs/tutorials/kubernetes-basics/create-cluster/cluster-intro/](https://kubernetes.io/docs/tutorials/kubernetes-basics/create-cluster/cluster-intro/)


### Windows Install kubectl

```bash
# install on Windows
choco install kubernetes-cli
```

### Ubuntu Install Kubernetes 

```bash
# install
brew install kubectl
# check
kubectl version --client
# minikube
brew install minikube
```

or 

```bash
# download
curl -LO "https://storage.googleapis.com/kubernetes-release/release/$(curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt)/bin/linux/amd64/kubectl"
# permissions
chmod +x ./kubectl
# path
sudo mv ./kubectl /usr/local/bin/kubectl
# test
kubectl version --client
```




# install on Linux 2
```bash
sudo apt-get update && sudo apt-get install -y apt-transport-https
curl -s <https://packages.cloud.google.com/apt/doc/apt-key.gpg> | sudo apt-key add -
echo "deb <https://apt.kubernetes.io/> kubernetes-xenial main" | sudo tee -a /etc/apt/sources.list.d/kubernetes.list
sudo apt-get update
sudo apt-get install -y kubectl
```

## Kubernetes Verify

```bash
# verify both client and server versions
kubectl version
# verify client version
kubectl version --client

# make a config file in the ~/.kube directory
cd ~
mkdir .kube
cd .kube
New-item config -type file
```




### MiniKube

```bash
# install on Windows
choco install minikube
# install on MAC/Linux
brew install minikube


minikube start
minikube status 

# version
minikube version

# start, for example on Windows this creates HyperV VM called minikube
minikube start

# if desired
minikube stop

# reclaim space
minikube delete

# reset machine and remove minikube and kubernetes and docker
minikube stop;
minikube delete;
rm -rf ~/.minikube ~/.kube;
brew uninstall kubectl;
brew cask uninstall docker virtualbox minikube;

kubectl cluster-info
kubectl get nodes
kubectl get pods
kubectl get namespaces
kubectl get services
kubectl get deployments

# get everything 

print "\\n\\nnamespaces\\n" && kubectl get namespaces
print "\\n\\npods\\n" && kubectl get pods
print "\\n\\npods\\n" && kubectl get pods -n default && kubectl get pods -n kube-system
print "\\n\\nnodes\\n" && kubectl get nodes
print "\\n\\ncluster\\n" && kubectl cluster-info 
print "\\n\\nservices\\n" && kubectl get services
print "\\n\\ndeployments\\n" && kubectl get deployments 

print "\\n\\npods\\n" && kubectl describe pods
print "\\n\\nservices\\n" && kubectl describe services

# show running pods in another namespace
kubectl get pods -n < < namespace > >     (or is it get pod!)
kubectl get pods -n default
kubectl get pods -n kube-system

# create deployment service
kubectl create deployment hello-minikube --image=k8s.gcr.io/echoserver:1.10
# expose deployment as a service
kubectl expose deployment hello-minikube --type=NodePort --port=8080

# stop 
minikube stop
# start
minikube start

# log in
# user is docker and pass is tcuser 
minikube ssh

# or Windows Hyperv log in with root (no password)
```

### Kubernetes Commands

```bash
# following the tutorial at 
# <https://kubernetes.io/docs/tutorials/kubernetes-basics/update/update-interactive/>
# get the number of deployments
kubectl get deployments
# list pods 
kubectl get pods
# show pods in detail
kubectl describe pods
# describe one pod in detail
kubectl describe services/kubernetes-bootcamp
# update an image
kubectl set image deployments/kubernetes-bootcamp kubernetes-bootcamp=jocatalin/kubernetes-bootcamp:v2
# set up a port as an environment variable
export NODE_PORT=$(kubectl get services/kubernetes-bootcamp -o go-template='{{(index .spec.ports 0).nodePort}}')
    echo NODE_PORT=$NODE_PORT  # returns NODE_PORT=12345

# works on MAC

printf '\\n\\nPrinting Node Port Exposed By The Service\\n'
export NODE_PORT=$(kubectl get services/hello-minikube -o go-template='{{(index .spec.ports 0).nodePort}}')
echo NODE_PORT=$NODE_PORT
# get the IP of a container
print "\\n\\nIP of minikube\\n"
echo $(minikube ip) # returns 172.17.0.45
# engage with a kubernetes container on a certain port
# note that due to load balancing a different container responds every time

print "\\n\\nRequesting Curl Response From Exposed IP and Port via HTTP\\n"
curl $(minikube ip):$NODE_PORT  

# confirm that a rollout has been successfully rolled out
kubectl rollout status deployments/hello-minikube

# look in detail at which image is running (inspect the image field)
kubectl describe pods  # check image field
# undo a faulty rollout
kubectl rollout undo deployments/hello-minikube
# show image will now show the older image
kubectl describe pods # shows older image running
```

### Kubernetes Deployments

We can `deploy` our apps into our `cluster`

To do this we create a `deployment configuration`

`Deployment configuration` instructs Kubernetes how to create and update instances of the application.

`Kubernetes Deployment Controller` monitors running instances. If a node fails, another instance is spun up on another node. This is called `self-healing`. Before orchestration we would manually use scripts to start the applications but there was no self-healing.

A `Kubernetes Cluster` consists of the master node with the deployment instructions, and other nodes which run the containerised app.

## Kubernetes Deployment Tutorial

<https://kubernetes.io/docs/tutorials/kubernetes-basics>
                              /deploy-app/deploy-interactive/

# show all nodes 

kubectl get nodes
 
kubectl version

1. Find node (only 1 here) to deploy on
2. Run the app
3. Configure to re-run if the node collapses

```bash
kubectl create deployment kubernetes-bootcamp --image=gcr.io/google-samples/kubernetes-bootcamp:v1
```

4 look at deployments - shows the running app

```bash
kubectl get deployments
```

5. expose our app to a proxy web address

```bash
kubectl proxy
```

6. view data

```bash
curl <http://localhost:8001/version>  or /  or /api  or /apis
```

7. run in a new terminal window 

```bash
print "\\n\\n\\n"
export POD_NAME=$(kubectl get pods -o go-template --template '{{range .items}}{{.metadata.name}}{{"\\n"}}{{end}}')
echo Name of the Pod: $POD_NAME

echo (kubectl get pods -o go-template --template 
               '{{range .items}}{{.metadata.name}}{{end}}')

set-item -Path Env:POD_NAME -value (kubectl get pods -o go-template 
            --template '{{range .items}}{{.metadata.name}}{{end}}')
```

## Kubernetes Pods And Nodes

A `node` is a worker machine in a cluster. It can contain one or more `pods`

A `pod` can contain one or more containers for example one container for the storage and another one for the application.

- shared storage
- IP
- Ports
- Container image version

A `pod` represents a logical application host. It can contain different `application containers` eg an app and the data

Pod containers are

- co-located
- share IP
- share port
- co-scheduled

Pod is the atomic unit on the `Kubernetes` platform

In case of failure, pods can be put onto other nodes.

Pods run on `nodes` which may be a physical or virtual machine depending on the cluster. Each node is managed by the `master` One node can have multiple `pods` and the master handles this.

Every node runs

- Kubelet = process to run communication between Node and master
- Container runtime which
    - gets the image
    - unpacks the image
    - runs the application

## Extra Kubernetes Commands

```bash
kubectl get pods

kubectl logs

kubectl exec
```

## Kubernetes Services

![https://d33wubrfki0l68.cloudfront.net/cc38b0f3c0fd94e66495e3a4198f2096cdecd3d5/ace10/docs/tutorials/kubernetes-basics/public/images/module_04_services.svg](https://d33wubrfki0l68.cloudfront.net/cc38b0f3c0fd94e66495e3a4198f2096cdecd3d5/ace10/docs/tutorials/kubernetes-basics/public/images/module_04_services.svg)

https://d33wubrfki0l68.cloudfront.net/cc38b0f3c0fd94e66495e3a4198f2096cdecd3d5/ace10/docs/tutorials/kubernetes-basics/public/images/module_04_services.svg

A cluster node holds several pods. A cluster has an IP

Each pod can have an IP internally which is not exposed unless deliberately by the `service`

A `service` defines a logical set of pods and their coupling via a YAML or JSON file.

The set of pods are targeted using a `LabelSelector`

`Services` can be exposed in different ways

- ClusterIP Reachable only internally (default)
- NodePort IP:Port reachable externally
- LoadBalancer (fixed external IP routes queries in)
- ExternalName kube-dns

`Services` can group across `pods` and even across `nodes` and can expose a service IP address which is different to each pod IP.

Each item in a service can be `tagged` with that service name

## Kubernetes Service Tutorial

[https://kubernetes.io/docs/tutorials/kubernetes-basics/expose/expose-interactive/](https://kubernetes.io/docs/tutorials/kubernetes-basics/expose/expose-interactive/)

```bash
# Learn how to expose an app outside the cluster with `kubectl expose` command
# Apply labels/tags to objects with `kubectl label` command
kubectl get pods
kubectl get services
kubectl expose deployment/kubernetes-bootcamp --type="NodePort" --port 8080
kubectl get services
kubectl describe services
# export kube the Node port number as a variable and then connect to it with curl
# service is exposed on internet but not on local powershell demo!
curl $(minikube ip):$NODE_PORT 

## use labels (works on web demo)
kubectl get pods -l run=hello-minikube 
## same on powershell
kubectl get pods -n kube-system
kubectl get pods -n default
kubectl describe pods

# Running the same tutorial via powershell on local machine
minikube version
minikube start
kubectl get pods
kubectl get services

# returns for example 32104 which is the port exposed by the service
echo (kubectl get services/hello-minikube -o go-template --template '{{(index .spec.ports 0).nodePort}}')
curl $(minikube ip):echo (kubectl get services/hello-minikube -o go-template --template '{{(index .spec.ports 0).nodePort}}')

# but curl to the ip:32104 is not working
```

## Puppet

Puppet allows the state of your infrastructure to be set in code and then this is enforced

## Ansible

[https://github.com/spartaglobal/Ansible](https://github.com/spartaglobal/Ansible)

Ansible is agentless software connecting via SSH






### Enable Linux Ubuntu On Windows

```powershell
Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Windows-Subsystem-Linux
Then install Ubuntu 18.04 LTS from the Windows Store
```


#### Install Ansible On Ubuntu

```bash
brew install ansible
# or
sudo apt install ansible -y
```




### Install Ansible On Windows

```bash
# create this as Vagrantfile and run 'vagrant up'
sudo apt-get update
sudo apt-get install software-properties-common
sudo apt-add-repository ppa:ansible/ansible
sudo apt-get update
sudo apt-get install ansible
press Y (yes) when prompted
Complete the installation and check with below command
ansible –version
```

### Install Ansible On MAC

```bash
sudo apt-get update
sudo apt-get install software-properties-common
sudo apt-add-repository ppa:ansible/ansible
sudo apt-get update
sudo apt-get install ansible
press Y (yes) when prompted
Complete the installation and check with below command
ansible –version
```

### Creating 3 Virtual Machines On MAC

```bash
# if there is a user error have to run this first
rm -r .vagrant

# create this as Vagrantfile and run 'vagrant up'
```

### Ansible playbook



## Azure Devops

https://channel9.msdn.com/Shows/On-NET/DevOps-For-ASPNET-Developers-Pt1-What-is-DevOps

We can link up a GitHub repo to Azure!

https://PAnderson0171@dev.azure.com/PAnderson0171/test/_git/test

Can be cloned with our regular git commands

https://dev.azure.com/PAnderson0171/test/_git/test

dev.azure.com/PAnderson0171

### Blockchain

Blockchain has many features which are desirable such as

- Immutability
- Automation
- Decentralisation

App developers can now use Blockchain to create a permanent record of the progress of work in development of an app. Every aspect of the development of the app can be tracked and verified.

Blockchain can also provide levels of encryption which cannot be hacked without the permission of the developer.

Blockchain has a low cost of entry and a relatively high return on investment.

# HyperV

Shielded VM has Credential Guard + Bitlocker + TPM + can only run on approved hosts

## Nested Virtualisation

```powershell
Set-VMProcessor -VMName <VMName> -ExposeVirtualizationExtensions $true
```

### NAT

```powershell
### Your second option is NAT
### turn on NAT on the nested Hyper-V VM 
new-vmswitch -name VmNAT -SwitchType Internal
New-NetNat –Name LocalNAT –InternalIPInterfaceAddressPrefix “192.168.100.0/24”
### assign an IP address to the new internal adapter
### This will be the gateway address for VMs in Hyper-V
get-netadapter "vEthernet (VmNat)" 
    | New-NetIPAddress -IPAddress 192.168.100.1 -AddressFamily IPv4 -PrefixLength 24
Each nested guest VM needs to have an IP address set and its gateway set as follows:
get-netadapter "Ethernet" 
   | New-NetIPAddress -IPAddress 192.168.100.2 -DefaultGateway 192.168.100.1 
                      -AddressFamily IPv4      -PrefixLength 24
```

## Nano Server

## Security Features

Code Integrity

Control Flow Guard

### VM Checkpoint

VSS is used for backups Saved state is no longer used

## Failover Cluster

Azure Cloud Witness to store quorum

## Shared Hard Drives .vhdx

Can expand while online

```powershell
Resize-VHD -Path C:4-VHDX2.vhdx -SizeBytes 32212254720
```

## Active Memory Dump

Can exclude eg VMs running in RAM!

### VM node fairness

load balances across a cluster

### VM Start Order

## Storage Microsoft

```
Storage Spaces
Storage QoS
Software-defined networking
VXLAN
NVGRE 
Remote DMA 
NIC Teaming
Storage replica
Synchronous replication - minimum 2 writes of data
SRG = Synchronous Replication Group
Storage Spaces Direct
Storage Deduplication
```

### Storage QoS

Goal is to guarantee I/O operations per sec IOPS

### Commercial Cloud Storage Solutions

Backblaze for cheap online

## VMGroups

```powershell
#Setup VM variables
$VM1 = Get-VM -Name VM1
$VM2 = Get-VM -Name VM2
$VM3 = Get-VM -Name VM3
#Create new VM Group
New-VMGroup -Name TestVMG1 -GroupType VMCollectionType
#Setup VM Group variable
$TestVMG1 = Get-VMGroup -Name TestVMG1
#Add VMs to the group/collection
Add-VMGroupMember -VMGroup $TestVMG1 -VM $VM1
Add-VMGroupMember -VMGroup $TestVMG1 -VM $VM2
Add-VMGroupMember -VMGroup $TestVMG1 -VM $VM3

Get-VM | ft Name, state, groups - AutoSize
Name  State    Groups
----  -----    ------
VM1   Running {TestVMG1}
VM2   Running {TestVMG1}
VM3   Running {TestVMG1}
```

## VM Management Groups

These are groups of VMGroups but can also contain other VMs

```powershell
#Create new Management Group
New-VMGroup -Name TestVMGM1 -GroupType ManagementCollectionType
```

## VM Migration

2008 : Offline

2008R2 : Only on machines sharing a shared cluster volume

2012 : Between machines of same version

2012R2 : Between machines of different version

The following example moves a VM named New Test VM to a destination server named Hyper-Server:

```powershell
Move-VM "New Test VM" Hyper-Server
```

### VPN Split Tunneling

VPN Properties, Networking, IPV4, Advanced, Use Default Gateway On Remote Network

### PSC Password Settings Container

ADUC, View, Advanced

Default Domain Policy, Properties, Attribute Editor, Password, make changes

### Offline Files lab

Control Panel, Sync Center, Offline Files, Enable










# cyber
- [cloud](#cloud)
  - [Contents](#contents)
  - [202412 learning from baddie for business](#202412-learning-from-baddie-for-business)
  - [202412 cloud](#202412-cloud)
  - [202412 web](#202412-web)
  - [202410 cloud](#202410-cloud)
  - [202410 cloud history](#202410-cloud-history)
  - [202410 aws](#202410-aws)
  - [202410 cloud terms](#202410-cloud-terms)
  - [202410 data](#202410-data)
  - [202410 saas](#202410-saas)
  - [202410 security](#202410-security)
  - [202410 vm](#202410-vm)
  - [202410 data](#202410-data-1)
  - [202410 encryption](#202410-encryption)
  - [202410 docker commands](#202410-docker-commands)
  - [202410 google cloud](#202410-google-cloud)
  - [202410 azure cloud](#202410-azure-cloud)
  - [202410 cloud benefits](#202410-cloud-benefits)
  - [202410 saas iaas paas](#202410-saas-iaas-paas)
  - [202410 cloud history](#202410-cloud-history-1)
    - [big data](#big-data)
    - [azure](#azure)
- [AWS](#aws)
      - [IAM Security](#iam-security)
        - [IAM Policy](#iam-policy)
      - [Network Security](#network-security)
        - [VPC Virtual Private Cloud](#vpc-virtual-private-cloud)
    - [AWS secure web app demo](#aws-secure-web-app-demo)
  - [AWS Container Services](#aws-container-services)
  - [AWS Abstracted Services](#aws-abstracted-services)
  - [AWS Environment Security](#aws-environment-security)
    - [IAM](#iam)
    - [AWS Cloudwatch Application Logs](#aws-cloudwatch-application-logs)
    - [Amazon Inspector : Vulnerability Scanning](#amazon-inspector--vulnerability-scanning)
- [AWS Container Security](#aws-container-security)
  - [AWS VPC Virtual Private Cloud](#aws-vpc-virtual-private-cloud)
    - [AWS KMS key service](#aws-kms-key-service)
    - [AWS Example : Bank](#aws-example--bank)
    - [RDS relational database](#rds-relational-database)
    - [EMR big data](#emr-big-data)
    - [Elastic beanstalk - app deployment](#elastic-beanstalk---app-deployment)
    - [AWS Environment Variables](#aws-environment-variables)
  - [Serverless Computing](#serverless-computing)
- [Load Balancing](#load-balancing)
  - [Types Of Load Balancer](#types-of-load-balancer)
    - [Cloud](#cloud-1)
    - [Ported from real machines](#ported-from-real-machines)
    - [Software Load Balancer](#software-load-balancer)
    - [Global Route Balancing With Route 53](#global-route-balancing-with-route-53)
    - [Latency-based routing](#latency-based-routing)
  - [Considerations Of Load Balancing](#considerations-of-load-balancing)
    - [Scaling Infrastructure](#scaling-infrastructure)
    - [Scaling Load Balancers](#scaling-load-balancers)
    - [NGINX Load Balancing](#nginx-load-balancing)
- [infrastructure as code](#infrastructure-as-code)
  - [contents](#contents-1)
  - [bash](#bash)
- [Cloud Labs](#cloud-labs)
    - [Install AWS Linux](#install-aws-linux)
    - [AWS RDS database access](#aws-rds-database-access)
    - [AWS Securing Access To S3](#aws-securing-access-to-s3)
    - [Installing Linux with a GUI](#installing-linux-with-a-gui)
    - [Windows with RDP](#windows-with-rdp)
- [DevOps Intro](#devops-intro)
    - [CI-CD-CD](#ci-cd-cd)
  - [Vagrant](#vagrant)
    - [Vagrant : get started guide](#vagrant--get-started-guide)
    - [Vagrant with Hyper-V](#vagrant-with-hyper-v)
    - [Vagrant With Virtualbox](#vagrant-with-virtualbox)
    - [CMD (not powershell) terminal as admin :](#cmd-not-powershell-terminal-as-admin-)
    - [Vagrant Initial Steps](#vagrant-initial-steps)
- [set dns](#set-dns)
- [add to config fileconfig.hostsupdater.aliases = \["development.local"\]](#add-to-config-fileconfighostsupdateraliases--developmentlocal)
- [this is the script which works](#this-is-the-script-which-works)
- [Now access via](#now-access-via)
  - [Provisioning](#provisioning)
    - [Provision A Folder](#provision-a-folder)
    - [which](#which)
    - [update and upgrade](#update-and-upgrade)
    - [nginx](#nginx)
    - [Provisioning an environment](#provisioning-an-environment)
    - [Running your app](#running-your-app)
    - [Ubuntu Install Node](#ubuntu-install-node)
  - [Environment Variables](#environment-variables)
  - [Packer](#packer)
    - [Intro To Packer](#intro-to-packer)
    - [Packer simple commands](#packer-simple-commands)
  - [Provisioning](#provisioning-1)
    - [Provisioning can can be done via](#provisioning-can-can-be-done-via)
  - [Terraform](#terraform)
  - [Chef](#chef)
    - [Downloading Chef](#downloading-chef)
    - [Kitchen](#kitchen)
- [Docker](#docker)
    - [Install Docker](#install-docker)
    - [Hello World](#hello-world)
    - [DockerFiles](#dockerfiles)
    - [Building a docker file](#building-a-docker-file)
    - [Docker with ports](#docker-with-ports)
    - [Run docker in the background](#run-docker-in-the-background)
    - [NginX](#nginx-1)
    - [Node Sample App](#node-sample-app)
    - [Pushing Docker Container to Docker Hub](#pushing-docker-container-to-docker-hub)
  - [docker and node](#docker-and-node)
    - [server.js](#serverjs)
    - [Docker Environment Variables](#docker-environment-variables)
    - [Docker Compose - YAML multi-docker environments](#docker-compose---yaml-multi-docker-environments)
  - [.NET on Docker](#net-on-docker)
  - [Docker with .NET](#docker-with-net)
    - [Container sample: Run a simple application](#container-sample-run-a-simple-application)
    - [Container sample: Run a web application](#container-sample-run-a-web-application)
    - [Building a sample .NET Core application on Docker](#building-a-sample-net-core-application-on-docker)
    - [Worked Example With Commands](#worked-example-with-commands)
  - [Creating And Running Docker From Visual Studio](#creating-and-running-docker-from-visual-studio)
    - [Run a .NET ASP Core Web App On Docker](#run-a-net-asp-core-web-app-on-docker)
    - [Push New Docker Image To Docker Hub](#push-new-docker-image-to-docker-hub)
    - [Run Docker Image From Azure](#run-docker-image-from-azure)
- [Docker Images In Azure](#docker-images-in-azure)
  - [Push And Use A Docker Image From Azure](#push-and-use-a-docker-image-from-azure)
    - [Deploy Container Image In Azure From Docker Hub](#deploy-container-image-in-azure-from-docker-hub)
- [Kubernetes](#kubernetes)
  - [Kubernetes Terminology](#kubernetes-terminology)
  - [Orchestration](#orchestration)
  - [Kubernetes Basic Online Tutorial](#kubernetes-basic-online-tutorial)
    - [Windows Install kubectl](#windows-install-kubectl)
    - [Ubuntu Install Kubernetes](#ubuntu-install-kubernetes)
- [install on Linux 2](#install-on-linux-2)
  - [Kubernetes Verify](#kubernetes-verify)
    - [MiniKube](#minikube)
    - [Kubernetes Commands](#kubernetes-commands)
    - [Kubernetes Deployments](#kubernetes-deployments)
  - [Kubernetes Deployment Tutorial](#kubernetes-deployment-tutorial)
- [show all nodes](#show-all-nodes)
  - [Kubernetes Pods And Nodes](#kubernetes-pods-and-nodes)
  - [Extra Kubernetes Commands](#extra-kubernetes-commands)
  - [Kubernetes Services](#kubernetes-services)
  - [Kubernetes Service Tutorial](#kubernetes-service-tutorial)
  - [Puppet](#puppet)
  - [Ansible](#ansible)
    - [Enable Linux Ubuntu On Windows](#enable-linux-ubuntu-on-windows)
      - [Install Ansible On Ubuntu](#install-ansible-on-ubuntu)
    - [Install Ansible On Windows](#install-ansible-on-windows)
    - [Install Ansible On MAC](#install-ansible-on-mac)
    - [Creating 3 Virtual Machines On MAC](#creating-3-virtual-machines-on-mac)
    - [Ansible playbook](#ansible-playbook)
  - [Azure Devops](#azure-devops)
    - [Blockchain](#blockchain)
- [HyperV](#hyperv)
  - [Nested Virtualisation](#nested-virtualisation)
    - [NAT](#nat)
  - [Nano Server](#nano-server)
  - [Security Features](#security-features)
    - [VM Checkpoint](#vm-checkpoint)
  - [Failover Cluster](#failover-cluster)
  - [Shared Hard Drives .vhdx](#shared-hard-drives-vhdx)
  - [Active Memory Dump](#active-memory-dump)
    - [VM node fairness](#vm-node-fairness)
    - [VM Start Order](#vm-start-order)
  - [Storage Microsoft](#storage-microsoft)
    - [Storage QoS](#storage-qos)
    - [Commercial Cloud Storage Solutions](#commercial-cloud-storage-solutions)
  - [VMGroups](#vmgroups)
  - [VM Management Groups](#vm-management-groups)
  - [VM Migration](#vm-migration)
    - [VPN Split Tunneling](#vpn-split-tunneling)
    - [PSC Password Settings Container](#psc-password-settings-container)
    - [Offline Files lab](#offline-files-lab)
- [cyber](#cyber)
    - [202410 cyber](#202410-cyber)
      - [202410 vulnerability scanning tools](#202410-vulnerability-scanning-tools)
      - [202410 network scanning tools](#202410-network-scanning-tools)
      - [202410 cyber government bodies](#202410-cyber-government-bodies)
      - [202410 cyber corporate tools](#202410-cyber-corporate-tools)
      - [202410 osint](#202410-osint)
    - [202410 cyber games](#202410-cyber-games)
    - [202410 cyber labs](#202410-cyber-labs)
    - [202410 git](#202410-git)
  - [202410 reconnaisance](#202410-reconnaisance)
  - [202410 osint](#202410-osint-1)
  - [202410 social engineering](#202410-social-engineering)
  - [202410 scanning](#202410-scanning)
  - [202410 cyber attacking](#202410-cyber-attacking)
  - [202410 cyber controls](#202410-cyber-controls)
  - [202410 standards bodies](#202410-standards-bodies)
  - [202410 frameworks](#202410-frameworks)
  - [202410 nist](#202410-nist)
  - [202410 controls](#202410-controls)
  - [202410 monitoring](#202410-monitoring)
  - [202410 incidents](#202410-incidents)
  - [202410 types of attack](#202410-types-of-attack)
  - [202410 web site hacking](#202410-web-site-hacking)
  - [202410 response](#202410-response)
  - [202410 forensics](#202410-forensics)
  - [202410 passwords](#202410-passwords)
  - [202410 hashing](#202410-hashing)
  - [202410 intrusion detection and prevention](#202410-intrusion-detection-and-prevention)
  - [202410 incident response](#202410-incident-response)
  - [risk](#risk)
  - [202410 cyber terms](#202410-cyber-terms)
- [cyber glossary 1 of 3](#cyber-glossary-1-of-3)
  - [bastion host](#bastion-host)
  - [birthday attack](#birthday-attack)
  - [command injection](#command-injection)
  - [dd](#dd)
  - [dig = nslookup](#dig--nslookup)
  - [dirbuster](#dirbuster)
  - [exploit framework](#exploit-framework)
  - [metasploit](#metasploit)
  - [ids](#ids)
    - [securityonion ids](#securityonion-ids)
    - [squert and sguil](#squert-and-sguil)
    - [snort ids traffic monitor](#snort-ids-traffic-monitor)
  - [MAC Overflow Attack](#mac-overflow-attack)
  - [Vulnerability scanner](#vulnerability-scanner)
  - [Exploit framework - launch attacks](#exploit-framework---launch-attacks)
- [cyber glossary 2 of 3](#cyber-glossary-2-of-3)
  - [Bastion Host](#bastion-host-1)
  - [Syslog](#syslog)
  - [Birthday Attack](#birthday-attack-1)
  - [DIG = NSLOOKUP](#dig--nslookup-1)
  - [Tasting](#tasting)
  - [Kiwi Syslog](#kiwi-syslog)
  - [Nikto - web server vulnerability](#nikto---web-server-vulnerability)
  - [Packet Analyzer](#packet-analyzer)
  - [Hacking Groups](#hacking-groups)
  - [Certs](#certs)
- [cyber glossary 3 of 3](#cyber-glossary-3-of-3)
  - [802.1x](#8021x)
  - [Analysis Of network traffic](#analysis-of-network-traffic)
  - [Certifications In Cyber](#certifications-in-cyber)
  - [CFAA Computer Fraud And Abuse Act](#cfaa-computer-fraud-and-abuse-act)
  - [Credential Stuffing](#credential-stuffing)
  - [Crimeware - General Tools](#crimeware---general-tools)
  - [Dark Web](#dark-web)
  - [DTP Dynamic Trunking Protocol](#dtp-dynamic-trunking-protocol)
  - [EHR Electronic Health Record](#ehr-electronic-health-record)
  - [Man In The Middle Attack](#man-in-the-middle-attack)
  - [multihomed firewall](#multihomed-firewall)
  - [Netflow](#netflow)
  - [net user](#net-user)
  - [net groups](#net-groups)
  - [network segmentation](#network-segmentation)
  - [nslookup](#nslookup)
  - [os fingerprinting](#os-fingerprinting)
  - [packet analysis](#packet-analysis)
  - [penetration test steps](#penetration-test-steps)
  - [vulnerability scan steps](#vulnerability-scan-steps)
  - [incident response steps](#incident-response-steps)
  - [PIPEDA](#pipeda)
  - [protocol analysis](#protocol-analysis)
  - [Reverse Proxy Server](#reverse-proxy-server)
  - [Safe Harbor Privacy Principles](#safe-harbor-privacy-principles)
  - [service discovery](#service-discovery)
  - [shares](#shares)
  - [sharepoint](#sharepoint)
  - [sinkhole](#sinkhole)
  - [smurf attack](#smurf-attack)
  - [social media profiling](#social-media-profiling)
  - [syslog](#syslog-1)
  - [system isolation](#system-isolation)
  - [Sysvol](#sysvol)
  - [Targeted Attack And Tools](#targeted-attack-and-tools)
  - [trend analysis](#trend-analysis)
  - [Virtual Network Types](#virtual-network-types)
  - [vm sprawl](#vm-sprawl)
  - [WIDS Wireless Intrusion Detection](#wids-wireless-intrusion-detection)
  - [Wireless Analysis](#wireless-analysis)
  - [wireshark](#wireshark)
  - [Targeted Spray](#targeted-spray)
  - [Wordscrape - go through whole intranet](#wordscrape---go-through-whole-intranet)
  - [Aircrack-ng](#aircrack-ng)
  - [ArcSight SIEM](#arcsight-siem)
  - [Autopsy](#autopsy)
  - [Beaconing](#beaconing)
  - [Black hole](#black-hole)
  - [Blind FTP](#blind-ftp)
  - [Blue team](#blue-team)
  - [Bluejack](#bluejack)
  - [Snarf : steal data](#snarf--steal-data)
  - [Bluesnarf : steal data](#bluesnarf--steal-data)
  - [Bro Linux IDS](#bro-linux-ids)
  - [Cacti Logging](#cacti-logging)
  - [CAN Controller Area network](#can-controller-area-network)
  - [PLC Programmable Logic Controllers](#plc-programmable-logic-controllers)
  - [CAPTCHA](#captcha)
  - [CAR Corrective Action Report](#car-corrective-action-report)
  - [Cellebrite : extract mobile data](#cellebrite--extract-mobile-data)
  - [UFED - Extract data off mobiles](#ufed---extract-data-off-mobiles)
  - [Check Point : firewall](#check-point--firewall)
  - [CIS Center for Internet Security](#cis-center-for-internet-security)
  - [SANS](#sans)
  - [CISO](#ciso)
  - [COBIT](#cobit)
  - [CSIRT](#csirt)
  - [CVE](#cve)
  - [Cybersquatting](#cybersquatting)
  - [Hijacking](#hijacking)
  - [EMET](#emet)
  - [NX No Execute](#nx-no-execute)
  - [DEP Data Execution Prevention](#dep-data-execution-prevention)
  - [EnCase Forensic : Case Management](#encase-forensic--case-management)
  - [Flood Guard : prevent DDoS](#flood-guard--prevent-ddos)
  - [Latent = hidden](#latent--hidden)
  - [FTK Forensic Tool Kit](#ftk-forensic-tool-kit)
  - [Fuzzing](#fuzzing)
  - [Google Hacking](#google-hacking)
  - [Helix : Linux Live CD](#helix--linux-live-cd)
  - [Heuristic](#heuristic)
  - [Imperva SecureSphere WAF](#imperva-securesphere-waf)
  - [MITM Interception Proxy](#mitm-interception-proxy)
  - [Jump Box](#jump-box)
  - [escrow = 3rd party trust](#escrow--3rd-party-trust)
  - [M of N](#m-of-n)
  - [Kill Chain](#kill-chain)
  - [CVE Common Vulnerabilities and Exposures](#cve-common-vulnerabilities-and-exposures)
  - [MoA : Memorandum Of Agreement](#moa--memorandum-of-agreement)
  - [ModSecurity WAF](#modsecurity-waf)
  - [MRTG Multi Router Traffic Grapher SNMP](#mrtg-multi-router-traffic-grapher-snmp)
  - [Nagios = open source stats on services](#nagios--open-source-stats-on-services)
  - [NAPT = NAT](#napt--nat)
  - [NAXSI = nginX Anti XSS and SQL Injection](#naxsi--nginx-anti-xss-and-sql-injection)
  - [Nessus vulnerability scanner](#nessus-vulnerability-scanner)
  - [NetScout](#netscout)
  - [Nikto - web server vulnerability scanner](#nikto---web-server-vulnerability-scanner)
  - [NIST](#nist)
  - [Nmap network mapper](#nmap-network-mapper)
  - [OODA Observe, Orient, Decide, Act](#ooda-observe-orient-decide-act)
  - [OS Fingerprint = identify OS](#os-fingerprint--identify-os)
  - [OSINT Open Source Intelligence](#osint-open-source-intelligence)
  - [OSSIM Open Source Security Info Mgt](#ossim-open-source-security-info-mgt)
  - [OVAL language](#oval-language)
  - [OWASP Open Web App Security Project](#owasp-open-web-app-security-project)
  - [PAC Proxy Auto Config](#pac-proxy-auto-config)
  - [Palo Alto IDS](#palo-alto-ids)
  - [Password cracker](#password-cracker)
  - [PCI DSS](#pci-dss)
  - [PHI Personal Health Info](#phi-personal-health-info)
  - [PII](#pii)
  - [PVLAN Private VLAN](#pvlan-private-vlan)
  - [Privilege Escalation](#privilege-escalation)
  - [QRadar SIEM](#qradar-siem)
  - [Qualys cloud vulnerability](#qualys-cloud-vulnerability)
  - [rootkit](#rootkit)
  - [RPO Recovery point objective](#rpo-recovery-point-objective)
  - [RTO Recovery time objective](#rto-recovery-time-objective)
  - [SABSA](#sabsa)
  - [SANS SysAdmin, Network, Security](#sans-sysadmin-network-security)
  - [SCADA](#scada)
  - [SCAP baseline audit](#scap-baseline-audit)
  - [SCEP Certificate Enrolment](#scep-certificate-enrolment)
  - [SCP send files](#scp-send-files)
  - [SEH exception handler](#seh-exception-handler)
  - [SMTP Open Relay](#smtp-open-relay)
  - [SourceFire IDS](#sourcefire-ids)
  - [Splunk SIEM](#splunk-siem)
  - [SPML](#spml)
  - [taskkill](#taskkill)
  - [tasklist](#tasklist)
  - [tcpdump](#tcpdump)
  - [TOGAF](#togaf)
  - [Trusted Foundry](#trusted-foundry)
  - [UAT User Acceptance Testing](#uat-user-acceptance-testing)
  - [UEFI UNC](#uefi-unc)
  - [VAS Vulnerability Assessment](#vas-vulnerability-assessment)
  - [White Team : admin](#white-team--admin)
  - [Write Blocker](#write-blocker)
  - [XACML](#xacml)
  - [Xmas Attack](#xmas-attack)
  - [XSRF : Authenticated session attack](#xsrf--authenticated-session-attack)
  - [XSS Cross Site Scripting](#xss-cross-site-scripting)
  - [Zero day attack : new software](#zero-day-attack--new-software)
  - [Ports](#ports)
    - [LDAP SECURE WITH SSL 636](#ldap-secure-with-ssl-636)
    - [RADIUS 1812/3 OR 1645/6](#radius-18123-or-16456)
    - [TACACS+ port 49](#tacacs-port-49)
    - [LDP 389](#ldp-389)
    - [LDAPS 636](#ldaps-636)
  - [ADS Alternate Data Streams](#ads-alternate-data-streams)
  - [TTP Tactics, Techniques and Procedures](#ttp-tactics-techniques-and-procedures)
  - [SIEM Security Info and Event Mgt](#siem-security-info-and-event-mgt)
  - [Exfiltration = data out](#exfiltration--data-out)
  - [Exploits](#exploits)
    - [Flame](#flame)
    - [Operation Olympic Games](#operation-olympic-games)
    - [Mydoom](#mydoom)
    - [Shamoon](#shamoon)
    - [Melissa](#melissa)
    - [Zeroaccess rootkit](#zeroaccess-rootkit)
    - [Heartbleed vulnerability](#heartbleed-vulnerability)
  - [OpenSSL](#openssl)
  - [EXPLOIT MODULE](#exploit-module)
  - [PAYLOAD](#payload)
  - [Discovery scanner Nmap](#discovery-scanner-nmap)
  - [Banner Grabbing](#banner-grabbing)
  - [Lua scripting language](#lua-scripting-language)
  - [Footprint](#footprint)
    - [Network topology discovery](#network-topology-discovery)
  - [Fingerprint](#fingerprint)
    - [fpdns does DNS fingerprinting](#fpdns-does-dns-fingerprinting)
    - [hassh does SSH fingerprinting](#hassh-does-ssh-fingerprinting)
    - [ja3 does SSL fingerprinting](#ja3-does-ssl-fingerprinting)
  - [Burner phone](#burner-phone)
  - [Pivot Point of entry](#pivot-point-of-entry)
  - [httrack.com - website download](#httrackcom---website-download)
  - [Droplet - mini vm](#droplet---mini-vm)
  - [SSL3.0 old](#ssl30-old)
  - [bulletproof ISP](#bulletproof-isp)
  - [Google hacking](#google-hacking-1)
  - [Google Dork](#google-dork)
  - [Ripping = website copier](#ripping--website-copier)
  - [C2 = Command and Control](#c2--command-and-control)
  - [PIVOT POINT = HACKER POINT OF ACCESS](#pivot-point--hacker-point-of-access)
  - [APT Advanced Persistent Threat](#apt-advanced-persistent-threat)
  - [Pen test 6 RULES OF ENGAGEMENT](#pen-test-6-rules-of-engagement)
  - [CVSS](#cvss)
  - [WIFI pineapple](#wifi-pineapple)
  - [bash bunny](#bash-bunny)
  - [lan turtle](#lan-turtle)
  - [Dark Web Scanning](#dark-web-scanning)
  - [Hacking Techniques](#hacking-techniques)
  - [Password Crackers](#password-crackers)
  - [Hosting](#hosting)
  - [Hacker Tools](#hacker-tools)
  - [Hashing](#hashing)
  - [Offensive Tools](#offensive-tools)
- [red team tools](#red-team-tools)
    - [dirbuster](#dirbuster-1)
  - [burpsuite](#burpsuite)
  - [getent](#getent)
    - [hping3](#hping3)
  - [mac overflow attack](#mac-overflow-attack-1)
  - [tasting](#tasting-1)
  - [defensive tools](#defensive-tools)
    - [ids](#ids-1)
      - [securityonion](#securityonion)
      - [squert and sguil](#squert-and-sguil-1)
      - [snort packet/traffic monitoring](#snort-packettraffic-monitoring)
  - [sheep dip](#sheep-dip)
  - [neither red nor blue team tools](#neither-red-nor-blue-team-tools)
  - [degauss](#degauss)
  - [cyber random terms](#cyber-random-terms)
  - [cyber a-z terms](#cyber-a-z-terms)


### 202410 cyber

discovery scan of network

scope of scan is ip range

assessment scan of vulnerabilities

dep data execution prevention cannot execute data as an executable

tryhackme

dirbuster can brute force attack your file system

getent gets entries in sensitive linux system files

tryhackme learn all about cyber in safe environment

htttrack copy website

oval open vulnerability assessment language

scap security content automation protocol standardises xml security reporting

xccdf xml security checklists

cvss threat score

ocsp online certificate status protocol manages certificates

sigcheck file analyser

openssl manage tls certificates

certutil manage certificates

ssl strip downgrades channel from https to http

kali linux list of tools https://www.kali.org/tools/

networkminer extracts key data from network traffic

nvd national vulnerability database

pci dss data security standards

rum real user monitoring 

#### 202410 vulnerability scanning tools

openvas vulnerability assessment scanner also called greenbone

nessus vulnerability scanner

nikto does web app vulnerability scanning

qualsys cloud scanning

zap zed attack proxy scans websites

#### 202410 network scanning tools

nmap network mapper

zenmap gui to nmap

bro linux ids

cacti network monitoring gui tool

nagios network monitoring gui tools

snort ids and ips sends data to sguil

sguil network capture

squert is front end to sguil network capture database

hping can scan networks and launch attacks

hping3 is scriptable

angry ip scanner can aggressively scan any network

qualsys is advanced corporate cyber protection tool

nexpose is open source vulnerability scanning tool

pineapple wifi scanning tool

#### 202410 cyber government bodies

cis center internet security

nist national institute science technology

#### 202410 cyber corporate tools

siem security info event management allows large company to manage and analyse logs

alien vault siem

netcraft

#### 202410 osint

truthfinder scans dark web for activity eg your name email password

theharvester scans sites for info

pipl social media tracking tool

peekyou people search

flashpoint global osint alerting tool 

carrot2 cluster search results

### 202410 cyber games

try hack me

juice shop

capture the flag

exploit-db

awesome cloud sec labs on github

cyber security challenge

hack the box

root-me.org

google-gruyere

### 202410 cyber labs

regexone

regexr

steghide # hide data inside image

nmap

gobuster # brute force 

mimikatz # password

### 202410 git

git diff --staged --cached

gitk # view proposed changes

git reset # unstages items

git status # difference between you and staging area






## 202410 reconnaisance
topology discovery
operating system fingerprint
email harvesting
social media profiling
phishing
## 202410 osint
organisation
employees
systems hardware operating systems and software
suppliers
customers
google dork
exploit database
gb hackers
wikileaks
tap r00t passwords
google dorking site filetype related intitle allintitle inurl inanchor intext daterange:a-b define exclude
whois information
central ops dot net
htttrack copy whole website
archive.org wayback machine
## 202410 social engineering
whaling
## 202410 scanning
port scan
metasploit
wireshark
nmap
parrot security linux is like kali linux
massscan can scan the entire internet
## 202410 cyber attacking
kill chain is steps of an attack eg military find the target, fix on the target, track the target, prepare an exploit, engage using the exploit, assess the outcome
cyber kill chain reconnaisance, weaponisation, delivery, exploit, install, command and control, actions
zombie computers perform stealth scans
weaponisation chooses the exploit to match the vulnerability
c2 command and control
post-exploitation we have lateral discovery and spread on a network
action on objectives eg exfiltrate
## 202410 cyber controls
- prevention
- deterrence
- detection
- correct during a live attack
- compensate by bypassing with an alternative action
## 202410 standards bodies
- nist national institute for standards and tech eg 800-53 baseline and nist sp800 control standards
- csd computer security division
- fips federal information processing standards eg fips 200
- cis center internet security
- sans institute for cyber training
- itil best practice frameworks eg iso-27001, iso-27002
- mitre attack framework
## 202410 frameworks
framework is set of policies
compliance tests if policies are enacted
cisa certified information systems auditor
cism certified information systems manager
isms information security management system
iso 27001 provides risk management
itil best practice in service strategy, service design, service transition, service operation, service improvement
implementation of policies can be partial, risk informed, repeatable, adaptive with continuous improvement
security by default
cobit control objectives for it is a business framework to manage computers in business
togaf the open group architecture framework on the overall design of computer and security architecture and how it applies to a business
nist 800-137 continuous monitoring defines strategy for monitoring, continuous monitoring, collecting information, analysis, mitigate threats, update and improve
## 202410 nist
nist has 5 core functions
identify eg risk assessment, managing of assets, goven, business environments, risk management strategies
protect from attack eg information processes, access control, user training, data security, maintenance
detect attacks and anomalies
respond to attacks with an irp plan, communication, analysis, mitigation
recover from attacks with cycle of improvement
## 202410 controls
access
audit
response
risk
technical controls include firewall, antivirus, permissions, auditing, intrusion detection, intrusion prevention, encryption, motion detection, updating and patching operating system and software
operational controls such as training, security guards, configuration, contingency planning, response planning, maintenance, physical controls, media controls, clean desk policy, change management
management controls such as planning, risk assessment and authorisation, policies and procedures, user training, irp incident response policy, auditing, log management
hr responsible for hiring staff, job descriptions, policy and procedures
legal create non-disclosure agreements
marketing prepare press releases during an incident
physical controls eg alarm, lock, fence, cctv, mantrap, guards, badge, keypad, proximity card
logical controls eg antivirus, permissions, intrusion detection, passwords, biometric, smartcards, encryption, backups, group policy, least privilege, time of day restrictions, disabling generic accounts
admin controls eg policies and procedures, separation of duties, job rotation, disaster planning, security awareness training
operational controls such as policy, clean desk policy, disaster recovery policy, business continuity plan, procedures, acceptable use policy
cis control categories: hardware, software, vulnerabilities, admin privileges, client security, servers, logs, email, browser, malware, network, data, firewall, router, switch, boundary, training, apps, incident response, pen tests
policies such as acceptable use, password, lockout, disaster recovery, data protection, account management, privacy, surveillance, security assurance (monitoring), monitoring, physical monitoring, data classification, data retention, version control, recovery policy, separation of duty, job rotation, sop standard operating procedures, dual control shared ownership, least privilege, auditing, mandatory vacation, succession planning
auditing checks if controls are in place
risk assessment to monetise the risk and mitigate the risk
vulnerability assessment pays for penetration test to probe for weaknesses eg firewall, physical, software, services
change management looks at cost of change, risk of change, rollback procedures, approval
configuration management looks at predictability and version control
preventative controls aim to stop attack eg server hardening, create security baseline configurations for firewall, group policy, services, apps, data, security awareness training, separation of duties, biometrics, encryption, mantrap, badge, guards
preventative controls also include training, guards, disabling unused accounts
detective controls detect after the event eg logs, system logs, video, job rotation, auditing, cctv, guards, monitoring and alerts
corrective controls eg intrusion detection and prevention and restoring a backup
deterrent controls such as warning signs, video cameras
compensating controls propose a different course of action to the default eg one time password if smart card is not operational, take a system offline, restore corrupted data from a backup
access controls eg rbac role based access, rule based access eg no log on at certain hours, dacl discretionary access based on user groups, mac mandatory access eg top secret, secret, restricted, confidential, unclassified using selinux
recovery controls return to normal function eg drp disaster recovery planning, recovery of data backup, alternate sites
## 202410 monitoring
winpcap network sniffer
libpcap network sniffer
promiscuous mode listens on all ports
network protocol analyser will analyse tcp and udp packets
protocol analyser is just the protocol in use
packet analyser analyses the payload
traffic analysis looks at a higher level what is being sent
netflow session analysis
sniffing tools include wireshark, kismet, tcpdump, dsniff, ettercap
siem security information event logs does log monitoring and analysis
ossim open source security information management
ids examples snort, openvas
syslog is linux event log
logging sofware includes kiwi syslog
linux iptables manages firewall
firewall logging
anomaly based checks deviation from the norm
heuristic is real time
things to monitor - cpu, ram, network throughput, network scans, downloads of particular type or size or timing, unusual traffic to unknown ip addresses, data exfiltration out
full packet capture
## 202410 incidents
indicator is a pattern of observables
threat actor
campaign is series of attacks
ioc indicators of compromise what has been attacked
severity eg services were degraded ie partially affected, or interrupted with full taking down of a service
downtime
category
response time critical immediate, urgent which is 24 hours, normal which is 7 days
has data been affected and if so how much and what has happened to the data
economic effect of the incident
recovery time
criticality of the system under attack
## 202410 types of attack
ddos
icmp flood = ping flood = smurf attack
fraggle attack = udp ping flood
tcp syn flood
sinkhole router traffic
blackhole drops all packets
rogue wifi
evil twin wifi
rogue switch copies packets
unauthorised device on network running eg wireshark
beaconing to phone home
scan sweep of network
dropper drops malware on system
masquerade replaces good executable with corrupt one
dll injection
rat remote access trojan
netcat is advanced linux scripting tool
wifi pineapple does wifi scan
## 202410 web site hacking
owasp open web app security project
zap zed attack proxy to find vulnerabilities in web site
spider crawls web
nikto web vulnerability scan
proxy with burpsuite
## 202410 response
coa courses of action matrix what to do
## 202410 forensics
forensic strategy would include obtaining a forensic image of machine, cracking password, analyse data, checking logs, volume shadow copies, system volume analysis, view images looking for steganography
forensic workstation uses imaging, analysis, chain of custody, hashing, password cracker, cryptography
forensic forms include chain of custody, incident details, incident response runbook of what to do in case of an incident, call list of people to notify in the case of an incident
forensic toolkit includes workstation, write blockers, adapters, cables, blank media, cameras, crime tape, tamper-proof seals, forms
linux live cd runs in ram and does not affect the status of the host machine being analysed
memory forensics analyses ram
live aquisition is while the machine is still running
order of volatility - cpu, swap file, routing and switch tables, ram with encryption keys, temp files, hard drives, logs, config files, network topology, archived data
dd imaging tool on linux uses if input file and of output file
dd if=/dev/sda/ of=/mnt/usbstick/backup.img
## 202410 passwords
have i been pwned
how secure is my password
windows stores in system 32 config sam
windows 10 passwords are md4 hashed
lm uses ascii
ntlm uses md4
ntlm2 uses md5
linux passwords are stored in /etc/passwd and /etc/shadow
mimikatz obtain hashes
hashcat
## 202410 hashing
sha secure hash algorithm
sha-1 160 bits
sha-256/512 used in ipsec and ssl
mda-5 older and not totally rock solid but much faster than sha so is often used in many tools as a quick solution
certutil -hashfile md5/sha1/sha512
fciv file checksum integrity verifier
md5sum/sha1sum/sha512sum -c to compare file with a hash
## 202410 intrusion detection and prevention
security onion ids
sguil ids
sgutil ids
## 202410 incident response
csirt computer security incident response team will involve legal, hr and marketing
incident response policy will have a playbook guide, runbook immediate action steps, emergency contacts and first responders
prepare for incident with incident response plan, hardening, prepare communications
detect incident
validate the incident is actually an incident
incident classification
incident identification
analyse incident using reverse engineering
incident prioritisation
incident lockdown to prevent futher use or data exploitation
incident response
incident escalation
incident remediation eg containment, eradication, recovery
contain the incident using segmentation, removal, isolation
eradicate the incident and recover using using santising machines, wiping machines, disposing of machines, degauss drives, terminating services, removing files
recover using reimaging machines, rebuilding machines, redeploying software etc
validate recovery is complete also patch and update systems
improve for the future with lessons learned, update change control and incident response plan
communication using out-of-band phones, secure messaging
classify the threat
## risk
sle single loss expectancy
ef exposure factor
ale annual loss expectancy
aro annual rate occurrence
## 202410 cyber terms
soc security operations centre
soc incident analyst
ooda observe attack orient and pivot depending on attack decide what to do act
tailgating through a door
sid security id
rid domain id (relative id)
guid globally unique user id
selinux security enhanced
coa courses of action matrix
fips 199 impact analysis high medium low
encase is a forensic suite of tools
endpoint investigator can analyse clients
sleuth kit is set of command line tools
autopsy is a gui suite of tools
cellebrite is mobile phone and table forensic analyser
ufed universal forensic extraction device can be used on mobile phones
forensically clean device does not affect the data which is being analysed
autopsy is the gui to sleuthkit
sleuthkit analyses computers forensically
companies doing forensics involve f-response, encase, forensic toolkit
registry viewer
siem security and event management looks at logs
rpo recovery point objective is last point a backup was taken
rto recovery time objective is time to restore data, must be less then max tolerable downtime
mtd max tolerable downtime
apt advanced persistent threat
ip intellectual property
low and slow to avoid detection
air gap around isolated machine
sheep dip to investigate viruses
sandbox network isolation
# cyber glossary 1 of 3
## bastion host
A jump box which gives access to secure computers via SSH or other mechanism
## birthday attack
2 files have same hash
## command injection
send command to operating system or application
## dd
Create image of hard drive as a single file
## dig = nslookup
## dirbuster
brute force dictionary attack directory and file names on web app server
## exploit framework
eg metasploit
launches exploit against vulnerability
## metasploit
exploit framework
launch exploit against vulnerability
## ids
### securityonion ids
### squert and sguil
### snort ids traffic monitor
## MAC Overflow Attack
Causes the CAM Content Addressable Memory of a switch to be full
Address resolution is therefore not possible
Traffic is then sent out broadcast to all ports
## Vulnerability scanner
- OpenVAS
- Nessus
- Nexpose
- Qualsys
- ### Nikto
- Web app scanner eg Nikto : check for SQL injection and XSS vulnerability
- ### MBSA Windows server scanner - identify weakness and lack of patching
## Exploit framework - launch attacks
eg metasploit : launches specific attacks against specific known vulnerabilities
# cyber glossary 2 of 3
## Bastion Host
Any device which is connected to the internet
isolated computer for investigating malware
## Syslog
COLLECT DATA ONLY
## Birthday Attack
2 files, same hash
## DIG = NSLOOKUP
## Tasting
try domain to see if it gets hits
## Kiwi Syslog
central log management
## Nikto - web server vulnerability
web server vulnerability scanner
## Packet Analyzer
TCPDump.org
## Hacking Groups
- Project Raven : UAE mercenary hackers https://www.reuters.com/investigates/special-report/usa-spying-raven/
## Certs
# cyber glossary 3 of 3
## 802.1x
- Supplicant - requests access to network
- Authenticator - device through which supplicant is attempting to gain access
- Authentication server - grants access
## Analysis Of network traffic
- traffic - type of traffic
- protocol - packet headers
- packet - payload
- availability
- anomaly
- IDS and IPS traffic flow
- unusual activity
- can generate false positives
- behaviour - known patterns + TTP inferences about possible behaviour
- heuristic - zero day
## Certifications In Cyber
- CEH Certified Ethical Hacker
- EC Electronic Commerce
- CISSP Certified Info Systems Security Practitioner
- ISC2 Internation Info Systems Security Certification Consortium
- CASP CompTIA advanced security practitioner
- CISA Auditor
- CISM Manager
## CFAA Computer Fraud And Abuse Act
## Credential Stuffing
Credential stuffing is the technique of using compromised credentials
(i.e. usernames and passwords) to try and access other websites
## Crimeware - General Tools
Crimeware : scan internet for vulernabilities
## Dark Web
Alpha bay dark market
TOR + VPN
.onion sites are on the dark web
Pirate Bay gone offline and gone onto Dark Web at http://uj3wazyk5u4hnvtk.onion/
## DTP Dynamic Trunking Protocol
Permits a switch to automatically link to other switches
Potential rogue switch can auto join legitimate switches
## EHR Electronic Health Record
Contains PHI Personal Health Information
## Man In The Middle Attack
For switches this can be caused by ARP Poisoning - false MAC address so traffic sent to wrong computer
## multihomed firewall
## Netflow
Cisco IP traffic flow diagramming tool
analyses tcp
Router traffic flow stats
Has two or more interfaces eg facing LAN and internet
Identifies unidirectional sequence of packets sharing 7 values - Same `flow`
Source/Destination MAC
Source/Destination IP and Port
Protocol type
Router interface
heuristic - zero day
## net user
net user /domain - info about users in the domain
## net groups
net groups domainadmins - info about domain admins etc
net groups domaincontrollers /domain - information about groups in the domain
## network segmentation
creates security zones which are separated by vlans and firewalls
## nslookup
https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/nslookup
## os fingerprinting
Allow one to determine the operating system and version and from this determine which common vulnerabilities will exist
## packet analysis
Analyse the whole packet not just the headers
## penetration test steps
1. Scoping
2. Reconnaissance
3. Vulnerability Assessment
4. Penetration Test
5. Lateral Movement
6. Artifact Collection/Destruction
7. Reporting/Debriefing
Exam version although I prefer the one above
1. Plan and prepare
2. Info gathering
3. Vulnerability detect
4. Penetration attempt
5. Analysis
6. Clean up
## vulnerability scan steps
1. Add IPs
2. Choose scanner appliance
3. Set scan option
4. Scan
5. Results
6. Remediate
7. Ongoing scanning
## incident response steps
1. detect
2. respond
3. report
4. recover
5. remediate
6. review
## PIPEDA
Canadian Privacy Law
## protocol analysis
## Reverse Proxy Server
Can filter incoming traffic preventing DDOS attacks from reaching your server
## Safe Harbor Privacy Principles
Guide the USA with regards to EU Privacy Laws
analyse the packet headers
## service discovery
discovering which ports are open and if they are protected by a firewall
nmap -PS (port scan) is TCP SYN scan which shows open ports and services running
## shares
Shares - provide useful information
## sharepoint
Sharepoint - can be used to glean information about the network
## sinkhole
router which directs traffic to location for analysis
## smurf attack
ICMP Ping sent to a broadcast address
## social media profiling
Checking out social media profiles
## syslog
Centralised Linux logs
## system isolation
Isolation of a system with regards to the communication
## Sysvol
Sysvol : Copy all data from it eg scripts, users, usernames, hostnames, group policies, groups
powershell empire
evil jinks : phishing platform
## Targeted Attack And Tools
With a specific target in mind
## trend analysis
Over time
## Virtual Network Types
- External - Internet
- Internal - with each other and host
- Private - communicate with each other but not with host nor internet
## vm sprawl
Large number of virtual machines are hard to manage and to keep track of, and it's easy to let the vulnerabilities stack up through unmanaged software and operating systems
## WIDS Wireless Intrusion Detection
Can locate rogue wireless AP
## Wireless Analysis
Beacon and probe request frames only on wireless networks
## wireshark
wireshark : used to glean hardware and hostnames
## Targeted Spray
## Wordscrape - go through whole intranet
## Aircrack-ng
wireless APT Advanced Persistent Threat : stronghold from which bad guys launch other software
## ArcSight SIEM
by HP
COLLECT AND ANALYSE DATA
## Autopsy
front end for Sleuth : disk imaging and file analysis
## Beaconing
Beaconing = phoning home
Can be on a schedule also
Both good and bad devices do this.
Check for malicious IP
Check for bad packet sizes
## Black hole
drop all traffic
## Blind FTP
no file or folder listing provided
## Blue team
defensive team in simulation role play
## Bluejack
hijack (virus) over bluetooth
## Snarf : steal data
## Bluesnarf : steal data
## Bro Linux IDS
## Cacti Logging
open source logs with graphs
## CAN Controller Area network
## PLC Programmable Logic Controllers
## CAPTCHA
## CAR Corrective Action Report
fix vulnerability
## Cellebrite : extract mobile data
## UFED - Extract data off mobiles
Universal Forensic Extraction Device
## Check Point : firewall
## CIS Center for Internet Security
by SANS
## SANS
Sysadmin, Audit, Networking, Security
not-for-profit
## CISO
Chief Info Security Officer
## COBIT
Control Objectives for IT
security framework
## CSIRT
Computer Security Incident Response Team
## CVE
Common Vulnerabilities and Exposures
## Cybersquatting
buying someone else’s domain name
## Hijacking
using someone else’s domain name (or similar)
## EMET
Enhanced Mitigation Experience Toolkit
requires 3rd party processes to run with NX (No-Execute) and DEP Data
## NX No Execute
separates area of memory holding 1) CPU instructions 2) data. Main use is to ensure that data which EXECUTES is ONLY EXECUTING FROM THE RIGHT AREA OF MEMORY IE NOT THE ‘DATA’ PART. This helps to thwart BUFFER OVERFLOW ATTACK
## DEP Data Execution Prevention
prevents code from RUNNING FROM DATA AREA OF RAM
## EnCase Forensic : Case Management
## Flood Guard : prevent DDoS
## Latent = hidden
evidence, has to be drawn out using techniques
## FTK Forensic Tool Kit
## Fuzzing
generate random testing data
## Google Hacking
detailed google search to discover otherwise hidden data about your potential targets
## Helix : Linux Live CD
## Heuristic
live active searching for patterns in viruses
## Imperva SecureSphere WAF
Web Application Firewall : for data center
## MITM Interception Proxy
MITM : Receives all the requests and the responses before passing them on
## Jump Box
in DMZ, provides access to admin consoles of other machines in DMZ
## escrow = 3rd party trust
## M of N
M keyholders must be present to unlock N keys
## Kill Chain
stages of attack
## CVE Common Vulnerabilities and Exposures
## MoA : Memorandum Of Agreement
informal agreement for 2 parties to work together : forms basis of legal contract
## ModSecurity WAF
open source WAF
## MRTG Multi Router Traffic Grapher SNMP
monitors load on network links
## Nagios = open source stats on services
## NAPT = NAT
## NAXSI = nginX Anti XSS and SQL Injection
## Nessus vulnerability scanner
## NetScout
commercial enterprise-level network service assurance products
## Nikto - web server vulnerability scanner
## NIST
National Institute Standards Technology
## Nmap network mapper
## OODA Observe, Orient, Decide, Act
for quick thinking and decision making under attack
## OS Fingerprint = identify OS
## OSINT Open Source Intelligence
## OSSIM Open Source Security Info Mgt
## OVAL language
Online Vulnerability and Assessment Language
## OWASP Open Web App Security Project
## PAC Proxy Auto Config
can also be used maliciously to redirect users to fake proxy sites
## Palo Alto IDS
## Password cracker
eg John the Ripper / Cain and Abel
## PCI DSS
Payment Card Industry Data Security Standard
## PHI Personal Health Info
## PII
## PVLAN Private VLAN
Isolated VLAN within VLAN
## Privilege Escalation
## QRadar SIEM
SIEM from IBM
logs, analysis and policies
## Qualys cloud vulnerability
cloud based vulnerability management
agents run on clients
## rootkit
1. Wipe hard drive
2. Reinstall OS
3. Reinstall Apps
4. Restore data
## RPO Recovery point objective
time to last backup (represents data you can lose if there is a disaster)
## RTO Recovery time objective
planned uptime after disaster S/MIME encrypts email
## SABSA
Sherwood Applied Business Security Architecture
Risk-driven enterprise security architecture
## SANS SysAdmin, Network, Security
## SCADA
manage industrial systems
## SCAP baseline audit
Security Content Automation Protocol
does computer meet baseline security standards
## SCEP Certificate Enrolment
Simple Certificate Enrolment Protocol
## SCP send files
Secure Copy Protection
## SEH exception handler
Structured Exception Handler
collect and analyse data
## SMTP Open Relay
can be used by spammers to send email
## SourceFire IDS
owned by Cisco
## Splunk SIEM
big data gather and analyse
## SPML
XML standard for provisioning data and operations
## taskkill
## tasklist
## tcpdump
command line packet sniffer
## TOGAF
The Open Group Architecture Framework
## Trusted Foundry
supply chain vetting
full hardware supply chain of vendors all vetted as secure
## UAT User Acceptance Testing
## UEFI UNC
## VAS Vulnerability Assessment
## White Team : admin
in a simulated conflict
## Write Blocker
prevent the forensic analysis software from interfering with the data on a drive
## XACML
eXtensible ACL Markup Language
ACL standard via XML
## Xmas Attack
Scanning with flags set to ON
to provoke a response
## XSRF : Authenticated session attack
from one site to another
## XSS Cross Site Scripting
script injected into trusted site
## Zero day attack : new software
## Ports

### LDAP SECURE WITH SSL 636
### RADIUS 1812/3 OR 1645/6
### TACACS+ port 49
### LDP 389
### LDAPS 636
## ADS Alternate Data Streams
embed one file into another
(Windows version of MACOS Forking)
originally conceived as a way to use Forking in the same way as the MAC OS, Windows permits basically embedding one file into another without having traditional methods detect that a file has been embedded. Also when the embedded file is run, the process shows only of the host running so there is no way of knowing which is the real and which is the embedded process at work. Only way of detecting and defeating is by HASHING the files and also by using dedicated ADS trackers.
For instance: the command
“type c:.exe > c:32.exe:anyfile.exe”
will fork the common windows calculator program with an ADS “anyfile.exe.”
ADS can be queried using powershell get-object abc.txt -stream
## TTP Tactics, Techniques and Procedures
## SIEM Security Info and Event Mgt
## Exfiltration = data out
## Exploits
### Flame
### Operation Olympic Games
### Mydoom
### Shamoon
### Melissa
### Zeroaccess rootkit
### Heartbleed vulnerability
## OpenSSL
## EXPLOIT MODULE
EXPLOIT VULNERABILITY
## PAYLOAD
DELIVERED BY EXPLOIT MODULE
CODE DOWNLOADED BY EXPLOIT
WHAT YOU DOWNLOAD TO A MACHINE THAT YOU FIND A VULNERABILITY ON
## Discovery scanner Nmap
host/ip/port
## Banner Grabbing
get info from headers
getting info from welcome and login screens and http header info
## Lua scripting language
## Footprint
### Network topology discovery
FIND ALL HOST/IP ON NETWORK
## Fingerprint
identify systems digitally
software version = work out which software is running, and which version is running, by using non-admin tools to query
active - send packets
passive - analyse packet traffic
tools - nmap, ettercap, p0f, fpdns, hassh
### fpdns does DNS fingerprinting
### hassh does SSH fingerprinting
### ja3 does SSL fingerprinting
## Burner phone
is a prepaid phone that is used and then binned BurnerApp permits a temporary phone number to be created so that people don’t know your real number. Can be disposed of instantly.
## Pivot Point of entry
point of weakness or access
## httrack.com - website download
download full site to local; ensures all paths work locally
## Droplet - mini vm
is a mini-virtual-private-server running on DigitalOcean hosting; set one up in a minute! Price $5 a month upwards.
## SSL3.0 old
is no longer deemed to be secure (Minimum TLS1.1 required) TLS1.1 and 1.2 are deemed secure POODLE is vulnerability in SSL3.0
## bulletproof ISP
no questions asked
## Google hacking
expert use of Google to find information
## Google Dork
advanced google search string Website
## Ripping = website copier
## C2 = Command and Control
rogue control servers (located in enemy territory)
## PIVOT POINT = HACKER POINT OF ACCESS
(part which is being attacked)
## APT Advanced Persistent Threat
ONGOING TOOLS
Ongoing hacker tools remain on target device
## Pen test 6 RULES OF ENGAGEMENT
## CVSS
Common vulnerability scoring system
vulnerability severity
## WIFI pineapple
WIFI attack
$200
## bash bunny
USB attack
$100
## lan turtle
LAN attack
$60
## Dark Web Scanning
https://www.echosec.net/
https://www.echosec.net/darknet
https://www.echosec.net/open-source-threat-intelligence#software
## Hacking Techniques
War Driving [https://wigle.net/](https://wigle.net/)
Targeted Spray
## Password Crackers
- Caine
- Encase
- Autopsy
- FTKImager
- Jailbroken
## Hosting
- Digital Ocean
- Droplet
## Hacker Tools
- HTran : Bridge between networks
- Mimikatz : Extract hashes from Windows memory
- CDR Call Details Records : originating phone number, destination phone number, length of call, text messages sent
- APT Advanced Persistent Threat
- APT10 is Chinese cyber
- Operation SoftCell : attacking phone records of people
## Hashing
shasum -a 512 myfile.txt  on MAC
To find the hash of a string in LINUX type
```bash
echo -n 'phil' | shasum
echo -n "yourstring" |md5sum
echo -n "yourstring" |sha1sum
echo -n "yourstring" |sha256sum
```
Get-FileHash -Algorithm SHA512
CHAP compares HASHes at each end
## Offensive Tools
JRAT takes control
Mimikatz reads usernames and hashes from RAM of a Windows PC
wireshark - glean hostnames, IP
responder - responds to DNS broadcasts and tricks computers into revealing NTLMv2 Hash
hashcat brute force hash cracker
wordscrape the internet
# red team tools
### dirbuster
brute force dictionary attack on files and folders on web server
## burpsuite
red team
xss cross site scripting attack
repeated requests
blue team
interception proxy
## getent
retrieves data from, for example, secure password files on an operating system
getent passwd 0
getent group root - look up root users
getent passwd phil - look up user phil
### hping3
ddos attack
(( spamhouse don't route - don't route these packets))
(( peer drop - drop these packets))
## mac overflow attack
Flood switch buffer memory (CAM = Content Addressable Memory) so it's full and cannot resolve addresses which causes the switch to default to sending out traffic on all ports which is very dangerous and not secure
## tasting
buy a domain in its trial period to validate its monetary worth - if not worth the money, then cancel it during the trial period
## defensive tools
### ids
#### securityonion
enterprise network security monitoring
#### squert and sguil
ids activity alerts in security onion
#### snort packet/traffic monitoring
ids / ips by cisco which provides real time network traffic analysis and packet monitoring
## sheep dip
isolated computer on which can install malware to investigate
## neither red nor blue team tools
## degauss
Uses magnetism to wipe a drive
Can wipe a hard drive or magnetic tape
## cyber random terms
kill chain
reconnaisance
passive osint
email
www
dns
social media
jobs
github
active scanning
network discovery vlan vpn subnets
host discovery servers switch router edge devices clients
os discovery
service discovery
attacking
vulnerability scanning
cve
cvss score
rules of engagement
scope
timing
authorisation
match vulnerability to exploit
load payload
exploit
shell
actions
escalation
reverse shell
exfiltration
permanent presence
retreat
defence
organisations
management
incident


## cyber a-z terms
QOS tag packets with priority 802.1p
dirbuster = brute force dictionary attack file and folder names on app or web server
dig = nslookup
dd image disk
bastion host = jump box
birthday attack - 2 files have same hash
[BUILTWITH.COM](http://builtwith.com/)
[CRT.SH](http://crt.sh/)
[decode.fr](http://decode.fr/)
[EXPLOIT-DB.COM](http://exploit-db.com/)[https://www.exploit-db.com/](https://www.exploit-db.com/)   This database has clear, up to date list of exploits on a daily basis
[https://github.com/danielmiessler/SecLists](https://github.com/danielmiessler/SecLists)[https://www.owasp.org/index.php/OWASP_Internet_of_Things_Project](https://www.owasp.org/index.php/OWASP_Internet_of_Things_Project)
[https://nvd.nist.gov/](https://nvd.nist.gov/)
[https://research.checkpoint.com/](https://research.checkpoint.com/)
[https://techet.net/netanalyzer/](https://techet.net/netanalyzer/)
[httrack.com](http://httrack.com/) - download full site to local; ensures all paths work locally
[Phaser.io](http://phaser.io/)
[vk.com](http://vk.com/)
[webkay.robinlinus.com](http://webkay.robinlinus.com/) Browser Fingerprinting
@CVENEW ON TWITTER
//server/share
1102 clear security logs
4719 change audit policy
5 minutes There is a battle raging video
Acces
access-list 101 deny 1.2.3.4
access-list extended: mylist deny 1.2.3.4 deny 5.6.7.8
ACL extended uses source and destination IP and port
ACL standard uses source IP
ACS authenticated config scanner
action on objectives = goal
action on objectives = goals
Actor
Actor = hacker
admin eg job rotation
ADS (hide within another file)
ADS Alternate Data Stream : can 'fork' a file into 2 parts and use this to effectively embed one file into another one
ADS Alternate Data Streams - originally conceived as a way to use Forking in the same way as the MAC OS, Windows permits basically embedding one file into another without having traditional methods detect that a file has been embedded. Also when the embedded file is run, the process shows only of the host running so there is no way of knowing which is the real and which is the embedded process at work. Only way of detecting and defeating is by HASHING the files and also by using dedicated ADS trackers.   For instance: the command   "type c:\anyfile.exe > c:\winnt\system32\calc.exe:anyfile.exe"   will fork the common windows calculator program with an ADS "anyfile.exe."    ADS can be queried using powershell get-object abc.txt -stream
ads alternative data streams hides data within them
ads query with powershell or ADSSpy
Air gap = isolation
Air gap isolated
Aircrack-ng WIFI
Aircrack-ng wireless
AirPcap over WIFI
alient vault SIEM
alienvault
Alienvault SIEM
analyse: scan, interception proxy
Anomaly = pattern
anomaly = pattern
anomaly compares with baseline for changes eg volume, url length, packet headers
APT Advanced Persistent Threat : INSTALL ONGOING TOOLS WHICH REMAIN
ArcSight by HP : security suite
armitage = Java GUI to metasploit which is red team exploit scanner
armor has other tricks
ARP quiet
assessment scan of vulnerabilities
attack vector = path of attack
audacity frequency spectrograph
authenticator on switch
autopsy
Autopsy = front end for Sleuth : disk imaging and file analysis
Autopsy is forensic software
Backdoor
Bandook v1.1 By Princeali
Banner Grabbing - getting info from welcome and login screens and http header info
banner grabbing of headers
Base64  [https://www.base64encode.org/](https://www.base64encode.org/)[https://en.wikipedia.org/wiki/Base64](https://en.wikipedia.org/wiki/Base64)
Bash Bunny
bastion host is dmz proxy
bastion on DMZ
beacon in wifi
behaviour = beyond anomaly, sees results of attack eg files change.
behaviour based more complex than anomaly
Behavioural = Beyond anomaly; uses models of known intrusions.  Uses TTP to infer when attack may be in progress
Birthday Attack = 2 files, same hash
Black Hat [https://www.blackhat.com/us-18/](https://www.blackhat.com/us-18/)
Black hole = drop all traffic
BlackEnergy
blackhole DROP PACKETS
BLIND : ATTACKER GIVEN NO KNOWLEDGE AND DEFENDERS AWARE
Blind FTP : no file or folder listing provided
blinding = flood plus attack
blinding attack is DOS (fake attack) + real attack to distract from the real attack
Blockchain can also provide very secure encryption
Blockchain immutable
Blockchain is decentralised
Blog on cybersecurity   [https://contextis.com/BLOG](https://contextis.com/BLOG)
Bluejack : hijack (virus) over bluetooth
Bluesnarf : steal data
bogon is unallocated range on internet (none left now)
Bro = LINUX IDS
Browser Fingerprint Across The Web  [https://panopticlick.eff.org/results?&dnt=111&t=111&a=111#fingerprintTable](https://panopticlick.eff.org/results?&dnt=111&t=111&a=111#fingerprintTable)
buffer overflow - mitigate with input validation
buffer overflow attack runs code from RAM
buffer overflow mitigate with input validation
bulletproof ISP - no questions asked!!!
burner app
burner phone
Burner phone is a prepaid phone that is used and then binned
BurnerApp permits a temporary phone number to be created so that people don't know your real number. Can be disposed of instantly.
BURP is pentest for web app
BURP suite is interception proxy
C2 = command and conquer = C&C
C2 = Command and Control = rogue control servers (located in enemy territory)
C2 command control
CAB change advisory board
Cacti = open source logs with graphs
cacti.net snmp
CAN Controller Area network : between small PLC Programmable Logic Controllers
CAPTCHA
CAR Corrective Action Report : steps to take to fix vulnerability
CASP CompTIA Advanced Security Practitioner
CCB Change control board
CCB change control board
CCE common config enumeration = config settings
cellebrite
Cellebrite : get data out of mobile phones for criminal investigation
cellebrite mobile
Certificate validation
certutuil -hashfile file algorithm (md5/sha1/sha256/sha512)
Chasers Trojan Horse Video
Check Point : firewall
CIS Center for Internet Security : partly by SANS
CIS provides benchmarks
CISA Certified Info Systems Auditor
CISM Certified Info Security Manager
CISO Chief Info Security Officer
CoA courses of action
CoA matrix
coa: detect destroy degrade disrupt deny deceive
COBIT : Control Objectives for IT : security framework
COBIT control objectives for IT ie how do we manage IT in business environment
collect: scan siem, ids
Command and control
Commands
Comodo free email cert
Content based authentication eg date, time, location
controls: organisation, physical, logical, admin
Cookie discussion [https://wholeftopenthecookiejar.eu/static/tpc-paper.pdf](https://wholeftopenthecookiejar.eu/static/tpc-paper.pdf)[OGUsers.com](http://ogusers.com/)
Countdown to Zero Day by kim zetter
CPE common platform enumeration = OS
CPU attack : Foreshadow
CPU attack : Meltdown
Crimeware scans internet for vulnerabilities
CRP
cryptcat opens remote encrypted shell session
CSA+ control classes
CSIRT
CSIRT Computer Security Incident Response Team
CVE  [cve.mitre.org](http://cve.mitre.org/)
cve [details.com](http://details.com/)
CVE Common Vulnerabilities and Exposures
CVE common vulns
CVSS Common vulnerability scoring system - indicates how severe a vulnerability is
CVSS common vulneraibility scoring system : how vulnerable is a system
CWE common weaknesses enumeration
cybermap.kaspersky.com
Cybersquatting = buying someone else's domain name
DAI dynamic APR
Data Breaches 2018  [https://www.itgovernance.co.uk/blog/list-of-data-breaches-and-cyber-attacks-in-june-2018-145942680-records-leaked/](https://www.itgovernance.co.uk/blog/list-of-data-breaches-and-cyber-attacks-in-june-2018-145942680-records-leaked/)
Data is classified, unclassified, confidential, secret, top secret
Dbi. Dynamic code analysis
DCS Distributed Control System
dd if input of output  dd if=/dev/sda of=/mnt/usbstick/a.img
DD imaging
dd raw image of drive
Decompile - to source code
DEFCON Defense Readiness Condition  5 = no alert    3 = 15 min air strike call     1 = ready for anything
DEP Data Execution Prevention - prevents code from RUNNING FROM DATA AREA OF RAM
detective control provides alerts
dirbuster dictionary/brute force attack
Disassemble - take back to assembly language
Discovery Scan
discovery scan of IP
Discovery scanner eg Nmap : host/ip/port
dll injection of bad dll
dll sideload bad dll
dns harvesting
DNSDUMPSTER
domain validation
DOUBLE BLIND : ATTACKER NO KNOWLEDGE AND DEFENDERS NOT AWARE OF IMPENDING ATTACK
DragonFly/Havex
drop packets: no notification
Droplet is a mini-virtual-private-server running on DigitalOcean hosting; set one up in a minute! Price $5 a month upwards.
dropped = malware placed on your system
dropper
dropper = first code on machine
dropper is malware which installs more malware
dss data security standard
DTP Dynamic Trunking Protocol joins switches across the trunking port
dtp dynamic trunking protocol: turn off if rogue switch suspected
EAPoL EAP over LAN uses certificate
eDiscovery manages data
egress OUT
email harvest
EMET
EMET Enhanced Mitigation Experience Toolkit : requires 3rd party processes to run with NX (No-Execute) and DEP Data
EMET Enhanced Mitigation Experience Toolkit forces 3rd party apps to use NX and DEP for access ie No Execute and Data Execution Prevention - both prevent Framework = Policy + Procedures + Guidelines
emet turns on nx and dep
encase
encase = forensic eg e01 hard drive format
EnCase does forensics
EnCase Forensic : Case Management
encase used to analyse drive
Encryption in Windows : make copy of a file and encrypt the copy then delete the original
endpoint investigator
Enumerate : OS
Enumeration
Ephemeral temp port
Eradication: sanitise, reconstruct, reimage, secure disposal
escrow = 3rd party trust
Ev external validation
event viewer = evtx
Exfiltrate
Exfiltration
Exfiltration = copy data out of system
Exploit : tool to attack a weakness
Exploit apps - gain access through apps
Exploit browser - gain access through browser
exploit browser/app/idendity
exploit framework eg metasploit - launches exploit against vulnerability
Exploit identity - gain access through identity of another
EXPLOIT MODULE = TRY AND EXPLOIT A VULNERABILITY
external validation eg RBS
F-Response is a forensic analysis tool
Fake hacker video q
fciv -c compare file with hash
fciv file checksum integrity validator
File Fork - split up files into multiple parts, but the OS treats them as one file and will track the position of each relative part of the file. Also can be looked on as data sets hidden inside one file.
File Sharing Baywords Rapidshare are no longer
File signatures   [https://filesignatures.net/index.php?page=all](https://filesignatures.net/index.php?page=all)
Fingerprint = work out which software is running, and which version
fireeye redline: analyse RAM and processes
Firewalk is active sniffing to calculate from responses returned which layer 4 protocols and ports are allowed on a firewall
firewalk to discover acls
firewall: Juniper, Checkpoints, Palo Alto
FISMA federal info security management act
Flame
Flood Guard : prevent DDoS
Footprint = Topology Discovery = FIND ALL HOST/IP ON NETWORK
forensic analysis: image of drive, crack password, encase analyse drive, logs, prefetch cache
forensic duplicate
forensic machine: task browser, autopsy browser, memoryze fireeye, f-resrponse tactical
forensic pc has no or limited internet
forensic: hash, password, image
Foundry = trace hardware
FPC full packet capture
FPC full packet capture needs a lot of disk space
fraggle attack: icmp udp ddos
FTK Forensic Tool Kit
FTK forensic toolkit
functional classifications: prevention deterrence detection correction compensating
Furby connect
Fuzzing - generate random testing data
Gantt/PERT
Google Dork - advanced google search string
Google hacking - expert use of Google to find information
Google Hacking : detailed google search to discover otherwise hidden data about your potential targets
Google Hacking Master List  [https://it.toolbox.com/blogs/rmorril/google-hacking-master-list-111408](https://it.toolbox.com/blogs/rmorril/google-hacking-master-list-111408)
Graeme Batsman [Datasecurityexpert.co.uk](http://datasecurityexpert.co.uk/)
Hacker Groups Thallium North Korea
hacker groups shadow crew 2002
hacker groups counterfeitlibrary.com
hackers albert gonzales shadow crew
hackers brett johnson shadow crew
Hacker News [news.ycombinator.com](http://news.ycombinator.com/)
Hacker typer net
HackTheBox : Pen Testing Lab Games [https://www.hackthebox.eu/](https://www.hackthebox.eu/)
Have I been hacked?   [https://haveibeenpwned.com/](https://haveibeenpwned.com/)
Heartbleed
Heartbleed : can lie about the length of your packet so the response can pull down data from RAM by you falsely inflating the expected size of your request
heartbleed set RHOSTS NOT RHOST
Helix : Linux Live CD
heuristic
Heuristic : live active searching for patterns in viruses
Heuristic = real time
Hijacking = using someone else's domain name (or similar)
Host
HSTS https strict transport security only allows HTTPS
https://hackerspassion.wordpress.com/category/downloads
https://internet-map.net/Content/info/info-eng.jpg
https://sharepoint sites
https://techet.net/netanalyzer
https://www.powershellempire.com
https://www.telnet.org/htm/places.htm
htttrack copies site
ICMP noisy
ICS Industrial Control System
idp can throttle bandwidth and change firewall rules
imaging: use encase or dd
incident summary - what, when, who, scope, how
Industroyer/CrashOverride
ingress IN
Injection: DSniff ettercap hping nemesis scapy
Injection: ettercap dsniff hping nemesis
Insecam   [http://www.insecam.org/en/bytype/DLink/?page=2](http://www.insecam.org/en/bytype/DLink/?page=2)
Installation
Interception proxy - sits as a proxy server between the client and the internet
Interception Proxy = MITM : Receives all the requests and the responses before passing them on
Internet Mapping Project
IOC indicator of compromise
IOT may not install updates
ipsec isolation with exceptions
iptables logs linux firewall activity
irp incident response: playbook, call list, incident form, custody form
is running, by using non-admin tools to query
ITIL best practice
IV ATTACK EXPLOITS WEP
Jexboss [https://github.com/joaomatosf/jexboss/](https://github.com/joaomatosf/jexboss/)
Jump Box = in DMZ, provides access to admin consoles of other machines in DMZ
jump box on dmz
Keystrokes
Kill Chain - stages of attack
Kill Chain (Cyber) - Reconnaisance, Weaponise, Deliver, Exploit, Install, C2
Kill Chain (Military) - Find, fix, track, target, engage, assess
Kill Chain: find fix track target engage assess
Kill Chain: reconnaisance weaponise deliver exploit install command and control actions
known unknown means we know of its existence but no fix found
KPI key performance indicator
Krebs on Security blog [https://krebsonsecurity.com/](https://krebsonsecurity.com/)[TroyHunt.com](http://troyhunt.com/) [https://www.troyhunt.com/](https://www.troyhunt.com/) Weekly Video Blog
Latent = hidden (evidence, has to be drawn out using techniques)
LDAP SECURE WITH SSL 636
LDAPS 636
LDP 389
LiveAction Network Monitoring
logical = software control
Lua is a very fast scripting language
M of N = M keyholders must be present to unlock N keys
mac flood
mac limit
MAC moves adds changes
Maintain
malspam
maltego
malvertising
Mandiant = OPENIOC Indicators Of Compromise
Mandiant = OpenIOC indicators of compromise
martian packet destined for private range
Masquerade = NAT
masquerade replaces good with bad .exe
maturity model 2=risk 3=policy 4=management 5=CEO
maturity: react, comply, proact, optimise
Melissa
Meltdown, the attempt to perform an illegal read of kernel memory triggers the page fault mechanism (by which the processor and operating system cooperate to determine which bit of physical memory a memory access corresponds to, or they crash the program if there's no such mapping)
Memoryze provides RAM forensics
Merterpreter
metamorphic completely recompiles
Metamorphic recompile
metasploit launches exploit against vulnerability
Mimikatz
mitigate: deter, avoid, transfer, accept
MITM
MITRE STIX Structured Threat Info Expression
MITRE STIX: observe, indicator (patterns of observables), TTP tactics threats and procedures
MoA : Memorandum Of Agreement : informal agreement for 2 parties to work together : forms basis of legal contract
MoU : Memorandum Of Understanding : preliminary expression of wish to work together
MOU intention of working together
MTBSI mean time between service incidents
MTD max tolerable downtime
Mydoom
NAC access based on role, time, location
NAC context based also uses other factors
NAC uses time date location roles and rules
Nagios = open source stats on services
nagios snmp needs agent
NAPT = NAT
NAT mitigates firewalking
naxsi = nginx anti xss and injection
NAXSI = nginX Anti XSS and SQL Injection
NAXSI is Nginx Anti XSS and Injection
nc = NetCat = Linux TCP and UDP Network Tool
nc instead of telnet on mac
nc NETCAT opens remote shell
nc telehack.com 23
nc towel.blinkenlights.nl 23
Nessus = commercial vulnerability scanner
Nessus is vulnerability scanning tool
nessus scans against CIS benchmark
Nessus scans against CIS benchmarks for compliance
net groups domainadmins
net groups domaincontrollers/domain
net user/domain
NetScout = commercial enterprise-level network service assurance products
NETSPARKER SCAN
Network Analyzer App
network fingerprint
nexpose vulnerability scanner
NGINX
NIDS operates INSIDE firewall
NIDS: Snort Bro Sourcefire
Nikto = web server vulnerability scanner
NIST 800-82 protects scada
nist 800-88 sanitise
NIST core : identify (assets and risks) protect (acl, train, maintain) detect (event, anomalies, continuous) respond (IRP, comms,analyse, mitigate) recover
NIST National Institute for Standards and Technology
NVD National Vulnerability Database
NVT network vuln tests : scan for NVD and CVE known vulns
NX No Execute - separates area of memory holding 1) CPU instructions 2) data. Main use is to ensure that data which EXECUTES is ONLY EXECUTING FROM THE RIGHT AREA OF MEMORY IE NOT THE 'DATA' PART. This helps to thwart BUFFER OVERFLOW ATTACK
Obfuscate makes it harder for others to decompile
ooda observe orient=identify decide (what to do) act
OODA Observe, Orient, Decide, Act for quick thinking and decision making under attack
OpenAuth
OpenID Google
OpenNMS Network Management System  https://www.opennms.com/opennms-platform/
OpenSSL Heartbleed is a vulnerability
OPENVAS vulnerability scanner part of OSSIM
Operation Olympic Games
organisational validation eg Nat West
OS Fingerprint = identify OS
OSSIM Open Source Security Info Mgt
OSSIM open source security info mgt : integrates snort with openvas
OVAL also is web exploits
OVAL Online Vulnerability and Assessment Language
OWASP
OWASP Open Web App Security Project
OWASP open web application security project
OWASP web
PAC Proxy Auto Config : can also be used maliciously to redirect users to fake proxy sites
packet analyser looks at data inside
Palo Alto IDS
Pass The Hash attacks   [https://blog.stealthbits.com/passing-the-hash-with-mimikatz](https://blog.stealthbits.com/passing-the-hash-with-mimikatz)[https://www.google.co.uk/search?q=mimikatz&source=lnms&tbm=isch&sa=X&sqi=2&ved=0ahUKEwjsjcO37frcAhXLCsAKHdE0AoQQ_AUIDCgD&biw=1440&bih=736#imgrc=6Ne7eCi1zdW3zM:](https://www.google.co.uk/search?q=mimikatz&source=lnms&tbm=isch&sa=X&sqi=2&ved=0ahUKEwjsjcO37frcAhXLCsAKHdE0AoQQ_AUIDCgD&biw=1440&bih=736#imgrc=6Ne7eCi1zdW3zM:)
PASSWORD CRACKER
Password cracker eg John the Ripper / Cain and Abel
password kept in live RAM
Payload
PAYLOAD = WHAT YOU DOWNLOAD TO A MACHINE THAT YOU FIND A VULNERABILITY ON
Payload to inject onto remote system for purpose of running commands, showing screnshots etc
pcap logs packets
PCI DSS Payment Card Industry Data Security Standard
pci payment card industry
Pen test is manual
Pen test teams : Red Blue White
PEN TEST TOOLS
pen test: document target, research attack methods, vulnerability scan to get vulnerabilities, exploit to match vulnerability
Pen testing SIX RULES OF ENGAGEMENT
Penetration Test : Red vs Blue
Perimiter test
personnel: train, dual control, separate duty, cross train, mandatory vacation
pfs perfect forward secrecy
Pgp email cert
PHARMING=DNS POISON
PHI Personal Health Info
PHI personal health info
phi protect health info
PII
pii personal identify info
Pivot Point - point of weakness or access
PIVOT POINT = POINT OF ACCESS (part which is being attacked)
Pivot Point = weak point of entry for the attack
pivot point of entry
playbook
playbook = contains runbooks
playbook = runbook = 'what to do if get hit'
playbook 1) get system running 2) preserve evidence 3) prevent recurrence
playbook of many runbooks
playbook: get secure, get evidence, prevent re-attack
PLC programmable logic controller
PLCpwn
pnac = port based NAC control using 802.1x
point weak password. No logging etc
polymorphic alters hash
Polymorphic change
POODLE is vulnerability in SSL3.0
Port
port mirror - passive logging
Ports
post-admission
pre-admission
Prevent: ips, firewall, av, emet, waf
preventative control eg biometric, encryption, mantrap
Privilege Escalation
probe in wifi
process explorer
process explorer: compressed in yellow
process hollowing: memory address of process
process monitor
promisuous = all packets
protocol analysers looks at headers
proxy can be transparent or non-transparent when have to configure client
proxy server for outbound traffic
PTH pass the hash
pth pass the hash
PVLAN private VLAN is a VLAN inside a VLAN
PVLAN promiscuous talks on all ports
QRadar = SIEM from IBM : logs, analysis and policies
Qualys = cloud based vulnerability management (agents run on clients)
RADIUS 1645/6
RADIUS 1812/3
RADIUS 1812/3 OR 1645/6
RADIUS UDP
radius uses UDP
Raspberry PI Modbus
RAT
RBAC Role Based Access Control
RBL re2sal time blocklist
Reconaissance : Passive & Active
recovery control eg backup, alternative site, DRP
reject packets: notification
remediation quarantines then fix
Removal
restricted admin mode means password never sent externally
retrovirus disables av
reverse proxy for inbound traffic eg VOIP
RFC request for change
RFC request for change / comments
RFC request for comments
RNA retrospective network analysis
RNA retrospective network analysis needs loads of storage
RPO data which will be lost Recovery Point Objective
RPO Recovery point objective : time to last backup (represents data you can lose if there is a disaster)
RTO planned uptime Recovery Time Objective
RTO Recovery time objective : planned uptime after disaster
rubber ducky injects command to os via usb
rules of engagement: timing, scope, authorisation, exploitation, comms, report
RUM real time user monitoring
RUM real user monitor - capture transactions
RUM real user monitoring provides direct feedback on how the user is using the app
runbook
runbook = sequence of steps
runbook step by step incident response
S/MIME encrypts email
SABSA Sherwood Applied Business Security Architecture
SABSA sherwood applied business security architecture for enterprise solutions
SAML used for SSO
SANS : Sysadmin, Audit, Networking, Security : not-for-profit
SANS GIAC
SANS SysAdmin, Network, Security
SANS trains people
SCADA = manage industrial systems
Scan
scan sensitivity = how deep we are trying to penetrate
scanning frequency depends on risk appetite, regulations, technical constraints, workflow
SCEP Simple Certificate Enrolment Protocol
Schneier on security [https://www.schneier.com/](https://www.schneier.com/)[https://struts.apache.org/](https://struts.apache.org/)
Scope = downtime + recovery time + data integrity + economic loss
scope of scan = numbers of computers
Scope: downtime, recovery time, integrity, criticality
SCP Secure Copy Protection
Screenshots
SEH Structured Exception Handler : handles exception
Services
Severity depends on data, downtime, scope
sha1 = 160
sha256 used in IPSEC, SSL,
sha512
Shamoon
Sheep dip = isolated computer and allow virus to try to attack while monitoring it
sheep dip is isolated infected computer
sheep dip to study virus
sheepdip: try out viruses on
shouldiblockit.com - check what's running in your RAM
shun = block attacker IP
siem = alien vault
SIEM = general term = Security Info and Event Mgt
SIEM = general term = Security Info and Event Mgt. COLLECT AND ANALYSE DATA
siem = hadoop
siem = log and analyse
SIEM = logs + analysis
SIEM log and analyse
SIEM log then analyse
SIEM logs events - Security Info and Log Mgt
SIEM Security Info and Event Mgt = collect and analyse data
SIEM splunk arcsight qradar alienvault ossim syslog eventviewer
sigcheck in process explorer
sinkhole REROUTE PACKETS
Sinkhole: detect flood and redirect
sleuth autopsy
sleuth kit
SliDo Q&A quiz master software   [https://www.sli.do/](https://www.sli.do/)
slow and sparse infrequent 'under the radar'
SMTP Open Relay : can be used by spammers to send email
smurf attack: icmp tcp ddos
SMURF=PING
Snarf : steal data
snort is IDS / IPS part of OSSIM
social media profiles
solarwinds netflow : tcp
SOP standard operating procedures
Source = instigator
spam mimic (lab : treat as CSV file)
speculative execution attacks (such as Meltdown and Spectre),
spider searches all words on a computer then uses this dictionary as a password cracking list
spl = splunk = search processing language
Splunk : big data gather and analyse
splunk = hadoop big data
SSL3.0 is no longer deemed to be secure (Minimum TLS1.1 required)
stealth virus passes good file to av for scanning
Steganography
STIX structured threat info expression
Story : BMW 2-stage hack 1) Break in and disable alarm 2) Steal car [https://mrooding.me/a-dutch-first-ingenious-bmw-theft-attempt-5f7f49a96ec8](https://mrooding.me/a-dutch-first-ingenious-bmw-theft-attempt-5f7f49a96ec8)
Story : Stuxnet
Stuxnet : Countdown To ZeroDay Book - Kim Zetter : Stuxnet was US and Israel
submarinecablemap.com
supplicant requests access
SYN : first part only (can try if ICMP is blocked)
SYN..ACK  FIN..ACK on both sides
synthetic monitoring provides a path of inputs to simulate a user journey through a site
Syslog = logs only
sysvol
TACACS+ 49
TACACS+ port 49
TACACS+ TCP
tacacs+ uses TCP and fully encrypted
TARGETED : SPECIFIC AREA TARGETED
Targeted Cyber Attack Reality - Don't be a Victim - Trend Micro
Tasting = try domain to see if it gets hits
TCP syn
TCP SYN attack can do service discovery
tcp syn attack: ddos using tcp 3-way handshake
tcpdump : command line packet sniffer
tcpview
the –sV –O --script
TLS1.1 and 1.2 are deemed secure
Topics: Threat management, Vulnerability Management, Incident, Architecture, Tool Sets
Triton
truecaller
Trusted environment = OS + drivers + firmware + apps
Trusted Foundry : full chain of hardware suppliers can be verified to be security vetted (so not inserting any spying or other malware in the very hardware)
Trusted foundry validates all hardware suppliers
TTP tactics techniques and procedures
TTP Tactics Techniques Procedures
TTP tactics techniques procedures
TTP Tactics, Techniques and Procedures (used by hackers)
TurnipSchool
UAT User Acceptance Testing
UEFI
UFED : get data from mobile phones : Universal Forensic Extraction Device
UFED universal forensic extraction device
UFED universal forensic extraction device - take data without affecting it
UNC
USB 'class' of device - can be faked
V&V verify (meet compliance policy) and validate (does approved task)
VAS Vulnerability Assessment
Vector
Vector = sequence of steps
vlan double tag used to access second vlan
VLAN Pooling
volatile places: Swap file, routing table, RAM
volatile: swap file, router, RAM
VTP Vlan Trunking Protocol across switches
Vulnerability scanner eg OpenVAS, Nessus, Nexpose
vulns -R show vulnerabilities
Weaponisation
Website Ripping = website copier
wft windows forensic toolkit
White Team : admin in a simulated conflict
Windows freeSSHd telnet server	http://www.freesshd.com/?ctt=overview  Can SSH into your computer also send files with SFTP and FTPS
winpcap = LibCap = sniffer
wireshark = kismet = tcpdump = dsniff = ettercap
Wireshark: analysis, graph, filter, protocol
wozniac - phone hacker before apple
write blocker
Write Blocker : prevent the forensic analysis software from interfering with the data on a drive
Xmas Attack : Scanning but with unusual settings to ON for certain packet flags to try and provoke certain responses from the device being scanned, to reveal information
XMAS ATTACK = DOS ATTACK?
XSRF : Authenticated session attack from one site to another
XSS Cross Site Scripting : script injected into trusted site to compromise clients running on trusted site
ZAP Zed Attack Proxy is interception proxy
Zero day attack : new software
Zeroaccess rootkit
zones in network separated with acl
```