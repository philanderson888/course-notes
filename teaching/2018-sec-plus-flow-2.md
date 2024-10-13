# CompTIA Sec+ Notes Flow 2 (2018)

Good morning!!!
CompTIA Security+ Class
Log in with P@$$W0rd654321
VM P@ssw0rd

[philanderson888@hotmail.com](mailto:philanderson888@hotmail.com)

Tips for the exam!!!

In class : [examcompass.com](http://examcompass.com/) ==> good level of test questions!!! In batches of 25 questions

Networking Overview

[mcmcse.com/comptia/network/N10004_study_guide.shtml](http://mcmcse.com/comptia/network/N10004_study_guide.shtml)

Book - each chapter has 20 questions + 100 question exam at start and end

Exam Prep : Darril Gibson 'Security+ Exam App' $7

Initial Test
Build VMs
Networking
Encryption
Start!!!

Networking

OSI 7 Layer Model

Physical
Data Link
Network
Transport
Session
Presentation
Application

Physical : Layer 1

Cabling

```
Copper

	TP Twisted Pair : 8 cables in 4 pairs

		UTP Unshielded Twisted Pair
		STP Shielded Twisted Pair

	Plenum  : fire rated cable (longer before burns)

		USED TO STOP FIRE SPREADING BETWEEN BUILDINGS 

	
	COAX
		THICKNET = 10BASE5 = RG8

			ORIGINAL : FIRST CABLE : ROBUST (500M)
			10BASE5  (speed 10Mbps, length 500m)

					Mbps Mega BITS PER SECOND
					(MB  Mega BYTES STORAGE)
			RG8

		THINNET = 10BASE2 = RG58

			10base2 : Speed 10Mbps, Length 200m (185m)
			Used for TV today

		
	Connectors
		RJ45	Network
		RJ11	Phone

		BNC		(coax)
		F-Connector	(coax)   *** NOT FIBER!!! **

Fiber
	Single Mode (Mono mode) - Pure laser light : 50km

	Multi Mode : cheaper : LED light : 2km
		Better for city-wide networks
			MAN Metropolitan Area Network
			CAN Campus Area Network (university)

			(((   LAN local
    			      WAN wide : long distance
			      PAN personal : bluetooth direct 
						communication)))

```

Layer 1 Devices

```
Hub  :   DEAL WITH ELECTRICITY ONLY IE SIGNAL IN ==> SIGNAL
		BROADCAST OUT ON ALL OTHER PORTS (INEFFICIENT)

Repeater : 2-port hub

	Used to EXTEND ETHERNET from 100m (max) to 200m

	|---------100m-----|repeater|--------100m---------|

```

Layer 1 summary : ANYTHING YOU CAN TOUCH!
CABLING : COPPER : UTP/STP
COAX THICKNET/THINNET
FIBER MONOMODE (LASER) 50KM
MULTIMODE (LED) 2KM
HUB
REPEATER

```
Port included also : physically plug cables in

```

Exam Topics

```
UTP Unshielded so VULNERABLE TO EMI interference  (RFI radio)
				and EAVESDROPPING (listen in)
COAX : Natural shield on outside so protected

FIBER : ZERO INFLUENCE FROM RFI/EMI radiation

```

Layer 2 : Data Link

```
GETTING DATA ROUND OUR LOCAL LAN!!!

PC------------SWITCH----------PC

EVERY DEVICE HAS UNIQUE ADDRESS ==> MAC Address

	IPCONFIG => SHOW IP
	IPCONFIG /ALL ==> SHOW MAC
	GETMAC
				
	18-66-DA-3E-0A-C8

	FIRST HALF = OUI = COMPANY WHICH MADE CARD  18-66-DA

	  (Google 'oui' +  18-66-DA)

Sending Data on LAN

	Ethernet is the 'protocol' to TRANSPORT DATA
			
		Ethernet 'frame' = packet of data

	|Preamble|Dest MAC |Source MAC | DATA | CRC Error check|

	Preamble ==> get ready, clocks sync ==> data is arriving!

	
Switch

	Examine 'source' and 'destination' MAC 

	Build table of attached PCs

	Port		MAC
	1		aa-bb-cc-dd-ee-ff
	2		..

	SWITCH will connect computers 1-1 (very fast)

			
Layer 2 summary
	SWITCH links computers using MAC ADDRESS
	DATA sent using ETHERNET 	

```

Layers 3 : Network

```
Layer 1 : Physical : cabling
Layer 2 : LOCAL LAN : MAC : ETHERNET : SWITCH
Layer 3 : Global Addressing with IP

Private IP

	FREE!!!

	4 ranges
		10.x.y.z			CLASS A
		172.16.x.y - 172.31.x.y RANGE         B
		192.168.x.y			      C

		169.254.x.y	==> APIPA Automatic Private IP
							Address
				((DHCP broken so you get this 
						instead))		

	Private IP ==> BANNED FROM INTERNET!!!

Public IP

	PAID!!!  $5/month!
	
	Google 'whatismyip'    147.35.10.33

	5 ranges		
	  Class A	1-126   (looking at FIRST NUMBER ONLY)		
		Loopback  127.0.0.1  (Test Network card working)
			PING 127.0.0.1 = 
			PING localhost = 
			PING ::1
	        B	128-191 
                C	192-223 
	        D	224-239 	MULTICAST : SEND DATA TO 
					GROUP OF COMPUTERS
		E	240-255 

Subnet Mask

	Can be used to tell which computers are on SAME NETWORK

	IP	192		168		10 		20
	MASK	255		255		255		0		        MASK 	11111111	11111111	11111111    00000000
	(binary)					 ^^
							split
	Mask : SPLIT IP INTO TWO PARTS

		Left : Network ID		    Right : Host ID
		          192.168.10			20
		All computers on same network
		have SAME NETWORK ID

	CLASS A/B/C MASK
		CLASS A		255.0.0.0
		      B		255.255.0.0
		      C		255.255.255.0

Summary so far : Layer 3 gives us an IP ADDRESS to enable 
		GLOBAL COMMUNICATION

	ping facebook.com ==> 31.13.91.36  actually facebook lives
					   on this IP!!!!

```

Routing (Still layer 3!!!)

```
So far : IP Provides ADDRESSING GLOBALLY

Also : ROUTING create BEST PATHS ACROSS INTERNET!!!

	HERE ==> CHINA : pre-create ROUTES beforehand!!!

		MEASURE DISTANCE IN 'HOPS' ( ONE ROUTER TO NEXT)
					MAX HOPS : 31

			((TTL TIME TO LIVE = 31,30,29,...3,2,1,0
					((CEASE TO EXIST))

Routing : think building ROAD INFRASTRUCTURE IN COUNTRY

RIP Routing Internet Protocol (v2)

	Creates best routes
	HOP = DISTANCE (('metric'))	
	INEFFICIENT (( broadcasts all data every 30 seconds!!!))

EIGRP : by Cisco

	Same as RIP but
	1-1 updates (no broadcast)
	only send update if a change has happened!!!

OSPF	Open Shortest Path First
	Splits world into 'areas'   ((think sending a letter))
				 
		OSPF truly global : efficient

RIP, EIGRP	==> 'distance vector' protocols (measure by 'hops')
OSPF	        ==> 'link state' : use areas

```

Layer 4 : Transport

```
Layer 2 : LAN ADDRESSING (MAC)
Layer 3 : IP ADDRESSING

	Layer 3 is called 'connection-less' as it doesn't give us
			feedback on WHAT HAS BEEN DELIVERED!!!

TCP : Transmission Control Protocol

	Job : feedback on WHAT HAS BEEN DELIVERED!!!

	TCP counts packets out

		SEQ = SEQUENCE NUMBER = 1,2,3,4,5,6,7	

		RECEIVER : ALSO SENDS BACK AN 'ACKNOWLEDGEMENT' 
		
		ACK = PACKET RECEIVED OK = 1,2,3,4,6,7

		SENDER : READ 1,2,3,4,6,7 AND KNOW PACKET 5 WENT
				MISSING!!!

		SENDER : RESEND PACKET 5 AND GET ACK 5 BACK

			==> COMPLETE!!!  7 PACKETS SENT + RECEIVED					
	TCP = GUARANTEED DELIVERY  (CONNECTION-ORIENTED)

	TCP also begins all communication with 'TCP 3-WAY HANDSHAKE'

		1) Client : 'Hey server I've got data to send.
					Are you ready?'
		2) Server : 'Yes OK, ready'
		3) Client : 'OK let's begin'

```

Layer 5 : Session Layer

```
STREAMS OF TRAFFIC TO/FROM DEVICE

	Extreme: Youtube video in 5 tabs playing same video!!!
	Add in : Skype, Whatsapp ...

```

Layer 6 : Presentation

```
1) ENCRYPT DATA HERE  	EG  http ==> https encrypted traffic

		HTTP PORT 80
		HTTPS PORT 443

2) COMPRESSION eg large 'BMP' bitmap ==> small JPG (compressed)
			'WMV' video            MP4 

```

Layer 7 : Application Layer eg Skype, Outlook etc

Networking Ports

```
What is a port???

A port is a CHANNEL TO SEND DATA

Think : IP is like a MEDIEVAL CASTLE :  no way in or out unless
				via approved channel!

	Illustrate dictionary.com:80 works!
                                     :81 does not work!

Port numbers run from

	1 to 65536 !!!   (2^16)

	1 to 1000  common
	1000 - 49000 registered
	49000+  anyone can use!!!
		

		Note : kilo = 1000 but in binary we have 
			2x2x2x.. = 2^10 = 1024

		Use 1024 as approx 1000 in computing
		1KB - 1000 APPROX	1024		10^3
		1MB - MILLION APPROX	.....		10^6
		1GB - BILLION				10^9
		1TB - TERABTE				10^12
		1PB - PETABYTE				10^15

```

Common Ports!!!

```
FTP File Transfer Protocol
    20 DATA
        21 ADMIN

	PLAIN TEXT!!! NOT SECURE!!!

	SFTP	FTP OVER ...
	FTPS	FTP OVER ...

Torrent (Peer-to-peer)

	Better than FTP
	Splits large files into 'SEEDS'
	Also can upload our SEEDS TO OTHER PEOPLE!!! (distributed)
		** CARE !!! **
	

TELNET Terminal Emulation

	COMMAND LINE ACROSS THE INTERNET!!!
	NOT USED TODAY!!!
	Port 23

SSH Secure Shell
	Encrypted Telnet
	Port 22
	Used today (eg manage LINUX/IPHONE)

EMAIL
	OUT
		SMTP  Simple Mail Transfer Protocol
		      Port 25	

	IN
		POP	Simple
			Port 110

		IMAP	Complex
			Port 143

HTTP	plain text 
	Port 80

HTTPS	encrypted
	Port 443
	Encrypted with SSL (old)  SECURE SOCKETS LAYER
		       TLS (upgrade) TRANSPORT LAYER SECURITY

		Exam : assume BOTH ARE GOOD!!!
		       might get question : MUST BE AWARE TLS
			NEWER (FIXES FAULT IN SSL)
			
		Real life : SSL is 'deprecated' ((no longer 					officially supported))

DNS Domain Name System

	Like a phone book

	Name		IP
	facebook.com	31.13.91.36

	Port 53

	(( NSLOOKUP give DNS info   eg NSLOOKUP google.com ))

DHCP 	Give computer IP Address

	PC ====>> BROADCAST 'HELP! I NEED AN IP'

		 	<<============= DHCP SERVER : GIVES IP

	D	DISCOVER	CLIENT : HELP !  I NEED AN IP!!!
				         (BROADCAST)
	O	OFFER		SERVER : HERE IS ONE!
	R	REQUEST		CLIENT : OK FINE, I WILL TAKE IT!
	A	ACK (NOWLEDGE)	SERVER : DONE

	PORT 67/68

RDP Remote Desktop Protocol

	Log in to another computer remotely

	Port 3389

```

Harder Ports

```
HOSTNAME = NAME OF COMPUTER!

NETBIOS = DOING NETWORKING USING HOSTNAME ONLY!!!  (PRIMITIVE!)
	PORT 137-139

SNMP SIMPLE NETWORK MANAGEMENT PROTOCOL

	PORT 161-162
	50 ROUTERS -- ARE THEY ALL UP???  (ALIVE!)

		30 SECONDS ==> HEARTBEAT 'I AM ALIVE' SENT

```

Binary

```
bit	1/0

byte	8 bits 	10101010

nibble	4 bits  1010

Counting from 0 to 15

Header	8  4  2	 1   	DECIMAL		HEX	
	
	0  0  0  0	0		0
	0  0  0  1	1
	0  0  1  0	2
	0  0  1  1      3
	0  1  0  0      4
        0  1  0  1      5
	0  1  1  0      6 = 4+2
	0  1  1  1	7
	1  0  0  0 	8		8
	1  0  0  1	9		9
	1  0  1  0	10		A	
	1  0  1  1	11		B
	1  1  0  0      12		C
	1  1  0  1      13		D
	1  1  1  0 	14		E
	1  1  1  1 	15		F  (highest!)

MAC Address looks like

	18-66-DA-3E-0A-C8

	1	8	6	6	d	a

	0 0 0 1	1 0 0 0 0 1 1 0 0 1 1 0 1 1 0 1 1 0 1 0

```

Binary	Decimal

128	64	32	16	8	4	2	1

0	0	1	0	0	0	0	0	1x32=32
0	0	1	1	0	0	0	0	32+16=48
0	0	1	1	1	0	0	1	57
0	0	1	1	1	1	1	1	63
0	1	0	0	0	0	0	0	64

1	0	0	0	0	0	0	0	128
1	1	0	0	0	0	0	0	192
1	1	1	0	0	0	0	0	224
1	1	1	1	0	0	0	0	240
1	1	1	1	1	0	0	0	248
1	1	1	1	1	1	0	0	252
1	1	1	1	1	1	1	0	254
1	1	1	1	1	1	1	1	255

This grid provides many numbers which appear over and over again

```
Class A  1-126
Loopback 127.0.0.1
Class B  128-191
Class C  192-223
Class D	 224-239
Class E  240-255

```

Harder Network Concepts

```
ICMP Internet Control Message Protocol

	NOTIFY USER IF FAULT EG
		404 Unreachable / Timeout / Invalid address etc

	Client ============================>> fail!!!

		<<<---------------ICMP LET YOU KNOW!!!!	

TFTP Trivial FTP

	Copy files on LAN 
	EG Cisco router : New operating system
	Port 69

DMZ De-Militarized Zone

	Host PUBLIC FACING WEBSITE on OUTSIDE OF OUR LAN

	PUBLIC
	WEB
	SERVER--------------------
				ROUTER

     				SECURE LAN

VPN Virtual Private Network

	Tunnel through the internet

	PPP ==> Dials up : Creates connection (point-to-point 							     protocol)
	
	4 Secure protocols:

	PPTP		Point-to-point tunnel	OLD!
			Port 1723

	L2TP/IPSEC	Layer 2 Tunneling 
			STRONG!  Certificates!
			Port 1701

	SSTP		Secure Sockets Tunneling
			VPN over HTTPS
			Port 443

	IKEV2		Strong!
			Ports 500, 4500  UDP
			
			VPN Reconnect!!!  Auto-reconnect within
			30 minutes (eg if on WIFI)

```

Switch

```
1 port typically runs at 1GBPS  (giga bits per second)

We can STACK THE SWITCHES!

	JOIN THEM ==> TRUNK PORT (10Gbps)
		      (UPLINK PORT)

	SWITCH1
            |     |
	|     |
	SWITCH2
		Loops !!!  Cause problems!!!
		STP Spanning Tree Protocol ==> AUTO BLOCKS LOOPS

```

VLAN Virtual LAN

```
Split up a SWITCH into SMALLER LANS - each one is SEPARATE 
	from the other

802.1Q  ==> OFFICIAL NAME

We can 'tag' each packet with the VLAN ID eg VLAN01, VLAN02 ETC

```

Encryption

```
Cryptography = science of encryption

ALGORITHM = Program (fixed) which encrypts data eg AES, DES, RCA

KEY = something UNIQUE WHICH CHANGES EVERY TIME SO OUTCOME OF
		ENCRYPTION IS ALWAYS DIFFERENT

Plain  ==>  algorithm   +   key                 ==> Cipher text
text						    (encrypted)

PLUS!!! Extra strength we add second key called 'salt'

	    algorithm   +   key    + salt (random
				     extra password)
				       (Exam:BCRYPT)

	      AES          wifi key  + salt (auto 
					generated)

```

3 types of encryption

```
1) 	SYMMETRIC

2) 	ASYMMETRIC

3) 	HASHING

```

SYMMETRIC ENCRYPTION

```
FAST!
NOT VERY SECURE!
USED VERY OFTEN  
	A) WIFI
	B) HTTPS:// BROWSING
	
WIFI

PLAIN 
TEXT		AES		WIFI KEY	SALT     ENCRYPTED
							   DATA

ONE KEY DOES BOTH A) ENCRYPTION B) DECRYPTION !!!

	((ONE KEY DOING A LOT OF WORK ==> VULNERABLE!))

HOW CAN WE MAKE IT STRONGER???

	IF WE LIMIT THE TIME FOR EACH KEY TO 10 MINUTES THEN
	AN ATTACKER CAN'T BREAK IN DURING THIS TIME

	HTTPS:// USES THIS   :  CREATE 'SESSION' WHEN ONLINE

	CREATE FIRST KEY : LAST 10 MINUTES
	AFTER 10 MINUTES : RECREATE SECOND KEY ETC....
		KEEP GOING UNTIL YOU FINISH OR STOP USING SITE

WIFI ==> ONE KEY !!!  EASY TO HACK!

HTTPS ==> KEYS CHANGE 10 MINUTES ==> IMPOSSIBLE TO HACK

	= "SESSION KEY"

EXAM : WHICH PROTOCOLS????

	WIFI: 
		WEP			 WEP  : HACKED
		WPA OVER TKIP            TKIP : OK
		WPA2 OVER AES		 AES  : EXAM : GOOD ANSWER!

	NOT WIFI!

		DES
		3DES	(USE DES THREE TIMES!)
		BLOWFISH
		TWOFISH

		AES!!!    KING!!! GO FOR THIS IF NOT SURE!!

	NOTE
		CCMP UPGRADE TO AES

SYMMETRIC SUMMARY
	FAST BUT LESS SECURE
	ONE KEY : ENCRYPT AND DECRYPT
	AES AND CCMP BEST; OLDER ARE DES, 3DES, BLOWFISH, TWOFISH

```

ASYMMETRIC ENCRYPTION

```
Uses two keys

Private and public

	Any can encrypt; other will decrypt

Rock solid !!! Web ACTUALLY RELIES ON THIS !!!

	Example : Verisign certificate : 30 years!!!

Super slow!!  But very secure!!!

Example :   Bob send Joe an encrypted file that only Joe can open

	1) Joe has PUBLIC KEY : SEND TO BOB (OK AS KEY IS PUBLIC)

	2) Bob : Encrypt file using JOE'S PUBLIC KEY

	3) Bob : Send to Joe

	4) Joe : Decrypt as he has the matching (PRIVATE) KEY to
			unlock the file

		((399 Rayburn Box))

```

Hashing

```
ONE WAY ENCRYPTION

Phil	Hash ==> d14ffd41334ec4b4b3f2c0d55c38be6f

					sha1-online.com		

Phil.		dcd4936713c27cae72c65e90c1e60a66
Phil,		660005620824c23f08bc0bf9b6025ac8
Phil<space>	fdcffb2dda54dff940c0a541f1cee85c

	EASILY SPOT IF FILE HAS CHANGED!!!

	DATA INTEGRITY ==> ENSURE SOURCE FILE IS NOT CORRUPT!!!

Hashing => INTEGRITY CHECK

MD5	OLDER
SHA1	NEWER

SHA256		real life (not exam)
SHA512 

phil	SHA1	e888d2bd6f13f82caa51a37c03d034c76f661ba3

	SHA512	

```

055244bd6fc27c55e1ee33f71a0fd87e32bd9b1d19bd7ed636a6588b375a1e966a45c3e14707d4ea45ed35a13cd95fa7df420fa52cfbb190ee0497c9dbcc33fb

```
SUMMARY : HASHING : ONE-WAY (CAN'T GO BACK!)

		MD5 OK
		SHA1 BETTER

Rainbow Table

	Bad guys : can't get back original password from hash!!!
		
	Instead : collect known passwords + hashes into huge tables
		(50GB) ==> so don't use short passwords!!!

```

SIGNING A FILE

```
1) HASH FILE
2) PRIVATE KEY : ENCRYPT THE HASH

	THIS 'ENCRYPTED HASH' WE CALL THE 'SIGNATURE' OF FILE.

		IMPOSSIBLE TO FAKE : USE TO VERIFY FILE IS GENUINE

TO USE / VALIDATE A SIGNED FILE/DRIVER/PROGRAM

1) GET PUBLIC KEY OF THE 'SIGNER' AND USE IT TO DECRYPT THE HASH
2) TAKE A FRESH HASH
	FILE ==> HASH (AGAIN)
	DECRYPTED HASH ==> SHOULD MATCH 

USE THIS EVERYWHERE!!!  APPLE, MICROSOFT ALL USE 'SIGNED 			DRIVERS/APPS' ON ALL COMPUTERS

```

Chapter 1 : General Terms

```
C	Confidentiality		ENCRYPT FILES
I	Integrity		FILES NOT CHANGED (PROVE WITH HASH)
A	Availability		DATA AVAILABLE!!!

A	Authentication		LOG IN : PROVE YOUR IDENTITY :
				PRESENT CREDENTIALS
A	Authorisation		PERMISSION TO REACH FILE/WEBSITE/
					DATABASE
				ACL : ACCESS CONTROL LIST : VIEW
					USERS WHO HAVE ACCESS

A	Accounting/Auditing	LOG WHO DID WHAT, WHEN!

```

Chapter 1 : Continued

C	Confidentiality	Encryption
I	Integrity	Hashing : Data has not changed (MD5/SHA1)
A	Availability

A	Authentication
A	Authorisation
A	Accounting

Confidentiality

```
Steganography

	Hiding encrypted data within an image or music file etc

```

Non-repudiation

```
Repudiate	reject, deny a statement or that something
			happened

Non-repudiation	Cannot deny that a transaction has happened : 
			use certificates

```

How can we PROVE A TRANSACTION IS GENUINE???

```
Answer : 'SIGN' the transaction files

	$1,000,000 database transaction
	Want to PROVE IT'S VALID BEYOND DOUBT
	1) Add timestamp 
	2) ZIP up database transaction files + timestamp
	3) ZIP ==> now 'sign it'

		a) HASH IT
		b) ENCRYPT HASH WITH OUR PRIVATE KEY

	Court case : prove genuine (later on!)

	1) ZIP ==> TAKE FRESH HASH
	2) COMPARE : FRESH HASH WITH OLD HASH
	3) OLD HASH : OBTAIN IT BY
		Decrypting the 'signed hash' with the signers
		PUBLIC KEY ==> REVEAL ORIGINAL HASH

		COMPARE OLD AND NEW HASH : SHOULD BE SAME!!!

```

Availability

```
Redundancy		Spare capacity to cope if there is a failure

Fault tolerance		System can keep running if there is a failure

```

Examples of Redundancy/Fault tolerance

```
Goal : AVOID 'SINGLE POINT OF FAILURE'

RAID

	Hard drives : build 'array'

		Example 'NAS drive'  NETWORK ATTACHED STORAGE

	RAID 0	SUPER FAST !!!  BUT --> NO REDUNDANCY!!!
		"STRIPING"
		USE IT FOR SERVERS WHICH ARE PROCESSING DATA (NOT
		STORING IT)  EG FAST WEB/DATABASE SERVER

	RAID 1	Mirror	: Copy of one drive on the other : 2 drives

	RAID 5  Striping WITH PARITY 

		LINK N DRIVES

		3 MINIMUM TO WORK (32 MAX)

		ONE DRIVE FAILS ==> OTHERS KEEP DATA SAFE!!!

		COST : ONLY LOSE 1/N SPACE !!!  10 DRIVES COST 1/10
				IE 1 DRIVE)

	RAID 6	DOUBLE RAID 5 IE CAN LOSE 2 DRIVES AND STILL FUNCTION

			((4 DRIVES MIN))

	RAID 1-0  IS FAST RAID 0 BUT MIRROR EACH ARRAY, SO CAN
			ALSO HAVE REDUNDANCY  (SLOW!)

CLUSTERING

	SERVERA
	SERVERB
			SERVERA FAILS ==> SERVER B 'TAKE OVER'

				Services 'fail over' from A to B

			Fix A ==> 'Fail back' from B to A again

	Good for FRONT END SERVERS!!!  EG 24/7 CRITICAL SYSTEMS
		(MUST BE UP)

		
LOAD BALANCING

	

					1 4 7	BACK END SERVER
	CLIENT ----->	LOAD BALANCER	2 5 8	BACK END SERVER
					3 6 9	BACK END SERVER
						
						  (multiple servers
						  = server farm)

SITE REDUNDANCY

	USED IN EXTREME CIRCUMSTANCES EG FIRE, FLOOD ETC

	HOT SITE	** EXPENSIVE !!! ** LIVE COPY OF OUR 
			SITE, FULLY UP AND RUNNING BUT NOBODY
			IS USING IT - IT'S SPARE!!	

	WARM SITE	BUILDING + COMPUTERS WITH SOFTWARE ETC,
			JUST NOT RUNNING 'LIVE'.  DISASTER 1/2 DAYS
			TO GET SYSTEMS UP AND RUNNING

	COLD SITE	BARE BUILDING + ELECTRICITY + WATER: 1-2 				WEEKS TO GET UP AND RUNNING IN A DISASTER

POWER

	UPS	UNINTERRUPTIBLE POWER SUPPLY
		BATTERY : LAST 30 MINUTES : POWER SERVERS
		IF ELECTRICITY FAILS.

	GENERATOR	HOSPITAL : LONG RUNNING POWER

HOT AISLE / COLD AISLE

	INDUSTRIAL SYSTEMS 

		1. HVAC  : HEAT, VENTILATION, AIR CON
		2. SCADA : INDUSTRIAL EG POWER PLANT
	 		   SCADA = CONTROL PANEL TO RUN FACTORY		
	        3. DATACENTER

		
			HOT AIR/ COLD AIR TO FLOW EFFICIENTLY			
PATCHING SERVERS

	Server engineer : ensure 'patches' are current
		1) SECURITY ** CRITICAL **
		2) FEATURES : SOFTWARE IMPROVES, ADDS NEW FEATURES		

```

RISK

```
Vulnerability

	Weakness in your system

		Firewall : on and configured
		Disable OPEN PORTS 
		AV up to date 'update the signature'  (hashes
				of known viruses) ==> SCAN SYSTEM
				AND MATCH ALL HASHES OF OUR WHOLE
				COMPUTER TO SEE IF THEY MATCH
				ANY VIRUS HASHES!!!!
				** SIGNATURE-BASED SCANNING**
		PHYSICAL LOCK
		BIOS : ADMIN PASSWORD
		INFO : NEED TO KNOW!!!
		DISABLE USB/DVD ACCESS
		SWITCH : LOCK DOWN PORTS (BLOCK PORTS)
			802.1X ==> AUTOMATICALLY CHECK SYSTEMS
			       ARE VALID WHICH CONNECT
			(( LAYER 2 PORT SECURITY ))
		NO WEAK PASSWORDS

Threat
	
	Attacker!!!

Risk

	Chance that AN ATTACKER will EXPLOIT (USE) A VULNERABILITY
	(WEAKNESS) TO ATTACK US

	SLE	Single Loss Expectancy : $$$ expected if this
			particular event happens (loss)

	ARO 	Annual Rate of occurrence : HOW OFTEN EXPECT THIS 
			ATTACK

	ALE	= ANNUAL LOSS

	ALE	= SLE X ARO         

			EG $10,000 X TWICE YEAR ==> ANNUAL $20,000

	Mitigate 	Spend money to reduce chances of an attack

	Also

		Accept risk 	do it anyway  
		Transfer risk	insure $$$$ 
		Avoid risk	do something different

```

Authentication

```
Identity Proofing 	sign up with ID eg for passport : verify
			your identity with documents

What you ...

Something you   know		USERNAME / PASSWORD / PIN

		are		BIOMETRIC EG FINGER, RETINA, VOICE

		have		CAC / Smart / ATM card

		do		((Think handwriting recognition : 
				similar with 'way you type'))

Some where you are 		GEOLOCATION BY IP

Multifactor
		Common		SMARTCARD + PIN    (Dual)
				
				Exam : note : password + pin = 1
					factor (not 2)

OTP One Time PAD/Password	Text message : unique code valid
				one time

	TOTP	Time based: lasts 60 seconds

	HOTP	Hash based : message must match given hash

Password Policies

	LOCAL GPEDIT.MSC

	DOMAIN (GROUP POLICY)		

	Complex : 3 of 4 from   UPPER lower 1234   !@@@##$$%^%^

	Exam : find Group Policy:Computer:Windows:Security:Account

Lockout Policies	

	Lock account after x fails; lock for y minutes (0=forever)

		Reset partial count after z minutes

Default Passwords

	Often come with web devices eg wifi router : ensure
	you change them asap.

	Windows ==> CAN RENAME ADMINISTRATOR ACCOUNT 

		DISABLE GUEST ACCOUNT

```

Smart Cards

```
PIV Personal Identity Verification

Smart card is also called 'token based authentication'

```

Biometric login ERRORS!

```
False Acceptance Rate   FAR  ((Also called 'Type II' Error))

	Bad guy gets logged in  (should reject but doesn't)	

	

False Rejection

	Valid person : login rejected

```

AV Scan
False Positive	GOOD FILE : THINKS IS VIRUS

```
False Negative		BAD FILE  : NOT FLAGGED AS VIRUS	

```

Technologies to log you in to a computer system

```
Kerberos 

	Keeps Windows servers secure!!!  ((keeps Active Directory
		secure!!!)

	When you log in, Kerberos ISSUE YOU WITH A 'TOKEN'

	When you want access to a file you present this TOKEN

		Check : ACL : List of users ==> DO YOU HAVE 						PERMISSION ON THIS FILE?

				ACL = ACCESS CONTROL LIST
		
		      : ACE : fine permissions (ACCESS CONTROL ENTRY)

				FULL CONTROL	SET PERMISSIONS
				MODIFY		CHANGE/DELETE
				READ		VIEW ONLY
				EXECUTE
				WRITE		CREATE ONLY		
				LIST FOLDERS														

		Note : Clocks must be synchronised within 5 minutes!

	Kerberos : Port 88 !!!

LDAP
	Lightweight Directory Access Protocol

		
	Active Directory is BUILT ON LDAP!!!

	Names look like

	CN(COMMON NAME)=Melinda Gates,OU=Managers, OU=Employees,
		DC=phil,DC=local

	OU = FOLDER (ORGANIZATIONAL UNIT)

	LDAP PORT = 389
	RDP  PORT = 3389

				((X.500 IS OLD))
	LDAP Secure : Encrypted

SSO Single Sign On

	Log in once, access to multiple sites

	
Companies Trusting Each Other

	Trust : One company trusts another 

	Transitive Trust

		A ==> B  and B ==> C

		then

		A  ==         ==>  C

ADFS Federation Services

	Permits SINGLE SIGN ON BETWEEN DIFFERENT COMPANIES

			 ((use certificates))
		==============>ADFS============>
	COMPANY A				COMPANY B
	
	USER A					((userA appears
						as read-only user))

		

SAML : language which enables SINGLE SIGN ON (XML LANGUAGE)

```

VPN Authentication (remote dial in)

```
PAP		Plain text : don't use!

CHAP		Don't use!

MS-CHAP2	Just OK! Minimum.	

EAP-TLS		Most secure : EAP (Shell) with TLS (Encryption)

		Secure : Certificates ON BOTH SERVER AND CLIENT

PEAP		Protected EAP
		
		Certificate on SERVER; Password on Client

```

RADIUS

```
Client ==> dial in 					ACTIVE
	   RAS dial-in  <---------RADIUS SERVER ------->
	   server		  validate login        DIRECTORY

RADIUS		BASIC
DIAMETER	BETTER  
TACACS+		BEST    (encrypt session)

```

Chapter 2 : Controls

```
Management Controls
	Create POLICIES : RULES
	Check COMPLIANCE : ARE PEOPLE/SYSTEMS KEEPING OR ADHERING
				TO THE RULES!!!

Operational Controls
	Day-to-day work eg
	Checking logs (manually)
	Rotas 
	Updating AV/software
	==> DOING WHAT MANAGEMENT SAYS NEEDS TO BE DONE!!!	

	MANUAL : INVOLVE A PERSON

Technical Control
	Using technology to protect our organisation
	Firewall RULES
	AV daily scans
	IDS	Intrusion Detection (detect attack)
		NIDS	Network attack
		HIDS	Host based attack (one machine)

		IDS = DETECT ==> ALERT ONLY!!! (PASSIVE)

	IPS	Intrusion Prevention (detect but also fight attack)
		NIPS	Network prevention 
		HIPS	Host based prevention

		IPS = PREVENT ==> TAKE ACTION!!!  ((LOCK DOWN ALL
			FIREWALLS OR USE DHCP TO MOVE ATTACKING
			COMPUTER TO QUARANTINE NETWORK)

			DOS ATTACK : CLOSE FIREWALL COMPLETELY 10 					MINS

	Permissions : Auto keep people out of folders etc

		LEAST PRIVILEGE : GIVE PEOPLE MINIMUM TO DO JOB!

```

Management Controls

```
CREATE POLICIES
CHECK COMPLIANCE

Also

RISK ASSESS : EVALATE PROBABILITY OF AN ATTACK AND CONSEQUENCES

	QUANTITATIVE	EG 20% CHANCE OF ATTACK NEXT 6 MONTHS
			DEFINITE, WITH NUMBERS (QUANTITY)

			OBJECTIVE : FACTUAL!
	
	QUALITATIVE	MEDIUM CHANCE OF ATTACK : VAGUE, HARD TO 
			DEFINE.

			SUBJECTIVE : OPINION!

	
VULNERABILITY ASSESSMENT  : PASSIVE

	Scan of OWN SYSTEMS to determine where your weaknesses lie
			
		eg Night time check : are all doors locked!!!

		eg User accounts : check privileges!!
			(Privilege audit)

		eg Firewall : OPEN PORTS	

		eg Server : CHECK PATCH LEVELS

		eg Codes (door) : changed???

	*** EXAM ==> PASSIVE (NOT TAKING ACTION, NOT INTRUSIVE!)
	

PEN TEST : PENETRATION TEST

	Actually try and 'hack in' to your own systems!!!

	Pay 'white hat' hacker to hack in to your system!!!
	    (ethical)
		
		((Dangerous !  Can cause damage!!))

```

SUMMARY SO FAR
MANAGEMENT CONTROL : POLICIES, COMPLIANCE, RISK ASSESSMENT
VULNERABILITY ASSESS (INFORM)
PENETRATION TEST (EXPLOIT, HACK IN)

OPERATIONAL CONTROLS

```
Training!!!
Clean Desk Policy!
Physical protection!
Environmental eg HVAC		Heating, Ventilation, Air con
		 SCADA		Factory control panel
		 HOT/COLD AISLE
		 EMI SHIELDING  (Electromagnetic interference)

Configuration Management

	SET SERVERS WITH SPECIFIC CONFIG ==> SECURITY LEVELS PRE-SET
		NEW SERVER == > SET UP WITH PRECONFIGURED LEVELS

	Change ==> approval for change to config of eg server

Change Management

	GET APPROVAL FOR CHANGE TO A SYSTEM!

	WRITTEN REQUEST : COST, TIME, RISKS, BACKUP ETC
	SIGNED OFF ==> EXECUTE AND MAKE CHANGE

Contingency Planning : What-if scenarios : planning for the worst etc

Secure systems according to GIVEN NATIONAL STANDARDS

	NIST NATIONAL INSTITUTE FOR STANDARDS AND TECH

		==> Security Standards  (SP-800)

```

Controls so far
1) Management
2) Operational
3) Technical

