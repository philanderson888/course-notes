# MTA Server Notes Flow 1

MTA 98-365 Server Admin Fundamentals

830 start
1245pm lunch - 1pm
745pm
=====> self study
Pa$$w0rd

1. Create [MeasureUp.com](http://measureup.com/) account (Mock Exams)
2. Create [Certiport.com](http://certiport.com/) account (Real Exam) then also Register with the MTA
and copy all details across
3. Map share to \\trainer\share UNC Path

Exam strategy for success this week

If you are going to pass one exam this week it will be MTA Security
Why? Security exam unchanged since 2012 + measure ups good + end of week
max time to understand material
Server and Networking : April : Upgraded BOTH EXAMS. So HARDER!!!
Books : Server : Unchanged
Networking & Security : upgraded
Server today : Teaching : pushing for time + add in extra NanoServer +
Storage Spaces + Containers
Advice for week
Proposal : today 315pm server exam IF CONFIDENT
Thursday 4pm networking exam or server
Saturday 3pm security and 145pm sit server/networking
Be aware!!! Measureups not yet in sync

Ice Breaker : Random Server Knowledge

Application	GUI based, runs BY USER AFTER LOGIN
Service	back-end, headless, runs AT STARTUP WHEN NO USER LOGGED IN
Process	Running exe (service or application) : allocate a PROCESS ID
Thread	Set of instructions sent FROM A PROCESS INTO THE CPU FOR EXECUTION

Services.msc

Script	Text commands
.bat	batch, older
.ps1	powershell

Common Windows Services
DNS	Domain Name System/Service Map Friendly name eg [facebook.com](http://facebook.com/) to IP
DHCP	Allocate IP (Dynamic IP)
Active Directory : Create DOMAIN to CENTRALLY MANAGE : users, computers, printers, groups, permissions, GROUP POLICY
IPCONFIG
IPCONFIG /ALL
IPCONFIG /RELEASE
/RENEW request new IP
/DISPLAYDNS
/FLUSHDNS
Group Policy : create GPO file and APPLY IT TO A CONTAINER called
OU	Organisational Unit : Active Directory Container
LDAP	Free, open source protocol (Lightweight Directory Access Protocol)
((used to build active directory structure))
CN	common name
OU
DC	domain component
CN="Jamie Fozard",OU=Employees,DC=mydomain,DC=com

Server diagrams
1) CPU
2) Motherboard

CPU components
ALU	Arithmetic Logic Unit	==> Integer (whole number)
FPU	Floating Point Unit	==> Decimal
Register Data is transformed
Bus	Carries data
System bus = FSB Front Side bus = main bus of computer
Cache	Fast memory in CPU
L1 in cpu
L2 outside (larger)
L3 shared amongst multiple cores

Motherboard Components

```
CPU	brains of computer; central processing
	Multi-core eg 8 CPUs
RAM	Random Access Memory
Graphics
	PCIe	new 			PCIx16
	AGP	old (brown slot)
Chipset (AMD or Intel)
	Northbridge : feeds CPU/RAM/Graphics   (fast)
	Southbridge : feeds all other components
BIOS	ROM fixed instructions for motherboard
CMOS	RAM settings eg time, temp, freq, passwords, boot order etc
STORAGE
	OLD
		IDE = PATA : 40 pin chip 							Floppy
		SCSI

	NEW			
		SATA

Audio
	3.5mm
	RCA	standard HIFI Jack
Video
	OLD
		VGA
		DVI
		S-VIDEO

	NEW
		HDMI			
		Display Port

```

Chapter 1 : Server Roles

Critical Server Roles

```
File server

	\\\\server\\share	UNC PATH

	SMB	Server Message Block : windows shares	
	CIFS	Common Internet Filing System
	NFS	Unix Sharing (Network filing system)

Web
	Windows

		IIS	Internet Information Services

			HTTP : view website (port 80)
			HTTPS : encrypted   (port 443)

			Can reach with 
				<http://127.0.0.1>
				<http://localhost>
				http://<<computername>>
				<http://172.16.18.182>

			Virtual Directory

				add in other folders

				c:\\THISFOLDER ==> add in as 
				virtual directory to our site
				<http://mysite.com/extrafolder>

			Bindings ==> Install certificate to enable
					HTTPS:// secure websites

Remote Access
	Remote Desktop : RDP : Terminal Services

		Admin ==> 2 accounts : log in and manage server

		User  ==> Virtual Desktop (VDI)  ((common 'Citrix'))

			Hot desk : no fixed seat

	VPN : encrypted use of a 'data tunnel' over internet

		1) permanent (tunnel mode) from LAN to LAN eg
			Head Office to Remote Branch

		2) temporary (transport mode) from travelling
			laptop dialing in to head office

			
		4 VPN types

			PPTP
			L2TP	over IPSEC
			SSTP	over HTTPS  (SSL / TLS)
			IKEV2	over IPSEC

```

Server Hardware

```
CPU

	X86		32 Bit
	X64 = AMD64	64 Bit

	Speed not in raw MHz		3.4Ghz

		FLOPS	Floating point operations/sec
		MIPS	Millions of instructions / sec

Storage

	DAS	Physical attached (Direct Attached Storage)
		OLD : IDE/PATA/SCSI
		NEW : SATA	

	NAS	Network Attached Storage (reach device over Ethernet
		with RJ45 connection)	£200

		SOHO : small office, home office

	SAN	Storage Area Network

		Client  ==>     Front End  ====>	Back
				Server			End
				Cluster			Database
				Pair			(SAN)

					<<=================>>
					SAN connection
					1) Fibre Channel 2) iSCSI

	RAID
		RAID 0	2+ drives; NO TOLERANCE IN CASE OF FAILURE!!
			FAST FAST FAST  (good for throughput server
			eg web server)
		RAID 1	Mirror		2 drives, copy of each other
		RAID 5	Striping with Parity : 3 drives min	
					1 drive fails ==> recover
					Cost is only 1/n eg 1/10
		RAID 6	Double RAID 5 : 4+ drives; lose up to 2 					drives

		RAID 10 = RAID 1 AND RAID 0 combined

		Hot Spare : connected, live but not active.  If
			one drive failed : RAID array can detect
			and auto-bring in new drive and release
			old drive

Motherboard

	BIOS		FIXED ROM CHIP : Motherboard Mini-OS
	CMOS		RAM CHIP : time date etc
	Firmware	Fixed instructions on BIOS ROM Chip	
	EEPROM		Electronically Programmable and Erasable ROM	
				(can overwrite)
	Flash		Overwrite BIOS ROM chip with new instructions

	ROM		
	RAM
		Volatile 	Power off : data lost
			((Hard drive = non-volatile)

Power
	PSU	Power supply unit
		Server : dual power
	AC	Alternating Current : from the Grid
	DC	Direct Current
	230V	UK
	110V	USA/Europe
		12/5/3.3 V  INSIDE COMPUTER
	Volts	Electronic 'push' on a circuit
	Current	Flow of electrons round a circuit	
	UPS	Uninterruptible Power Supply : 30 minutes backup 
			power

Ports
	OLD
		PS/2		old keyboard/mouse
		Serial		9 pin
		Parallel	pink 25 pin : printers
		
		
Virtual
	HyperV	Microsoft, free
	ESX-i	VMWare, paid

Rack Servers
	1U
	2U
	KVM switch	: use in server rack : multiple servers
			connect to one keyboard/video 

```

Server Roles

```
AD		Manage users/computers : Active Directory

Certificate	Create PKI environment for secure electronic 
			transactions ((PKI = Public Key 				Infrastructure)

ADFS		Federation Services : companies work together as a				'Federation'  ((users from one company can log into
		another company))  ((SSO = single sign on from one
		company to next))

AD LDS		Lightweight Directory Services : store data and 
		replicate it around your domain or forest

AD RMS		Rights Management : Restrict who can email/print/
			save Office 365 documents

WDS		Windows Deployment Services ==> STORE WINDOWS IMAGES
			ISO	DVD
			WIM	Windows Image ==> 
			
				boot.wim	WinPE :
						Preinstallation
						Environment : screens
						when installing
						windows

				install.wim	Actual Windows 							install

				custom.wim	
		WDS : create share, deploy WIM images from this share
		
		Client : PXE Network Boot (hit F12 key to trigger)

WSUS		Windows Server Update Services
			Download and TEST UPDATES before ROLLOUT

```

Other features

```
Bitlocker	

	Chip required : TPM 1.2  : store encryption keys				Full drive encryption but MUST HAVE 100MB UNENCRYPTED TO 
			BOOT COMPUTER

	|--100mb plain text---|----rest bitlocker, secure--------|			<< 'sign boot files' >>

	     SECURE BOOT	

Cluster		
	Pair of computers to provide REDUNDANCY : if one fails the
	other takes over
		Active-active : both live
		Active-passive : one live
		
NLB Network Load Balancing
						<<server farm>>

					---->	ServerA
	client	-----	NLB : shares	---->	ServerB
			out requests	---->	ServerC
			equally

DNS	maps name to IP   name is full name (FQDN ie 							server.domain.com)
WINS	map simple 'hostname' to IP  myPC <==> 1.2.3.4
	hosts file
	lmhosts file

		C:\\Windows\\System32\\drivers\\etc

Server core : COMMAND LINE ONLY (does have notepad!!)
	shutdown -s                -t  3600     (seconds)
		 -r  restart     
	netdom	/renamecomputer
		also join domain
	netsh   set IP 

		netsh interface ip set address
			name="ethernet" source=static
			address=10.1.1.2 mask=255.255.255.0
		set DNS server IP
			

Requirements
	1.4Ghz, 512MB, 32GB 	2008R2
	1.4Ghz, 512MB, 32GB	2016  

	Note : 512MB  for core
	       2GB    for desktop servers with GUI

Image

	SID	Unique 'security ID' for all objects

	Sysprep	PREPARE COMPUTER FOR IMAGING

		/generalise	remove SIDS from computer
		/oobe		out of box experience 
					
		

Answer File

	Deployment ==> AUTO SETUP OF COMPUTERS

		Raw ISO (default install) 		
			+ Answer File ==> answer all questions
		SIM : System Image Manager ==> CREATE ANSWER FILES					CALLED 

				autounattend.xml	
		

Licensing

	OEM	Original Equipment Manufacture : licence is tied
			to the hardware
	Retail	Shop purchase : you own the licence, transferable

	Volume	One key for many computers

		KMS Key management Server
			Larger companies : run your own server
			to manage licences

		MAK Buy one key with x activations in advance eg 1000
			computers

	SLMGR
		/ato	activate online
		/ipk	install product key
		/dli	display license info
		/dlv	                verbose
		/rearm	extend a trial

	CAL Client Access Licence

		grant access to a server eg Remote Desktop 
			(Terminal Services)
			((MSTSC))

```

Chapter 2

```
UAC	User Account Control

	Admin prompt : yes/no
	Credential prompt

	Let you know an install is pending

Remote Desktop		1 person : log in

	Remote Assistance	2 people : one at each end

Network tools

	NAT  Network Address Translation

		Permit PRIVATE IP ADDRESSES to reach PUBLIC INTERNET

			172.16.18.182  to reach INTERNET
			172.16.y.z-172.31.y.z
			10.x.y.z
			192.168.y.z			
	
	Proxy

		Client Browser
			===========PROXY=========>INTERNET

		Proxy : used to filter traffic and monitor employee
			web activity, and cache (store) web content,
			filter eg website block/antivirus

```

Drivers

```
PNP		Plug and play : USB
Hot swap	No reboot required

Signed Driver	Verify 1) Publisher 2) Files not corrput/changed

Device Manager	view ALL HARDWARE

	Roll back	Remove an update to go back to original 
			driver

	IRQ	Interrupt Request ==> unique channel given to 
			every I/O device

	I/O	Memory allocated to provide Input/Output 			communications for this device

	Memory	RAM in use for this device : block of addresses

Disabled ==> Black down arrow

.inf	information package when installing (lists all files)
.cat	certificate to validate 
.sys	driver itself

```

Windows Tools

```
MMC	Microsoft Management Console : shell to install tools

	snap-in		tool to add

	author mode	read/write
	user mode	read only

Computer Management	shell for other tools

Event Viewer : carries through the main logs from WinXP

	System
	Security
	Application
	Forwarded Events : collect centrally from other computers

Shares
	net share				view shares
	net share myshare=c:\\myfolder 		create share

Firewall

MDSched RAM diagnostic	check RAM for errors

RSAT Remote Server Admin Tools : Win10 log in to Active Directory
				
Command line
	cd 	change directory
	cd ..   go up one level
	cd\\	go to root
	md 	make directory
	notepad myfile.txt 	create file

Registry - central database for windows information

	REGEDIT

	Hive
	
	HKEY_LOCAL_MACHINE		hardware on machine
	HKEY_USERS			all users
	HKEY_CURRENT_USER		logged on now
	HKEY_CURRENT_CONFIG		unsaved changes to user
					profile
	HKEY_CLASSES_ROOT		known file extensions

	.reg = backup file

Running scripts

	.bat
	.cmd
	.ps1
	cscript scrgedit.wsf  /AU      /4 = windows updates on
				       /1 =         updates off

```

Chapter 3 : Storage

```
DAS	Direct eg USB, SATA, IDE (old)

NAS	Network over RJ45 

	Smaller SOHO offices 

SAN	

	SERVERA____________SWITCH (10GBPS)__________SAN BACK-END
	SERVERB					    DATABASE

	(cluster)

	Network Card ==> HBA host bus adapter

	Fibre Channel Switch 

	LUN Logical Unit Number  :  unique name given to each 
				    drive visible from SAN

		((think Windows : volume label eg C:\\ volume))

Two types of SAN connections

	1. Fibre Channel

		Expensive but DEDICATED HARDWARE; GOOD DISTANCE

		FC-SW  switched : main type

	2. iSCSI

		Free; over existing ETHERNET (as name suggests, 
		passing old SCSI traffic over Ethernet)

	Both types

		WWN	World Wide Name 	((think MAC address))
		iSNS 	discover SANs on your network
			Storage Name Service : discover SANs

```

Disks

```
Partition	Just on ONE DRIVE

Volume		Can span MANY DRIVES (or just one!)

Simple volume	on just one drive

Spanned		across more than one drive

RAID		access (RAID 0,1,5 etc) across multiple drives
		
MBR	Master boot record
	Original way of booting computer
	Max 4 partitions 
	2TB partition limit

GPT	GUID Partition Table : more robust way of dealing with
		files (newer).  No partition limits

DISKPART
	LIST DISK
	SELECT DISK ..
	LIST PARTITION
	CREATE PARTITION PRIMARY SIZE=500
	CLEAN

Filing Systems
	FAT = FAT16

	FAT32
		No permission / security
		Most USB/SDCARD today
		32GB partition limit
		4GB file limit

	ExFAT = 64 bit FAT

	NTFS
		Permissions	Full Control, Modify, Read, Execute
		Encryption
		Compression
	NFS	Unix Networking Filing System
	CDFS	CD
	UDF	DVD
	EXT3/4	Linux EXT3 or EXT4

Lab ==> RAID & DISKPART

```

Chapter 4

```
ITIL IT Infrastructure Library

	Formal structure for IT support : certify companies
	that they have correct infrastructure to support a high	
	level of IT coherence

	Continual Service Improvement : always feeding back from
		what went well/poorly to improve things

Technet
	Offical Microsoft Library

	docs.microsoft.com	

Troubleshooting

	1. Identify issue
	2. Check config (eg server)
	3. Propose fixes
	4. Fix
	5. Test
	6. Document

```

Troubleshooting Tools

```
MSINFO32	System Info : overview of PC

MSCONFIG	Startup settings (boot)

			Applications which auto-start : list now
			in Task Manager

Task Manager		list processes : CPU + RAM + NETWORK

Resource Monitor	upgrade to Task Manager : includes DISK

Performance Monitor	detailed graphs

	DCS Data Collector Set	==> output data as a FILE and 
			play it back later

Page File = Swap file = Virtual Memory

	Send data from RAM to temporarily store on hard disk,
	when RAM is full

```

Fault tolerance

```
99.999% uptime '5 nines'

Disk
	RAID 1	Mirror
	RAID 5	Stripe with parity
			((RAID 0 doesn't provide tolerance anyway))
Power
	Dual power
	UPS Battery
	Generator

Network card

	NIC Teaming : pair up 2 adapters and treat as one stream
	of traffic

Servers
	Cluster : One server 'fails' over to another server which
		begins to work

Backup

	System State	Restore CORE OPERATING SYSTEM FILES
			(not data!)
				
	Online		
	Nearline
	Offline

	Full = Normal = Back up everything

	Archive BIT : every file has one
		0 ==> no changes, so don't need to back up
		1 ==> changes so should back this file up
	
	Incremental	Daily : back up files which have changed
			and RESET BIT TO ZERO		

			Restore : NEED FULL + EVERY DAILY

	Differential	Daily : back up all files changed 
			cumulatively since last backup.  DON'T RESET
			BIT.

			Restore : NEED FULL + LAST DIFFERENTIAL

	Grandfather-father-son : 20 tapes to cover 1 full year

		DAILY1 	D2	D3	D4	WEEK1
		DAILY1 	D2	D3	D4	WEEK2
						WEEK3
						WEEK4
							MONTH1
							MONTH2
							     
Shadow Copies

	We can turn on a SERVICE called VSS Volume Shadow Copy

	Turn on FOR FULL VOLUME EG F:\\ DRIVE

	After turned on users will be able to recover PREVIOUS
		VERSIONS OF FILES

	Turn on in SERVER => COMPUTER MANAGEMENT => SHARING

		RT CLICK ==> SHADOW COPIES

Windows Recovery

	WinPE	Preinstallation Environment : INSTALL WINDOWS (DVD)

	WinRE	Recovery Environment : DVD or from Windows

		DVD ==> R = REPAIR COMPUTER

		WIN10 ==> SHIFT + REBOOT   (SAME AS OLD F8 MENU)

		Can ...

			System restore
			Recover from BACKUP OR IMAGE
			Run command line utilities

				(Windows is OFFLINE so run
				ANTIVIRUS SCAN ALSO)

		Tools
			CHKDSK 	/f  /r   c:
		
				/f fix 
				/r slow : recover bad sectors

			BOOTREC /FIXMBR  OR /FIXBOOT   fix boot error

			SFC /SCANNOW    System File Checker

			

	F8 menu (old)

		SAFE MODE		NO DRIVERS EXCEPT 
					KEYBOARD/MOUSE/MIN VIDEO
		LOW GRAPHICS MODE	PROBLEM WITH GRAPHICS
		DISABLE DRIVER REINFORCEMENT
		LAST KNOWN GOOD RECOVERY	RECOVER BACK TO 
					LAST TIME YOU LOGGED ON 
					PROPERLY

BOOT ISSUES

	PC/SERVER BOOTS UP

	1) POST TEST : POWER ON SELF TEST : CHECKS ALL COMPONENTS
		AND 'BEEPS' AT YOU WITH A BEEP CODE

		NORMAL RAM IS FAULTY!!!

	2) WINDOWS LOAD

		A) SECURE BOOT : HASH BOOT FILES TO ENSURE THEY 
				ARE NOT CORRUPT

		B) FILES
			NTLRD   NT LOADER
			NTOSKRNL.EXE		KERNEL (CORE OF 
						WINDOWS)
			HAL.DLL			HARDWARE ARCHITECTURE
			
		C) BOOT MANAGER
			XP	BOOT.INI
			VISTA	BOOTMGR
			WIN7	BCDEDIT : BOOT CONFIGURATION DATA
			

				BCDEDIT /ENUM WILL SHOW YOUR BOOT
							DATA

			GRUB 	LINUX BOOT MANAGER

```

Chapter 5

DNS

```
DNS has several types of record

A		ADDRESS = Standard lookup (PC01 ==> 1.2.3.4)
AAAA		IPV6 ADDRESS  (PC01 ==> FE80:1234:5678::FFFF)
MX		EMAIL (MAIL EXCHANGER) ==> TO EXCHANGE SERVER
CNAME		WEBSITE TRAFFIC TO WEBSERVER (ALIAS NAME WWW==>
						WEB SERVER)
SRV		LOCATE ACTIVE DIRECTORY SERVICES
PTR		REVERSE LOOKUP (POINTER)    (1.2.3.4==>PC01)		
					((SECURITY))
SOA		MASTER COPY (START OF AUTHORITY)
NS		READ COPY OF DNS (NAME SERVER)

WINS is OLD DNS (Hostname only)

GlobalName 	SERVER22	recognise this in ALL DOMAINS

NSLOOKUP	DNS lookup on domain (find dns server ip)

```

Active Directory

```
LDAP		CN=PHIL,OU=OU,DC=MYDOMAIN,DC=COM  underlying 			structure
		Port 389

Kerberos	Security Protocol
		
SSO		Single Sign On

Domain		Security boundary

	Trust	Transitive Trust : A trusts B, B trusts C so 
				   A now trusts C by implication

Site		Physical area : geographical location eg Birmingham

	Subnet	IP Range for Birmingham eg 10.20.30.0 network

ADAC AD Admin Center	

Group Policy	push settings to computers
		GPUPDATE /FORCE 	push changes now

Client
Domain Controller	runs ACTIVE DIRECTORY
Member Server		eg SQL server, member of domain,  
`			not AD Domain Controller

Global Catalog		Quick search
FSMO Roles 		Unique roles eg PDC Emulator password reset

SID		SecurityID		PC ID
GUID		128 bit Global ID	Domain ID

Delegating Control of an OU
		1) Right click on OU : add user
		2) User PC : install 'RSAT REMOTE SERVER ADMIN
			TOOLS'  ==> partial permission over
			active directory

