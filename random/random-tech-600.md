# definitions

## contents

- [definitions](#definitions)
  - [contents](#contents)
  - [ai](#ai)
  - [random](#random)
  - [streaming](#streaming)
  - [ai website generation](#ai-website-generation)
  - [docker](#docker)
  - [ideas - youtube tutorials](#ideas---youtube-tutorials)
  - [app ideas](#app-ideas)
    - [regular route joe](#regular-route-joe)
  - [learning - ideas for generating wealth](#learning---ideas-for-generating-wealth)
  - [Wed 20 December 2023](#wed-20-december-2023)
  - [bash](#bash)
  - [windows labs](#windows-labs)
  - [macos](#macos)
  - [bash](#bash-1)
  - [zshrc](#zshrc)
  - [bash](#bash-2)
  - [vi](#vi)
  - [bash](#bash-3)
  - [azure](#azure)
  - [aws](#aws)
  - [cyber](#cyber)
  - [Mobile Development](#mobile-development)
    - [React Native](#react-native)
    - [Flutter](#flutter)
  - [functional programming languages](#functional-programming-languages)
  - [functional programming](#functional-programming)
  - [homebrew](#homebrew)
    - [install](#install)
  - [ide - vscode](#ide---vscode)
  - [Imperative Programming](#imperative-programming)
  - [Mixin](#mixin)
  - [learning](#learning)


## ai

```
gpt-3.5 process text only
gpt-4 images and text
4-turbo add knowledge up to april 2023

```

## random

```
vpn split tunnel
psc password settings container
img.src.value
```




## streaming

```
dash dynamic active streaming over http - shaka, vlc, videojs, libdash, best quality and best on-demand
hls http live streaming, best for live and best for apple smooth streaming
scte-35 marker - can insert advert of x seconds
ala watermark
ala breakpoint
mpd manifest of fragments
ms playready encryption
google widevine encryption
cpm cost per minute
dai dynamic advert insertion
csai client side advert insertion
ssai server side advert insertion
ala addressable linear adverts
dai swaps whole advert break or nothing; ala swaps individual adverts
hylda hybrid linear digital adverts ensures breakdown of each adpod is suitable
l2vod live-to-vod is extended restart after finish

```




## ai website generation

need to look into this as I think it could be an amazing tool to learn in order to build amazing websites really quickly and also to build that connetion with back end data super quickly, saving me much time and energy and also to be able to offer this service to customers quickly and cheaply ... so will be well worth an investigation and proper research ...

```
10web
```


## docker

[docker toolbox docs.docker.com/toolbox](https://docs.docker.com/toolbox/overview/#ready-to-get-started)


## ideas - youtube tutorials

```
philTech youtube channel!!!
learnTechFast youtube channel !!!
learnBrightscript youtube channel !!!
learnLinuxScripting youtube channel !!!
... idea is just to make some tutorials ... and look at the numbers ...
```

## app ideas

### regular route joe

Use AI to alert a user when their regular route is down - is this possible? Would have to tap into the regular google maps or apple maps route of the user ... then calculate the regular trip time ... then calculate today the trip time ... then see if there is a faster route ... then let user know 



## learning - ideas for generating wealth

```
tutorials on youtube for roku
```


## Wed 20 December 2023

```

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
```

## bash

```
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
```


## windows labs

```
vpn split tunneling in vpn, properties, networking, ipv4, advanced, use default gateway on remote network

psc password settings container in aduc, view, advanced, default domain policy, properties, attribute editor, password, make changes

offline files enable at sync center, offline files, enable
```







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





## aws

aws inspector - does vulnerability management

## cyber

nikto - web server vulnerability scanner

tryhackme

kali



## Mobile Development

Problem with native app development

- two codebases are needed (iOS and Android)
- costly to hire platform-specific developers
- costly to develop and maintain the codebase

### React Native

- Introduced by Facebook in 2015
- Open source
- Used by Facebook, Instagram, Uber, Tesla, Discord
- Dominant force in mobile development today
- Backed by React and Javascript

### Flutter

- Introduced by Google in May 2017







## functional programming languages

```
Haskell,  
ML 
OCaml
Scala
F#
```

## functional programming

```
Allows you to write     
    Compressed code 
    Predictable code 
    Easier to test 
    
It
    Combines Pure Functions   
    Uses a declarative approach rather than an imperative approach 
    Declarative 
    Imperative 
    
It Avoids 
    Shared state 
    Mutable (changeable) data 
       
Functional programming key terms 
        
    Pure functions
    
        are Deterministic (output is predictable given the same input) 
    
        Have no side effects 
    
    Function composition 
    
        combine two functions 
    
        Avoid shared state 
    
        shared state force knowing the full history of a variable 
    
    Immutability 
    
        Cannot change the object to which you are bound 
    
        But can still change the properties of the object 
    
        Side effects are interactions which affect other areas and do not just stay within the confines of the function 
    
    Imperative 
    
        Answers 'how to do' this problem with workflow control 
    
    Declarative 
    
        Looks at 'what to do' with data flow 
    
        Disadvantage of functional programming 
    
        No purely functional 'weak hash map'   
     
    
   
```






## homebrew

### install

to install homebrew on mac we run

https://brew.sh

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```


## ide - vscode

Control-E and Control-Shift-E loop through files also bring up search box

- Control-Shift-P - find your installed extension

- Control-Shift-P - type 'keyboard' and select `Open Keyboard Shortcuts` and now we can enter a keyboard shortcut eg `emmet wrap with abbreviation` and assign a keystroke

- Control-Shift-K - delete line

- Alt and Up Arrow - move line

- Shift-Alt-Arrow - copy line

- Control - K - C and Control - K - U   comment and uncomment

- Screencast Mode - shows all the clicks visibly when making a video!!!

- Alt and click - multi-select

- Control - Alt - L - select all instances of a word for renaming etc - take care with this one!

<div class="hello">
    - Shift - Shift - P - wrap HTML
</div>





## Imperative Programming

Answers 'how to do' this problem with workflow control 

Imperative programming languages (C, C++, Java, Python …)




## Mixin

mixins allow code to be `injected`

```java
class MixinParent {
  parentBehaviour() {
    print('parent is doing this');
  }
}

class MixinChild01 extends MixinParent {
  @override
  parentBehaviour() {
    print(' ');
    super.parentBehaviour();
    print('mixinChild01 also has some extra unique behaviour');
  }
}

class MixinChild02 extends MixinParent {
  @override
  parentBehaviour() {
    print(' ');
    super.parentBehaviour();
    print('mixinChild02 also has some extra unique behaviour');
  }
}

class MixinChild03 extends MixinParent with InjectCode01, InjectCode02 {
  @override
  parentBehaviour() {
    print(' ');
    super.parentBehaviour();
    print('mixinChild03 also has some extra unique behaviour');
  }
}

mixin InjectCode01 {
  uniqueBehaviour01() {
    print('doing some pretty unique stuff');
  }
}

mixin InjectCode02 {
  uniqueBehaviour02() {
    print('doing some more pretty unique stuff');
  }
}
```

used by 

```java
print('mixin demo');
print(' ');
var mixinParent = MixinParent();
var mixinChild01 = MixinChild01();
var mixinChild02 = MixinChild02();
var mixinChild03 = MixinChild03();
mixinParent.parentBehaviour();
mixinChild01.parentBehaviour();
mixinChild02.parentBehaviour();
mixinChild03.parentBehaviour();
mixinChild03.uniqueBehaviour01();
mixinChild03.uniqueBehaviour02();
/*
mixin demo

parent is doing this

parent is doing this
mixinChild01 also has some extra unique behaviour

parent is doing this
mixinChild02 also has some extra unique behaviour

parent is doing this
mixinChild03 also has some extra unique behaviour
doing some pretty unique stuff
doing some more pretty unique stuff
*/
```

see https://github.com/philanderson888/flutter/blob/master/projects/Course05BusinessCard2/lib/models/mixin.dart used by https://github.com/philanderson888/flutter/blob/master/projects/Course05BusinessCard2/lib/routes/grid_main.dart 



## learning

originality.ai