Also..

```
1) Prevent		LOCK DOOR, FIREWALL : PREVENT ATTACK
2) Detect		NIDS : Detect EG a DOS ATTACK!!!
			HIDS (one PC)
3) Correct		NIPS : Prevent attack eg CLOSE FIREWALL IF
					DOS ATTACK
4) Deter		Banner, Floodlights, (Fake or real)Cameras
			Logon banner, Warning sign
5) Compensating		IF PLAN A FAILS, USE PLAN B!
			((Biometric system has failed : use smartcard
			login instead))

```

Detail in book :

Prevent Controls

```
Harden : lock down system (more secure)

Training

Guards

Change management

Disable unused accounts  (don't delete straight away)

```

Detect

```
Logs and READ THE LOGS! 

	((MAAS ==> Monitoring As A Service ==> pay someone to check
		your logs!!!))	

Trends, Analysis

Auditing ==> EXTERNAL : CHECK YOUR SYSTEMS !!!

Motion detection

Video

```

Corrective

```
NIPS Prevention

Restore from backup if fail

```

Compensate
Book example : smart card not working so use OTP ONE TIME PASSWORDS
INSTEAD

Physical security

```
CIPHER LOCK = KEY PAD EG ON DOOR

PROXIMITY CARD : NFC READER (Near Field Comms)  

TAILGATING ==> Follow someone through secure door

	(stop with MANTRAP)

```

