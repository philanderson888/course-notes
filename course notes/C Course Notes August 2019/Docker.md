# Docker

# Docker Setup

1. Computer Management => Groups => Docker Users => Add EVERYONE and log off and log on
2. Run Docker Desktop
OK ==> Icon should say Docker is running
OK ==> Powershell => Docker

Docker can run 'containers' which are mini virtual machines.

    Virtual Machine ==> 10GB ==> has 'kernel' which is very large
    
    Container ==> 2GB max, often much less.

Goal
1) Pull container from internet containing SQL server
2) Connect to it and run SQL Server
3) Talk to Northwind database on that server

Commands

    # get image
    docker pull kcornwall/sqlnorthwind
    # run image
    docker run -d --name sql -p 1433:1433 kcornwall/sqlnorthwind
    # list running images
    docker ps
    # list all images
    docker ps -a
    # start /stop
    docker start sql
    docker stop sql

Connect to Docker container
1) Lightweight : Azure Data Studio 45MB
2) Heavier duty : SQL Server Management Studio

Connection Details
Server	localhost, 1433
Authentication SQL Server
User ....
Password ....