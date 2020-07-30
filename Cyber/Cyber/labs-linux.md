# Linux Labs

- [Linux Labs](#linux-labs)
  - [Who Am I](#who-am-i)
  - [What groups am I a member of?](#what-groups-am-i-a-member-of)
    - [install ifconfig](#install-ifconfig)
    - [install a service like MongoDB on AWS Linux](#install-a-service-like-mongodb-on-aws-linux)
  - [Labs](#labs)
    - [Set Password](#set-password)
    - [Check version](#check-version)
    - [dig](#dig)
    - [mtr](#mtr)
    - [ss (Netstat equivalent)](#ss-netstat-equivalent)
    - [run a new shell](#run-a-new-shell)
    - [reboot](#reboot)
    - [Get Linux Running Processes](#get-linux-running-processes)
    - [List Open Files](#list-open-files)
    - [Everything is a file!](#everything-is-a-file)
    - [Naming](#naming)
    - [Hidden Files](#hidden-files)
    - [Help](#help)
    - [Compressing](#compressing)
    - [Wildcards](#wildcards)
    - [Permissions](#permissions)
    - [change owner](#change-owner)
    - [head and tail](#head-and-tail)
    - [sort](#sort)
    - [Viewing Data](#viewing-data)
    - [Piping Data](#piping-data)
    - [nano](#nano)
    - [top](#top)
    - [shasum checks hash](#shasum-checks-hash)
    - [diskutil](#diskutil)
    - [lspci lists pci information](#lspci-lists-pci-information)
    - [scp Secure Copy Protection](#scp-secure-copy-protection)
    - [fdisk](#fdisk)
    - [nano](#nano-1)
    - [netcat](#netcat)
    - [Linux Rescue Environment](#linux-rescue-environment)
    - [Apple Rescue Environment](#apple-rescue-environment)
    - [Networking](#networking)
      - [ip address](#ip-address)
      - [ifconfig](#ifconfig)
    - [firewall](#firewall)
    - [Create Group](#create-group)
    - [Show default gateway](#show-default-gateway)
    - [wget download file](#wget-download-file)
    - [Linux socket](#linux-socket)
- [Linux Notes](#linux-notes)
  - [Linux Introduction](#linux-introduction)

## Who Am I

```bash
# returns username eg `ubuntu`
whoami 
```

## What groups am I a member of?

```bash
groups <<username>>
````

The output will read  ubuntu: ubuntu ... and this means ubuntu is your primary group name

## Install

### install apps

```bash
# what's already installed
sudo dpkg --get-selections
# see if something is installed
sudo dpkg --get-selections | grep <<name>>
```

```bash
# when finished
sudo apt autoremove
```

### install ifconfig

```bash
sudo apt install net-tools
```

### install a service like MongoDB on AWS Linux

```bash
# install mongo
sudo yum install -y mongodb-org
# check which version we are using
ps --no-headers -o comm 1
# start
sudo systemctl start mongod
# check status
sudo systemctl status mongod
# start when system starts
sudo systemctl enable mongod
```

## Labs

### Set Password

```bash

sudo passwd <<user>>

echo -e "kali\nkali" | sudo passwd ec2-user
echo -e "kali\nkali" | sudo passwd kali
```

### Check version

```
cat /etc/os-release
```



### dig

dig	


### mtr

mtr my traceroute : non-stop	

### ss (Netstat equivalent)

### run a new shell

```bash
# run a new shell in a new window
qterminal
```

### reboot

```bash
/sbin/reboot
# or
systemctl poweroff
# or
systemctl reboot
```

### Get Linux Running Processes

*Note that Linux has no such thing as an `exe` file and any file can be an executable in Linux.  Whether or not a file can run as an executable depends on the permission levels given to the file (read-write-execute) ie must have execute permissions granted*


[https://github.com/spartaglobal/new-curriculum/tree/master/devops/mutable-pipelines/advanced-bash](https://github.com/spartaglobal/new-curriculum/tree/master/devops/mutable-pipelines/advanced-bash)

cd

```
CD /Volumes can get us to the root where we see mounted volumes eg  
cd 'Macintosh HD' 
or 
cd Volumes
```

### List Open Files

lsof

### Everything is a file!

```
touch file.txt
nano file.txt
# add content
file file.txt  # shows ASCII text
# change it to a picture
mv file.txt picture.jpg
file picture.jpg  # still shows ASCII text
```

### Naming

Use underscores and lower case!

### Hidden Files

```
# show hidden files in vagrant
cd ../vagrant
ls -la

# hiding a file - add a '.' at the start of a file!
```

### Help

```
man 

## help commands containing a word
man -k word-to-find
```

### Compressing

```
tar -cvf archive.tar ~/myfolder/
```

### Wildcards

```
# list all files beginning with V
ls V* 
# list all two-letter phrases beginning with V
ls V?  
# match a range of characters
ls Vagrant[1-9]
```

### Permissions

```
r # read
w # write
x # execute

# Groups
Owner
Group
Others

# show permissions
ls -l

# change permissions - add +x (execute) permission to the owner (the user)
chmod u+x file.txt   
# add +x for all groups
chmod  +x file.txt    
# remove
chmod -x file.txt

# shorthand
# grant full permissions to everyone
chmod 777 file.txt  

# change folder permissions
# read/write/execute as before

# only 2 people who can change the permissions of a folder
# 1) owner
# 2) root 
```

### change owner

```bash
# get username eg `ubuntu`
whoami
# get groups 
groups ubuntu
# change owner
sudo chown -R root:ubuntu /path/to/folder
```


### head and tail

```
head file.txt
head 20 file.txt

tail file.txt
tail 20 file.txt

# live updates will push updates as added (eg logging file)
tail -f file.txt
```

### sort

```
# view file
cat file.txt
# list alphabetically
sort file.txt  
# number of lines
nl file.txt
# word count
wc file.txt  # words lines characters

# also
cut
sed
uniq
tac
```

### Viewing Data

```
STDIN  0

STDOUT 1

STDERR

# to file
> 
# append
>>

# page at a time
cat file.txt | less

# search for keyword
cat file.txt | grep some_word
```

### Piping Data

```
# show first 3 files
ls | head -3
# show first 3 files but last of them
ls | head -3 | tail -1
```

### nano

https://linux.die.net/man/1/nano 


### top

```
# view processes
top

# view local processes
ps

# view all processes
ps aux

# terminate by process id
kill 2727   
```

### shasum checks hash

```
shasum -a 1  /path/to/file 
shasum -a 256 /path/to/file
```

### diskutil

```
diskutil list    shows all partitions on a computer 
sudo diskutil eraseDisk FAT32 RASPBIAN MBRFormat /dev/disk2 
```


### lspci lists pci information

lspci is a command on Unix-like operating systems that prints ("lists") detailed information about all PCI buses and devices in the system


### scp Secure Copy Protection

-r recursive copies entire directory

### fdisk

-l list partitions

### nano

-B create backup of file

### netcat

https://www.sans.org/security-resources/sec560/netcat_cheat_sheet_v1.pdf

```bash
# listen on port 12345
nc -l -p 12345
```



### Linux Rescue Environment

### Apple Rescue Environment

### Networking

#### ip address

`ip address` returns ip information eg IP address

#### ifconfig

`ifconfig` gives more detailed information

### firewall

```bash
sudo apt install ufw
sudo ufw status
sudo ufw enable/disable
sudo ufw status verbose
```


### Create Group

sudo groupadd docker

### Show default gateway

```bash
route -n  
ip route show
netstat -rn
```

### wget download file

wget https://raw.githubusercontent.com/philanderson888/data/master/sampletextfile.txt


### Linux socket

http://manpages.ubuntu.com/manpages/trusty/man1/socket.1.html

```bash
# create server socket listening
socket -sl 12345

# create server socket and respond with message
socket -wslqvp "socket is listening here" 12345

# connect
socket -v 1.2.3.4 12345

```


# Linux Notes

## Linux Introduction

Ubuntu is supported by Canonical 

Debian is supported by open source community volunteers 

Ubuntu has `PPA`

Debian does not have `PPA`

`PPA` IS `personal package archives` which easily make software available for Ubuntu useres