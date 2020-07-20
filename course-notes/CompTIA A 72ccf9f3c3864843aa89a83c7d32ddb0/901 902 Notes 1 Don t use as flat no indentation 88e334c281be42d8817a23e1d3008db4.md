# 901 902 Notes 1 - Don't use as flat, no indentation)

Sunday, 3 December 2017 at 12:04

Subject: A+ Notes GTS

CompTIA A+

220-901 and 220-902

Resources
ISO
[examcompass.com](http://examcompass.com/) free A+ exams

LABS
BUILD CLIENT
BUILD SERVER
RENAME SERVER
PING CLIENT TO SERVER???
PING SERVER TO CLIENT IF TURN FIREWALL OFF???
SERVER : RUN ‘DCPROMO’ TO INSTALL ACTIVE DIRECTORY

A+ has 3 parts : Hardware, software, networking

Today - Networking

Page 309 Basic Network Concepts

node ANY DEVICE ON NETWORK EG PHONE, SERVER, VOIP PHONE

host MACHINE ON NETWORK

segment - small part of network

backbone - fastest part of network e.g. internet backbone : under atlantic ocean

router allows GLOBAL INTERNET COMMUNICATIONS VIA IP

switch allows LAN COMMUNICATION - VERY FAST EG 1GBPS OR MORE

bandwidth : speed

Mbps Mega BITS where b = little ‘b’ TRANSFER RATE

MB Mega BYTES where B = capital B STORAGE EG 1TB STORAGE DRIVE
baud rate TRANSMISSION RATE old modems 56kbps or 92kbps

1KM RUN : 1000m
KB kilo byte 1000 = 10 ^ 3
2x2x2x2x2x2x2x2 = 2^10 = 1024 not quite 1000 but call this KILO BYTE 1024 BYTES
MB mega 1 million = 10 ^ 6 = 1 000 000
GB giga 1 billion = 10 ^ 9 = 1 000 000 000
TB tera 1 trillion = 10 ^ 12
PB peta 10 ^ 15
EB exa
YB yotta

Sending Data

simplex ONE WAY ONLY LIKE TV
half duplex ONE WAY AT TIME : LIKE WALKIE TALKIE
full duplex TWO WAY : LIKE REGULAR PHONE CONVERSATION

Protocol AGREED STANDARD OR WAY OF COMMUNICATION

IP : global
Ethernet : local (LAN only)
SMTP : email
HTTP : web

Topology = LAYOUT like a MAP

Physical : what you can see/touch : exact mapping

Logical : SCHEMATIC eg TUBE MAP OF LONDON

Types of links

Point-to-point

1 WIRE

SERIAL LINE

==> PHONE LINE!!!

UNICAST ==> 1-1

BROADCAST ==> 1 TO ALL (LIKE A MEGAPHONE)

SENT TO …. .255 (ALL ONE’S)

MULTICAST ==> 1 TO GROUP OF COMPUTERS (EG IMAGE A CLASSROOM)

NETWORK TOPOLOGIES

BUS

FIRST NETWORKS

JUST ONE WIRE!!!

||=======================================||
PC
PC PC

AT END OF WIRES : TERMINATING RESISTOR TO STOP SIGNAL
BOUNCE

STAR

MOST COMMON
SWITCH AT MIDDLE : PCS CONNECT TO CENTRAL POINT

FIRST : HUB (SLOW, BROADCAST EVERYTHING)
NOW : SWITCH (FAST, FILTER BY MAC ADDRESS)

RING
TAKE A ‘BUS’ WIRE AND JOIN END-TO-END : GET RING!!!

TOKEN BASED : ONLY PC WITH TOKEN CAN TRANSMIT

NOT USED IN LAN ANY MORE : WAS CALLED IBM TOKEN RING

IEEE 802.5

MESH

FULLY JOINING SOME OR ALL ‘NODES’

EG WAN ACROSS COUNTRY

TYPES OF NETWORK

LAN
LOCAL
WAN WIDE AREA : INTERNET
MAN METROPOLITAN : CITY
CAN CAMPUS : UNIVERSITY (FIBER BETWEEN CAMPUS BUILDINGS)
PAN PERSONAL AREA NETWORK :
BLUETOOTH : PRINT TO PRINTER OVER BLUETOOTH
WIFI DIRECT : CONNECT LAPTOP TO TV DIRECTLY
VPN VIRTUAL PRIVATE NETWORK : ENCRYPTED, REMOTE CONNECTION
(DIAL FROM HOME INTO WORK)
RDP REMOTE DESKTOP : LOG IN TO SERVER OVER WEB
CITRIX GATEWAY : SIMILAR TO RDP
SSH : SECURE SHELL : MANAGE LINUX / APPLE OVER COMMAND LINE
SOHO : SMALL OFFICE, HOME OFFICE ==> SMALL BUSINESS UP TO 5/10 USERS MAX

REPEATER : CAN BE USED TO EXTEND ETHERNET FROM 100M TO 200M

|=========100M=============| repeater |=======100m=========|

Ethernet 100m max

HUBS
HUBS WERE AT CENTER OF FIRST NETWORKS

SLOW (10MBPS)
BROADCAST : INEFFICIENT

RING : CAN SHRINK RING INTO A BOX (MAU MULTISTATION ACCESS UNIT)

==> LOOKS LIKE PHYSICAL STAR BUT ELECTRONICS STILL DOING
RING : LOGICAL (ELECTRONIC) RING

7 LAYER MODEL

PHYSICAL

DATA LINK

NETWORK

TRANSPORT

SESSION

PRESENTATION

APPLICATION

PHYSICAL (1)

SENDING ELECTRONIC SIGNALS OUT
COPPER WIRING

FIBER WIRING

WIFI

THINGS YOU CAN TOUCH EG PORTS, NETWORK CARD ETC

DATA LINK : LAYER 2

LAN LAYER
ETHERNET LAYER
USE PHYSICAL = HARDWARE = MAC ADDRESS OF EACH COMPUTER

SWITCH WILL CREATE A TABLE OF

=======PORT========MAC=============
5 AA-BB-CC-DD-EE-FF
6 ……

(IPCONFIG / ALL)

NOTE : FIRST HALF OF MAC ADDRESS IS CALLED
OUI = ORGANISATION ID (NAME OF COMPANY)

EG 00-1C-42- IS OUI

GOOGLE ==> SHOW COMPANY

LAYER 2 : CARRIER OF DATA IS CALLED ‘ETHERNET’

“ETHERNET FRAME”

PREAMBLE | DESTINATION MAC | SOURCE MAC | DATA | CRC ERROR CHECK |

CRC = CYCLIC REDUNDANCY CHECK

NETWORK LAYER : LAYER 3

IP ALLOWS GLOBAL COMMUNICATION

PRIVATE IP : LAN ONLY

4 RANGES

CLASS A
10.X.Y.Z

CLASS B
172.16.X.Y - 172.31.X.Y RANGE

CLASS C
192.168.X.Y

APIPA
169.254.X.Y

(( APIPA IS USED WHEN DHCP BROKEN))

CLASSES OF IP

CLASS A
FIRST NUMBER OF IP IS IN RANGE 1-126
LOOPBACK 127.0.0.1
CLASS B
128-191
CLASS C
192-223
CLASS D
224-239 MULTICAST : SEND DATA TO GROUP OF COMPUTERS
CLASS E
240-255 MILITARY, GOV, RESEARCH

WHERE DO THESE NUMBERS COME FROM??? BINARY!!

1
1
2
1
0
3
1
1
4
1
0 0
5
1
0 1

8
1
0 0
0
16
1 0 0 0 0
32
1 0
0 0
0 0
64 1 0
0 0
0 0
0

128 1 0
0 0
0 0
0 0 CLASS A LESS THAN THIS
192 1 1 0
0 0
0 0
0 CLASS B LESS THAN THIS

224 1 1 1
0 0
0 0
0 CLASS C LESS THAN THIS

240 1 1 1
1 0
0 0
0 CLASS D LESS THAN THIS

255 1 1 1
1 1
1 1
1 CLASS E LESS THAN THIS

SUBNET MASK : SPLITS IP INTO 2 PARTS

1. 

168
10 20

255
255
255
0

^^

SPLIT

BINARY LOOKS LIKE

11111111
11111111 11111111
00000000 /24 (ONES) CIDR
^^
SPLIT

LEFT HAND SIDE : NETWORK ID ^^ RIGHT HAND SIDE : HOST ID

192
168
10 20

ALL COMPUTERS HAVE SAME NETWORK
UNIQUE HOST ID
ID

GATEWAY : ROUTE TO INTERNET
DNS : DOMAIN NAME SYSTEM : TRANSLATE NAME TO IP [BBC.CO.UK](http://bbc.co.uk/) TO 1.2.3.4

LAYER 1 : PHYSICAL
LAYER 2 : DATA LINK : LAN : ETHERNET : MAC ADDRESS : USES SWITCHES
LAYER 3 : IP / NETWORK LAYER : PRIVATE/PUBLIC IP ADDRESS CLASS A/B/C/D/E

LAYER 3 : IP ADDRESSING

```
            ALSO : IP ROUTING

```

IP ADDRESS : 1.2.3.4. UNIQUE ACROSS GLOBE

EG BBC HAS IP 212.58.244.22 AND NO-ONE ELSE HAS THIS!!!
REACH BBC : USE THAT IP!!!

ROUTING : BUILD MOST EFFICIENT ROUTES ACROSS GLOBE SO OUR TRAFFIC
GETS A TO B VERY QUICKLY

‘ROUTING PROTOCOL’ BUILD ROUTES

1. RIP
2. EIGRP
3. OSPF
4. BGP
ALSO IGP, EGP

RIP ROUTING INTERNET PROTOCOL

INTERNET FIRST BUILT (1960)

BROADCAST ALL KNOWN ROUTES TO ALL KNOWN ROUTERS
EVERY 30 SECONDS (INEFICCIENT)

LAYER 3 : IP AND ROUTING

LAYER 4 : TRANSPORT

TCP
COUNT ALL PACKETS IN AND OUT : CHECK DATA ARRIVES
SLOW

CONNECTION-ORIENTED

UDP
NO CHECKING = CONNECTION-LESS

FAST BUT NO CHECK EG INTERNET STREAMING

LAYER 5 : SESSION LAYER

DIFFERENT STREAMS OF TRAFFICE EG YOUTUBE + SKYPE + EMAIL + CHAT

LAYER 6 : PRESENTATION

A) ENCRYPT
B) COMPRESS FILES EG WAV TO MP3 OR RAW TO JPG

