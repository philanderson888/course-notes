# MTA Security

MTA 98-367 Security

Encryption

```
3 types of encryption

1) Symmetric 
	Session Encryption (eg Shopping 'session')
2) Asymmetric
3) Hashing
	
Also 2) and 3) combined ==> Digital Signatures and Certificates
		
	==> foundation for all INTERNET SECURITY

```

Symmetric Encryption = Shared Key

```
WIFI

Plain text	ALGORITHM	KEY		Encrypted text
				(WIFI key)

		SAME		unique

		WEP
		WPA 
		WPA2

WIFI is relatively INSECURE because ONE KEY is both
	doing ENCRYPTION and DECRYPTION

	One key is doing so much work ==> vulnerability

Passwords tend to be quite weak also so we can do two things
	1) SALT
	2) KEY STRETCHING

SALT : BCrypt is a tradename for this technology

Plain text + WPA2 + WIFI Key + SALT (extra password) ==> Final
							 encrypted
							 text

	regular password + salt ==> extended password

	If hacker did ever work out the (stored) extended password
		then they still can't hack your account until
		they next get the salt.

Exam
	WEP 	hacked
	WPA	over	TKIP	
	WPA2 	over	AES

Older protocols

	DES
	3DES	which is data run through DES three times
	Bluefish
	Twofish
	RC2  /   RC4

```

Asymmetric Encryption

```
Two keys : Public key & Private key

Public key : anyone can have
Private key : must be kept secure eg private ATM debit card in
			wallet.

Encrypt data ==> use either key!!!

	Decrypt data ==> must use OTHER KEY 

Examples

	Jill send Bob some encrypted data that ONLY BOB CAN OPEN

	Bob send Jill his PUBLIC KEY CERTIFICATE
	Jill can import this and install it on her computer

		Double click on certificate ==> runs 'import 
		certificate' wizard

	Select her file and encrypt with BOB'S PUBLIC KEY
	
	Send encrypted file to Bob

	Bob ==> use his own PRIVATE KEY to DECRYPT FILE AND READ IT

		((Bob is only person in world with this private key))

Second example

	A military commander wants to send a message to the troops

	Commander : encrypt message with PRIVATE KEY
	Send to troops.
	They can use COMMANDER'S PUBLIC KEY TO DECRYPT ==> can
		now be sure message came from commander and 
		can be trusted.

Exam
	RSA most common protocol  ((Remember : Republic of South
						Africa!!!!))

```

Hashing

```
Hashing is also called 'one way encryption' because there is no way
	to reverse engineer your hash

input file/text		MD5	===> produce hash
			SHA1

MD5 weak
SHA1 stronger

today

SHA256
SHA512 in real life

Examples sha1-online.com

		MD5
phil		d14ffd41334ec4b4b3f2c0d55c38be6f
phil <space>	fdcffb2dda54dff940c0a541f1cee85c	
phil.		dcd4936713c27cae72c65e90c1e60a66	

Compare with 

SHA1		e888d2bd6f13f82caa51a37c03d034c76f661ba3

SHA256					4b25923a4f31b83195ceb0d160e0a1a6d1
		556b5a2cd4c582ff40aa0498ae1578

SHA512					055244bd6fc27c55e1ee33f71a0fd87e32bd
		9b1d19bd7ed636a6588b375a1e966a45c3e1
		4707d4ea45ed35a13cd95fa7df420fa52cfb
		b190ee0497c9dbcc33fb

Warning!!!

	Attackers cannot REVERSE ENGINEER then they do the 
		next best thing

	They collect HASHES in large files called RAINBOW TABLES

```

Session Key Encryption