```

Users
Local
Profile at c:\users
SAM	LOCAL LOGIN DATABASE

```
Domain		
	Roaming profile		profile on server : copy down
				to any computer
	Folder redirection	all data stays on server
	NTUSER.DAT		REGISTRY SETTINGS PER USER
	Mandatory profile	read only user : changes not saved
				((change NTUSER.DAT to NTUSER.MAN))

```

Groups

```
Global 		valid in THIS DOMAIN

Universal	valid in ALL DOMAINS

Security	use with PERMISSIONS

Distribution	use for EMAIL ONLY

```

Group Policy

```
Order of applying (priority)

Local			FIRST  (GPEDIT.MSC : view local policy)

Site			SECOND

Domain			THIRD

OU			FOURTH

	Sub-OU		FIFTH

			LAST POLICY APPLIED WINS

```

Chapter 6 : Permissions

```
RIGHT		ON MACHINE EG right to log in, shut down, change
		time etc 

PERMISSION	NTFS permission on folder eg Full control

```

NTFS

```
ACL	List of users 				ACCESS CONTROL LIST
ACE	Entry (fine permission) given to a user		       ENTRY

Inherited permission : greyed out
Explicit permission  : we can set
	DENY beats ALLOW!!!
	but EXPLICIT always beats INHERITED (even beats inherited
							DENY)

