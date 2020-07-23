# 902 Notes 1

A+ 902
Reminder : Philip Anderson (Google 'Philip Anderson LinkedIn Enfield'!)

Networking

OSI 7 layers
Physical
Data Link
Network
Transport
Session
Presentation
Application

IP	1.2.3.4

```
Public

	131.237.105.3

Private

	Class A		10.x.y.z
	Class B		172.16.x.y - 172.131.x.y
	Class C		192.168.x.y
	
Private 'APIPA'		169.254.x.y		DHCP not working!!!

```

TCP	Slower but 100% guarantee of data arrival

```
	TCP has SEQ (count out) and ACK (acknowledge arrival)

	TCP also has PORT NUMBER (1-65536)

```

UDP	Fast, no checking, good for streaming

unicast	1-1
broadcast	1-all
Broadcast to ALL NETWORKS	use this address
255. 255. 255. 255
11111111 11111111 11111111 11111111

```
			     THIS ONE LOCAL NETWORK (SUBNET)	
						use this address
						192.168.10.255    will broadcast to 
						192.168.10.0 network

```

multicast	used for sending large files to a group of computers
Address is 224.x.y.z up to 239.x.y.z range
Picture : PC will 'subscribe' to group
Data : fed in a SINGLE LOOP so does not overload the network (think 'snake')

peer-to-peer	Split source file into lots of little 'seeds' : get from multiple sources

```
	(Windows 10 uses P2P for updates)

```

anycast	IPV6 only
1-nearest location (eg locate nearest Domain Controller when logging on)

IP address overview

```
Public Address Ranges

	First number of IP address in the range

	Class A		1-126
	127.0.0.1	reserved for special use : loopback address  (use to test Network Card & TCP/IP)

	Class B		128-191
	Class C		192-223
					Class A, B, C ==> normal PC usage
	Class D		224-239		Class D ==> Multicast (send large files)
	Class E		239-255		Class E ==> Gov, Military, Research

```

Binary

```
	128	64	32	16	8	4	2	1			Decimal

					1	0	0	0		is 	8
					1	0	1	0			10
			1	0	0	0	0	0			32
			1	1	0	0	0	0			32+16=48	
	
	
	1	0	0	0	0	0	0	0			128   (class A is less than this)
	1	1	0	0	0	0	0	0			192   (class B is less than this)
	1	1	1	0	0	0	0	0			192+32=224(class C is less than this)	
	1	1	1	1	0	0	0	0			224+16=240(class D is less than this)
	1	1	1	1	1	1	1	1			255	

```

Subnet Mask

```
Subnet mask is to create NETWORKS OF RELATED COMPUTERS

	Typical home network

		192.168.1.x		assigned to the computers

	If we want all computers to have the same 192.168.1 beginning we use a subnet mask to do this

		IP		192		168		1		X

		MASK		11111111	11111111	11111111	00000000 
				255		255		255		0
									    ^
									split point
				<< --------network id-----------------------><<---host id>>

				mask can also be written  /x  where x is the number of binary bits  (/24 in this example)

				CIDR = /24 for standard class C mask

Class A mask					255.0.0.0		/8
Class B mask					255.255.0.0		/16
Class C mask		Most have this!!	255.255.255.0		/24  (CIDR)

```

Default Gateway

```
Internal IP of router : must go through this device to reach internet

```

4 things we need to reach internet

```
IP
MASK
GATEWAY	
DNS
		mapping of all (human) names eg bbc.co.uk to (machine) IP addresses (151.101.128.81)

```

Critial Networking Ports and Technologies

```
80	HTTP		(tcp/ip)
443	HTTPS		encrypted web traffic
			
			SSL (older)
			TLS (newer)

20/21	FTP		files
	SFTP		file transfer over SSH
	FTPS			           SSL (HTTPS)
	
25	SMTP		SEND		simple mail transfer protocol  
110	POP		RECEIVE SIMPLE
143	IMAP		RECEIVE COMPLEX

23	TELNET		plain text commands
22	SSH		Secure shell : encrypted telnet

3389	Remote Desktop

```

More advanced

```
53		DNS

67		DHCP

137-139		NETBIOS

			Using networking where we don't have IP addresses : unique identifier on network is HOSTNAME
				(Name of PC)

161-162		SNMP	Simple Network Management Protocol

				listens for 'hearbeat' messages every 30 seconds so we know all devices up and running 

				other stats eg throughput etc

```

Other networking technologies

```
VPN	Virtual Private Network

		Secure channel across internet

		
		PPP		Point-to-point protocol  :  Layer 2 : DIALS UP THE REMOTE NUMBER!!!

		PPTP		Old, microsoft								1723
		L2TP/IPSEC	XP onwards, very secure (IPSEC)						1701
		SSTP		Vista onwards, using HTTPS (VPN over HTTPS 443)				443
		IKEV2		Internet Key Exchange (Win7 onwards)					500,4500

				((Mobile Auto-Reconnect for up to 30 minutes))
	

VLAN	Virtual LAN

		Use to segment our network

			PC 1-10 are on VLAN0
			PC 11-20       VLAN1

		Tagging

			to achieve this goal we can 'tag' our ethernet packets in two ways

			1)  	Tag VLAN number 1-4000								  802.1p
			2) 	QOS Quality of service  0-7  where 0 is lowest priority and 7 is highest priority 802.1q
								((use with VOIP phones etc to prioritise))			

		
	Note : layers

		Layer 2 	Regular switch (MAC address and Ethernet only!)

				VLANS created at layer 2 also (VLAN tagging)

		Layer 3		IP address

				VLAN : add an IP address to each VLAN!!!  (do 'routing' to send data to a VLAN)

		Regular Switch	: layer 2 only 

		VLAN switch (( Managed switch))  : layer 2 (MAC address, VLAN tag)  + layer 3 (IP)

DMZ = De-militarized Zone = Perimiter Network

	Host a public facing server eg WWW website : outside of our LAN and firewall.  If it gets hacked, our
		secure LAN is not going to be affected.

NAT	Network address translation

		Allows computers with PRIVATE IP eg 192.168.10.x to reach PUBLIC INTERNET

		
				PUBLIC IP

				
				ROUTER

				PRIVATE IP	

		Source IP (private) when reaching NAT Router is replaced with router's public IP

	

Proxy

	Used to manage internet connections in our company

	All requests go via proxy eg <http://10.20.30.40:8080>

	Used to 

		Manage employees
		Block sites
		Filter for viruses
		Cache data for faster response by all

```

