# aws cli

## contents

- [aws cli](#aws-cli)
  - [contents](#contents)
  - [introduction](#introduction)
  - [aws cli](#aws-cli-1)
  - [iam user](#iam-user)
  - [config](#config)

## introduction

obviously it's great to be able to create aws ec machines in the cloud but i want also to create and manage them from the console to enable a much higher degree of scripting

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
[profile dev]
sso_session = my-sso
sso_account_id = 111122223333
sso_role_name = SampleRole

[sso-session my-sso]
sso_region = us-east-1
sso_start_url = https://my-sso-portal.awsapps.com/start
```



