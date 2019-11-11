Azure

See my webpage also
 
Orchestrator     https://technet.microsoft.com/en-us/library/hh237242(v=sc.12).aspx
Azure Pack (not Azure)
ShadowIT
Logic App
ExpressRoute DEDICATED MPLS LINE
Pass-Through Authentication = SSO
Invitation Manager API : invite users from 3rd party
B2C has facebook login
SCCM : Deploy applications, licensing, inventory OS and apps
SCOM : Operations
Orchestrator RUNBOOK AUTOMATION
Data Protection Manager : Backup Recovery
OMS Operations Management Suite - monitor cloud VM
OMS : Logging, Runbook, Backup, Recovery
sentiment analysis
cognitive services
myapps.microsoft.com ==> log in as regular user
Azure Enterprise Applications
Fault Domain
Update Domain
VM Scale Set : automate the amount of resources running
OMS Operations Manager
Makecert.exe
redeploy : last resort : RESET
Automation : like orchestrator
webhook
Azure scheduler
Target VM by a) Resource Group b) Tag Name/Value pair 
Network Watcher tool
Corey Sanders Channel 9
QnAMaker.ai
ShadowIT
DevTest Labs
Runbook https://docs.microsoft.com/en-us/azure/automation/automation-starting-a-runbook
NT Executive Services    https://www.microsoft.com/resources/documentation/windowsnt/4/workstation/reskit/en-us/images/sysarchc.gif
appv : virtualise App
medv : virtualise OS
VMM overall manage many virtual machines
VMM Policies : restrict which type of machines can be created by various groups
Azure ARM 
Azure Role based access control : lock down by resource group and also tagging to control costs 
ASM AZURE SERVICE MANAGER : OLD PORTAL  : manage.windowsazure.com  ==> CLASSIC PORTAL
ARM AZURE RESOURCE MANAGER : NEW PORTAL : USE JSON TO BUNDLE AND MANAGE RESOURCES
Marketplace : https://azuremarketplace.microsoft.com/en-us
Github https://github.com/Azure/azure-quickstart-templates
Migration Strategy
PAAS IS FUTURE OF CLOUD
VM SCALE SET : 
Advanced Firewall : Barracuda / Checkpoint
RemoteApp HAS NOW GONE : USE CITRIX INSTEAD
Machine Learning
Web Farm
VIP Virtual IP : OLD
PIP Private IP : OLD
Instance IP : OLD
ARM : Virtual Machine must go on virtual network
Privileged Identity Management : force elevation of privileges and work as a regular user but only elevate when required
AZURE AD CODE https://docs.microsoft.com/en-us/azure/active-directory/develop/active-directory-code-samples
UPTIME 99.9 PERCENT IS NOW AZURE SLA



Storage : Managed disks
 
  Can now SNAPSHOT VM and REVERT
 
 
System Center : 2007
 
 
System Center 
  Configuration Manager
         Deploy Apps
         License Apps
         Inventory Hardware OS and Apps
  Operations Manager
         Monitor systems
         Monitor applications
  Orchestrator
         Runbooks
                 Automate manual processes
  Data Protection Manager
         Backup
         Recovery
 
Azure OMS has an equivalent project
 
         OMS Operations Management Suite
  
         https://docs.microsoft.com/en-us/azure/operations-management-suite/operations-management-suite-overview
 
         Monitor cloud 
         Monitor local machines (have to install a client)
 
         OMS Core Features
 
                 LOGGING
                 AUTOMATION
                 BACKUP
                 RECOVERY
 
 
 
 
 
 
Azure shift + question mark => shortcuts
  https://docs.microsoft.com/en-us/azure/azure-portal/azure-portal-keyboard-shortcuts
 
 
 
 
 
 
Azure marketplace store
  azuremarketplace.microsoft.com 
 
 
 
 
 
https://github.com/azure/
 
 
Networking

Express Route

         
  ExpressRoute : like a LEASED LINE : pay for a dedicated line NOT OVER PUBLIC INTERNET : see MPLS
 
  https://azure.microsoft.com/en-gb/services/expressroute/
  Useful for periodic fast transfer of large amounts of data
 
