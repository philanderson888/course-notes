# CompTIA CyberSecurity+

Networking overview
     
     
     
    TCP provides guaranteed delivery
     
    UDP provides best effort delivery (as does IP by itself!)
     
    TCP handshake : 3 packets
     
    Ports
       
       445     SMB sharing
     
     
    NAT Network Address Translation : Private to Public IP
     
       Also called MASQUERADING as PRIVATE IPs ARE HIDDEN
     
     
     
     
     
    Firewall
     
       Egress = outbound
     
       Ingress = inbound
     
       Standard list filters on source IP ONLY.  
       Extended list filters on source, destination IP, and protocol
     
               Numbered list : give a number as the ID of the fireall set of rules
                      access-list 101 deny 1.2.3.4 ..
                      access-list 101 deny 5.6.7.8...
     
               Named list : give a name as the ID of the firewall set of rules
                      access-list extended myFirewallList
                              deny 1.2.3.4 ...
                              deny 5.6.7.8
       Firewall RULES are checked, in order, TOP TO BOTTOM, UNTIL A MATCH IS MADE.  LAST RULE IS NORMALLY DENY ANY ANY SO IF ANY PACKET DOES NOT MATCH A PREVIOUS RULE, IT IS IMPLICITLY DENIED.  ALSO, IF A PACKET DOES NOT MATCH ANY RULE AT ALL, IT WILL BE DISCARDED.  PACKET ONLY KEEPS GOING UNTIL IT MEETS THE FIRST RULE THAT IT MATCHES.
     
       Implicit Deny
       
               All firewall rules have an IMPLICIT DENY : IF A PACKET IS NOT MATCHED IT IS DENIED ANYWAY!!!
     
     
    VPN
     
       Tunnel Mode
       
       Transport Mode
       
       
     
       PPTP
       
       L2TP / IPSEC
       
               ESP Encrypt
               AH      Authenticate
               
               
               
               
               
               
               
               
               
               
               
               
    VLAN
       Layer 2 isolation (isolate based on MAC address)
       
       Can group VLANs and network them together by assigning a layer 3 IP, but actual isolation is done via layer 2 address
     
       PVLAN = Private VLAN = separate mini-VLAN within an existing VLAN
               PVLAN Port State
                      Promiscuous - can talk with all ports in this VLAN whether in a PVLAN or not
                      Isolated - talk with primary VLAN but no other secondary PVLANs nor within this PVLAN
                       Community - talk with primary VLAN and ports in same PVLAN
     
       VTP VLAN trunking protocol : join VLANS
     
       DTP Dynamic Trunking Protocol : negotiates trunking = join switches
       
     
    Subnets
     
       Layer 3 isolation (IP)
     
       
    DMZ 
       Layer 3 isolation (IP outside router, and traffic port (layer 4)
       
       
    Connectivity links : physical links
     
    dependency links : one node or part of the network depends on another
     
     
     
    Encryption
       
       
    Symmetric
     
       IV Initialization Vector = SALT
     
       AES = used for 
               WIFI 
               Data stored at rest eg on disk
     
     
    Asymmetric
     
       RSA
       Diffie-Hellman
       ECC
     
       1000 to 10000 times slower than symmetric 
     
     
    Hashing
     
    To verify the MD5 checksum using Linux follow these instructions:
     
    http://www.bodhilinux.com/ and download the ISO and the MD5 checksum file
     
    Windows
     
    Right click on the start button and choose Command Prompt (Windows 8/8.1/10)
    If you are using Windows 7 press the start button and search for the Command Prompt
    Navigate to the downloads folder by typing cd Downloads (i.e. you should be in c:\users\yourname\downloads). You could also type cd c:\users\yourname\downloads) 
    Type the following command:
     
    certutil -hashfile <filetocheck> MD5
     
    For example to test the Bodhi ISO image run the following command replacing the Bodhi filename with the name of the file you have downloaded:
     
    certutil -hashfile bodhi-4.1.0-64.iso MD5 
    Check that the value returned matches the value the MD5 file you downloaded from the Bodhi website
    If the values don't match then the file is not valid and you should download it again.. 
     
     
    Linux
     
    Open a terminal window by pressing ALT and T at the same time
    Type cd ~/Downloads
    Enter the following command
     
    md5sum <filetocheck> 
     
    To test the Bodhi ISO image run the following command:
     
    md5sum bodhi-4.1.0-64.iso 
    Run the following command to display the MD5 value of the Bodhi MD5 file downloaded previously:
     
    cat bodhi-4.1.0-64.iso.md5 
    The value displayed by the md5sum command should match the md5 in the file displayed using the cat command in step 4.
    If the values do not match there is a problem with the file and you should download it again.
     
     
     
       
       
       
     
    Course Summary
     
       
    Most of the tools talked about in this course are listed here in this link
     
    http://sectools.org
     
    Module 1 - Threat Management
     
       Cybersecurity Analyst
       
               Roles
               
               Responsibilities
               
               Frameworks
               
               Security Controls
               
               Risk Evaluation
               
               Penetration Testing
               
       Reconaissance Techniques
       
               Kill chain
               
               Open source intelligence
               
               Social engineer
               
               Topology discover
               
               Service Discover
               
               OS Fingerprinting
               
     
     
    Module 2 - Vulnerability Management
     
       Vulnerability Management  
     
       Asset Inventory
       
       Data classification
       
       Vulnerability Scan
       
       MSBA
       
       Vulnerability feed
       
       SCAP
       
       Exploit Framework
       
       SysInternals
       
       Enhanced Mitigation Experience Toolkit
       
       
    Logging
     
       Packet capture
       
       Monitoring
       
       Log review
       
       SIEM
       
       Point in time
       
     
     
    Incident Response
     
       Response Process
       
       Threat Classification
       
       Incident Severity and classification
       
       Types of data
       
    Forensic Tools
     
       Digital Forensics
       
       Documentation and forms
       
       Crime Scenes
       
       Forensics Kits
       
       Image Acquisition
       
       Password Cracking
       
       Analysis Utilities
       
       
       
    Incident Analysis and recovery
     
       Analysis framework
       
       Recovery framework
       
       Analyse host symptoms
       
       Analyse Data Exfiltration
       
       Analyse Application Symptoms
       
               Sysinternals
     
     
     
     
     
       Recovery Process : Recover From The Attack
       
               Containment
     
                      Segmentation : create network barriers eg move affected items 
                              to quarantine subnet
                      Removal : shut down after get volatile info off them
                      Isolation : from network - shut down ports etc
                      Reverse Engineering : detailed analysis of malware code
     
     
       
               Eradication
     
                      Sanitize
                              Clean disks eg Degauss Magnetic wipe 
                              Zeroing is NOT FOR SSD 
                              Special Commands - Erase SSD Drives (not magnetism)
                      Reconstruct / Reimage
                              Re-image with a new fresh image (with hash validation)
                      Secure Disposal
                              Shred if necessary
     
     
     
     
               Validate
     
     
     
               Corrective Actions
     
                      Change Control
                      Lessons Learned Report : enlarge our knowledge
                      Updates to IRP Incident Response Plan
     
               Incident Summary Reporting : Summarise what happened
                      When was detected?
                      Who detected?
                      Scope?
                      How contained?
                      How eradicated?
                      Recovery work?
                      Teams' Effectiveness (CIRT Computer Incident Response Team)
                      Team Improvement Required?
    
    
    
    Secure Network Design
     
       Segmentation
       
       Blackholes
       
       Sinkholes
       
       Honeypots
       
       System Hardening
       
       Group Policies
       
       MAC
       
       Endpoint Security
       
       
    Manage Identity and access
     
       NAC
       
       Identity Management
       
       Identity Security Issues
       
       Repositories
       
       context based authentication
       
       SSO 
       
       Federation
       
       Exploit identities
       
       Exploit browsers
       
       Exploit apps
       
       
    Security Frameworks
     
       Frameworks
       
       Compliance
       
       Security Architecture
       
       Procecures
       
       Compensating controls
       
       Verifications
       
       Quality control
       
       Security Policy
       
       Security Procedures
       
       People
       
       
     
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       Exam Links
     
     
    CSA Links
     
    Yes use this!!!
     
    http://www.getcertified4less.com/transcender-csa-practice-test.html
     
     
     
    https://slinthicum.edublogs.org/2017/03/18/time-to-tackle-comptias-csa-certification-cs0-001/
     
     
    https://www.gtslearning.com/product/comptia-csa-cs0-001-trainer-in-a-box/
     
     
    https://www.gtslearning.com/comptia-csa-cybersecurity-analyst-courseware-online-learning-and-practice-labs/
     
     
    http://www.measureup.com/CompTIA.aspx#cert-toolkits
     
    http://www.measureup.com/Search.aspx?k=cybersecurity
     
    Don't use this???
     
    http://blogs.getcertifiedgetahead.com/comptia-cybersecurity-analyst/
     
    http://gcgapremium.com/about/
     
    http://gcgapremium.com/pass-the-security-sy0-401-exam-the-first-time-you-take-it/
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
       
       
       
       
       
    Overview of book - goals
     
       Perform 'environmental reconnaisance' of target system
       
       Collect and analyse log data
       
       Mitigate threats
       
       Remediate identity, authentication, authorisation issues
       
       Identify source of attack
       
       Understand frameworks, policies, procedures
       
       
     
     
       
    Book topics
       Threat manage
       Vulnerability manage
       Incidents
       Architecture
       Tool Sets
       
       
     
     
     
     
    Related qualifications
       EC-Council : Certified Ethical Hacker CEH
       (ISC)squared - CISSP Certified Info Security Systems Professional 
       CASP CompTIA Advanced Security Practitioner
       SANS/GIAC
       ISACA - CISA/CISM Certified Info Systems Auditor/Manager  
       
       
     
     
     
       
    Threat Management
     
       Penetration Testing
       Rules of engagement
               Timing, scope, Authorisation, Exploitation, Communication, Reporting
               
       Training : Red/Blue/White team
       Risk Evaluation
               Technical, Operational, Impact (low/med/high)
       Framework
       Policies
       Controls (CSA+ categories)
               Physical
               Logical
               Admin
       Procedures
       
    Reconnaisance
       Topology discovery
       OS fingerprint
       Service discovery
       Email harvest
       Social media profile
       Social engineering
       DNS harvest
       Phishing
       Wireless
       Wired
       Virtual 
       Physical
       Internal
       External
       NMAP
       Host scanning
       Network mapping
       Netstat
       Tools
       
     
       
       
       
       
       
       
    Actual begin the book!!!
     
     
     
       Job roles
       Risk assessment
       Pen test best practice
       
    Roles
     
       report to CISO Chief Info Security Officer
       
       In charge of 
               firewalls
               IDS
       CSIRT Computer Security Incident Response Team
       Auditing       
               Processes (big picture)
               Procedures (specific set of steps)
       Due diligence (intensive research) on 3rd parties
       Employee training
       Risk assess
       vulnerability assess
       penetration test
       recommendations
       threat info up to date
       awareness
       advising legal/compliance/regulatory
       
       
    Framework
     
       Company policy
       Procedures
       Technologies
       
       Organisational Parameters
       
       Security control
       
               Make things secure
               
                      Give them      
                                     C
                                     I
                                     A
                                     and 
                                     non-repudiation
                                     
       NIST National Institue Standards Technology : provides GUIDANCE
                      (not best practice which is ITIL)
       
               => Computer Security Division
               
                      => FIPS Federal Info Processing Standards
                      
                              FIPS 200 : minimum standards for US government non-military computers
                              NIST 800-53 : setting baseline security standards
                              
                              18 families of control eg Access, Audit, Incident Response,
                                             Risk Assessment
                                             
                              also 
                              
                              Classes
                              
                                     Technical control eg firewall, av, OS ACL
                              
                                             Access, Audit, Authentication, Sys/Comms,
                                             
                              
                                     Operational - people - eg security guard, training
                                     
                                             Training, Config, Contingency, Response, Maintain,
                                             Media, Physical, System, Comms
                                             
                                             Also Policies and Procedures are operational controls
                                     
                                     Management
                                     
                                             Assess, Authorise, Plan, Risk Assess, Acquisition
                                             
                      
     
     
     
     
     
       CSA+ categories
       
               Physical controls eg alarm, gateway, locks, fence, guard, CCTV, badge
               
               Logical controls eg OS, apps, ACL, IDS, passwords, biometrics, smartcards
                      encryption, backups
     
               Admin controls
                      admin 
                      personnel
     
                      eg policy, procedure, admin, separation of duties, job rotation, disaster plan, 
                              security awareness training
     
               Detective controls alert if issue
                      monitoring, job rotation, IDS, audit, guard, CCTV
     
               Recovery controls return to normal function eg DRP Disaster recovery plan, 
                      data backup, alternate sites
     
               Preventative controls prevent issues from happening
                      Security awareness training, separation of duties, biometrics, encryption, 
                              mantrap, badge, guard
     
     
               
               
     
       classify by function
       
               Prevent
               
               Deter
               
                      discourages
                      
               Detect
               
               Corrective : detect and act
     
                      Change control happens here
               
               Compensating : restore backup or alternative site
               
     
     
               NIST 5 CORE FUNCTIONS (for Improving Critical Infrastructure Cybersecurity)
     
                      Identify
                              Risk Assess
                              Asset Manage
                              Govern
                              Business Environment
                              Risk Management Strategy
     
                      Protect
     
                      Detect
     
                      Respond
     
                      Recover
     
                              ... see other place in this document for full detail on this ...
     
     
     
     
     
     
     
     
     
     
     
     
       
       CoA Courses Of Action Matrix
               
               map tools to known attacker tools
               
     
               
               
               
    Risk Evaluation
     
       Choosing controls
       
               Mandatory? Regulatory
               Optional? Best practice, framework
                      Cost
                      Mitigation
                      
       Risk
               Likelihood
               Impact
                      Direct cost
                      downtime
                      reputation and other intangible assets
                      
       Quantitative risk
       
               SLE single loss expectancy = Value of asset x EF Exposure factor
               
               ALE = annual loss expectancy = ARO x SLE
               
       Qualitative
       
               Categorise (easier)
               
                      Assets - Irreplaceable, High, Med, Low, 
                      Risk
                              One off / recur
                              Critical / High / Med / Low
                              
               Traffic light red/amber/green
               
               FIPS 199 categorises IMPACT
               
                      Low / med / high
                      
                      
       1) Risk Assess : Look at all threats and vulnerabilities
       2) Technical Impact Review : Look at high/med/low impact
       3) Technical Control Review : Choose controls to mitigate threats
       4) Operational Control Review : Put in place policies and procecedures to help mitigate threats
       
       
     
     
     
     
    Penetration Testing
     
       https://www.pcisecuritystandards.org/documents/Penetration_Testing_Guidance_March_2015.pdf
       
       
               Vulnerability scan                    vs             Pen Test
               
                      Identify and report                   Exploit vulnerabilities
                      vulnerabilities
                      
                      Quarterly                                             Annually 
                      
                                                     (or after changes)
                                                     
                      Automated with                                Manual 
                      manual verification
                      
                      
                      Minutes                                               Days
                      
                      
                      
                      
       War Game 
       
               Red
               
                      Attacker - best 3rd party
                              but - expose your own system!!!
                              Qualified? CEH!!!
               
               Blue
               
                      Defence team : detect and repel
               
               White
                      
                      Determine objectives
                      Set parameters
                      Define success and failure
                      Report outcomes
                      Diagnose lessons learned
                      Recommend for future
                      
                      
       Pen Test Scope
       
               External threats
                      Perimiter, Network, DNS, Protocols, RRAS, Email, Web
               Internal
                      Access control, admin privileges, passwords, HIDS, auditing
               Applications
                      
                      
               Live or simulated environment?
               
       Authorisation to perform pen test
       
               care
               
                      3rd party - confidential
                      
                      3rd party suppliers eg ISPs - could disrupt their systems
                      
                      legal depending on country
                      
               Written authorisation required before testing can begin
               
                      NDA
                      Confidentiality
                      
                      
               Timing : fixed
               
               
       Depth of testing - exploiting
       
               No holds barred
               
               Perimiter test : just show that a vulnerability exists
                      but do not exploit it
                      
               Attack profile
                      External
                              Targeted
                              Untargeted
                      Internal
                      
                      Black box = blind = closed = zero-knowledge : attacker given no info
                      
                              Single blind test : attacker not aware of system but
                                                            insider staff are aware they are under 
                                                            test
                                                            
                              Double blind test : attacker not aware of system but also
                                                            staff not aware a test is under way
                      
                      
                      
                      White box = target test : attacker given full disclosure
                      
                      Grey box : partial disclosure : model insider threat
                      
                      Regression test = re-test after bug fix
                      
                      
       Comms
       
               will regular staff be aware?
               
               let ISP know
               
               let comms 3rd party know
               
               let partners know
               
               let police know
               
               agreed channels during the test so can halt the test if needed
                      and communicate without interfering with the test
                      
       Reporting
       
               White team or 3rd party
               
               Lessons learned
               
               Test procedures and results, conclusions, authors and reviewers
               
               Audience : care as can be confidential info within report!!!
               
               Timeframe : deal with issues reported
               
               
                      
               
               
                      
       
                      
                      
                      
       
     
       Rules of engagement
       
               NIST guide to Testing SP800-115 
     
                      Test the subject
                      High level 'logical' examination to expose weaknesses
                      Interview personnel
               
               PCI Payment Card Industry
               
                      PCI Data Security Standard
                      
                      
                      
                      
               
       Step 1
       
               Pre-engagement
               
                      Determine scope
                      Methodology
                      Budget
                      Resources
                      
       Pen Test Steps
     
               1. Document target system
               2. Gather info on attack methods
               3. Vulnerability Scan = Identify vulnerabilities : obtain list of CVE common vulnerabilities and exposures
               4. Exploit vulnerabilities : match CVE with any attack vectors which can be used = exploit module / exploit framework eg metasploit
               
               
               
               
               
               
               
               
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
    Reconnaisance : Module 1 Unit 2
     
    Kill chain = steps of an attack
     
       Goal : break the chain; also prevent an attack by engaging with the
               enemy as near to the start of the chain as possible
     
       Book - see report by Lockheed Martin of Network Defence with
               analysis of adversary campaigns and INTRUSION KILL CHAINS
               
       
       Story of 3 attacks
          http://www.lockheedmartin.com/content/dam/lockheed/data/corporate/documents/LM-White-Paper-Intel-Driven-Defense.pdf
               
               
       http://resources.infosecinstitute.com/cyber-kill-chain-is-a-great-idea-but-is-it-something-your-company-can-implement/#gref
               
     
       China spying - report by Mandiant
       
               https://www.fireeye.com/content/dam/fireeye-www/services/pdfs/mandiant-apt1-report.pdf
               
               APT Advanced Persistent Threat
               
                      Often a very advanced type of threat carried out by countries against other countries
     
     
       
               
               
       Regular Kill Chain
       
               Find
               Fix
               Track
               Target
               Engage
               Assess
               
       Cyber Kill Chain
       
               Reconnaisance
               Weaponisation
               Delivery
               Exploit
               Installation
               Command and control
               Actions
               
               
     
       Planning / Scoping
     
               stealth : Zombie computers to perform scans eg group DDOS attacks on a server
               
       Reconnaisance / Discovery
       
               passive attack is gaining info only = reconnaisance
               active
               
       Weaponisation
       
               use exploit
               
               PIVOT POINT = POINT OF ACCESS (part which is being attacked)
               
               APT Advanced Persistent Threat : INSTALL ONGOING TOOLS WHICH REMAIN
     
                      Often using advanced tools and quite often targeting governments so a high
                      degree of skill is required.  Often attacker is an organised group or a government
     
                      APT often have a fixed goal after which the attacks stop
               
               
               
               Exploit - run code, gain elevated permissions
               
               Callback - comms with rogue control network
               
                      C2 = Command and Control = rogue control points
               
               Tool download - download extra tools
               
       Post-exploitation / lateral discovery / spread
       
       Action on objectives
       
               copy data
               
       Retreat
       
       
    Reconnaisance In Detail
     
       OSINT Open Source Intelligence - public info
       
       Social engineer - human trickery
       
       Scanning
       
       
       
       Objectives
       
               Organisation
                      Trade
                      Culture
                      Defences
                      
               Employees
                      Department
                      Hierarchy
                      Privileges
                      Exploit outside interests
               IT
                      OS
                      Apps
                      Appliances
                      Security
               Suppliers
               Customers
               
               
               
       OSINT Open Source Intelligence
       
               Cyberstalk
               
               Passive reconnaisance - uses OSINT
               
                      use hidden machines eg proxy, VPN, compromised host, anonymous
                                     web server
                                     
               Google hacking - expert use of Google to find information
                      "exact phrase"
                      -  (minus sign)  EXCLUDE WORDS
                      AND (capitals)
                      OR 
                      |    OR
                      (a OR b) AND c
                      site:   within domain
                      filetype: 
                      related:
                      intitle:  only search title tags
                      allintitle:   must include all of the search words in the title tag
                      inurl:         must be in URL
                      allinurl:   must match all search words in URL
                      allinanchor:
                      intext:   
                      inurl:blog messi
                      query daterange:start date-end date
                      define: kangaroo court 
                      allinurl:tag/fcbarcelona/
                      
               Add to URL (in the middle of it)      
                      &pws=0  do not personalise
                      &filter=0 do not filter
                      &tbs=li:1 do not autocorrect
                      
                      
               Google Hacking Database - seems to be offline!
               
                      (check Offensive Security Google Dork)
               
               Dork = stupid
               
               Google dork = someone who creates vulnerability through stupidity
               
               Google Dork = Google Hack = using advanced Google searching 
               
               
               
       Email harvesting
       
               Spammers databases
               Google "*@mycompany.com"
               
               theharvester - linux tool for gathering email info
               
                      https://tools.kali.org/information-gathering/theharvester
                      
               Hacking websites eg social media websites
               
               
               
               
                      
       Social Media profiling 
       
               Using social media to work out what's happening in a company.  Normally requires social media accounts of active employees to be effective
       
               Analytics engines
                      pipl.com
                      peekyou.com
                      echosec.net
                      
               Also dating or purchasing/selling
               
               
       DNS harvesting
       
               Try and obtain the DNS records from a server
       
               Sysinternals => whois -v abc.com
               
               
               Zone transfer
               
                      NSLOOKUP SET TYPE=ANY ls-d abc.com      list all records
                      
                      
               Zone transfer (Linux)
               
                      dig axfr dns-server-1.domain.com thiscompany.com
                      
                              AXFR = ALL TRANSFER = REQUEST FOR ALL THE DNS RECORDS
                              IXFR = INCREMENTAL TRANSFER
                      
                      
                      
                      
                      
       Getting location from IP
       
               geoip
               
       Domain Analysis
     
               netcraft.com provides statistical analysis of sites, uptime,
                      quality of service etc
                      
       Website Ripping = website copier
                      
               httrack.com - download full site to local; ensures all paths work locally
               
       Social Engineering
     
               Pivot Point - point of weakness or access
       
               Phone calls
               
               Email
               
               Phishing 
               
               Spear Phishing
               
               Whaling
               
               Riding on back of existing work eg server upgrade; pose as 
                              contractor to gain access
                              
               Social Engineer Toolkit at social-engineer.org : used for Penetration
                              Testing
                              
               Burner phones with fake numbers
               
               CallerID spoofing to make it appear call is coming from legitimate number
               
               Spoof Card : prepaid card that you dial up to, enter your spoof number, then make calls from
               
       Topology Discovery = Footprinting
       
               Find all devices on the network - IP and hostname
       
               Good guys : use as auditing tool also to discover non-authorised devices on the network
               
               Web/Remote access
               
                      Which web servers? Names? IP? Apps? OS and App versions? Back end databases?
                      
                      VPN access?
                      
               Wireless access : WIFI points, IP, hostname
               
               Wired - sniffer 
               
               Virtual vs physical
               
               On premises vs cloud
               
               
       Network Mapping Tools
       
               Auditing your network via SNMP
               
                      System Center
                      HP OpenView
                      
               Attacker : problem of gain access, but also of remaining undetected
               
               
       Discovery tools
       
               ipconfig
               
               ifconfig
               
               ping
                      Windows : 4 pings
                      Cisco   : 5 pings
                      Linux   : unlimited pings
               
               ping sweep : find all IP addresses in a subnet range which are responding to ping
                      
                      for /l %i in (1,1,255) do @ping -n 1 -w 100 192.168.0.%i | find /I "reply"        
                      
               arp -a
     
               Nmap Network Mapper at https://nmap.org/  (command line or ZenMap GUI)
               
                      Hosts
                      Services running (with version)
                      OS and version
                      Firewalls in place
                      
                      Works by a) PING b) ARP c) ND neighbour discovery 
     
                      https://highon.coffee/blog/nmap-cheat-sheet/
                      
                      -sL = List Scan = produces a list of computers (get IP, can do reverse DNS to get name)
     
                      -sn = -sP = Ping Scan = pings all computers and lists ones which respond to ping
     
                      -p 1-100 = full port scan 
     
                      -p80  1.2.3.4/20  scan only on port 80
                      
                      -Pn  PORT SCAN OF EVERY IP IN SUBNET
                      
                      -PS (Port Scan) (sends TCP SYN Packet to every host)
       
                      -PS            <port list>   Service discovery scan = TCP SYN scan 
                                     for every port listed to discover 
                                      
                                     Service Discovery scan = TCP SYN scan
     
     
     
     
                                     
                      --scan-delay <time>    scan over extended period
                      
                      --randomize-hosts      scan in random order
                      
                      -sI                               scan Idle
                      
                      -f                                            fragment (split up) the TCP header
                                                                    over multiple IP packets
                                                                    
     
               
               Port States reported after a scan
                              
                      open    
                              port is accepting connections
                              
                      closed
                      
                              the service or application is not running, so traffic is 
                              not getting a response (but it's not blocked by firewall)
                              
                      filtered       
                      
                              when a nmap scan returns a status of 'filtered' on a port this indicates that the port is being blocked by a firewall
                      
                      unfiltered
                      
                              cannot determine status of report
                              
                              
               nmap -A        DETECT OS AND SERVICES
               nmap -sV       DETECT SERVICES
               
               tracert : detailed ping
               
               traceroute
                      
               pathping
     
               Nmap
               
                      --traceroute to provide a graphic view of the network
                      
               Masscan  
               
                      TCP port scanner, spews SYN packets asynchronously, scanning entire Internet in under 5 minutes.
                      
       Service discovery : OS and services
       
               Tries to work out which services are running and if a firewall is protecting that service
       
               OS for : hosts, firewall, switch, router
               
               Network services running
               
               Fingerprint = work out which software is running, and which version
                              is running, by using non-admin tools to query
                              
               netstat Windows
               
                              -a             all ports
                       -b     process which has opened the port
                              -r             routing table
                              
               netstat Linux
               
               TCP SYN packets can be sent as part of service discovery
               
                      SYN/ACK packet returned? Then port is open and service is available
               
               tcpview in SysInternals : GUI alternative to netstat
               
               nmap 
               
                      TOPOLOGY SCAN = HOST DISCOVERY = FIND IP AND HOST
     
                      for each ip scan every port
                              
                      DISCOVERY SCAN
                      
                              DISCOVER SERVICES 
                              DISCOVER VULNERABILITIES
                              DISCOVER ASSETS IN A COMPANY (LIST OF OS, SERVICES AND APPS)
                              
                              
                      
                                             
       
               nmap 
               
                      nmap    scan for open ports 
     
                      -sV or A  can obtain
                              OS and version
                              App and version
                              Type eg switch/router/host
                              
                              <<NOTE : TRANSCENDER 
                              
                                     nmap -o : OS Fingerprinting = OS Version
                                     
                                     nmap -o mydomain.com  SCAN ALL HOSTS IN DOMAIN AND 
                                                                    FIND THEIR OS
                                     
                                     also -sL identify host name >>
                                     tcp -sS -sU -PN    
                              
               nmap scripting engine LUA
               
                      Lua is a very fast scripting language used in, for example, ROBLOX
                      
                      OS discovery
                      Windows user account discovery
                      Identify logged on user
                      add geolocation
                      
                      
       Virtual Machine vulnerabilities
       
               VM Escape allowed a hack from a child VM into the parent host
               
     
     
                      
    Module 2 : Vulnerability Management
     
       Steps
       
               1       Identify Requirements
                                     Document regulatory environments
                                     Document corporate policy
                                     Classify Data
                                     Asset Inventory
                                             Critical assets
                                             Non-critical assets
               2       Choose Freqency of scan which will depend on
                              Risk appetite of company
                              regulatory requirements
                              technical constraints
                              workflow
               3       Choose tools to perform vulnerability scan
               4       Run scan
               5       Report on scan output
               6       Remediate any CVE found
               7       Ongoing scanning and monitoring
     
     
    Security Policy
     
       Enforce => demonstrate due care and due diligence have been applied
       
       Site Security Handbook IETF RFC 2196
       
       SANS is global leader in IT Security Training
     
               SANS = SysAdmin, Audit, Network and Security
     
               security policy handbook SANS.org => Resources => Security Policy Project
       
     
     
       
       
       
       
       
    Regulatory environments
     
       due diligence : show you have done what you can, properly
       
       negligence : may result in criminal charges
       
       FISMA is a regulated environment Federal Info Security Mgt Act
               surrounding government agencies
       
       PCI DSS Payment Card Industry is a strict regulated environment 
               which must show compliance to eg CIS benchmarks
     
       SANS makes guidelines for software development
     
       GIAC from SANS is a certification
     
       OWASP monitors web attacks
     
       NIST supports US innovation and standards
     
       CIS Center for Internet Security makes security benchmarks to show compliance
               eg PCI DSS can show compliance to this
     
     
       
       
       
       
       
       
       
       
    Assets : DEFINE WHAT YOU HAVE TO PROTECT!!!
     
       VALUE
               What are they worth?
               Work required to develop 
               Work required to maintain
     
       
       ATTACK - what liability can they present ie how much can we lose?
               
               business continuity
               
               legal
               
       Identify CRITICAL SYSTEMS
       
               Telecoms
               Web presence
               Fulfill orders
               
               
       Classifying Data
     
               Product
               Customer
               Finance
               Legal
               
       Data handling = document management = data policy
       
       Workflow - who can approve changes
     
       Data classification
       
               Unclassified : public
               Classified : NDA required
               Confidential : sensitive
               Secret
               Top secret  highest
               
       
    Vulnerabilities : DEFINE HOW YOU ARE GOING TO SCAN YOUR ASSETS
     
       Scanning frequency
       
               In order to determin the scanning frequency one must look at
       
               - Risk appetite : amount of risk a company is willing to tolerate
               - Regulatory requirements
               - Technical Constraints
               - Workflow = flow of transactions
                      
               Hard-wire vulnerability scanning in with other workflows like network management and software dev
       
       Ongoing scanning
       
               Continuous Security Monitoring : done daily
               
       Footprint = topology
       
       Fingerprint = work out which software is running, and which version
                              is running, by using non-admin tools to query
                              
       
    Vulnerability Scanners
                      
       SecTools.org => different kinds of tools
     
       OpenVAS vulnerability scanner (command line shell) 
               with Greenbone Web Browser as a GUI
     
           
       
       1) IP
       2) OS
       3) Services
       4) Patches
       5) Security Config
       6) Security Policy
       7) Shares
       8) Accounts
       9) Weak passwords
       10) Access points
       11) Rogue access points
       12) AV 
       
       Vulnerability Report ==> IMPACT WARNING!!!
       
       Vulnerability Scanners
     
               Qualsys, Nessus, OpenVAS, Nexpose, Nikto, MBSA
       
       Web app scanner eg Nikto : check for SQL  injection and XSS vulnerability
       
       Nessus scanner : free for home use
               
               Local
               Cloud
               
               Nessus can perform a vulnerability scan
               
               Nessus can also COMPARE YOUR VULNERABILITY AGAINST A GLOBALLY AGREED SECURITY BASELINE CALLED THE CIS CENTER FOR INTERNET SECURITY at cisecurity.org.  This would be a compliance audit - how your machines 'comply' with globally agreed security standards or security policy.
               
               Nessus can
               
                      Group Vulnerabilities By Plugin = By TYPE OF VULNERABILITY
                      
                      Group Vulnerabilities By Host
                      
                      
               
       OpenVAS scanner is open source  openvas.org (similar to Nessus) - not Windows
       
       Qualys : cloud-based vulnerability management (agents run on clients)
       
       Nexpose vulnerability scanner
       
       Security Config and Analysis : apply a security template via GROUP POLICY
       
       GROUP POLICY - CAN APPLY A SECURITY TEMPLATE
       
       MBSA - CAN ANALYSE THE RESULTANT SECURITY AND HIGHLIGHT ANY FLAWS OR WEAKNESSES eg patch not up to date
       
       Vulnerability Types
     
               Known Threat - ONE WE KNOW ABOUT, AND FOR WHICH A MITIGATION (SOLUTION) EXISTS
               Unknown Threat - ONE WE DO NOT KNOW ABOUT (AND HENCE A FIX ALSO DOES NOT EXIST)
               Known Unknown - ONE WE KNOW ABOUT, BUT NO FIX EXISTS YET
       
               Patch Vulnerabilities
       
                      IOT Internet Of Things devices are least likely to have proper patch management as their update process is sometimes difficult
       
               QR-code
               
                      Mobile phones are susceptible to this type of attack
    
    
    
    MSAT Security Assessment Tool
               
       SCM Security Compliance Manager 
       
               also works inside SCCM
               
               
       Vulnerability Feed : latest updates to vulnerabilities found
       
               Also called plug-in
               
               
       SCAP : Security Content Automation Protocol - does a computer meet a certain baseline?   
       
               Allows automation of vulnerability management, and also manage compliance with policy
     
               SCAP allocates a certificate to software based on its capabilities
                      ACS Authenticated Config Scanner : scans software while logged in
                              Also
                                     CVE : supports scanning of item and matching them to known CVE vulnerabilities
                                     OCIL : open checklist interactive language : collect vulnerability data from other methods
     
                      
     
               MITRE.org is a Research and Development (R&D) government body whic sponsors research eg into CWE and CVE
                      vulnerabilities
               
               AI Asset Identification
     
               CVE common vulnerabilities and exposures = known vulnerabilities cvedetail.com
               
               CPE common platform enumeration by NIST (standard names for different platforms eg types of hardware, OS, apps)
               
               CCE common config enumneration by NIST (best practice)
               
               CWE common weakness enumeration : broader categories of coding errors which lead to 
                              specific CVE vulernabilities
     
                        
     
                              Full list at cwe.mitre.org
     
                                     CWE = coding errors
                                     CVE = specific examples of those coding errors, in real products
     
     
               
     
     
     
               SCAP 
     
                      automation of marking how vulnerable a system is to attack, also how to fix this
     
                              see scap.nist.gov
                              and nvd.nist.gov
     
                      Languages used to define the standards 
     
                              OVAL : vulnerability scanner
     
                                             OVAL open vulnerability assessment language : XML report : evaluates systems for compliance using software.  
     
               
                              XCCDF : XML best practice config which can be applied to a machine.  Used by MITRE, CIS, OVAL, SCAP
     
                                        https://scap.nist.gov/specifications/xccdf/index.html
     
                                        https://scap.nist.gov/schema/xccdf/1.2/xccdf_1.2.xsd
     
     
               CVSS Base Score
               
                      Common Vulnerability Scoring System
                      
                      0 = not vulnerable
                      
                      10 = vulnerable
                      
                      Uses six metrics to calculate the base score.
     
                      AV Access Vector : method the attacker uses to attack
     
                              L Local : must have LOCAL ACCESS TO MACHINE
                              A Adjacent : must be on INTERNAL LAN
                              N Network : can be on EXTERNAL NETWORK
     
                      AC Access Complexity : how hard it is for attacker to attack
     
                              H High : hard to attack
                              M Med
                              L Low : easy to attack
     
     
     
                              
                      Au      Authentication Which An Attacker Would Have To Use In Order
                              To Perform An Attack
                              
                              M       Multiple
                              S       Single
                              N       None
                              
                                     
                              
                      C       Confidentiality : how much information stands to be disclosed
                                                     should the attacker be successful
                                                     
                              N       None    no disclosure of confidential information
                              P       Partial some disclosure 
                              C       Complete all the info on a system could be compromised
                              
                      I       Integrity : how much data could be altered by an attacker
                      
                              N       None    No data integrity impact
                              P       Partial Partial data integrity impact
                              C       Complete data integrity impact : all info on system 
                                             could be compromised
                                             
       
                      A       Availability : Potential impact on availability of the system as a whole if this vulnerability gets exploited
                      
                              N       None : no impact on system availability
                              P       Partial : partial impact on system availability
                              C       Complete shutdown of system
     
                              
     
     
     
                              
                      Typical output : CVSS2#  AV:L  /   AC:H   /   Au:M   /
                                                               C:P  /    I:N   /    A:N
                                                                      
                                                                      
                                                                      
                                                                      
                      Also generated are scores
                      
                              eg https://www.first.org/cvss/v2/guide
                      
                              Impact Score   -  calculate from a formula
                              
                                     Impact Score =
     
                                     10.41*(1-(1-ConfImpact)*(1-IntegImpact)*(1-AvailImpact))
                      
                              Impact Function
                              
                                     0              if Impact Score = 0
                                     1.176   otherwise
                              
                              Exploitability Score
                                                                      
                                     Exploitability = 20* AccessVector*AccessComplexity*Authentication
     
                              
                              
                              Base Score = ((0.6*Impact)+(0.4*Exploitability)-1.5)*f(Impact)
                                                                      
                                                                      
                                                                      
                                                                      
                                                                      
                                                                      
                                                                      
    Securing Your Network - SANS Top 20 ways to secure
       
                              
               SANS top 20  https://www.cisecurity.org/controls/ - advice on the top 20 ways to secure your network
                              
                      Inventory of Authorized and Unauthorized Devices 
     
                      Inventory of Authorized and Unauthorized Software 
     
                      Secure Configurations for Hardware and Software 
     
                      Continuous Vulnerability Assessment and Remediation 
     
                      Controlled Use of Administrative Privileges 
     
                      Maintenance, Monitoring, and Analysis of Audit Logs 
     
                      Email and Web Browser Protections 
     
                      Malware Defenses 
     
                      Limitation and Control of Network Ports 
     
                      Data Recovery Capability 
     
                      Secure Configurations for Network Devices 
     
                      Boundary Defense 
     
                      Data Protection 
     
                      Controlled Access Based on the Need to Know 
     
                      Wireless Access Control 
     
                      Account Monitoring and Control 
     
                      Security Skills Assessment and Appropriate Training to Fill Gaps 
     
                      Application Software Security 
     
                      Incident Response and Management 
     
                      Penetration Tests and Red Team Exercises 
     
     
    Vulnerability Scanning
     
     
               
    Vulnerability databases
       
       Bugtraq - detailed analysis of vulnerability disclosures
     
               Bugtraq is an EMAIL LIST OF CURRENT NEWS ON VULERNABILITIES
                      POLICY OF FULL DISCLOSURE IN ORDER TO GET COMPANIES TO FORCE THEM
                      TO FIX THE BUGS IN THEIR SOFTWARE
                      Bugtraq at securityfocus.com owned by Symantec
               
               Full disclosure - we are all safer if everything gets disclosed
               
               Security through obscurity - hide everything!!!
               
               Balance : give time to fix vulnerabilities, then disclose
                      
                      
               
    Passive scanning eg mirror a port
     
       Just read packets
     
    Active scanning (non-credentialed)
     
       Just fire packets at the system
       
    Credentialed scan
     
       given log on
       
       Make sure the account used to perform the credentialed scan has read-only access so can't do any damage to the drive it's scanning
       
    Agent based scan
     
       software (eg Nessus agent) installed on each client runs the scan; central admin console (Nessus server) to manage them all.
       
               (Windows - runs as background service nessuscli)
               
       can limit to certain OS
       
    Vulnerability Access
     
       must be able to get through defences like firewall and IDS - not easy on a live system!!!  configure exclusions.
       
    Vulnerability results
       store securely
       
       
    Scan types
     
       DISCOVERY SCAN : of network
       
       ASSESSMENT SCAN : of vulnerabilities
        
               can scan against a baseline
               
               Sensor-based : running from a central point 
               Agent-based : running on each client
       
       
    Scan Scope 
       Define IP and port ranges
     
       
    Scan authorisation
       Can configure scan to obtain credentials which are not revealed
       to the scan operator
     
       credentialed
       non-credentialed
       
       
       
       
     
    Scan scheduling
     
       can be affected by PCI DSS, Risk appetite and by licensing issues
       but not by SLA ((Transcender question))
     
     
    False positives
     
       First have to validate - are they actually false positives?
       
       Second can add them as exceptions to the scanning list so they are not flagged up by the vulnerability scan
     
       PCI DSS Payment Card Industry - Data Security Standard
       
               Note : stricter laws apply to PCI DSS vulnerability scans, for example any false positives can't be filtered out but must be left in the report with a note to that effect.
     
               PCI DSS devices must show compliance with eg CIS benchmarks
     
     
     
    False negatives : risks NOT IDENTIFIED
     
       Mitigate by ongoing scanning; also by using scans from different vendors so chances are greater on picking up on threats
       
       
       
    Scan reports
     
       care as this info is confidential
       
     
     
       
    MRTG Multi-Router Traffic Grapher
     
       monitors load on a network line
     
       uses SNMP
     
       other tools : Scrutinizer, Nagios, SolarWinds, Cacti, NetFlow Analyzer
     
     
    Non-Intrusive and Intrusive Scanning
     
       
       
    Non-intrusive scanning
     
       Network fingerprinting : getting Host/IP/port info from
               freely available sources
               
       Banner Grabbing - getting info from welcome and login screens and http header info
       
       may return false positives
       
     
     
     
    Intrusive = invasive scanning
     
       exploit vulnerabilities
       
       Use an 'exploit framework'
       
       
       
       
               
    Exploit Frameworks
               
               
     
     
       
     
     
     
    Exploit framework is tool for launching specific attacks against known software vulnerabilities
     
       Exploit code targets specific CVE common vulnerabilities and exposures
       
       Once access is gained this then may be used to 
       
               OPEN A COMMAND PROMPT WINDOW
               
               CREATE A USER
               
               INSTALL SOFTWARE
               
    Metasploit is best known exploit framework = metasploit.com (open source) (uses Ruby)
     
       Tutorial : Metasploit Unleashed
     
       combines with Nexpose vulnerability scanner
       
       1) Discovery Scan : hosts and vulnerabilities
       
               ((Metasploit can use Nmap or its own tools for this))
               
       2) connect to vulnerability scanner eg OpenVAS, Nessus, Nexpose
     
               openvas_target_list
               openvas_task_list
               openvas_report_import
     
       EXPLOIT MODULE = TRY AND EXPLOIT A VULNERABILITY
       
               use ExploitModule
               show options
       
       PAYLOAD = WHAT YOU DOWNLOAD TO A MACHINE THAT YOU FIND A VULNERABILITY ON
     
               set payload 
     
       VULNERABILITY (IN CVE) => MODULE TO EXPLOIT => PAYLOAD DOWNLOADED
       
    Armitage
     
       GUI for Metasploit
       
       Scan hosts with NMap or Metasploit
       
       Find Attacks to find exploits which might target a known vulnerability
       
       run as many exploits as possible
       
     
    Compliance Audit
     
    Compare Nessus scan against vulnerabilities in CIS benchmarks
     
    Patch Audit
     
    Compare patching against available patches
     
     
    Credentialed Network Scan
       
    Scans network 
     
    Non-Credentialed Network Scan
     
     
       
       
       
       
       
       
    Remediating Vulnerabilities
     
                      
       Module 2 Unit 2
     
       CVSS Common vulnerability scoring system - indicates how severe a vulnerability is
                      
       Investigate
       
       Big picture with results
       
       Logs
       
       >hosts
       >vulns -R 1.2.3.4
       >search to match exploits with vulnerabilities
       
       
       false positives
       
               add to exception list
               
               
               
               
    Trend analysis
     
       Number of incidents
       
       Detection times
       
       Response times
       
       Network metrics eg traffic volume
       
       Compliance 
       
    Current trends
     
       Alien Vault : SIEM gather data
       SecureWorks
       fireeye
       symantec
       microsoft
       DarkReading
       SANS
       
    Remediation
     
       Cost of implementing the remediation
       
       Change control
               Plan remediation action
               Evaluate potential impact
               
       Configuration management : identify all hardware/os/software and their
                      config settings.  Will have detailed analysis of hardware, os, apps stored on the database
                      
       Change management : manage changes to config
       
               MAC move, add, change
       
               Ticket must be authorised for the change
               
               Record in job log
     
       Exception management : for exceptions to the rule eg non-compliant systems
                              for legacy purposes
     
               
       SOP Standard operating procedures
       
       Reactive vs proactive
       
       
       Download or create, then test the fix in a sandbox
       
       RFC Request for change = when faults found, must submit a change request to fix those faults
       
       CAB Change advisory board = board which approves changes
       
       
       Trial in a sandbox if possible
       
       Update AV Signatures (obvious)
       
       User Training 
       
       Note 
       
               Air gap is the space around an isolated computer
               
               Sheepdip is ONE ISOLATED COMPUTER - Plug in your USB stick to test for viruses before you plug into the main network
               
                      MONITOR
               
                              PORTS USED BY MALWARE
                              FILES CHANGED BY MALWARE
                              NETWORK COMMUNICATION ATTEMPTS MADE BY MALWARE
                              AV INSTALL TO TRY AND ANALYSE MALWARE
                              
                              YOU DON'T VULNERABILITY SCAN A SHEEP DIP : YOU INSTEAD ANALYSE THE MALWARE
               
               SANDBOX IS PROCESS OF ISOLATING COMPUTER OR NETWORK
               
                      1) Test fix in a sandbox
                      2) Submit formal change request with the sandbox test results
               
       
       Can prioritise remediation fixes according to 
       
               Criticality of the system
               Severity of the vulnerability
               Difficulty of applying the remediation
               
               Note : age of vulnerability is irrelevant : old or new, vulnerabilities can still affect us
               
               
       
               
               
               
               
               
     
    Inhibitors to remediation
     
       Formal change control - can degrade your company's ability to quickly respond to threats, as fixes have to be formally approved.
       
       Degrade functionality
       
       SLA affected
       
       MOU (intent to work together) affected
       
       KPI
       
               uptime
               downtime
               response time
               MTTF
               MTBF
               MTTR
               MTBSI Mean time between service incidents
               
               
    Host Remediation
     
       Servers
       
       Endpoints 
       
       Mobile Devices
       
       ICS industrial control systems
       
       SCADA : control panel to manage an industrial building eg a car manufacturing plant
       
               NIST 800-82 : protect SCADA eg disable links
       
       boards called PLC Programmable Logic Controllers
       
                      
       Network appliances (router/switch/firewall)   
               
               ensure browser logins not internet facing 
               
               log in via ssh
               
       IOT
       
       
    Physical infrastructure
     
       wifipineapple : hardware device which can plug into a wired network port but then
               do a wireless scan of your whole network. It also has pentest tools to try and
               hack into your network in order to test it.
       
    VM infrastructure
     
       hypervisor
       
       hosts
               
               vm sprawl : create vms without proper change control
       
               dormant vm
       
       virtual network connections
       
       
       Care! AWS test policy 
               
               
               
               
    Secure Software Dev (Mod 2 Unit 3)
     
       SDLC : Agile, Waterfall
       
       Agile
       
               Maturity model : each iteration is more mature
               
       Microsoft SDL
       
       OWASP Open Web App Sec Project = monitor web attacks
     
               ZAP : Zed Attack Proxy
     
                      auto find insecurities in your web apps as you build them
                      
                      Web Intercept Proxy : Browser requests go through ZAP so that it can see
                              and analyse all your web traffic and responses
                      
                      Spider : crawl pages
                      
                      Brute Force : find files even if no link to them
     
     
               Webgoat from OWASP
     
                      Scapegoat machine deliberately set up so you can attack it
     
                      30 vulnerabilities you can identify
     
     
     
               
     
     
               
       SANS : global security
       
               GIAC certification
     
       CIS center internet security
       
               Top 20 Controls
               
               Produces benchmarks which are globally agreed sets of security standards for different types of server. Freely available as PDF from cisecurity.org after registering.
     
     
       NIST National Institute of Standards And Technology - central standards
               
               
               
               
               
     
               
    Attack types
     
       buffer overflow
       
               GET /AAAAAAAAAAAAAAA\x80\x81\x82\x83\...
     
               Mitigate with proper input validation
       
       arbitrary code execution : attacker runs code
       
       remote code execution : attacker runs code remotely
       
       command/SQL/XML injection
               
               SQL INJECTION IN WEB PAGE REQUEST
               
                      GET abc.com/page.php?ID=22;CREATE TABLE x ....
       
       
       directory traversal 
       
               TRY AND NAVIGATE FROM ONE SITE TO ANOTHER USING ../../ PATHS
               TO GO UP AND DOWN LEVELS
               
               GET /scripts/../../folder/file.txt    NAVIGATE UP LEVELS
               
       
       
       Note : code injection, buffer overflow and XSS attacks can all be
                      easier on social medial sites where there is less input checking compared with some other sites
       
     
     
       cascading failures on networked systems
       
               EG DNS FAILURE CAN IMPACT ON DEPENDENT SYSTEMS
               
               
       Zero day attack = on newly released software; no one else knows yet about this threat
       
     
       Advanced terms
     
               Race condition : programming : trying to do things in the wrong order so 
                                             incorrect output results
     
               Exception handling : of errors : proper error messages etc
     
               Unhandled exception : system crashes
     
               Cookies : store web data : sent between server and client. Can contain sensitive data.  Can be encrypted and used only over HTTPS
     
               Integer overflow : too big
     
     
     
     
     
       
    Code testing
     
       Static code testing
       
               source code analyzer
               
                      scan source code for signatures
                      
               manual code / peer review : human reading code
               
       UAT user acceptance test
       
       NIKTO : Web Server vulnerability scanner
     
               Free tool used by many to expose any weaknesses in their web server or apps
     
     
     
     
       Fuzz testing
       
               Application UI
               
               Protocol : transmit changed packets
               
               File : change extension
               
               must detect crash - which app caused it?
       
               Peach Fuzzer : automated tool to test  your web app for zero day vulernabilities
               Untidy
               
     
               Project Springfield : Microsoft bug fixer & cloud fuzzer
       
       
       
       
       Stress testing - performance of app - how it works under pressure
       
       Regression Testing - after bug fix
       
     
     
       Synthetic Monitoring : Only testing simulated transactions (not real ones)
     
       RUM Real User Monitoring : Captures every transaction on a live web app
     
       
     
    Interception Proxy testing
     
       burp suite (portswigger.net)
       
               set burp as proxy 127.0.0.1 on 8080
       
       OWASP Zed Attack proxy
       
       Zap
       Vega 
               
     
    Firewall
     
     
     
    WAF Web Application Firewall
       
     
     
       WAF Web App Firewall = IDS
       
               protects Apache (50%),  IIS (12%) , nginx (17%)
               
               
       ModSecurity : Open Source WAF (uses OWASP rules, originally for Apache but now
               other platforms also)
               
       NAXSI Nginx Anti XSS and Injection is a WAF Web Application Firewall
               uses White List technologies for Nginx web server 
       
       Imperva SecureSphere : WAF : Web Application Firewall : for data center
       
        
     
     
     
     
       
    Trusted environment : OS + Apps + Firmware + Drivers  are secure
     
       Hardware eg DoD Trusted Foundry where hardware supply chain is tested
       
               Exam : OEM documentation can accompany hardware to prove license is good
       
       Code Signing = Software Fingerprinting
       
       
    Reverse engineer = decompose code
     
       disassembler into assembly code : complex
       
       decompiler into language
       
       debugger : step through
       
       obfuscate code : make it more difficult to decompile
       
       Reverse engineer eg malware!!!
       
       
     
     
     
     
     
     
     
     
     
     
     
     
     
       
    Module 3 : security appliances
     
     
    Tools can be categorised
     
       Prevent - IPS, firewall, AV, Anti-Malware, EMET Enhanced Mitigation, Web Proxy, WAF Web App Firewall
     
       Collect Data - host/port scan, vulnerability scan, SIEM security info and event mgt, packet capture, IDS
     
       Analyse Data - vulnerability scan, interception proxy
     
       Exploit Vulnerabilities - Exploit Framework
     
       Forensics - Crime Scene tools after an attack - hashing, password crack, image
     
     
    Firewall
     
       filter
       
       rule
       
               processed top to bottom : if traffic hits a match then it is allowed
                      to proceed. Implicity deny at bottom.
                      
               tuples = set of elements (eg set of conditions on firewall rule)
       
       least access
       
       drop - no notify
       
       reject - notify
       
       firewalk 
                      
               attacker tries to work out the acl
               
               mitigate with NAT
               
       log good/bad attempts
       
       blinding attack : flood the server so logs can't keep up and so 
                              and record of the attack will be incomplete
                              
       
    Web Proxy = web security gateway
     
       block virus/spam
       blacklist
       cache
       pre-fetch
       
       transparent : client not aware
       non-transparent : client must be configured
       
    Reverse Proxy = Inbound Traffic
     
       Reverse Proxy lives on the perimiter network
       
               Forwards correct traffic through the firewall into the VOIP server
                      on the LAN
                      
     
    Firewalls made by
     
       Cisco 
     
               PIX firewall old
               ASA firewall now
       
       Juniper
       HP
       Dell
       IBM
       
       CheckPoint
       
       Palo Alto
       
       
       
    IDS
     
       NIDS : just on the INTERIOR side of the FIREWALL
     
               Port mirror : on a switch
               passive : just logging
               
               active : end TCP session
               active : shunning : add extra filter to firewall to block attacker IP
               
       Snort on Windows Server : IDS, IPS, logging, real-time analysis
       
       Sourcefire : Cisco IDS
       
       Bro.org  for linux
       
       Note : configuration often depends on RegEx  (regexr.com)
     
     
     
       
    UTM
     
       IDP Intrusion Detection and Prevention = IPS
       
               throttle bandwith
               change firewall rule
               
       
     
     
    HIDS
       Symantec endpoint 
       
       
    HIPS
     
     
     
     
    Detection
     
       Signature = hash
       
       Anomaly - check for deviations from the norm, while attack is happending eg changes in traffic pattern, url length, packet header change etc
     
       Behaviour - detects the result of an attack by eg detecting files that have been altered
     
       
     
     
     
       
    Domain or Server Isolation
     
       Either isolate the DOMAIN (using IPSEC) or just ONE SERVER and also can add EXCEPTIONS to this rule
       
     
       
    Malware
     
       Dropper - first stage : get launcher code installed on the system. Admin privileges required so must use vulnerability or get user to install
       
       Maintain access
       
               C2 or C&C is command and control software which the attacker can
                      use as RAT remote access trojan
                      
                              ?? key logger ??
                              
               Peer-to-peer Botnet 
     
                      Created by C&C software talking to infected computers on the inside of your LAN
     
       Strengthen access eg gain access to domain admin credentials
       
       Action on objectives eg copy or modify data
       
               Exfiltration = copy data out of system
       
       Concealment
       
       
       
    AV 
     
       personal : host-based
       
       network : NIDS
       
       
       stealth : virus pass good copy to scanning software
       
       modification  : polymorphic
       
       modification : metamorphic :  complete recompile
       
       armor : deliberatedly make it harder to analys this code
       
       retrovirus : disable av
       
       slow and sparse : avoid detection by replicating slowly
       
       
       
       AV : Sysinternals
       
               Autoruns : software which auto-starts
               
               Process Explorer
               
               Process Monitor
               
               TCPView
               
       AV : EMET Enhanced Mitigation Experience Toolkit
       
               Microsoft
               
               Can force apps to use CPU features - use with care!
     
               Fine-tune some security features
               
       
     
     
     
     
     
     
     
     
     
     
     
     
     
               
    Logging : Mod 3 Unit 2
     
       Sniffer
       
               WinPCAP = sniffer = LibPCAP
               
                      promiscuous mode : listen to all packets
                      
                              Switch : must port mirror to listen to traffic on other ports
                              
                              
                      Note : can disable promiscuous mode on all network devices to prevent a sniffer from reading full contents of all packets ********************
                      
                      
                      
     
       Network Protocol Analyser
       
               Wireshark
               Kismet : WIFI linux
               TCPDump : Linux
               Dsniff : Linux
               Ettercap
               
       Protocol Analysis : analyse IP TO/FROM, PORT TO/FROM, MAC TO/FROM
       
       Packet Analysis : analyse the WHOLE PACKET INCLUDING DATA
       
       Traffic Analysis : different types of traffic 
       
       Netflow Analysis : from Cisco : looks at different 'flows' of traffic or 'conversations' eg Skype conversation, DNS traffic flow, etc
       
       Network monitoring
               most active hosts
               hosts producing packets in error
               filter
               baseline
               generate frames for testing
               bandwidth
               alarms
       
    Sniffing Tools
     
       TCPDump
     
               windump
               tcpdump -i eth0
       
       Wireshark
       
               .pcap file output
       
       Netscout / Network General
     
    WIFI tools
     
       AirPCAP
     
       Aircrack-ng
       
     
    Injection Tools
     
       Dsniff
       
       Ettercap
       
       hping
       
       Nemesis
       
       Scapy
       
    Network Monitoring
     
       MTRG Multi Router Traffic Grapher
       
               SNMP tool : creates graphs
               
               open source 
               
               Linux (can be used in Windows via Perl)
               
       MTRG as a (ongoing) service
       
               use crontab (Linux)
               run MTRG as a service (Windows)
               
       Cacti.net with graphs using SNMP - Linux (or Windows via Cygwin)
       
       
       Netflow
       
               This analyses stats on flow of IP traffic : equivalent of taking all of Wireshark collection but then aggregating and collecting the different 'flows' of traffic and reporting on each individual flow - stats, throughput etc
               
                      SolarWinds.com 
       
                              Netflow Analyser on RHEL / CentOS
                              Reports network flow to proper database for display and analysis
                      
                      alternatives : sFlow, jFlow, IPFIX IP Flow Info Export
               
               
       Nagios.org
       
               SNMP and HTTP info gathering.  Agent installed on client.
               
       Resmon
       
       Perfmon
       
     
       
    Log Review
     
       SIEM = general term = Security Info/Incident and Event Mgt
       
       SIEM = LOGGING AND ANALYSIS OF LOG DATA
     
       Critical part
       
               Identify trends
               
                      increasing malware activity
                      hosts not updating
                      bandwidth use increasing
                      traffic spikes
                      
               Correlate events with RISKS!
               
                      IOC indicator of compromise
                      
               Alert
               
               Retain records for proof of compliance
               
               
       Big Data
       
               Unstructured data sets : variety of sources
               
               High volume
               
               High velocity
               
               eg Hadoop DFS
               
               Data visualization
               
    SIEM tools : SPLUNK, ARCSIGHT, QRADAR, AlienValut, OSSIM, SysLog, Event Viewer
     
       SPLUNK analytics : big data : uses Hadoop
               
               SPL splunk search processing language
               
       ArcSight by HP
       
       QRadar
       
       Alien Vault is SIEM (gathering data) tool
       
       OSSIM Open Source Security Info Mgt
       
                      integrate SNORT and OpenVAS vulnerability scanner
                      
       
       Syslog COLLECTS LOGS CENTRALLY
       
               KiwiSyslog.com
       
                      store SNMP logs
               
       SIEM can COLLECT AND ANALYSE LOGS CENTRALLY
     
               aggregates multiple sources, often XML
               
               synchronise sources with time
               
               secure channels
               
               confidentials
     
     
               
       
    Windows Event Viewer
     
       subscriptions and forwarded events
       
       .evtx uses XML formatting
       
       Information Event 1102 is CLEARING THE SECURITY LOGS  (Note : Transcender error : says it's 102 but it's not in real life)
       
       Information Event 4719 is CHANGING AUDIT POLICY
       
       
    Syslog (linux events)
     
       centralised collection
       
       collect CISCO events
       
       severity 
       
               0 emergency
               1 alert
               2 critical
               3 error
               4 warning 
               5,6 info
       
    Firewall logging
     
       Linux iptables - generally correct format for output
       
    Packet logging
     
       pcap file format used
       
    Nmap logging
     
       as XML, Grep (RegEx), view on screen
       
       
    IDS reporting eg SNORT
     
       Binary output/CSV
       
       tcpdump uses pcap
       
     
       
       
    SIEM data correlation (once data collected)
     
       Signature based 
       
       Anomaly based : examine headers : check for deviations from the norm
       
       Availability : is host online?
       
       Heuristic real-time learning
       
               tune in and learn from data gleaned from honeypot/nets ; self-learn
               
               
       Behavioural analysis
       
               Log on out of hours
               
               check TTP Tactics, Techniques and Procedures (used by hackers)
               
               DDoS with traffic surge
               
               high CPU
               
               high RAM
               
               network scans
               
               APT comms eg internet chat comms or other; can spot this
               
                      check for unknown apps over known ports eg 53DNS
                      
               Fast flux DNS : change IP of a domain to circumvent blacklists
               
               Data exfiltration : stealing data: high volumes out
               
     
    Other issues to be aware of
     
       Sparse or slow attack
       
               so many false positives that the odd one or two 'real' attacks can get by unnoticed
               
               blinding - large attack at same time as another real attack
               
       IRC - analysers got good at spotting this so not used so much now
       
       SSH - widely used
       
       HTTPS - now far more widely used
       
       
    Advanced Analysis
     
       experienced human could possibly spot something
               
       FPC full packet capture - huge storage requirements
       RNA retrospective network analysis - huge storage requirements
               
       Wireshark = analyse = expert Info  eg 5 minute trace
       
       
       Wireshark - statistics - flow graph 
       
               shows which computers sending/receiving data
               
               can spot one-sided traffic
               
       Wireshark filter   ip.addr==1.2.3.4
       
       Wireshark - statistics - Protocol Hierarchy
       
               shows which protocols generated most traffic
               
               
       
       Netflow can visualise data
               
               eg EtherApe (Linux)
    
    
    
    Wireless Analysis
     
       NetScout AirMagnet
       Ekauhau Site Survey
       Metageek inSSIDer/Chanalyzer
       
       Wireshark wireless packet analysis
       
               Beacon - special type of packet found only in wifi 802.11
               
               Probe - special wifi packet also in 802.11
               
               
    Availability Analysis
     
       Five 9's = 99.999% uptime (gold standard of uptime over course of a year)
       
               99.999/100 
               
               0.00001 * 365 days * 24 hours * 60 minutes * 60 seconds
               
               comes to only 315 seconds = 5 minutes down a year!
       
       
       
    Cyber Incident Response (Mod 4 Unit 1)
     
       IR = Incident Response Team
     
               Technical 
     
                      Hard work goes on here!!!
       
               Management
       
                      Making company aware of its existence and importance
                      Detail authority for IR team to run company if necessary
                      Decide which key systems can/should be removed from network
               
       HR Human Resources
     
               Responsible for
     
                      Hiring
                      Job Descriptions for IR team
                      Create policy and procedure to clarify improper conduct on security matters
     
       Legal
               Create non-disclosure agreements
               Create documents for notifying anyone affected
               Be aware of any illegal activity done during the attack
     
       Marketing
               Talk to media during a crisis - press release
               Create educational materials, circulars
     
       Law Enforcement Agencies
     
               If crime committed
               May not be worried about stopping attack so much as getting more info on the 
                      attackers
     
       3rd Party Incident Response Team
               For small companies
                      Capture Data
                      Provide Logs
                      Identify good tools
                      Identify poor tools which could taint evidence
     
     
     
     
     
     
     
     
    NIST Incident Handling Guide 
     
       Stages
       
               Preparation : Prepare Your System
     
                      Harden
                      Incident Response Policy
                      Confidential communications
                      
               Detection : Detect An Attack
               
               Analysis : Analyse The Attack
     
               Recovery Process : Recover From The Attack
               
                      Containment
     
                              Segmentation : create network barriers eg move affected items 
                                     to quarantine subnet
                              Removal : shut down after get volatile info off them
                              Isolation : from network - shut down ports etc
                              Reverse Engineering : detailed analysis of malware code
     
               
                      Eradication
     
                              Sanitize
                                     Clean disks eg Degauss Magnetic wipe 
                              Reconstruct / Reimage
                                     Re-image with a new fresh image (with hash validation)
                              Secure Disposal
                                     Shred if necessary
               
                      Validate (that now OK)
     
                              Patching
                              Permissions
                              Scanning
                              Verifying Logging & Security Monitoring 
     
                      Corrective Actions
                              During incident
                                     Change Control : update system
                              Post incident
                                     Lessons Learned Report : what happened and how we fought it
                                     Update IRP Incident Response Plan
     
                      Summary Reporting on the Incident 
               
               
               
       CSIRT Computer Security Incident Response Team
       
               Legal
               HR
               Marketing
               
       Comms
       
               confidential!
               out-of-band comms
                      end-to-end encryption eg Off-The-Record or Whatsapp or Signal
                      email with S/MIME or PGP encryption
                              keys from Identity Management system completely different
                                     to the one being defended
               Act to PREVENT DISCLOSURE OF INFORMATION other than what is necessary between
                      approved parties 
     
     
       Classifying 
       
       APT Advanced Persistent Threat
       
               Obtain and Maintain access
               
               scan for virus, Command and Control, network activity
               
       STIX Structured Threat Info Expression
       
               by MITRE
               
               Observable
               
                      Oberservable stat, often logged as well for analysis
                      
               Indicator - pattern of observables
               
               TTP tactic techniques procedures - potential threats
               
               Threat Actor - bad guy
               
               Campaign - multiple attacks from one bad guy Threat Actor
               
               CoA Course Of Action - prevention actions
               
               
               ((also Mandiant => OpenIOC Indicators of compromise))
               ((also IETF Incident Object Description Exchange Format))
     
     
               
    Incident Severity
     
       Value of data
       
               Data integrity
               
       Downtime
               Degrate (partial)
               Interrupt (full)
       
       Economic effect
       
       Scope Of Attack = breadth of systems affected
       
               Downtime HOW LONG HAS ISSUE BEEN AFFECTING US?
               Recovery Time HOW LONG TILL FIX?
               Data Integrity DATA CORRUPTION? WOULD HAVE TO RESTORE A CLEAN VERSION ETC.
               Economic Loss HOW MUCH THE COST?
               Criticality Of The System under attack
     
     
     
       Detection time : detection often days, weeks, months but often data
               stolen in minutes
               
       Recovery time
       
       
       
       Different scenarios for different types of incidents
       
     
       
    Playbook = Runbook = data-driven SoP = set of instructions what
               to do when things go wrong
     
       Playbook = containing your 'play' ie sports strategies and rules etc
       
       Runbook - series of operations and procedures
       
       Runbook automation - carry out these operations in an automated manner
     
       SoP = standard operating procedures
       
     
     
               
    Types of data
     
       Personal Data
       
               PII Personally Idendifiable Info eg Date Of Birth or Mothers Maiden Surname
       
               Payment Card Info including CVV Card Verification Value (3-digit)
       
                      PCI DSS Data Security Standard
               
                              Note : stricter laws apply to PCI DSS vulnerability scans, for example any false positives can't be filtered out but must be left in the report with a note to that effect.
                      
                              Also : if your system has changed in any way, PCI DSS requires that you carry out an immediate new vulnerability scan to determine if the changes have exposed your company to any new vulnerabilities
     
                              PCI DSS must show compliance eg to CIS benchmarks
                      
                      
               PHI Protected Health Info
               
                      Anonymized
               
                      De-identified has code to re-idenitfy the person if necessary
               
                      unlike credit card info, cannot be changed.
               
                      used for insurance fraud etc
               
       
       Corporate Data
       
               IP intellectual property eg a book or film published by a company
               Corporate Confidential Data - secretly owned company data, hidden from 
                      competitors to give an advantage
               Accounting
               Mergers/Acquisitions
               Programming Code
               
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
    Forensics Tools : Module 4 Unit 2
     
       Forensics is science of collecting data in a criminal investigation
       
       FTK Forensic Toolkit
     
               Latent = hidden, cannot be seen - must be gathered using computer
     
               Workstation
               Write Blockers
               Cables and Adapters to connect to different devices and drives
               Blank media eg HDD, CD, DVD, BluRay, USB
               Cameras
               Crime Tape
               Tamper-Proof Seals
               Forms
     
                      1) IRP = Incident Response Plan : Pre-written
     
                              Playbook = series of steps
               
                              Aims
     
                                     1) Re-establish secure working system
                                     2) Preserve criminal evidence
                                     3) Prevent it happening again
     
                      2) Call/Escalation List : Who will be responsible and who to notify, how
                                     eg Management, Legal, HR, Marketing
     
                      3) Incident Form : Details of this incident
     
                              - date, time location of incident and its detection
                        - reporter
                        - observation method
                        - classification (type)
                        - prioritisation
                        - scope
                        - actions
                        - outcomes
     
                      4) Chain Of Custody Form : For Evidence eg Hard drives or images
               
                              Tamper-evident bags
                              
                                     Anti-static shielding
                                     
                              Everyone who handles even on way to court must sign
     
                      
     
     
       Crime Scene
       
               Crime tape
               
               What?  eg BYOD - can we legally seize it?
               How?
                      
       Order of volatility
       
               CPU
               Swap file
               Tables eg routing table
               RAM - may have copies of encryption keys in RAM which have been used
                                     to decrypt data on the drive - if you turn off the PC, that data
                                     will be gone
               Temp files
               HDD
               Logging data
               physical config 
               network topology
               archived media
     
     
     
     
                      
       Examples of forensics
     
               EnCase : Forensic Suite (of tools to perform forensics)
                      eDiscovery : manage data collected
                      Endpoint Investigator : use server to analyse clients
               
               
     
     
               
               Sleuth Kit = command line tools
               
                      Autopsy = GUI
                      
                      create a case
                      
               Helix
                      Linux LIVE CD : does not affect host
                      
               Cellebrite : Mobile forensics
               
                      UFED Universal Forensic Extraction Device 
                              Forensically clean : does not affect data it is investigating
                              
               Sysinternals
               
               
       Forensics Workstation
       
               Multi-core + 32GB RAM
               
               No internet or severely limited just to sites required for investigation
               
               TASK and Autopsy Forensic Browser can be found at the following locations:
               
               Task: 
               
               http://prdownloads.sourceforge.net/sleuthkit/task-1.60.tar.gz?download
     
               Autopsy Forensic Browser:
               http://prdownloads.sourceforge.net/autopsy/autopsy-1.70.tar.gz?download
     
               Google 'sans building a low cost forensics workstation'
                      https://uk.sans.org/reading-room/whitepapers/incident/building-cost-forensics-workstation-895
               
               MOLEX
               SATA
               PATA
               SCSI
               FIREWIRE : POWER WITH DATA (400 AND 600)
               USB
               
               
               
       1) Get Data = Image
     
       2) Hash Image = Get Checksum
       
     
     
       Getting Data 
       
               from RAM (Memory Acquisition)
       
                      Memoryze from FireEye
               
                      F-response TACTICAL
               
               Write blocker : prevents writing to RAM
               
                      = hardware device or software
                      
                      CRU Forensic UltraDock - interrogates drives
                      
                              HPA host protected area
                              DCO device config overlay
                              
               Live acquisition : computer running / shut down / pull power
               
               
     
       Hashing
     
               SHA secure hash algorithm
               
                      FIPS standard (Federal Info Processing standard)
                      
                      SHA-1 160
                      SHA-2 256/512 in IPSEC, SSL
               MDA-5
                      collisions exist (same hash for different files)
                      
                      BUT ! faster than SHA so often is default in most tools
                      
       Calculating the hash
       
               Certutil -hashfile File Algorithm
               
                      Algorigthm = MD5 / SHA1 / SHA256 / SHA512
                      
               fciv file checksum integrity verifier
               
               md5sum/sha1sum/sha256sum/sha512sum 
               
                      -c can compare file with a hash
                      
                      
       Forensic duplicate = sector-by-sector replication of image
       
               Encase uses .e01 (metadata in file)
               
               DD is an imaging tool
     
                      Raw format is .dd (raw image, metadata must be in separate file)
                      
                      if=  input file
                      
                      of=  output file
               
               dd if=/dev/sda/ of=/mnt/usbstick/backup.img
               
    Passwords
       
               
       Password Storage
     
               most passwords stored as MD5 or SHA1
       
               Windows System 
     
                      32\CONFIG\SAM          LOCAL USERS    
                      C:\WINDOWS\NTDS\NTDS.DIT       DOMAIN USERS
     
               Linux
               
                      /etc/passwd    All users can reach this location
                      /etc/shadow Only root user can reach this location
     
     
       Password cracking
     
               Cain and abel
               
               John the Ripper
               
               THC Hydra
               
               Aircrack-ng
               
               L0phtcrack and ophcrack
               
               Brute force
               
               Dictionary
               
               Rainbow table
               
               Database of commonly used passwords
                      splashdata.com
                      Daniel Miessler github
                      
               Spidering : search in plain text all files on computer, then
                      use these to try as passwords
                      
               Salt = random value added to password
               
               Hybrid attacks eg James1
               
               Pass The Hash PtH : if hash is obtained, submit it directly
               
                      Combat this -  should only log on to DC with domain admin
                                     credentials, also
                                     Restricted Admin mode restricts where domain admin
                                                     credentials can be used
                                                     
               Note : live system : might be possible to obtain from memory (RAM)
               
               
       SSO has ONE PASSWORD to gain access to MANY SYSTEMS
     
       OTP One Time Password is used in self-service password recovery to text
                      a code to your phone : very secure.  Also used in multi-factor 
                      authentication systems
     
     
     
     
                      
    Forensic Analysis Of Computer
     
       1) Copy of forensic image of machine
       2) Break down any passwords to obtain access to data
       3) Analyse data eg in EnCase Forensic analyser
       
       
       Log viewer : accept Windows + Linux 
       
       Prefetch file analysis (not on SSD)
       
       File System Viewer
       
               search file system for info quickly
               
               VSS volume shadow copy info
               
               System volume info
               
               Graphs of creation/deletion activity
               
               View binary files
               
               Images including looking for steganography
               
               
               
       Registry viewer
               view changes
               deleted keys
               autostart items
               
       USB Utility : report on devices which have been attached
       
     
               
               
    Analysis And Recovery (Mod 4 Unit 3)
     
       SIEM security info and event mgt : data will begin to flow in
       IDS : data flow in
       
       
       
    Detection Of An Active Threat (Real Time ie being attacked now)
     
       OODA 
               Observe
                      Gather info.  Care - not 'analysis paralysis'
               Orient
                      What type of attack? Which stage? 
               Decide
                      What can we do
               Act
               
       Goal - gain initiative
       
                - move from REACT to WELL THOUGHT OUT RESPONSE
                
                
                      
       CoA Courses Of Action matrix
       
               Detect : adversary and their resources
               
               Destroy
               
               Degrade
               
               Disrupt
               
               Deny
               
               Deceive
               
               
    Unusual Traffic Patterns
     
       DDoS : difficult to establish what is causing and where coming from 
     
     
               ICMP flood = PING flood = Smurf Attack
     
               Fraggle attack = as Smurf attack but using UDP not TCP packets
     
               TCP SYN flood : create new TCP connections
     
     
     
     
               Must analyse log files
                      Send traffic to sinkhole or blackhole
                              sinkhole = fake gateway : prevents INTERNAL TRAFFIC FROM 
                                             REACHING THE REAL (BAD) SITE, AND ALSO CAN BE LOGGED
                                             WHICH INTERNAL CLIENTS ARE TRYING TO REACH THESE SITES
                                             
                                             Example : when a DNS QUERY is received for a site which is known to be malicious, the DNS response can be to a LOCAL SINKHOLE so if the client does try and connect to this malicious site, the packet request actually is sent to this LOCAL SINKHOLE so never even reaches the malicious site!!! Can be logged also.
                                             
                              BLACKHOLE = route to which traffic is sent, dropping
                                             all packets 
                                             
                                             ip route 1.1.1.1 255.255.255.0 null0
                                             
                                             
               Watch for outgoing traffic caused by your computers being
                      hijacked (as a 'bot')
                      
    Network tap : hardware device : cannot be detected once in place so a physical inspection of the network is required
     
     
    Rogue wifi/switch/router can be used to try and harvest logon credentials, also potentially a MITM attack
     
       Evil twin is a device with same name as the real device eg a WIFI point with same name
     
       Rogue Switch : can turn off DTP Dynamic Trunking Protocol so that rogue switch can't get access to good VLAN data
     
    Authorised device : can be used in unauthorised way
     
       eg try to connect to server with RDP or SSH
       
       
    Smart appliances : can be installed on a network without checking
     
    Beaconing = phoning home but both good and bad devices do this. check for
       malicious IP and bad packet sizes
       
    Scan sweep of network
     
       
    Host-based detection
       Sysinternals (windows)
               1 hour long video on sysinternals and malware
               https://technet.microsoft.com/en-us/sysinternals/gg618529
               
               
       Windows Forensic Toolchest
       
               WFT (paid for software)
               
               
       Redline from FireEye (freeware) : analyse RAM and processes
       
               has IOC Indicators of Compromise 
               
               
               
    Dropper
     
       malware installing malware 
       
       Masquerade : replace good with bad .exe
       
       DLL injection of bad .dll
       
       Dll sideload : loads malicious DLL
       
       Process hollowing : fake the memory addresses of a process
       
       
    Signed files
     
       Check signature is valid
       
               Process Explorer
               sigcheck in process explorer
               
       Compressed (packed) processes highlighted in yellow in process explorer
       
    Delete process
       is it restored at system reboot?
       can it be deleted? if not, why?
       
    Autoruns from sysinternals - which startup locations a program is running from, and does it run automatically?
     
     
    Resource usage
     
       CPU
       
       RAM
       
               shouldiblockit.com
               
       HDD
               du disk usage tool from sysinternals
               
               
    Bad USB devices which pretend to be another class of device eg a keyboard
     
    Unauthorised changes
     
    Unauthorised privileges
     
       AccessChk 
       AccessEnum   both in SysInternals
       
     
     
     
     
    DLP Data Loss Prevention - ensuring data is not being stolen
     
    Data Exfiltration
     
       HTTP/S 
               onedrive, google drive, dropbox
               
               Note that SSL versions 1,2 and 3 are now officially vulnerable so the fix is to use TLS 1.1 or above instead.
               
               
               
       FTP
       IM
       P2P
       Email eg gmail
       SSH
       VPN
               Note that PFS Perfect Forward Secrecy can be used to prevent a VPN key from being used if it is discovered later on after a session has finished.  Keys are generated afresh each time so old keys cannot be used.  Requires setting up both on the VPN server and client.  A master key may be obtained by the hacker, but because each key is freshly generated as an individual 'session' key, it's impossible to regenerated old 'session' keys
               
       Steganography - can be done for small amounts of data - hide data within an image, audio or video
     
       VLAN
               double-tagging : gain access to another VLAN to which you shouldn't have access
     
     
     
     
       
       File copy to USB etc
       
       
    RAT Remote Access Trojan
     
       nc Netcat  (linux and windows)
       
               grant access to cmd.exe remotely
               send files
       
       cryptcat does the same thing, but encrypted
       
    Staging Area
     
       Store zip files or chopped-up-zip-files ready for transport
       
       Data can be stored hidden in NTFS ADS Alternate Data Streams inside a file.  Can query this using powershell or ADS Spy.
       
       
       
    Anomalous Activity
     
       Unusual request patterns
       
    Unexpected Outbound Communication
     
       Check outbound port usage
       
       Check traffic over legitimate ports, to check the traffic is legitimate
       
       Check destination IP with blacklist providers
       
               BrightCloud
               MX Toolbox
               urlvoid.com
               ipvoid.com
               
               
    Creating new accounts : all should be authorised
     
    Service interruptions
     
       Malware stopping anti-virus from running
       Service infected with malware so won't run
       Service disabled by DOS attack
       
     
     
     
     
     
    Buffer overflow
     
       Execute code from memory location or
       Crash process or
       Crash computer
       
       Each process gets buffer to which it can read/write.  Vulnerability
               writes to this buffer but also to areas beyond this buffer.
     
       Mitigate with INPUT VALIDATION (especially max length!)
     
     
       
     
     
     
     
               
    Man-in-the-browser attack : adding extra fields into an HTML form
     
     
    Sysinternals tools
     
       Process explorer
       
               <<detailed analysis of windows services>>
               
    Dropper
     
       launches other malware
       
       <<book example of running powershell in this manner>>
       
    Process Monitor
     
       
    Run a keylogger : can detect if this attack has been suspected
     
    Netstat : check destination IP
     
    Autostart (Persistence)
     
       Sysinternals autoruns
     
    Containment Techniques
     
       Analysis Paralysis
     
               Be aware 90% of attacks obtained access within minutes and obtained data filtration within minutes
       
       Prevent ongoing intrusion
       
               Removal (remove item from network)
               
               Isolate (leave machine on network but direct comms to blackhole)
               
               Segment (leave machine on network and permit attacker to think they
                              have access.  Like honeypot).
     
                              Can be Layer 2 (MAC) or Layer 3 (IP)
     
     
                              
               Reverse Engineer
                      decompile; even trick the enemy by rewriting some code
                      
       
     
       Involving law enforcement
     
               They may be happy to let attack continue so they can gather more info
               They may have greater skills
               They should be involved if law is broken
                      
                      
                      
    Eradication
       Clean image on top of CE Cryptographic Erase (like bitlocker but throw away the key)
       
       NIST 800-88 sanitizatision
       
       Physical destruction of disk : shredding
       
       Degauss : magnetic wipe
       
     
       
       
       
    Sanitization Process
     
       Contain eg within quarantine area
       
       Check for all malware processes
       
       Terminate processes
       
       Delete files giving rise to any malicious processes
       
       Remove autostart locations
       
       Replace contaminated processes with the legitimate version
       
       Reboot system, still in quarantine
       
       Check for malware
       
       Reintroduce system to normal network
       
     
       
    Validation = Ensure system is fixed
     
       Ensure system can't be assailed by threat vector 
       which has just been responsible for the attack : 
       ie we have fixed the attack but also prevented it from happening again
     
       Check:
               Patches : up to date
               Permissions : intact
               Scans : check fully working and can alert of new attacks
               Logging : check fully working and can alert of new attacks
       
       
    Lessons learned
     
       report writing
       
       Who was the adversary? Insider? External? 
       Why was the attack made? Motivation? Targets?
       When?  Attack? Detection? Contain? Erase?
       How? Which TTP Tools Techniques Practices were used?
       What security could have prevented such an attack?
       
       Incident summary report
       
       Update Incident Response Plan
       
       Change control : ensure changes made to strengthen system are robust and validated
       
       
     
     
     
     
     
     
     
     
    Security Architecture : Module 5
       
       
     
       Zones : Network segments with traffic between zones controlled eg with a firewall enforcing ACL rules
       
       Bastion Host = DMZ external internet-facing servers 
       
               often configured as proxies, talking to services inside the LAN
               
       Jump Box = single machine on DMZ from which the admin consoles on the bastion hosts may be reached.  Access to the Jump Box is tightly controlled eg by single firewall rule to single IP or small subnet on LAN
       
       Management machines (on the LAN) which connect to the jump box should be denied broad internet access
       
     
    Blackhole
       Redirect unused ports to specific part of network that is a dead end
       
               create VLAN or
               redirect traffic to NULL router interface
       
       DOS attack : normally use ACL but instead can just put all traffic to a blackhole
       
    Sinkhole
     
       Instead of blackhole : deleting all packets
       
       Sinkhole is alternative gateway through which all the traffic redirected can also be analysed
       
               Goal is to find out source of attack and neutralise it
               
               Martian packet = packet destined for IANA Private or restricted range
       
               Bogon = unallocated range on the internet (there are none left)
               
               
               
    Hardening
     
       Host Baseline = minimum secure config
       
       Attack surface = what can be attacked
       
               Interfaces - wired and wireless
               Services
               Ports
               
       Baselining checklist
               Remove all non-necessary devices 
               Install OS updates and patches, and application updates etc
                      Note : test updates etc offline first then use distributed system to update clients
               Uninstall all unnecessary network protocols
               Uninstall/disable services 
               Remove / disable unnecessary shares
               ACL on all resources
               Least Privilege user accounts especially with regards to installing software
               Rename local admin and apply strong password
               Disable guest accounts
               Disable default group accounts
               remove everyone group permissions from resources
               Install and update AV. Autoscan USB&Email&Downloads
               Routers and Switches: Update OS, Firmware, ROMMON = OS in NVRAM
               
       DOS attacks - consider possibility and mitigate or provide backup resources
       
       Compensating control - mitigates for the failure of a control
               eg data backup
               eg putting a system offline
               
       
       Group Policies
     
               Admin Templates - registry
               RSoP - settings can be viewed
               
               Security Templates
               
       DAC - discretionary NTFS ACL
       
       MAC - mandatory CLASSIFIED ETC  - Need to know basis
       
               Subject can't set or change the MAC level
               
       Endpoint security
       
               Endpoint = client device
               
               Perimeter security = gateway/firewall/dmz etc (opposite of endpoint)
               
       Port security : restrict access
       
               disable using management software
               
               MAC filter : hard in practice
               
               MAC limiting : only will register first two MAC addresses then drop the others
               
               MAC flooding : switch could 'fail-open' and become like a hub 
                      so attacker easier to sniff
                      
               802.1x port based control  (port based NAC = PNAC)
               
                      supplicant = client device requesting access
                      
                      switch = authenticator
                      
                              EAPoL EAP over LAN requires password, token or certificate
                              
                              Pass to RADIUS server for authentication
                              
                      unauthenticated hosts => go to guest VLAN
                      
       
    Extra
       
       Is intrusion primary or secondary
       
       Avoid alter attacker
       
       Preserve evidence
       
       
       
       
       
       
       
       
       
       
       
    Identities : Module 5 Unit 2
     
    NAC 
     
       Health policy : firewall, updates etc
       
       Agent on client
       
       Remediation to bring to good health
       
               refuse or
               quarantine (if VPN) or
               captive portal (if web app) and from there install fixes
               
       Pre-admission
       Post-admission - is it still compliant?
       
       NAC Policy
       
               Time restrictions
               Location restrictions
               Role-based restrictions (user and device)
               Rule-based restrictions
               
               Microsoft NAC
               Cisco CNAC
               TPM NAC 
               
               Context-based authentication 
                      Time
                      Location
                      Frequency : number of logins during a given period
                      Rule-based : can have multiple factors involved
               
       
       
       Types of rules
       
               Anti-Malware
                      Signature based = HASH
                      Behaviour Based = Deviation from baseline eg high CPU/RAM, high traffic with DOS attack
                      Anomaly Based = Patterns beyond the normal eg check packet headers for anything unusual, or traffic patterns
                      Heuristic = real time scanning, looking for certain patterns in malware code
               NAC
                      Time based
                      Location based
                      Role based
               
       
    Identity
     
       Enrol = sign up
     
       Provision = create new accounts for users / customers
               Online provisioning - should include CAPTCHA to prove not a robot
               Employee provisioning - should include identity proofing as you can properly
                              verify who your employees are
     
       Identity proofing = proving the person is the person they say they are, at the time of signing up
       
       Subject to approval so insiders cannot just create accounts
       
       Revoke
       
       SSO
    
    
    
    Identity management
     
       Priviliged accounts - RESTRICTED USER 
       
       Shared accounts - non repudiation is not possible
       
       
       
    Roles
       RBAC Role Based Access Control - access depending on your job role
       
               Authorization Manager
               
               
     
    Digital identity
     
       MAC can be spoofed
       IP can be spoofed
       Certificates : far harder to be spoofed
       
       
       Rogue machine identity
       
               Wired
                      Host
                      Switch
               Wireless
               Apps
               VM
     
               
       Detection
               Physical inspection
               Network scan : hosts
               WIFI scan : hosts
               Network scan : protocols and ports
               NAC compliance
               
               
       Execution control
               Managing apps (white/blacklist)
               
       Digital signing 
       
               sigcheck -tv can check (from Sysinternals) root certificates against
                      Microsoft
                      
               OpenSSL 
               
               certutil (Windows)
               
     
               
       RADIUS
     
               Radius server performs authentication (AD)
               
               Client - 802.1x - wifi or other - RADIUS - AD LDAP AUTHENTCATION BACKEND
     
               windows NPS
               
               linux FreeRADIUS
               
               uses UDP
               
               encrypts ONLY PASSWORD
               
               
               
       TACACS+
       
               uses TCP
               
               ENCRYPTS ALL DATA - so more secure than RADIUS
     
     
       LDAP (Active Directory)
     
               LDAP 389 
     
     
               
               
    Defences
       multiple logon attempts
       geo-velocity - trying to logon from different placess geographically
       device fingerprinting - is this the first time this device has been used? if so, use two-factor authentication
       
       
       
    SSO
     
    Federation
     
       open to business partners
       
       provisioning = creating accounts for use with federation
       
               manual
               auto eg by group membership
               
       SAML : token-based SSO (security assertion markup language)
       
               SAML is enterprise controlled
       
       OpenID
     
               sign on with .. google, facebook account etc
       
               user-centric logon
               
               no sharing of data from eg google to the company using this login
               
               OpenID Connect uses OpenAuth also
               Facebook connect ...
               
       OpenAuth  (Open Authorization)
     
               site providing sharing of data with site being authenticated
               
     
    Password reset
     
       1) questions
       2) secondary verification eg text or email
       
       
       
       
    Hacking attempts
     
       Impersonation : pretending to be somebody else.  
               Use 'identity proofing' to mitigate = be sure to identify someone properly online 
     
     
       DNS Spoof
       pharming = DNS Spoof
       
       Session hijack : mitigate with encryption of session
       
       Replay attack
       
       MITM
       
       MItB
       
       ARP Spoof
       
               Ettercap lab
               
               detection : use Snort to identify suspicious traffic 
                       or manually inspect arp -a for fake mac addresses
     
               DAI Dynamic ARP Inspection : prevent ARP Spoof : drop Ethernet packets that do not have a known sender, recipient and a valid entry in VLAN table
     
     
     
     
       Privilege escalation
     
               Using FLAW IN APPLICATION TO GAIN ACCESS
     
               Backdoor = deliberate
     
               Vertical : go from user to admin rights
               Horizontal : go from one user and gain access as another user
     
     
       
    Web hacking
     
       SSLstrip
       
               tricks user into thinking connection is secure when it's not
               
               Padlock is not showing so user can spot this and know they are
                              being hacked
                              
               HTST can prevent this attack : HTTPS is the ONLY TRANSPORT ALLOWED
                              TO THAT SITE SO HTTP IS NOT AN OPTION, SO AN ATTACKER CANNOT
                              FAKE AN HTTP SESSION
                              
       XSS Cross Site Scripting
     
               Malicious code runs on client browser with same permission level
                      as a trusted site
                      
               reflected = non-persistent attack : once
               
               stored = persistent attack eg malicious script stored in a blog 
                      or user forum
                      
               XSS is script from server executed on client
               
                      eg GET /cgi-bin/log.cgi?<script>...</script>
               
               Or
               
               could execute a script to create a new DOM page 
     
               Mitigate with INPUT VALIDATION
               
     
       XSRF : like XSS cross-site scripting but have additional power due to 
               virtue of also being logged in (authenticated to site)
     
               mitigate by mutual authentication on both sides of the connection
               
               
       Cookies
       
               Retain information about STATE
               
               Cookies are sent WITH THE HTTP REQUEST FROM CLIENT TO SERVER AND BACK
               
               NON-PERSISTENT = SESSION
               
               PERSISTENT
               
               XSS ATTEMPTS TO USE COOKIE ON ANOTHER SITE
               
               SSL COOKIES ARE TRANSMITTED ENCRYPTED BUT STORED PLAIN TEXT
               
               
       XSRF EXPLOIT COOKIES
       
               can exploit applications which use cookies to authenticate and
                      track sessions
     
     
                      
                      
                      
    Frameworks and Policies : Module 5 Unit 3
     
       Framework = set of policies put in place.  
       
       Compliance is testing if an organisation is putting the required
               policies into effect
               
       
       NIST National Institute Standards Technology
       
               NIST 5 CORE FUNCTIONS / FRAMEWORK (guidance not best practice) 
               
                      Identify (threats)
     
                              Manage Assets
                              Risk Assess
                              Govern
                              Business Environment
                              Risk Strategy
                              
     
                      Protect (data and systems)
                              Information Processes
                              Access Control
                              User Training 
                              Data Security
                              Maintenance
     
     
                      Detect
                              Events
                              Anomalies
                              Continuous Monitoring
     
                      Respond
                              Response Plan
                              Comms
                              Analysis
                              Mitigate
     
                      Recover
                                     Recovery Plan
                                     Improve
                                     Comms
     
     
               Implementation
               
                      Partial, Risk Informed (Policies and procedures), Repeatable, Adaptive (continuous improvement)
                      
               Profiles
               
                      Maximise productivity in expenditure by identifying 
                      current and expected states, and investing to bring
                      an organisation into an expected state
     
               Secure By Default : out-of-the-box-security is turned on
                                                     Design : programmers build with security in mind
                                                     Deployment : info secure environment
     
     
     
                      
       ISO 27001 : is an ISMS Info Security Management System
     
               Manages sensitive company information, keeping it secure.
               Paid $$$ 
               Applies Risk Management to help keep systems secure
     
               
               
       COBIT Control Objectives for IT
     
               Business Framework for managing IT within a business framework.
               Reflects role of IT in creating value for a company
       
               Paid standard
       
               CISA Certified Info Systems Auditor
               CISM Certified Info Security Manager
               
     
     
       ITIL v 3 = Best Practice (Note : NIST is similar but guidance only)
     
               Service Strategy
                       Design
                       Transition
                       Operation
               Continual Service Improvement
     
     
     
     
     
       TOGAF The Open Group Architecture Framework
       
               Guidance on the architecture and design of an enterprise IT architecture
     
               Modelling a business through IT
     
     
     
     
     
     
     
               
       SABSA Sherwood Applied Business Security Architecture
               
               Deals with ENTERPRISE SECURITY AND SERVICE ARCHITECTURE
     
               What - ASSETS
               Why - MOTIVATION
               How - PROCESSES
               Who - PEOPLE
               Where - LOCATION
               When - TIME
     
     
       
     
       
     
       
    Analysing Data : Data Analytics
     
     
    Data Aggregation: SIEM eg Splunk and OSSIM : collecting and summarising large
       amounts of information
     
    Data Correlation: SIEM eg Splunk and OSSIM : relating data to each other to 
      find trends or relationships
     
     
     
    Logs 
     
       Firewall eg block packet at layer 3
       Syslog - central logging for Unix and Linux
       Authentication eg Security Log
       Event Logs eg System or Application Log
     
       
    Historical
       Trends, lessons learned
       
    Trends
       
     
       
       
       
       
    Remediation = risk mitigation = reducing risk
     
       Deterrent
     
       Make threat less likely or less costly 
       
       Avoid risk
       
       Transfer risk
       
       Accept risk
       
    Defence In Depth : Technical
     
       Scanning 
       Permissions
       Prevent machine on network (NAC)
       Auto reporting
       Security hardware
       Security software
       Outsourcing to experts
       CIA encryption etc
     
    Defence in Depth : Personnel
       User training
       Dual control
       Separation of duties
       Cross train
       Vet 3rd party
       Mandatory vacation
     
     
       
       
       Consultants : give advice
       
       Managed Security Services Provider : outsource your security!!!
       
       SECaaS security as a service eg cloud AV
       
     
     
    Policy
     
       Standard : measure compliance with a policy
       
       Procedure : SOP : task steps 
       
       Guidance : where no procedures exist
       
       
    Continuous security monitoring
     
       RUM Real User Monitoring : Captures every transaction on a live web app
       Synthetic Monitoring : Only testing simulated transactions (not real ones)
     
       Continusously monitor for:
     
               Assets
               Vulnerabilities
               Threats
               Business Impact
     
       Create continuous monitoring program:
               Define strategy with assets, vulnerabilities, threats, business impact all with
                      a view on the company's levels of risk tolerance
     
               Establish continuous monitoring program which has
                      Metrics (what we measure)
                      Frequency of measurement of metrics
                      Frequency of review of whole process
     
               Implement
     
               Analyze data
     
               Respond to findings
     
               Review and update the program
     
     
     
     
     
       
    Exceptions to the policy : reason why is not compliant
     
    Forensic evidence gathering : clean!
     
    Patching
     
     
     
     
     
     
    Quality Control = testing
     
       QA = define standards of control and testing
     
     
     
     
       
    V&V Verification and Validation
     
       Verification : does your item meet a policy?  (compliance)
       
       Validation : does your item do the correct job that it is supposed to (functional)
       
       
     
     
     
     
     
    Control Testing 
     
       Test if you controls which you have put in place are correctly configured
     
       Audits
               Internal
               External
     
       Assessments
     
               Formal evaluation against a checklist 
     
     
       Evaluations
     
               Evaluation = bigger picture : several assessments make up one evaluation
     
     
     
       Maturity Models
     
               Assess how well developed a company's security models are
       
               Tier 2 : Risk Assess
              3 : Defined policies
                    4 : Management oversee risks
                    5 : highest
     
               Maturity model scale (non-numeric)
                      Reactive
                      Compliant
                      Proactive
                      Optimised
     
     
     
     
       Certification
     
               Assessed formally against a 3rd party standard; often independent evaluation ie
                      3rd party
     
     
     
     
     
    Scheduled Review
       Incidents
       Trends
       Analysis
       Changes
       Additions
       Progress towards compliance
       
    Enhancing processes
     
       Continual improvement
       Process review
       Process retirement
     
     
    Policies
     
       Password policies
     
       Account management policies
     
       AUP Acceptable Use = Fair Use
     
       Privacy Policy
     
     
     
     
    Surveillance
     
       Security assurance = monitor data comms to ensure no data theft
       
       Monitor data eg email, telephone
       
       Physical monitoring : CCTV, alcohol/drugs test
     
     
    Data classification
     
     
    Data retention policy
     
       Short term : version control
       
       RPO in backups : last point at which a backup was taken
       
       RTO : Recovery Time Objective : goal (in time) to get system up and running after a fault/attack - less than MTD Max Tolerable Downtime
       
       
       
    Personnel Policy / Training
     
       Separation of duties
     
       Job Rotation
       
       SOP Standard Operating Procedures
       
       Dual control : shared ownership of critical areas
       
       least privilege
       
       auditing : decisions are recorded
       
       mandatory vacation
       
       rotation of duties / job rotation
     
       succession planning 
               
       Mitigate personnel vulnerabilities with training and also with multi-factor authentication
     
               
               
    Succession planning
     
       plan for change!
       
       
       
       
    Security Awareness Training
     
       Policies
       Penalties
       Incident response 
       Site security
       Data handling
       PII
       backup
       encryption
       password management
       account management
       Social engineering
       Use of browsers and other networked software
       Role-based training
       Cross-training
       Certification
               (ISC)2 = CISSP 
               SANS = GIAC - Security Essentials
               ISACA -        CISA Auditor and CISM Manager
               EC-Council - CEH Certified Ethical Hacker
       
       
       
     
     
       
       
       
       
     
                
                
                
                
                
                
                
                
                
                
                
                
       
     
       
       
       
       
       
       
       
       
       
       
       
       
       
    Other material from Transcender Exam material
       
       
    Compensating Control
       Makes up for failure of others
    Gantt Chart : Project management chart
    PERT Chart : Project management chart with tasks in sequence
    subpoena : written request to attend court
     
     
     
       
     
                      
                      
                      
                      
                      
                      
                      
                      
                      
                      
                      
                      
                      
                      
                      
               
               
                      
     
               
       
       
     
       
               
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
               
               
               
               
               
               
               
               
               
               
               
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
               
               
               
     
     
       
       
       
       
       
       
       
       
       
       
       
       
     
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
     
               
               
               
               
               
               
                      
               
               
               
               
                      
                      
                      
                      
                      
                      
                      
                      
                      
               
               
               
               
               
               
     
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
     
     
     
     
     
     
     
    == end of Reconnaisance Mod 1 Unit 2
     
    Glossary of baddies
    Stuxnet - attack against a nuclear reactor
    Flame
    Operation Olympic Games
    Mydoom
    Shamoon
    Melissa
    Zeroaccess rootkit
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
    Glossary
     
    Aircrack-ng wireless
    APT Advanced Persistent Threat : stronghold from which bad guys launch other software
    ArcSight by HP : security suite
    SIEM = general term = Security Info and Event Mgt.  COLLECT AND ANALYSE DATA
    Syslog = COLLECT DATA ONLY
    Autopsy = front end for Sleuth : disk imaging and file analysis
     
    Beaconing : phoning home
     
    Birthday Attack = 2 files, same hash
    Black hole = drop all traffic
    Blind FTP : no file or folder listing provided
    Blue team : defensive team in simulation role play
    Bluejack : hijack (virus) over bluetooth
    Snarf : steal data
    Bluesnarf : steal data
    Bro = LINUX IDS
    Cacti = open source logs with graphs
    CAN Controller Area network : between small PLC Programmable Logic Controllers
    CAPTCHA
    CAR Corrective Action Report : steps to take to fix vulnerability
    Cellebrite : get data out of mobile phones for criminal investigation
    UFED : get data from mobile phones : Universal Forensic Extraction Device
    Check Point : firewall
    CIS Center for Internet Security : partly by SANS 
    SANS : Sysadmin, Audit, Networking, Security : not-for-profit
    CISO Chief Info Security Officer
    COBIT : Control Objectives for IT : security framework
    CSIRT Computer Security Incident Response Team
    CVE Common Vulnerabilities and Exposures
    DIG = NSLOOKUP
    Tasting = try domain to see if it gets hits
    Cybersquatting = buying someone else's domain name
    Hijacking = using someone else's domain name (or similar)
    OSINT Open Source Intelligence : anything that can be found openly on the internet
    EMET Enhanced Mitigation Experience Toolkit : requires 3rd party processes to run with NX (No-Execute) and DEP Data 
    NX No Execute - separates area of memory holding 1) CPU instructions 2) data.  Main use is to ensure that data which EXECUTES is ONLY EXECUTING FROM THE RIGHT AREA OF MEMORY IE NOT THE 'DATA' PART.  This helps to thwart BUFFER OVERFLOW ATTACK 
    DEP Data Execution Prevention - prevents code from RUNNING FROM DATA AREA OF RAM
    EnCase Forensic : Case Management
    Flood Guard : prevent DDoS
    Latent = hidden (evidence, has to be drawn out using techniques)
    FTK Forensic Tool Kit
    Fuzzing - generate random testing data
    Google Hacking : detailed google search to discover otherwise hidden data about your potential targets
    Helix : Linux Live CD
    Heuristic : live active searching for patterns in viruses
    Imperva : WAF Web Application Firewall : data center security
    MITM
    Interception Proxy = MITM : Receives all the requests and the responses before passing them on
    Jump Box = in DMZ, provides access to admin consoles of other machines in DMZ
    escrow = 3rd party trust
    M of N = M keyholders must be present to unlock N keys
    Kill Chain - stages of attack
    Kiwi Syslog = central log management
    Metasploit = exploit framework = launch modular attacks from this; each module attacks one particular CVE
    CVE Common Vulnerabilities and Exposures
    MoA : Memorandum Of Agreement : informal agreement for 2 parties to work together : forms basis of legal contract
    ModSecurity = open source WAF 
    MoU : Memorandum Of Understanding : preliminary expression of wish to work together
    MRTG Multi Router Traffic Grapher - monitors load on network links
    Nagios = open source stats on services
    NAPT = NAT 
    NAXSI = nginX Anti XSS and SQL Injection
    Nessus = commercial vulnerability scanner
    Netflow = Cisco IP traffic flow diagramming tool
    NetScout = commercial enterprise-level network service assurance products
    Nexpose = vulnerability scanner (Metasploit)
    Nikto = web server vulnerability scanner
    NIST National Institute Standards Technology
    Nmap network mapper = host discovery
    OODA Observe, Orient, Decide, Act for quick thinking and decision making under attack
    OS Fingerprint = identify OS
    OSINT Open Source Intelligence
    OSSIM Open Source Security Info Mgt
    OVAL Online Vulnerability and Assessment Language
    OWASP Open Web App Security Project
    PAC Proxy Auto Config : can also be used maliciously to redirect users to fake proxy sites
    Palo Alto IDS
    Password cracker eg John the Ripper / Cain and Abel
    PCI DSS Payment Card Industry Data Security Standard
    PHI Personal Health Info
    PII
    Privilege Escalation
    QRadar = SIEM from IBM : logs, analysis and policies
    Qualys = cloud based vulnerability management (agents run on clients)
    RPO Recovery point objective : time to last backup (represents data you can lose if there is a disaster)
    RTO Recovery time objective : planned uptime after disaster
    S/MIME encrypts email
    SABSA Sherwood Applied Business Security Architecture
    SANS SysAdmin, Network, Security
    SCADA = manage industrial systems
    SCAP = Security Content Automation Protocol = does computer meet baseline security standards
    SCEP Simple Certificate Enrolment Protocol
    SCP Secure Copy Protection
    SEH Structured Exception Handler  : handles exception
    SIEM Security Info and Event Mgt = collect and analyse data
    SMTP Open Relay : can be used by spammers to send email
    Snort : Open Source NIDS
    SourceFire IDS owned by Cisco
    Splunk : big data gather and analyse
    taskkill
    tasklist
    tcpdump : command line packet sniffer
    TOGAF The Open Group Architecture Framework
    Trusted Foundry : full chain of hardware suppliers can be verified to be security vetted (so not inserting any spying or other malware in the very hardware)
    UAT User Acceptance Testing
    UEFI
    UNC
    VAS Vulnerability Assessment 
    White Team : admin in a simulated conflict
    Write Blocker : prevent the forensic analysis software from interfering with the data on a drive
    Xmas Attack : Scanning but with unusual settings to ON for certain packet flags to try and provoke certain responses from the device being scanned, to reveal information
    XSRF : Authenticated session attack from one site to another
    XSS Cross Site Scripting : script injected into trusted site to compromise clients running on trusted site
    Zero day attack : new software
    Ports
    LDAP SECURE WITH SSL 636
    RADIUS 1812/3 OR 1645/6
    TACACS+ port 49
    LDP 389
    LDAPS 636
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
    ADS Alternate Data Streams - originally conceived as a way to use Forking in the same way as the MAC OS, Windows permits basically embedding one file into another without having traditional methods detect that a file has been embedded.  Also when the embedded file is run, the process shows only of the host running so there is no way of knowing which is the real and which is the embedded process at work.  Only way of detecting and defeating is by HASHING the files and also by using dedicated ADS trackers.
     
    For instance:  the command
     
     "type c:\anyfile.exe > c:\winnt\system32\calc.exe:anyfile.exe"
     
    will fork the common windows calculator program with an ADS "anyfile.exe."
     
    ADS can be queried using powershell get-object abc.txt -stream
     
     
    File Fork - split up files into multiple parts, but the OS treats them as one file and will track the position of each relative part of the file.  Also can be looked on as data sets hidden inside one file.
     
     
     
    TTP Tactics, Techniques and Procedures (used by hackers)
     
    SIEM = general term = Security Info and Event Mgt
     
    Exfiltration = copy data out of system
     
    OpenSSL Heartbleed is a vulnerability
     
    EXPLOIT MODULE = TRY AND EXPLOIT A VULNERABILITY
                      
    PAYLOAD = WHAT YOU DOWNLOAD TO A MACHINE THAT YOU FIND A VULNERABILITY ON
                      
    Discovery scanner eg Nmap : host/ip/port
     
    Vulnerability scanner eg OpenVAS, Nessus, Nexpose
     
    Exploit framework eg metasploit : launches specific attacks against specific known vulnerabilities
     
    Banner Grabbing - getting info from welcome and login screens and http header info
     
    Lua is a very fast scripting language
     
    Footprint = Topology Discovery = FIND ALL HOST/IP ON NETWORK
     
    Fingerprint = work out which software is running, and which version
                              is running, by using non-admin tools to query
     
    Burner phone is a prepaid phone that is used and then binned
    BurnerApp permits a temporary phone number to be created so that people don't know your real number. Can be disposed of instantly.
     
    Pivot Point - point of weakness or access
     
    httrack.com - download full site to local; ensures all paths work locally
     
    Droplet is a mini-virtual-private-server running on DigitalOcean hosting; set one up in a minute!  Price $5 a month upwards.
     
    SSL3.0 is no longer deemed to be secure (Minimum TLS1.1 required)
    TLS1.1 and 1.2 are deemed secure
    POODLE is vulnerability in SSL3.0
     
    OSINT Open Source Intelligence - public info
    Passive reconnaisance - uses OSINT
    bulletproof ISP - no questions asked!!!
    Google hacking - expert use of Google to find information
    Google Dork - advanced google search string 
    Website Ripping = website copier
     
    C2 = Command and Control = rogue control servers (located in enemy territory)
     
    PIVOT POINT = POINT OF ACCESS (part which is being attacked)
               
    APT Advanced Persistent Threat : INSTALL ONGOING TOOLS WHICH REMAIN
               
    CISO
     
    CSA+ control classes
     
    CoA matrix
     
    Risk factors
     
    Pen test teams : Red Blue White
     
    Pen testing SIX RULES OF ENGAGEMENT
     
     
     
    CVSS Common vulnerability scoring system - indicates how severe a vulnerability is
       
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
       
       
       
       
       
       
    Labs
     
    Peekyou.com
    pipl.com
    Google
    carrot2.org
     
    Maltego Community Edition
     
    KALI LINUX INSTALL = DEBIAN WITH GNOME
     
    arp -a
     
    netdiscover -h   view help
     
    netdiscover -i eth0 -r <<ip range>>
     
    nmap -sS 1.2.3.4
     
    nmap -A 1.2.3.4
     
    dig -h
     
    dig domain.com NS
     
    dig domain.com AXFR 1.2.3.4
     
    traceroute google.com
     
    Draw network diagram
       draw.io (best)
       CADE (free)
       others - get suggestions from students!
       
    nmap host discovery
     
    nmap -sS -sU -p ...  nmapoutput.xml
     
    zenmap nmapoutput.xml
     
    openvas-start             vulnerability scan
     
    openvas-check-setup
     
    http://127.0.0.1:9392  = greenbone security assistant = openvas GUI output.  Perform a network vulnerability scan using this tool.
     
    MBSA Baseline Security Analyser - run a scan on your server : updates and incorrect configuration
     
    mbsacli command line scan also
     
    Search for any problems identified in the scan.  Try and match against any known vulnerabilities (CVE).  If so, do you find any active exploits which could target this vulnerability?
     
    openvas : check greenbone reports
     
    service postgresql start  : Start database
     
    msfconsole : load Metasploit
     
    load openvas  : load OpenVAS  vulnerability scanner
     
    openvas_connect ...
     
    openvas_report_list
     
    openvas_format_list
     
    openvas_report_import <<ReportID>>
     
    hosts  : show identified hosts
     
    vulns -R 1.2.3.4 show vulnerabilities for a specific host
     
    search | vulns -R 1.2.3.4  search for exploits which target the vulnerabilities exposed on this host
     
    Armitage : run GUI application
     
       Connect to MetaSploit server
       
    1.2.3.4 => Scan
     
    Hosts => Nmap Scan => Intense Scan <<1.2.3.4>>  which runs db_nmap which adds results to the Metasploit database
     
    Attacks => find attack
     
    Check exploits
     
    Lab 5 : Web Scanning
     
    Zenmap : host and port scan
     
    nikto -host 1.2.3.4    to see what vulnerabilities exist
     
    nikto -o sploit.htm -host 1.2.3.4    saves output to web page
     
    firefox sploit.htm and look at vulnerabilities
     
    dirbuster to perform a dictionary/brute force attack against some web applications
     
    check out 'shellshock' vulnerability
     
    command injection : send commands to OS
     
    firefox : configure proxy 8080 with no exceptions
     
    Burpsuite : run it then 'Intercept Is On'
     
    ls
     
    ps 
     
    cat
     
    whoami
     
    getent passwd 0
     
    getent group root  - look up root users
     
    getent passwd phil - look up user phil
     
    Burpsuite => SQL injection attack
     
     
     
    Lab 6 : SNORT IDS scanning
     
    Set 'SOURCE' and 'DESTINATION' mirror modes for source router and destination detector machines
     
    SecurityOnion linux machine IDS
     
     
     
    (( Validate a signature - can do this for the ISO!!!))
     
    https://github.com/Security-Onion-Solutions/security-onion/blob/master/Verify_ISO.md
     
    ISO image:
    https://github.com/Security-Onion-Solutions/security-onion/releases/download/v14.04.5.2/securityonion-14.04.5.2.iso
     
    Signature for ISO image:
    https://github.com/Security-Onion-Solutions/security-onion/raw/master/sigs/securityonion-14.04.5.2.iso.sig
     
    Signing key:
    https://raw.githubusercontent.com/Security-Onion-Solutions/security-onion/master/KEYS
     
    For example, here are the steps you can use on most Linux distributions to download and verify our Security Onion ISO image.
     
    Download the signing key:
     
    wget https://raw.githubusercontent.com/Security-Onion-Solutions/security-onion/master/KEYS
    Import the signing key:
     
    gpg --import KEYS
    Download the signature file for the ISO:
     
    wget https://github.com/Security-Onion-Solutions/security-onion/raw/master/sigs/securityonion-14.04.5.2.iso.sig
    Download the ISO image:
     
    wget https://github.com/Security-Onion-Solutions/security-onion/releases/download/v14.04.5.2/securityonion-14.04.5.2.iso
    Verify the downloaded ISO image using the signature file:
     
    gpg --verify securityonion-14.04.5.2.iso.sig securityonion-14.04.5.2.iso
    The output should show "Good signature" and the Primary key fingerprint should match what's shown below:
     
    gpg: Signature made Mon 30 Jan 2017 02:44:55 PM EST using RSA key ID ED6CF680
    gpg: Good signature from "Doug Burks <doug.burks@gmail.com>"
    gpg: WARNING: This key is not certified with a trusted signature!
    gpg:          There is no indication that the signature belongs to the owner.
    Primary key fingerprint: BD56 2813 E345 A068 5FBB  91D3 788F 62F8 ED6C F680
     
     
     
    Do a PING then view the output in Wireshark
     
    SGUIL monitors live events
     
    Configure rules on IDS
     
    sudo nano - run text editor
     
    sudo rule-update : updates rules in IDS so they no longer generate an alert
     
    zenmap and run scan on a host. This will be detected in the IDS as a threat.  Check SecurityOnion for threat output
     
    hping3 to run a ddos attack on a machine 
     
    Spamhouse Don't Route - lists packets not to be routed
     
    PEER Drop - lists packets to be dropped
     
    SGUIL : see if anything detected
     
    Squert : get activity analysis picture
     
     
     
    Lab 7
     
    Use the SYSINTERNALS suite in this lab
     
    ./Veil.py  to run the Veil framework 
     
    info <space> <tab> <tab> evasion <enter>
     
    use evasion
     
    list to view options for GENERATING PAYLOADS TO DEPOSIT ON AN ENEMY MACHINE
     
    compiler options - EXE or within PDF or WORD
     
    Meterpreter larger but includes critical metsrv.dll 
    shellcode smaller but still have to download metsrv.dll also afterwards anyway
     
    payload type - TCP, HTTP, HTTPS, RHOST, LHOST
     
    Book => RUBY app => created a hacker app ready to download ( a 'payload')
     
    copy = cp classroom-exploit/*.* /var/www/html/ to root of apache site
     
    service apache2 start : starts web server
     
    copy the hacked file to the website also
     
    open application (icedove thunderbird)
     
    send an email using thunderbird
     
     
     
    Chapter 7 : Lab 2 : Network Miner
     
    analyse saved PCAP files (Wireshark output)
    analyse live PCAP streams
     
    networkminer.exe 
     
    send phishing email from KALI LINUX.  Click on the phishing link. Download the dodgy attachment 7z.exe to downloads folder
     
    show files downloaded eg email file .eml, html web page, images and the 7z.exe file
     
    can hash each file downloaded also
     
     
    Sysmon lab
     
    process explorer - live
    process monitor - live
    sysmon - allows logging of events so that historical tracing through events can be done
     
    msfconsole
     
    resource ...path-to-file
     
    procexp64  Process Explorer
    tcpview
    procmon
     
    sysmon
    sysmonconfig-export.xml
     
    TCPView : look at process
     
    run backdoor app
     
    event viewer - application logs - ms - windows - sysmon - operational
     
       examine malware in event viewer
       
       
       
    analyse malware incidents on 
     
       malwr.com
       virustotal.com
       
       eg
       
       
       malx.docx
       
       
     
    Lab 8 : Packet Analysis
     
    analyse pcap files and try to tell IP of attacker and victim, and any tools used.
     
    Wireshark analysis
     
    Network Miner analysis
     
    Practice as well analysing some other files downloadable via user Netresec on Network Miner
     
     
     
     
    Lab 9
     
    Using SIEM utility called OSSIM
     
       just screen walkthrough - do not install!
       
       Alien Vault is SIEM (gathering data) tool - OSSIM
       
       OSSEC
       
       OSSIM uses OSSEC HIDS agents to prioritise different kinds of events
     
       decoder : sets REGEX expressions for searching
       
       rules : assigns priority to events
       
       .cfg to parse files
       
       .sql to assign priorities, and to name events
               
               
       Assign priorities to each rule in OSSIM
     
               Playbook = series of events, which, if true, maps a priority and an event
               
       OSSIM assets in Environment => Assets and Groups
     
               Can place assets into groups
               
       OSSIM Dashboard
       
               chart output visually to give a handle on what's happening
               
       OSSIM Analysis
     
       OSSIM Analysis => Security Feed shows live events
               
               
               
               
    Lab 10
     
    Autopsy Forensic Analysis
     
    Get a vhd file for analysis
     
    Create a hash of it using
     
       certutil -hashfile mydrive.vhd md5 | find /i /v "md5" | find /i /v "certutil" >> sploit_md5_pre.txt
       
       
    Autopsy => New Case => connect to data source mydrive.vhd
     
    Ingest Modules : Specific Modules performing specific searches
     
     
     
     
     
    Analyse a disk image
     
    Autopsy => Open Case => ... => Data Sources => marketing.vhd => Hex tab
     
       Look at HEX, Strings on different disk partitions
       
               Identify 
                      MBR
                      NTFS
                      any other files
                      
                      
                      
    Research other forensic tools
     
       1) EnCase Forensic
       2) FTK Forensic Toolkit
       3) Cellebrite 
       4) CRU field analysis
       
       
       
       
       
       
       
    Lab 11
     
       Blue vs Red
       
       
       Check out UK Cyber Security Challenge for real-world scenarios
       
       Scenario : we play both BLUE and RED teams
       
       Scenario : Bobby Admin is NEW TEMP HIRE
                : Network has been compromised with an internal device fitted
                                     as a rogue device on the internal network
                                     
       Blue team : Monitor Wireshark packets
       
       Red team : have LAPTOP ON INTERNAL NETWORK
       
               KaliVM
               service postgresql start
               armitage
               msf ==> command line => run this scan
                      ==> db_nmap -T1 -A -D <<IP range>>
                      
       Blue team : can we spot that a scan is taking place???
       
               ((Possibly not if the scan is a 'slow' scan))
               
       Red team : now wants to run an INTENSE SCAN
       
               Armitage GUI => Run an INTENSE SCAN
               
       Blue team : can we spot an attack now?
       
       Blue team : incident response?
       
               Playbook would guide person what to do
               
       Red team : change IP
       
       Red team : set up website on Linux Apache
       
           cd Veil
               
               ./Veil.py
               
               use evasion
               
               use 5
               
               set lhost 1.2.3.4
               
               generate
               
               create and copy the malware to your website
       
               
       red team : hack into dns and update dns with a fake record to the fake site with ettercap
       
       red team : also hack into arp cache using ettercap
       
       blue team : monitor wireshark
       
       blue : go to phishing website
       
       red : Ettercap : Mitm => stop MiTM attack
       
       red : msfconsole
       
               note : red team has been lured into a honeypot here so blue team can monitor
               
       blue : wireshark capture
       
       blue : process explorer
       
       blue : run the 7z (hacking) process
       
       blue : check process explorer for 7z process
       
       red : hack into onedrive and try and hide malware within onedrive
       
       red : keyscan_start to monitor keystrokes
       
       red : break into honeypot .... 
       
       
     
       
    Lab 12 : Network Segmentation : PFSense
     
       VyOS router : replace with Netgate pfSense which is open source UTM tool
       
       
       Use diagnostic => mtr to verify routes
       
       blue - log packets from the firewall rules
       
       blue - configure firewall rules
       
       blue - configure suricata alerts on the firewall
       
       red : nmap nmap - topology discovery scan - intense scan
       
       red : nikto vulnerability scan
       
       red : LOIC (Low Orbit Ion Cannon) DOS attack
       
               Instructions On Running a DOS attack using LOIC
          http://pages.mtu.edu/~xinlwang/itseed/labs/intrusion_detection_intro2Snort_LOIC.pdf
               
       red : hping3 : DOS attack
       
       
       
    Lab 12 : install backdoor malware
     
       Red : Metasploit : install backdoor vulnerability
       
       Blue : check firewall logs
       
       
       
       
    Lab 13 : Password sniffing
     
       Red : Ettercap : G : Unified Sniffing : Scan for hosts
       
       Red : Ettercap : MITM Poisoning 
       
       Red : Wireshark capture
       
       Blue : log onto website with credentials
       
       Red : Try and view password
       
       
       Blue : create a domain certificate to protect the password
       
       Blue : turn on https for the website
       
       Blue : install RADIUS server
       
       Blue : install RADIUS client
       
       
       
       
    Lab 14 : Using email to hack
     
       red : create malware using Veil and evasion
       
       red : set up email as a relay (open relay = do not do this in real life)
       
       red : configure email on Thunderbird
       
       
       
    Lab 14 : XSS Cross Site Scripting
     
       red : set up Burpsuite as an INTERCEPTION PROXY
       
       
    Lab 14 : Exploiting XSS with MITM attack
     
       Use BeEF Browser Exploitation Framework (user=beef password=beef) to configure IE with a proxy address so that web requests get sent to this proxy instead of to the internet, before going to the internet, so that this BeEF can now attempt to run a MITM attack