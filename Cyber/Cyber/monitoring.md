# Monitoring

## Contents

- [Monitoring](#monitoring)
  - [Contents](#contents)
  - [Introduction](#introduction)
  - [Logging](#logging)
    - [WinPCAP](#winpcap)
    - [Network Protocol Analyser](#network-protocol-analyser)
    - [Sniffing Tools](#sniffing-tools)
      - [TCP FLAGS WHEN SNIFFING](#tcp-flags-when-sniffing)
  - [WIFI tools](#wifi-tools)
    - [MRTG SNMP](#mrtg-snmp)
    - [Cacti.net SNMP Monitoring](#cactinet-snmp-monitoring)
    - [Netflow](#netflow)
    - [Nagios.org](#nagiosorg)
    - [Log Review](#log-review)
    - [SIEM Security Info/Incident and Event Mgt](#siem-security-infoincident-and-event-mgt)
    - [Big Data](#big-data)
    - [SIEM tools](#siem-tools)
      - [SPLUNK analytics : big data : uses Hadoop](#splunk-analytics--big-data--uses-hadoop)
      - [ArcSight by HP](#arcsight-by-hp)
      - [QRadar](#qradar)
      - [Alien Vault is SIEM (gathering data) tool](#alien-vault-is-siem-gathering-data-tool)
      - [OSSIM Open Source Security Info Mgt](#ossim-open-source-security-info-mgt)
      - [KiwiSyslog.com](#kiwisyslogcom)
    - [Windows Event Viewer](#windows-event-viewer)
    - [Syslog](#syslog)
    - [Firewall logging](#firewall-logging)
      - [Linux iptables](#linux-iptables)
      - [Packet logging](#packet-logging)
      - [pcap file format used](#pcap-file-format-used)
    - [Nmap logging](#nmap-logging)
    - [IDS reporting eg SNORT](#ids-reporting-eg-snort)
    - [SIEM](#siem)
    - [Other issues to be aware of](#other-issues-to-be-aware-of)
      - [`Low and slow` or `sparse` attack](#low-and-slow-or-sparse-attack)
      - [SSH - widely used](#ssh---widely-used)
      - [HTTPS - now far more widely used](#https---now-far-more-widely-used)
    - [Advanced Analysis](#advanced-analysis)
      - [FPC full packet capture](#fpc-full-packet-capture)
      - [RNA retrospective network analysis](#rna-retrospective-network-analysis)
      - [Wireshark](#wireshark)
      - [Netflow - visualise data](#netflow---visualise-data)
      - [EtherApe (Linux)](#etherape-linux)
    - [Wireless Analysis](#wireless-analysis)
      - [NetScout](#netscout)
      - [Also](#also)
      - [Beacon wifi packet](#beacon-wifi-packet)
      - [Probe wifi packet](#probe-wifi-packet)
    - [Availability Analysis](#availability-analysis)

## Introduction

This covers the tools used in Network and Cyber monitoring




## Logging

### WinPCAP

WinPCAP = sniffer = LibPCAP
   
       promiscuous mode : listen to all packets
       
                     Switch : must port mirror to listen to traffic on other ports
                     
       Note : can disable promiscuous mode on all network devices to prevent a sniffer from reading full contents of all packets
              
              
              
### Network Protocol Analyser

- Wireshark
- Kismet : WIFI linux
- TCPDump : Linux
- Dsniff : Linux
- Ettercap
       

Protocol Analysis : analyse IP TO/FROM, PORT TO/FROM, MAC TO/FROM

Packet Analysis : analyse the WHOLE PACKET INCLUDING DATA

Traffic Analysis : different types of traffic

Netflow Analysis : from Cisco : looks at different ‘flows’ of traffic or ‘conversations’ eg Skype conversation, DNS traffic flow, etc

Network monitoring most active hosts hosts producing packets in error filter baseline generate frames for testing bandwidth alarms



### Sniffing Tools

TCPDump
       windump
       tcpdump -i eth0
       tcpdump uses pcap

Wireshark
       .pcap file output

Netscout / Network General

#### TCP FLAGS WHEN SNIFFING

  colasoft packet builder
    
    RST reset forcibly
    
    FIN reset cleanly










## WIFI tools

AirPCAP

Aircrack-ng

Injection Tools

Dsniff

Ettercap

hping

Nemesis

Scapy








### MRTG SNMP

Multi Router Traffic Grapher

SNMP tool : creates graphs

monitors load on network links

shows SNMP bandwidth utilisation       

open source 
       
Linux (can be used in Windows via Perl)
       
uses crontab (Linux)

Windows runs this as a service


### Cacti.net SNMP Monitoring

with graphs using SNMP on Linux

### Netflow

This analyses stats on flow of IP traffic : equivalent of taking all of Wireshark collection but then aggregating and collecting the different 'flows' of traffic and reporting on each individual flow - stats, throughput etc
       
   SolarWinds.com 

     Netflow Analyser on RHEL / CentOS
     Reports network flow to proper database for display and analysis
              
    alternatives : sFlow, jFlow, IPFIX IP Flow Info Export

### Nagios.org

SNMP and HTTP info gathering.  Agent installed on client.
       


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

### SIEM tools

SPLUNK, ARCSIGHT, QRADAR, AlienValut, OSSIM, SysLog, Event Viewer

#### SPLUNK analytics : big data : uses Hadoop

SPL splunk search processing language
       
#### ArcSight by HP

#### QRadar

#### Alien Vault is SIEM (gathering data) tool

#### OSSIM Open Source Security Info Mgt

   integrate SNORT and OpenVAS vulnerability scanner
              
#### KiwiSyslog.com

store SNMP logs


### Windows Event Viewer

subscriptions and forwarded events

.evtx uses XML formatting

Information Event 1102 is CLEARING THE SECURITY LOGS (Note : Transcender error : says it’s 102 but it’s not in real life)

Information Event 4719 is CHANGING AUDIT POLICY

### Syslog 

linux event log

centralised collection

collect CISCO events

severity

       0 emergency
       1 alert
       2 critical
       3 error
       4 warning 
       5,6 info

### Firewall logging

#### Linux iptables

generally correct format for output

#### Packet logging

#### pcap file format used

### Nmap logging

as XML, Grep (RegEx), view on screen

### IDS reporting eg SNORT

Binary output/CSV

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


