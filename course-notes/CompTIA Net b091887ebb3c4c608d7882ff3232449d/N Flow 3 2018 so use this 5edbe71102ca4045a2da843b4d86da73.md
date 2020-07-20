# N+ Flow 3 (2018 so use this!)

CompTIA N+ Notes
Phil Anderson
17-21 Sept 2018

Random Knowledge

TCP checking mechanism

1. Count OUT (Sequence number)
2. Acknowledgement : Arrived (ACK number)
a.	ACK message gets returned to SENDER : aware DATA HAS ARRIVED
3. SLOW!!! (better slow data than no data!)
IP Internet Protocol : 192.168.1.10
4. Address
5. Underlying mechanism for data to be sent
a.	From address
b.	To address
c.	Data
6. No checking!!!

UDP	used when fast connection with no checking!!!
TCP Transmission Control Protocol (layer 4)
UDP User Datagram Protocol (layer 4)
TCP/IP
Ipconfig : show IP address 10.0.0.25
VPN Virtual Private Network : Tunnel over internet : encrypted

1. PPTP 2) L2TP 3) SSTP 4) IKEv2
Router	: connects traffic across internet (‘hop’ from one device to next)
Home Router => ISP Router => Internet routers => Destination ISP => Destination final router
Switch : central point to connect all computers in your house/company
Hub : primitive device to connect early computers together. 10Mbps max. Problem  BROADCAST ALL DATA!
Bridge connect 2 different types of network (think WIFI bridge today). Ethernet to TokenRing (IBM)
Firewall : Block all UNWANTED TRAFFIC. Use both IP addresses to create ‘rules’, and PORT (channel)
ISP Internet Service Provider : physically lay line which connects you to NET
2. Fiber to street, final part will be Copper (COAX) into your house
3. Copper (older)
COAX : TV cable
Thicknet (original)
Thinnet (today)
LAN : Local Area Network : PC + WIFI + Switch + Servers
WAN : have one or more LANS connected together across internet : Wide Area Network
Trunk Port : enables STACKING OF SWITCHES together, maybe 10Gbps speed
Switch Port speed : …. Mbps (Mega (1000) bits per second)
Oldest speeds	10 Mbps
Progressed	100 Mbps
Now	1000 Mbps	(‘Gigabit’)
Bit 1/0, Kilo 1000, Mega Million, Giga Billion
Backbone (fastest part) 10Gbps 10,000,000,000 bits/sec
VLAN Virtual LAN : Group SWITCH PORTS TOGETHER to form a virtual group of computers which are securely hidden from other computers on that same switch
Port = channel to send data (there are 65536 (2^16) ports)
Port 80 = Web Traffic HTTP
Port 443 = Secure HTTPS web traffic
(HTTP = HyperText Transfer Protocol) S = secure or encrypted while going over internet
NIC Network Interface Card
Physical connector on computer where network wire plugs in
PCIe WIFI card : laptop equivalent

Topics Covered
Hardware eg Cabling and Devices
Protocols : carriers of data eg IP, VLAN, SMTP (email), RDP (remote desktop)
Security : Locking down network
Network ‘nasties’ : common viruses etc
Policy : good practice
Troubleshooting

Book : Mike Meyers : elaborates very fully

7 Layer Model Of Networking
1	Physical	raw electricity/light sent in/out computer; cabling, ports (physical)
2	Data Link	Switches live here : address each computer with MAC Address on LAN
3	Network	IP address + send data on INTERNET!!! Routers live here
4	Transport	TCP : guarantees data arrives (checking). OR UDP : no checking
5	Session	Stream or flow of traffic together. Think ‘Shopping cart session’
6	Presentation	Encryption + Compression of data. (M4A iTunes  MP3 compressed)
7	Application	eg Outlook, Skype etc : program asking to use network!!!

```
Please Do Not Throw Sausage Pizza Away

```

Switch – local (LAN)
Router – global (Internet, or WAN for large companies)

Physical Layer : Layer 1
Cabling
Copper
COAX
Thicknet : original : 500m long. 10Base5 and also called RG8
10=speed, 5=500m length
Thinnet : TV cable today.
10Base2	10=speed, 2=200m long (actually 185m)
RG58
Connector
BNC
Vampire Tap (old)
AUI (old)
F-connector (NOT! Fiber!!!)
Strengths
Outer shield
Stops ‘EMI’ Electro-Magnetic Interference
Inner thick wire : carry many signals eg 600 TV channels
Multi-plexing by a) Frequencies or b) Time slots
Twisted Pair Cabling
Standard Ethernet cable
UTP Unshielded
STP Shielded
Plenum : fire rated
Connector : RJ45 network
RJ11 telephone
Fiber Optic
Monomode : Single mode : Expensive as uses pure laser light
50km distance : across our country (WAN) eg SONET Synchronised Optical Network
Multimode : Cheap : Standard LED light
Distance 2km max
Use in MAN Metropolitan Area Network (city)
CAN Campus Area Network (university)
Connectors
ST Straight Tip
SC Subscriber Connector
LC Local Connector
FC Ferrule (iron, strong) connector : strongest
MT-RJ
WIFI
… later
CSMA/CA collision avoidance : can’t transmit unless get ‘token’ that everyone else is silent
Encoding
Preparing 1010101010 binary for sending to another machine
Manchester Encoding

Layer 2 : Data Link
Split into 2 layers	1) MAC
2.)	LLC logical link control layer
LAN local area network

```
PC-----------switch---------------------|---router====internet	
-------------------LAN--------------
MAC address for each computer
	Hardware, Physical address because BURNED INTO NETWORK CARD PERMANENTLY
	IPCONFIG /ALL  view MAC address
		38-2C-4A-B4-ED-89
		Split into TWO halves	38-2C-4A-		B4-ED-89
OUI (company)		unique for every computer

Summary : so far
	Physical : 101010  from machine  to network 
		Cabling, encoding
	Data Link : MAC Address
Continuing : Layer 2 : Data Link
	Unique address : MAC address / physical / hardware
	Ethernet : data carrier (protocol)
		Ethernet FRAME (packet)
		
	Preamble	Destination	Source		Data		CRC Error Check
			MAC		MAC	

			Preamble : synchronisation warning : data about to arrive
			CRC : Check no data lost
	Tagging (in middle)

```

1. VLAN	1-4000 VLANS
2. QoS Quality Of Service : Priority 0-7 : 7 highest, 0=lowest
(live phone : highest call priority)
Switch : central device
Switch enables HIGH SPEED : HOW?
Examine ETHERNET FRAME COMING IN
3. From MAC
4. To MAC
Construct table
Port	MAC
1	38-2C-4A-B4-ED-89
2	AA-BB-CC-…
3	AA-BB-CC..
Inside the switch the computers are connected with a VIRTUAL CIRCUIT!
Getting FULL SPEED eg 1GBPS

    ```
    	Care!!!  Exam contrast Switches vs Hubs
    			Switch : new : Layer 2 : Unicast 1-1 very fast circuits
    			Hub : old : LAYER 1 : everything is BROADCAST (super noisy)

    ```

Layer 3 : Network

IP Addresses

```
Binary
	Count in powers of 2

				8	4	2	1		Decimal	       Hex
				1	0	1	1		8+2+1=11
				0	0	0	0		0		0
				0	0	0	1		1		1
				0	0	1	0		2
				0	0	1	1		3
				0	1	0	0		4
				0	1	0	1		5		5

				1	0	0	0		8		8
				1	0	0	1		9		9
				1	0	1	0		10		A
				1	0	1	1		11		B
				1	1	0	0		12		C
				1	1	0	1		13		D
				1	1	1	0		14		E
				1	1	1	1		15		F

		MAC ADDRESS 	3		8		2		C
				         0 0 1 1		1 0 0 0 		0 0 1 0 		1 1 0 0 

Binary
	Upgrade from 4 columns to 8 columns

Decimal		128	64	32	16	8	4	2	1		
40			0	0	1	0	1	0	0	0	40-32=8					
75			0	1	0	0	1	0	1	1	75-64=11
101			0	1	1	0	0	1	0	1	101-64=37=32+5
175			1	0	1	0	1	1	1	1	175-128=47-32=15

```

IP Addresses
They are 32 binary 1/0 split into blocks of 4
192	168	1	1
11000000	1011000	00000001	00000001
Classes of IP
Public
Use on INTERNET!!!
Pay for them around $5 per month
((Running out of IPV4 addresses!!!)) ((2 to power 32 is only 4 billion))
CLASS A	First number in IP address 1-126
Loopback address (test your own IP is working)	PING 127.0.0.1
CLASS B 128-191
CLASS C	192-223
CLASS D	224-239 MULTICAST
CLASS E	240-255 MILITARY/GOV/RESEARCH
Multicast = sending data to a group of computers normally HUGE FILES LIKE PC IMAGE OR A VIDEO
Note : numbers are BINARY!
128	10000000
192	11000000

