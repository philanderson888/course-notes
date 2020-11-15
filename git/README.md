# Git 

## Author

@philanderson888
Philip Anderson


## Last Updated

November 2020

## Contents

- [Git](#git)
  - [Author](#author)
  - [Last Updated](#last-updated)
  - [Contents](#contents)
  - [Introduction](#introduction)
  - [Install](#install)
  - [Basic Commands](#basic-commands)
  - [git diff](#git-diff)
    - [gitk](#gitk)
    - [GitHub Desktop](#github-desktop)
  - [Hiding Secrets](#hiding-secrets)
    - [git add](#git-add)
    - [git reset](#git-reset)
    - [git status](#git-status)
    - [git commit](#git-commit)
  - [Working With GitHub Online](#working-with-github-online)
    - [git clone](#git-clone)
    - [git remote](#git-remote)
    - [git push](#git-push)
    - [git pull](#git-pull)
    - [git config](#git-config)
    - [git branch](#git-branch)
      - [rename a branch](#rename-a-branch)
    - [git checkout](#git-checkout)
    - [git pull origin dev and git merge dev](#git-pull-origin-dev-and-git-merge-dev)
  - [Viewing And Undoing Changes](#viewing-and-undoing-changes)
    - [git log](#git-log)
    - [git reflog](#git-reflog)
    - [git reset —soft](#git-reset-soft)
    - [git reset —hard](#git-reset-hard)
    - [git clean](#git-clean)
    - [github tagging](#github-tagging)
- [Other Git Topics And Commands](#other-git-topics-and-commands)
    - [Fixing a merge conflict](#fixing-a-merge-conflict)
    - [Change Git User](#change-git-user)
    - [Protecting The Master Branch](#protecting-the-master-branch)
    - [Configuring a publishing source for GitHub Pages](#configuring-a-publishing-source-for-github-pages)
    - [Renaming A Branch](#renaming-a-branch)
  - [Changing Github User](#changing-github-user)
    - [Tagging](#tagging)
- [GitHub with SSH](#github-with-ssh)
    - [git remote with SSH](#git-remote-with-ssh)
    - [Locating your SSH keys](#locating-your-ssh-keys)
    - [Adding SSH keys to github with SSH Keygen](#adding-ssh-keys-to-github-with-ssh-keygen)
  - [Github With SSH](#github-with-ssh-1)
    - [Keygen - walkthrough from scratch](#keygen---walkthrough-from-scratch)


## Introduction

Notes on all things git!

## Install

Linux

```
sudo apt-get install git 		Debian
sudo yum install git 			Fedora
```

MAC and Windows

download [git-scm.com/download](http://git-scm.com/download)

Windows

```
choco install git.install
```

## Basic Commands

```powershell
# version
git --version
# initialise a private git repo
git init
```

## git diff

```powershell
# view differences before git add
git diff
# view differences for one file
git diff HEAD file

# once in the file, navigate with
:return  next line
:space   next page
:q       quit
:w       previous page
:h       help

# check differences before git push
git diff --cached
```

### gitk

gitk - viewing proposed changes

```powershell
# Run gitk and view proposed changes
gitk
```

### GitHub Desktop

Use GitHub Desktop at [https://desktop.github.com/](https://desktop.github.com/) to visually see all changes first

## Hiding Secrets

Use this guide [https://gist.github.com/derzorngottes/3b57edc1f996dddcab25](https://gist.github.com/derzorngottes/3b57edc1f996dddcab25) to create a config file with the API keys in it, which is not published to github because it's inside the .gitignore file as well.

### git add

```
# add file to staging area so that files are now tracked
gid add <file>
git add .
git add . --interactive to view changes as you push them

# show differences in files we have just added to the staging area
git diff --cached 

# check differences before commit
git diff --staged
git diff --cached
```

### git reset

```
# before committing, git reset (no full stop) reverses the effect of git add
git reset
```

### git status

```
# show differences between your folder and the staging area
git status
```

### git commit

```
# commit our work as a point in time 'commit' to a local repository
git commit -m "Sample commit"

```

## Working With GitHub Online

### git clone

git clone can be used to clone a repository

```
# copy a fresh copy of a remote repository down to the local machine, and initialise it ready for editing
git clone
```

### git remote

```
# validate set up
git remote
# show url set up
git remote -v
git remote get-url --all origin
# set remote url
git remote set-url origin 
    <https://github.com/philandersonsparta/test-project-3>
# or
git remote add origin 
    <https://github.com/philandersonsparta/testproject>
# then 
git push -u origin master
```

### git push

```bash
# to see a list of changed files before run git push
git diff --stat --cached origin/master

# see what will happen before you push
git push --dry-run   

# to set up git push one must first define the name of the remote branch to be created
git push --set-upstream origin -branch-name-
# push from local to remote repository
git push
```

### git pull

git pulls remote repo latest changes down into my local repo and merges changes

```
# pull down files from remote to local repository
git pull
```

### git config

git config can be used to configure which github account you are logged into

query user account with

```
git config --global -l    to list and check
```

Set user account details with the following

```
git config --global user.name 'Phil Anderson' 
git config --global user.email 'phil@anderson.com'
```

reset user and begin again

```
git config --local credential.helper ""
git push origin master
```

### git branch

The branches that need to be created are

- Master
- Dev
- Feature Branch

```
# create a branch
git branch branch_name

# create a new sub-branch off dev
git checkout -b new-branch-name dev

# delete a local-only branch 
git checkout master
git branch -D branch_name

# delete a branch if it's been pushed to remote repo also
git checkout master
git branch -d branch_name

# delete the branch you are on, and push this deletion to GitHub also
git push origin --delete branch_name

# delete a remote branch
git checkout master
git push origin --delete remote-branch-name


```

#### rename a branch

```bash
git checkout old_name
git branch -m new_name
git push origin -u new_name
git push origin --delete old_name
```



### git checkout

```
# move from one branch into another
git checkout branch_name
```

View the files in a particular commit

```
# obtain the ID of the intended commit
git log
# move to this commit and look at the files
git checkout id
```

```
# view all branches including hidden ones
git checkout -a
```

 

### git pull origin dev and git merge dev

If a dev branch has been updated in github then we need to bring our dev and feature branches into line with the dev branch online.

These steps will pull down and merge all changes.

```
// Create branch dev if it does not exist
git branch dev

// Move to dev branch
git checkout dev

// pull down changes from dev on github to dev on local
git pull origin dev

// check code has pulled down
ls 

// switch to feature branch
git checkout phil-feature-branch-01

// merge changes from dev into this branch
git merge dev
```

## Viewing And Undoing Changes

### git log

git log can be used to view previous commits

```
# view snapshots (commits)
git log

# git log with branching
git log --graph
```

### git reflog

```csharp
### git reflog

git reflog # display a list of commits with indexes.
```

### git reset —soft

Undo changes and reset the state of the disk back to a given commit point

```
git reset --soft  305bf485c68361d3a0ec97192998ea81a6673fbc
```

### git reset —hard

Use this with extreme care as it wipes the files from your hard drive and they become irrecoverable

```
# reset files on your hard disk back to your last commit point
git reset HEAD --hard 

# resets the files on disk to the state registered by this snapshot
git reset --hard  305bf485c68361d3a0ec97192998ea81a6673fbc
```

### git clean

Git clean can be used to remove untracked directories, which may still be hanging around and not been deleted properly when a checkout takes place and we no longer want those directories to be present

```
// force removal of untracked directories
git clean -fd
```

### github tagging

GitHub tagging can allow you to commit a project at a certain state in time, and then preserve that state with definite tags in order to be able to recover the project again if needed.

This also works with GitHub releases.

```
# show all tags
git tag
git show

# add a tag
git tag mytag

git tag -a "version-1.0" -m "detailed message about this version" 
git push origin --tags

```

# Other Git Topics And Commands

### Fixing a merge conflict

```
# show conflict
git status
```

edit .md file and find `<<<<< ==== and >>>>` markers, edit and remove them

```
# push changes
git push
```

### Change Git User

It may be that you are working on one git account and want to push under another account. You may be denied permissions to push and have to log out of the current user. Try this

```
git config --local credential.helper ""
git push origin master
```

It should prompt for fresh credentials and allow a fresh push.

### Protecting The Master Branch

Once we have created both master and dev branches we should protect the master from direct updates. All updates should now be done via the dev branch. Once updated, then a pull request gets submitted to allow work to be merged from the dev branch into the master branch, after approval.

1. Select master branch
2. Go into master branch settings
3. Choose 'Branches' on the left hand menu
4. Choose 'Add Rule'
5. Tick 'Require Pull Request Before Merging' and type in the name of the branch, ie 'master'
6. The master branch is now protected from direct updates.

### [Configuring a publishing source for GitHub Pages](https://help.github.com/articles/configuring-a-publishing-source-for-github-pages/)

### Renaming A Branch

If you are on your branch that you want to rename

```
git branch -m new-name
```

If you are on another branch

```
git branch -m old-name new-name
```

Then delete the old local and push the new branch

```
git push origin :old-name new-name
```

Finally reset the upstream branch to point to the new branch

```
git push origin -u new-name
```

## Changing Github User

It may be that you are working on one git account and want to push under another account. Try this

```
git config --local credential.helper ""
git push origin master
```

It should prompt for fresh credentials and allow a fresh push.

### Tagging

```jsx
# list tags
git tag 
# add tag
git tag -a ... -m "message"
# push tags to internet
git push origin --tags
```

# GitHub with SSH

### git remote with SSH

If you have set up SSH keys the commands with `https://` would be changed to

```
git remote set-url origin git@github.com:username/repo.git 
# or
git remote add origin git@github.com:philandersonsparta/testproject
# then 
git push -u origin master
```

### Locating your SSH keys

SSH keys can be located at [https://github.com/settings/tokens](https://github.com/settings/tokens)

### Adding SSH keys to github with SSH Keygen

```
# check on keys already present
# go to github.com, click on user icon, settings, 
      SSH keys to see if any keys are present 

# generate a new key
ssh-keygen -t rsa -b 4096 
ssh-keygen -t rsa -b 4096 -C "philanderson888@hotmail.com"

# MAC key is saved in 
# /Users/apple/.ssh/id_rsa or change name of path and file
# Windows key is saved in 
# C:\Users\...\.ssh\ssh-key-01

# start the ssh-agent service to run in the background 
                (Windows needs GitBash)
eval $(ssh-agent -s) 

# add a key to my account
ssh-add ~/.ssh/id_rsa

# verify keys added
ssh-add -l

# Windows copy public key 
clip < ~/.ssh/id_rsa.pub
# MAC copy public key
#####     delete this line     #####    cat ~/.ssh/id_rsa.pub
pbcopy < ~/.ssh/id_rsa.pub

# or copy manually from ~/.ssh/ hidden folder 

# Now login to github.com and paste public key into a new key

# Finally to get this to work reset the origin to stop it 
                pushing to an https but now to ssh
git remote set-url origin git@github.com:username/repo.git 

# now git push and it should work without asking for keys
git push origin master

# Notice that if we get a 
   git push - permission denied notice when we know the keys are
   already set up correctly then we can 
   type in the eval and ssh-add commands again.
```

## Github With SSH

Setting up github with SSH

[https://help.github.com/articles/connecting-to-github-with-ssh/](https://help.github.com/articles/connecting-to-github-with-ssh/)

Do we have existing keys?

```
open Git bash shell

ls -al ~/.ssh
```

Generate new key

```
<https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/>

***

	ssh-keygen -t rsa -b 4096 -C "email..address..."
		(github page : incorect - last item is not required)

***

	ssh-keygen -t rsa -b 4096 

Run the ssh agent (use GitBash on Windows)
```

```
eval $(ssh-agent -s)
```

This should return agent pid 1234 for example

add key to ssh agent (use GitBash on Windows)

```
ssh-add ~/.ssh/id_rsa
```

add key to github account (use GitBash on Windows)

```
clip < ~/.ssh/id_rsa.pub
```

add key (MAC)

```
cat ~/.ssh/id_rsa.pub
pbcopy < ~/.ssh/id_rsa.pub
```

(or just copy the public key in the gui)

```
Github -> Settings -> RSA Key -> New
```

### Keygen - walkthrough from scratch

```
ssh-keygen -t rsa -b 4096
```

```
Generating public/private rsa key pair.

Enter file in which to save the key (/Users/..../.ssh/id_rsa): 

Enter passphrase (empty for no passphrase): 

Enter same passphrase again: 

Your identification has been saved in /Users/..../.ssh/id_rsa.

Your public key has been saved in /Users/....../.ssh/id_rsa.pub.

# evaluate key
eval $(ssh-agent -s) 
# add key to my account
ssh-add ~/.ssh/id_rsa
```