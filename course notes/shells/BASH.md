# BASH

# Bash Terminal Commands

### Navigation

    # go to home directory
    cd ~
    # go to root directory
    cd /   

## BASH Commands

    # list recursively all files and folders
    ls -R     
    
    # list file names only
    ls -Name
    
    # show top processes
    top

## Creating An Alias

It's quite common to be re-typing commands laboriously so it's good to create shorthand equivalent of our commands.  This will save a lot of time.  We call these shorthand equivalents `alias` commands.

    # Creating an alias
    cd ~  # navigate to home directory
    # open .bash_profile for editing
    nano .bash_profile
    # or
    vi .bash_profile
    # add the alias
    alias gohome=cd /Users/Shared/
    

### Clearing The Terminal Output When Running A Script

When running a script sometimes it is useful to completely clear the terminal output, so that it is very clear what exactly has been produced by this script only.

In order to do this we can simply write

    clear && printf '\e[3J'

# Running A Simple Bash Script

In order to run a Bash script we should

1. Call the file [myScript.sh](http://myscript.sh/)
2. Set the permissions to execute

    chmod u+x myScript.sh

1. Put in a folder in the PATH or add your folder to the path

An example of a folder which is already in the PATH is :

    /usr/local/bin

1. You should then be able to call your script with

    myScript.sh

## Creating Functions And Aliases

In the above example we have put the script which is in the /usr/local/bin folder which is already in the path, so no hassle. If we want to use a different path we can do the following

    cd ~
    touch .aliases.sh

and in the file put

    alias myip='curl ip.appspot.com'
    
    function mkcd() {
        mkdir -p "$@" && cd "$@"
    }
    
    function gitpush(){
      git add . &&
      git commit -m "$@" &&
      git push
    }

Next edit the file ~ /.bash_profile

    alias chrome="open -a 'Google Chrome'"
    export PATH="/Applications/Google Chrome.app/Contents/MacOS:$PATH"
    source "/Users/tech-a21/.aliases.sh"  # General aliases and functions defined by me

Now opening a new terminal should contain these new scripts

## Show Hidden Files And Folders

    echo "Setting finder to show all hidden files and folders"
    defaults write com.apple.finder AppleShowAllFiles -bool TRUE && killall Finder

## Sample Bash Script To Check For Push/Pull on all GitHub repos

    #!/bin/bash
    echo
    echo
    echo
    echo
    echo 2019-04-c-sharp-labs
    cd /Users/Shared/2019-04-c-sharp-labs
    git pull
    git status
    echo
    echo
    echo
    echo
    echo bootstrap
    cd /Users/Shared/bootstrap
    git pull
    git status
    echo
    echo
    echo
    echo
    echo c-sharp
    cd /Users/Shared/c-sharp
    git pull
    git status
    echo
    echo
    echo
    echo
    echo course-notes
    cd /Users/Shared/course-notes
    git pull
    git status
    echo
    echo
    echo
    echo
    echo showcase
    cd /Users/Shared/showcase
    git pull
    git status
    echo
    echo
    echo
    echo
    echo vue
    cd /Users/Shared/vue
    git pull
    git status

### mkcd()

mkdir then cd in the one operation

    # Put this code in your ~/.bashrc
    mkcd () {
      mkdir "$1"
      cd "$1"
    }

### Alias

Substitute commmand to perform a more complex action

    alias philZ Shell

## Functions

Set up a function which can receive one or more input parameters `$1`, `$2` etc

    function mkcd(){
        mkdir "$1" &&
        cd "$1"
    }

### GitHub

    function gcommit(){
        git add . &&
        git commit -m "$1" &&
        git push
    }

### GitHub tagging

GitHub tagging can allow you to commit a project at a certain state in time, and then preserve that state with definite tags in order to be able to recover the project again if needed.

This also works with GitHub releases.

    function gitTag(){
        git tag -a "$1" -m "$2" &&
        git push origin --tags
    }

### man Manual

man rm shows manual for rm command

q will quit from the man pages cleanly and come back to the terminal window

### ls

ls -a shows hidden files as well

### find

MAC OS to search on your computer for a file do this

    sudo find / -name \\*bashrc\\*  where bashrc is your name that you want to locate also / means find from the root downwards

### Open Finder with `open .`

    # open current terminal window folder in Finder
    open .

## Advanced BASH commands

### head

### tail

### sort

### nl number lines

### wc word count

### sleep 5 (terminal sleeps for 5 secs)

### Output

    stdin 0
    
    stdout 1
    
    stderr 2

[Editing using Nano and VI](BASH/Editing%20using%20Nano%20and%20VI.md)

# Running a BASH script on a schedule

    To add a crontab job, type the following command at a UNIX/Linux shell prompt:
    
    $ sudo crontab -e
    Add the following line:
    
    1 2 3 4 5 /path/to/script
    where
    
    1: Minutes (0-59)
    2: Hours (0-23)
    3: Days (1-31)
    4: Month (1-12)
    5: Day of the week(1-7)
    /path/to/script - your own shell script
    In your case it would be:
    
    55 23 * * * /path/to/yourShellScript
    
    
    // in summary
    
    sudo crontab -e
    Press i . (enter into 'insert') mode
    On the top (first) line type
    45 16 * * * /Users/Shared/...path/to/script.sh .    ((time is 16:45 daily))
    Press Escape
    Type :wq . to quit and save changes 
    OR
    Type Shift Z Z to exit saving changes

# Environment Variables : printenv / env

    # View environment variables
    printenv
    # or
    env
    
    # view one environment variable only
    printenv PATH
    # or
    echo $PATH
    
    
    
    

## Environment Variables: setting

    edit .bash_profile file. 
    
    export VariableName=Varible
    
    To create an environmental variable which can be used in a GUI app in terminal type:
    
    launchctl setenv VariableName Variable