Module 4

```
Network cards

	simplex		1-way data
	half duplex	one way at a time
	full duplex	both ways at same time

Wake on LAN

	PC Off ==> Power off!!!  But network card still active.

		Send a MAGIC PACKET to machine ==> the NIC can wake the whole machine up!!!

QoS
	Voip phones : set priority
		0 = low
		7 = highest

		use to ensure call centre staff have good phone line

Latency

	Delay or time taken for a signal to travel from A to B  (eg Ping google.com in milliseconds)		

Jitter

	Random fluctuation in latency

Network Card Properties/Protocols

	File and printer sharing

		SMB	Server Message Block  (old)
		CIFS	(upgrade to SMB)

				==> both enable FILE SHARING

				UNC PATH  \\\\SERVER\\SHARE\\FILE		

```

Wireless

```
Ad-hoc			2 laptops join directly (no wifi router)

Infrastructure		WIFI router : normal setup

SSID			Service Set ID 	= name of WIFI router/ access point
	BSSID		Base Service Set : one WIFI router

Disable SSID broadcast	still see as 'unnamed network'
MAC filtering		manually type in MAC addresses : block/allow

802.11		WIFI

			frequency		speed Mbps
	A			5		54
	B		2.4			11
	G		2.4			54
	N		2.4 and 5		100+
	AC			5		1000+

	B, G, N all compatible on 2.4 GHz
	N is dual band : 2.4 and 5
	speeds vary with MIMO : Multiple aerial  

							ieee	802.3		ethernet		
								802.5		(old) token ring
								802.11		wifi

```

Connections

```
Cache data

	DNS data

		ipconfig /displaydns
		ipconfig /flushdns

Dial up

	PC (digital) ====== MODEM ============>>>>phone line (analogue wave sound)

	56k speed
	92k speed 

	RJ11 phone line

Remote Desktop
	MSTSC  Microsoft Terminal Services Client!!!
	Log in to a server
	3389

Remote Assistance
	Get help : must allow your helper to take control
	both work on 3389

```

Module 4 Unit 2

```
IE Zones

	Internet	public site
	Intranet	site on your Local Lan (recognise it by IP being Local IP)
	Trusted
	Blocked

Privacy
	Pop-up blocker

Host	larger device eg Server which HOSTS something!  eg Service
Node	any point on network eg router, switch, phone

Firewalls

	Network firewall		dedicated high end device; sits at your router to protect
					network

	Host firewall			Win10 built in firewall : just this one PC (software)

	IDS				Intrusion DETECTION
	IPS				Intrusion PREVENTION

	NIDS				Network based...
	HIDS				Host based..(one PC)
	NIPS
	HIPS

	

Blocking traffic

	Firewalls use RULES to block traffic

		port 80 tcp allow
		port 443 tcp allow
		deny any any			IMPLICIT DENY : DOOR IS ALWAYS SHUT UNLESS EXPLICIT
									PERMISSION

			ACL access control list

				traffic will be blocked/allowed on FIRST MATCHING ITEM

			(( Note : Windows also has ACL which is NTFS permission on file/folder
					Full control, modify,read,write,execute,list folders))

			

	Firewall block by
		1		IP
		2		PORT
		3		PROTOCOL EG TCP OR UDP
		4		PROGRAM (APPLICATION) EG SKYPE

	
	Firewall types

		Stateless (Layer 3)		IP	 (LAYER 3 BLOCKING)

		Stateful (Layer 4)		TCP,UDP, PORT 

		Application Layer (Layer 7)	Deep packet inspection : looks at data content
						for malware ((slow!!))

	UTM Unified Threat Management : overall umbrella

SOHO : small office, home office

!! Change your default router user/password !!

WIFI Encryption

	WEP		hacked

	WPA		ok		encrypt with TKIP

	WPA2		good		             AES		!!RIGHT ANSWER!!

		personal 

			regular wifi : one key			

		enterprise

			sign in with your Active Directory windows login

			CLIENT ==> WIFI ==>   RADIUS 	        ==>   ACTIVE DIRECTORY
					     (authentication)
			
			<<========802.1X============>

WPS wifi protected setup

	Vulnerability : 8 digit pin split into two 4-digit pins; easily hacked

```

Securing Your Network (307)

```
Change any default username/password

?? Disable SSID broadcast ??

?? MAC filter ??   block by MAC address

Reduce power on WIFI 

	site survey : ensuring WIFI does not go outside your building too much

Port forwarding

	allow incoming traffic to come via a port into your network (gaming)

Port trigger

	allow outgoing traffic out via a port (gaming)

Firmware : update

```

Module 4 Unit 3

Domain	Central Server (Active Directory)
DC = Domain Controller
Permanent (work)

```
	Two types of servers
		1) Domain Controllers
		2) Member server : regular server (not DC)

	Kerberos : provides the security INSIDE A DOMAIN!!!

	Centralised management

```

Workgroup	No central server : client machines only

```
	Peer-to-peer network 

```

Client/Server	log in to bank : you are client, bank is server

Homegroup

```
	Home setting : easy to share files amongst computers

```

Sharing
\\server\share UNC path

```
	net share		==> view shares !!!

	C$ is ADMIN SHARE built into Windows   

	HiddenShare$   (present but not visible)

	net share myNewShare=C:\\path\\to\\share

```

NTFS Permission
Full Control
Modify
Read
Write

Share Permission
Full Control
Change
Read

Map Share

```
	Net Use  S:\\  \\\\server\\share

```

Command Line
CD Change Directory
CD.. go up
CD\ go to root
RD Remove Directory
DIR list directories
MD make directory