Logical Security

```
Group Policy

	PASSWORD POLICY
	LOCKOUT POLICY

Prohibit GENERIC (Built in) accounts like GUEST etc

Time-of-day restrictions

Expiring Accounts : Temp account expires 5 Dec 2018

Logon Failures : Can AUDIT THIS AND CHECK FOR HACKERS TRYING 
			TO HACK IN

	Event Viewer ==> see failed logins!!!

Credential management

	==> store passwords!!! 

```

Access Control

```
ROLE BASED  ROLE-BAC
RULE BASED  RULE-BAC
MANDATORY  (MAC)
DISCRETIONARY (DAC)

Role Based : Permissions set by JOB ROLE : AUTO-JOINED TO CORRECT
			GROUPS

Rule Based : Time-of-day restrictions : NOBODY CAN LOG IN MIDNIGHT
		TO 6AM BECAUSE BACKUP IS ROLLING!

Discretionary access (DAC)

	Standard permissions
	Discretion ==> LOCAL ADMIN CAN FEEL FREE TO CHOOSE/SET
			PERMISSIONS FOR LOCAL USERS

	Set NTFS Permissions for users eg Modify / Read

	SID Security ID

		Windows track users with SID security ID

	GUID Global User ID (domain)

MAC Mandatory Access

	FIXED GOVERNMENT CLASSIFIED DOCUMENTS
		non-classified, classified, secret, top secret
	
	MAC ==> ACCESS TO DOCUMENT HAS BEEN FIXED BY GOVERNMENT; 
			NOT FREE TO CHANGE IT

```

