# aws cli

## contents

- [aws cli](#aws-cli)
  - [contents](#contents)
  - [introduction](#introduction)
  - [places and ways to sign in](#places-and-ways-to-sign-in)
    - [1. root user sign in](#1-root-user-sign-in)
    - [2. aws access portal](#2-aws-access-portal)
    - [3. iam user sign in url](#3-iam-user-sign-in-url)
  - [console home](#console-home)
  - [iam](#iam)
  - [access keys](#access-keys)
  - [aws cli](#aws-cli-1)
  - [iam user](#iam-user)
  - [config](#config)
  - [login](#login)
  - [aws configure](#aws-configure)
  - [aws configure list](#aws-configure-list)
  - [aws sso list-accounts](#aws-sso-list-accounts)
  - [future commands](#future-commands)
  - [aws iam list-users](#aws-iam-list-users)
  - [ec2](#ec2)
  - [ec2 security groups](#ec2-security-groups)
  - [terminate ec2 instance](#terminate-ec2-instance)
  - [connect to your ec2 instance](#connect-to-your-ec2-instance)

## introduction

obviously it's great to be able to create aws ec machines in the cloud but i want also to create and manage them from the console to enable a much higher degree of scripting

## places and ways to sign in

using this guide 

https://docs.aws.amazon.com/signin/latest/userguide/sign-in-urls-defined.html#access-portal-url


### 1. root user sign in 

we see that root user signs in at

https://signin.aws.amazon.com/

where we can also sign in as an iam user ...

### 2. aws access portal 

this is where specific iam users can sign in 

```bash
https://d-xxxxxxxxxx.awsapps.com/start
# or
https://your_subdomain.awsapps.com/start
# eg for user 01
https://d-9067f09019.awsapps.com/start
```

### 3. iam user sign in url

looks like

```bash
https://359268167005.signin.aws.amazon.com/console
```




## console home

we can log in using

```bash
https://eu-north-1.signin.aws.amazon.com/
```

**note I am not sure if I have consistently said to use eu-north-1 or us-east-1 - I may have to adjust this in the future

## iam

identity and access management

https://us-east-1.console.aws.amazon.com/iam

here we can find user with details

```bash
# user 
philanderson888-iam-user-01
# name
philanderson888-iam-user-01-instance
# identity store id
d-9067f09019
# access portal url 
https://d-9067f09019.awsapps.com/start
# user id
04c87488-60d1-70bb-f5f6-e5bb99fcc8be
# instance arn
arn:aws:sso:::instance/ssoins-7223b671de5c7d0a
# instance id 
ssoins-7223b671de5c7d0a
# issuer url
https://identitycenter.amazonaws.com/ssoins-7223b671de5c7d0a
# region
us-east-1
```


also 


```bash
# user
philanderson888-iam-user-02
# canonical user id
67d4978b9597063ebc3a351c35d48d91d988201b1ae5762d771fcefcdd9148ec
# account id
359268167005
# arn
arn:aws:iam::359268167005:user/philanderson888-iam-user-02
# access key
AKIAVHJQNFVO3PF5VMVC
# console sign in link
https://359268167005.signin.aws.amazon.com/console
# iam user sign in url
https://359268167005.signin.aws.amazon.com/console
```


## access keys

https://docs.aws.amazon.com/sdkref/latest/guide/feature-static-credentials.html

can be stored in /.aws/credentials or in environment variables file

https://docs.aws.amazon.com/IAM/latest/UserGuide/security-creds.html

https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-sso.html





## aws cli

install the aws cli with instructions at

https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html

download 

```bash
curl "https://awscli.amazonaws.com/AWSCLIV2.pkg" -o "AWSCLIV2.pkg"
```

install

```bash
sudo installer -pkg ./AWSCLIV2.pkg -target /
```

verify install

```bash
which aws
#/usr/local/bin/aws
aws --version
# aws-cli/2.10.0 Python/3.11.2 Darwin/18.7.0 botocore/2.4.5
```

## iam user

to get started sign in to aws and search for 'iam' 

search for the iam dashboard, click on 'users' and select 'create user'

https://us-east-1.console.aws.amazon.com/iam/home?region=us-east-1#/home

choose the option to provide user access to the console, and to create an iam user

set a password

## config

to sign in we must have a config file which the local terminal will use to provide credentials and sign in via the AWS CLI

the path to the config file is

```bash
~/.aws/config
```

we can configure a typical config file thus 

```yaml
[default]
region = us-east-1
output = json
sso-session = test
sso-account-id = 359268167005 
[sso-session test]
sso_region = us-east-1
sso_start_url = https://359268167005.signin.aws.amazon.com/console
# or possibly
sso_start_url = https://identitycenter.amazonaws.com/ssoins-7223b671de5c7d0a
```


we can also get the cli to run the config generation by running

https://docs.aws.amazon.com/cli/latest/userguide/sso-configure-profile-token.html

```bash
aws configure sso
```

## login

run this command

```bash
aws sso login
```

well it worked (eventually) with these details

```yaml
[default]
aws_access_key_id = AKIAV...
aws_secret_access_key = 3AHK5...
sso_start_url = https://identitycenter.amazonaws.com/ssoins-7223b671de5c7d0a
sso_region = us-east-1
region = us-east-1
output = json
sso-session = test
sso-account-id = 359268167005 
[sso-session test]
sso_region = us-east-1
sso_start_url = https://identitycenter.amazonaws.com/ssoins-7223b671de5c7d0a
sso_start_url_2 = https://identitycenter.amazonaws.com/ssoins-7223b671de5c7d0a
sso_start_url_3 = https://359268167005.signin.aws.amazon.com/console
```

aws sso login creates a cache files in ~/.aws/sso/cache which contains an access token

## aws configure

we can run this command

```bash
aws configure
```

and it will allow you to enter access key and secret

and it will create file `credentials` at ~/.aws/credentials

```yaml
[default]
aws_access_key_id = AKIA...
aws_secret_access_key = 3AHK5... 
```

## aws configure list

```bash
% aws configure list
#      Name                    Value             Type    Location
#      ----                    -----             ----    --------
#     profile                <not set>             None    None
# access_key     ****************VMVC shared-credentials-file    
# secret_key     ****************Qgn0 shared-credentials-file    
#    region                us-east-1      
# config-file    ~/.aws/config
```


## aws sso list-accounts

```json
aws sso list-accounts --access-token "aoaAA..."
{
    "accountList": []
}
```


## future commands

```bash
aws s3 ls
aws ec2 describe-instances
```

## aws iam list-users

with this config

```yaml
[default]
aws_access_key_id = AKIA....
aws_secret_access_key = 6VL4+....
sso_start_url = https://identitycenter.amazonaws.com/ssoins-7223b671de5c7d0a
sso_region = us-east-1
region = us-east-1
output = json
sso-session = test
sso-account-id = 359268167005 
```

i can now run this command

```bash
aws iam list-users
```


```json
{
    "Users": [
        {
            "Path": "/",
            "UserName": "philanderson888-iam-user-02",
            "UserId": "AIDAVHJQNFVO567LJWFGX",
            "Arn": "arn:aws:iam::359268167005:user/philanderson888-iam-user-02",
            "CreateDate": "2023-12-31T11:32:52+00:00",
            "PasswordLastUsed": "2023-12-31T19:31:24+00:00"
        }
    ]
}
```


i can also run

```bash
aws iam list-access-keys
```

```json
{
    "AccessKeyMetadata": [
        {
            "AccessKeyId": "AKIAI63PF6WUGEYHCTHA",
            "Status": "Active",
            "CreateDate": "2020-04-03T07:08:53+00:00"
        },
        {
            "AccessKeyId": "AKIAVHJQNFVOSV6XQRZH",
            "Status": "Active",
            "CreateDate": "2023-12-31T22:00:33+00:00"
        }
    ]
}
```


```bash
aws iam get-account-summary
{
    "SummaryMap": {
        "GroupPolicySizeQuota": 5120,
        "InstanceProfilesQuota": 1000,
        "Policies": 3,
        "GroupsPerUserQuota": 10,
        "InstanceProfiles": 1,
        "AttachedPoliciesPerUserQuota": 10,
        "Users": 1,
        "PoliciesQuota": 1500,
        "Providers": 0,
        "AccountMFAEnabled": 0,
        "AccessKeysPerUserQuota": 2,
        "AssumeRolePolicySizeQuota": 2048,
        "PolicyVersionsInUseQuota": 10000,
        "GlobalEndpointTokenVersion": 1,
        "VersionsPerPolicyQuota": 5,
        "AttachedPoliciesPerGroupQuota": 10,
        "PolicySizeQuota": 6144,
        "Groups": 1,
        "AccountSigningCertificatesPresent": 0,
        "UsersQuota": 5000,
        "ServerCertificatesQuota": 20,
        "MFADevices": 0,
        "UserPolicySizeQuota": 2048,
        "PolicyVersionsInUse": 25,
        "ServerCertificates": 0,
        "Roles": 22,
        "RolesQuota": 1000,
        "SigningCertificatesPerUserQuota": 2,
        "MFADevicesInUse": 0,
        "RolePolicySizeQuota": 10240,
        "AttachedPoliciesPerRoleQuota": 10,
        "AccountAccessKeysPresent": 1,
        "GroupsQuota": 300
    }
}
```

```bash
aws iam list-access-keys
{
    "AccessKeyMetadata": [
        {
            "AccessKeyId": "AKIAI63PF6WUGEYHCTHA",
            "Status": "Active",
            "CreateDate": "2020-04-03T07:08:53+00:00"
        },
        {
            "AccessKeyId": "AKIAVHJQNFVOSV6XQRZH",
            "Status": "Active",
            "CreateDate": "2023-12-31T22:00:33+00:00"
        }
    ]
}

aws iam list-account-aliases
{
    "AccountAliases": []
}

aws iam list-groups
{
    "Groups": [
        {
            "Path": "/",
            "GroupName": "Admins",
            "GroupId": "AGPAI4JKBPOCKW2ISRZPI",
            "Arn": "arn:aws:iam::359268167005:group/Admins",
            "CreateDate": "2018-07-04T21:45:47+00:00"
        }
    ]
}

aws iam list-instance-profiles
{
    "InstanceProfiles": [
        {
            "Path": "/",
            "InstanceProfileName": "aws-elasticbeanstalk-ec2-role",
            "InstanceProfileId": "AIPAJ3U652WSIOQOIRBT6",
            "Arn": "arn:aws:iam::359268167005:instance-profile/aws-elasticbeanstalk-ec2-role",
            "CreateDate": "2017-06-16T11:37:30+00:00",
            "Roles": [
                {
                    "Path": "/",
                    "RoleName": "aws-elasticbeanstalk-ec2-role",
                    "RoleId": "AROAIIYIR4HGHL56ZWIFU",
                    "Arn": "arn:aws:iam::359268167005:role/aws-elasticbeanstalk-ec2-role",
                    "CreateDate": "2017-06-16T11:37:30+00:00",
                    "AssumeRolePolicyDocument": {
                        "Version": "2008-10-17",
                        "Statement": [
                            {
                                "Effect": "Allow",
                                "Principal": {
                                    "Service": "ec2.amazonaws.com"
                                },
                                "Action": "sts:AssumeRole"
                            }
                        ]
                    }
                }
            ]
        }
    ]
}

aws iam list-mfa-devices
{
    "MFADevices": []
}

aws iam list-policies
{
    "Policies": [
        {
            "PolicyName": "AmazonSageMaker-ExecutionPolicy-20200418T095558",
            "PolicyId": "ANPAVHJQNFVOZX5FTHTME",
            "Arn": "arn:aws:iam::359268167005:policy/service-role/AmazonSageMaker-ExecutionPolicy-20200418T095558",
            "Path": "/service-role/",
            "DefaultVersionId": "v1",
            "AttachmentCount": 1,
            "PermissionsBoundaryUsageCount": 0,
            "IsAttachable": true,
            "CreateDate": "2020-04-18T08:55:22+00:00",
            "UpdateDate": "2020-04-18T08:55:22+00:00"
        },
        {
            "PolicyName": "AWSLambdaBasicExecutionRole-47518198-d2eb-4222-b218-d534ef45fa3d",
            "PolicyId": "ANPAVHJQNFVORDTZYUHFT",
            "Arn": "arn:aws:iam::359268167005:policy/service-role/AWSLambdaBasicExecutionRole-47518198-d2eb-4222-b218-d534ef45fa3d",
            "Path": "/service-role/",
            "DefaultVersionId": "v1",
            "AttachmentCount": 1,
            "PermissionsBoundaryUsageCount": 0,
            "IsAttachable": true,
            "CreateDate": "2020-04-18T07:35:23+00:00",
            "UpdateDate": "2020-04-18T07:35:23+00:00"
        },
        {
            "PolicyName": "AWSLambdaBasicExecutionRole-e9a17be1-28cf-4b75-8c64-ea69fd8df5da",
            "PolicyId": "ANPAVHJQNFVOUQAUL5K7H",
            "Arn": "arn:aws:iam::359268167005:policy/service-role/AWSLambdaBasicExecutionRole-e9a17be1-28cf-4b75-8c64-ea69fd8df5da",
            "Path": "/service-role/",
            "DefaultVersionId": "v1",
            "AttachmentCount": 1,
            "PermissionsBoundaryUsageCount": 0,
            "IsAttachable": true,
            "CreateDate": "2020-04-18T07:36:40+00:00",
            "UpdateDate": "2020-04-18T07:36:40+00:00"
        },
        {
            "PolicyName": "AdministratorAccess",
        .....
        }
}

aws iam list-roles
{
    "Roles": [
        {
            "Path": "/service-role/",
            "RoleName": "AmazonSageMaker-ExecutionRole-20200418T095558",
            "RoleId": "AROAVHJQNFVO6Z2UEMT3S",
            "Arn": "arn:aws:iam::359268167005:role/service-role/AmazonSageMaker-ExecutionRole-20200418T095558",
            "CreateDate": "2020-04-18T08:55:22+00:00",
            "AssumeRolePolicyDocument": {
                "Version": "2012-10-17",
                "Statement": [
                    {
                        "Effect": "Allow",
                        "Principal": {
                            "Service": "sagemaker.amazonaws.com"
                        },
                        "Action": "sts:AssumeRole"
                    }
                ]
            },
            "Description": "SageMaker execution role created from the SageMaker AWS Management Console.",
            "MaxSessionDuration": 3600
        },
        {
            "Path": "/",
            "RoleName": "aws-ec2-spot-fleet-tagging-role",
            "RoleId": "AROAVHJQNFVOT5YPGN375",
            "Arn": "arn:aws:iam::359268167005:role/aws-ec2-spot-fleet-tagging-role",
            "CreateDate": "2020-03-27T11:25:51+00:00",
            "AssumeRolePolicyDocument": {
                "Version": "2012-10-17",
                "Statement": [
                    {
                        "Sid": "",
                        "Effect": "Allow",
                        "Principal": {
                            "Service": "spotfleet.amazonaws.com"
                        },
                        "Action": "sts:AssumeRole"
                    }
                ]
            },
            "MaxSessionDuration": 3600
        },
        {
            "Path": "/",
            "RoleName": "aws-elasticbeanstalk-ec2-role",
            "RoleId": "AROAIIYIR4HGHL56ZWIFU",
            "Arn": "arn:aws:iam::359268167005:role/aws-elasticbeanstalk-ec2-role",
            "CreateDate": "2017-06-16T11:37:30+00:00",
            "AssumeRolePolicyDocument": {
                "Version": "2008-10-17",
                "Statement": [
                    {
                        "Effect": "Allow",
                        "Principal": {
                            "Service": "ec2.amazonaws.com"
                        },
                        "Action": "sts:AssumeRole"
                    }
                ]
            },
            "MaxSessionDuration": 3600
        },
 }

aws iam list-users
{
    "Users": [
        {
            "Path": "/",
            "UserName": "philanderson888-iam-user-02",
            "UserId": "AIDAVHJQNFVO567LJWFGX",
            "Arn": "arn:aws:iam::359268167005:user/philanderson888-iam-user-02",
            "CreateDate": "2023-12-31T11:32:52+00:00",
            "PasswordLastUsed": "2023-12-31T19:31:24+00:00"
        }
    ]
}

aws iam list-user-policies --user-name philanderson888-iam-user-02
{
    "PolicyNames": []
}
```


## ec2

## ec2 security groups

```
aws ec2 describe-security-groups
{
    "SecurityGroups": [
        {
            "Description": "NGINX Plus with NGINX App Protect Developer - Amazon Linux 2-v1.7-AutogenByAWSMP--1 created 2023-12-29T18:39:31.440Z",
            "GroupName": "NGINX Plus with NGINX App Protect Developer - Amazon Linux 2-v1.7-AutogenByAWSMP--1",
            "IpPermissions": [
                {
                    "FromPort": 80,
                    "IpProtocol": "tcp",
                    "IpRanges": [
                        {
                            "CidrIp": "0.0.0.0/0"
                        }
                    ],
                    "Ipv6Ranges": [],
                    "PrefixListIds": [],
                    "ToPort": 80,
                    "UserIdGroupPairs": []
                },

aws ec2 describe-subnets   
{
    "Subnets": [
        {
            "AvailabilityZone": "us-east-1d",
            "AvailabilityZoneId": "use1-az2",
            "AvailableIpAddressCount": 4091,
            "CidrBlock": "172.31.32.0/20",
            "DefaultForAz": true,
            "MapPublicIpOnLaunch": true,
            "MapCustomerOwnedIpOnLaunch": false,
            "State": "available",
            "SubnetId": "subnet-34470f1c",
            "VpcId": "vpc-b3c037d6",
            "OwnerId": "359268167005",
            "AssignIpv6AddressOnCreation": false,
            "Ipv6CidrBlockAssociationSet": [],
            "SubnetArn": "arn:aws:ec2:us-east-1:359268167005:subnet/subnet-34470f1c",
            "EnableDns64": false,
            "Ipv6Native": false,
            "PrivateDnsNameOptionsOnLaunch": {
                "HostnameType": "ip-name",
                "EnableResourceNameDnsARecord": false,
                "EnableResourceNameDnsAAAARecord": false
            }
        },

```


## ec2 run instances

```bash
aws ec2 run-instances --image-id ami-xxxxxxxx --count 1 --instance-type t2.micro --key-name MyKeyPair --security-group-ids sg-903004f8 --subnet-id subnet-6e7f829e
```

```bash
aws ec2 run-instances --image-id ami-032efa6ea01a2eaf7 --count 1 --instance-type t2.micro --key-name alpine --security-group-ids sg-05cf4c88da30ba1a2 --subnet-id subnet-34470f1c
```

```json
aws ec2 run-instances --image-id ami-032efa6ea01a2eaf7 --count 1 --instance-type t2.micro --key-name alpine --security-group-ids sg-05cf4c88da30ba1a2 --subnet-id subnet-34470f1c
{
    "Groups": [],
    "Instances": [
        {
            "AmiLaunchIndex": 0,
            "ImageId": "ami-032efa6ea01a2eaf7",
            "InstanceId": "i-0f19f9787caa068f7",
            "InstanceType": "t2.micro",
            "KeyName": "alpine",
            "LaunchTime": "2023-12-31T22:36:07+00:00",
            "Monitoring": {
                "State": "disabled"
            },
            "Placement": {
                "AvailabilityZone": "us-east-1d",
                "GroupName": "",
                "Tenancy": "default"
            },
            "PrivateDnsName": "ip-172-31-45-246.ec2.internal",
            "PrivateIpAddress": "172.31.45.246",
            "ProductCodes": [],
            "PublicDnsName": "",
            "State": {
                "Code": 0,
                "Name": "pending"
            },
            "StateTransitionReason": "",
            "SubnetId": "subnet-34470f1c",
            "VpcId": "vpc-b3c037d6",
            "Architecture": "x86_64",
            "BlockDeviceMappings": [],
            "ClientToken": "76c18864-e483-4617-9dff-7f578617cdbb",
            "EbsOptimized": false,
            "EnaSupport": true,
            "Hypervisor": "xen",
            "NetworkInterfaces": [
                {
                    "Attachment": {
                        "AttachTime": "2023-12-31T22:36:07+00:00",
                        "AttachmentId": "eni-attach-05846124d6c4d38f4",
                        "DeleteOnTermination": true,
                        "DeviceIndex": 0,
                        "Status": "attaching",
                        "NetworkCardIndex": 0
                    },
                    "Description": "",
                    "Groups": [
                        {
                            "GroupName": "NGINX Plus with NGINX App Protect Developer - Amazon Linux 2-v1.7-AutogenByAWSMP--1",
                            "GroupId": "sg-05cf4c88da30ba1a2"
                        }
                    ],
                    "Ipv6Addresses": [],
                    "MacAddress": "12:1f:23:78:f2:a1",
                    "NetworkInterfaceId": "eni-0a99433a36994d695",
                    "OwnerId": "359268167005",
                    "PrivateDnsName": "ip-172-31-45-246.ec2.internal",
                    "PrivateIpAddress": "172.31.45.246",
                    "PrivateIpAddresses": [
                        {
                            "Primary": true,
                            "PrivateDnsName": "ip-172-31-45-246.ec2.internal",
                            "PrivateIpAddress": "172.31.45.246"
                        }
                    ],
                    "SourceDestCheck": true,
                    "Status": "in-use",
                    "SubnetId": "subnet-34470f1c",
                    "VpcId": "vpc-b3c037d6",
                    "InterfaceType": "interface"
                }
            ],
            "RootDeviceName": "/dev/xvda",
            "RootDeviceType": "ebs",
            "SecurityGroups": [
                {
                    "GroupName": "NGINX Plus with NGINX App Protect Developer - Amazon Linux 2-v1.7-AutogenByAWSMP--1",
                    "GroupId": "sg-05cf4c88da30ba1a2"
                }
            ],
            "SourceDestCheck": true,
            "StateReason": {
                "Code": "pending",
                "Message": "pending"
            },
            "VirtualizationType": "hvm",
            "CpuOptions": {
                "CoreCount": 1,
                "ThreadsPerCore": 1
            },
            "CapacityReservationSpecification": {
                "CapacityReservationPreference": "open"
            },
            "MetadataOptions": {
                "State": "pending",
                "HttpTokens": "optional",
                "HttpPutResponseHopLimit": 1,
                "HttpEndpoint": "enabled",
                "HttpProtocolIpv6": "disabled",
                "InstanceMetadataTags": "disabled"
            },
            "EnclaveOptions": {
                "Enabled": false
            },
            "PrivateDnsNameOptions": {
                "HostnameType": "ip-name",
                "EnableResourceNameDnsARecord": false,
                "EnableResourceNameDnsAAAARecord": false
            },
            "MaintenanceOptions": {
                "AutoRecovery": "default"
            },
            "CurrentInstanceBootMode": "legacy-bios"
        }
    ],
    "OwnerId": "359268167005",
    "ReservationId": "r-062f77bf5371e93e9"
}
```

... and indeed it did launch an ec2 instance because I can now view it in the console

```
Instance summary for i-0f19f9787caa068f7 
```


```bash
aws ec2 describe-instances
```

or a short version

```bash
aws ec2 describe-instances --filters "Name=instance-type,Values=t2.micro" --query "Reservations[].Instances[].InstanceId"
[
    "i-0f19f9787caa068f7"
]
```

```bash
aws ec2 create-tags --resources i-0f19f9787caa068f7 --tags Key=Name,Value=MyInstance
```

then 

```bash
aws ec2 describe-tags 
{
    "Tags": [
        {
            "Key": "Name",
            "ResourceId": "i-0f19f9787caa068f7",
            "ResourceType": "instance",
            "Value": "MyInstance"
        }
    ]
}
```

list machine by tag

```bash
aws ec2 describe-instances --filters "Name=tag:Name,Values=MyInstance"
# or to get brief response
aws ec2 describe-instances --filters "Name=tag:Name,Values=MyInstance" --query "Reservations[].Instances[].InstanceId"
```

## terminate ec2 instance

```bash
aws ec2 terminate-instances --instance-ids i-0f19f9787caa068f7
```

## connect to your ec2 instance

https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/connect-to-linux-instance.html

