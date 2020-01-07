# Github

# GitHub

## Basic walkthrough together

Create repo online; clone / download then begin work

git clone [https://github.com/philanderson888/sparta-test-01.git](https://github.com/philanderson888/sparta-test-01.git)

    ls Force  hidden files
    
    .git is the folder containing all git repositories
    
    MASTER : DEFAULT BRANCH : PRODUCTION
    
    	DEV : DEVELOPMENT BRANCH (CUMULATIVE)
    
    		FEATURE-01  (INDIVIDUAL DEV TEAMS WORKING ON DIFFERENT FEATURES)
    		FEATURE-02
    
    git pull 		==> pull down latest changes
    
    
    // make change
    
    git status ==> check first if changes waiting
    
    git add <<FILE NAME>>
    or
    git add .
    then
    git commit -m "description"
    then
    git push

# Branches

    git branch dev 		create branch
    git checkout dev    move to working in this branch
    
    
    update some code and push to internet
    
     git push --set-upstream origin dev
    
    
    MASTER BRANCH   (STATE 1)
    
    	DEV BRANCH (UPDATED STATE 2)
    
    			MISMATCH
    
    
    
    		After approval : both DEV and MASTER branches ONLINE are MATCHED
    
    		But!!!
    				Offline my DEV is OK but my MASTER is now out of sync.
    
    					git checkout master
    					git pull

# Visual demo of differences between branches

    add stuff
    and here
    and here
    
    You can visually see branch differences using `git checkout` and File Explorer
    
    	git checkout dev
    	<<make changes>>
    	git add .
    	git commit -m ""
    
    	git checkout dev/master ==> VISUALLY SEE DIFFERENCES

## Comparing two text files online

    git diff can show differences between files
    
    	==> complex for beginner
    	==> simple ==> find webpage and compare 2 text files

LAB
index.html
page01.html
page02.html
page03.html

## Formal Notes

git --version

git init
OFFLINE : create new repo ((HASSLE ==> BEST ONLINE DO THIS, GIT CLONE ...))

git add .
OOPS ! MADE MISTAKE
git reset
==> UNDO GIT ADD

# Talking to remote repo

git remote
git remote -v
PUSH ==> LINK
PULL ==> LINK (GIT FETCH & GIT MERGE ==> GIT PULL)
git remote set-url origin [https://github.com/philanderson888/sparta-test-01.git](https://github.com/philanderson888/sparta-test-01.git)

# git config

    VIEW THE USER ACCOUNT YOU ARE LOGGED IN WITH
    
    git config --global -l    	LIST INFO
    
    git config --global user.name philanderson888						SET DETAILS
    git config --global user.email philanderson888@myemail.com  
    
    // RESET TO SCRATCH : RESOLVE A CONFLICT
    
    git config --local credential.helper ""
    git push origin master

## deleting a branch

    git branch test      // CREATE
    git branch -D test   // DELETE LOCAL
    git branch -d test   // DELETE LOCAL AND ONLINE

## rolling back

    we can use 
    
    git log
    
    			to view previous commits
    
    LOG IN AND VIEW STATUS OF ONE COMMIT
    
    git checkout 49bdaf82b07770c0138b4d6f67cfe0539949fd5d    (hash of this commit)

## Working as a team

    person 1
    	git checkout feature1
    	..change
    	git add/commit/push
    	create pull request
    person 2
    	approve pull request
    	pull FEATURE into DEV
    whole group
    	git checkout dev
    	git pull
    	git checkout feature2
    	git merge TO MERGE CHANGES FROM DEV INTO THEIR FEATURE2 (which they are working on)
    	conflict ==> fix locally.
    
    CYCLE BEGINS AGAIN

## Protecting master branch

    AGREE WHEN YOU START : CANNOT PUSH DIRECTLY TO MASTER.  MUST CREATE PULL REQUEST