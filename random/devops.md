# infrastructure as code

## contents

- [infrastructure as code](#infrastructure-as-code)
  - [contents](#contents)
  - [bash](#bash)



## bash

```
cht.sh
when-life-gives-you-lemons-write-better-error-messages
alias myip=curl 1.2.3.4
function mkcd() { mkdir -p "$@" && cd "&@" }
function gitpush() { git add . && git commit -m "$@" && git push }
/.bash_profile
  alias chrome="open -a 'Google Chrome'"
```



# Cloud Labs

### Install AWS Linux 

```
EC2 => launch => choose AMI => Free => Launch => Key pair => Store
### restric access
chmod 400 keypair.pem
EC2 => instance => connect => use given code to connect
```

### AWS RDS database access

```
Create mysql database
add security group with inbound and outbound rules
can configure inbound rules to only allow set ip addresses
```

### AWS Securing Access To S3

```
view files
create public files
restrict access to bucket
 - public
 - access control list
 - bucket policies

Lab
Create bucket
Add image
Make image public
Click on URL to view image in browser

Access by 
- public ?
- access control lists
- advanced bucket policy for others to access eg restrict access per user in a shared s3
   bucket

```

### Installing Linux with a GUI

```
# install basic terminal tools
sudo apt install tmux git ranger vim
# 2GB download takes a while
sudo apt install lubuntu-desktop -y
# List Block Storage Volumes ie Drives
lsblk
# create a filing system on volume /dev/xvdb
sudo mke2fs /dev/xvdb
# go to /mnt path to get on this volume
sudo mount /dev/xvdb /mnt   
```

### Windows with RDP

Lab : creating a VM in Azure

# DevOps Intro

[https://github.com/spartaglobal/new-curriculum/tree/master/devops/mutable-pipelines/devops-intro](https://github.com/spartaglobal/new-curriculum/tree/master/devops/mutable-pipelines/devops-intro)

### CI-CD-CD

Continuous Integration

Continuous Delivery

Continuous Deployment

## Vagrant

### Vagrant : get started guide

[https://learn.hashicorp.com/vagrant/#getting-started](https://learn.hashicorp.com/vagrant/#getting-started)

Vagrant can use scripts from `Packer`, `Chef` or `Ansible` to provsion and create and run virtual machines

### Vagrant with Hyper-V

```
# enable with 
Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Hyper-V -All
# create and run first default vm  (this failed on Windows!)
vagrant box add hashicorp/bionic64
# show machines
vagrant box list
vagrant up 
```

### Vagrant With Virtualbox

[https://github.com/spartaglobal/new-curriculum/tree/master/devops/mutable-pipelines/dev-environments](https://github.com/spartaglobal/new-curriculum/tree/master/devops/mutable-pipelines/dev-environments)

```
choco install virtualbox -y
choco install vagrant -y
restart-computer
```


Virtual box drivers are not installed !
Manually install : right click on .inf and install

### CMD (not powershell) terminal as admin :
sc start vboxdrv

Control panel => Network Adapters => VBox Host Only Network 
 => Properties => Install => Service => Add => Oracle 
 => choose the only service there => OK

Remove HyperV
```

### Vagrant Initial Steps

Vagrant files are written in Ruby!

```
# Create Vagrantfile
vagrant init

# Set a more specific version
vagrant init ubuntu/xenial64

### This is the copy of the Vagrant file which works now
Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/xenial64"
end

# In windows, make sure HyperV is not conflicting with VirtualBox - turn it off and reboot
bcdedit /set hypervisorlaunchtype off          (on or auto to restore it)

# turn on (5-10 minutes)
vagrant up

# log in
vagrant ssh

# update
sudo apt-get update -y

# install nginx
sudo apt-get install nginx -y

# start nginx
sudo systemctl start nginx

# check if running
ps aux | grep nginx
service nginx status

# start also with this command
sudo service nginx start/stop
    

# see which service is using port 80
netstat -tulpn | grep :80

# if it works you can now do, in a browser
http://localhost:80  
# and a web page will appear

# reload machine with new configuration
vagrant reload

# or

# take down vm then boot up again
vagrant destroy -f && vagrant up

# set dns
vagrant plugin install vagrant-hostsupdater

# add to config fileconfig.hostsupdater.aliases = ["development.local"]

# this is the script which works
Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/xenial64"
  config.vm.network "private_network", ip: "192.168.10.100"
  config.hostsupdater.aliases = ["development.local"]
end

# Now access via 
http://192.168.10.100
http://development.local
```

## Provisioning

[https://github.com/spartaglobal/new-curriculum/tree/master/devops/mutable-pipelines/provisioning](https://github.com/spartaglobal/new-curriculum/tree/master/devops/mutable-pipelines/provisioning)

Provision = configure and setup an environment

- Folders
- Files
- Programs
- Scripts

### Provision A Folder

```
# maps /app to /app on VM

Vagrant.configure("2") do |config|

  config.vm.box = "ubuntu/xenial64"
  config.vm.network "private_network", ip: "192.168.10.100"
  config.hostsupdater.aliases = ["development.local"]

  # Synced app folder
  config.vm.synced_folder "app", "/app"
  config.vm.synced_folder "c:/app", ls"/app"  # windows

end
```

### which

```
# find out the path to an executable
which ruby
```

### update and upgrade

```
# update metadata
sudo apt update
# upgrade
sudo apt-get upgrade -y
```

### nginx

```
sudo apt-get install nginx -y
```

### Provisioning an environment

```
mkdir environment
cd environment
touch provision.sh

# add this to provision.sh

#!/bin/bash

sudo apt-get update -y
sudo apt-get upgrade -y
sudo apt-get install nginx -y

sudo apt-get install python-software-properties
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt-get install nodejs -y
sudo npm install pm2 -g

# Now add this provisioning to our Vagrant script

Vagrant.configure("2") do |config|

  config.vm.box = "ubuntu/xenial64"
  config.vm.network "private_network", ip: "192.168.10.100"
  config.hostsupdater.aliases = ["development.local"]

  # Synced app folder
  config.vm.synced_folder "/Users/Shared/Vagrant/starter-code/app", "/home/ubuntu/app"

  # Provisioning
  config.vm.provision "shell", path: "environment/provision.sh"

end

# Try running the app with (on Windows)
vagrant destroy -f; vagrant up; vagrant ssh 

# also play around with adding data to files remotely
# add to new file
echo hello > testfile.txt
echo ' ' >> .bashrc 
echo hello >> .bashrc
echo ' ' >> .bashrc
echo 'export VAR_01=variable01' >> .bashrc
echo 'export VAR_02=variable02' >> .bashrc
# also
echo 'test' >> /home/vagrant/.bashrc

# This is the sample
require 'spec_helper'

describe package('nginx') do
  it { should be_installed }
end

describe service("nginx") do
  it { should be_running }
  it { should be_enabled }
end

describe port(80) do
  it { should be_listening }
end

describe package('nodejs') do
  it { should be_installed }
end

describe command('nodejs --version') do
  its(:stdout) { should match /v6./ }
end

describe package('pm2') do
  it { should be_installed.by('npm') }
end

describe package('git') do
  it { should be_installed }
end

describe command('git --version') do
  its(:stdout) { should match /2\.7\../ }
end
```

### Running your app

```
vagrant ssh
cd ../ubuntu/app
npm install
node app.js

# on local machine go to 
http://development.local:3000 and the test app should appear
```






### Ubuntu Install Node

```bash
#!/bin/bash
sudo apt update -y
sudo apt upgrade -y
sudo apt install nginx -y
sudo apt install python-software-properties
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt install nodejs -y
sudo npm install pm2 -g
```






## Environment Variables

```
#!/bin/bash

sudo apt-get update -y
sudo apt-get upgrade -y
sudo apt-get install nginx -y

sudo apt-get install python-software-properties
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt-get install nodejs -y
sudo npm install pm2 -g

echo 'hello' > testfile.txt

echo ' ' >> .bashrc 
echo 'export VAR_01=variable01' >> .bashrc
echo 'export VAR_02=variable02' >> .bashrc
echo 'export VAR_03=variable03' >> /home/vagrant/.bashrc

echo 'VAR_01 is ' + $VAR_01
echo 'VAR_02 is ' + $VAR_02
echo 'VAR_03 is ' + $VAR_03

echo ' ' >> .bashrc 
echo 'export VAR_01=variable01' >> .bashrc
echo 'export VAR_02=variable02' >> .bashrc
echo 'export VAR_03=variable03' >> /home/vagrant/.bashrc

# does not work
echo 'VAR_01 is '
echo $VAR_01
echo 'VAR_02 is '
echo $VAR_02
echo 'VAR_03 is '
echo $VAR_03
echo 'VAR_01 is ' + echo $VAR_01

# works
echo 'echo $VAR_01' >> test.sh
sudo chmod 777 test.sh

# does not work
./test.sh

# works
echo '=============================='
echo 'The tail contents of .bashrc :'
tail .bashrc
```

## Packer

### Intro To Packer

Packer creates images and runs them on AWS

choco install packer

Packer creates machine images

Packer with devops to build a new server

Packer IAAS

Packer produces replaceable images

Vagrant can replaced by Packer

### Packer simple commands

```
choco install packer
packer validate template.json
# create and run an AWS snapshot from which to build an image
packer build template.json
```

## Provisioning

Creates and runs a virtual machine from scratch

VM template can be used to provision a new virtual machine

### Provisioning can can be done via

Chef

Puppet

Ansible

Powershell

Bash

## Terraform 

by HashiCorps - provisioning

[Terraform by HashiCorp](https://www.terraform.io/)

## Chef

Vagrant

    Crude

Chef

    Fully automated upgrade to Vagrant
    
    Use Ruby
    
    CDK Chef Development Kit
    
        chef
        chef-client
        knife
        Test Kitchen
        ChefSpec
        CookStyle
        FoodCritic
        InSpec
        
    
    Chef workstation
    
        
    
        Create 
        
            Cookbook
            Recipe
        
            Test Kitchen
            
        Test cookbook
            
        Talk to Chef Server using 
        
            knife
            chef
        
        Synchronise versions
        
        Ensures critical data stored in data bags
        
        Replaces ChefDK
            
            
        
        
    Chef Client Nodes 
    
        these are the machines managed by Chef
        
        Chef client is installed on each node
        
            used to configure client to desired state
            
            performs all tasks configured in run-list
            
            pull down any config data from server
            
            uploads completed data to the server
    
    Chef Server
    
        Stores
        
            configuration data
        
            cookbooks
        
            Policies
        
            Metadata describing each node
            
    Chef Supermarket
        
        Stores community cookbooks

### Downloading Chef

    Download from 
    
        https://downloads.chef.io/chefdk/
    
    Vagrant 
    
        Install from https://www.vagrantup.com/downloads.html
        
    Create a folder and run
        
        chef generate cookbook node

### Kitchen

    Runs all tools
    
    Create cookbook first = container
    
        Kitchen create
        Kitchen converge
        
        One cookbook can have 2 recipies
            Eg
                One for Node
                One for Mongo
    
    Chef generate cookbook node
    
    Then create recipes which are the provisioning script which gets executed
    
        Eg Python
        Eg MongoDB
    
        Package "nginx"   does  apt-get install nginx/ apt-get update.../ apt-get upgrade /  npm install / npm update / npm upgrade
        
        
    
    Then command 'kitchen create'

Chef Attributes

Chef Template

Chef CI

Unit Test

    Package "nginx"
    Include_recipe "nodejs"
    Nodejs_npm 'pm2'
    Service "nginx" do
        Action [  :enable, :start  ]
      End
    
    
    Kitchen test (is a unit test)
    
        runs the whole kitchen

Integration test

    Runs the recipes

ChefSpec = unit testing application

    Chef unit test means 'will this work in theory'

InSpec = Integration testing application

    Integration test in chef means 'have you actually run it'

source “https://supermarket.chef.io” cookbook `nodejs`,`~5.0.0.0` metadata

kitchen verify - runs the integration test

kitchen diagnose –all

Make a change

    chef exec
    rspec 
    
        . . run unit tests
        
    kitchen converge
    
    kitchen verify
    
    kitchen test
    
    Then push to github



# Docker

Docker is the world’s leading software container platform.

Docker is a container technology in which containers are packed up with necessary libraries and dependencies in a standardized unit for software development

[https://github.com/spartaglobal/new-curriculum/tree/master/devops/orchestration-and-containerization/docker-intro](https://github.com/spartaglobal/new-curriculum/tree/master/devops/orchestration-and-containerization/docker-intro)

### Install Docker

[https://hub.docker.com/search?offering=community&type=edition](https://hub.docker.com/search?offering=community&type=edition)

### Hello World

```
docker --version
docker run hello-world

# download and run ubuntu and load up a bash command line inside the ubuntu
docker run -it ubuntu bash

# list images
docker image ls
# list containers
docker container ls --all

# run ubuntu with more advanced command
docker run --interactive --tty ubuntu bash

# install ping
apt-get install -y iputils-ping

# hostname
hostname
```

### DockerFiles

```
FROM ubuntu:16.04

RUN apt-get update -y
RUN apt-get upgrade -y
```

### Building a docker file

```
docker build .

# tag with a name

docker build . -t simple-app

# run the command from the parent folder
docker build simple-app --tag simple-app

# view images
docker images

# run an image
docker run simple-app

# running images
docker ps

FROM ubuntu:16.04

RUN apt-get update -y
RUN apt-get upgrade -y
RUN apt-get install nginx -y

# run nginx in foregreound mode
CMD nginx -g 'daemon off;'

## rebuild and run
docker build . -t simple-app
docker run simple-app
```

### Docker with ports

```bash
docker run -p 80:80 simple-app
```

### Run docker in the background

```
# start docker as a background service
docker run -p 80:80 -d simple-app
# stop it
docker stop <<id>>
docker rm <<id>>

# remove image
docker rmi <<id>>
```

### NginX

```
# download and run docker instance running nginx
docker run --detach --publish 80:80 --name webserver nginx 

# view the instance in your browser by going to http://localhost 

# stop the container 
docker container stop webserver
# start it
docker container start webserver
# remove it
docker container rm <<name1>> <<name2>>
```

### Node Sample App

```
# download it
git clone https://github.com/dockersamples/node-bulletin-board
cd node-bulletin-board/bulletin-board-app
# build it
cd .. (so we are in node-bulletin-board folder)
docker build bulletin-board-app --tag bulletinboard:1.0
# run it
docker run --publish 8000:8080 --detach --name bb bulletinboard:1.0
# view app at http://localhost:8000
# remove running container
docker rm bb --force
```

### Pushing Docker Container to Docker Hub

```
Docker Hub => Repositories => Create
philanderson888/test-node-app

# on the Docker CLI
docker tag bulletinboard:1.0 philanderson888/test-node-app
docker push philanderson888/test-node-app
```

### Docker Node Example

```
https://github.com/docker/docker
https://docs.docker.com/engine/examples
https://docs.docker.com/engine/examples/mongodb
https://docs.docker.com/engine/examples/nodejs_web_app

## NODEJS 
http://toobler.com/blog/how-to-get-a-node-js-application-into-a-docker-container
        
package.json
{
    “name”: “docker_web_app”,
    “version”: “1.0.0”,
    “description”: “Node.js on Docker”,
    “author”: “First Last <first.last@example.com>”,
    “main”: “server.js”,
    “scripts”: {
        “start”: “node server.js”
    },
    “dependencies”: {
        “express”: “^4.13.3”
    }
}

### server.js
'use strict';
const express = require('express');
// Constants
const PORT = 8080;
// App
const app = express();
app.get('/', function (req, res) {
res.send('Hello world\\\\n');
});
app.listen(PORT);
console.log('Running on <http://localhost>:' + PORT);

# Create a Dockerfile
touch Dockerfile
    
### Build image from LTS 'argon' version of node
FROM node:argon

### build working directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

### install dependencies    
COPY package.json /usr/src/app/
RUN npm install
            
### copy source code into docker image
COPY . /usr/src/app
```

### Docker Environment Variables

The standard for protecting sensitive credentials in production environments is to use Environment Variables Docker, via docker-compose and docker-compose.yml, easily allows developers to introduce environment variables and values, but you don’t want to commit those to a repo, so the answer is creating a docker-compose.override.yml file on your local machine which contains the sensitive information: The information in docker-compose.override.yml is added to (or overrides) the directives in docker-compose.yml. Since git and mercurial will allow you to commit docker-compose.override.yml files, the other important step is adding your docker-compose.override.yml file to your .gitignore or .hgignore file, preventing the file from being seen from the two version control tools. docker-compose.override.yml

### Docker Compose - YAML multi-docker environments

Docker Compose provides configuration and running of multi-docker environments using YAML

## .NET on Docker

## Docker with .NET

```
How to run an [ASP.NET](<http://asp.net/>) web application inside a Docker container

<https://blogs.msdn.microsoft.com/allthingscontainer/2016/10/04/>
     windows-containers-how-to-containerize-a-asp-net-web-api-application-
     in-windows-using-docker

<https://docs.microsoft.com/en-gb/virtualization/windowscontainers/index>

<https://channel9.msdn.com/Blogs/containers/Containers-101-with-Microsoft-and-Docker>
```

[https://hub.docker.com/r/microsoft/dotnet/](https://hub.docker.com/r/microsoft/dotnet/)

### Container sample: Run a simple application

```
You can quickly run a container with a pre-built .NET Core Docker image, based on the .NET Core console sample.

Type the following command to run a sample console application:

docker run --rm mcr.microsoft.com/dotnet/core/samples

```

### Container sample: Run a web application

```
You can quickly run a container with a pre-built .NET Core Docker image, based on the ASP.NET Core sample.

Type the following command to run a sample web application:

docker run -it --rm -p 8000:80 --name aspnetcore_sample mcr.microsoft.com/dotnet/core/samples:aspnetapp

```

### Building a sample .NET Core application on Docker

```
<https://docs.microsoft.com/en-us/dotnet/core/docker/building-net-docker-images>

Clone the sample app

git clone <https://github.com/dotnet/dotnet-docker/>

Move to the root directory of this repository then type

cd samples

cd aspnetapp

docker build --pull -t aspnetapp .

docker run --name aspnetcore_sample --rm -it -p 8000:80 aspnetapp

```

### Worked Example With Commands

```
# list running containers
docker container ls

# remove container
docker container kill ce2df9017968

# list images
docker image ls

# list images with id
docker images -a

# remove image
docker rmi 99f959836f85

# run docker image
docker run --name aspnetcore_sample --rm -it -p 8000:80 aspnetapp

# Type <http://localhost:8000> and view a running ASP app

```

## Creating And Running Docker From Visual Studio

### Run a .NET ASP Core Web App On Docker

```
Make sure Docker Desktop is running

File, New [ASP.NET](<http://asp.NET>) Core web app and include Docker support or Project, Right click and add docker support.

Choose Linux (Not Windows)

Build and run the project

```

### Push New Docker Image To Docker Hub

```
docker ps (running)

docker ps -a  (all images)

docker login —username=philanderson888

docker images

REPOSITORY                             TAG                 IMAGE ID            CREATED             SIZE
dockersupport                          dev                 b23fdedefa86        57 minutes ago      207MB

// tag the image
docker tag b23fdedefa86    philanderson888/dockersupport:version01
docker push philanderson888/dockersupport

// docker image will now be available at <https://hub.docker.com/> 

    

```

### Run Docker Image From Azure

```
### Log in
portal.azure.com
### Connect to Azure Cloud Shell

### create a resource group
az group create --name docker-container-test --location uksouth

## create DNS name to expose to the internet
DNS_NAME_LABEL=aci-demo-$RANDOM

### Create instance

az container create \\
  --resource-group docker-container-test \\
  --name docker-container \\
  --image philanderson888/dockersupport \\
  --ports 80 \\
  --dns-name-label philanderson888-docker-asp-net-core-web-app \\
  --location uksouth

### Actually this did not work so did it in the GUI

{
    "$schema": "<https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#>",
    "contentVersion": "1.0.0.0",
    "parameters": {
        "location": {
            "type": "string"
        },
        "containerName": {
            "type": "string"
        },
        "imageType": {
            "type": "string",
            "allowedValues": [
                "Public",
                "Private"
            ]
        },
        "imageName": {
            "type": "string"
        },
        "osType": {
            "type": "string",
            "allowedValues": [
                "Linux",
                "Windows"
            ]
        },
        "numberCpuCores": {
            "type": "string"
        },
        "memory": {
            "type": "string"
        },
        "restartPolicy": {
            "type": "string",
            "allowedValues": [
                "OnFailure",
                "Always",
                "Never"
            ]
        },
        "ipAddressType": {
            "type": "string"
        },
        "ports": {
            "type": "array"
        },
        "dnsNameLabel": {
            "type": "string"
        }
    },
    "resources": [
        {
            "location": "[parameters('location')]",
            "name": "[parameters('containerName')]",
            "type": "Microsoft.ContainerInstance/containerGroups",
            "apiVersion": "2018-10-01",
            "properties": {
                "containers": [
                    {
                        "name": "[parameters('containerName')]",
                        "properties": {
                            "image": "[parameters('imageName')]",
                            "resources": {
                                "requests": {
                                    "cpu": "[int(parameters('numberCpuCores'))]",
                                    "memoryInGB": "[float(parameters('memory'))]"
                                }
                            },
                            "ports": "[parameters('ports')]"
                        }
                    }
                ],
                "restartPolicy": "[parameters('restartPolicy')]",
                "osType": "[parameters('osType')]",
                "ipAddress": {
                    "type": "[parameters('ipAddressType')]",
                    "ports": "[parameters('ports')]",
                    "dnsNameLabel": "[parameters('dnsNameLabel')]"
                }
            },
            "tags": {}
        }
    ]

### Check status

az container show \\
  --resource-group learn-deploy-aci-rg \\
  --name mycontainer \\
  --query "{FQDN:ipAddress.fqdn,ProvisioningState:provisioningState}" \\
  --out table

### Navigate to the FQDN to view your running container
FQDN                                    ProvisioningState
--------------------------------------  -------------------
aci-demo.eastus.azurecontainer.io       Succeeded

<https://aci-demo.eastus.azurecontainer.io>  in browser!

```

# Docker Images In Azure

## Push And Use A Docker Image From Azure

It is possible to create our own custom docker image, and then push this to Azure to use

```
git clone <https://github.com/dotnet/dotnet-docker>
cd dotnet-docker
cd samples
cd dotnetapp 
docker build --pull -t dotnetapp .
docker run --rm dotnetapp
az login
```

### Deploy Container Image In Azure From Docker Hub

```
portal.azure.com

New => Web app for container

Add the docker hub name with tag

```













# Kubernetes

Orchestrates multiple containers

## Kubernetes Terminology

## Orchestration

- so we don’t have to deploy containers individually
- picture of real coordination in a real orchestra

    Orchestrator : dynamic management

    ```
        Examples : Kubernetes, DC/OS, Nomad, Swarm
    ```

```
Master - controls replication, scheduling, external load balancers, public ip
Node - like a VM running container images
Pod - service consisting of one or more container images
   

Master - coordinates the cluster - schedules, maintains state, scales, rolls out updates
Node - VM or physical computer which serves as a worker machine in a Kubernetes cluster
Kubelet - agent software on each Node - manages the node and communicates with the master
Kubernetes API - Exposed by the master and used by the nodes and end users
Cluster
Minikube - lightweight version of Kubernetes
   cluster   -   start, stop, status, delete
```

## Kubernetes Basic Online Tutorial

[https://kubernetes.io/docs/tutorials/kubernetes-basics/create-cluster/cluster-intro/](https://kubernetes.io/docs/tutorials/kubernetes-basics/create-cluster/cluster-intro/)


### Windows Install kubectl

```bash
# install on Windows
choco install kubernetes-cli
```

### Ubuntu Install Kubernetes 

```bash
# install
brew install kubectl
# check
kubectl version --client
# minikube
brew install minikube
```

or 

```bash
# download
curl -LO "https://storage.googleapis.com/kubernetes-release/release/$(curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt)/bin/linux/amd64/kubectl"
# permissions
chmod +x ./kubectl
# path
sudo mv ./kubectl /usr/local/bin/kubectl
# test
kubectl version --client
```




# install on Linux 2
```bash
sudo apt-get update && sudo apt-get install -y apt-transport-https
curl -s <https://packages.cloud.google.com/apt/doc/apt-key.gpg> | sudo apt-key add -
echo "deb <https://apt.kubernetes.io/> kubernetes-xenial main" | sudo tee -a /etc/apt/sources.list.d/kubernetes.list
sudo apt-get update
sudo apt-get install -y kubectl
```

## Kubernetes Verify

```bash
# verify both client and server versions
kubectl version
# verify client version
kubectl version --client

# make a config file in the ~/.kube directory
cd ~
mkdir .kube
cd .kube
New-item config -type file
```




### MiniKube

```bash
# install on Windows
choco install minikube
# install on MAC/Linux
brew install minikube


minikube start
minikube status 

# version
minikube version

# start, for example on Windows this creates HyperV VM called minikube
minikube start

# if desired
minikube stop

# reclaim space
minikube delete

# reset machine and remove minikube and kubernetes and docker
minikube stop;
minikube delete;
rm -rf ~/.minikube ~/.kube;
brew uninstall kubectl;
brew cask uninstall docker virtualbox minikube;

kubectl cluster-info
kubectl get nodes
kubectl get pods
kubectl get namespaces
kubectl get services
kubectl get deployments

# get everything 

print "\\n\\nnamespaces\\n" && kubectl get namespaces
print "\\n\\npods\\n" && kubectl get pods
print "\\n\\npods\\n" && kubectl get pods -n default && kubectl get pods -n kube-system
print "\\n\\nnodes\\n" && kubectl get nodes
print "\\n\\ncluster\\n" && kubectl cluster-info 
print "\\n\\nservices\\n" && kubectl get services
print "\\n\\ndeployments\\n" && kubectl get deployments 

print "\\n\\npods\\n" && kubectl describe pods
print "\\n\\nservices\\n" && kubectl describe services

# show running pods in another namespace
kubectl get pods -n < < namespace > >     (or is it get pod!)
kubectl get pods -n default
kubectl get pods -n kube-system

# create deployment service
kubectl create deployment hello-minikube --image=k8s.gcr.io/echoserver:1.10
# expose deployment as a service
kubectl expose deployment hello-minikube --type=NodePort --port=8080

# stop 
minikube stop
# start
minikube start

# log in
# user is docker and pass is tcuser 
minikube ssh

# or Windows Hyperv log in with root (no password)
```

### Kubernetes Commands

```bash
# following the tutorial at 
# <https://kubernetes.io/docs/tutorials/kubernetes-basics/update/update-interactive/>
# get the number of deployments
kubectl get deployments
# list pods 
kubectl get pods
# show pods in detail
kubectl describe pods
# describe one pod in detail
kubectl describe services/kubernetes-bootcamp
# update an image
kubectl set image deployments/kubernetes-bootcamp kubernetes-bootcamp=jocatalin/kubernetes-bootcamp:v2
# set up a port as an environment variable
export NODE_PORT=$(kubectl get services/kubernetes-bootcamp -o go-template='{{(index .spec.ports 0).nodePort}}')
    echo NODE_PORT=$NODE_PORT  # returns NODE_PORT=12345

# works on MAC

printf '\\n\\nPrinting Node Port Exposed By The Service\\n'
export NODE_PORT=$(kubectl get services/hello-minikube -o go-template='{{(index .spec.ports 0).nodePort}}')
echo NODE_PORT=$NODE_PORT
# get the IP of a container
print "\\n\\nIP of minikube\\n"
echo $(minikube ip) # returns 172.17.0.45
# engage with a kubernetes container on a certain port
# note that due to load balancing a different container responds every time

print "\\n\\nRequesting Curl Response From Exposed IP and Port via HTTP\\n"
curl $(minikube ip):$NODE_PORT  

# confirm that a rollout has been successfully rolled out
kubectl rollout status deployments/hello-minikube

# look in detail at which image is running (inspect the image field)
kubectl describe pods  # check image field
# undo a faulty rollout
kubectl rollout undo deployments/hello-minikube
# show image will now show the older image
kubectl describe pods # shows older image running
```

### Kubernetes Deployments

We can `deploy` our apps into our `cluster`

To do this we create a `deployment configuration`

`Deployment configuration` instructs Kubernetes how to create and update instances of the application.

`Kubernetes Deployment Controller` monitors running instances. If a node fails, another instance is spun up on another node. This is called `self-healing`. Before orchestration we would manually use scripts to start the applications but there was no self-healing.

A `Kubernetes Cluster` consists of the master node with the deployment instructions, and other nodes which run the containerised app.

## Kubernetes Deployment Tutorial

```
<https://kubernetes.io/docs/tutorials/kubernetes-basics>
                              /deploy-app/deploy-interactive/

# show all nodes 
kubectl get nodes
 
kubectl version

# Find node (only 1 here) to deploy on
# Run the app
# Configure to re-run if the node collapses

kubectl create deployment kubernetes-bootcamp 
  --image=gcr.io/google-samples/kubernetes-bootcamp:v1

# look at deployments - shows the running app
kubectl get deployments

# expose our app to a proxy web address
kubectl proxy

# view this data now
curl <http://localhost:8001/version>  or /  or /api  or /apis

# run in a new terminal window 
print "\\n\\n\\n"
export POD_NAME=$(kubectl get pods -o go-template --template '{{range .items}}{{.metadata.name}}{{"\\n"}}{{end}}')
echo Name of the Pod: $POD_NAME

# Powershell
echo (kubectl get pods -o go-template --template 
               '{{range .items}}{{.metadata.name}}{{end}}')
# Powershell - put this in an environmentvariable
set-item -Path Env:POD_NAME -value (kubectl get pods -o go-template 
            --template '{{range .items}}{{.metadata.name}}{{end}}')
```

## Kubernetes Pods And Nodes

A `node` is a worker machine in a cluster. It can contain one or more `pods`

A `pod` can contain one or more containers for example one container for the storage and another one for the application.

- shared storage
- IP
- Ports
- Container image version

A `pod` represents a logical application host. It can contain different `application containers` eg an app and the data

Pod containers are

- co-located
- share IP
- share port
- co-scheduled

Pod is the atomic unit on the `Kubernetes` platform

In case of failure, pods can be put onto other nodes.

Pods run on `nodes` which may be a physical or virtual machine depending on the cluster. Each node is managed by the `master` One node can have multiple `pods` and the master handles this.

Every node runs

- Kubelet = process to run communication between Node and master
- Container runtime which
    - gets the image
    - unpacks the image
    - runs the application

## Extra Kubernetes Commands

```
kubectl get pods

kubectl logs

kubectl exec
```

## Kubernetes Services

![https://d33wubrfki0l68.cloudfront.net/cc38b0f3c0fd94e66495e3a4198f2096cdecd3d5/ace10/docs/tutorials/kubernetes-basics/public/images/module_04_services.svg](https://d33wubrfki0l68.cloudfront.net/cc38b0f3c0fd94e66495e3a4198f2096cdecd3d5/ace10/docs/tutorials/kubernetes-basics/public/images/module_04_services.svg)

https://d33wubrfki0l68.cloudfront.net/cc38b0f3c0fd94e66495e3a4198f2096cdecd3d5/ace10/docs/tutorials/kubernetes-basics/public/images/module_04_services.svg

A cluster node holds several pods. A cluster has an IP

Each pod can have an IP internally which is not exposed unless deliberately by the `service`

A `service` defines a logical set of pods and their coupling via a YAML or JSON file.

The set of pods are targeted using a `LabelSelector`

`Services` can be exposed in different ways

- ClusterIP Reachable only internally (default)
- NodePort IP:Port reachable externally
- LoadBalancer (fixed external IP routes queries in)
- ExternalName kube-dns

`Services` can group across `pods` and even across `nodes` and can expose a service IP address which is different to each pod IP.

Each item in a service can be `tagged` with that service name

## Kubernetes Service Tutorial

[https://kubernetes.io/docs/tutorials/kubernetes-basics/expose/expose-interactive/](https://kubernetes.io/docs/tutorials/kubernetes-basics/expose/expose-interactive/)

```
# Learn how to expose an app outside the cluster with `kubectl expose` command
# Apply labels/tags to objects with `kubectl label` command
kubectl get pods
kubectl get services
kubectl expose deployment/kubernetes-bootcamp --type="NodePort" --port 8080
kubectl get services
kubectl describe services
# export kube the Node port number as a variable and then connect to it with curl
# service is exposed on internet but not on local powershell demo!
curl $(minikube ip):$NODE_PORT 

## use labels (works on web demo)
kubectl get pods -l run=hello-minikube 
## same on powershell
kubectl get pods -n kube-system
kubectl get pods -n default
kubectl describe pods

# Running the same tutorial via powershell on local machine
minikube version
minikube start
kubectl get pods
kubectl get services

# returns for example 32104 which is the port exposed by the service
echo (kubectl get services/hello-minikube -o go-template --template '{{(index .spec.ports 0).nodePort}}')
curl $(minikube ip):echo (kubectl get services/hello-minikube -o go-template --template '{{(index .spec.ports 0).nodePort}}')

# but curl to the ip:32104 is not working
```

## Puppet

Puppet allows the state of your infrastructure to be set in code and then this is enforced

## Ansible

[https://github.com/spartaglobal/Ansible](https://github.com/spartaglobal/Ansible)

Ansible is agentless software connecting via SSH






### Enable Linux Ubuntu On Windows

```powershell
Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Windows-Subsystem-Linux
Then install Ubuntu 18.04 LTS from the Windows Store
```


#### Install Ansible On Ubuntu

```bash
brew install ansible
# or
sudo apt install ansible -y
```




### Install Ansible On Windows

```
# create this as Vagrantfile and run 'vagrant up'
sudo apt-get update
sudo apt-get install software-properties-common
sudo apt-add-repository ppa:ansible/ansible
sudo apt-get update
sudo apt-get install ansible
press Y (yes) when prompted
Complete the installation and check with below command
ansible –version
```

### Install Ansible On MAC

```
sudo apt-get update
sudo apt-get install software-properties-common
sudo apt-add-repository ppa:ansible/ansible
sudo apt-get update
sudo apt-get install ansible
press Y (yes) when prompted
Complete the installation and check with below command
ansible –version
```

### Creating 3 Virtual Machines On MAC

```
# if there is a user error have to run this first
rm -r .vagrant

# create this as Vagrantfile and run 'vagrant up'
```

### Ansible playbook

## Jenkins CI

### MAC Install Jenkins

```
# install java sdk
brew cask install homebrew/cask-versions/adoptopenjdk8
# install jenkins
brew install jenkins-lts

# set as service
brew services start jenkins-lts
# just run
jenkins-lts

# now log in at
http://localhost:8080
# with initial password
dcf63cba5e004e959a19e9719fd32ae5

phil  Pa$$  

Create a new project as Freestyle
```

### AWS Ubuntu Install Jenkins

```
# ssh
# To connect to ssh we may need to add the command
ssh -o IdentitiesOnly=yes                         # add this to the SSH URL

# Visit this page
https://pkg.jenkins.io/debian-stable/

wget -q -O - https://pkg.jenkins.io/debian-stable/jenkins.io.key | sudo apt-key add -

# add the following entry in your /etc/apt/sources.list:
deb https://pkg.jenkins.io/debian-stable binary/

# Install Java
sudo apt update
sudo apt install openjdk-8-jdk

sudo apt-get update
sudo apt-get install jenkins

# allow 8080 access
# go to the security group and add 0.0.0.0/0 on port tcp 8080
# now go to 
http://...aws..instance..url:8080 
# and you should see your jenkins instance running
```

### AWS Scripted Jenkins Install

```
"#!/bin/bash -xe\n",   
"amazon-linux-extras install epel\n",
"sudo yum install -y aws-cfn-bootstrap\n",                  
"sudo mkdir /web\n",                  
"/opt/aws/bin/cfn-init -v ",
" --stack ", {
  "Ref": "AWS::StackName"
},
" --resource JenkinsServer ",
" --configsets install_all ",
" --region ", {
  "Ref": "AWS::Region"
}, "\n",

"# Install Jenkins and Java8\n",
"sudo yum install wget -y\n",
"sudo wget -O /etc/yum.repos.d/jenkins.repo https://pkg.jenkins.io/redhat-stable/jenkins.repo\n",
"sudo rpm --import https://pkg.jenkins.io/redhat-stable/jenkins.io.key\n",
"sudo yum install java-1.8.0-openjdk -y\n",
"sudo yum update -y\n",
"sudo yum install jenkins -y\n",        

"sudo service jenkins start\n",
"sudo chkconfig jenkins on\n",        

"# Update the AWS CLI to the latest version\n",
"sudo yum update -y aws-cli\n",        

"# Wait 30 seconds to allow Jenkins to startup\n",
"echo \"Waiting 30 seconds for Jenkins to start.....\"\n",
"sleep 30\n",                  

"## Nginx setup\n",
"service nginx restart\n",   

"# Restart Jenkins Service\n",
"/etc/init.d/jenkins restart\n",

"sleep 60\n",
"cp /var/lib/jenkins/secrets/initialAdminPassword /web/initalpass.html \n",
"chown nginx:nginx /web/initalpass.html \n",

"# Configure AWS CLI and GIT for jenkins user\n",
"sudo su - jenkins --shell /bin/bash -c \"aws configure set region eu-central-1\" \n",
"sudo su - jenkins --shell /bin/bash -c \"aws configure set output json\" \n",
"#until [ -f /var/lib/jenkins/jenkins.install.InstallUtil.lastExecVersion ]; do   sleep 5; service jenkins restart; done\n",
"while [ ! -f /var/lib/jenkins/jenkins.install.InstallUtil.lastExecVersion ]; do echo waiting for jenkins to finish setup; sleep 10; done; service jenkins restart\n",
```

# Azure

## Azure Devops

```
https://channel9.msdn.com/Shows/On-NET/DevOps-For-ASPNET-Developers-Pt1-What-is-DevOps

We can link up a GitHub repo to Azure!
 https://PAnderson0171@dev.azure.com/PAnderson0171/test/_git/test
 Can be cloned with our regular git commands
 https://dev.azure.com/PAnderson0171/test/_git/test
 dev.azure.com/PAnderson0171
```

### Blockchain

Blockchain has many features which are desirable such as

- Immutability
- Automation
- Decentralisation

App developers can now use Blockchain to create a permanent record of the progress of work in development of an app. Every aspect of the development of the app can be tracked and verified.

Blockchain can also provide levels of encryption which cannot be hacked without the permission of the developer.

Blockchain has a low cost of entry and a relatively high return on investment.

# HyperV

Shielded VM has Credential Guard + Bitlocker + TPM + can only run on approved hosts

## Nested Virtualisation

```
Set-VMProcessor -VMName <VMName> -ExposeVirtualizationExtensions $true
```

### NAT

```
### Your second option is NAT
### turn on NAT on the nested Hyper-V VM 
new-vmswitch -name VmNAT -SwitchType Internal
New-NetNat –Name LocalNAT –InternalIPInterfaceAddressPrefix “192.168.100.0/24”
### assign an IP address to the new internal adapter
### This will be the gateway address for VMs in Hyper-V
get-netadapter "vEthernet (VmNat)" 
    | New-NetIPAddress -IPAddress 192.168.100.1 -AddressFamily IPv4 -PrefixLength 24
Each nested guest VM needs to have an IP address set and its gateway set as follows:
get-netadapter "Ethernet" 
   | New-NetIPAddress -IPAddress 192.168.100.2 -DefaultGateway 192.168.100.1 
                      -AddressFamily IPv4      -PrefixLength 24
```

## Nano Server

## Security Features

Code Integrity

Control Flow Guard

### VM Checkpoint

VSS is used for backups Saved state is no longer used

## Failover Cluster

Azure Cloud Witness to store quorum

## Shared Hard Drives .vhdx

Can expand while online

Resize-VHD -Path C:4-VHDX2.vhdx -SizeBytes 32212254720

## Active Memory Dump

Can exclude eg VMs running in RAM!

### VM node fairness

load balances across a cluster

### VM Start Order

## Storage Microsoft

```
Storage Spaces
Storage QoS
Software-defined networking
VXLAN
NVGRE 
Remote DMA 
NIC Teaming
Storage replica
Synchronous replication - minimum 2 writes of data
SRG = Synchronous Replication Group
Storage Spaces Direct
Storage Deduplication
```

### Storage QoS

```
Goal is to guarantee I/O operations per sec IOPS
```

### Commercial Cloud Storage Solutions

```
Backblaze for cheap online
```

## Networking

vRSS virtual Receive Site Scaling

# VMs

.vmcx configuration data .vmrs vm runtime state

Get all data about a running VM

Get-VM -Name vm02 |Format-List *

## VMGroups

```
#Setup VM variables
$VM1 = Get-VM -Name VM1
$VM2 = Get-VM -Name VM2
$VM3 = Get-VM -Name VM3
#Create new VM Group
New-VMGroup -Name TestVMG1 -GroupType VMCollectionType
#Setup VM Group variable
$TestVMG1 = Get-VMGroup -Name TestVMG1
#Add VMs to the group/collection
Add-VMGroupMember -VMGroup $TestVMG1 -VM $VM1
Add-VMGroupMember -VMGroup $TestVMG1 -VM $VM2
Add-VMGroupMember -VMGroup $TestVMG1 -VM $VM3

Get-VM | ft Name, state, groups - AutoSize
Name  State    Groups
----  -----    ------
VM1   Running {TestVMG1}
VM2   Running {TestVMG1}
VM3   Running {TestVMG1}
```

## VM Management Groups

These are groups of VMGroups but can also contain other VMs

```
#Create new Management Group
New-VMGroup -Name TestVMGM1 -GroupType ManagementCollectionType
```

## VM Migration

2008 : Offline

2008R2 : Only on machines sharing a shared cluster volume

2012 : Between machines of same version

2012R2 : Between machines of different version

```
The following
example moves a VM named New Test VM to a destination server named Hyper-Server:
PS C:\\> Move-VM "New Test VM" Hyper-Server
```

---


### VPN Split Tunneling

VPN Properties, Networking, IPV4, Advanced, Use Default Gateway On Remote Network

### PSC Password Settings Container

ADUC, View, Advanced

Default Domain Policy, Properties, Attribute Editor, Password, make changes

### Offline Files lab

Control Panel, Sync Center, Offline Files, Enable