Copy vs Move

	C:\\ to C:\\  	MOVING IN SAME VOLUME : KEEP ALL PERMISSIONS

	C:\\ to D:\\	MOVE TO DIFFERENT VOLUME : LOSE
			PERMISSIONS AND TAKE ON NEW PARENT PERMISSION

	COPY		Always lose permissions : take on new
			parent permission

Owner = Creator of a file
	
	Change = take ownership

Adding permissions

	NTFS ONLY	READ + FULL CONTROL  ==> FULL CONTROL

		BEST PERMISSION WINS

	NTFS AND SHARE	: MOST RESTRICTIVE WINS

		NTFS READ
		SHARE FULL CONTROL

			==> READ IS YOUR FINAL PERMISSION	

```

Printing

```
Driver	old : pulled from Print Server (machine where printer 			installed)
	new : Type 4 : pulled from Microsoft Update

Job	File sent to print server

	Spool folder	Print jobs stored here

Pool	

	Large company : users print to ONE PRINTER but in print 
		room may be linked to 5 printers : print to any
		one.  Pool of printers.

```

Auditing

```
Auditing ==> LOG EVENTS TO EVENT VIEWER , SECURITY LOG

Turn on auditing : 

	1) Group Policy => Security => turn on eg 'Audit Object
					Access'  (any file/folder)

	2) Folder => Security => Advanced ==> turn on auditing
			for a user/group