Summary
RULE	TIME-RESTRICTIONS	RBAC RULE BASED
ROLE	AUTO ADD TO GROUPS	RBAC ROLE BASED
MAC	TOP SECRET : FIXED
DAC	DISCRETIONARY : YOU CAN CHANGE

Networking

Layer 2 :	SWITCH, MAC, ETHERNET
Layer 3 :	IP, ROUTING
Layer 4 : TCP : SLOW BUT CHECK ALL DATA
UDP : FAST : USE WHEN DON'T NEED TCP CHECKING

ARP : Address Resolution Protocol

```
MAP from IP TO MAC address

	arp -a

```

Encryption Protocols (DATA IN TRANSIT)

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

Revision

```
FTP  20/21  		FILES
TELNET 23   		TEXT COMMANDS
SSH SECURE SHELL 22 	ENCRYPTED TELNET

EMAIL
	SMTP SEND	25
	POP  RECEIVE	110
	IMAP RECEIVE 	143

DNS	NAME TO IP	53
DHCP	GIVE COMPUTER IP  67/8
TFTP	TRIVIAL FTP     69

HTTP			80
HTTPS			443

RDP	REMOTE DESKTOP  3389
LDP	LDAP		 389

KERBEROS		88

NETBIOS (NETWORK WITH NAMES)  137-9
	
SNMP	ARE SERVERS ALIVE (HEARTBEAT)	161-2
	SIMPLE NETWORK MANAGE

	    V1 PLAIN TEXT
	SNMPV3 TODAY : ENCRYPTED!!! 

```