LAYER 7 : APPLICATION LAYER EG SKYPE, SPOTIFY, OTHER APP WHICH REQUESTS
ACCESS TO NETWORK

7 LAYER MODEL ADDING A LITTLE DETAIL (PAGE 299)

PHYSICAL LAYER

TRANSCEIVER : TRANSMIT/RECEIVE

REPEATER : BOOST SIGNAL

MODEM : DIAL UP FROM PC(DIGITAL) TO PHONE LINE (ANALOGUE)

DIGITAL : DISCRETE STEPS : EITHER 1 OR 0
ANALOGUE :
NATURE : THINGS DONE WITH WAVES
EG SOUND WAVE, CARRIER WAVE DOWN
PHONE LINE

Cabling

COPPER

TWISTED PAIR

8 wires in 4 pairs
Twisted in pairs : minimises interference

UTP Unshielded Twisted Pair

PVC cover : no protection

STP Shielded Twisted Pair

Foil protects from interference

PLENUM : FIRE RESISTANT

(( SOLID CABLE))

CAT SPEEDS

CAT 3
10 MBPS
CAT 5
100 MBPS “ FAST ETHERNET”
CAT 5E
1GBPS
CAT 6
1GBPS (10GBPS OVER 55M)
CAT 6A
10GBPS

JACK :
RJ45
ETHERNET 8 WIRES
RJ11
PHONE
4 WIRES

8 WIRES : CAN WIRE TO A STANDARD

TIA 568A
TIA 568B
==> MORE COMMON

TYPES OF CABLING

STRAIGHT THROUGH
REGULAR (PATCH, NETWORK, ETHERNET)
(CAT5 ETC)

CROSSOVER
SIMILAR DEVICE EG PC-TO-PC : CROSS CABLE
IN MIDDLE

CONSOLE CABLE
FLAT CABLE TO MANAGE A CISCO ROUTER

PATCH PANEL

PC====|———————————|========PATCH PANEL
|
WALL
SWITCH

WIRING IS HARD WIRED INTO BACK OF PATCH PANEL

CALLED ‘PUNCHDOWN BLOCK’

110 BLOCK NETWORK
66 BLOCK PHONE

CABLE TESTING
MULTIMETER : VOLTAGE/CURRENT
CABLE TEST : ALL 8 WIRES LIGHT UP
TONE GENERATOR ==> USE AUDIO TO DETECT YOUR CABLE IN
A SERVER RACK
LOOPBACK PLUG : TEST OUTPUT BY FEEDING INTO INPUT
REAL PHYSICAL ONE
PING LOOPBACK 127.0.0.1
::1

Cabling
Copper
Twisted Pair
FiberOptic

Copper

Short Distance

Problems 1) Attenuation : signal drops quickly with distance
2) Interference : other radio signals can interfere

Fiber Optic

Can go long distance

Immune to regular interference

Two types of Fiber cabling

MONOMODE

EXPENSIVE PURE LASER LIGHT : GO 40KM

MULTIMODE

CHEAP LED LIGHT : GO 2KM

FIBER CONNECTORS

SC SUBSCRIBER CONNECTOR

ST STRAIGHT TIP

MT-RJ

FC FERRULE CONNECTOR (IRON = FE = STRONG)

ANGLED APC : STRONGEST

LC LOCAL CONNECTOR

COAX CABLE

COAX IS THE STRONGEST TYPE OF CABLE AND MOST ROBUST

TWO TYPES

THICKNET ORIGINAL CABLING : 10BASE5
RG8
10=SPEED IS 10MBPS, 5=500M DISTANCE

THINNET
10BASE2 : DISTANCE 200M (185M)

TECH NAME : RG58

THIS IS REGULAR TV CABLE

COAX CONNECTOR

BNC : SET-TOP BOX TV

F-CONNECTOR (( F NOT FIBER!!!))

CABLING ETC ALL LAYER 1!!!

LAYER 1 : CABLING, HUBS, REPEATER

LAYER 2

NETWORK CARD PORT = LAYER 1
INTERNAL ETHERNET : LAYER 2

MAC ADDRESS = PHYSICAL ADDRESS

48 BITS LONG

(( IP ADDRESS 32 BITS, IPV6 ADDRESS 128 ))

BRIDGE : LAYER 2 DEVICE WHICH JOIN 2 DIFFERENT TYPES OF NETWORK
EG OPTIC TO ETHERNET

