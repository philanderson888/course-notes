# 202411 random tech

## contents

- [202411 random tech](#202411-random-tech)
  - [contents](#contents)
  - [2024211 powershell](#2024211-powershell)

## 2024211 powershell

ss64.com

start powershell begins new shell

set-executionpolicy remotesigned

ise integrated scripting environment

enable-windowsoptionalfeature microsoft-windows-subsystem-linux

get-alias

get-command *name* -CommandType Cmdlet/Function/Workflow

get-command -Module DISM

get-help -examples -full -detailed -online -showwindow

get-command | select field1, field2 # outputs as two columns only, without other information

get-command | select name, modulename

get-process | select name, cpu | out-gridview

out-gridview # tabulates result as a sortable pop-out window

get-process | select name, cpu | sort cpu -desc # sort by column

format-table # output format

format-list # output format

get-netipaddress

get-service *name* | select name, status, starttype

get-service homegroupprovider | set-service -startuptype disabled

set-service *name* -startuptype disabled

write-host # send output to screen

write-output # to other destinations

pause

-confirm:false # do not ask for user confirmation

get-serivce | foreach { $_.DisplayName } # foreach item 

$camelCase # local variables

$PascalCase # global variables

$x # declare variable

$y="hello" $ initialise variables

$num1=1;$num2=2;write-host($a+$b)

if ($a -eq $b) {}

conditions -eq -ne -gt -lt -ge -le -and -or -not ! -is -isNot -as

if ($a -like "thisstring") # contains

$a=1; $a.getType() # returns Int32

$a=1; if ($a -is "Int32") { write-host "a is a number" }

get-process | where cpu -gt 10


