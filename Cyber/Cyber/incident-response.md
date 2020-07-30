# Incident Response

- [Incident Response](#incident-response)
  - [Incident Response Summary](#incident-response-summary)
  - [CSIRT](#csirt)
  - [IRP Incident Response Policy](#irp-incident-response-policy)
    - [ITIL IT Support Best Practice Overview](#itil-it-support-best-practice-overview)
    - [ITIL Incident Management](#itil-incident-management)
    - [Technical](#technical)
    - [Management](#management)
    - [HR Human Resources](#hr-human-resources)
    - [Law Enforcement Agencies](#law-enforcement-agencies)
    - [3rd Party Incident Response Team](#3rd-party-incident-response-team)
  - [Incident Response Steps](#incident-response-steps)
  - [NIST Incident Handling Guide](#nist-incident-handling-guide)
    - [Preparation : Prepare Your System](#preparation--prepare-your-system)
    - [Detection : Detect An Attack](#detection--detect-an-attack)
    - [Analysis : Analyse The Attack](#analysis--analyse-the-attack)
    - [Recovery Process : Recover From The Attack](#recovery-process--recover-from-the-attack)
    - [Containment](#containment)
    - [Eradication](#eradication)
    - [Validate (that now OK)](#validate-that-now-ok)
    - [Corrective Actions](#corrective-actions)
    - [Summary Reporting](#summary-reporting)
    - [Comms](#comms)
    - [Classifying](#classifying)
      - [APT Advanced Persistent Threat](#apt-advanced-persistent-threat)
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
      - [SoP standard operating procedures](#sop-standard-operating-procedures)
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
  - [Forensics](#forensics)
  - [CoA Courses Of Action matrix](#coa-courses-of-action-matrix)
    - [Detect](#detect)
    - [Destroy](#destroy)
    - [Degrade](#degrade)
    - [Disrupt](#disrupt)
    - [Deny](#deny)
    - [Deceive](#deceive)
  - [Detection](#detection)
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
  - [Incident Response](#incident-response-1)
    - [Lockdown](#lockdown)
      - [Removal](#removal)
      - [Isolate](#isolate)
      - [Segment](#segment)
      - [Reverse Engineer](#reverse-engineer)
      - [Involving law enforcement](#involving-law-enforcement)
      - [Eradication](#eradication-1)
        - [NIST 800-88 sanitizatision](#nist-800-88-sanitizatision)
    - [Lessons learned](#lessons-learned)
      - [Incident summary report](#incident-summary-report)
      - [Update Incident Response Plan](#update-incident-response-plan)
      - [Change control](#change-control)




## Incident Response Summary

incident preparation: irp harden comms

incident prepare detect analyse recover

incident recovery: containment: segmentation remove isolate reverse engineer

incident recovery: eradication: sanitise(clean, wipe, zeros(not ssd)),reimage, dispose 

incident recovery: validation: patch permission scan log

incident recovery: correction: change control, lessons learned, update irp

recovery phase: containment, eradication, validation

containment: segment remove isolate reverse engineer

eradicate: sanitise reconstruct secure-disposal

correction: change control, lessons learned, update IRP


## CSIRT 

Computer Security Incident Response Team

       Legal
       HR
       Marketing



## IRP Incident Response Policy

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


## Incident Response Steps

1. Detect
2. Respond
3. Report
4. Recover
5. Remediate
6. Review

SANS Incident Response Steps

1. Prepare
2. Identify
3. Contain
4. Eradicate
5. Recover
6. Lessons Learned


## NIST Incident Handling Guide





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

Critical - few minutes or hours response

Urgent - 24 hours response

Normal - 7 days

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






## Forensics 

[Forensics](forensics.md)











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

[http://stylesuxx.github.io/steganography/](http://stylesuxx.github.io/steganography/)

https://0xrick.github.io/lists/stego/

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









## Incident Response

Recovery: contain, eradicate, validate
Containment: segment, remove, isolate, reverse engineer
eradicate: sanitise,reconstruct,secure disposal
Correction: Change control, lessons learned, update IRP


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


