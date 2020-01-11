# Cloud (use deleteme and add terms to list at bottom)


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

[https://docs.docker.com/v1.11/engine/reference/glossary/](https://docs.docker.com/v1.11/engine/reference/glossary/)

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

Image can create containers. Image is immutable after it's been created.

Container is an instance of a docker image.

Container = Docker image + Runtime + Instruction set

Tag - apply to image

Dockerfile is a batch file to create a docker image

docker build - command to build an image


### List Of Terms 
### Cloud
CapEx Capital Expenditure
OpEx Operating Expenditure
CaaS Communication VOIP VPN
MasS Monitoring Logs Alerts
NaaS Network
DaaS Desktop
JWT Java Web Tokens
CNCF Cloud Native Computing Foundation
Self Healing Node
Multi Tenant Node
Cloud Native - small reversible steps
Cloud Principles - Speed + Scale + Margin
Containers fix code dependencies
Orchestrator manages containers
IaaS Infrastructure can be fully scripted
Cloud can scale up and down
Serverless provides funcion as a service
Containers benefits: resource utilisation
Kubernetes is an orchestrator
Orchestrators: Kubernetes, DC/OS, Nomad, Swarm
Microservices are single-purpose, decoupled, self-contained, communicate via 'messages'
Distributed systems 
AWS Simple Queue System guaranteed message is queued
Container does not contain kernel
Bin packing of resources to maximise resources
Microservices can have problems with messaging
Microservices - how are they secured?
Logging ElkStack, LogStash, ElasticSearch, Kibana
Deterministic has an output which is pre-determined
Induction can 'induce' a behaviour
Swagger checks for breaking changes on library upgrade
Kubernetes = AWS EKS = Google GKE
NGINX load balances
EKL = AWS ElasticSearch + LogStash + Kibana which combine to provide logging
Grafana monitoring
Prometheus monitoring
Terraform
Puppet
Jenkins
Postgres
Aurora
DynamoDB
Self-healing node
Multitenant node
Cloud Native are distributed systems which scale
Cloud Native can focus on incrementally delivering more products to market with scale and margin
Function as a Service = AWS Lambda
Containers have API