```

Chapter 7 : Network Services

```
FTP File transfer protocol

	OLD!
	Insecure!!
	Port 20/21
	
	Can secure with FTPS (encrypted) over HTTPS for example

Telnet : raw commands over internet

	SSH = encrypted telnet

SMTP : Send email

	
Web Server (IIS)

	'host' web sites

	Multiple sites on one server

		Virtual Directories also to add in extra paths

			c:\\myextrapath     <http://mydomain/extra>

	50 web sites hosted

		1 site crashes ==> affect other 49!

		"Application Pool" with eg 5 sites max

			limit damage if one site does go down

	Default page

		user type 'gotothissite.com'

		website ==> default file

			index.htm or .html
			Default.htm
			Default.asp

	Security
		Anonymous	anyone can visit
		Windows 	Domain users only (company)
		Certificate	
		Digest		custom login
				OAuth ==> log in with Facebook/Google
				/email login

	Domain 

		Create OWN CERTIFICATES

		Use OWN CERTIFICATES on WEBSITE to bind to site
		==> enable https:// encrypted website

			X.509			certificate
			PKCS    7 OR 10 OR 12	certificate

VPN Virtual Private Network

	Authentication

		PAP		Plain text : 100% never use!
		CHAP		NOT OK	
		MS-CHAPV2	just OK; acceptable (passwords)
		EAP-TLS		very strong, good for today	

	Split tunnel

		Working from home

			Work ==> through VPN
			Browsing ==> through your own internet 
				(not VPN)

