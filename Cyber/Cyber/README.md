# cyber

## Contents

- [cyber](#cyber)
  - [Contents](#contents)
  - [Links](#links)
- [Hardware](#hardware)
  - [Hardware Labs](#hardware-labs)
- [Server](#server)
- [Networking](#networking)
  - [Networking Random Terms](#networking-random-terms)
  - [OSI 7-Layer Model Of Networking](#osi-7-layer-model-of-networking)
  - [Networking Ports And Protocols](#networking-ports-and-protocols)
  - [WIFI](#wifi)
  - [VM Labs](#vm-labs)
- [Advanced Networking](#advanced-networking)
- [Linux Administration Labs](#linux-administration-labs)
  - [Install](#install)
    - [install apps](#install-apps)
    - [install ifconfig](#install-ifconfig)
  - [Labs](#labs)
    - [dig](#dig)
    - [mtr](#mtr)
    - [ss (Netstat equivalent)](#ss-netstat-equivalent)
    - [run a new shell](#run-a-new-shell)
    - [reboot](#reboot)
    - [Get Linux Running Processes](#get-linux-running-processes)
    - [Everything is a file!](#everything-is-a-file)
    - [Naming](#naming)
    - [Hidden Files](#hidden-files)
    - [Help](#help)
    - [Compressing](#compressing)
    - [Wildcards](#wildcards)
    - [Permissions](#permissions)
    - [head and tail](#head-and-tail)
    - [sort](#sort)
    - [Viewing Data](#viewing-data)
    - [Piping Data](#piping-data)
    - [top](#top)
    - [shasum checks hash](#shasum-checks-hash)
    - [diskutil](#diskutil)
    - [lspci lists pci information](#lspci-lists-pci-information)
    - [Linux Rescue Environment](#linux-rescue-environment)
    - [Apple Rescue Environment](#apple-rescue-environment)
    - [Networking](#networking-1)
      - [ip address](#ip-address)
      - [ifconfig](#ifconfig)
    - [firewall](#firewall)
- [Linux Notes](#linux-notes)
  - [Linux Introduction](#linux-introduction)
- [Windows Administrator Labs](#windows-administrator-labs)
  - [Scripting Labs](#scripting-labs)
    - [Hostname](#hostname)
    - [Folder Labs](#folder-labs)
    - [Environment Variables](#environment-variables)
  - [Powershell Labs](#powershell-labs)
    - [MSINFO32](#msinfo32)
    - [WinVer](#winver)
    - [MSCONFIG](#msconfig)
    - [UAC](#uac)
    - [Attrib](#attrib)
    - [Registry Editor](#registry-editor)
    - [MMC](#mmc)
    - [Services](#services)
    - [Event Viewer](#event-viewer)
  - [Monitoring](#monitoring)
    - [Task Manager](#task-manager)
    - [TaskList](#tasklist)
    - [Resource Monitor](#resource-monitor)
    - [Performance Monitor](#performance-monitor)
    - [Reliability Monitor](#reliability-monitor)
    - [AntiVirus](#antivirus)
  - [Computer Management](#computer-management)
    - [Local Users And Groups](#local-users-and-groups)
  - [Storage](#storage)
    - [ChkDsk](#chkdsk)
    - [Defrag](#defrag)
    - [DiskMgmt](#diskmgmt)
    - [RAID and Diskpart](#raid-and-diskpart)
  - [Recovery](#recovery)
    - [BitLocker](#bitlocker)
  - [Windows Client - Server Labs](#windows-client---server-labs)
    - [Build Domain](#build-domain)
    - [RDP](#rdp)
    - [Share](#share)
    - [Print](#print)
    - [Group Policy](#group-policy)
    - [Printing](#printing)
  - [Windows Server Labs](#windows-server-labs)
    - [DNS](#dns)
    - [DHCP](#dhcp)
    - [Paging File](#paging-file)
    - [Certificate Server](#certificate-server)
    - [Storage Spaces](#storage-spaces)
    - [IIS](#iis)
    - [Web Server In General](#web-server-in-general)
- [Azure Labs](#azure-labs)
  - [Who Is Logged In](#who-is-logged-in)
  - [List Resource Groups](#list-resource-groups)
  - [List All Resources!](#list-all-resources)
  - [List Resources In Group](#list-resources-in-group)
  - [List All Virtual Networks](#list-all-virtual-networks)
  - [List All Network Cards](#list-all-network-cards)
  - [List All Public IP Addresses](#list-all-public-ip-addresses)
  - [List All Virtual Machines](#list-all-virtual-machines)
  - [Create Resource Group](#create-resource-group)
  - [Azure VM Install Windows Server](#azure-vm-install-windows-server)
  - [Azure VM Install Ubuntu Server](#azure-vm-install-ubuntu-server)
- [HyperV Labs](#hyperv-labs)
  - [Virtual Switching](#virtual-switching)
    - [Create a virtual switch](#create-a-virtual-switch)
- [Routing And Switching Labs](#routing-and-switching-labs)
    - [Create Static Route](#create-static-route)
    - [Create Dynamic Route](#create-dynamic-route)
- [Network Security](#network-security)
  - [Project And Risk Management](#project-and-risk-management)
  - [Encryption - Data In Transit](#encryption---data-in-transit)
  - [Active Directory](#active-directory)
  - [Encryption](#encryption)
  - [WAYS TO ENCRYPT DATA](#ways-to-encrypt-data)
  - [SNMP](#snmp)
  - [IPSEC](#ipsec)
  - [SCSI](#scsi)
  - [SAN STORAGE AREA NETWORK](#san-storage-area-network)
  - [SITE SURVEY](#site-survey)
  - [ACTIVE DIRECTORY](#active-directory-1)
    - [LDAP](#ldap)
    - [LDAPS = SECURE VERSION](#ldaps--secure-version)
    - [KERBEROS](#kerberos)
  - [INSECURE AUTHENTICATION](#insecure-authentication)
    - [PAP](#pap)
    - [CHAP](#chap)
  - [SECURE AUTHENTICATION](#secure-authentication)
    - [MS-CHAP2](#ms-chap2)
    - [EAP-TLS](#eap-tls)
    - [PEAP](#peap)
    - [LEAP](#leap)
  - [ONE-TIME PASSWORDS](#one-time-passwords)
    - [OTP](#otp)
    - [TOTP](#totp)
  - [EMAIL ENCYRYPT/AUTHENTICATE](#email-encyryptauthenticate)
    - [PGP](#pgp)
  - [DIAL-IN AUTHENTICATION](#dial-in-authentication)
    - [RADIUS](#radius)
    - [DIAMETER](#diameter)
    - [TACACS+](#tacacs)
  - [SSO](#sso)
      - [FEDERATION](#federation)
      - [BACKUPS](#backups)
      - [Risk Analysis Process](#risk-analysis-process)
    - [Network Security Lab](#network-security-lab)
      - [Gaining Access To A Network](#gaining-access-to-a-network)
        - [Class Lab](#class-lab)
      - [NTFS And Share Permissions](#ntfs-and-share-permissions)
        - [Lab : NTFS and Share Permissions](#lab--ntfs-and-share-permissions)
      - [Virtual Online Router](#virtual-online-router)
      - [Group Policy Management](#group-policy-management)
        - [Lab - Password And Lockout Policy](#lab---password-and-lockout-policy)
        - [Lab - Publish A Printer](#lab---publish-a-printer)
        - [Lab - Publish Software](#lab---publish-software)
      - [DNS Labs](#dns-labs)
    - [Wireshark](#wireshark)
        - [Install Wireshark](#install-wireshark)
    - [WIFI labs](#wifi-labs)
        - [Hacking Into Symmetric Encryption - Part 1](#hacking-into-symmetric-encryption---part-1)
        - [Hacking Into Symmetric Encryption - Part II](#hacking-into-symmetric-encryption---part-ii)
        - [Hacking Into Symmetric Encryption - Part III](#hacking-into-symmetric-encryption---part-iii)
    - [WIFI lab](#wifi-lab)
    - [DEFENSE IN DEPTH](#defense-in-depth)
      - [STORAGE TYPES](#storage-types)
    - [MOBILE SECURITY](#mobile-security)
    - [VIRTUALIZATION](#virtualization)
    - [Site Survey](#site-survey-1)
    - [Encryption Methods](#encryption-methods)
    - [Mobile Encryption](#mobile-encryption)
    - [WIFI](#wifi-1)
      - [Secure WIFI](#secure-wifi)
    - [WIFI CHANNELS](#wifi-channels)
      - [War driving / war chalking](#war-driving--war-chalking)
      - [WPS WIFI Protected Setup](#wps-wifi-protected-setup)
      - [Rogue Access Point](#rogue-access-point)
      - [Evil Twin](#evil-twin)
      - [Jamming](#jamming)
      - [Blue Jack](#blue-jack)
      - [Snarf](#snarf)
      - [Blue Snarf](#blue-snarf)
      - [Distances](#distances)
    - [Broadband Methods](#broadband-methods)
    - [Dial up](#dial-up)
    - [VPN](#vpn)
    - [IPSEC](#ipsec-1)
  - [Network Architecture](#network-architecture)
    - [Defense-in-depth](#defense-in-depth-1)
      - [Physical Security](#physical-security)
      - [Network Security](#network-security-1)
        - [Access Control](#access-control)
        - [Privileged Access Management](#privileged-access-management)
        - [Data Security](#data-security)
    - [Virtualization](#virtualization-1)
    - [AV SCANNING](#av-scanning)
    - [NETWORK ATTACKS](#network-attacks)
    - [WIRELESS](#wireless)
    - [ENCRYPTION](#encryption-1)
      - [S/MIME](#smime)
      - [PGP PRETTY GOOD PRIVACY](#pgp-pretty-good-privacy)
      - [HARDWARE ENCYPTION](#hardware-encyption)
      - [NTFS ENCRYPTION](#ntfs-encryption)
      - [BITLOCKER](#bitlocker-1)
      - [SQL DATA](#sql-data)
      - [BIG DATA / NO-SQL](#big-data--no-sql)
      - [DATA DISPOSAL](#data-disposal)
      - [HARDENING YOUR SERVER](#hardening-your-server)
      - [INPUT VALIDATION](#input-validation)
    - [Types of testing](#types-of-testing)
      - [PROXY SERVER](#proxy-server)
      - [TCP TRUSTED COMPUTING BASE](#tcp-trusted-computing-base)
      - [UTM UNIFIED THREAT MANAGEMENT](#utm-unified-threat-management)
    - [NETWORKS](#networks)
    - [ANTI VIRUS SCANNING](#anti-virus-scanning)
      - [SIGNATURE BASED SCANNING](#signature-based-scanning)
      - [ANOMALY BASED SCANNING](#anomaly-based-scanning)
      - [BEHAVIOUR BASED SCANNING](#behaviour-based-scanning)
      - [HEURISTIC SCANNING = REAL-TIME SCANNING](#heuristic-scanning--real-time-scanning)
    - [VPN : VIRTUAL PRIVATE NETWORK](#vpn--virtual-private-network)
- [Security Architecture](#security-architecture)
  - [Zones](#zones)
  - [Bastion Host = DMZ](#bastion-host--dmz)
    - [Jump Box](#jump-box)
  - [Hardening](#hardening)
    - [Baselining](#baselining)
      - [Compensating control](#compensating-control)
      - [Group Policies](#group-policies)
  - [Endpoint security](#endpoint-security)
    - [Port security : restrict access](#port-security--restrict-access)
- [Identities](#identities)
  - [NAC](#nac)
    - [NAC Policy](#nac-policy)
      - [Types of rules](#types-of-rules)
  - [Identity](#identity)
    - [Identity management](#identity-management)
      - [Digital identity](#digital-identity)
        - [MAC can be spoofed](#mac-can-be-spoofed)
        - [IP can be spoofed](#ip-can-be-spoofed)
        - [Certificates](#certificates)
        - [Rogue machine identity](#rogue-machine-identity)
      - [Digital signing](#digital-signing)
    - [RADIUS](#radius-1)
    - [TACACS+](#tacacs-1)
    - [LDAP (Active Directory)](#ldap-active-directory)
    - [SSO](#sso-1)
      - [SAML : token-based SSO (security assertion markup language)](#saml--token-based-sso-security-assertion-markup-language)
      - [OpenID](#openid)
      - [OpenAuth (Open Authorization)](#openauth-open-authorization)
  - [Hacking attempts](#hacking-attempts)
  - [Threat Detection](#threat-detection)
    - [Network Attacks And Security](#network-attacks-and-security)
    - [Code Injection Vulnerabilities](#code-injection-vulnerabilities)
    - [Forensics](#forensics)
  - [Network Scanning](#network-scanning)
    - [DLP](#dlp)
    - [Advanced Malware Attacks](#advanced-malware-attacks)
      - [CODE INJECTION ATTACK = APPLICATION ATTACK](#code-injection-attack--application-attack)
    - [XSS CROSS SITE SCRIPTING](#xss-cross-site-scripting)
      - [XSRF CROSS-SITE REQUEST FORGERY](#xsrf-cross-site-request-forgery)
      - [BUFFER OVERFLOW ATTACK](#buffer-overflow-attack)
      - [INJECTION TYPES](#injection-types)
      - [EAVESDROPPING](#eavesdropping)
      - [MAN-IN-MIDDLE ATTACK](#man-in-middle-attack)
      - [SESSION HIJACKING](#session-hijacking)
      - [SESSION REPLAY](#session-replay)
- [Cyber Word Lists](#cyber-word-lists)
  - [Network Security](#network-security-2)
    - [Network Security Random Terms](#network-security-random-terms)
  - [Cyber terms](#cyber-terms)
- [Repeat of above list](#repeat-of-above-list)
    - [Stuxnet : Countdown To ZeroDay Book](#stuxnet--countdown-to-zeroday-book)
- [Cyber Glossary](#cyber-glossary)
    - [Credential Stuffing](#credential-stuffing)
    - [Crimeware - General Tools](#crimeware---general-tools)
    - [net user](#net-user)
    - [net groups](#net-groups)
    - [shares](#shares)
    - [sharepoint](#sharepoint)
    - [Targeted Attack And Tools](#targeted-attack-and-tools)
    - [wireshark](#wireshark-1)
    - [Targeted Spray](#targeted-spray)
    - [Sysvol](#sysvol)
    - [Wordscrape - go through whole intranet](#wordscrape---go-through-whole-intranet)
    - [Dark Web](#dark-web)
    - [Aircrack-ng](#aircrack-ng)
    - [Beaconing : phoning home](#beaconing--phoning-home)
    - [Birthday Attack](#birthday-attack)
    - [Blind FTP](#blind-ftp)
    - [Blue team : defensive](#blue-team--defensive)
    - [Bluejack](#bluejack)
    - [Snarf : steal data](#snarf--steal-data)
    - [Bluesnarf : steal data](#bluesnarf--steal-data)
    - [Bro = LINUX IDS](#bro--linux-ids)
    - [Cacti logs](#cacti-logs)
    - [CAN Controller Area network](#can-controller-area-network)
    - [PLC Programmable Logic Controllers](#plc-programmable-logic-controllers)
    - [CAPTCHA](#captcha)
    - [CAR Corrective Action Report](#car-corrective-action-report)
    - [Cellebrite : extract mobile data](#cellebrite--extract-mobile-data)
    - [UFED - Extract data off mobiles](#ufed---extract-data-off-mobiles)
    - [Check Point : firewall](#check-point--firewall)
    - [CIS Center for Internet Security](#cis-center-for-internet-security)
    - [SANS : Sysadmin, Audit, Networking, Security](#sans--sysadmin-audit-networking-security)
    - [CISO Chief Info Security Officer](#ciso-chief-info-security-officer)
    - [COBIT : Control Objectives for IT](#cobit--control-objectives-for-it)
    - [CSIRT](#csirt)
    - [CVE Common Vulnerabilities and Exposures](#cve-common-vulnerabilities-and-exposures)
    - [DIG = NSLOOKUP](#dig--nslookup)
    - [Tasting = try domain to see if it gets hits](#tasting--try-domain-to-see-if-it-gets-hits)
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
    - [Imperva : WAF](#imperva--waf)
    - [MITM Interception Proxy](#mitm-interception-proxy)
    - [Jump Box](#jump-box-1)
    - [escrow = 3rd party trust](#escrow--3rd-party-trust)
    - [M of N](#m-of-n)
    - [Kill Chain](#kill-chain)
    - [Kiwi Syslog](#kiwi-syslog)
    - [Metasploit](#metasploit)
    - [CVE Common Vulnerabilities and Exposures](#cve-common-vulnerabilities-and-exposures-1)
    - [MoA : Memorandum Of Agreement](#moa--memorandum-of-agreement)
    - [ModSecurity = open source WAF](#modsecurity--open-source-waf)
    - [MRTG Multi Router Traffic Grapher](#mrtg-multi-router-traffic-grapher)
    - [Nagios = open source stats on services](#nagios--open-source-stats-on-services)
    - [NAPT = NAT](#napt--nat)
    - [NAXSI = nginX Anti XSS and SQL Injection](#naxsi--nginx-anti-xss-and-sql-injection)
    - [Nessus vulnerability scanner](#nessus-vulnerability-scanner)
    - [Netflow](#netflow)
    - [NetScout](#netscout)
    - [Nexpose vulnerability scan](#nexpose-vulnerability-scan)
    - [Nikto - web server vulnerability](#nikto---web-server-vulnerability)
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
    - [Privilege Escalation](#privilege-escalation)
    - [QRadar = SIEM from IBM](#qradar--siem-from-ibm)
    - [Qualys cloud vulnerability](#qualys-cloud-vulnerability)
    - [RPO Recovery point objective](#rpo-recovery-point-objective)
    - [RTO Recovery time objective](#rto-recovery-time-objective)
    - [SABSA](#sabsa)
    - [SANS SysAdmin, Network, Security](#sans-sysadmin-network-security)
    - [SCADA](#scada)
    - [SCAP baseline audit](#scap-baseline-audit)
    - [SCEP Certificate Enrolment](#scep-certificate-enrolment)
    - [SCP send files](#scp-send-files)
    - [SEH exception handler](#seh-exception-handler)
    - [SIEM Security Info and Event Mgt](#siem-security-info-and-event-mgt)
    - [SMTP Open Relay](#smtp-open-relay)
    - [Snort : Open Source NIDS](#snort--open-source-nids)
    - [SourceFire IDS owned by Cisco](#sourcefire-ids-owned-by-cisco)
    - [Splunk : big data gather and analyse](#splunk--big-data-gather-and-analyse)
    - [taskkill](#taskkill)
    - [tasklist](#tasklist-1)
    - [tcpdump : command line packet sniffer](#tcpdump--command-line-packet-sniffer)
    - [TOGAF The Open Group Architecture Framework](#togaf-the-open-group-architecture-framework)
    - [Trusted Foundry - supply chain vetting](#trusted-foundry---supply-chain-vetting)
    - [UAT User Acceptance Testing](#uat-user-acceptance-testing)
    - [UEFI UNC](#uefi-unc)
    - [VAS Vulnerability Assessment](#vas-vulnerability-assessment)
    - [White Team : admin](#white-team--admin)
    - [Write Blocker](#write-blocker)
    - [Xmas Attack : Scanning with flags set to ON](#xmas-attack--scanning-with-flags-set-to-on)
    - [XSRF : Authenticated session attack](#xsrf--authenticated-session-attack)
    - [XSS Cross Site Scripting](#xss-cross-site-scripting-1)
    - [Zero day attack : new software](#zero-day-attack--new-software)
    - [Ports](#ports)
      - [LDAP SECURE WITH SSL 636](#ldap-secure-with-ssl-636)
      - [RADIUS 1812/3 OR 1645/6](#radius-18123-or-16456)
      - [TACACS+ port 49](#tacacs-port-49)
      - [LDP 389](#ldp-389)
      - [LDAPS 636](#ldaps-636)
    - [ADS Alternate Data Streams](#ads-alternate-data-streams)
    - [TTP Tactics, Techniques and Procedures](#ttp-tactics-techniques-and-procedures)
    - [SIEM Security Info and Event Mgt](#siem-security-info-and-event-mgt-1)
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
    - [Vulnerability scanner](#vulnerability-scanner)
    - [Exploit framework - launch attacks](#exploit-framework---launch-attacks)
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
    - [Passive reconnaisance](#passive-reconnaisance)
    - [bulletproof ISP](#bulletproof-isp)
    - [Google hacking](#google-hacking-1)
    - [Google Dork](#google-dork)
    - [Ripping = website copier](#ripping--website-copier)
    - [C2 = Command and Control](#c2--command-and-control)
    - [PIVOT POINT = HACKER POINT OF ACCESS](#pivot-point--hacker-point-of-access)
    - [APT Advanced Persistent Threat](#apt-advanced-persistent-threat)
    - [Pen test 6 RULES OF ENGAGEMENT](#pen-test-6-rules-of-engagement)
    - [CVSS](#cvss)
    - [WIFI pineapple  WIFI attack](#wifi-pineapple-wifi-attack)
    - [bash bunny  	USB attack](#bash-bunny-usb-attack)
    - [lan turtle  	LAN attack](#lan-turtle-lan-attack)
    - [Dark Web Scanning](#dark-web-scanning)
    - [Hacking Techniques](#hacking-techniques)
    - [Packet Analyzer](#packet-analyzer)
    - [Password Crackers](#password-crackers)
    - [Hosting](#hosting)
    - [Hacker Tools](#hacker-tools)
    - [Hashing](#hashing)
    - [Offensive Tools](#offensive-tools)
    - [Certs](#certs)
    - [Cloud Random](#cloud-random)
- [Cyber Labs](#cyber-labs)
  - [Cyber Labs Online](#cyber-labs-online)
    - [TryHackMe](#tryhackme)
      - [Getting Started](#getting-started)
      - [RDP  root Tryh4ckm3](#rdp-root-tryh4ckm3)
      - [BurpSuite](#burpsuite)
      - [Vulnversity](#vulnversity)
  - [Cyber Labs on AWS](#cyber-labs-on-aws)
    - [AWS Linux Virtual Machine](#aws-linux-virtual-machine)
      - [Build](#build)
      - [Connect](#connect)
    - [AWS Linux Install Apache](#aws-linux-install-apache)
    - [AWS Linux Install Mongo](#aws-linux-install-mongo)
    - [AWS Kali Linux with VNC GUI](#aws-kali-linux-with-vnc-gui)
  - [Ubuntu Install MongoDB](#ubuntu-install-mongodb)
    - [Ubuntu Install Docker](#ubuntu-install-docker)
  - [Docker Pull Metasploitable](#docker-pull-metasploitable)
  - [Docker Metasploitable From GitHub](#docker-metasploitable-from-github)
  - [Kali](#kali)
    - [Kali Handbook](#kali-handbook)
    - [About Kali](#about-kali)
    - [Installing Kali](#installing-kali)
    - [Kali OpenVAS Install on AWS Linux](#kali-openvas-install-on-aws-linux)
    - [Kali Greenbone 11 Install](#kali-greenbone-11-install)
    - [Kali From Docker](#kali-from-docker)
    - [AWS Container](#aws-container)
  - [Metasploit](#metasploit-1)
    - [What is Metasploit?](#what-is-metasploit)
  - [Metasploitable](#metasploitable)
    - [Intentionally vulnerable](#intentionally-vulnerable)
    - [Windows VMs we can attack](#windows-vms-we-can-attack)
    - [Metasploitable Setup](#metasploitable-setup)
      - [Data Path](#data-path)
      - [Documentation Path](#documentation-path)
      - [Exploit Modules Path](#exploit-modules-path)
      - [Scripts including Meterpreter Path](#scripts-including-meterpreter-path)
  - [Ruby](#ruby)
  - [Other Cyber Labs](#other-cyber-labs)
    - [Forensic Labs](#forensic-labs)
    - [netdiscover](#netdiscover)
    - [nmap](#nmap)
    - [dig](#dig-1)
    - [traceroute](#traceroute)
    - [openvas](#openvas)
    - [armitage](#armitage)
    - [metasploit](#metasploit-2)
    - [zenmap](#zenmap)
    - [nikto](#nikto)
    - [sploit.htm](#sploithtm)
    - [dirbuster](#dirbuster)
    - [burpsuite](#burpsuite-1)
    - [getent](#getent)
    - [mbsa](#mbsa)
    - [snort](#snort)
    - [securityonion](#securityonion)
    - [sguil](#sguil)
    - [hping3](#hping3)
    - [sgutil](#sgutil)
    - [squert](#squert)
    - [sysinternals](#sysinternals)
    - [veil](#veil)
    - [evasion](#evasion)
    - [pcap](#pcap)
    - [networkminer.exe](#networkminerexe)
    - [sysmon](#sysmon)
    - [pcap](#pcap-1)
    - [ossim](#ossim)
    - [autopsy](#autopsy)
    - [Lab 11](#lab-11)
    - [Lab 12 : Network Segmentation : PFSense](#lab-12--network-segmentation--pfsense)
    - [Lab 12 : install backdoor malware](#lab-12--install-backdoor-malware)
    - [Lab 13 : Password sniffing](#lab-13--password-sniffing)
    - [Lab 14 : Using email to hack](#lab-14--using-email-to-hack)
    - [Lab 14 : XSS Cross Site Scripting](#lab-14--xss-cross-site-scripting)
    - [Lab 14 : Exploiting XSS with MITM attack](#lab-14--exploiting-xss-with-mitm-attack)
- [Cyber course](#cyber-course)
  - [History of cyber](#history-of-cyber)
  - [Present state of cyber](#present-state-of-cyber)
- [Kill Chain](#kill-chain-1)
- [Reconnaisance](#reconnaisance)
  - [OSINT](#osint)
  - [Google Hacking / Dorking](#google-hacking--dorking)
  - [Exploits](#exploits-1)
  - [Email harvesting](#email-harvesting)
  - [Social Media profiling](#social-media-profiling)
  - [DNS harvesting](#dns-harvesting)
  - [Getting location from IP](#getting-location-from-ip)
  - [Domain Analysis](#domain-analysis)
  - [Website Ripping = website copier](#website-ripping--website-copier)
  - [Social Engineering](#social-engineering)
  - [Conversion Tools](#conversion-tools)
  - [Scanning Labs](#scanning-labs)
    - [Wireshark](#wireshark-2)
    - [Free Online Port Scan](#free-online-port-scan)
    - [Superscan 4](#superscan-4)
    - [Angry IP Scanner](#angry-ip-scanner)
    - [IPScan24](#ipscan24)
    - [TcpDump on Linux](#tcpdump-on-linux)
  - [Footprinting](#footprinting)
  - [Footprinting = Topology Discover](#footprinting--topology-discover)
    - [Network Mapping Tools](#network-mapping-tools)
    - [Discovery tools](#discovery-tools)
    - [Service discovery : OS and services](#service-discovery--os-and-services)
    - [Virtual Machine vulnerabilities](#virtual-machine-vulnerabilities)
  - [Fingerprinting = Uniquely Identify](#fingerprinting--uniquely-identify)
- [Vulnerability Scanning](#vulnerability-scanning)
  - [Vulnerability Scanners](#vulnerability-scanners)
    - [OpenVAS](#openvas-1)
    - [Nessus scanner : free for home use](#nessus-scanner--free-for-home-use)
    - [Qualys](#qualys)
    - [Nexpose](#nexpose)
    - [MBSA](#mbsa-1)
  - [Hardening](#hardening-1)
    - [Templates](#templates)
  - [Vulnerability Types](#vulnerability-types)
    - [Vulnerability Feed](#vulnerability-feed)
    - [SCAP : Security Content Automation Protocol](#scap--security-content-automation-protocol)
    - [CVSS Common Vulnerability Scoring System](#cvss-common-vulnerability-scoring-system)
    - [Vulnerability databases](#vulnerability-databases)
      - [Bugtraq - detailed analysis of vulnerability disclosures](#bugtraq---detailed-analysis-of-vulnerability-disclosures)
    - [Vulnerability Access](#vulnerability-access)
    - [Scan types](#scan-types)
      - [DISCOVERY SCAN : of network](#discovery-scan--of-network)
      - [ASSESSMENT SCAN : of vulnerabilities](#assessment-scan--of-vulnerabilities)
      - [Scan Scope Define IP and port ranges](#scan-scope-define-ip-and-port-ranges)
      - [Scan authorisation Can configure scan to obtain credentials which are not revealed to the scan operator](#scan-authorisation-can-configure-scan-to-obtain-credentials-which-are-not-revealed-to-the-scan-operator)
        - [credentialed non-credentialed](#credentialed-non-credentialed)
      - [Scan scheduling](#scan-scheduling)
    - [Scan reports](#scan-reports)
    - [Non-Intrusive and Intrusive Scanning](#non-intrusive-and-intrusive-scanning)
      - [Non-intrusive scanning](#non-intrusive-scanning)
      - [Intrusive = invasive scanning](#intrusive--invasive-scanning)
- [Attacking](#attacking)
  - [Threat Actors](#threat-actors)
    - [Monica Witt - defects from US Cyber Intelligence](#monica-witt---defects-from-us-cyber-intelligence)
  - [Real Life Attacks](#real-life-attacks)
    - [Exploit Stories 2020](#exploit-stories-2020)
    - [Exploit Stories 2018](#exploit-stories-2018)
    - [Exploit Stories 2017](#exploit-stories-2017)
    - [Exploit Stories 2016](#exploit-stories-2016)
    - [Exploit Stories 2014](#exploit-stories-2014)
    - [Exploit Stories Undated](#exploit-stories-undated)
  - [Exploit Malware](#exploit-malware)
    - [Angler Exploit Kit](#angler-exploit-kit)
    - [Axpergle found inside Angler Exploit Kit](#axpergle-found-inside-angler-exploit-kit)
    - [JRAT Remote Access Trojan](#jrat-remote-access-trojan)
    - [Mimikatz](#mimikatz)
    - [Metasploit](#metasploit-3)
    - [hashcat](#hashcat)
    - [ProRat](#prorat)
    - [responder](#responder)
    - [RIG Redkit, Infinity and Goon also known as HTML/Meadgive](#rig-redkit-infinity-and-goon-also-known-as-htmlmeadgive)
    - [Sweet Orange also known as Win32/Anogre](#sweet-orange-also-known-as-win32anogre)
    - [Wordscrape](#wordscrape)
  - [Ransomware](#ransomware)
    - [Reveton - encrypts entire hard drive](#reveton---encrypts-entire-hard-drive)
  - [Offensive Penetration Testing And Exploits](#offensive-penetration-testing-and-exploits)
  - [PCI DSS](#pci-dss-1)
    - [Exploit Frameworks](#exploit-frameworks)
    - [Metasploit](#metasploit-4)
      - [EXPLOIT MODULE = TRY AND EXPLOIT A VULNERABILITY](#exploit-module--try-and-exploit-a-vulnerability)
      - [PAYLOAD = WHAT YOU DOWNLOAD TO A MACHINE THAT YOU FIND A VULNERABILITY ON](#payload--what-you-download-to-a-machine-that-you-find-a-vulnerability-on)
      - [CVE VULNERABILITY => EXPLOIT MODULE => PAYLOAD](#cve-vulnerability--exploit-module--payload)
    - [Armitage](#armitage-1)
      - [GUI for Metasploit](#gui-for-metasploit)
- [Defending](#defending)
    - [Controls](#controls)
  - [Cyber Organisations](#cyber-organisations)
  - [Cyber Roles](#cyber-roles)
    - [CISO Chief Info Security Officer](#ciso-chief-info-security-officer-1)
  - [Framework](#framework)
    - [NIST National Institue Standards Technology](#nist-national-institue-standards-technology)
- [Frameworks and Policies](#frameworks-and-policies)
  - [NIST National Institute Standards Technology](#nist-national-institute-standards-technology)
  - [ISO 27001 : is an ISMS Info Security Management System](#iso-27001--is-an-isms-info-security-management-system)
  - [COBIT Control Objectives for IT](#cobit-control-objectives-for-it)
  - [ITIL v 3 = Best Practice (Note : NIST is similar but guidance only)](#itil-v-3--best-practice-note--nist-is-similar-but-guidance-only)
  - [TOGAF The Open Group Architecture Framework](#togaf-the-open-group-architecture-framework-1)
  - [SABSA Sherwood Applied Business Security Architecture](#sabsa-sherwood-applied-business-security-architecture)
    - [CSA+ categories](#csa-categories)
    - [classify by function](#classify-by-function)
    - [CoA Courses Of Action Matrix](#coa-courses-of-action-matrix)
    - [Quantitative risk](#quantitative-risk)
    - [Qualitative](#qualitative)
- [Module 2 : Vulnerability Management](#module-2--vulnerability-management)
  - [Steps](#steps)
    - [Regulatory environments](#regulatory-environments)
    - [Assets : DEFINE WHAT YOU HAVE TO PROTECT!!!](#assets--define-what-you-have-to-protect)
    - [Identify CRITICAL SYSTEMS](#identify-critical-systems)
    - [Classifying Data](#classifying-data)
    - [Data classification](#data-classification)
    - [Vulnerabilities : DEFINE HOW YOU ARE GOING TO SCAN YOUR ASSETS](#vulnerabilities--define-how-you-are-going-to-scan-your-assets)
    - [Scanning frequency](#scanning-frequency)
    - [Ongoing scanning](#ongoing-scanning)
- [Threat Management](#threat-management)
  - [Mangement Controls](#mangement-controls)
    - [User Training](#user-training)
    - [Policies and Procedures](#policies-and-procedures)
    - [Auditing](#auditing)
  - [Technical Controls](#technical-controls)
    - [Sofware updating](#sofware-updating)
    - [Intrusion](#intrusion)
  - [Certification](#certification)
  - [Policies](#policies)
- [Succession planning](#succession-planning)
- [Security Awareness Training](#security-awareness-training)
  - [CVSS Common vulnerability scoring system](#cvss-common-vulnerability-scoring-system-1)
  - [Logs](#logs)
  - [Compliance](#compliance)
  - [Remediation](#remediation)
  - [SOP Standard operating procedures](#sop-standard-operating-procedures)
      - [Inhibitors to remediation](#inhibitors-to-remediation)
    - [Host Remediation](#host-remediation)
  - [Physical infrastructure](#physical-infrastructure)
    - [wifipineapple](#wifipineapple)
  - [VM infrastructure](#vm-infrastructure)
  - [Secure Software Development](#secure-software-development)
    - [OWASP monitor web attacks](#owasp-monitor-web-attacks)
    - [ZAP : Zed Attack Proxy](#zap--zed-attack-proxy)
      - [Webgoat from OWASP](#webgoat-from-owasp)
    - [SANS : global security](#sans--global-security)
    - [CIS center internet security](#cis-center-internet-security)
    - [NIST standards](#nist-standards)
  - [Attack types](#attack-types)
    - [buffer overflow](#buffer-overflow)
    - [arbitrary code execution](#arbitrary-code-execution)
    - [remote code execution](#remote-code-execution)
    - [command/SQL/XML injection](#commandsqlxml-injection)
    - [directory traversal](#directory-traversal)
    - [cascading failures](#cascading-failures)
    - [Advanced terms](#advanced-terms)
    - [Code testing](#code-testing)
      - [Static code testing](#static-code-testing)
      - [UAT user acceptance test](#uat-user-acceptance-test)
      - [NIKTO : Web vulnerability scan](#nikto--web-vulnerability-scan)
      - [Fuzz testing](#fuzz-testing)
      - [Stress test](#stress-test)
      - [Regression Testing](#regression-testing)
      - [Synthetic Monitoring](#synthetic-monitoring)
      - [RUM Real User Monitoring](#rum-real-user-monitoring)
      - [Interception Proxy testing](#interception-proxy-testing)
      - [burp suite](#burp-suite)
      - [OWASP Zed Attack proxy](#owasp-zed-attack-proxy)
      - [Zap Vega](#zap-vega)
    - [Firewall](#firewall-1)
      - [WAF Web App Firewall = IDS](#waf-web-app-firewall--ids)
      - [ModSecurity WAF](#modsecurity-waf)
      - [NAXSI NGINX WAF](#naxsi-nginx-waf)
      - [Imperva SecureSphere WAF](#imperva-securesphere-waf)
    - [Trusted environment](#trusted-environment)
    - [Code Signing](#code-signing)
    - [Reverse engineer](#reverse-engineer)
  - [Module 3 : security appliances](#module-3--security-appliances)
      - [Prevent Attack](#prevent-attack)
      - [Exploit Framework - conduct attack](#exploit-framework---conduct-attack)
      - [Collect Data](#collect-data)
      - [Analyse Data](#analyse-data)
      - [Forensics - after attack](#forensics---after-attack)
    - [Firewall](#firewall-2)
    - [Web Proxy = web security gateway](#web-proxy--web-security-gateway)
    - [Reverse Proxy = Inbound Traffic](#reverse-proxy--inbound-traffic)
    - [IDS](#ids)
      - [NIDS](#nids)
    - [Detection](#detection)
  - [Malware](#malware)
    - [Dropper - first stage](#dropper---first-stage)
    - [Maintain access](#maintain-access)
      - [C2](#c2)
    - [Action on objectives](#action-on-objectives)
    - [Concealment](#concealment)
- [Logging](#logging)
    - [Sniffer](#sniffer)
      - [WinPCAP = sniffer = LibPCAP](#winpcap--sniffer--libpcap)
    - [Network Protocol Analyser](#network-protocol-analyser)
      - [Wireshark](#wireshark-3)
      - [Kismet : WIFI linux](#kismet--wifi-linux)
      - [TCPDump : Linux](#tcpdump--linux)
      - [Dsniff : Linux](#dsniff--linux)
      - [Ettercap](#ettercap)
  - [WIFI tools](#wifi-tools)
  - [Network Monitoring](#network-monitoring)
    - [MTRG Multi Router Traffic Grapher](#mtrg-multi-router-traffic-grapher)
    - [MTRG as a (ongoing) service](#mtrg-as-a-ongoing-service)
    - [Cacti.net SNMP Monitoring](#cactinet-snmp-monitoring)
    - [Netflow](#netflow-1)
    - [Nagios.org](#nagiosorg)
    - [Log Review](#log-review)
    - [SIEM Security Info/Incident and Event Mgt](#siem-security-infoincident-and-event-mgt)
    - [Big Data](#big-data)
    - [SIEM tools : SPLUNK, ARCSIGHT, QRADAR, AlienValut, OSSIM, SysLog, Event Viewer](#siem-tools--splunk-arcsight-qradar-alienvalut-ossim-syslog-event-viewer)
    - [SPLUNK analytics : big data : uses Hadoop](#splunk-analytics--big-data--uses-hadoop)
      - [ArcSight by HP](#arcsight-by-hp)
      - [QRadar](#qradar)
      - [Alien Vault is SIEM (gathering data) tool](#alien-vault-is-siem-gathering-data-tool)
      - [OSSIM Open Source Security Info Mgt](#ossim-open-source-security-info-mgt-1)
      - [Syslog COLLECTS LOGS CENTRALLY](#syslog-collects-logs-centrally)
        - [KiwiSyslog.com](#kiwisyslogcom)
    - [Windows Event Viewer](#windows-event-viewer)
    - [Syslog (linux events)](#syslog-linux-events)
    - [Firewall logging](#firewall-logging)
      - [Linux iptables](#linux-iptables)
      - [Packet logging](#packet-logging)
      - [pcap file format used](#pcap-file-format-used)
    - [Nmap logging](#nmap-logging)
    - [IDS reporting eg SNORT](#ids-reporting-eg-snort)
    - [tcpdump uses pcap](#tcpdump-uses-pcap)
    - [SIEM](#siem)
    - [Other issues to be aware of](#other-issues-to-be-aware-of)
      - [`Low and slow` or `sparse` attack](#low-and-slow-or-sparse-attack)
      - [SSH - widely used](#ssh---widely-used)
      - [HTTPS - now far more widely used](#https---now-far-more-widely-used)
    - [Advanced Analysis](#advanced-analysis)
      - [FPC full packet capture](#fpc-full-packet-capture)
      - [RNA retrospective network analysis](#rna-retrospective-network-analysis)
      - [Wireshark](#wireshark-4)
      - [Netflow - visualise data](#netflow---visualise-data)
      - [EtherApe (Linux)](#etherape-linux)
    - [Wireless Analysis](#wireless-analysis)
      - [NetScout](#netscout-1)
      - [Also](#also)
      - [Beacon wifi packet](#beacon-wifi-packet)
      - [Probe wifi packet](#probe-wifi-packet)
    - [Availability Analysis](#availability-analysis)
- [Incident Management](#incident-management)
  - [IR = Incident Response Team](#ir--incident-response-team)
    - [ITIL IT Support Best Practice Overview](#itil-it-support-best-practice-overview)
    - [ITIL Incident Management](#itil-incident-management)
    - [Technical](#technical)
    - [Management](#management)
    - [HR Human Resources](#hr-human-resources)
    - [Law Enforcement Agencies](#law-enforcement-agencies)
    - [3rd Party Incident Response Team](#3rd-party-incident-response-team)
    - [NIST Incident Handling Guide](#nist-incident-handling-guide)
  - [Incident Response Stages](#incident-response-stages)
    - [Preparation : Prepare Your System](#preparation--prepare-your-system)
    - [Detection : Detect An Attack](#detection--detect-an-attack)
    - [Analysis : Analyse The Attack](#analysis--analyse-the-attack)
    - [Recovery Process : Recover From The Attack](#recovery-process--recover-from-the-attack)
    - [Containment](#containment)
    - [Eradication](#eradication)
    - [Validate (that now OK)](#validate-that-now-ok)
    - [Corrective Actions](#corrective-actions)
    - [Summary Reporting](#summary-reporting)
  - [CSIRT](#csirt-1)
    - [Comms](#comms)
    - [Classifying](#classifying)
      - [APT Advanced Persistent Threat](#apt-advanced-persistent-threat-1)
      - [STIX Structured Threat Info Expression](#stix-structured-threat-info-expression)
        - [Observable](#observable)
        - [Indicator - pattern of observables](#indicator---pattern-of-observables)
        - [TTP tactic techniques procedures](#ttp-tactic-techniques-procedures)
        - [Threat Actor - bad guy](#threat-actor---bad-guy)
        - [Campaign](#campaign)
        - [CoA Course Of Action](#coa-course-of-action)
        - [also Mandiant](#also-mandiant)
        - [IETF Incident Object Description Exchange Format](#ietf-incident-object-description-exchange-format)
    - [Incident Severity](#incident-severity)
      - [Downtime](#downtime)
        - [Degrate (partial)](#degrate-partial)
        - [Interrupt (full)](#interrupt-full)
      - [Economic effect](#economic-effect)
    - [Scope Of Attack](#scope-of-attack)
    - [Detection time](#detection-time)
    - [Recovery time](#recovery-time)
  - [scenarios](#scenarios)
    - [Playbook = Runbook](#playbook--runbook)
      - [Playbook - strategies](#playbook---strategies)
      - [Runbook](#runbook)
      - [Runbook automation](#runbook-automation)
      - [SoP standard operating procedures](#sop-standard-operating-procedures-1)
  - [Types of data](#types-of-data)
    - [Personal Data](#personal-data)
      - [PII Personally Idendifiable Info](#pii-personally-idendifiable-info)
      - [Payment Card Info](#payment-card-info)
      - [PHI Protected Health Info](#phi-protected-health-info)
      - [Corporate Data](#corporate-data)
    - [Incident Response Plan](#incident-response-plan)
      - [Playbook = series of steps](#playbook--series-of-steps)
    - [Call/Escalation List](#callescalation-list)
    - [Incident Form](#incident-form)
    - [4 Chain Of Custody Form](#4-chain-of-custody-form)
    - [Crime Scene](#crime-scene)
    - [Order of volatility](#order-of-volatility)
- [Forensics](#forensics-1)
  - [FTK Forensic Toolkit](#ftk-forensic-toolkit)
    - [EnCase](#encase)
    - [eDiscovery](#ediscovery)
    - [Endpoint Investigator](#endpoint-investigator)
    - [Sleuth Kit](#sleuth-kit)
      - [Autopsy = GUI](#autopsy--gui)
    - [Helix](#helix)
    - [Cellebrite](#cellebrite)
    - [Sysinternals](#sysinternals-1)
  - [Forensics Workstation](#forensics-workstation)
  - [Getting Data](#getting-data)
    - [from RAM (Memory Acquisition)](#from-ram-memory-acquisition)
    - [Write blocker](#write-blocker-1)
    - [Live acquisition](#live-acquisition)
    - [Hashing](#hashing-1)
      - [Calculating the hash](#calculating-the-hash)
    - [Forensic duplicate](#forensic-duplicate)
  - [Passwords](#passwords)
    - [Password Storage](#password-storage)
    - [Password cracking](#password-cracking)
      - [Cain and abel](#cain-and-abel)
      - [John the Ripper](#john-the-ripper)
      - [THC Hydra](#thc-hydra)
      - [Aircrack-ng](#aircrack-ng-1)
      - [L0phtcrack and ophcrack](#l0phtcrack-and-ophcrack)
      - [Dictionary Attack](#dictionary-attack)
      - [Spidering :](#spidering-)
      - [Hybrid attacks eg James1](#hybrid-attacks-eg-james1)
      - [Pass The Hash PtH](#pass-the-hash-pth)
  - [Forensic Analysis Of Computer](#forensic-analysis-of-computer)
  - [CoA Courses Of Action matrix](#coa-courses-of-action-matrix-1)
    - [Detect](#detect)
    - [Destroy](#destroy)
    - [Degrade](#degrade)
    - [Disrupt](#disrupt)
    - [Deny](#deny)
    - [Deceive](#deceive)
  - [Detection](#detection-1)
    - [DDoS](#ddos)
      - [ICMP flood = TCP PING flood = Smurf Attack](#icmp-flood--tcp-ping-flood--smurf-attack)
      - [Fraggle attack = UDP PING Flood](#fraggle-attack--udp-ping-flood)
      - [TCP SYN flood : create new TCP connections](#tcp-syn-flood--create-new-tcp-connections)
    - [Send traffic to sinkhole or blackhole](#send-traffic-to-sinkhole-or-blackhole)
      - [sinkhole = fake gateway](#sinkhole--fake-gateway)
      - [BLACKHOLE = drop all packets](#blackhole--drop-all-packets)
    - [Detection of other devices](#detection-of-other-devices)
      - [Dropper](#dropper)
    - [DLP Data Loss Prevention](#dlp-data-loss-prevention)
      - [Data Exfiltration](#data-exfiltration)
        - [HTTP/S onedrive, google drive, dropbox](#https-onedrive-google-drive-dropbox)
        - [Steganography](#steganography)
        - [VLAN double-tagging](#vlan-double-tagging)
        - [File copy to USB etc](#file-copy-to-usb-etc)
        - [RAT Remote Access Trojan](#rat-remote-access-trojan)
        - [nc Netcat (linux and windows)](#nc-netcat-linux-and-windows)
      - [Staging Area](#staging-area)
    - [Lockdown](#lockdown)
      - [Removal](#removal)
      - [Isolate](#isolate)
      - [Segment](#segment)
      - [Reverse Engineer](#reverse-engineer-1)
      - [Involving law enforcement](#involving-law-enforcement)
      - [Eradication](#eradication-1)
        - [NIST 800-88 sanitizatision](#nist-800-88-sanitizatision)
    - [Lessons learned](#lessons-learned)
      - [Incident summary report](#incident-summary-report)
      - [Update Incident Response Plan](#update-incident-response-plan)
      - [Change control](#change-control)
- [Analysing Data : Data Analytics](#analysing-data--data-analytics)
  - [Data Aggregation](#data-aggregation)
  - [Data Correlation](#data-correlation)
  - [Logs](#logs-1)
  - [Trends](#trends)
  - [Remediation = risk mitigation = reducing risk](#remediation--risk-mitigation--reducing-risk)
  - [Deterrent](#deterrent)
- [SECaaS security as a service eg cloud AV](#secaas-security-as-a-service-eg-cloud-av)
  - [V&V Verification and Validation](#vv-verification-and-validation)
    - [Verification = compliance](#verification--compliance)
    - [Validation = functionality](#validation--functionality)
  - [Control Testing](#control-testing)












































## Links


https://www.notion.so/philanderson888/CompTIA-Sec-Flow-1-Cannot-do-much-better-than-this-flow-e4af0be21fc940d5bd249569f7c184fb

https://www.notion.so/philanderson888/MTA-Security-Wow-This-is-PERFECT-for-my-course-002a50f2cddf480caeba37d6473e7339

https://www.notion.so/philanderson888/N-Flow-3-2018-so-use-this-5edbe71102ca4045a2da843b4d86da73

https://www.notion.so/philanderson888/Networking-Flow-3-Win-10-Networking-c1c32cbc213e42869d83cc8b328f0405

https://www.notion.so/philanderson888/CompTIA-Network-65d741b754284331b5bb4544f9c5cadc

https://www.notion.so/philanderson888/CompTIA-Sec-Notes-Flow-2-2018-Use-This-For-Course-489628ccd72847e39352b8725464fc0d

https://www.notion.so/philanderson888/CompTIA-Sec-Notes-Flow-3-2018-Good-Networking-Intro-But-Don-t-Like-Darril-Gibson-Book-flow-9d1223809f5f420f932275bf181d8290

https://www.notion.so/philanderson888/CompTIA-Sec-Terms-a015ea4842864d138eaf8194d2403dee













































# Hardware



## Hardware Labs

VIEW BOOT SETTINGS (ORDER OF BOOT DEVICES)	

CPUZ
	































# Server

































# Networking


## Networking Random Terms

```
FIREWALL/ROUTER : IP BLOCK LIST : BLOCK / ALLOW IP TRAFFIC
ACL	ANY IP	10.11.12.13 53 PERMIT
LAST	ANY	ANY ALL DENY
QoS Quality Of Service ==> 802.1p ==> TAG EVERY PACKET WITH A PRIORITY
SWITCHING LOOP ? STP SPANNING TREE PROTOCOL
ROUTING LOOP ? POISON REVERSE : HIGH COST 16 BACKWARDS
SPLIT HORIZON : DON’T SEND BACK TO ORIGINAL ROUTER
```


## OSI 7-Layer Model Of Networking
ARP
Binary
Hex
IPCONFIG       : GET IP
IPCONFIG /ALL : GET DNS INFO
IPCONFIG /RELEASE : RELEASE IP ADDRESS
IPCONFIG /RENEW : GET A NEW IP ADDRESS
IPCONFIG /DISPLAYDNS : SHOW SAVED (CACHED) DNS INFO
IPCONFIG /FLUSHDNS : CLEAR DNS INFORMATION
PING TEST FOR CONNECTIVITY
PING -t CONTINUOUS
PING -n 5 FIVE PINGS
PING >> PING.txt
Tracert (Linux TraceRoute)  Show routers on path to destination
PathPing   Show routers on way to destination
IPv6
Distance-vector routing based on hop count
NETSTAT -a	
NBSTSTAT -n  show names
ARP -a
Run WhatIsMyIP in a Google search
NSLookup  Find DNS server information for a domain


## Networking Ports And Protocols
SQL
LDAP
SMB
IPV6
LLMNR for local name resolution
LOAD BALANCER
ICMP : Error message protocol for internet eg 404 unreachable
PING : (echo request) member of ICMP family
TRACERT
PATHPING
NETSTAT
NSLOOKUP
WIRESHARK
SNMP : Simple Network Management Protocol
       Manage network of many devices : routers, switches, printers,servers.
	1) Heartbeat message 30/60secs : Know machine is reachable
	2) States eg Throughput MB per hour
NETBIOS
	Port 137
	Used HOSTNAME to do NETWORKING (before DNS)
```
PC01		1.2.3.4
PC02		5.6.7.8
```
TFTP : Trivial FTP : Across LAN to copy eg new OS to CISCO SWITCH 
       Port 69
PPP : Create the dial up session (not encrypted)
	Point-to-point protocol : simply dials up and creates the connection	

Accessing a file share SMB
Creating and using an RDP session
Enabling and using the firewall - blocking PING
Group Policy Management in a domain
SYSVOL

## WIFI
CONNECT TO http://ui.linksys.com E1200 ROUTER 
LOOK AT ALL THE SETTINGS	
SSID	
CHANNEL	
WIFI PASSWORD	
ENCRYPTION WPA OR WEP	
DHCP ADDRESSES GIVEN OUT	
GATEWAY	
FIREWALL ON/OFF	
GAMING : PORT SETTINGS	



## VM Labs

Create VM Linux
Create VM Windows Client
Create VM Windows Server
Create Windows Active Directory Domain and join client to domain


# Advanced Networking
IDS
IPS
DMZ = Screened Subnet
       Jump box
BLOCK / ALLOW A PING INTO A WINDOWS 7 CLIENT	
Proxy - CREATE A (FAKE) PROXY USING INTERNET EXPLORER :  CONNECTIONS TAB TO 1.2.3.4:8080 FOR ALL PROTOCOLS
Port Forwarding - ui.linksys.com view options and discuss theory
Port Triggering - ui.linksys.com view options and teach theory
ngrok - Mention ngrok as a way to direct traffic from internet to local IP


































# Linux Administration Labs

## Install

### install apps

```bash
# what's already installed
sudo dpkg --get-selections
# see if something is installed
sudo dpkg --get-selections | grep <<name>>
```

```bash
# when finished
sudo apt autoremove
```

### install ifconfig

```bash
sudo apt install net-tools
```

## Labs

### dig

dig	


### mtr

mtr my traceroute : non-stop	

### ss (Netstat equivalent)

### run a new shell

```bash
# run a new shell in a new window
qterminal
```

### reboot

```bash
/sbin/reboot
# or
systemctl poweroff
# or
systemctl reboot
```

### Get Linux Running Processes

*Note that Linux has no such thing as an `exe` file and any file can be an executable in Linux.  Whether or not a file can run as an executable depends on the permission levels given to the file (read-write-execute) ie must have execute permissions granted*


[https://github.com/spartaglobal/new-curriculum/tree/master/devops/mutable-pipelines/advanced-bash](https://github.com/spartaglobal/new-curriculum/tree/master/devops/mutable-pipelines/advanced-bash)

cd

```
CD /Volumes can get us to the root where we see mounted volumes eg  
cd 'Macintosh HD' 
or 
cd Volumes
```

### Everything is a file!

```
touch file.txt
nano file.txt
# add content
file file.txt  # shows ASCII text
# change it to a picture
mv file.txt picture.jpg
file picture.jpg  # still shows ASCII text
```

### Naming

Use underscores and lower case!

### Hidden Files

```
# show hidden files in vagrant
cd ../vagrant
ls -la

# hiding a file - add a '.' at the start of a file!
```

### Help

```
man 

## help commands containing a word
man -k word-to-find
```

### Compressing

```
tar -cvf archive.tar ~/myfolder/
```

### Wildcards

```
# list all files beginning with V
ls V* 
# list all two-letter phrases beginning with V
ls V?  
# match a range of characters
ls Vagrant[1-9]
```

### Permissions

```
r # read
w # write
x # execute

# Groups
Owner
Group
Others

# show permissions
ls -l

# change permissions - add +x (execute) permission to the owner (the user)
chmod u+x file.txt   
# add +x for all groups
chmod  +x file.txt    
# remove
chmod -x file.txt

# shorthand
# grant full permissions to everyone
chmod 777 file.txt  

# change folder permissions
# read/write/execute as before

# only 2 people who can change the permissions of a folder
# 1) owner
# 2) root 
```

### head and tail

```
head file.txt
head 20 file.txt

tail file.txt
tail 20 file.txt

# live updates will push updates as added (eg logging file)
tail -f file.txt
```

### sort

```
# view file
cat file.txt
# list alphabetically
sort file.txt  
# number of lines
nl file.txt
# word count
wc file.txt  # words lines characters

# also
cut
sed
uniq
tac
```

### Viewing Data

```
STDIN  0

STDOUT 1

STDERR

# to file
> 
# append
>>

# page at a time
cat file.txt | less

# search for keyword
cat file.txt | grep some_word
```

### Piping Data

```
# show first 3 files
ls | head -3
# show first 3 files but last of them
ls | head -3 | tail -1
```

### top

```
# view processes
top

# view local processes
ps

# view all processes
ps aux

# terminate by process id
kill 2727   
```

### shasum checks hash

```
shasum -a 1  /path/to/file 
shasum -a 256 /path/to/file
```

### diskutil

```
diskutil list    shows all partitions on a computer 
sudo diskutil eraseDisk FAT32 RASPBIAN MBRFormat /dev/disk2 
```


### lspci lists pci information

lspci is a command on Unix-like operating systems that prints ("lists") detailed information about all PCI buses and devices in the system


### Linux Rescue Environment

### Apple Rescue Environment

### Networking

#### ip address

`ip address` returns ip information eg IP address

#### ifconfig

`ifconfig` gives more detailed information

### firewall

```bash
sudo apt install ufw
sudo ufw status
sudo ufw enable/disable
sudo ufw status verbose
```

# Linux Notes

## Linux Introduction

Ubuntu is supported by Canonical 

Debian is supported by open source community volunteers 

Ubuntu has `PPA`

Debian does not have `PPA`

`PPA` IS `personal package archives` which easily make software available for Ubuntu useres

























































# Windows Administrator Labs

## Scripting Labs

### Hostname

### Folder Labs

```bash
CD \ TO ROOT	
MD SCRIPTS CREATE FOLDER	
CD C:\SCRIPTS	
MD FOLDERA	
CD FOLDERA	
COPY NUL ABC.TXT	
COPY CON DEF.TXT (ADD CONTENT AND CONTROL-Z TO SAVE AND EXIT)	
REN ABC.TXT ABCD.TXT	
COPY ABCD.TXT ABCDE.TXT	
DEL ABCDE.TXT

TREE	

XCOPY FOLDERA FOLDERB	
```

### Environment Variables

```bash
ECHO %TEMP%	
ECHO %WINDIR%	
ECHO %PATH%	
ECHO %SYSTEMROOT%	
```


## Powershell Labs

```bash
Powershell Help	
Get-Help *get*	
Get-Service *a*	
Get-Command *a*	
Get-Service | where-object {$_.Status -eq 'Stopped'}	
```


### MSINFO32

```
System information
```

### WinVer

```
VERSION OF WINDOWS RUNNING
```

### MSCONFIG

```powershell
MSCONFIG	
```

### UAC

### Attrib

```bash
VIEW READ-ONLY FILE ATTRIBUTE	
VIEW COMPRESSED FILE ATTRIBUTE	
VIEW ENCRYPTED FILE ATTRIBUTE	
VIEW READY TO ARCHIVE FILE ATTRIBUTE	
ATTRIB +R -S -H -A ABC.TXT	
ATTRIB -R -S -H -A ABC.TXT	
```

### Registry Editor

```
REGISTRY IS CENTRAL DATABASE ON YOUR COMPUTER FOR WINDOWS

REGEDIT : VIEW 5 HIVES	
REGEDIT : CREATE A REGISTRY KEY (HACK THE REGISTRY!)	
REGEDIT : BACK UP THE REGISTRY	
REGEDIT : DELETE YOUR REGISTRY KEY	
REGEDIT : RESTORE THE REGISTRY TO GET YOUR KEY BACK	
```

### MMC

```
MMC.EXE ADD SNAP-IN (CHECK OUT TWO MODES : AUTHOR=ADMIN AND USER=READ-ONLY)	
```

### Services

```
SERVICES.MSC VIEW RUNNING SERVICES ON YOUR COMPUTER	

SERVICES => STOP THEN START THE SPOOLER SERVICE
NET STOP SPOOLER : STOP THE PRINT SPOOLER SERVICE
NET START SPOOLER : START IT AGAIN

```

### Event Viewer

```
FILTER SYSTEM LOG TO ERRORS AND WARNINGS LAST 24 HOURS	

EVENTVWR.MSC VIEW EVENT VIEW LOGS (GO TO WINDOWS => SYSTEM LOG)	
```

## Monitoring

### Task Manager

### TaskList

```bash
TASKLIST : LIST ALL RUNNING TASKS ON YOUR COMPUTER
TASKLIST : START WORDPAD AND WRITE DOWN THE PROCESS ID (PID)
TASKKILL /PID 1234 : TERMINATE WORDPAD USING THE PID

Get-Process
Stop-Process -id ...
```

### Resource Monitor

### Performance Monitor

### Reliability Monitor

### AntiVirus

```powershell
DOWNLOAD EICAR TEST VIRUS AND SCAN AND REMOVE IT	
```

## Computer Management

```bash
COMPMGMT.MSC VIEW COMPUTER MANAGEMENT OVERVIEW	
```

### Local Users And Groups

## Storage

### ChkDsk

```bash
CHECK DISK (GUI)	
CHKDSK C: /F (COMMAND LINE)	
```

### Defrag

```
DEFRAG (GUI)	
DEFRAG C: (COMMAND LINE)	
```

### DiskMgmt

```b
DISKMGMT.MSC VIEW HARD DRIVE INFORMATION	
```

### RAID and Diskpart

```
ADD 3 HARD DRIVES TO SERVER 5GB SIZE EACH	
CREATE BASIC PARTITION	
RAID 0 : STRIPE	
RAID 1 : MIRROR	
RAID 5 : STRIPE WITH PARITY	
CREATE NEW PARTITION AND DON'T GIVE IT A DRIVE LETTER BUT PUT IT INSIDE A FOLDER (MOUNT IT)	
DISKPART	
LIST DISK	
SELECT DISK	
LIST PARTITION	
CREATE PARTITION PRIMARY SIZE=500	
FORMAT	
ASSIGN DRIVE LETTER	
REPEAT FOR RAID 0/1/5 WITH CREATE VOLUME RAID5 DISKS=1,2,3 ETC..	

```

## Recovery

Put in DVD and boot to WinRE environment	
WinRE : Dir E:\ to view Windows	
WinRE : MD E:\newfolder to create a folder	

### BitLocker

```
ADD A DRIVE
TURN ON BITLOCKER FOR YOUR NEW DRIVE
```





## Windows Client - Server Labs

### Build Domain

```
Create Server
Create Win7
Rename both
Server : DCPROMO : Create 'domain'  (company!)  
phil.local
```



Commands common to LINUX and WINDOWS

Powershell-only commands

File and folder management

Managing processes

Managing services




### RDP

```
REMOTE DESKTOP FROM CLIENT TO SERVER	
Create DNS records A, AAAA, MX, CNAME	

```

### Share

```
NET SHARE TO VIEW SHARES	
NET SHARE MYSHARE=C:\PATH TO CREATE A SHARE	
NET USE \\SERVER\SHARE T: /PERSISTENT:YES TO MAP A SHARE	
Create Share on Server and Share	
NET SHARE my_share_name=c:\path-to-share	
NET SHARE display all shares	
NET USE Z: \\SERVER\SHARE	

Set permissions to Read Only
Set permissions to deny
Set permissions to inherit
Set permissions not to inherit

```

### Print

```
Create Printer On Server and Print
```

### Group Policy

​	

```
GPEDIT.MSC local policy

Group Policy : Set Password Policy	
Group Policy : Set Account Lockout Policy	
GROUP POLICY : SET PASSWORD POLICY TO MIN 6 CHARACTERS LONG, CHANGING 30 DAYS	
GROUP POLICY : SET ACCOUNT TO LOCK FOR 10 MINUTES IF 3 PASSWORDS ENTERED WRONG

USER RIGHTS : LOG ON LOCALLY : 
    COMPUTER => WIN => SEC => LOCAL USER RIGHTS YES LOG ON LOCALLY 
    ==> AUTHENTICATED USERS	
```

### Printing

```
PRINTER : ADD TO SERVER AND SHARE IT. 
LIST IN THE DIRECTORY. 
PRINT TEST PAGE FROM WIN7	
```

## Windows Server Labs

### DNS

```powershell
DNS : ADD AN ‘A’ RECORD TO DNS SERVER	
DNS : ADD AN ‘AAAA’ IPV6 RECORD TO DNS SERVER	
DNS : ADD AN ‘MX’ EMAIL RECORD TO DNS SERVER	
DNS : ADD AN ‘WWW’ CNAME ALIAS RECORD TO DNS SERVER	
DNS : ADD REVERSE PTR ZONE AND RECORD
```

### DHCP

```powershell
Create a scope with subnet mask and default gateway
Reserve an IP
Boot a client and have it receive an IP
Check the leases that this has indeed happened
```

### Paging File

```powershell
MOVE THE PAGING FILE TO ANOTHER DRIVE	
```

### Certificate Server

```powershell
Install Certificate Server
Issue A Certificate
```

### Storage Spaces

```powershell
DRIVES => POOL => SPACE WITH A VIRTUAL DISK => CREATE AND FORMAT A VOLUME	
Pool : Create from UNUSED DISKS	
Storage Pool : Drives must be initialized	
Pool : 2-way needs 2 disks, 3 way needs 5 disks to allow for 2 disks failing	
Space : Thin/Fixed provision	
Space : From Pool => Create Virtual Disk => Create Volume	
```

### IIS

```
Install And Run IIS Web Server	
CONNECT TO IIS WEB SERVER	
HTTP://LOCALHOST	
HTTP://	
HTTP://127.0.0.1	
HTTP://::1	
HTTP://	

VIEW DEFAULT WEBSITE FROM WIN7 MACHINE	

CHANGE DEFAULT WEBSITE TO ‘HELLO WORLD’	

ADD A HEADER Heading YOUR WEBSITE	
```

### Web Server In General

```
Build a website
Hack a website eg BBC
```


















# Azure Labs

## Who Is Logged In

```powershell
az account list
az account list --output table
```

## List Resource Groups

```powershell
az group list --output table
```

## List All Resources!

```powershell
az resource list
```

## List Resources In Group

List Resources In Resource Group

```powershell
az resource list --resource-group {group name}
```

## List All Virtual Networks

```powershell
az network vnet list
az network vnet list --output-table
```

## List All Network Cards

```powershell
az network nic list --output table
```

## List All Public IP Addresses

```powershell
az vm list -g virtual-machines-linux-kali-01 --output table
az vm list -g virtual-machines-linux-kali-01 --show-details --output table
```

## List All Virtual Machines

```powershell
az vm list -g my-resource-group --output-table
```

## Create Resource Group

```powershell
az group create --name <<name>> --location uksouth
```

## Azure VM Install Windows Server

https://docs.microsoft.com/en-us/azure/virtual-machines/windows/tutorial-automate-vm-deployment

```powershell
# get credentials
$cred = Get-Credential
# new vm
New-AzVm `
    -ResourceGroupName "myResourceGroupAutomate" `
    -Name "myVM" `
    -Location "East US" `
    -VirtualNetworkName "myVnet" `
    -SubnetName "mySubnet" `
    -SecurityGroupName "myNetworkSecurityGroup" `
    -PublicIpAddressName "myPublicIpAddress" `
    -OpenPorts 80 `
    -Credential $cred
# configure vm
Set-AzVMExtension -ResourceGroupName "myResourceGroupAutomate" `
    -ExtensionName "IIS" `
    -VMName "myVM" `
    -Location "EastUS" `
    -Publisher Microsoft.Compute `
    -ExtensionType CustomScriptExtension `
    -TypeHandlerVersion 1.8 `
    -SettingString '{"commandToExecute":"powershell Add-WindowsFeature Web-Server; powershell Add-Content -Path \"C:\\inetpub\\wwwroot\\Default.htm\" -Value $($env:computername)"}'
# get public ip of website
Get-AzPublicIPAddress `
    -ResourceGroupName "myResourceGroupAutomate" `
    -Name "myPublicIPAddress" | select IpAddress
```

Now view our website in any browser



## Azure VM Install Ubuntu Server


```powershell
# resource group
az group list --output table
az group create --name ubuntu01 --location uksouth

# create vm
az vm create --resource-group ubuntu01 --name ubuntu01 --image UbuntuLTS --admin-username ubuntu --generate-ssh-keys

# open for port 80
az vm open-port --port 80 --resource-group ubuntu01 --name ubuntu01

# get public ip
az vm list -g ubuntu01 --show-details --output table

# output
Name      ResourceGroup    PowerState    PublicIps     Fqdns    Location    Zones
--------  ---------------  ------------  ------------  -------  ----------  -------
ubuntu01  ubuntu01         VM running    51.140.51.98           uksouth

# alter permissions by removing admin write access

# connect
ssh ubuntu@51.140.51.98 

we are now in!

sudo apt update
sudo apt upgrade

```




# HyperV Labs

## Virtual Switching

### Create a virtual switch

# Routing And Switching Labs

### Create Static Route

### Create Dynamic Route





















































































































# Network Security


## Project And Risk Management

Threats to a business

Amazon success story

Spectacular IT projects which failed miserably

Risk

Vulnerability

Threat

SLE Single Loss Expectancy

ALE Annual Loss Expectancy

RPO Recovery Point Objective

RTO Recovery Time Objective









FIREWALL/ROUTER : IP BLOCK LIST : BLOCK / ALLOW IP TRAFFIC
ACL	ANY IP	10.11.12.13 53 PERMIT
LAST	ANY	ANY ALL DENY

QoS Quality Of Service ==> 802.1p ==> TAG EVERY PACKET WITH A PRIORITY

SWITCHING LOOP ? STP SPANNING TREE PROTOCOL

ROUTING LOOP ? POISON REVERSE : HIGH COST 16 BACKWARDS

SPLIT HORIZON : DON’T SEND BACK TO ORIGINAL ROUTER



SID Security ID

		Windows track users with SID security ID


GUID Global User ID (domain)

















## Encryption - Data In Transit

```
SSH Secure Shell : Encrypted commands
	Port 22

SCP Secure COPY : Copy files to LINUX using SSH

HTTPS uses SSL (old) and TLS (new) : Port 443

IPSEC
	Built into IP! (v4 and v6)
	1) ENCRYPT VPNS EG L2TP AND IKEV2
	2) LAN-TO-LAN : ON OUR INTERNAL NETWORK (NOT OVER VPN!)

	ESP	Encryption
	AH	Authentication

```

Keylogger - Record keystrokes and send data to storage or internet



## Active Directory

```
LDAP Port 389
Kerberos : domain security
	Log in : user receives 'token' with permissions
	Access folder : check token permissions ==> granted/blockecd access
```


## Encryption

Stream vs Block Cipher
Stream cipher = 1 bit at a time , fast
Block cipher = much stronger (in blocks) but slower
Email Encryption : 
       PGP	Pretty Good Privacy
       S/MIME

## WAYS TO ENCRYPT DATA

	STREAM CIPHER
	
		FAST BUT LESS SECURE!
	
		ONE CHARACTER ONLY GETS ENCRYPTED AT A TIME
	
			A  	=> 	Y
			B	=>	I
			C	=>	8
	
	BLOCK CIPHER		
	
		TAKES GROUP OF CHARACTERS EG 100 AT A TIME
		ENCRYPT THEM AS A BLOCK
	
		MUCH MORE SECURE, MUCH HARDER TO CRACK
	
		SLOWER!!!









## SNMP 

SIMPLE NETWORK MANAGEMENT PROTOCOL

```
MANAGE NETWORK OF EG 50 DEVICES

	1) ARE THEY WORKING??? HEARTBEAT MESSAGE 30/60 SECS

	2) THROUGHPUT OF DATA???  STATISTICS 

PORT 161/2

```

## IPSEC

```
IP SECURITY

BUILT-IN ENCRYPTION FOR ALL IP TRAFFIC

```

## SCSI 

SMALL COMUTER SYSTEMS INTERFACE

```
ROCK SOLID TECHNOLOGY FOR SERVER RAID 5 FOR YEARS...
TOO SLOW FOR TODAY
REPLACED BY SATA HARD DRIVES

```

## SAN STORAGE AREA NETWORK 

LIGHNING FAST BUT EXPENSIVE

```
ISCSI ==> INTERNET SCSI : NETWORK STORAGE PROTOCOL
		RUNNING OVER MODERN ETHERNET CABLING

	10GBPS FAST!!!

FIBRE CHANNEL : COPPER OR FIBER CABLING FOR LIGHTNING-FAST
	10GBPS NETWORK TRAFFIC FROM LAN TO SAN STORAGE
	NETWORK

FCOE  FIBER CHANNEL OVER ETHERNET : UTILISING CHEAP CAT6
		NETWORK CABLING

```

## SITE SURVEY

MARKING COVERAGE OF WIFI POINTS

```
EXAM : ENSURE WIFI NOT GOING TOO FAR OUTSIDE BUILDING

```

## ACTIVE DIRECTORY

ACTIVE DIRECTORY IS BUILT ON A SPECIAL PROTOCOL CALLED

### LDAP

LIGHTWEIGHT DIRECTORY ACCESS PROTOCOL.  THIS ALSO
	BUILDS LINUX PROGRAMS, NOT JUST WINDOWS.

	LDAP BUILDS THE STRUCTURE FOR ACTIVE DIRECTORY

### LDAPS = SECURE VERSION

### KERBEROS

USED TO PROVIDE ENCRYPTION FOR ACTIVE DIRECTORY
	(ROCK SOLID GRADE ENCRYPTION)


## INSECURE AUTHENTICATION

### PAP

PASSWORD AUTHENTICATION PROTOCOL : PLAIN TEXT SO DON'T USE!

### CHAP	

EARLY AUTHENTICATION PROTOCOL USING MD5 SO NOT SECURE.  DON'T USE.

## SECURE AUTHENTICATION

### MS-CHAP2	

CURRENT VERSION OF CHAP

### EAP-TLS 	

AUTHENTICATION USING CERTIFICATES

### PEAP		

PROTECTED EAP 

### LEAP

LIGHTWEIGHT EAP


## ONE-TIME PASSWORDS

### OTP

ONE TIME PASSWORD TO PHONE

### TOTP

TtIME-BASED FOR EG 10 MINUTES

HOTP	HASH-BASED WHICH VERIFY HASH ALSO ON TOP : CAN
	BE USED TO ENSURE AUTHENTICATION REQUEST IS
	GENUINE


## EMAIL ENCYRYPT/AUTHENTICATE

### PGP 

PRETTY GOOD PRIVACY


## DIAL-IN AUTHENTICATION

### RADIUS

	VPN CLIENT -> DIALS UP -> RAS (DIAL-IN) VPN SERVER

		--> TALKS TO RADIUS SERVER
		--> TALKS TO ACTIVE DIRECTORY TO AUTHENTICATE

### DIAMETER

	DIAMETER IS TWICE AS STRONG AS RADIUS (PUN ON WORDS
		AS DIAMETER IS TWICE AS LONG AS RADIUS OF
		ANY CIRCLE)

### TACACS+

	PROVIDES A GREATER DEGREE OF ENCRYPTION OVER THE
	WHOLE AUTHENTICATION PROCESS.  ALSO ALLOWS 
	MULTI-FACTOR AUTHENTICATION



## SSO

SSO = ONE LOGIN TO MULTIPLE SITES

	<< SAML = USED TO PASS INFO BETWEEN SITES >>

		SAML = SECURITY ASSOCIATION MARKUP LANGUAGE


#### FEDERATION

MULTIPLE COMPANIES WORKING TOGETHER

FEDERATION = A GROUP OF UNRELATED COMPANIES WORKING
	TOGETHER ON A PROJECT.  NEED TO SECURELY SHARE
	INFORMATION.

INTRANET = INTERNAL WEBSITE FOR INTERNAL EMPLOYEES

EXTRANET = PROVIDE AUTHENTICATION AND HAVE YOUR BUSINESS
	   PARTNERS LOG IN AND YOU SHARE COMPANY 
	   RESOURCES THAT YOU CHOOSE WITH YOUR BUSINESS
	   PARTNERS SECURELY EG DATABASE INFORMATION ETC

PUBLIC WEBSITE = ACCESSIBLE TO ALL (FROM YOUR DMZ)


MANAGE 'CREDENTIALS' SECURELY IN WINDOWS


CREDENTIAL MANAGER (CONTROL PANEL)



CREATING YOUR OWN CERTIFICATES IN A PKI INFRASTRUCTURE


PUBLIC CERTIFICATES

	VALID FOR USE ON THE INTERNET 

	ANYONE IN THE WORLD CAN VIEW YOUR PUBLIC CERTIFICATE
	AND VERIFY YOU AND THE COMPANY EG VERISIGN WHICH
	ISSUED YOUR CERTIFICATE

	COST MONEY EG $300

	REQUIRED FOR BUSINESS TRANSACTIONS EG PUBLIC HTTPS://
	WEB SITE

PRIVATE CERTIFICATE

	GENERATED BY YOU ON A FREE WINDOWS SERVER

	INSTALL 'CERTIFICATE AUTHORITY' (CA) ROLE

	==> ISSUE CERTIFICATES INTERNALLY 

	((YOUR PRIVATE CERTIFCATES NOT VALID FOR USE
	ON INTERNET))  ==> OTHERS 'NOT TRUSTED'
			CERTIFICATE MESSAGE

CREATING A PRIVATE PKI FOR YOUR OWN COMPANY

	1. INSTALL 'ROOT' (FIRST) CA (CERTIFICATE AUTHORITY)
			MACHINE

	2. IF YOU HAVE A BIG COMPANY, INSTALL SUBORDINATE
		CA MACHINES (ALSO CALL THEM 'ISSUING'
		SERVERS

	3. CLIENTS CAN NOW 'ENROL' OR 'REQUEST' CERTIFICATES
		FOR DIFFERENT PURPOSES

		AUTO-ENROL MEANS COMPUTER CAN AUTOMATICALLY
		APPROVE AND ISSUE CERTIFICATES

		MANUAL ENROL : HUMAN BEING HAVE TO MANUALLY
			APPROVE REQUESTS

REVOKING A CERTIFICATE

	MUST BE ABLE TO PROVE A CERTIFICATE IS STILL VALID

	ON SERVER, CAN 'REVOKE' (NULLIFY) ANY CERTIFICATE

	PROVE TO CLIENTS THAT THEIR CERTIFICATE IS STILL GOOD

	TWO LISTS

	1)  CRL CERTIFICATE REVOCATION LIST : FULL LIST OF
		ALL 'REVOKED' (NULLIFIED) CERTIFICATES

		DELTA CRL : PARTIAL (UP-TO-DATE) LIST

	2)  ONLINE WEBSITE : OCSP (ONLINE CERTIFICATE
				   STATUS PROTOCOL)

		CHECK FOR JUST ONE CERTIFICATE : IS IT VALID?

BACK UP CERTIFICATES

	RECOVERY AGENT : AUTHORISED ADMINISTRATOR WHO
		CAN RECOVER KEYS FOR USERS/COMPUTERS
		IF NECESSARY

			((WITHIN ACTIVE DIRECTORY))

	ESCROW = TRUSTED 3RD PARTY TO HOLD OUR CERTIFICATES
			IN CASE OF DISASTER

		M OF N PEOPLE REQUIRED TO UNLOCK CERTIFICATE

		EG

		2 OF 4 PEOPLE MUST BE PRESENT TO UNLOCK



COMPLIANCE


MANTRAP

	DOOR CLOSES BEHIND YOU BEFORE IT WILL OPEN IN
	FRONT OF YOU

EMI RADIATION  (ELECTRO-MAGNETIC INTERFERENCE)

----------wire with moving current---------------------

	moving magnetic field around wire

-------------another wire here--------------------------

	MAGNETIC FIELD WILL CAUSE A CURRENT TO FLOW
	IN A SECOND WIRE PLACED NEAR ENOUGH TO DETECT
	IT.  

	THIS CAN BE USED BY A 'SNOOPER' TO MONITOR
	(SURVEILLANCE) SIGNALS EVEN REMOTELY

FARADAY CAGE

	CHARGE WILL FLOW AROUND AN OBJECT, LEAVING
	CHARGE INSIDE UNAFFECTED

	==> USE THIS RULE TO BUILD EG SHIELDING AROUND
		WIRES

	UTP ETHERNET ==> STP SHIELDED ETHERNET

	COAX ==> SHIELDING AROUND IT

PDC PROTECTED DISTRIBUTION CHANNEL

	==> WIRING PROTECTED FROM INTERFERENCE EG BY
	METAL SHIELDING

TEMPEST BUILDING ==> GUARANTEED TO ADD DEGREE OF SHIELDING
	FROM SNOOPERS OUTSIDE

	== SECURE BUILDING

MANAGING INDUSTRIAL PROCESSES

	HVAC	HEATING, VENTILATION, AIR CON

	SCADA	ELECTRONIC SWITCHBOARD TO MANAGE INDUSTRIAL
		BUILDINGS EG HEATING PLANT

FIRE CONTROL

	EXTINGUISHER			FIRE 
	TYPE				TYPE

	WATER 				STANDARD NON-
					ELECTICAL FIRE

	FOAM				KITCHEN OIL PAN FIRE
					INDUSTRIAL CHEMICAL
					     FIRE

	CO2				STANDARD ELECTRICAL
					FIRE

	INERT GAS			HIGH VALUE ELECTRICAL
					EQUIPMENT TO PUT OUT
					FIRE BUT PRESERVE
					ELECTRONICS



SECURITY AGREEMENTS WITH 3RD PARTIES


SLA SERVICE LEVEL AGREEMENT

	CONTRACT WITH IT PROVIDER STATING WHAT SERVICES
	ARE PROVIDED FOR WHAT COST, WITH PENALTIES FOR
	NON-PROVISION

	EG HELPDESK  SILVER RESPONSE : 8 HOURS
		     GOLD              4 HOURS
		     PLATINUM          2 HOURS







#### BACKUPS


FULL (NORMAL) BACKUP

	A) BACK UP ALL FILES REGARDLESS IF THEY HAVE
		CHANGED OR NOT

	B) RESET BIT TO ZERO FOR ALL BACKED-UP FILES		

ARCHIVE (BACKUP) BIT

	SET TO ZERO WHEN NO CHANGES MADE
	SET TO 1    AS SOON AS ANY CHANGE MADE TO A FILE

INCREMENTAL BACKUP

	MON : BACK UP MONDAY FILES & RESET BIT
	TUE : BACK UP TUES   FILES & RESET BIT
	WED : BACK UP WED    FILES & RESET BIT

		PROBLEM : CRASH THURSDAY MORNING.
		RECOVERY REQUIRES 4 TAPES
		1) FRIDAY FULL 2) MON 3) TUES 4) WED
		==> LONG TIME TO RECOVER

DIFFERENTIAL BACKUP

	MON : BACK UP MONDAY FILE ((( DON'T CHANGE BIT )))
	TUE : BACK UP MON & TUE FILES (DON'T RESET BIT)
	WED : BACK UP MON/TUE/WED FILES (DON'T RESET BIT)

		CRASH THURSDAY MORNING: 
		RECOVER WITH 2 TAPES
		1) FRIDAY FULL 2) WED (INCLUDES MON,TUES)














#### Risk Analysis Process


	1. IDENTIFY YOUR ASSETS
	
		Equipment of value
		Data ==> OF HIGHEST VALUE EVEN THOUGH
			MAYBE CAN'T PUT PRICE ON IT!
		People 
			Knowledge and Experience of 
			key personnel
		Building
	
	   EXAM : AV ==> ASSET VALUE
	
	2. Identify Vulnerabilities / Weaknesses
	
	3. Identify Threats (Internal/External/Man-made/
				Natural)
	
	4. Probability Chart 
	
		% likelihood that a particuar threat
			will materialise and threaten
			a vulnerability
	
			eg 10% chance pothole x in road y
			       will generate an insurance
			       claim
	
		SLE SINGLE LOSS EXPECTANCY
	
			$$$COST OF ONE OCCURRENCE		
	
		ARO ANNUAL RATE OF OCCURRENCE
	
			PREDICTED NUMBER OF TIMES A YEAR
			THIS WILL HAPPEN
	
		ALE ANNUAL LOSS EXPECTANCY
	
			$$$EXPECTED LOSSES IN 1 YEAR				
	
	5. IMPACT ANALYSIS : LOOKING AT COSTS ABOVE OR
		OTHER EVENTS WHICH CAN'T BE MEASURED
		WITH MONEY EG LOSS OF MORALE, MOTIVATION,
		LOSS OF FACE, LOSS OF REPUTATION ETC ...


	6. WHAT DO WE DO??? 
	
		NOTHING  IE LIVE WITH RISK (EG CROSSING ROAD)
	
		INSURE (TRANSFER) OUR RISK BY INSURING
			AGAINST LOSS EG FOOTBALLER INSURE
					LEG
	
		PUT UP WARNING SIGNS AS DETERRENCE TO 
			ATTACKERS : PSYCHOLOGICAL WARFARE
		
		AVOID THE RISK ALTOGETHER BY DOING SOMETHING
			ELSE (DON'T CROSS THE ROAD BUT USE
				THE TUNNEL!)
	
		SPEND SOME MONEY OR TAKE ACTION
	
			"MITIGATION" => TAKE ACTION TO 
					MINIMISE OUR LOSS
	
			EG CREATE POLICIES, BUILD DEFENCES,
			   EDUCATE USERS, ADVICE FROM EXPERTS,
			   TAKE AGGRESSIVE ACTION AGAINST
			   POTENTIAL ATTACKER





































### Network Security Lab

#### Gaining Access To A Network

##### Class Lab

Spend 20 minutes or so listing and categorising all of the different types of physical and cyber threats to a business.  Be as specific as possible and let the class do the leading and the talking, and if necessary, some research!


#### NTFS And Share Permissions

##### Lab : NTFS and Share Permissions

1. On a server create a share.  
2. In `Active Directory` create two different groups eg `Accounting` and `ITSupport`.  
3. On the share, in the NTFS Security tab, create two folders and grant one access to one group (Accounting) and to the other folder grant access to the IT Support group. 
4. Create some users and place them in the appropriate groups.  
5. Check that the users have the correct access when they log in from a Windows client and try and access the share.






#### Virtual Online Router

https://emulator.tp-link.com/emulator_841hpv5_un/index.htm




#### Group Policy Management

Group policy is the central tool used to control all the Windows clients from the central domain controllers.  Windows uses a `multi-master` model so that the central policies are replicated to all domain controllers, and all Windows clients pick up these policies both at computer startup and also at user login, depending if the policy applies at startup or login.  

We can manage group policies in two ways

1. Local Computer

   Simply run `GPEDIT.msc` from a local computer

2. Server Group Policy Management

   This will affect the whole domain ie every computer joined to this domain, so it's important to know what you are doing!

   Server Manager => Tools => Group Policy Management.  Expand the forest, Domain and  the domain until the `Default Domain Policy` is showing.   If we click on the `Settings` tab in the middle of the page and choose `show all` we can expand and view the existing policy.

   To edit the policy, right click on `Default Domain Policy` and choose `Edit`.  We are now editing the policy.  

##### Lab - Password And Lockout Policy

1. Open Group Policy Editor
2. Find and edit the default domain policy
3. Open Computer, Windows, Security, Account, Password policy and set the following
   - Minimum length 10 characters
   - Expires every 30 days
   - Complex passwords enforced 
   - Minimum age 1 day
4. Open Computer, Windows, Security, Account, Account Lockout policy and set the following
   - 5 incorrect attempts are permitted after which lockout for 10 minutes
   - Reset the incorrect lockout count after 5 minutes

##### Lab - Publish A Printer

1. On the server using Print Management add a printer.  (Can just use the built-in printers on LPT1 port)
2. Share the printer and give it a simple name with no spaces eg `Brother2048`
3. In Group Policy edit the default domain policy then open Preferences, Control Panel, Printers and add a new printer.  Enter the share path to the printer as the path, for example \\<servername>\PrinterSharedName\.

##### Lab - Publish Software

1. Create a share eg C:\Share on Windows and share it as `Share`.
2. Add an msi file to the share for example Firefox from `https://www.mozilla.org/en-US/firefox/all/#product-desktop-release`  
3. In Group Policy, edit the default domain policy and choose `Computer, Policies, Software, Software Installation` and add a new package.
4. Browse to the `Share path` holding the MSI eg \\\ServerPhil\Share and select the package.  This is now ready for deployment.

<div style="text-align:center;"><em>Deploying Software With Group Policy</em</div>

![deploy-application-with-group-policy.PNG](deploy-application-with-group-policy.PNG)





#### DNS Labs














### Wireshark

##### Install Wireshark

Install Wireshark and analyse some packets travelling through the network

We can click on a Wireshark session to look at individual packets.  And every packet will have an Ethernet `source` and `destination` address just as per the Ethernet model above.  We can also inspect the payload.

As an interesting lab we can filter for `udp` traffic and then send a PING request to `8.8.8.8` address and look at the Wireshark data.   We can see that actually a PING request to Google (which is `8.8.8.8`) is just sending the alphabet there and back as a payload!  See if you can find it!








### WIFI labs

##### Hacking Into Symmetric Encryption - Part 1

As an indicator of how careful we have to be with `symmetric` encryption please run the following commands 

```powershell
# show wireless profile names
netsh wlan show profiles
# choose one
netsh wlan show profile name="name-of-wireless-profile" key=clear
```

You should see the WIFI password displayed in plain text.

If you are on a MAC then in the `terminal` please type

```bash
security find-generic-password -wa name-of-wireless-profile
```

##### Hacking Into Symmetric Encryption - Part II

Nobody uses default usernames and passwords these days - do they?

Well it's always worth a check!

Check your WIFI router model then head to `[routerpasswords.com](https://routerpasswords.com)`.  See what you can find!

##### Hacking Into Symmetric Encryption - Part III

For further study please visit `Kali Linux` on your laptop and run `wifite` and follow the trail . . . 






### WIFI lab

https://medium.com/bugbountywriteup/how-i-hacked-into-my-neighbours-wifi-and-harvested-credentials-487fab106bfc
































































































### DEFENSE IN DEPTH

       MULTIPLE LAYERS OF SECURITY


#### STORAGE TYPES

DAS DIRECT ATTACHED STORAGE


ANYTHING DIRECTLY ATTACHED TO YOUR COMPUTER

	EG SATA DRIVE / SCSI DRIVE / IDE DRIVE



NAS NETWORK ATTACHED STORAGE


NAS DRIVE 

	USE FOR 'SOHO' SMALL-OFFICE HOME-OFFICE

			(LESS THAN 10 USERS)

	USING RAID 5 TO STORE FILES

		
		RAID 0 STRIPING : VERY FAST : BUT
			 PROBLEM IF ONE DRIVE FAILS YOU
			 LOSE ALL YOUR DATA
		RAID 1 MIRRORING OF 2 DRIVES 
		RAID 5 3+ DRIVES WITH FAULT TOLERANCE : 
			IF ONE DRIVE FAILS THE DATA IS
			ALREADY 'STRIPED' ACROSS OTHER
			DRIVES SO YOUR DATA IS SAFE



SAN STORAGE AREA NETWORK


USED BY LARGE COMPANIES TO STORE DATA USING FIBER OR 10GBPS
	COPPER LINES TO LIGHNING-FAST STORAGE NETWORK

LAN------FIBER SWITCH-------------SAN STORAGE AREA 10GBPS



CLUSTERING


SERVERA
	------------> SAN ----------> DATABASE FOR DATA
SERVERB

	SERVERA FAIL : AUTOMATIC SERVERB WILL TAKE OVER
		AND RESUME ALL SERVICES. CUSTOMER SHOULD
		NOT NOTICE!!!    FIX SERVERA AND FAIL BACK
		TO USING SERVERA AGAIN.

		SERVERA 'FAILOVER' TO B
		      B  FAILBACK  TO A   WHEN A FIXED



























Virtualization


RUNNING MULTIPLE MACHINES OFF ONE 'HOST' MAIN MACHINE

SNAPSHOT 

	INSTANT BACKUP OF VIRTUAL MACHINE

SANDBOX

	SECURE, CUT-OFF ENVIROMENT WHERE RUN TESTS
	ETC WITHOUT AFFECTING 'REAL WORLD'



Managing Hardware Installations eg Factories, Offices


HVAC Heating, Ventilation, Air Con for all standard
	Buildings

SCADA

	INDUSTRIAL MONITORING OF ALL ENGINEERING SYSTEMS
	EG HVAC, OR MORE ADVANCED EG POWER PLANT, CAR
	FACTORY ETC...




### MOBILE SECURITY


MOBILE SECURITY IS A 'HOT' ISSUE - WHY???

BYOD : BRING OWN DEVICE : PEOPLE USING PERSONAL DEVICES
	TO GET WORK DONE

	SECURITY RISK WITH COMPANY SENSITIVE INFO ON DEVICE
	WHICH IS 

	A) PERSONALLY OWNED
	B) NOT LOCKED DOWN
	C) NO CONTROL OVER OTHER APPS INSTALLED, IF THEY	
		ARE SNOOPING ETC
	

SOLUTION : ???

	ONE SOLUTION IS TO ONLY PERMIT 'REMOTE-DESKTOP' OR
	CITRIX-STYLE ACCESS WHERE PHONE JUST A 'WINDOW' TO
	REMOTE SERVER, NO DATA STORED ON MOBILE DEVICE

REMOTE LOCK

REMOTE WIPE

ON-BOARDING : HIRE EMPLOYEE : GIVE CORRECT TRAINING
			      POLICIES SIGNED

FIND-MY-DEVICE IF LOST

OFF-BOARDING : WIPE DEVICE SECURELY TO ERASE ALL DATA
		(EMPLOYEE LEAVE ORGANISATION)
















### VIRTUALIZATION


RUNNING ONE OR MORE SERVERS FROM A LARGER 'VIRTUAL HOST'

GOOD

	IF YOU ARE LOW ON CPU, RAM, HARD DRIVE OR 
		NETWORK THROUGHPUT THEN YOU CAN 
		DYNAMICALLY UPGRADE THEM AS YOU NEED				
	CREATE 'SANDBOX' ENVIRONMENT FOR SECURE TESTING
	
	CARE AND MAINTENANCE OF SERVER OS/BACKUPS ETC
	IN HANDS OF EXPERTS

	NO LONGER REQUIRE PHYSICAL SPACE TO RUN SERVER
		ROOMS ETC

BAD

	TOTALLY DEPENDENT ON INTERNET CONNECTION...

	UNSUITABLE FOR LARGE FILE MANIPULATION EG HUGE
	VIDEOS DOWN LAN WIRE

	COSTLY $$$ JUST TO HOST A SERVER FOR YOU...!!!




















### Site Survey


Used to check
	1) POWER IS NOT TOO GREAT FOR OUR WIFI : SOLUTION : REDUCE
			POWER  (Power in DECIBEL units)

	2) WIFI reaching all necessary parts of our building

HACKER OUTSIDE IN CAR : REDUCE POWER TO MAKE IT HARDER FOR THEM 				OUTSIDE	













### Encryption Methods


These are in increasing order  ((EAP : shell : container))

LEAP		weak		L => LIGHTWEIGHT EAP

PEAP		good		PEAP = PROTECTED EAP
				SERVER : CERTIFICATE
				CLIENT : USER/PASSWORD

EAP-TLS		best		CERTIFICATES : BOTH ON SERVER
				AND CLIENT : ULTRA-SECURE



### Mobile Encryption


ECC Elliptic Curve Cryptography : SMALL, FAST ==> GOOD FOR MOBILE
					PHONE ENCRYPTION!!!



















### WIFI


Captive Portal : Forces you to read and accept terms and conditions before
connect to free wifi

#### Secure WIFI


1) MAC filtering ==> a LOT OF WORK!!!  (only connect if your MAC 
						matches)

2) Turn down POWER!

3) ??? not very good ??? ==>  EXAM : OK ANSWER : DISABLE SSID
					BROADCAST

	SSID ==> Name of WIFI EG FreeHotelWIFI

	POSSIBLE : DISABLE BROADCAST OF SSID
		
		(( PHONE ==> SEE 'UNNAMED NETWORK'))




### WIFI CHANNELS


WIFI HAS 13 CHANNELS

	BUY DEVICE SET TO CHANNEL 1,6, OR 11

		POOR SIGNAL ==> CHANGE CHANNEL













#### War driving / war chalking


WAR CHALKING	: MARKING OUTSIDE FREE WIFI

WAR DRIVING     : LOOKING FOR FREE WIFI



#### WPS WIFI Protected Setup


ONE BUTTON PUSH SETUP : AUTOMATIC 8-DIGIT PIN USED TO CONNECT

	VULERNABILITY : SPLITS INTO TWO 4-DIGIT PINS, EACH ONE
		CAN BE CRACKED EASILY

	EXAM : TURN OFF WPS !!!




















#### Rogue Access Point	

Unauthorised WIFI

#### Evil Twin	

WIFI with SAME NAME AS GOOD WIFI POINT

#### Jamming	

Interference

#### Blue Jack	

Virus over bluetooth / attack (Hi-Jack)

#### Snarf	

Steal

#### Blue Snarf	

Steal data eg contacts over bluetooth

#### Distances


NFC		10cm		Near Field Communication

IR 		1m		Infra Red

BLUETOOTH	10m		

WIFI		30m

WIFI 'AC'	100m

ETHERNET	100m		(Repeater : 200m)

10BASE2		200m (185)	THINNET COAX

10BASE5		500m 		THICKNET COAX

USB		5m



### Broadband Methods

### Dial up


Modem : used to dial up (56k or 92k)



### VPN


PPP	Point-to-point		dial up layer 2

Encryption : 

1)	PPTP					1723			
2)	L2TP/IPSEC				1701
			((STARSHIP ENTERRIPSE!))
3)	SSTP	VPN OVER HTTPS = SSL = TLS	443
4)	IKEV2					500,4500

L2TP
IKEV
	==> BOTH USE IPSEC & CERTIFICATES (REALLY SECURE)

SSTP
	==> USES HTTPS WEB CERTIFICATES (SECURE)

			
### IPSEC	
	AH AUTHENTICATION
	ESP ENCRYPTION




















## Network Architecture

SPOF Single Point Of Failure

On-premise network architecture

Cisco 3 Layer Network Architecture : Core, Aggregation and Access layers


### Defense-in-depth 

#### Physical Security

Mantrap

Keypad

RFID badge





#### Network Security




##### Access Control

Security Groups

Permissions

RBAC Rule Based Access Control
















##### Privileged Access Management

Privilege Escalation

Keeping your administrator passwords secure

RAT

APT Advanced Persistent Threats residing on your network

Keeping your private API keys secure

Keeping your private certificates secure



















##### Data Security

Value of data

Storage of data

Local vs Cloud storage of data

Data Exfiltration

Steganography hiding data in innocent packages

























































### Virtualization


VM = VIRTUAL MACHINE

.VHD = VIRTUAL HARD DRIVE		WIN7
.VHDX = NEW VHD TYPE			WIN8/10

Hypervisor ==> MINI OPERATING SYSTEM TO RUN VIRTUAL MACHINES
		HYPERV 	WINDOWS Free

SANDBOX ==> VM FOR TESTING EG VIRUSES : TOTALLY ISOLATED

SNAPSHOT ==> INSTANT BACKUP OF YOUR VM SO CAN RESTORE QUICKLY

VHDX = HARD DRIVE

AVHDX = CHANGES SINCE LAST SNAPSHOT!!!





Problems with VMs


Easy to COPY AND STEAL A WHOLE VM!!!

	VM ESCAPE : Lock VM so it only runs on ONE HOST WHICH
			YOU DESIGNED IT FOR!

VM sprawl : easy to create new VMs which can be unpatched / unmanaged

VM escape : Virus from VM can INFECT HOST
































### AV SCANNING 

VIRUS SCAN : BASED ON VIRUS HASH = SIGNATURE


HOW DOES ANTIVIRUS SOFTWARE WORK?

	ALL KNOWN VIRUSES ==> TAKE THEIR 'HASH' THEN
	MATCH ANY FILES ON YOUR COMPUTER WHICH HAVE
	THE SAME HASH ==> THEY ARE A VIRUS!!!

	" SIGNATURE-BASED SCANNING "

OR : ANOMALY-BASED

	MATCHING BEHAVIOUR AGAINST A 'BASELINE' PREDICTED
	GRAPH OF ACTIVITY

OR : BEHAVIOUR-BASED 

	MATCHING AGAINST CERTAIN RULES ==> PRONE TO
	'FALSE POSITIVE'  ((GOOD FILE IDENTIFIED 
				INCORRECTLY AS A VIRUS))

















### NETWORK ATTACKS


ROGUE ACCESS POINT

	WIFI POINT (UNAUTHORISED) SET UP IN YOUR 
	VICINITY AND PEOPLE CONNECT TO IT UNAWARES

EVIL TWIN

	WIFI : WIFI ROUTER WITH SAME NAME AS EXISTING 
		ROUTER

		SSID : BROADCAST NAME OF WIFI HOTSPOT

		EVIL TWIN : SAME SSID

	SOCIAL MEDIA : GET FRIEND REQUEST FROM AN 
			EXISTING CONTACT

	
DRIVE-BY-DOWNLOAD

	JUST VIEW SITE : AUTO-DOWNLOAD STARTS IMMEDIATELY

CLICKJACK

	INNOCENT BUTTON EG 'PLAY VIDEO' ALSO START
				MALICIOUS DOWNLOAD

URL SHORTENING SERVICE

	<HTTP://REALLYREYREALLYREALLYREALLYLONGURL.COM>

	==> TURN INTO BIT.LY/234SDFR.COM		

	BIT.LY
	GOO.GL

		RECOGNISE THAT A HACKER'S SITE COULD
		BE HIDDEN BY 'SHORT' URL

DOS DENIAL OF SERVICE : FLOOD SERVER WITH TRAFFIC

	PING ATTACK : SMURF ATTACK

	SYN FLOOD

		TCP HAS 3-WAY HANDSHAKE TO SET UP 
			CONNECTION : EXPLOIT THIS
			WITH TCP REQUESTS

P2P : PEER-TO-PEER

	CARE !!! COMPUTER IS VULNERABLE WHEN USING
		TORRENT SITES...CLIENT GETS INVADED
		BY OTHER PEOPLE NEEDING COPIES
		OF FILES

ARP POISON

	ARP -A   shows ARP 'CACHE'

		ARP ==> ADDRESS RESOLUTION PROTOCOL

		CONVERTS ....MAC TO IP

DNS POISON

	CORRUPTING DNS DATABASE
	
	EG SERVERA : HACKER RETURN FAKE IP FOR THIS
			SERVER.  PEOPLE WILL GO 
			TO HACKER'S ADDRESS INSTEAD
			OF REAL SERVER

DNS HIJACK : FULL DNS SERVER BUILT AND SET UP BY ATTACKER
	TO POINT PEOPLE TO THE WRONG SITES









### WIRELESS




ROGUE POINT : FAKE WIFI POINT

EVIL TWIN : WIFI POINT WITH SAME NAME

JAMMING : CAUSING INTERFERENCE SO YOU CAN'T DISCERN
		YOUR GOOD SIGNAL

SNARF = STEAL DATA

BLUESNARF = GETTING DATA STOLEN VIA BLUETOOTH

BLUEJACK = PHONE HIJACKED VIA BLUETOOTH EG INSTALL MALWARE
		
NFC NEAR FIELD COMMUNICATION : 5cm range

	CARE : SNOOPING IN NEAR VICINITY (RADIO WAVES)

WAR DRIVING

	LOOKING FOR FREE WIFI

WAR CHALKING

	MARKING ON THE PAVEMENT OR WALL WHERE FREE WIFI
		IS TO BE FOUND, SO OTHERS KNOW ALSO

SHORT PASSWORDS - PROBLEM!!

	1) KEY STRETCH 

	2) SALT 

	PASSWORD + SALT PASSWORD ===> MD5 ==> HASH 
		    
	mypass  +   Mon: blue   ==>md5         hash
		    Tue: red
		    ...

			DATABASE : STORE  HASH OF PASSWORD
				     +    SALT

WHAT 4 THINGS DO WE NEED TO CONNECT TO INTERNET???

	1. IP ADDRESS  
	2. SUBNET MASK 255.255.255.0	
	3. GATEWAY     (YOUR OWN PRIVATE ROUTER ON YOUR LAN)
	4. DNS

GATEWAY = COMPUTER ON OUR LAN THROUGH WHICH ALL INTERNET
		TRAFFIC MUST PASS

SINKHOLE ==> IN WIFI, SETTING UP FAKE GATEWAY SO 
	INTERNET TRAFFIC GOING THROUGH BOGUS GATEWAY

		EG HACK INTO DHCP ==> GET DHCP TO GIVE
			OUT A FAKE GATEWAY ADDRESS

WPS : ONE-BUTTON AUTO-SETUP OF HOME WIFI

	VULNERABILITY : 8-DIGIT PIN NUMBER USED TO SET UP

		BUT IT'S SPLIT INTO TWO 4-DIGIT NUMBERS

		   4 6 3 7   |   5 8 3 4

		EACH NUMBER CAN BE HACKED SEPARATELY
		(1 IN 10000 SO EASY TO CRACK)



















### ENCRYPTION 


#### S/MIME


ENABLES MAPPING OF CORRECT PROGRAM TO RUN APPLICATIONS 
	INSIDE BROWSER

		EG PDF : GET CORRECT PDF READER

		   MP3 : GET CORRECT PLUG-IN TO PLAY FILE	



#### PGP PRETTY GOOD PRIVACY


EMAIL ENCRYPTION



#### HARDWARE ENCYPTION


HSM HARDWARE SECURITY MODULE

	DEDICATED DEVICE : ENCRYPTION ONLY (STORE
		PRIVATE ENCRYPTION KEYS SECURELY)		



#### NTFS ENCRYPTION


USED BY WINDOWS TO ENCRYPT FILES

LIMITED USE!!!

	CANNOT ENCRYPT
			1) WINDOWS

			2) PAGE FILE = SWAP FILE 
			             = VIRTUAL MEMORY

				SPILL-OVER WHEN RAM 
				GETS FULL			

			3) HIBERNATE 
				
				PUTS RAM CONTENTS TO 
				PERMANENT STORAGE
				AND SHUTS PC DOWN



#### BITLOCKER


PROVIDES FULL DRIVE ENCRYPTION, UNLIKE NTFS

PROBLEM!!!  OUR HARD DRIVES BOOT USING MBR MASTER
		BOOT RECORD TALKING TO BIOS/CMOS
		CHIPS ON OUR COMPUTER

		THESE TECHNOLOGIES DO NOT UNDERSTAND 			ENCRYPTION!!!

SO TO GET BITLOCKER TO WORK WE MUST SPLIT OUR HARD DRIVE
		IN TWO

|  100MB   |      REST OF DRIVE			|
   PLAIN	  BITLOCKER ENCRYPTED
   TEXT

TPM CHIP  (TRUSTED PLATFORM MODULE)

	DEDICATED CHIP TO STORE BITLOCKER KEYS 

	
	(( IF NO TPM CHIP IS PRESENT, CAN STORE 
		BITLOCKER KEYS ON USB STICK ))



#### SQL DATA


STANDARD DATABASES STORE DATA IN ROWS AND COLUMNS LIKE EXCEL

	TABLE NAME

		ID	FIELD1	FIELD2

		1	JOE	BLOGGS
		2	JOHN	DOE

	CALLED A 'RELATIONAL' DATABASE = MYSQL/SQL
			
		MYSQL = FREE
		SQL   = PAID (MICROSOFT)
		ORACLE = PAID



#### BIG DATA / NO-SQL


TODAY SO MUCH INFORMATION GETS CREATED AND STORED THAT
TRADITIONAL 'RELATIONAL' DATABASES ARE TOO SLOW...

NEW BREED OF DATABASE - NO-SQL OR 'BIG-DATA' STORAGE

FIELDS LOOK LIKE

		{
			"ID" : "1"
			"NAME" : 'PHIL'	
		}

ISSUES WITH SECURITY : DEVELOPING TECHNOLOGY : SECURITY,
	ENCRYPTION, PROTECTING DATA



#### DATA DISPOSAL


MAGNETIC DATA CAN BE RESTORED BY CROOKS IF WE DISPOSE
	OF IT CASUALLY.  STRICT POLICIES EXIST TO 
	ENFORCE CORRECT METHOD OF 'DISPOSING' OF DATA

1. WIPE OUR HARD DRIVE WITH RANDOM DATA 7 TIMES OVER

	(( THINK MUDDY FIELD : DRIVE 100 CARS ROUND 
		FIELD 10 MINUTES : ERASE ORIGINAL 
		TRACKS ))

2. DEGAUSS : TAKE A MAGNET AND WIPE DRIVE

3. PHYSICAL DESTRUCTION EG HAMMER OR PHYSICALLY SHRED DRIVE



#### HARDENING YOUR SERVER


HARDEN SERVER = INCREASE SECURITY

BASELINE = ORIGINAL SETTINGS

	HARDEN ==> CREATE NEW BASELINE FOR HARDENED SERVER

GET BASICS RIGHT

	UPDATES FOR SERVER : ON
	UPDATES FOR AV SOFTWARE : ON
	UPDATES FOR APPLICATIONS : PATCH MANAGEMENT : ON



#### INPUT VALIDATION


STOP 'COMMAND INJECTION' ATTACK   

	FORM  ==>   INJECT CODE EG <script>....code </script>

ERROR / EXCEPTION

	COMPUTER CRASHES : REVEAL SENSITIVE INFO EG
	 FILE NAMES AND PATHS ON ROOT SERVER

		ERROR: //c:\\windows\\system32\\thisfile.dll...
			 c:\\....to website....

	PROGRAMMER HAS TO 'HANDLE' EXCEPTIONS/ERRORS PROPERLY
		WITHOUT GIVING HACKERS EXTRA INFO

XSS : TRYING TO HACK FROM YOUR SITE TO NEIGHBOURING SITE
	(CROSS-SITE SCRIPTING)

XSRF : LOGGED IN ALREADY SO POSSIBLE POTENTIAL TO HACK 
		GREATER 



### Types of testing


BLACK BOX TESTING : JUST LOOK AT INPUT / OUTPUT ONLY
		(NOT DETAILS OF INSIDE CODING)

WHITE BOX TESTING  : KNOWING CODE INSIDE, TRYING TO 						TO BREAK IT DELIBERATELY

UNIT TESTING : ONE SMALL BLOCK OF CODE

INTEGRATION/SYSTEM TESTING : TESTING THE BIG PICTURE

ALPHA TEST : INITIAL RELEASE TO CHOSEN INDIVIDUALS FOR TESTING
	EG JOURNALISTS, DEDICATED AUDIENCE

BETA TEST : FINAL RELEASE, FREE, SO PEOPLE CAN TEST IT FOR 
		YOU (THEY GET FREE GAME!) 

FUZZ TEST : THROW RANDOM DATA AT APPLICATION : DOES IT
		WITHSTAND AND SURVIVE ???


Black Box		Input/Output ONLY!

White Box		Know code : test to break code of program!

Grey Box		Some knowledge

Alpha 			FIRST EARLY RELEASE

Beta			NEAR TO PERFECT : GIVE AWAY FOR FREE: 
			IRON OUT ALL THE BUGS

Unit			Small piece of code !  Test that only

Integration		Join UNITS together

System			Build final product and test

Regression		Fix bugs BUT RE-TEST PRODUCT SO NEW ERRORS
			ARE NOT INTRODUCED

Fuzz Testing		THROWING RANDOM DATA AT OUR APPLICATION
			TO SEE IF IT CATCHES ALL ERRORS, EVEN
			FROM RANDOM RUBBISH







#### PROXY SERVER


USED IN BIG COMPANIES FOR MANY REASONS : 

1) SECURITY : USING DIFFERENT IP THAN REAL GATEWAY

2) CACHING : SPEED OF DATA : STORE COPIES OF FILES ETC
			ON LOCAL LAN PROXY SERVER. 
			CLIENTS GET FASTER ACCESS

3) FILTERING : WHITELIST (GOOD SITES) /BLACKLIST (BLOCKED
			SITES)

4) USER ACTIVITY : KNOW WHICH USERS ONLINE, HOW LONG, WHICH
			SITES...BILLING PURPOSES...



#### TCP TRUSTED COMPUTING BASE


OPERATING SYSTEM WHICH CAN BE 'HARDENED' OR LOCKED DOWN




#### UTM UNIFIED THREAT MANAGEMENT

BIG PICTURE OF PROTECTING OUR WHOLE NETWORK


















### NETWORKS

HUB		LAYER 1		ELECTRICITY IN, 
				ELECTRICITY OUT (NO
				FILTERING)  
				BAD ==> BROADCASTS!!!!

REPEATER	LAYER 1		EXTEND ETHERNET 100M TO 
				200M OR MORE			
				(( 2-PORT HUB ))


LOAD BALANCER	DOING 'ROUND ROBIN' TO ENABLE MULTIPLE
			SERVERS TO HANDLE MANY REQUESTS

IDS INTRUSION DETECTION SYSTEM 	: JOB IS TO DETECT
		HACKING ACTIVITY / VIRUS ACTIVITY			

HOST = MACHINE EG SERVER/CLIENT USUALLY 'HOSTING' A
		SERVICE

NODE = ANY DEVICE WHATSOEVER ON OUR NETWORK : IP PHONE,
		ROUTER, FIREWALL...

HIDS = HOST-BASED DETECTION : SOFTWARE ON ONE MACHINE ONLY

NIDS = NETWORK-BASED DETECTION EG ON FIREWALL / GATEWAY
		PROTECTING WHOLE NETWORK

IPS INTRUSION PREVENTION : ABILITY TO DETECT ATTACK BUT ALSO
	TAKE MEASURES TO STOP AN ATTACK...

	HIPS HOST-BASED
	NIPS NETWORK-BASED






### ANTI VIRUS SCANNING 

#### SIGNATURE BASED SCANNING

	FIXED SCANNING TO MATCH 'HASH' OF KNOWN VIRUSES
		(BEST AS GIVES RELIABLE DETECTION)

#### ANOMALY BASED SCANNING 

	LOOKING AT 'BASELINE' GRAPHS OF PREDICTED
	TRAFFIC PATTERNS AGAINST ACTUAL TRAFFIC 
	PATTERNS OVER A NETWORK

#### BEHAVIOUR BASED SCANNING

	PATTERNS IN NETWORK TRAFFIC OR 'RULES' GOVERNING
	EXPECTED BEHAVIOUR : ALERTS IF TRAFFIC BREAKS
	SOME 'EXPECTED RULES'

		** PRONE TO FALSE POSITIVE **

		FALSE POSITIVE = TAKING A GOOD FILE AND
				MARKING IT AS A VIRUS

#### HEURISTIC SCANNING = REAL-TIME SCANNING



### VPN : VIRTUAL PRIVATE NETWORK


ENCRYPT DATA TRAFFIC IN A 'TUNNEL' ACROSS INTERNET



VPN Concentrator : Allow multiple VPN connections into ONE SERVER

Web Security Gateway = Layer 7 firewall looking at content
of traffic coming into your network


	==> Deep packet inspection

BIG PICTURE ==> UNIFIED THREAT MANAGEMENT (UTM)



NAC : NETWORK ACCESS CONTROL : PROTECTS OUR NETWORK FROM ...
COMPUTERS DIALING IN WHICH MAYBE HAVE VIRUSES ETC


		==> CHECK HEALTH AND FORCE NON-COMPLIANT
			COMPUTERS TO COMPLY










# Security Architecture 

## Zones

Network segments with traffic between zones controlled eg with a firewall enforcing ACL rules

## Bastion Host = DMZ 

external internet-facing servers

       often configured as proxies, talking to services inside the LAN
       
### Jump Box

single machine on DMZ from which the admin consoles on the bastion hosts may be reached. Access to the Jump Box is tightly controlled eg by single firewall rule to single IP or small subnet on LAN

Management machines (on the LAN) which connect to the jump box should be denied broad internet access

Blackhole Redirect unused ports to specific part of network that is a dead end


       create VLAN or
       redirect traffic to NULL router interface


DOS attack : normally use ACL but instead can just put all traffic to a blackhole

Sinkhole

Instead of blackhole : deleting all packets

Sinkhole is alternative gateway through which all the traffic redirected can also be analysed


       Goal is to find out source of attack and neutralise it
       
       Martian packet = packet destined for IANA Private or restricted range

       Bogon = unallocated range on the internet (there are none left)
       
       
       


## Hardening

Host Baseline = minimum secure config

Attack surface = what can be attacked


       Interfaces - wired and wireless
       Services
       Ports
       


### Baselining

Baselining checklist

Remove all non-necessary devices
Install OS updates and patches, and application updates etc
Note : test updates etc offline first then use distributed system to update clients
Uninstall all unnecessary network protocols
Uninstall/disable services
Remove / disable unnecessary shares
ACL on all resources
Least Privilege user accounts especially with regards to installing software
Rename local admin and apply strong password
Disable guest accounts
Disable default group accounts
remove everyone group permissions from resources
Install and update AV. Autoscan USB&Email&Downloads
Routers and Switches: Update OS, Firmware, ROMMON = OS in NVRAM

DOS attacks - consider possibility and mitigate or provide backup resources

#### Compensating control


Compensating control - mitigates for the failure of a control
eg data backup
eg putting a system offline

#### Group Policies

Admin Templates - registry

RSoP - settings can be viewed
       
Security Templates
      
DAC - discretionary NTFS ACL

MAC - mandatory CLASSIFIED ETC - Need to know basis

       Subject can't set or change the MAC level
       
## Endpoint security

       Endpoint = client device
       
       Perimeter security = gateway/firewall/dmz etc (opposite of endpoint)
       

### Port security : restrict access


       disable using management software
       
       MAC filter : hard in practice
       
       MAC limiting : only will register first two MAC addresses then drop the others
       
       MAC flooding : switch could 'fail-open' and become like a hub 
              so attacker easier to sniff
              
       802.1x port based control  (port based NAC = PNAC)
       
              supplicant = client device requesting access
              
              switch = authenticator
              
                      EAPoL EAP over LAN requires password, token or certificate
                      
                      Pass to RADIUS server for authentication
                      
              unauthenticated hosts => go to guest VLAN
              


Extra

Is intrusion primary or secondary

Avoid alter attacker

Preserve evidence















































#  Identities 


## NAC

Health policy : firewall, updates etc

Agent on client

Remediation to bring to good health


       refuse or
       quarantine (if VPN) or
       captive portal (if web app) and from there install fixes
       


Pre-admission Post-admission - is it still compliant?

### NAC Policy


       Time restrictions
       Location restrictions
       Role-based restrictions (user and device)
       Rule-based restrictions
       
       Microsoft NAC
       Cisco CNAC
       TPM NAC 
       
       Context-based authentication 
              Time
              Location
              Frequency : number of logins during a given period
              Rule-based : can have multiple factors involved
       


#### Types of rules


       Anti-Malware
              Signature based = HASH
              Behaviour Based = Deviation from baseline eg high CPU/RAM, high traffic with DOS attack
              Anomaly Based = Patterns beyond the normal eg check packet headers for anything unusual, or traffic patterns
              Heuristic = real time scanning, looking for certain patterns in malware code
       NAC
              Time based
              Location based
              Role based
       


## Identity

Enrol = sign up

Provision = create new accounts for users / customers Online provisioning - should include CAPTCHA to prove not a robot Employee provisioning - should include identity proofing as you can properly verify who your employees are

Identity proofing = proving the person is the person they say they are, at the time of signing up

Subject to approval so insiders cannot just create accounts

Revoke

SSO

### Identity management

Priviliged accounts - RESTRICTED USER

Shared accounts - non repudiation is not possible

Roles RBAC Role Based Access Control - access depending on your job role

       Authorization Manager

#### Digital identity

##### MAC can be spoofed

##### IP can be spoofed 

##### Certificates

far harder to be spoofed

##### Rogue machine identity

       Wired
              Host
              Switch
       Wireless
       Apps
       VM


Detection Physical inspection Network scan : hosts WIFI scan : hosts Network scan : protocols and ports NAC compliance

Execution control Managing apps (white/blacklist)

#### Digital signing

       sigcheck -tv can check (from Sysinternals) root certificates against
              Microsoft
              
       OpenSSL 
       
       certutil (Windows)

### RADIUS


       Radius server performs authentication (AD)
       
       Client - 802.1x - wifi or other - RADIUS - AD LDAP AUTHENTCATION BACKEND

       windows NPS
       
       linux FreeRADIUS
       
       uses UDP
       
       encrypts ONLY PASSWORD
       
       
       


### TACACS+


       uses TCP
       
       ENCRYPTS ALL DATA - so more secure than RADIUS


### LDAP (Active Directory)


       LDAP 389 


Defences multiple logon attempts geo-velocity - trying to logon from different placess geographically device fingerprinting - is this the first time this device has been used? if so, use two-factor authentication

### SSO

Federation

open to business partners

provisioning = creating accounts for use with federation


       manual
       auto eg by group membership
       


#### SAML : token-based SSO (security assertion markup language)


       SAML is enterprise controlled


#### OpenID


       sign on with .. google, facebook account etc

       user-centric logon
       
       no sharing of data from eg google to the company using this login
       
       OpenID Connect uses OpenAuth also
       Facebook connect ...
       


#### OpenAuth (Open Authorization)


       site providing sharing of data with site being authenticated
       


Password reset

1. questions
2. secondary verification eg text or email



























## Hacking attempts

Impersonation : pretending to be somebody else.
Use ‘identity proofing’ to mitigate = be sure to identify someone properly online

DNS Spoof pharming = DNS Spoof

Session hijack : mitigate with encryption of session

Replay attack

MITM

MItB

ARP Spoof


       Ettercap lab
       
       detection : use Snort to identify suspicious traffic 
               or manually inspect arp -a for fake mac addresses

       DAI Dynamic ARP Inspection : prevent ARP Spoof : drop Ethernet packets that do not have a known sender, recipient and a valid entry in VLAN table


Privilege escalation


       Using FLAW IN APPLICATION TO GAIN ACCESS

       Backdoor = deliberate

       Vertical : go from user to admin rights
       Horizontal : go from one user and gain access as another user


Web hacking

SSLstrip


       tricks user into thinking connection is secure when it's not
       
       Padlock is not showing so user can spot this and know they are
                      being hacked
                      
       HTST can prevent this attack : HTTPS is the ONLY TRANSPORT ALLOWED
                      TO THAT SITE SO HTTP IS NOT AN OPTION, SO AN ATTACKER CANNOT
                      FAKE AN HTTP SESSION
                      


XSS Cross Site Scripting


       Malicious code runs on client browser with same permission level
              as a trusted site
              
       reflected = non-persistent attack : once
       
       stored = persistent attack eg malicious script stored in a blog 
              or user forum
              
       XSS is script from server executed on client
       
              eg GET /cgi-bin/log.cgi?<script>...</script>
       
       Or
       
       could execute a script to create a new DOM page 

       Mitigate with INPUT VALIDATION
       


XSRF : like XSS cross-site scripting but have additional power due to virtue of also being logged in (authenticated to site)


       mitigate by mutual authentication on both sides of the connection
       
       


Cookies


       Retain information about STATE
       
       Cookies are sent WITH THE HTTP REQUEST FROM CLIENT TO SERVER AND BACK
       
       NON-PERSISTENT = SESSION
       
       PERSISTENT
       
       XSS ATTEMPTS TO USE COOKIE ON ANOTHER SITE
       
       SSL COOKIES ARE TRANSMITTED ENCRYPTED BUT STORED PLAIN TEXT
       
       


XSRF EXPLOIT COOKIES


       can exploit applications which use cookies to authenticate and
              track sessions























CIDR /24 MEANS


REMOTE ACCES


ALLOWING COMPUTER TO DIAL IN TO OUR SERVER (RAS = REMOTE
ACCESS SERVER)

	ADD ROLE ==> ROUTING & REMOTE ACCESS

CLIENT => DIAL IN => RAS SERVER
		     (VPN SERVER)

			==> AUTHENTIATE WITH RADIUS SERVER
				(TALK TO ACTIVE DIRECTORY)

			==> HEALTH CHECK VIA NAC NETWORK
				ACCESS CONTROL



















## Threat Detection


1. Signature Based

	EVERY BAD VIRUS THAT WE KNOW ABOUT : TAKE IT'S HASH!!!

	SCAN OUR COMPUTER ETC FOR ALL GOOD FILES : IF ANY MATCH
	HASH OF A VIRUS ==> WE ALERT!!!!

2. Anomaly Based 

	'Baseline' graph of GOOD BEHAVIOUR EG CPU, RAM, NETWORK

	==> VIRUS : OFTEN SHOW AS INCREASED CPU ETC : Trigger
					an alert

		==> ANOMALY CHECKS AGAINST A GOOD BASELINE GRAPH!!

3. Behaviour Based  ** NOT SO RELIABLE (FALSE POSITIVES!!)

	Creates RULES : if a virus triggers a rule we get an 
			alert eg a certain process running on 
			our PC

	HEURISTIC = REAL TIME SCANNING   (SLOW PC!)




Detecting attacks


Honeypot  : FAKE LURE : 1) We can get info on them!
			2) They are wasting their time!!!

Honeynet
	    FAKE NETWORK





















### Network Attacks And Security


Zero day ==> ATTACK ON BRAND NEW SOFTWARE : BAD GUYS FIND VULNERABILITY
AND EXPLOIT IT BEFORE GOOD GUYS GET TO KNOW WHAT'S HAPPENING

Hardening Your System


Harden = make more secure

	Disable unused services and ports
	Security baseline = preconfigured settings to make your
		machine secure
	MBSA Microsoft Baseline Security Analysis : lets you 
		know if your system is weak!!!

	Attack Surface : what enemy can see / use /exploit to 
		attack us eg SERVICES, APPLICATIONS ==> CAN
		BE HACKED!   TURN OFF IF NOT BEING USED!

	Disable unused accounts

Baseline ==> STARTING POINT, KNOWN SETTINGS, PREDICTABLE GRAPH

	Task Manager			BASIC		TASKMGR
	Resource Monitor		BETTER		RESMON
	Performance Monitor		MOST ADVANCED	PERFMON
		OUTPUT TO FILE : DCS DATA COLLECTOR SET
			ANALYSIS LATER

Group Policy ==> CONTROL ENTIRE COMPANY

	Password policy
	Lockout policy
	Audit policy ==> CHECK LOGS
	AppLocker ==> BLOCK SOFTWARE FROM RUNNING
	
Images
	BUILD SECURE PC/SERVER THEN PUSH OUT TO ENTIRE COMPANY!
		(GOLD STANDARD MASTER IMAGE)

Host Baseline
	OS
	Application		
	
Trusted OS ==> can LOCK DOWN AND MAKE SURE!!!

	TCB Trusted Computing Base : secure OS eg LINUX



























### Code Injection Vulnerabilities

SQL Injection

Code injection

Man In The Middle






















### Forensics



Forensics : Science of criminology : examining a PC as part of
		a crime scene

	DATA VOLATILITY

		VOLATILE DATA IS DATA IN RAM/CACHE WHICH WILL
			DISAPPEAR WHEN TURN PC OFF!!!

		ORDER OF VOLATILITY

			CPU
			RAM
			CACHE (TEMP)
			HARD DRIVE 
			LONG TERM BACKUP

	CHAIN OF CUSTODY
		
		GET PC ==> FIRST IMAGE IT!!!  
		HASH/SIGN IMAGE (MUST HAVE DATE STAMP ALSO)
				(( AWARE OF TIME ZONE))

		CHAIN OF CUSTODY : SIGNED LIST OF PEOPLE 
			RESPONSIBLE FOR EVIDENCE AT ALL TIMES

On board/off board
	ON BOARD ==> HIRE, NEW EMPLOYEE
	OFF BOARD ==> EXIT ORGANISATION





















TPM : CHIP TO STORE BITLOCKER KEYS

HSM : HARDWARE SECURITY MODULE : CAN STORE ANY KEYS FOR YOUR
		COMPANY (STAND-ALONE DEVICE)

​		

DLP = data loss prevention












































## Network Scanning



### DLP


TWO MEANINGS

	DATA LOSS PREVENTION : DATA TAKEN (STOLEN AND REMOVED)

	DATA LEAK PREVENTION : COPY TAKEN 



FAILSAFE : Industrial chain saw will not work unless thumb and fingers
pressing on two separate buttons

FAILSECURE


POWER GOES OUT : SECURE LOCKED DOOR : REMAIN LOCKED BUT
	IF PERSON TRAPPED INSIDE THEY STILL CAN FORCE
	THE DOOR OPEN AND GET OPEN

	EG SERVER ROOM / SAFE



FAILOPEN


POWER GOES OUT : DOOR SWING WIDE OPEN



RESPONDING TO SECURITY INCIDENTS


IRP : INCIDENT RESPONSE POLICY

	EG PEOPLE TO CONTACT STRAIGHT AWAY
	   ACTIONS TO TAKE EG UNPLUG FROM NETWORK
	   DESIGNATED PEOPLE TO BE 'IN CHARGE' IN CASE
		OF UNCERTAINTY
	   FIRST RESPONDER : EMERGENCY RESPONSE TEAM



FIGHTING CRIME : FORENSICS


IT IS IMPORTANT IN A COURT OF LAW THAT EVIDENCE IS 
	ADMISSIBLE.  IF NOT, IT CANNOT BE USED
	AGAINST A DEFENDANT	

INVESTIGATING A CRIME

	1. LOOK AT ANYTHING 'VOLATILE'  <<VOLATILITY>>

		TURN OFF ==> INFO DISAPPEARS

		EG  CONTENTS OF RAM OR PAGE FILES ETC

	2. HARD DRIVE : TAKE IMAGE STRAIGHT AWAY

		SIGN/HASH IMAGE 

	3. CREATE A 'CHAIN OF CUSTODY'

		SIGNED LIST OF PEOPLE RESPONSIBLE FOR
		EVIDENCE AT ALL TIMES



DISASTER RECOVERY


FAULT TOLERANCE = RECOVERY FROM FAULT

	EG RAID 5  :   DRIVE FAILS ==> STILL SURVIVE
	   CLUSTER :   SERVER FAILS ==> GO TO SERVERB

SINGLE POINT OF FAILURE = ONE THING WHICH, IF IT BREAKS, 
		MAKES YOUR WHOLE SYSTEM FAIL (EG YOUR BRAIN!)

	ROUTER : GATEWAY : TO INTERNET
	SWITCH : CENTRAL POINT OF NETWORK

BCP BUSINESS CONTINUITY PLAN : WRITTEN PLAN FOR ACTIVITY
		IN CERTAIN EVENTS EG WEBSITE GETS HACKED.

BIA BUSINESS IMPACT ANALYSIS : WHAT MIGHT HAPPEN IF THREAT
		X MATERIALIZES (IMPACT ON OUR BUSINESS)

MTD MAX TOLERABLE DOWNTIME

	EG IF SERVER GOES DOWN, IT MUST BE UP WITHIN 2 DAYS	

RPO : RECOVERY POINT OBJECTIVE

	HOW FREQUENT ARE YOUR BACKUPS???
	IF DISASTER, HOW MUCH DATA ARE YOUR PREPARED TO LOSE?
	EG EVERY 4 HOURS YOU BACKUP, THEN POTENTIALLY
	ARE YOU PREPARED TO LOSE 4 HOURS WORTH OF DATA?

RTO RECOVERY TIME OBJECTIVE : PLANNED TIME BY WHICH WE 
	HAVE FIXED AN ITEM AND GET EVERYTHING WORKING



HOT/WARM/COLD SITE


HOT SITE : 100% READY TO GO - COMPUTERS, NETWORK

		*** TOO COSTLY ! ***

WARM SITE : PCS THERE, SHUT DOWN.  1-2 DAYS TO GET SET 
	UP, RESTORE BACKUPS, BEGIN WORK.

		*** HIGH BUT REASONABLE COST **

COLD SITE : JUST BARE SHELL OF BUILDING WITH WATER AND
		ELECTRICITY AND LITTLE ELSE

	1-2 WEEKS TO SET UP



MTTF MEAN TIME TO FAIL = AVERAGE TIME BEFORE EG HARD DRIVE FAIL (3 YEARS)


==> MTBF MEAN TIME BETWEEN FAILURES



MTTR MEAN TIME TO REPAIR : AVERAGE TIME TO FIX EG SERVER

Server

1. RENAME
FIX SERVER IP
2. DCPROMO : BUILD DOMAIN phil.local (COMPANY)
3. DNS ON CLIENT : POINT TO SERVER IP
4. JOIN CLIENT TO DOMAIN









































### Advanced Malware Attacks

Ping flood	Flooding a server with PING REQUESTS
ICMP flood
PING = ICMP

Smurf Attack	Malformed PING : DISGUISE SOURCE IP

TCP SYN Flood
TCP : Always send a '3-WAY HANDSHAKE' to set up
1) Hello : I'm going to send you data 2) Server : OK 3) Client : Done


SYN FLOOD : Send lots of 'hello' (stage 1) requests ONLY
	Server : reserve space for conversations which never happen



Flood guard : watches for and prevents flood attacks (DOS flood)

Port Scan	Scanning network for all OPEN PORTS (free online port scan)	*** NOTE : THIS IS SEEN AS AN ATTACK **

XMAS Attack	Port Scan ==> ALL OF THE POSSIBLE 'FLAGS' SET TO 'HIGH' (1)
TO PROVOKE A RESPONSE

MITM Man In The Middle


Client			Bad Router 		Server

		Can be used 
		1) Eavesdrop : LISTEN (Passive)
		2) Alter packets in some way
				(Active)

Prevent : HTTPS Scanning (part of UTM Threat Management)



Session Hijack


Client---------------Bad Router----------------Server

	Bad router can actually 'take over' session

		     Bad Router----------------Server

	Server THINKS STILL TALKING TO CLIENT BUT IS NOT: 
		BAD ROUTER IS IMPERSONATING AND HAS TAKEN
		OVER THE SESSION



Session Replay Attack


Valid session is copied and played back later

Client---------------Bad Router---------------Server

	later on Bad Router 'replay' same packets back to server
	to create a 'dummy' connection.

Mitigate using TIMESTAMPS



Passord Attack

​    STOP : using Account Lockout Policy

Birthday attack
TWO FILES CAN HAVE SAME HASH : USE THIS TO GET PAST OUR 'HASHING'	PROOF THAT A FILE HAS NOT CHANGED



DNS Map NAME to IP

DNS Poison : FAKE DNS Records

DNS Pharming attack : FAKE DNS SERVER or CORRUPT 'HOSTS' RECORD ON ONE PC
Hosts ==> NOT USED NOW!!!
C:\Windows\System32\drivers\etc

ARP	Address Resolution Protocol	IP to MAC conversion
arp -a

ARP Poison
Fake/change some ARP data to cause trouble

Typo Squatting


	Gooogle.com
	Amazone.com     MIS-SPELLING OF COMMON SITES : PEOPLE BUY
			DOMAIN NAME THEN SELL TO CORRECT OWNER FOR
			LOTS OF MONEY



URL Hijacking
Buy domain names of companies and 'sit on them'. Force
legitimate company to pay us lots of money to sell them
back their own domain name

Watering Hole	Attacks on sites which are very popular and lots of people
hanging around eg social media sites

Zero Day	Brand new software : Hackers discover weakness : exploit it
before good guys get a fix

Cookie	Text file : tracking your browsing

LSO Flash Cookie DON'T USE FLASH ! But in the exam!!!
Flash Cookie = LSO Locally Shared Object

Errors	Programmer error ==> get wrong answer!!! (eg Interest Rate
is wrong)

Exceptions	SYSTEM CRASH!!!!
Handled : sorted internally
Unhandled : PROGRAM CRASHES!!

Application Attack
Main APPLICATIONS we are concerned with are
1) HTTP/HTTPS WEB SERVER!!!
LINUX : FREE 'APACHE' WEBSITE
WINDOWS : FREE : IIS INTERNET INFORMATION
SERVICES
2) DATABASE SERVER
3) EXCHANGE EMAIL ETC

Injection Attacks


Website : FORM TO COLLECT INFORMATION
	  eg
		name..........  dob........  
		address.........

				SUBMIT

It's possible to INSTEAD OF SUBMITTING TEXT, SUBMIT CODE INSTEAD!!!
	
SQL
	REGULAR SQL : SELECT * FROM USERS ...

	FORM : Instead of submitting name, submit SQL code instead.
	
LDAP	
XML



Input Validation


Check for 'strange' characters like \\ / < > ' "   etc in fields



Buffer Overflow Attack


Buffer 
	Temporary data store to hold information when network
	is slow : waiting for data to either send or receive

	Buffer data is stored in RAM of COMPUTER!

	Buffer Overflow attack ==> PUSH GOOD DATA OUT OF BUFFER,
		POSSIBLY GET ACCESS TO AREAS OF RAM NEXT TO 
		THE BUFFER WHICH NORMALLY WE DON'T HAVE ACCESS TO



XSS Cross Site Scripting


Hack in to one website and from there, hack into another	



Folder Traversal Attack


Reach one folder : from there, navigate and reach another folder



XSRF Cross Site Request Forgery


Hack a website but ALREADY LOGGED IN ==> YOU HAVE MORE POWER
	TO DO MORE DAMAGE WHEN YOU HACK IN





#### CODE INJECTION ATTACK = APPLICATION ATTACK


CODE INJECTION ATTACK : CAN PUT <script>....code..</script>

	INTO A WEB FORM WHERE REGULAR TEXT IS EXPECTED

### XSS CROSS SITE SCRIPTING

	INJECTED CODE ATTEMPTS TO AFFECT OTHER SITES
	WHICH MAY BE 'HOSTED' ON SAME WEB SERVER


#### XSRF CROSS-SITE REQUEST FORGERY

	USER IS LOGGED IN ALREADY SO THIS CODE INJECTION
	PERHAPS HAS GREATER PERMISSIONS TO DO DAMAGE



	HOT FIX		SHORT-TERM FIX TO ISSUE	
	PATCH		FIX TO A FAULT
	UPDATE		IMPROVEMENT
	SERVICE PACK	CUMULATIVE PREVIOUS UPDATES IN ONE

#### BUFFER OVERFLOW ATTACK

	RAM (MEMORY) 
	
		SECURE RAM   |   BUFFER = SHORT TERM STORAGE
			     |		 AREA EG FOR HARD 
				         DRIVE
	
	BUFFER OVERFLOW ATTACK TRIES TO PUT SO MUCH DATA
		IN BUFFER, ATTACKING CODE REACHES SECURE
		AREA OF RAM

#### INJECTION TYPES
		SQL (DATABASE)
		XML (TEXT DATABASE)
		LDAP (ACTIVE DIRECTORY)



PORT


1.2.3.4 : 80

IP      : PORT

<--socket----->  		SOCKET = IP:PORT

WHAT IS A PORT???

	IT IS A CHANNEL BY WHICH DATA GETS SENT TO IP
		ADDRESS
	
		PICTURE : YOU MUST CHOOSE ONE OF 65000
			MAILBOXES IN ORDER TO GET 
			YOUR MAIL THROUGH!!!
	
		NOTE : HTTP ALWAYS PORT 80, HTTPS ALWAYS 443
	
	PORT 1-1000 ARE PRE-RESERVED FOR INTERNET USE
	     1000+ CAN BE CONFIGURED BY USER
			EG GAMERS : SET PORT FORWARDING
				ON YOUR ROUTER SO GAMING
				TRAFFIC REACHES EG XBOX
	
	65536 VALID PORTS


​	
PORT SCAN

	*** POSSIBLY COULD BE SEEN AS A HACKING TOOL **
	
	USED TO SCAN ALL PORTS ON IP ADDRESS TO SEE WHICH
	ONES ARE OPEN, OFTEN WITH A VIEW TO THEN HACKING
	INTO THAT ORGANISATION
	
	<http://mxtoolbox.com/SuperTool.aspx>
	
		EG cfa.org

XMAS DAY ATTACK

	DOING A PORT SCAN WITH ALL THE POSSIBLE FLAGS				SET TO 'ON' TO TRY AND TRIGGER A RESPONSE FROM
	EACH PORT


#### EAVESDROPPING

LISTENING IN TO TRAFFIC OR SIGNALS

	WIRESHARK OR NETMON

#### MAN-IN-MIDDLE ATTACK

	client -----------router-----------------server
	
			ROUTER OWNED
			BY HACKER : 
			CAPTURING AND
			VIEWING TRAFFIC	
			[[ POSSIBLY COULD
			TRY TO MODIFY
			TRAFFIC ALSO]]

#### SESSION HIJACKING

	client --------------router-----------------server
	
		ROUTER IN MIDDLE TOTALLY TAKES OVER
		THE SESSION, PRETENDING TO BE ONE
		OF THE MACHINES
	
	client---------------router
	
		SESSION HIJACKED - CLIENT THINKS IT IS 		
		TALKING TO SERVER BUT IS NOT!

#### SESSION REPLAY

	9AM:
	
	client ------------router -----------------server
	
			MALICIOUS 
			ROUTER WILL
			COPY ALL TRAFFIC
			THEN REPLAY IT 
			ALL BACK LATER
			PRETENDING TO BE
			ONE OF THE MACHINES		
	
	10AM
	
			router -----------------server
	
			ROUTER IS PRETENDING
			TO BE CLIENT TO 
			GAIN ACCESS TO SERVER
	
	PREVENT BY EG TCP SEQUENCE NUMBER, TIMESTAMP ETC




























































































































































# Cyber Word Lists

## Network Security 

### Network Security Random Terms

```
CAAS  	
DaaS	
MaaS
Forest : Group of domains eg [MSN.com](<http://msn.com/>), [LIVE.com](<http://live.com/>), [MICROSOFT.com](<http://microsoft.com/>), [SKYPE.com](<http://skype.com/>)
FQDN : full name eg [myserver.mydomain.com](<http://myserver.mydomain.com/>) FULLY QUALIFIED DOMAIN NAME
RFC Request For Comments : Suggestions to improve the INTERNET!!!
RADIUS : PORT 1812
TACACS+ : PORT 49
MDM	Mobile Device Management
MAM	Mobile App Management
BCP business continuity plan : what to do if business fails
CRL list of revoked certifs
Metric : stats, measurements
UTM UNIFIED THREAT MANAGEMENT
PMI PRIVILEGE MANAGEMENT INFRASTRUCTURE
CIA CONFIDENTIALITY INTEGRITY AVAILABILITY
MAC MANDATORY ACCESS CONTROL : ASSIGNED BY ADMIN : TOP SECRET
PRIVILEGE MANAGEMENT
CAC COMMON ACCESS CARD
KEYSTROKE AUTHENTICATION : LOOKS AT TIMING AND PATTERN OF KEYSTROKES
SMART CARD = TOKEN BASED
PERFECT FORWARD SECRECY : SESSION KEYS ARE ONE TIME ONLY USE
HMAC : LIKE SHA1 : PROVIDES DUAL INTEGRITY AND AUTHENTICITY
SYMMETRIC : DES, 3DES, AES, BLOWFISH, TWOFISH, RC6
ASYMMETRIC : DH,RSA, ECC, 
CIPHER SUITE : BOTH SYMMETRIC AND ASYMMETRIC
CTI COMPUTER TELEPHONY INTEGRATION
ISA INTERCONNECTION SECURITY AGREEMENT BETWEEN TWO COMPANIES TO SPECIFY TECHNICAL RELATIONSHIPS
MOU MEMORANDUM OF UNDERSTANDING : INFORMAL AGREEMENT
BPA BUSINESS PARTNER AGREEMENT
IRP INCIDENT RESPONSE POLICY
AUP ACCEPTABLE USE POLICY
BCP BUSINESS CONTINUITY PLAN
DRP DISASTER RECOVERY PLAN
BIA BUSINESS IMPACT ANALYSIS : ANALYSE THREATS AND VULNERABILITIES
MTD MAX TOLERABLE DOWNTIME
RPO RECOVERY POINT OBJECTIVE IS TIME HAVE TO GO BACK UNTIL LAST BACKUP WAS TAKEN (DATA SINCE THEN IS LOST)
RTO REDOVERY TIME OBJECTE IS PLANNED TIME TO RECOVER SYSTEM
CONTINUITY OF OPERATIONS PLAN
PARALLEL TEST
CUTOVER TEST
DRP DISASTER RECOVERY PLAN
DRP WALKTHROUGH
DRP TABLETOP DISCUSSIONS
DRP FUNCTIONAL EXERCISES
DRP FULL SCALE
DRP NOTIFY STAKEHOLDERS, ASSESS, RECOVER
UTM Unified Threat Management
WAF Web Application Firewall uses deep packet inspection to examine each request and response and prevents attack based on user input like SQL injection.  Signature based uses preset signatures.  Anomaly based uses deviations to block.
Web Security Gateway - filters for malware, can have URL filtering, 
Anomaly Based = Heuristic = Behaviour based - all can generate a large number of false positives when network traffic deviates from the norm.
Content Inspection : detects malicious content and filter email attachments
WAF web application firewall monitors for SQL injection and XSS attacks
Web security gateway : does URL filtering, content and malware inspection
WAF Web Application Firewall : SQL injection and XSS attacks
WAF WEB APPLICATION FIREWALL : SQL INJECTION AND XSS ATTACKS
WEB SECURITY GATEWAY : URL FILTER, CONTENT/MALWARE INSPECTION
DNS IS UDP/TCP 
TFTP PORT 69 TCP AND UDP
SCP SECURE COPY USES PORT 22 TO TRANSFER FILES SECURELY USING SSH
PAAS DELIVERS VIRTUALISED USER ENVIRONMENTS
IAAS DELIVERS VIRTUAL SERVERS
COMMUNITY CLOUD WHEN PRIVATE CLOUD IS SHARED
LOOP PROTECTION ON ALL PORTS
BPDU BRIDGE PROTOCOL DATA UNIT - DETECTS LOOPS - CONTAINS INFO TO CONFIGURE STP SPANNING TREE PROTOCOL.  PREVENTS SPOOFING WHICH OCCURS WHEN UNAUTHORISED USER CONNECTS TO A PORT.  BPDU ARE SHARED BETWEEN SWITCHES AS UNITS OF INFORMATION.
FLOOD GUARD PROTECTS AGAINS DOS EG LOGIN (AAA) ATTACKS
RADIUS PERFORMS AAA
802.1X CAN FILTER BY AD/LDAP MEMBERSHIP EG ON A VLAN
SWITCH CAM TABLE CONTENT ADDRESSABLE MEMORY : CONTAINS SWITCHING TABLE
UTM APPLICATION CONTROL CAN EG PREVENT USERS CLICKING THROUGH ON FACEBOOK LINKS
UTM CAN DO TRAFFIC SHAPING TO THROTTLE BANDWIDTH FOR CERTAIN APPS
UTM CAN RESTRICT DAY/TIME ACCESS
DLP DATA LOSS PREVENTION MONITORS FILES LEAVING THE NETWORK
DPI DEEP PACKET INSPECTION
PEAP REQUIRES CERTIFICATE ON SERVER
EAP-TLS REQUIRES CERTIFICATE ON CLIENT AND SERVER
LEAP MUTUALLY AUTHENTICATES WITH USERNAME AND PASSWORD HASH.  
LEAP : BECAUSE HASH-BASED IS INSECURE IF POOR PASSWORDS ARE USED AS HASHES CAN BE CRACKED EASILY FOR POOR PASSWORDS.
EAP-MD5 AUTHENTICATES CLIENT ONLY
PORT FORWARDING CAN ENABLE A COMPUTER TO BE OPEN TO RECEIVING CONNECTIONS FROM THE INTERNET
NAC NETWORK ACCESS CONTROL LIKE NAP
NAC like NAP
Community cloud shared by several organisations
SCP SECURE COPY IS OVER PORT 22 SSH
FTP USES 20 (DATA) TCP,UDP AND 21 (ADMIN) TCP
FTPS USES FTP OVER SSL USING 989 (DATA) TCP,UDP AND 990(ADMIN) OVER TCP
IPSEC PORTS 500 UDP AND 4500 UDP
WINS 137
IMAP 993
POP 995
FCoE CAN ONLY RUN ON 10GBPS CHANNEL
FE80 SITE LOCAL
FC00 SITE-TO-SITE
FF00 MULTIAST
ISCSI CAN IMPLEMENT SAN OVER ETHERNET
802.1X CAN AUTHENTICATE SWITCHES AND WIFI POINTS
EAP-TLS USES MUTUAL CERTIFICATES
CCMP USES AES
WPA USES TKIP FOR ENCRYPTION
WPA2 USES AES FOR ENCRYPTION
IMAP 994 TCP
POP 995 TCP
SNMP SECURED BY IPSEC
SNMP 161 162
EAP-MD5 ONLY CLIENT AUTHENTICATES TO SERVER (WITH HASH)
FTPS = FTP OVER SSL  PORT 990
802.1X MACHINE-TO-MACHINE AUTHENTICATION, PLUS AD/LDAP MEMBERSHIP
IPSEC USES AH FOR INTEGRITY 
IPSEC USES ESP FOR ENCRYPTION
CONTAINMENT : SHORT-TERM + FORENSIC IMAGE + LONG-TERM
TEMPEST : EMI
INCIDENT IDENTIFICATION : WHICH SERVERS, WHAT IMPACT TO BUSINESS?
PHARMING : ALTER DNS OR HOSTS FILE
STEGANOGRAPHY : PROVIDES PRIVACY AS WELL AS ENCRYPTION
CDP CLEAN DESK POLICY
INCIDENT : EXAMINE VOLATILE AREAS FIRST
MTR MEAN TIME TO RESTORE THE SYSTEM TO WORKING ORDER (DIFFERENT TO MTTR)
RTO RECOVERY TIME OBJECTIVE IS MAX ACCEPTABLE RECOVERY TIME
RPO RECOVERY POINT OBJECTIVE IS MAX ACCEPTABLE DATA LOSS GOING BACK TO A POINT IN TIME
ALE ANNUAL LOSS EXPECTANCY
SLE SINGLE LOSS EXPECTANCY
RISK TRANSFERENCE = INSURANCE POLICY
RISK MITIGATION = REDUCTION OF LOSS
FARADAY CAGE
PROXIMITY READER = WAVE YOUR CARD TO GAIN ENTRY
BPA BLANKET PURCHASE AGREEMENT
BPA BUSINESS PARTNER AGREEMENT
ISA INTERCONNECTION SECURITY AGREEMENT
BCP BUSINESS CONTINUITY PLAN
PDS Protected Distribution System = Protected cabling
SPEAR PHISHING - APPARENTLY FROM SOMEONE YOU KNOW
LSO LOCALLY SHARED OBJECTS LIKE FLASH COOKIE
SMURF ATTACK : DDOS PING ATTACK
PING OF DEATH : MALFORMED PING PACKETS
BASELINE : COMPARING AGAINST KNOWN
ARCHITECTURE : CHECKING FOR DESIGN FLAWS
SCAREWARE IS MALWARE THAT 'SCARES' USER INTO INSTALLING THE SOFTWARE
XSS CROSS SITE SCRIPTING : REDIRECTS EG TO ANOTHER SITE
CSRF CROSS SITE REQUEST FORGERY : USES AUTHENTICATION TO GAIN ACCESS
REPLAY ATTACK CAN BE DOS ATTACK ON WIFI
SMURF : PING DOS ATTACK
PROMISCUOUS MODE : TURN ON IN NIC AND USE FOR PROTOCOL ANALYSER OR VULNERABILITY SCAN
INTERNAL PENETRATION TEST: SEE WHAT EFFECT A MALICIOUS INSIDER COULD HAVE
QUID PRO QUO ATTACK : OFFERED GIFT
MAN IN THE MIDDLE : VIEW INFORMATION
TCP/IP HIJACKING : HIJACK SESSION
DNS INJECTION
CREDENTIALED SCAN CAN IDENTIFY EG UNINSTALLED PATCH, USB ATTACHED
PHARMING : ALTER DNS RECORDS
EAVESDROPPING OVER NFC PLAIN TEXT
COOKIE POISON : PREVENT BY ENCRYPTION
ANOMALY COMPARES TO A BASELINE
BEHAVIOUR BASED SCANS COMPARE TO RULES
SCADA INDUSTRIAL PROCESSES : HIDE IN DMZ
TPM TRUSTED PLATFORM MODULE
HSM HARDWARE SECURITY MODULE : GENERATE CRYPTOGRAPHIC KEYS
CLOUD : GREATEST RISK IS ACCESS TO FILES FROM HOST
FIELD LEVEL ENCRYPTION FOR CERTAIN DATABASE FIELDS
MDM MOBILE DEVICE MANAGEMENT
APPLICATION WHITELIST DETERMINES IF MOBILE DEVICE IS FIT TO ACCESS THE NETWORK
OFFBOARDING : REMOVING MOBILE APP (BYOD) FROM COMPANY USE - REMOVE DATA AND LOGINS
ASSET TRACKING USING GPS TO LOCATE A DEVICE
AUP ACCEPTABLE USE POLICY : WHAT A USER CAN AND CAN'T DO ON THE NETWORK
FUZZING SENDS RANDOM DATA TO TEST AN APP
XSRF CROSS SITE REQUEST FORGERY : SUBMIT FORMS PRETENDING TO BE USER
SAML SECURITY ASSERTION MARKUP LANGUAGE : USED FOR SSO
TACACS USED FOR CENTRAL DEVICE AUTHENTICATION
SAML BROWSER SSO
LDAP (SECURE) : SSO
TACACS LAYER 2 AUTHENTICATION
WPA2 ENTERPRISE IS BASED ON 802.X
TACACS ENCRYPTS ALL AUTHENTICATION TRAFFIC
CAC COMMON ACCESS CARD
TOTP TIME BASED ONE TIME PASSWORD
HOTP HOST-BASED ONE TIME PASSWORD
KEY ESCROW : KEYS ARE HELD IN A CENTRAL LOCATION TO BE USED IF NEEDED
RA REGISTRATION AUTHORITY : VALIDATES A CERTIFICATE
CRL CERTIFICATE REVOCATION LIST
CSR CERTIFICATE SIGNING REQUEST : FOR SSL CERTIFICATE
CTL CERTIFICATE TRUST LIST : MANUALLY ALLOCATE WHICH CAs ARE TRUSTED BY A USER
HIERARCHICAL TRUST FROM TOP DOWN
NETWORK TRUST HAS TRANSITIVE TRUSTS
STREAM CIPHER DOES ENCRYPTION OF DATA
BLOCK CIPHER : SLOWER THAN STREAM CIPHER
AH AUTHENTICATE
ESP ENCRYPT
ISAKMP DETERMINE WHEN TO MAKE NEW KEYS
TLS CAN ENCRYPT SMTP TRAFFIC (CAN BE ON REQUEST ONLY)
S/MIME ENCRYPT EMAIL SERVER TO CLIENT
PGP ENCRYPT EMAIL SERVER TO CLIENT
SSL AND TLS NEGOTIATE WHICH ENCRYPTION ALGORITHM TO USE
AES REPLACED 3DES REPLACED DES
RIPEMD CAN VERIFY PLAIN TEXT BY HASH
KEY STRETCH
BCRYPT ADD SALT
PBKDF2 ADD SALT
HMAC HASH BASED MESSAGE AUTHENTICATION
XMAS SCANS OPEN PORTS : ALL FLAGS OPEN
DRIVE-BY-DOWNLOAD : JUST FROM BROWSING A SITE
CLICKJACK ON EG 'NEXT' BUTTON DOES UNINTENDED CONSEQUENCE EG POST FACEBOOK MESSAGE
URL SHORTEN CAN HIDE TRUE BOGUS SOURCE
SYN ATTACK IS DDOS ATTACK TO SET UP TCP CONNECTION
IV ATTACK : PREDICT SALT
SINKHOLE FOR ALL NETWORK TRAFFIC LIKE GATEWAY
HSM HARDWARE SECURITY MODULE
XSS CROSS SITE SCRIPTING
XSS STORED
XSS REFLECTED TO ANOTHER MACHINE
XSRF CROSS SITE REQUEST FORGERY USING TRUST ON ONE SITE TO REACH ANOTHER
FUZZING SENDS RANDOM TEST DATA
TRUSTED : HARDWARE + OS + FIRMWARE
TRUSTED : ISOLATE FROM APPS
SCADA DOES HVAC MONITORING
APPLICATION AWARE : OF STATE OF OTHER DEVICES
MONITOR BY BEHAVIOUR/SIGNATURE/ANOMALY/HEURISTIC
WEB SECURITY GATEWAY : FOREFRONT : URL FILTER + MALWARE + APP CONTROLS EG SKYPE + DLP DATA LEAK PREVENTION
NAC NETWORK ACCESS CONTROL = NAP
VLAN HOPPING : SNOOP ON OTHER VLAN DATA
TLS AFTER SSL
FIBER CHANNEL OVER ETHERNET : USES FIBER CHANNEL PROTOCOLS OVER ETHERNET NETWORK
FLOOD GUARD AGAINST DDOS
MAC LIMITING : LIMITS NUMBER OF MAC ADDRESSES THAT CAN BE LEARNED ABOUT
MAC MOVE LIMITING : LIMITS NUMBER OF MOVES OF ITEMS ON A SWITCH PER SECOND
MAC FLOOD : MITIGATED BY MAC LIMITING
UTM UNIFIED THREAT MANAGEMENT
UTM : CARE AS CAN HAVE BOTTLENECK AND SPOF EFFECTS SO CAN BECOME A TARGET
802.11AC UP TO 1300MBPS IN 5GHZ BAND
CAPTIVE PORTAL : HAVE TO LOG IN TO WIFI
SITE SURVEY OF WIFI BOUNDARY
HTOP HASH-BASED ONE TIME PASSWORD
TTOP : TIME BASED HTOP EG 60 SECONDS TO USE IT!
RADIUS
DIAMETER = 2XRADIUS
RA REGISTRATION AUTHORITY : VERIFIES IDENTITY OF PRESENTED CERTIFICATES
CSR CERTIFICATE SIGNING REQUEST
PKCS TO CREATE CERTIFICATES
ENROL = GET CERTIFICATE
ENROL POLICY = WHO CAN APPLY
SSL : CLIENT BROWSER REQUESTS, SERVER SENDS TO CLIENT, CLIENT GENERATES SESSION KEY, ENCRYPTS, SENDS TO SERVER, BEGIN SESSION
ESCROW = KEY TRUSTED 3RD PARTY
M REQUIRED OF N PEOPLE TO USE KEY
PII PERSONALLY IDENTIFIABLE INFO
BUSINESS PARTNER AGREEMENT : BUSINESS?????????????
MOU MEMORANDUM OF UNDERSTANDING : INFORMAL
ISA INTERCONNECTIVITY SECURITY AGREEMENT : TECHNICAL
THREAT
THREAT VECTOR = METHOD OF ATTACK
VULNERABILITY
RISK = CHANCE
QUALITATIVE RISK ASSESS : HIGH/MED/LOW
SLE SINGLE LOSS EXPECTANCY
ALE ANNUAL LOSS EXPECTANCY
ARO ANNUAL RATE OF OCCURRENCE
FOOTPRINT = GATHER CRITICAL DATA OFTEN FROM PUBLIC SOURCES. SLOWLY ANALYSE NETWORK.
ENUMERATING = GET EG USERNAMES, GET DOWN TO DETAIL
PENETRATION TEST SIMULATES ATTACK
DLP DATA LOSS/LEAK PREVENTION
LEAK = COPY
LOSS = MOVE
FAILSAFE
FAILSECURE
FAILOPEN
IRP INCIDENT RESPONSE POLICY
VOLATILITY IN INCIDENT : RAM/CACHE, PAGE FILE, HDD, USB
FORENSIC : IMAGE + LOGS + VIDEO + TIME ZONE + HASH FOR KNOWN + FLAG FOR UNKNOWN
RECOVERY = ASSESS + RECOVER + REPORT
BCP BUSINESS CONTINUITY PLANNING
DRP DISASTER RECOVERY PLAN = INDIVIDUALS + INVENTORY + MANUALS + LOCATIONS
BIA BUSINESS IMPACT ANALYSIS = IMPACT TO BUSINESS
MTD MAX TOLERABLE DOWNTIME
RPO RECOVERY POINT = POINT BACK TO WHICH DATA WILL BE LOST WHEN GET CLOSEST BACKUP
RTO RECOVER TIME OBJECTIVE = MAX ACCEPTABLE RECOVERY TIME
MTR MEAN TIME TO REPAIR
PARALLEL ON ANOTHER SITE
CUTOVER TO ALTERNATIVE SITE
TABLETOP DISCUSSION
FUNCTIONAL EXERCISE
DISASTER RECOVERY : STAKEHOLDER NOTIFY + ASSESS DAMAGE + RECOVER DATA
MAC MANDATORY FIXED ACCESS CONTROL : HIGHLY SECURE SET BY ADMIN
DAC DISCRETIONARY ACCESS : SET BY USER
PMI PRIVILEGE MANAGEMENT INFRASTRUCTURE : USE PKI CERTIFS TO MANAGE PERMISSIONS
PMI USES PKI CERTIFICATES TO MANAGE
STREAM CIPHER ONE CHARACTER AT TIME
BLOCK CIPER SLOWER
STEGANOGRAPHY HIDE EVEN FACT DATA EXISTS
SYMMETRIC : AES => BLOW => TWO => RC6
CIPHER SUITE EG SSL OR TLS
PERFECT FORWARD : KEYS CANNOT BE REUSED
MULTIPARTITE = BOOT + OTHER TYPES COMBINED
RAT REMOTE ACCESS TROJAN TO GAIN ACCESS REMOTELY
APT ADVANCED PERSISTENT THREAT
ATTACK VECTOR FROM ATTACKER
THREAT VECTOR FROM THREAT
ROOTKIT HAVE TO SCAN WHEN WINDOWS NOT RUNNING
DLP DATA LOSS PREVENTION
BITLOCKER USES TPM WITH AES
HSM HARDWARE SECURITY MODULE
CAC Common Access Card
HMAC Hash Based MAC Message Authentication Code : Integrity + Authenticate
Symmetric : AES DES 3DES Blow TwoFish RC6
Asymmetric : DH RSA ECC
Cipher Suite uses both Asymmetric and Symmetric tools
CTI Computer-Telephony Integration
ISA Interconnection Security Agreement in technical detail between two parties
IRP Incident Response Policy
AUP Acceptable Use Policy
BCP Business Continuity Plan
DRP Disaster Recovery Plan
BIA Business Impact Analysis
Anomaly Based compares with known baseline
SCADA = Engineering Subnet
XSRF Attack : enforce Session Timeout + Hidden field
Application Firewall filters by detailed content
XSRF : Mitigate with token
MDT Max Tolerable Downtime
RPO Back to backup point
RTO Max Recovery time
MTR Mean Time To Recover
WAF Web Application Firewall : Deep packet inspection + Prevents SQL Injection 
Signature based : Fixed
Anomaly based : deviations can block
Web Security Gateway : URL Filter, malware
WAF Web Application Firewall : Deep packet inspection + SQL Injection + XSS prevention
DNS 53 UDP TCP
TFTP 69 UDP TCP
SCP 22 SSH FILE TRANSFER
COMMUNITY CLOUD SHARES PRIVATE CLOUD
BPDU BRIDGE PROTOCOL DATA UNIT : SPOOF WHEN UNAUTHORISED USER CONNECTS TO PORT
FLOOD GUARD AGAINST DOS EG AAA LOGIN ATTACK
RADIUS DOES AAA
802.1X TALKS TO AD/LDAP
CAM TABLE
UTM CAN PREVENT LINK CLICKING
UTM BANDWIDTH THROTTLE PER APP
UTM DAY/TIME RESTRICTION
DLP FILES LEAVING NETWORK (DATA LOSS PREVENTION)
DPI DEEP PACKET INSPECTION
PEAP : SERVER CERTIFICATE
LEAP : USER/PASS HASH
EAP-TLS : CERTIF ON BOTH SERVER + CLIENT
EAP-MD5 : AUTHENTICATE CLIENT ONLY (NOT SERVER)
PORT FORWARD SO INTERNET CAN SEND TRAFFIC IN TO LAN FOR THIS PORT ==> THIS PC
NAC = NAP
FTP 20 TCP UDP   21 TCP
FTPS FTP OVER SSL  989 TCP UDP    990 TCP
IPSEC 500 4500  BOTH UDP
NETBIOS 137
IMAP 993
POP 995
FCoE ONLY 10GBPS
FE80 SITE LOCAL
FC00 SITE TO SITE
FF00 MULTICAST
ISCSI = SAN OVER ETHERNET
CCMP USES AES
WPA USES TKIP
WPA2 USES AES
IMAP 994 TCP
POP 995 TCP
SNMP CAN BE SECURED BY IPSEC
SNMP 161 162
CONTAIN : SHORT TERM + FORENSIC + LONG TERM
TEMPEST IS EMI
INCIDENT IDENTIFY WHICH SERVERS WHAT IMPACT
PHARM DNS ALTER
STEGANOGRAPHY IN IMAGE
CDP CLEAN DESK POLICY
MTR RESTORE TO WORKING ORDER
TRANSFER RISK = INSURANCE
PDS PROTECTED DISTRIBUTION SYSTEM CABLING
SPEAR PHISH FROM KNOWN CONTACT
LSO LOCALLY SHARED OBJECT = FLASH COOKIE
SMURF = PING DDOS
PING OF DEATH = MALFORMED PING
BASELINE AGAINST KNOWN
ARCHITECTURE CHECK DESIGN
SCAREWARE SO INSTALL BOGUS STUFF
XSS CROSS SITE SCRIPT REDIRECT TO NEW SITE
XSRF CROSS SITE REQUEST FORGERY : AUTHENTICATES TO GAIN ACCESS
URL HIJACK = TYPO SQUAT = GOOOGLE.COM
GRAYWARE = NON-MALICIOUS (UNWANTED) CODE
WAF WEB APPLICATION FIREWALL = LAYER 7 (DEEP PACKET INSPECTION)
```








## Cyber terms

submarinecablemap.com
https://internet-map.net/Content/info/info-eng.jpg
Internet Mapping Project	
OpenNMS Network Management System  https://www.opennms.com/opennms-platform/
SYN..ACK  FIN..ACK on both sides
https://www.telnet.org/htm/places.htm
nc = NetCat = Linux TCP and UDP Network Tool
nc instead of telnet on mac	
nc telehack.com 23	
nc towel.blinkenlights.nl 23	
Windows freeSSHd telnet server	http://www.freesshd.com/?ctt=overview  Can SSH into your computer also send files with SFTP and FTPS
VLAN Pooling	
ICS Industrial Control System	
DCS Distributed Control System	
Netflow Cisco 	
LiveAction Network Monitoring 	
PASSWORD CRACKER
NIDS INSTALL
SMURF=PING
PHARMING=DNS POISON
XMAS ATTACK = DOS ATTACK?
IV ATTACK EXPLOITS WEP
CRP
https://techet.net/netanalyzer
Scan
Port
Enumeration
Acces
Maintain
cybermap.kaspersky.com
File Sharing Baywords Rapidshare are no longer
Hacker Groups Thallium North Korea
Blockchain immutable
Blockchain is decentralised 
Blockchain can also provide very secure encryption
Crimeware scans internet for vulnerabilities
net user/domain
net groups domainadmins
net groups domaincontrollers/domain
//server/share
https://sharepoint sites
sysvol 
EMET Enhanced Mitigation Experience Toolkit forces 3rd party apps to use NX and DEP for access ie No Execute and Data Execution Prevention - both prevent Framework = Policy + Procedures + Guidelines
SIEM logs events - Security Info and Log Mgt
Content based authentication eg date, time, location
Exploit identity - gain access through identity of another
Exploit browser - gain access through browser
Exploit apps - gain access through apps
APT Advanced Persistent Threat 
Kill Chain (Military) - Find, fix, track, target, engage, assess
Kill Chain (Cyber) - Reconnaisance, Weaponise, Deliver, Exploit, Install, C2
Pivot Point = weak point of entry for the attack
action on objectives = goal
attack vector = path of attack
dropped = malware placed on your system
malvertising
malspam
Recovery: contain, eradicate, validate
Containment: segment, remove, isolate, reverse engineer
eradicate: sanitise,reconstruct,secure disposal
Correction: Change control, lessons learned, update IRP
Sheep dip = isolated computer and allow virus to try to attack while monitoring it
Heuristic = real time
Anomaly = pattern
Behavioural = Beyond anomaly; uses models of known intrusions.  Uses TTP to infer when attack may be in progress
TTP Tactics Techniques Procedures
NAC access based on role, time, location
RADIUS UDP
TACACS+ TCP
Air gap = isolation
RBAC Role Based Access Control
Sinkhole: detect flood and redirect
TCP SYN attack can do service discovery
nmap -o can detect operating system
Syslog = logs only
SIEM = logs + analysis
nmap -sL = live hosts
nmap -sn = ping scan (also -sP)
nmap -Pn = port scan every IP on subnet
nmap -PS 1.2.3.4-5.6.7.8 TCP SYN service discovery scan
scope of scan = numbers of computers
# Repeat of above list
scan sensitivity = how deep we are trying to penetrate
RFC request for change
RFC request for comments
CCB change control board
RPO data which will be lost Recovery Point Objective
RTO planned uptime Recovery Time Objective
MTD max tolerable downtime
RUM real time user monitoring
EMET
vulnerability scan: nessus, nexpose, openVAS
nessus scans against CIS benchmark
CIS
BURP is pentest for web app
MODSECURITY = OWASP WAF firewall
OWASP
NGINX
NAXSI
IMPERVA WAF
Foundry = trace hardware
Snort
Sourcefire
Bro
Polymorphic change
Metamorphic recompile
Alienvault SIEM
SNORT IDS part of OSSIM
OPENVAS vulnerability scanner part of OSSIM
FPC full packet capture
1102 clear security logs
4719 change audit policy
syslog 3 error
RNA retrospective network analysis
playbook
runbook 
encase = forensic eg e01 hard drive format
DD imaging
PTH pass the hash
bastion on DMZ
DAI dynamic APR
HSTS https strict transport security only allows HTTPS
NIST core : identify (assets and risks) protect (acl, train, maintain) detect (event, anomalies, continuous) respond (IRP, comms,analyse, mitigate) recover
ISO 27001 is ISMS Info Security Mgt System
COBIT control objectives for IT ie how do we manage IT in business environment
ITIL best practice
NIST standards
TOGAF the open group architecture framework - how to design IT system
SABSA sherwood applied business security architecture for enterprise solutions
mitigate: deter, avoid, transfer, accept
personnel: train, dual control, separate duty, cross train, mandatory vacation
RUM real user monitor - capture transactions
V&V verify (meet compliance policy) and validate (does approved task)
RUM real user monitor: capture transactions
maturity model 2=risk 3=policy 4=management 5=CEO
maturity: react, comply, proact, optimise
Gantt/PERT
RADIUS 1812/3
RADIUS 1645/6
LDAPS 636
LDP 389
TACACS+ 49
burner phone
burner app
htttrack copies site 
maltego
nmap -sS TCP/SYN
nmap -A OS detection
dig = nslookup
openvas-start 
openvas-check-setup
greenbone = openvas GUI
msfconsole = metasploit
load openvas
vulns -R show vulnerabilities
zenmap host/port scan
dirbuster dictionary/brute force attack
CASP CompTIA Advanced Security Practitioner
CISA Certified Info Systems Auditor
CISM Certified Info Security Manager
ingress IN
egress OUT
blackhole DROP PACKETS
sinkhole REROUTE PACKETS
exploit browser/app/idendity
CoA courses of action
Kill Chain: find fix track target engage assess
Kill Chain: reconnaisance weaponise deliver exploit install command and control actions
pivot point of entry
recovery phase: containment, eradication, validation
containment: segment remove isolate reverse engineer
eradicate: sanitise reconstruct secure-disposal
correction: change control, lessons learned, update IRP
sheep dip is isolated infected computer
heuristic
anomaly = pattern
behaviour = beyond anomaly, sees results of attack eg files change.
TTP tactics techniques and procedures
nmap -o operating system
nmap -sL hosts
nmap -sn ping
nmap -Pn port scan on every computer in range
nmap -PS TCP SYN service discovery scan

RFC request for change / comments
CCB Change control board
Masquerade = NAT
ACL standard uses source IP
ACL extended uses source and destination IP and port
access-list 101 deny 1.2.3.4
access-list extended: mylist deny 1.2.3.4 deny 5.6.7.8
PVLAN private VLAN is a VLAN inside a VLAN
PVLAN promiscuous talks on all ports
PVLAN isolated
VTP Vlan Trunking Protocol across switches
DTP Dynamic Trunking Protocol joins switches across the trunking port
Eradication: sanitise, reconstruct, reimage, secure disposal
incident summary - what, when, who, scope, how
Topics: Threat management, Vulnerability Management, Incident, Architecture, Tool Sets
rules of engagement: timing, scope, authorisation, exploitation, comms, report
controls: organisation, physical, logical, admin
email harvest
social media profiles
dns harvesting
logical = software control
admin eg job rotation
detective control provides alerts
recovery control eg backup, alternative site, DRP
preventative control eg biometric, encryption, mantrap
functional classifications: prevention deterrence detection correction compensating
NIST functions: identify protect detect respond recover
Vulnerability scan is automated
Pen test is manual
Perimiter test
pen test: document target, research attack methods, vulnerability scan to get vulnerabilities, exploit to match vulnerability
VMEscape from VM to host
FISMA federal info security management act
OWASP web
SANS GIAC
SANS trains people
NIST provides standards
CIS provides benchmarks
Data is classified, unclassified, confidential, secret, top secret
scanning frequency depends on risk appetite, regulations, technical constraints, workflow
known unknown means we know of its existence but no fix found
ACS authenticated config scanner
CPE common platform enumeration = OS
CCE common config enumeration = config settings
CWE common weaknesses enumeration
MRTG multi router traffic grapher shows SNMP bandwidth utilisation
network fingerprint
banner grabbing of headers
metasploit
nexpose vulnerability scanner
vulnerability: nexpose, nessus, openvas
armitage = metasploit GUI
Nessus scans against CIS benchmarks for compliance
CVSS common vulneraibility scoring system : how vulnerable is a system
alient vault SIEM
syslog - logs only
SIEM log and analyse
SOP standard operating procedures
RFC request for change
CAB change advisory board
sheepdip: try out viruses on
MOU intention of working together
KPI key performance indicator
MTBSI mean time between service incidents
NIST 800-82 protects scada
PLC programmable logic controller
IOT may not install updates
OWASP open web application security project
buffer overflow - mitigate with input validation
nikto web app
RUM real user monitoring provides direct feedback on how the user is using the app
synthetic monitoring provides a path of inputs to simulate a user journey through a site
Interception proxy - sits as a proxy server between the client and the internet
BURP suite is interception proxy
ZAP Zed Attack Proxy is interception proxy
ModSecurity is WAF
NAXSI is Nginx Anti XSS and Injection
Imperva WAF
Trusted environment = OS + drivers + firmware + apps
Trusted foundry validates all hardware suppliers
Disassemble - take back to assembly language
Decompile - to source code
Obfuscate makes it harder for others to decompile
Firewalk is active sniffing to calculate from responses returned which layer 4 protocols and ports are allowed on a firewall
NAT mitigates firewalking
blinding attack is DOS (fake attack) + real attack to distract from the real attack
proxy server for outbound traffic
reverse proxy for inbound traffic eg VOIP
firewall: Juniper, Checkpoints, Palo Alto
NIDS operates INSIDE firewall
port mirror - passive logging
shun = block attacker IP
snort = windows ids / ips
sourcefire = cisco ids
bro = linux ids
idp can throttle bandwidth and change firewall rules
anomaly compares with baseline for changes eg volume, url length, packet headers
behaviour based more complex than anomaly
ipsec isolation with exceptions
dropper = first code on machine
C2 = command and conquer = C&C
action on objectives = goals
stealth virus passes good file to av for scanning
polymorphic alters hash
metamorphic completely recompiles
armor has other tricks
retrovirus disables av
slow and sparse infrequent 'under the radar'
process explorer
process monitor
tcpview
emet turns on nx and dep
winpcap = LibCap = sniffer
promisuous = all packets
wireshark = kismet = tcpdump = dsniff = ettercap
protocol analysers looks at headers
packet analyser looks at data inside
netflow analyses tcp
AirPcap over WIFI
Aircrack-ng WIFI
Injection: DSniff ettercap hping nemesis scapy
mtrg = traffic grapher : snmp
cacti.net snmp
solarwinds netflow : tcp
nagios snmp needs agent
IOC indicator of compromise
SIEM log then analyse
SIEM splunk arcsight qradar alienvault ossim syslog eventviewer
splunk = hadoop big data
spl = splunk = search processing language
OSSIM open source security info mgt : integrates snort with openvas
syslog has central logs
kiwisyslog
iptables logs linux firewall activity
pcap logs packets
tcpdump uses pcap
TTP tactics techniques procedures
FPC full packet capture needs a lot of disk space
RNA retrospective network analysis needs loads of storage
Wireshark: analysis, graph, filter, protocol
beacon in wifi
probe in wifi
STIX structured threat info expression
Mandiant = OpenIOC indicators of compromise
Scope = downtime + recovery time + data integrity + economic loss
playbook = runbook = incident response 'what to do if get hit'
playbook = contains runbooks 
runbook = sequence of steps
PHI personal health info
PII
FTK forensic toolkit
write blocker
IRP incident response plan
playbook 1) get system running 2) preserve evidence 3) prevent recurrence
volatile places: Swap file, routing table, RAM
EnCase does forensics
eDiscovery manages data
endpoint investigator
sleuth kit 
autopsy
helix
cellebrite
UFED universal forensic extraction device - take data without affecting it
forensic pc has no or limited internet
Autopsy is forensic software
Memoryze provides RAM forensics
F-Response is a forensic analysis tool
Nessus is vulnerability scanning tool
discovery scan of IP
assessment scan of vulnerabilities
metasploit finds and exploits vulnerabilities
metasploitable is a deliberately vulnerable machine
armitage is java gui to metasploit
alienvault 
MAC moves adds changes
CAB change advisory board
Air gap isolated
sheep dip to study virus
modsecurity = waf
naxsi = nginx anti xss and injection
Prevent: ips, firewall, av, emet, waf
collect: scan siem, ids
analyse: scan, interception proxy
forensic: hash, password, image
drop packets: no notification
reject packets: notification
firewalk to discover acls
blinding = flood plus attack
proxy can be transparent or non-transparent when have to configure client
NIDS: Snort Bro Sourcefire 
Injection: ettercap dsniff hping nemesis
syslog = log
siem = log and analyse
siem = hadoop 
siem = alien vault
event viewer = evtx
incident preparation: irp harden comms
incident prepare detect analyse recover
incident recovery: containment: segmentation remove isolate reverse engineer
incident recovery: eradication: sanitise(clean, wipe, zeros(not ssd)),reimage, dispose 
incident recovery: validation: patch permission scan log
incident recovery: correction: change control, lessons learned, update irp
CSIRT
MITRE STIX Structured Threat Info Expression
MITRE STIX: observe, indicator (patterns of observables), TTP tactics threats and procedures
Mandiant = OPENIOC Indicators Of Compromise
Severity depends on data, downtime, scope
Scope: downtime, recovery time, integrity, criticality
playbook of many runbooks
runbook step by step incident response
pii personal identify info
phi protect health info
pci payment card industry
dss data security standard
irp incident response: playbook, call list, incident form, custody form
playbook: get secure, get evidence, prevent re-attack
volatile: swap file, router, RAM
encase
sleuth autopsy
helix live
cellebrite mobile
UFED universal forensic extraction device
forensic machine: task browser, autopsy browser, memoryze fireeye, f-resrponse tactical
sha1 = 160
sha256 used in IPSEC, SSL, 
sha512
certutuil -hashfile file algorithm (md5/sha1/sha256/sha512)
fciv file checksum integrity validator
fciv -c compare file with hash
forensic duplicate
encase used to analyse drive
dd raw image of drive
dd if input of output  dd if=/dev/sda of=/mnt/usbstick/a.img
spider searches all words on a computer then uses this dictionary as a password cracking list
pth pass the hash
restricted admin mode means password never sent externally
password kept in live RAM
forensic analysis: image of drive, crack password, encase analyse drive, logs, prefetch cache
imaging: use encase or dd
ooda observe orient=identify decide (what to do) act
coa: detect destroy degrade disrupt deny deceive
smurf attack: icmp tcp ddos
fraggle attack: icmp udp ddos
tcp syn attack: ddos using tcp 3-way handshake
dtp dynamic trunking protocol: turn off if rogue switch suspected
dropper
wft windows forensic toolkit
fireeye redline: analyse RAM and processes
dropper is malware which installs more malware
masquerade replaces good with bad .exe
dll injection of bad dll
dll sideload bad dll
process hollowing: memory address of process
sigcheck in process explorer
process explorer: compressed in yellow
sysinternals autoruns: what is starting automatically and from where
shouldiblockit.com - check what's running in your RAM
sysinternals du disk usage tool
USB 'class' of device - can be faked
sysinternals accesschk for unauthorised privileges
sysinternals accessenum will enumerate access
pfs perfect forward secrecy
vlan double tag used to access second vlan
RAT
nc NETCAT opens remote shell
cryptcat opens remote encrypted shell session
ads alternative data streams hides data within them
ads query with powershell or ADSSpy
buffer overflow attack runs code from RAM
buffer overflow mitigate with input validation
nist 800-88 sanitise
zones in network separated with acl
bastion host is dmz proxy
jump box on dmz
martian packet destined for private range
bogon is unallocated range on internet (none left now)
mac flood
mac limit
pnac = port based NAC control using 802.1x
supplicant requests access
authenticator on switch
EAPoL EAP over LAN uses certificate
remediation quarantines then fix
pre-admission
post-admission
NAC uses time date location roles and rules
NAC context based also uses other factors
radius uses UDP
tacacs+ uses TCP and fully encrypted
SAML used for SSO 
OpenID Google
OpenAuth
Hacker typer net
Fake hacker video q
[BUILTWITH.COM](http://builtwith.com/)
DNSDUMPSTER
[CRT.SH](http://crt.sh/)
PEN TEST TOOLS
Chasers Trojan Horse Video
[Phaser.io](http://phaser.io/)
RBL re2sal time blocklist
Graeme Batsman [Datasecurityexpert.co.uk](http://datasecurityexpert.co.uk/)
Certificate validation
domain validation
organisational validation eg Nat West
external validation eg RBS
[decode.fr](http://decode.fr/)
spam mimic (lab : treat as CSV file)
audacity frequency spectrograph

Encryption in Windows : make copy of a file and encrypt the copy then delete the original
[https://research.checkpoint.com/](https://research.checkpoint.com/)
Krebs on Security blog [https://krebsonsecurity.com/](https://krebsonsecurity.com/)[TroyHunt.com](http://troyhunt.com/) [https://www.troyhunt.com/](https://www.troyhunt.com/) Weekly Video Blog
Schneier on security [https://www.schneier.com/](https://www.schneier.com/)[https://struts.apache.org/](https://struts.apache.org/)
CPU attack : Meltdown
Meltdown, the attempt to perform an illegal read of kernel memory triggers the page fault mechanism (by which the processor and operating system cooperate to determine which bit of physical memory a memory access corresponds to, or they crash the program if there's no such mapping)
CPU attack : Foreshadow
speculative execution attacks (such as Meltdown and Spectre),
Chasers Trojan Horse Video
Heartbleed : can lie about the length of your packet so the response can pull down data from RAM by you falsely inflating the expected size of your request
heartbleed set RHOSTS NOT RHOST
Story : BMW 2-stage hack 1) Break in and disable alarm 2) Steal car [https://mrooding.me/a-dutch-first-ingenious-bmw-theft-attempt-5f7f49a96ec8](https://mrooding.me/a-dutch-first-ingenious-bmw-theft-attempt-5f7f49a96ec8)
Cookie discussion [https://wholeftopenthecookiejar.eu/static/tpc-paper.pdf](https://wholeftopenthecookiejar.eu/static/tpc-paper.pdf)[OGUsers.com](http://ogusers.com/)
Dbi. Dynamic code analysis
Furby connect




Story : Stuxnet
[haveibeenpwned.com](http://haveibeenpwned.com/)
ADS Alternate Data Stream : can 'fork' a file into 2 parts and use this to effectively embed one file into another one
TTP Tactics Techniques Procedures
Exfiltrate
Heartbleed
Payload
Actor
Vector
APT
Discovery Scan
Vulnerability Scan
C2 command control
APT
Penetration Test : Red vs Blue
Reconaissance : Passive & Active
Weaponisation
Installation
Command and control
Exfiltration
Removal
point weak password. No logging etc
Stories : Premium phone number hack : default voicemail PIN is last 4 digits of phone number

Metasploit
CVE
Aircrack
Bash Bunny
[webkay.robinlinus.com](http://webkay.robinlinus.com/) Browser Fingerprinting
[vk.com](http://vk.com/)
truecaller
DragonFly/Havex
BlackEnergy
Industroyer/CrashOverride
Triton
Raspberry PI Modbus
Rubber Ducky : USB command injection etc
PLCpwn
TurnipSchool
Countdown to Zero Day by kim zetter
Comodo free email cert
Pgp email cert
Ev external validation
wozniac - phone hacker before apple
cve [details.com](http://details.com/)
BLIND : ATTACKER GIVEN NO KNOWLEDGE AND DEFENDERS AWARE
DOUBLE BLIND : ATTACKER NO KNOWLEDGE AND DEFENDERS NOT AWARE OF IMPENDING ATTACK
TARGETED : SPECIFIC AREA TARGETED

Threat
Source = instigator
Actor = hacker
Vector = sequence of steps
Threat
Online
Moved online


Vulnerability : weakness
Exploit : tool to attack a weakness
CVE
[cve.mitre.org](http://cve.mitre.org/)
Black Hat
[https://www.blackhat.com/us-18/](https://www.blackhat.com/us-18/)

DEFCON Defense Readiness Condition
5 = no alert
3 = 15 min air strike call
1 = ready for anything
CVE BLOG
@CVENEW ON TWITTER

[EXPLOIT-DB.COM](http://exploit-db.com/)[https://www.exploit-db.com/](https://www.exploit-db.com/)
This database has clear, up to date list of exploits on a daily basis

5 minutes There is a battle raging video

Targeted Cyber Attack Reality - Don't be a Victim - Trend Micro

APT
Backdoor
Exfiltrate
Steganography
ADS (hide within another file)
Ephemeral temp port
Scan
Host
ICMP noisy
ARP quiet
Port
Enumerate : OS
Vulnerability
Services
TCP syn
SYN : first part only (can try if ICMP is blocked)
the –sV –O --script
Vulnerability Scan
NIST National Institute for Standards and Technology
NVD National Vulnerability Database
[https://nvd.nist.gov/](https://nvd.nist.gov/)
CVE common vulns
NVT network vuln tests : scan for NVD and CVE known vulns
OVAL also is web exploits
Merterpreter
Payload to inject onto remote system for purpose of running commands, showing screnshots etc
Commands
Keystrokes
Screenshots
NETSPARKER SCAN
[https://github.com/danielmiessler/SecLists](https://github.com/danielmiessler/SecLists)[https://www.owasp.org/index.php/OWASP_Internet_of_Things_Project](https://www.owasp.org/index.php/OWASP_Internet_of_Things_Project)
Jexboss [https://github.com/joaomatosf/jexboss/](https://github.com/joaomatosf/jexboss/)
Mimikatz
Pass The Hash attacks
[https://blog.stealthbits.com/passing-the-hash-with-mimikatz](https://blog.stealthbits.com/passing-the-hash-with-mimikatz)[https://www.google.co.uk/search?q=mimikatz&source=lnms&tbm=isch&sa=X&sqi=2&ved=0ahUKEwjsjcO37frcAhXLCsAKHdE0AoQQ_AUIDCgD&biw=1440&bih=736#imgrc=6Ne7eCi1zdW3zM:](https://www.google.co.uk/search?q=mimikatz&source=lnms&tbm=isch&sa=X&sqi=2&ved=0ahUKEwjsjcO37frcAhXLCsAKHdE0AoQQ_AUIDCgD&biw=1440&bih=736#imgrc=6Ne7eCi1zdW3zM:)
File signatures
[https://filesignatures.net/index.php?page=all](https://filesignatures.net/index.php?page=all)
Base64
[https://www.base64encode.org/](https://www.base64encode.org/)[https://en.wikipedia.org/wiki/Base64](https://en.wikipedia.org/wiki/Base64)
Steganography
[http://stylesuxx.github.io/steganography/](http://stylesuxx.github.io/steganography/)
Network Analyzer App
[https://techet.net/netanalyzer/](https://techet.net/netanalyzer/)
Google Hacking Master List
[https://it.toolbox.com/blogs/rmorril/google-hacking-master-list-111408](https://it.toolbox.com/blogs/rmorril/google-hacking-master-list-111408)
SliDo Q&A quiz master software
[https://www.sli.do/](https://www.sli.do/)
Have I been hacked?
[https://haveibeenpwned.com/](https://haveibeenpwned.com/)
Insecam
[http://www.insecam.org/en/bytype/DLink/?page=2](http://www.insecam.org/en/bytype/DLink/?page=2)
HackTheBox : Pen Testing Lab Games
[https://www.hackthebox.eu/](https://www.hackthebox.eu/)
Blog on cybersecurity
[https://contextis.com/BLOG](https://contextis.com/BLOG)
Browser Fingerprint Across The Web
[https://panopticlick.eff.org/results?&dnt=111&t=111&a=111#fingerprintTable](https://panopticlick.eff.org/results?&dnt=111&t=111&a=111#fingerprintTable)
Data Breaches 2018
[https://www.itgovernance.co.uk/blog/list-of-data-breaches-and-cyber-attacks-in-june-2018-145942680-records-leaked/](https://www.itgovernance.co.uk/blog/list-of-data-breaches-and-cyber-attacks-in-june-2018-145942680-records-leaked/)

Hacker News
Hacker News [news.ycombinator.com](http://news.ycombinator.com/)

Pen Test Cyber Hacking Labs
Golden Ticket Pen Test Lab [https://pentestlab.blog/2018/04/09/golden-ticket/](https://pentestlab.blog/2018/04/09/golden-ticket/)





### Stuxnet : Countdown To ZeroDay Book
Kim Zetter : Stuxnet was US and Israel.
https://www.powershellempire.com
Bandook v1.1 By Princeali    
https://hackerspassion.wordpress.com/category/downloads
Flame
Operation Olympic Games
Mydoom
Shamoon
Melissa
Zeroaccess rootkit
Aircrack-ng wireless
APT Advanced Persistent Threat : stronghold from which bad guys launch other software
ArcSight by HP : security suite
SIEM = general term = Security Info and Event Mgt. COLLECT AND ANALYSE DATA
Syslog = COLLECT DATA ONLY
Autopsy = front end for Sleuth : disk imaging and file analysis
Beaconing : phoning home
Birthday Attack = 2 files, same hash
Black hole = drop all traffic
Blind FTP : no file or folder listing provided
Blue team : defensive team in simulation role play
Bluejack : hijack (virus) over bluetooth
Snarf : steal data
Bluesnarf : steal data
Bro = LINUX IDS
Cacti = open source logs with graphs
CAN Controller Area network : between small PLC Programmable Logic Controllers
CAPTCHA
CAR Corrective Action Report : steps to take to fix vulnerability
Cellebrite : get data out of mobile phones for criminal investigation
UFED : get data from mobile phones : Universal Forensic Extraction Device
Check Point : firewall
CIS Center for Internet Security : partly by SANS
SANS : Sysadmin, Audit, Networking, Security : not-for-profit
CISO Chief Info Security Officer
COBIT : Control Objectives for IT : security framework
CSIRT Computer Security Incident Response Team
CVE Common Vulnerabilities and Exposures
DIG = NSLOOKUP
Tasting = try domain to see if it gets hits
Cybersquatting = buying someone else's domain name
Hijacking = using someone else's domain name (or similar)
EMET Enhanced Mitigation Experience Toolkit : requires 3rd party processes to run with NX (No-Execute) and DEP Data
NX No Execute - separates area of memory holding 1) CPU instructions 2) data. Main use is to ensure that data which EXECUTES is ONLY EXECUTING FROM THE RIGHT AREA OF MEMORY IE NOT THE 'DATA' PART. This helps to thwart BUFFER OVERFLOW ATTACK
DEP Data Execution Prevention - prevents code from RUNNING FROM DATA AREA OF RAM
EnCase Forensic : Case Management
Flood Guard : prevent DDoS
Latent = hidden (evidence, has to be drawn out using techniques)
FTK Forensic Tool Kit
Fuzzing - generate random testing data
Google Hacking : detailed google search to discover otherwise hidden data about your potential targets
Helix : Linux Live CD
Heuristic : live active searching for patterns in viruses
Imperva : WAF Web Application Firewall : data center security
MITM
Interception Proxy = MITM : Receives all the requests and the responses before passing them on
Jump Box = in DMZ, provides access to admin consoles of other machines in DMZ
escrow = 3rd party trust
M of N = M keyholders must be present to unlock N keys
Kill Chain - stages of attack
Kiwi Syslog = central log management
Metasploit = exploit framework = launch modular attacks from this; each module attacks one particular CVE
CVE Common Vulnerabilities and Exposures
MoA : Memorandum Of Agreement : informal agreement for 2 parties to work together : forms basis of legal contract
ModSecurity = open source WAF
MoU : Memorandum Of Understanding : preliminary expression of wish to work together
MRTG Multi Router Traffic Grapher - monitors load on network links
Nagios = open source stats on services
NAPT = NAT
NAXSI = nginX Anti XSS and SQL Injection
Nessus = commercial vulnerability scanner
Netflow = Cisco IP traffic flow diagramming tool
NetScout = commercial enterprise-level network service assurance products
Nexpose = vulnerability scanner (Metasploit)
Nikto = web server vulnerability scanner
NIST National Institute Standards Technology
OODA Observe, Orient, Decide, Act for quick thinking and decision making under attack
OS Fingerprint = identify OS
OSSIM Open Source Security Info Mgt
OVAL Online Vulnerability and Assessment Language
OWASP Open Web App Security Project
PAC Proxy Auto Config : can also be used maliciously to redirect users to fake proxy sites
Palo Alto IDS
Password cracker eg John the Ripper / Cain and Abel
PCI DSS Payment Card Industry Data Security Standard
PHI Personal Health Info
PII
Privilege Escalation
QRadar = SIEM from IBM : logs, analysis and policies
Qualys = cloud based vulnerability management (agents run on clients)
RPO Recovery point objective : time to last backup (represents data you can lose if there is a disaster)
RTO Recovery time objective : planned uptime after disaster
S/MIME encrypts email
SABSA Sherwood Applied Business Security Architecture
SANS SysAdmin, Network, Security
SCADA = manage industrial systems
SCEP Simple Certificate Enrolment Protocol
SCP Secure Copy Protection
SEH Structured Exception Handler : handles exception
SIEM Security Info and Event Mgt = collect and analyse data
SMTP Open Relay : can be used by spammers to send email
Snort : Open Source NIDS
SourceFire IDS owned by Cisco
Splunk : big data gather and analyse
taskkill
tasklist
tcpdump : command line packet sniffer
TOGAF The Open Group Architecture Framework
Trusted Foundry : full chain of hardware suppliers can be verified to be security vetted (so not inserting any spying or other malware in the very hardware)
UAT User Acceptance Testing
UEFI
UNC
VAS Vulnerability Assessment
White Team : admin in a simulated conflict
Write Blocker : prevent the forensic analysis software from interfering with the data on a drive
Xmas Attack : Scanning but with unusual settings to ON for certain packet flags to try and provoke certain responses from the device being scanned, to reveal information
XSRF : Authenticated session attack from one site to another
XSS Cross Site Scripting : script injected into trusted site to compromise clients running on trusted site
Zero day attack : new software
Ports
LDAP SECURE WITH SSL 636
RADIUS 1812/3 OR 1645/6
TACACS+ port 49
LDP 389
LDAPS 636

ADS Alternate Data Streams - originally conceived as a way to use Forking in the same way as the MAC OS, Windows permits basically embedding one file into another without having traditional methods detect that a file has been embedded. Also when the embedded file is run, the process shows only of the host running so there is no way of knowing which is the real and which is the embedded process at work. Only way of detecting and defeating is by HASHING the files and also by using dedicated ADS trackers.

For instance: the command

"type c:\anyfile.exe > c:\winnt\system32\calc.exe:anyfile.exe"

will fork the common windows calculator program with an ADS "anyfile.exe."

ADS can be queried using powershell get-object abc.txt -stream

File Fork - split up files into multiple parts, but the OS treats them as one file and will track the position of each relative part of the file. Also can be looked on as data sets hidden inside one file.

TTP Tactics, Techniques and Procedures (used by hackers)

SIEM = general term = Security Info and Event Mgt

Exfiltration = copy data out of system

OpenSSL Heartbleed is a vulnerability

EXPLOIT MODULE = TRY AND EXPLOIT A VULNERABILITY

PAYLOAD = WHAT YOU DOWNLOAD TO A MACHINE THAT YOU FIND A VULNERABILITY ON

Discovery scanner eg Nmap : host/ip/port

Vulnerability scanner eg OpenVAS, Nessus, Nexpose

Exploit framework eg metasploit : launches specific attacks against specific known vulnerabilities

Banner Grabbing - getting info from welcome and login screens and http header info

Lua is a very fast scripting language

Footprint = Topology Discovery = FIND ALL HOST/IP ON NETWORK

Fingerprint = work out which software is running, and which version
is running, by using non-admin tools to query

Burner phone is a prepaid phone that is used and then binned
BurnerApp permits a temporary phone number to be created so that people don't know your real number. Can be disposed of instantly.

Pivot Point - point of weakness or access

[httrack.com](http://httrack.com/) - download full site to local; ensures all paths work locally

Droplet is a mini-virtual-private-server running on DigitalOcean hosting; set one up in a minute! Price $5 a month upwards.

SSL3.0 is no longer deemed to be secure (Minimum TLS1.1 required)
TLS1.1 and 1.2 are deemed secure
POODLE is vulnerability in SSL3.0


bulletproof ISP - no questions asked!!!
Google hacking - expert use of Google to find information
Google Dork - advanced google search string
Website Ripping = website copier
C2 = Command and Control = rogue control servers (located in enemy territory)
PIVOT POINT = POINT OF ACCESS (part which is being attacked)
APT Advanced Persistent Threat : INSTALL ONGOING TOOLS WHICH REMAIN
CSA+ control classes
CoA matrix
Pen test teams : Red Blue White
Pen testing SIX RULES OF ENGAGEMENT
CVSS Common vulnerability scoring system - indicates how severe a vulnerability is




# Cyber Glossary

Put Into Handouts

### Credential Stuffing

Credential stuffing is the technique of using compromised credentials 
(i.e. usernames and passwords) to try and access other websites

### Crimeware - General Tools

Crimeware : scan internet for vulernabilities

### net user

net user /domain - info about users in the domain

### net groups

net groups domainadmins - info about domain admins etc

net groups domaincontrollers /domain - information about groups in the domain

### shares

Shares - provide useful information

### sharepoint

Sharepoint - can be used to glean information about the network

### Targeted Attack And Tools

With a specific target in mind

### wireshark

wireshark : used to glean hardware and hostnames

### Targeted Spray

### Sysvol

Sysvol : Copy all data from it eg scripts, users, usernames, hostnames, group policies, groups

powershell empire

evil jinks : phishing platform

### Wordscrape - go through whole intranet

### Dark Web

Alpha bay dark market
TOR + VPN 
.onion sites are on the dark web

Pirate Bay gone offline and gone onto Dark Web at http://uj3wazyk5u4hnvtk.onion/

### Aircrack-ng

wireless APT Advanced Persistent Threat : stronghold from which bad guys launch other software ArcSight by HP : security suite SIEM = general term = Security Info and Event Mgt. COLLECT AND ANALYSE DATA Syslog = COLLECT DATA ONLY Autopsy = front end for Sleuth : disk imaging and file analysis

### Beaconing : phoning home

### Birthday Attack
 = 2 files, same hash Black hole = drop all traffic 
 
 ### Blind FTP
 
 no file or folder listing provided 
 
 ### Blue team : defensive 
 
 defensive team in simulation role play 
 
 ### Bluejack
 
 hijack (virus) over bluetooth 
 
 ### Snarf : steal data 
 
 ### Bluesnarf : steal data 
 
 ### Bro = LINUX IDS 
 
 ### Cacti logs
 
 open source logs with graphs 
 
 ### CAN Controller Area network
 
 ### PLC Programmable Logic Controllers 
 
 ### CAPTCHA 
 
 ### CAR Corrective Action Report
 
 fix vulnerability 
 
 ### Cellebrite : extract mobile data
 
 ### UFED - Extract data off mobiles
 
 Universal Forensic Extraction Device
 
 ### Check Point : firewall 
 
 ### CIS Center for Internet Security
 
 by SANS 
 
 ### SANS : Sysadmin, Audit, Networking, Security
 
 not-for-profit 
 
 ### CISO Chief Info Security Officer 
 
 ### COBIT : Control Objectives for IT
 
 security framework 
 
 ### CSIRT 
 
 Computer Security Incident Response Team 
 
 ### CVE Common Vulnerabilities and Exposures 
 
 ### DIG = NSLOOKUP 
 
 ### Tasting = try domain to see if it gets hits 
 
 ### Cybersquatting
 
 buying someone else’s domain name 
 
 ### Hijacking
 
 using someone else’s domain name (or similar) 
 
 ### EMET 
 
 Enhanced Mitigation Experience Toolkit
 
 requires 3rd party processes to run with NX (No-Execute) and DEP Data 
 
 ### NX No Execute
 
 separates area of memory holding 1) CPU instructions 2) data. Main use is to ensure that data which EXECUTES is ONLY EXECUTING FROM THE RIGHT AREA OF MEMORY IE NOT THE ‘DATA’ PART. This helps to thwart BUFFER OVERFLOW ATTACK 
 
 ### DEP Data Execution Prevention
 
 prevents code from RUNNING FROM DATA AREA OF RAM 
 
 ### EnCase Forensic : Case Management 
 
 ### Flood Guard : prevent DDoS 
 
 ### Latent = hidden 
 
 evidence, has to be drawn out using techniques
 
 ### FTK Forensic Tool Kit 
 
 ### Fuzzing
 
 generate random testing data 
 
 ### Google Hacking
 
 detailed google search to discover otherwise hidden data about your potential targets 
 
 ### Helix : Linux Live CD 
 
 ### Heuristic
 
 live active searching for patterns in viruses 
 
 ### Imperva : WAF 
 
 Web Application Firewall
 
 data center security 
 
 ### MITM Interception Proxy
 
 MITM : Receives all the requests and the responses before passing them on 
 
 ### Jump Box
 
 in DMZ, provides access to admin consoles of other machines in DMZ 
 
 ### escrow = 3rd party trust 
 
 ### M of N
 
 M keyholders must be present to unlock N keys 
 
 ### Kill Chain
 
 stages of attack 
 
 ### Kiwi Syslog
 
 central log management 
 
 ### Metasploit
 
 exploit framework
 
 launch modular attacks from this; each module attacks one particular CVE 

 ### CVE Common Vulnerabilities and Exposures 
 
 ### MoA : Memorandum Of Agreement
 
 informal agreement for 2 parties to work together : forms basis of legal contract 
 
 ### ModSecurity = open source WAF 
 
 ### MRTG Multi Router Traffic Grapher
 
 monitors load on network links 
 
 ### Nagios = open source stats on services 
 
 ### NAPT = NAT 
 
 ### NAXSI = nginX Anti XSS and SQL Injection 
 
 ### Nessus vulnerability scanner
 
 ### Netflow

 Cisco IP traffic flow diagramming tool 
 
 ### NetScout
 
 commercial enterprise-level network service assurance products 
 
 ### Nexpose vulnerability scan
 
 vulnerability scanner (Metasploit) 
 
 ### Nikto - web server vulnerability

 web server vulnerability scanner 
 
 ### NIST 
 
 National Institute Standards Technology 
 
 ### Nmap network mapper
 
 ### OODA Observe, Orient, Decide, Act 
 
 for quick thinking and decision making under attack 
 
 ### OS Fingerprint = identify OS 
 
 ### OSINT Open Source Intelligence 
 
 ### OSSIM Open Source Security Info Mgt 
 
 ### OVAL language
 
 Online Vulnerability and Assessment Language 
 
 ### OWASP Open Web App Security Project 
 
 ### PAC Proxy Auto Config
 
 can also be used maliciously to redirect users to fake proxy sites 
 
 ### Palo Alto IDS 
 
 ### Password cracker 
 
 eg John the Ripper / Cain and Abel 
 
 ### PCI DSS 
 
 Payment Card Industry Data Security Standard 
 
 ### PHI Personal Health Info 
 
 ### PII 
 
 ### Privilege Escalation 
 
 ### QRadar = SIEM from IBM
 
 logs, analysis and policies 
 
 ### Qualys cloud vulnerability

 cloud based vulnerability management 
 
 agents run on clients
 
 ### RPO Recovery point objective
 
 time to last backup (represents data you can lose if there is a disaster) 
 
 ### RTO Recovery time objective
 
 planned uptime after disaster S/MIME encrypts email 
 
 ### SABSA 
 
 Sherwood Applied Business Security Architecture 
 
 ### SANS SysAdmin, Network, Security 
 
 ### SCADA
 
 manage industrial systems 
 
 ### SCAP baseline audit

 Security Content Automation Protocol
 
 does computer meet baseline security standards 
 
 ### SCEP Certificate Enrolment

 Simple Certificate Enrolment Protocol 
 
 ### SCP send files
 
 Secure Copy Protection 
 
 ### SEH exception handler
 
 Structured Exception Handler
 
 ### SIEM Security Info and Event Mgt
 
 collect and analyse data 
 
 ### SMTP Open Relay
 
 can be used by spammers to send email 
 
 ### Snort : Open Source NIDS 
 
 ### SourceFire IDS owned by Cisco 
 
 ### Splunk : big data gather and analyse 
 
 ### taskkill 
 
 ### tasklist 
 
 ### tcpdump : command line packet sniffer 
 
 ### TOGAF The Open Group Architecture Framework 
 
 ### Trusted Foundry - supply chain vetting
 
 full hardware supply chain of vendors all vetted as secure

 ### UAT User Acceptance Testing 
 
 ### UEFI UNC 
 
 ### VAS Vulnerability Assessment 
 
 ### White Team : admin 
 
 in a simulated conflict 
 
 ### Write Blocker
 
 prevent the forensic analysis software from interfering with the data on a drive 
 
 ### Xmas Attack : Scanning with flags set to ON 
 
 to provoke a response
 
 ### XSRF : Authenticated session attack 
 
 from one site to another 
 
 ### XSS Cross Site Scripting
 
 script injected into trusted site 
 
 ### Zero day attack : new software 
 


 ### Ports 
 
 #### LDAP SECURE WITH SSL 636 
 #### RADIUS 1812/3 OR 1645/6 
 #### TACACS+ port 49 
 #### LDP 389 
 #### LDAPS 636

### ADS Alternate Data Streams

embed one file into another 

(Windows version of MACOS Forking)

originally conceived as a way to use Forking in the same way as the MAC OS, Windows permits basically embedding one file into another without having traditional methods detect that a file has been embedded. Also when the embedded file is run, the process shows only of the host running so there is no way of knowing which is the real and which is the embedded process at work. Only way of detecting and defeating is by HASHING the files and also by using dedicated ADS trackers.

For instance: the command

“type c:.exe > c:32.exe:anyfile.exe”

will fork the common windows calculator program with an ADS “anyfile.exe.”

ADS can be queried using powershell get-object abc.txt -stream

File Fork - split up files into multiple parts, but the OS treats them as one file and will track the position of each relative part of the file. Also can be looked on as data sets hidden inside one file.

### TTP Tactics, Techniques and Procedures

### SIEM Security Info and Event Mgt

### Exfiltration = data out

### Exploits

#### Flame 

#### Operation Olympic Games 

#### Mydoom 

#### Shamoon 

#### Melissa 

#### Zeroaccess rootkit

#### Heartbleed vulnerability

### OpenSSL 

### EXPLOIT MODULE

EXPLOIT VULNERABILITY

### PAYLOAD 

DELIVERED BY EXPLOIT MODULE

CODE DOWNLOADED BY EXPLOIT

WHAT YOU DOWNLOAD TO A MACHINE THAT YOU FIND A VULNERABILITY ON

### Discovery scanner Nmap

host/ip/port

### Vulnerability scanner 

OpenVAS, Nessus, Nexpose

### Exploit framework - launch attacks

eg metasploit : launches specific attacks against specific known vulnerabilities

### Banner Grabbing

get info from headers

getting info from welcome and login screens and http header info

### Lua scripting language

### Footprint

#### Network topology discovery

FIND ALL HOST/IP ON NETWORK

### Fingerprint

identify systems digitally

software version = work out which software is running, and which version is running, by using non-admin tools to query

active - send packets

passive - analyse packet traffic

tools - nmap, ettercap, p0f, fpdns, hassh

#### fpdns does DNS fingerprinting

#### hassh does SSH fingerprinting

#### ja3 does SSL fingerprinting

### Burner phone 

is a prepaid phone that is used and then binned BurnerApp permits a temporary phone number to be created so that people don’t know your real number. Can be disposed of instantly.

### Pivot Point of entry

point of weakness or access

### httrack.com - website download

download full site to local; ensures all paths work locally

### Droplet - mini vm

is a mini-virtual-private-server running on DigitalOcean hosting; set one up in a minute! Price $5 a month upwards.

### SSL3.0 old

is no longer deemed to be secure (Minimum TLS1.1 required) TLS1.1 and 1.2 are deemed secure POODLE is vulnerability in SSL3.0

### Passive reconnaisance

uses OSINT 

### bulletproof ISP

no questions asked

### Google hacking

expert use of Google to find information 

### Google Dork

advanced google search string Website 

### Ripping = website copier

### C2 = Command and Control

rogue control servers (located in enemy territory)

### PIVOT POINT = HACKER POINT OF ACCESS 

(part which is being attacked)

### APT Advanced Persistent Threat

ONGOING TOOLS 

Ongoing hacker tools remain on target device

### Pen test 6 RULES OF ENGAGEMENT

### CVSS 

Common vulnerability scoring system

vulnerability severity

### WIFI pineapple  WIFI attack
		$200 
### bash bunny  	USB attack
  		$100
### lan turtle  	LAN attack
  		$60

### Dark Web Scanning

https://www.echosec.net/

https://www.echosec.net/darknet

https://www.echosec.net/open-source-threat-intelligence#software


### Hacking Techniques

War Driving [https://wigle.net/](https://wigle.net/)

Targeted Spray

### Packet Analyzer

TCPDump.org


### Password Crackers
Caine
Encase
Autopsy
FTKImager
Jailbroken



### Hosting
Digital Ocean
Droplet



### Hacker Tools
HTran : Bridge between networks
Mimikatz : Extract hashes from Windows memory
CDR Call Details Records : originating phone number, destination phone number, length of call, text messages sent
APT Advanced Persistent Threat
APT10 is Chinese cyber
Operation SoftCell : attacking phone records of people



### Hashing
shasum -a 512 myfile.txt  on MAC	
To find the hash of a string in LINUX type

echo -n 'phil' | shasum 
echo -n "yourstring" |md5sum
echo -n "yourstring" |sha1sum
echo -n "yourstring" |sha256sum
Get-FileHash -Algorithm SHA512 	
CHAP compares HASHes at each end	



### Offensive Tools
JRAT takes control
Mimikatz reads usernames and hashes from RAM of a Windows PC
wireshark - glean hostnames, IP
responder - responds to DNS broadcasts and tricks computers into revealing NTLMv2 Hash
hashcat brute force hash cracker
wordscrape the internet












### Certs

CEH Certified Ethical Hacker
EC Electronic Commerce
CISSP Certified Info Systems Security Practitioner
ISC2 Internation Info Systems Security Certification Consortium
CASP CompTIA advanced security practitioner
CISA Auditor
CISM Manager











### Cloud Random
Puppet : define, enforce, maintain and report on System Configuration. Use Version Control. Can even use for scripting etc. Policy enforcement. Agentless
Chef
Docker
Containers
Conjur : secrets management eg in Puppet
Ansible = simpler version of Puppet : enforce server configuration
Cloud foundry = containers. Installed over Docker. Use to build and deploy apps quickly. Pivotal cloud foundry also.
Orchestration : manage containers
Kubernetes : deploy, manage, group containers, allocate IP per group etc, roll out and roll back changes
GKE Google Kubernetes Engine on Google Cloud : deploy containers
Google Stackdriver : monitoring and logging with alerts, uptime etc
Programmable infrastructure
AWS Cloud Formation : text based configuration of all apps
Threats
Insider threats
Compliance
Cloud Migration
Cyber Protection
Containers
Micro Services
DevOps
Enterprise mobility
Threat Detection
Check Point
FireEye
Palo Alto


















































# Cyber Labs

## Cyber Labs Online

[TryHackMe](https://tryhackme.com)

Juice Shop online  https://owasp.org/www-project-juice-shop/

CTF Capture The Flag online

Exploit-db.com

https://ctf.learncloudsec.net/index.php

cybersecuritychallenge.co.uk

https://www.hackthebox.eu/ 

https://www.root-me.org/

https://0xrick.github.io/c/categories/#Hack-The-Box

Peekyou.com 

pipl.com 

carrot2.org

https://google-gruyere.appspot.com/




### TryHackMe

#### Getting Started

https://tryhackme.com/my-machine



#### RDP  root Tryh4ckm3

#### BurpSuite

#### Vulnversity

https://tryhackme.com/room/vulnversity

```
nmap -sV 
# scan all ports
nmap -p- 
# scan first 400 ports
nmap -p-400  
# os and version *** use this one!
nmap -A 
# lots of info but not as much as A
nmap -sC
# verbose but not as good as A 
nmap -v  
# scan UDP (no response)
nmap -sU
# scan TCP SYN
nmap -sS
# don't resolve dns
nmap -n 1.2.3.4
# gobuster to brute force attack directories on a web server
sudo apt install gobuster
# find word lists
cd /usr/share/wordlists/dirbuster
# run gobuster
gobuster dir -u http://10.10.196.4:3333 -w directory-list-2.3-medium.txt

```










## Cyber Labs on AWS




### AWS Linux Virtual Machine

#### Build

1. New Instance
2. T2 Large

#### Connect

1. Save the key in .ssh hidden folder in the user profile

2. Change permissions on file to read only
     a) Disable inheritance
     b) Remove excess users
     c) Set admin to read only
 
2. Connect using
      
```bash
ssh -i ~/.ssh/AWSLinuxKeyPair.pem ec2-user@34.242.114.92
```




### AWS Linux Install Apache

Add in User Data secion of startup script

```bash
#!/bin/bash
yum update -y
amazon-linux-extras install -y lamp-mariadb10.2-php7.2 php7.2
yum install -y httpd mariadb-server
systemctl start httpd
systemctl enable httpd
usermod -a -G apache ec2-user
chown -R ec2-user:apache /var/www
chmod 2775 /var/www
find /var/www -type d -exec chmod 2775 {} \;
find /var/www -type f -exec chmod 0664 {} \;
echo "<?php phpinfo(); ?>" > /var/www/html/phpinfo.php
```

Unblock port 80 using EC2 > Security Groups > <<Group>> > Change rule and add port 80

Go to <<Public IP>> and you should now have a web server!!!


### AWS Linux Install Mongo

```bash
# check which version of linux we are using
grep ^NAME  /etc/*release
# install mongo
sudo yum install -y mongodb-org
# check which version we are using
ps --no-headers -o comm 1
# start
sudo systemctl start mongod
# client
mongo
```




### AWS Kali Linux with VNC GUI

Find `Kali` on AWS store, run and install T2 Large 

Check the release version

```bash
# connect
ssh -i ~/.ssh/KaliLinuxKeyPair.pem ec2-user@35.176.24.73
# version
cat /etc/os-release
# run nmap
nmap
# run metasploit
msfconsole
# set password
sudo passwd ec2-user 
sudo passwd kali
# run postgresql
sudo service postgresql start
# tightvnc
tightvncpasswd 
# view only password => NO
# exit aws vm and return to local powershell
exit
# connect via vnc port
ssh -L 5901:localhost:5901 -i ~/.ssh/KaliLinuxKeyPair.pem ec2-user@35.176.24.73
# run vnc server
vncserver
# download vnc viewer from https://www.realvnc.com/en/connect/download/viewer/linux/
# run vnc viewer
# enter address `locahost:1`
# enter password and connect!
```





## Ubuntu Install MongoDB

```bash
sudo apt install gnupg
wget -qO - https://www.mongodb.org/static/pgp/server-4.2.asc | sudo apt-key add -
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.2.list
sudo apt-get update
sudo apt-get install -y mongodb-org
echo "mongodb-org hold" | sudo dpkg --set-selections
echo "mongodb-org-server hold" | sudo dpkg --set-selections
echo "mongodb-org-shell hold" | sudo dpkg --set-selections
echo "mongodb-org-mongos hold" | sudo dpkg --set-selections
echo "mongodb-org-tools hold" | sudo dpkg --set-selections
ps --no-headers -o comm 1
sudo systemctl start mongod
sudo systemctl status mongod
sudo systemctl enable mongod
# run the client
mongo
```








### Ubuntu Install Docker

```bash
# remove invalid binaries 
sudo apt remove docker docker.io containerd runc  -y
# set up environment  (note : some did not fully work)
sudo apt install apt-transport-https ca-certificates curl gnupg-agent software-properties-common -y
# key
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
# check key installed
sudo apt-key fingerprint 0EBFCD88
# set up repository
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu bionic test"
sudo apt update
# insall docker 
sudo apt install docker-ce docker-ce-cli  containerd.io -y
# run docker
docker
```







## Docker Pull Metasploitable

```
docker pull peakkk/metasploitable
# or
docker pull tleemcjr/metasploitable2
```


## Docker Metasploitable From GitHub





























## Kali

### Kali Handbook

https://kali.training/downloads/Kali-Linux-Revealed-1st-edition.pdf

### About Kali

Create from a conglomeration of offensive security tools

Built on Debian

### Installing Kali

Linux “HOST” Minimal Memory Requirements
  Realistically 2 GB or more
Kali “GUEST” Minimal Memory Requirements
  2gb plus swap 2GB
Metasploitable “GUEST” Minimal Memory Requirements
  512MB













### Kali OpenVAS Install on AWS Linux

```bash
# check update sources are valid
#//sudo nano /etc/apt/sources.list  
#//deb http://http.kali.org/kali kali-rolling main contrib non-free  
#//deb http://http.kali.org/kali sana main non-free contrib  
#//deb http://security.kali.org/kali-security sana/updates main contrib non-free  
#//deb http://old.kali.org/kali moto main non-free contrib 
# save and close
sudo apt update -y
sudo apt upgrade -y
sudo apt install openvas -y
sudo openvas-setup -y               // lab works fine to here!
# user with 4c9c6ce9-6602-48bc-9212-55d3d0610493
netstat -antp
sudo openvas-start 
# now connect with VNC as other tutorial details
# now open browser to https://localhost:9392
# and log in !
# if you forget your password you can reset it with
sudo openvasmd --user=admin --new-password=admin
```








### Kali Greenbone 11 Install

Install Greenbone11 (GVM11) on Ubuntu

```bash
# postgres
sudo apt install postgresql
# greenbone 11
sudo add-apt-repository ppa:mrazavi/gvm
sudo apt install gvm -y
# set permissions
cd /var/lib/openvas && sudo chmod 777 plugins && cd ~
# update sync
greenbone-nvt-sync && sudo greenbone-scapdata-sync && sudo greenbone-certdata-sync
curl
You can access the Greenbone Security Assistant web interface at:

https://localhost:4000

The default username/password is as follows:

Username: admin
Password: admin

You can check the status of greenbone daemons with systemctl:

systemctl status ospd-openvas # scanner
systemctl status gvmd # manager
systemctl status gsad # web ui


# the http web page does not work as it was ubuntu server I installed - maybe I should have chosen the client!
sudo apt-get install tasksel -y 
//sudo apt-get install slim -y 
sudo apt-get install lightdm -y

cd /etc/apt
nano sources.list
# alt-shift-t and delete contents of file
# replace with
deb http://archive.ubuntu.com/ubuntu/ bionic main restricted
deb http://archive.ubuntu.com/ubuntu/ bionic-updates main restricted
deb http://archive.ubuntu.com/ubuntu/ bionic universe
deb http://archive.ubuntu.com/ubuntu/ bionic-updates universe
deb http://archive.ubuntu.com/ubuntu/ bionic multiverse
deb http://archive.ubuntu.com/ubuntu/ bionic-updates multiverse
deb http://archive.ubuntu.com/ubuntu/ bionic-backports main restricted universe multiverse
deb http://security.ubuntu.com/ubuntu bionic-security main restricted
deb http://security.ubuntu.com/ubuntu bionic-security universe
deb http://security.ubuntu.com/ubuntu bionic-security multiverse


sudo apt-get install kde-plasma-desktop

tasksel
```




### Kali From Docker

https://github.com/admirito/gvm-containers




### AWS Container

First thing is to get a container running on AWS

Using the `Elastic Container Registry`

or

`aws fargate`















## Metasploit

### What is Metasploit?

It is a collection of exploits

It is written in Ruby

It is also customisable

It is used as an auditing tool to verify the security of an environment with vulnerability testing

https://www.offensive-security.com/metasploit-unleashed/introduction/

https://metasploit.com/

https://github.com/rapid7

https://www.offensive-security.com/metasploit-unleashed/

Running Metasploit with `MSFConsole`

       adding -x runs the old MSFCli commands
    
       msfconsole -x "use exploit/multi/samba/usermap_script;\

Running Metasploit with `MSFCli`  (may have been removed)


Getting Help

       If you aren’t entirely sure about what options belong to a particular module, you can append the letter O to the end of the string at whichever point you are stuck.


       msfcli exploit/multi/samba/usermap_script O


MSFConsole Core Commands

       https://www.offensive-security.com/metasploit-unleashed/msfconsole-commands/

back

       goes back!


       ```ruby
       back
       ```

banner

       displays a banner!
    
       ```ruby
       banner
       ```

Check - if an exploit will work here

color - the output








## Metasploitable

### Intentionally vulnerable 

https://sourceforge.net/projects/metasploitable/files/Metasploitable2/

https://metasploit.help.rapid7.com/docs/metasploitable-2-exploitability-guide


Intentionally vulnerable machine

Never expose - keep private


Runs on VMWare Player or VirtualBox

### Windows VMs we can attack

Microsoft has made a number of virtual machines available that can be downloaded to test Microsoft Edge and different versions of Internet Explorer. We will be able to use these VMs when working with some of the exploits and tools available in Metasploit. You can download the VMs from the following URL:

https://developer.microsoft.com/en-us/microsoft-edge/tools/vms/

The password to your VM is "Passw0rd!"

### Metasploitable Setup

Once you have downloaded the Metasploitable VM, extract the zip file, open up the .vmx file using your VMware product of choice, and power it on. After a brief time, the system will be booted and ready for action. The default login and password is msfadmin:msfadmin

#### Data Path

/usr/share/metasploit-framework/data/

#### Documentation Path

/usr/share/metasploit-framework/documentation/

#### Exploit Modules Path

/usr/share/metasploit-framework/modules/

All modules are Ruby classes but payloads execute at runtime and can be of any language ie they will execute on the host system in the target language

  Exploits use a `payload`     /usr/share/metasploit-framework/modules/exploits/

  Auxiliary have scanners      /usr/share/metasploit-framework/modules/auxiliary/

  Payloads have the code which executes remotely  /usr/share/metasploit-framework/modules/payloads/

  Encoders ensure safe delivery of payload        /usr/share/metasploit-framework/modules/encoders/

#### Scripts including Meterpreter Path

/usr/share/metasploit-framework/scripts/











## Ruby 

Every class has one parent only

Every class may have several modules

Modules can add new methods

Modules can overload old methods

Metasploit modules overload Msf::Module 

Mixins include one class into another

  Mixins can override a class methods

    eg connect() TCP but connect() overloaded by SMB, FTP

Example of Ruby mixin with overloading

```ruby
class MyParent
     def woof
          puts “woof!”
     end
end

class MyClass > MyParent
end

object = MyClass.new
object.woof() => “woof!”

================================================================

module MyMixin
     def woof
          puts “hijacked the woof method!”
     end
end

class MyBetterClass > MyClass
     include MyMixin
end
```













## Other Cyber Labs



### Forensic Labs

https://gchq.github.io/CyberChef  Convert from binary to hex to base64 etc












### netdiscover

netdiscover -h view help

netdiscover -i eth0 -r <<ip range>>


### nmap

nmap -sS 1.2.3.4

nmap -A 1.2.3.4

nmap host discovery

nmap -sS -sU -p ... nmapoutput.xml

zenmap nmapoutput.xml




### dig

dig -h

dig [domain.com](http://domain.com/) NS

dig [domain.com](http://domain.com/) AXFR 1.2.3.4





### traceroute

traceroute [google.com](http://google.com/)


### openvas

openvas-start vulnerability scan

openvas-check-setup

[http://127.0.0.1:9392](http://127.0.0.1:9392/) = greenbone security assistant = openvas GUI output. Perform a network vulnerability scan using this tool.

openvas : check greenbone reports

service postgresql start : Start database

msfconsole : load Metasploit

load openvas : load OpenVAS vulnerability scanner

openvas_connect ...

openvas_report_list

openvas_format_list

openvas_report_import <<ReportID>>

hosts : show identified hosts

vulns -R 1.2.3.4 show vulnerabilities for a specific host

search | vulns -R 1.2.3.4 search for exploits which target the vulnerabilities exposed on this host

### armitage

Armitage : run GUI application

### metasploit

Connect to MetaSploit server

1.2.3.4 => Scan

Hosts => Nmap Scan => Intense Scan <<1.2.3.4>> which runs db_nmap which adds results to the Metasploit database

Attacks => find attack

Check exploits



### zenmap

Zenmap : host and port scan

### nikto

nikto -host 1.2.3.4 to see what vulnerabilities exist

nikto -o sploit.htm -host 1.2.3.4 saves output to web page

### sploit.htm

firefox sploit.htm and look at vulnerabilities

### dirbuster

dirbuster to perform a dictionary/brute force attack against some web applications

check out 'shellshock' vulnerability

command injection : send commands to OS

firefox : configure proxy 8080 with no exceptions

### burpsuite

Burpsuite : run it then 'Intercept Is On'

Burpsuite => SQL injection attack



### getent

getent passwd 0

getent group root - look up root users

getent passwd phil - look up user phil


### mbsa

MBSA Baseline Security Analyser - run a scan on your server : updates and incorrect configuration

mbsacli command line scan also

Search for any problems identified in the scan. Try and match against any known vulnerabilities (CVE). If so, do you find any active exploits which could target this vulnerability?


### snort

Set 'SOURCE' and 'DESTINATION' mirror modes for source router and destination detector machines

### securityonion

SecurityOnion linux machine IDS

(( Validate a signature - can do this for the ISO!!!))

[https://github.com/Security-Onion-Solutions/security-onion/blob/master/Verify_ISO.md](https://github.com/Security-Onion-Solutions/security-onion/blob/master/Verify_ISO.md)

ISO image:
[https://github.com/Security-Onion-Solutions/security-onion/releases/download/v14.04.5.2/securityonion-14.04.5.2.iso](https://github.com/Security-Onion-Solutions/security-onion/releases/download/v14.04.5.2/securityonion-14.04.5.2.iso)

Signature for ISO image:
[https://github.com/Security-Onion-Solutions/security-onion/raw/master/sigs/securityonion-14.04.5.2.iso.sig](https://github.com/Security-Onion-Solutions/security-onion/raw/master/sigs/securityonion-14.04.5.2.iso.sig)

Signing key:
[https://raw.githubusercontent.com/Security-Onion-Solutions/security-onion/master/KEYS](https://raw.githubusercontent.com/Security-Onion-Solutions/security-onion/master/KEYS)

For example, here are the steps you can use on most Linux distributions to download and verify our Security Onion ISO image.

Download the signing key:

wget [https://raw.githubusercontent.com/Security-Onion-Solutions/security-onion/master/KEYS](https://raw.githubusercontent.com/Security-Onion-Solutions/security-onion/master/KEYS)

Import the signing key:

gpg --import KEYS
Download the signature file for the ISO:

wget [https://github.com/Security-Onion-Solutions/security-onion/raw/master/sigs/securityonion-14.04.5.2.iso.sig](https://github.com/Security-Onion-Solutions/security-onion/raw/master/sigs/securityonion-14.04.5.2.iso.sig)
Download the ISO image:

wget [https://github.com/Security-Onion-Solutions/security-onion/releases/download/v14.04.5.2/securityonion-14.04.5.2.iso](https://github.com/Security-Onion-Solutions/security-onion/releases/download/v14.04.5.2/securityonion-14.04.5.2.iso)
Verify the downloaded ISO image using the signature file:

gpg --verify securityonion-14.04.5.2.iso.sig securityonion-14.04.5.2.iso
The output should show "Good signature" and the Primary key fingerprint should match what's shown below:

gpg: Signature made Mon 30 Jan 2017 02:44:55 PM EST using RSA key ID ED6CF680
gpg: Good signature from "Doug Burks [doug.burks@gmail.com](mailto:doug.burks@gmail.com)"
gpg: WARNING: This key is not certified with a trusted signature!
gpg: There is no indication that the signature belongs to the owner.
Primary key fingerprint: BD56 2813 E345 A068 5FBB 91D3 788F 62F8 ED6C F680

### sguil

SGUIL monitors live events

Configure rules on IDS

sudo nano - run text editor

sudo rule-update : updates rules in IDS so they no longer generate an alert

zenmap and run scan on a host. This will be detected in the IDS as a threat. Check SecurityOnion for threat output

### hping3

hping3 to run a ddos attack on a machine

Spamhouse Don't Route - lists packets not to be routed

PEER Drop - lists packets to be dropped

### sgutil

SGUIL : see if anything detected

### squert

Squert : get activity analysis picture

### sysinternals

Use the SYSINTERNALS suite in this lab

### veil

./Veil.py to run the Veil framework

### evasion

info <space> <tab> <tab> evasion <enter>

use evasion

list to view options for GENERATING PAYLOADS TO DEPOSIT ON AN ENEMY MACHINE

compiler options - EXE or within PDF or WORD

Meterpreter larger but includes critical metsrv.dll
shellcode smaller but still have to download metsrv.dll also afterwards anyway

payload type - TCP, HTTP, HTTPS, RHOST, LHOST

Book => RUBY app => created a hacker app ready to download ( a 'payload')

copy = cp classroom-exploit/*.* /var/www/html/ to root of apache site

service apache2 start : starts web server

copy the hacked file to the website also

open application (icedove thunderbird)

send an email using thunderbird

### pcap

analyse saved PCAP files (Wireshark output)

analyse live PCAP streams

### networkminer.exe

send phishing email from KALI LINUX. Click on the phishing link. Download the dodgy attachment 7z.exe to downloads folder

show files downloaded eg email file .eml, html web page, images and the 7z.exe file

can hash each file downloaded also

### sysmon

Sysmon lab

process explorer - live

process monitor - live

sysmon - allows logging of events so that historical tracing through events can be done

msfconsole

      resource ...path-to-file

procexp64 Process Explorer
tcpview
procmon

sysmon
sysmonconfig-export.xml

TCPView : look at process

run backdoor app

event viewer - application logs - ms - windows - sysmon - operational

examine malware in event viewer

analyse malware incidents on

[malwr.com](http://malwr.com/)[virustotal.com](http://virustotal.com/)

eg

malx.docx

### pcap

analyse pcap files and try to tell IP of attacker and victim, and any tools used.

Wireshark analysis

Network Miner analysis

Practice as well analysing some other files downloadable via user Netresec on Network Miner

### ossim

Using SIEM utility called OSSIM

just screen walkthrough - do not install!

Alien Vault is SIEM (gathering data) tool - OSSIM

OSSEC

OSSIM uses OSSEC HIDS agents to prioritise different kinds of events

decoder : sets REGEX expressions for searching

rules : assigns priority to events

.cfg to parse files

.sql to assign priorities, and to name events

Assign priorities to each rule in OSSIM


  Playbook = series of events, which, if true, maps a priority and an event


OSSIM assets in Environment => Assets and Groups


       Can place assets into groups



OSSIM Dashboard


       chart output visually to give a handle on what's happening



OSSIM Analysis

OSSIM Analysis => Security Feed shows live events



### autopsy 

Autopsy Forensic Analysis

Get a vhd file for analysis

Create a hash of it using

certutil -hashfile mydrive.vhd md5 | find /i /v "md5" | find /i /v "certutil" >> sploit_md5_pre.txt

Autopsy => New Case => connect to data source mydrive.vhd

Ingest Modules : Specific Modules performing specific searches

Analyse a disk image

Autopsy => Open Case => ... => Data Sources => marketing.vhd => Hex tab

Look at HEX, Strings on different disk partitions


       Identify 
              MBR
              NTFS
              any other files



Research other forensic tools

1. EnCase Forensic
2. FTK Forensic Toolkit
3. Cellebrite
4. CRU field analysis

### Lab 11

Blue vs Red

Check out UK Cyber Security Challenge for real-world scenarios

Scenario : we play both BLUE and RED teams

Scenario : Bobby Admin is NEW TEMP HIRE
: Network has been compromised with an internal device fitted
as a rogue device on the internal network

Blue team : Monitor Wireshark packets

Red team : have LAPTOP ON INTERNAL NETWORK


       KaliVM
       service postgresql start
       armitage
       msf ==> command line => run this scan
              ==> db_nmap -T1 -A -D <<IP range>>



Blue team : can we spot that a scan is taking place???


       ((Possibly not if the scan is a 'slow' scan))



Red team : now wants to run an INTENSE SCAN


       Armitage GUI => Run an INTENSE SCAN



Blue team : can we spot an attack now?

Blue team : incident response?


       Playbook would guide person what to do



Red team : change IP

Red team : set up website on Linux Apache


   cd Veil
       
       ./Veil.py
       
       use evasion
       
       use 5
       
       set lhost 1.2.3.4
       
       generate
       
       create and copy the malware to your website



red team : hack into dns and update dns with a fake record to the fake site with ettercap

red team : also hack into arp cache using ettercap

blue team : monitor wireshark

blue : go to phishing website

red : Ettercap : Mitm => stop MiTM attack

red : msfconsole


       note : red team has been lured into a honeypot here so blue team can monitor



blue : wireshark capture

blue : process explorer

blue : run the 7z (hacking) process

blue : check process explorer for 7z process

red : hack into onedrive and try and hide malware within onedrive

red : keyscan_start to monitor keystrokes

red : break into honeypot ....

### Lab 12 : Network Segmentation : PFSense

VyOS router : replace with Netgate pfSense which is open source UTM tool

Use diagnostic => mtr to verify routes

blue - log packets from the firewall rules

blue - configure firewall rules

blue - configure suricata alerts on the firewall

red : nmap nmap - topology discovery scan - intense scan

red : nikto vulnerability scan

red : LOIC (Low Orbit Ion Cannon) DOS attack

Instructions On Running a DOS attack using LOIC

http://pages.mtu.edu/~xinlwang/itseed/labs/intrusion_detection_intro2Snort_LOIC.pdf

red : hping3 : DOS attack

### Lab 12 : install backdoor malware

Red : Metasploit : install backdoor vulnerability

Blue : check firewall logs

### Lab 13 : Password sniffing

Red : Ettercap : G : Unified Sniffing : Scan for hosts

Red : Ettercap : MITM Poisoning

Red : Wireshark capture

Blue : log onto website with credentials

Red : Try and view password

Blue : create a domain certificate to protect the password

Blue : turn on https for the website

Blue : install RADIUS server

Blue : install RADIUS client

### Lab 14 : Using email to hack

red : create malware using Veil and evasion

red : set up email as a relay (open relay = do not do this in real life)

red : configure email on Thunderbird

### Lab 14 : XSS Cross Site Scripting

red : set up Burpsuite as an INTERCEPTION PROXY

### Lab 14 : Exploiting XSS with MITM attack

Use BeEF Browser Exploitation Framework (user=beef password=beef) to configure IE with a proxy address so that web requests get sent to this proxy instead of to the internet, before going to the internet, so that this BeEF can now attempt to run a MITM attack



















































# Cyber course






## History of cyber

Current state of cyber




## Present state of cyber

Discussion and examples on the threats we face today



































# Kill Chain

Kill chain = steps of an attack

Goal : break the chain; also prevent an attack by engaging with the enemy as near to the start of the chain as possible

Book - see report by Lockheed Martin of Network Defence with analysis of adversary campaigns and INTRUSION KILL CHAINS

Story of 3 attacks http://www.lockheedmartin.com/content/dam/lockheed/data/corporate/documents/LM-White-Paper-Intel-Driven-Defense.pdf

http://resources.infosecinstitute.com/cyber-kill-chain-is-a-great-idea-but-is-it-something-your-company-can-implement/#gref

China spying - report by Mandiant


       https://www.fireeye.com/content/dam/fireeye-www/services/pdfs/mandiant-apt1-report.pdf
       
       APT Advanced Persistent Threat
       
              Often a very advanced type of threat carried out by countries against other countries


Regular Kill Chain


       Find
       Fix
       Track
       Target
       Engage
       Assess



Cyber Kill Chain


       Reconnaisance
       Weaponisation
       Delivery
       Exploit
       Installation
       Command and control
       Actions


Planning / Scoping


       stealth : Zombie computers to perform scans eg group DDOS attacks on a server



Reconnaisance / Discovery


       passive attack is gaining info only = reconnaisance
       active



Weaponisation


       use exploit
       
       PIVOT POINT = POINT OF ACCESS (part which is being attacked)
       
       APT Advanced Persistent Threat : INSTALL ONGOING TOOLS WHICH REMAIN
    
              Often using advanced tools and quite often targeting governments so a high
              degree of skill is required.  Often attacker is an organised group or a government
    
              APT often have a fixed goal after which the attacks stop


​       
​       
​       Exploit - run code, gain elevated permissions
​       
​       Callback - comms with rogue control network
​       
​              C2 = Command and Control = rogue control points
​       
​       Tool download - download extra tools



Post-exploitation / lateral discovery / spread

Action on objectives


       copy data



Retreat













































































# Reconnaisance

initial fact finding before vulnerability scanning takes place

1. Reconnaisance
2. Vulnerability Scanning

Active reconnaisance means you go and get the data rather than letting it come to you via search engine

Reconnaisance is researching a network

   Topology discovery

   OS fingerprint

   Service discovery

   Email harvest

   Social media profile

   Social engineering

   DNS harvest

   Phishing

   Wireless

   Wired

   Virtual 

   Physical

   Internal

   External

   NMAP

   Host scanning

   Network mapping

   Netstat

   Tools










































## OSINT



OSINT Open Source Intelligence - public info

Social engineer - human trickery

Scanning

Objectives


       Organisation
              Trade
              Culture
              Defences
              
       Employees
              Department
              Hierarchy
              Privileges
              Exploit outside interests
       IT
              OS
              Apps
              Appliances
              Security
       Suppliers
       Customers


​       

       Cyberstalk
       
       Passive reconnaisance - uses OSINT
       
              use hidden machines eg proxy, VPN, compromised host, anonymous
                             web server
                             
       Google hacking - expert use of Google to find information
              "exact phrase"
              -  (minus sign)  EXCLUDE WORDS
              AND (capitals)
              OR 
              |    OR
              (a OR b) AND c
              site:   within domain
              filetype: 
              related:
              intitle:  only search title tags
              allintitle:   must include all of the search words in the title tag
              inurl:         must be in URL
              allinurl:   must match all search words in URL
              allinanchor:
              intext:   
              inurl:blog messi
              query daterange:start date-end date
              define: kangaroo court 
              allinurl:tag/fcbarcelona/
              
       Add to URL (in the middle of it)      
              &pws=0  do not personalise
              &filter=0 do not filter
              &tbs=li:1 do not autocorrect

​       
​       Dork = stupid
​       
​       Google dork = someone who creates vulnerability through stupidity
​       
       Google Dork = Google Hack = using advanced Google searching 


​       
​       


## Google Hacking / Dorking

https://www.blackhat.com/presentations/bh-europe-05/BH_EU_05-Long.pdf
Show them Google Hacking Master List [https://it.toolbox.com/blogs/rmorril/google-hacking-master-list-111408](https://it.toolbox.com/blogs/rmorril/google-hacking-master-list-111408)

https://www.google.com/?hl=xx-hacker

https://www.exploit-db.com/google-hacking-database
https://gbhackers.com/latest-google-dorks-list/

https://wikileaks.org/sony/docs/bonus/1/Password/
http://tapr00t.com/files/wordlists/500-worst-passwords.txt
http://tapr00t.com/files/wordlists/
http://tapr00t.com/files/wordlists/
http://terminator.persiangig.com/Cracker/Pass%20List/
http://8.oldhacker.org/txt/Hacking/
https://entropy.soldierx.com/~kayin/archive/More%20Hacking/
https://web.archive.org/web/20140822191407/http://www.boris-koch.de/wp-content/uploads/2011/01/Liste-Google-Hacking.pdf



https://en.wikipedia.org/wiki/Google_hacking



Google Hack site filetype related intitle allintitle inurl inanchor intext daterange:a-b define
"this term"  exact phrase
Google Hack &pws=0 personalise word search = 0 
Google Hack "exact phrase" -exclude
Google Hack site filetype related intitle allintitle inurl inanchor intext daterange:a-b define
Google Hack &pws=0  do not personalise &filter=0 &tbs=li:1 
dork=fool 
google dork = avoidable vulnerability found using google alone

intitle:"index of" "passwords.yml"
intitle:"index of " "*.passwords.txt"




## Exploits 
https://www.exploit-db.com/



[https://www.truthfinder.com/](https://www.truthfinder.com/)






## Email harvesting


       Spammers databases
       Google "*@mycompany.com"
       
       theharvester - linux tool for gathering email info
       
              https://tools.kali.org/information-gathering/theharvester
              
       Hacking websites eg social media websites


​       
​       
​       
​              


## Social Media profiling


       Using social media to work out what's happening in a company.  Normally requires social media accounts of active employees to be effective
    
       Analytics engines
              pipl.com
              peekyou.com
              echosec.net
              
       Also dating or purchasing/selling


​       


## DNS harvesting


       Try and obtain the DNS records from a server
    
       Sysinternals => whois -v abc.com


​       
​       Zone transfer
​       
​              NSLOOKUP SET TYPE=ANY ls-d abc.com      list all records


​              
​       Zone transfer (Linux)
​       
​              dig axfr dns-server-1.domain.com thiscompany.com
​              
​                      AXFR = ALL TRANSFER = REQUEST FOR ALL THE DNS RECORDS
​                      IXFR = INCREMENTAL TRANSFER


​              
​              
​              
​              


## Getting location from IP


       geoip



## Domain Analysis


       netcraft.com provides statistical analysis of sites, uptime,
              quality of service etc



## Website Ripping = website copier


       httrack.com - download full site to local; ensures all paths work locally



## Social Engineering


       Pivot Point - point of weakness or access
    
       Phone calls
       
       Email
       
       Phishing 
       
       Spear Phishing
       
       Whaling
       
       Riding on back of existing work eg server upgrade; pose as 
                      contractor to gain access
                      
       Social Engineer Toolkit at social-engineer.org : used for Penetration
                      Testing
                      
       Burner phones with fake numbers
       
       CallerID spoofing to make it appear call is coming from legitimate number
       
       Spoof Card : prepaid card that you dial up to, enter your spoof number, then make calls from









## Conversion Tools

https://www.browserling.com/tools

[Peekyou.com](http://peekyou.com/)[pipl.com](http://pipl.com/)

[carrot2.org](http://carrot2.org/)

Maltego Community Edition
















































































## Scanning Labs

Port Scanning

Metasploitable

CVE vulnerability scanning

Wireshark

https://nmap.org/

https://parrotlinux.org/





### Wireshark


Do a PING then view the output in Wireshark

run IPCONFIG /Release /Renew with filter udp.port==67 applied


### Free Online Port Scan

```powershell
Scan an IP address as a port scan to reveal open ports
If in doubt use PhilAnderson.co.uk
```

### Superscan 4

```powershell
Investigate advanced scanning with Superscan
https://www.scanwith.com/download/SuperScan.htm
```

### Angry IP Scanner

```powershell
https://sourceforge.net/projects/ipscan/files/ipscan3-binary/3.4.1/
Download ipscan-3.4.1-setup.exe	

```

### IPScan24

```powershell
http://cleansofts.org/download/advanced-ip-scanner.html
Download http://www.advanced-ip-scanner.com/download/ipscan24.exe
```

### TcpDump on Linux
























## Footprinting


Footprinting

LEGAL MEANS TO GET DATA ON PEOPLE AND COMPANIES.  WE ALL LEAVE A 'FOOTPRINT' ONLINE EG SOCIAL MEDIA, WEBSITES ETC



Fingerprinting

NON-LEGAL MEANS TO GET INFO EG HOSTS/NETWORK





IPS OF COMPUTERS IN A COMPANY.  Scan network illegally to find out servers, printers, users etc  ==> getting ready to attack

Banner Grabbing

	Sending requests to websites etc : OBSERVE

	HEADER INFORMATION COMING BACK ==> find 

	out eg server running Apache + version

			curl  ==> same as http:// 

APT Advanced Persistent Threat

	Persistent malware can be installed on a remote system
	and cause trouble over months or even years ==> Advanced
	Persistent Threat

Credentialed Scan ==> you are logged in when performing a scan

DNS

Email

Cloud

Companies House

Social Media footprint









## Footprinting = Topology Discover


       Find all devices on the network - IP and hostname
    
       Good guys : use as auditing tool also to discover non-authorised devices on the network
       
       Web/Remote access
       
              Which web servers? Names? IP? Apps? OS and App versions? Back end databases?
              
              VPN access?
              
       Wireless access : WIFI points, IP, hostname
       
       Wired - sniffer 
       
       Virtual vs physical
       
       On premises vs cloud


​       


### Network Mapping Tools


       Auditing your network via SNMP
       
              System Center
              HP OpenView
              
       Attacker : problem of gain access, but also of remaining undetecte 


### Discovery tools


       ipconfig
       
       ifconfig
       
       ping
              Windows : 4 pings
              Cisco   : 5 pings
              Linux   : unlimited pings
       
       ping sweep : find all IP addresses in a subnet range which are responding to ping
              
              for /l %i in (1,1,255) do @ping -n 1 -w 100 192.168.0.%i | find /I "reply"        
              
       arp -a
    
       Nmap Network Mapper at https://nmap.org/  (command line or ZenMap GUI)
       
              Hosts
              Services running (with version)
              OS and version
              Firewalls in place
              
              Works by a) PING b) ARP c) ND neighbour discovery 
    
              https://highon.coffee/blog/nmap-cheat-sheet/
              
              -sL = List Scan = produces a list of computers (get IP, can do reverse DNS to get name)

                     nmap -sL 192.168.1.0/24
    
              -sn = -sP = Ping Scan = pings all computers and lists ones which respond to ping

                     nmap -sn 192.168.1.0/24
    
              -p 1-100 = full port scan 
    
              -p80  1.2.3.4/20  scan only on port 80
              
              -Pn  PORT SCAN OF EVERY IP IN SUBNET
              
              -PS (Port Scan) (sends TCP SYN Packet to every host)
    
              -PS            <port list>   Service discovery scan = TCP SYN scan 
                             for every port listed to discover 
                              
                             Service Discovery scan = TCP SYN scan
    
              --scan-delay <time>    scan over extended period
              
              --randomize-hosts      scan in random order
              
              -sI                               scan Idle
              
              -f                                            fragment (split up) the TCP header
                                                            over multiple IP packets


       Port States reported after a scan
                      
              open    
                      port is accepting connections
                      
              closed
              
                      the service or application is not running, so traffic is 
                      not getting a response (but it's not blocked by firewall)
                      
              filtered       
              
                      when a nmap scan returns a status of 'filtered' on a port this indicates that the port is being blocked by a firewall
              
              unfiltered
              
                      cannot determine status of report


​                      
​       nmap -A        DETECT OS AND SERVICES
​       nmap -sV       DETECT SERVICES
​       
​       tracert : detailed ping
​       
​       traceroute
​              
​       pathping
​    
       Nmap
       
              --traceroute to provide a graphic view of the network
              
       Masscan  
       
              TCP port scanner, spews SYN packets asynchronously, scanning entire Internet in under 5 minutes.


nmap -O can detect operating system
nmap -sL = live hosts
nmap -sn = ping scan (also -sP)
nmap -Pn = port scan every IP on subnet
nmap -PS 1.2.3.4-5.6.7.8 TCP SYN service discovery scan

nmap -sS TCP/SYN
nmap -A OS detection
nmap -o operating system
nmap -sL hosts
nmap -sn ping
nmap -Pn port scan on every computer in range
nmap -PS TCP SYN service discovery scan

nmap -sS 1.2.3.4

nmap -A 1.2.3.4

nmap host discovery

nmap -sS -sU -p ... nmapoutput.xml

zenmap nmapoutput.xml

zenmap host/port scan





### Service discovery : OS and services

```
       Tries to work out which services are running and if a firewall is protecting that service
    
       OS for : hosts, firewall, switch, router
       
       Network services running
       
       Fingerprint = work out which software is running, and which version
                      is running, by using non-admin tools to query
                      
       netstat Windows
       
                      -a             all ports
                     -b     process which has opened the port
                      -r             routing table
                      
       netstat Linux
       
       TCP SYN packets can be sent as part of service discovery
       
              SYN/ACK packet returned? Then port is open and service is available
       
       tcpview in SysInternals : GUI alternative to netstat
       
       nmap 
       
              TOPOLOGY SCAN = HOST DISCOVERY = FIND IP AND HOST
    
              for each ip scan every port
                      
              DISCOVERY SCAN
              
                      DISCOVER SERVICES 
                      DISCOVER VULNERABILITIES
                      DISCOVER ASSETS IN A COMPANY (LIST OF OS, SERVICES AND APPS)


​                      
​              
​                                     

       nmap 
       
              nmap    scan for open ports 
    
              -sV or A  can obtain
                      OS and version
                      App and version
                      Type eg switch/router/host
                      
                      <<NOTE : TRANSCENDER 
                      
                             nmap -O : OS Fingerprinting = OS Version
                             
                             nmap -O mydomain.com  SCAN ALL HOSTS IN DOMAIN AND 
                                                            FIND THEIR OS
                             
                             also -sL identify host name >>
                             tcp -sS -sU -PN    
                      
       nmap scripting engine LUA
       
              Lua is a very fast scripting language used in, for example, ROBLOX
              
              OS discovery
              Windows user account discovery
              Identify logged on user
              add geolocation


​              
```

### Virtual Machine vulnerabilities


       VM Escape allowed a hack from a child VM into the parent host
































































## Fingerprinting = Uniquely Identify
























































# Vulnerability Scanning

SecTools.org => different kinds of tools

## Vulnerability Scanners

Qualsys, Nessus, OpenVAS, Nexpose, Nikto, MBSA

Web app scanner eg Nikto : check for SQL injection and XSS vulnerability

### OpenVAS 

OpenVAS vulnerability scanner (command line shell) with Greenbone Web Browser as a GUI

OpenVAS scanner is open source openvas.org (similar to Nessus) - not Windows

1. IP
2. OS
3. Services
4. Patches
5. Security Config
6. Security Policy
7. Shares
8. Accounts
9. Weak passwords
10. Access points
11. Rogue access points
12. AV

Vulnerability Report ==> IMPACT WARNING!!!



### Nessus scanner : free for home use

Local
Cloud

Nessus can perform a vulnerability scan

Nessus can also COMPARE YOUR VULNERABILITY AGAINST A GLOBALLY AGREED SECURITY BASELINE CALLED THE CIS CENTER FOR INTERNET SECURITY at cisecurity.org.  This would be a compliance audit - how your machines 'comply' with globally agreed security standards or security policy.

Nessus can

      Group Vulnerabilities By Plugin = By TYPE OF VULNERABILITY
      
      Group Vulnerabilities By Host   




### Qualys

cloud-based vulnerability management (agents run on clients)

### Nexpose

vulnerability scanner

### MBSA

CAN ANALYSE THE RESULTANT SECURITY AND HIGHLIGHT ANY FLAWS OR WEAKNESSES eg patch not up to date

## Hardening

### Templates

Security Config and Analysis : apply a security template via GROUP POLICY

GROUP POLICY - CAN APPLY A SECURITY TEMPLATE


## Vulnerability Types

Known Threat - ONE WE KNOW ABOUT, AND FOR WHICH A MITIGATION (SOLUTION) EXISTS

Unknown Threat - ONE WE DO NOT KNOW ABOUT (AND HENCE A FIX ALSO DOES NOT EXIST)

Known Unknown - ONE WE KNOW ABOUT, BUT NO FIX EXISTS YET

Patch Vulnerabilities

      IOT Internet Of Things devices are least likely to have proper patch management as their update process is sometimes difficult

QR-code

      Mobile phones are susceptible to this type of attack


MSAT Security Assessment Tool

SCM Security Compliance Manager


       also works inside SCCM   


### Vulnerability Feed

latest updates to vulnerabilities found

       Also called plug-in

### SCAP : Security Content Automation Protocol

does a computer meet a certain baseline?

Allows automation of vulnerability management, and also manage compliance with policy

organise known vulnerabilities in an automated fashion

output the results of Vulnerability Scans into meaningful data

  Vulnerability SCAN ==> output in a format specified by SCAP which taps into 

    - NVD vulnerability database 
    - CVE vulnerability/exploits list

SCAP allocates a certificate to software based on its capabilities

  ACS Authenticated Config Scanner : scans software while logged in

  Also
          CVE : supports scanning of item and matching them to known CVE vulnerabilities
          OCIL : open checklist interactive language : collect vulnerability data from other methods

MITRE.org is a Research and Development (R&D) government body whic sponsors research eg into CWE and CVE
      vulnerabilities

AI Asset Identification

CVE common vulnerabilities and exposures = known vulnerabilities cvedetail.com

CPE common platform enumeration by NIST (standard names for different platforms eg types of hardware, OS, apps)

CCE common config enumneration by NIST (best practice)

CWE common weakness enumeration : broader categories of coding errors which lead to 

              specific CVE vulernabilities

              Full list at cwe.mitre.org

                      CWE = coding errors
                      CVE = specific examples of those coding errors, in real products

SCAP 

      automation of marking how vulnerable a system is to attack, also how to fix this

              see scap.nist.gov
              and nvd.nist.gov

      Languages used to define the standards 

              OVAL : vulnerability scanner

                              OVAL open vulnerability assessment language : XML report : evaluates systems for compliance using software.  

              XCCDF : XML best practice config which can be applied to a machine.  Used by MITRE, CIS, OVAL, SCAP

                        https://scap.nist.gov/specifications/xccdf/index.html

                        https://scap.nist.gov/schema/xccdf/1.2/xccdf_1.2.xsd








### CVSS Common Vulnerability Scoring System

0 = not vulnerable

10 = vulnerable

Uses six metrics to calculate the base score.

AV Access Vector : method the attacker uses to attack

              L Local : must have LOCAL ACCESS TO MACHINE
              A Adjacent : must be on INTERNAL LAN
              N Network : can be on EXTERNAL NETWORK

AC Access Complexity : how hard it is for attacker to attack

              H High : hard to attack
              M Med
              L Low : easy to attack

Au      Authentication Which An Attacker Would Have To Use In Order
              To Perform An Attack
              
              M       Multiple
              S       Single
              N       None


​                             
​                      
​              C       Confidentiality : how much information stands to be disclosed
​                                             should the attacker be successful
​                                             
​                      N       None    no disclosure of confidential information
​                      P       Partial some disclosure 
​                      C       Complete all the info on a system could be compromised
​                      
​              I       Integrity : how much data could be altered by an attacker
​              
​                      N       None    No data integrity impact
​                      P       Partial Partial data integrity impact
​                      C       Complete data integrity impact : all info on system 
​                                     could be compromised


A       Availability : Potential impact on availability of the system as a whole if this vulnerability gets exploited

              N       None : no impact on system availability
              P       Partial : partial impact on system availability
              C       Complete shutdown of system

Typical output : CVSS2#  AV:L  /   AC:H   /   Au:M   /
                                          C:P  /    I:N   /    A:N
                                               
  Also generated are scores
​              
​   eg https://www.first.org/cvss/v2/guide
​              
​   Impact Score   -  calculate from a formula
​                      
​   Impact Score = 10.41*(1-(1-ConfImpact)*(1-IntegImpact)*(1-AvailImpact))

    Impact Function

            0              if Impact Score = 0
            1.176   otherwise
    
    Exploitability Score
                                        
            Exploitability = 20* AccessVector*AccessComplexity*Authentication

    Base Score = ((0.6*Impact)+(0.4*Exploitability)-1.5)*f(Impact)




​                                                             














### Vulnerability databases

#### Bugtraq - detailed analysis of vulnerability disclosures

  Bugtraq is an EMAIL LIST OF CURRENT NEWS ON VULERNABILITIES
        POLICY OF FULL DISCLOSURE IN ORDER TO GET COMPANIES TO FORCE THEM
        TO FIX THE BUGS IN THEIR SOFTWARE
        Bugtraq at securityfocus.com owned by Symantec
  
  Full disclosure - we are all safer if everything gets disclosed
  
  Security through obscurity - hide everything!!!
  
  Balance : give time to fix vulnerabilities, then disclose



Passive scanning eg mirror a port

Just read packets

Active scanning (non-credentialed)

Just fire packets at the system

Credentialed scan

given log on

Make sure the account used to perform the credentialed scan has read-only access so can’t do any damage to the drive it’s scanning

Agent based scan

software (eg Nessus agent) installed on each client runs the scan; central admin console (Nessus server) to manage them all.

       (Windows - runs as background service nessuscli)

can limit to certain OS

### Vulnerability Access

must be able to get through defences like firewall and IDS - not easy on a live system!!! configure exclusions.

Vulnerability results store securely










### Scan types

#### DISCOVERY SCAN : of network

#### ASSESSMENT SCAN : of vulnerabilities


       can scan against a baseline
       
       Sensor-based : running from a central point 
       Agent-based : running on each client


#### Scan Scope Define IP and port ranges

#### Scan authorisation Can configure scan to obtain credentials which are not revealed to the scan operator

##### credentialed non-credentialed

#### Scan scheduling

can be affected by PCI DSS, Risk appetite and by licensing issues but not by SLA ((Transcender question))

False positives

First have to validate - are they actually false positives?

Second can add them as exceptions to the scanning list so they are not flagged up by the vulnerability scan

PCI DSS Payment Card Industry - Data Security Standard


       Note : stricter laws apply to PCI DSS vulnerability scans, for example any false positives can't be filtered out but must be left in the report with a note to that effect.
    
       PCI DSS devices must show compliance with eg CIS benchmarks


False negatives : risks NOT IDENTIFIED

Mitigate by ongoing scanning; also by using scans from different vendors so chances are greater on picking up on threats

### Scan reports

care as this info is confidential

MRTG Multi-Router Traffic Grapher

monitors load on a network line

uses SNMP

other tools : Scrutinizer, Nagios, SolarWinds, Cacti, NetFlow Analyzer

### Non-Intrusive and Intrusive Scanning

#### Non-intrusive scanning

Network fingerprinting : getting Host/IP/port info from freely available sources

Banner Grabbing - getting info from welcome and login screens and http header info

may return false positives

#### Intrusive = invasive scanning

exploit vulnerabilities

Use an ‘exploit framework’

















































































































# Attacking


## Threat Actors


Gary McKinnon - Ex NASA - solo hacker

Phosporous/APT35/Charming Kitten/Ajax Hacking Group in Iran targeting Journalists
   https://news.softpedia.com/news/microsoft-seizes-domains-used-by-phosphorus-hackers-525475.shtml

### Monica Witt - defects from US Cyber Intelligence 
[Monica Witt: from US intelligence officer to alleged Iranian spy](https://www.theguardian.com/us-news/2019/feb/14/monica-witt-from-us-intelligence-officer-to-alleged-iranian-spy)























## Real Life Attacks


### Exploit Stories 2020

9 million EasyJet customers had credit card data compromised

### Exploit Stories 2018


Fax Machine Exploit
https://thehackernews.com/2018/08/hack-printer-fax-machine.html



### Exploit Stories 2017

Yahoo 2017 : 3 Billion Email accounts hacked by tools developed by NSA

### Exploit Stories 2016


Uber
Oct 2016
paid $100,000 to hackers to delete their stolen data of 
   50 million Uber users 
   7 million drivers


### Exploit Stories 2014


Yahoo 515000 UK Email accounts
only revealed in 2016
Hack was Russian sponsored.
(Yahoo has been merged with AOL to create OATH after being bought by Verizon)


### Exploit Stories Undated

Meltdown : Memory Dump, passwords etc by joining user to OS - CVE-2017-5754 [meltdownattack.com](http://meltdownattack.com/)

Spectre : Joins different user applications CVE-2017-5753 and CVE-2017-5715?

WannaCry : NSA tools stolen and used to create ransomware affecting NHS, Telefonica,

NotPeyta

BadRabbit

Yahoo 2013 : 1 Billion email accounts breached

WeCry : precursor to WannaCry : Ransomware to unlock for $177

Golden Ticket : Kerberos Hack : gain complete control over AD through 10 year TGT ticket granting ticket account which can be undetected. Golden ticket allows impersonating any account on the domain without the password or the token!

Golden Ticket : Black Hat conference slide show [https://www.slideshare.net/gentilkiwi/abusing-microsoft-kerberos-sorry-you-guys-dont-get-it](https://www.slideshare.net/gentilkiwi/abusing-microsoft-kerberos-sorry-you-guys-dont-get-it)

Overpass-the-hash : : Kerberos Hack

DCSync : Kerberos Hack

PAC : Kerberos Hack

golden SAML : forge SAML authentication object to get SSO via SAML 2.0 protocol to applications eg Azure, AWS, vSphere

Loki : Password stealer













## Exploit Malware

### Angler Exploit Kit

Cheks for out of date software on a computer. If it finds out of date software it checks if there is an exploit to match the vulnerability. When you visit this website it scans your computer for all the versions of all of the software Looks for all exploits and then tries to run the exploits

### Axpergle found inside Angler Exploit Kit

Axpergle is the most commonly found exploit. It is found in the Angler Exploit kit.

### JRAT Remote Access Trojan

JRAT Remote Access Trojan - malware which can turn on your camera, install a remote shell

### Mimikatz

mimikatz : can read plain text usernames and passwords on a Windows computer

### Metasploit

Kali exploit kit

### hashcat

Hashcat - brute force hash-cracking tool.

### ProRat

### responder

responder : responds to DNS broadcasts and deceives computers into revealing their NTLMv2 salted hash

### RIG Redkit, Infinity and Goon also known as HTML/Meadgive

### Sweet Orange also known as Win32/Anogre

Popular in 2015

### Wordscrape

## Ransomware

### Reveton - encrypts entire hard drive

Encrypts hard drive and blackmails people into paying around $200 Bitcoin to decrypt the drive













## Offensive Penetration Testing And Exploits

Red attack
Blue defend
White rules, monitor
No holds barred = any method
Perimiter test
Black box = blind
White box = full disclosure
Grey box = partial disclosure
Single blind = only attacker blind
Double blind = attacker and defenders are both blind


NIST SP800-115 guide to testing
PCI Payment Card Industry
PCI DSS Data Security Standard
Pre-engagement before test







## PCI DSS

https://www.pcisecuritystandards.org/documents/Penetration_Testing_Guidance_March_2015.pdf




Vulnerability scan                    vs             Pen Test

       Identify and report                   Exploit vulnerabilities
       vulnerabilities
       
       Quarterly                                             Annually 
       
                                          (or after changes)
                                          
       Automated with                                Manual 
       manual verification


​              
​              Minutes                                               Days



War Game

```
       Red
       
              Attacker - best 3rd party
                      but - expose your own system!!!
                      Qualified? CEH!!!
       
       Blue
       
              Defence team : detect and repel
       
       White
              
              Determine objectives
              Set parameters
              Define success and failure
              Report outcomes
              Diagnose lessons learned
              Recommend for future


​              
```

Pen Test Scope


       External threats
              Perimiter, Network, DNS, Protocols, RRAS, Email, Web
       Internal
              Access control, admin privileges, passwords, HIDS, auditing
       Applications


​              
​       Live or simulated environment?



Authorisation to perform pen test


       care
       
              3rd party - confidential
              
              3rd party suppliers eg ISPs - could disrupt their systems
              
              legal depending on country
              
       Written authorisation required before testing can begin
       
              NDA
              Confidentiality


​              
​       Timing : fixed


​       


Depth of testing - exploiting


       No holds barred
       
       Perimiter test : just show that a vulnerability exists
              but do not exploit it
              
       Attack profile
              External
                      Targeted
                      Untargeted
              Internal
              
              Black box = blind = closed = zero-knowledge : attacker given no info
              
                      Single blind test : attacker not aware of system but
                                                    insider staff are aware they are under 
                                                    test
                                                    
                      Double blind test : attacker not aware of system but also
                                                    staff not aware a test is under way


​              
​              
​              White box = target test : attacker given full disclosure
​              
​              Grey box : partial disclosure : model insider threat
​              
​              Regression test = re-test after bug fix


​              


Comms


       will regular staff be aware?
       
       let ISP know
       
       let comms 3rd party know
       
       let partners know
       
       let police know
       
       agreed channels during the test so can halt the test if needed
              and communicate without interfering with the test



Reporting


       White team or 3rd party
       
       Lessons learned
       
       Test procedures and results, conclusions, authors and reviewers
       
       Audience : care as can be confidential info within report!!!
       
       Timeframe : deal with issues reported


​       
​              
​       
​       
​              


Rules of engagement


       NIST guide to Testing SP800-115 
    
              Test the subject
              High level 'logical' examination to expose weaknesses
              Interview personnel
       
       PCI Payment Card Industry
       
              PCI Data Security Standard


​              
​              
​              
​       


Step 1


       Pre-engagement
       
              Determine scope
              Methodology
              Budget
              Resources



Pen Test Steps


       1. Document target system
       2. Gather info on attack methods
       3. Vulnerability Scan = Identify vulnerabilities : obtain list of CVE common vulnerabilities and exposures
       4. Exploit vulnerabilities : match CVE with any attack vectors which can be used = exploit module / exploit framework eg metasploit 




























### Exploit Frameworks

Exploit framework is tool for launching specific attacks against known software vulnerabilities

Exploit code targets specific CVE common vulnerabilities and exposures

Once access is gained this then may be used to

       OPEN A COMMAND PROMPT WINDOW
       
       CREATE A USER
       
       INSTALL SOFTWARE






### Metasploit

Metasploit is best known exploit framework = metasploit.com (open source) (uses Ruby)

Tutorial : Metasploit Unleashed

combines with Nexpose vulnerability scanner

1. Discovery Scan : hosts and vulnerabilities

```
     ((Metasploit can use Nmap or its own tools for this))
```

2. connect to vulnerability scanner eg OpenVAS, Nessus, Nexpose

 ```
     openvas_target_list
     openvas_task_list
     openvas_report_import
 ```

#### EXPLOIT MODULE = TRY AND EXPLOIT A VULNERABILITY

```
       use ExploitModule
       show options
```

#### PAYLOAD = WHAT YOU DOWNLOAD TO A MACHINE THAT YOU FIND A VULNERABILITY ON

```
       set payload 
```






#### CVE VULNERABILITY => EXPLOIT MODULE => PAYLOAD

### Armitage

#### GUI for Metasploit

Scan hosts with NMap or Metasploit

Find Attacks to find exploits which might target a known vulnerability

run as many exploits as possible

Compliance Audit

Compare Nessus scan against vulnerabilities in CIS benchmarks

Patch Audit

Compare patching against available patches

Credentialed Network Scan

Scans network

Non-Credentialed Network Scan

Remediating Vulnerabilities

















































































# Defending



### Controls
CISO Info Security Officer
CSIRT Computer Security Incident Response Team
NIST National Institute for Standards and Tech
NIST CSD Computer Security Division
NIST FIPS Federal Information Processing Standards
NIST FIPS 200
NIST 800-53
NIST control family - Access, Audit, Response, Risk
NIST class - Technical (Firewall, AV, ACL, Audit), Operational, Management (Plan, Assess Risk, Authorise)
NIST Operational - centred on people eg training, security guard, configuration, contingency plan, response plan, maintenance, media control, physical control
CSA+ Controls - Physical (alarm, lock, fence,CCTV, mantrap, guard, badge), Logical, Admin 
CSA+ Logical Control = software - OS, app, AV, ACL, IDS, password, biometric, smartcard, encryption, backup
CSA+ Admin - Policy, Procedure
Function : prevent, deter, detect, correct(during), compensate(after)
CoA = Courses of Action = Matrix of Action
FIPS 199 Impact Analysis = High/Med/Low
Compensating Control - use when primary control fails.  EG encryption, separation of duties, user training
compensating control = fallback plan if main control fails
CSIRT computer security incident response team 
NIST controls: access, audit, incident response, risk assess
NIST class of control: technical, operational, management
NIST tech control: firewall, acl, av, audit
NIST operational control: training, security guard, configuration, maintenance
NIST management control: planning, risk assessment, authorise
CSA+ controls: physical, logical, admin
CSA+ admin control: planning, policy
Functions: prevent deter detect correct compensate











## Cyber Organisations

```
EC-Council : Certified Ethical Hacker CEH
(ISC)squared - CISSP Certified Info Security Systems Professional 
CASP CompTIA Advanced Security Practitioner
SANS/GIAC
ISACA - CISA/CISM Certified Info Systems Auditor/Manager 

CIS Center for Internet Security [cisecurity.org](http://cisecurity.org/)
CIS controls : Hardware assets, Software assets, Vulnerabilities, Admin Privileges, Secure Config on Client/Servers, Log monitoring, Email, Browser, Malware, Network ports & protocols, Data recovery, Firewall/Router/Switch config, Boundary Defence, Training, App security, Incident Response, Pen Tests
ISO 27001 Describes ISMS Info Security Management System = set of policies and procedures for managing sensitive data
ISO 9001 Quality Management System

CyberArk

       CyberArk bought Conjur who deal with DevOps
       CybarArk bought Vaultive who deal with cloud security
       Cyborg Security [https://www.ccfis.net/](https://www.ccfis.net/)
       Skytap cloud migration [https://www.skytap.com/](https://www.skytap.com/)
       EDR Endpoint Detection and Response (eg Antivirus)
       NGAV Next Generation Anti Virus : has AV + detects common attack vectors with both client/server detection

NSO in Israel [https://en.wikipedia.org/wiki/NSO_Group](https://en.wikipedia.org/wiki/NSO_Group)

```






## Cyber Roles

### CISO Chief Info Security Officer

In charge of

firewalls
IDS
CSIRT Computer Security Incident Response Team
Auditing
Processes (big picture)
Procedures (specific set of steps)
Due diligence (intensive research) on 3rd parties
Employee training
Risk assess
vulnerability assess
penetration test
recommendations
threat info up to date
awareness
advising legal/compliance/regulatory















## Framework

Company policy Procedures Technologies

Organisational Parameters

Security control

```
       Make things secure
       
              Give them      
                             C
                             I
                             A
                             and 
                             non-repudiation

```


### NIST National Institue Standards Technology

NIST provides GUIDANCE (not best practice which is ITIL)

```
       => Computer Security Division
       
              => FIPS Federal Info Processing Standards
              
                      FIPS 200 : minimum standards for US government non-military computers
                      NIST 800-53 : setting baseline security standards
                      
                      18 families of control eg Access, Audit, Incident Response,
                                     Risk Assessment
                                     
                      also 
                      
                      Classes
                      
                             Technical control eg firewall, av, OS ACL
                      
                                     Access, Audit, Authentication, Sys/Comms,


​                      
​                             Operational - people - eg security guard, training
​                             
​                                     Training, Config, Contingency, Response, Maintain,
​                                     Media, Physical, System, Comms
​                                     
​                                     Also Policies and Procedures are operational controls
​                             
​                             Management
​                             
                                     Assess, Authorise, Plan, Risk Assess, Acquisition


​              
```


# Frameworks and Policies 

Framework = set of policies put in place.

Compliance is testing if an organisation is putting the required policies into effect

## NIST National Institute Standards Technology

```
       NIST 5 CORE FUNCTIONS / FRAMEWORK (guidance not best practice) 
       
              Identify (threats)

                      Manage Assets
                      Risk Assess
                      Govern
                      Business Environment
                      Risk Strategy
                      

              Protect (data and systems)
                      Information Processes
                      Access Control
                      User Training 
                      Data Security
                      Maintenance

              Detect
                      Events
                      Anomalies
                      Continuous Monitoring

              Respond
                      Response Plan
                      Comms
                      Analysis
                      Mitigate

              Recover
                             Recovery Plan
                             Improve
                             Comms

       Implementation
       
              Partial, Risk Informed (Policies and procedures), Repeatable, Adaptive (continuous improvement)
              
       Profiles
       
              Maximise productivity in expenditure by identifying 
              current and expected states, and investing to bring
              an organisation into an expected state

       Secure By Default : out-of-the-box-security is turned on
                                             Design : programmers build with security in mind
                                             Deployment : info secure environment
```

## ISO 27001 : is an ISMS Info Security Management System

```
       Manages sensitive company information, keeping it secure.
       Paid $$$ 
       Applies Risk Management to help keep systems secure
```

## COBIT Control Objectives for IT

```
       Business Framework for managing IT within a business framework.
       Reflects role of IT in creating value for a company

       Paid standard

       CISA Certified Info Systems Auditor
       CISM Certified Info Security Manager
       
```

## ITIL v 3 = Best Practice (Note : NIST is similar but guidance only)

```
       Service Strategy
               Design
               Transition
               Operation
       Continual Service Improvement
```

## TOGAF The Open Group Architecture Framework

```
       Guidance on the architecture and design of an enterprise IT architecture

       Modelling a business through IT
```

## SABSA Sherwood Applied Business Security Architecture

```
       Deals with ENTERPRISE SECURITY AND SERVICE ARCHITECTURE

       What - ASSETS
       Why - MOTIVATION
       How - PROCESSES
       Who - PEOPLE
       Where - LOCATION
       When - TIME
```





### CSA+ categories

```
       Physical controls eg alarm, gateway, locks, fence, guard, CCTV, badge
       
       Logical controls eg OS, apps, ACL, IDS, passwords, biometrics, smartcards
              encryption, backups
    
       Admin controls
              admin 
              personnel
    
              eg policy, procedure, admin, separation of duties, job rotation, disaster plan, 
                      security awareness training
    
       Detective controls alert if issue
              monitoring, job rotation, IDS, audit, guard, CCTV
    
       Recovery controls return to normal function eg DRP Disaster recovery plan, 
              data backup, alternate sites
    
       Preventative controls prevent issues from happening
              Security awareness training, separation of duties, biometrics, encryption, 
                      mantrap, badge, guard
```

### classify by function

```
       Prevent
       
       Deter
       
              discourages
              
       Detect
       
       Corrective : detect and act
    
              Change control happens here
       
       Compensating : restore backup or alternative site


       NIST 5 CORE FUNCTIONS (for Improving Critical Infrastructure Cybersecurity)
    
              Identify
                      Risk Assess
                      Asset Manage
                      Govern
                      Business Environment
                      Risk Management Strategy
    
              Protect
    
              Detect
    
              Respond
    
              Recover
    
                      ... see other place in this document for full detail on this ...
```














### CoA Courses Of Action Matrix

       map tools to known attacker tools

Risk Evaluation

Choosing controls

       Mandatory? Regulatory
       Optional? Best practice, framework
              Cost
              Mitigation

Risk Likelihood Impact Direct cost downtime reputation and other intangible assets

### Quantitative risk

       SLE single loss expectancy = Value of asset x EF Exposure factor
       
       ALE = annual loss expectancy = ARO x SLE

###  Qualitative

       Categorise (easier)
       
              Assets - Irreplaceable, High, Med, Low, 
              Risk
                      One off / recur
                      Critical / High / Med / Low
                      
       Traffic light red/amber/green
       
       FIPS 199 categorises IMPACT
       
              Low / med / high

1. Risk Assess : Look at all threats and vulnerabilities
2. Technical Impact Review : Look at high/med/low impact
3. Technical Control Review : Choose controls to mitigate threats
4. Operational Control Review : Put in place policies and procecedures to help mitigate threats





















# Module 2 : Vulnerability Management

## Steps

```
       1       Identify Requirements
                             Document regulatory environments
                             Document corporate policy
                             Classify Data
                             Asset Inventory
                                     Critical assets
                                     Non-critical assets
       2       Choose Freqency of scan which will depend on
                      Risk appetite of company
                      regulatory requirements
                      technical constraints
                      workflow
       3       Choose tools to perform vulnerability scan
       4       Run scan
       5       Report on scan output
       6       Remediate any CVE found
       7       Ongoing scanning and monitoring
```

Security Policy

Enforce => demonstrate due care and due diligence have been applied

Site Security Handbook IETF RFC 2196

SANS is global leader in IT Security Training

```
       SANS = SysAdmin, Audit, Network and Security
    
       security policy handbook SANS.org => Resources => Security Policy Project
```

### Regulatory environments

due diligence : show you have done what you can, properly

negligence : may result in criminal charges

FISMA is a regulated environment Federal Info Security Mgt Act surrounding government agencies

PCI DSS Payment Card Industry is a strict regulated environment which must show compliance to eg CIS benchmarks

SANS makes guidelines for software development

GIAC from SANS is a certification

OWASP monitors web attacks

NIST supports US innovation and standards

CIS Center for Internet Security makes security benchmarks to show compliance eg PCI DSS can show compliance to this

### Assets : DEFINE WHAT YOU HAVE TO PROTECT!!!

VALUE What are they worth? Work required to develop Work required to maintain

ATTACK - what liability can they present ie how much can we lose?

```
       business continuity
       
       legal

```

### Identify CRITICAL SYSTEMS

```
       Telecoms
       Web presence
       Fulfill orders


​       
```

### Classifying Data

```
       Product
       Customer
       Finance
       Legal

```

Data handling = document management = data policy

Workflow - who can approve changes

### Data classification

```
       Unclassified : public
       Classified : NDA required
       Confidential : sensitive
       Secret
       Top secret  highest

```

### Vulnerabilities : DEFINE HOW YOU ARE GOING TO SCAN YOUR ASSETS

### Scanning frequency

```
       In order to determin the scanning frequency one must look at
    
       - Risk appetite : amount of risk a company is willing to tolerate
       - Regulatory requirements
       - Technical Constraints
       - Workflow = flow of transactions
              
       Hard-wire vulnerability scanning in with other workflows like network management and software dev
```

### Ongoing scanning

```
       Continuous Security Monitoring : done daily

```



















# Threat Management

## Mangement Controls

### User Training

### Policies and Procedures

IRP Incident Response Policy

Ethical Hacking : Penetration Testing

### Auditing

Log management

## Technical Controls

### Sofware updating

Software updating : OS

Software updating : AV

Software updating : apps

Software updating : libraries

### Intrusion

DNS Poisoning























## Certification

```
       Assessed formally against a 3rd party standard; often independent evaluation ie
              3rd party
```

Scheduled Review Incidents Trends Analysis Changes Additions Progress towards compliance

Enhancing processes

Continual improvement Process review Process retirement


















## Policies

Password policies

Account management policies

AUP Acceptable Use = Fair Use

Privacy Policy

Surveillance

Security assurance = monitor data comms to ensure no data theft

Monitor data eg email, telephone

Physical monitoring : CCTV, alcohol/drugs test

Data classification

Data retention policy

Short term : version control

RPO in backups : last point at which a backup was taken

RTO : Recovery Time Objective : goal (in time) to get system up and running after a fault/attack - less than MTD Max Tolerable Downtime

Personnel Policy / Training

Separation of duties

Job Rotation

SOP Standard Operating Procedures

Dual control : shared ownership of critical areas

least privilege

auditing : decisions are recorded

mandatory vacation

rotation of duties / job rotation

succession planning

Mitigate personnel vulnerabilities with training and also with multi-factor authentication








# Succession planning

plan for change!














# Security Awareness Training

Policies
Penalties
Incident response
Site security
Data handling
PII
backup
encryption
password management
account management
Social engineering
Use of browsers and other networked software
Role-based training
Cross-training
Certification
(ISC)2 = CISSP
SANS = GIAC - Security Essentials
ISACA - CISA Auditor and CISM Manager
EC-Council - CEH Certified Ethical Hacker






## CVSS Common vulnerability scoring system

indicates how severe a vulnerability is

Investigate

Big picture with results

## Logs

```bash
> hosts vulns -R 1.2.3.4 search to match exploits with vulnerabilities
```

false positives
       add to exception list       

Trend analysis

Number of incidents

Detection times

Response times

Network metrics eg traffic volume

## Compliance

Current trends

Alien Vault : SIEM gather data SecureWorks fireeye symantec microsoft DarkReading SANS

## Remediation

Cost of implementing the remediation

Change control Plan remediation action Evaluate potential impact

Configuration management : identify all hardware/os/software and their config settings. Will have detailed analysis of hardware, os, apps stored on the database

Change management : manage changes to config

```
       MAC move, add, change

       Ticket must be authorised for the change
       
       Record in job log
```

Exception management : for exceptions to the rule eg non-compliant systems for legacy purposes

## SOP Standard operating procedures

Reactive vs proactive

Download or create, then test the fix in a sandbox

RFC Request for change = when faults found, must submit a change request to fix those faults

CAB Change advisory board = board which approves changes

Trial in a sandbox if possible

Update AV Signatures (obvious)

User Training

Note

```
       Air gap is the space around an isolated computer
       
       Sheepdip is ONE ISOLATED COMPUTER - Plug in your USB stick to test for viruses before you plug into the main network
       
              MONITOR
       
                      PORTS USED BY MALWARE
                      FILES CHANGED BY MALWARE
                      NETWORK COMMUNICATION ATTEMPTS MADE BY MALWARE
                      AV INSTALL TO TRY AND ANALYSE MALWARE
                      
                      YOU DON'T VULNERABILITY SCAN A SHEEP DIP : YOU INSTEAD ANALYSE THE MALWARE
       
       SANDBOX IS PROCESS OF ISOLATING COMPUTER OR NETWORK
       
              1) Test fix in a sandbox
              2) Submit formal change request with the sandbox test results
       
```

Can prioritise remediation fixes according to

```
       Criticality of the system
       Severity of the vulnerability
       Difficulty of applying the remediation
       
       Note : age of vulnerability is irrelevant : old or new, vulnerabilities can still affect us
       
       
```

#### Inhibitors to remediation

Formal change control - can degrade your company’s ability to quickly respond to threats, as fixes have to be formally approved.

Degrade functionality

SLA affected

MOU (intent to work together) affected

KPI

```
       uptime
       downtime
       response time
       MTTF
       MTBF
       MTTR
       MTBSI Mean time between service incidents
       
       
```

### Host Remediation

Servers

Endpoints

Mobile Devices

ICS industrial control systems

SCADA : control panel to manage an industrial building eg a car manufacturing plant

```
       NIST 800-82 : protect SCADA eg disable links
```

boards called PLC Programmable Logic Controllers

Network appliances (router/switch/firewall)

```
       ensure browser logins not internet facing 
       
       log in via ssh
       
```

IOT

## Physical infrastructure

### wifipineapple

hardware device which can plug into a wired network port but then do a wireless scan of your whole network. It also has pentest tools to try and hack into your network in order to test it.



## VM infrastructure

hypervisor

hosts

```
       vm sprawl : create vms without proper change control

       dormant vm
```

virtual network connections

Care! AWS test policy


































## Secure Software Development

SDLC : Agile, Waterfall

Agile

  Maturity model : each iteration is more mature     

Microsoft SDL



































### OWASP monitor web attacks

Open Web App Sec Project = monitor web attacks

### ZAP : Zed Attack Proxy

       auto find insecurities in your web apps as you build them
       
       Web Intercept Proxy : Browser requests go through ZAP so that it can see
                     and analyse all your web traffic and responses
       
       Spider : crawl pages
       
       Brute Force : find files even if no link to them

#### Webgoat from OWASP

       Scapegoat machine deliberately set up so you can attack it

       30 vulnerabilities you can identify


### SANS : global security

       GIAC certification


### CIS center internet security

       Top 20 Controls
       
       Produces benchmarks which are globally agreed sets of security standards for different types of server. Freely available as PDF from cisecurity.org after registering.


### NIST standards

National Institute of Standards And Technology

central standards

## Attack types

### buffer overflow

       GET /AAAAAAAAAAAAAAA\x80\x81\x82\x83\...

       Mitigate with proper input validation


### arbitrary code execution

attacker runs code

### remote code execution

attacker runs code remotely

### command/SQL/XML injection

       SQL INJECTION IN WEB PAGE REQUEST
       
              GET abc.com/page.php?ID=22;CREATE TABLE x ....


### directory traversal

```
       TRY AND NAVIGATE FROM ONE SITE TO ANOTHER USING ../../ PATHS
       TO GO UP AND DOWN LEVELS
       
       GET /scripts/../../folder/file.txt    NAVIGATE UP LEVELS
       
```

Note : code injection, buffer overflow and XSS attacks can all be easier on social medial sites where there is less input checking compared with some other sites

### cascading failures 

  EG DNS FAILURE CAN IMPACT ON DEPENDENT SYSTEMS


Zero day attack = on newly released software; no one else knows yet about this threat

### Advanced terms

```
       Race condition : programming : trying to do things in the wrong order so 
                                     incorrect output results

       Exception handling : of errors : proper error messages etc

       Unhandled exception : system crashes

       Cookies : store web data : sent between server and client. Can contain sensitive data.  Can be encrypted and used only over HTTPS

       Integer overflow : too big
```

### Code testing

#### Static code testing

```
       source code analyzer
       
              scan source code for signatures
              
       manual code / peer review : human reading code
       
```

#### UAT user acceptance test

#### NIKTO : Web vulnerability scan

  Free tool used by many to expose any weaknesses in their web server or apps

#### Fuzz testing

```
       Application UI
       
       Protocol : transmit changed packets
       
       File : change extension
       
       must detect crash - which app caused it?

       Peach Fuzzer : automated tool to test  your web app for zero day vulernabilities
       Untidy
       

       Project Springfield : Microsoft bug fixer & cloud fuzzer
```

#### Stress test

performance under pressure

#### Regression Testing

after bug fix

#### Synthetic Monitoring

Only testing simulated transactions (not real ones)

#### RUM Real User Monitoring

Captures every transaction on a live web app

#### Interception Proxy testing

#### burp suite 

portswigger.net

      set burp as proxy 127.0.0.1 on 8080

#### OWASP Zed Attack proxy

#### Zap Vega

### Firewall

#### WAF Web App Firewall = IDS

       protects Apache (50%),  IIS (12%) , nginx (17%)
   
#### ModSecurity WAF

Open Source WAF 

       uses OWASP rules, originally for Apache but now other platforms also)

#### NAXSI NGINX WAF

Nginx Anti XSS and Injection 

       WAF Web Application Firewall uses White List technologies for Nginx web server

#### Imperva SecureSphere WAF 

       Web Application Firewall : for data center

### Trusted environment

OS, Apps, Firmware, Drivers secure

Hardware eg DoD Trusted Foundry where hardware supply chain is tested

       Exam : OEM documentation can accompany hardware to prove license is good


### Code Signing

Software Fingerprinting

### Reverse engineer

decompose code

disassembler into assembly code : complex

decompiler into language

debugger : step through

obfuscate code : make it more difficult to decompile

Reverse engineer eg malware!!!



















































## Module 3 : security appliances

Tools can be categorised

#### Prevent Attack

       IPS, firewall, AV, Anti-Malware, EMET Enhanced Mitigation, Web Proxy, WAF Web App Firewall

#### Exploit Framework - conduct attack

#### Collect Data

       host/port scan, vulnerability scan, SIEM security info and event mgt, packet capture, IDS

#### Analyse Data

       vulnerability scan, interception proxy

#### Forensics - after attack

       Crime Scene tools after an attack - hashing, password crack, image

### Firewall

filter

rule

       processed top to bottom : if traffic hits a match then it is allowed
              to proceed. Implicity deny at bottom.
              
       tuples = set of elements (eg set of conditions on firewall rule)

least access

drop - no notify

reject - notify

firewalk

       attacker tries to work out the acl
       
       mitigate with NAT
       
log good/bad attempts

blinding attack : flood the server so logs can’t keep up and so and record of the attack will be incomplete

### Web Proxy = web security gateway

block virus/spam blacklist cache pre-fetch

transparent : client not aware non-transparent : client must be configured

### Reverse Proxy = Inbound Traffic

Reverse Proxy lives on the perimiter network

       Forwards correct traffic through the firewall into the VOIP server on the LAN
          

Firewalls made by

Cisco

       PIX firewall old
       ASA firewall now

Juniper HP Dell IBM

CheckPoint

Palo Alto

### IDS

#### NIDS

just on the INTERIOR side of the FIREWALL

       Port mirror : on a switch
       passive : just logging
       
       active : end TCP session
       active : shunning : add extra filter to firewall to block attacker IP

Snort on Windows Server : IDS, IPS, logging, real-time analysis

Sourcefire : Cisco IDS

Bro.org for linux

Note : configuration often depends on RegEx (regexr.com)

UTM

IDP Intrusion Detection and Prevention = IPS

       throttle bandwith
       change firewall rule
     

HIDS Symantec endpoint

HIPS

### Detection

Signature = hash

Anomaly - check for deviations from the norm, while attack is happending eg changes in traffic pattern, url length, packet header change etc

Behaviour - detects the result of an attack by eg detecting files that have been altered

Domain or Server Isolation

Either isolate the DOMAIN (using IPSEC) or just ONE SERVER and also can add EXCEPTIONS to this rule

## Malware

### Dropper - first stage

       get launcher code installed on the system. Admin privileges required so must use vulnerability or get user to install

### Maintain access

#### C2

C2 or C&C is command and control software which the attacker can use as RAT remote access trojan
              
?? key logger ??
                      
Peer-to-peer Botnet 

Created by C&C software talking to infected computers on the inside of your LAN

Strengthen access eg gain access to domain admin credentials

### Action on objectives 

eg copy or modify data

       Exfiltration = copy data out of system

### Concealment

AV

personal : host-based

network : NIDS

stealth : virus pass good copy to scanning software

modification : polymorphic

modification : metamorphic : complete recompile

armor : deliberatedly make it harder to analys this code

retrovirus : disable av

slow and sparse : avoid detection by replicating slowly

AV : Sysinternals

       Autoruns : software which auto-starts
       
       Process Explorer
       
       Process Monitor
       
       TCPView
       

AV : EMET Enhanced Mitigation Experience Toolkit

       Microsoft
       
       Can force apps to use CPU features - use with care!

       Fine-tune some security features
       

































# Logging

### Sniffer

#### WinPCAP = sniffer = LibPCAP
   
       promiscuous mode : listen to all packets
       
                     Switch : must port mirror to listen to traffic on other ports
                     
       Note : can disable promiscuous mode on all network devices to prevent a sniffer from reading full contents of all packets
              
              
              
### Network Protocol Analyser

#### Wireshark

#### Kismet : WIFI linux

#### TCPDump : Linux
    
#### Dsniff : Linux

#### Ettercap
       

Protocol Analysis : analyse IP TO/FROM, PORT TO/FROM, MAC TO/FROM

Packet Analysis : analyse the WHOLE PACKET INCLUDING DATA

Traffic Analysis : different types of traffic

Netflow Analysis : from Cisco : looks at different ‘flows’ of traffic or ‘conversations’ eg Skype conversation, DNS traffic flow, etc

Network monitoring most active hosts hosts producing packets in error filter baseline generate frames for testing bandwidth alarms

Sniffing Tools

TCPDump
       windump
       tcpdump -i eth0

Wireshark
       .pcap file output

Netscout / Network General

## WIFI tools

AirPCAP

Aircrack-ng

Injection Tools

Dsniff

Ettercap

hping

Nemesis

Scapy

































## Network Monitoring

### MTRG Multi Router Traffic Grapher

```
       SNMP tool : creates graphs
       
       open source 
       
       Linux (can be used in Windows via Perl)
       
```

### MTRG as a (ongoing) service

```
       use crontab (Linux)
       run MTRG as a service (Windows)
       
```

### Cacti.net SNMP Monitoring

with graphs using SNMP on Linux

### Netflow

```
       This analyses stats on flow of IP traffic : equivalent of taking all of Wireshark collection but then aggregating and collecting the different 'flows' of traffic and reporting on each individual flow - stats, throughput etc
       
              SolarWinds.com 

                      Netflow Analyser on RHEL / CentOS
                      Reports network flow to proper database for display and analysis
              
              alternatives : sFlow, jFlow, IPFIX IP Flow Info Export
       
       
```

### Nagios.org

```
       SNMP and HTTP info gathering.  Agent installed on client.
       
```

Resmon

Perfmon

### Log Review

### SIEM Security Info/Incident and Event Mgt

       SIEM general term = Security Info/Incident and Event Mgt

       SIEM = LOGGING AND ANALYSIS OF LOG DATA

SIEM can COLLECT AND ANALYSE LOGS CENTRALLY

       aggregates multiple sources, often XML
       
       synchronise sources with time
       
       secure channels
       
       confidentials


Critical part

```
       Identify trends
       
              increasing malware activity
              hosts not updating
              bandwidth use increasing
              traffic spikes
              
       Correlate events with RISKS!
       
              IOC indicator of compromise
              
       Alert
       
       Retain records for proof of compliance
       
       
```

### Big Data

```
       Unstructured data sets : variety of sources
       
       High volume
       
       High velocity
       
       eg Hadoop DFS
       
       Data visualization
       
```

### SIEM tools : SPLUNK, ARCSIGHT, QRADAR, AlienValut, OSSIM, SysLog, Event Viewer

### SPLUNK analytics : big data : uses Hadoop

       SPL splunk search processing language
       


#### ArcSight by HP

#### QRadar

#### Alien Vault is SIEM (gathering data) tool

#### OSSIM Open Source Security Info Mgt

   integrate SNORT and OpenVAS vulnerability scanner
              
#### Syslog COLLECTS LOGS CENTRALLY

##### KiwiSyslog.com

      store SNMP logs


### Windows Event Viewer

subscriptions and forwarded events

.evtx uses XML formatting

Information Event 1102 is CLEARING THE SECURITY LOGS (Note : Transcender error : says it’s 102 but it’s not in real life)

Information Event 4719 is CHANGING AUDIT POLICY

### Syslog (linux events)

centralised collection

collect CISCO events

severity

```
       0 emergency
       1 alert
       2 critical
       3 error
       4 warning 
       5,6 info
```

### Firewall logging

#### Linux iptables

generally correct format for output

#### Packet logging

#### pcap file format used

### Nmap logging

as XML, Grep (RegEx), view on screen

### IDS reporting eg SNORT

Binary output/CSV

### tcpdump uses pcap

### SIEM 

data correlation (once data collected)

Signature based

Anomaly based : examine headers : check for deviations from the norm

Availability : is host online?

Heuristic real-time learning

       tune in and learn from data gleaned from honeypot/nets ; self-learn

Behavioural analysis

       Log on out of hours
       
       check TTP Tactics, Techniques and Procedures (used by hackers)
       
       DDoS with traffic surge
       
       high CPU
       
       high RAM
       
       network scans
       
       APT comms eg internet chat comms or other; can spot this
       
              check for unknown apps over known ports eg 53DNS
              
       Fast flux DNS : change IP of a domain to circumvent blacklists
       
       Data exfiltration : stealing data: high volumes out

### Other issues to be aware of

#### `Low and slow` or `sparse` attack

       so many false positives that the odd one or two 'real' attacks can get by unnoticed
       
       blinding - large attack at same time as another real attack
       
#### SSH - widely used

#### HTTPS - now far more widely used

### Advanced Analysis

experienced human could possibly spot something

#### FPC full packet capture

  huge storage requirements 

#### RNA retrospective network analysis

huge storage requirements

#### Wireshark

analyse = expert Info eg 5 minute trace

Wireshark - statistics - flow graph

       shows which computers sending/receiving data
       
       can spot one-sided traffic

Wireshark filter ip.addr==1.2.3.4

Wireshark - statistics - Protocol Hierarchy

       shows which protocols generated most traffic

#### Netflow - visualise data

#### EtherApe (Linux)

### Wireless Analysis

#### NetScout 

#### Also 

AirMagnet 

Ekauhau Site Survey 

Metageek 

inSSIDer/Chanalyzer

#### Beacon wifi packet

special type of packet found only in wifi 802.11
       
#### Probe wifi packet

special wifi packet also in 802.11
       
### Availability Analysis

Five 9’s = 99.999% uptime (gold standard of uptime over course of a year)

       99.999/100 
       
       0.00001 * 365 days * 24 hours * 60 minutes * 60 seconds
       
       comes to only 315 seconds = 5 minutes down a year!


































































































# Incident Management

## IR = Incident Response Team

IRP

Playbook

Runbook

Emergency Contacts

First Responders

### ITIL IT Support Best Practice Overview

ISO-27001

ISO-27002

ISMS Information Security Management System

Risk Management

ISO Security Awareness

Service Management

### ITIL Incident Management

SOC Security Operations Centre

SOC Incident Analyst

Incident Classification

Incident Response

Incident Escalation

Incident Prioritisation P1 P2 P3

Incident Identification

Incident Remediation









### Technical 

    Hard work goes on here!!!

### Management

       Making company aware of its existence and importance
       Detail authority for IR team to run company if necessary
       Decide which key systems can/should be removed from network


### HR Human Resources

       Responsible for

              Hiring
              Job Descriptions for IR team
              Create policy and procedure to clarify improper conduct on security matters


Legal Create non-disclosure agreements Create documents for notifying anyone affected Be aware of any illegal activity done during the attack

Marketing Talk to media during a crisis - press release Create educational materials, circulars

### Law Enforcement Agencies

       If crime committed
       May not be worried about stopping attack so much as getting more info on the attackers

### 3rd Party Incident Response Team 

For small companies Capture Data Provide Logs Identify good tools Identify poor tools which could taint evidence

### NIST Incident Handling Guide

## Incident Response Stages

### Preparation : Prepare Your System

Harden
Incident Response Policy
Confidential communications

### Detection : Detect An Attack

### Analysis : Analyse The Attack

### Recovery Process : Recover From The Attack

### Containment

              Segmentation : create network barriers eg move affected items 
                     to quarantine subnet
              Removal : shut down after get volatile info off them
              Isolation : from network - shut down ports etc
              Reverse Engineering : detailed analysis of malware code

### Eradication

              Sanitize
                     Clean disks eg Degauss Magnetic wipe 
              Reconstruct / Reimage
                     Re-image with a new fresh image (with hash validation)
              Secure Disposal
                     Shred if necessary

### Validate (that now OK)

              Patching
              Permissions
              Scanning
              Verifying Logging & Security Monitoring 

### Corrective Actions
              During incident
                     Change Control : update system
              Post incident
                     Lessons Learned Report : what happened and how we fought it
                     Update IRP Incident Response Plan

### Summary Reporting

 on the Incident 
       
## CSIRT 

Computer Security Incident Response Team

       Legal
       HR
       Marketing
       
### Comms

       confidential!
       out-of-band comms
              end-to-end encryption eg Off-The-Record or Whatsapp or Signal
              email with S/MIME or PGP encryption
                      keys from Identity Management system completely different
                             to the one being defended
       Act to PREVENT DISCLOSURE OF INFORMATION other than what is necessary between
              approved parties 

### Classifying

#### APT Advanced Persistent Threat

       Obtain and Maintain access       
       scan for virus, Command and Control, network activity
       

#### STIX Structured Threat Info Expression

by MITRE

##### Observable

       Oberservable stat, often logged as well for analysis
       
##### Indicator - pattern of observables

##### TTP tactic techniques procedures

potential threats

##### Threat Actor - bad guy

##### Campaign

multiple attacks from one bad guy Threat Actor

##### CoA Course Of Action

prevention actions

##### also Mandiant

OpenIOC Indicators of compromise

##### IETF Incident Object Description Exchange Format

### Incident Severity

Value of data

Data integrity

#### Downtime 

##### Degrate (partial) 

##### Interrupt (full)

#### Economic effect

### Scope Of Attack

breadth of systems affected

       Downtime HOW LONG HAS ISSUE BEEN AFFECTING US?
       Recovery Time HOW LONG TILL FIX?
       Data Integrity DATA CORRUPTION? WOULD HAVE TO RESTORE A CLEAN VERSION ETC.
       Economic Loss HOW MUCH THE COST?
       Criticality Of The System under attack

### Detection time

detection often days, weeks, months but often data stolen in minutes

### Recovery time

## scenarios 

### Playbook = Runbook

data-driven SoP = set of instructions what to do when things go wrong

#### Playbook - strategies

containing your ‘play’ ie sports strategies and rules etc

#### Runbook

series of operations and procedures

#### Runbook automation

carry out these operations in an automated manner

#### SoP standard operating procedures

## Types of data

### Personal Data

#### PII Personally Idendifiable Info

eg Date Of Birth or Mothers Maiden Surname

#### Payment Card Info

including CVV Card Verification Value (3-digit)

PCI DSS Data Security Standard

              Note : stricter laws apply to PCI DSS vulnerability scans, for example any false positives can't be filtered out but must be left in the report with a note to that effect.

              Also : if your system has changed in any way, PCI DSS requires that you carry out an immediate new vulnerability scan to determine if the changes have exposed your company to any new vulnerabilities

              PCI DSS must show compliance eg to CIS benchmarks
       
       
#### PHI Protected Health Info

       Anonymized

       De-identified has code to re-idenitfy the person if necessary

       unlike credit card info, cannot be changed.

       used for insurance fraud etc

#### Corporate Data

       IP intellectual property eg a book or film published by a company
       Corporate Confidential Data - secretly owned company data, hidden from 
              competitors to give an advantage
       Accounting
       Mergers/Acquisitions
       Programming Code
       

















### Incident Response Plan

#### Playbook = series of steps

Aims

       1) Re-establish secure working system
       2) Preserve criminal evidence
       3) Prevent it happening again

### Call/Escalation List 

Who will be responsible and who to notify, how
       
       eg Management, Legal, HR, Marketing

### Incident Form

Details of this incident

       - date, time location of incident and its detection
       - reporter
       - observation method
       - classification (type)
       - prioritisation
       - scope
       - actions
       - outcomes

### 4 Chain Of Custody Form

For Evidence eg Hard drives or images

       Tamper-evident bags
       
              Anti-static shielding
              
       Everyone who handles even on way to court must sign


### Crime Scene

       Crime tape
       
       What?  eg BYOD - can we legally seize it?
       How?

### Order of volatility

       CPU
       Swap file
       Tables eg routing table
       RAM - may have copies of encryption keys in RAM which have been used
                             to decrypt data on the drive - if you turn off the PC, that data
                             will be gone
       Temp files
       HDD
       Logging data
       physical config 
       network topology
       archived media






























# Forensics 

Forensics is science of collecting data in a criminal investigation

## FTK Forensic Toolkit

Latent = hidden, cannot be seen - must be gathered using computer

```
Workstation
Write Blockers
Cables and Adapters to connect to different devices and drives
Blank media eg HDD, CD, DVD, BluRay, USB
Cameras
Crime Tape
Tamper-Proof Seals
Forms
```




### EnCase

Forensic Suite of tools

### eDiscovery

manage data collected
    
### Endpoint Investigator

use server to analyse clients
       
### Sleuth Kit

command line tools
       
#### Autopsy = GUI
              
              create a case
              
### Helix
    
              Linux LIVE CD : does not affect host
              
### Cellebrite

Mobile forensics
       
     UFED Universal Forensic Extraction Device 
     Forensically clean : does not affect data it is investigating
                      
###    Sysinternals
       
       

## Forensics Workstation

```
       Multi-core + 32GB RAM
       
       No internet or severely limited just to sites required for investigation
       
       TASK and Autopsy Forensic Browser can be found at the following locations:
       
       Task: 
       
       http://prdownloads.sourceforge.net/sleuthkit/task-1.60.tar.gz?download

       Autopsy Forensic Browser:
       http://prdownloads.sourceforge.net/autopsy/autopsy-1.70.tar.gz?download

       Google 'sans building a low cost forensics workstation'
              https://uk.sans.org/reading-room/whitepapers/incident/building-cost-forensics-workstation-895
       
       MOLEX
       SATA
       PATA
       SCSI
       FIREWIRE : POWER WITH DATA (400 AND 600)
       USB
       
       
       
```

1. Get Data = Image
2. Hash Image = Get Checksum

## Getting Data

### from RAM (Memory Acquisition)

              Memoryze from FireEye
       
              F-response TACTICAL
       
### Write blocker

prevents writing to RAM
       
              = hardware device or software
              
              CRU Forensic UltraDock - interrogates drives
              
                      HPA host protected area
                      DCO device config overlay
                      
### Live acquisition

computer running / shut down / pull power
       
       

### Hashing

```
       SHA secure hash algorithm
       
              FIPS standard (Federal Info Processing standard)
              
              SHA-1 160
              SHA-2 256/512 in IPSEC, SSL
       MDA-5
              collisions exist (same hash for different files)
              
              BUT ! faster than SHA so often is default in most tools
              
```

#### Calculating the hash

```
       Certutil -hashfile File Algorithm
       
              Algorigthm = MD5 / SHA1 / SHA256 / SHA512
              
       fciv file checksum integrity verifier
       
       md5sum/sha1sum/sha256sum/sha512sum 
       
              -c can compare file with a hash
              
              
```

### Forensic duplicate

sector-by-sector replication of image

```
       Encase uses .e01 (metadata in file)
       
       DD is an imaging tool

              Raw format is .dd (raw image, metadata must be in separate file)
              
              if=  input file
              
              of=  output file
       
       dd if=/dev/sda/ of=/mnt/usbstick/backup.img
       
```











































## Passwords

### Password Storage

most passwords stored as MD5 or SHA1

Windows System 

      32\CONFIG\SAM          LOCAL USERS    
      C:\WINDOWS\NTDS\NTDS.DIT       DOMAIN USERS

Linux

      /etc/passwd    All users can reach this location
      /etc/shadow Only root user can reach this location

### Password cracking

#### Cain and abel

#### John the Ripper

#### THC Hydra

#### Aircrack-ng

#### L0phtcrack and ophcrack

#### Dictionary Attack

       splashdata.com

       Daniel Miessler github
       
#### Spidering : 

search in plain text all files on computer, then use these to try as passwords
       
#### Hybrid attacks eg James1

#### Pass The Hash PtH

if hash is obtained, submit it directly

       Combat this -  should only log on to DC with domain admin
                            credentials, also
                            Restricted Admin mode restricts where domain admin
                                          credentials can be used
                                          
Note : live system : might be possible to obtain from memory (RAM)


##  Forensic Analysis Of Computer

1. Copy of forensic image of machine
2. Break down any passwords to obtain access to data
3. Analyse data eg in EnCase Forensic analyser

Log viewer : accept Windows + Linux

Prefetch file analysis (not on SSD)

File System Viewer

```
       search file system for info quickly
       
       VSS volume shadow copy info
       
       System volume info
       
       Graphs of creation/deletion activity
       
       View binary files
       
       Images including looking for steganography
       
       
       
```

Registry viewer view changes deleted keys autostart items

USB Utility : report on devices which have been attached

Analysis And Recovery (Mod 4 Unit 3)

SIEM security info and event mgt : data will begin to flow in IDS : data flow in

Detection Of An Active Threat (Real Time ie being attacked now)

OODA Observe Gather info. Care - not ‘analysis paralysis’ Orient What type of attack? Which stage? Decide What can we do Act

Goal - gain initiative

```
        - move from REACT to WELL THOUGHT OUT RESPONSE
        
        
              
```




























































## CoA Courses Of Action matrix

### Detect

adversary and their resources

### Destroy

### Degrade

### Disrupt

### Deny

### Deceive
       
       



## Detection

Unusual Traffic Patterns

### DDoS

difficult to establish what is causing and where coming from

#### ICMP flood = TCP PING flood = Smurf Attack

#### Fraggle attack = UDP PING Flood

#### TCP SYN flood : create new TCP connections

       Must analyse log files
       
### Send traffic to sinkhole or blackhole
       
#### sinkhole = fake gateway

prevents INTERNAL TRAFFIC FROM REACHING THE REAL (BAD) SITE, AND ALSO CAN BE LOGGED WHICH INTERNAL CLIENTS ARE TRYING TO REACH THESE SITES
              
       Example : when a DNS QUERY is received for a site which is known to be malicious, the DNS response can be to a LOCAL SINKHOLE so if the client does try and connect to this malicious site, the packet request actually is sent to this LOCAL SINKHOLE so never even reaches the malicious site!!! Can be logged also.
              
#### BLACKHOLE = drop all packets

route to which traffic is sent, dropping all packets 
              
       ip route 1.1.1.1 255.255.255.0 null 0
              
                                   
Watch for outgoing traffic caused by your computers being  hijacked (as a 'bot')Network tap : hard
              

### Detection of other devices

ware device : cannot be detected once in place so a physical inspection of the network is required

Rogue wifi/switch/router can be used to try and harvest logon credentials, also potentially a MITM attack

Evil twin is a device with same name as the real device eg a WIFI point with same name

Rogue Switch : can turn off DTP Dynamic Trunking Protocol so that rogue switch can’t get access to good VLAN data

Authorised device : can be used in unauthorised way

eg try to connect to server with RDP or SSH

Smart appliances : can be installed on a network without checking

Beaconing = phoning home but both good and bad devices do this. check for malicious IP and bad packet sizes

Scan sweep of network

Host-based detection Sysinternals (windows) 1 hour long video on sysinternals and malware https://technet.microsoft.com/en-us/sysinternals/gg618529

Windows Forensic Toolchest      WFT (paid for software)

Redline from FireEye (freeware) : analyse RAM and processes

       has IOC Indicators of Compromise 

#### Dropper

malware installing malware

Masquerade : replace good with bad .exe

DLL injection of bad .dll

Dll sideload : loads malicious DLL

Process hollowing : fake the memory addresses of a process

Signed files

Check signature is valid

```
       Process Explorer
       sigcheck in process explorer
       
```

Compressed (packed) processes highlighted in yellow in process explorer

Delete process is it restored at system reboot? can it be deleted? if not, why?

Autoruns from sysinternals - which startup locations a program is running from, and does it run automatically?

Resource usage

CPU

RAM

```
       shouldiblockit.com
       
```

HDD du disk usage tool from sysinternals

Bad USB devices which pretend to be another class of device eg a keyboard

Unauthorised changes

Unauthorised privileges

AccessChk AccessEnum both in SysInternals







### DLP Data Loss Prevention

ensuring data is not being stolen

#### Data Exfiltration

##### HTTP/S onedrive, google drive, dropbox

       Note that SSL versions 1,2 and 3 are now officially vulnerable so the fix is to use TLS 1.1 or above instead. 


FTP
IM
P2P
Email eg gmail
SSH
VPN
Note that PFS Perfect Forward Secrecy can be used to prevent a VPN key from being used if it is discovered later on after a session has finished. Keys are generated afresh each time so old keys cannot be used. Requires setting up both on the VPN server and client. A master key may be obtained by the hacker, but because each key is freshly generated as an individual 'session' key, it's impossible to regenerated old 'session' keys

##### Steganography

can be done for small amounts of data - hide data within an image, audio or video

##### VLAN double-tagging

gain access to another VLAN to which you shouldn’t have access

##### File copy to USB etc

##### RAT Remote Access Trojan

##### nc Netcat (linux and windows)

       grant access to cmd.exe remotely
       send files

cryptcat does the same thing, but encrypted

#### Staging Area

Store zip files or chopped-up-zip-files ready for transport

Data can be stored hidden in NTFS ADS Alternate Data Streams inside a file. Can query this using powershell or ADS Spy.

Anomalous Activity

Unusual request patterns

Unexpected Outbound Communication

Check outbound port usage

Check traffic over legitimate ports, to check the traffic is legitimate

Check destination IP with blacklist providers

```
       BrightCloud
       MX Toolbox
       urlvoid.com
       ipvoid.com
       
       
```

Creating new accounts : all should be authorised

Service interruptions

Malware stopping anti-virus from running Service infected with malware so won’t run Service disabled by DOS attack

Buffer overflow

Execute code from memory location or Crash process or Crash computer

Each process gets buffer to which it can read/write. Vulnerability writes to this buffer but also to areas beyond this buffer.

Mitigate with INPUT VALIDATION (especially max length!)

Man-in-the-browser attack : adding extra fields into an HTML form

Sysinternals tools

Process explorer

```
       <<detailed analysis of windows services>>
       
```

Dropper

       launches other malware

Process Monitor

Run a keylogger : can detect if this attack has been suspected

Netstat : check destination IP

Autostart (Persistence)

Sysinternals autoruns

Containment Techniques

Analysis Paralysis

```
       Be aware 90% of attacks obtained access within minutes and obtained data filtration within minutes
```











### Lockdown

Prevent ongoing intrusion

#### Removal 

(remove item from network)

#### Isolate 

(leave machine on network but direct comms to blackhole)
       
#### Segment 

(leave machine on network and permit attacker to think they have access.  Like honeypot

       Can be Layer 2 (MAC) or Layer 3 (IP)

#### Reverse Engineer

     decompile; even trick the enemy by rewriting some code

#### Involving law enforcement

       They may be happy to let attack continue so they can gather more info
       They may have greater skills
       They should be involved if law is broken
               
#### Eradication

Clean image on top of CE Cryptographic Erase (like bitlocker but throw away the key)

##### NIST 800-88 sanitizatision

Physical destruction of disk : shredding

Degauss : magnetic wipe

Sanitization Process

Contain eg within quarantine area

Check for all malware processes

Terminate processes

Delete files giving rise to any malicious processes

Remove autostart locations

Replace contaminated processes with the legitimate version

Reboot system, still in quarantine

Check for malware

Reintroduce system to normal network

Validation = Ensure system is fixed

Ensure system can’t be assailed by threat vector which has just been responsible for the attack : ie we have fixed the attack but also prevented it from happening again

Check: Patches : up to date Permissions : intact Scans : check fully working and can alert of new attacks Logging : check fully working and can alert of new attacks

### Lessons learned

report writing

Who was the adversary? Insider? External? Why was the attack made? Motivation? Targets? When? Attack? Detection? Contain? Erase? How? Which TTP Tools Techniques Practices were used? What security could have prevented such an attack?

#### Incident summary report

#### Update Incident Response Plan

#### Change control

ensure changes made to strengthen system are robust and validated







































































































# Analysing Data : Data Analytics

## Data Aggregation

SIEM eg Splunk and OSSIM : collecting and summarising large amounts of information

## Data Correlation

SIEM eg Splunk and OSSIM : relating data to each other to find trends or relationships

## Logs

Firewall eg block packet at layer 3 Syslog - central logging for Unix and Linux Authentication eg Security Log Event Logs eg System or Application Log

Historical Trends, lessons learned

## Trends

## Remediation = risk mitigation = reducing risk

## Deterrent

Make threat less likely or less costly

Avoid risk

Transfer risk

Accept risk

Defence In Depth : Technical

Scanning Permissions Prevent machine on network (NAC) Auto reporting Security hardware Security software Outsourcing to experts CIA encryption etc

Defence in Depth : Personnel User training Dual control Separation of duties Cross train Vet 3rd party Mandatory vacation

Consultants : give advice

Managed Security Services Provider : outsource your security!!!

# SECaaS security as a service eg cloud AV

Policy

Standard : measure compliance with a policy

Procedure : SOP : task steps

Guidance : where no procedures exist

Continuous security monitoring

RUM Real User Monitoring : Captures every transaction on a live web app Synthetic Monitoring : Only testing simulated transactions (not real ones)

Continusously monitor for:

```
       Assets
       Vulnerabilities
       Threats
       Business Impact
```

Create continuous monitoring program: Define strategy with assets, vulnerabilities, threats, business impact all with a view on the company’s levels of risk tolerance

```
       Establish continuous monitoring program which has
              Metrics (what we measure)
              Frequency of measurement of metrics
              Frequency of review of whole process

       Implement

       Analyze data

       Respond to findings

       Review and update the program
```

Exceptions to the policy : reason why is not compliant

Forensic evidence gathering : clean!

Patching

Quality Control = testing

QA = define standards of control and testing

## V&V Verification and Validation

### Verification = compliance

does your item meet a policy? (compliance)

### Validation = functionality

does your item do the correct job that it is supposed to (functional)



## Control Testing

Test if you controls which you have put in place are correctly configured

Audits Internal External

Assessments

```
       Formal evaluation against a checklist 
```

Evaluations

```
       Evaluation = bigger picture : several assessments make up one evaluation
```

Maturity Models

```
       Assess how well developed a company's security models are

       Tier 2 : Risk Assess
      3 : Defined policies
            4 : Management oversee risks
            5 : highest

       Maturity model scale (non-numeric)
              Reactive
              Compliant
              Proactive
              Optimised
```