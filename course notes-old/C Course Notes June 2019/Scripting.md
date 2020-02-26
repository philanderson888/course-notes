# Scripting

# 

First computers ran program which ran in a LINEAR fashion.  We call this 'top-down' programming

01 START

02 X=10

03  Y=X*X

04  PRINT Y

05 X++

06 IF X>100 EXIT

07 GOTO 03

Today we still have SCRIPTING which does the same thing

## .bat Batch files

Also call these .cmd files 

They are text files with simple commands in them

    Example
    
    echo hello this is an amazing batch file written by ....
    echo ====================================================
    echo 
    echo 
    md ThisIsAFolder
    md AndAnotherOne
    cd ThisIsAFolder
    notepad ThisIsATextFile.txt
    cd ..

## Powershell

'

Powershell is the new command line on Windows.

Use it to get most tasks done

1) Simple commands

2) Azure CLI talk to Azure

3) Domain : use it to manage users, computers, servers, groups etc

    HOSTNAME    name of PC
    IPCONFIG    IP info
    NETSTAT     internet connections
    PING        connectivity
    TRACERT      
    PATHPING
    NSLOOKUP (DNS)   
    CURL (LINUX)     read website

### Powershell .ps1 script file

Powershell will not run .ps1 script files unless you explicitly allow this

    Set-ExecutionPolicy Unrestricted
    
    Then run 
    
    echo "this is a powershell script";
    get-process | out-gridview
    notepad testfile.txt
    pause
    ls
    echo "Press Any Key to delete testfile.txt"
    pause
    del testfile.txt
    ls

## Linux bash script file   "script.sh"

    #!/bin/bash
    # comment
    echo "Test Bash Linux Script"

# Bash Script To Update GitHub

    # Here is a basic BASH script to update GitHub
    echo "trying to push to github with a script"
    cd /Users/Shared/scripts
    git status
    git pull
    git add .
    git commit -m "Updating scripts"
    git push
    
    # Run the script with 
    ./gitPushMac.sh
    
    # Set permissions to run the script with 
    chmod u+x gitPushMac.sh