```

2016 new features

```
Storage Spaces

	Cloud data storage : create HUGE VOLUMES

	New filing system REFS RESILIENT FILING SYSTEM

	New 'partition structure' called STORAGE SPACES

		THIN PROVISIONING : tell computer size 100TB
			but only actually have 20TB!!!   Make
			sure you provide space when needed

Containers

	REGULAR OS HAS 1 KERNEL MATCHING 1 GUI

		Inefficient use of CPU resources

	Containers 

				Multiple Mini-GUI interfaces
		1 Kernel		(containers) and developers
				can pay to use individual containers
				to host web applications

		Linux 'DOCKER' but now Windows does containers 
			also

		Use to host web applications

Nano Server

	Nano Server is a MICRO SERVER 80MB!!!!

	Hosted INSIDE CONTAINER!!! 

	Cannot be DOMAIN CONTROLLER
	
	Can be 
		DNS
		IIS WEB SERVER
		HOST WEB APPLICATION

	
	FULL SERVER : 32GB		.NET LIBRARY
	CORE SERVER : 3GB		.NET LIBRARY
	NANO SERVER : 80MB		.NET CORE (web based)

	NO GUI AT ALL
	NO COMMAND LINE AT ALL!!!
	MANAGE REMOTELY VIA EG POWERSHELL REMOTE COMMAND-LINE
						MANAGE		

