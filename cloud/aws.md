# code

## contents

- [code](#code)
  - [contents](#contents)
  - [AWS](#aws)


## AWS

- AWS
    - Terms
        - Region → Availability Zones
        - VPC → Containers
        - EC2 → Load Balance
            - Application Load Balancer
                - Enhances classic load balancer
                - Path routing to different target groups
                - Hosting routing routes to different hosts
                - IPV6
                - WAF
                - Good when using containers - request routing based on different ports!
                - Request tracing
    - EC2 Compute
        - Cloudwatch
        - Autoscale in/out
        - Autoscale VM Group then traffic from load balancer
            1. Launch Configuration - security
            2. Autoscaling group - which network, instance min max desired, load balancer
            3. Autoscaling policy - triggers eg Cloudwatch CPU 80%
        - EC2 Elastic Compute Cloud
            - Compute = CPU
            - Elastic Beanstalk - monitors CPU, RAM, Disk, Network
        - ECS Elastic Container Service for microservices
        - EKS Elastic Kubernetes Service
        - AWS Lambda - no server needed
        - AWS Fargate - container serverless - auto manage infrastructure
    - DB
        - RDS Relational - Aurora, Postgres, Maria, Oracle
            - RDS
        - Non Relational Dynamo
    - S3 Simple Storage Service
        - Object storage - files split up and replicated
        - EBS Elastic Block Storage - mimics real hard drive with File IO
            - Durable - auto replicated with block-level replication
            - snapshots - recreate volume from snapshots
            - copy snapshots to another region for protection
            - encrypted ebs volumes
            - resize dynamically
        - Uses
            - Analytics is main use
            - Backup - data at rest
            - Replication for fault tolerance
            - Media hosting
            - Website hosting
        - SLA 99.9%
        - Replication guaranteed eventually
        - bucket
        - durability - auto replication across 2
        - scale to high volume of requests
        - access data via http and https access on the api endpoints
        - aws s3 cp myFile.txt s3://my-bucket/myFile.txt
        - aws s3 sync myFolder s3://my-bucket/myFolder
        - aws s3 ls s3://my-bucket —recursive
        - example of use
            - assets needed by an app eg media, logs
            - static web hosting
            - backup and disaster recovery
            - 
        
    - Identity
        - IAM Users Groups Roles.
            - Roles applied to apps
        - ADS AWS Directory Service uses Microsoft AD
        - Cognito sign in via FB
        - IAM Users and Groups and Roles
            - apply roles to apps
        - ADS AWS Directory Service - use Microsoft AD
        - Cognito - sign in via Facebook or Google
    - Monitor and Audit
        - Cloudwatch
            - alarms
            - logs
            - events
        - CloudTrail - logs to S3 bucket
            - Can log all AWS admin access for example
        - 
    - Developer
        - SDK for .NET
        - Toolkit for Visual Studio / VSCode / Jetbrains Rider
        - Tools for Powershell
        - AWS CLI
        - .NET Core CLI to deploy
        - Toolkit for Azure Devops
        - CDK Cloud Development Kit
    - Infrastructure
        - Regions host ≥ 2 availability zones
            - optimise latency
            - minimise cost
            - regulatory costs
        - Availability Zones supplied by different electricity supplier!
            - collection of data centres inside one region
            - each data centre in zone is connected by high speed links
        - Edge Zones = CDN = Cloud Front
    - VPC Virtual Private Cloud
        - PAYG on demand compute
