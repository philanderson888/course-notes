# CompTIA Network+

CompTIA Network +

Welcome !!!

Phil Anderson

Google 'Phil Anderson LinkedIn Enfield'

Cheat Sheet

[http://www.mcmcse.com/comptia/network/N10004_study_guide.shtml](http://www.mcmcse.com/comptia/network/N10004_study_guide.shtml)

Online Emulators

[ui.linksys.com](http://ui.linksys.com/)

VPN and VLAN router

[https://www.tp-link.com/resources/simulator/emulator_841hpv5_un/index.htm](https://www.tp-link.com/resources/simulator/emulator_841hpv5_un/index.htm)

Github philanderson888 ==> course-notes

Exams

Measure Up (paid)

[ExamCompass.com](http://examcompass.com/) (free)

Online labs

[https://www.vmwarelearningplatform.com/srt/catalogs/lab/5313](https://www.vmwarelearningplatform.com/srt/catalogs/lab/5313)

[https://vcore2-us04.oc.vmware.com/cloud/org/us04-2-vtsu-devorg-t/login.jsp](https://vcore2-us04.oc.vmware.com/cloud/org/us04-2-vtsu-devorg-t/login.jsp)

Binary

bit 1/0 on/off

byte 8 bits

nibble 1010 1010 1100 1111 0000 4 bits

kb mb gb tb

10 to power 3 = k kilobit KiloByte
6 = m mega
9 = g giga
12 = t tera

STORAGE use BYTES (Capital B) 500GB Giga Bytes

DATA TRANSFER SPEED bits / second eg Phone 5Mbps (Mega bits/sec)

Decimal

```
10000	1000	100	10	1
	10^4	10^3	10^2	10^1	10^0
```

Binary 0 or 1

```
16	8	4	2	1
			2^2	2^1	2^0
```

IP Addresses

Each computer has 2 addresses

```
1) MAC address

2) IP address

MAC = Media Access Control

		FIXED WITH COMPUTER (NETWORK CARD)

		HARDWARE / PHYSICAL / NETWORK ADDRESS

			Example : 02-15-4A-87-69-52
				  F0-DE-F1-43-AE-4E

	1st half = COMPANY WHO MADE IT (OUI)

		Google 'OUI 02154A'		

IP (Internet Protocol)

   PUBLIC ADDRESS  (USEFUL ON GLOBAL INTERNET)

	1.2.3.4
	CLASS A/B/C/D/E : just look at first number ONLY!!!
		EG 25 in 25.116.32.78

	CLASS A		1-126
				127.0.0.1 reserved : loopback address  ((test with 'ping 127.0.0.1' or ping localhost or ping ::1))
	CLASS B		128-191

	CLASS C		192-223
				A,B,C NORMAL RANGES
	CLASS D		224-239
				MULTICAST : SEND LARGE FILE
	CLASS E		240-255
				MILITARY/GOV/RESEARCH

Examples 
	ping facebook.com  ((DNS Returns 185.60.216.35))
	ping google.com    
	

Class D : 

	Multicast

	Use to send large files eg IMAGES/WIM/VIDEO

		WIM = Windows Image

	One 'Group IP' (Multicast eg 239.10.10.10)

Class E : Military / Gov / Research
```

IP

```
Public
	Class A-E
	Cost money $5 per month per IP!!!
	Limited number of addresses 

		(2^32~~~4 billion)
		   (IP address is 32 bits long)
Private
	3 private ranges

		10.x.y.z			((CLASS A))

		172.16.x.y up to 172.31.x.y block  ((CLASS B))

		192.168.x.y  (DEFAULT IN HOMES ETC)  ((CLASS C))

	APIPA address

		APIPA Automatic Private IP

		169.254.x.y    ((when we see this address it 
				means xxx is broken)))

			DHCP = Dynamic Host Configuration Protocol
				
				POOL OF IP ADDRESSES READY
				TO ALLOCATE TO CLIENT MACHINES

				DHCP ALLOCATES
					1) IP Address
					2) Subnet Mask ***
					3) Gateway     ***
					4) DNS         ***

				If DHCP fails you will get 
				instead 169.254.x.y address
```

7-layer OSI Model of Networking

1 Physical
2 Data Link
3 Network
4 Transport
5 Session
6 Presentation
7 Application

Please do not throw sausage pizza away

Physical Layer

```
SENDING RAW ELECTRICITY FROM ONE COMPUTER TO ANOTHER

	Cabling
	(Physical) Port
	WIFI signalling
```

Cabling

```
Copper

    COAX
	Robust, surrounded by protective layer

	THICKNET = 10Base5  ((Speed 10Mbps, Length 500m))	
		RG8					
		(First networks used this)						

	THINNET = 10Base2  (Speed 10Mbps, Length 200m (185m))
		RG58
	
	CONNECTOR : BNC
                        F-connector	        (F is NOT FIBER OPTIC!!!)
		    Vampire Tap!!!   
    Twisted Pair
		
	UTP Unshielded
		8 wires : 4 pairs ((each pair provides tiny bit of electrical
					shielding)) - hinders 'crosstalk'

	STP Shielded  (not used much)
		
	Speeds of Twisted Pair cabling

		10   BaseT/TX		T or TX  : means TWISTED PAIR
		100  BaseT/TX
		1000 BaseT/TX	        'Gigabit' wire (1000Mbps=1Gbps)

	CAT speeds

		CAT 3		10	Mbps
		CAT 5		100		""Fast Ethernet""
		CAT 5e		1000		half duplex
		CAT 6		1000		full duplex
			((10Gbps but only 30m))
			((1 Gbps for full length of 100m))
		CAT 6A		10Gbps

	Way we send data

		SIMPLEX			1 way eg lighthouse 
		HALF DUPLEX		1 way at time
		FULL DUPLEX		2 ways at time

	Connector

		RJ45
		8P8C

Fiber Optic Cables

	MONO MODE = SINGLE MODE
		Expensive LASER light!!
		Longer distances eg 50km : use on WAN Wide Area Network		

	MULTIMODE

		CHEAPER
		REGULAR LIGHT TO SEND DATA DOWN A WIRE
		~ 2km max
			eg University Campus network (CAN)
			

	Fiber Connectors
	
		ST	Straight tip
		SC	Subscriber
		LC	Local
		MT-RJ
		FC	Ferrule (FE=IRON so strong)

			APC best : Angled Physical Connector	

Network Types

	LAN	Local eg same building
	WAN	Across country
	MAN	City
	CAN	Campus
	PAN	Personal eg Bluetooth to a printer direct or TV direct

Encoding

	Manchester Encoding : prepare signal for transmission

WIFI
```

Layer 2 : Data Link

```
MAC address

	unique address of our machine
	48 Bits long
	AA-BB-CC-DD-EE-FF
	view with IPCONFIG /ALL : also called 'physical' / 'hardware' address

Data sent in FRAMES (packets) 

	Ethernet is 'carrier protocol' used to carry these data frames
		from one computer to next

	| Preamble | Dest MAC | Source MAC | Data | CRC Error Check |

		Preamble = synchronisation warning

		CRC = error check

	Frame TAGGING

		Extra data can get put in the middle also (tagged)

			1. QoS Quality Of Service
				802.1P
				Priority 0-7

			2. VLAN Virtual LAN
				Split up REAL NETWORK into smaller
				'virtual' NETWORKS to aid management
				eg CompanyA/CompanyB in open plan office
				
				CompanyA : VLAN0

				CompanyB : VLAN1

Switch
	
	central point of our network

	very fast

	uses MAC address to direct traffic

	Speed

		Typical Port speed : 1Gbps

		Trunk / Uplink ports : 10Gpbs (used to 'stack' switches)
		
	How does switch work?

		Port		MAC
		1		58-94-6B-E7-81-41
		2		...
		3		...

		Switch builds a table of known computers

			ARP protocol helps here (Maps IP to MAC address)
				arp -a  

		When two computers talk to each other the switch create a
			'virtual circuit' so max speed for this pair.  
			Other pairs get similar excellent speed.

Summary 
	MAC address
	Ethernet carrier of data
	Switch : joins computers
```

Layer 3 : Network

```
Layer 1 : Physical : sending ELECTRICITY OUT
Layer 2 : Data Link : MAC address to send data PC to PC on LAN ONLY
Layer 3 : Network   : IP address : can use GLOBALLY ROUND WORLD

Public : Global

Private : LAN only eg 10.x.y.z range

4 things to communicate

	IP address

	Subnet Mask

	Gateway

	DNS

Subnet Mask

	192		168		1		15	    (IP)

	255		255		255		0	    (Mask)
	1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 

						       ^
						       ^							        			    Split point

	<<----network part (fixed)------------------->><<----host id---->
	    192.168.1 is network 'address' / 'id'           15 is host id
							   (each computer
							   gets unique id)

	Valid addresses

	192		168		1		15
							16
							17 etc
	<-------network id = fixed ----------------->< host id, changes>

	Class C mask 255.255.255.0   (normal)
	Class B      255.255.0.0
	Class A      255.0.0.0

Gateway

	Gateway computer is the computer which grants us access to the
		internet

		Gateway = ROUTER

	Router has 2 NETWORK CARDS

		One points to INTERNET  ((whatismyIP))

		One points on INTERNAL LAN  eg 10.125.81.254

	
			Note : use .1 or .254 as gateway

			.0	reserved for NETWORK ID eg 192.168.1.0
			.255	reserved for BROADCAST ID eg 192.168.1.255

				computer ==> 255.255.255.255  to all computers
							      on every network

				computer ==> 192.168.1.255  all on this network

				(( LAB : Wireshark filter udp.port==68 
					IPCONFIG /RELEASE
					IPCONFIG /RENEW               ))

	PC---switch-----------X==router=X------------------internet
                              GATEWAY       PUBLIC IP

DNS : Domain Name System 

		mapping of NAME 		to IP
			   facebook.com  ==>   31.13.75.36

DHCP
	
	Gives out IP 

	D	DISCOVER	Client (has no IP) : broadcast : "Is there a
					server out there which can give me IP"

	O	OFFER		Server : offers IP from pool

	R	REQUEST		Client : yes I'll take that

	A	ACKNOWLEDGE	Server : done
```

Layer 4

```
Layer 2 : MAC address (LAN)
Layer 3 : IP address (internet)

	IP (layer 3) gives ADDRESS OF ANYWHERE ON GLOBE

		but!!!  no confirmation data has arrived

Layer 4 

	TCP  Transmission Control Protocol

	Add in 'Sequence Number' to count packets out eg 1,2,3,4,5

	Also receiver acknowledges packets : 'Ack' 

		Example : Sender sends 1,2,3,4,5
			  Receiver receives 1,2,4,5 so acknowledges these
			  Sender : does not get ack for 3 so resends
	Slow!!!! 

		((Better slow data !!!))

	
	UDP : User Datagram Protocol : can use instead if not concerned 
			about checking

	TCP : connection-oriented		(( stateful ))

	UDP (also IP) : connection-less		(( stateless ))
```

Routing

```
Layer 1 : Physical
      2 : Data Link
			MAC Address : hardware address
			Ethernet : Source MAC, Dest MAC, Data, CRC Error Check
			Tagging 
				QoS : Quality Of Service : 0-7 Priority Levels
						(802.1p)
				VLAN : split physical LAN into virtual LANs
						(802.1q)
			Switch : central point 

	3 : IP
		Private
			10.x.y.z
			172.16-31.y.z
			192.168.x.y
			APIPA  169.254.x.y : DHCP broken
		Public
			Class A	1-126
			      127.0.0.1  loopback testing 
			      B 128-191
			      C 192-223
			      D Multicast 224-239 ((sending huge files)
			      E 240-255 
			Subnet Mask : Class A  255.0.0.0
					    B  255.255.0.0
					    C  255.255.255.0
							
			Example 134.16.254.12 is class B as 134 in B range

			        134.300.12.12  invalid as 0<item<255

			Subnet Mask : split point which helps define
				1. Network ID eg 192.168.10.0
				2. Host ID    eg           .54

		Ways of sending data
			Unicast		1-1
			Broadcast	1-all
					192.168.10.255  all on this subnet
					255.255.255.255  all subnets
					FF-FF-FF-FF-FF-FF  Ethernet broadcast
					FF = 11111111 = 255
			Multicast	1-group
			Anycast		1-nearest  eg log in to domain controller

	4. Transport

		TCP	Slow but GUARANTEED DATA (SEQ out,  ACK back)
		UDP	Dummy protocol : very fast, no check eg Youtube

			TCP : 3-way handshake

				Client : Hey mr server I've got data to send
						- are you ready???
				Server : yes
				Client : OK let's begin

				SYN,   SYN-ACK,   ACK
```

Routing

```
Layer 3 

	IP : addressing
			Global (public)
			LAN (private)

	
	Routing : creates infrastructure for communication		

		Each router will gather information about neighbouring
			routers 

		Create map of (local) internet

		Use 'hops' as measure of distance across globe

			TRACERT
			PATHPING   show us 'hops' to our destination

	Routing Protocols

		Investigate other routers on internet, collaborate and 
			create efficient routes

		RIP Routing Internet Protocol (v2)

			Create table of neigbouring routes
			Bad : Every 30 seconds every RIP router will 
				fully broadcast entire table to other routers
				even if no change

		EIGRP (by Cisco)    Enhanced Interior Gateway Routing Protocol
			Distance : still HOPS
			Only send data UNICAST, ON CHANGE

		DISTANCE VECTOR PROTOCOL ==> USES HOPS !!!  (RIP & EIGRP)

		OSPF : Open Shortest Path First : Splits world into
			1) unique company ID  (ASN autonomous system number)
			2) geographical areas 
				CONTINENT, COUNTRY, CITY, NEIGHBOURHOOD
```

Layers 5, 6, 7

```
Layer 5 : Session

	Creates 'flows of traffic' 

		computer                                     internet
			SKYPE			<==
			OUTLOOK			<==
			BROWSER			<==
			YOUTUBE			<==

Layer 6 : Presentation

	Encryption of data
		
		HTTPS	HTTP +  (SSL or TLS) : encrypts web pages
						SSL : old  TLS : replacement
		IPSEC   IP encryption 
		

	Compression of data

		RAW ==> high res photo
			JPG ==> compressed version
			PNG ==> compressed

		audio  M4A apple ==> MP3 for internet

		video  MOV / WMV  ==> MP4 video
			
					
			lossy ==> can't get original back

			lossless ==> can get original back

Layer 7 : Application 

	Program requesting access to network eg Skype, Outlook
```

Internet Ports and Protocols

```
Protocol = language of communication

IP = unique address on internet eg 1.2.3.4

Port = channel to reach IP address

	2^20 = 65536 channels

	1-1000 common channels
	1000-50,000 registered 
	50,000 free for use by anyone

		including your own web browser
```

Common Ports And Protocols

FTP File Transfer Protocol

```
Download files
20 - data
21 - admin

Care!!!  Passwords sent PLAIN TEXT !!!
	
SFTP encrypted over SSH secure shell port 22
FTPS encrypted over ...
```

Torrent

```
Main problem with FTP is central server so problems waiting for files

Torrent : split files into small parts 'seeds'

	Clients can download individual 'seeds' then make available
		for others to use their seed also
```

Telnet

```
Terminal Emulation

Port 23

Plain text : send commands around internet : control other machines
```

SSH
Secure Shell
Port 22
Encrypted Telnet
Used to connect to LINUX SERVERS and eg manage IPHONES remotely

Email

```
Send

	SMTP Simple Mail Transfer Protocol
	Port 25
	Plain text!!

Receive

	POP Post Office Protocol
		Port 110
		Simple version

	IMAP 
		Port 143
		Complex version
```

Web
HTTP	80 plain text
HTTPS	443 encrypted

DNS
Domain Name System

```
name ==> ip

Port 53
```

DHCP
Allocates IP address from pool
Port 67, 68
(( DORA 4-step process : view on Wireshark ))

TFTP
Trivial FTP
Copy files over LAN to Cisco device
Port 69

NETBIOS
Networking using HOSTNAME only

```
View NETBIOS names with

	NBTSTAT -n

Port 137-139
```

SNMP Simple Network Management Protocol

```
Port 161-162
Manage all your network devices around the world
Heartbeat message tells you your routers/switches/servers are contactable
```

VPN Virtual Private Network

```
<------------LAN1 eg LONDON---------->

Client-------Switch------------Router--------->>>ISP>>>Router----->>Internet
			GatewayIP   PublicIP				

Repeat this setup in Birmingham also, and Manchester, and Dublin, and Cork!!!

Join our LANs to create our WAN 

			London Router  : create VPN to 10.11.12.13

			Manchester Router  (10.11.12.13)

Lab : Client (Win10) : Control Panel, Networking, New connection, VPN

VPN : join our LANs with ENCRYPTED CONNECTION across PUBLIC INTERNET

Protocols

	PPP Point-to-point protocol

		Dial up to remote machine
		Layer 2
		Plain text

	PPTP Point-to-point tunneling 
		Old, Microsoft
		Port 1723

	L2TP Layer 2 tunneling
		Secure (WinXP) over IPSEC 
		Port 1701

	SSTP Secure sockets tunnel
		Secure over HTTPS (SSL/TLS)
		Port 443

	IKEV2  Internet Key Exchange v2
		Secure over IPSEC (Win7)
		Port 500,4500

	
VPN Authentication
	PAP		NO!!
	CHAP		NO!!
	MS-CHAP2	JUST OK		
	EAP-TLS		VERY SECURE (2 certificates)
	PEAP		SECURE (1 certificate)
```

VLAN
Virtual LAN

```
ui.linksys.com

1 2 3 4 5   6 7 8 9 10    Switch Ports

<VLAN1>>>   << VLAN2>>>

	Ports 1-5 are VLAN1
	Ports 6-10 are VLAN2

		Now they are SEGREGATED ie PC2 cannot talk to PC9

	VLAN is a LAYER 2 technology

		ETHERNET PACKET : TAG THE VLAN ID INSIDE (0-4095)

			 802.1Q  

	But!!!

	For each VLAN we can now allocate ONE IP PER VLAN!!!

	VLAN01   192.168.10.0  network

	VLAN02   192.168.11.0  network

** Exam : Switches which use VLANS are called

	MANAGED SWITCH
	LAYER 2/3 SWITCH
```

DMZ De-militarized zone

```
No-man's land 

Perimiter network

Used to host a PUBLIC FACING SERVER EG web server 

	If it gets hacked, damage is minimal as data is public anyway
```

NAT
Network Address Translation

DNS

```
A		Address
AAAA 		IPV6 eg   FE80:1234:ABCD::4444

				:: means 'pad out with zeros'  (128 bits max)

MX		Email (Mail Exchanger)
CNAME		www 'alias' 'fake name' to set up a website
		CNAME = canonical (fake) name
SRV		Service : background to keep AD Active Directory running	
PTR		Pointer : reverse lookup : IP to name
SOA		Start Of Authority : MASTER COPY OF DNS RECORDS (PRIMARY ZONE)
NS		Name Server : Regular DNS server (READ-ONLY copy of master zone)
SPF		Sender Policy Framework : validates IP part of valid domain
```

WIFI

```
Two modes

	Ad-hoc mode

		2 computers talk directly eg AIR DROP (MAC)

	Infrastructure mode

		Regular WIFI router : Access point

			WAP Wireless Access Point

		BSS Base Service Set : One WIFI router

		ESS Extended Service Set : Many routers : can ROAM 

		SSID : Service Set ID : Name of WIFI router which you connect to 

		Security : 3 things

			1) Hide SSID  (minimal protection)

			2) MAC filtering : block you unless your MAC is approved

			3) Lower power 

Encryption

	Captive Portal eg Hotel, airport ==> care as sometimes no encryption!!!

	WEP don't use : hacked!  

			(( bad-boy answers for exam!!! 
				HUB !!!!
				WEP !!!!
				PAP/CHAP !!!!     )))

	WPA  WIFI protected access
		encrypted over TKIP	  (vista)		
		
	WPA2 encrypted with AES 

			((  AES : excellent answer ))

		Personal

			regular wifi with one key

		Enterprise

			everyone logs in to WIFI using regular WINDOWS LOGIN

				
	Laptop --- WIFI --------------- RADIUS ----------Active Directory
							     users, groups
							     passwords
							     Group Policy
```

WIFI (complete notes, part 2)

```
WEP
WPA over TKIP  (OK)
WPA2 over AES  (ALWAYS BEST ANSWER)

	Personal	Regular WIFI, one key	

	Enterprise	Use Windows login !!!

	
	CLIENT -- WIFI ----------RADIUS-----------Active Directory	                    
	 <<-------802.1x---------->>		
		authentication/
		security

				Exam : RADIUS
				       DIAMETER (better)
				       TACACS+  (best)

Antennae
	Omnidirectional

	Directional : YAGI

		    : Parabolic

Site Survey

	Aim : ensure WIFI not going too far outside building

Wireles channels

	Buy device : default : 1, 6, 11

		13 channels total : swap until get best signal

WIFI speeds

	IEEE 802.11 is WIFI official name

			frequency		speed	
			GHz
	A			5		54

	B		2.4			11 Mbps

	G		2.4			54

	N		2.4 and 5		108+

	AC			5		1000+ 

	B,G,N compatible on 2.4 GHz frequency 

			(( 1 Hertz =  1 cycle/sec))
			(( Screen  = 60 Hz)

	N operates on both 2.4 and 5

	WIFI 'N' had variable speed 'MIMO' multiple aerials

	
WIMAX : WIFI over city
Microwave / Infrared : Line of sight
```

Labs

```
PING				test communication
	(( ICMP family : ICMP Internet Control Message Protocol deals with
	all errors on internet))
TRACERT google.com		all 'hops' / routers on way
PATHPING google.com		all hops on way
ARP -a				IP to MAC
NSLOOKUP google.com		show DNS server for google
NBTSTAT -n			
NETSTAT -a			communication statistics

DISKMGMT
EVENTVWR
SERVICES.MSC
DEVMGMT.MSC
MMC.EXE

GPEDIT.MSC
CMD
powershell
diskpart

DHCP
	Server : Create 'scope'  (pool of addresses)

		Lease time : 1 day 
		OPTIONS
			Gateway IP
			DNS IP     (Google 8.8.8.8)
```

Random Terms
TCP/IP suite (group) of protocols together to get networking done
group of protocols = suite / stack
NFC near field communication : payment : 5cm
IR infra red : 1m : TV remote control
Bluetooth : 10m
NETBIOS	networking using hostnames only
HOSTNAME	name of computer
WINS	Old : Not used (Microsoft). Before DNS we used WINS to know
which machines (hostname) had which IP
WINS : map HOSTNAME<---->IP
Exam : WINS is PRIMITIVE DNS (wrong answer!!!)
HOSTS	Early internet : manual enter name/IP (before DNS)
LMHOSTS

HUB : Layer 1 device which understands electricity only. (Not MAC/IP compatible)
Signal in =====>>>>>
Broadcast signal ON ALL PORTS TO ALL COMPUTERS !!!!

REPEATER (Wired Ethernet)

```
<------100m ethernet------->REPEATER<-----100m ethernet------->

Joins 2 ethernet networks together

((5-4-3 rule))

	JOIN 5 NETWORKS WITH 4 REPEATERS BUT ONLY 3 CAN HAVE COMPUTERS ON THEM

	xxxxx    R     xxxxx     R   xxxxx   R   xxxxx   R    xxxxx
	PC				PC			PC
```

REPEATER (WIFI)

```
Can extend your WIFI with many repeaters (no limit!)
```

Domain	create company eg [vmware.com](http://vmware.com/), [microsoft.com](http://microsoft.com/)
Forest	multiple domains eg [microsoft.com](http://microsoft.com/), [msn.com](http://msn.com/),[skype.com](http://skype.com/)
Tree	root domain eg [msn.com](http://msn.com/) with subdomains eg [usa.msn.com](http://usa.msn.com/),	[london.europe.msn.com](http://london.europe.msn.com/)
DC	Server running Active Directory : DOMAIN CONTROLLER
Active Directory : install this on a server
((2008R2 lab server 1) Rename 'SERVERPHIL' 2) DCPROMO ))
[https://vcore2-us04.oc.vmware.com/cloud/org/us04-2-vtsu-devorg-t/login.jsp](https://vcore2-us04.oc.vmware.com/cloud/org/us04-2-vtsu-devorg-t/login.jsp)
LDAP	open source : Active Directory built upon LDAP protocol
CN="phil anderson",OU="employees",DC="vclass",DC="local"
CN = common name
OU = folder = organisational unit
IEEE
802.2	((Data link layer))
802.3	Ethernet
802.5	(( IBM Token Ring (before Ethernet) )
802.11	WIFI

Term Review

Random Terms
HTTP 80
HTTPS 443
SSL secure sockets layer
TLS transport layer security
TELNET 23 plain text
SSH Secure Shell Port 22
FTP Ports 20 data 21 admin
SMTP send 25
POP receive simple 110
IMAP receive complex 143
RDP remote desktop 3389
DHCP 67/8
DNS 53
TFTP Trivial FTP 69
SFTP over SSH (PORT 22)
FTPS over SSL (PORT 443)
NAT Network Address Translation : Private IP : swap it out and
replace with Public IP so you can reach internet
MAC address : length is 48 bits
IP address : length is 32 bits 8.8.8.8 (4 ëoctetsí)
IPV6 address : length is 128 bits
DNS ëAí address (Ipv4)
DNA ëAAAAí IPV6
Security
A Authentication (log in)
A Authorisation (permisssion eg Full Control)
A Accounting (log what happened)
VPN : virtual private network : create ENCRYPTED TUNNEL OVER INTERNET (connect 2 lans)
VPN : tunnel mode (LAN-LAN)
VPN : also ëdial iní from home to work
VPN : transport mode (Home laptop : dial in to work)
VPN concentrator : dedicated hardware for lots of connections at once
NETBIOS name
HOSTNAME
WEP hacked wifi encryption
WPA
WPA2
personal : regular wifi
SSID : name
Torrent
Subnet : small network
segment : piece of wire (put computers on it)
AES : best encryption!!!
CCMP ( is AES +)
TKIP ok (slightly older)
IPSEC : built into IP : native encryption
QoS : Quality of service : 0-7 : priority (0 low, 7 high) 802.1p
VLAN Tagging : 0-4096 : 802.1q
WAP Wifi Access Point
SNMP Simple Network Management Protocol : monitor devices (use ëheartbeatí every 30 secs)
ICMP Internet Control Message Protocol : error message protocol : informs eg 404 unreachable
ping [google.com](http://google.com/) CAN WE REACH GOOGLE?

[Network+ Lab Work](CompTIA%20Network%2065d741b754284331b5bb4544f9c5cadc/Network%20Lab%20Work%2096807db07b624c48be723fcc0872d695.md)