```
Online shopping needs to be FAST!!!

HTTPS uses the following technology

1) Use ASYMMETRIC KEYS (slow) to GENERATE SYMMETRIC KEYS (fast)

2) Use, for our website browsing, these SYMMETRIC KEYS (fast)

	BUT!!  symmetric keys are ALSO WEAK!!! EASILY HACKED!!!

3) Every 10 minutes, just create new SYMMETRIC KEYS!!!

This gives us

	FAST BROWSING (symmetric key)

	SECURE BROWSING (sessions only last 10 minutes)

```

Certificates and Digital Signing

```
We can create CERTIFICATES and use DIGITAL SIGNING to create
a secure environment for business around the world

1. Take our files which we want to 'sign'

2. Hash these files           files  +   hash

3. Private key : encrypt the hash

			      files   +   hash    + encryped hash

4. Call the 'encrypted hash' the SIGNATURE of the file

	It represents the file uniquely

	file ===>   encrypted hash (signature of file)

Now we may want to validate this file and the signature

	eg COURT OF LAW
	eg DRIVER SIGNATURE BEFORE INSTALL (ALL DRIVERS ARE SIGNED)
			

Validation process

	1. Take our FILE and the SIGNATURE (encrypted hash)

	2. To validate we also now need the PUBLIC KEY OF
		THE PERSON WHO SIGNED THE FILE

		((think driver : get Microsoft's public key))
			((stored in CERTIFICATE ROOT STORE))
	
	3. Take PUBLIC KEY and use it to DECRYPT THE HASH!!!

		file  +  hash 

	4. Revalidate the hash is good.

		file ==> afresh, run it through hashing algorithm
			and get another fresh hash

		file  + hash   +   fresh hash

	5.  if two hashes (old and new) match then DRIVER IS 
		VALID AND GOOD TO INSTALL

```

Network Malware

Malware	General term : anything malicious

Virus	Attached to larger program eg MS Word (Macro Virus)

Worm	Self-exist but also self-replicate

Trojan	Virus inside INNOCENT LOOKING FILE eg Game, free download

Cookie	Plain text file stored on your computer : help websites
be aware of your browsing history/habits
Cookie Law : good guys
Adverts : 3rd party cookies are put on your computer without
you asking

Adware	Pushing adverts

Spyware	Tracking behaviour online : statistics is big business

Greyware	Unwanted cookes (not malicious of themselves, just annoying)

Phishing	bogus links eg in emails

Spoofing	Fake sender or Fake IP or Fake MAC address

Vishing	Attacks over VOIP phone

Spam	email

SPIM	over IM instant messaging

Ransomware	Demand money

DOS (Microsoft)

DOS	Denial of service attack - flood a server to slow it down
or crash it

```
		PING FLOOD
			SMURF ATTACK
		TCP FLOOD
		 	SYN FLOOD
		ICMP FLOOD			

```

DDOS	Distributed denial of service from many computers attacking
target

Bot	Robot

Botnet	Network of INFECTED COMPUTERS WORKING MALICIOUSLY

Zombie Computer	Dormant malware : waiting for some trigger to wake up and
begin attacking a target (trigger = logic bomb)

Logic Bomb	Trigger to activate malicous software

Virus Scanning	SIGNATURE BASED SCANNING : Scan all files on your computer
and match against KNOWN HASHES OF KNOWN MALWARE

Armored	Harder to detect

Polymorphic	POLY = MANY
MORPH = TYPE
Change itself regularly so HASH CHANGE
to AVOID DETECTION

Zero Day Attack	New software : vulnerabilities discovered before good guys
realise so hackers have a window of opportunity
to exploit

Chapter 1

```
C	Confidentiality		Securing data = ENCRYPTION
I	Integrity		Do we trust data?  Compare HASHES
				BEFORE AND AFTER TO SEE IF IT 
				HAS CHANGED
A	Availability		People won't use this technology
				unless data can be used properly!!!

A	Authentication		Log in eg fingerprint
A	Authorisation		Permission eg modify on file
A	Accounting = Auditing	Log WHO DID WHAT, WHEN???

```

Risk