ALSO!

```
SFTP	FTP OVER SSH PORT 22  (lower number at start SFTP)
FTPS	FTP OVER SSL PORT 443

SQL	1433

```

To Talk To The Internet We Need :

```
1. IP		
2. MASK
3. GATEWAY
4. DNS

IP => ADDRESS OF PC			192.168.10.20

MASK ==> WHICH NETWORK WE ARE ON	
				255.    255.     255.     0
				1111111 11111111 11111111 00000000
				CIDR /24 = NUMBER OF 1'S IN MASK
					NETWORK IS 192.168.10.0

GATEWAY ==> TO INTERNET

DNS : MAP NAME TO IP	

```

SUBNET MASK IS A CHOICE THAT HUMANS MAKE TO DETERMINE SIZE OF YOUR NETWORK

```
CLASS C MASK /24	LIMITATION : 2 POWER 8 = 256 COMPUTERS MAX!
      B      /16    
	     255.255.0.0  MEANS 2 POWER 16 COMPUTERS!! 65000
      A      /8
	     255.0.0.0          2 POWER 24 COMPUTERS! 

WEBSITE : JODIES IP CALC

```

DNS

```
A	IPV4 ADDRESS	1.2.3.4
AAAA	IPV6 ADDRESS    	
MX	EMAIL
CNAME	WWW   FALSE (ALIAS) NAME

NS	NAME SERVER : ANY DNS SERVER         : READ COPY
SOA	START OF AUTHORITY : BOSS DNS SERVER : MASTER COPY

SRV	SERVICE : FIND ACTIVE DIRECTORY SERVICES EG KERBEROS

PTR 	POINTER : REVERSE 

		IE IP TO NAME LOOKUP

```

FIREWALL

```
HOST-BASED : ONE PC

NETWORK BASED : ALL PCS (IE ON ROUTER)

FIREWALLL RULE : BLOCK/ALLOW IP TRAFFIC

FIREWALL : BLOCK BY

	1. IP
	2. PORT
	3. PROGRAM
	4. PROTOCOL : TCP OR UDP

IMPLICIT DENY : LAST RULE = BLOCK ALL TRAFFIC NOT MATCHED

```

Types Of Firewall

```
Layer 3
	BLOCK BY IP ONLY!
	"STATELESS" FIREWALL  

Layer 4
	AWARE OF 'FLOW' OF TCP TRAFFIC (SEQUENCE 1,2,3,4...)
	"STATEFUL" FIREWAL

Layer 7  ** SLOW YOUR SYSTEM DOWN!!! ***

	DEEP PACKET INSPECTION		ANALYSE FILES EG INSIDE ZIP
					FILES FOR VIRUS ETC

	UTM UNIFIED THREAT MANAGEMENT	UNIFIED THREAT MANAGEMENT
					UMBRELLA TERM FOR DETECTING
					ALL NASTIES/PROTECTING YOUR
					NETWORK

	WAF WEB APP FIREWALL		AROUND WEBSITE!

```

NAC NETWORK ACCESS CONTROL

```
Force clients to become COMPLIANT before they JOIN YOUR NETWORK

CHECK   1) Updates
	2) AV
	3) Firewall ON

FAIL ==> PUT PC TO QUARANTINE : FORCE PC TO 'HEAL' & GET UPDATES

```

NAT AND PAT

```
NAT can allow computers with PRIVATE IP to reach PUBLIC INTERNET

Swap our PRIVATE IP for the PUBLIC IP of our ROUTER

	(( add in a high port number so can get a reply eg 58885 ))

NAT = PAT  Network / Port address translation

	PAT = MANY PORTS
	NAT = ONE PORT  ( LOOSELY CALLED PAT/NAT ANYWAY)

```

Chapter 4

