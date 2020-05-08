# Day 6 - GitHub

# Familiar commands

```jsx
git pull
git add .
git commit -m "message"
git push
git init : initialise brand new repo
.gitignore list of files/folders to be ignored when pushing to GitHub
1) Config
2) Private ((bad practice anyway : better to use ENVIRONMENT VARIABLES))
3) build files have to be ignored because a) clog up your commits 
    b) rebuild every time you run your code anyway
git clone [https://github.com/](https://github.com/)<<USER>>/<<REPO>>.git
git status
git log : identify all your COMMITS
hash unique identifier which identifies a file eg a git commit
git reset : GO BACK TO STATE OF A PREVIOUS COMMIT
git reset
--soft : GO BACK TO THE POINT IN TIME OF THAT COMMIT WITHOUT ERASING HISTORY (best)
take this point and put it as the new HEAD
--hard : GO BACK AND ALSO ERASE HISTORY TO THAT POINT
HEAD : tip of your commits.
git clean
DANGER!!! DELETE ALL UNTRACKED FILES WHICH HAVE NOT BEEN COMMITTED
```

Branching

```
MASTER 					production code (pushed live)  CI-CD continuous integration, 
															 continuous deployment
	DEV 				consolidated work of all approved dev commits
						(PULL REQUEST GETS APPROVED)
						GIT PULL FROM REST OF TEAM
		FEATURE         NEW CODE
		BUG-FIX         FIX ISSUES
```

Lab
test-repo

```
MASTER (LOCK)

		DEV
```

# Create branches

```jsx
git branch <<new-branch-name>> eg git branch dev creates branch
git checkout <<new-branch-name>> eg git checkout dev switch from master to dev

or

git checkout -b <<new-branch-name>>
```

# Now push new branch

```
git push --set-upstream origin dev
git push -u             origin dev
```

# Lock master branch (cannot commit directly)

# Create a PULL REQUEST FROM DEV INTO MASTER

# Deleting a branch???

```
After pull request is complete, IF ALL WORK ON THAT BRANCH IS COMPLETE THEN YES 
YOU CAN DELETE
```

Lab work : 20 minutes

```
Create the full lab, from scratch, with a new repo.  Put a java project in it???
```

Building a script from scratch

```
C:\\Users\\<<username>>\\WindowsPowerShell

C:\\Users\\TECH-W99a\\WindowsPowerShell

Set EXECUTION POLICY  (admin shell)
```

Test Script to create / delete a folder

```jsx
echo hello
echo world
echo "hello world"
rm -Recurse -Force c:\test
md c:\test
cd c:\test
md childfolder
echo "press any key to delete folder"
pause
cd c:\
rm -Recurse -Force c:\test
```

Script To Run GitPush in One Command

```
git add .
git commit-m "<<MESSAGE>>"
git push
```

Here is the script to run a FIXED GIT COMMAND

```jsx
function global:gitpush2{
echo "about to push"
pwd
git pull
git add .
git commit -m "fixed message"
git push
}
gitpush2
```

Lab Work

1. Split into groups of 4. Create GROUP REPO, all pull and then push in turn to simulate a real working environment (master(locked), dev, feature1/2/3/4)
2. Create two repos for your projects and push to github

HTML Extra

Can you create a BOOSTRAP NAVBAR and a BOOTSTRAP TABLE (STRIPED, HOVERED)?