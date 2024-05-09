# cloud

## Contents

- [cloud](#cloud)
  - [Contents](#contents)
  - [Introduction](#introduction)
  - [Cloud Critial Terms](#cloud-critial-terms)
    - [devops](#devops)
    - [big data](#big-data)
    - [azure](#azure)
  - [benefits of cloud](#benefits-of-cloud)
  - [saas / paas / iaas](#saas--paas--iaas)
  - [cloud history](#cloud-history)
  - [cloud random terms](#cloud-random-terms)
  - [SAAS Software As A Service](#saas-software-as-a-service)
    - [Overview of different cloud platforms](#overview-of-different-cloud-platforms)
    - [Vendor](#vendor)
  - [Private Cloud](#private-cloud)
    - [Deploying Cloud Technology Locally : Azure Stack and AWS Outposts](#deploying-cloud-technology-locally--azure-stack-and-aws-outposts)
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
    - [keys](#keys)
    - [Verifying validity of a site.](#verifying-validity-of-a-site)
    - [Key Archival Server](#key-archival-server)
    - [Signing can provide integrity](#signing-can-provide-integrity)
    - [PKI as a service](#pki-as-a-service)
  - [Encryption](#encryption)
    - [IPSEC](#ipsec)
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
- [Containers](#containers)
    - [Container services - deploy and manage containers](#container-services---deploy-and-manage-containers)
    - [Containers](#containers-1)
- [Cloud And Container Services](#cloud-and-container-services)
    - [Microservices](#microservices)
- [DevSecOps](#devsecops)
- [AWS](#aws)
  - [AWS Introduction](#aws-introduction)
  - [Fundamentals](#fundamentals)
    - [5 Pillars](#5-pillars)
    - [Security](#security)
      - [IAM Security](#iam-security)
        - [IAM Policy](#iam-policy)
      - [Network Security](#network-security)
        - [VPC Virtual Private Cloud](#vpc-virtual-private-cloud)
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


## Introduction

## Cloud Critial Terms

Scale horizontally (more nodes)

Scale vertically (CPU RAM and Disk)

Self Healing

Public cloud

Private cloud

Hybrid cloud

Key Management Service (KMS) storage of encryption keys

Cloudwatch logging

Subnets

Route 53 DNS

Load Balancing

Relational Database Service RDS 

Big Data

Data Lake

AWS Inspector does vulnerability management

### devops

Devops runs infastructure against scripts

  - Docker - provide running VM on demand with an app
  - Kubernetes orchestrates docker containers
  - KubeCtl is kubernetes command line tool
  - MiniKube is local version of kubernetes for learning kubernetes

  - Vagrant by HashiCorp - build testing/development environments
  - Packer by HashiCorp - build production environments : one script => multiple platforms
  - Terraform by HashiCorp - configuration management for infrastructure eg versioning, uses Go.  Best choice if you are using Docker and Packer

  - IAAS top tools are 
    - Puppet
    - Chef
    - Ansible
    - Saltstack (master/minion model)

  - Chef by Progress - configuration management for software using Ruby - best choice for changeable environments, has agent on nodes, $14k/year for 100 nodes
  - Immutable environment cannot be changed but has to be rebuilt again from scratch
  - Changeable environment can alter the configuration of your servers live
  
  - Ansible by Red Hat is a complex orchestration tool in Python and YAML to deploy software, configure systems and organises updates and continuous deployments.  Kubernetes can use custom Ansible builds.  Configuration is pushed to the nodes.  Simple to learn with python and YAML, is agentless unlike Chef and Puppet.  $10k/year for 100 nodes
  - Docker - deploys an app in a container
  - Ansible - configures and manages the docker app after deployment
  - Docker for deployment, ansible for configuration after deployment

  - Puppet is configuration management tool in Ruby where you declare the desired server state not the way to reach it - configuration is pulled from the server, also has agent on the node, $12k-$20k/year for 100 nodes

  - Jenkins is a CI/CD server written in Java
  - Spinnaker is app configuration management tool by oracle

Microservices

Redis is used as an in-memory database and cache
- RDB Redis Database can persist storage as backups eg hourly, daily






### big data

- Apache Hadoop allows for distributed processing 
- Apache Spark runs data engineering on clusters
- Apache Hive stores big data to SQL
- Apache Kafka is used for big data stream processing

### azure

- application insights - app stats and issues
- DocumentDB is NoSQL
- ExpressRoute
- HDInsight is big data analytics
- StorSimple - cloud NAS/SAN
- Traffic Manager - DNS and load balancing
- Fabric Controller manages VM clusters
- identity
  - can sync with local AD
  - ADFS Federated Services can provide identity services eg 2FA across platforms

 ## benefits of cloud

 - subscription
 - agile app development
   - innovate
   - speed of change
   - fail fast
   - patch quickly
   - respond quickly
   - update quickly
 - agile customer service
 - elasticity - scale out
 - scale up
 - innovate
 - self healing if node goes offline then spin up new instance
 - availability zones match geographical regions
 - monitor compliance more easily


  



## saas / paas / iaas

- iaas
  - vm
  - network
  - storage
  - clusters
  - load balancing
- paas
  - apps
  - db
- saas - data

- SAAS 
  - Sharepoint
  - Exchange
  - Office 365
- PAAS
  - SQL
  - .NET
  - AWS
  - Azure
- IAAS
  - SCCM
  - EC2
  - Azure Rackspace
  - Google Compute provides virtual machines



## cloud history

- mainframes had thin clients
- hardware virtualisation in 2000s
- docker containers 


## cloud random terms

Puppet - manage system config with version control

Conjur - manage secrets eg in puppet

Ansible - manage sister config - simpler version of puppet

cloud foundry deploy apps on docker containers

kubernetes - manage containers in groups

gke google kubernetes engine

google stackdriver - manage alerts, monitoring and loggine

aws cloud formation - text based config of all apps

CAPEX - buy expenses in advance

OPEX - pay for current expenses real time

orchestration - manage multiple containers

infrastructure as cloud - fully scripted infrastructure environment

risk register - list of things which can break

caas - communinication as a service

maas - monitoring as a service

naas - network as a service

simple queue service - handle messages in order

swagger provides library version control

elk stack - elasticsearch + logstash + kibana

grafana monitors

prometheus monitors

aws lambda - function as a service

container needs 1) image 2) runtime 3) instruction set

cloudfront makes files available via cdn

multi-tenant has one app with multiple users

self healing node can detect anomalies and take action eg redeploy container

nginx - load balancer

apache spark and hadooop processes big data

azure insight processes big data

arn amazon resource name

aks azure container service

container identity

container isolation

code integrity

code identification

docker swarm - orchestration, easy to set up

dtr docker trusted registry - manage docker images

```shell
# build an image
docker build
# pull from internet
docker pull
# run
docker run
# list
docker ps -a
```

docker compose - yaml to manage docker

k8s kubernetes

bml build measure learn 

hcl hashicorp configuration language

orchestrator - runbook automation

privilege identity management - user runas administrator

dsc desired state configuration

expressRoute is like a dedicated leased line

application insights - local client

privilege identity management - admin accounts

privilege session management

conjur - identity and secrets management

idempotency - dont change what does not need to be changed

openshift - containers by red hat

cloudFormation - yaml configure app

multi-tenancy data stored in different containers

availability set - failover machine hosted on different physical server

kubernetes swarm

AWS Outposts

Openstack

GreenGrass

AzureHub

Elastic Beanstalk



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
- Subscription
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
    - largest ... by a) number of servers b) number of datacenters c) revenue d) percentage of data center market
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

### Deploying Cloud Technology Locally : Azure Stack and AWS Outposts

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

###  keys

- symmetric fast
- asymmetric secure but slow
- ssl uses asymmetric certificate on server to create symmetric key securely and send to client which can decrypt and use

### Verifying validity of a site.

Verification can be public globally or just within a company

RA Registration Authority - verifies identity and tells CA to issue certificate

CA Certificate Authority - corporate registry - issues certificate

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

## Ciphers

### Asynchronous

RSA is used and is used to create and exchange the session key

AES Advanced Encryption Standard (used to be 3DES or RC4)

### Cipher Detail (with images)

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
- Robust
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

## AWS Introduction

AWS has a free online guide to its services and we will be starting here for our AWS studies https://aws.amazon.com/getting-started/fundamentals-core-concepts/?e=gs2020&p=gsrc

## Fundamentals

AWS has 175 services!

### 5 Pillars

- Security
- Performance Efficiency
- Reliability
- Operational Excellence
- Cost Optimization

### Security

Zero Trust - potentially all services and apps can be malicious including all network infrastructure

3 Levels Of Security

- IAM Identity and Access
- Network Security
- Data Encryption

#### IAM Security

- Principal is the person we are giving permissions to 
- Action is what is being applied
- Resource is which properties are being accessed

Least Privilege - minimal permissions

##### IAM Policy

    - Identity Policy applies to a principal
    - Resource Policy applies to a resource

#### Network Security

Defense in depth : multi-layered approach

##### VPC Virtual Private Cloud

This is a logical network to which permissions can be applied

It consists of 

- Subnet (ranges of IP)
- Route tables to direct traffic
- Gateway to communicate with outside world


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

- NGINX is an Application Deliver Contoller
- NGINX is a load balancer
- NGINX is a reverse proxy
- NGINX can load balance TCP, UDP, HTTP, HTTPS, Email
- NGINX is extensible via C and LUA
- NGINX has MODSECURITY3 which turns NGINX into a WAF Web Application Firewall
- NGINX offers authentication via JWT web tokens`