RARE!!!

(( DO HAVE WIRELESS BRIDGE - VERY COMMON))

POWER OVER ETHERNET (POE)

802.3AF
15 WATTS POWER
802.3AT
25 WATTS POWER

USEFUL FOR EG WIFI DEVICES : ONLY ONE LEAD NECESSARY

ETHERNET OVER MAINS POWER (RING CIRCUIT)

ADAPTER : PLUG INTO RING MAINS (2 OF THEM)
PLUG PC INTO EACH ADAPTER AND WILL TALK TO EACH OTHER

WIFI - 802.11

TYPE
SPEED
FREQ
MBPS

A
IGNORE

B
11 2.4

G
54 2.4

N
108+
2.4 and 5

AC
3000+
5

Notes : B,G,N Compatible on 2.4 Freq (work at speed
of slowest device)
WIFI ’N’ does both frequencies
WIFI ’N’ variable speed depending on number of antennae
MIMO up to 8 antennae
MIMO = Multiple Input, Multiple Output

Wireless Encryption

SSID = NAME OF ROUTER

WEP
old, hacked ** wrong answer **

WPA
encrypt with TKIP : with Vista

WPA2
encrypt with AES : current, good,
strong encryption
** good answer **

WPA2 Personal

regular WIFI (one wifi key)

WPA2 Enterprise
Log in to WIFI via regular Windows login
(Your personal Active Directory login)
==> easy to disable

Wireless Modes

Ad-Hoc Mode

2 laptops talk directly via WIFI

Infrastructure Mode

Regular WIFI : connect via Access Point

SSID : connect to

Wireless Channels

Can check and change your channel

1,6,11

WPS one-touch setup

WIFI protected setup is 1-touch WIFI setup for non-IT people

Interference
WIFI is interfered from 1) Microwave 2) Fluorescent Lights
3) Motor

Ports and Protocols

IP : can’t reach directly.

Must go through an approved ‘channel’ = PORT

65536 ports on each IP!!!

IP:PORT = SOCKET 1.2.3.4:8080

Common Ports

FTP file transfer 20/21
TELNET when internet invented : use command line
to control remote computers.
PLAIN TEXT : NOT SECURE
PORT 23
SSH secure shell : PORT 22 : encrypted TELNET
DNS 53 maps name to IP
DHCP give IP - PORT 67
SMTP Simple Mail Transfer Protocol
SEND EMAIL
PORT 25

POP email IN
110
IMAP email IN complex 143

HTTP website 80
HTTPS 443

RDP remote desktop 3389

NETBIOS using HOSTNAME to do networking
PORT 137-139

ARP arp -a SHOWS table of IP vs MAC addresses

IP addressing
TCP counts packets in and out
UDP no checking at all

Commands

IPCONFIG
/all
/displaydns
/flushdns
IFCONFIG ==> LINUX

PING

RELATED TO ICMP (Error message e.g. Destination
Unreachable or Timeout)

PATHPING
TRACERT

NSLOOKUP : get DNS INFO

REACHING THE INTERNET : WAN COMMUNICATION METHODS

Ways to reach internet???

DIAL-UP
Phone line :
POTS Plain old tel sac
PSTN Public switched tel network
Modem : 56k or 92k
COM port

PPP : protocol which actually dials up!!!

(( ring , pause ==> PPP is working))

POINT-TO-POINT PROTOCOL

ADSL
Asymmetric DSL

Take regular phone line and ‘convert’ it to have 2 signals

1. Regular voice 0-400Hz
2. High frequency digital 20000Hz+

This is why we need a ‘splitter’
ADSL Splitter

ADSL Asymmetric 8x faster download than up

SDSL Symmetric : Same up / down (Expensive)

HDSL High speed
VDSL Very high…

ATM : fixed packet size of 53 bytes

SONET : Synchronous optical

x1 = 50M
x12 = 600M

Microwave : dodgy as ‘line-of-sight’ also affected by weather e.g. rain

Satellite

3g/4g/LTE/GSM/CDMA/GPRS/EDGE

HSPA high speed packet access
HSDPA … downlink…

LTE and LTE-A Advanced

Day 2

Module 5 Unit 4

NAT Network Address Translation

IP Packets are banned on the internet if the SOURCE ADDRESS IS PRIVATE

IP PACKET LOOKS LIKE

CRC DATA SOURCE IP DESTINATION IP =>>>>>>

NETSTAT - Network Stats

netstat -a all
netstat -n numeric order

Firewall

BLOCK TRAFFIC BY

1. IP
2. PORTS
3. PROGRAM EG MEDIA PLAYER
4. TCP OR UDP

RULE IS CALLED ‘ACL ACCESS CONTROL LIST’

DEFAULT RULE IS BLOCK ALL (NOTHING PASSES)
Port Forwarding : Requests IN for a PORT ==> go to fixed IP

Port Triggering : Traffic out on PORT x : Open PORT y for traffic IN

DMZ

De-Militarised Zone = Perimeter Network

Used to HOST PUBLIC SERVER EG WEB SERVER : OUTSIDE OUR NETWORK

EVEN IF SERVER IS HACKED , DON’T GET INTO PRIVATE LAN!!!

VOIP
Voice Over IP = Skype

QOS Quality Of Service

Prioritise TRAFFIC

HIGH
REAL TIME EG VOICE CALL, VIDEO CALL

MEDIUM
TEXT CHAT

LOW BROWSING, DOWNLOADS

ALSO FILTER EG VIRUSES OUT

DNS
MAP NAME TO IP

Forward Lookup : regular lookup

DNS RECORDS
A
HOST
AAAA
IPV6 HOST
MX
EMAIL
CNAME
WEB WWW
SRV
SERVICE EG KERBEROS : LOG IN

FQDN full qualified domain name