```
IDS	Intrusion DETECTION

	HIDS  on one computer (HOST) only 
	NIDS  on firewall : PROTECT WHOLE NETWORK

	Passive : ALERTS ONLY!  (help! we are under attack!!!)
	
IPS	Intrusion PREVENTION

	HIPS/NIPS

	Active : take action eg block firewall

Wireshark = Packet Sniffer = NETWORK PROTOCOL ANALYSER!!!!

```

Ways to DETECT AN ATTACK

```
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

```

Detecting attacks

```
Honeypot  : FAKE LURE : 1) We can get info on them!
			2) They are wasting their time!!!

Honeynet
	    FAKE NETWORK

```

Wireless

```
WAP = Wireless Access Point  (PROVIDES WIFI)

		((WAF = Web Application FIREWALL!!))
			((DON'T GET CONFUSED!) (PROTECT WEBSITE ON 									DMZ)

IEEE 802.11 ==> WIFI standards
     802.3  ==> Ethernet standards
     802.5  ==> OLD Token Ring network

			((IEEE Institute Electrical/Electronic 								Engineers)

Wifi Types

	Infrastructure Mode	Regular wifi with WIFI point

	Ad-Hoc Mode		2 laptops connect direct

Wifi Speeds/Frequency  ** LEARN ! **

	802.11		Freq			Speed Mbps
	a			5		54
	b		2.4			11
	g		2.4			54
	n		2.4 and 5		600+ (MIMO VARIABLE)
	ac			5		1000+ 

	b, g, n ==> COMPATIBLE ON 2.4GHz FREQUENCY 
		((work at LOWEST SPEED)

	n is dual band : works at 2.4 and 5

	MIMO : VARIABLE SPEED : NUMBER OF ANTENNAS PRESENT (1-8)
		((Multiple Input, Multiple Output)

```

Antenna

```
Omnidirectional		all directions

	DIPOLE 		vertical stick
	
	Isotropic

Directional

	Yagi		TV Antenna

```

Site Survey

```
Used to check
	1) POWER IS NOT TOO GREAT FOR OUR WIFI : SOLUTION : REDUCE
			POWER  (Power in DECIBEL units)

	2) WIFI reaching all necessary parts of our building

HACKER OUTSIDE IN CAR : REDUCE POWER TO MAKE IT HARDER FOR THEM 				OUTSIDE	

```

Wifi Protocols

```
WEP	OLD, HACKED!!! (( THE 'SALT' CAN BE EASILY HACKED))

			(( SALT IS ALSO CALLED 'IV' INITITIALIZATION
				VECTOR SO IT'S CALLED AN 'IV' 							ATTACK))

WPA	ENCRYPT WITH TKIP

WPA2	(CURRENT) 

	ENCRYPT WITH AES	** EXAM GOOD ANSWER **

	NOTE : CCMP IS ADVANCED AES SO BETTER THAN AES

```

SUMMARY!

```
WEP : HACKED  (SALT/IV)
TKIP : OK
AES : GOOD (NORMAL BEST ANSWER)
CCMP : TRUMPS AES

			EXAM WRONG ANSWERS!!

				1) HUB : BROADCASTS (NOISY)
				2) PAP/CHAP : PLAIN TEXT 							AUTHENTICATION
				3) WEP : HACKED WIFI

```

WIFI Personal vs Enterprise

```
WEP (old)

WPA over TKIP

WPA2 over AES

	Personal Mode

		Regular WIFI : ONE WIFI KEY!!!
		((Also called 'Pre-Shared Key'  PSK))			

	Enterprise Mode

		Force login using Active Directory credentials

WIFI CLIENT==>WIFI==> RADIUS -----------------> ACTIVE DIRECTORY

	Connect via 802.1x to Radius server which validate your
		login using Active Directory (back end)

```

((Similar to VPN!)

```
VPN CLIENT ==> DIAL-IN RAS SERVER ==> RADIUS  ==> ACTIVE DIRECTORY			

```

Encryption Methods

```
These are in increasing order  ((EAP : shell : container))

LEAP		weak		L => LIGHTWEIGHT EAP

PEAP		good		PEAP = PROTECTED EAP
				SERVER : CERTIFICATE
				CLIENT : USER/PASSWORD

EAP-TLS		best		CERTIFICATES : BOTH ON SERVER
				AND CLIENT : ULTRA-SECURE

```

Mobile Encryption

```
ECC Elliptic Curve Cryptography : SMALL, FAST ==> GOOD FOR MOBILE
					PHONE ENCRYPTION!!!

```

Captive Portal : Forces you to read and accept terms and conditions before
connect to free wifi

Secure WIFI

```
1) MAC filtering ==> a LOT OF WORK!!!  (only connect if your MAC 
						matches)

2) Turn down POWER!

3) ??? not very good ??? ==>  EXAM : OK ANSWER : DISABLE SSID
					BROADCAST

	SSID ==> Name of WIFI EG FreeHotelWIFI

	POSSIBLE : DISABLE BROADCAST OF SSID
		
		(( PHONE ==> SEE 'UNNAMED NETWORK'))

```

EXAM : SECURE WIFI
1) ENCRYPTION : BEST (WEP HACKED, WPA, WPA2)
2) MAC FILTER : GOOD : TONS OF WORK
3) POWER LOW : GOOD
4) DISABLE SSID BROADCAST : JUST OK

War driving / war chalking

```
WAR CHALKING	: MARKING OUTSIDE FREE WIFI

WAR DRIVING     : LOOKING FOR FREE WIFI

```

WPS WIFI Protected Setup

```
ONE BUTTON PUSH SETUP : AUTOMATIC 8-DIGIT PIN USED TO CONNECT

	VULERNABILITY : SPLITS INTO TWO 4-DIGIT PINS, EACH ONE
		CAN BE CRACKED EASILY

	EXAM : TURN OFF WPS !!!

```

Rogue Access Point	Unauthorised WIFI

Evil Twin	WIFI with SAME NAME AS GOOD WIFI POINT

Jamming	Interference

Blue Jack	Virus over bluetooth / attack (Hi-Jack)

Snarf	Steal

Blue Snarf	Steal data eg contacts over bluetooth

Distances

```
NFC		10cm		Near Field Communication

IR 		1m		Infra Red

BLUETOOTH	10m		

WIFI		30m

WIFI 'AC'	100m

ETHERNET	100m		(Repeater : 200m)

10BASE2		200m (185)	THINNET COAX

10BASE5		500m 		THICKNET COAX

USB		5m

```

Dial up

```
Modem : used to dial up (56k or 92k)

```

VPN

```
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

			
IPSEC	
	AH AUTHENTICATION
	ESP ENCRYPTION

```

((WIFI CHANNELS))

```
WIFI HAS 13 CHANNELS

	BUY DEVICE SET TO CHANNEL 1,6, OR 11

		POOR SIGNAL ==> CHANGE CHANNEL

```

Proxy Server

```
Forcing web users to go through 'middle-man' server

Allow you to : 

1) Filter for viruses
2) Blacklist of banned sites
3) Store (cache) content for faster use with next user who 
		needs same data
4) Billing $$$ for usage
5) Monitor which employees ==> which sites

```

Zero day ==> ATTACK ON BRAND NEW SOFTWARE : BAD GUYS FIND VULNERABILITY
AND EXPLOIT IT BEFORE GOOD GUYS GET TO KNOW WHAT'S HAPPENING

Hardening Your System

```
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

```

Virtualization

```
VM = VIRTUAL MACHINE

.VHD = VIRTUAL HARD DRIVE		WIN7
.VHDX = NEW VHD TYPE			WIN8/10

Hypervisor ==> MINI OPERATING SYSTEM TO RUN VIRTUAL MACHINES
		HYPERV 	WINDOWS Free

SANDBOX ==> VM FOR TESTING EG VIRUSES : TOTALLY ISOLATED

SNAPSHOT ==> INSTANT BACKUP OF YOUR VM SO CAN RESTORE QUICKLY

VHDX = HARD DRIVE

AVHDX = CHANGES SINCE LAST SNAPSHOT!!!

```

Problems with VMs

```
Easy to COPY AND STEAL A WHOLE VM!!!

	VM ESCAPE : Lock VM so it only runs on ONE HOST WHICH
			YOU DESIGNED IT FOR!

VM sprawl : easy to create new VMs which can be unpatched / unmanaged

VM escape : Virus from VM can INFECT HOST

```

Pro/Con of VMs

```
Advantage
	SANDBOX/ISOLATION/TESTING
	Don't have real costs of real machines : HARDWARE, 
		BUILDING, HVAC, MAINTENANCE, ELECTRICITY, TRAINING
		FOR ADMINS
	Scalability : ON DEMAND CAN GET MORE POWERFUL SERVERS
		INSTANTLY : UPGRADE CPU/RAM/NETWORK/HARD DISK
		
			AWS AMAZON / AZURE MICROSOFT / GOOGLE CLOUD
Disadvantage
	YOUR DATA OWNED BY SOMEONE ELSE!!!

```

Phones

```
BYOD		Bring your own device

Lock

```

Laptop