```
	128	64	32	16	8	4	2	1
	1	0	0	0	0	0	0	0		128
	1	1	0	0	0	0	0	0		192
	1	1	1	0	0	0	0	0		192+32=224 
IP Addresses : Private
	These are FREE
	4 ranges
		10.x.y.z					10.33.150.226
		172.16.x.y block up to 172.31.x.y

```

192.168.x.y
APIPA 169.254.x.y
DHCP not working
Dynamic Host Configuration Protocol
Note : BOOTP was primitive DHCP

Layer 3 Networking (continued)

```
IP Address 
	Public	Class A/B/C/D/E
	Private  10 range, 172.16 range, 192.168 range, APIPA 169.254 range
	
Subnetting
	1000 computers : group them !!!
	Subnet = SUB-NETWORK (small network)
	192.168…. range
	First network
		192.168.1.x     computers .   x is from 1 up to 254
	Second network
		192.168.2.x
	Third
		192.168.3.x

```

How do we CREATE SUBNETS?
Answer : IP Address + Subnet Mask : Combination dictates which network we are in
192	168	3	52	sample IP
255	255	255	0	mask
11111111	11111111	11111111	00000000	mask in binary
^^
Split point
|------------------network ID---------------------|---host ID ------|
Same for all computers Unique
192	168	3	anything	same group ie
Network
192	168	4	anything	different group

```
	Subnet mask allows creation of these groups.

	Network ID and Broadcast ID
		192.168.3.x	
		First computer	192.168.3.1
		Last		192.168.3.254
		Network ID	192.168.3.0		means ‘router : store just one address not over 200!
		Broadcast ID	192.168.3.255		Send message to ALL COMPUTERS ON THIS 

```

NETWORK 192.168.3.anything

Layer 4 : Transport

```
TCP : checks traffic arrives
	SEQ counts OUT
	ACK counts ARRIVED 
UDP : no checking : fast

```

Layer 5 : Session
Create a ‘flow’ of traffic eg send an email, browse a web site
Layer 6 : Presentation
Compress data
Encrypt data
Layer 7 : Application
Eg Skype, Outlook

Common Protocols
Protocol = language of communication
Port
HTTP sending web pages across internet	80
HTML = how to build a web page
HTTPS : encrypted	443

FTP	File Transfer Protocol	20,21
Old : send files

Telnet	Plain text commands across internet	23
Old : insecure : PLAIN TEXT!

SSH Secure Shell	22
Use today to remotely manage LINUX SERVER / IPHONE