[www.mysuperdomain.com](http://www.mysuperdomain.com/).

```
  . = ROOT DOMAIN (TOP OF INTERNET)

```

GOOGLE ‘ ROOT DNS SERVERS’

```
        .COM    TOP LEVEL DOMAIN  .INFO .BIZ  .ORG    .EU

```

MYSUPERDOMAIN = SECOND LEVEL

ETC..

[myserver.mydomain.com](http://myserver.mydomain.com/) ==> FULL PATH TO SERVER

“ FULLY QUALIFIED DOMAIN NAME”

NSLOOKUP -type=mx [google.com](http://google.com/) shows DNS INFORMATION FOR A DOMAIN

-TYPE=MX SHOWS EMAIL SERVERS

DIG = linux/apple equivalent

HOSTS FILE IS FIXED FILE WHICH USED TO BE USED BEFORE DNS WAS INVENTED

NBTSTAT = OLD FASHIONED ‘NETWORKING BY NAMES’ STATS

nbtstat -c

HTML

URL : web link

SMB Server Message Block

\\server\share UNC PATH

Protocol to view / create shares

UPGRADED TO CIFS COMMON INTERNET FILING SYSTEM

net commands

net use Z: \\server\share
map share
SCRIPT!!! .BAT

NET USE : ON CLIENT : USE/MAP SHARE

net share SHARENAME=C:\PATH-TO-SHARE ON SERVER

NET SHARE : CREATE AND VIEW SHARES ON SERVER

net view

net start/stop spooler (service)

netdom : join domain

```
rename computer

```

((Powershell rename-computer))

LDAP Lightweight Directory Access Protocol

cn=phil,ou=employees,dc=phil,dc=local ==> DISTINGUISHED NAME

cn = common name

phil (user) in employees OU in phil.local domain

LDAP IS PROTOCOL USED TO BUILD ACTIVE DIRECTORY!!!

HARDWARE

CPU

Main system bus = FSB front side bus e.g. 1333MHz
Register - operations

L1 cache INSIDE
L2 cache OUTSIDE

ALU Arithmetic Logic Unit INTEGER MATHX
FPU Floating Point Unit
FLOATING POINT MATHS : DECIMALS

MOTHERBOARD

… diagram

CASE
4 FANS

CPU
GRAPHICS
CASE FAN
PSU FAN ==> MOST COMMON TO BREAK !!!

PORTS

GRAPHICS PORT

VGA

15 PIN 3X5 ANALOGUE (OLD)

DVI : DIGITAL VIDEO (NO SOUND) : OLD

DVI-A analogue (old) DVI-D digital DVI-I (interactive, both)

HDMI : DIGITAL : WITH SOUND

RCA JACKS
RGB RED GREEN BLUE VIDEO : COMPONENT (SEPARATE COLOURS)
YELLOW JACK : ALL-IN-ONE : COMPOSITE VIDEO EG DVD OUTPUT

S-VIDEO : 4-PIN : VERY OLD : ANALOGUE

AUDIO
RED/WHITE RCA JACKS
GREEN
AUDIO OUT TO SPEAKER
BLUE
LINE IN
PINK
MIC IN

BLACK DOLBY SURROUND
YELLOW
SUBWOOFER

USB
4 PINS
SERIAL
5M MAX !!!
127 DEVICES MAX!!!

SPEEDS 1 12
2
480
3
5000 MBPS

FIREWIRE
GUARANTEED VIDEO THROUGHPUT
A
400 4-PIN
(POWER 6)
B
800 9-PIN

HARD DRIVE

IDE = OLD : 40 PIN
COLD SWAP : TURN OFF

SATA = NEW : 7 PIN DATA
HOT SWAP : KEEP MACHINE
RUNNING
15 PIN POWER

SATA I
1.5GBPS
SATA II
3.0
SATA III
6.0

SCSI WAS SUPER OLD : SEE WIKIPEDIA IMAGE!

SCSI ID given to every device

0 to motherboard, 1, 2, 3, etc to hard drives

PARALLEL/SERIAL PORTS

NOT USED TODAY!!!

9 PIN SERIAL PORT DB-9

```
ALSO BECAME USED AS THE MOUSE

```

1. DIN
2. MINI-DIN
3. PS/2 GREEN (MOUSE) + PURPLE (KEYBOARD)

25 PIN PARALLEL PORT

USED FOR PRINTERS

CONNECTS TO 36 PIN CENTRONICS ON OTHER END

PINK!!!!

MOTHERBOARD
20 OR 24 PIN POWER
4 PIN : FAN

FLOPPY
BERG POWER

MOLEX
4-PIN GENERAL POWER

RAM
FIRST RAM SIMM SINGLE INLINE MEMORY MODULE (SINGLE SIDED)

DIMM DUAL INLINE MEMORY MODULE : DOUBLE SIDED

TODAY : ALL ARE DIMMS!!!

DIMM
general term

SD-RAM
168 SYNCHRONOUS DYNAMIC RAM
DDR
184
DOUBLE DATA RATE X2 SPEED
DDR2
240
X2X2 IE X4 SPEED
DDR3
240
X8 SPEED (2X2X2=8)

LAPTOP RAM

CALLED ‘SO-DIMM’ SMALL OUTLINE DIMM
SHORTER, WIDER than normal RAM

DIMM
72
SDRAM
144
DDR
200
DDR2
200
DDR3
204

OTHER TYPES OF CONNECTION

NFC
NEAR FIELD CONNECTION 5cm
IR INFRA RED (line of sight) 1m
BLUETOOTH
10m
WIFI
30m
WIFI-AC
100m

ETHERNET 100m
FIBER MONOMODE
40km
FIBER MULTIMODE
2km
WIMAX wifi over CITY e.g. London Olympics
RADIO
miles e.g. 1000

Return to book in more methodical manner

Module 1 Unit 1

Case
Tower
Small Form Factor (living room)

FRU field replaceable unit = PARTS YOU CAN SWAP OUT

Motherboard

ATX = traditional
Micro-ATX
Mini-ITX
Nano-ITX
Pico-ITX

Jumper = SWITCH

1. ON MOTHERBOARD
USE TO RESET BIOS PASSWORD!!!!
2. HARD DRIVE (IDE)

GRAPHICS SLOTS

PCIe x 16 SERIAL , 250MB PER CHANNEL , 4GB TOTAL

PCIe x 1 NETWORK / WIFI / TV CARD

AGP
OLD GRAPHICS 2GBPS STILL FAST!

OLDER SLOTS

PCI
OLD

PCI-X SERVER : WRONG ANSWER !!!!!!

Laptops

MINI - PCI
MINI - PCIe
tend to be short cards

PCMCIA
Type I
3.3mm
Type II
5mm
fits I, II
Type III
10mm
fits I, II, III

ExpressCard 54mm
34mm

Firmware

Fridge / Cooker / TV etc : all have BUILT-IN CHIPS. BIOS CHIP OF EACH
DEVICE HOLDS INSTRUCTIONS TO MAKE DEVICE WORK
INSTRUCTIONS ==> CALLED ‘FIRMWARE’
RARELY UPDATE.
PC => CAN ‘FLASH’ TO UPDATE FIRMWARE (UPDATE BIOS)

Module 1 Unit 2

IO = Input / Output : list all devices which can a) RECEIVE DATA b) SEND DATA OUT

Device Manager : view by IO type

IRQ LINE = SPECIAL LINE ‘HOT LINE TO PRESIDENT?’

EG MOUSE MOVES - HOW TO INTERRUPT CPU??? SPECIAL
LINE : THEN CPU WILL TALK TO THE MOUSE!!!

USB

FIREWIRE

IEEE 1394

A : 400
B : 800 MBPS

IEEE NUMBERS
IEEE 1284 OLD PARALLEL (PINK) PORT
IEEE 1384 FIREWIRE
802.11 WIFI

```
      802.3  ETHERNET

```

Adapter Cards

Expansion card ==> expands capabilities of your PC!!!

Riser Card
SMALL CARD

Daughter board
SERVER, SMALLER MOTHERBOARD

KVM switch

keyboard/trackball/monitor
==> link with 1/2/3 switch
to each server : KVM switch behind
server01
server02
server03

VIDEO ..
AUDIO …
STORAGE …

Module 2 Unit 2 : RAM

BANK = ONE CHIP ON STICK OF RAM

8 BANKS per stick of RAM

PARITY RAM : 9 BANKS PER STICK!!!

10101010 IS 10101010 ODD OR EVEN? EVEN : ADD 0
ODD ADD 1

10101010 0 9TH BIT = PARITY BIT : CHECKING BIT

NOTE : STANDARD DDR3 RAM HAS NO CHECKING!!! NO ERROR
CHECKING !!! BUT IT’S VERY VERY FAST - WHICH IS WHAT
MOST PEOPLE WANT!!!

RAM FAULTY ==> BIN IT!!!

FOR ALL CHECKING : THIS ADDS EXTRA WORK SO MEANS
RAM IS SLOWER!!! ONLY USE ON SERVER IF ABSOLUTELY
REQUIRED!!!

DUAL CHANNEL RAM : MUST INSTALL IN PAIRS!!!

ERROR CHECKING

1. Parity RAM - add 9th bit
2. ECC RAM : Error check & correct : TRIES TO FIX FAULTS!!!

NOTE : Both slow your machine down!!!

Module 2 Unit 3 : Processors

History Of Processors

8086
first mass produced chip
80286
80386
80486
Pentium
Pro
I
II
III
IV
Core i3
i5
i7

Celeron
cheap (LESS STATIC RAM (expensive CACHE RAM))

AMD
: Equivalent : Athlon, Phenom (Budget Sempron)
Intel : Low power : ATOM
Intel Server : XEON

But!!! The most numeric processor in the world is the ARM processor!!!

Transistor density : Several Billion Transistors per CPU!!!

Transistor = changed the face of last century : switch without a moving
part but purely electronic (made of semiconductor)

CPU Architecture

Northbridge/Southbridge = CHIPSET

Northbridge = FAST PART (CPU+RAM+Graphics)

Southbridge = REST OF PC

Hypertransport = NO CHIPSET : ALL BUILT INTO CPU

Overclock = go faster (change ‘multiplier factor’)

Throttle = SLOW ON IDLE (laptop)

INTEL-VT AND AMD-V provide VIRTUALISATION

SLAT = VM talk directly to real RAM (Second Level Address Translation)

CPU Sockets

Socket = HOUSING FOR CPU

PGA Pin Grid Array

Early CPU had PINS : easily broken

LGA Land Grid Array

Bumps not pins : don’t break

PIN CHART

SOCKET T
775
PENTIUM (OLD)

H
1156
PCS
H2
1155
H3
1150

B
1366
SERVERS
R
2011

CPU Cooling
Passive Cooling
No moving parts : HEATSINK : Aluminium fins take heat away
Active Cool
Fan!!! Powered!!!
Liquid Cooling
Datacenter : deep cooled circuits!!!!

Module 2 Unit 4 : BIOS and CMOS

BIOS = ROM CHIP = FIRMWARE

Flash = overwrite with new instructions

EEPROM Electronically Erasable and Programmable

CMOS = variable settings eg time

Battery : when PC off, keeps data

Booting a computer

MBR

Master Boot Record

Lists all partitions on disk
Lists ACTIVE PARTITION
Find on ACTIVE PARTITION the BOOT MANAGER
bootmgr WinXP
bcd Win7
grub Linux

MBR quite vulnerable to being corrupted
bootrec /fixmbr
bootrec /fixboot

((In WIN RE Recovery Environment))

UEFI boot (also called GPT disks)

UEFI allows for SECURITY AT BOOT TIME.

MBR is PLAIN TEXT AND QUITE VULNERABLE TO ‘ROOT
KIT’ HACKING WHEREBY WINDOWS DOES NOT
EVEN KNOW IT HAS BEEN HACKED!!!

UEFI allows for ‘SECURE BOOT’ whereby we ‘SIGN (VERIFY)’ the
boot files to ensure nothing has changed or been tampered with

also allows BITLOCKER encryption with TPM chip

also MBR only allows for 4 PRIMARY PARTITIONS

UEFI allows for 128 partitions
Finally MBR has 2TB partition size limit
UEFI has unlimited partition size

Summary
MBR
Plain text
4 partitions
2TB max
UEFI
Secure boot : verify nothing changed
128 Partitions
Unlimited partition size

POST test - Power On Self Test

Every computer does a HARDWARE CHECK AT BOOT

It will ‘beep’ at you if faults found

Common Faults ==> RAM

Think about it ==> Power Supply ==> WILL NOT TURN ON??

or ==> check ‘POWER LINE VOLTAGE’!!!

Also CPU => fail => won’t turn on!!!

Left RAM

or

Graphics ==> don’t work it’s obvious!!!!

IF FAIL POST ==> PC WILL ‘BEEP’ AT YOU!!!

POST BEEP CODE ==> INTERNET

Bitlocker Encryption

Traditional Windows encryption is called ‘EFS’ and only encrypts FILES AND
FOLDERS

EFS : turn on with ‘File=>Properties=>Advanced=>Encrypt’ and colour
now goes green

Problem with this is - CANNOT ENCRYPT WINDOWS FILES

1. SYSTEM32 PLAIN TEXT
2. PAGE FILE (( SPILL OVER FROM RAM )) ==> SIZE 1.5 X RAM

8GB RAM ==> 12GB PAGE FILE!!!

PAGE FILE = SWAP FILE

1. HIBERNATE FILE (PC SHUTS DOWN SO THE CONTENTS
OF RAM GOES INTO ONE FILE!)

BITLOCKER

requires 2 partitions

1. 100MB PLAIN TEXT - just to get computer booted
2. Rest of drive, encrypted

TPM Chip ==> on motherboard

allows encryption keys to be stored on computer

(( if no TPM can use USB stick instead but not ideal))

Fully encrypt ALL DATA ON WHOLE DRIVE

LOST => CONTENTS ARE SECURE!!!

Available by default Win7/10

LOJACK => ROOT KIT DETECTOR

Going back to where we left off yesterday

Module 1 Unit 3 : Video

LCD Liquid Crystal Display

Old : Press display can see liquid behind screen

CRYSTAL ARE ‘POLARISED’ so turn them they block light, turn again
pass light

==> make display

TFT Thin Film Transistor ==> evolution of this type

Laptop : Screens require AC power so

Wall =====Adapter=====Laptop=========Inverter=========Screen

AC——-convert to DC===Laptop==DC==Inverter : back to AC==Screen

Plasma TV : old

4k TV today

Resolution

VGA
480X640
SVGA
600X800
XGA
1024X768

Resolution is number of pixels on screen

============x going across====>
y going down
v
v
v

Pixel = Picture Element

3 colours RGB Red Green Blue

==> can make all colours from RED + GREEN + BLUE

Dot Pitch => DISTANCE BETWEEN PIXELS

Screen Size : often quote DIAGONAL SIZE EG 24 INCH SCREEN IS THE
DIAGONAL SIZE

Aspect Ratio
4:3
regular
16:9
wide screen movie

Refresh Rate
1 Hz = 1 cycle per second

50/60Hz ==> total screen refresh

Response Rate

LOWER IS BETTER
8ms or less : excellent
20ms or greater : can leave ‘ghost’ trail on screen e.g. football
leaving a trail

Brightness
measured in Lumens or Candela : watts of light energy per square metre

Viewing Angle

Contrast
Ratio : How black are the blacks compared to the whiteness of the whites???

High value is good 20,000:1
Low is bad

Video Port
Display Port
similar to HDMI

Thunderbolt : MAC
Serial Port
DB-9 also called RS-232 port !!!

Graphics API

DirectX : Microsoft
OpenGL

Touch Screen
Resistive : pressure eg on a glove : good for freezers!!!
Capacitive : normal phone : detects charge in your finger

Module 1 Unit 4 : Audio

S/PDIF ==> digital fibre optic light : send sound round your system
used in Music Production to keep high fidelity to original
digital sound so can send to another device but no noise
is introduced

MIDI = Music connector

SNR Signal To Noise Ratio

Always get some noise : compare this to actual sound

TV Card!!!

PCIe x1 card can be TV Tuner card (or NIC/WIFI)

Module 1 : Unit 5 : Storage

DAS Direct Attached Storage - plugged in to PC eg USB, SATA
NAS Network Attached Storage - use Network cable to plug in - Private Cloud!!!
SAN Storage Area Network - for large companies

Ways to store data

Magnetic
Magnetism is linked to the POLARISATION OF ATOMS IN A METAL

Polarised means ‘lined up’

^^^^^^^ facing up

or

> facing to side

Facing one way ==> this is a binary ‘1’
other way ==> binary ‘0’

AC Electricity : pass through a ‘coil’ ==> create a magnet

use this to ‘write’ 1 or 0 onto a magnetic hard drive

Optical

DVD/BluRay/CD
CD
700/800MB
DVD
4.7GB
BluRay
25GB

DUAL LAYER => DOUBLE THESE!

Write ‘track’ by having light/dark areas : reflect either 1 or 0

Solid State
Care!!! Has a finite life so don’t abuse read/write!!!

No moving parts ==> quick, cheap, light form of storage

Magnetic Drive

Platter = spinning disk
Spindle = axis
Actuator = motor
Read/Write Head = > Reads/Writes data
Speed
5400 / 7200/ 10000
Size
2.5 inch laptop / 3.5 inch PC
Advanced drives detect free fall (gravity) and shut down before
drive hits floor!!!

Reading Data off Magnetic Drive
Track
one circle
Sector
smallest subdivision of your track : chop track into sectors
Cluster
Format Hard drive : join sectors into usable units called
‘Clusters’ eg 4kb for NTFS.
Small cluster : less wastage
Large cluster : fast for large files

Format
FAT
FAT16 : old
FAT32 : current : 32GB limit, 2GB file size limit
exFAT : 64 bit FAT for drives 32 GB and above

FAT has got NO SECURITY !!!!

NTFS
has got SECURITY : encrypt, compress, quotas

EXT
LINUX

CDFS
CD filing system

UDF
DVD

NFS Unix : Network Filing System

NAS drive : Network Attached Storage : Private Cloud

good for SOHO Small Office Home Office

[http://1.2.3.4](http://1.2.3.4/):port to gain access

RAID

RAID 0
STRIPE
2-32 DRIVES

NO REDUNDANCY ALTHOUGH
FAST!

RAID 1
MIRROR
2 DRIVES

RAID 5
STRIPE WITH PARITY
3 DRIVES MIN - 32 MAX

ONE DRIVE FAILS => CAN
REBUILD WHEN SWAP
OLD FOR NEW DRIVE

‘REBUILD THE ARRAY’
RAID 6
DOUBLE RAID 2
CAN LOSE 2 DRIVES

RAID 0+1 OR 1+0
COMBINE RAID 0 AND RAID1

SAN Storage Area Network

ServerA_______________Switch_____10GB_________SAN
ServerB

ServerA can fail. Can’t keep data on it! Keep Data on SAN (back end)

Now if ServerA fails, ServerB takes over and data (in SAN) is safe!

Two types of SAN

1. Fibre Channel (not Fiber!!! can be copper or fiber line!)
2. iSCSI over Ethernet : cheaper but not as robust

HBA Host Bus Adapter : advanced type of connector

Controller Chip eg SATA or IDE : motherboard chip where cable plugs in

SATA
i
1.5GB
ii
3GB
iii
6GB

Hot swap

eSATA

Floppy : 1.44MB storage power : BERG pins : 34

Tape Drives

These are LONG TERM STORAGE : SLOW!!!

QIC Quarter Inch Cartridge
10GB
DAT Digital Audio Tape
AIT
200GB
DLT
LTO Linear Tape Open 2.5TB

High capacity
Slow seek time

Module 2 Unit 1 : Hard Drives

MTBF mean time between failure : long life means reliable

SMART ==> Self reporting tool to warn if impending failure imminent

wmic /node:localhost diskdrive get status

chkdsk - check disk for faults

/f
fix any faults
/r
recover bad sectors (slow)

might need reboot

Defrag
Files get split up : put them back together

defrag c:

DON’T DO FOR SSD

Module 2 Unit 2 RAM done
Unit 3 CPU done
Unit 4 BIOS done

Module 2 Unit 5 Power

Electricity

VOLTS
‘PUSH’ on a circuit. Think HIGH PRESSURE HOSE
to clean building : higher pressure
the more the current flow

CURRENT
Flow of electrons
(Amps)

RESISTANCE
R = V/I (Ohms)

POWER
Power = V x I
(Watts) measure of energy
kW/hour electricity bill

AC POWER
take ‘RMS root mean square’ value

AC RESISTANCE : INDUCTANCE

AC STORAGE : CAPACITANCE

TRANSFORMER : AC TO DC

PC Voltages

3.3
CPU small voltages
5
hard drive
12
car battery

Module 2 Unit 6 … leave for now - CUSTOM PC CONFIGURATIONS

PREP THIS BEFORE EXAM !!!

Module 3 Unit 1 : Troubleshooting

NIC lights

steady green : ON
flickering green/yellow
: DATA BEING SENT

Overheat

CPU : thermal paste? cooling?

Noise

1. Power Supply fan
2. Hard drive about to go!!!

Multimeter

Check for voltages especially if components not turning on!

Fuses

Always check fuses!!!

Short / Open circuit

Short circuit means the long path (safe) has been bypassed
and a bridge has been created where a high current flows. This
would cause a fire ==> FUSE TRIPS TO STOP FIRE!!!

Open circuit means NO CURRENT FLOWS!

Chip Creep

Over time, motherboard can go hot, cold, hot, cold ==> some chips
can gradually ‘creep’ out of position

RAM only fit in slots for that RAM - no possibility of wrong RAM!!!

Module 3 Unit 2 : Laptops

Port replicator

One strip to add more ports

Docking Station

Tends to be more sophisticated arrangement e.g. connect your
laptop more into a permanent desk

Power supplies : 12v or 18v

Batteries
NiCAD
old
Nickel Cadmium
NiMH
Li-ion
current
Lithium Ion

Module 3 : Unit 3 : Mobile

Unit 4 : Troubleshooting

Module 4 : Unit 1 : Printing

WYSIWYG
What You See Is What You Get

Client
‘PRINT’ creates PRINT JOB ==> SENT TO PRINT SERVER

STORED IN ‘SPOOLER’ FOLDER
AS A QUEUE

NEXT JOB ===> SENT TO PRINT DEVICE AND PRINTED

net stop spooler
net start spooler

PRINT JOB

GDI (old)
==> Enhanced Metafile
or RAW

WPF Windows Presentation Foundation ==> XPS File

Adobe Postscript
PCL-5 / 6

Note : Drivers USED TO HAVE TO BE INSTALLED
Windows 10 ==> drivers are downloaded direct from Microsoft
update!!!
Also Win10 drivers are more GENERIC i.e.
one driver does MORE PRINTERS

PRINT DRIVER : create ‘RASTER’ (pixel-by-pixel) IMAGE for printing

Laser Printers

Laser Print Cycle

1. Clean Drum
a) Physical clean (old toner)
b) Electronic clean (old charge)
2. Charge Drum to 600 V
Wire : Primary Corona
3. Write Image On Drum with a LASER
4. Put TONER on Drum - it STICKS ONLY WHERE
IMAGE HAS BEEN MADE
5. Transfer the charged TONER onto the PAPER using
the SECONDARY CORONA WIRE
6. Fuse (melt) the TONER ONTO THE PAPER with
the FUSER WIRE

