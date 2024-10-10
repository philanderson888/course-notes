# Controls

## Contents

- [Controls](#controls)
  - [Contents](#contents)
  - [Introduction](#introduction)
  - [Controls By Function](#controls-by-function)
  - [NIST](#nist)
  - [CSA+ Control Classes](#csa-control-classes)
  - [CIS](#cis)
  - [Control Types](#control-types)
    - [Technical Control](#technical-control)
    - [Management Control](#management-control)
    - [Operational Control](#operational-control)
  - [Control Standards](#control-standards)
  - [Control Classifications](#control-classifications)
    - [Preventive Controls](#preventive-controls)
    - [Detective Controls \*\* AFTER THE EVENT \*\*](#detective-controls--after-the-event-)
    - [Corrective Controls](#corrective-controls)
    - [Deterrent](#deterrent)
    - [Compensating Control](#compensating-control)
  - [Controls](#controls-1)
    - [Physical Control](#physical-control)
    - [Logical Control](#logical-control)
    - [Access Controls](#access-controls)
    - [Compensating control](#compensating-control-1)
    - [CSA+ categories](#csa-categories)
    - [Control Classes](#control-classes)
  - [NIST 5 Core Functions](#nist-5-core-functions)
  - [Mangement Controls](#mangement-controls)
  - [Technical Controls](#technical-controls)
  - [Extra](#extra)

## Introduction

This section deals with the different classes of control

## Controls By Function

- Prevent
- Deter
- Detect
- Correct during
- Compensate - can use instead of recommended control 

## NIST

National Institute for Standards and Tech

- CSD Computer Security Division
- FIPS Federal Information Processing Standards
  - FIPS 200
- NIST 800-53 baseline security standards

NIST Control Families
- Access
- Audit
- Response
- Risk

NIST Control Classes
- Technical
  - Firewall
  - AV
  - ACL
  - Auditing
- Operational 
  - Training
  - Security Guards
  - Configuration
  - Contingency Planning
  - Response Planning
  - Maintenance
  - Physical Controls
  - Media Controls
- Management
  - Planning
  - Risk Assessment
  - Authorisation

## CSA+ Control Classes

- Physical (alarm, lock, fence,CCTV, mantrap, guard, badge)
- Logical
  - software
  - OS
  - app
  - AV
  - ACL
  - IDS
  - password
  - biometric, smartcard, encryption, backup
- Admin 
  - Policy
  - Procedure

CSA+ Controls
- Operational
  - Policy
  - AUP
  - Clean Desk
  - Disaster Recovery
  - Business Continuity
  - Procedures
- Technical
    - Permissions
- Physical




##  CIS 

Center For Internet Security

  - Publishes 20 categories of security controls
  - CIS controls
    - Hardware assets, Software assets, Vulnerabilities, Admin Privileges, Secure Config on Client/Servers, Log monitoring, Email, Browser, Malware, Network ports & protocols, Data recovery, Firewall/Router/Switch config, Boundary Defence, Training, App security, Incident Response, Pen Tests


## Control Types

### Technical Control

    Using technology eg 

        Firewall : block IP traffic

        IDS Intrusion Detection  : Alert eg email

            NIDS Network Intrusion (for whole network)
            HIDS Host based intrusion (for one server)    

        IPS Intrusion Prevention : Take action eg
            Temporarily stop traffic getting into 
            network

            NIPS    : whole network 
            HIPS    : one HOST (SERVER)

        Encryption

        Antivirus

        Motion detection camera

### Management Control

    Create POLICIES 

        AUP Acceptable Use
        Password policy
        Lockout policy
        Disaster recovery policy
        Data protection policy
        ...

    Auditing : CHECK IF POLICIES BEING USED!!!

        Policy Enforcement : ensure people DOING WHAT
            POLICY ASKS

    Risk : 
        1) Risk Assessment
        2) Monetarise (calculate how much money to 
                spend on reducing risk)
        3) Mitigate : take action : reduce risk

    Vulnerability Assessment

        Pay 'Ethical Hacker' (White Hat Hacker) to 
        scan your systems for weaknesses
            
            FIREWALL
                OPEN PORTS
                ACL : ACCESS RULES / LISTS
            PHYSICAL : DOORS, CAMERAS, ETC...
            SOFTWARE : HACKABLE
            RUNNING SERVICES : UNNECESSARY (TURN OFF)

    Penetration Testing

        Pay 'Ethical Hacker' to ACTUALLY TRY AND HACK
        IN TO YOUR SYSTEM

            ==> Hacker, if break in, would prove 
            the 'exploit to a point 

        ACTUALLY BREAK IN TO YOUR SYSTEM

### Operational Control

    Day-to-day implementation of policies etc advised
        by management

    Clean desk policy : no passwords or data visible overnight

    Change Management

        Authorised, approved changes

        1. Cost analysis
        2. Risk analysis => can anything go wrong?
        3. Backup??? ==> Roll back if necessary
        4. Approval and sign off
        
    Configuration Management

        Ensuring if our machine fails eg server, router,
        switch ==> we have good mechanism for restoring
        all correct settings (configuration)

        Mistake ==> restore to correct also



## Control Standards

NIST National Institute for Standards And Technology

    SP800 standards for 'controls'

## Control Classifications

### Preventive Controls

    STOP ATTACK!!

    Harden (Strengthen) A Server

        Security BASELINE ==> set configuration to 
        'lock down' server so it's not vulernable to 
        attack
        
            FIREWALL
            GROUP POLICY
            SERVICES RUNNING : REMOVE UNECESSARY
            APPLICATIONS / ROLES : REMOVE
            FILES : REMOVE IF CAN
            
    Training

    Guards

    Disabling Unused Accounts 

        RISK IF DELETE OUTRIGHT ==> LOSE DATA!!! CARE!!

        BETTER TO DISABLE ACCOUNT FIRST FOR AGREED 
            PERIOD OF TIME

        
### Detective Controls ** AFTER THE EVENT **

    Logs
        Firewall Log        

        Event Viewer

            Windows system log

            3 main logs
            
                1. System : OS main log
                2. Security : login etc 
                    Success = good login
                    Failure (lots of them)
                    indicate hacker activity

        Trends

            BASELINE = GRAPH OF EXPECTED ACTIVITY

                Task Manager
                Resource Monitor  (RESMON)
                Performance Monitor : baseline
                        (PERFMON)
    
    Audit : detect AFTER if attack took place

    Video : detect AFTER if something happened

### Corrective Controls

    IPS Intrusion Prevention (active control)
        TAKE ACTION EG PUT ATTACKER MACHINE ON 
            SEPARATE NETWORK (USE DHCP)

    Backup : can restore if attacked

### Deterrent

    Warning signs eg Building, at Logon

    Video cameras

    etc

    Just a clear sign to enemy : don't attack

### Compensating Control

    If primary mechanism not working, then do x instead

    eg Smart cards not working ==> instead get ONE TIME 
            PASSWORD TO LOG IN


## Controls

### Physical Control

- Cipher Lock on door = KEYPAD
- Proximity Card 
- Tailgating : following someone through secure door
- Mantrap : force people one by one 

### Logical Control

- admin
- computer

- Least privilege : min access to do your job
- Group Policy
    Mechanism for CENTRALLY MANAGING
        USERS, GROUPS, COMPUTERS, PRINTERS
        and all settings eg centrally applied 
        password settings for our 'domain'

    
    Domain ==> Server Manager / Admin Tools

        Default Domain Policy ==> ENTIRE COMPANY

            <<RIGHT CLICK, EDIT>>

    ONE PC ==> GPEDIT.MSC

    GPO = FILE WITH GROUP POLICY SETTINGS IN IT

- Generic Accounts
    guest account is built in to Windows! DISABLE IT!!
- Time-of-day restrictions 

### Access Controls

- Role Based Access
    Permissions AUTO SET according to your job role
        Move jobs ==> remove from old role, add to new
                 permissions are set
    Groups     
- Rule Based Access
    Cuts through permissions
    Restricting access to all based on different criteria
        eg Downtime during night == > no user can log
        on midnight to 4am  RULE!!
    Firewall : IP TRAFFIC BLOCKED EG PORT 21 FTP BLOCKED
- Discretionary Access  DACL
    Discretion ==> permission to choose
    DACL : local admin has full rights to set permissions
        on folders as see fit to do.

        NTFS PERMISSIONS

            FULL CONTROL    Set permission    
            MODIFY        change/delete file
            READ
            EXECUTE        run .exe / msi installer
            WRITE        create NEW
            LIST FOLDERS    traverse folder path

        SID = security ID  

        RID = relative ID (domain)

        GUID = domain ID  

-  MAC Mandatory Access Control
    
    Government Classified Documents
        Top secret, secret, restricted, 
            confidential, unclassified

    ** MANDATORY = FIXED (Locally you have no control,
                fixed by government)

                ((Linux SELinux))

### Compensating control

Compensating control - in place in case the primary control fails

eg data backup
eg putting a system offline

Also compensating control can be implemented if the preferred solution is not implemented



### CSA+ categories

- Physical controls eg alarm, gateway, locks, fence, guard, CCTV, badge
- Logical controls eg OS, apps, ACL, IDS, passwords, biometrics, smartcards, encryption, backups
- Admin controls eg policy, procedure, admin, separation of duties, job rotation, disaster plan, security awareness training
- Detective controls alert if issue eg monitoring, job rotation, IDS, audit, guard, CCTV
- Recovery controls return to normal function eg DRP Disaster recovery plan, data backup, alternate sites
- Preventative controls prevent issues from happening eg Security awareness training, separation of duties, biometrics, encryption, mantrap, badge, guard

### Control Classes

- Prevent
- Deter
- Detect
- Corrective : detect and act
  - Change control 
- Compensating : restore backup or alternative site

## NIST 5 Core Functions

- Identify
                      Risk Assess
                      Asset Manage
                      Govern
                      Business Environment
                      Risk Management Strategy
    
- Protect
- Detect
- Respond
- Recover


## Mangement Controls
- User Training
- Policies and Procedures
  - IRP Incident Response Policy
- Auditing
- Log management



## Technical Controls
- Sofware updating
  - OS
  - AV
  - Apps
  - Libraries



## Extra

CoA = Courses of Action = Matrix of Action

FIPS 199 Impact Analysis = High/Med/Low
