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
# show hidden files and folder
defaults write com.apple.finder AppleShowAllFiles -bool TRUE && killall Finder
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



