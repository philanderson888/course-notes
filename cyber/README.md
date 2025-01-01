# cyber

## Contents

- [cyber](#cyber)
  - [Contents](#contents)
    - [nslookup list records](#nslookup-list-records)
    - [dig](#dig)
    - [Wireshark](#wireshark)
    - [Free Online Port Scan](#free-online-port-scan)
    - [Superscan 4](#superscan-4)
    - [Angry IP Scanner](#angry-ip-scanner)
    - [IPScan24](#ipscan24)
    - [ping](#ping)
  - [nmap](#nmap)
  - [footprint](#footprint)
  - [fingerprint](#fingerprint)
    - [tcpview = netstat](#tcpview--netstat)
    - [OpenVAS](#openvas)
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
    - [Mimikatz](#mimikatz)
    - [Metasploit](#metasploit)
    - [hashcat](#hashcat)
    - [ProRat](#prorat)
    - [RIG Redkit, Infinity and Goon also known as HTML/Meadgive](#rig-redkit-infinity-and-goon-also-known-as-htmlmeadgive)
    - [Sweet Orange also known as Win32/Anogre](#sweet-orange-also-known-as-win32anogre)
    - [Wordscrape](#wordscrape)
  - [Ransomware](#ransomware)
    - [Reveton - encrypts entire hard drive](#reveton---encrypts-entire-hard-drive)
    - [penetration test steps](#penetration-test-steps)
  - [Offensive Penetration Testing And Exploits](#offensive-penetration-testing-and-exploits)
  - [PCI *DSS*](#pci-dss)
    - [Exploit Frameworks](#exploit-frameworks)
  - [Kill Chain](#kill-chain)
    - [Metasploit](#metasploit-1)
      - [PAYLOAD = WHAT YOU DOWNLOAD TO A MACHINE THAT YOU FIND A VULNERABILITY ON](#payload--what-you-download-to-a-machine-that-you-find-a-vulnerability-on)
      - [CVE VULNERABILITY =\> EXPLOIT MODULE =\> PAYLOAD](#cve-vulnerability--exploit-module--payload)
      - [Armitage = GUI for Metasploit](#armitage--gui-for-metasploit)
- [Defending](#defending)
    - [Classes Of Controls](#classes-of-controls)
  - [Cyber Organisations](#cyber-organisations)
  - [Cyber Roles](#cyber-roles)
    - [CISO Chief Info Security Officer](#ciso-chief-info-security-officer)
  - [Framework](#framework)
    - [NIST National Institue Standards Technology](#nist-national-institue-standards-technology)
  - [Logs](#logs)

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

### ping

```bash              
for /l %i in (1,1,255) do @ping -n 1 -w 100 192.168.0.%i | find /I "reply"        
```

## nmap

```bash
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

```


Port States reported after a scan

```bash                     
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

```


```bash                    
nmap -A        DETECT OS AND SERVICES

nmap -sV       DETECT SERVICES

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
```


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

   






FISMA is a regulated environment Federal Info Security Mgt Act surrounding government agencies

PCI DSS Payment Card Industry is a strict regulated environment which must show compliance to eg CIS benchmarks

SANS makes guidelines for software development

GIAC from SANS is a certification

OWASP monitors web attacks

NIST supports US innovation and standards

CIS Center for Internet Security makes security benchmarks to show compliance eg PCI DSS can show compliance to this








## Logs

```bash
> hosts vulns -R 1.2.3.4 search to match exploits with vulnerabilities
```