Printer Maintenance

Low running cost
Toner
PRINTER MAINTENANCE KIT : NEW DRUM etc : replace every
few months.

Duplex = double sided

Inkjet / Bubblejet / Deskjet

Cheap, low end devices

But! can get HIGH QUALITY FOR PHOTO PRINTING
Squirt ink onto paper

1. Piezo-electric to ‘squeeze’ ink like a gun
2. Heat thermal mechanism
Printing Colours

Monitor
RGB

Paper
CMYK Cyan Magenta Yellow Black

Impact Printer

Cheaper, Monochrome (one colour)

Have a set of PINS which IMPACT (HIT) the paper

9 pin = DRAFT
24 pin = LETTER MODE

Ribbon : Pins hit paper through ribbon to make a ‘dot’

Thermal Printer
Melt wax so is molten : put on paper
High end ‘proper’ printer machines : not for general
public use

Module 4 Unit 2 : Installing Printer

Server : add printer => local => give fixed IP

Client : connect to printer

Company : store printer in Active Directory and can find easily

Module 4 Unit 3 : Troubleshooting

Printing ‘garbled’ output ==> change the PRINT DRIVER

Book 1 : Hardware : CPU, RAM, HDD, WIFI, NETWORKING, MOTHERBOARD, PORTS, TROUBLESHOOTING