```
Estimate chances of attack or other things going wrong

Risk Analysis

	Vulnerability	weakness

	Threat		Someone/something who can attack us

	Risk analysis 	What are the chances a THREAT CAN 
				EXPLOIT A VULNERABILITY

	Impact Analysis	WHAT-IF scenario : if this does happen
			what are the costs/consequences

		Quantitative		using NUMBERS eg 95% chance

		Qualitative		using WORDS eg high risk

		Objective		FACT

		Subjective		OPINION

What can we do with our RISKS???

	Accept/ignore risk

	Mitigate	TAKE ACTION TO REDUCE RISK EG high end
			firewall, block all ports, security cameras,
			fingerprint readers ....

	Insure (Transfer) eg house burlary/theft		
		
	Avoid risk 	doing something different

```

Least Privilege

```
minimum to do your job

```

Role based access

```
Permissions based on your JOB ROLE

```

Standardising permissions

```
Groups	eg Accountants

```

Attack surface

```
Forms and form fields : form validation ==> ensure that attackers
	cannot put in special code which can compromise your
	system

	INPUT VALIDATION : PROTECTING YOUR INPUT FORMS

	ATTACK : CODE INJECTION
		 SQL INJECTION
		 LDAP ..
		 XML ...

Malicious Insider

Social Engineering		human trickery

	Dumpster Diving		going through trash for confidential 
				info

	Tailgating		Following through into restricted
				area

		Mantrap		door shut behind you before opens
				in front of you
	
	Shoulder Surfing	watching you type eg password

		

Configuration
	Servers
	Firewalls
	Ports
	

Physical security 
	Gates
	Bollards : stop cars
	Cameras
	Locks
	Guards
	Laptops : locks

Port blocking
	Secure PORTS AT SWITCH

	802.1x PORT AUTHENTICATION : DEVICE CONNECTING MUST HAVE
		A TRUSTED CERTIFICATE

USB malware

	DISABLE USB FOR STORAGE DEVICES

Port scanning : hacker see what is open on your network

Wireshark : Network Protocol Analyser
	    Sniffing

		Examining network traffic to see what data you
		can take

```



Defence in depth : multi-layered approach to defence

Mobile security

```
BYOD	Bring your own device

Lock screen

Remote wipe

```

Laptops

```
Docking station

Port replicator

```

Keylogger

```
Record keystrokes and send data to storage or internet

```

Chapter 2

Authenticate	log in
Authorise	permissions
Accounting	logging who did what, when

Authentication

```
PROVING WHO YOU ARE : PROVIDING CREDENTIAL

What you know		password/pin

         are		biometric finger/eye/voice

	 have		Smartcard, ATM card

Where you are		Geolocation by IP

Captcha	: validate you are a PERSON  not a BOT

Multifactor authentication

	eg Password + Smartcard or Text message	

Mutual authentication

	between servers 

	Each server has to trust the other one

		802.1X to NEGOTIATE TRUST USING CERTIFICATES
			PASSED FROM ONE MACHINE TO ANOTHER

Smartcard login

	TOKEN ON CARD : TOKEN BASED AUTHENTICATION

RADIUS = authentication server

	WIFI =========>RADIUS===========>ACTIVE DIRECTORY

	VPN ==========>RADIUS===========>ACTIVE DIRECTORY

	RADIUS server will authenticate you by talking to 
		ACTIVE DIRECTORY

	RADIUS   = original method
	DIAMETER = stronger
	TACACS+  = best (strongest)

```

Active Directory

```
LDAP Port 389

Kerberos : domain security

	Log in : user receives 'token' with permissions

	Access folder : check token permissions ==> granted/blockecd
			access

```

Local login

