# delete me terms


## contents

- [delete me terms](#delete-me-terms)
  - [contents](#contents)
  - [December Week 2 Definitions - 700](#december-week-2-definitions---700)
  - [20 december 2023](#20-december-2023)
  - [cyber random](#cyber-random)


## December Week 2 Definitions - 700

```
Bun
Zoe
Wasm 
Copilot 
Story blocks 
Scoop
Neo4j
Apprite 
Runway
Party kit 
mojo
padstart
signals
cloudflare
durable objects
cloudflare workers
http3
quic
opengraph
nocode
locode
photopea edit photos
vectorpea edit vectors
verto.sh
p5 learn js coding and graphics
billboard.js charts
svelte
npm publish
lightningjs
slickjs carousel
alpinejs minimal components
prismic.io
jest
colorhunt.co
manypixels.co
excalidraw
carbon.now.sh
readme.so
explainshell.com
tinypng
remove.bg
pagespeed.web.dev
gtmetrix.com
elastic beanstalk hosts app
lambda
snowflake big data
smartos is an in-memory operating system!
netbsd is a free unix-like os
coda 
play.ht use ai to generate human-like voice
storyblocks use stock video
opengraph adds complexity to simple web pages and allows them to interact with social media sites
webtransport over http3
http 1991
http2 2015
http3 runs on quic new transport protocol
quic relies on udp for faster user experience and switching between networks
quic released by google in 2012
quic tls connection in parallel with handshakes 
quic zero round trip time once connected
quic encrypted by default
yjs is online collaboration tool 
y-websocket 
p5 create graphics 
mock service worker for testing 
defensivecss 
pnpm has only one source of truth for libraries on a machine
turbopack bundler written in rust 
cdnjs find any cdn 
cronhub.io 
zerodayinitiative researchers get paid for finding bugs
hls live streaming by apple 
qterminal is default terminal in lubuntu
lubuntu has everything installed
systemctl poweroff
systemctl reboot
cd /volumes
docker build
docker run
docker ps -a
docker compose -yaml
k8s kubernetes
bml build measure learn
hcl hashicorp configuration language
dsc desired state configuration
expressRoute dedicated path
privilege identity admin
conjur secrets management
cloud formation uses yaml to configure app
kubernetes swarm 
aws outpost
compute = cpu + ram 
iaas builds vm from scratch
paas virtual desktop
caas containers as a service
naas network as a service
faas function as a service
aks azure kubernetese service
azure stack local cloud
aws outpost is local cloud
openstack is local cloud
jea just enough administration
ec2 builds vm
ebs elastic book store exposes volumes (drives)
vpc virtual private cloud
aws cloudwatch = alarms, logs
sns simple notification service
aws cloud trail logs
chat ops
cofee script
nist creates standards
csa controls
ra registration authority for certificates verifies identity
ca certificate authority issues certificate
signing a document provides integrity
esp provides encryption + integrity + antireplay
isakmmp internet security association and key management protocol
sa security association = live connection
gdio group domain of interpretation - allows groups to communicate
rsa assymetric
aes symmetric
diffie-hellman
block cipher symmetric uses blocks of 128/256 bits eg AES, DES
stream cipher eg rc4 is fast but only encrypts single bytes 
openid
oauth 

cloudflare
cloudflare durable objects
cloudflare workers
http3 
quic 

opengraph
docker compose -yaml
k8s kubernetes
bml build measure learn
hcl hashicorp configuration language
dsc desired state config 
expressRoute leased line
privilege identity
privilege session 
conjur secrets
cloud formation configure app with yaml 
kubernetes swarm 
aws outpost local cloud 
compute = cpu + ram 
iaas build from scratch 
paas get os 
caas get container 
naas get network 
faas build function 
aks azure kubernetes service
jea just enough admin 
ec2 vm 
ebs elastic book store gives volumes 
aws cloudwatch alerts 
sns simple notification service
coffee script
ra registration authority validates identiy 
ca certification authority issues certificate 
esp provides encryption + integrity + anti replay
ike facilities key exchange
isakmp manages keys


gdio group domain of interpretation
rsa asymmetric
aes symmetric
dac discretionary permissions assigned by admin
mac mandatory assigned by government
rbac role based access 
abac attribute based - fine grained 
segmentation = vlan + firewall + routing 
microsegmentation = mac address filtering
data lake £1.50 per hour time actual query running 
cognitive service 
nagios to monitor kubernetes
aws has 175 services 
zero trust policy - all services can potentially be malicious
iam identity policy applies to an individual 
iam resource policy applies to a resource 
aws glacier stores cold archive data 
auto scaling = elastic scaling - create fresh instance when cpu exceeds threshold 
amazon inspector does vulnerability scanning 
load balancing 
scale up in cpu/ram 
scale out in numbers 
network load balancer
application load balancer 
elastic load balancer 
software load balancer 
global route balancing with dns route 53
latency based routing detects closest node 
nginx load balancer + reverse proxy + waf web application firewall + jwt authentication 
apt install tmux terminal multiplexer - terminals which can be opened and closed but the session stays active 
apt install ranger - file manager 


apt install lubuntu-desktop 
lsblk list block storage volumes = drives 
sudo mke2fs /path makes a filing system at path 
sudo mount path /mnt mount a volume so its accessible 
ci-cd-cd continuous integration delivery deployment 
vagrant deploys vms using scripts ... with packer, chef, ansible 
enable-windowsoptionalfeature -online -featurename microsoft-hyper-v -all ... installs hyper v 
vagrant box add hashicorp/bionic64 - adds a vm
vagrant box list 
vagrant up turns on vm 
choco install virtualbox -y; choco install vagrant -y; restart-computer - installs virtualbox and vagrant 
sc start vboxdrv (cmd) start virtual box drivers 
vagrant init 
vagrant init ubuntu/xenial64
bcdedit /sethypervisorlaunchtype off - turns off hyper v
vagrant up - turn on
vagrant ssh - log in 
sudo apt-get update -y   update linux 
sudo apt-get install nginx -y 
sudo systemctl start nginx 
ps aux | grep nginx - see if nginx service is running
service nginx status 
sudo service nginx start
sudo service nginx stop 
netstat -tulpn | grep :80   which service is using port 80
vagrant reload 
vagrant destroy -f && vagrant up 
vagrant plugin install vagrant-hostsupdater
config.vm.synced_folder "myfolder", /"path"
which name-of-service find out path to name-of-service
sudo apt update
sudo apt-get upgrade
mkdir environment; cd environment; touch provision.sh 
#!/bin/bash 
sudo apt-get update -y
sudo apt-get upgrade -y
sudo apt-get install nginx -y
sudo apt-get install-python-properties
sudo apt-get install nodejs -y
sudo apt-get install pm2 -g 
config.vm.provision "shell", path: "environment/provision.sh"
vagrant destroy -f; vagrant up; vagrant ssh 
cd path-to-app/npm install;node app.js
tail file will print last 10 lines of file 
choco install packer 
packer creates vm images
vagrant and packer do same/simliar things 
choco install packer 
packer validate config.json
packer build config.json will build and run vm
vagrant is crude provisioning
chef is an upgrade to vagrant 
cdk chef development kit 
chef-client
docker -version 
docker run hello-world
docker run -it ubuntu bash 
docker image ls 
docker container ls --all 
docker run --interactive --tty ubuntu bash 
apt-get install -y iputils-ping - installs ping utility 
hostname 
docker build . -t tagged-name 
docker build path --tag tagged-name 
docker images 
docker run my-image
docker ps - running images 
docker run -p 80:80 my-app 
docker run -p 80:80 -d my-app runs as background service 
docker stop id 
docker rm id 

Bun
Zoe
Wasm 
Copilot 
Story blocks 
Scoop
Neo4j
Apprite 
Runway
Party kit 
mojo
padstart
signals
cloudflare
durable objects
cloudflare workers
http3
quic
opengraph
nocode
locode
photopea edit photos
vectorpea edit vectors
verto.sh
p5 learn js coding and graphics
billboard.js charts
svelte
npm publish
lightningjs
slickjs carousel
alpinejs minimal components
prismic.io
jest
colorhunt.co
manypixels.co
excalidraw
carbon.now.sh
readme.so
explainshell.com
tinypng
remove.bg
pagespeed.web.dev
gtmetrix.com
elastic beanstalk hosts app
lambda
snowflake big data
smartos is an in-memory operating system!
netbsd is a free unix-like os
coda 
play.ht use ai to generate human-like voice
storyblocks use stock video
opengraph adds complexity to simple web pages and allows them to interact with social media sites
webtransport over http3
http 1991
http2 2015
http3 runs on quic new transport protocol
quic relies on udp for faster user experience and switching between networks
quic released by google in 2012
quic tls connection in parallel with handshakes 
quic zero round trip time once connected
quic encrypted by default
yjs is online collaboration tool 
y-websocket 
p5 create graphics 
mock service worker for testing 
defensivecss 
pnpm has only one source of truth for libraries on a machine
turbopack bundler written in rust 
cdnjs find any cdn 
cronhub.io 
zerodayinitiative researchers get paid for finding bugs
hls live streaming by apple 
qterminal is default terminal in lubuntu
lubuntu has everything installed
systemctl poweroff
systemctl reboot
cd /volumes
docker build
docker run
docker ps -a
docker compose -yaml
k8s kubernetes
bml build measure learn
hcl hashicorp configuration language
dsc desired state configuration
expressRoute dedicated path
privilege identity admin
conjur secrets management
cloud formation uses yaml to configure app
kubernetes swarm 
aws outpost
compute = cpu + ram 
iaas builds vm from scratch
paas virtual desktop
caas containers as a service
naas network as a service
faas function as a service
aks azure kubernetese service
azure stack local cloud
aws outpost is local cloud
openstack is local cloud
jea just enough administration
ec2 builds vm
ebs elastic book store exposes volumes (drives)
vpc virtual private cloud
aws cloudwatch = alarms, logs
sns simple notification service
aws cloud trail logs
chat ops
cofee script
nist creates standards
csa controls
ra registration authority for certificates verifies identity
ca certificate authority issues certificate
signing a document provides integrity
esp provides encryption + integrity + antireplay
isakmmp internet security association and key management protocol
sa security association = live connection
gdio group domain of interpretation - allows groups to communicate
rsa assymetric
aes symmetric
diffie-hellman
block cipher symmetric uses blocks of 128/256 bits eg AES, DES
stream cipher eg rc4 is fast but only encrypts single bytes 
openid
oauth 

cloudflare
cloudflare durable objects
cloudflare workers
http3 
quic 

opengraph
docker compose -yaml
k8s kubernetes
bml build measure learn
hcl hashicorp configuration language
dsc desired state config 
expressRoute leased line
privilege identity
privilege session 
conjur secrets
cloud formation configure app with yaml 
kubernetes swarm 
aws outpost local cloud 
compute = cpu + ram 
iaas build from scratch 
paas get os 
caas get container 
naas get network 
faas build function 
aks azure kubernetes service
jea just enough admin 
ec2 vm 
ebs elastic book store gives volumes 
aws cloudwatch alerts 
sns simple notification service
coffee script
ra registration authority validates identiy 
ca certification authority issues certificate 
esp provides encryption + integrity + anti replay
ike facilities key exchange
isakmp manages keys


gdio group domain of interpretation
rsa asymmetric
aes symmetric
dac discretionary permissions assigned by admin
mac mandatory assigned by government
rbac role based access 
abac attribute based - fine grained 
segmentation = vlan + firewall + routing 
microsegmentation = mac address filtering
data lake £1.50 per hour time actual query running 
cognitive service 
nagios to monitor kubernetes
aws has 175 services 
zero trust policy - all services can potentially be malicious
iam identity policy applies to an individual 
iam resource policy applies to a resource 
aws glacier stores cold archive data 
auto scaling = elastic scaling - create fresh instance when cpu exceeds threshold 
amazon inspector does vulnerability scanning 
load balancing 
scale up in cpu/ram 
scale out in numbers 
network load balancer
application load balancer 
elastic load balancer 
software load balancer 
global route balancing with dns route 53
latency based routing detects closest node 
nginx load balancer + reverse proxy + waf web application firewall + jwt authentication 
apt install tmux terminal multiplexer - terminals which can be opened and closed but the session stays active 
apt install ranger - file manager 


apt install lubuntu-desktop 
lsblk list block storage volumes = drives 
sudo mke2fs /path makes a filing system at path 
sudo mount path /mnt mount a volume so its accessible 
ci-cd-cd continuous integration delivery deployment 
vagrant deploys vms using scripts ... with packer, chef, ansible 
enable-windowsoptionalfeature -online -featurename microsoft-hyper-v -all ... installs hyper v 
vagrant box add hashicorp/bionic64 - adds a vm
vagrant box list 
vagrant up turns on vm 
choco install virtualbox -y; choco install vagrant -y; restart-computer - installs virtualbox and vagrant 
sc start vboxdrv (cmd) start virtual box drivers 
vagrant init 
vagrant init ubuntu/xenial64
bcdedit /sethypervisorlaunchtype off - turns off hyper v
vagrant up - turn on
vagrant ssh - log in 
sudo apt-get update -y   update linux 
sudo apt-get install nginx -y 
sudo systemctl start nginx 
ps aux | grep nginx - see if nginx service is running
service nginx status 
sudo service nginx start
sudo service nginx stop 
netstat -tulpn | grep :80   which service is using port 80
vagrant reload 
vagrant destroy -f && vagrant up 
vagrant plugin install vagrant-hostsupdater
config.vm.synced_folder "myfolder", /"path"
which name-of-service find out path to name-of-service
sudo apt update
sudo apt-get upgrade
mkdir environment; cd environment; touch provision.sh 
#!/bin/bash 
sudo apt-get update -y
sudo apt-get upgrade -y
sudo apt-get install nginx -y
sudo apt-get install-python-properties
sudo apt-get install nodejs -y
sudo apt-get install pm2 -g 
config.vm.provision "shell", path: "environment/provision.sh"
vagrant destroy -f; vagrant up; vagrant ssh 
cd path-to-app/npm install;node app.js
tail file will print last 10 lines of file 
choco install packer 
packer creates vm images
vagrant and packer do same/simliar things 
choco install packer 
packer validate config.json
packer build config.json will build and run vm
vagrant is crude provisioning
chef is an upgrade to vagrant 
cdk chef development kit 
chef-client
docker -version 
docker run hello-world
docker run -it ubuntu bash 
docker image ls 
docker container ls --all 
docker run --interactive --tty ubuntu bash 
apt-get install -y iputils-ping - installs ping utility 
hostname 
docker build . -t tagged-name 
docker build path --tag tagged-name 
docker images 
docker run my-image
docker ps - running images 
docker run -p 80:80 my-app 
docker run -p 80:80 -d my-app runs as background service 
docker stop id 
docker rm id 


docker push myapp - publishes my app 
touch dockerfile 
from node:argon build a specific version of node 
docker-compose.override.yaml apply secrets 
.net core on docker 
docker run --rm ... dot net sample 
docker run -it - runs in interactive mode 
docker run --rm does automatic clean-up deletion when done 
docker build --pull 
docker container ls 
docker container kill id
docker image ls 
docker images 
docker images tagName 
docker ps   lists all images 
docker ps -a    lists all running images 
docker login 
docker images 
docker tag imageName 
docker push imageName 
kubernetes = orchestrator = swarm = nomad 
kubernetes master manages the cluster
kubernetes node is a vm in the cluster 
kubernetes pod is a container running multiple docker images
kubelet is agent software on each kubernetes node vm 
minikube is cut down version of kubernetes 
cluster start, stop, delete, status
choco install kubernetes-cli 
brew install kubectl 
kubectl version --client 
brew install minikube
sudo apt-get install kubectl -y 
kubectl version 
kubectl version --client 
choco install minikube 
brew install minikube 
minikube status 
minikube version 
minikube start 
minikube stop 
minikube delete 
kubectl cluster-info 
kubectl get nodes 
kubectl get pods 
kubectl get namespaces 
kubectl get services 
kubectl get deployments 
minkube ssh 
kubectl expose deployment - publishes and exposes kubernetes cluster 
minikube ssh 
kubectl get deployments 
kubectl get pods 
kubectl describe pods 
kubectl describe podName 
kubectl rollout status 
kubectl rollout undo 
kubectl get proxy
kubelet is name of process to handle comms between master and node 
container runs on the node and runs the images 
kubectl get pods 
kubectl get logs 
kubectl exec 
kubectl label tagName 
kubectl get pods
kubectl get services 
kubectl expose deploymentName 
kubectl describe services 
puppet allows desired configuration to be enforced using yaml
ansible logs in via ssh and enforces configuration 
enable-windowsoptionalfeature -online -featurename microsoft-windows-subsystem-linux 
brew install ansible 
sudo apt-install ansible -y
sudo apt-get install ansible 
ansible --version
sudo yum install java-1.8.0-openjdk -y 
hyper-v shielded vm has extra secuirity
set-vmprocessor -vmname name-of-vm -exposevirtualizationextensions $true - enables hyperv nested virtualization
az group create groupName 
az container create 
az container show
new-vmswitch 
new-netnat 
new-netIPaddress
resize-vhd 
storage spaces
storage qos
nic teaming
srg synchronous replication group
storage spaces direct 
storage deduplication
.vmcx is vm configuration 
.vmrs is vm runtime status 
get-vm -name vmname | format-list *
html
data- 
color #aaa / #abcdef / rgb(0,0,0) / rgba(0,1,2,3)
nl number lines
wc word count
bash bourne again shell 
ps process status 
ls -1 names
ls -R recursive
ls -l permissions
nano .bash-profile loads when terminal loads
alias gohome=cd /Users/Shared
clear terminal
myscript.sh add to ./bash_profile and now any scripts in it will load for every terminal shell
chmod 777 myscript.sh
touch .aliases.sh 
alias loadThisSite='curl 1.2.3.4'
function gitPush(){git add . && git commit -m "$@" && git push}
defaults write com.apple.finder AppleShowAllFiles -bool TRUE && killall will show hidden files
function mkcd(){ mkdir "$1" && cd "$1"} - add to ~./bashrc
alias simplecommand complexcommand
function gitTag(){git tag -a "$1" -m "$2" %% git push origin --tags}
man command shows help for command
docker rmi id remove image 
docker run --detach --publish 80:80 --name webserver nginx 
docker container stop webserver 
docker container start webserver 
docker container rm webserver 
git clone myapp 
cd myapp 
docker build myapp --tag myapp:1.0
docker run --publish 80:80 --detach --name myapp:1.0 
docker rm myapp --force 
```

## 20 december 2023

```
man shows help files for given term eg man rm
ls -a shows hidden files
find path-to-root -name \\*find-this-text\\*
open . will open finder from terminal

cat displays contents of a file
sort will sort the lines of a file
nl gives number of lines in a file
wc gives number of words in a file
sleep 5 causes bash script to pause for 5 seconds
```




## cyber random 

```
Vhdx 
vhfx 
Vmescape 
Vmsprrawl 
Injection 
IDs 
Ips 
NAC 
sigcheck 
Dial in 
Sso 
Saml
MITM 
TPM BITLOCKER CHIP 
Enumerate detailed analyse of enemy 
Metasploit 
Open vas 
Exploit module 
SANS
GIAC

NSO ISRAEL 

FIPS 

FISMA 

hosts vulns 

Set burp as proxy 

Physical Control 
Logical control 

Cobit 

Scirt

NX memory 

DEP prevent exe running in data part 

SIEM

SCEP CERIFICATE ENROL 

SEH structured event handler 

ADS embed data in data 

Echo -n | shasum 

Jrat 

Hashcat 



1 Anomaly
2 hash based messsage authentication
3 hsm hardware security module
4 MTD MAX TOLERABLE DOWNTIME
5 PDS PROTECTED DISTRIBUTION SYSTEM = CABLING
6 PHARMING DNS
7 PII
8 ADS ALTERNATE DATA STREAM = DATA WITHIN DATA
9
AIRCRACK WIFI HACK
ALIENVALUT SIEM
10
BRO LINUX IDS
11
CELLEBRITE HACK MOBILE PHONE
12
DTP DYNAMIC TRUNKING PROTOCOL
13
EMET ENHANCED MITIGATION EXPERIENCE TOOLKIT
14
ENCASE FORENSIC ON HARD DRIVE
15
IOC INDICATOR OF COMPROMISE
16
NESSUS VULNERABILITY SCAN
17
NET GROUPS 
18
OSSIM OPEN SOURCE SECURITY INFO MGT
19
OWASP WEB APPLICATIONS
20
PROXY AUTO CONFIG
21
Process EXPLORER
22
SANS SYSADMIN AUDIT NETWORKING SECURITY
23
SCADA
24
OODA OBSERVE ORIENT DECIDE ACT
25
BASTION HOST
26
CFAA COMPUTER FRAUD AND ABUSE ACT
27
ALPHA BAY
28
PIRATE BAY
29
NETFLOW FROM CISCO - IDS
30
BEACONING = PHONE HOME
31
NIKTO WEB SERVER VULNERABILITY
32
NIST 
33
BANNER GRABBING FROM HEADERS
34
LUA
35
FOOTPRINT
36
FINGERPRINT - UNIQUELY IDENTIFY SYSTEM
37
PIVOT POINT OF ENTRY
38
HTTRACK DOWNLOAD SITE
39
DROPLET MINI VM
40
BULLETPROOF ISP NO QUESTIONS ASKED
41
WIFI PINEAPPLE - ATTACK WIFI
42
BASH BUNNY 
43
LAN TURTLE
44
SECURITYONION IDS
45
GPG
46
WGET
47
SGUIL 


110
SUDO
111
SUDO APT
112
SUDO APT AUTOREMOVE
113
IFCONFIG
114
SUDO APT INSTALL NET-TOOLS
115
SUDO YUM INSTALL MONGODB-ORG
116
PS —NO-HEADERS
117
SYSTEMCTL START MONGOD
118
SYSTEMCTL STATUS MONGOD
119
SYSTEMCTL ENABLE MONGOD
120
SUDO PASSWD …..
121
CAT /ETC/OS-RELEASE
122
MTR MY TRACEROUTE
123
SS = NETSTAT
124
QTERMINAL STARTS NEW SHELL
125
/SBIN/REBOOT
126
SYSTEMCTL POWEROFF
127
SYSTEMCTL REBOOT
128
CD /VOLUMES
129
CD VOLUMES
130
LSOF LIST OPEN FILES
131
TOUCH
132
NANO
133
FILE SHOWS ASCII TEXT
134
MV
135
. HIDES FILE
136
MAN MANUAL
137
TAR ARCHIVE
138
R W X





139
LS V* LISTS ALL FILES STARTING WITH V
140
LS V? LISTS ALL TWO LETTER PHRASES STARTING WITH V
141
PERMISSIONS OWNER GROUP OTHERS
142
CHMOD
143
GROUPS UBUNTU
144
SUDO CHOWN -R
145
ADDUSER
146
HEAD
147
TAIL
148
CAT
149
NL
150
WC WORD COUNT
151
CUT
152
SED
153 
UNIQ
154
TAC
155
STDIN
156
STDOUT
157
STDERR
158
APPEND
159
TOP
160
PS



161


Ps aux

162
Kill
163
Shasum
164
DISKUTIL
165
DISKUTIL ERASEDISK
166
LSPCI
167
SCP
168
FDISK
169
UFW
170
SOCKET
171
SOCKET -SL 12345 LISTENS
172
SOCKET -V 1.2.3.4 12345 CONNECTS
173
PPA PERSONAL PACKAGE ARCHIVE = APP STORE
174


AZ VM LIST
175
SKU
176
NESTED VIRTUALIZATION
177
AZURE CLI
178
AZURE POWERSHELL
179
AZURE CLOUD SHELL
180
INSTALL-MODULE

thub
Notion
Nocode
Locode
Php
.net
Js
Css
Resolver
Analytics
Mux
Kotlin
Flutter
Cloudflare
Fastify
Jwt
Temporal dates
Graphql
Edgedb
Netlify
Tailwind
Zod
Wasm
Copilot
Ai
Play.ht
Scoop
Neo4j
Appropriate
Runway ml
Partykit
Mojo
Padstart
Signals
Http3
Quic
Y-websocket
Yjs 
Asciidoc
Photopea
Verto.sh
P5.js
Billboard.js
Bun
Svelte
Npm
Lightningjs
Slickjs carousel
Alpine js
Nuxt js
Tensor flow
Prismic
Console.time
Ngrok
Pnpm sim links
Bun
Nodemon
Dotenv
Bundling
Esbuild
Webpack
Parcel
Jest
Cdn
Caniuse
Cronjob.io
Tinypng
Photopea
Ionic.io
Remove.bg
Pagespeed.web.dev
Gtmetrix.com
Creately.com
Make.com
Bubble.io
Jetboost,io
Aatt.io
Airtree
Relume
Strapi
Zapier
Wix
Snipcart
Stripe
Firestore
Mongo
Baserow.io
Speechify.com
Elastic beanstalk
Code pipeline
Code deploy
Serverless
Lambda
Kubernetes
Terraform
Chef
Puppet
Ansible
Packer
Vagrant
Pipeline
Immutable
Digital ocean
Smart os
Net bsd
Hls streaming by apple
Koajs
Babel
Bom
Bms
Code splitting
Code sandbox
Codinggame.com
Devhints.io
Gatsby
Gulp
Zombie
Jamstack
Meteor
Parcel2
Scrimba
Spa
Trello
Stackbliz
Static site generator
Gulp
Karma
Mocha
Chai
Serverless
Nextjs
Osirix-rex
Asteroid bennu
Sulphur produced by volcanoes or life
Hydrogen sulphide and sulphur dioxide naturally combine so must be being generated now
Curiosity mars
Spirit mars
Opportunity mars
Venera venus
Pioneer to venus
Gargarin 57
Shepherd 61
65 gemini ed white space walk
69 apollo 12 to moon
Apollo 13 to moon
Skylab station
Soyuz 
Salyut space station
Challenger 84
Iss 98
Sputnik 57
Lunik 5 moon far side
Voyager deep space probe 70s
Voyager II
Voyager to mars
Viking to mars
Viking II mars
DART to asteroid crash
Rover mars
Opportunity mars still going
Curiosity mars
Surveyor to moon
Surveyor to moon with sample back to earth
Dawn probe to outer solar system
Ceres asteroid
772 billion uk budget
20 billion nhs budget in 1956
150 billion nhs budget now
Palestine in israel
Airbus
Spall
Hesh bomb
Crimea 1890
American independence 
Crusades
Manilla massacre
Mq9 reaper drone
Hellfire laser
Centurion tank 1945
T62 soviet tank
Shot israel tank
Ronald reagan aircraft carrier
Hms ocean UK 1000 men
Copper cu
Tin sn
Bronze mainly copper
Mark
Paul
Google ar
Higgs boson god particle
Quantum
War israel syria 73
Esp
Vhd
Vm escape
Vm sprawl
Ids
Ips