VPN

 
 
  1) Virtual Network
  
         192.168.10.0/24
         
         
                with a /24 for production
                    
                    
  2) Create gateway              
  
         VPN
         
         Route based
         
         192.168.10.128/28
                  
                 connect to VNET Gateway
                 
                                point-TO-SITE vpn
                                
                                
                                GENERATE CERTIFICATE PAIR : ROOT CERTIFICATE + CLIENT CERTIFICATE TO UPLOAD
                                
                                
                                        CERTIFICATE CAN GO INTO USER STORE
                                        
                                
                                DOWNLOAD SCRIPT.  IT WILL RUN MAKECERT.
                                
                                MAKECERT HAS TO GO INTO SYSTEM32
                                
                                NOW CAN DOWNLOAD VPN CLIENT.
                                
                                        INSTALL VPN CLIENT
                                        
                                GET IP ADDRESS FROM POINT-TO-SITE POOL
                                
                                now on client
  
                                        connect from client
                                        
                                               validates
                                               
                                               DO IPCONFIG ==> GET A SECOND IP ADDRESS
                                               
                                               NOW CAN DO VPN TO GATEWAY AND THEN DO RDP TO EACH PRIVATE
                                                                      SERVER IP
                                                                      
                 NOW BUILD VM 
                         
                         COMPUTE + NIC + DISK (MANAGED)
                         
                         BUILD 2
                         
                         CLOUDANDPROUD
                                manageddiskvm.ps1 => build virtual machine from scratch
                                
                                northwind => build company from scratch
                                
                         azuredeploy
                         
                         Managed Disks ==> CAN SNAPSHOT IT AND ROLL BACK
                         
                         
                         
                         
                         
                         AVAILABILITY SET ==> GET TWO OR MORE MACHINES
                         
                         
                                IT PACK IS A SHIPPING CONTAINER
                                
                                FAULT AND UPDATE DOMAIN EG UPS, CONNECTIVITY, PATCH MANAGEMENT
                                
                                
                                THIS IS FIXED AT CREATION TIME !!!!
                                
                                
                                
                                        
                         VM SCALE SET
                                
                                USE THIS INSTEAD
                                
                                THIS IS NOT CLUSTERING
                                
                                
 
 
 
 
 
                                
                                
                                
                         BOOT DIAGNOSTICS
                                
                                
                                
                         VM : CAPTURE
                         
                         
                         
                         
                         
  1) CREATE VPN TO GATEWAY
  
  2) VPN TO GATEWAY
  
  3) RDP TO VM USING PRIVATE IP OF SERVER NOW
  
  
  
  
Peering

  
 
 
 
  Network Peering
  
         Joining Virtual Networks
  
         Can connect two VNets in the same region and after that they appear as one VNET
         https://docs.microsoft.com/en-us/azure/virtual-network/virtual-network-peering-overview
 





SCCM
 
  System Center
         https://www.microsoft.com/en-gb/cloud-platform/system-center
  SCCM
  Orchestrator
         https://technet.microsoft.com/en-us/library/hh420344(v=sc.12).aspx
         Automate CREATION, MONITOR, DEPLOY resources
  SCOM Operations Manager
         Rich Analytics
 
 
         
         
         
 

  
Monitor And Advise
 
  AZURE ADVISOR
  
         https://azure.microsoft.com/en-us/services/advisor/
  
 
  
         
  WEB MONITOR / APP SERVICE : OVERVIEW OF YOUR WEB AND NETWORK
         
         Monitors
                 QUOTA
                 METRICS
         Create
                 ALERTS
                 SCALING
         Applies To
                 Web Apps
                 API Apps
                 Mobile Apps
         
         Quotas
                 Limits on resources an app or service can use
                 CPU/RAM/Bandwidth(data in 24 hours)/FileSystem(storage)
         
         https://docs.microsoft.com/en-us/azure/app-service-web/web-sites-monitor
         
                         
 
                 
                 
                 
  Application Insights
 
         Install AGENT INSIDE YOUR APPLICATION!!! This feeds back     
                 https://docs.microsoft.com/en-us/azure/application-insights/app-insights-monitor-web-app-availability
                 https://docs.microsoft.com/en-us/azure/application-insights/app-insights-overview
 
 
  
  
PowerBI

 
         INJECT DATASET INTO POWERBI
  
                 CREATE REPORT AND DASHBOARD OF THE ADVENTUREWORKS DATABASE
         
         CAN EMBED DATA BACK INTO WEBSITE
         
         ALSO CAN ASK NATURAL LANGUAGE QUESTIONS
         
         
 
 
 
  
Sandbox

 
 