```
BITLOCKER : full hard drive encryption

	Bitlocker needs

			TWO PARTITIONS
			|--100MB PLAIN TEXT--|---BITLOCKER---|
			  (boot PC)             (rest of drive)
			MBR 
			Master Boot Record

			TPM chip : hold encryption keys
				Trusted Platform Module

```

Security Terms

```
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

```

Encryption On A Computer

```
EFS Encrypting File Service : Windows

	Encrypt SINGLE FILES AND FOLDERS!

		Not	WINDOWS

			
			PAGE FILE = SWAP FILE = VIRTUAL MEMORY
		
				PAGEFILE.SYS

			HIBERNATE FILE

				HIBERFIL.SYS

TPM : CHIP TO STORE BITLOCKER KEYS

HSM : HARDWARE SECURITY MODULE : CAN STORE ANY KEYS FOR YOUR
		COMPANY (STAND-ALONE DEVICE)

		

DLP = data loss prevention

```

Ways of storing data

```
DAS  Direct Attached Storage : Drive plugged into PC

	IDE : old
		3.5 inch / 2.5 inch laptop version

		LIMITATION : 4 DRIVES MAX PER PC
		             COLD SWAP : SHUT PC DOWN

	  	IDE = PATA drive

	SATA : new

		HOT SWAP : PC CAN BE ON!  

	SSD : solid state : no moving parts		

NAS Network Attached Storage : over RJ45

	RAID 0		Striping		2+    FAST!
	     1		Mirror			2     REDUNDANCY
	     5		Striping with parity	3+    REDUNDANCY

	Good for 'SOHO' NETWORK (Small Office Home Office)
		eg 10 users

SAN Storage Area Network  : large scale!!!

  CLUSTER 					  BACK END
  FRONT END					   DATABASE

  SERVERA________________SWITCH____________________SAN Storage
  SERVERB		10Gbps channel		   Area Network

			FIBER CHANNEL
	
			iSCSI

	Fiber Channel : Reliable, Dedicated Hardware, $$$$ costly

	SCSI : was old (servers)

	iSCSI : new : free : OLD SCSI OVER EXISTING ETHERNET
			     CHEAP, NOT QUITE AS RELIABLE
	
	FCoE : Fiber channel over Ethernet : free version

		Note : FIBRE not FIBER OPTIC!!!

		       FIBRE CHANNEL : COPPER OR FIBER CARRIER

```

Cloud Computing

```
SQL DATA	regular database

BIG DATA	newer style of huge database

	STORES USING 

		XML

		JSON Javascript

SAAS Software As A Service	Log in and use a service
				eg $8 month DROPBOX / Office365

PAAS Platform As A Service	Virtual Desktop (RDP Remote Desktop)
				or
				'hot desk' : worker come in and use
				any terminal but access same 'virtual
				desktop'
				VDI Virtual Desktop Infrastructure
				Own files, outlook, programs etc

IAAS Infrastructure As A Service  : build virtual environment from 
					scratch.  VMs, network etc

PRIVATE CLOUD		YOU ALONE HAVE ACCESS TO THE MACHINE
			IN THE DATACENTER 

PUBLIC CLOUD		SHARE ACCESS WITH MANY OTHERS EG PUBLIC 
			GODADDY

COMMUNITY CLOUD		SEVERAL COMPANIES WORK TOGETHER TO BUY
			THEIR OWN PRIVATE CLOUD, TOGETHER

```

Malware	Catch-all term : ANYTHING MALICIOUS AT ALL : ANY SOFTWARE
AT ALL WHICH YOU DIDN'T ASK TO RUN ON YOUR PC

Virus	Software which needs HOST PROGRAM TO RUN EG MICROSOFT WORD : MACRO
VIRUS.

Worm	Self-exist and Self-propogate

Trojan	Innocent looking file eg music download, but VIRUS INSIDE IT!

Cookie	PLAIN TEXT FILE ==> STORES YOUR WEB PREFERENCES (NOT
MALICIOUS OF ITSELF)
1st Party	GOOD; COMPANIES YOU APPROVE
3rd party	ADVERTS; NOT WANTED OR APPROVED

Adware	Pushing adverts to you

Spyware	Tracking your browsing habits : big money : analysis
of who does what, when

Rootkit	Infects computer in areas even before Windows is installed
eg Hard Drive, 'firmware' (motherboard instructions)
** MUST DO OFFLINE SCAN TO DETECT AND REMOVE **

Zombie	Infected but maybe dormant : often waiting for 'logic bomb'
signal to wake up!

Bot	robot : anything automated

Botnet	GROUP OF INFECTED COMPUTERS WORKING TOGETHER FOR A MALICIOUS
GOAL

Logic Bomb	Virus which activate on a trigger eg TIME / NETWORK SIGNAL

DOS attack	flood server with too much traffic
Denial Of Service

DDOS attack	Distributed DOS : from many computers

Armored Virus	Harder to detect : tricks of deception : eg
POINT TO AREAS OF MEMORY WHERE IT DOES NOT LIVE

Polymorphic Virus	Changes itself so that HASH also change : can't
now detect using traditional AV signature based
scanning ==> other 'heuristic' real time analysis
to get patterns matching to detect

Social Engineering	Deceiving a PERSON!!!

Shoulder Surfing	Watch you type a password!

Dumpster Diving	Go through TRASH for information eg passwords

Spam	Junk email

SPIM	Spam over IM Instant Messaging

Phishing	Send bogus links via email etc

Spear Phishing	Targeting ONE INDIVIDUAL OR GROUP

Whaling	Target HIGH VALUE TARGETS eg CEO etc

Vishing	Attack over VOIP phone (like Skype)

Clickjacking	Click on innocent button : download virus

Drive-by-download	Open site; download begins!

Ransomware	Demand $$ for locked PC

Privilege Escalation	Get more priviliges than you should have

Zero Day Exploit	Brand new software : bad guys discover a	vulnerability. Exploit (use) this for
bad purposes. Before good guys realise
there is a problem. Window of opportunity
for bad guys, before a fix is released

Certificates

```
PKI 	Public Key Infrastructure : COMPANY WHICH USES CERTIFICATES

Private : VALID FOR INTERNAL USE ONLY 

		--   ONE COMPUTER
		--   MY WHOLE (INTERNAL) COMPANY (VALID INSIDE 
			COMPANY BUT NOT OUTSIDE)

			(( This certificate is not trusted ...))

Public  :   have to get issued by a formally recognised body
		eg 'VERISIGN' which will 'vet' you a bit like
		when you apply for a new passport

CA = Certificate Authority = ROOT (FIRST) SERVER IN YOUR COMPANY

	Intermediate server		LARGE COMPANIES

	Issuing server		work of issuing certificates

Certificates EXIST FOR DIFFERENT PURPOSES

	eg SmartCard User, Domain Controller (computer),
		Exchange User ....

	Templates : for different purposes : customise

Enrol : ask for a certificate (Enrolment)

	RA Registration Authority : VALIDATE YOUR IDENTITY WHEN
		YOU ASK FOR A CERTIFICATE		

	One way to VALIDATE WHO YOU ARE IS : SIGN YOUR OWN REQUESTS
		BEFORE SENDING OFF 

		CSR Certificate Signing Request : SIGN WITH YOUR OWN
			PRIVATE KEY then send off for approval

Revoke = Annul

	Two lists of 'revoked' certificates

		CRL Certificate Revocation List

			LOCAL ON YOUR LAN (Offline)

			Big lists ==> DELTA (PARTIAL) CRL also	
		
		OCSP : online website : check for ONE CERTICATE ONLY

			Online Certificate Status Protocol

Back Up Keys

	Data Recovery Agent : RECOVER ALL KEYS FOR ALL USERS
					(Dangerous)

	Key Recovery Agent : RECOVER ONE KEY FOR ONE USER : SAFER

Escrow : Hold keys in trust

	IN ORDER TO MAKE RECOVERY WORK, WE CAN GIVE OUR KEYS
	TO A TRUSTED THIRD PARTY 

	"ESCROW" = trused third party

	Danger ==> they can abuse our keys!!!

	M of N control 

		N people eg 5 approved people	(size of total group)
		
		M people must be present eg 3 of 5 to unlock our keys		                                            M    N

```

Chapter 7 : Advanced attacks

Ping flood	Flooding a server with PING REQUESTS
ICMP flood
PING = ICMP

Smurf Attack	Malformed PING : DISGUISE SOURCE IP

TCP SYN Flood
TCP : Always send a '3-WAY HANDSHAKE' to set up
1) Hello : I'm going to send you data 2) Server : OK 3) Client : Done

```
SYN FLOOD : Send lots of 'hello' (stage 1) requests ONLY
	Server : reserve space for conversations which never happen

```

Flood guard : watches for and prevents flood attacks (DOS flood)

Port Scan	Scanning network for all OPEN PORTS (free online port scan)	*** NOTE : THIS IS SEEN AS AN ATTACK **

XMAS Attack	Port Scan ==> ALL OF THE POSSIBLE 'FLAGS' SET TO 'HIGH' (1)
TO PROVOKE A RESPONSE

