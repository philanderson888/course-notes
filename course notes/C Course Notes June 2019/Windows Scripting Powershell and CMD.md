# Windows Scripting : Powershell and CMD

[www.ss64.com](http://www.ss64.com/)

CMD = Command Line

ARP -a : Map IP to MAC (hardware address)
CLS : Clear screen
IPCONFIG : Show IP
IPCONFIG /ALL : Show IP and MAC
CMD - switch
POWERSHELL - switch
COPY : individual files from A to B
DEL : delete files
ECHO : output to screen
IF ... conditional
MD Make Directory : create a folder
CD Change Directory
CD .. up one level
CD / go to root level
TAB use to fill out names (cycle through names)
MOVE files from A to B
MSINFO32
RD remove directory
REN rename
RUNAS administrator
TREE shows folders and subfolders
TREE > output.txt
NOTEPAD output.txt
SUBL output.txt
VSCODE ..
WHOAMI current user
XCOPY great for backup files and folders : omit / include files/types/folders etc

Powershell

    CMD => original 'SHELL' whereb USER INTERACT WITH COMPUTER.     Using STRING
    
    POWERSHELL => use and manipulate objects  (same as OOP eg Customer object/instance)
    
    	get-user    RETURNS user object which manipulate : change name of user
    
    CHAINING 
    
    	get-user | out-gridview

# BASIC COMMANDS

    get-alias  			MAP TO OLDER COMMANDS
    
    get-help    also type /? after command
    
    get-command    	LIST ALL COMMANDS
    
    get-commands  *dns*     LIST OF ALL COMPUTERS ON INTERNET
    						MAPS ALL COMPUTERS LIKE TELEPHONE DIRECTORY
    
    						PHONE BOOK  		NUMBER				NAME
    						DNS LOOKUP   		IP ADDRESS 			COMMONLY USED NAME
    											1.2.3.4 			mydomain.com
    
    						WHATISMYIP 			212.161.55.68 		SPARTA CORPORATE OFFICE
    											192.168.1.87		SPARTA WEBSITE
    
    
    
    get-command | select name
    
    sort output
    
    get-process | select name, cpu | sort cpu -desc
    
    Format as a table
    
    	get-netIPAddress | format-table
    	                         -list
    
    
    Service : runs 24/7
    Process : can be USER-INITIATED eg WORD or could be a service 24/7
    
    get-process
    get-service home*
    
    get-service | where status -eq running
    
    get-service homegroupprovider
    
    pause : pause a script  (attach number for seconds also)
    
    TURN OFF PROMPTING (are you sure???)
    
    	-CONFIRM:$false
    
    FOREACH LOOP
    
    	get-service | foreach {  echo hello  }
    
    VARIABLES
    
    	$x = 10;
    	echo $x+1;
    
    	$x=10; echo ($x+1);	
    
    	$counter = 0;
    	get-service | foreach ( echo $counter; $counter++; )
    
    Line is getting long; can we put in a script so can build it properly?
    
    C:\\Scripts on root of C:\\ ==> easy to manage all scripts
    
    MD C:\\SCRIPTS
    
    	.bat  or .cmd   ==> OLD FASHIONED 'COMMAND LINE' SCRIPT
    
    	md c:\\foldera
    	md c:\\folderb
    	cd c:\\foldera
    	md subfolder1
    	cd subfolder1
    
    	copy nul firstfile.txt            
    	echo hello >> firstfile.txt
    	echo how are youi >> firstfile.txt
    	notepad firstfile.txt
    	pause
    
    
    Repeat as a POWERSHELL SCRIPT
    
    	.ps1
    
    
    Foreach : displaying output
    
    Let's now build the command we were working on, in a script
    
    	Services.ps1

# Summary so far

    echo ''
    echo "Displaying Services"
    echo ===================
    echo ''
    echo ''
    $counter = 0;
    get-service | foreach {
     $_.DisplayName
     echo "Counter is - " $counter; 
     $counter++;
    }
    echo ''
    echo "HyperV Services"
    echo ===================
    echo ''
    echo ''
    $counter = 0;
    get-service | where DisplayName -like '*hyper*' | foreach {
     $_.DisplayName
     echo "Counter is - " $counter; 
     $counter++;
    }
    echo ''
    echo "Processes In CPU Descending Order"
    echo ==================================
    echo ''
    echo ''
    $counter = 0;
    get-process| where cpu -gt 5 | sort cpu -desc | foreach {
     echo ''
     $_.ProcessName, $_.cpu
     $counter++
    }
    echo ''
    echo "Number of processes counted is " $counter;

## Conditional Operators

if A -eg B
-eq equal
-ne not equal
-gt >
-lt <
-ge >=
-le <=
like if (... -like '*match*')
-and
-or
-not
-is if($a is "String")#
-isNot

# Printing files / folders

    DIR
    LS
    get-childitem  -recurse  subfolders   -path c:\\... 
    
    // GET ALL FILES ON WHOLE COMPUTER
    get-childitem -recurse -path c:\\

# Files

    Get-Item    ==> get file
    
    
    Get-Content ==> Read inside
    cat ..file..
    type ..file..
    nano ... edit mode
    notepad .. edit mode ..

# Run a script from a script

    Create script1.ps1 and from it, run these other 2 scripts
    .\\script2.ps1
    .\\script3.ps1

# Unblocking a .ps1 file downloaded from the internet

    By default security is high on windows.
    PS1 scripts won't run when downloaded from internet
    
    Right click on .ps1, Properties, Unblock