```
SAM Security Accounts Manager ==> LOCAL USER DATABASE ON WINDOWS PC

NTLM NT LAN MANAGER ==> WINDOWS CLIENT SECURITY LOGIN SYSTEM (OLD)

Windows HELLO
	First time ==> record fingerprint/PIN/picture click
		   ==> download certificate from Microsoft

Local user

	Profile 	c:\\users
	Registry file	c:\\users\\phil\\NTUSER.DAT 
					    .MAN  (mandatory = read
						  only user profile)

	SID security ID = UNIQUE ID on your local computer

	Local Admin ==> just this computer

	Local GROUP POLICY (GPEDIT.MSC) ==> just this computer

	Microsoft Passport ==> web login (personal users) : tie
		your login to your Microsoft Login

Domain User

	Roaming Profile stored at \\\\server\\profiles\\%username%\\

		%username%	SYSTEM VARIABLE (your name)
		%windir%	c:\\windows
		%systemroot%	c:\\windows

	Folder redirection 	profile kept on SERVER ONLY

	GUID 128 bit globally unique ID  

		
Groups

	Global		THIS DOMAIN ONLY (NEST)
	Universal	FOREST-WIDE (CAN CONTAIN GLOBAL)

	Domain Local	Use this on FOLDER/FILE/DATABASE : set 
			permissions
			
			Can use it to hold both GLOBAL AND UNIVERSAL
				GROUPS

	USER=>GLOBAL=>UNIVERSAL=>----->

	USER=>GLOBAL		 ----->	DOMAIN LOCAL===>DATABASE

Website Login

	Anonymous		This used to be the normal one
				ie access website : no login

	Windows			Company domain

	Certificate		HTTPS:// environment

	Digest			programmer can code login as desired
					eg login with Facebook

User Right

	Ability to DO SOMETHING ON A MACHINE eg log in, change time	

User Permission

	NTFS
		FULL			
		MODIFY
		EXECUTE
		READ
		WRITE
		LIST FOLDERS

	SHARE
		FULL
		CHANGE			
		READ

	PRINTER

		MANAGE PRINTERS (set up)
		MANAGE DOCUMENTS (print queue)
		PRINT (default ie everyone can print)

Inherited	from above, greyed out (cannot change)

	Explicit permission : on file/folder

	EXPLICIT BEATS INHERITED

	Note: Deny beat allow but 

		EXPLICIT ALLOW BEATS INHERITED DENY

NTFS : BEST PERMISSION WINS 	read+full=>full

NTFS WITH SHARE : MOST RESTRICTIVE WINS    read+full=>read

COPY : always lose permission

MOVE : C: TO C:  keep permission
       C: TO D:  lose permission

```

Shares

```
C$	BUILT-IN	ADMIN SHARE

myshare			regular share

myhiddenshare$		hidden share

net share

net share myShare=C:\\newShare

Lab : create 1) regular share 2) hidden share 3) share with 
						command line

```

Certificates and encryption

```
.cer		CERTIFICATE FILE TYPE	

.pkcs#7 #12	CERTIFICATE FILE

PGP		PRETTY GOOD PRIVACY 	EMAIL ENCRYPT

S/MIME		WEB ENCRYPTION

EFS	NTFS ENCRYPTION (BUILT INTO WINDOWS)

	EFS=ENCRYPTING FILE SYSTEM

BITLOCKER

	TPM

	2 PARTITIONS 1) PLAIN TEXT 100MB 2) REST OF DRIVE ENCRYPTED

	CAN USE BITLOCKER WITH NO TPM CHIP ==> GROUP POLICY

BITLOCKER-TO-GO ON USB STICK

	(CAN DO FAT32 AND NTFS)

```

VPN

```
VPN Authentication Protocols

	PAP		plain text : never use

	CHAP		nearly as bad : don't use

	MS-CHAP2	Just OK (minimum)

	EAP-TLS		Secure : certificates on CLIENT & SERVER

	PEAP		Protected EAP
				1) Certificate on SERVER
				2) Password on CLIENT

VPN split tunnel

	home : using VPN to work

		browsing ==> not use VPN but your home internet
			instead (much faster)

```