Book 2 : 902 : Looks more at Software and Tools (OS tools and apps)

Module 1 : Unit 1 : Windows

Kernel = CORE OF THE OPERATING SYSTEM

Aero
snap
peek
Show Desktop
flip 2d / 3d
ctl-tab and alt-tab

Windows Editions

Win7
Starter
Home Basic
Home Premium
Pro
Enterprise
Ultimate

Starter : cannot buy (OEM only for one-laptop-per-child and similar
projects)

Enterprise = Ultimate
Ultimate : buy key in shop (RETAIL KEY)
Enterprise : VOLUME LICENCE (PAY MICROSOFT IN BULK)
a) run own LICENSING SERVER
b) buy MAK Multiple Activation Key : good for x activations

Pro supports : DOMAIN JOIN, REMOTE DESKTOP, BITLOCKER
Enterprise supports everything including AppLocker, BranchCache etc

Win8
Home
Pro
Enterprise
Win10
Home
Pro
Enterprise
Mobile

Gadget
Sidebar

System Requirements

CPU
RAM
HDD
Win7 x86
1GHZ
1GB
16GB
Win7 x64
1GHZ
2GB
20GB
Win8
same as above i.e.
1GHZ
2GB
20GB
Win10
1GHZ
2GB
20GB

((XP
233
64MB
1.5GB ))
((VISTA
1GHZ
1GB
20GB ))

