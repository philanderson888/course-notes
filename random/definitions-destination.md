# definitions destination

## contents

- [definitions destination](#definitions-destination)
  - [contents](#contents)
  - [bash](#bash)
  - [windows labs](#windows-labs)
  - [html](#html)
  - [kotlin](#kotlin)
  - [kings of england](#kings-of-england)
  - [bookmarks](#bookmarks)
  - [macos](#macos)
  - [bash](#bash-1)
  - [zshrc](#zshrc)
  - [bash](#bash-2)
  - [vi](#vi)
  - [bash](#bash-3)
  - [azure](#azure)



Wed 20 December 2023

vpn split tunneling
password settings container
img.src.value = "mypicture.jpg"
img.src = "mypicture.jpg"
w3.org
ietf.org
rfc
utf8
utf16 any language
pixlr image editing
pexels stock photos
functional programming
pure functions
deterministic pure functions have same output given same input
deterministic pure functions have no side effects
functional programming imperative = workflow
functional programming declarative = what to do with data?
kotlin prevents npe null pointer exceptions errors
flux emits stream of items
flux<string>
kotlin rx reactive extensions have callback onNext onCompleted and onError
kotlin val immutable
kotlin var mutable
kotlin input data val scanner = Scanner(system.in)
&&
xor
||
poser people modelling software
randomuser.me random user generator


## bash

cht.sh
when-life-gives-you-lemons-write-better-error-messages
alias myip=curl 1.2.3.4
function mkcd() { mkdir -p "$@" && cd "&@" }
function gitpush() { git add . && git commit -m "$@" && git push }
Next edit the file ~ /.bash_profile
alias chrome="open -a 'Google Chrome'"
export PATH="/Applications/Google Chrome.app/Contents/MacOS:$PATH"
source "/Users/tech-a21/.aliases.sh"  # General aliases and functions defined by me
Now opening a new terminal should contain these new scripts

show hidden files and folder ... defaults write com.apple.finder AppleShowAllFiles -bool TRUE && killall Finder
function gitTag(){ git tag -a "$1" && -m "$2" && git push -origin tags } 
sudo find / -name \\*bashrc\\*
open .    opens window in finder
stdin 0
stdout 1
stderr 2
open -a "Google Chrome" mysite.html
Edit ~/.bash_profile file and add the following line alias chrome="open -a 'Google Chrome'"

stdin 0
stdin 1  set the output channel
stderr 
open -a "Google Chrome" index.html
.bash_profile is where we set the terminal profile launch settings
alias chrome=open -a "Google Chrome"
alias edge=open -a "Microsoft Edge"
vi myFile.txt
vi i opens file in insert mode 
vi escape :wq save and quit
vi escape :q quit without saving
vi :return next line
vi :space next page
vi :q quit
vi :w previous page
vi :h help
sudo crontab -e schedules a cron job
sudo crontab -e // i . (insert mode) // minutes hours days month dayoftheweek path-to-script.sh eg 00 08 * * * // :wq to save and exit
printenv
env  
printenv PATH
echo $PATH
.bash_profile / .zsh_profile etc
export name=envaironmentvariable
launchctl setenv name environmentvariable
ps process status
ps aux lists all processes
ps -A lists all processes
top lists top processes
exe does not exist in linux - any file can be executed if it has the 'execute' permission



## windows labs

vpn split tunneling in vpn, properties, networking, ipv4, advanced, use default gateway on remote network

psc password settings container in aduc, view, advanced, default domain policy, properties, attribute editor, password, make changes

offline files enable at sync center, offline files, enable





## html

img.src.value="myImage.jpg"
w3.org
ietf.org
utf-8
utf-16
pixlr.com image editing
pexels.com stock photos
functional programming 
    uses declarative rather than imperative
        imperative - how to do this, step by step
        declarative - just give the end goal
    avoids sharing state
    uses immutable data
    pure functions
        deterministic gives same output for given input






## kotlin

flux is a stream
flow is like a stream with a callback on events onNext, onCompleted, onError
val is immutable
var is mutable
function fun(a: Int, b: Int): Int { return ab } same as {}
lambda { a: Int, b: Int => ab }




## kings of england

henry viii
george v
charles
ann
elizabeth i, ii


## bookmarks

carbon.now.sh displays your source code well
pixlr image editing
pexels stock photos
randomuser.me generates random user




## macos

show hidden files - defaults write com.apple.finder AppleShowAllFiles -bool TRUE && killall Finder


## bash

cht.sh cheat sheet for linux commands
bash is bourne again shell
ps process status
ls -1 list just names one by one
ls -R list files in subfolders
top top processes  
.bash_profile loads when terminal loads
.zprofile and .zshrc load when zshell loads

## zshrc

```bash
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
clear && printf '\e[3J'
```

## bash

```bash
chmod u+x  just for me
chmod +rwx just for me
chmod a+rwx for everyone
man rm 
ls -1
ls -a # hidden files
find ~/github -name \*zshrc\* # find files containing this name in this folder
open . # opens finder
stdin 0
stdout 1
stderr 2
```

## vi

vi myfile
i insert mode
escape :wq save and quit
escape :q quit

## bash

sudo crontab -e then add this line minutes hours dayofmonth monthofyear dayofweek file
printenv will show environment variables
env will show environment variables 
printenv PATH show just PATH
echo $PATH show just PATH
export field=value add to environment values so now printenv field returns value
launchctl setenv field value permanently adds to environment variables
ps process status
ps aux all processes
ps -A all processes
top most important processes




## azure 

resize-vhd -path ... -sizebytes 1234
vm node fairness load balances
vm start order
storage spaces
storage qos minimum iops in out per second
storage replica
srg synchronous replication group
storage deduplication
vrss virtual receive site scaling
.vmcx virtual  machine configuration
.vmrs vm runtime state
get-vm -name myVM | format-list *
vmgroups
$vm1 = get-vm -name myvm1
new-vmgroup -name mygroup -grouptype vmcollectiontype
$mygroup = get-vmgroup -name mygroup
add-vmgroupmember -vmgroup $mygroup -vm $vm1
get-vm | format name, state, groups - autosize
vm management group can contain a) vmgroup b) vm
new-vmgroup -name mymanagementgroup -grouptype managementcollectiontype
move-vm myvm newvmhost
lab add recovery agent - group policy - computer configuration - settings - key - policies - data recovery agents 
lab recovery bitlocker drive - 1) add user in group policy, computer, settings, key, policies, drive, encryption 2) add drive id 2) group policy, computer, templates, components, bitlocker 3) enable dra recovery on the policies 4) recover i) os drives ii) data drives iii) removable drives



