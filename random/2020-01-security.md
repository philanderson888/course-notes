# infrastructure

## contents

- [infrastructure](#infrastructure)
	- [contents](#contents)
	- [Encryption - Data In Transit](#encryption---data-in-transit)
	- [Active Directory](#active-directory)
	- [Encryption](#encryption)
	- [SNMP](#snmp)
	- [SCSI](#scsi)
	- [SAN STORAGE AREA NETWORK](#san-storage-area-network)
	- [SITE SURVEY](#site-survey)
	- [ACTIVE DIRECTORY](#active-directory-1)
		- [LDAP](#ldap)
		- [LDAPS = SECURE VERSION](#ldaps--secure-version)
		- [KERBEROS](#kerberos)
	- [INSECURE AUTHENTICATION](#insecure-authentication)
		- [PAP](#pap)
		- [CHAP](#chap)
	- [SECURE AUTHENTICATION](#secure-authentication)
		- [MS-CHAP2](#ms-chap2)
		- [EAP-TLS](#eap-tls)
		- [PEAP](#peap)
		- [LEAP](#leap)
	- [ONE-TIME PASSWORDS](#one-time-passwords)
		- [OTP](#otp)
		- [TOTP](#totp)
	- [EMAIL ENCYRYPT/AUTHENTICATE](#email-encyryptauthenticate)
		- [PGP](#pgp)
	- [DIAL-IN AUTHENTICATION](#dial-in-authentication)
		- [RADIUS](#radius)
		- [DIAMETER](#diameter)
		- [TACACS+](#tacacs)
	- [SSO](#sso)
			- [FEDERATION](#federation)
			- [BACKUPS](#backups)
			- [Risk Analysis Process](#risk-analysis-process)
		- [Network Security Lab](#network-security-lab)
			- [Gaining Access To A Network](#gaining-access-to-a-network)
				- [Class Lab](#class-lab)
			- [NTFS And Share Permissions](#ntfs-and-share-permissions)
				- [Lab : NTFS and Share Permissions](#lab--ntfs-and-share-permissions)
			- [Virtual Online Router](#virtual-online-router)
			- [Group Policy Management](#group-policy-management)
				- [Lab - Password And Lockout Policy](#lab---password-and-lockout-policy)
				- [Lab - Publish A Printer](#lab---publish-a-printer)
				- [Lab - Publish Software](#lab---publish-software)
			- [DNS Labs](#dns-labs)
		- [Wireshark](#wireshark)
				- [Install Wireshark](#install-wireshark)
		- [Cookies](#cookies)
		- [WIFI labs](#wifi-labs)
				- [Hacking Into Symmetric Encryption - Part 1](#hacking-into-symmetric-encryption---part-1)
				- [Hacking Into Symmetric Encryption - Part II](#hacking-into-symmetric-encryption---part-ii)
				- [Hacking Into Symmetric Encryption - Part III](#hacking-into-symmetric-encryption---part-iii)
		- [WIFI lab](#wifi-lab)
		- [DEFENSE IN DEPTH](#defense-in-depth)
			- [STORAGE TYPES](#storage-types)
		- [MOBILE SECURITY](#mobile-security)
		- [VIRTUALIZATION](#virtualization)
		- [Site Survey](#site-survey-1)
		- [Encryption Methods](#encryption-methods)
		- [Mobile Encryption](#mobile-encryption)
		- [WIFI](#wifi)
			- [Secure WIFI](#secure-wifi)
		- [WIFI CHANNELS](#wifi-channels)
			- [War driving / war chalking](#war-driving--war-chalking)
			- [WPS WIFI Protected Setup](#wps-wifi-protected-setup)
			- [Rogue Access Point](#rogue-access-point)
			- [Evil Twin](#evil-twin)
			- [Jamming](#jamming)
			- [Blue Jack](#blue-jack)
			- [Snarf](#snarf)
			- [Blue Snarf](#blue-snarf)
			- [Distances](#distances)
		- [Broadband Methods](#broadband-methods)
		- [Dial up](#dial-up)
		- [VPN](#vpn)
		- [IPSEC](#ipsec)
	- [Network Architecture](#network-architecture)
		- [Defense-in-depth](#defense-in-depth-1)
			- [Physical Security](#physical-security)
			- [Network Security](#network-security)
				- [Access Control](#access-control)
				- [Privileged Access Management](#privileged-access-management)
				- [Data Security](#data-security)
		- [Virtualization](#virtualization-1)
		- [AV SCANNING](#av-scanning)
		- [NETWORK ATTACKS](#network-attacks)
		- [WIRELESS](#wireless)
		- [ENCRYPTION](#encryption-1)
			- [S/MIME](#smime)
			- [PGP PRETTY GOOD PRIVACY](#pgp-pretty-good-privacy)
			- [HARDWARE ENCYPTION](#hardware-encyption)
			- [NTFS ENCRYPTION](#ntfs-encryption)
			- [BITLOCKER](#bitlocker)
			- [SQL DATA](#sql-data)
			- [BIG DATA / NO-SQL](#big-data--no-sql)
			- [DATA DISPOSAL](#data-disposal)
			- [HARDENING YOUR SERVER](#hardening-your-server)
			- [INPUT VALIDATION](#input-validation)
		- [Types of testing](#types-of-testing)
			- [PROXY SERVER](#proxy-server)
			- [TCP TRUSTED COMPUTING BASE](#tcp-trusted-computing-base)
			- [UTM UNIFIED THREAT MANAGEMENT](#utm-unified-threat-management)
		- [NETWORKS](#networks)
		- [ANTI VIRUS SCANNING](#anti-virus-scanning)
			- [SIGNATURE BASED SCANNING](#signature-based-scanning)
			- [ANOMALY BASED SCANNING](#anomaly-based-scanning)
			- [BEHAVIOUR BASED SCANNING](#behaviour-based-scanning)
			- [HEURISTIC SCANNING = REAL-TIME SCANNING](#heuristic-scanning--real-time-scanning)
		- [VPN : VIRTUAL PRIVATE NETWORK](#vpn--virtual-private-network)
- [Security Architecture](#security-architecture)
	- [Zones](#zones)
	- [Bastion Host = DMZ](#bastion-host--dmz)
		- [Jump Box](#jump-box)
	- [Hardening](#hardening)
		- [Baselining](#baselining)
			- [Group Policies](#group-policies)
	- [Endpoint security](#endpoint-security)
		- [Port security : restrict access](#port-security--restrict-access)
- [Identities](#identities)
	- [NAC](#nac)
		- [NAC Policy](#nac-policy)
			- [Types of rules](#types-of-rules)
	- [Identity](#identity)
		- [identity by ...](#identity-by-)
		- [nac](#nac-1)
	- [certificates](#certificates)
		- [sigcheck verify root certificate valid](#sigcheck-verify-root-certificate-valid)
		- [openssl](#openssl)
		- [certutil (windows)](#certutil-windows)
	- [dial in](#dial-in)
		- [RADIUS](#radius-1)
		- [TACACS+](#tacacs-1)
		- [LDAP (Active Directory)](#ldap-active-directory)
		- [SSO](#sso-1)
			- [SAML : token-based SSO (security assertion markup language)](#saml--token-based-sso-security-assertion-markup-language)
			- [OpenID](#openid)
			- [OpenAuth (Open Authorization)](#openauth-open-authorization)
	- [Hacking attempts](#hacking-attempts)
	- [Threat Detection](#threat-detection)
		- [Network Attacks And Security](#network-attacks-and-security)
		- [Code Injection Vulnerabilities](#code-injection-vulnerabilities)
		- [Forensics](#forensics)
	- [Network Scanning](#network-scanning)
		- [Scanning for vulnerabilities](#scanning-for-vulnerabilities)
		- [DLP](#dlp)
		- [Advanced Malware Attacks](#advanced-malware-attacks)
			- [CODE INJECTION ATTACK = APPLICATION ATTACK](#code-injection-attack--application-attack)
		- [XSS CROSS SITE SCRIPTING](#xss-cross-site-scripting)
			- [XSRF CROSS-SITE REQUEST FORGERY](#xsrf-cross-site-request-forgery)
			- [BUFFER OVERFLOW ATTACK](#buffer-overflow-attack)
			- [INJECTION TYPES](#injection-types)
			- [EAVESDROPPING](#eavesdropping)
			- [MAN-IN-MIDDLE ATTACK](#man-in-middle-attack)
			- [SESSION HIJACKING](#session-hijacking)
			- [SESSION REPLAY](#session-replay)
	- [infrastructure random terms](#infrastructure-random-terms)
	- [wifi](#wifi-1)
	- [network security](#network-security-1)






## Encryption - Data In Transit

```
SSH port 22
SCP secure copy port 22
HTTPS 443
IPSEC l2tp
IPSEC IKEV2
IPSEC ESP ENCRYPTION
IPSEC AH AUTHENTICATION 
```



## Active Directory

```
LDAP 389 
Kerberos token

```


## Encryption

Stream cipher = 1 bit at a time , fast
Block cipher = much stronger (in blocks) but slower
Email Encryption : 
       PGP	Pretty Good Privacy
       S/MIME


## SNMP 

SIMPLE NETWORK MANAGEMENT PROTOCOL

```
MANAGE NETWORK OF EG 50 DEVICES

	1) ARE THEY WORKING??? HEARTBEAT MESSAGE 30/60 SECS

	2) THROUGHPUT OF DATA???  STATISTICS 

PORT 161/2

```


## SCSI 

SMALL COMUTER SYSTEMS INTERFACE

```
ROCK SOLID TECHNOLOGY FOR SERVER RAID 5 FOR YEARS...
TOO SLOW FOR TODAY
REPLACED BY SATA HARD DRIVES

```

## SAN STORAGE AREA NETWORK 

LIGHNING FAST BUT EXPENSIVE

```
ISCSI ==> INTERNET SCSI : NETWORK STORAGE PROTOCOL
		RUNNING OVER MODERN ETHERNET CABLING

	10GBPS FAST!!!

FIBRE CHANNEL : COPPER OR FIBER CABLING FOR LIGHTNING-FAST
	10GBPS NETWORK TRAFFIC FROM LAN TO SAN STORAGE
	NETWORK

FCOE  FIBER CHANNEL OVER ETHERNET : UTILISING CHEAP CAT6
		NETWORK CABLING

```

## SITE SURVEY

MARKING COVERAGE OF WIFI POINTS

## ACTIVE DIRECTORY

ACTIVE DIRECTORY IS BUILT ON A SPECIAL PROTOCOL CALLED

### LDAP

LIGHTWEIGHT DIRECTORY ACCESS PROTOCOL.  THIS ALSO
	BUILDS LINUX PROGRAMS, NOT JUST WINDOWS.

	LDAP BUILDS THE STRUCTURE FOR ACTIVE DIRECTORY

### LDAPS = SECURE VERSION

### KERBEROS

USED TO PROVIDE ENCRYPTION FOR ACTIVE DIRECTORY
	(ROCK SOLID GRADE ENCRYPTION)


## INSECURE AUTHENTICATION

### PAP

PASSWORD AUTHENTICATION PROTOCOL : PLAIN TEXT SO DON'T USE!

### CHAP	

EARLY AUTHENTICATION PROTOCOL USING MD5 SO NOT SECURE.  DON'T USE.

## SECURE AUTHENTICATION

### MS-CHAP2	

CURRENT VERSION OF CHAP

### EAP-TLS 	

AUTHENTICATION USING CERTIFICATES

### PEAP		

PROTECTED EAP 

### LEAP

LIGHTWEIGHT EAP


## ONE-TIME PASSWORDS

### OTP

ONE TIME PASSWORD TO PHONE

### TOTP

TtIME-BASED FOR EG 10 MINUTES

HOTP	HASH-BASED WHICH VERIFY HASH ALSO ON TOP : CAN
	BE USED TO ENSURE AUTHENTICATION REQUEST IS
	GENUINE


## EMAIL ENCYRYPT/AUTHENTICATE

### PGP 

PRETTY GOOD PRIVACY


## DIAL-IN AUTHENTICATION

### RADIUS

	VPN CLIENT -> DIALS UP -> RAS (DIAL-IN) VPN SERVER

		--> TALKS TO RADIUS SERVER
		--> TALKS TO ACTIVE DIRECTORY TO AUTHENTICATE

### DIAMETER

	DIAMETER IS TWICE AS STRONG AS RADIUS (PUN ON WORDS
		AS DIAMETER IS TWICE AS LONG AS RADIUS OF
		ANY CIRCLE)

### TACACS+

	PROVIDES A GREATER DEGREE OF ENCRYPTION OVER THE
	WHOLE AUTHENTICATION PROCESS.  ALSO ALLOWS 
	MULTI-FACTOR AUTHENTICATION



## SSO

SSO = ONE LOGIN TO MULTIPLE SITES

	<< SAML = USED TO PASS INFO BETWEEN SITES >>

		SAML = SECURITY ASSOCIATION MARKUP LANGUAGE


#### FEDERATION

MULTIPLE COMPANIES WORKING TOGETHER

FEDERATION = A GROUP OF UNRELATED COMPANIES WORKING
	TOGETHER ON A PROJECT.  NEED TO SECURELY SHARE
	INFORMATION.

INTRANET = INTERNAL WEBSITE FOR INTERNAL EMPLOYEES

EXTRANET = PROVIDE AUTHENTICATION AND HAVE YOUR BUSINESS
	   PARTNERS LOG IN AND YOU SHARE COMPANY 
	   RESOURCES THAT YOU CHOOSE WITH YOUR BUSINESS
	   PARTNERS SECURELY EG DATABASE INFORMATION ETC

PUBLIC WEBSITE = ACCESSIBLE TO ALL (FROM YOUR DMZ)


MANAGE 'CREDENTIALS' SECURELY IN WINDOWS


CREDENTIAL MANAGER (CONTROL PANEL)



CREATING YOUR OWN CERTIFICATES IN A PKI INFRASTRUCTURE


PUBLIC CERTIFICATES

	VALID FOR USE ON THE INTERNET 

	ANYONE IN THE WORLD CAN VIEW YOUR PUBLIC CERTIFICATE
	AND VERIFY YOU AND THE COMPANY EG VERISIGN WHICH
	ISSUED YOUR CERTIFICATE

	COST MONEY EG $300

	REQUIRED FOR BUSINESS TRANSACTIONS EG PUBLIC HTTPS://
	WEB SITE

PRIVATE CERTIFICATE

	GENERATED BY YOU ON A FREE WINDOWS SERVER

	INSTALL 'CERTIFICATE AUTHORITY' (CA) ROLE

	==> ISSUE CERTIFICATES INTERNALLY 

	((YOUR PRIVATE CERTIFCATES NOT VALID FOR USE
	ON INTERNET))  ==> OTHERS 'NOT TRUSTED'
			CERTIFICATE MESSAGE

CREATING A PRIVATE PKI FOR YOUR OWN COMPANY

	1. INSTALL 'ROOT' (FIRST) CA (CERTIFICATE AUTHORITY)
			MACHINE

	2. IF YOU HAVE A BIG COMPANY, INSTALL SUBORDINATE
		CA MACHINES (ALSO CALL THEM 'ISSUING'
		SERVERS

	3. CLIENTS CAN NOW 'ENROL' OR 'REQUEST' CERTIFICATES
		FOR DIFFERENT PURPOSES

		AUTO-ENROL MEANS COMPUTER CAN AUTOMATICALLY
		APPROVE AND ISSUE CERTIFICATES

		MANUAL ENROL : HUMAN BEING HAVE TO MANUALLY
			APPROVE REQUESTS

REVOKING A CERTIFICATE

	MUST BE ABLE TO PROVE A CERTIFICATE IS STILL VALID

	ON SERVER, CAN 'REVOKE' (NULLIFY) ANY CERTIFICATE

	PROVE TO CLIENTS THAT THEIR CERTIFICATE IS STILL GOOD

	TWO LISTS

	1)  CRL CERTIFICATE REVOCATION LIST : FULL LIST OF
		ALL 'REVOKED' (NULLIFIED) CERTIFICATES

		DELTA CRL : PARTIAL (UP-TO-DATE) LIST

	2)  ONLINE WEBSITE : OCSP (ONLINE CERTIFICATE
				   STATUS PROTOCOL)

		CHECK FOR JUST ONE CERTIFICATE : IS IT VALID?

	ESCROW = TRUSTED 3RD PARTY TO HOLD OUR CERTIFICATES
			IN CASE OF DISASTER

		M OF N PEOPLE REQUIRED TO UNLOCK CERTIFICATE

		EG

		2 OF 4 PEOPLE MUST BE PRESENT TO UNLOCK



COMPLIANCE


MANTRAP

	DOOR CLOSES BEHIND YOU BEFORE IT WILL OPEN IN
	FRONT OF YOU

EMI RADIATION  (ELECTRO-MAGNETIC INTERFERENCE)

----------wire with moving current---------------------

	moving magnetic field around wire

-------------another wire here--------------------------

	MAGNETIC FIELD WILL CAUSE A CURRENT TO FLOW
	IN A SECOND WIRE PLACED NEAR ENOUGH TO DETECT
	IT.  

	THIS CAN BE USED BY A 'SNOOPER' TO MONITOR
	(SURVEILLANCE) SIGNALS EVEN REMOTELY

FARADAY CAGE

	CHARGE WILL FLOW AROUND AN OBJECT, LEAVING
	CHARGE INSIDE UNAFFECTED

	==> USE THIS RULE TO BUILD EG SHIELDING AROUND
		WIRES

	UTP ETHERNET ==> STP SHIELDED ETHERNET

	COAX ==> SHIELDING AROUND IT

PDC PROTECTED DISTRIBUTION CHANNEL

	==> WIRING PROTECTED FROM INTERFERENCE EG BY
	METAL SHIELDING

TEMPEST BUILDING ==> GUARANTEED TO ADD DEGREE OF SHIELDING
	FROM SNOOPERS OUTSIDE

	== SECURE BUILDING

MANAGING INDUSTRIAL PROCESSES

	HVAC	HEATING, VENTILATION, AIR CON

	SCADA	ELECTRONIC SWITCHBOARD TO MANAGE INDUSTRIAL
		BUILDINGS EG HEATING PLANT

FIRE CONTROL

	EXTINGUISHER			FIRE 
	TYPE				TYPE

	WATER 				STANDARD NON-
					ELECTICAL FIRE

	FOAM				KITCHEN OIL PAN FIRE
					INDUSTRIAL CHEMICAL
					     FIRE

	CO2				STANDARD ELECTRICAL
					FIRE

	INERT GAS			HIGH VALUE ELECTRICAL
					EQUIPMENT TO PUT OUT
					FIRE BUT PRESERVE
					ELECTRONICS



SECURITY AGREEMENTS WITH 3RD PARTIES


SLA SERVICE LEVEL AGREEMENT

	CONTRACT WITH IT PROVIDER STATING WHAT SERVICES
	ARE PROVIDED FOR WHAT COST, WITH PENALTIES FOR
	NON-PROVISION

	EG HELPDESK  SILVER RESPONSE : 8 HOURS
		     GOLD              4 HOURS
		     PLATINUM          2 HOURS







#### BACKUPS


FULL (NORMAL) BACKUP

	A) BACK UP ALL FILES REGARDLESS IF THEY HAVE
		CHANGED OR NOT

	B) RESET BIT TO ZERO FOR ALL BACKED-UP FILES		

ARCHIVE (BACKUP) BIT

	SET TO ZERO WHEN NO CHANGES MADE
	SET TO 1    AS SOON AS ANY CHANGE MADE TO A FILE

INCREMENTAL BACKUP

	MON : BACK UP MONDAY FILES & RESET BIT
	TUE : BACK UP TUES   FILES & RESET BIT
	WED : BACK UP WED    FILES & RESET BIT

		PROBLEM : CRASH THURSDAY MORNING.
		RECOVERY REQUIRES 4 TAPES
		1) FRIDAY FULL 2) MON 3) TUES 4) WED
		==> LONG TIME TO RECOVER

DIFFERENTIAL BACKUP

	MON : BACK UP MONDAY FILE ((( DON'T CHANGE BIT )))
	TUE : BACK UP MON & TUE FILES (DON'T RESET BIT)
	WED : BACK UP MON/TUE/WED FILES (DON'T RESET BIT)

		CRASH THURSDAY MORNING: 
		RECOVER WITH 2 TAPES
		1) FRIDAY FULL 2) WED (INCLUDES MON,TUES)














#### Risk Analysis Process


	1. IDENTIFY YOUR ASSETS
	
		Equipment of value
		Data ==> OF HIGHEST VALUE EVEN THOUGH
			MAYBE CAN'T PUT PRICE ON IT!
		People 
			Knowledge and Experience of 
			key personnel
		Building
	
	   EXAM : AV ==> ASSET VALUE
	
	2. Identify Vulnerabilities / Weaknesses
	
	3. Identify Threats (Internal/External/Man-made/
				Natural)
	
	4. Probability Chart 
	
		% likelihood that a particuar threat
			will materialise and threaten
			a vulnerability
	
			eg 10% chance pothole x in road y
			       will generate an insurance
			       claim
	
		SLE SINGLE LOSS EXPECTANCY
	
			$$$COST OF ONE OCCURRENCE		
	
		ARO ANNUAL RATE OF OCCURRENCE
	
			PREDICTED NUMBER OF TIMES A YEAR
			THIS WILL HAPPEN
	
		ALE ANNUAL LOSS EXPECTANCY
	
			$$$EXPECTED LOSSES IN 1 YEAR				
	
	5. IMPACT ANALYSIS : LOOKING AT COSTS ABOVE OR
		OTHER EVENTS WHICH CAN'T BE MEASURED
		WITH MONEY EG LOSS OF MORALE, MOTIVATION,
		LOSS OF FACE, LOSS OF REPUTATION ETC ...


	6. WHAT DO WE DO??? 
	
		NOTHING  IE LIVE WITH RISK (EG CROSSING ROAD)
	
		INSURE (TRANSFER) OUR RISK BY INSURING
			AGAINST LOSS EG FOOTBALLER INSURE
					LEG
	
		PUT UP WARNING SIGNS AS DETERRENCE TO 
			ATTACKERS : PSYCHOLOGICAL WARFARE
		
		AVOID THE RISK ALTOGETHER BY DOING SOMETHING
			ELSE (DON'T CROSS THE ROAD BUT USE
				THE TUNNEL!)
	
		SPEND SOME MONEY OR TAKE ACTION
	
			"MITIGATION" => TAKE ACTION TO 
					MINIMISE OUR LOSS
	
			EG CREATE POLICIES, BUILD DEFENCES,
			   EDUCATE USERS, ADVICE FROM EXPERTS,
			   TAKE AGGRESSIVE ACTION AGAINST
			   POTENTIAL ATTACKER





































### Network Security Lab

#### Gaining Access To A Network

##### Class Lab

Spend 20 minutes or so listing and categorising all of the different types of physical and cyber threats to a business.  Be as specific as possible and let the class do the leading and the talking, and if necessary, some research!


#### NTFS And Share Permissions

##### Lab : NTFS and Share Permissions

1. On a server create a share.  
2. In `Active Directory` create two different groups eg `Accounting` and `ITSupport`.  
3. On the share, in the NTFS Security tab, create two folders and grant one access to one group (Accounting) and to the other folder grant access to the IT Support group. 
4. Create some users and place them in the appropriate groups.  
5. Check that the users have the correct access when they log in from a Windows client and try and access the share.






#### Virtual Online Router

https://emulator.tp-link.com/emulator_841hpv5_un/index.htm




#### Group Policy Management

Group policy is the central tool used to control all the Windows clients from the central domain controllers.  Windows uses a `multi-master` model so that the central policies are replicated to all domain controllers, and all Windows clients pick up these policies both at computer startup and also at user login, depending if the policy applies at startup or login.  

We can manage group policies in two ways

1. Local Computer

   Simply run `GPEDIT.msc` from a local computer

2. Server Group Policy Management

   This will affect the whole domain ie every computer joined to this domain, so it's important to know what you are doing!

   Server Manager => Tools => Group Policy Management.  Expand the forest, Domain and  the domain until the `Default Domain Policy` is showing.   If we click on the `Settings` tab in the middle of the page and choose `show all` we can expand and view the existing policy.

   To edit the policy, right click on `Default Domain Policy` and choose `Edit`.  We are now editing the policy.  

##### Lab - Password And Lockout Policy

1. Open Group Policy Editor
2. Find and edit the default domain policy
3. Open Computer, Windows, Security, Account, Password policy and set the following
   - Minimum length 10 characters
   - Expires every 30 days
   - Complex passwords enforced 
   - Minimum age 1 day
4. Open Computer, Windows, Security, Account, Account Lockout policy and set the following
   - 5 incorrect attempts are permitted after which lockout for 10 minutes
   - Reset the incorrect lockout count after 5 minutes

##### Lab - Publish A Printer

1. On the server using Print Management add a printer.  (Can just use the built-in printers on LPT1 port)
2. Share the printer and give it a simple name with no spaces eg `Brother2048`
3. In Group Policy edit the default domain policy then open Preferences, Control Panel, Printers and add a new printer.  Enter the share path to the printer as the path, for example \\<servername>\PrinterSharedName\.

##### Lab - Publish Software

1. Create a share eg C:\Share on Windows and share it as `Share`.
2. Add an msi file to the share for example Firefox from `https://www.mozilla.org/en-US/firefox/all/#product-desktop-release`  
3. In Group Policy, edit the default domain policy and choose `Computer, Policies, Software, Software Installation` and add a new package.
4. Browse to the `Share path` holding the MSI eg \\\ServerPhil\Share and select the package.  This is now ready for deployment.

<div style="text-align:center;"><em>Deploying Software With Group Policy</em</div>

![deploy-application-with-group-policy.PNG](deploy-application-with-group-policy.PNG)





#### DNS Labs














### Wireshark

##### Install Wireshark

Install Wireshark and analyse some packets travelling through the network

We can click on a Wireshark session to look at individual packets.  And every packet will have an Ethernet `source` and `destination` address just as per the Ethernet model above.  We can also inspect the payload.

As an interesting lab we can filter for `udp` traffic and then send a PING request to `8.8.8.8` address and look at the Wireshark data.   We can see that actually a PING request to Google (which is `8.8.8.8`) is just sending the alphabet there and back as a payload!  See if you can find it!






### Cookies

Lab - click on any https:// website and click to view the cookies







### WIFI labs



See ui.linksys.com labs for an example of SSID Broadcast and MAC filtering settings




##### Hacking Into Symmetric Encryption - Part 1

As an indicator of how careful we have to be with `symmetric` encryption please run the following commands 

```powershell
# show wireless profile names
netsh wlan show profiles
# choose one
netsh wlan show profile name="name-of-wireless-profile" key=clear
```

You should see the WIFI password displayed in plain text.

If you are on a MAC then in the `terminal` please type

```bash
security find-generic-password -wa name-of-wireless-profile
```

##### Hacking Into Symmetric Encryption - Part II

Nobody uses default usernames and passwords these days - do they?

Well it's always worth a check!

Check your WIFI router model then head to `[routerpasswords.com](https://routerpasswords.com)`.  See what you can find!

##### Hacking Into Symmetric Encryption - Part III

For further study please visit `Kali Linux` on your laptop and run `wifite` and follow the trail . . . 






### WIFI lab

https://medium.com/bugbountywriteup/how-i-hacked-into-my-neighbours-wifi-and-harvested-credentials-487fab106bfc
































































































### DEFENSE IN DEPTH

       MULTIPLE LAYERS OF SECURITY


#### STORAGE TYPES

DAS DIRECT ATTACHED STORAGE


ANYTHING DIRECTLY ATTACHED TO YOUR COMPUTER

	EG SATA DRIVE / SCSI DRIVE / IDE DRIVE



NAS NETWORK ATTACHED STORAGE


NAS DRIVE 

	USE FOR 'SOHO' SMALL-OFFICE HOME-OFFICE

			(LESS THAN 10 USERS)

	USING RAID 5 TO STORE FILES

		
		RAID 0 STRIPING : VERY FAST : BUT
			 PROBLEM IF ONE DRIVE FAILS YOU
			 LOSE ALL YOUR DATA
		RAID 1 MIRRORING OF 2 DRIVES 
		RAID 5 3+ DRIVES WITH FAULT TOLERANCE : 
			IF ONE DRIVE FAILS THE DATA IS
			ALREADY 'STRIPED' ACROSS OTHER
			DRIVES SO YOUR DATA IS SAFE



SAN STORAGE AREA NETWORK


USED BY LARGE COMPANIES TO STORE DATA USING FIBER OR 10GBPS
	COPPER LINES TO LIGHNING-FAST STORAGE NETWORK

LAN------FIBER SWITCH-------------SAN STORAGE AREA 10GBPS



CLUSTERING


SERVERA
	------------> SAN ----------> DATABASE FOR DATA
SERVERB

	SERVERA FAIL : AUTOMATIC SERVERB WILL TAKE OVER
		AND RESUME ALL SERVICES. CUSTOMER SHOULD
		NOT NOTICE!!!    FIX SERVERA AND FAIL BACK
		TO USING SERVERA AGAIN.

		SERVERA 'FAILOVER' TO B
		      B  FAILBACK  TO A   WHEN A FIXED



























Virtualization


RUNNING MULTIPLE MACHINES OFF ONE 'HOST' MAIN MACHINE

SNAPSHOT 

	INSTANT BACKUP OF VIRTUAL MACHINE

SANDBOX

	SECURE, CUT-OFF ENVIROMENT WHERE RUN TESTS
	ETC WITHOUT AFFECTING 'REAL WORLD'



Managing Hardware Installations eg Factories, Offices


HVAC Heating, Ventilation, Air Con for all standard
	Buildings

SCADA

	INDUSTRIAL MONITORING OF ALL ENGINEERING SYSTEMS
	EG HVAC, OR MORE ADVANCED EG POWER PLANT, CAR
	FACTORY ETC...




### MOBILE SECURITY


MOBILE SECURITY IS A 'HOT' ISSUE - WHY???

BYOD : BRING OWN DEVICE : PEOPLE USING PERSONAL DEVICES
	TO GET WORK DONE

	SECURITY RISK WITH COMPANY SENSITIVE INFO ON DEVICE
	WHICH IS 

	A) PERSONALLY OWNED
	B) NOT LOCKED DOWN
	C) NO CONTROL OVER OTHER APPS INSTALLED, IF THEY	
		ARE SNOOPING ETC
	

SOLUTION : ???

	ONE SOLUTION IS TO ONLY PERMIT 'REMOTE-DESKTOP' OR
	CITRIX-STYLE ACCESS WHERE PHONE JUST A 'WINDOW' TO
	REMOTE SERVER, NO DATA STORED ON MOBILE DEVICE

REMOTE LOCK

REMOTE WIPE

ON-BOARDING : HIRE EMPLOYEE : GIVE CORRECT TRAINING
			      POLICIES SIGNED

FIND-MY-DEVICE IF LOST

OFF-BOARDING : WIPE DEVICE SECURELY TO ERASE ALL DATA
		(EMPLOYEE LEAVE ORGANISATION)
















### VIRTUALIZATION


RUNNING ONE OR MORE SERVERS FROM A LARGER 'VIRTUAL HOST'

GOOD

	IF YOU ARE LOW ON CPU, RAM, HARD DRIVE OR 
		NETWORK THROUGHPUT THEN YOU CAN 
		DYNAMICALLY UPGRADE THEM AS YOU NEED				
	CREATE 'SANDBOX' ENVIRONMENT FOR SECURE TESTING
	
	CARE AND MAINTENANCE OF SERVER OS/BACKUPS ETC
	IN HANDS OF EXPERTS

	NO LONGER REQUIRE PHYSICAL SPACE TO RUN SERVER
		ROOMS ETC

BAD

	TOTALLY DEPENDENT ON INTERNET CONNECTION...

	UNSUITABLE FOR LARGE FILE MANIPULATION EG HUGE
	VIDEOS DOWN LAN WIRE

	COSTLY $$$ JUST TO HOST A SERVER FOR YOU...!!!




















### Site Survey


Used to check
	1) POWER IS NOT TOO GREAT FOR OUR WIFI : SOLUTION : REDUCE
			POWER  (Power in DECIBEL units)

	2) WIFI reaching all necessary parts of our building

HACKER OUTSIDE IN CAR : REDUCE POWER TO MAKE IT HARDER FOR THEM 				OUTSIDE	













### Encryption Methods


These are in increasing order  ((EAP : shell : container))

LEAP		weak		L => LIGHTWEIGHT EAP

PEAP		good		PEAP = PROTECTED EAP
				SERVER : CERTIFICATE
				CLIENT : USER/PASSWORD

EAP-TLS		best		CERTIFICATES : BOTH ON SERVER
				AND CLIENT : ULTRA-SECURE



### Mobile Encryption


ECC Elliptic Curve Cryptography : SMALL, FAST ==> GOOD FOR MOBILE
					PHONE ENCRYPTION!!!



















### WIFI


Captive Portal : Forces you to read and accept terms and conditions before
connect to free wifi

#### Secure WIFI


1) MAC filtering ==> a LOT OF WORK!!!  (only connect if your MAC 
						matches)

2) Turn down POWER!

3) ??? not very good ??? ==>  EXAM : OK ANSWER : DISABLE SSID
					BROADCAST

	SSID ==> Name of WIFI EG FreeHotelWIFI

	POSSIBLE : DISABLE BROADCAST OF SSID
		
		(( PHONE ==> SEE 'UNNAMED NETWORK'))




### WIFI CHANNELS


WIFI HAS 13 CHANNELS

	BUY DEVICE SET TO CHANNEL 1,6, OR 11

		POOR SIGNAL ==> CHANGE CHANNEL













#### War driving / war chalking


WAR CHALKING	: MARKING OUTSIDE FREE WIFI

WAR DRIVING     : LOOKING FOR FREE WIFI



#### WPS WIFI Protected Setup


ONE BUTTON PUSH SETUP : AUTOMATIC 8-DIGIT PIN USED TO CONNECT

	VULERNABILITY : SPLITS INTO TWO 4-DIGIT PINS, EACH ONE
		CAN BE CRACKED EASILY

	EXAM : TURN OFF WPS !!!




















#### Rogue Access Point	

Unauthorised WIFI

#### Evil Twin	

WIFI with SAME NAME AS GOOD WIFI POINT

#### Jamming	

Interference

#### Blue Jack	

Virus over bluetooth / attack (Hi-Jack)

#### Snarf	

Steal

#### Blue Snarf	

Steal data eg contacts over bluetooth

#### Distances


NFC		10cm		Near Field Communication

IR 		1m		Infra Red

BLUETOOTH	10m		

WIFI		30m

WIFI 'AC'	100m

ETHERNET	100m		(Repeater : 200m)

10BASE2		200m (185)	THINNET COAX

10BASE5		500m 		THICKNET COAX

USB		5m



### Broadband Methods

### Dial up


Modem : used to dial up (56k or 92k)



### VPN


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

			
### IPSEC	
	AH AUTHENTICATION
	ESP ENCRYPTION




















## Network Architecture

SPOF Single Point Of Failure

On-premise network architecture

Cisco 3 Layer Network Architecture : Core, Aggregation and Access layers


### Defense-in-depth 

#### Physical Security

Mantrap

Keypad

RFID badge





#### Network Security




##### Access Control

Security Groups

Permissions

RBAC Rule Based Access Control
















##### Privileged Access Management

Privilege Escalation

Keeping your administrator passwords secure

RAT

APT Advanced Persistent Threats residing on your network

Keeping your private API keys secure

Keeping your private certificates secure



















##### Data Security

Value of data

Storage of data

Local vs Cloud storage of data

Data Exfiltration
























































### Virtualization


VM = VIRTUAL MACHINE

.VHD = VIRTUAL HARD DRIVE		WIN7
.VHDX = NEW VHD TYPE			WIN8/10

Hypervisor ==> MINI OPERATING SYSTEM TO RUN VIRTUAL MACHINES
		HYPERV 	WINDOWS Free

SANDBOX ==> VM FOR TESTING EG VIRUSES : TOTALLY ISOLATED

SNAPSHOT ==> INSTANT BACKUP OF YOUR VM SO CAN RESTORE QUICKLY

VHDX = HARD DRIVE

AVHDX = CHANGES SINCE LAST SNAPSHOT!!!





Problems with VMs


Easy to COPY AND STEAL A WHOLE VM!!!

	VM ESCAPE : Lock VM so it only runs on ONE HOST WHICH
			YOU DESIGNED IT FOR!

VM sprawl : easy to create new VMs which can be unpatched / unmanaged

VM escape : Virus from VM can INFECT HOST
































### AV SCANNING 

VIRUS SCAN : BASED ON VIRUS HASH = SIGNATURE


HOW DOES ANTIVIRUS SOFTWARE WORK?

	ALL KNOWN VIRUSES ==> TAKE THEIR 'HASH' THEN
	MATCH ANY FILES ON YOUR COMPUTER WHICH HAVE
	THE SAME HASH ==> THEY ARE A VIRUS!!!

	" SIGNATURE-BASED SCANNING "

OR : ANOMALY-BASED

	MATCHING BEHAVIOUR AGAINST A 'BASELINE' PREDICTED
	GRAPH OF ACTIVITY

OR : BEHAVIOUR-BASED 

	MATCHING AGAINST CERTAIN RULES ==> PRONE TO
	'FALSE POSITIVE'  ((GOOD FILE IDENTIFIED 
				INCORRECTLY AS A VIRUS))

















### NETWORK ATTACKS


ROGUE ACCESS POINT

	WIFI POINT (UNAUTHORISED) SET UP IN YOUR 
	VICINITY AND PEOPLE CONNECT TO IT UNAWARES

EVIL TWIN

	WIFI : WIFI ROUTER WITH SAME NAME AS EXISTING 
		ROUTER

		SSID : BROADCAST NAME OF WIFI HOTSPOT

		EVIL TWIN : SAME SSID

	SOCIAL MEDIA : GET FRIEND REQUEST FROM AN 
			EXISTING CONTACT

	
DRIVE-BY-DOWNLOAD

	JUST VIEW SITE : AUTO-DOWNLOAD STARTS IMMEDIATELY

CLICKJACK

	INNOCENT BUTTON EG 'PLAY VIDEO' ALSO START
				MALICIOUS DOWNLOAD

URL SHORTENING SERVICE

	<HTTP://REALLYREYREALLYREALLYREALLYLONGURL.COM>

	==> TURN INTO BIT.LY/234SDFR.COM		

	BIT.LY
	GOO.GL

		RECOGNISE THAT A HACKER'S SITE COULD
		BE HIDDEN BY 'SHORT' URL

DOS DENIAL OF SERVICE : FLOOD SERVER WITH TRAFFIC

	PING ATTACK : SMURF ATTACK

	SYN FLOOD

		TCP HAS 3-WAY HANDSHAKE TO SET UP 
			CONNECTION : EXPLOIT THIS
			WITH TCP REQUESTS

P2P : PEER-TO-PEER

	CARE !!! COMPUTER IS VULNERABLE WHEN USING
		TORRENT SITES...CLIENT GETS INVADED
		BY OTHER PEOPLE NEEDING COPIES
		OF FILES

ARP POISON

	ARP -A   shows ARP 'CACHE'

		ARP ==> ADDRESS RESOLUTION PROTOCOL

		CONVERTS ....MAC TO IP

DNS POISON

	CORRUPTING DNS DATABASE
	
	EG SERVERA : HACKER RETURN FAKE IP FOR THIS
			SERVER.  PEOPLE WILL GO 
			TO HACKER'S ADDRESS INSTEAD
			OF REAL SERVER

DNS HIJACK : FULL DNS SERVER BUILT AND SET UP BY ATTACKER
	TO POINT PEOPLE TO THE WRONG SITES









### WIRELESS




ROGUE POINT : FAKE WIFI POINT

EVIL TWIN : WIFI POINT WITH SAME NAME

JAMMING : CAUSING INTERFERENCE SO YOU CAN'T DISCERN
		YOUR GOOD SIGNAL

SNARF = STEAL DATA

BLUESNARF = GETTING DATA STOLEN VIA BLUETOOTH

BLUEJACK = PHONE HIJACKED VIA BLUETOOTH EG INSTALL MALWARE
		
NFC NEAR FIELD COMMUNICATION : 5cm range

	CARE : SNOOPING IN NEAR VICINITY (RADIO WAVES)

WAR DRIVING

	LOOKING FOR FREE WIFI

WAR CHALKING

	MARKING ON THE PAVEMENT OR WALL WHERE FREE WIFI
		IS TO BE FOUND, SO OTHERS KNOW ALSO

SHORT PASSWORDS - PROBLEM!!

	1) KEY STRETCH 

	2) SALT 

	PASSWORD + SALT PASSWORD ===> MD5 ==> HASH 
		    
	mypass  +   Mon: blue   ==>md5         hash
		    Tue: red
		    ...

			DATABASE : STORE  HASH OF PASSWORD
				     +    SALT

WHAT 4 THINGS DO WE NEED TO CONNECT TO INTERNET???

	1. IP ADDRESS  
	2. SUBNET MASK 255.255.255.0	
	3. GATEWAY     (YOUR OWN PRIVATE ROUTER ON YOUR LAN)
	4. DNS

GATEWAY = COMPUTER ON OUR LAN THROUGH WHICH ALL INTERNET
		TRAFFIC MUST PASS

SINKHOLE ==> IN WIFI, SETTING UP FAKE GATEWAY SO 
	INTERNET TRAFFIC GOING THROUGH BOGUS GATEWAY

		EG HACK INTO DHCP ==> GET DHCP TO GIVE
			OUT A FAKE GATEWAY ADDRESS

WPS : ONE-BUTTON AUTO-SETUP OF HOME WIFI

	VULNERABILITY : 8-DIGIT PIN NUMBER USED TO SET UP

		BUT IT'S SPLIT INTO TWO 4-DIGIT NUMBERS

		   4 6 3 7   |   5 8 3 4

		EACH NUMBER CAN BE HACKED SEPARATELY
		(1 IN 10000 SO EASY TO CRACK)



















### ENCRYPTION 


#### S/MIME


ENABLES MAPPING OF CORRECT PROGRAM TO RUN APPLICATIONS 
	INSIDE BROWSER

		EG PDF : GET CORRECT PDF READER

		   MP3 : GET CORRECT PLUG-IN TO PLAY FILE	



#### PGP PRETTY GOOD PRIVACY


EMAIL ENCRYPTION



#### HARDWARE ENCYPTION


HSM HARDWARE SECURITY MODULE

	DEDICATED DEVICE : ENCRYPTION ONLY (STORE
		PRIVATE ENCRYPTION KEYS SECURELY)		



#### NTFS ENCRYPTION


USED BY WINDOWS TO ENCRYPT FILES

LIMITED USE!!!

	CANNOT ENCRYPT
			1) WINDOWS

			2) PAGE FILE = SWAP FILE 
			             = VIRTUAL MEMORY

				SPILL-OVER WHEN RAM 
				GETS FULL			

			3) HIBERNATE 
				
				PUTS RAM CONTENTS TO 
				PERMANENT STORAGE
				AND SHUTS PC DOWN



#### BITLOCKER


PROVIDES FULL DRIVE ENCRYPTION, UNLIKE NTFS

PROBLEM!!!  OUR HARD DRIVES BOOT USING MBR MASTER
		BOOT RECORD TALKING TO BIOS/CMOS
		CHIPS ON OUR COMPUTER

		THESE TECHNOLOGIES DO NOT UNDERSTAND 			ENCRYPTION!!!

SO TO GET BITLOCKER TO WORK WE MUST SPLIT OUR HARD DRIVE
		IN TWO

|  100MB   |      REST OF DRIVE			|
   PLAIN	  BITLOCKER ENCRYPTED
   TEXT

TPM CHIP  (TRUSTED PLATFORM MODULE)

	DEDICATED CHIP TO STORE BITLOCKER KEYS 

	
	(( IF NO TPM CHIP IS PRESENT, CAN STORE 
		BITLOCKER KEYS ON USB STICK ))



#### SQL DATA


STANDARD DATABASES STORE DATA IN ROWS AND COLUMNS LIKE EXCEL

	TABLE NAME

		ID	FIELD1	FIELD2

		1	JOE	BLOGGS
		2	JOHN	DOE

	CALLED A 'RELATIONAL' DATABASE = MYSQL/SQL
			
		MYSQL = FREE
		SQL   = PAID (MICROSOFT)
		ORACLE = PAID



#### BIG DATA / NO-SQL


TODAY SO MUCH INFORMATION GETS CREATED AND STORED THAT
TRADITIONAL 'RELATIONAL' DATABASES ARE TOO SLOW...

NEW BREED OF DATABASE - NO-SQL OR 'BIG-DATA' STORAGE

FIELDS LOOK LIKE

		{
			"ID" : "1"
			"NAME" : 'PHIL'	
		}

ISSUES WITH SECURITY : DEVELOPING TECHNOLOGY : SECURITY,
	ENCRYPTION, PROTECTING DATA



#### DATA DISPOSAL


MAGNETIC DATA CAN BE RESTORED BY CROOKS IF WE DISPOSE
	OF IT CASUALLY.  STRICT POLICIES EXIST TO 
	ENFORCE CORRECT METHOD OF 'DISPOSING' OF DATA

1. WIPE OUR HARD DRIVE WITH RANDOM DATA 7 TIMES OVER

	(( THINK MUDDY FIELD : DRIVE 100 CARS ROUND 
		FIELD 10 MINUTES : ERASE ORIGINAL 
		TRACKS ))

2. DEGAUSS : TAKE A MAGNET AND WIPE DRIVE

3. PHYSICAL DESTRUCTION EG HAMMER OR PHYSICALLY SHRED DRIVE



#### HARDENING YOUR SERVER


HARDEN SERVER = INCREASE SECURITY

BASELINE = ORIGINAL SETTINGS

	HARDEN ==> CREATE NEW BASELINE FOR HARDENED SERVER

GET BASICS RIGHT

	UPDATES FOR SERVER : ON
	UPDATES FOR AV SOFTWARE : ON
	UPDATES FOR APPLICATIONS : PATCH MANAGEMENT : ON



#### INPUT VALIDATION


STOP 'COMMAND INJECTION' ATTACK   

	FORM  ==>   INJECT CODE EG <script>....code </script>

ERROR / EXCEPTION

	COMPUTER CRASHES : REVEAL SENSITIVE INFO EG
	 FILE NAMES AND PATHS ON ROOT SERVER

		ERROR: //c:\\windows\\system32\\thisfile.dll...
			 c:\\....to website....

	PROGRAMMER HAS TO 'HANDLE' EXCEPTIONS/ERRORS PROPERLY
		WITHOUT GIVING HACKERS EXTRA INFO

XSS : TRYING TO HACK FROM YOUR SITE TO NEIGHBOURING SITE
	(CROSS-SITE SCRIPTING)

XSRF : LOGGED IN ALREADY SO POSSIBLE POTENTIAL TO HACK 
		GREATER 



### Types of testing


BLACK BOX TESTING : JUST LOOK AT INPUT / OUTPUT ONLY
		(NOT DETAILS OF INSIDE CODING)

WHITE BOX TESTING  : KNOWING CODE INSIDE, TRYING TO 						TO BREAK IT DELIBERATELY

UNIT TESTING : ONE SMALL BLOCK OF CODE

INTEGRATION/SYSTEM TESTING : TESTING THE BIG PICTURE

ALPHA TEST : INITIAL RELEASE TO CHOSEN INDIVIDUALS FOR TESTING
	EG JOURNALISTS, DEDICATED AUDIENCE

BETA TEST : FINAL RELEASE, FREE, SO PEOPLE CAN TEST IT FOR 
		YOU (THEY GET FREE GAME!) 

FUZZ TEST : THROW RANDOM DATA AT APPLICATION : DOES IT
		WITHSTAND AND SURVIVE ???


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

Validation Testing - high level overview - has original purpose of software been achieved

Verification Testing - have the design specs been met





#### PROXY SERVER


USED IN BIG COMPANIES FOR MANY REASONS : 

1) SECURITY : USING DIFFERENT IP THAN REAL GATEWAY

2) CACHING : SPEED OF DATA : STORE COPIES OF FILES ETC
			ON LOCAL LAN PROXY SERVER. 
			CLIENTS GET FASTER ACCESS

3) FILTERING : WHITELIST (GOOD SITES) /BLACKLIST (BLOCKED
			SITES)

4) USER ACTIVITY : KNOW WHICH USERS ONLINE, HOW LONG, WHICH
			SITES...BILLING PURPOSES...



#### TCP TRUSTED COMPUTING BASE


OPERATING SYSTEM WHICH CAN BE 'HARDENED' OR LOCKED DOWN




#### UTM UNIFIED THREAT MANAGEMENT

BIG PICTURE OF PROTECTING OUR WHOLE NETWORK


















### NETWORKS

HUB		LAYER 1		ELECTRICITY IN, 
				ELECTRICITY OUT (NO
				FILTERING)  
				BAD ==> BROADCASTS!!!!

REPEATER	LAYER 1		EXTEND ETHERNET 100M TO 
				200M OR MORE			
				(( 2-PORT HUB ))


LOAD BALANCER	DOING 'ROUND ROBIN' TO ENABLE MULTIPLE
			SERVERS TO HANDLE MANY REQUESTS

IDS INTRUSION DETECTION SYSTEM 	: JOB IS TO DETECT
		HACKING ACTIVITY / VIRUS ACTIVITY			

HOST = MACHINE EG SERVER/CLIENT USUALLY 'HOSTING' A
		SERVICE

NODE = ANY DEVICE WHATSOEVER ON OUR NETWORK : IP PHONE,
		ROUTER, FIREWALL...

HIDS = HOST-BASED DETECTION : SOFTWARE ON ONE MACHINE ONLY

NIDS = NETWORK-BASED DETECTION EG ON FIREWALL / GATEWAY
		PROTECTING WHOLE NETWORK

IPS INTRUSION PREVENTION : ABILITY TO DETECT ATTACK BUT ALSO
	TAKE MEASURES TO STOP AN ATTACK...

	HIPS HOST-BASED
	NIPS NETWORK-BASED






### ANTI VIRUS SCANNING 

#### SIGNATURE BASED SCANNING

	FIXED SCANNING TO MATCH 'HASH' OF KNOWN VIRUSES
		(BEST AS GIVES RELIABLE DETECTION)

#### ANOMALY BASED SCANNING 

	LOOKING AT 'BASELINE' GRAPHS OF PREDICTED
	TRAFFIC PATTERNS AGAINST ACTUAL TRAFFIC 
	PATTERNS OVER A NETWORK

#### BEHAVIOUR BASED SCANNING

	PATTERNS IN NETWORK TRAFFIC OR 'RULES' GOVERNING
	EXPECTED BEHAVIOUR : ALERTS IF TRAFFIC BREAKS
	SOME 'EXPECTED RULES'

		** PRONE TO FALSE POSITIVE **

		FALSE POSITIVE = TAKING A GOOD FILE AND
				MARKING IT AS A VIRUS

#### HEURISTIC SCANNING = REAL-TIME SCANNING



### VPN : VIRTUAL PRIVATE NETWORK


ENCRYPT DATA TRAFFIC IN A 'TUNNEL' ACROSS INTERNET



VPN Concentrator : Allow multiple VPN connections into ONE SERVER

Web Security Gateway = Layer 7 firewall looking at content
of traffic coming into your network


	==> Deep packet inspection

BIG PICTURE ==> UNIFIED THREAT MANAGEMENT (UTM)



NAC : NETWORK ACCESS CONTROL : PROTECTS OUR NETWORK FROM ...
COMPUTERS DIALING IN WHICH MAYBE HAVE VIRUSES ETC


		==> CHECK HEALTH AND FORCE NON-COMPLIANT
			COMPUTERS TO COMPLY










# Security Architecture 

## Zones

Network segments with traffic between zones controlled eg with a firewall enforcing ACL rules

## Bastion Host = DMZ 

external internet-facing servers

       often configured as proxies, talking to services inside the LAN
       
### Jump Box

single machine on DMZ from which the admin consoles on the bastion hosts may be reached. Access to the Jump Box is tightly controlled eg by single firewall rule to single IP or small subnet on LAN

Management machines (on the LAN) which connect to the jump box should be denied broad internet access

Blackhole Redirect unused ports to specific part of network that is a dead end


       create VLAN or
       redirect traffic to NULL router interface


DOS attack : normally use ACL but instead can just put all traffic to a blackhole

Sinkhole

Instead of blackhole : deleting all packets

Sinkhole is alternative gateway through which all the traffic redirected can also be analysed


       Goal is to find out source of attack and neutralise it
       
       Martian packet = packet destined for IANA Private or restricted range

       Bogon = unallocated range on the internet (there are none left)
       
       
       


## Hardening

Host Baseline = minimum secure config

Attack surface = what can be attacked


       Interfaces - wired and wireless
       Services
       Ports
       


### Baselining

Baselining checklist

Remove all non-necessary devices
Install OS updates and patches, and application updates etc
Note : test updates etc offline first then use distributed system to update clients
Uninstall all unnecessary network protocols
Uninstall/disable services
Remove / disable unnecessary shares
ACL on all resources
Least Privilege user accounts especially with regards to installing software
Rename local admin and apply strong password
Disable guest accounts
Disable default group accounts
remove everyone group permissions from resources
Install and update AV. Autoscan USB&Email&Downloads
Routers and Switches: Update OS, Firmware, ROMMON = OS in NVRAM

DOS attacks - consider possibility and mitigate or provide backup resources

#### Group Policies

Admin Templates - registry

RSoP - settings can be viewed
       
Security Templates
      
DAC - discretionary NTFS ACL

MAC - mandatory CLASSIFIED ETC - Need to know basis

       Subject can't set or change the MAC level
       
## Endpoint security

       Endpoint = client device
       
       Perimeter security = gateway/firewall/dmz etc (opposite of endpoint)
       

### Port security : restrict access


       disable using management software
       
       MAC filter : hard in practice
       
       MAC limiting : only will register first two MAC addresses then drop the others
       
       MAC flooding : switch could 'fail-open' and become like a hub 
              so attacker easier to sniff
              
       802.1x port based control  (port based NAC = PNAC)
       
              supplicant = client device requesting access
              
              switch = authenticator
              
                      EAPoL EAP over LAN requires password, token or certificate
                      
                      Pass to RADIUS server for authentication
                      
              unauthenticated hosts => go to guest VLAN
              


Extra

Is intrusion primary or secondary

Avoid alter attacker

Preserve evidence















































#  Identities 


## NAC

Health policy : firewall, updates etc

Agent on client

Remediation to bring to good health


       refuse or
       quarantine (if VPN) or
       captive portal (if web app) and from there install fixes
       


Pre-admission Post-admission - is it still compliant?

### NAC Policy


       Time restrictions
       Location restrictions
       Role-based restrictions (user and device)
       Rule-based restrictions
       
       Microsoft NAC
       Cisco CNAC
       TPM NAC 
       
       Context-based authentication 
              Time
              Location
              Frequency : number of logins during a given period
              Rule-based : can have multiple factors involved
       


#### Types of rules


       Anti-Malware
              Signature based = HASH
              Behaviour Based = Deviation from baseline eg high CPU/RAM, high traffic with DOS attack
              Anomaly Based = Patterns beyond the normal eg check packet headers for anything unusual, or traffic patterns
              Heuristic = real time scanning, looking for certain patterns in malware code
       NAC
              Time based
              Location based
              Role based
       


## Identity

enrol = sign up

provision - create new account

captcha - verify genuine user signing up

identity proof for user at sign up

privileged accounts

shared accounts - don't know who did what

rbac role based access control - by job role


### identity by ...

IP address
MAC address
Host name
Machine certificate
App certificate





### nac 

complicance

- wifi
- wired
- protocol
- host
- ip
- ports
- apps








## certificates

### sigcheck verify root certificate valid

tool from sysinternals

```bash
sigcheck -tv 
```

### openssl

### certutil (windows)






## dial in

### RADIUS


       Radius server performs authentication (AD)
       
       Client - 802.1x - wifi or other - RADIUS - AD LDAP AUTHENTCATION BACKEND

       windows NPS
       
       linux FreeRADIUS
       
       uses UDP
       
       encrypts ONLY PASSWORD
       
       
       


### TACACS+


       uses TCP
       
       ENCRYPTS ALL DATA - so more secure than RADIUS


### LDAP (Active Directory)


       LDAP 389 


Defences multiple logon attempts geo-velocity - trying to logon from different placess geographically device fingerprinting - is this the first time this device has been used? if so, use two-factor authentication

### SSO

Federation

open to business partners

provisioning = creating accounts for use with federation


       manual
       auto eg by group membership
       


#### SAML : token-based SSO (security assertion markup language)


       SAML is enterprise controlled


#### OpenID


       sign on with .. google, facebook account etc

       user-centric logon
       
       no sharing of data from eg google to the company using this login
       
       OpenID Connect uses OpenAuth also
       Facebook connect ...
       


#### OpenAuth (Open Authorization)


       site providing sharing of data with site being authenticated
       


Password reset

1. questions
2. secondary verification eg text or email



























## Hacking attempts

Impersonation : pretending to be somebody else.
Use ‘identity proofing’ to mitigate = be sure to identify someone properly online

DNS Spoof pharming = DNS Spoof

Session hijack : mitigate with encryption of session

Replay attack

MITM

MItB

ARP Spoof

       Ettercap lab
       
       DAI Dynamic ARP Inspection : prevent ARP Spoof : drop Ethernet packets that do not have a known sender, recipient and a valid entry in VLAN table


Privilege escalation


       Using FLAW IN APPLICATION TO GAIN ACCESS

       Backdoor = deliberate

       Vertical : go from user to admin rights
       Horizontal : go from one user and gain access as another user


Web hacking

SSLstrip


       tricks user into thinking connection is secure when it's not
       
       Padlock is not showing so user can spot this and know they are
                      being hacked
                      
       HTST can prevent this attack : HTTPS is the ONLY TRANSPORT ALLOWED
                      TO THAT SITE SO HTTP IS NOT AN OPTION, SO AN ATTACKER CANNOT
                      FAKE AN HTTP SESSION
                      


XSS Cross Site Scripting


       Malicious code runs on client browser with same permission level
              as a trusted site
              
       reflected = non-persistent attack : once
       
       stored = persistent attack eg malicious script stored in a blog 
              or user forum
              
       XSS is script from server executed on client
       
              eg GET /cgi-bin/log.cgi?<script>...</script>
       
       Or
       
       could execute a script to create a new DOM page 

       Mitigate with INPUT VALIDATION
       


XSRF : like XSS cross-site scripting but have additional power due to virtue of also being logged in (authenticated to site)


       mitigate by mutual authentication on both sides of the connection
       
       


Cookies


       Retain information about STATE
       
       Cookies are sent WITH THE HTTP REQUEST FROM CLIENT TO SERVER AND BACK
       
       NON-PERSISTENT = SESSION
       
       PERSISTENT
       
       XSS ATTEMPTS TO USE COOKIE ON ANOTHER SITE
       
       SSL COOKIES ARE TRANSMITTED ENCRYPTED BUT STORED PLAIN TEXT


       


XSRF EXPLOIT COOKIES


       can exploit applications which use cookies to authenticate and
              track sessions























CIDR /24 MEANS


REMOTE ACCES


ALLOWING COMPUTER TO DIAL IN TO OUR SERVER (RAS = REMOTE
ACCESS SERVER)

	ADD ROLE ==> ROUTING & REMOTE ACCESS

CLIENT => DIAL IN => RAS SERVER
		     (VPN SERVER)

			==> AUTHENTIATE WITH RADIUS SERVER
				(TALK TO ACTIVE DIRECTORY)

			==> HEALTH CHECK VIA NAC NETWORK
				ACCESS CONTROL



















## Threat Detection


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




Detecting attacks


Honeypot  : FAKE LURE : 1) We can get info on them!
			2) They are wasting their time!!!

Honeynet
	    FAKE NETWORK





















### Network Attacks And Security


Zero day ==> ATTACK ON BRAND NEW SOFTWARE : BAD GUYS FIND VULNERABILITY
AND EXPLOIT IT BEFORE GOOD GUYS GET TO KNOW WHAT'S HAPPENING

Hardening Your System


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



























### Code Injection Vulnerabilities

SQL Injection

Code injection

Man In The Middle






















### Forensics



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





















TPM : CHIP TO STORE BITLOCKER KEYS

HSM : HARDWARE SECURITY MODULE : CAN STORE ANY KEYS FOR YOUR
		COMPANY (STAND-ALONE DEVICE)

​		

DLP = data loss prevention











































## Network Scanning 
   
			   
ATTACK SURFACE ==> SOMETHING IN WHICH WE ARE EXPOSED TO a4 THREAT

HONEYPOT

	DECOY TO DISTRACT ATTACKER 1) THEY ARE DISTRACTED
				   2) WE CAN PERHAPS MONITOR
					  THEM
HONEYNET

	WHOLE NETWORK OF DISTRACTION


### Scanning for vulnerabilities

Enemy may do the following : 

	Footprinting : use common sense methods to try and
			gain info on you.  Using methods
			which may be legal eg public 
			birth/death/marriage records, 
			public accounts records, website info

	Enumerating : Using illegal methods to gain further
		      detailed info about you.

		      EG  COMPANY : DOING PORT SCANS, 
			   HACKING IN AND GETTING NETWORK INFO,
			   IP INFO, PORT INFO, SERVER NAME 
			   INFO, NAMES OF KEY PEOPLE WHO
	
			Personal level : credit card info,
				security answers to questions

You may do the following

	Vulnerability Scan

	Port scan

	Deep-level test to try and penetrate your network
			eg using ethical hackers etc






### DLP


TWO MEANINGS

	DATA LOSS PREVENTION : DATA TAKEN (STOLEN AND REMOVED)

	DATA LEAK PREVENTION : COPY TAKEN 



FAILSAFE : Industrial chain saw will not work unless thumb and fingers
pressing on two separate buttons

FAILSECURE


POWER GOES OUT : SECURE LOCKED DOOR : REMAIN LOCKED BUT
	IF PERSON TRAPPED INSIDE THEY STILL CAN FORCE
	THE DOOR OPEN AND GET OPEN

	EG SERVER ROOM / SAFE



FAILOPEN


POWER GOES OUT : DOOR SWING WIDE OPEN



RESPONDING TO SECURITY INCIDENTS


IRP : INCIDENT RESPONSE POLICY

	EG PEOPLE TO CONTACT STRAIGHT AWAY
	   ACTIONS TO TAKE EG UNPLUG FROM NETWORK
	   DESIGNATED PEOPLE TO BE 'IN CHARGE' IN CASE
		OF UNCERTAINTY
	   FIRST RESPONDER : EMERGENCY RESPONSE TEAM



FIGHTING CRIME : FORENSICS


IT IS IMPORTANT IN A COURT OF LAW THAT EVIDENCE IS 
	ADMISSIBLE.  IF NOT, IT CANNOT BE USED
	AGAINST A DEFENDANT	

INVESTIGATING A CRIME

	1. LOOK AT ANYTHING 'VOLATILE'  <<VOLATILITY>>

		TURN OFF ==> INFO DISAPPEARS

		EG  CONTENTS OF RAM OR PAGE FILES ETC

	2. HARD DRIVE : TAKE IMAGE STRAIGHT AWAY

		SIGN/HASH IMAGE 

	3. CREATE A 'CHAIN OF CUSTODY'

		SIGNED LIST OF PEOPLE RESPONSIBLE FOR
		EVIDENCE AT ALL TIMES



DISASTER RECOVERY


FAULT TOLERANCE = RECOVERY FROM FAULT

	EG RAID 5  :   DRIVE FAILS ==> STILL SURVIVE
	   CLUSTER :   SERVER FAILS ==> GO TO SERVERB

SINGLE POINT OF FAILURE = ONE THING WHICH, IF IT BREAKS, 
		MAKES YOUR WHOLE SYSTEM FAIL (EG YOUR BRAIN!)

	ROUTER : GATEWAY : TO INTERNET
	SWITCH : CENTRAL POINT OF NETWORK

BCP BUSINESS CONTINUITY PLAN : WRITTEN PLAN FOR ACTIVITY
		IN CERTAIN EVENTS EG WEBSITE GETS HACKED.

BIA BUSINESS IMPACT ANALYSIS : WHAT MIGHT HAPPEN IF THREAT
		X MATERIALIZES (IMPACT ON OUR BUSINESS)

MTD MAX TOLERABLE DOWNTIME

	EG IF SERVER GOES DOWN, IT MUST BE UP WITHIN 2 DAYS	

RPO : RECOVERY POINT OBJECTIVE

	HOW FREQUENT ARE YOUR BACKUPS???
	IF DISASTER, HOW MUCH DATA ARE YOUR PREPARED TO LOSE?
	EG EVERY 4 HOURS YOU BACKUP, THEN POTENTIALLY
	ARE YOU PREPARED TO LOSE 4 HOURS WORTH OF DATA?

RTO RECOVERY TIME OBJECTIVE : PLANNED TIME BY WHICH WE 
	HAVE FIXED AN ITEM AND GET EVERYTHING WORKING



HOT/WARM/COLD SITE


HOT SITE : 100% READY TO GO - COMPUTERS, NETWORK

		*** TOO COSTLY ! ***

WARM SITE : PCS THERE, SHUT DOWN.  1-2 DAYS TO GET SET 
	UP, RESTORE BACKUPS, BEGIN WORK.

		*** HIGH BUT REASONABLE COST **

COLD SITE : JUST BARE SHELL OF BUILDING WITH WATER AND
		ELECTRICITY AND LITTLE ELSE

	1-2 WEEKS TO SET UP



MTTF MEAN TIME TO FAIL = AVERAGE TIME BEFORE EG HARD DRIVE FAIL (3 YEARS)


==> MTBF MEAN TIME BETWEEN FAILURES



MTTR MEAN TIME TO REPAIR : AVERAGE TIME TO FIX EG SERVER

Server

1. RENAME
FIX SERVER IP
2. DCPROMO : BUILD DOMAIN phil.local (COMPANY)
3. DNS ON CLIENT : POINT TO SERVER IP
4. JOIN CLIENT TO DOMAIN









































### Advanced Malware Attacks

Ping flood	Flooding a server with PING REQUESTS
ICMP flood
PING = ICMP

Smurf Attack	Malformed PING : DISGUISE SOURCE IP

TCP SYN Flood
TCP : Always send a '3-WAY HANDSHAKE' to set up
1) Hello : I'm going to send you data 2) Server : OK 3) Client : Done


SYN FLOOD : Send lots of 'hello' (stage 1) requests ONLY
	Server : reserve space for conversations which never happen



Flood guard : watches for and prevents flood attacks (DOS flood)

Port Scan	Scanning network for all OPEN PORTS (free online port scan)	*** NOTE : THIS IS SEEN AS AN ATTACK **

XMAS Attack	Port Scan ==> ALL OF THE POSSIBLE 'FLAGS' SET TO 'HIGH' (1)
TO PROVOKE A RESPONSE

MITM Man In The Middle


Client			Bad Router 		Server

		Can be used 
		1) Eavesdrop : LISTEN (Passive)
		2) Alter packets in some way
				(Active)

Prevent : HTTPS Scanning (part of UTM Threat Management)



Session Hijack


Client---------------Bad Router----------------Server

	Bad router can actually 'take over' session

		     Bad Router----------------Server

	Server THINKS STILL TALKING TO CLIENT BUT IS NOT: 
		BAD ROUTER IS IMPERSONATING AND HAS TAKEN
		OVER THE SESSION



Session Replay Attack


Valid session is copied and played back later

Client---------------Bad Router---------------Server

	later on Bad Router 'replay' same packets back to server
	to create a 'dummy' connection.

Mitigate using TIMESTAMPS



Passord Attack

​    STOP : using Account Lockout Policy

Birthday attack
TWO FILES CAN HAVE SAME HASH : USE THIS TO GET PAST OUR 'HASHING'	PROOF THAT A FILE HAS NOT CHANGED



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


	Gooogle.com
	Amazone.com     MIS-SPELLING OF COMMON SITES : PEOPLE BUY
			DOMAIN NAME THEN SELL TO CORRECT OWNER FOR
			LOTS OF MONEY



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



Input Validation


Check for 'strange' characters like \\ / < > ' "   etc in fields



Buffer Overflow Attack


Buffer 
	Temporary data store to hold information when network
	is slow : waiting for data to either send or receive

	Buffer data is stored in RAM of COMPUTER!

	Buffer Overflow attack ==> PUSH GOOD DATA OUT OF BUFFER,
		POSSIBLY GET ACCESS TO AREAS OF RAM NEXT TO 
		THE BUFFER WHICH NORMALLY WE DON'T HAVE ACCESS TO



XSS Cross Site Scripting


Hack in to one website and from there, hack into another	



Folder Traversal Attack


Reach one folder : from there, navigate and reach another folder



XSRF Cross Site Request Forgery


Hack a website but ALREADY LOGGED IN ==> YOU HAVE MORE POWER
	TO DO MORE DAMAGE WHEN YOU HACK IN





#### CODE INJECTION ATTACK = APPLICATION ATTACK


CODE INJECTION ATTACK : CAN PUT <script>....code..</script>

	INTO A WEB FORM WHERE REGULAR TEXT IS EXPECTED

### XSS CROSS SITE SCRIPTING

	INJECTED CODE ATTEMPTS TO AFFECT OTHER SITES
	WHICH MAY BE 'HOSTED' ON SAME WEB SERVER


#### XSRF CROSS-SITE REQUEST FORGERY

	USER IS LOGGED IN ALREADY SO THIS CODE INJECTION
	PERHAPS HAS GREATER PERMISSIONS TO DO DAMAGE



	HOT FIX		SHORT-TERM FIX TO ISSUE	
	PATCH		FIX TO A FAULT
	UPDATE		IMPROVEMENT
	SERVICE PACK	CUMULATIVE PREVIOUS UPDATES IN ONE

#### BUFFER OVERFLOW ATTACK

	RAM (MEMORY) 
	
		SECURE RAM   |   BUFFER = SHORT TERM STORAGE
			     |		 AREA EG FOR HARD 
				         DRIVE
	
	BUFFER OVERFLOW ATTACK TRIES TO PUT SO MUCH DATA
		IN BUFFER, ATTACKING CODE REACHES SECURE
		AREA OF RAM

#### INJECTION TYPES
		SQL (DATABASE)
		XML (TEXT DATABASE)
		LDAP (ACTIVE DIRECTORY)



PORT


1.2.3.4 : 80

IP      : PORT

<--socket----->  		SOCKET = IP:PORT

WHAT IS A PORT???

	IT IS A CHANNEL BY WHICH DATA GETS SENT TO IP
		ADDRESS
	
		PICTURE : YOU MUST CHOOSE ONE OF 65000
			MAILBOXES IN ORDER TO GET 
			YOUR MAIL THROUGH!!!
	
		NOTE : HTTP ALWAYS PORT 80, HTTPS ALWAYS 443
	
	PORT 1-1000 ARE PRE-RESERVED FOR INTERNET USE
	     1000+ CAN BE CONFIGURED BY USER
			EG GAMERS : SET PORT FORWARDING
				ON YOUR ROUTER SO GAMING
				TRAFFIC REACHES EG XBOX
	
	65536 VALID PORTS


​	
PORT SCAN

	*** POSSIBLY COULD BE SEEN AS A HACKING TOOL **
	
	USED TO SCAN ALL PORTS ON IP ADDRESS TO SEE WHICH
	ONES ARE OPEN, OFTEN WITH A VIEW TO THEN HACKING
	INTO THAT ORGANISATION
	
	<http://mxtoolbox.com/SuperTool.aspx>
	
		EG cfa.org

XMAS DAY ATTACK

	DOING A PORT SCAN WITH ALL THE POSSIBLE FLAGS				SET TO 'ON' TO TRY AND TRIGGER A RESPONSE FROM
	EACH PORT


#### EAVESDROPPING

LISTENING IN TO TRAFFIC OR SIGNALS

	WIRESHARK OR NETMON

#### MAN-IN-MIDDLE ATTACK

	client -----------router-----------------server
	
			ROUTER OWNED
			BY HACKER : 
			CAPTURING AND
			VIEWING TRAFFIC	
			[[ POSSIBLY COULD
			TRY TO MODIFY
			TRAFFIC ALSO]]

#### SESSION HIJACKING

	client --------------router-----------------server
	
		ROUTER IN MIDDLE TOTALLY TAKES OVER
		THE SESSION, PRETENDING TO BE ONE
		OF THE MACHINES
	
	client---------------router
	
		SESSION HIJACKED - CLIENT THINKS IT IS 		
		TALKING TO SERVER BUT IS NOT!

#### SESSION REPLAY

	9AM:
	
	client ------------router -----------------server
	
			MALICIOUS 
			ROUTER WILL
			COPY ALL TRAFFIC
			THEN REPLAY IT 
			ALL BACK LATER
			PRETENDING TO BE
			ONE OF THE MACHINES		
	
	10AM
	
			router -----------------server
	
			ROUTER IS PRETENDING
			TO BE CLIENT TO 
			GAIN ACCESS TO SERVER
	
	PREVENT BY EG TCP SEQUENCE NUMBER, TIMESTAMP ETC





















## infrastructure random terms

```
FIREWALL/ROUTER : IP BLOCK LIST : BLOCK / ALLOW IP TRAFFIC
ACL	ANY IP	10.11.12.13 53 PERMIT
LAST	ANY	ANY ALL DENY
QoS Quality Of Service ==> 802.1p ==> TAG EVERY PACKET WITH A PRIORITY
SWITCHING LOOP ? STP SPANNING TREE PROTOCOL
ROUTING LOOP ? POISON REVERSE : HIGH COST 16 BACKWARDS
SPLIT HORIZON : DON’T SEND BACK TO ORIGINAL ROUTER
SQL
LDAP
SMB
IPV6
LLMNR for local name resolution
LOAD BALANCER
ICMP : Error message protocol for internet eg 404 unreachable
PING : (echo request) member of ICMP family
TRACERT
PATHPING
NETSTAT
NSLOOKUP
CentralOps.Net/Co => NSLOOKUP with details
WIRESHARK
SNMP : Simple Network Management Protocol
       Manage network of many devices : routers, switches, printers,servers.
	1) Heartbeat message 30/60secs : Know machine is reachable
	2) States eg Throughput MB per hour
NETBIOS
	Port 137
	Used HOSTNAME to do NETWORKING (before DNS)
TFP : Trivial FTP : Across LAN to copy eg new OS to CISCO SWITCH 
       Port 69
PPP : Create the dial up session (not encrypted)
	Point-to-point protocol : simply dials up and creates the connection	
Accessing a file share SMB
Creating and using an RDP session
Enabling and using the firewall - blocking PING
Group Policy Management in a domain
SYSVOL
DMZ = Screened Subnet
       Jump box
BLOCK / ALLOW A PING INTO A WINDOWS 7 CLIENT	
Proxy - CREATE A (FAKE) PROXY USING INTERNET EXPLORER :  CONNECTIONS TAB TO 1.2.3.4:8080 FOR ALL PROTOCOLS
Port Forwarding - ui.linksys.com view options and discuss theory
Port Triggering - ui.linksys.com view options and teach theory
ngrok - Mention ngrok as a way to direct traffic from internet to local IP
```


## wifi

```
CONNECT TO http://ui.linksys.com E1200 ROUTER 
LOOK AT ALL THE SETTINGS	
SSID	
CHANNEL	
WIFI PASSWORD	
ENCRYPTION WPA OR WEP	
DHCP ADDRESSES GIVEN OUT	
GATEWAY	
FIREWALL ON/OFF	
GAMING : PORT SETTINGS	
```










## network security 

```
SLE Single Loss Expectancy
ALE Annual Loss Expectancy
RPO Recovery Point Objective
RTO Recovery Time Objective
802.11AC UP TO 1300MBPS IN 5GHZ BAND
802.1X CAN AUTHENTICATE SWITCHES AND WIFI POINTS
802.1X CAN FILTER BY AD/LDAP MEMBERSHIP EG ON A VLAN
802.1X MACHINE-TO-MACHINE AUTHENTICATION, PLUS AD/LDAP MEMBERSHIP
802.1X TALKS TO AD/LDAP
AH AUTHENTICATE
ALE ANNUAL LOSS EXPECTANCY
Anomaly based : deviations can block
Anomaly Based = Heuristic = Behaviour based - all can generate a large number of false positives when network traffic deviates from the norm.
Anomaly Based compares with known baseline
ANOMALY COMPARES TO A BASELINE
APPLICATION AWARE : OF STATE OF OTHER DEVICES
Application Firewall filters by detailed content
APPLICATION WHITELIST DETERMINES IF MOBILE DEVICE IS FIT TO ACCESS THE NETWORK
APT ADVANCED PERSISTENT THREAT
ARO ANNUAL RATE OF OCCURRENCE
ASSET TRACKING USING GPS TO LOCATE A DEVICE
Asymmetric : DH RSA ECC
ATTACK VECTOR FROM ATTACKER
AUP ACCEPTABLE USE POLICY : WHAT A USER CAN AND CAN'T DO ON THE NETWORK
BASELINE : COMPARING AGAINST KNOWN
BCP business continuity plan : what to do if business fails
BCRYPT ADD SALT
BEHAVIOUR BASED SCANS COMPARE TO RULES
BIA BUSINESS IMPACT ANALYSIS : ANALYSE THREATS AND VULNERABILITIES
BIA BUSINESS IMPACT ANALYSIS = IMPACT TO BUSINESS
BITLOCKER USES TPM WITH AES
BLOCK CIPHER : SLOWER THAN STREAM CIPHER
BLUE HAT : NOT PAID
Bluejack adverts
Bluesnarf control
BPA BLANKET PURCHASE AGREEMENT
BPA BUSINESS PARTNER AGREEMENT
BPDU BRIDGE PROTOCOL DATA UNIT - DETECTS LOOPS - CONTAINS INFO TO CONFIGURE STP SPANNING TREE PROTOCOL.  PREVENTS SPOOFING WHICH OCCURS WHEN UNAUTHORISED USER CONNECTS TO A PORT.  BPDU ARE SHARED BETWEEN SWITCHES AS UNITS OF INFORMATION.
BPDU BRIDGE PROTOCOL DATA UNIT : SPOOF WHEN UNAUTHORISED USER CONNECTS TO PORT
CAAS  	
CAC Common Access Card
CAM TABLE
CAPTIVE PORTAL : HAVE TO LOG IN TO WIFI
CCMP USES AES
CDP CLEAN DESK POLICY
CIA CONFIDENTIALITY INTEGRITY AVAILABILITY
Cipher Suite uses both Asymmetric and Symmetric tools
CLICKJACK ON EG 'NEXT' BUTTON DOES UNINTENDED CONSEQUENCE EG POST FACEBOOK MESSAGE
CLOUD : GREATEST RISK IS ACCESS TO FILES FROM HOST
Community cloud shared by several organisations
COMMUNITY CLOUD SHARES PRIVATE CLOUD
COMMUNITY CLOUD WHEN PRIVATE CLOUD IS SHARED
CONTAINMENT : SHORT-TERM + FORENSIC IMAGE + LONG-TERM
Content Inspection : detects malicious content and filter email attachments
CONTINUITY OF OPERATIONS PLAN
COOKIE POISON : PREVENT BY ENCRYPTION
CREDENTIALED SCAN CAN IDENTIFY EG UNINSTALLED PATCH, USB ATTACHED
CRL CERTIFICATE REVOCATION LIST - list of revoked certifs
CSR CERTIFICATE SIGNING REQUEST : FOR SSL CERTIFICATE
CSRF CROSS SITE REQUEST FORGERY : USES AUTHENTICATION TO GAIN ACCESS
CTI COMPUTER TELEPHONY INTEGRATION
CTL CERTIFICATE TRUST LIST : MANUALLY ALLOCATE WHICH CAs ARE TRUSTED BY A USER
CUTOVER TEST
CUTOVER TO ALTERNATIVE SITE
DaaS	
DAC DISCRETIONARY ACCESS : SET BY USER
DIAMETER = 2XRADIUS
DISASTER RECOVERY : STAKEHOLDER NOTIFY + ASSESS DAMAGE + RECOVER DATA
DLP DATA LOSS PREVENTION MONITORS FILES LEAVING THE NETWORK
DLP DATA LOSS/LEAK PREVENTION
DNS INJECTION
DPI DEEP PACKET INSPECTION
DRIVE-BY-DOWNLOAD : JUST FROM BROWSING A SITE
DRP DISASTER RECOVERY PLAN = INDIVIDUALS + INVENTORY + MANUALS + LOCATIONS
DRP FULL SCALE
DRP FUNCTIONAL EXERCISES
DRP NOTIFY STAKEHOLDERS, ASSESS, RECOVER
DRP TABLETOP DISCUSSIONS
DRP WALKTHROUGH
EAP-MD5 : AUTHENTICATE CLIENT ONLY (NOT SERVER)
EAP-MD5 ONLY CLIENT AUTHENTICATES TO SERVER (WITH HASH)
EAP-TLS USES MUTUAL CERTIFICATES ON BOTH CLIENT AND SERVER
EAVESDROPPING OVER NFC PLAIN TEXT
ENROL = GET CERTIFICATE
ENROL POLICY = WHO CAN APPLY
ENUMERATING = GET EG USERNAMES, GET DOWN TO DETAIL
ESCROW = KEY TRUSTED 3RD PARTY
ESP ENCRYPT
FAILOPEN
FAILSAFE
FAILSECURE
FARADAY CAGE
FC00 SITE TO SITE
FCoE CAN ONLY RUN ON 10GBPS CHANNEL
FCoE ONLY 10GBPS
FE80 SITE LOCAL
FF00 MULTIAST
FF00 MULTICAST
FIBER CHANNEL OVER ETHERNET : USES FIBER CHANNEL PROTOCOLS OVER ETHERNET NETWORK
FIELD LEVEL ENCRYPTION FOR CERTAIN DATABASE FIELDS
FLOOD GUARD AGAINST DDOS
FLOOD GUARD AGAINST DOS EG AAA LOGIN ATTACK
FLOOD GUARD PROTECTS AGAINS DOS EG LOGIN (AAA) ATTACKS
FOOTPRINT = GATHER CRITICAL DATA OFTEN FROM PUBLIC SOURCES. SLOWLY ANALYSE NETWORK.
FORENSIC : IMAGE + LOGS + VIDEO + TIME ZONE + HASH FOR KNOWN + FLAG FOR UNKNOWN
Forest : Group of domains eg [MSN.com](<http://msn.com/>), [LIVE.com](<http://live.com/>), [MICROSOFT.com](<http://microsoft.com/>), [SKYPE.com](<http://skype.com/>)
FQDN : full name eg [myserver.mydomain.com](<http://myserver.mydomain.com/>) FULLY QUALIFIED DOMAIN NAME
FTP 20 TCP UDP   21 TCP
FTP USES 20 (DATA) TCP,UDP AND 21 (ADMIN) TCP
FTPS USES FTP OVER SSL USING 989 (DATA) TCP,UDP AND 990(ADMIN) OVER TCP
FUNCTIONAL EXERCISE
FUZZING SENDS RANDOM DATA TO TEST AN APP
GRAYWARE = NON-MALICIOUS (UNWANTED) CODE
GREY HAT : HACKS IN THEN INFORMS
HIERARCHICAL TRUST FROM TOP DOWN
HMAC : LIKE SHA1 : PROVIDES DUAL INTEGRITY AND AUTHENTICITY
HMAC Hash Based MAC Message Authentication Code : Integrity + Authenticate
HMAC HASH BASED MESSAGE AUTHENTICATION
HOTP HOST-BASED ONE TIME PASSWORD
HSM HARDWARE SECURITY MODULE
HSM HARDWARE SECURITY MODULE : GENERATE CRYPTOGRAPHIC KEYS
HTOP HASH-BASED ONE TIME PASSWORD
IAAS DELIVERS VIRTUAL SERVERS
IMAP 993
IMAP 994 TCP
INCIDENT : EXAMINE VOLATILE AREAS FIRST
INCIDENT IDENTIFICATION : WHICH SERVERS, WHAT IMPACT TO BUSINESS?
INCIDENT IDENTIFY WHICH SERVERS WHAT IMPACT
INTERNAL PENETRATION TEST: SEE WHAT EFFECT A MALICIOUS INSIDER COULD HAVE
IPSEC 500 4500  BOTH UDP
IPSEC PORTS 500 UDP AND 4500 UDP
IPSEC USES AH FOR INTEGRITY 
IPSEC USES ESP FOR ENCRYPTION
IRP INCIDENT RESPONSE POLICY
ISA INTERCONNECTION SECURITY AGREEMENT
ISA INTERCONNECTION SECURITY AGREEMENT BETWEEN TWO COMPANIES TO SPECIFY TECHNICAL RELATIONSHIPS
ISA Interconnection Security Agreement in technical detail between two parties
ISA INTERCONNECTIVITY SECURITY AGREEMENT : TECHNICAL
ISAKMP DETERMINE WHEN TO MAKE NEW KEYS
ISCSI = SAN OVER ETHERNET
ISCSI CAN IMPLEMENT SAN OVER ETHERNET
IV ATTACK : PREDICT SALT
KEY ESCROW : KEYS ARE HELD IN A CENTRAL LOCATION TO BE USED IF NEEDED
KEY STRETCH
KEYSTROKE AUTHENTICATION : LOOKS AT TIMING AND PATTERN OF KEYSTROKES
LDAP (SECURE) : SSO
LEAK = COPY
LEAP : BECAUSE HASH-BASED IS INSECURE IF POOR PASSWORDS ARE USED AS HASHES CAN BE CRACKED EASILY FOR POOR PASSWORDS.
LEAP : USER/PASS HASH
LEAP MUTUALLY AUTHENTICATES WITH USERNAME AND PASSWORD HASH.  
LOOP PROTECTION ON ALL PORTS
LOSS = MOVE
LSO LOCALLY SHARED OBJECT = FLASH COOKIE
LSO LOCALLY SHARED OBJECTS LIKE FLASH COOKIE
M REQUIRED OF N PEOPLE TO USE KEY
MaaS
MAC FLOOD : MITIGATED BY MAC LIMITING
MAC LIMITING : LIMITS NUMBER OF MAC ADDRESSES THAT CAN BE LEARNED ABOUT
MAC MANDATORY ACCESS CONTROL : ASSIGNED BY ADMIN : TOP SECRET
MAC MANDATORY FIXED ACCESS CONTROL : HIGHLY SECURE SET BY ADMIN
MAC MOVE LIMITING : LIMITS NUMBER OF MOVES OF ITEMS ON A SWITCH PER SECOND
MAM	Mobile App Management
MAN IN THE MIDDLE : VIEW INFORMATION
MDM	Mobile Device Management
MDM MOBILE DEVICE MANAGEMENT
MDT Max Tolerable Downtime
Metric : stats, measurements
MONITOR BY BEHAVIOUR/SIGNATURE/ANOMALY/HEURISTIC
MOU MEMORANDUM OF UNDERSTANDING : INFORMAL
MOU MEMORANDUM OF UNDERSTANDING : INFORMAL AGREEMENT
MTD MAX TOLERABLE DOWNTIME
MTR Mean Time To Recover
MTR MEAN TIME TO REPAIR
MTR MEAN TIME TO RESTORE THE SYSTEM TO WORKING ORDER (DIFFERENT TO MTTR)
MTR RESTORE TO WORKING ORDER
MULTIPARTITE = BOOT + OTHER TYPES COMBINED
NAC = NAP
NAC like NAP
NAC NETWORK ACCESS CONTROL = NAP
NAC NETWORK ACCESS CONTROL LIKE NAP
NETBIOS 137
NETWORK TRUST HAS TRANSITIVE TRUSTS
OFFBOARDING : REMOVING MOBILE APP (BYOD) FROM COMPANY USE - REMOVE DATA AND LOGINS
PAAS DELIVERS VIRTUALISED USER ENVIRONMENTS
PARALLEL ON ANOTHER SITE
PARALLEL TEST
PBKDF2 ADD SALT
PDS Protected Distribution System = Protected cabling
PDS PROTECTED DISTRIBUTION SYSTEM CABLING
PEAP : SERVER CERTIFICATE
PEAP REQUIRES CERTIFICATE ON SERVER
PENETRATION TEST SIMULATES ATTACK
PERFECT FORWARD : KEYS CANNOT BE REUSED
PERFECT FORWARD SECRECY : SESSION KEYS ARE ONE TIME ONLY USE
PGP ENCRYPT EMAIL SERVER TO CLIENT
PHARM DNS ALTER
PHARMING : ALTER DNS OR HOSTS FILE
PHARMING : ALTER DNS RECORDS
PII PERSONALLY IDENTIFIABLE INFO
PING OF DEATH : MALFORMED PING PACKETS
PING OF DEATH = MALFORMED PING
PKCS TO CREATE CERTIFICATES
PMI PRIVILEGE MANAGEMENT INFRASTRUCTURE
PMI Privilege Management Infrastructure
PMI PRIVILEGE MANAGEMENT INFRASTRUCTURE : USE PKI CERTIFS TO MANAGE PERMISSIONS
PMI USES PKI CERTIFICATES TO MANAGE
POP 995
POP 995 TCP
PORT FORWARD SO INTERNET CAN SEND TRAFFIC IN TO LAN FOR THIS PORT ==> THIS PC
PORT FORWARDING CAN ENABLE A COMPUTER TO BE OPEN TO RECEIVING CONNECTIONS FROM THE INTERNET
PRIVILEGE MANAGEMENT
PROMISCUOUS MODE : TURN ON IN NIC AND USE FOR PROTOCOL ANALYSER OR VULNERABILITY SCAN
PROXIMITY READER = WAVE YOUR CARD TO GAIN ENTRY
QUALITATIVE RISK ASSESS : HIGH/MED/LOW
QUID PRO QUO ATTACK : OFFERED GIFT
RA REGISTRATION AUTHORITY : VALIDATES A CERTIFICATE
RA REGISTRATION AUTHORITY : VERIFIES IDENTITY OF PRESENTED CERTIFICATES
RADIUS
RADIUS : PORT 1812
RADIUS DOES AAA
RADIUS PERFORMS AAA
RAINBOW TABLE OF KNOWN HASHES
RAT REMOTE ACCESS TROJAN TO GAIN ACCESS REMOTELY
RECOVERY = ASSESS + RECOVER + REPORT
REPLAY ATTACK CAN BE DOS ATTACK ON WIFI
RFC Request For Comments : Suggestions to improve the INTERNET!!!
RIPEMD CAN VERIFY PLAIN TEXT BY HASH
RISK = CHANCE
RISK MITIGATION = REDUCTION OF LOSS
RISK TRANSFERENCE = INSURANCE POLICY
ROOTKIT HAVE TO SCAN WHEN WINDOWS NOT RUNNING
RPO Back to backup point
RPO RECOVERY POINT = POINT BACK TO WHICH DATA WILL BE LOST WHEN GET CLOSEST BACKUP
RPO RECOVERY POINT OBJECTIVE IS MAX ACCEPTABLE DATA LOSS GOING BACK TO A POINT IN TIME
RPO RECOVERY POINT OBJECTIVE IS TIME HAVE TO GO BACK UNTIL LAST BACKUP WAS TAKEN (DATA SINCE THEN IS LOST)
RTO Max Recovery time
RTO RECOVER TIME OBJECTIVE = MAX ACCEPTABLE RECOVERY TIME
RTO RECOVERY TIME OBJECTIVE IS MAX ACCEPTABLE RECOVERY TIME
RTO REDOVERY TIME OBJECTE IS PLANNED TIME TO RECOVER SYSTEM
S/MIME ENCRYPT EMAIL SERVER TO CLIENT
SAML BROWSER SSO
SAML SECURITY ASSERTION MARKUP LANGUAGE : USED FOR SSO
SCADA = Engineering Subnet
SCADA DOES HVAC MONITORING
SCADA INDUSTRIAL PROCESSES : HIDE IN DMZ
SCAREWARE IS MALWARE THAT 'SCARES' USER INTO INSTALLING THE SOFTWARE
SCAREWARE SO INSTALL BOGUS STUFF
SCP 22 SSH FILE TRANSFER
SCP SECURE COPY IS OVER PORT 22 SSH
SCP SECURE COPY USES PORT 22 TO TRANSFER FILES SECURELY USING SSH
SFTP IS FTP OVER SSH
SFTP over SSH
Signature based : Fixed
SINKHOLE FOR ALL NETWORK TRAFFIC LIKE GATEWAY
SITE SURVEY OF WIFI BOUNDARY
SLE SINGLE LOSS EXPECTANCY
SMART CARD = TOKEN BASED
SMURF : PING DOS ATTACK
SMURF = PING DDOS
SMURF ATTACK : DDOS PING ATTACK
SNMP 161 162
SNMP CAN BE SECURED BY IPSEC
SNMP SECURED BY IPSEC
SPEAR PHISH FROM KNOWN CONTACT
SPEAR PHISHING - APPARENTLY FROM SOMEONE YOU KNOW
SSL : CLIENT BROWSER REQUESTS, SERVER SENDS TO CLIENT, CLIENT GENERATES SESSION KEY, ENCRYPTS, SENDS TO SERVER, BEGIN SESSION
SSL AND TLS NEGOTIATE WHICH ENCRYPTION ALGORITHM TO USE
STEGANOGRAPHY : PROVIDES PRIVACY AS WELL AS ENCRYPTION
STEGANOGRAPHY HIDE EVEN FACT DATA EXISTS
STEGANOGRAPHY IN IMAGE
STREAM CIPHER DOES ENCRYPTION OF DATA
STREAM CIPHER ONE CHARACTER AT TIME
SWITCH CAM TABLE CONTENT ADDRESSABLE MEMORY : CONTAINS SWITCHING TABLE
SYMMETRIC : AES => BLOW => TWO => RC6
Symmetric : AES DES 3DES Blow TwoFish RC6
SYMMETRIC : DES, 3DES, AES, BLOWFISH, TWOFISH, RC6
SYN ATTACK IS DDOS ATTACK TO SET UP TCP CONNECTION
TABLETOP DISCUSSION
TACACS ENCRYPTS ALL AUTHENTICATION TRAFFIC
TACACS LAYER 2 AUTHENTICATION
TACACS USED FOR CENTRAL DEVICE AUTHENTICATION
TACACS+ : PORT 49
TCP/IP HIJACKING : HIJACK SESSION
TEMPEST : EMI
TEMPEST IS EMI
TFTP 69
TFTP 69 UDP TCP
TFTP PORT 69 TCP AND UDP
THREAT
THREAT VECTOR = METHOD OF ATTACK
THREAT VECTOR FROM THREAT
TLS AFTER SSL
TLS CAN ENCRYPT SMTP TRAFFIC (CAN BE ON REQUEST ONLY)
TOTP TIME BASED ONE TIME PASSWORD
TPM TRUSTED PLATFORM MODULE
TRANSFER RISK = INSURANCE
TRUSTED : HARDWARE + OS + FIRMWARE
TRUSTED : ISOLATE FROM APPS
TTOP : TIME BASED HTOP EG 60 SECONDS TO USE IT!
URL HIJACK = TYPO SQUAT = GOOOGLE.COM
URL SHORTEN CAN HIDE TRUE BOGUS SOURCE
UTM : CARE AS CAN HAVE BOTTLENECK AND SPOF EFFECTS SO CAN BECOME A TARGET
UTM APPLICATION CONTROL CAN EG PREVENT USERS CLICKING THROUGH ON FACEBOOK LINKS
UTM BANDWIDTH THROTTLE PER APP
UTM CAN DO TRAFFIC SHAPING TO THROTTLE BANDWIDTH FOR CERTAIN APPS
UTM CAN PREVENT LINK CLICKING
UTM CAN RESTRICT DAY/TIME ACCESS
UTM DAY/TIME RESTRICTION
UTM UNIFIED THREAT MANAGEMENT
UTM Unified Threat Management
VISH OVER VOIP
VLAN HOPPING : SNOOP ON OTHER VLAN DATA
VOLATILITY IN INCIDENT : RAM/CACHE, PAGE FILE, HDD, USB
VULNERABILITY
WAF Web Application Firewall : Deep packet inspection + Prevents SQL Injection 
WAF Web Application Firewall : Deep packet inspection + SQL Injection + XSS prevention
WAF Web Application Firewall : SQL injection and XSS attacks
WAF WEB APPLICATION FIREWALL : SQL INJECTION AND XSS ATTACKS
WAF WEB APPLICATION FIREWALL = LAYER 7 (DEEP PACKET INSPECTION)
WAF web application firewall monitors for SQL injection and XSS attacks
WAF Web Application Firewall uses deep packet inspection to examine each request and response and prevents attack based on user input like SQL injection.  Signature based uses preset signatures.  Anomaly based uses deviations to block.
Web Security Gateway - filters for malware, can have URL filtering, 
Web security gateway : does URL filtering, content and malware inspection
WEB SECURITY GATEWAY : FOREFRONT : URL FILTER + MALWARE + APP CONTROLS EG SKYPE + DLP DATA LEAK PREVENTION
WEB SECURITY GATEWAY : URL FILTER, CONTENT/MALWARE INSPECTION
Web Security Gateway : URL Filter, malware
WHALE HIGH WEALTH
WINS 137
WPA USES TKIP
WPA USES TKIP FOR ENCRYPTION
WPA2 ENTERPRISE IS BASED ON 802.X
WPA2 USES AES
WPA2 USES AES FOR ENCRYPTION
XMAS SCANS OPEN PORTS : ALL FLAGS OPEN
XSRF : Mitigate with token
XSRF Attack : enforce Session Timeout + Hidden field
XSRF CROSS SITE REQUEST FORGERY : AUTHENTICATES TO GAIN ACCESS
XSRF CROSS SITE REQUEST FORGERY : SUBMIT FORMS PRETENDING TO BE USER
XSRF CROSS SITE REQUEST FORGERY USING TRUST ON ONE SITE TO REACH ANOTHER
XSS CROSS SITE SCRIPT REDIRECT TO NEW SITE
XSS CROSS SITE SCRIPTING
XSS CROSS SITE SCRIPTING : REDIRECTS EG TO ANOTHER SITE
XSS REFLECTED TO ANOTHER MACHINE
XSS STORED
STP SPANNING TREE PROTOCOL PREVENTS SWITCHING LOOPS
POISON REVERSE - ROUTERS DON'T SEND STUFF BACK TO ROUTES THEY CAME FROM
SPLIT HORIZON - DON'T SEND BACK TO ORIGINAL ROUTER
SID SECURITY ID ON WINDOWS
GUID GLOBAL USER ID ON A DOMAIN
```




