# cyber-cloud

## Contents

- [cyber-cloud](#cyber-cloud)
  - [Contents](#contents)
- [Cloud Objectives](#cloud-objectives)
    - [MTA Cloud (retired exam)](#mta-cloud-retired-exam)
    - [CompTIA Cloud+](#comptia-cloud)
- [Cloud Random Terms](#cloud-random-terms)
    - [Mind Map Of Cloud, Tech And Devops](#mind-map-of-cloud-tech-and-devops)
    - [Cloud Terms](#cloud-terms)
    - [AWS Random Terms](#aws-random-terms)
    - [Devops General Terms](#devops-general-terms)
    - [Azure Quick Fire Terms](#azure-quick-fire-terms)
    - [Containers](#containers)
    - [Docker Quick Fire Terms](#docker-quick-fire-terms)
    - [Kubernetes Quick Fire Terms And Definitions](#kubernetes-quick-fire-terms-and-definitions)
    - [Vagrant Quick-Fire Terms](#vagrant-quick-fire-terms)
  - [Azure Random Terms](#azure-random-terms)
- [Cloud Overview](#cloud-overview)
  - [History](#history)
    - [Virtualization](#virtualization)
    - [Limitations](#limitations)
    - [Limitations broken by](#limitations-broken-by)
    - [App development](#app-development)
  - [Cloud Types 2020](#cloud-types-2020)
    - [On-Premises (No cloud) (27%)](#on-premises-no-cloud-27)
    - [Private (20%)](#private-20)
    - [Public (41%)](#public-41)
    - [Hybrid (22%)](#hybrid-22)
  - [IaaS vs PaaS vs SaaS](#iaas-vs-paas-vs-saas)
  - [PaaS](#paas)
  - [IaaS](#iaas)
  - [IaaS Resilience](#iaas-resilience)
  - [PaaS](#paas-1)
  - [SAAS Software As A Service](#saas-software-as-a-service)
    - [Overview of different cloud platforms](#overview-of-different-cloud-platforms)
    - [Vendor](#vendor)
  - [Private Cloud](#private-cloud)
    - [Deploying Cloud Technology Locall : Azure Stack and AWS Outposts](#deploying-cloud-technology-locall--azure-stack-and-aws-outposts)
    - [OpenStack which builds a private cloud](#openstack-which-builds-a-private-cloud)
    - [IoT : AWS, Greengrass, Azure Hub](#iot--aws-greengrass-azure-hub)
  - [Public Cloud Storage](#public-cloud-storage)
- [Cloud Identity](#cloud-identity)
    - [Managing Identity](#managing-identity)
    - [RBAC Role Based Access Control](#rbac-role-based-access-control)
- [Cloud Security](#cloud-security)
  - [Security Config and Compliance](#security-config-and-compliance)
    - [Security Standards](#security-standards)
    - [Physical Security](#physical-security)
    - [Security Standards](#security-standards-1)
    - [Compliance](#compliance)
  - [Laws](#laws)
  - [PKI](#pki)
    - [Symmetric](#symmetric)
    - [Asymmetric](#asymmetric)
    - [SSL](#ssl)
    - [Verifying validity of a site.](#verifying-validity-of-a-site)
    - [Key Archival Server](#key-archival-server)
    - [Signing can provide integrity](#signing-can-provide-integrity)
    - [PKI as a service](#pki-as-a-service)
  - [Encryption](#encryption)
    - [IPSEC](#ipsec)
    - [TLS and SSL](#tls-and-ssl)
  - [Ciphers](#ciphers)
    - [Asynchronous](#asynchronous)
    - [Cipher Detail (with images)](#cipher-detail-with-images)
    - [VPN Tunneling](#vpn-tunneling)
  - [Access Control (already covered)](#access-control-already-covered)
    - [Federation : pass the authentication back to original provider](#federation--pass-the-authentication-back-to-original-provider)
    - [Types of access control](#types-of-access-control)
  - [Object Authorisation (already covered)](#object-authorisation-already-covered)
  - [Data Classification](#data-classification)
  - [Segmentation and Microsegmentation](#segmentation-and-microsegmentation)
- [Advanced Cloud](#advanced-cloud)
  - [Serverless Compting : Functions](#serverless-compting--functions)
  - [Machine Learning](#machine-learning)
  - [Cognitive Services](#cognitive-services)
    - [IoT](#iot)
- [Security Automation](#security-automation)
    - [Why Automate?](#why-automate)
    - [Automation Scripting](#automation-scripting)
    - [Security Services](#security-services)
    - [Automation Tools](#automation-tools)
- [Containers](#containers-1)
    - [Container services - deploy and manage containers](#container-services---deploy-and-manage-containers)
    - [Containers](#containers-2)
- [Cloud And Container Services](#cloud-and-container-services)
    - [Microservices](#microservices)
- [DevSecOps](#devsecops)
- [AWS](#aws)
    - [AWS secure web app demo](#aws-secure-web-app-demo)
  - [AWS Container Services](#aws-container-services)
  - [AWS Abstracted Services](#aws-abstracted-services)
  - [AWS Environment Security](#aws-environment-security)
    - [IAM](#iam)
    - [AWS Cloudwatch Application Logs](#aws-cloudwatch-application-logs)
    - [Amazon Inspector : Vulnerability Scanning](#amazon-inspector--vulnerability-scanning)
- [AWS Container Security](#aws-container-security)
  - [AWS VPC Virtual Private Cloud](#aws-vpc-virtual-private-cloud)
    - [AWS KMS key service](#aws-kms-key-service)
    - [AWS Example : Bank](#aws-example--bank)
    - [RDS relational database](#rds-relational-database)
    - [EMR big data](#emr-big-data)
    - [Elastic beanstalk - app deployment](#elastic-beanstalk---app-deployment)
    - [AWS Environment Variables](#aws-environment-variables)
  - [Serverless Computing](#serverless-computing)
- [Load Balancing](#load-balancing)
  - [Types Of Load Balancer](#types-of-load-balancer)
  - [Considerations Of Load Balancing](#considerations-of-load-balancing)
    - [Scaling Infrastructure](#scaling-infrastructure)
    - [Scaling Load Balancers](#scaling-load-balancers)
    - [NGINX Load Balancing](#nginx-load-balancing)
- [Cloud Labs](#cloud-labs)
    - [EC2 Instance with SSH access](#ec2-instance-with-ssh-access)
    - [AWS RDS database access](#aws-rds-database-access)
    - [AWS Securing Access To S3](#aws-securing-access-to-s3)
- [DevOps Intro](#devops-intro)
    - [CI-CD-CD](#ci-cd-cd)
  - [Vagrant](#vagrant)
    - [Vagrant : get started guide](#vagrant--get-started-guide)
    - [Vagrant with Hyper-V](#vagrant-with-hyper-v)
    - [Vagrant With Virtualbox](#vagrant-with-virtualbox)
    - [Vagrant Initial Steps](#vagrant-initial-steps)
  - [Provisioning](#provisioning)
    - [Provision A Folder](#provision-a-folder)
    - [which](#which)
    - [update and upgrade](#update-and-upgrade)
    - [nginx](#nginx)
    - [Provisioning an environment](#provisioning-an-environment)
    - [Running your app](#running-your-app)
  - [Environment Variables](#environment-variables)
  - [Packer - creates images and runs them on AWS](#packer---creates-images-and-runs-them-on-aws)
    - [Packer simple commands](#packer-simple-commands)
  - [Provisioning](#provisioning-1)
    - [Provisioning can can be done via](#provisioning-can-can-be-done-via)
    - [Terraform by HashiCorps - provisioning](#terraform-by-hashicorps---provisioning)
  - [Chef](#chef)
- [Docker](#docker)
    - [Install Docker](#install-docker)
    - [Hello World](#hello-world)
    - [DockerFiles](#dockerfiles)
    - [Building a docker file](#building-a-docker-file)
    - [Docker with ports](#docker-with-ports)
    - [Run docker in the background](#run-docker-in-the-background)
    - [NginX](#nginx-1)
    - [Node Sample App](#node-sample-app)
    - [Pushing Docker Container to Docker Hub](#pushing-docker-container-to-docker-hub)
    - [Docker Node Example](#docker-node-example)
    - [Docker Environment Variables](#docker-environment-variables)
    - [Docker Compose - YAML multi-docker environments](#docker-compose---yaml-multi-docker-environments)
  - [.NET on Docker](#net-on-docker)
  - [Docker with .NET](#docker-with-net)
    - [Container sample: Run a simple application](#container-sample-run-a-simple-application)
    - [Container sample: Run a web application](#container-sample-run-a-web-application)
    - [Building a sample .NET Core application on Docker](#building-a-sample-net-core-application-on-docker)
    - [Worked Example With Commands](#worked-example-with-commands)
  - [Creating And Running Docker From Visual Studio](#creating-and-running-docker-from-visual-studio)
    - [Run a .NET ASP Core Web App On Docker](#run-a-net-asp-core-web-app-on-docker)
    - [Push New Docker Image To Docker Hub](#push-new-docker-image-to-docker-hub)
    - [Run Docker Image From Azure](#run-docker-image-from-azure)
- [Docker Images In Azure](#docker-images-in-azure)
  - [Push And Use A Docker Image From Azure](#push-and-use-a-docker-image-from-azure)
    - [Deploy Container Image In Azure From Docker Hub](#deploy-container-image-in-azure-from-docker-hub)
- [Kubernetes - Orchestrates multiple containers](#kubernetes---orchestrates-multiple-containers)
  - [Kubernetes Terminology](#kubernetes-terminology)
  - [Orchestration](#orchestration)
  - [Kubernetes Basic Online Tutorial](#kubernetes-basic-online-tutorial)
    - [Install kubectl](#install-kubectl)
    - [MiniKube](#minikube)
    - [Kubernetes Commands](#kubernetes-commands)
    - [Kubernetes Deployments](#kubernetes-deployments)
  - [Kubernetes Deployment Tutorial](#kubernetes-deployment-tutorial)
  - [Kubernetes Pods And Nodes](#kubernetes-pods-and-nodes)
  - [Extra Kubernetes Commands](#extra-kubernetes-commands)
  - [Kubernetes Services](#kubernetes-services)
  - [Kubernetes Service Tutorial](#kubernetes-service-tutorial)
  - [Puppet](#puppet)
  - [Ansible](#ansible)
    - [Enable Linux Ubuntu On Windows](#enable-linux-ubuntu-on-windows)
    - [Install Ansible On Windows](#install-ansible-on-windows)
    - [Install Ansible On MAC](#install-ansible-on-mac)
    - [Creating 3 Virtual Machines On MAC](#creating-3-virtual-machines-on-mac)
    - [Ansible playbook](#ansible-playbook)
  - [Jenkins CI](#jenkins-ci)
    - [MAC Install Jenkins](#mac-install-jenkins)
    - [AWS Ubuntu Instsall Jenkins](#aws-ubuntu-instsall-jenkins)
    - [AWS Scripted Jenkins Install](#aws-scripted-jenkins-install)
- [Azure](#azure)
  - [Azure Devops](#azure-devops)
    - [Blockchain](#blockchain)
- [HyperV](#hyperv)
    - [NAT](#nat)
  - [Nano Server](#nano-server)
  - [Security Features](#security-features)
    - [VM Checkpoint](#vm-checkpoint)
  - [Failover Cluster](#failover-cluster)
  - [Shared Hard Drives .vhdx](#shared-hard-drives-vhdx)
  - [Active Memory Dump](#active-memory-dump)
    - [VM node fairness](#vm-node-fairness)
    - [VM Start Order](#vm-start-order)
  - [Storage Microsoft](#storage-microsoft)
    - [Storage QoS](#storage-qos)
    - [Commercial Cloud Storage Solutions](#commercial-cloud-storage-solutions)
  - [Networking](#networking)
- [VMs](#vms)
  - [VMGroups](#vmgroups)
  - [VM Management Groups](#vm-management-groups)
  - [VM Migration](#vm-migration)
- [Exam Questions](#exam-questions)
- [Archive Labs](#archive-labs)
    - [CERTMGR lab chapter 2 to export private key](#certmgr-lab-chapter-2-to-export-private-key)
    - [Encrypted Data Recovery Agent](#encrypted-data-recovery-agent)
    - [Bitlocker lab on Server](#bitlocker-lab-on-server)
    - [Data Recovery Agent Lab](#data-recovery-agent-lab)
    - [VPN Split Tunneling](#vpn-split-tunneling)
    - [PSC Password Settings Container](#psc-password-settings-container)
    - [Offline Files lab](#offline-files-lab)



# Cloud Objectives

### MTA Cloud (retired exam)

[https://www.microsoft.com/en-us/learning/exam-98-369.aspx](https://www.microsoft.com/en-us/learning/exam-98-369.aspx)

### CompTIA Cloud+

[https://www.comptia.jp/pdf/Cloud%2B CV0-002 objectives.pdf](https://www.comptia.jp/pdf/Cloud%2B%20CV0-002%20objectives.pdf)

Config

Security

Maintain

Manage

Troubleshoot

# Cloud Random Terms

### Mind Map Of Cloud, Tech And Devops

[https://miro.com/app/board/o9J_ku9SfFI=/?moveToWidget=3074457347447712473&cot=1](https://miro.com/app/board/o9J_ku9SfFI=/?moveToWidget=3074457347447712473&cot=1)

### Cloud Terms

```
Elastic scaling - when CPU reaches a certain amount, scale up!
Cloud Native
CNCF
Self Healing Node
Multi Tenant Node
paradigm
SAAS
IAAS
PAAS
Microservice architecture
CAPEX : buying up front in anticipation of success
OPEX : Only Paying Existing Costs
Cloud native : move quickly by taking small and reversible steps
Cloud is all about Speed, Scale and Margin
Cloud Native : 5 principles
Use IAAS or PAAS with services provided by AWS, Azure, Google, Rackspace
Go Microservices Architecture : small decoupled individual components
Automate everything!
Containerize so dependencies are fixed and won't change when deployed
Orchestrate to manage multiple containers

Infrastructure As Cloud = fully scripted environment
Pragmatic
Cloud enables going fast but going small
Cloud speed = how to launch sooner
Cloud scale : supporting more users
Scale up : more users with better SLA and response times
Risk Register = Catalogue of things which can break

CaaS Communications as a service
MaaS Monitoring as a service
NaaS Network as a service
Self Healing Node
Multi Tenant Node
AWS Simple Queue Service - queues guarantees messages
Swagger provides library version control
ELK stack = ElasticSearch + LogStash + Kibana
Grafana monitors
Prometheus monitors
AWS Lambda is Function As A Service
Container = Docker Image + Runtime + Instruction Set
AWS CloudFront stores your files and makes them accessible via a CDN
https://www.cloudflare.com/en-gb/
multi-tenancy = running application shared amongst multiple users
Elkstack
Logstash
ElasticSearch
Kibana
Oath
Bin Packing
AWS Simple Queue Service
Swagger checks library versions
NGINX is a load balancer
EKL = Elastic Search + Logstash + Kibana which is a logging stack
Grafana monitor
Prometheus monitor
Terraform
Puppet
Jenkins
Postgres
RabbitMQ Clusters
Aurora
Dynamo DB
Sensu monitoring
Apache Spark supports parallel processing of Big Data
Apache Hadoop supports parallel processing of Big Data
Azure HD Insight does big data
```

### AWS Random Terms

```
ARN Amazon Resource Name
```

### Devops General Terms

```
Vagrant
Virtual Box
vagrant init
vagrant configure
ruby
vagrant hostsupdater
devops 
chef
Kitchen
Cookbook
Kitchen test
ChefSpec
Inspec
supermarket.chef.io
kitchen verify
kitchen diagnose
```

### Azure Quick Fire Terms

```
AKS Azure Container Service
Service Fabric
```

### Containers

```
Identity of containers
Isolation of containers
Code integrity?
Code identification?
Vulnerability scanning!
Updating or patching containers and their code
```

### Docker Quick Fire Terms

```
Dockerfile

docker versions : light, standard, secure

### Orchestration
Docker Swarm - easier to set up and configure, run by Docker
Docker Kubernetes larger, more complex, run by Google
Kubernetes deploys containers with IP

DTR Docker Trusted Registry securely manages Docker images

### History
Docker 2013
Docker RUNC 2015 standardise containers - Image Spec and Runtime
Docker donated to CNCF Cloud Native Computing Foundation in 2017

### Docker commands
docker build (an image) 
docker pull (an image from the internet)
docker run (an image)
docker ps -a (list images)

Docker Compose - YAML to build and run multi-docker environments

### Docker Toolbox
[https://docs.docker.com/toolbox/overview/#ready-to-get-started](https://docs.docker.com/toolbox/overview/#ready-to-get-started)

### Cloud

kubernetes k8s open source automate deployment of containers
kubernetes groups contaainers together which make up an app
kubernetes allocates IP and uses DNS and load balancing
kubernetes greek pilot
kubernetes swarm
vagrant
puppet
chef

### Agile
BML Build Measure Learn

### Docker
Docker overview [https://www.quora.com/What-is-difference-between-d…](https://www.quora.com/What-is-difference-between-d%E2%80%A6)
Docker and containers ebook [https://docs.microsoft.com/en-us/dotnet/standard/m…](https://docs.microsoft.com/en-us/dotnet/standard/m%E2%80%A6)
Getting Started With Docker [https://medium.com/@jurtzmarcel/getting-started-wi…](https://medium.com/@jurtzmarcel/getting-started-wi%E2%80%A6)

### Vagrant
Build a Vagrant Linux Container [https://www.youtube.com/watch?v=vBreXjkizgo&featur…](https://www.youtube.com/watch?v=vBreXjkizgo&featur%E2%80%A6)

https://yaml.org/
```

### Kubernetes Quick Fire Terms And Definitions

```
Helm is a package manager
Istio networking
Rook storage
Companies running Docker and Containers - Kubernetes, Swarm, Mesos, CAPS, OpenShift
Companies ... CloudFoundry, OpenStack
```

### Vagrant Quick-Fire Terms

```
HCL Hashicorp Configuration Language
```

## Azure Random Terms

```
Severless 
Azure functions with vs code extensions installed 
Orchestrator https://technet.microsoft.com/en-us/library/hh237242(v=sc.12).aspx
Azure Pack (not Azure)
ShadowIT
Logic App
ExpressRoute DEDICATED MPLS LINE
Pass-Through Authentication = SSO
Invitation Manager API : invite users from 3rd party
B2C has facebook login
SCCM : Deploy applications, licensing, inventory OS and apps
SCOM : Operations
Orchestrator RUNBOOK AUTOMATION
Data Protection Manager : Backup Recovery
OMS Operations Management Suite - monitor cloud VM
OMS : Logging, Runbook, Backup, Recovery
sentiment analysis
cognitive services
[myapps.microsoft.com](http://myapps.microsoft.com/) ==> log in as regular user
Azure Enterprise Applications
Fault Domain
Update Domain
VM Scale Set : automate the amount of resources running
OMS Operations Manager
Makecert.exe
redeploy : last resort : RESET
Automation : like orchestrator
webhook
Azure scheduler
Target VM by a) Resource Group b) Tag Name/Value pair
Network Watcher tool
Corey Sanders Channel 9
[QnAMaker.ai](http://qnamaker.ai/)
ShadowIT
DevTest Labs
Runbook https://docs.microsoft.com/en-us/azure/automation/automation-starting-a-runbook
appv : virtualise App
medv : virtualise OS
VMM overall manage many virtual machines
VMM Policies : restrict which type of machines can be created by various groups
Azure ARM
Azure RBAC - Role Based Access Control - Lock by resource group 
Marketplace : https://azuremarketplace.microsoft.com/en-us
https://github.com/Azure/azure-quickstart-templates
Migration Strategy
PAAS IS FUTURE OF CLOUD
VM SCALE SET :
Advanced Firewall : Barracuda / Checkpoint
RemoteApp HAS NOW GONE : USE CITRIX INSTEAD
Machine Learning
Web Farm
VIP Virtual IP : OLD
PIP Private IP : OLD
Instance IP : OLD
ARM : Virtual Machine must go on virtual network
Privileged Identity Management : force elevation of privileges and 
    work as a regular user but only elevate when required
AZURE AD CODE https://docs.microsoft.com/en-us/azure/active-directory
                 /develop/active-directory-code-samples
UPTIME 99.9 PERCENT IS NOW AZURE SLA
Storage : Managed disks
Can now SNAPSHOT VM and REVERT
System Center : 2007
System Center
Configuration Manager
Deploy Apps
License Apps
Inventory Hardware OS and Apps
Operations Manager
Monitor systems
Monitor applications
Orchestrator
Runbooks
Automate manual processes
Data Protection Manager
Backup
Recovery
Azure OMS Operations Management Suite 
  https://docs.microsoft.com/en-us/azure/operations-management-suite
                              /operations-management-suite-overview
  Monitor cloud 
  Monitor local machines (have to install a client)
  OMS Core Features
    LOGGING
    AUTOMATION
    BACKUP
    RECOVERY
AUTOMATION SCRIPT with JSON
https://azure.microsoft.com/en-gb/documentation/scripts
DSC ADD CONFIGURATION : POINT TO SCRIPT = DESIRED STATE CONFIGURATION SCRIPT
System Center Data Protection Manager or MARS
Cognitive Services
Sentiment Analysis reasons.azurewebsites.net
https://azure.microsoft.com/en-gb/services/cognitive-services/text-analytics
https://docs.microsoft.com/en-us/azure/machine-learning/machine-learning-apps-text-analytics
https://text-analytics-demo.azurewebsites.net
https://www.microsoft.com/cognitive-services
OMS cloud monitoring : global view
Azure Shortcuts :      Shift ?
azuremarketplace.microsoft.com
github.com/azure/azure-quickstart-template
https://docs.microsoft.com/en-us/azure/azure-portal/azure-portal-keyboard-shortcuts
https://github.com/azure

### Networking
ExpressRoute : like a LEASED LINE : dedicated line NOT OVER PUBLIC INTERNET : see MPLS
https://azure.microsoft.com/en-gb/services/expressroute
Useful for periodic fast transfer of large amounts of data

### SCCM System Center Configuration Manager
https://www.microsoft.com/en-gb/cloud-platform/system-center

### Orchestrator
https://technet.microsoft.com/en-us/library/hh420344(v=sc.12).aspx
Automate CREATION, MONITOR, DEPLOY resources

### SCOM System Center Operations Manager
Rich Analytics
Monitor And Advise

### AZURE ADVISOR
https://azure.microsoft.com/en-us/services/advisor
WEB MONITOR / APP SERVICE : OVERVIEW OF YOUR WEB AND NETWORK
  QUOTA
  METRICS
  ALERTS
https://docs.microsoft.com/en-us/azure/app-service-web/web-sites-monitor

### Application Insights
    Install AGENT INSIDE YOUR APPLICATION!!! This feeds back     
     https://docs.microsoft.com/en-us/azure/application-insights
            /app-insights-monitor-web-app-availability
     https://docs.microsoft.com/en-us/azure/application-insights
            /app-insights-overview>

### PowerBI
    INJECT DATASET INTO POWERBI
    CREATE REPORT AND DASHBOARD OF THE ADVENTUREWORKS DATABASE
    CAN EMBED DATA BACK INTO WEBSITE
    ALSO CAN ASK NATURAL LANGUAGE QUESTIONS
```

```
Privileged Identity Management : secure, manage, log all privileged accounts for datacenters
Privileged Session Management : isolate, monitor, control privileged sessions
Sensitive info management

AWS marketplace : Privileged Access $17000 for 10 users with 200 licenses for 1 year

Conjur : open source encryption + identity management for people and machines + role based access control for secret keys
Conjur : machine identity
Conjur : supporting automation
Conjur : traffic authorisation
Conjur : supports automated workloads
Conjur : scaling up to 10 clusters or more
Conjur : 4 million secrets / minute
Conjur integrates with : AWS, Kubertnetes, OpenShift, GKE, Pivotal Cloud Foundry, Cloud Foundry, Splunk logging, Terraform, Chef, Puppet, Ansible

Puppet scalable server automation [https://puppet.com/system/files/2018-06/puppet-wp-compare-puppet-and-ansible.pdf](https://puppet.com/system/files/2018-06/puppet-wp-compare-puppet-and-ansible.pdf)
Puppet : manages server configuration
Puppet : server jobs and automation and config are inside code with VCS version control system controlling changes to the code
Several big-name clients run their data centers using Puppet - Google, Reddit, Dell, PayPal, Oracle, Los Alamos Labs, and Stanford University; having such clients on board always lends a certain level of credibility to a product
Puppet is free open source or enterprise $112 per year
Conjur : manages secrets in Puppet
Puppet : 30 minute heartbeat 'checkin'
Puppet can continuously monitor and implement security and compliance policies
Idempotency : don't change what does not need to be changed
Desired state conflict detection
Ongoing monitor and enforc config
Remediate any drift
Agentless
Puppet 'bolt' is 'bolt' command on BASH shell
So puppet is a prefix to commands run on a linux server, in order to monitor their execution
Cisco equipment now has Puppet preloaded
Works with orchestration eg Kubernetes

Ansible : simpler version of Puppet
Ansible : similar to Puppet ie server automation, scripting, configuration
Ansible : centrally manages all scripting etc
Ansible : define a job to run on nodes

Cloud foundry backed by Google, IBM, Microsoft, SAP
Cloud foundtry - open source which makes it easier to build, test, deploy, scale applications
Cloud foundry - container based architecture - deploy apps to this container. External 'Open Service API' permits exernal connections.
Cloud foundry - is an install over Docker so Docker must be installed to use this
Cloud foundry used by US GOV at [cloud.gov](http://cloud.gov/)
Cloud foundry used by Australian government at [cloud.gov.au](http://cloud.gov.au/)

BOSH = Bosh Outter SHell

Free ebook - [https://content.pivotal.io/ebooks/cloud-foundry-the-cloud-native-platform](https://content.pivotal.io/ebooks/cloud-foundry-the-cloud-native-platform)
Free ebook - [https://www.oreilly.com/library/view/cloud-foundry-the/9781491932421/ch01.html](https://www.oreilly.com/library/view/cloud-foundry-the/9781491932421/ch01.html)

18F is US Government's initiative to cause their own infrastructure to build apps quickly [18f.GSA.GOV](http://18f.gsa.gov/)

Pivotal Cloud Foundry [pivotal.io](http://pivotal.io/)
PAS Pivotal Application Service
PKS Pivotal Container Service
PFS Pivotal Function Service

Orchestration is management of containers

[Kubernetes.io](http://kubernetes.io/)
Kubernetes is Open Source which automates deployment, scaling, managing containerised appications
Kubernetes can group containers
Kubernetes builds on 15 years of supporting workloads at Google
Migrating Microservices to Kubernetes
Kubernetes can allocate IP per group, DNS name, Load balancing
Kubernetes can mount storage system of your choice FOR YOU
Kubernetes can auto roll out changes
Kubernetes can roll back changes
Kubernetes can auto-place containers in groups depending upon their needs

OpenShift is RedHat's container platform
OpenShift is at [openshift.com](http://openshift.com/)
OpenShift : containers hosted by RedHat or AWS

CoreOS : Linux purchased by RedHat : provides containers

GKE Google Kubernetes Engine at [cloud.google.com/kubernetes-engine](http://cloud.google.com/kubernetes-engine)
GKE : Deploys containerized applications
[https://cloud.google.com/kubernetes-engine/](https://cloud.google.com/kubernetes-engine/) has online tutorial

Google Stackdriver at [cloud.google.com/stackdriver](http://cloud.google.com/stackdriver)
Google Stackdriver - logging with graphs + error report + debugger + uptime monitor + alerts + trace stats + dashboards
Google bought Stackdriver in 2014

Monitoring In The Cloud Era White Paper [https://info.container-solutions.com/hubfs/Documents/K8s B3 C4 - Monitoring in the Cloud-Native Era - Container Solutions.pdf](https://info.container-solutions.com/hubfs/Documents/K8s%20B3%20C4%20-%20Monitoring%20in%20the%20Cloud-Native%20Era%20-%20Container%20Solutions.pdf)

Today developers build, deploy, manage and monitor their apps more than ever

Programmable Infrastructure is a combination of (Fiber) network hardware plus virtual instances giving dynamic network which can export real-time network data and scale to meet demand
Progammable infrastructure can be programmed (configured) on the fly eg variable bit-rate optics
Programmable infrastructure is a packet and optical infrastructure which securely manages a pool of virtual and physical resources
Programmable infrastructure means that dev and production can mirror each other
Programmable infrastructure code can be under version control

AWS CloudFormation [https://aws.amazon.com/cloudformation/](https://aws.amazon.com/cloudformation/)
AWS CloudFormation is free on AWS
AWS CloudFormation allows a text-based configuration of all your apps
```

# Cloud Overview

## History

Decentralised computing

### Virtualization

Mainframes had a form of ‘thin client’ virtualization

Software virtualization - very slow

Hardware virtualization - 2000s

Containers - virtual OS kernel in standard package

### Limitations

Storage

Networking

CPU

Bus speeds

### Limitations broken by

Old disk array model replaced by

Each computer can now act as its own data storage array and share with other computers

### App development

1. Massively over budget hardware : IT effectively own the app!
2. Massively over budget VM : person can own the app
3. Now can scale container needs

Issues to be aware of

How efficient is the process?

Timescale?

Compliance

Abstract app from hardware?

Provision hardware as a service for the app

Client consumes hardware as a service

## Cloud Types 2020

### On-Premises (No cloud) (27%)

### Private (20%)

Company in control of full infrastructure

Companies might use this if they have heavy existing investment in existing hardware, also older legacy applications, also strict data management requirements. Compliance may be a factor.

### Public (41%)

Subscription

No upfront investment

No capital expenditure

Full solution provided

Lack of customisation

Provides

- Automation
- Sandboxes
- Geographic diversity
- Collaboration
- Staged migration

### Hybrid (22%)

Existing hardware

Legacy apps

Financial cost

Regulation

## IaaS vs PaaS vs SaaS

Private - you manage everything

IaaS - you manage VMs up

API with IAM and RBAC role based access control allow you to manage the systems

PaaS - you manage your apps and the data they contain

SaaS - you manage just your data 

Shared responsibility model - AWS and us both share various responsibilities for the security of our environment

## PaaS

Provider builds VM and OS and application eg SQL server - we take it from there

Cheap!

## IaaS

- VM size
    - CPU very expensive
    - RAM very expensive
    - Workload : Basic, high cores, high GPU, high performance
    - Elastic vertically : increase CPU and RAM!
- VM type
- VM performance
- Storage
    - SSD : Hot storage : High I/O eg Live data
    - HDD : Cold storage : cheaper long term storage eg Archive, Logs, Container Images
    - Traditional RAID 0 1 5
- Networking
    - IP
    - Subnet
    - No overlap of on-premises if there’s a chance the networks will connect

## IaaS Resilience

- Resilience
    - IAAS we mange the OS and updates
    - Disk can fail!
    - Misconfigured VM!
    - we also sort out the data
    - we also sort out the apps
- High Availability
    - Clustering of machines : Primary to secondary
    - Load balancer : aware of cluster and online/offline machines
- Georedundancy across the world with regions and a load balancer directing traffic
    - Problems with data sovereignty, replication sync and async
- Elastic
    - Vertical : increase CPU and RAM and Disk and Network
    - Horizontal : increase numbers of machines
        - Need to cater for spikes
        - Cater for increase in demand
        - Only pay for instances which are needed
- Self Healing
    - Build OS image with apps
    - Scaling rule : at least 2 instances running
    - Cloud provider implements rule. If one goes offline then cloud provider spin up new instance

## PaaS

- Web services
    - Cheap to host and run on PaaS
- DB services

Deploying PaaS is nearly always cheaper than deploying IaaS

Programmatic automation

Code ⇒ Commit ⇒ Integration ⇒ Test ⇒ Build ⇒ Deploy

All of our solution is now code.

All manual deployment is eliminated

Good change control processes can be implemented

Increases visibility between teams = devops

Automation

Ansible

Jenkins

Terraform

Spinnaker

## SAAS Software As A Service

Service Provider eg AWS, Azure, Google

Compute = CPU and RAM

Compute / Storage / Network

Multi-Tenant = one app shared by multiple customers each having individual data

SAAS Examples

CRM

Salesforce

ERP Enterprise Resource Planning integrates the core applications required to run a business into one single system

SAAS Advantages For Users

- Deploy immediately as it’s browser based - no customer installation is required
- Pay as you go eg per user per month or per storage per month
- Easy to scale up and down number of users
- Lower up-front cost (often free trial) and can start with one or two users initially, with very low cost up front initially
- Less need for on-premises servers and equipment etc
- Easy to upgrade the application : user does nothing!
- No local install
- No large fees up front : pay monthly
- Risks of maintenance with vendor
- Risks of security with vendor
- Risks of patching with vendor

SAAS Risks For Users

- Trust provider
    - Availability
    - Security
- Legal concerns with storing data outside your company or country
- Limited customisation
- Integration
- Lower performance as going through browser

SAAS Advantages for Software Providers

- Predictable revenue : per month
- Sell to business directly and not have to get approval of IT support
- Can keep support costs low as software is running on your own server
- Stats on usage and crashes
- Marketing easier as anyone can locate our website

SAAS Disadvantages

- Must provide real business value (try before you buy)
- Revenue comes in slowly up front
- Hard to customise
- Some people don’t like the cloud!
- Have to run the software
- Have to support the software
- Have to do the updates
- Have to watch security

Cloud vs Hosting

- Cloud providers provide access to a wide range of service
- Usage based pricing

Cloud benefits

- Faster deployment
- Pay as you go
- Lest financial risk up front
- No on-premises needs
- Automatic upgrades

Cloud risks

- Trust!
- Legal
- Integration
- Developers less control

### Overview of different cloud platforms

Compute = CPU + RAM = IAAS = Run VM

IAAS = VM from scratch

PAAS = VM run by someone else and we just manage the desktop

CaaS = Containers as a Service

Deploy and manage containers

Kubernetes

FaaS = Function as a Service = Serverless computing

Just build an app as a function and invoke the function directly

Can be extremely cheap

Data

VM with database inside it

Object storage is unstructured data (raw bytes)

Managed database

Relational storage

NoSQL document oriented JSON storage

### Vendor

- AWS
    - largest
    - Services split up into 3 types
        - Infrastructure = Compute services
            - EC2 Elastic Compute Cloud
            - Elastic Beanstalk does PaaS ie virtual desktop
            - Lambda runs FaaS
        - Container Services
            - EKS Elastic Kubernetes Service
        - Abstracted Services - storage, database, messaging
    - S3 data
    - RDS relational DB
    - DynamoDB is NoSQL
- Azure
    - AKS Azure Kubernetes Service

## Private Cloud

Hosting cloud services on premises

### Deploying Cloud Technology Locall : Azure Stack and AWS Outposts

- Azure Stack : subset of its services and makes available to local providers
- Sold as hardware and software package together

### OpenStack which builds a private cloud

- Known as Rackspace
- Not supported by AWS/Azure/Google
- Supported by Dell, RedHat

### IoT : AWS, Greengrass, Azure Hub

## Public Cloud Storage

Data Lake Storage

Azure 100TB £68 per month archive storage

```
Database
Repository = one or more databases
Warehouse = large repository
Lake = large repository with unstructured data
Mart = secure parts of the data with authentication
Cube = data with 3 or more dimensions as found in a spreadsheet
```

# Cloud Identity

- account protection
- identity sources
- identity federation
- RBAC role based access control

Master root user has control over everything

- password strength
- password manager
- multifactor
- suspicious activity
- limit amount of damage if breach is occurred
- use multiple environments so that the impact of one breach is limited (although can be slightly inconvenient)

### Managing Identity

Federation allows us to link local accounts with cloud accounts

SAML can link

OpenID Connect also can connect

Individual users can use social media but not enterprise systems

### RBAC Role Based Access Control

JEA Just Enough Administration

Grant minimum permissions to administrators

# Cloud Security

- Shared responsibility model - AWS responsible for
    - Global infrastructure
        - Regions
        - Availability zones
        - Edge locations
    - AWS services
        - IAM eg key rotation
        - Database
        - Storage eg elastic
        - Compute
        - Networking
    - AWS splits services into 3 types
        - Infrastructure eg Compute
            - EC2 VM
            - EBS Elastic Block Store - volumes
            - VPC virtual private cloud - isolated network
            - AWS responsibility - hardware, network, endpoints, iam
            - Customer responsibility - roles, firewall, OS, data
        - Container
        - Abstracted services
- IAM
    - Users
    - Groups
- Configuration management
    - Centrally store and define config
    - Roll out configurations across your cloud environment
    - Architecture of the environment can be updated
    - Example : update network configuration
    - Easy to work out which version of the template is in use
    - OS config
    - VM config
    - Firewall config
        - AWS default for all services is denying access unless specifically granted
    - Network config
    - Security config
    - App config
    - Examples of configuration management
        - Chef
        - Puppet
        - Ansible
        - Powershell DSC
        - Saltstack
        - do you need agentless?
    - Configuration management is effective with
        - Source Control
        - Automation
        - CI/CD
- Configuration compliance
    - Are configurations actually being applied
    - Can visually track the config of your environment
    - Flag differences
    - Also flag obvious errors eg VM exposed to internet
    - use one platform to config environment
    - but another different provider to verify that environment is in compliance!
    - Effective - independent audit!
    - Chef IsSpec does this!
    - Can check your systems against CIS standards
- Security compliance
- Encryption
    - Data in transit
    - Data at rest! Not enabled by default
    - Can use PKI with CA using HSM to store keys
    - Encrypt VMs so disks can’t be copied and accessed outside the cloud environment
    - DB should be encrypted so cannot be copied and used outside the cloud environment
    - Encrypt long term archival data
    - Encrypt logs
- Logging
    - Not enabled by default
    - Generates a lot of data over time so enable a storage service to hold it all
    - Should be enabled
    - Should be encrypted
    - Can audit security events like authentication
    - Audit event logs from VMs
    - Provide full visibility
    - Cost management also
    - AWS Cloudwatch does logging for your apps
        - Namespace organises logs
        - Metrics contain detail
    - AWS CloudTrail can log all internal configuration changes within the AWS environment
        - for auditing
- Log Analysis to analyse logs
    - Cloudwatch aggregation of data
    - ML Machine Learning can analyse logs
    - ML can recognise patterns
    - ML can provide insights into data
- Alerting
    - Good alerts eg there was a problem but it’s been fixed
    - Email overload
    - Generate a support ticket
    - Custom event-driven processes
    - Generate a chat alert in a group chat from a chat bot which can give and take instructions and information
    - eg AWS Cloudwatch Alarm
    - eg SNS Simple Notification Service for AWS CloudTrail eg send email when infrastructure changes
- ChatOps using a group chat executing ‘bot’ commands to get work done
    - Chatbots
        - [Hubot](https://hubot.github.com/): GitHub’s bot written in CoffeeScript and Node.js ([docs](https://github.com/github/hubot/tree/master/docs)) [https://hubot.github.com/](https://hubot.github.com/)
        - [Lita](https://www.lita.io/): Written in Ruby
        - [Err](http://errbot.net/): Written in Python
- Logging Lab : From Pluralsight Intro to AWS Cloud Security
    - build API gateway
    - add to AWS lambda which is running the code to read the API
    - check the execution role for the lambda function
    - add a policy at iam ⇒ roles ⇒ find the role for the lambda function ⇒ add inline policy ⇒ search for DynamoDB ⇒ grant read access ⇒ name policy ⇒ create
    - Now test by going to API⇒select our API⇒stages⇒production ⇒ invoke url

## Security Config and Compliance

- Standards
- Compliance
- PKI
- Encryption
- Tunneling

### Security Standards

Private cloud - responsibility of enterprise

Public cloud - provider does their security, we do ours depending on IaaS PaaS or SaaS

Community cloud - shared

### Physical Security

Physical access

doors

windows

Asset tracking

Facilities Management

Cabling

Power

Climate control : temperature humidity

Backup

### Security Standards

Access only to those who need it

Minimum access granted

IAM Identity and Access Management

lab - create user and add to group

Federated Identity also

SSO single sign on across multiple systems

Logging eg AWS Cloudwatch

### Compliance

Ensure privacy of data

- Certification
    - 3rd party assessment that a company meets a set of standards
    - FIPS
    - ISO
    - PCI payment card industry

## Laws

Framework : sets out best practice

- Recommended practices
- Workflows
- eg NIST in US [https://www.nist.gov/cyberframework](https://www.nist.gov/cyberframework)
    - NIST Framework
        - Identify
            - Assets
            - Business environment
            - Governance
            - Risk assess
            - Risk manage
            - Supply chain risk manage
        - Protect
            - IAM Identity and Access
            - User Awareness
            - Data
            - Information Protection procedures
            - Maintenance
            - Protective technology
        - Detect
            - Continuous Monitoring
            - Logs
            - Events
            - Anomalies
            - Detecting
        - Respond
            - IRP Response planning
            - communications
            - Analysis
            - Mitigation
            - Improving
        - Recover

NIST provides a core reference for others including

CSA Controls

EU-US Privacy shield

Cloud adds an extra layer of compliance to existing compliance records

## PKI

PKI provides CIA

Confidentiality

Integrity and non-repudiation

Authentication

### Symmetric

Same key

Fast

AES

Both must have same key - how do we exchange the keys?

### Asymmetric

2 keys

See khan academy for symmetric and rsa asymmetric simple walkthrough

Public encrypt : send info

Private decrypt : receive info

Very slow

### SSL

securely transfer key

view public certificate on website

use this certificate to create and encrypt a session key and send it to the server. Server decrypts with private key and session can begin.

### Verifying validity of a site.

Verification can be public globally or just within a company

RA Registration Authority - verifies identity and tells CA to issue certificate

CA Certificate Authority - corporate registry - issues certificate

Revocation

PKI can be for public or private enterprise

### Key Archival Server

Stores backup copies of enterprise private keys

### Signing can provide integrity

Information is hashed and then this is encrypted with private key. Public key is included. Someone can use public key to decrypt and verify hash.

### PKI as a service

## Encryption

- IPSEC
- TLS

### IPSEC

- Encrypts
- Integrity
- Non-repudiation
- Anti-replay
- IPSEC Protocols (mostly just AH and ESP)
    - AH Integrity
        - Integrity
        - Authentication
        - AntiReplay
    - ESP Encryption : Integrity, Authentication, Encryption, AntiReplay
    - IKE facilitates key exchange
    - ISAKMP Internet Security Association and Key Mgt Protocol
        - controls SA which are live connections
    - GDIO Group Domain of Interpretation
        - allows groups to communicate

Transport mode : computer to server

Tunnel mode : VPN ie lan to lan

### TLS and SSL

HTTPS

Tunneling

## Ciphers

### Asynchronous

RSA is used and is used to create and exchange the session key

AES Advanced Encryption Standard (used to be 3DES or RC4)

### Cipher Detail (with images)

Analyse detail of cipher encryption

HTTP

HTTPS

Telnet

SSH

Diffie-Hellman (see Khan Acadedy videos on DH and RSA)

Symmetric ciphers

Block Cipher (most common) : blocks 64, 128, 256 bits : AES, DES

Stream Cipher eg RC4 : fast but weaker : encrypt single bytes

### VPN Tunneling

PPTP Microsoft, has flaws

L2TP/IPSEC - very secure but does not work well with NAT

GRE/IPSEC - Cisco

SSTP - Microsoft - over HTTPS

OpenVPN - open source - over HTTPS

## Access Control (already covered)

Something you know (username, password)

Something you have (token, fob)

Something you are (biometric)

Multifactor eg user/pass and email

SSO

### Federation : pass the authentication back to original provider

SAML

OAuth

OpenID

### Types of access control

DAC Dicretionary : permissions assigned by admin

MAC Mandatory : government-assigned clearances for data : confidential, secret, top secret

RBAC Role based : permissions are by role : can set coarse permissions

ABAC Attribute based access control : access controlled by any number of different attribute eg employees in finance at specific hours of day. Can set very fine and granular permissions.

## Object Authorisation (already covered)

Object = user/group/etc

Allow access with identity : authentication

Permit object access rights : authorization

Cloud access will be

- Start/Stop VM
- Network access
- Storage access
- VM Snapshot access

## Data Classification

Voice traffic

video traffic

data entering

data being created

data already classified

- government classification
- enterprise classification

Take into accounta

- data
- users
- user roles
- user devices

Data is at

- rest : secure hardware, encrypt data, iam for access
- transit : through RAM and network.
    - use IPSEC
    - use VPN
- use : CRUD operations
    - endpoint vulnerability : data has been decrypted

Audit data classification

Log data classification decisions

## Segmentation and Microsegmentation

Segmentation : coarse control

- VLAN
- VRF Virtual Routing and Forwarding
- Firewall

MicroSegmentation : fine control

- refined segmentation even within one VLAN
    - popular in private cloud
- authenticate
- authorise
- data classified
- can be used for compliance requirements
- can be used to limit systems which can access data

# Advanced Cloud

## Serverless Compting : Functions

Serverless computing can work together with

- API
- Webhooks

to drive automation! Even between unrelated services!

Serverless functions are code!

## Machine Learning

Logs generate far too much data!

Analyse historical data over the years

Analyse purchasing behaviour of your customers

Analyse marketing campaigns and their success

Discover hidden relationships that you would never have thought of

Build more effective marketing

Big data analysis

- Data lake analysis
    - Pay £1.50 per hour on Azure so very cheap; only pay for the time your query is actually running

## Cognitive Services

Takes machine learning to another level

Live interaction

Facial recognition

Emotion recognition

Strength of emotions

Speech recognition

Speech ID

Intelligent search across data sources

Text analytics

All of them just use an API

Can include facial or voice recognition to increase the security of your produce

Microsoft has best cognitive services on the market

### IoT

Devices supporting bi-directional communication

IoT eg sensor gathering information eg truck monitoring of fuel efficiency and miles driven

IoT car parks - which bays are available and direct cars to nearest bay or most desirable bay

# Security Automation

### Why Automate?

Engineers are busy

Users are often not well trained

Attackers evolve

Large amounts of data have to be analysed constantly!

- Traffic
- Alerts
- Resource utilization
- Logs

Orchestrate an automated approach

- Mimic normal engineer
- Define normal operations
- Define anomalies
- Define actions

Leave engineer free to

- determine if threat is ongoing
- find attack source
- find attack methods

### Automation Scripting

BASH

Batch

Perl

Powershell

- parse log files
- monitor traffic
- communicate

Can buy pre-built solutions

Automation = one task

Orchestration = many tasks and integrate different automation solutions

### Security Services

Firewall : coarse filtering

In/Out

Rules can be automated

IDS/IPS : fine filtering

NIPS/NIDS/HIDS/HIPS

AntiVirus / AntiMalware

Can automate the updating of av and logs

### Automation Tools

- CLI
    - can be used to test against code injection, XSS, site misconfiguration attacks etc
    - can use OWASP
- Web GUI
- API - don’t really want your security to expose an API
- Cloud portal testing
- Vendor tools

Testing can be triggered, scheduled or constant

# Containers

- benefits
- docker
- public cloud container services
- Kubernetes

Container virtualizes the OS kernel

Containers can be provisioned in a matter of seconds

Efficiently use underlying compute, storage and network

Allow self-healing

Docker is industry standard

Docker images built using Docker client

Dockerfile completely describes all a) settings b) applications c) services in container

Dockerfile is kept under source control

Docker image stored in repository eg Docker Hub

Docker Engine provisions new containers based on image and tag eg ubuntu:latest

Provisioning an image

1. Local - use that
2. Get from the docker repository in use

Complelely headless interaction : absolutely no requirement to log in

Containers have no patching whatsoever

Containers do not need to be troubleshooted - just erase and start again

Containers are small and not meant to be long lived

Runs same anywhere eg local, dev, production

### Container services - deploy and manage containers

VM provisioned to support containers

Orchestration

Interaction via firewall rules and load balancers

### Containers

```
Works the same across all operating systems

Isolation

Standard API

Containers can give us

    automation
    
    resilience
    
    resource utilization
```

# Cloud And Container Services

```
Shared responsibility
- AWS Secures platform, firewall, OS, network, IAM
- Customer secures data, firewall config, IAM
```

### Microservices

```
Applications are broken down into services which are

Single purpose

Decoupled

Self Contained

And that communicate with one another via messages

Easy to 

- Develop
- Update

- Robus
- Scalable
```

# DevSecOps

```
Is the integration of Devops with security at an early stage of the devops life cycle.

Devops critical tools

ansible to create scripts which work across platforms to build virtual machines 
Kubernetes to deploy code into containers and manage containers
Jenkins server to coordinate builds
Nagios monitoring
```

# AWS

### AWS secure web app demo 

in Intro to AWS Cloud Security Course at Secure Communication part

```
Goal : communicate web app to database in AWS
decrypt data with key
view app logs CloudTrail
view aws logs CloudWatch
```

## AWS Container Services

- RDS - we secure data and access
- EMR Elastic Map Reduce allows Big Data Frameworks to run in the cloud - we secure data and access
- Elastic Beanstalk - deploy apps - user configures firewall and encrypts data

## AWS Abstracted Services

```
customer receives endpoint url

S3 storage
DynamoDB (NoSQL)
SQS Simple Queuing Service which can trigger a lambda function
Glacier stores cold archive data
```

## AWS Environment Security

### IAM

```
Can provide access to users
Can authorize access to resources
Can authorize federated users eg Facebook or Google users in IAM=>IdentityProviders

IAM Policy to allow open access
{
"Sid":
"Effect":....
"Action":"dynamodb":*",
"Resource":"*"
}

IAM for one table
{
"Sid":
"Effect":"Allow",
"Action [
 "dynamodb:Get*",
 "dynamodb:Query"
],
"Resource":"arn:aws:dynamodb":*:*:table/MyTable"
}

```

### AWS Cloudwatch Application Logs

```
Important to have application logs for troubleshooting
Can query logs
Alarms
  Alert admins with SNS Simple Notification Service
  Autoscaling when CPU exceeds EC2 threshold (also called elastic scaling)
Demo
	Cloudwatch > Logs > /name-of-service/name-of-event/hash-of-log
	Logs => can create an alarm also => metrics => lambda => select function => choose to
    alarm on errors
  

```

### Amazon Inspector : Vulnerability Scanning

```
Provides vulnerability scan
Recommend best practice
Can install agents on EC2 instances also directly
Limit possibility of cyber attack
```








# AWS Container Security

AWS manage OS and service

AWS and customer share

IAM

firewall

Customer secures data

## AWS VPC Virtual Private Cloud

Lab in ‘Intro to AWS Cloud Security’ Pluralsight

Create a subnet

public

private

Gateway to internet or private network

NAT allow private instances access to public internet

Virtual private cloud consists of a least 2 subnets : one private and one public

Private subnet

- Database
- Background Services

Public subnet

- NAT Gateway
- Web instances

both subnets connect to a router which connects to the internet

should restrict unauthorised access

### AWS KMS key service

- Customer Master Key can be managed by customer or AWS
- KMS protected in HSM hardware module

### AWS Example : Bank

Access via API which calls database. Data is encrypted on database but decrypted with KMS key and sent to customer

### RDS relational database

### EMR big data

### Elastic beanstalk - app deployment

Pluralsight Intro to AWS cloud security : walkthrough

### AWS Environment Variables

```
In JSON files AWS keys can be kept in %USERPROFILE%.aws\\credentials file for example

[default]
aws_access_key_id=<your access key id>
aws_secret_access_key=<your secret access key>
```

## Serverless Computing

```
Serverless = function-as-a-service
```

# Load Balancing

```
NGINX
API Gateway
nginx.com
AWS Route53
Auto scaling
NGINX controller
Caching content
Content distribution networks
AWS Pattern
AWS Quick Start guide to NGINX
Load balancers solve the problem of 
   Performance
   Scale up : Vertical : More CPU/RAM/Hard Drive
   Scale out : horizontal : add more computers
   Availability
   Economy
Server-side load balancers
Network load balancers : OSI layer 3 : good for balancing raw network load
Application load balancers : OSI layer 7 : more advanced as content of packets known
IAAS Infrastructure As A Service - render VM via API
```

## Types Of Load Balancer

```
### Cloud
Elastic Load Balancer (AWS)
ALB Application Load Balancer
NLB Network Load Balancer

### Ported from real machines

### Software Load Balancer
Installed on top of OS

### Global Route Balancing With Route 53
Enables you to direct your users to the closest endpoint geographically around the globe
Geolocation routing allows specifying endpoints by region geographically

### Latency-based routing
Detects closest region based on lowest DNS latency which beats geographic distance
```

## Considerations Of Load Balancing

### Scaling Infrastructure

Must be able to register and de-register nodes from load balancing pools through automation

### Scaling Load Balancers

Must be able to scale load balancers

### NGINX Load Balancing

```
NGINX is an Application Deliver Contoller
NGINX is a load balancer
NGINX is a reverse proxy
NGINX can load balance TCP, UDP, HTTP, HTTPS, Email
NGINX is extensible via C and LUA
NGINX has MODSECURITY3 which turns NGINX into a WAF Web Application Firewall
NGINX offers authentication via JWT web tokens
```

# Cloud Labs

### EC2 Instance with SSH access

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

Windows with RDP

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
Install Virtual Box
Install Vagrant

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
# upgrade metadata on available apps and their latest versions
sudo apt-get update
# actually upgrade available programs
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

## Packer - creates images and runs them on AWS

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

### Terraform by HashiCorps - provisioning

[Terraform by HashiCorp](https://www.terraform.io/)

## Chef

```
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

Downloading Chef

Chef install

    Download from 
    
        https://downloads.chef.io/chefdk/
    
    Vagrant 
    
        Install from https://www.vagrantup.com/downloads.html
        
    Create a folder and run
        
        chef generate cookbook node

Kitchen

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
```

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

```
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

# Kubernetes - Orchestrates multiple containers

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

### Install kubectl

```
# install on Windows
choco install kubernetes-cli

# install on Linux 1
curl -LO <https://storage.googleapis.com/kubernetes-release/release/`curl> -s <https://storage.googleapis.com/kubernetes-release/release/stable.txt`/bin/linux/amd64/kubectl>
chmod +x ./kubectl
sudo mv ./kubectl /usr/local/bin/kubectl

# install on Linux 2
sudo apt-get update && sudo apt-get install -y apt-transport-https
curl -s <https://packages.cloud.google.com/apt/doc/apt-key.gpg> | sudo apt-key add -
echo "deb <https://apt.kubernetes.io/> kubernetes-xenial main" | sudo tee -a /etc/apt/sources.list.d/kubernetes.list
sudo apt-get update
sudo apt-get install -y kubectl

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

```
# install on Windows
choco install minikube

# install on MAC
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
kubectl get pods -n <<namespace>>  (or is it get pod!)
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

```
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

```
Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Windows-Subsystem-Linux

Then install Ubuntu 18.04 LTS from the Windows Store
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

### AWS Ubuntu Instsall Jenkins

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

Nested Virtualisation

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

# Exam Questions

[https://downloads.certiport.com/Marketing/MTA/docs/MTA-98-369_ENU_Study-Guide.pdf](https://downloads.certiport.com/Marketing/MTA/docs/MTA-98-369_ENU_Study-Guide.pdf)

# Archive Labs

### CERTMGR lab chapter 2 to export private key

### Encrypted Data Recovery Agent

These users can recover encrypted files

Add in group policy

Computer ConfigurationSettingsSettingsKey PoliciesData Recovery Agents.

### Bitlocker lab on Server

1. Add Role
2. Control Panel now has Bitlocker option

### Data Recovery Agent Lab

Can be used to recover bitlocker

Add user in Computer ConfigurationSettingsSettingsKey PoliciesDrive Encryption

Add unique drive IDs to Computer ConfigurationTemplatesComponents BitLocker Drive Encryption

Finally enable DRA recovery in these policies

Choose How BitLocker-Protected Operating System Drives Can Be Recovered

Choose How BitLocker-Protected Fixed Drives Can Be Recovered

Choose How BitLocker-Protected Removable Drives Can Be Recovered

### VPN Split Tunneling

VPN Properties, Networking, IPV4, Advanced, Use Default Gateway On Remote Network

### PSC Password Settings Container

ADUC, View, Advanced

Default Domain Policy, Properties, Attribute Editor, Password, make changes

### Offline Files lab

Control Panel, Sync Center, Offline Files, Enable