# Cloud Native

## Cloud Definitions

CaaS Communication As A Service

    VOIP
    VPN

DaaS Desktop As A Service

MaaS Monitoring As A Service

OpEx Operating Expenses

JWT Java Web Tokens

CNCF Cloud Native Computing Foundation

Self Healing Node

Multi Tenant Node

CI/CD

CAPEX - capital expenditure eg buildings and assets

OPEX - only paying existing costs

Cloud native - move quickly by taking small and reversible steps

Cloud Principles - Speed, Scale, Margin

Containers fix dependencies

Orchestrator - manage multiple containers

IAAC Infrastructure As Cloud - fully scripted environment

Pragmatic

Cloud - speed 

Cloud - scale up and down

Containers

    Works the same across all operating systems
    
    Isolation
    
    Standard API

Serverless = function-as-a-service

Note : containers built with Linux applications will run effectively natively on a Linux OS

Containers can give us

    automation
    
    resilience
    
    resource utilization

Orchestrator : dynamic management

    Examples : Kubernetes, DC/OS, Nomad, Swarm

## Microservices

Applications are broken down into services which are

Single purpose

Decoupled

Self Contained

And that communicate with one another via messages

Stateful : save state to database

Stateless 





Distributed Systems are hard !!!

    Chances increase of one or more instances breaking the more you have

    AWS Simple Queue Service : can guarantee messages get queued until actioned


Container image does not include the kernel - the hosting os provides the kernel

Bin packing - group resources to maximise utilisation

Problems with microservices

    Message sending can be fraught with difficulties


Security

    Biggest challenge is how to secure a distributed system



    Defend

        HTTPS

        Authentication 

            OAuth

        Authorisation

            OAuth



    Detect
    
        Logs

            ELKstack

            Logstash

            ElasticSearch

            Kibana



    Respond

    Recover





Data Warehouse

Deterministic : predictable outcome

Induction : we deduce behaviour

Swagger checks that there are no breaking changes when upgrading versions of dependent libraries

Kubernetes is an Orchestrator of containers

    EKS is AWS service equivalent of Kubernetes

    GKE is Google's implementation of Kubernetes and is currently better than EKS

NGINX is a load balancer

EKL = Elasticsearch + Logstash + Kibana which is a logging stack

Grafana does monitoring

Prometheus does monitoring

Terraform

Puppet

Jenkins

Postgres

RabbitMQ clusters

AWS SQS Managed Queue service

Aurora 

Dynamo DB

Sensu does operational monitoring


### Cloud Native Random Words and Definitions

    Container
    Migration
    Dynamic Management
    Microservices
    CD
    CNCF
    Cloud Native = distributed systems which scale 
    Nodes
    Self healing nodes
    Multi-Tenant nodes
    hyperscale
    IAAS 
    PAAS
    CI 
    Orchestrator
    Containers
    Goal : speed to market, scalability
    Cloud native minimises risk by building incrementally
    CAPEX Capital Expenditure ie buying lots of stuff up front
    OPEX Only paying on demand expenditure
    Goal : spend less on hosting
    Cloud : take small and reversible low-risk steps
    Cloud Native = containers + dynamic management + microservices
    IAAS/PAAS hosted on cloud
    microservices are small and decoupled
    automatic testing
    Cloud native : goal is to launch a product sooner
    Cloud native goal : scale
    Cloud native goals : focus on one at a time of speed to market/scale/margin
    Function as a service = AWS Lambda = run code snippets on request
    Container advantages : Common packaging, common interface tools, application isolation
    Containers provide an API which provides automation, resilience, resoure utilisation
    Dynamic Infrastructure management : Network as code
    Dynamic infrastructure : react consistently to attack or downtime
    Orchestrator eg Kubernetes, Swarm, Nomad, DC/OS
    Cluster of containers
    Bin packing - ensure clusters are being used efficiently
    Orchestration - standard container format + isolation + control API
    Microservices - easier to develop, maintain, update, more robust, more scalable, cheaper to support
    Stateful microservice - saves state
    Stateless microservice
    Microservices and distributed systems architecture can fail in ways you have never thought of
    Monolith to Microservice 1) Put monolith in container 2) Split into stateless and scalable front end and 3) stateful monolithic back end then 4) continue to break up front and back ends into smaller and smaller parts
    Distributed Systems are hard to manage
    Problems with distributed systems : failure before/during/after message, packets lost, HDD fail, servers fail, components no longer start/stop in specific order, cannot rely on the state of another microservice
    Distributed systems : every possible error is the norm
    Distributed systems messaging is either reliable but slow or unreliable but fast
    Distributed systems : no such thing as agreed-upon-time
    Distributed systems : takes around 100 times more time to send one message compared with monolith
    RPC is 20 times faster than HTTP REST
    Distributed Systems : Chaos Monkey randomly pulls out connections to see if the system still functions
    Container scheduler : decides which machine to create a new container on
    Bin Packing - place containers in a group to maximise resource utilisation
    Security : increase of attack surface with containers
    Attack surface increase : OS, patches, updates, messages
    Security : Defend, detect, respond, recover
    Logging : ELK stack, Logstash, Elasticsearch, Kibana


# Kubernetes

### Kubernetes Life Cycle

    Install
    Configure
    Customise
    Integrate
    Train
    Maintain
    Support
    Distribute
    3rd party add-on

### Companies Who Run Containers

Kubernetes

Docker swarm

Mesos

CAPS

OpenShift

CloudFoundry

OpenStack

### Kubernetes tools

Helm - package manager

Prometheus - observability

Jaeger - observability

Istio - networking

Rook - storage

# Microsoft And Docker

## Docker Glossary

https://docs.docker.com/v1.11/engine/reference/glossary/ 

):

AKS Azure Container Service

Service Fabric

Docker CLI

Visual Studio 2017 Docker Tools

Azure Container Registry

Docker on Windows => can create for Linux and Windows

Docker on Linux => can create for Linux only

Docker Community Edition (Docker CE)

Docker Enterprise Edition (Docker EE)

Windows Containers run on 1) Windows Server Container or 2) HyperV

Image can create containers.  Image is immutable after it's been created.

Container is an instance of a docker image.  

Container = Docker image + Runtime + Instruction set

Tag - apply to image

Dockerfile is a batch file to create a docker image

docker build - command to build an image

    

