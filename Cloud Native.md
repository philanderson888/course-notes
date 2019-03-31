Kubernetes
Docker
Orchestrator
Cloud Native
WAF
load balance
content caching
web server
firewall for web app
JWT Java Web Tokens
distributed system

# Cloud Native

Container
Kubernetes
Orchestrator
Docker
CNCF
Migration
Microservices
Dynamic Mangement
Continuous Delivery
Node
Self Healing Node
Multi Tenant Node
Microservices
Devops
ci/cd integration deployment
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





CICD



Distributed Systems are hard !!!

    Chances increase of one or more instances breaking the more you have

    AWS Simple Queue Service : can guarantee messages get queued until actioned


Container image does not include the kernel - the hosting os provides the kernel

Bin packing - group resources to maximise utilisation

Problems iwth microservices

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

AWS

CentOS

Terraform

Puppet

Jenkins

Postgres

RabbitMQ clusters

AWS SQS Managed Queue service

Aurora 

Dynamo DB

Sensu does operational monitoring