MITM Man In The Middle

```
Client			Bad Router 		Server

		Can be used 
		1) Eavesdrop : LISTEN (Passive)
		2) Alter packets in some way
				(Active)

Prevent : HTTPS Scanning (part of UTM Threat Management)

```

Session Hijack

```
Client---------------Bad Router----------------Server

	Bad router can actually 'take over' session

		     Bad Router----------------Server

	Server THINKS STILL TALKING TO CLIENT BUT IS NOT: 
		BAD ROUTER IS IMPERSONATING AND HAS TAKEN
		OVER THE SESSION

```

Session Replay Attack

```
Valid session is copied and played back later

Client---------------Bad Router---------------Server

	later on Bad Router 'replay' same packets back to server
	to create a 'dummy' connection.

Mitigate using TIMESTAMPS

```

Password attack
Brute force	0000 through 9999 every combination in turn
STOP : using Account Lockout Policy
Dictionary attack	using obvious dictionary words

Birthday attack
TWO FILES CAN HAVE SAME HASH : USE THIS TO GET PAST OUR 'HASHING'	PROOF THAT A FILE HAS NOT CHANGED

Rainbow Table
Bad guys collect tables of hashes
Password	Hash
MyPass23	1234324hj5g324hj5g324g
MyPass24	asdf654asd7f54asd7f4as
MyPass25	1234324hj5g324hj5g324g

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

```
	Gooogle.com
	Amazone.com     MIS-SPELLING OF COMMON SITES : PEOPLE BUY
			DOMAIN NAME THEN SELL TO CORRECT OWNER FOR
			LOTS OF MONEY

```

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

```
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

```

Input Validation

```
Check for 'strange' characters like \\ / < > ' "   etc in fields

```

Buffer Overflow Attack

```
Buffer 
	Temporary data store to hold information when network
	is slow : waiting for data to either send or receive

	Buffer data is stored in RAM of COMPUTER!

	Buffer Overflow attack ==> PUSH GOOD DATA OUT OF BUFFER,
		POSSIBLY GET ACCESS TO AREAS OF RAM NEXT TO 
		THE BUFFER WHICH NORMALLY WE DON'T HAVE ACCESS TO

```

XSS Cross Site Scripting

```
Hack in to one website and from there, hack into another	

```

Folder Traversal Attack

```
Reach one folder : from there, navigate and reach another folder

```

XSRF Cross Site Request Forgery

```
Hack a website but ALREADY LOGGED IN ==> YOU HAVE MORE POWER
	TO DO MORE DAMAGE WHEN YOU HACK IN

```

Types of testing

```
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

```

Types of hacking

```
Black hat		BAD GUY

White hat		ETHICAL GOOD GUY

Grey hat		Dubious eg HACKTIVIST TO DISPLAY A LOGO

Blue hat		Hack you on request (not for money)	

```

Command Line

```
CD		Change directory	
CD..		go up one level
CD\\		go to ROOT LEVEL
DIR		list directories
				ls = LIST (LINUX SAME COMMAND)
MD		Make Directory/Folder
RD		Remove Directory

```

Failure and Recovery

```
MTBF		Mean Time Between Failures

		Light bulb : last 100,000 hours
		MTBF = 100,000 HOURS !!! RELIABLE!!!
		BIGGER VALUE IS BETTER
		((USE WITH HARD DRIVE))
			
			MTTF mean time TO FAIL  (once)

MTTR

		Mean Time To Repair

		Hard drive fails : RAID ==> fix immediately!

			replace drive .. done!!!  (RAID1, RAID5)

				: NO RAID!!!  BUILD SERVER FROM
					SCRATCH + RESTORE BACKUP
					+ RE-TEST ETC

				2 TO 3 DAYS!!!

```

Enemy techniques for scanning

```
Footprinting		LEGAL MEANS TO GET DATA ON PEOPLE AND 				COMPANIES.  WE ALL LEAVE A 'FOOTPRINT' ONLINE
			EG SOCIAL MEDIA, WEBSITES ETC

Fingerprinting		NON-LEGAL MEANS TO GET INFO EG HOSTS/NETWORK
			IPS OF COMPUTERS IN A COMPANY.  Scan network
			illegally to find out servers, printers,
			users etc  ==> getting ready to attack

Banner Grabbing		Sending requests to websites etc : OBSERVE
			HEADER INFORMATION COMING BACK ==> find 
			out eg server running Apache + version

			curl  ==> same as http:// 

APT Advanced Persistent Threat

	Persistent malware can be installed on a remote system
	and cause trouble over months or even years ==> Advanced
	Persistent Threat

Credentialed Scan ==> you are logged in when performing a scan

```

P363

BIA Business Impact Analysis

```
|			**            |                |
RPO		   DISASTER         RTO               MTD

RPO Recovery Point Objective		TIME WE LAST TOOK A BACKUP
RTO Recovery Time Objective		PLANNED TIME TO FIX
MTD Max Tolerable Downtime		Utter limit : if we don't
					make this we may have to 
					close as a business
	
Hot/Warm/Cold site

BCP Business Continuity Plan		Keep trading if disaster 
					hits

DRP Disaster Recovery Plan		Recover : steps : after
					a disaster

Succession Planning			replace key people when they
					leave

```

Failure
FailSafe	Power tool : won't work unless eg use
two hands

```
FailOpen		Power cut : electrical doors SWING OPEN!

FailShut		Safe : power cut : doors remain LOCKED
				(manual override from inside)

```

Fire
Class A	RED	Non-electrical	WATER

```
Class B		YELLOW	Oil/Liquid fire		FOAM : SNUFF OUT
						OXYGEN	

Class C		BLACK	Electrical 		CO2

Datacenter					Inert Gas eg Halogen

```

Shielding

```
Conduit					Channel for wires

PDC Protected Distribution Channel	METAL SHIELD FOR WIRING
					SO IT'S PROTECTED

	(( Faraday Cage))

TEMPEST BUILDING			Whole building is protected
					like Faraday cage

```

Backup
Incremental	FRESH BACKUP NIGHTLY

```
Differential		CUMULATIVE BACKUP NIGHTLY  
			M, M+T, M+T+W, M+T+W+TH	  ** QUICK TO RESTORE

			RESTORE 1) FULL BACKUP 2) DIFFERENTIAL

```

Encryption

Stream vs Block Cipher
Stream cipher = 1 bit at a time , fast
Block cipher = much stronger (in blocks)
but slower

Email Encryption : PGP	Pretty Good Privacy
S/MIME
** Exam : Both used EMAIL ENCRYPTION

Key Stretch	Short passwords : add to make them longer

XMAS DAY ATTACK : PORT SCAN ATTACK BUT ALL 'flags' set to '1' (high) to
provoke some sort of response

Lab Work

```
Create Server
Create Win7
Rename both
Server : DCPROMO : Create 'domain'  (company!)  phil.local

```

Random Terms

Filing System ==> format hard drive /usb
FAT = FAT16 (original)
FAT32 : USB stick : everyone uses this! (Limit of 32GB!) (one file, 4GB)
EX-FAT : 64bit FAT (Extended FAT)
FAT ==> NO SECURITY AT ALL, EVER!!!
NTFS
1) Permissions
2) Quotas ==> SET LIMITS PER USE
MMC = Microsoft Management Console : Install tools
MMC add 'snap-in'
MMC author mode (create)
MMC user mode (read only access)
Forest : Group of domains eg [MSN.com](http://msn.com/), [LIVE.com](http://live.com/), [MICROSOFT.com](http://microsoft.com/), [SKYPE.com](http://skype.com/)
FQDN : full name eg [myserver.mydomain.com](http://myserver.mydomain.com/) FULLY QUALIFIED DOMAIN NAME
RFC Request For Comments : Suggestions to improve the INTERNET!!!
RADIUS : PORT 1812
TACACS+ : PORT 49
VPN : 1) PPTP old (port 1723)
2) L2TP (xp, good 1701) =====> IPSEC
3) SSTP (https 443) =====> HTTPS
4) IKEV2 (best) 500,4500 =====> IPSEC

NAT	PRIVATE TO PUBLIC IP : GET ON INTERNET (NETWORK ADDRESS TRANSLATION)
NAC	BLOCK COMPUTER UNLESS 1) AV 2) FIREWALL 3) UPDATES
NETWORK ACCESS CONTROL
ACL Access Control List
1) WINDOWS : PERMISSIONS LIST EG FULL CONTROL/MODIFY
2) FIREWALL/ROUTER : IP BLOCK LIST : BLOCK / ALLOW IP TRAFFIC
ACL	ANY IP	10.11.12.13 53 PERMIT
LAST	ANY	ANY ALL DENY
QoS Quality Of Service ==> 802.1p ==> TAG EVERY PACKET WITH A PRIORITY
1-8 1=REAL TIME 8=LOWEST EG FILM DOWNLOAD

MDM	Mobile Device Management
MAM	Mobile App Management
BCP business continuity plan : what to do if business fails
CRL list of revoked certifs
Metric : stats, measurements