Permissions

```
FAT		No permission

NTFS		Full control/modify etc

Share		Full control/change/read

Printing	Manage Printers		Install/edit printers (admin)

		Manage Documents	Edit PRINT QUEUE (jobs waiting)	

		Print			

```

Effective Permissions

```
NTFS permissions are CUMULATIVE		READ + FULL CONTROL ==> FULL CONTROL

But!!!

If coming over network via a SHARE THEN 

	NTFS and SHARE  ==> MOST RESTRICTIVE WINS!!!		NTFS Full but Share Read ==> TOTAL is READ

Parent folder

	Child folder   ==> permissions are INHERITED (SHOW AS LIGHT GREY COLOUR)

Deny BEATS Allow

Explicit (on file itself) BEATS INHERITED (including beats deny)

Owner = creator

```

Moving and copying

```
C:\\		MOVE TO 		C:\\			KEEP ORIGINAL PERMISSIONS
C:\\		MOVE TO 		D:\\			LOSE; TAKE ON NEW PARENT PERMISSIONS
C:\\		COPY TO			ANYWHERE		LOSE; TAKE ON NEW PARENT PERMISSIONS

```

File Attributes

```
Every file has 5 Attributes (binary 1/0)

	Command : attrib
				+H		MAKE HIDDEN
				-H		UNHIDE

	GUI		
				READ ONLY?
				SYSTEM FILE?
				HIDDEN FILE?
				ARCHIVE ?  (CHANGED, SHOULD BE BACKED UP)
				INDEXED?

```

Module 4 Unit 4

Virtualisation

```
VM1	VM2	VM3	

====== HYPERVISOR ==================

====== BARE METAL MACHINE (HOST)====	

Hypervisor : mini-dedicated operating system that just runs virtual machines

	Windows : HYPERV
	VMWare  : ESX-i

Generation 1 	Windows 7

Generation 2	Windows 8,10

Exam ==> HYPERV needs Win8/10 PRO & 64 BIT

Network types : 

	PRIVATE		VM CAN TALK TO VM 	

	INTERNAL	VM CAN TALK TO VM AND PARENT 'HOST' MACHINE

	PUBLIC/EXTERNAL	

VDI Virtual Desktop Infrastructure

	'HOT DESK' : log in to your own 'virtual environment'  (Citrix)
	

Threats
	VM Escape : virus on VM affects the host machine

```

Cloud types

```
Cloud !!!	

Private cloud		You and you alone have access to this dedicated server

Public cloud		Shared ownership eg GoDaddy website hosting

Community cloud		2 or 3 companies together buy a private cloud, for shared use

SAAS		Software as a service

					Log in and use service eg online bank

PAAS		Platform ...

					VDI environment : Remote desktop (you have a virtual workspace)

IAAS		Infrastructure ..	Build servers and networks from scratch : maintain also!!
					Expensive, hard work ==> fully customisable

```

Module 1

Operating Systems

```
Hot fix			quick fix

Patch			longer term fix

Update			add new features

Service Pack		cumulate updates

Win10			ongoing updates

```

Aero

```
Peek

Snap

Shake

Glass : transparency

Flip2d : alt-tab

Flip3D : windows + tab

```

Editions

```
Win7
	Starter, Home, Pro, Enterprise, Ultimate

Win8/10	Home, Pro, Enterprise

Home editions
	Cannot join DOMAIN!!!
	Cannot do REMOTE DESKTOP!!!
	Cannot do BITLOCKER!!	

Ultimate ==> RETAIL LICENCE (Transferable)

Enterprise ==> VOLUME LICENCE (One key for company)

OEM ==> Licence tied to hardware

Exam : Enterprise features : Direct Access, Device Guard, Credential Guard, AppLocker

       Pro features : Bitlocker, RDP

       Home : can't join domain

Specification

	Win7/8/10

	   	          	CPU		RAM 		HDD

	x86(32 bit)		1GHz		1GB		16GB					
	x64			1GHz		2GB		20GB

Upgrade

	Home 	==>    Home

	Pro/Business  =>  Pro

	anything ==> Enterprise/Ultimate

	32 bit ==> 32 bit

```

Unit 2 : Tools

```
UAC : User account control

	Admin prompt			Already admin; just allow 'Yes' or 'No'
	
	Credential prompt		Type in user/password

MMC Microsoft Management Console

	Add SNAP-IN

		
GPEDIT.MSC		Local settings for your local computer

SECPOL.MSC		Local security policy

DISKMGMT.MSC		Disk Management

COMPMGMT.MSC		Computer Management

EVENTVWR.MSC		Event Viewer1

MSTSC			Microsoft Terminal Services Client : RDP

TASKMGR			

RESMON			Resource Monitor

PERFMON			Performance Monitor

				Save Permanently ==> Data Collector Set

RELIABILITY HISTORY	

```

Scripting

```
.bat	batch file (text file renamed)

.cmd	batch file also

.ps1	powershell script command : very useful

```

