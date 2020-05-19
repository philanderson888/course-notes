# shells : BASH, Zsh, CMD and Powershell

# Contents

- [shells : BASH, Zsh, CMD and Powershell](#shells--bash-zsh-cmd-and-powershell)
- [Contents](#contents)
- [BASH](#bash)
		- [Navigation](#navigation)
	- [BASH Commands ls, top](#bash-commands-ls-top)
	- [Creating An Alias](#creating-an-alias)
	- [`clear` command to clear the terminal](#clear-command-to-clear-the-terminal)
	- [BASH Executable script](#bash-executable-script)
	- [Functions And Aliases](#functions-and-aliases)
	- [Hidden Files and Folders on MAC](#hidden-files-and-folders-on-mac)
	- [GitHub Push/Pull](#github-pushpull)
		- [`mkcd()`  to `mkdir` and `cd` in one operation](#mkcd-to-mkdir-and-cd-in-one-operation)
		- [Alias](#alias)
	- [Functions](#functions)
		- [Passing parameters to a function](#passing-parameters-to-a-function)
		- [GitHub Function](#github-function)
		- [GitHub tagging](#github-tagging)
		- [man Manual](#man-manual)
		- [ls](#ls)
		- [find](#find)
		- [Open Finder with `open .`](#open-finder-with-open)
	- [BASH commands](#bash-commands)
		- [cat](#cat)
		- [head](#head)
		- [tail](#tail)
		- [sort](#sort)
		- [nl number lines](#nl-number-lines)
		- [wc word count](#wc-word-count)
		- [sleep 5 (terminal sleeps for 5 secs)](#sleep-5-terminal-sleeps-for-5-secs)
		- [Output](#output)
	- [Nano and VI](#nano-and-vi)
		- [VI](#vi)
		- [Nano](#nano)
	- [Scheduling a script](#scheduling-a-script)
	- [Environment Variables : printenv / env](#environment-variables--printenv--env)
		- [Environment Variables: setting](#environment-variables-setting)
		- [ps Process Status](#ps-process-status)
- [ZSH](#zsh)
		- [Installing](#installing)
		- [Using](#using)
	- [Oh My Zsh](#oh-my-zsh)
- [Powershell](#powershell)
		- [Open Explorer At  Path](#open-explorer-at-path)
	- [PS Core](#ps-core)
		- [Setting The Default Path In Powershell](#setting-the-default-path-in-powershell)
		- [Invoke-webrequest  connects to a web socket](#invoke-webrequest-connects-to-a-web-socket)
		- [Port Scan](#port-scan)
	- [Intro](#intro)
	- [ISE](#ise)
	- [Simple commands](#simple-commands)
		- [Selecting Columns](#selecting-columns)
		- [SORT](#sort-1)
		- [FORMAT OUTPUT AS A TABLE](#format-output-as-a-table)
		- [Piping Output](#piping-output)
		- [write-host to screen](#write-host-to-screen)
		- [Variables - Naming Conventions](#variables---naming-conventions)
		- [Variables - Naming Conventions](#variables---naming-conventions-1)
		- [Conditional Operators if](#conditional-operators-if)
	- [Environment Variables](#environment-variables)
		- [Get Environment Variables](#get-environment-variables)
	- [Powershell Functions](#powershell-functions)
		- [Function with no parameters](#function-with-no-parameters)
		- [Function with parameters](#function-with-parameters)
	- [Powershell Summary So Far](#powershell-summary-so-far)
- [Powershell Advanced : Don't Use These Notes](#powershell-advanced--dont-use-these-notes)
		- [Telnet](#telnet)
		- [Wait](#wait)
		- [Tail](#tail-1)
		- [TCP](#tcp)
		- [Telnet](#telnet-1)
		- [Wait](#wait-1)
	- [Remote Powershell (Module 6)](#remote-powershell-module-6)
	- [Powershell with Active Directory](#powershell-with-active-directory)

# BASH

### Navigation

```jsx
# go to home directory
cd ~
# go to root directory
cd /   
```

## BASH Commands ls, top

```bash
# list recursively all files and folders
ls -R     

# list file names only
ls -Name

# show top processes
top
```

## Creating An Alias

It's quite common to be re-typing commands laboriously so it's good to create shorthand equivalent of our commands.  This will save a lot of time.  We call these shorthand equivalents `alias` commands.

```jsx
# Creating an alias
cd ~  # navigate to home directory
# open .bash_profile for editing
nano .bash_profile
# or
vi .bash_profile
# add the alias
alias gohome=cd /Users/Shared/

```

## `clear` command to clear the terminal

```bash
clear && printf '\e[3J'
```

## BASH Executable script

1. [myScript.sh](http://myscript.sh/)
2. Set the permissions to execute

```
chmod u+x myScript.sh
```

1. Put in a folder in the PATH or add your folder to the path

An example of a folder which is already in the PATH is :

```
/usr/local/bin
```

1. You should then be able to call your script with

```
myScript.sh
```

## Functions And Aliases

In the above example we have put the script which is in the /usr/local/bin folder which is already in the path, so no hassle. If we want to use a different path we can do the following

```
cd ~
touch .aliases.sh
```

and in the file put

```
alias myip='curl ip.appspot.com'

function mkcd() {
    mkdir -p "$@" && cd "$@"
}

function gitpush(){
  git add . &&
  git commit -m "$@" &&
  git push
}
```

Next edit the file ~ /.bash_profile

```
alias chrome="open -a 'Google Chrome'"
export PATH="/Applications/Google Chrome.app/Contents/MacOS:$PATH"
source "/Users/tech-a21/.aliases.sh"  # General aliases and functions defined by me
```

Now opening a new terminal should contain these new scripts

## Hidden Files and Folders on MAC

```
# show hidden files and folder
defaults write com.apple.finder AppleShowAllFiles -bool TRUE && killall Finder
```

## GitHub Push/Pull

```
#!/bin/bash
echo
echo 2019-04-c-sharp-labs
cd /Users/Shared/2019-04-c-sharp-labs
git pull
git status
```

### `mkcd()`  to `mkdir` and `cd` in one operation

```
# Put this code in your ~/.bashrc
mkcd () {
  mkdir "$1"
  cd "$1"
}
```

### Alias

Substitute commmand to perform a more complex action

```
alias philZ Shell
```

## Functions

Set up a function which can receive one or more input parameters `$1`, `$2` etc

```
function mkcd(){
    mkdir "$1" &&
    cd "$1"
}
```

### Passing parameters to a function

Call this with mkcd test

```
# Put this code in your ~/.bashrc
mkcd () {
  mkdir "$1"
  cd "$1"
}
```

### GitHub Function

```
function gitpush(){
    git add . &&
    git commit -m "$1" &&
    git push
}
```

### GitHub tagging

GitHub tagging can allow you to commit a project at a certain state in time, and then preserve that state with definite tags in order to be able to recover the project again if needed.

This also works with GitHub releases.

```
function gitTag(){
    git tag -a "$1" -m "$2" &&
    git push origin --tags
}
```

### man Manual

man rm shows manual for rm command

q will quit from the man pages cleanly and come back to the terminal window

### ls

ls -a shows hidden files as well

### find

```
# bashrc is your name that you want to locate 
# / means find from the root downwards

sudo find / -name \\*bashrc\\*  

```

### Open Finder with `open .`

```
# open current terminal window folder in Finder
open .
```

## BASH commands

### cat

show a file's contents

### head

shows the first n lines of a file

### tail

shows the last n lines of a file

### sort

sorts the lines of a file alphabetically

### nl number lines

### wc word count

### sleep 5 (terminal sleeps for 5 secs)

### Output

```
stdin 0

stdout 1

stderr 2
```

## Nano and VI

### VI

```bash
# edit with 'vi'
vi myfile.txt

`i` will invoke INSERT mode whereby text can be added to the screen

When finished, press escape and then press 

 `:wq` to close and save changes
 `:q`  to close without saving changes
```

### Nano

```csharp
# type 'nano' and then the file name
nano myfile

:return  next line
:space   next page
:q       quit
:w       previous page
:h       help
```

## Scheduling a script

```bash
# add a crontab job
$ sudo crontab -e

# Add the following line:
1 2 3 4 5 /path/to/script

# where
1: Minutes (0-59)
2: Hours (0-23)
3: Days (1-31)
4: Month (1-12)
5: Day of the week(1-7)
/path/to/script - your own shell script
In your case it would be:

# eg
55 23 * * * /path/to/yourShellScript

// summary
sudo crontab -e
Press i . (enter into 'insert') mode
On the top (first) line type
45 16 * * * /Users/Shared/...path/to/script.sh .    ((time is 16:45 daily))
Press Escape
Type :wq . to quit and save changes 
OR
Type Shift Z Z to exit saving changes
```

## Environment Variables : printenv / env

```bash
# View environment variables
printenv
# or
env

# view one environment variable only
printenv PATH
# or
echo $PATH

```

### Environment Variables: setting

```csharp
edit .bash_profile file. 

export VariableName=Varible

To create an environmental variable which can be used in a GUI app in terminal type:

launchctl setenv VariableName Variable
```

### ps Process Status

*Note that Linux has no such thing as an `exe` file and any file can be an executable in Linux. Whether or not a file can run as an executable depends on the permission levels given to the file (read-write-execute) ie must have execute permissions granted*

```jsx
# ps stands for `process status` ie list the status of processes
# list terminal processes
ps 
# list all processes
ps aux
# or
ps -A
# or1
top
```

# ZSH

### Installing

```csharp
sudo apt-get update
# install zsh
sudo apt-get install -y zsh
# check the version
zsh --version
```

### Using

We can switch between `zsh` and `bash` just by typing `zsh` or `bash` in the terminal.

## Oh My Zsh

```
# install
sh -c "$(curl -fsSL 
   https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```

```sql

```

# Powershell

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

```
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

listing files

```
DIR
LS
get-childitem 

		-recurse     SUBFOLDERS

		-path xxx
```

DEALING WITH FILES

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

CREATING AND EDITING FILES

```
Copy-Item
Move-Item
New-Item
Remove-Item
Rename-Item
	
Clear/Copy/Get/Invoke/Move/New/Remove/Rename-Item
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

or

# set the path 
cd env:
# list environment variables
ls

# get individual variables to use in scripts
echo $env:USERNAME
echo $env:COMPUTERNAME

# use graphical interface to set environment variables

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

# Powershell Advanced : Don't Use These Notes

### [Telnet](notion://www.notion.so/philanderson888/shells-7f3c8dde619f4535a228e5dd791b3689#telnet)

### [Wait](notion://www.notion.so/philanderson888/shells-7f3c8dde619f4535a228e5dd791b3689#wait)

[functions](notion://www.notion.so/philanderson888/shells-7f3c8dde619f4535a228e5dd791b3689#functions)
Create a folder WindowsPowerShell and add it to your Path

```
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