# bash

## contents

- [bash](#bash)
  - [contents](#contents)
  - [introduction](#introduction)
  - [update](#update)
  - [common commands](#common-commands)
    - [ls](#ls)
    - [top](#top)
  - [alias](#alias)
  - [clear terminal](#clear-terminal)
  - [BASH Executable script](#bash-executable-script)
  - [Functions And Aliases](#functions-and-aliases)
  - [Hidden Files and Folders on MAC](#hidden-files-and-folders-on-mac)
  - [GitHub Push/Pull](#github-pushpull)
    - [`mkcd()`  to `mkdir` and `cd` in one operation](#mkcd--to-mkdir-and-cd-in-one-operation)
    - [Alias](#alias-1)
  - [Functions](#functions)
    - [Passing parameters to a function](#passing-parameters-to-a-function)
    - [GitHub Function](#github-function)
    - [GitHub tagging](#github-tagging)
    - [man Manual](#man-manual)
    - [ls](#ls-1)
    - [find](#find)
    - [Open Finder with `open .`](#open-finder-with-open-)
  - [BASH commands](#bash-commands)
    - [cat](#cat)
    - [head](#head)
    - [tail](#tail)
    - [sort](#sort)
    - [nl number lines](#nl-number-lines)
    - [wc word count](#wc-word-count)
    - [sleep 5 (terminal sleeps for 5 secs)](#sleep-5-terminal-sleeps-for-5-secs)
    - [Output](#output)
  - [Bash Open Browser](#bash-open-browser)
  - [Nano and VI](#nano-and-vi)
    - [VI](#vi)
    - [Nano](#nano)
  - [Scheduling a script](#scheduling-a-script)
  - [Environment Variables : printenv / env](#environment-variables--printenv--env)
    - [Environment Variables: setting](#environment-variables-setting)
    - [ps Process Status](#ps-process-status)

## introduction

bash stands for `bourne-again shell` and is just one of the shells available on a mac computer but has become the default to use for nearly everyone, apart from the `[z-shell (zsh)](zsh.md)` which has also become very popular

## update

please see more recent files at https://github.com/philanderson888/scripts/bash for more detailed analysis of bash and other scripts

## common commands

### ls

```bash
# names
ls -1 
# recursive
ls -R     
# permissions
ls -l
```

### top

```
# show top processes
top
```

## alias

add to `~/.bash_profile`

```bash
# open .bash_profile for editing
nano .bash_profile
# or
vi .bash_profile
# add the alias
alias gohome=cd /Users/Shared/
```

## clear terminal

```bash
clear && printf '\e[3J'
```

## BASH Executable script

1. [myScript.sh](http://myscript.sh/)
2. Set the permissions to execute

```
# change permissions for just me
chmod u+x myScript.sh
# change permissions to read write execute for me
chmod +rwx myFolder
# change permissions for everyone for all files (dangerous!)
chmod a+rwx *
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

## Bash Open Browser

Bash Scripting To Open Google Chrome

```
open -a "Google Chrome" index.html
```

I found this way more beautiful:

```
Edit ~/.bash_profile file and add the following line alias chrome="open -a 'Google Chrome'"
Save and close the file.
Either run source ~/.bash_profile or open a new window in Terminal.
You can now open the file, file.html, by running: chrome file.html on the command line.
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













```bash
cht.sh
when-life-gives-you-lemons-write-better-error-messages
alias myip=curl 1.2.3.4
function mkcd() { mkdir -p "$@" && cd "&@" }
function gitpush() { git add . && git commit -m "$@" && git push }
/.bash_profile
  alias chrome="open -a 'Google Chrome'"



export PATH=$PATH:/Users/Shared/android
export PATH=$PATH:/Users/Shared/flutter/bin
export PATH=$PATH:~/.pub-cache/bin
alias chrome=open -a "Google Chrome"
alias edge=open -a "Microsoft Edge"
alias gohome=cd /Users/Shared/
alias myip=curl 1.2.3.4

export PATH="/Applications/Google Chrome.app/Contents/MacOS:$PATH"

function mkcd()   {    mkdir -p "$@" && cd "$@"                            }
function gitpush(){    git add . &&    git commit -m "$@" &&    git push   }
function gitTag() {    git tag -a "$1" -m "$2" &&  git push origin --tags  }

# or is it this - mkcd () {     mkdir "$1"      cd "$1"   }

source "~/.aliases.sh"

# bun completions
[ -s "/Users/phil/.bun/_bun" ] && source "/Users/phil/.bun/_bun"
# bun
export BUN_INSTALL="$HOME/.bun"
export PATH="$BUN_INSTALL/bin:$PATH"

clear terminal
clear && printf '\\e[3J'

```