Upgrade

Rules
32 bit to 32 bit
64 bit to 64 bit
Home to Home
Pro to Pro
Anything to Ultimate
In Place Upgrade : Run from your machine
Migration : move data etc from old to new machine
WET Windows Easy Transfer (GUI tool)
USMT (command line tool)
SCANSTATE
LOADSTATE

Note : Vista had Business (not Pro) edition

Compatibility Advisor : lets you know if your machine can cope

Module 1 Unit 2 : Admin Tools

UAC User Account Control

XP : Viruses could run in the background without notifying the user!

Vista onwards : UAC

Admin prompt ==> You are already admin : YES/NO
Credential prompt ==> User/Password of admin required

Dim Desktop : can’t do anything else!

MSCONFIG - startup items (moved in Win10)

MSINFO32 : System Information

MMC Microsoft Management Console
Shell - run tools

Author mode
User mode : READ ONLY

Group Policy

GPEDIT.msc ==> local policy
SECPOL
==> just security settings

Command Prompt

DIR
md
cd
cd..
cd\
make new file
copy null abc.txt
rename abc.txt def.txt
delete file
copy directory with subdirectories
remove directory
create a batch file .bat
@echo on
@echo off
Powershell script
.ps1

Homegroup : way for users to share files easily

1. Create home group ==> issues with a ‘code’
2. On second PC : run Homegroup and enter same code ==> will join

User Profile

C:\Documents and Settings
XP
C:\Users
7 and above

NTUSER.DAT
Registry file
NTUSER.MAN
Mandatory fixed user profile (changes not
saved after log off)

AppData
…Local.. Microsoft…Outlook . pst/ost

Environment / System Variables

%username% BGates
%systemdrive% C:\Windows
%systemroot% C:
%homedrive% C:\Users\BGates
%homepath% ???

Shutdown -s -t 0 straight away -t seconds
shutdown -r restart -a abort

/h hibernate
/sleep
/l log off

Registry

regedit

FIVE ROOT FOLDERS ==> CALLED ‘HIVES’

HKEY_CLASSES
file extensions
_LOCAL_MACHINE hardware on machine
_USERS all users with SID Security ID
_CURRENT_USER this user
_CURRENT_CONFIG this user - unsaved settings. Save
at log off.

Export to .reg file

Module 1 Unit 3 : Storage

Low level = factory format = CREATE TRACKS
High level = create clusters
FAT16
FAT32
NTFS

MBR : old : 4 partitions max and 2TB limit
4 Primary (bootable) partitions
1 Extended Partition
multiple logical partitions inside this

GPT : GUID Partition Table : new

Note : MAX RAM on 32 bit system is 4GB

Terms
WORM Write Once, Read Many e.g. CD ROM CD-R
Disk duplex : each drive gets own CONTROLLER CHIP
Volatile : data easily lost e.g. RAM CHIP / CMOS CHIP
Non-volatile = Permanent eg Hard drive, Tape drive

10 minute crash on NETWORK