Application (binary file : can't view with text editor)

```
.exe	

.msi	Microsoft Installer  (cleanly uninstall)

.apk	Android

.app	IOS

.appx	

```

Windows

```
System32		Core windows files live here

	%systemroot%

C:	%systemdrive%

```

Shutdown

```
	/r			restart

	/s			shutdown

		/t 3600		1 hour = 3600 seconds

	/l			log off

```

Registry

```
Internal database for Windows

	5 'HIVES' (root folders)

	.REG

```

Unit 3 : storage

```
Factory ==> create 'track' like record groove (vinyl)

	Split track into SECTORS ==>      WHEN FORMAT (NTFS) JOIN INTO 'CLUSTERS'

		(low level factory)         (high level ie user format)
	

Partition

	One disk : split up

	MBR : old : Max 4 primary partitions

		2TB limit also

	GPT : new : 128 partitions		

DISKPART

	LIST DISK
	SELECT DISK 1
	CLEAN
	ONLINE
	CREATE PARTITION PRIMARY SIZE=1000      REPEAT X 4

NTFS FEATURES 

	COMPRESSION		
	ENCRYPTION		
	PERMISSIONS		
	QUOTAS

Other filing systems

	FAT
	FAT32
	exFAT		64 bit fat 	

	NTFS		Windows	
	REFS		Resilient : huge cloud drives
	
	UDF		DVD
	CDFS		CD

	EXT3/4		LINUX
	NFS		UNIX

```

Partitions .. continued

```
SHRINK/EXTEND PARTITION

	
Disk Types

	Basic

		All data is one ONE DRIVE : SIMPLE VOLUME / PARTITION

	Dynamic	

		Can span across MULTIPLE DRIVES

			spanned volume
		
			RAID 0		STRIPE			2+		NOT TOLERANT BUT FAST!!!
			RAID 1		MIRROR	 		2 DRIVES	TOLERANT (LOSE 1 DRIVE)
			RAID 5		SRIPING WITH PARITY	3+ DRIVES : 	TOLERANT (LOSE 1 DRIVE)
			RAID 6							               2 DRIVES
			RAID 10		COMBINED 1 AND 0

	JBOD 		Just a bunch of disks !!!!

	BLOB 		Binary large object !!!	

	Storage Spaces	New to Server 16

				Huge filing systems eg 100TB!!!

					REFS RESILIENT FILING SYSTEM

					GATHER DISKS ==> STORAGE POOL

						2-WAY MIRROR/3-WAY MIRROR FOR REDUNDANCY

	format c: /fs:ntfs
                     :fat

		YOU LOSE ALL DATA!!!

	convert (from FAT to NTFS)  using 

		convert c: /fs:ntfs

		CONVERT : DATA IS KEPT!!!

			CONVERT FAT => NTFS ONLY!!!   CANNOT CONVERT OTHER WAY !!!

	MOUNT POINT : DON'T ALLOCATE DRIVE LETTER BUT PLACE INSIDE A FOLDER

```

Folders

```
Win+E		explorer.exe
CTL - W 	shut tab
ALT - F4 	shut window

```

Navigation

```
	CD	change directory
	CD..	up one level
	CD\\	to root
	dir
		dir/p 	one screen at time
		dir *.*    * = wildcard

	COPY		FILE
	MOVE		FILE
	XCOPY		FOLDER
	ROBOCOPY 	FOLDER
	ICACLS 		PERMISSIONS

	CAB 		CABINET FILE  (A BIT LIKE A ZIP FILE)
	  EXPAND THISFILE.CAB C:\\THISFOLDER     ==> ALLOWS TO EXTRACT AND USE THIS FILE		

```

Unit 5 : Applications

```
Compatibility mode 

Services.msc

	BACKGROUND SERVICES

	NET STOP SPOOLER
	NET START SPOOLER

	STARTUP TYPE

		automatic
		delayed
		manual		won't start unless explicitly called
		disabled

MSCONFIG

	disabled in Win10!!

	Sets startup items

		eg Google updater
		

WINDOWS 10

	SHIFT + REBOOT ==> TAKE US TO RECOVERY MENU ==> SAFE MODE

		

TASK MANAGER

	<<set priority>> ==> REAL TIME to make process have higher priority

		
tasklist  &  taskkill

```

Module 2

```
Hardware

	Drivers

		Software which enables OS to talk to hardware eg USB stick or mouse or printer

		Plug-n-play : auto install

		.inf ==> INSTRUCTIONS WHEN INSTALLING

		.sys ==> DRIVER FILE (SYSTEM32/DRIVERS FOLDER)

	Memory

		MDSCHED.EXE

			MEMORY DIAGNOSTIC : CHECK RAM FOR FAULTS

		
	Device Manager

		view/update/disable/uninstall drivers

		

	DirectX : Windows Graphic/Gaming driver

	DXDIAG  video/audio information

	

Screen

	Resolution

		1024x768		number of pixels on the screen			

	Pixel : picture element : one 'dot' on screen  

		Actually is 3 dots : RGB RED GREEN BLUE

	Refresh Rate

		50/60HZ  typical screen

	Aspect Ratio

		4:3
		16:9  widescreen

	
Power

	ACPI manages power state for Windows system

		S0..1..2..3..4..5 SLEEP STATES

		HIBERNATE		take contents of computer (RAM) and store to hard drive

		FAST STARTUP		quick start : use HIBERNATE + LOGIN
		
		INSTANT GO 		Network card always on

	POWERCFG : command line version

Page File = Swap File = Virtual Memory

	In early versions of Windows there was not much RAM

	PAGE FILE allows the RAM to empty its contents to hard drive when full

		PAGEFILE.SYS

	Size of page file ~~~ 1.5 x RAM SIZE              2GB RAM == 3GB PAGE FILE
	

MSINFO32
	
	System information

SUPERFETCH

	Pre-loads certain regularly used apps/data into RAM before you need them		

READYBOOST

	Use USB stick as EXTRA RAM!!!

```

Unit 3 : Troubleshooting

```
CompTIA Troubleshooting Model

1. Identify Issue (what is wrong)

2. Theory of probably cause

3. Test theory : identify cause properly

4. Fix

5. Test

6. Document findings

Known good

	Swap out for known good component : help to identify what is wrong!

```

Event Viewer

```
Use to troubleshoot and find faults

	eg filter on Error ID

```

DLL

```
Dynamic Link Library : files which build Windows!!  (can't run like .exe)

Exam ==> REGSVR32 can REGISTER A DLL FILE

```

Unit 4

Users

```
Local

	NTUSER.DAT = registry file
	C:\\USERS IS PROFILE LOCATION

Domain

	Roaming		profile is synced 

	Redirected 	profile is kept on the server

```

Unit 5 : Installing Windows

```
From 

	DVD
	USB
	Network Share (WDS Deployment : HIT F12 with Network Boot)   

		PXE Boot

Deploy an 'image'

	image = file containing WINDOWS  		.WIM		Windows Image

		boot.wim		WINPE INSTALL QUESTION

		install.wim		ACTUAL WINDOWS FILES

	answer file

		autounattend.xml	Is an XML file which auto-answers all of the setup 
					questions for you.

			(can put on USB at boot time, or in the image)

		(( Can create with SIM System Image Manager tool ))

Windows 10 

	Reset your PC

		1) Keep data

		2) Erase from scratch

```

Boot methods

```
MBR		old, plain text : vulnerable to attack.  Also data can be lost (corrupt hard drive)

			BOOTREC /fixboot
			BOOTREC /fixmbr

GPT		more advanced

Secure Boot	(UEFI)  

		1) We collect all of the boot files from the motherboard+cpu+hard drive etc  

			this is the 'FIRMWARE' of the PC

			'zip' them and 'sign' them with a 'Certificate'  ==> DIGITAL STAMP

			SIGN THE FIRMWARE AND STORE KEYS ON SPECIAL CHIP ==> TPM CHIP on motherboard

		2) We collect the WINDOWS BOOT FILES AND ALSO SIGN THEM ==> store on TPM chip

		Computer is now secured.....!

		At boot time we will 1) Check firmware 2) Check Windows boot files ==> must pass test
			before PC will boot.

			ENSURE NO VIRUS ETC INSTALLED IN BACKGROUND!!!

Sysprep

	Before we IMAGE a computer we must STRIP OUT ANY UNIQUE DATA EG USER ID ETC

		Each computer has a SID Security ID for each user

	
	System32\\sysprep folder

			
		sysprep /generalize /oobe

			/generalize => STRIP ALL UNIQUE DATA
			/oobe       => screens when turn on brand new PC

```

Module 3 : Troubleshooting

Boot process

```
Power PC ON!!!

POST test	==> self-test of all hardware eg RAM, graphics

			==> FAIL ==> BEEP AT YOU!!!

			Common ==> RAM failure!!!

BIOS ==> BOOT ORDER 
		1. CD
		2. HARD DRIVE	==> FIND MBR record ==> find ACTIVE PARTITION (only one allowed!)
		3. PXE NETWORK
		4. USB

Boot Manager

	BootMGR
	
		BCDEdit 	actual startup data

	

Boot windows now

	WINLOAD		ADMIN PROGRAM
	HAL.DLL		HARDWARE
	NTOSKRNL.EXE	KERNEL (CORE OF OS)

```

Tools to troubleshoot

```
CHKDSK		scan disk for errors

		/f FIX FAULTS
		/r recovery bad sectors (slow)

NTLDR		NT Loader  (XP Program) ==> can be missing or corrupt

BSOD		Blue Screen : Stops working

System Restore
		Restore OS to older settings
	
			Note : does not restore data

SFC /ScanNow

	System File Checker : checks OS files for corruption

F8 Menu

	Safe Mode

	Last Known Good

	Disable Driver

	

WinPE		Preinstallation Environment : Install

WinRE 		Recovery Environment : Repair with DVD

			
	Boot from DVD

	X: drive which is a RAM DRIVE (NOT ON HARD DISK BUT RUNNING ONLY IN RAM)

		Windows lives on D:\\ drive

```

Hard Disk

```
Fragmented	: 	split up

Defragment	: 	store files as WHOLE so FASTER LOADING

Disk Cleanup	: 	remove tempfiles/ recycle bin files

Task Scheduler

Updates			Just make sure they are done!!!	

Backups			Win7 has own backup program

VSS Volume Shadow Copy

	Volume Shadow Copy enables INSTANT BACKUP OF DRIVES (SIMILAR TO VM SNAPSHOTS)			

```

Migrating User Data

```
Migrate = Move

USMT

FAST	XP : Files and Settings Transfer  (wrong answer)

WET	Windows Easy Transfer (Win7)

```

Module 3 : Security

```
Catch Phrases

	C	Confidentiality		ENCRYPTING DATA (HIDING IT)  	 https:// 
	I	Integrity		Proving data is intact / has not changed  (Use hashing for this)
	A	Availability		Data must be available

	A	Authentication		Log in!!!	
	A	Authorisation		Permission (check group membership on ACL lists)
	A	Accounting / Auditing	Logging

```

Ways to protect data/network

```
Password
Firewall : block IP traffic
WIFI/VPN login using RADIUS & 802.1x
Segment data sets 
Segment network into smaller, more manageable units (VLANS)
AV & updates
Windows Updates  
	Feature
	Security ==> important
Governance : IT Policies
Training!!!!!
Legal requirements
	Cookie law
	Data protection act
	Computer Misuse Act
Monitoring
Incident Response

```

Security Terms

```
System hardening ==> 	make system more secure

Implicit Deny		default ==> users are locked out
	
	Explicit permission to enter

Least Privilege

	Receive lowest permission possible to do your job

```

Social Engineering

```
Phishing		bogus email/links

Spear Phishing		target one person/group

Spoofing		fake

Whaling			targeting big fish / high value targets

Pharming		Fake DNS records			

Flood attacks

	DOS		Denial Of Service   : sending lots of requests 

	DDOS		Distributed DOS attack : 

	Botnet		Infected network of many computer

	Bot		Robot

	Zombie computer	virus appears to be sleeping

	Logic Bomb	Signal to start attack (zombie computers wake up)				

	PING FLOOD		Lots of PINGS
	TCP 'SYN' FLOOD		Lots of TCP 3-way handshake requests

					1. Client 'hello server, are you ready to receive'???
					2. Server 'yes'
					....................hang waiting

	Smurf attack		Fake SOURCE IP : hide attacker

Footprinting		legal methods to track you

Fingerprinting		covert methods to obtain information

	Wifi 'eavesdropping'

	Keylogger : track every key you press 

Network mapping

	trace out all machines/servers/names/DNS/IP info on your network

Port Scanning

	FREE ONLINE PORT SCAN

	nmap : Microsoft : internal port scan

NAC Network Access Control

	Not allow machines onto your network unless they are compliant

		1)	Windows is UP TO DATE
		2)	AV is UP TO DATE
		3)	FIREWALL is ON and CONFIGURED

	IF FAIL HEALTH CHECK ==> PUT ON QUARANTINE NETWORK UNTIL FIXED

Eavesdropping

	Wireshark is a NETWORK PROTOCOL ANALYSER

	Book - things to attack/monitor

		1. Switch ==> table of PORT/MAC addresses   

				MAC TABLE 
				CAM TABLE   

		2. Switch ==> CACHE OF IP/MAC address

				ARP TABLE  

				  (view with arp -a)

Arp poison ==> corrupt the ARP table			

Authentication				Log in

	SSO				One log in to MANY SITES

	Mutual authentication		Two SERVERS must MUTUALLY AUTHENTICATE EACH OTHER

						Use 'certificates' to do this

Zero Day Attack				Brand new software : bad guys try and hack it straight away
					If succeed : exploit new vulnerability for which no fix exists			
	
Password attack				

	Dictionary attack		checking regular words

	Brute force attack		check every single combination

						LOCKOUT POLICY : IF X FAILS ==> LOCK ACCOUNT

		
							((GPUPDATE /FORCE ==> APPLY NEW POLICY))

```

Unit 4 : Malware

```
Malware			General 'catch-all' term for any malicious code

Virus			Must be attached to 'host'

Worm			Self-replicate & Self-propograte (does not need a host)

Trojan			Innocent looking file eg game ==> actually malware

Cookie			Text file storing coded data

	1st party	Authentic: from sites you visit
	3rd party	Pushed from eg advert sites without permission

Adware			Push adverts to you
Spyware			Track cookies and web browsing

Greyware		Annoying not necessarily malicious eg cookies

Bloatware		New PC : unncessary software
Ransomware		Lock computer unless pay money

Rootkit			Attack underlying part of PC eg FIRMWARE, HARD DRIVE SECTORS, etc even before
				Windows is installed.  
	boot sector

Macro virus		affects Microsoft Word

Spam			email
	
SPIM			spam over IM instant chat messenger

Antivirus		detect virus
			Daily - update 'signatures'
	Signature = hash of viruses.  Check files on computer ==> do any hashes match the hashes of viruses?

	Removing virus
		1) Shut down
		2) Isolate systems
		3) Turn on and scan / disinfect or WIPE!
		4) Re-join network

Faking Certificates

	Certificates are like digital identifiers

		PRIVATE KEY : KEEP PRIVATE
		PUBLIC KEY : ANYONE CAN HAVE

	Certificates can have 2 types

		PRIVATE 	VALID JUST IN OUR COMPANY ALONE (INTERNAL VERIFICATION, FREE)

		PUBLIC		PAY $$$ FOR CERTIFICATE VALID ON WEB 

					((can get free also))

```

Security defences

```
DEFENDER

	Heuristic  = real time scanning 

Action Center

```

Encryption types

```
There are three types of encryption

Symmetric = Shared key encryption 

	
	Plain text	ALGORITHM		KEY		(SALT)			Cipher text			

		Algorithm : Mathematical routine to provide encryption

			TODAY : AES

			OLDER : DES, 3DES, RC4, Blow/TwoFish

		Key : similar to WIFI KEY : simple password (known to user)

		Salt : extra password (known to computer , random)

	Symmetric   SAME KEY DOES 

		1) ENCRYPTION
		2) DECRYPTION

				==> VULNERABLE TO ATTACK AS IT DOES MORE WORK!!!

				==> WIFI IS NOT SECURE

	Symmetric Summary

		Symmetric WIFI is FAST but LESS SECURE as ONE KEY IS DOING ALL THE WORK SO MUCH EASIER
						FOR HACKERS TO WORK OUT THE ALGORITHM

Asymmetric 

	Symmetric encryption is fast but not very secure.

	The opposite is true of Asymmetric : SLOW but ROCK SOLID SECURITY  (see Verisign certificate valid
										for 30 years)

	PKI = Public Key Infrastructure = a COMPANY WHICH USES CERTIFICATES

		
	Strength comes from use of 2 keys 

		1) Public
		2) Private

				Either key can ENCRYPT but the OTHER must DECRYPT			
	

	RSA is encryption algorithm      (( memory : think RSA country South Africa!!!))

	CA Certificate Authority : ROOT SERVER
		
		Issue Certificate

		Revoke Certificate

			CRL Certificate Revocation list : of revoked (bad) certificates

			OCSP is an online website to check if ONE CERTIFICATE IS VALID			

		Recovery Agent ==> Admin who can recover other people's keys

	
Session Keys

	HTTPS uses

		1) PKI certificate from the server (set up session)  VERY STRONG BUT SLOW

		2) 10 minute fast SYMMETRIC 'SESSION' KEY ==> HACKERS CAN'T HACK.  RENEW EVERY 10 MINUTE

```

Authentication

```
Something you

			know		user/password
			are		biometric
			have		smart card / ATM card
			
Somewhere you 		are		Geolocation by IP

Multifactor		user/pass then text code to phone

				OTP 	one time pad/password

GPUPDATE /force		push out new settings

GPRESULT /R		view group policy setttings

	RSOP 		 	same but GUI view

```

Active Directory Users

```
OU Organisational Unit

```

Security Continued

```
Shoulder Surfing		Watching others type ... get password etc

	Privacy filter		Put over screen eg in accounts dept to keep data private

Dumpster Diving

	Go through trash for confidential info

Man trap			

Man in the middle

	client ============router============bad router=================router================server
					    eavesdrop = listen
					    ?? alter traffic ??

Session Hijack

	client============================bad router=========================================server

				          bad router=========================================server

				server tricked into thinking it's talking to client but not any more

Session Replay

	bad router copies all traffic then plays it back later to server.

		((stop with timestamp))

```

Physical Security

```
RFID : electronic swipe

Laptop : cable lock (to desk)

```

Unit 6

Data Security

```
Classification of data (USA)

	TOP SECRET => SECRET => CONFIDENTIAL => CLASSIFIED => UNCLASSIFIED

PII Personally Identifiable Info

	eg NINO, DOB

PHI Personal Health Info

Software license

	EULA			End User Licence Agreement

	RETAIL LICENCE		one license; one key

	VOLUME LICENSING	one key for whole company

	Open Source		must agree that rights of software are kept open source

	WINDOWS

		SLMGR		Software Licensing Manager

				/dli	display license info

				/dlv			..verbose

				/ato	activate online

```

Security Policies

```
AUP Acceptable Use Policy

NIST National Institute for Standards/Tech  (USA)

IRP Incident Response Policy

	Steps to take if detect breach/attack

		Who to notify...
		
		PREPARE (HARDEN) SYSTEMS
		DETECT ATTACK		==> 		FIRST RESPONDERS 
		ANALYSE ATTACK
		CONTAIN ATTACK
		ERADICATE ATTACK
		RECOVER FROM ATTACK
		REFLECTIONS, FINDINGS, IMPROVEMENTS ETC

	
FORENSICS

	Science of analysing crime scene

	Data : VOLATILITY (How quickly will the data corrupt)

		VOLATILE					((DATA DISAPPEAR WHEN TURN PC OFF)
					RAM	
					CACHE
					TEMP FILES  

		NON-VOLATILE					((PERMANENT))
					HARD DRIVE
					USB

		
	Preserve information

		LIVE ==> copy contents of RAM etc ((from LIVE PC)

		HARD DRIVE ==> 
				1) PUT 'WRITE BLOCKER' ON DRIVE SO DATA CAN'T BE CHANGED
				2) IMAGE DRIVE + SIGN IMAGE (VALID COURT OF LAW)

	Chain of custody

		Court of law : important to verify data not tampered with

			SIGNED DOCUMENT WITH REPONSIBILITY FOR EVIDENCE SIGNED FOR AT ALL TIMES		

```

ENCRYPTION

```
REVISION

	4 MAIN TYPES OF ENCRYPTION

	SYMMETRIC 	FAST, USE IN WIFI, NOT SECURE, ONE KEY DOES ENCRYPT/DECRYPT		AES

		SESSION ENCRYPTION	lasts 10 minutes  (create https:// session)

	ASYMMETRIC	2 KEYS, PRIVATE/PUBLIC, SLOW BUT VERY SECURE				RSA

	HASHING		ONE-WAY ENCRYPTION

			MYTEXTHERE		75a637564ed55de81543b2035670e7a307fa3ccb

			Note : cannot reverse engineer from hash backwards

				Bad guys : instead collect password/hash pairs and store them in 
				RAINBOW TABLE of hashes

	
EFS ENCRYPTION

	CREATED BY NTFS

	ENCRYPT INDIVIDUAL FOLDER/FILE

	Note : Personal User does have ability to import/export certificates  (Just go Control Panel, Users,
		<<find user>>  ==> manage certificates

BITLOCKER

	FULL DRIVE ENCRYPTION

	|...plain text 100mb.....|..........rest is encryupted..................|

	TPM 1.2 chip does the encryption

		((HSM HARDWARE SECURITY MODULE ==> JOB IS TO STORE KEYS))

	Versions : Win7 Enterprise
	           Win10Pro+

	Turn On???

		Win7/10  ==> do nothing!!! Already working!!!

		1) 		TPM.MSC		SHOW HARDWARE STATUS OF BITLOCKER!!!

		2) 		Group Policy : turn on ((REQUIRE ADDITIONAL AUTHENTICATION AT STARTUP))

	IF TPM NOT PRESENT, CAN STILL ENABLE BITLOCKER !!!

		Instead of TPM chip, can use your own USB stick to store keys

	Bitlocker-to-go: can encrypt USB stick

```

Data Policies

```
Cookie Law

Data Protection Act

DLP Data Loss/Leak Prevention

	Microsoft Office : DRM Digital Rights Management

Data Disposal / Sanitation

	DE-GAUSS HARD DRIVE : Put through strong magnetic field to destroy data

	Multi-pass / Multi-wipe

		Overwrite disk with random 1/0 data : repeat 7 times
		
Low level (factory) format

Physical Destruction : shredder

```

Module 5 : Operating Systems/Mobile

Unit 2 : Apple

```
iOS	mobile

OSX	desktop

		Yosemite  ,  El Capitan,   Lion ,    Sierra, High Sierra ...

	System Preference ==> Control Panel

	Dock : Toolbar

	Finder : Windows Explorer

	Spotlight : Instant search : Command + Spacebar

	Windows : dedicated 'Windows' button

		MAC : Command button is equivalent  (control button also, alt button also)

	Trackpad gestures : 2 or 3 fingers at a time : swipe / pinch for different effects

	File structure : similar to LINUX 

		UNIX FILE STRUCTURE  (PAID OS)		(LINUX FREE BUT SIMILAR)	

	
	iCloud

	Time Machine Backup

	Keychain : store passwords

	Boot Camp : Run dual boot with Windows

		Parallels : run virtual machines : Windows integrate into Apple (open with....)

		VMWare

	Airdrop : drop files to computers nearby (and phone)

	Troubleshoot

		Activity Monitor		Task Manager

		top				show processes

		Terminal			Command line

		Console				Event Viewer

		Safe Mode			SHIFT + RESTART

		Reset RAM			Restart +  COMMAND+SHIFT+P+R

		Force Quit			same as Task Manager : Terminate Process

		Kernel Panic			Mac crash : same as BSOD on Windows

```

Android / IOS / Mobile

```
Closed source : Paid
	
	Windows
	UNIX (MAC)

Open source : free
		
	Android
	Linux

SDK Software Development Kit

	Store : Apple $99 /Android $25 /Windows free : must register as developer

Android : 4 KitKat / 5 Lollipop /6 Marshmallow 

	APK = package which we upload

Windows
	Win10 mobile NO LONGER EXISTS!!! (NOT IN EXAM!)

	((Bought NOKIA who were no 1 in world but failed to move to touchscreen))

	UWP Universal Windows Platform : file type

```

Mobile features

```
accelerometer

	change in x,y,z direction speed		

gyroscope			

	orient up/down 

CDMA mobile channel

	GSM

	HSPA (HSDPA)   High speed (downlink) packet access

IMEI 	#06#  	

WEA wireless emergency alerts IN CASE OF NATIONAL (USA) DISASTER

WIFI calling ==> 3G provider permits calling over your local WIFI (useful in big buildings where 3G is zero)

Revision on distance

	NFC		5cm
	IR		1m
	BLUETOOTH	10m
	WIFI		30m 
	WIFI 'AC'	100m	
	ETHERNET	100m
		REPEATER	200m
	
	USB		5m
	
Email
	S/MIME		encrypt email
	PGP		pretty good privacy

Apple sync

	via ITunes

```

Mobile Security

```
Remote lock & remote wipe

MDM Mobile Device Management

	Azure + 
	Office 365 + 
	Intune

			==> YOU CAN REMOTELY MANAGE COMPANY PHONES!!! PUSH DATA, SECURITY POLICIES

BYOD
CYOD  

```

Unit 5 : Environmental & Safety

```
Electrical Safety

	PAT Test	Portable Applicance Test 	Annual test : verify equipment good order (aim : stop
							fires)

	Voltage		PUSH ON CIRCUIT			VOLTS

	Current		FLOW OF ELECTRONS		AMPS

	Power		ENERGY DELIVERED		WATTS    POWER = V X I

	V = IR   (CURRENT X RESISTANCE)

	Open Circuit		circuit is broken; current cannot flow

	Closed Circuit		(short circuit)  ==> zero resistance; current can flow (fuse will melt)

	Fuse			3A, 5A, 13A		
	
	Trip Switch / Circuit Breaker

	Surge Suppressor

	Grounding / Earthing equipment

	Anti-static 
			MAT			components
			WRIST STRAP		match human voltage to component so no 'static' jumps
			BAG			eg graphics/network card

	
High Voltage Safety

	A+		
		Old CRT monitor		600v
		Laser Printer		600v
		PSU Power supply	Don't open/repair!!!

	Radiation

		Electric motor
		Fluorescent light
		Microwave oven
				===> GENERATE EMI RADIATION

Component Lifetime

	MTBF  Mean Time Between Failures - average time between device failures

Computers affected by
	
	Dust			==> vacuum (remove air)   
	Temp
	Humidity		% water in air

	HVAC 			Heating, Ventilation, Air con

	dirty eg monitor	LINT FREE CLOTH  ==> does not split out into individual threads easily

				Alcohol wipes  : quickly evaporate	

	Power supplies which don't generate consistent power

		LINE CONDITIONER will smooth the power

Disposal and the environment

	Hazardous chemicals : handling etc		MSDS   Material Safety Data Sheet

								safe use/handling/ in case of spill

```

Unit 6 : Customer Service

Linux

```
Distro	= distribution = 'flavour'

	distrowatch

Red Hat ==> BUSINESS COMMUNITY (PAID SUPPORT)

Ubuntu

Suse

```

Shell

```
Shell = command line 

	BASH SHELL

```

Windows vs Linux!!!

```
Free ==> attracted much of open source community

	Crowdsourcing ==> great features tend to get developed	

	mySQL : free alternative

Windows
	==> Structured methodolgy and business strategy 
	Office 365
	Azure cloud
	SQL

Technically : supercomputers run LINUX
	      more than HALF websites run LINUX
	      smart devices : ANDROID
	      phones : 50/50 IOS/Android
	      PCs mostly Win10 / some MAC

Cloud
	Traditionally you run a SERVER which hosts SERVICES/APPLICATIONS

	Today : cloud

		DOCKER / CONTAINERS

			mini-operating system 'closed' environments

				RUN WITHIN THIS YOUR OWN APPLICATION/SERVICE	

```

Linux environment

```
ls   list items

	-lar		show permissions

			d=directory

			three lots of permissions

			rwx  rwx  r-x

				read  write  execute (run app)

Case sensitive

	Create text file

		nano  

		vi			Save : Press ESCAPE then (shift with colon, type q  or w or wq)
							q=quit
							w=save

				
File Structure

	Everything is a child of ROOT

		ROOT is called '/'

			GO TO ROOT   CD /

			GO TO YOUR HOME DRIVE   CD <<username>>		

			cd /
			cd home
			cd phil
			cd Documents

			cd /home/phil/Documents

Hard drives

	/dev/sda
	/dev/sdb  etc

	cd /
	cd dev
	ls

Filing System

	EXT2 / 3 / 4    EXT4 is most recent

	defrag not required

	fsck		file system check
	fdisk		format 
	df		disk free (space)
	dd		clone (image) a drive

			if...input file
			of...output file

	
Files
	cp 	copy
	mv	move
	rm	remove

	
		cd /home/phil/Documents
		cp myFile.txt   myCopyFile.txt

Where Am I

	pwd PRINT WORKING DIRECTORY

		

Search

	grep		allows search

		grep -I "search-term"  /folder

Scheduling

	crontab		schedule items

Permissions

	r	read		4
	w	write		2
	x	execute		1

	rw			4+2=6

		either put rw   or  number '6'

chown		change owner

chgrp		change group

List of USERS

	/etc/passwd

			
Need admin rights???

	Start command with SUDO   (Super User DO!!!)

Change your password??

	passwd  <<user>>

Update software

	sudo apt get  

			yum

	sudo apt-get update
	sudo apt-get upgrade

```

Configure Linux

```
ifconfig  	ip
	
ps		applications

	top	processes

BOOT LINUX

	LILO		Linux Loader

	GRUB		

```

Random Terms

MAC Address	unique address assigned to NETWORK CARD

```
	MAC address = Physical Address = Hardware address
	MAC : 48 bits long
	((First half : manufacturer))  				14-B3-1F   - 00-C7-FA

```

IP Address

```
	32 bits long (IPv4)
	128 bits long (IPV6)

```

Logging in
1)	domain\user	susan\administrator
2)	[user@domain.com](mailto:user@domain.com)	administrator@susan.local

spectre meltdown