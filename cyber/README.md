# cyber

## Contents

- [cyber](#cyber)
  - [Contents](#contents)
  - [Labs](#labs)
  - [Threat Map](#threat-map)
  - [Cyber Random Terms](#cyber-random-terms)
  - [Cyber Glossary](#cyber-glossary)
- [Cyber Labs](#cyber-labs)
  - [Tools](#tools)
    - [Use of VPNs for security researching.](#use-of-vpns-for-security-researching)
  - [Cyber Labs Online](#cyber-labs-online)
  - [Regex labs](#regex-labs)
    - [TryHackMe](#tryhackme)
      - [Getting Started](#getting-started)
      - [RDP  root Tryh4ckm3](#rdp--root-tryh4ckm3)
      - [Complete Beginner Path](#complete-beginner-path)
        - [Introductory Research](#introductory-research)
          - [Steganography](#steganography)
          - [Steghide](#steghide)
      - [Vulnversity](#vulnversity)
    - [Mimikatz](#mimikatz)
  - [Cyber Labs on AWS](#cyber-labs-on-aws)
    - [AWS Linux Virtual Machine](#aws-linux-virtual-machine)
      - [Build A New Instance (T2 Large)](#build-a-new-instance-t2-large)
      - [Connect](#connect)
    - [AWS Linux Install Apache](#aws-linux-install-apache)
    - [AWS Linux Install Mongo](#aws-linux-install-mongo)
    - [AWS Build Ubuntu](#aws-build-ubuntu)
    - [AWS Upgrade Ubuntu To Latest](#aws-upgrade-ubuntu-to-latest)
    - [AWS Ubuntu via CLI](#aws-ubuntu-via-cli)
    - [Ubuntu Install Apache](#ubuntu-install-apache)
    - [Ubuntu Install NGINX](#ubuntu-install-nginx)
    - [Ubuntu Install python](#ubuntu-install-python)
    - [Ubuntu install nmap (1 minute install)](#ubuntu-install-nmap-1-minute-install)
    - [Ubuntu Install Docker](#ubuntu-install-docker)
    - [Docker Install Metasploitable](#docker-install-metasploitable)
    - [NMap Scan Metasploitable](#nmap-scan-metasploitable)
    - [Ubuntu Install Metasploit Part I](#ubuntu-install-metasploit-part-i)
    - [install metasploit (Part II)](#install-metasploit-part-ii)
    - [Ubuntu Install MongoDB](#ubuntu-install-mongodb)
      - [start mongodb](#start-mongodb)
      - [run mongo client](#run-mongo-client)
    - [AWS Kali with VNC](#aws-kali-with-vnc)
    - [Kali Install OpenVAS  (1 hour with attended input)](#kali-install-openvas--1-hour-with-attended-input)
    - [Ubuntu Install Docker](#ubuntu-install-docker-1)
    - [Docker Install Metasploitable](#docker-install-metasploitable-1)
      - [Run an exploit](#run-an-exploit)
    - [AWS Run Container](#aws-run-container)
  - [Kali](#kali)
    - [Kali Handbook](#kali-handbook)
    - [About Kali](#about-kali)
    - [Installing Kali](#installing-kali)
  - [Docker Kali](#docker-kali)
  - [Penetration](#penetration)
  - [Metasploit](#metasploit)
    - [What is Metasploit?](#what-is-metasploit)
  - [Metasploitable](#metasploitable)
  - [intro](#intro)
    - [Windows VMs we can attack](#windows-vms-we-can-attack)
    - [Metasploitable Setup](#metasploitable-setup)
      - [Data Path](#data-path)
      - [Documentation Path](#documentation-path)
      - [Exploit Modules Path](#exploit-modules-path)
      - [Scripts including Meterpreter Path](#scripts-including-meterpreter-path)
  - [Other Cyber Labs](#other-cyber-labs)
    - [NMap](#nmap)
    - [netdiscover](#netdiscover)
    - [dig](#dig)
    - [traceroute](#traceroute)
  - [red tools](#red-tools)
  - [port and host scanning](#port-and-host-scanning)
    - [vulnerability scanners](#vulnerability-scanners)
    - [openvas](#openvas)
    - [armitage = gui for metasploit](#armitage--gui-for-metasploit)
    - [metasploit](#metasploit-1)
    - [zenmap - host and port scan](#zenmap---host-and-port-scan)
    - [nikto - web server vulnerability scanner](#nikto---web-server-vulnerability-scanner)
    - [mbsa - windows server scanner](#mbsa---windows-server-scanner)
  - [ids](#ids)
    - [securityonion ids](#securityonion-ids)
    - [sguil ids](#sguil-ids)
    - [sgutil ids](#sgutil-ids)
  - [sysinternals suite of tools from microsoft](#sysinternals-suite-of-tools-from-microsoft)
    - [autoruns - what is set to auto start](#autoruns---what-is-set-to-auto-start)
    - [accesschk - search for unauthorised privileges](#accesschk---search-for-unauthorised-privileges)
    - [accessenum - enumerate access?](#accessenum---enumerate-access)
    - [du disk usage](#du-disk-usage)
    - [sigcheck - verify root certificate](#sigcheck---verify-root-certificate)
  - [cyber tools](#cyber-tools)
    - [veil](#veil)
    - [evasion](#evasion)
    - [pcap](#pcap)
    - [networkminer.exe](#networkminerexe)
    - [sysmon](#sysmon)
    - [pcap](#pcap-1)
    - [ossim](#ossim)
  - [Forensic Labs](#forensic-labs)
    - [CyberChef](#cyberchef)
    - [autopsy](#autopsy)
    - [Lab 11](#lab-11)
    - [Lab 12 : Network Segmentation : PFSense](#lab-12--network-segmentation--pfsense)
    - [Lab 12 : install backdoor malware](#lab-12--install-backdoor-malware)
    - [Lab 13 : Password sniffing](#lab-13--password-sniffing)
    - [Lab 14 : Using email to hack](#lab-14--using-email-to-hack)
    - [Lab 14 : Exploiting XSS with MITM attack](#lab-14--exploiting-xss-with-mitm-attack)
- [Cyber course](#cyber-course)
  - [History of cyber](#history-of-cyber)
  - [Present state of cyber](#present-state-of-cyber)
- [Kill Chain](#kill-chain)
- [Reconnaisance](#reconnaisance)
  - [OSINT](#osint)
  - [Google Hacking / Dorking](#google-hacking--dorking)
  - [Crawling](#crawling)
  - [Exploits](#exploits)
  - [Email harvesting](#email-harvesting)
  - [Social Media profiling](#social-media-profiling)
  - [DNS](#dns)
    - [centralops](#centralops)
    - [whois domain info (from sysinternals)](#whois-domain-info-from-sysinternals)
    - [nslookup list records](#nslookup-list-records)
    - [dig](#dig-1)
  - [geolocation](#geolocation)
    - [geoip - get location from ip](#geoip---get-location-from-ip)
  - [Domain Analysis](#domain-analysis)
    - [netcraft.com analyse domain stats](#netcraftcom-analyse-domain-stats)
  - [website](#website)
    - [httrack.com rip full site](#httrackcom-rip-full-site)
    - [archive.org](#archiveorg)
  - [scanning](#scanning)
  - [Social Engineering](#social-engineering)
  - [Conversion Tools](#conversion-tools)
  - [Scanning Labs](#scanning-labs)
    - [Wireshark](#wireshark)
    - [Free Online Port Scan](#free-online-port-scan)
    - [Superscan 4](#superscan-4)
    - [Angry IP Scanner](#angry-ip-scanner)
    - [IPScan24](#ipscan24)
  - [Footprinting](#footprinting)
  - [Footprinting = Topology Discover](#footprinting--topology-discover)
    - [Network Mapping Tools](#network-mapping-tools)
    - [Discovery tools](#discovery-tools)
  - [footprint](#footprint)
  - [fingerprint](#fingerprint)
    - [tcpview = netstat](#tcpview--netstat)
    - [Virtual Machine vulnerabilities](#virtual-machine-vulnerabilities)
    - [OpenVAS](#openvas-1)
    - [Nessus scanner : free for home use](#nessus-scanner--free-for-home-use)
    - [Qualys](#qualys)
  - [Hardening](#hardening)
    - [Templates](#templates)
  - [Vulnerability Types](#vulnerability-types)
    - [Vulnerability Feed](#vulnerability-feed)
    - [SCAP : Security Content Automation Protocol](#scap--security-content-automation-protocol)
    - [CVSS Common Vulnerability Scoring System](#cvss-common-vulnerability-scoring-system)
    - [Vulnerability databases](#vulnerability-databases)
      - [Bugtraq - detailed analysis of vulnerability disclosures](#bugtraq---detailed-analysis-of-vulnerability-disclosures)
    - [Vulnerability Access](#vulnerability-access)
    - [Scan types](#scan-types)
      - [DISCOVERY SCAN](#discovery-scan)
      - [ASSESSMENT SCAN](#assessment-scan)
      - [Scope](#scope)
      - [credentialed scan](#credentialed-scan)
      - [non-credentialed scan](#non-credentialed-scan)
      - [Scan scheduling](#scan-scheduling)
      - [Reporting](#reporting)
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
    - [Exploit Stories 2015](#exploit-stories-2015)
    - [Exploit Stories 2014](#exploit-stories-2014)
    - [Exploit Stories 2013](#exploit-stories-2013)
    - [Exploit Stories 2011](#exploit-stories-2011)
    - [Exploit Stories Undated](#exploit-stories-undated)
  - [Exploit Malware](#exploit-malware)
    - [Angler Exploit Kit](#angler-exploit-kit)
    - [Axpergle found inside Angler Exploit Kit](#axpergle-found-inside-angler-exploit-kit)
    - [JRAT Remote Access Trojan](#jrat-remote-access-trojan)
    - [Mimikatz](#mimikatz-1)
    - [Metasploit](#metasploit-2)
    - [hashcat](#hashcat)
    - [ProRat](#prorat)
    - [responder](#responder)
    - [RIG Redkit, Infinity and Goon also known as HTML/Meadgive](#rig-redkit-infinity-and-goon-also-known-as-htmlmeadgive)
    - [Sweet Orange also known as Win32/Anogre](#sweet-orange-also-known-as-win32anogre)
    - [Wordscrape](#wordscrape)
  - [Ransomware](#ransomware)
    - [Reveton - encrypts entire hard drive](#reveton---encrypts-entire-hard-drive)
    - [penetration test steps](#penetration-test-steps)
  - [Offensive Penetration Testing And Exploits](#offensive-penetration-testing-and-exploits)
  - [PCI *DSS*](#pci-dss)
    - [Exploit Frameworks](#exploit-frameworks)
  - [Kill Chain](#kill-chain-1)
    - [Metasploit](#metasploit-3)
      - [PAYLOAD = WHAT YOU DOWNLOAD TO A MACHINE THAT YOU FIND A VULNERABILITY ON](#payload--what-you-download-to-a-machine-that-you-find-a-vulnerability-on)
      - [CVE VULNERABILITY =\> EXPLOIT MODULE =\> PAYLOAD](#cve-vulnerability--exploit-module--payload)
      - [Armitage = GUI for Metasploit](#armitage--gui-for-metasploit-1)
- [Defending](#defending)
    - [Classes Of Controls](#classes-of-controls)
  - [Cyber Organisations](#cyber-organisations)
  - [Cyber Roles](#cyber-roles)
    - [CISO Chief Info Security Officer](#ciso-chief-info-security-officer)
  - [Framework](#framework)
    - [NIST National Institue Standards Technology](#nist-national-institue-standards-technology)
  - [Control Types](#control-types)
  - [Frameworks](#frameworks)
  - [Controls](#controls)
    - [CoA Courses Of Action Matrix](#coa-courses-of-action-matrix)
    - [Quantitative risk](#quantitative-risk)
    - [Qualitative](#qualitative)
- [Module 2 : Vulnerability Management](#module-2--vulnerability-management)
  - [Vulnerability Management Steps](#vulnerability-management-steps)
  - [Risk Assessment Matrix](#risk-assessment-matrix)
    - [Regulatory environments](#regulatory-environments)
    - [Assets : DEFINE WHAT YOU HAVE TO PROTECT!!!](#assets--define-what-you-have-to-protect)
    - [Identify CRITICAL SYSTEMS](#identify-critical-systems)
    - [Classifying Data](#classifying-data)
    - [Data classification](#data-classification)
    - [Vulnerabilities : DEFINE HOW YOU ARE GOING TO SCAN YOUR ASSETS](#vulnerabilities--define-how-you-are-going-to-scan-your-assets)
    - [Scanning frequency](#scanning-frequency)
    - [Ongoing scanning](#ongoing-scanning)
- [Threat Management](#threat-management)
  - [Certification](#certification)
  - [policies](#policies)
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
      - [Verification Testing](#verification-testing)
      - [Validation Testing](#validation-testing)
      - [burp suite](#burp-suite)
      - [OWASP Zed Attack proxy](#owasp-zed-attack-proxy)
      - [Zap Vega](#zap-vega)
    - [Firewall](#firewall)
      - [WAF Web App Firewall = IDS](#waf-web-app-firewall--ids)
      - [ModSecurity WAF](#modsecurity-waf)
      - [NAXSI NGINX WAF](#naxsi-nginx-waf)
    - [Trusted environment](#trusted-environment)
    - [Code Signing](#code-signing)
    - [Reverse engineer](#reverse-engineer)
  - [Module 3 : security appliances](#module-3--security-appliances)
      - [Prevent Attack](#prevent-attack)
      - [Exploit Framework - conduct attack](#exploit-framework---conduct-attack)
      - [Collect Data](#collect-data)
      - [Analyse Data](#analyse-data)
      - [Forensics - after attack](#forensics---after-attack)
    - [Firewall](#firewall-1)
    - [Web Proxy = web security gateway](#web-proxy--web-security-gateway)
    - [Reverse Proxy = Inbound Traffic](#reverse-proxy--inbound-traffic)
    - [IDS](#ids-1)
      - [NIDS](#nids)
    - [Detection](#detection)
  - [Malware](#malware)
    - [Dropper - first stage](#dropper---first-stage)
    - [Maintain access](#maintain-access)
      - [C2](#c2)
    - [Action on objectives](#action-on-objectives)
    - [Concealment](#concealment)
  - [Network Monitoring](#network-monitoring)
  - [Incident Response](#incident-response)
- [Analysing Data : Data Analytics](#analysing-data--data-analytics)
  - [Data Aggregation](#data-aggregation)
  - [Data Correlation](#data-correlation)
  - [Logs](#logs-1)
  - [Syslog](#syslog)
  - [Remediation = risk mitigation = reducing risk](#remediation--risk-mitigation--reducing-risk)
  - [Managed Security Services Provider](#managed-security-services-provider)
- [SECaaS](#secaas)
  - [Policy](#policy)
  - [Procedure : task steps](#procedure--task-steps)
  - [SOP Standard Operating Procedure](#sop-standard-operating-procedure)
  - [Guidance](#guidance)
  - [Continuous security monitoring](#continuous-security-monitoring)
  - [V\&V Verification and Validation](#vv-verification-and-validation)
    - [Verification = compliance](#verification--compliance)
    - [Validation = functionality](#validation--functionality)
  - [Control Testing](#control-testing)



## Labs

[Labs](labs.md)





## Threat Map

https://www.fireeye.com/cyber-map/threat-map.html



## Cyber Random Terms

[Cyber Random Terms](cyber-random-terms.md)

## Cyber Glossary

[Cyber Glossary](cyber-glossary.md)

[Cyber Glossary 2](cyber-glossary-2.md)


























































# Cyber Labs

## Tools

### Use of VPNs for security researching.

Please download and use a VPN when doing research, even as an ethical hacker, so that you are not targeted by your ISP or other person who is watching out for such activity, as you are entering territory which can be deemed as invasive so you must be very careful not to go beyond certain boundaries in your research, but also you should use a VPN to protect yourself as well from being targeted by your ISP.

A free one would be `HotspotShield` and a paid one would be `OpenVPN` which costs




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


## Regex labs

see regexone and also regexr for some REGEX labs




### TryHackMe

#### Getting Started

https://tryhackme.com/my-machine



#### RDP  root Tryh4ckm3

#### Complete Beginner Path 

##### Introductory Research

###### Steganography

https://0xrick.github.io/lists/stego/ 

###### Steghide

```bash
# install
sudo apt-get install steghide
# does a file have embedded data
steghide info file
# extract embedded data from a file
steghide extract -sf file

```





#### Vulnversity

https://tryhackme.com/room/vulnversity

```bash
# service discovery - scan for open ports
nmap 1.2.3.4
nmap domain.com
# scan version
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


### [Mimikatz](#Mimikatz%20-%20Obtain%20Hash)









## Cyber Labs on AWS

### AWS Linux Virtual Machine

#### Build A New Instance (T2 Large)

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
touch /var/www/html/index.html
echo "<html>hello world from phil</html>" > /var/www/html/index.html
```

Unblock port 80 using EC2 > Security Groups > <<Group>> > Change rule and add port 80

Go to <<Public IP>> and you should now have a web server!!!


### AWS Linux Install Mongo

```bash
# check which version of linux we are using
grep ^NAME  /etc/*release
# create environment
sudo touch /etc/yum.repos.d/mongodb-org-4.2.repo 
sudo chmod 777 mongodb-org-4.2.repo
sudo echo [mongodb-org-4.2] >> /etc/yum.repos.d/mongodb-org-4.2.repo 
sudo echo name=MongoDB Repository >> /etc/yum.repos.d/mongodb-org-4.2.repo 
sudo echo baseurl=https://repo.mongodb.org/yum/amazon/2/mongodb-org/4.2/x86_64/ >> /etc/yum.repos.d/mongodb-org-4.2.repo 
sudo echo gpgcheck=1 >> /etc/yum.repos.d/mongodb-org-4.2.repo 
sudo echo enabled=1 >> /etc/yum.repos.d/mongodb-org-4.2.repo 
sudo echo gpgkey=https://www.mongodb.org/static/pgp/server-4.2.asc >> /etc/yum.repos.d/mongodb-org-4.2.repo 

# install mongo
sudo yum install -y mongodb-org
# check which version we are using
ps --no-headers -o comm 1
# start
sudo systemctl start mongod
# check status
sudo systemctl status mongod
# start when system starts
sudo systemctl enable mongod
# client
mongo
# database
use test-database-01
# show databases
show dbs
# insert data
db.table01.insert({"name":"test name"})
# show databases again
show dbs
# create collection
db.createCollection("table02")
db.table02.insert({"name":"test name"})
# show collections / tables
show collections
# show data
db.table01.find()
db.table02.find()
```


### AWS Build Ubuntu

```bash
# Ubuntu Server
# Key Pair set permissions to read only
Set-ItemProperty -Path ~/.ssh/KaliLinuxKeyPair2.pem -Name IsReadOnly -Value $true
# log in
ssh -i ~/.ssh/KaliLinuxKeyPair2.pem ubuntu@35.178.191.151
# update
sudo apt update -y
sudo apt upgrade -y
sudo apt dist-upgrade -y
```


### AWS Upgrade Ubuntu To Latest

```bash
sudo apt update -y
sudo -E apt-get -qy -o "Dpkg::Options::=--force-confdef" -o "Dpkg::Options::=--force-confold" upgrade
# This should be silent but is not!
sudo -E apt-get -qy -o "Dpkg::Options::=--force-confdef" -o "Dpkg::Options::=--force-confold" dist-upgrade
# reboot
sudo reboot
# move from LTS to regular version
sudo nano /etc/update-manager/release-upgrades
# set Release=normal   (from LTS) to get latest version 
sudo do-release-upgrade -d -f DistUpgradeViewNonInteractive
sudo do-release-upgrade -f DistUpgradeViewNonInteractive
# check version ie 20.10
cat /etc/os-release 
```



### AWS Ubuntu via CLI

Download run and install the `aws cli` installer

```bash
# check install
aws --version

```

### Ubuntu Install Apache

```bash
# update
sudo apt update -y
sudo -E apt-get -qy -o "Dpkg::Options::=--force-confdef" -o "Dpkg::Options::=--force-confold" upgrade
sudo -E apt-get -qy -o "Dpkg::Options::=--force-confdef" -o "Dpkg::Options::=--force-confold" dist-upgrade
# install
sudo apt-get install apache2 -y
# go to web page at http://<IP> to view it!
# modify files - set ownership
# get username eg `ubuntu`
whoami
# get groups 
groups ubuntu
# change owner
sudo chown -R root:ubuntu /var/www
# replace file 
echo "<html>hello world from phil</html>" > /var/www/html/index.html
# status
systemctl status apache2
sudo systemctl stop apache2
```

### Ubuntu Install NGINX

```bash
# install
sudo apt install -y nginx
# check status
systemctl status nginx
# stop apache if running
sudo systemctl stop apache2
# run
sudo systemctl start nginx
# you should be able to see the nginx web page at <IP> on stanard port 80
# stop
sudo systemctl stop nginx
# run at startup
sudo systemctl enable nginx
# do not run at startup
sudo systemctl disable nginx
```

### Ubuntu Install python

```bash
# install
sudo apt install python
# create and run
touch HelloWorld.py
nano HelloWorld.py     
# print("Hello World")
python HelloWorld.py
```

### Ubuntu install nmap (1 minute install)

*1 minute install*

```bash
sudo apt install nmap -y
# verify version
nmap --version
```


### Ubuntu Install Docker

*1 minute install*

```bash
# install
sudo apt install docker.io -y
# run docker
docker
```







### Docker Install Metasploitable 

*Takes about a minute*

```bash
# docker pull peakkk/metasploitable 
sudo docker pull tleemcjr/metasploitable2
sudo docker run -it tleemcjr/metasploitable2
# note we are now inside the container!!!
hostname
ip a  # inet 172.17.0.2/16 brd 172.17.255.255 scope global eth0
# on another shell on the Kali host 
ip a # inet 172.31.4.186/20 brd 172.31.15.255 scope global dynamic eth0
ip a # inet 172.17.0.1/16 brd 172.17.255.255 scope global docker0
```

### NMap Scan Metasploitable

*Connect on a new shell, leaving the metasploitable shell open*

```
# ping metasploitable from docker host
ping 172.17.0.2 
# os scan
sudo nmap -O 172.17.0.2
# ping scan
sudo nmap -sn 172.17.0.2
# port scan
sudo nmap -Pn 172.17.0.2
# tcp syn scan
sudo nmap -PS 172.17.0.2
# other nmap labs
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
```






### Ubuntu Install Metasploit Part I

```bash
# scp copy JDK to Ubuntu from local 20 minutes
cd ~/Downloads
# check file is present (get from Java)
ls
# copy
scp -i ~/.ssh/KaliLinuxKeyPair2.pem .\jdk-11.0.7_linux-x64_bin.tar.gz ubuntu@18.132.64.57:/home/ubuntu
# Prepare environment - add repository
sudo add-apt-repository ppa:linuxuprising/java -y
sudo apt update -y
# set config
echo debconf shared/accepted-oracle-license-v1-1 select true | sudo debconf-set-selections
echo debconf shared/accepted-oracle-license-v1-1 seen true | sudo debconf-set-selections
echo oracle-java11-installer shared/accepted-oracle-license-v1-2 select true | sudo /usr/bin/debconf-set-selections 
# reboot
sudo reboot
```


### install metasploit (Part II)

```bash
# log in
ssh -i ~/.ssh/KaliLinuxKeyPair2.pem ubuntu@18.132.64.57
# install java
sudo mkdir -p /var/cache/oracle-jdk11-installer-local/
sudo cp jdk-11.0.7_linux-x64_bin.tar.gz /var/cache/oracle-jdk11-installer-local/
sudo add-apt-repository ppa:linuxuprising/java -y
sudo apt-get update -y
# set config
echo debconf shared/accepted-oracle-license-v1-1 select true | sudo debconf-set-selections
echo debconf shared/accepted-oracle-license-v1-1 seen true | sudo debconf-set-selections
echo oracle-java11-installer shared/accepted-oracle-license-v1-2 select true | sudo /usr/bin/debconf-set-selections 
# install java
sudo apt install default-jre -y
# check version
java --version
# install metasploit
sudo curl https://raw.githubusercontent.com/rapid7/metasploit-omnibus/master/config/templates/metasploit-framework-wrappers/msfupdate.erb > msfinstall && chmod 755 msfinstall && ./msfinstall
# run metasploit
msfconsole
# was db set up
db_status
```






### Ubuntu Install MongoDB

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
```

#### start mongodb

```bash
sudo systemctl start mongod
sudo systemctl status mongod
sudo systemctl enable mongod
```

#### run mongo client

```bash
# run the client
mongo
# database
use test-database-01
# show databases
show dbs
# insert data
db.table01.insert({"name":"test name"})
# show databases again
show dbs
# create collection
db.createCollection("table02")
db.table02.insert({"name":"test name"})
# show collections / tables
show collections
# show data
db.table01.find()
db.table02.find()
```













### AWS Kali with VNC

Find `Kali` on AWS store, run and install T2 Large via EC2

```bash
# connect
ssh -i ~/.ssh/KaliLinuxKeyPair.pem ec2-user@35.176.24.73
# set password
echo -e "kali\nkali" | sudo passwd ec2-user
echo -e "kali\nkali" | sudo passwd kali
# version
cat /etc/os-release
# run nmap
nmap
# run postgresql
sudo service postgresql start
# run metasploit
msfconsole
exit
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
# enress `locahost:1`
# enter password and connect!
```




### Kali Install OpenVAS  (1 hour with attended input)

*Does this work on Raw Ubuntu?  Think not.*
*Note: Total time around 1 hour*
*Note: Downloads a lot of data* 
*Note: During install have to a) select `package maintainer` option 
                              b) select `y` option*


```bash
sudo apt update -y
sudo apt upgrade -y
# install openvas (not silent - requires user input)
sudo apt install openvas -y
# download vulnerability feeds (takes a while!)
sudo openvas-setup -y            
# user with 4c9c6ce9-6602-48bc-9212-55d3d0610493
sudo openvasmd --user=admin --new-password=admin
netstat -antp
sudo openvas-start 
openvas-check-setup

# now connect with VNC as other tutorial details
# now open browser to https://localhost:9392
# and log in !
# if you forget your password you can reset it with
sudo openvasmd --user=admin --new-password=admin
```







### Ubuntu Install Docker

*1 minute install*

```bash
# install
sudo apt install docker.io -y
# run docker
docker
# check service status
sudo service docker start
```




### Docker Install Metasploitable 

*Takes about a minute*

```bash
# docker pull peakkk/metasploitable 
sudo docker pull tleemcjr/metasploitable2
sudo docker run -it tleemcjr/metasploitable2
# note we are now inside the container!!!
hostname
ip a  # inet 172.17.0.2/16 brd 172.17.255.255 scope global eth0
# on another shell on the Kali host 
ip a # inet 172.31.4.186/20 brd 172.31.15.255 scope global dynamic eth0
ip a # inet 172.17.0.1/16 brd 172.17.255.255 scope global docker0
```





#### Run an exploit

```
msfconsole
search unreal
use exploit/unix/irc.......
set rhosts 172.17.0.2
run
```














### AWS Run Container

First thing is to get a container running on AWS

Using the `Elastic Container Registry`

or

`aws fargate`


ECS Elastic Container Service using Fargate

```bash
# Launch a container in EC2
# Launch Instance
# Community AMI
# Tick Ubuntu
# select a ubuntu
```










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





## Docker Kali 

https://github.com/admirito/gvm-containers









## Penetration 

Golden Ticket Pen Test Lab [https://pentestlab.blog/2018/04/09/golden-ticket/](https://pentestlab.blog/2018/04/09/golden-ticket/)




## Metasploit

### What is Metasploit?

metasploit is a red team tool to launch exploit against vulnerability

written in ruby

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

## intro

intentionally vulnerable machine

https://sourceforge.net/projects/metasploitable/files/Metasploitable2/

https://metasploit.help.rapid7.com/docs/metasploitable-2-exploitability-guide

never expose - always keep private

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





## Other Cyber Labs




### NMap

// get help
nmap -h

// TCP SYN scan
nmap -sS

// UDP Scan
nmap -sU

nmap -O can detect operating system
nmap -sL = live hosts
nmap -sn = ping scan (also -sP)
nmap -Pn = port scan every IP on subnet
nmap -PS 1.2.3.4-5.6.7.8 TCP SYN service discovery scan
nmap -sS TCP/SYN
nmap -A OS detection


nmap -sS -sU -p ... nmapoutput.xml

zenmap nmapoutput.xml










### netdiscover

netdiscover -h view help

netdiscover -i eth0 -r <<ip range>>







### dig

dig -h

dig [domain.com](http://domain.com/) NS

dig [domain.com](http://domain.com/) AXFR 1.2.3.4





### traceroute

traceroute [google.com](http://google.com/)

## red tools

## port and host scanning

- zenmap

### vulnerability scanners

- openvas 
- metasploit and armitage
- nikto web vulernability scanner
- sploit 
### openvas

openvas-start vulnerability scan

openvas-check-setup

[http://127.0.0.1:9392](http://127.0.0.1:9392/) = greenbone security assistant = openvas GUI output. Perform a network vulnerability scan using this tool.

openvas : check greenbone reports

demo at https://livedemo.greenbone.net/login

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

### armitage = gui for metasploit

Armitage is Java GUI for MSF Metasploit

### metasploit

Connect to MetaSploit server

1.2.3.4 => Scan

Hosts => Nmap Scan => Intense Scan <<1.2.3.4>> which runs db_nmap which adds results to the Metasploit database

Attacks => find attack

Check exploits



### zenmap - host and port scan

### nikto - web server vulnerability scanner

nikto -host 1.2.3.4 to see what vulnerabilities exist

nikto -o sploit.htm -host 1.2.3.4 saves output to web page



### mbsa - windows server scanner

MBSA Baseline Security Analyser - run a scan on your server : updates and incorrect configuration

mbsacli command line scan also

Search for any problems identified in the scan. Try and match against any known vulnerabilities (CVE). If so, do you find any active exploits which could target this vulnerability?




## ids

[ids](ids.md)

### securityonion ids

### sguil ids

### sgutil ids


## sysinternals suite of tools from microsoft

### autoruns - what is set to auto start

### accesschk - search for unauthorised privileges

### accessenum - enumerate access?

### du disk usage

### sigcheck - verify root certificate









## cyber tools

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




## Forensic Labs

### CyberChef

https://gchq.github.io/CyberChef  Convert from binary to hex to base64 etc





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
       msf ==> command line => run this scan
              ==> db_nmap -T1 -A -D <<IP range>>         

Blue team : can we spot that a scan is taking place???

       ((Possibly not if the scan is a 'slow' scan))

Red : INTENSE SCAN using Armitage MSF GUI

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


## Crawling

Crawlers `scrape` websites and `index` their `keywords`


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


## DNS

### centralops

https://centralops.net/co/  can give very detailed information


### whois domain info (from sysinternals)

```
whois -v abc.com
```

### nslookup list records

```bash
# list all records
NSLOOKUP SET TYPE=ANY ls-d abc.com

# interactive
nslookup
set type=any
google.com
# list nameservers
ls
# show all settings
set all
# set domain
set domain=google.com
```
​       
### dig

axfr = all dns records

ixfr = incremental transfer

```bash
​dig axfr dns-server-1.domain.com thiscompany.com
```
​       

## geolocation

### geoip - get location from ip







## Domain Analysis

### netcraft.com analyse domain stats



## website

rip = copy

### httrack.com rip full site

### archive.org







## scanning

attentionmeter.com

edgesecurity.com
 
lmgtfy.com

osrframework

web spider




## Social Engineering


       Pivot Point - point of weakness or access
    
       Phone calls
       
       Email
       
       Phishing 
       
       Spear Phishing
       
       Whaling
       
       Riding on back of existing work eg server upgrade; pose as 
                      contractor to gain access
                      
       Social Engineer Toolkit 
        https://github.com/trustedsec/social-engineer-toolkit
        https://www.social-engineer.org/framework/se-tools/computer-based/social-engineer-toolkit-set
      
                      
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

              nmap domain.com 

              nmap -v domain.com   verbose

              
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

             open/filtered

                      the ports are not responding so it's impossible to tell if the ports are open or filtered
              
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



## footprint 

a footprint is a picture of a network and hosts

- tcp by ip
- arp by mac
- dns by name
- os by version
- whois by domain name and servers running

find out os and version

- host
- router
- firewall
- switch


service discovery - running services and the version

find out which services are accessible on which ports


## fingerprint

a fingerprint uniquely identifies a system

detailed packet analysis
- passive monitors packets
- active sends packets and monitors response


### tcpview = netstat

sysinternal tool



```
                      
       netstat Windows
       
                      -a             all ports
                     -b     process which has opened the port
                      -r             routing table
                      
       netstat Linux
       
       TCP SYN packets can be sent as part of service discovery

        TCP SYN => SENT OUT

          SYN/ACK packet returned? Then port is open and service is available
          RST returned?  Device reachable but port closed and no service available


       
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

#### DISCOVERY SCAN 

of network

#### ASSESSMENT SCAN

of vulnerabilities

       can scan against a baseline
       
       Sensor-based : running from a central point 

       Agent-based : running on each client


#### Scope 

Define IP and port ranges

#### credentialed scan

#### non-credentialed scan

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

#### Reporting

care as this info is confidential

MRTG Multi-Router Traffic Grapher

monitors load on a network line

uses SNMP

other tools : Scrutinizer, Nagios, SolarWinds, Cacti, NetFlow Analyzer

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

February 2020 - iPhone 14 leaked by Chinese hackers



### Exploit Stories 2018


Fax Machine Exploit
https://thehackernews.com/2018/08/hack-printer-fax-machine.html



### Exploit Stories 2017

Yahoo 2017 : 3 Billion Email accounts hacked by tools developed by NSA

### Exploit Stories 2016

Oct 2016  Uber paid $100,000 to hackers to delete their stolen data of 
   50 million Uber users 
   7 million drivers

### Exploit Stories 2015

2015 VTech Kids toys Parent/Child website : 4.8 million users affected

### Exploit Stories 2014


Yahoo 515000 UK Email accounts
only revealed in 2016
Hack was Russian sponsored.
(Yahoo has been merged with AOL to create OATH after being bought by Verizon)


### Exploit Stories 2013

Yahoo 2013 : 1 Billion email accounts breached

### Exploit Stories 2011

2011 Diginotar hack where certificates in the name of Google were issued which led to fake Google sites stealing google credentials. 

### Exploit Stories Undated

Premium phone number hack : default voicemail PIN is last 4 digits of phone number

Asusgate : admin admin routers across internet, FTP as well

Talk Talk bought Tiscali then got caught out with 14000 SQL injection attacks because the Tiscali servers were not updated for 3 years!


Gary Mckinnon (Script Kiddie) Hacked into NASA to look for evidence of UFOs

Steve Wozniak One of the original Computer Hackers (not Crackers) went on to create Apple

Dmitriy Smilianets (Russian Criminal Hacker) stole 300m credit card details which were sold on to criminal gangs, he was then extradited to US.

Kevin Mitnick (Hacked into FBI/CIA/NSA whilst on the run to find out what they knew about his whereabouts.)

Wannacry [https://www.symantec.com/connect/blogs/wannacry-ransomware-attacks-show-strong-links-lazarus-group](https://www.symantec.com/connect/blogs/wannacry-ransomware-attacks-show-strong-links-lazarus-group)

Swift attack by Lazarus group 2016 [https://www.symantec.com/connect/blogs/swift-attackers-malware-linked-more-financial-attacks](https://www.symantec.com/connect/blogs/swift-attackers-malware-linked-more-financial-attacks)

Lazarus Group
$81 million stolen from Bangladesh Bank
Stopped stealing $1 million from Vietnam Tien Phong Bank
[https://www.symantec.com/connect/blogs/swift-attackers-malware-linked-more-financial-attacks](https://www.symantec.com/connect/blogs/swift-attackers-malware-linked-more-financial-attacks)



Meltdown : Memory Dump, passwords etc by joining user to OS - CVE-2017-5754 [meltdownattack.com](http://meltdownattack.com/)

Spectre : Joins different user applications CVE-2017-5753 and CVE-2017-5715?

WannaCry : NSA tools stolen and used to create ransomware affecting NHS, Telefonica,

NotPeyta

BadRabbit

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








### penetration test steps

1. Scoping
2. Reconnaissance
3. Vulnerability Assessment
4. Penetration Test
5. Lateral Movement
6. Artifact Collection/Destruction
7. Reporting/Debriefing




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







## PCI *DSS*

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



## Kill Chain

1. Discovery scan
   1. networks
   2. hosts
      1. operating systems
      2. applications
   3. nmap
2. vulnerability scan
3. exploit module to match cve found in scan
4. release payload once exploit has gained you access





### Metasploit

Metasploit is best known exploit framework = metasploit.com (open source) (uses Ruby)

1. Discovery Scan : hosts and vulnerabilities

```
((Metasploit can use Nmap or its own tools for this))
```

2. connect to vulnerability scanner

 ```
openvas_target_list
openvas_task_list
openvas_report_import
 ```

3. EXPLOIT MODULE = TRY AND EXPLOIT A VULNERABILITY

```
use ExploitModule
show options
```

#### PAYLOAD = WHAT YOU DOWNLOAD TO A MACHINE THAT YOU FIND A VULNERABILITY ON

```
       set payload 
```






#### CVE VULNERABILITY => EXPLOIT MODULE => PAYLOAD

#### Armitage = GUI for Metasploit

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


CISO Info Security Officer

CSIRT Computer Security Incident Response Team


### Classes Of Controls

[controls](controls.md)




## Cyber Organisations

- NIST guidance
- EC-Council : Certified Ethical Hacker CEH
- (ISC)squared - CISSP Certified Info Security Systems Professional 
- CASP CompTIA Advanced Security Practitioner
- ISACA - CISA/CISM Certified Info Systems Auditor/Manager 
- CIS Center for Internet Security [cisecurity.org](http://cisecurity.org/)  
  - Publishes 20 categories of security [controls](controls.md)
- OWASP has top 10 web vulnerabilities and attacks
- SANS/GIAC - secure coding and software development
- ISO standards
  - ISO 27001 Describes ISMS Info Security Management System = set of policies and procedures for 
    - managing sensitive data
  - ISO 9001 Quality Management System
- NSO in Israel [https://en.wikipedia.org/wiki/NSO_Group](https://en.wikipedia.org/wiki/NSO_Group)





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






### NIST National Institue Standards Technology

[](frameworks.md)

NIST provides GUIDANCE (not best practice which is ITIL)

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

        

## Control Types

[Controls](controls.md)

## Frameworks

[Frameworks](frameworks.md)

## Controls

[controls](controls.md)













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

## Vulnerability Management Steps

1. Identify Requirements

    Document regulatory environments
    Document corporate policy
    Classify Data
    Asset Inventory
            Critical assets
            Non-critical assets

2. Choose Freqency of scan which will depend on
    Risk appetite of company
    regulatory requirements
    technical constraints
    workflow

3. Choose tools to perform vulnerability scan
4. Run scan
5. Report on scan output
6. Remediate any CVE found
7. Ongoing scanning and monitoring



## Risk Assessment Matrix

Criticality vs Difficulty of implementation




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

[controls](controls.md)





















## Certification

```
       Assessed formally against a 3rd party standard; often independent evaluation ie
              3rd party
```

Scheduled Review Incidents Trends Analysis Changes Additions Progress towards compliance

Enhancing processes

Continual improvement Process review Process retirement


















## [policies](policies.md)






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

Used as part of Web App Vulnerability Testing

#### Interception Proxy testing

#### Verification Testing

Has design spec been met

#### Validation Testing

High level - has overall purpose of software been fulfilled

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

uses OWASP rules, originally for Apache but now other platforms also

#### NAXSI NGINX WAF

Nginx Anti XSS and Injection 

uses White List technologies for Nginx web server

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

snort

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
       




























































## Network Monitoring

[Network Monitoring And Logging Tools](monitoring.md)





























































































## Incident Response 

[Incident Response](incident-response.md)




































































































# Analysing Data : Data Analytics

## Data Aggregation

SIEM eg Splunk and OSSIM : collecting and summarising large amounts of information

## Data Correlation

SIEM eg Splunk and OSSIM : relating data to each other to find trends or relationships

## Logs

Firewall eg block packet at layer 3 

## Syslog

central logging for Unix and Linux Authentication eg Security Log Event Logs eg System or Application Log

## Remediation = risk mitigation = reducing risk

## Managed Security Services Provider

outsource your security!!!

# SECaaS 

Security as a service eg cloud AV

## Policy

Standard : measure compliance with a policy

## Procedure : task steps

## SOP Standard Operating Procedure

## Guidance

where no procedures exist

## Continuous security monitoring

- RUM Real User Monitoring : Captures every transaction on a live web app 
- Synthetic Monitoring : Only testing simulated transactions (not real ones)
- Continusously monitor for:
  - Assets
  - Vulnerabilities
  - Threats
  - Business Impact

  Establish continuous monitoring program which has
    Metrics (what we measure)
    Frequency of measurement of metrics
    Frequency of review of whole process

    Implement
    Analyze data
    Respond to findings
    Review and update the program

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

       Formal evaluation against a checklist 

Evaluations

       Evaluation = bigger picture : several assessments make up one evaluation

Maturity Models

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