Tuesday morning
Finish protocols then start the book
From yesterday
Port	Protocol
20/21	FTP	File transfer protocol [ftp://myserver.com/myfiles.txt](ftp://myserver.com/myfiles.txt)
Old and PLAIN TEXT so NOT SECURE!!!
Encrypted version SFTP and FTPS
22	SSH secure shell : encrypted TELNET
23	TELNET plain text : commands
80	HTTP	plain text NOT SECURE
443	HTTPS

EMAIL
25	SMTP	SEND	Simple Mail Transfer Protocol
110	POP	RECEIVE SIMPLE
143	IMAP	RECEIVE COMPLEX

REMOTE DESKTOP
3389	RDP	REMOTE DESKTOP PROTOCOL
(MSTSC Microsoft Terminal Services Client)

DNS
53	Domain Name System/Server
Ping [facebook.com](http://facebook.com/) (( DNS  GET IP ))
DNS is list of all names and IP addresses on INTERNET
PRIVATE DNS INSIDE COMPANY
PUBLIC DNS ON INTERNET Google 8.8.8.8 8.8.4.4
DHCP
67,68	Gives your computer an IP
Dynamic Host Configuration Protocol

VPN
Virtual Private Network
Permits safe passage of our data across bad internet using encryption ‘tunnel’
1	PPTP	Point to point tunnelling	old	port 1723
2	L2TP/IPSEC	Layer 2 tunneling	secure, WinXP	port 1701
3	SSTP	Secure sockets tunnelling secure over HTTPS	port 443
4	IKEV2	over IPSEC	port 500,4500

Note : Raw dial up using very old protocol ‘PPP Point to Point protocol’
Authentication
PAP	NEVER
CHAP	NEVER
MS-CHAP2	MINIMUM
EAP-TLS	YES GOOD AND STRONG
PEAP	PROTECTED EAP OK

VLAN
Virtual LAN
Switch
Company A	Company B
X x x x x x x x x x x x x xx x x x x x x x x x x x
1-20 VLAN01 21-48 VLAN02 WIFI

```
	PC01				PC16                 PUBLIC : no password (portal)
						         OR ENCRYPTED WIFI (WPA2)

	Network communication.
	Talk to a group of computers you must have 1) IP address which has the same NETWORK ID
		As other computers
			CompanyA   IP : 192.168.3.X       Mask 255.255.255.0

```

Practical example
Phil IP	10.0.0.25 255.0.0.0
Jordan IP	192.168.1.162 255.255.255.0	INCOMPATIBLE
Danny	10.0.0.58	255.0.0.0
Amu	10.0.120	255.0.0.0
Patience	10.0.0.207

```
Share
	\\\\Jack-PC\\Share  then put in Jack-PC\\Phil   with Pa$$w0rd

Hidden Share : can actually access C:\\ drive and HACK IN!!!
	\\\\Jack-PC\\C$\\
Note : Sharing is ENABLED USING SMB Server Message Block (445)
				      CIFS (newer name)
NETSTAT : show status of all connections

```

1. 445	shares
2. 50xxx	internet connections

-a active
-n by number

```
SHARES
	NET SHARE		VIEW SHARES
	NET SHARE    share2=c:\\share2     	CREATE SHARE

		cd.. 	up one 
		cd\\	to root
		dir	list folders/files
		md	make folder (directory)
		
	Hidden share     myhiddenshare$
		Net share myhiddenshare$ =c:\\myhiddenfolder
	
	\\\\jack-pc\\myhiddenshare$

Remote Desktop		log in to remote machine
Remote Assistance		control another machine with permission from other user

```

Network+

DMZ De-militarized Zone

```
Perimiter network : outside our LAN

	Use to host public facing web services eg website

```

Different addresses

```
MAC		AA-BB-CC-DD-EE-FF		48 bits long

IPV4		228.10.1.205			32 bits long	

IPV6						128 bits long

	GLOBAL (internet)	2001:...

	PRIVATE (LAN)		FE80:...	LINK LOCAL

	Note : use MAC address to MAKE part of IPV6 private address

		AA-BB-CC	FF-FE 		DD-EE-FF

```

TCP model has 4 layers

```
Physical
Data Link		Link

Network			Network

Transport		Transport

Session
Presentation
Application		Application

```

Topology

```
Topology = layout

Physical = actual wires you can touch
Logical  = schematic (think London Tube Map)

Bus : 1 wire : original

Ring : join ends of bus 

	IBM TOKEN RING		(IEEE 802.5)

		TOKEN PASSING : CSMA/CA COLLISION AVOIDANCE IE NO NOISE 
						ON NETWORK 

	TODAY USE FIBER RINGS

	
	Ring ==> put in box called 'MAU' : similar to switch today

		PHYSICAL STAR 
		LOGICAL RING 

Star

	Ethernet today!!!

	CSMA/CD   Collision Detection

		pc----------------pc--------*COLLISION*--------pc

		IF COLLISION : ECHO ==> WHOLE NETWORK : ALL PCs SHUT DOWN

			RANDOM TIMER ==> START AGAIN

	IEEE 802.3

Mesh : across whole country

```

Network Speeds

```
CAT3		10Mbps		original
CAT5		100Mbps		FAST ETHERNET
CAT5E		1000Mbps	
			--------------------->>HALF DUPLEX ABOVE
			--------------------->>FULL DUPLEX BELOW
CAT6		1000Mbps over 100m,   10Gbps over 55m
CAT6A		10Gbps
				

		Mb	Mega BITS	DATA TRANSFER

		MB	Mega BYTES	STORAGE

SIMPLEX			1-WAY
HALF DUPLEX		1 WAY AT A TIME
FULL DUPLEX		2 WAY AT A TIME

Ethernet : 100m distance
COAX       500m thicknet
	   185m thinnet

Repeater    |----------100m-----------|-----------------100m--------|
				     hub=
				    repeater

```

Old connectors

```
Serial		9 pin

	use Cisco routers today

Parallel	25 pin	printers

Centronics	36 pin printers

RS232	=  serial port	=	COM PORT

```

IEEE
IEEE 802.2	(data link)
802.3	Ethernet
802.5	(Token Ring)
802.11	WIFI

Networks And Security

```
A	Authentication : Log In
A	Authorisation : Permission after you log in eg user or admin?
A	Accounting : Auditing : Logging WHO DID WHAT, WHEN?

C	Confidentiality		
I	Integrity		
A	Availability		

Permissions
	After you log in

	FAT
		FAT=FAT16=ORIGINAL (DON'T USE)				
		FAT32 
		EX-FAT	64 BIT FAT   > 4GB FILES

		NO SECURITY!

	NTFS
		Windows full security

			ACL LIST OF USERS ON FILE/FOLDER

				FULL CONTROL	MODIFY PERMISSION
				MODIFY		CHANGE FILES/DELETE		
				WRITE		ADD NEW DATA

	SHARE
		FULL		
		CHANGE		
		READ		

	PRINT
		PRINT
		MANAGE DOCUMENTS  : print queue (waiting jobs)
		MANAGE PRINTERS

ADDING PERMISSIONS

	NTFS ONLY

		READ + FULL	==>  FULL 		CUMULATIVE (BEST)

	VIA SHARE 

		FULL (SHARE)
		READ (NTFS) 	==>   READ  		MOST RESTRICTIVE WINS

```

MALWARE

```
RISK

	THREAT			THING WHICH CAN DO DAMAGE TO OUR NETWORK
		THREAT ACTOR	PERSON/GROUP ATTACKING US
	VULNERABILITY		WEAK POINT EG MISCONFIGURED FIREWALL
	RISK			CHANCE % THAT A THREAT EXPLOIT (USE) 
				VULNERABILITY

```

MALWARE	Anything malicious : general catch-all term

VIRUS	requires a large file to attach to

```
		eg Word macro virus	

```

WORM	self-exist and self-propogate

TROJAN	innocent looking file like game, releases virus when run

COOKIE	text file for tracking your browsing

SPYWARE	tracking your browsing habits

ADWARE	adverts follow you; can depend on sites you visit etc

GREYWARE	annoying but not normally malicious

DOS MICROSOFT : command line

DOS : Denial Of Service

```
Flood server with so much traffic it can't cope

	PING flood

	TCP 'SYN' flood

	SMURF ATTACK (malformed PING faking sender IP)

```

DDOS

```
Distributed DOS attack from MANY COMPUTERS AT ONCE

```

Botnet	Infected Network

Zombie	Infected computer : virus not active yet

Logic Bomb	Trigger to activate dormant zombie virus

Bot	Robot, automated tool

Phishing	Bogus link in email

Spear Phishing	Targeted attack against an individual

Whaling	Target high value eg CEO

Pharming	Fake DNS records

```
	queries 	myserver.mysite.com  ==>  100.200.210.220 fake site
							in xxx land

```

Ransomware	Lock PC and encrypt files unless ransom fee paid

Crypto Attack	Involving crypto currency : electronic money for first time can
actually be stolen without trace

Revision
Virus	attached to larger file eg WORD
Worm	self exist/replicate
Trojan	looks like innocent file eg game
Bot	Robot
Botnet	(malicious) network
DOS	Denial Of Service : send lots of traffic (flood)
DDOS	Distributed DOS attack from many computers
Zombie	Dormant virus
Logic Bomb	Trigger to activate zombie to wake up and begin an attack

Continued

```
Social Engineering

	Human trickery eg phone call or email to deceive

Phishing	
	
Spoof		Faking items eg Spoof IP

Vishing		Attack over VOIP phones 

			(VOIP Voice Over IP : new phones using NETWORK 
				to talk, not REGULAR PHONE LINES)

Spam		email junk

Spim		junk over IM Instant Messaging

Keylogger	read your keystrokes 1) save to file 2) to internet
			keystroke = keys you type

		ASCII which maps letters to numbers

Watering hole	attack common sites (usually social media)

Tailgating	Follow through secure door

	Mantrap		Door which close behind you before open in front of
				you.

Shoulder surf	Watches you type password

Dumpster dive	Go through trash for confidential info

```

Advanced attacks

```
Man in middle	

	client--------------------bad router----------------------server

				eavesdrop = listen in

				+ can perhaps alter 
				packets in some way

Session Hijack

	client			bad router-------------------------server

				server thinks talking to client but
				NO!!!  talking just to bad router only

Replay attack

	client-----------------bad router--------------------------server

			bad router : copy traffic for later use.
			Later : resend sequence to deceive server

				Mitigate : stop by using TIMESTAMPS

```

Password attack

```
Brute force attack		0000 to 9999 : try all possible combinations

Dictionary attack		basing our hack using common dictionary 						words in order to crack someone's password

```

Code Injection attack

```
SQL injection		Form with name/password

XML
LDAP 

```

Other attacks

```
Zero Day

	New software : if hackers discover VULNERABILITY (weakness) they
		can use it to HACK PEOPLE

	ZERO DAYS = number of days GOOD GUYS KNOW ABOUT THIS HACK!!!

ARP

	Map and track which computer : IP === MAC  link

		arp -a

	ARP cache poison : fake some ARP entries

Deauthentication attack

	WIFI : kick people off existing WIFI so reconnect ( to your fake wifi)

Malicious Insider

```

Protecting Your System

```
Patching

	1. Windows  up to date
	2. Apps up to date
	3. Anti Virus up to date

Services

	Background programs

				((SERVICES.MSC))

		Automatic
			Delayed
		Manual
		Disabled

Encyrypt
	1. SSH
	2. HTTPS
	3. VPN (over internet)
	4. IPSEC 

Radio hacking

	WIFI etc uses RADIO signals

		Eavesdrop	listen
		Jamming		interfere with signal eg create noise
		EMI		Electro-magnetic interference
		RFI		Radio frequency interference
	
	Protect yourself

		PDC Protected Distribution Channel : Metal covering your wires
			
			FARADAY CAGE = 	metal outside, protect cables inside

		TEMPEST = whole building protected

Harden = make more secure eg Server
		
	uninstall services
	firewall ON

Users

	Least Privilege : only give permission MINIMUM REQUIRED

Edge attack

	Hackers trying to get in to your network

		1. Firewall

			BLOCK IP TRAFFIC, PORTS ALSO!!!		

			
		2. NIDS Network Intrusion Detection

			Detect hackers trying to break in !!  Alert !!!

			NIDS		D=DETECT
			NIPS		P=PREVENT ie Take Action!!! 
				on GATEWAY ROUTER/FIREWALL IE EDGE

			HIDS	H=HOST= ONE COMPUTER     D=DETECT
			HIPS				 P=PREVENT

		3. NAC Network Access Control

			Computer  (on site, via VPN)

				Starts up 

					Request to join network

				Check 'health'

					1. Updates - current?
					2. Firewall, correctly configured
					3. AV - up to date

				OK => Certificate of Health
				NOT OK ==> Quarantine + FIX automatically

		4. AV
			updates
			heuristic scan = real time scanning
				pattern matches

		5. Honeypot / Honeynet

			Fake lure to distract attackers

				1. Waste their time
				2. Info on attackers

```

Wireless

```
IEEE 802.11

Hardware

	PCIe   PCI express for wireless cards

	WAP wireless access point

	MIMO : many aerials to boost signal (8 max)

Wireless Modes

	AD-HOC

		Create 'hotspot' and connect 2 devices directly

		Peer-to-peer : every device on same priority

	Infrastructure

		Through WIFI point (normal)

		

Range for exam

	WIFI 		30m	100ft
	WIFI 'ac'	100m	300ft
	Bluetooth	10m	
	Infra Red	1m
	NFC eg card reader  5cm

	Ethernet	100m
	Coax  Thicknet  500m
	      Thinnet   185m

	Radio		miles

SSID

	WIFI point : SSID is 'name' of WIFI 

		eg Phils Cafe			Service Set ID

	BSSID : Base SSID : regular ONE WIFI POINT

	ESSID : Extended for a large company 'ROAMING'

WIFI channels

	13 channels : put your wifi on any channel

		Google wifi : auto-select best channel

		1, 6, 11 default

WIFI TYPES

	802.11		SPEED		FREQ GHz
			Mbps
	A		     (54)		(5)     IGNORE!	

	B		11		2.4

	G		54		2.4

	N		100+  		2.4 and 5     (MIMO = VARIABLE SPEED)

	AC		1000 max		5

	b,g,n  compatible on 2.4 Frequency   (GIGA = BILLION CYCLES/SEC)

WPS wifi protected setup

	One-button setup of WIFI for non-tech people

	Warn : 8 digit PIN internally which is easily hacked; so best to 
			turn OFF this feature

MAC address filtering

	!! lot of work !!!

	White list of allowed machines : manually type in all MAC address

WIFI Encryption

	Hotel/Macdonalds ==> straight to portal !!! care !!! NO ENCRYPTION !!!

		

	WEP	OLD, HACKED      Wired Equivalent Privacy

	WPA	Encrypted with TKIP 		WIFI protected access

	WPA2	Encrypted with AES   ** best **

				

		((Exam tip : 'bad boys' in exam
			HUB : BROADCAST
			PAP : PLAIN TEXT LOGIN
			WEP : HACKED WIFI       ))

		PERSONAL : REGULAR WIFI WITH ONE KEY/PASSWORD

			PSK pre shared key

		ENTERPRISE

			LINK WIFI TO YOUR WINDOWS LOGIN

WIFI ENTERPRISE

client----wifi--------NAC-------------RADIUS------>>>--------- Active
		     compliant?			user/pass	Directory
								Users
<<-----------802.1X-------------------->>
	authentication (without
	human intervention)		

		
Extra WIFI terms

	SOHO Small Office, Home Office ==> home or small business 1-10 users

	Site survey 

		WIFI correct   :   set power not too high/low

	Interference

		Microwave
		Fluorescent lights
	
	Antenna

		Omnidirectional
				Dipole : single stick

		Directional
				Yagi : TV 

```

Firewall

```
Device to block traffic

	Hardware device			(Network firewall at 'edge')
	Software running eg on Windows (Host based firewall)

Firewall blocks traffic

	1. By IP		1.2.3.4
	2. By Port		:5900
	3. By Protocol		TCP
	4. By Program		eg Skype

Firewall Types

	Layer 3

		Blocking by IP only

		'Stateless'

			No knowledge of FLOW OF TRAFFIC

		Crude, basic

	Layer 4
		
		TCP : counting SEQUENCE OUT, ACK PACKET ARRIVE

		STATEFUL FIREWALL

	Layer 7

		APPLICATION LAYER 
		DEEP PACKET INSPECTION

			analyses CONTENT OF YOUR PACKETS

		Slow!!!

	UTM : big picture : UNIFIED THREAT MANAGEMENT ==> ALL OF OUR 
			PROTECTION COMBINED

```

WAN traffic

```
LAN : local
WAN : dial up from local and connect to either INTERNET or our other
		LANs via VPN connection

Dial up

	Original!!!
	
	10101010101101010 	modem		phone line  (waves)
	digital on PC
	
		=========>digital      ====> analogue 

						
	56k		56 000 bits/sec
	92k max	

			BAUD RATE   

	POTS	PLAIN OLD TELEPHONE SERVICE
	PSTN	PUBLIC SWITCHED TEL NETWORK

Broadband

	ADSL

	Same physical phone line - nothing changes!!!

		But!!!

			Add in your home a SPLITTER

			1) Regular phone waves		0-4000 Hz
			2) High frequency digital waves 20000+ Hz

	ADSL  A = Asymmetric   8x faster download compared with upload

	SDSL  S = Symmetric    same up/down

	

SONET Synchronous Optical 

	1 line = 50Mbps
	12 lines = 600 Mbps

	Ring : across country

ATM Asynchronous Transfer Mode

	Fixed packets 53 bytes

ISDN

	Integrated Services Digital Network

	BT etc use internally
	Big companies : pay : LEASED LINE  (dedicated line you own)

	one line 	64k
	2 lines		128k		BASIC RATE (BRI)

	23 lines	1.5M		PRIMARY RATE (PRI)	BEARER CHANNEL
	   + 1 line						DELTA CHANNEL

	BRI	2 lines		128k	kbps kilo bits per second  1000 bits/s
	PRI	23 lines + 1	1.5M	Mbps mega  (million)
	T1			1.5M
	E1	31 lines + 1	2.0M
	DS3	480 lines	45M
	

Packet Switch vs Circuit Switch

	Circuit switch

		one wire ==> all electricity can only go down one wire
				(phone line)

			no choice!!!

		Circuit switched path ==> fixed path, signal has no choice				
		Virtual circuit eg during phone call : create it but then
			fix it for that call.  

			PVC permanent
			SCV switched temporary  (inside switch)

	Packet switch

		Each router is INDEPENDENT

			Each IP packet makes OWN WAY TO DESTINATION

		No fixed route!!!

	
Carrying data quickly inside eg BT

	Old	
		1) X25		BAD ANSWER LIKE HUB/WEP

		2) Frame Relay	

				UniqueID for routes   DLCI Data Link Connection
								ID

		3) MPLS  currently  Multi Protocol Layer Switch

		===> THESE GIVE CIR Commited Info Rate ie guaranteed speed

```

Chapter 1

```
Encapsulation

	Layer 4

		...Layer 3

			Layer 2 ...

				Layer 1 ... ==> send

```

Chapter 3

```
Cabling

	Straight through = patch cable = network = RJ45 = CAT5e/CAT6
				regular

	
	Crossover

		flip signal in middle : connect TWO SIMILAR DEVICES
			PC--PC     SWITCH--SWITCH

	Rollover

		Manage CISCO switch (when offline)

	TX transmit
	RX receive

		Transceiver : Transmit + Receive

STP Spanning Tree Protocol

		Switch
		==============================pc
		|		|
		|		|
		|		|
		================X============pc
		Switch

	Auto-detect loops and auto-shut down ports

		also called BPDU 

```

Cabling

```
10Base5		COAX
10Base2		COAX

10BaseT		Twisted Pair = Ethernet  ==> MAX = 100M distance
100BaseT
1000BaseT/TX
	
	10/100/1000 is speed  Mbps

Fiber : any other letter  S, R , L, F  or combinations

```

Latest Cabling

```
10Gbps E  = Ethernet

Backbone = fastest part 

	eg Internet

```

Wiring A Building

```
	MDF Main distribution frame : central point of wiring

		Vertical cross-connect
		Horizontal 

	ISP eg BT-------------------------|-------------your computers

					DEMARC

			DCE			DTE
			data
		   comms/communication			termination ie end
			equipment			 of line
			

	
Switch cabinet

	PC---wall--------     server cabinet
			|
			------patch panel				
				   |
				switch

				router--------->internet

	raw cabling hard wired into back of PATCH PANEL

		Punchdown block 	110 = 8 wires,   66 = 4 wires (phone)
		
			punchdown tool

Cable Testing

	Tester : 8 wires OK

	
	Tone generator

		Plug in good end and device will make a noise when
			it approaches the other end 

	TDR checks for kinks in wire

Cabling terms

	Cross talk is from one wire to next

		------------wireA--------------

			magnetic field

		-----------wireB--------------

	Attenuation

		long cable, signal get less over distance

	SNR signal to noise ratio

Network card troubleshooting

	Network card has 2 lights

		ON  green

		DATA BEING SENT    flicker orange  

Rack equipment

	height 1U = 1.75 Inches

```

Chapter 6 : CIDR

```
Subnet mask 255.255.255.0

	    11111111   11111111   11111111   00000000

	    /24

IP  192.168.10.20/24   - CIDR notation

```

Routing

```
Routing is process of collecting efficient routes around internet

	Router will
		1) Get best routes
		2) Send data on best routes

	Gathering best route information !!!

	RIP  routing internet protocol (v2)		ORIGINAL WITH INTERNET

		collect routes
		count 'hops' as distance

		use minimum 'hops' for any given route

		WINDOWS ==> ROUTE PRINT  

		BAD PROBLEM : RIP Broadcast full data stored every 30 seconds 				even if no change!

	EIGRP   Cisco

		Cisco 'fixed' RIP with EIGRP

		Hops still used
		No broadcast 
		Unicast  (1-1)  only if change detected

	
	Note : RIP/EIGRP are based on HOPS ==> DISTANCE VECTOR 

	OSPF Open Shortest Path First

		Global networks

		Split world into 'areas'  

			Australia => Canberra => Neighbourhood => Street				
		Every company gets unique ID so send data to that ID
			then internally route by sub-area ((ASN))

		
	BGP Border Gateway Protocol : helps form backbone of internet

```

NAT Network Address Translation

```
NAT swaps PRIVATE IP (of PC) for PUBLIC IP (of router) and adds in a PORT
		NUMBER so we know which PC receives the data when the 
		reply comes back

	NAT =>  strictly speaking it's ONE PC ON INSIDE MATCHES ONE
			PUBLIC IP ON OUTSIDE

	PAT ==> 1000 computers on INSIDE for ONE PUBLIC IP

```

Port Forwarding

```
Incoming traffic from OUTSIDE gets directed to right machine on INSIDE 
	by looking at the incoming PORT NUMBER

```

Port Triggering

```
XBOX games need special online port.   From INSIDE we can push data out
	over special port, and keep that port OPEN FOR REPLIES

```

Proxy

```
All web traffic forwarded through one machine which allows

	Monitoring
	White list / Black list
	Antivirus
	££ billing purposes

	Caching content : second visit to same page ==> faster
		because content already stored

```

SNMP Simple Network Management Protocol

```
50 routers around the world - are they all OK?

	1. Heartbeat : 30 seconds : I am alive 

	2. Data Stats eg throughput, uptime 

Plain text

	SNMPv3 is encrypted

```

Network mapping

```
ZENMAP (KALI linux)

```

IPAM IP Address Management

Protocols

```
TCP	check all packets    SEQ, ACK
UDP	fast as no checking!!!
	
NTP	Network Time Protocol 
	Port 123

TFTP	Trivial FTP

	Send files on LAN without security to eg a CISCO SWITCH

	Port 69

ICMP

	PING protocol
	and
	Error message protocol for internet

		200 OK
		404 Unreachable 

NETBIOS very old networking with HOST NAME ONLY

		PC01
		PC02
		SERVER22

PUTTY : Windows client for SSH to a LINUX server

```

DNS

```
Map NAME to IP

Early internet NO DNS!!

	Manually with a FILE!!!

		HOSTS!!!
		LMHOSTS!!!

Internet : 

		 	ROOT		'.'
				
			FIRST LEVEL	.COM  .EU   .ORG

			SECOND 		MICROSOFT.COM   INTEL.COM

			SUBDOMAIN       EUROPE.INTEL.COM	
			
	
Record Types

	A	address
	AAAA	IPV6 address
	MX	email
	CNAME	web (canonical, false, alias name)

	NS	Any DNS server (name server)
	SOA	Boss Server (Start Of Authority)

	PTR	pointer
	
	SPF	Sender Policy Framework : Spam filtering (check valid domain
			 for this IP)
	SRV	Service record 

Shares
	SMB : windows shares (Server Message Block)
	CIFS : upgrade to SMB

FQDN fully qualified domain name

	mymachine.mydomain.com

```

Encryption

```
Hashing

	MD5
	SHA1

		data ==>  SDF87ASDF867ASD86AS8D7F6AS8D7F6

					hash

	sha1-online.com

		phil		d14ffd41334ec4b4b3f2c0d55c38be6f           md5

		phil	e888d2bd6f13f82caa51a37c03d034c76f661ba3   sha1

		phil<space>  	fdcffb2dda54dff940c0a541f1cee85c	

		phil.		dcd4936713c27cae72c65e90c1e60a66

		phil		d14ffd41334ec4b4b3f2c0d55c38be6f		

	Data integrity = PROVE FILE HAS NOT CHANGED

Symmetric

	One key (eg WIFI) to ENCRYPT and DECRYPT  

	Fast but quite weak

	RC4, AES		(old DES, 3DES, blue/two fish)

Asymmetric

	Two keys to lock/unlock data

		PRIVATE 
		PUBLIC

	Slow, but very secure

Non-repudiation

	REPUDIATE : deny something happened

	Prove 100% that something happened; CANNOT DENY IT

	Use SIGNATURES TO DO THIS

		SIGNATURE is ENCRYPTED HASH!!!!

			LOCK WITH PRIVATE KEY

			ANYONE CAN CHECK/UNLOCK USING OUR PUBLIC KEY
				(Drivers use this)

Certificate : digital holder for A PUBLIC KEY; can send to anyone

PKI : public key infrastructure : COMANY THAT USES CERTIFICATES

```

Remote working

```
client-------dial in to VPN server-------RADIUS-----------------Active
								Directory

				RADIUS checks your user/password is OK

				DIAMETER	better

				TACACS+  	best

```

Domain working (inside company)

```
On premises, you log in to your computer

	computer------------------------------------Active Directory

	      ((Kerberos protocol is security protocol))
			for whole domain
```

Active Directory

```
Forest		Group of domain eg MSN.com, hotmail.com, outlook.com, 
			Skype.com, LinkedIn.com
Domain		One company managed by DOMAIN CONTROLLER machine which
			is running ACTIVE DIRECTORY eg Microsoft.com
OU		Folder in Active Directory : Container for objects
Site		Location ie Physical place eg Birmingham
NETBIOS		Old NAME of COMPUTER eg HOSTNAME

```

Command Line tools

```
PING
PATHPING
TRACERT

NSLOOKUP	DNS information

```

Random Terms
Port	channel 1-65535 (sending data on Internet)
Port	Plug in cable	RJ45 network	RJ11 telephone plug
WORKGROUP	Random windows computers : each one has PRIVATE SECURITY
WORKGROUP	default home network : all computers just share resources eg internet
PEER TO PEER	Every 'client' machine is same on shared network : no one machine
in charge
DOMAIN	Central server in charge of network
DC DOMAIN CONTROLLER
ACTIVE DIRECTORY : create users/groups/permissions/printers/share
[mycompany.com](http://mycompany.com/)
CLIENT/SERVER NETWORK eg online banking : you are client; connect to banking server
for a 'session'
Node = any device on network

Tuesday Morning : Random Revision On Monday
1	OSI 7 layer model
2	PDNTSPA
3	Physical
4	Data Link
5	Network
6	Transport
7	Session
8	Presentation
9	Application
10	Cabling
11	COAX
12	Fiber
13	Connectors
14	BNC
15	F-connector
16	Vampire Tap
17	Thicknet Older 10Base5 10 speed 500m distance
18	Thinnet New TV 10Base2 10 speed over 200m (185m)
19	RJ11 phone
20	RJ45 network
21	Binary
22	8 columns 128 64 32 16 8 4 2 1
23	Binary 0 1 1 1 = decimal 7
24	1000 8
25	1010 in decimal 10 and hex a
26	10000 16
27	100000 32
28	1000000 64
29	10000000 128
30	1100 0000 = 128+64 = 192
31	1110 0000 + 32 = 224
32	1111 0000 + 16 = 240
33	1111 1111 255
34	10000000 128
35	011111111 127
36	CLASS A 1- 126
37	LOOPBACK RESERVED PING 127.0.0.1
38	CLASS B 128 - 191
39	CLASS C 192 - 223
40	CLASS D 224 -239
41	CLASS E 240-255
42	Subnetting
43	255.255.255.0 is a SUBNET MASK splits IP into 2 parts
44	192.168.10. x
45	--------- left part is the NETWORK ID (192.168.10.0)
46 X called HOST ID (1-254)
47 .255 is BROADCAST ID
48	Example
49	192.168.15.55 with mask 255.255.255.0
50	Write down Network ID, Host ID, Broadcast ID
a.	192.168.15.0
b. 55
c.	192.168.15.255
51	Same with mask 255.255.0.0
a.	Network ID 192.168.0.0
b.	Host ID 192.168.15.55
c.	Broadcast 192.168.255.255
52	All network broadcast 255.255.255.255 to EVERY REACHABLE NETWORK
53	MAC address 48 bits long aa-bb-cc-dd-ee-ff
54	MAC Apple : computer
55	MAC Address : on every NETWORK CARD : burned into card.
56	4 ways to identify/name computer
a.	MAC address
b.	IP address
c.	HOSTNAME eg MYPC2
d.	COMPANY DOMAIN NAME [MYPC2.mycompany.com](http://mypc2.mycompany.com/)

Wednesday Morning : Critical Revision
1	Ports
2	20/21
3	80
4	443
5	23
6	22
7	FTP
8	SSH
9	HTTP
10	HTTPS
11	DMZ
12	SMTP
13	IMAP
14	POP
15	TELNET
16	DHCP
17	DNS
18	VPN
19	RDP REMOTE DESKTOP
20	LEARNING STRATEGY!
21	20/21	FTP	DOWNLOAD FILES (20 DATA, 21 ADMIN)
22	22	SSH	SECURE SHELL : TELNET + ENCRYPTION
23	23	TELNET	COMMANDS : INSECURE (PLAIN TEXT)
24	WEB
25	80	HTTP	WEB PAGES
26	443	HTTPS	ENCRYPTED WEB
a.	SSL (older)	Secure Sockets Layer
b.	TLS (upgrade to SSL)	Transport Layer Security
27	EMAIL
28	25	SMTP	SEND EMAIL OUT : SIMPLE MAIL TRANSFER PROTOCOL
29	110	POP	RECEIVE SIMPLE
30	143	IMAP	RECEIVE COMPLEX
31	OTHER
32	53	DNS
33	67	DHCP
34	FTP CAN BE ENCRYPTED
35	SFTP ENCRYPTED WITH SSH PORT 22
36	FTPS ENCRYPTED WITH SSL PORT 443
37	DMZ : DE-MILITARIZED ZONE :
38	ROUTER : TWO IP ADDRESSES
a.	DEFAULT GATEWAY (INSIDE IE FACING LAN)
b.	PUBLIC IP (FACING INTERNET)
39	IPCONFIG  IP + SUBNET MASK + DEFAULT GATEWAY
a.	IP	INTERNET PROTOCOL : ADDRESS 1.2.3.4 OF COMPUTER
b.	MASK	SPLITS IP INTO 2 PARTS : NETWORK PART & HOST ID (UNIQUE)

1. 255.255.255.0 MEANS FIRST 3 PARTS OF ADDRESS ARE FIXED
2. 192.168.10.50, .51, .52….

c.	GATEWAY	192.168.10.1 OR 192.168.10.254 FOR EXAMPLE
40	MAC ADDRESS : FIXED
41	IP ADDRESS : CHANGE
42	INSIDE OUR COMPANY/HOME WE CAN USE SPECIFIC RANGES FOR FREE!!!!
43	PRIVATE IP ADDRESS RANGES (ROUTERS WILL NOT LET THIS TRAFFIC REACH INTERNET)
a.	10.X.Y.Z 255.0.0.0 HUGE NETWORKS (255X255X255 COMPUTERS)
b.	172.16.X.Y UP TO 172.31.X.Y BLOCK 255.255.0.0 (255X255 COMPUTERS)
c.	192.168.1.Y MASK 255.255.255.0 MOST COMMON ON PLANET BECAUSE GOOD NUMBER FOR MOST NETWORKS IE 254 COMPUTERS ON ONE NETWORK
44	APIPA : 169.254.X.Y : USED WHEN …. BROKEN
45	DHCP : ISSUE IP ADDRESS TO YOUR COMPUTER
46	DHCP LEASE : 8 DAYS
47	WIRESHARK : FILTER udp.port==68
48	IPCONFIG /RELEASE => GET RID OF MY IP
49	IPCONFIG /RENEW  ASK FOR A NEW IP

Network+

DMZ De-militarized Zone

```
Perimiter network : outside our LAN

	Use to host public facing web services eg website

```

Different addresses

```
MAC		AA-BB-CC-DD-EE-FF		48 bits long

IPV4		228.10.1.205			32 bits long	

IPV6						128 bits long

	GLOBAL (internet)	2001:...

	PRIVATE (LAN)		FE80:...	LINK LOCAL

	Note : use MAC address to MAKE part of IPV6 private address

		AA-BB-CC	FF-FE 		DD-EE-FF

```

TCP model has 4 layers

```
Physical
Data Link		Link

Network			Network

Transport		Transport

Session
Presentation
Application		Application

```

Topology

```
Topology = layout

Physical = actual wires you can touch
Logical  = schematic (think London Tube Map)

Bus : 1 wire : original

Ring : join ends of bus 

	IBM TOKEN RING		(IEEE 802.5)

		TOKEN PASSING : CSMA/CA COLLISION AVOIDANCE IE NO NOISE 
						ON NETWORK 

	TODAY USE FIBER RINGS

	
	Ring ==> put in box called 'MAU' : similar to switch today

		PHYSICAL STAR 
		LOGICAL RING 

Star

	Ethernet today!!!

	CSMA/CD   Collision Detection

		pc----------------pc--------*COLLISION*--------pc

		IF COLLISION : ECHO ==> WHOLE NETWORK : ALL PCs SHUT DOWN

			RANDOM TIMER ==> START AGAIN

	IEEE 802.3

Mesh : across whole country

```

Network Speeds

```
CAT3		10Mbps		original
CAT5		100Mbps		FAST ETHERNET
CAT5E		1000Mbps	
			--------------------->>HALF DUPLEX ABOVE
			--------------------->>FULL DUPLEX BELOW
CAT6		1000Mbps over 100m,   10Gbps over 55m
CAT6A		10Gbps
				

		Mb	Mega BITS	DATA TRANSFER

		MB	Mega BYTES	STORAGE

SIMPLEX			1-WAY
HALF DUPLEX		1 WAY AT A TIME
FULL DUPLEX		2 WAY AT A TIME

Ethernet : 100m distance
COAX       500m thicknet
	   185m thinnet

Repeater    |----------100m-----------|-----------------100m--------|
				     hub=
				    repeater

```

Old connectors

```
Serial		9 pin

	use Cisco routers today

Parallel	25 pin	printers

Centronics	36 pin printers

RS232	=  serial port	=	COM PORT

```

IEEE
IEEE 802.2	(data link)
802.3	Ethernet
802.5	(Token Ring)
802.11	WIFI

Networks And Security

```
A	Authentication : Log In
A	Authorisation : Permission after you log in eg user or admin?
A	Accounting : Auditing : Logging WHO DID WHAT, WHEN?

C	Confidentiality		
I	Integrity		
A	Availability		

Permissions
	After you log in

	FAT
		FAT=FAT16=ORIGINAL (DON'T USE)				
		FAT32 
		EX-FAT	64 BIT FAT   > 4GB FILES

		NO SECURITY!

	NTFS
		Windows full security

			ACL LIST OF USERS ON FILE/FOLDER

				FULL CONTROL	MODIFY PERMISSION
				MODIFY		CHANGE FILES/DELETE		
				WRITE		ADD NEW DATA

	SHARE
		FULL		
		CHANGE		
		READ		

	PRINT
		PRINT
		MANAGE DOCUMENTS  : print queue (waiting jobs)
		MANAGE PRINTERS

ADDING PERMISSIONS

	NTFS ONLY

		READ + FULL	==>  FULL 		CUMULATIVE (BEST)

	VIA SHARE 

		FULL (SHARE)
		READ (NTFS) 	==>   READ  		MOST RESTRICTIVE WINS

```

MALWARE

```
RISK

	THREAT			THING WHICH CAN DO DAMAGE TO OUR NETWORK
		THREAT ACTOR	PERSON/GROUP ATTACKING US
	VULNERABILITY		WEAK POINT EG MISCONFIGURED FIREWALL
	RISK			CHANCE % THAT A THREAT EXPLOIT (USE) 
				VULNERABILITY

```

MALWARE	Anything malicious : general catch-all term

VIRUS	requires a large file to attach to

```
		eg Word macro virus	

```

WORM	self-exist and self-propogate

TROJAN	innocent looking file like game, releases virus when run

COOKIE	text file for tracking your browsing

SPYWARE	tracking your browsing habits

ADWARE	adverts follow you; can depend on sites you visit etc

GREYWARE	annoying but not normally malicious

DOS MICROSOFT : command line

DOS : Denial Of Service

```
Flood server with so much traffic it can't cope

	PING flood

	TCP 'SYN' flood

	SMURF ATTACK (malformed PING faking sender IP)

```

DDOS

```
Distributed DOS attack from MANY COMPUTERS AT ONCE

```

Botnet	Infected Network

Zombie	Infected computer : virus not active yet

Logic Bomb	Trigger to activate dormant zombie virus

Bot	Robot, automated tool

Phishing	Bogus link in email

Spear Phishing	Targeted attack against an individual

Whaling	Target high value eg CEO

Pharming	Fake DNS records

```
	queries 	myserver.mysite.com  ==>  100.200.210.220 fake site
							in xxx land

```

Ransomware	Lock PC and encrypt files unless ransom fee paid

Crypto Attack	Involving crypto currency : electronic money for first time can
actually be stolen without trace

Revision
Virus	attached to larger file eg WORD
Worm	self exist/replicate
Trojan	looks like innocent file eg game
Bot	Robot
Botnet	(malicious) network
DOS	Denial Of Service : send lots of traffic (flood)
DDOS	Distributed DOS attack from many computers
Zombie	Dormant virus
Logic Bomb	Trigger to activate zombie to wake up and begin an attack

Continued

```
Social Engineering

	Human trickery eg phone call or email to deceive

Phishing	
	
Spoof		Faking items eg Spoof IP

Vishing		Attack over VOIP phones 

			(VOIP Voice Over IP : new phones using NETWORK 
				to talk, not REGULAR PHONE LINES)

Spam		email junk

Spim		junk over IM Instant Messaging

Keylogger	read your keystrokes 1) save to file 2) to internet
			keystroke = keys you type

		ASCII which maps letters to numbers

Watering hole	attack common sites (usually social media)

Tailgating	Follow through secure door

	Mantrap		Door which close behind you before open in front of
				you.

Shoulder surf	Watches you type password

Dumpster dive	Go through trash for confidential info

```

Advanced attacks

```
Man in middle	

	client--------------------bad router----------------------server

				eavesdrop = listen in

				+ can perhaps alter 
				packets in some way

Session Hijack

	client			bad router-------------------------server

				server thinks talking to client but
				NO!!!  talking just to bad router only

Replay attack

	client-----------------bad router--------------------------server

			bad router : copy traffic for later use.
			Later : resend sequence to deceive server

				Mitigate : stop by using TIMESTAMPS

```

Password attack

```
Brute force attack		0000 to 9999 : try all possible combinations

Dictionary attack		basing our hack using common dictionary 						words in order to crack someone's password

```

Code Injection attack

```
SQL injection		Form with name/password

XML
LDAP 

```

Other attacks

```
Zero Day

	New software : if hackers discover VULNERABILITY (weakness) they
		can use it to HACK PEOPLE

	ZERO DAYS = number of days GOOD GUYS KNOW ABOUT THIS HACK!!!

ARP

	Map and track which computer : IP === MAC  link

		arp -a

	ARP cache poison : fake some ARP entries

Deauthentication attack

	WIFI : kick people off existing WIFI so reconnect ( to your fake wifi)

Malicious Insider

```

Protecting Your System

```
Patching

	1. Windows  up to date
	2. Apps up to date
	3. Anti Virus up to date

Services

	Background programs

				((SERVICES.MSC))

		Automatic
			Delayed
		Manual
		Disabled

Encyrypt
	1. SSH
	2. HTTPS
	3. VPN (over internet)
	4. IPSEC 

Radio hacking

	WIFI etc uses RADIO signals

		Eavesdrop	listen
		Jamming		interfere with signal eg create noise
		EMI		Electro-magnetic interference
		RFI		Radio frequency interference
	
	Protect yourself

		PDC Protected Distribution Channel : Metal covering your wires
			
			FARADAY CAGE = 	metal outside, protect cables inside

		TEMPEST = whole building protected

Harden = make more secure eg Server
		
	uninstall services
	firewall ON

Users

	Least Privilege : only give permission MINIMUM REQUIRED

Edge attack

	Hackers trying to get in to your network

		1. Firewall

			BLOCK IP TRAFFIC, PORTS ALSO!!!		

			
		2. NIDS Network Intrusion Detection

			Detect hackers trying to break in !!  Alert !!!

			NIDS		D=DETECT
			NIPS		P=PREVENT ie Take Action!!! 
				on GATEWAY ROUTER/FIREWALL IE EDGE

			HIDS	H=HOST= ONE COMPUTER     D=DETECT
			HIPS				 P=PREVENT

		3. NAC Network Access Control

			Computer  (on site, via VPN)

				Starts up 

					Request to join network

				Check 'health'

					1. Updates - current?
					2. Firewall, correctly configured
					3. AV - up to date

				OK => Certificate of Health
				NOT OK ==> Quarantine + FIX automatically

		4. AV
			updates
			heuristic scan = real time scanning
				pattern matches

		5. Honeypot / Honeynet

			Fake lure to distract attackers

				1. Waste their time
				2. Info on attackers

```

Wireless

```
IEEE 802.11

Hardware

	PCIe   PCI express for wireless cards

	WAP wireless access point

	MIMO : many aerials to boost signal (8 max)

Wireless Modes

	AD-HOC

		Create 'hotspot' and connect 2 devices directly

		Peer-to-peer : every device on same priority

	Infrastructure

		Through WIFI point (normal)

		

Range for exam

	WIFI 		30m	100ft
	WIFI 'ac'	100m	300ft
	Bluetooth	10m	
	Infra Red	1m
	NFC eg card reader  5cm

	Ethernet	100m
	Coax  Thicknet  500m
	      Thinnet   185m

	Radio		miles

SSID

	WIFI point : SSID is 'name' of WIFI 

		eg Phils Cafe			Service Set ID

	BSSID : Base SSID : regular ONE WIFI POINT

	ESSID : Extended for a large company 'ROAMING'

WIFI channels

	13 channels : put your wifi on any channel

		Google wifi : auto-select best channel

		1, 6, 11 default

WIFI TYPES

	802.11		SPEED		FREQ GHz
			Mbps
	A		     (54)		(5)     IGNORE!	

	B		11		2.4

	G		54		2.4

	N		100+  		2.4 and 5     (MIMO = VARIABLE SPEED)

	AC		1000 max		5

	b,g,n  compatible on 2.4 Frequency   (GIGA = BILLION CYCLES/SEC)

WPS wifi protected setup

	One-button setup of WIFI for non-tech people

	Warn : 8 digit PIN internally which is easily hacked; so best to 
			turn OFF this feature

MAC address filtering

	!! lot of work !!!

	White list of allowed machines : manually type in all MAC address

WIFI Encryption

	Hotel/Macdonalds ==> straight to portal !!! care !!! NO ENCRYPTION !!!

		

	WEP	OLD, HACKED      Wired Equivalent Privacy

	WPA	Encrypted with TKIP 		WIFI protected access

	WPA2	Encrypted with AES   ** best **

				

		((Exam tip : 'bad boys' in exam
			HUB : BROADCAST
			PAP : PLAIN TEXT LOGIN
			WEP : HACKED WIFI       ))

		PERSONAL : REGULAR WIFI WITH ONE KEY/PASSWORD

			PSK pre shared key

		ENTERPRISE

			LINK WIFI TO YOUR WINDOWS LOGIN

WIFI ENTERPRISE

client----wifi--------NAC-------------RADIUS------>>>--------- Active
		     compliant?			user/pass	Directory
								Users
<<-----------802.1X-------------------->>
	authentication (without
	human intervention)		

		
Extra WIFI terms

	SOHO Small Office, Home Office ==> home or small business 1-10 users

	Site survey 

		WIFI correct   :   set power not too high/low

	Interference

		Microwave
		Fluorescent lights
	
	Antenna

		Omnidirectional
				Dipole : single stick

		Directional
				Yagi : TV 

```

NAT Network Address Translation

```
NAT swaps PRIVATE IP (of PC) for PUBLIC IP (of router) and adds in a PORT
		NUMBER so we know which PC receives the data when the 
		reply comes back

	NAT =>  strictly speaking it's ONE PC ON INSIDE MATCHES ONE
			PUBLIC IP ON OUTSIDE

	PAT ==> 1000 computers on INSIDE for ONE PUBLIC IP

```

Port Forwarding

```
Incoming traffic from OUTSIDE gets directed to right machine on INSIDE 
	by looking at the incoming PORT NUMBER

```

Port Triggering

```
XBOX games need special online port.   From INSIDE we can push data out
	over special port, and keep that port OPEN FOR REPLIES

```

Proxy

```
All web traffic forwarded through one machine which allows

	Monitoring
	White list / Black list
	Antivirus
	££ billing purposes

	Caching content : second visit to same page ==> faster
		because content already stored

```

SNMP Simple Network Management Protocol

```
50 routers around the world - are they all OK?

	1. Heartbeat : 30 seconds : I am alive 

	2. Data Stats eg throughput, uptime 

Plain text

	SNMPv3 is encrypted

```

Network mapping

```
ZENMAP (KALI linux)

```

IPAM IP Address Management

Protocols

```
TCP	check all packets    SEQ, ACK
UDP	fast as no checking!!!
	
NTP	Network Time Protocol 
	Port 123

TFTP	Trivial FTP

	Send files on LAN without security to eg a CISCO SWITCH

	Port 69

ICMP

	PING protocol
	and
	Error message protocol for internet

		200 OK
		404 Unreachable 

NETBIOS very old networking with HOST NAME ONLY

		PC01
		PC02
		SERVER22

PUTTY : Windows client for SSH to a LINUX server

```

DNS

```
Map NAME to IP

Early internet NO DNS!!

	Manually with a FILE!!!

		HOSTS!!!
		LMHOSTS!!!

Internet : 

		 	ROOT		'.'
				
			FIRST LEVEL	.COM  .EU   .ORG

			SECOND 		MICROSOFT.COM   INTEL.COM

			SUBDOMAIN       EUROPE.INTEL.COM	
			
	
Record Types

	A	address
	AAAA	IPV6 address
	MX	email
	CNAME	web (canonical, false, alias name)

	NS	Any DNS server (name server)
	SOA	Boss Server (Start Of Authority)

	PTR	pointer
	
	SPF	Sender Policy Framework : Spam filtering (check valid domain
			 for this IP)
	SRV	Service record 

Shares
	SMB : windows shares (Server Message Block)
	CIFS : upgrade to SMB

FQDN fully qualified domain name

	mymachine.mydomain.com

```

Encryption

```
Hashing

	MD5
	SHA1

		data ==>  SDF87ASDF867ASD86AS8D7F6AS8D7F6

					hash

	sha1-online.com

		phil		d14ffd41334ec4b4b3f2c0d55c38be6f           md5

		phil	e888d2bd6f13f82caa51a37c03d034c76f661ba3   sha1

		phil<space>  	fdcffb2dda54dff940c0a541f1cee85c	

		phil.		dcd4936713c27cae72c65e90c1e60a66

		phil		d14ffd41334ec4b4b3f2c0d55c38be6f		

	Data integrity = PROVE FILE HAS NOT CHANGED

Symmetric

	One key (eg WIFI) to ENCRYPT and DECRYPT  

	Fast but quite weak

	RC4, AES		(old DES, 3DES, blue/two fish)

Asymmetric

	Two keys to lock/unlock data

		PRIVATE 
		PUBLIC

	Slow, but very secure

Non-repudiation

	REPUDIATE : deny something happened

	Prove 100% that something happened; CANNOT DENY IT

	Use SIGNATURES TO DO THIS

		SIGNATURE is ENCRYPTED HASH!!!!

			LOCK WITH PRIVATE KEY

			ANYONE CAN CHECK/UNLOCK USING OUR PUBLIC KEY
				(Drivers use this)

Certificate : digital holder for A PUBLIC KEY; can send to anyone

PKI : public key infrastructure : COMANY THAT USES CERTIFICATES

```

Remote working

```
client-------dial in to VPN server-------RADIUS-----------------Active
								Directory

				RADIUS checks your user/password is OK

				DIAMETER	better

				TACACS+  	best

```

Domain working (inside company)

```
On premises, you log in to your computer

	computer------------------------------------Active Directory

	      ((Kerberos protocol is security protocol))
			for whole domain

```

Active Directory

```
Creates a DC Domain Controller

	Users
	Groups
	Permissions

Active Directory is built using a protocol called

	LDAP Lightweight Directory Access Protocol

		CN="Phil Anderson",OU="Employees",DC="myCompany",DC="com"

		COMMON NAME	    Folder		Domain

```

Secure Copy

```
SSH ==> provides a command line to log in to remote server (linux)

Copy files????

	over SSH  ==> Protocol called 'Secure Copy = SCP'

```

VLANS

```
VLAN is created on a SWITCH!!!

	SWITCH : normally filters by MAC address at LAYER 2

	+

	VLAN added : this is also at layer 2

	But!!!!

		On top ==> for each VLAN we also give each VLAN an IP
			Address.

			Can do 'routing' per VLAN   (now add in layer 3
						       functions)

Switch ==> NORMALLY JUST LAYER 2

VLAN Switch ==> LAYERS 2 & 3       :    Managed (VLAN) Switch

```

Load balancing

```
client 			LOAD BALANCER		DNS SERVER1										DNS SERVER2
						DNS SERVER3
					
	round robin = choose server 1,2,3,1,2,3, etc

```

QoS Quality Of Service

```
VOIP calls
Conference calls

		==> set priority   7  (tag packets)

Lowest
				   0  (youtube)

```

DHCP
IPV4	give IP

```
IPV6		PC give IP so don't need DHCP  (make IP from MAC!!!)

	Still supply DNS, GATEWAY info via DHCP

		STATELESS AUTOCONFIGURATION!!!!

```

Active Directory

```
Forest		Group of domain eg MSN.com, hotmail.com, outlook.com, 
			Skype.com, LinkedIn.com
Domain		One company managed by DOMAIN CONTROLLER machine which
			is running ACTIVE DIRECTORY eg Microsoft.com
OU		Folder in Active Directory : Container for objects
Site		Location ie Physical place eg Birmingham
NETBIOS		Old NAME of COMPUTER eg HOSTNAME

```

Command Line tools

```
PING
PATHPING
TRACERT

NSLOOKUP	DNS information

```

Random
WORKGROUP	default home network : all computers just share resources eg internet
PEER TO PEER	Every 'client' machine is same on shared network : no one machine
in charge
DOMAIN	Central server in charge of network
DC DOMAIN CONTROLLER
ACTIVE DIRECTORY : create users/groups/permissions/printers/share
[mycompany.com](http://mycompany.com/)
CLIENT/SERVER NETWORK eg online banking : you are client; connect to banking server
for a 'session'

Thursday morning : technical wake-up term crash
1	MITM Man In The Middle
a.	Eavesdrop (listen)
b.	Modify traffic
2	Session hijack : take over session
3	Replay attack : later on
a.	Mitigate with time stamps
4	Dictionary attack
5	Brute force attack
6	A authentication = log in eg biometric or password
7	A authorisation = permissions
8	A accounting = logging
9	C	confidentiality = encryption
10	I integrity
11	A availability
12	FAT no permission
13	NTFS
a.	FULL CONTROL
b.	MODIFY
c.	EXECUTE (RUN .EXE PROGRAM)
d.	READ
e.	WRITE
14	WIFI TYPES
15	A
16	B	11
17	G	54
18	N	100+ WITH MIMO MULTIPLE AERIALS
19	AC	300-1000
20	WIFI COMPATIBLE : B, G, N ON 2.4
21	2.4 GHZ OR 5 GHZ
22	K 1000
23	M 1 000 000
24	G 1 000 000 000
25	T TERA 10 ^ 12
26	WIFI Encryption
27	WEP old
28	WPA encrypt with TKIP
29	WPA2 AES (strong)
30	WAP Wireless Access Point = WIFI router
31	Distances
32	WIFI 30M
33	WIFI AC 100M
34	Bluetooth 10m
35	Infra Red 1m
36	NFC Near Field Communication 5cm
37	Wired distances
38	THICKNET	500M 10base5 RG8
39	THINNET 182 10base2 RG58
40	FIBER MONOMODE 50km laser light
41	FIBER MULTIMODE 2km regular light
42	ETHERNET 100M
43	Ethernet with repeater 100+100 = 200m
44	Domain : central security
45	Domain controller : master database for users/groups etc in our domain
46	DC
47	Active Directory
48	Forest : group of domains [Skype.com](http://skype.com/) & [Messenger.com](http://messenger.com/)
49	Tree : group of domains with same root name [east.msn.com](http://east.msn.com/) and [west.msn.com](http://west.msn.com/)
50	Malware
51	Worm
52	Virus
53	Trojan
54	Macro Virus
55	Zombie
56	Logic bomb
57	Zero day
58	ARP Poison
59	Flood
60	PING flood
61	TCP ‘SYN’ flood
62	TCP checking packets arrive
63	IP global address 1.2.3.4
64	TCP/IP
65	TCP : SYN = COUNT OUT
66	TCP : ACK = PACKETS RECEIVED
67	TCP : 3-way handshake : Are you ready to receive? Yes. Let’s begin
68	PING
69	NSLOOKUP : DNS INFO
70	NETSTAT -a : connections
71	445 SHARES
72	49XXX web connection
73	NBTSTAT older HOSTNAME connection
74	PING
75	PATHPING
76	TRACERT
77	Wireshark
a.	Eavesdropping
b.	Network Protocol Analyser
78	ARP -a IP-to-MAC
79	DMZ
80	Perimeter network host website
81	NAC : Network Access Control : check HEALTH OF COMPUTER
a.	UPDATES : WINDOWS
b.	ANTI VIRUS : ON, CONFIGURED AND UP TO DATE
c.	FIREWALL
82	Honeypot : fake website
83	WIFI : MAC address filter : time consuming
84

Friday Quick Revision
DNS name ? IP
DHCP give IP
SQL database
IIS Microsoft Web Server
Commands
PING 8.8.8.8 GOOGLE
PING -t for ever
PATHPING
TRACERT
NSLOOKUP : dns info
NBTSTAT : names of computers you talk to
NETBIOS = HOSTNAME = PC NAME
IPCONFIG
/renew
/release
/all
/displaydns
/flushdns
NETSTAT -a active
-n by numbered order
NAT
PAT
FAT no security
NTFS security
Firewall
Layer 3 STATELESS
4 STATEFUL
7 APPLICATION LAYER
DEEP PACKET INSPECTION
DIAL UP
POTS PLAIN OLD TEL SVS
PSTN public switched telephone network
FIBER
Mono Mode (Single mode) Laser Light 50km
Multi Mode cheap regular light 2km
Broadband
ADSL Asymmetric 8x faster down than up
SDSL Symmetric
ISDN digital line
BRI BASIC RATE 2 lines + 1
PRI PRIMARY RATE 23 lines + 1
T1 = PRI
E1 = 31 lines + 1

.
.
.
.
TWISTED PAIR : 8 WIRES (4 PAIRS)