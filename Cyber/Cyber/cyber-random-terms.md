# Cyber Random Terms

- [Cyber Random Terms](#cyber-random-terms)
  - [Network Security](#network-security)
  - [Cyber](#cyber)


## Network Security 

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
Anomaly based : deviations can block
Web Security Gateway : URL Filter, malware
WAF Web Application Firewall : Deep packet inspection + SQL Injection + XSS prevention
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






## Cyber


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
Syslog = logs only
SIEM = logs + analysis
scope of scan = numbers of computers
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
OWASP
NGINX
NAXSI
Foundry = trace hardware
Snort
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
vulns -R show vulnerabilities
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
NAXSI is Nginx Anti XSS and Injection
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
AirPcap over WIFI
Aircrack-ng WIFI
Injection: DSniff ettercap hping nemesis scapy
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




Stuxnet : Countdown To ZeroDay Book - Kim Zetter : Stuxnet was US and Israel

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
MoU : Memorandum Of Understanding : preliminary expression of wish to work together
Nagios = open source stats on services
NAPT = NAT
NAXSI = nginX Anti XSS and SQL Injection
Nessus = commercial vulnerability scanner
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
Splunk : big data gather and analyse
tcpdump : command line packet sniffer
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

