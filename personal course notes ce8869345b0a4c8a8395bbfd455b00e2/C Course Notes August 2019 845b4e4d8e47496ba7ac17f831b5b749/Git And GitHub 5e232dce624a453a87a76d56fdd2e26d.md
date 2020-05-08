# Git And GitHub

Git and Github

```
Git is a LOCAL REPOSITORY

GitHub is an ONLINE REPOSITORY

1) Log in or register to a GitHub account online (GitHub.com)  ((personal / Sparta email))

2) GitBash : command line tool : download
```

Basic commands : local

```
git init 				turn a folder into a folder which is monitored by Git

						.git (hidden folder) is created

md (make directory)  <<name>>

rd (remove directory) -Recurse -Force
```

Basic Commands : Online

```
Online : new Repository

	YES PUBLIC
	YES .gitignore (VisualStudio) : ignore repeatable 'build' files so they don't clog 
										up our repo
	YES licence (MIT)

README.md    

	.md => MARKDOWN

git clone <https://github.com/><<USER>>/REPO.git	

git clone <https://github.com/philanderson888/delete-me-c-sharp-test>	

	Open up files in editor : notepad <<file>>

	                 sublime : use ENVIRONMENT VARIABLE
```

Commiting Changes

```
git add <<FILE>>

git add .   (all files)

git commit -m "Initial Commit"

git push  						push to internet 

git pull 						pull down fresh changes

git log 						history
```

Overnight download [https://desktop.github.com/](https://desktop.github.com/)

# GitHub Branches

```
Master Branch ==> default place our work gets put when we first 'push' our work to GitHub

Master Banch ==> Final Production Code

	Dev Branch ==> Joint work of all developers, not yet in production

		Feature Branch ==> new features to add to product

		or

		BugFix

			'Issues' can be logged on your GitHub repo

git status  ==> show which branch we are on

git branch <<Name>>   create new branch

git checkout  <<Name>>   switch to this branch  

Lab walkthrough

	Change to dev branch
	Update README file
	Push changes to new dev branch online
	Now difference between master and dev branches
		View differences a) Online b) Offline

	To merge work done in Dev so that it's also in Master we create a
			PULL REQUEST (online)	

		In real world : add collaborators and assign a REVIEWER for your work.
		Create pull request ==> REVIEWER notified and will check your work

	ONLINE : Master/Dev same
	OFFLINE : different

		OFFLINE : git pull (on master) should fix this

		git checkout master
		git pull

					BOTH MASTER/DEV ARE SAME
```

# GitHub Pull Requests

1. Create dev branch
2. Change & commit & push
SET NEW ORIGIN : dev
3. Lock?? master and require 1 pull approval
4. Add collaborators
5. Add approvers for this pull request : send for approval
6. Approver : get email : check code and approve/deny with comments