DEV TEST SANDBOX
 
         COSTS
         POLICIES
                 RESTRICT SIZE OF VM
  
  
         CAN ROUTE BETWEEN VIRTUAL NETWORK AND SANDBOX NETWORK
         
         
                                
         CREATE A BASE
         
                                
                                
         ADD CONFIGURATION AND POLICIES
         
                 USER PASSWORD ==> SAVE IN SECRET STORE
                                
         ARTIFACTS EG CHROME
 
 
 
 
 
         BUILD A STANDARD SANDBOX SERVER : FROM THERE WE CAN NOW USE THIS AS A TEMPLATE
                 AND CREATE A NEW SERVER JUST BY USING THE NEW NAME ONLY
                 
                 
                 
         create custom image ==> will now sysprep the machine
         
                 ADD ==> MARKETPLACE IMAGE + NOW HAVE THE SYSPREPPED IMAGE
                 
                 
                 
                 
                 
                 
         
         
         ADD BACKUP AND SITE RECOVERY => CREATE
         
         
         
         
                 ASR AZURE SITE RECOVERY
                 
                         NEW POLICY : BACKUP FREQUENCY
                         
                         CAN USE MIGRATION TOOL
 
 
 
 
  
 
  
Automation

 
 
 
  AUTOMATION SCRIPT
         
         BUILD USING JSON SCRIPT
         
                 https://azure.microsoft.com/en-gb/documentation/scripts/
  
  
  
  RUNBOOK
  
         Check - 3rd Party Runbook ==> or is there another way???
 
 
 
  Build new automation account
 
         = graphical orchestrator
 
         
         
         
         
  DSC ADD CONFIGURATION : POINT TO SCRIPT
 
         DESIRED STATE CONFIGURATION SCRIPT
 
 
  
  
  
Backup And Recovery

 
backup and site recovery
 
  can use this to do azure migrations!
 
  System Center Data Protection Manager or MARS
 
 
Cognitive Services

Sentiment Analysis

 
SENTIMENT ANALYSIS
 
  reasons.azurewebsites.net
 
  https://azure.microsoft.com/en-gb/services/cognitive-services/text-analytics/
 
  https://docs.microsoft.com/en-us/azure/machine-learning/machine-learning-apps-text-analytics
 
  get
 
         https://api.datamarket.azure.com/data.ashx/amla/text-analytics/v1/GetSentiment
 
         GET https://api.datamarket.azure.com/data.ashx/amla/text-analytics/v1/GetSentiment?Text=hello+world
 
 
         https://text-analytics-demo.azurewebsites.net/
 
 
 
         https://docs.microsoft.com/en-us/azure/stream-analytics/stream-analytics-twitter-sentiment-analysis-trends
 
 
 
 
 
  https://www.microsoft.com/cognitive-services
 
 
Business To Business

 
 
 
AzureAD : BUSINESS TO BUSINESS : LOCK DOWN WITH ROLE BASED CONTROL
  https://docs.microsoft.com/en-us/azure/active-directory/active-directory-b2b-what-is-azure-ad-b2b
  Grant access to 3rd party companies but still maintain security over what you want
 
         Add or invite users from another organisation on portal or Invitation Manager API
 
 
B2C Business to Consumer has facebook login
 
  https://azure.microsoft.com/en-gb/services/active-directory-b2c/
 
 
 
Business To Consumer

 
 
B2C Business to Consumer has facebook login
 
  https://azure.microsoft.com/en-gb/services/active-directory-b2c/
 
 
 
Data             SAAS
Access           SAAS
Applications     PAAS
Runtime          IAAS
OS               IAAS
VM               IAAS
Compute          On premises
Networking       On premises
Storage          On premises
 
Azure
1) BUILD
  VS
  POWERSHELL
  JSON
  COMMAND LINE VERSION 2
 
2) HYBRID
  SCCM
  AZURE STACK = LOCAL 
 
 
 
 
 
Automation Script : in VM : can build the whole VM deployment for me using JSON
 
AZURE ADVISOR : SAME AS MBSA
 
WEB MONITOR : OVERVIEW OF YOUR WEB AND NETWORK
 
 
 
 
 
BLOB
  PAGE
  BLOCK FOR FILES
  PEN
TABLES
QUEUES
 
 
 
 
 
NETWORK
MPLS
 
 
 
 
Passthru
ADFS
 
 
 
 
AzureAD : BUSINESS TO BUSINESS : LOCK DOWN WITH ROLE BASED CONTROL
 
 
B2C Business to Consumer has facebook login
 
 
 
OMS cloud monitoring : global view
 
Azure shift + question mark => shortcuts
 
Azure marketplace store
  azuremarketplace.microsoft.com 
         free trials
  
 
github.com/azure/azure-quickstart-template
  
         ==> DEPLOY TO AZURE
 
 
