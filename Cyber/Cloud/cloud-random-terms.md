# Cloud Random Terms

- [Cloud Random Terms](#cloud-random-terms)
    - [Cloud Terms](#cloud-terms)
    - [AWS Random Terms](#aws-random-terms)
    - [Devops General Terms](#devops-general-terms)
    - [Azure Quick Fire Terms](#azure-quick-fire-terms)
    - [Containers](#containers)
    - [Docker Quick Fire Terms](#docker-quick-fire-terms)
    - [Kubernetes](#kubernetes)
    - [Vagrant](#vagrant)
  - [Azure Random Terms](#azure-random-terms)
    - [Networking](#networking)
    - [SCCM System Center Configuration Manager](#sccm-system-center-configuration-manager)
    - [Orchestrator](#orchestrator)
    - [SCOM System Center Operations Manager](#scom-system-center-operations-manager)
    - [AZURE ADVISOR](#azure-advisor)
    - [Application Insights](#application-insights)
    - [PowerBI](#powerbi)




Puppet : define, enforce, maintain and report on System Configuration. Use Version Control. Can even use for scripting etc. Policy enforcement. Agentless

Conjur : secrets management eg in Puppet

Ansible = simpler version of Puppet : enforce server configuration

Cloud foundry = containers. Installed over Docker. Use to build and deploy apps quickly. Pivotal cloud foundry also.

Kubernetes : deploy, manage, group containers, allocate IP per group etc, roll out and roll back changes

GKE Google Kubernetes Engine on Google Cloud : deploy containers

Google Stackdriver : monitoring and logging with alerts, uptime etc

AWS Cloud Formation : text based configuration of all apps

Cloud Migration

Micro Services

Enterprise mobility

Firewall Vendors - Check Point, FireEye, Palo Alto


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

### Kubernetes 

Helm is a package manager

Istio networking

Rook storage

Companies running Docker and Containers - Kubernetes, Swarm, Mesos,CAPS, OpenShift

Companies ... CloudFoundry, OpenStack

### Vagrant

HCL Hashicorp Configuration Language

## Azure Random Terms

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

System Center Configuration Manager
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