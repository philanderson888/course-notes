# Windows Labs

- [Windows Labs](#windows-labs)
  - [Scripting Labs](#scripting-labs)
    - [Hostname](#hostname)
    - [Folder Labs](#folder-labs)
    - [Environment Variables](#environment-variables)
  - [Powershell Labs](#powershell-labs)
    - [MSINFO32](#msinfo32)
    - [WinVer](#winver)
    - [MSCONFIG](#msconfig)
    - [UAC](#uac)
    - [Attrib](#attrib)
    - [Registry Editor](#registry-editor)
    - [MMC](#mmc)
    - [Services](#services)
    - [Event Viewer](#event-viewer)
  - [Monitoring](#monitoring)
    - [Task Manager](#task-manager)
    - [TaskList](#tasklist)
    - [Resource Monitor](#resource-monitor)
    - [Performance Monitor](#performance-monitor)
    - [Reliability Monitor](#reliability-monitor)
    - [AntiVirus](#antivirus)
  - [Computer Management](#computer-management)
    - [Local Users And Groups](#local-users-and-groups)
  - [Storage](#storage)
    - [ChkDsk](#chkdsk)
    - [Defrag](#defrag)
    - [DiskMgmt](#diskmgmt)
    - [RAID and Diskpart](#raid-and-diskpart)
  - [Recovery](#recovery)
    - [BitLocker](#bitlocker)
  - [HyperV Labs](#hyperv-labs)
    - [Virtual Switching](#virtual-switching)
      - [Create a virtual switch](#create-a-virtual-switch)
  - [Routing And Switching Labs](#routing-and-switching-labs)
    - [Create Static Route](#create-static-route)
    - [Create Dynamic Route](#create-dynamic-route)
  - [Windows Client - Server Labs](#windows-client---server-labs)
    - [Share](#share)
    - [Print](#print)
    - [Group Policy](#group-policy)
    - [Printing](#printing)
  - [Windows Server Labs](#windows-server-labs)
    - [DNS](#dns)
    - [DHCP](#dhcp)
    - [Paging File](#paging-file)
    - [Certificate Server](#certificate-server)
    - [Storage Spaces](#storage-spaces)
    - [IIS](#iis)
    - [Web Server In General](#web-server-in-general)

## Scripting Labs

### Hostname

### Folder Labs

```bash
CD \ TO ROOT	
MD SCRIPTS CREATE FOLDER	
CD C:\SCRIPTS	
MD FOLDERA	
CD FOLDERA	
COPY NUL ABC.TXT	
COPY CON DEF.TXT (ADD CONTENT AND CONTROL-Z TO SAVE AND EXIT)	
REN ABC.TXT ABCD.TXT	
COPY ABCD.TXT ABCDE.TXT	
DEL ABCDE.TXT

TREE	

XCOPY FOLDERA FOLDERB	
```

### Environment Variables

```bash
ECHO %TEMP%	
ECHO %WINDIR%	
ECHO %PATH%	
ECHO %SYSTEMROOT%	
```


## Powershell Labs

```bash
Powershell Help	
Get-Help *get*	
Get-Service *a*	
Get-Command *a*	
Get-Service | where-object {$_.Status -eq 'Stopped'}	
```


### MSINFO32

```
System information
```

### WinVer

```
VERSION OF WINDOWS RUNNING
```

### MSCONFIG

```powershell
MSCONFIG	
```

### UAC

### Attrib

```bash
VIEW READ-ONLY FILE ATTRIBUTE	
VIEW COMPRESSED FILE ATTRIBUTE	
VIEW ENCRYPTED FILE ATTRIBUTE	
VIEW READY TO ARCHIVE FILE ATTRIBUTE	
ATTRIB +R -S -H -A ABC.TXT	
ATTRIB -R -S -H -A ABC.TXT	
```

### Registry Editor

```
REGISTRY IS CENTRAL DATABASE ON YOUR COMPUTER FOR WINDOWS

REGEDIT : VIEW 5 HIVES	
REGEDIT : CREATE A REGISTRY KEY (HACK THE REGISTRY!)	
REGEDIT : BACK UP THE REGISTRY	
REGEDIT : DELETE YOUR REGISTRY KEY	
REGEDIT : RESTORE THE REGISTRY TO GET YOUR KEY BACK	
```

### MMC

```
MMC.EXE ADD SNAP-IN (CHECK OUT TWO MODES : AUTHOR=ADMIN AND USER=READ-ONLY)	
```

### Services

```
SERVICES.MSC VIEW RUNNING SERVICES ON YOUR COMPUTER	

SERVICES => STOP THEN START THE SPOOLER SERVICE
NET STOP SPOOLER : STOP THE PRINT SPOOLER SERVICE
NET START SPOOLER : START IT AGAIN

```

### Event Viewer

FILTER SYSTEM LOG TO ERRORS AND WARNINGS LAST 24 HOURS	

EVENTVWR.MSC 

SYSTEM LOG has driver issues



## Monitoring

### Task Manager

### TaskList

```bash
TASKLIST : LIST ALL RUNNING TASKS ON YOUR COMPUTER
TASKLIST : START WORDPAD AND WRITE DOWN THE PROCESS ID (PID)
TASKKILL /PID 1234 : TERMINATE WORDPAD USING THE PID

Get-Process
Stop-Process -id ...
```

### Resource Monitor

### Performance Monitor

### Reliability Monitor

### AntiVirus

```powershell
DOWNLOAD EICAR TEST VIRUS AND SCAN AND REMOVE IT	
```

## Computer Management

```bash
COMPMGMT.MSC VIEW COMPUTER MANAGEMENT OVERVIEW	
```

### Local Users And Groups

Are we administrator?

```bash
net localgroup administrators
```

## Storage

### ChkDsk

```bash
CHECK DISK (GUI)	
CHKDSK C: /F (COMMAND LINE)	
```

### Defrag

```
DEFRAG (GUI)	
DEFRAG C: (COMMAND LINE)	
```

### DiskMgmt

```b
DISKMGMT.MSC VIEW HARD DRIVE INFORMATION	
```

### RAID and Diskpart

```
ADD 3 HARD DRIVES TO SERVER 5GB SIZE EACH	
CREATE BASIC PARTITION	
RAID 0 : STRIPE	
RAID 1 : MIRROR	
RAID 5 : STRIPE WITH PARITY	
CREATE NEW PARTITION AND DON'T GIVE IT A DRIVE LETTER BUT PUT IT INSIDE A FOLDER (MOUNT IT)	
DISKPART	
LIST DISK	
SELECT DISK	
LIST PARTITION	
CREATE PARTITION PRIMARY SIZE=500	
FORMAT	
ASSIGN DRIVE LETTER	
REPEAT FOR RAID 0/1/5 WITH CREATE VOLUME RAID5 DISKS=1,2,3 ETC..	

```

## Recovery

Put in DVD and boot to WinRE environment	
WinRE : Dir E:\ to view Windows	
WinRE : MD E:\newfolder to create a folder	

### BitLocker

```
ADD A DRIVE
TURN ON BITLOCKER FOR YOUR NEW DRIVE
```


## HyperV Labs

### Virtual Switching

#### Create a virtual switch

## Routing And Switching Labs

### Create Static Route

### Create Dynamic Route



## Windows Client - Server Labs



### Share

```
NET SHARE TO VIEW SHARES	
NET SHARE MYSHARE=C:\PATH TO CREATE A SHARE	
NET USE \\SERVER\SHARE T: /PERSISTENT:YES TO MAP A SHARE	
Create Share on Server and Share	
NET SHARE my_share_name=c:\path-to-share	
NET SHARE display all shares	
NET USE Z: \\SERVER\SHARE	

Set permissions to Read Only
Set permissions to deny
Set permissions to inherit
Set permissions not to inherit

```

### Print

```
Create Printer On Server and Print
```

### Group Policy

​	

```
GPEDIT.MSC local policy

Group Policy : Set Password Policy	
Group Policy : Set Account Lockout Policy	
GROUP POLICY : SET PASSWORD POLICY TO MIN 6 CHARACTERS LONG, CHANGING 30 DAYS	
GROUP POLICY : SET ACCOUNT TO LOCK FOR 10 MINUTES IF 3 PASSWORDS ENTERED WRONG

USER RIGHTS : LOG ON LOCALLY : 
    COMPUTER => WIN => SEC => LOCAL USER RIGHTS YES LOG ON LOCALLY 
    ==> AUTHENTICATED USERS	
```

### Printing

```
PRINTER : ADD TO SERVER AND SHARE IT. 
LIST IN THE DIRECTORY. 
PRINT TEST PAGE FROM WIN7	
```

## Windows Server Labs

### DNS

```powershell
DNS : ADD AN ‘A’ RECORD TO DNS SERVER	
DNS : ADD AN ‘AAAA’ IPV6 RECORD TO DNS SERVER	
DNS : ADD AN ‘MX’ EMAIL RECORD TO DNS SERVER	
DNS : ADD AN ‘WWW’ CNAME ALIAS RECORD TO DNS SERVER	
DNS : ADD REVERSE PTR ZONE AND RECORD
```

### DHCP

```powershell
Create a scope with subnet mask and default gateway
Reserve an IP
Boot a client and have it receive an IP
Check the leases that this has indeed happened
```

### Paging File

```powershell
MOVE THE PAGING FILE TO ANOTHER DRIVE	
```

### Certificate Server

```powershell
Install Certificate Server
Issue A Certificate
```

### Storage Spaces

```powershell
DRIVES => POOL => SPACE WITH A VIRTUAL DISK => CREATE AND FORMAT A VOLUME	
Pool : Create from UNUSED DISKS	
Storage Pool : Drives must be initialized	
Pool : 2-way needs 2 disks, 3 way needs 5 disks to allow for 2 disks failing	
Space : Thin/Fixed provision	
Space : From Pool => Create Virtual Disk => Create Volume	
```

### IIS

```
Install And Run IIS Web Server	
CONNECT TO IIS WEB SERVER	
HTTP://LOCALHOST	
HTTP://	
HTTP://127.0.0.1	
HTTP://::1	
HTTP://	

VIEW DEFAULT WEBSITE FROM WIN7 MACHINE	

CHANGE DEFAULT WEBSITE TO ‘HELLO WORLD’	

ADD A HEADER Heading YOUR WEBSITE	
```

### Web Server In General

```
Build a website
Hack a website eg BBC
```