Auditing

```
1) Group policy : turn on

2) Folder : turn on

```

Chapter 3

```
Password Policy
	Complex Password has 3 out of 4 set

		UPPER lower  1234 (*&^(&%^

	History	  no repeat  12

	Min Password Age 1 day

Lockout Policy

	Threshold	5 tries

	Lockout for	5 minutes    

			0 for ever!!!  call helpdesk

	
	Reset partial count after 10 minutes	

GPO is a file with group policy settings

	GPO = Group Policy Object

Password Policy

	ONE POLICY PER DOMAIN

		All people get same settings
			(default domain policy)

	But!!!  special feature called

		PASSWORD SETTINGS CONTAINER where create CUSTOM
			PASSWORD SETTINGS FOR ONE GROUP OF USERS
			ONLY EG ENGINEERS

		PSO	Password settings object
		PSC                       container (ou)

```

Other Attacks

```
Password attack

	Brute force		every possible combination in turn
	Dictionary attack	using dictionary words to guess 
				password

Keylogger : track every key you press

Password Lab
	New user Joe Buffin
	Employees\\Engineers OU
	Global Group Engineers - put him in group

	Default domain policy : min password length 12

	Log in as Joe : change password ==> can you do Pa$$w0rd 

```

Chapter 4 : Networking

```
Snap Revision

	Write out all networking ports and protocols from scratch

Write out 3 types of firewall and their level

```

NAP network access protection

```
NAC Network Access Control

With many employees working from home and dialing in using VPN
	we have potentially an issue with viruses spreading
	from home into the workplace.  Also laptops used outside
	the LAN can infect the workplace when plugged in.

Solution

	NAP

		When a machine connects to corporate network 
		we check :

		1) 	Windows Updates : up to date

		2)	AntiVirus : on and up to date

		3)	Antivirus scan : no viruses

		Do a 'health check' on machine

		If Fail ==> use DHCP to put machine into
			quarantine to 'force' machine to become
			compliant

		==> Pass ==> Certificate of health 

			==> allowed onto network

Routing

	Distance Vector

		RIP : old  (30 seconds : all data broadcast)

		EIGRP : new			

		Distance : hops (31 max)

	Link State

		Split globe into 'areas'

		Every company gets unique ID
		Send data to company and internally route via
			smaller areas

		OSPF

		Bigger, complex, more expensive to run

DHCP 

	lease time : 8 days

	do nothing : renew at 1/2 time ie 4 days

Loops

	SWITCHES

		STP Spanning Tree Protocol : auto-stop loops

	ROUTERS

		Convergence : time to stabilise after a change
				takes place

		Split Horizon

			Don't advertise routes back to the 
			interface they came from 

		Poison Reverse

			Allocate high cost (hop count = 16) to
			any routes going back to original router

```

ADVANCED ATTACKS

```
Injection attacks

	SQL injection
	XML injection
	LDAP injection

	Fight against this by using INPUT VALIDATION

		Prevent odd characters from displaying etc

Man in the middle attack

	CLIENT------------BAD ROUTER-------------SERVER

		1) Eavesdropping : listen in to traffic								(should encrypt!)
		2) Alter data in some way 

Session hijack attack

	CLIENT-----------BAD ROUTER--------------SERVER

	CLIENT-----------BAD ROUTER              SERVER

	Client : thinks they are talking to server but no longer!!!

			Router has taken over full session

Replay attack

	BAD ROUTER will collect all the packets from a session.

		Later on, will fire packets back at, say the server.

			Server might think this is the client trying
			to connect again so begin communication.  
			Open door for bad router to infect server

	Guard against ==> TIMESTAMP ALL PACKETS

```

Encryption on VPN and LAN traffic

