# Cloud Native

## Cloud Definitions

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