Tracert windows : connectivity + show all routers on way
traceroute linux :
ping : test connectivity
pathping : similar to trace route
TCP
IP provides unique addressing across world
private IP e.g. 192.16.9.73
public IP reachable on internet
whatismyIP Google ==> 62.232.249.82 is public facing side of knowledge academy’s router
[NINITE.COM](http://ninite.com/)

20 minute revision on Day 1

PING
Tracert
Traceroute linux
PathPING
TCP/IP
IP : addresses
Private : LAN only
4 private ranges

10.x.y.z
class A
172.16.x.y up to 172.31.x.y B
192.168.x.y
C
169.254.X.Y
APIPA (DHCP broken)
Class A 1-126
Loopback 127.0.0.1
B 128-191
C 192-223
D 224-239 Multicast : send large files/video to GROUP OF COMPUTERS
WHICH HAVE SHARED (MULTICAST) IP
E 240-255

1 1
2 10
3 11
4 100
8 1000
16 10000
32 100000
64 1000000
128 10000000
192 (128+64)
11000000
224 (192+32) 11100000
240 224+16
11110000
248 240 + 8
11111000
255 all ones
111111111
7 LAYERS

PROCESSING
DATA
NEED
TO
SEEM
PEOPLE
ALL

PLEASE DO NOT THROW SAUSAGE PIZZA AWAY

PHYSICAL
CABLING, ELECTRICITY
COAX
TWISTED PAIR
FIBER
HUB : LAYER 1 (ELECTRICITY IN, ELECTRICITY OUT)
DUMB DEVICE : NO FILTERING
BROADCAST ALL!!!
REPEATER : LAYER 1 SAME JUST 2 PORTS
DATA LINK
LAN
MAC ADDRESS (48 BITS)
OUI = HALF OF MAC : COMPANY ID
ETHERNET
SWITCH : FILTER ALL BY MAC ADDRESS : FAST
NETWORK
IP : ACROSS GLOBE
ROUTING : ROUTES ACROSS GLOBE
RIP ROUTING INTERNET PROTOCOL
BASIC : BROADCASTS ALL EVERY 30 SECONDS
RIPV2
EIGRP : ONLY IF NEW DATA : UNICAST
TRANSPORT
TCP
: 3-WAY HANDSHAKE
CLIENT SAYS “ ARE YOU READY TO RECEIVE?
SERVER : YES
CLIENT : OK LET’S BEGIN
==> NOW START!!
COUNT PACKETS

1. SEQUENCE : COUNT OUT
2. ACKNOWLEDGE : RETURN TO SENDER
PACKET ARRIVED

SEND 1,2,3,4,5,6
5 LOST
ACK 1,2,3,4,6 BACK TO SENDER
SEND 5 AGAIN
UDP : NO CHECK : FAST
SESSION
PRESENTATION
APPLICATION

20 FTP admin
21 FTP data
22 SSH encrypted TELNET
23 TELNET

80 HTTP
443 HTTPS

53 DNS
67 DHCP

3389 RDP

25 SMTP EMAIL OUT
110 POP EMAIL IN
143 IMAP EMAIL IN COMPLEX

137-139 NETBIOS : NETWORKING USING HOSTNAME ONLY (OLD)

NSLOOKUP : show DNS INFO
CAT 3 10 MBPS
5 100 ‘FAST ETHERNET’
5E 1000
6 1000 (10 GBPS FOR SHORT DISTANCE)
6A 10 GBPS

WIFI SPEEDS
SPEED
FREQ
A IGNORE
B 11
2.4
G 54
2.4
N 108+ MIMO
2.4 AND 5
AC 3000+
5

B,G,N ALL 2.4

Wed morning review

CPU
SOCKET T 775
Socket H/H2/H3 1156 1155 1150
Servers : Socket B 1366 R 2011
Northbridge FAST
Southbridge REST
Chipset BOTH north and south bridge
Processor types
FIRST 8086
Family x86 286 386 486 Pentium
Today i3/5/7
Cheap Celeron
AMD Athlon
AMD Cheap Sempron/Duron
Server : XEON
PGA pin grid array : old (pins break)
LGA land grid array : bumps
ZIF socket
thermal paste
Heat sink
Passive : no power
Active : power e.g. fan
4 fans in PC : cpu, psu, graphics, case
ROM chip : BIOS
RAM chip : CMOS
battery : keeps CMOS settings alive
clock : Piezo-Electric rock (vibrates fixed frequency)
Bus => wire
System Bus
FSB Front Side Bus
Address bus
Clock wire
IRQ wire : Interrupt Request (Device manager)
Audio
GREEN : Headphones
BLUE Line IN
PINK Mic in
Yellow SUBWOOFER
Black : Surround
RCA Jack
Red/White : Audio
RGB : Red Green Blue : Component Video
Yellow : Composite Video
S-Video : old
DVI : old DVI - A analogue D digital I interactive : both
HDMI : + sound
DB9 = serial port same as -
DIN
MINI-DIN
PS/2
VGA : 15 pin 3x5
DB25 : old pink parallel port IEEE 1284
USB
1
12
2
480
3
5000
max length 5m
max devices 127
Firewire
400
4/6 pin
800
9 pin
Distances
NFC 5cm
IR
1m
Bluetooth
10m
WIFI
30m
WIFI AC
100m
Ethernet
100m can double using a Repeater
Fiber Monomode
Laser 40km+
Fiber Multimode
LED cheap 2km
RAM
Parity : 9 bits : slower : FLAG ERROR
ECC RAM : error check + correct ==> tries to fix!!!
SDRAM 168 PINS
DDR 184
DDR2 240
DDR3 240
IDE : old
IDE also known as PATA : drives max = 4 (2 per channel)
SATA : current
7 pins data
15 pins power
SCSI old : server
Transistor : SWITCH (fully electronic) ==> basis of ALL ELECTRONICS TODAY!!!!
Semiconductor
CPU today : 3 billion transistors!!!
Valve amps : old switches

IP

20 minutes revision - Thursday morning
DAS DIRECT ATTACHED STORAGE
NAS Network Attached Storage => NAS DRIVE
SAN Storage Area Network : Fast 10GB back end : connect to cluster front end
CLUSTER : has 2 servers - one fail, go to next to use it
RAID 0 NOT TOLERANT : STRIPING : FAST : 2-32
RAID 1 TOLERANT : MIRROR 2 DRIVES
RAID 5 FAULT TOLERANT : CAN LOSE 1 DRIVE : 3-32 DRIVES
RAID 6 TOLERANT : CAN LOSE 2 DRIVES
RAID 1 0
Multimeter
Chip creep
Hard drive
Track circular groove
Sector chop track up into sectors
Cluster FORMAT FAT/NTFS : define this size here - join sectors to get cluster
Troubleshoot
Broadcast : send packet to 255.255.255.255
Subnet Mask 255.255.255.0
20/21 FTP
53 DNS
80 HTTP
67 DHCP
3389 RDP
443 HTTPS
23 TELNET
22 SSH SECURE SHELL
25 SMTP EMAIL OUT
110 POP EMAIL IN
143 IMAP : EMAIL IN COMPLEX
PRINTER
BUBBLEJET : CHEAP, FIRE INK AT PAPER
CMYK CYAN MAGENTA YELLOW BLACK
RGB
LASER
CYCLE
CLEAN : PHYSICAL + ELECTRICAL CLEAN
CHARGE DRUM : 600V
WRITE IMAGE
DEVELOP : TONER ON IMAGE
TRANSFER : IMAGE TO PAPER
FUSE : MELT TONER TO PAPER

MAINTENANCE KIT : REPLACE DRUM 3 MONTHS
IMPACT PRINTER : RIBBON FEED
9 OR 24 PINS
MONOCHROME : ONE COLOUR : USEFUL FOR OVERNIGHT PRINT JOBS
THERMAL PRINTER : APPLIES HEAT TO RECEIPT PAPER. HEAT APPLIED ==>
PAPER TURNS BLACK ==> GENERATE YOUR RECEIPT!!!
CDR ==> WRITE ONCE READ MANY
CDRW READ/WRITE
CDROM : READ ONLY
WORM
FLOPPY 1.44
CD 700
DVD 4.7
BLURAY 25
MINI BLURAY 15???
DISTANCES
NFC 5CM
IR
1M
BLUETOOTH 10M
WIFI 30M
WIFI AC 100M
ETHERNET 100M
REPEATER 200M
WIMAX CITY EG OLYMPIC PARK
LAN LOCAL
WAN INTERNET
MAN CITY
CAN UNIVERSITY
FIBER MULTIMODE CHEAP
2KM
FIBER MONOMODE EXPENSIVE
40KM
RADIO MILES
CABLING LENGTH
USB 5M
SPEEDS
USB 1 12 2 480 3 5000
FIREWIRE A 400 B 800 ALSO CALLED IEEE 1394
PCIe x1 250MB
PCIe x16 4GBPS
CAT 3 10 5 100 (Fast Ethernet) 5E 1000 6 1000 6A 10000
WIFI
A
B
11
G
54
N
300+ MIMO
AC
3000
WIFI
WEP hacked
WPA encrypted with TKIP
WPA2 encrypted with AES

Bitlocker : FULL HARD DRIVE ENCRYPTION
TPM CHIP + 2 Partitions (one plain text 100MB)

LDAP : protocol for Active Directory
Distinguished Name : CN=phil,OU=ou,DC=mydomain,DC=com

CPU
L1 CACHE INSIDE CPU : MADE FROM STATIC RAM
L2 CACHE OUTSIDE CPU
L3 CACHE SHARED IN MULTICORE CPU SETUP