```
1) VPN across internet

	L2TP tunnel : encrypt data with IPSEC (strong)

	IKEV2 tunnel :                  IPSEC (strong)

	SSTP tunnel :                   SSL/TLS (strong)

2) Machine-to-machine ON THE INSIDE OF YOUR LAN

	Put RAW IPSEC BY ITSELF as encryption mechanism 
		between 2 computers or group of computers

	!!! care !!!  lock down computers !!! 

	Set up IPSEC in 2 places
		1) firewall : advanced
		2) Group policy

	AH	Authentication header	- ID/login
	ESP	Encryption of data
	SA	Security Association is a live channel

	IPSEC types

		DOMAIN ISOLATION : all computers in domain 
					have IPSEC on

		TUNNEL MODE : to subnet (group of computers)

		POINT-TO-POINT (END-TO-END) TRANSPORT MODE

			between 2 individual computers

```

Virtual Smart Cards

```
Real smart card

	SERVER : HOLD PUBLIC CERTIFICATE

	USER : CARD : HOLD COPY PRIVATE KEY  (SECURE)

		Validate with your smart card : key pair activate
		to provide assurance it's you.

Virtual Smart Card

	Create a 'virtual' card which is not real but stored in
		the RAM of your computer

		==> use it to perform transactions instead of swiping
			a real smart card

```

Encrypting DNS

```
DNS by itself is PLAIN TEXT

Secure it 2 methods

	1) Put DNS inside Kerberos/Active Directory secure 
		encrypted data.   DNS fully hidden in same
		technology that protects Active Directory.

	2) DNS SEC  : add PKI certificates to DNS records to ensure
		they are 			
		1) from correct sender
		2) not corrupted in transit (hash integrity)

```

Advanced Network Attacks

```
XSS Cross Site Scriping

	Hacking into second website by gaining access to first
		website.

XSRF Cross Site Request Forgery

	If you are LOGGED IN ALREADY THEN COMPUTER GRANT YOU
	PERMISSION TO ACCESS FILES. MORE POWER TO HACK FROM
	ONE WEBSITE TO ANOTHER

Buffer Overflow

	Cache : temporary file store

	Buffer : use on NETWORK DEVICES as 'cushion' when sending
			data

		Buffer overflow attack : exceed approved memory	
		limits to perhaps hack in to other (restricted)
		areas of memory

DNS Poison
	
	Corrupt DNS records  (Pharming)

```

Protecting your WIFI

```
1) Turn off SSID broadcast : minor benefit.

2) MAC filtering : STRONG but LOTS OF WORK!!! 

3) 802.1x port security/blocking : certificates to validate
		devices : advanced but good

4) turn off unused ports

```

Email protection

```
PGP		encrypt email
S/MIME		encrypt email

SPF sender policy framework : ENSURE SENDER IS REAL SENDER

```

Internet Explorer

```
Zones
	Internet
	Intranet
	Blocked
	Allowed

Popups
	
SmartScreen filter  	list of banned websites

Inprivate browsing	Chrome Incognito 	NO HISTORY		

Inprivate filtering

	Block on COOKIES tracking your behaviour
	set limit eg 10 hits OK but any more than this : block	

```

Hardening your server

```
LOCK IT DOWN!!!!

a) Uninstall ROLES/APPS not needed
b) firewall ports
c) server GUI ==> remove GUI so only have SERVER CORE
d) check updates 
e) Analyse server for weaknesses

	MBSA Microsoft Baseline Security Analyser

		free download 

```

Extra Topics

```
Software Restriction Policy 	LOCK DOWN APPS TO PREVENT THEM 					RUNNING

AppLocker			WIN7/8/10  : LOCK DOWN APPS TO 
				STOP THEM RUNNING

Remote App			Use one application but REACH IT
				VIA REMOTE DESKTOP.  Connect to app
				then RDP window runs on your computer
				but inside window your chosen app
				is running
App-V
				Package ONE APP inside VIRTUAL 
				ENVIRONMENT and run ONE APP
				as VIRTUAL APP on your computer

Nano
				micro-server; can't be domain 
				controller.  Use with containers.

Storage spaces			Huge filing systems : new REFS 
				RESILIENT FILING SYSTEM 

```

