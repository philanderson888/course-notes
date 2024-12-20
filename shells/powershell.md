# powershell

## contents
- [powershell](#powershell)
	- [contents](#contents)
	- [update](#update)
	- [Remote Powershell](#remote-powershell)
	- [invoking remote commands](#invoking-remote-commands)
	- [invoke script for temporary session](#invoke-script-for-temporary-session)
	- [invoke script for permanent session](#invoke-script-for-permanent-session)
	- [Powershell with Active Directory](#powershell-with-active-directory)
	- [Powershell Workflow](#powershell-workflow)
	- [CALL WORKFLOW WITH PARAMETERS](#call-workflow-with-parameters)
	- [Powershell - Advanced](#powershell---advanced)

## update

please see more recent files at https://github.com/philanderson888/scripts/powershell for more detailed analysis of powershell and other scripts

## Remote Powershell

Remote Management Listener Service On Client

```bash
# CLIENT : ADD LISTENER		
winnrm quickconfig
# or
Enable-PSRemoting -force     no confirmation
# Powershell ports are 5985 and 5986
# this opens Windows firewall to allow these ports to be open
```

WinRS Remote Shell command : run from server

```bash
# SERVER : RUN COMMAND 		
winrs -r:<hostname> ipconfig
```

invoke-command

```bash
# EXECUTE SCRIPT FROM REMOTE MACHINE
invoke-command -computername x -scriptblock { y }
# RUN ONE COMMAND ON MULTIPLE COMPUTERS
    -computername x,y,z
# READ LIST OF SERVERS FROM A FILE
    -ComputerName (Get-Content list-of-servers.txt)
invoke-command -computername x -filepath y.ps1
```

PSSession : new/connect/disconnect/remove/enter/exit : powershell remote session

```bash
# CREATE PERMANENT SESSION
new-PSSession		
$s=new-PSSession -ComputerName x

# remove session
remove-PSSession

# CONNECT/DISCONNECT TO EXISTING SESSION

```bash
connect-PSSession -Session $s
INVOKE-COMMAND -Session $ { }....  # RUN IN THIS SESSION
disconnect-PSSession -Session $s

# LIVE INTERACTIVE SESSION ON ANOTHER COMPUTER

enter-PSSession  -ComputerName x

# OPEN UP PROMPT DIRECTED AT REMOTE PC
exit 
# OR 
exit-PSSession
```

FROM HOST TO GUEST VM

```bash
# INSTEAD OF -ComputerName  use -VMName  
# RUN SAME SCRIPTS AS ABOVE
# list all VMs
GET-VM
```

Remote Commands : summary

```bash
INVOKE-COMMAND
ENTER-PSSESSION
EXIT-PSSESSION
DISCONNECT-PSSESSION
RECEIVE-PSSESSION
CONNECT-PSSESSION
```

## invoking remote commands

```
<http://ss64.com/nt/syntax-variables.html>

INVOKE-COMMAND  -COMPUTERNAME LON-CL1, LON-CL3 -SCRIPTBLOCK {}

$s = new-PSWorkflowSession -ComputerName Lon-CL1,LON-CL3

Enter-PSSession $s

Get-Culture  eg language
```

REMOTE POWERSHELL TAB

CONSTRAINED POWERSHELL ENDPOINTS LIMIT WHICH COMMANDS MAY BE RUN DURING A SESSION

SESSION CONFIG FILES LIMIT WHICH COMMANDS CAN BE RUN

```bash
New-PSSessionConfigurationFile
```

## invoke script for temporary session

```bash
INVOKE-COMMAND 
	-ComputerName x 
	-ScriptBlock { y }
```

## invoke script for permanent session

```bash
$s = NEW-PSWORKFLOWSESSION
	-ComputerName x

# Note : $s=New-PSSession : DOES THAT WORK
			
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

## Powershell Workflow

WORKFLOW CAN BE USED TO OBTAIN RESULTS WHERE ORDER OF GETTING RESULTS IS NOT CRITICAL IE EXECUTE COMMANDS IN PARALLEL

```bash
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
```

TO RUN THIS WORKFLOW JUST TYPE 'x' AT POWERSHELL PROMPT

both commands will execute : first to finish will output, then next one etc

PARALLEL : commands execute ASYNCHRONOUSLY

SEQUENCE : commands execute SYNCHRONOUSLY

## CALL WORKFLOW WITH PARAMETERS

SAY WE WANT TO PASS AN ARRAY OF COMPUTERS INTO A WORKFLOW

```
run  '  x  -Computers "pc1","pc2","pc3"
```

Workflow syntax would be

```bash
workflow x {
	param([string[]]$Computers)
	...use $Computers as array
}
```

## Powershell - Advanced


Test if a file contains data or not.  Only Create Destination If Content Exists.

```bash
# target path
$content = Get-Content "C:\\OneDrive\\PC\\2016_03 Internet.txt"
# get content
$content |
  foreach {if ($_.Length -gt 0) {Out-File `
	  ($_.PSPath + '.csv') -Append -InputObject $_.ToString()}}
# print content
get-content abc.txt | foreach {out-file { def.txt -append -inputobject $_.ToString() } }
```
