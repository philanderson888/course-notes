# Controls

## Contents

- [Controls](#controls)
  - [Contents](#contents)
  - [Introduction](#introduction)
      - [NIST](#nist)
  - [Control Standards](#control-standards)
  - [Control Classifications](#control-classifications)
  - [Physical Control](#physical-control)
  - [Logical Control](#logical-control)
  - [Access Controls](#access-controls)
  - [Compensating control](#compensating-control)

## Introduction

This section deals with the different classes of control

#### NIST

NIST National Institute for Standards and Tech
NIST CSD Computer Security Division
NIST FIPS Federal Information Processing Standards

NIST FIPS 200

NIST 800-53 baseline security standards

NIST control family - Access, Audit, Response, Risk

NIST classes are 
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

CSA+ Controls - Physical (alarm, lock, fence,CCTV, mantrap, guard, badge), Logical, Admin 
CSA+ Logical Control = software - OS, app, AV, ACL, IDS, password, biometric, smartcard, encryption, backup
CSA+ Admin - Policy, Procedure

CSA+ Controls
  Operational
    Policy
      AUP
      Clean Desk
      Disaster Recovery
      Business Continuity
    Procedures
  Technical
    Permissions
  Physical


Function : prevent, deter, detect, correct(during), compensate(after)
- Compensating Control - use when primary control fails.  EG encryption, separation of duties, user training
- Corrective Control - takes action to reduce effect of an attack (during)

CoA = Courses of Action = Matrix of Action

FIPS 199 Impact Analysis = High/Med/Low





Technical Control

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

Management Control

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

Operational Control

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

Preventive Controls

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

        
Detective Controls ** AFTER THE EVENT **

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

Corrective Controls

    IPS Intrusion Prevention (active control)
        TAKE ACTION EG PUT ATTACKER MACHINE ON 
            SEPARATE NETWORK (USE DHCP)

    Backup : can restore if attacked

Deterrent

    Warning signs eg Building, at Logon

    Video cameras

    etc

    Just a clear sign to enemy : don't attack

Compensating Control

    If primary mechanism not working, then do x instead

    eg Smart cards not working ==> instead get ONE TIME 
            PASSWORD TO LOG IN

## Physical Control

- Cipher Lock on door = KEYPAD
- Proximity Card 
- Tailgating : following someone through secure door
- Mantrap : force people one by one 

## Logical Control

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

## Access Controls

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

## Compensating control

Compensating control - in place in case the primary control fails

eg data backup
eg putting a system offline

Also compensating control can be implemented if the preferred solution is not implemented