Random Terms
Networking Ports
FTP 20/21
20 Data
21 Admin
SFTP FTP over SSH Secure Shell Port 22
FTPS FTP over SSL HTTPS Port 443
Telnet plain text commands Port 23
SSH encrypted Telnet Port 22
DNS 53 Name to IP
ARP IP address to MAC
Arp –a active
DHCP 67/8 give computer IP
DHCP scope
DHCP LEASE
DHCP POOL : 50 ADDRESSES
DHCP OPTIONS
A) ROUTER (GATEWAY)
B) DNS SERVER IP
HTTP 80
HTTPS 443
SSL
TLS
ICMP Internet Control Message Protocol : error message for internet
PING : ICMP family
NETBIOS networking using HOSTNAME only!!!
NETBIOS PORT 137-9
SMTP : Send email : Port 25
POP : receive email : Port 110
IMAP : receive email : Port 143
SNMP Simple Network Management Protocol
SNMP : Monitor SIMPLE STATS FROM YOUR REMOTE DEVICES EG ROUTER
SNMP : Port 161/2
Trivial FTP : Copy files on LAN : 69
Kerberos 88 (Active directory)
LDAP / LDP 389
RDP 3389 Remote Desktop
VPN protocols
PPP layer 2 dial up
PPTP older port 1723
L2TP Layer 2 tunneling 1701
SSTP over HTTPS port 443
IKEV2 : latest over IPSEC port 500/4500
IKEV2 : VPN reconnect within 30 minutes
NAT Network Address Translation
NAT Translate PRIVATE IP TO PUBLIC IP
PAT port address translation
PAT = NAT
Honeypot trap also we can find out who attackers are
Honeynet
IDS Intrusion Detection System : REACTIVE DEFENCE EG ALERTS
IPS Intrusion Prevention : PROACTIVE DEFENCE
HIDS Host based : one machine eg AntiVirus
NIDS Network based : on gateway / firewall
HIPS
NIPS
UTM Unified Threat Management
Firewall : block by

