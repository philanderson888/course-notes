# powershell

## contents
- [powershell](#powershell)
	- [contents](#contents)
	- [introduction](#introduction)
- [installing](#installing)
		- [Open Explorer At  Path](#open-explorer-at--path)
	- [PS Core](#ps-core)
		- [Setting The Default Path In Powershell](#setting-the-default-path-in-powershell)
		- [Invoke-webrequest  connects to a web socket](#invoke-webrequest--connects-to-a-web-socket)
		- [Port Scan](#port-scan)
	- [Intro](#intro)
	- [ISE](#ise)
	- [Simple commands](#simple-commands)
		- [Selecting Columns](#selecting-columns)
		- [SORT](#sort)
		- [FORMAT OUTPUT AS A TABLE](#format-output-as-a-table)
		- [Piping Output](#piping-output)
		- [write-host to screen](#write-host-to-screen)
		- [Variables - Naming Conventions](#variables---naming-conventions)
		- [Variables - Naming Conventions](#variables---naming-conventions-1)
		- [Conditional Operators if](#conditional-operators-if)
	- [list files](#list-files)
	- [get file details](#get-file-details)
	- [create files and edit files](#create-files-and-edit-files)
	- [remove a folder](#remove-a-folder)
	- [Environment Variables](#environment-variables)
		- [Get Environment Variables](#get-environment-variables)
	- [Powershell Functions](#powershell-functions)
		- [Function with no parameters](#function-with-no-parameters)
		- [Function with parameters](#function-with-parameters)
	- [Powershell Summary So Far](#powershell-summary-so-far)
	- [functions](#functions)
		- [Tail](#tail)
		- [TCP](#tcp)
		- [Telnet](#telnet)
		- [Wait](#wait)
	- [Remote Powershell (Module 6)](#remote-powershell-module-6)
	- [download and run exe](#download-and-run-exe)
	- [download and run msi](#download-and-run-msi)
	- [Powershell with Active Directory](#powershell-with-active-directory)

## introduction

powershell is the default shell program installed with windows and should be used in preference to the older `cmd` command-line program which is still also available as `cmd.exe` although the command set is much more limited and cannot manipulate objects as powershell does, but only strings.

# installing

to install powershell one can run `winget`

```powershell
winget search Microsoft.Powershell
winget install --id Microsoft.Powershell --source winget
winget install --id Microsoft.Powershell.Preview --source winget
```

### Open Explorer At  Path

```csharp
# Open Explorer At Given Path
ii c:\my\folder
```

## PS Core

[PowerShell Documentation](https://docs.microsoft.com/en-us/powershell/)

[PowerShell/PowerShell](https://github.com/PowerShell/PowerShell)

### Setting The Default Path In Powershell

```powershell
new-item -type file -force $profile
# now edit the document at c:\users\user\documents\powershell\
cd \default\path

# or

Navigate to Documents\WindowsPowerShell\profile.ps1 and edit the path
```

### Invoke-webrequest  connects to a web socket

this example installs azure client
- download a file and save it as a `msi` file
- run msiexec against that file with the /quiet parameter ie run the install
- remove the installed file

```powershell
Invoke-WebRequest -Uri https://aka.ms/installazurecliwindows -OutFile .\AzureCLI.msi; Start-Process msiexec.exe -Wait -ArgumentList '/I AzureCLI.msi /quiet'; rm .\AzureCLI.msi
```

### Port Scan

[Success Center](https://support.solarwinds.com/SuccessCenter/s/article/Use-PowerShell-to-test-that-a-port-is-open-on-a-server)

## Intro

```
<https://technet.microsoft.com/en-gb/itpro/powershell/windows/index>
	

cmd ==> old command line

powershell ==> return to powershell

Why use?  What are benefits?

	CMD ==> MANIPULATING STRINGS

	POWERSHELL ==> MANIPULATE FULL OBJECTS

		EG ACTIVE DIRECTORY USER 'OBJECT' CAN BE 'PIPED' 

			GET-XXXX  |  SET-XXX

Summary of commands

	ss64.com/ps

	technet 2015/06/11

	technet ff714569

Getting Started

	technet dd772285
```

## ISE

```
ISE Integrated Scripting Environment
	
	GOOD FOR WRITING AND RUNNING SCRIPTS  .ps1 files
```

## Simple commands

```
get-alias		SHORTCODE FOR MANY COMMANDS
			+ OLDER LEGACY COMMANDS AS WELL
get-command

get-command get*	START WITH get

get-command *acl* 	COMMANDS CONTAINING acl

get-command -CommandType Cmdlet/Function/Workflow

Get-Command -Module DISM

get-help <<COMMAND>>

	-examples
	-full
	-detailed
	-online
	-ShowWindow
```

### Selecting Columns

```powershell
get-command | select name, modulename

out-GridView		pop out results (sort yourself)

get-process | select name,cpu		SHOW ALL PROCESSES
```

### SORT

```
get-process | select name,cpu | sort cpu   (-desc)
```

### FORMAT OUTPUT AS A TABLE

```
get-netIPAddress | ft      FORMAT AS TABLE
		 | format-table  or format-list
```

### Piping Output

```
get-service

get-service homegroupprovider

get-service homegroupprovider | select name, status, starttype

				| set-service -startuptype disabled

set-service homegroupprovider -startuptype disabled

get-service *xb* | set-service -startuptype disabled
```

### write-host to screen

```
write-host can be used to force output to screen
```

Pausing

```
PAUSE
```

quiet mode

```
-CONFIRM:$FALSE
```

FOREACH : PARSING THROUGH OUTPUT

```
get-service | foreach { // FOR EACH SERVICE RUN THIS CODE  }

get-service | foreach { $_.DisplayName  }
```

### Variables - Naming Conventions

```powershell
# PascalCase for global variables
# camelCase for local variables
```

### Variables - Naming Conventions

```powershell
# Declare a variable
$x
# Initialize a variable
$myString="hi"
# Declare a number
$a=1;$b=2;write-host($a+$b)
```

### Conditional Operators if

```
if (condition){}
else {}

if (A -eq B){}

		-eq	equal
		-ne	not equal
		-gt	>
		-lt	<
		-ge	>=
		-le	<=
		-like 	wildcard   if(abcdef -like "abc*")    TRUE
		-and/or
		-not   also  ! is valid
		-is/isNot/as	matching object types
				if ($a is "String") { }

Get-process | where cpu -gt 10
```

## list files 

```
DIR
LS
get-childitem 

		-recurse     SUBFOLDERS

		-path xxx
```

## get file details

```
GET-ITEM		file PROPERTIES
	| select *	FULL DETAILS

GET-CONTENT
			WRITE OUT CONTENTS IN AN ARRAY LINE BY LINE
			(( deal with each line using foreach loop))

OUT-FILE		SEND DATA TO A FILE

			DEFAULT : OVERWRITE
			-append : APPEND TO END

	out-file abc.txt -append -inputobject 'addThisIn' -encoding utf8
```

## create files and edit files

```
Copy-Item
Move-Item
New-Item
Remove-Item
Rename-Item
	
Clear/Copy/Get/Invoke/Move/New/Remove/Rename-Item
```

## remove a folder

```ps
rd -recurse my-folder-with-all-sub-folders
```

Running Scripts

```
.ps1

PowerShell is secure by default. The first implication of this philosophy is that PowerShell won't execute scripts until you explicitly give it permission to do so. PowerShell has four execution policies that govern how it should execute scripts:

	Restricted. PowerShell won't run any scripts. This is PowerShell's defaxecution policy.

	AllSigned. PowerShell will only run scripts that are signed with a digital signature. If you run a script signed by a publisher PowerShell hasn't seen before, PowerShell will ask whether you trust the script's publisher.

	RemoteSigned. PowerShell won't run scripts downloaded from the Internet unless they have a digital signature, but scripts not downloaded from the Internet will run without prompting. If a script has a digital signature, PowerShell will prompt you before it runs a script from a publisher it hasn't seen before.

	Unrestricted. PowerShell ignores digital signatures but will still prompt you before running a script downloaded from the Internet.

To display the current execution policy, you need to enter the command

	Get-ExecutionPolicy

To set the execution policy, Run Powershell as Administrator then enter the command

	Set-ExecutionPolicy policy unrestricted 

	where policy is one of the policy names (e.g., RemoteSigned).

NOTE : TO PERMIT .PS1 SCRIPTS TO RUN YOU MUST FIRST ENTER (INTERACTIVELY)	THE COMMAND 

	set-executionpolicy -executionpolicy unrestricted
```

PATH TO SCRIPTS

```
.\\file.ps1 will run script IN THIS FOLDER 

	c:\\path\\file.ps1 will run script in particular folder
```

Unblock a ps1 file downloaded from internet

```
One thing that's important to understand about execution policies is the meaning of the phrase "downloaded from the Internet." 
	
	In Windows, this phrase means that the file has an alternative data stream that indicates the file was downloaded from the Internet zone. 
		
	To unblock a script, right-click the .ps1 file, choose Properties, then click the Unblock
```

Best Practice : Create C:Scripts for all scripts

```
Because PowerShell doesn't execute scripts from the current directory, I recommend that you create a directory, add this directory to your Path, and store your PowerShell scripts in this directory. That way, you can avoid any problems.
```

Executing A Script In Quotes With & Character

```
If you simply type the script's name in quotes like you did in Cmd.exe, PowerShell assumes the pathname is a string and outputs the pathname instead of running the script. 

	To work around this, you can use PowerShell's invocation operator, &, to execute the quoted string as a command, as in

	PS C:\\> & "C:\\Program Files\\Scripts\\HelloWorld"
```

## Environment Variables

### Get Environment Variables

```powershell
# list environment variables 
ls env:
# or 
cd env:
ls

# get individual variables to use in scripts
echo $env:USERNAME
echo $env:COMPUTERNAME
echo $env:PATH

# update
$env:PATH = $env:PATH + "c:\flutter\bin;"
```

## Powershell Functions

### Function with no parameters

```
function global:MyAmazingScript{
	echo "You are in my amazing script - watch out"
}
MyAmazingScript
```

### Function with parameters

```
function global:mkcd{
    echo 'running script'
    $path = $args[0]
    echo $path
    New-Item $path -ItemType Directory
    cd $path

}
mkcd $args[0]e
```

## Powershell Summary So Far

Get-Help
Get-Command
Get-Process
Get-NetIPAdapter
Get-Process *xxx* | select name,cpu | sort cpu -desc | -select first 5

```
-outGridView
| ft           format as table
```

get-service
set-service -name homegroupprovider -startuptype disabled

write-host x

$a=1

-eq -ne -lt -gt -le -ge ! not and/or is/isnot ((TYPE CHECKER))

Powershell Modules

get-module -listAvailable	will show all available powershell modules on your computer

get-command -module x will show all commands in a module

Powershell Version

$PSVersionTable shows the version of Powershell that is currently running!


## functions

Create a folder WindowsPowerShell and add it to your Path

```powershell
Function global:mkcd {
  mkdir $args[0]
  cd $args[0]
}
mkcd $args[0]
```

Use an elevated Powershell prompt to set the ExecutionPolicy to RemoteSigned and from now on you can call mkcd test to create a folder test and go into it.

```
@ turns off displaying command as it gets executed

echo text output to scr    

@echo off turns off the command permanently

pause

goto
```

### Tail

Tail enables us to look at the last x lines of a file

```
Get-Content D:\\log.txt -Tail 3
```

### TCP

Connect to any open socket using

```
New-Object System.Net.Sockets.TcpClient("a2k4.com", 2300)
```

### Telnet

Install using

```
dism /online /enable-feature /featurename:telnetclient
```

### Wait

Wait enables us to see live when a file has been updated

```
Get-Content D:\\log.txt –Wait
```

## Remote Powershell (Module 6)

Remote Management Listener Service On Client

```
CLIENT : ADD LISTENER		

	winrm quickconfig

or

	Enable-PSRemoting -force     no confirmation

Powershell ports are 5985 and 5986 : this opens Windows firewall to allow these ports to be open
```

WinRS Remote Shell command : run from server

```
SERVER : RUN COMMAND 		

	winrs -r:<hostname> ipconfig
```

invoke-command

```
EXECUTE SCRIPT FROM REMOTE MACHINE

invoke-command -computername x -scriptblock { y }

RUN ONE COMMAND ON MULTIPLE COMPUTERS

	       -computername x,y,z

	     	READ LIST OF SERVERS FROM A FILE

	       -ComputerName (Get-Content list-of-servers.txt)

invoke-command -computername x -filepath y.ps1
```

PSSession : new/connect/disconnect/remove/enter/exit : powershell remote session

```
new-PSSession		CREATE PERMANENT SESSION

	$s=new-PSSession -ComputerName x

remove-PSSession	REMOVE SESSION

CONNECT/DISCONNECT TO EXISTING SESSION

	connect-PSSession -Session $s
		INVOKE-COMMAND -Session $ { }....  RUN IN THIS SESSION
	disconnect-PSSession -Session $s

LIVE INTERACTIVE SESSION ON ANOTHER COMPUTER

	enter-PSSession  -ComputerName x

		OPEN UP PROMPT DIRECTED AT REMOTE PC

	exit OR exit-PSSession
```

FROM HOST TO GUEST VM

```
INSTEAD OF -ComputerName  use -VMName  

	RUN SAME SCRIPTS AS ABOVE

list all VMs

	GET-VM
```

Remote Commands : summary

INVOKE-COMMAND
ENTER-PSSESSION
EXIT-PSSESSION
DISCONNECT-PSSESSION
RECEIVE-PSSESSION
CONNECT-PSSESSION

Extra Notes From Module 6

RESOURCES NOT COPIED ACROSS: ONLY SCRIPTING COMMANDS
KERBEROS : SO MUST BE DOMAIN
OR SSL CERTIFS

ENVIRONMENT VARIABLES
%HOMEPATH%
%WINDIR%
%username%
%systemroot%
%systemdrive%

```
<http://ss64.com/nt/syntax-variables.html>

INVOKE-COMMAND  -COMPUTERNAME LON-CL1, LON-CL3 -SCRIPTBLOCK {}

GET-EVENTLOG -LOG SYSTEM
Get-EventLog System -Newest 5

$s = new-PSWorkflowSession -ComputerName Lon-CL1,LON-CL3

Enter-PSSession $s

Get-Culture  eg language
```

REMOTE POWERSHELL TAB

CONSTRAINED POWERSHELL ENDPOINTS
LIMIT WHICH COMMANDS MAY BE RUN DURING A SESSION

```
SESSION CONFIG FILES LIMIT WHICH COMMANDS CAN BE RUN

New-PSSessionConfigurationFile
```

ONE-OFF : TEMP SESSION

```
INVOKE-COMMAND 
	-ComputerName x 
	-ScriptBlock { y }
```

PERMANENT SESSION

```
$s = NEW-PSWORKFLOWSESSION
	-ComputerName x
	
				Note : $s=New-PSSession : DOES THAT WORK
				
ENTER-PSSession $s   (or Enter-PSSession -ComputerName x)

	INVOKE-COMMAND 

	EXIT-PSSESSION

DISCONNECT-PSSESSION
Connect-PSSession
GET-PSSESSION -ComputerName x

Receive-PSSession : get all the output
```

## download and run exe

this downloads and runs and exe file

```powershell
Invoke-WebRequest -Uri http://www.lancsngfl.ac.uk/cmsmanual/getfile.php?src=9/JRuler.exe -OutFile .\JRuler.exe; .\JRuler.exe; rm .\JRuler.exe
```

## download and run msi

- download with `invoke-webrequest`
- install with start-process msiexec

```powershell
Invoke-WebRequest -Uri https://aka.ms/installazurecliwindows -OutFile .\AzureCLI.msi; Start-Process msiexec.exe -Wait -ArgumentList '/I AzureCLI.msi /quiet'; rm .\AzureCLI.msi
```

## Powershell with Active Directory

```
get-ADUser -filter *

new-ADUser -Name Paul   ....      | Enable-ADAccount

remove/get/set

Get-ADGroup	

New-ADGroup -name x -GroupScope Global

Add/Remove-ADGroupMember -Identity x -Member Fred

Move-ADObject can move an item to another OU

Enable-ADOptionalFeature -identity X

New/Get-ADUser/Group/OrganizationalUnit/Object

New-ADOrganizationalUnit -Name X -Path dc=phil,dc=local

Get-ADUser -filter *
Get-ADUser -filter * | select name | sort name -descending | out-gridview
Get-ADUser -filter * | select name, distinguishedname

New-ADUser -Identity Fred

new-ADuser -name "Phil Gibbins" -GivenName Phil -Surname Gibbins -SamAccountName PGibbins -UserPrincipalName pgibbins@corp.contoso.com  -AccountPassword (Read-Host -AsSecureString "Pa$$w0rd") -Path ou=test,dc=domain,dc=com -PassThru | Enable-ADAccount

set-ADAccountPassword

Get-ADGroup -filter * | select groupcategory, groupscope, distinguishedname

New-ADGroup -name Test -GroupScope Global

ADD/REMOVE-ADGROUPMEMBER -IDENTITY GROUP -MEMBER USER

Get-ADGroupMember -Identity GroupName                     ?? Have to install ??

add-computer -domainname abc.com -restart

Set-ADAccountControl -identity X        SET UAC

KList Purge of Kerberos Caches
```

Powershell Workflow

```
WORKFLOW CAN BE USED TO OBTAIN RESULTS WHERE ORDER OF GETTING RESULTS
	IS NOT CRITICAL IE EXECUTE COMMANDS IN PARALLEL

workflow x {

inlinescript{ write-host hello }

	$ComputerName = "a","b","c"
	
	foreach -parallel($Computer in $ComputerName)
	{
		sequence {
		Get-WmiObject -PSComputerName $Computer -PSCredential $MachineCred
		Add-Computer -PSComputerName $Computer -PSCredential $DomainCred
		Restart-Computer -ComputerName $Computer -Credential $MachineCred -For PowerShell -Force -Wait -PSComputerName ""
		Get-WmiObject -PSComputerName $Computer -PSCredential $MachineCred
		}
	}
}

TO RUN THIS WORKFLOW JUST TYPE 'x' AT POWERSHELL PROMPT

	both commands will execute : first to finish will output, then
		next one etc

	PARALLEL : commands execute ASYNCHRONOUSLY
	SEQUENCE : commands execute SYNCHRONOUSLY

CALL WORKFLOW WITH PARAMETERS

SAY WE WANT TO PASS AN ARRAY OF COMPUTERS INTO A WORKFLOW

run  '  x  -Computers "pc1","pc2","pc3"

Workflow syntax would be

workflow x {
	param([string[]]$Computers)
	...use $Computers as array
}
```

Powershell - Advanced (display and don't type)

```
Test if a file contains data or not.  Only Create Destination If Content Exists.

	$content = Get-Content "C:\\OneDrive\\PC\\2016_03 Internet.txt"

	$content |
  foreach {if ($_.Length -gt 0) {Out-File `
  ($_.PSPath + '.csv') -Append -InputObject $_.ToString()}}

  get-content abc.txt | foreach {out-file { def.txt -append -inputobject $_.ToString() } }
```