SENTIMENT ANALYSIS
 
  reasons.azurewebsites.net
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
Azure
  PAAS
         SOCIAL MEDIA
        


 
 
 
 
Authentication and Identity         
 
myapps.microsoft.com
 
 
  1) CREATE AZURE ACCOUNT then sign in to azure with that user
 
 
 
 
 
azure ad connect
 
 
cloudandproud.msft   is LOCAL AZURE DOMAIN NAME
 
 
 
 
intune
  SANDBOX OUR OWN APPS
 
 
 
Identity management
Privilege Identity Management
 
 
 
Azure Enterprise Applications
 
 
Resource Group
  Global Metadata
 
  HOLD DOWN G AND R
 
  MONITOR COSTS
 
 
 
 
Azure : never put static IP in azure virtual machine
  *****
 
 
Peerings bridges between two VNET (not subnet) - can join without a gateway
 
 
 
 
 
 
 
 
Virtual Network Gateway
  Create
  
 
 
 
ExpressRoute ==> type of gateway
 
 
 
 
IPAM SERVER
 
phil Pa$$ twice
 
 
 
 
 
 
Storage : Managed disks
 
  Can now SNAPSHOT VM and REVERT
 
 
 
Fault domain 
 
Update domain 
  
Availability Set : for SINGLE MACHINE SLA : 
 
VM Scale Set : automate the amount of resources running
 
 
 
 
 
 
 
 
 
Microsoft OMS Operations Mgt
 
 
 
 
 
 
MakeCert.exe  CREATE CERTIFICATES
 
 
 
 
 
 
 
 
REDEPLOY : IF MACHINE CRASHES - LAST RESORT
 
 
 
 
 
 
 
 
 
Automation
  Build new automation account
 
  = graphical orchestrator
 
  DSC ADD CONFIGURATION : POINT TO SCRIPT
 
         DESIRED STATE CONFIGURATION SCRIPT
 
                 *************
 
  Run Book 
 
 
 
 
 
https://github.com/Azure/azure-quickstart-templates
 
 
 
 
 
 
 
 
Security Center
  
 
 
Corey Sanders
 
  Channel 9 
 
Azure Friday
 
  
QNAMAKER.AI              
 
 
 
 
 
 
 
 
 
 
 
Front end power bi dashboard
 
PAAS
  sql server
         firewall
                 allow IP
 
 
 

 
 
devtest development environment
 
  DEVTESTLABS
 
         SANDBOX RESOURCES
 
 
 
 
 
 
 
  add vm
 
  formula eg add chrome to virtual machine
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
backup and site recovery
 
  can use this to do azure migrations!
 
  System Center Data Protection Manager or MARS
 
 
  
 
 
 
 
 
 
 
 
Unstructured Notes

 






CONFIGURE VM
 
  DSC DESIRED STATE CONFIGURATION
  
  DSC CONFIG => JSON FILE
  
         ADD CONFIGURATION : UPLOAD FILE : DSC CONFIG FROM SCRIPTS
         
                                               UPLOAD THEN COMPILE AND BUILD THE CONFIGURATION
                                               
                                               
 
  ADD AUTOMATION ACCOUNT
  
                 THIS IS A RUNBOOK SERVER
                 
                 
                                CHECK AZURE SAMPLES
                                
                                
                                ==> CHECK GALLERY OF MULTIPLE RUNBOOKS
                                
                                
                                
                                
                                
                                
         DSC NOTES => ADD VM  ==> REGISTER A VM ==> CREATE
                                
                                
                                
  
 
  
  
  
  
  
  
  
 
ASM = OLD PORTAL : AZURE SERVICE MANAGER
ARM = NEW PORTAL : AZURE RESOURCE MANAGER
 
 
Authentication
Identity
Compute
Networking
Security
Data
Continuity
Development
 
 
 
 
 
 
 
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
                         
                         
Use a SECOND WEBSITE and then find fastest instance
 
  CREATE A NEW APP SERVICE PLAN EG IN USA
  
  
  
  
  NOW we have two locations we add TRAFFIC MANAGER PROFILE
  
         can use any of the Web Published URLs including dev or prod
         
         Can base on PERFORMANCE
         
         
         
         THIS GIVES A NEW URL WHICH THEN CAN BE USED TO GIVE THE USER A NEW
                 URL AND IT WILL LINK TO THE FASTEST RESPONDING SERVICE
                 
         
         
         add in multiple endpoints
         
         
         
         
         
         
         
         
         
         
         
         
         
         