1. IP
2. PORT
3. TCP/UDP
4. PROGRAM EG SKYPE
FIREWALL WORKS AT 3 LAYERS
3 STATELESS : IP ONLY
3 CONNECTIONLESS
4 STATEFUL : AWARE OF TCP ‘COUNTING’ AND FLOW
4 CONNECTION-ORIENTED
7 APPLICATION LAYER FIREALL
7 DEEP PACKET INSPECTION
7 ALG APPLICATION LAYER GATEWAY
SWITCH WORKS AT LAYER 2
MAC ADDRES LAYER 2
ETHERNET LAYER 2
3 ENCRYPTION
SYMMETRIC : FAST BUT WEAKER AS JUST ONE KEY
AES *** GOOD ***
DES
3DES
RC2/4
BLUEFISH
TWOFISH
ASYMMETRIC : SLOW BUT SUPER STRONG : 2 KEYS
PRIVATE
PUBLIC
RSA ENCRYPTION
HASHING : ONE WAY ENCRYPTION
RAINBOW TABLES OF HASHES
PASSWORDS : FIRST HASH THEM BEFORE STORING THEM
LOGIN NEXT TIME : COMPARE HASHES
DIGITAL SIGNATURE : IS AN ENCRYPTED HASH OF A FILE
CERTIFICATE : CONTAIN A COPY OF YOUR PUBLIC KEY WHICH ANYONE CAN HAVE
Saturday morning : 150 terms : Security + Networking and possibly some Server
Encryption
3 types of encryption
Symmetric
Fast but insecure
ONE KEY!!! Both encrypt and decrypt
WIFI KEY
SALT : EXTRA PASSWORD
BCRYPT : SALT
AES : current
DES
3DES
BLUEFISH
TWOFISH
RC2/RC4
Asymmetric
SLOW BUT VERY ROBUST
2 KEYS PUBLIC PRIVATE
PKI public key infrastructure
RSA
Hashing
MD5
SHA1
SHA256/512 CURRENT
ONE WAY ENCRYPTION
RAINBOW TABLES
Certificate : holds PUBLIC KEY
.cer
Pkcs#7 or 12
Password attack
Brute force attack
Dictionary attack
Lockout policy
0 lockout for ever
Password history
Min password age
NAT Network address translation : PRIVATE TO PUBLIC IP
Netstat : view internet sessions : view high port numbers used 51256
PAT port address translation
NAC Network access control
NAP ..........................protection = NAC
NAC : issue CERTIFICATE OF HEALTH
NAC : access to network only permitted if you have certificate of health
NAC : 1) Windows updates
NAC : 2) AV
NAC : 3) Firewall on and configured
Honeypot
Honeynet
IDS intrusion DETECT = ALERT
IPS intrusion PREVENT = PROACTIVE
Vulnerability scan : Electronic methods to scan our systems for flaws.
Penetration test : pay WHITE HAT (GOOD) HACKER TO TRY AND HACK YOUR COMPANY
HIDS HOST BASED PROTECTION ON ONE MACHINE EG SERVER
HIPS
Host = ONE MACHINE
NIDS : NETWORK INTRUSION
NIPS
DEDICATED HARDWARE DEVICE AT EDGE OF NETWORK
PHISHING : BOGUS LINKS
SPOOFING : Fake
– ip
– mac
– sender email
Virus attach to file
Worm exist by itself and self-replicate
Trojan innocent looking file
Rootkit underlying part of computer eg hard drive / boot records
Backdoor : non-documented way of logging in and bypassing all security
Sniffing : wireshark
Network Protocol analyser
Shoulder surf : watch people type
Screen filter : stop people viewing your screen
Dumpster diving
Tailgating
Mantrap
Ransomware
Eavesdropping : listen in
Fiber : no eavesdropping
Fiber : no EMI
RFI
FTP 20/21
20 DATA
21 ADMIN
TELNET 23 PLAIN TEXT
SSH 22 ENCRYPTED TELNET
SMTP 25 SEND
POP 110 RECEIVE
IMAP 143 RECEIVE
DNS 53 NAME TO IP
REVERSE LOOKUP IP TO NAME (SECURITY)
DHCP 67/8
TFTP 69
HTTP 80
HTTPS 443
KERBEROS 88
NETBIOS 137-139
SNMP HEARTBEAT 161/2
RDP 3389
LDAP/LDP 389
VPN : DIAL UP OVER INTERNET
PPTP 1723
L2TP 1701
SSTP – VPN OVER HTTPS = SSL 443
IKEV2 500/4500
PPP OLD - MAKE PHONE CONNECTION
WEP
WPA encrypt with TKIP
WPA2 encrypt with AES
DIAL UP
POTS : PLAIN OLD TEL SERVICE : DIAL UP
PSTN PUBLIC SWITCHED TELEPHONE NETWORK
ADSL ASYMMETRIC 8X DOWNOAD FASTER
SDSL SYMMETRIC
MODEM ? DIAL UP OVER OLD TELEPHONE LINE
ISDN DIGITAL LINE
ONE LINE 64K
BRI BASIC RATE INTERFACE : 128K ( 2 lines)
PRI PRIMARY RATE : 23 LINES 1.544 Mbps
23 lines : data : bearer
1 lines : admin : delta
T1 = PRI : 23+1 LINES
E1 = 31+1 LINES ? 2Mbps
LOOPS
SWITCHING LOOP ? STP SPANNING TREE PROTOCOL
ROUTING LOOP ? POISON REVERSE : HIGH COST 16 BACKWARDS
SPLIT HORIZON : DON’T SEND BACK TO ORIGINAL ROUTER