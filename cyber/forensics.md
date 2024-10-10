# Forensics 

- [Forensics](#forensics)
  - [Introduction](#introduction)
  - [Forensic Workstation](#forensic-workstation)
  - [Forensics Forms](#forensics-forms)
  - [FTK Forensic Toolkit](#ftk-forensic-toolkit)
    - [EnCase](#encase)
    - [eDiscovery](#ediscovery)
    - [Endpoint Investigator](#endpoint-investigator)
    - [Sleuth Kit](#sleuth-kit)
      - [Autopsy = GUI](#autopsy--gui)
    - [Helix Live CD](#helix-live-cd)
    - [Cellebrite](#cellebrite)
  - [Forensics Workstation](#forensics-workstation)
  - [Getting Data](#getting-data)
    - [from RAM (Memory Acquisition)](#from-ram-memory-acquisition)
    - [Write blocker](#write-blocker)
    - [Live acquisition](#live-acquisition)
    - [Hashing](#hashing)
      - [Calculating the hash](#calculating-the-hash)
    - [Forensic duplicate](#forensic-duplicate)
  - [Passwords](#passwords)
  - [Forensic Analysis Of Computer](#forensic-analysis-of-computer)


## Introduction

Forensics is science of collecting data in a criminal investigation

## Forensic Workstation

These contain

- Imaging Utilities to image drives
- Analysis - to analyse the images
- Chain of custody - to account for who holds the forensic data
- Hashing - to verify integrity
- OS and process analysis - to analyse processes and OS 
- Mobile forensics
- Password cracker - to crack passwords
- Cryptography - to crack encryption


## Forensics Forms

- Chain of custody - legal proof of evidence handling
- Incident Response - instructions
- Incident Form - details
- Call List - who to communicate with

## FTK Forensic Toolkit

Latent = hidden, cannot be seen - must be gathered using computer

```
Workstation
Write Blockers
Cables and Adapters to connect to different devices and drives
Blank media eg HDD, CD, DVD, BluRay, USB
Cameras
Crime Tape
Tamper-Proof Seals
Forms
```




### EnCase

Forensic Suite of tools

### eDiscovery

manage data collected
    
### Endpoint Investigator

use server to analyse clients
       
### Sleuth Kit

command line tools
       
#### Autopsy = GUI
              
              create a case
              
### Helix Live CD
    
Linux LIVE CD : does not affect host
              
### Cellebrite

Mobile forensics
       
     UFED Universal Forensic Extraction Device 
     Forensically clean : does not affect data it is investigating
       
       

## Forensics Workstation

```
       TASK and Autopsy Forensic Browser can be found at the following locations:
       
       Task: 
       http://prdownloads.sourceforge.net/sleuthkit/task-1.60.tar.gz?download

       Autopsy Forensic Browser:
       http://prdownloads.sourceforge.net/autopsy/autopsy-1.70.tar.gz?download

       Google 'sans building a low cost forensics workstation'
              https://uk.sans.org/reading-room/whitepapers/incident/building-cost-forensics-workstation-895       
```

1. Get Data = Image
2. Hash Image = Get Checksum

## Getting Data

### from RAM (Memory Acquisition)

              Memoryze from FireEye
       
              F-response TACTICAL
       
### Write blocker

prevents writing to RAM
       
              = hardware device or software
              
              CRU Forensic UltraDock - interrogates drives
              
                      HPA host protected area
                      DCO device config overlay
                      
### Live acquisition

computer running / shut down / pull power
       
       

### Hashing

```
       SHA secure hash algorithm
       
              FIPS standard (Federal Info Processing standard)
              
              SHA-1 160
              SHA-2 256/512 in IPSEC, SSL
       MDA-5
              collisions exist (same hash for different files)
              
              BUT ! faster than SHA so often is default in most tools
              
```

#### Calculating the hash

```
       Certutil -hashfile File Algorithm
       
              Algorigthm = MD5 / SHA1 / SHA256 / SHA512
              
       fciv file checksum integrity verifier
       
       md5sum/sha1sum/sha256sum/sha512sum 
       
              -c can compare file with a hash
              
              
```

### Forensic duplicate

sector-by-sector replication of image

```
       Encase uses .e01 (metadata in file)
       
       DD is an imaging tool

              Raw format is .dd (raw image, metadata must be in separate file)
              
              if=  input file
              
              of=  output file
       
       dd if=/dev/sda/ of=/mnt/usbstick/backup.img
       
```





## Passwords

[Passwords](passwords.md)














##  Forensic Analysis Of Computer

1. Copy of forensic image of machine
2. Break down any passwords to obtain access to data
3. Analyse data eg in EnCase Forensic analyser

Log viewer : accept Windows + Linux

Prefetch file analysis (not on SSD)

File System Viewer

```
       VSS volume shadow copy info
       System volume info
       Graphs of creation/deletion activity
       View binary files
       Images including looking for steganography
```

Registry viewer view changes deleted keys autostart items

USB Utility : report on devices which have been attached

Analysis And Recovery (Mod 4 Unit 3)

SIEM security info and event mgt : data will begin to flow in IDS : data flow in

Detection Of An Active Threat (Real Time ie being attacked now)

OODA Observe Gather info. Care - not ‘analysis paralysis’ Orient What type of attack? Which stage? Decide What can we do Act