```

Lab Work

1. Build Server 2016
2. Rename
3. Fix IP because default IP is faulty (APIPA 169.254.x.y) to 10.1.1.1
4. Add Role : Domain Services
5. Add Domain : <<firstname.local>>
6. Build Windows 10
7. Point DNS to server
8. Join Win10 to Domain

HyperV
Virtual Switch : Internal (this computer + talk to HOST and VMs)
External (internet)
Private (this computer : VMs only)
VHD	old Win7 virtual hard drive (Generation 1)
VHDX	Win8/10/Server2012/2016 (Generation 2) ((Secure Boot))
ISO	DVD file
Default is CORE EDITION (TEXT ONLY!)
Control-Alt-End ctl-alt-delete login
Map from VM to host
1) Rename HOST & Reboot
1) Create share on host
2) \\<<hostname>>\sharename from VM client

Random Terms
Drivers are WINDOWS SOFTWARE which enable WINDOWS OS to talk to
a piece of hardware (talk to the 'firmware' of that hardware)
Forest	Group of domains eg [Microsoft.com](http://microsoft.com/), [Outlook.com](http://outlook.com/)
Tree	Group of domains with same root name eg [East.microsoft.com](http://east.microsoft.com/),
[Asia.microsoft.com](http://asia.microsoft.com/)
Domain	Single security entity
Container	OU : folder : contain objects
Leaf	Single entity eg user/computer/printer : can't hold
anything else
FSMO role
DC = normal 'domain controller'
Multi-master : 5 domain controllers : all have equal	authority
5 unique roles : FLEXIBLE SINGLE MASTER OPERATION ROLES
SCHEMA MASTER : allowed data fields
DOMAIN NAMING MASTER : domains in forest

```
		in each domain

			PDC EMULATOR		password reset master
			RID MASTER		unique ID (SID/RID)
			INFRASTRUCTURE MASTER	track all names	

dcpromo	2008R2 : create domain  (legacy)

FQDN fully qualified domain name ==> myserver.mydomain.com (full 
							name)
Global Catalog : quick search throughout whole FOREST

RODC : Read only domain controller : use in INSECURE AREAS and	
		can't be used to push any new settings. 

NETBIOS : old 'hostname' ie 15 character max PC NAME

Group Policy
	Block		STOP INHERITING POLICY FROM ABOVE (PARENT OU)
	Enforce		OVERRIDE ANY BLOCKS (ALWAYS APPLY)

BASIC DISK	SIMPLE VOLUME EG C:\\ ON ONE DISK

DYNAMIC DISK	REQUIRED FOR ANY RAID EG RAID0/1/5 OR SPANNING 
			MULTIPLE DRIVES
```