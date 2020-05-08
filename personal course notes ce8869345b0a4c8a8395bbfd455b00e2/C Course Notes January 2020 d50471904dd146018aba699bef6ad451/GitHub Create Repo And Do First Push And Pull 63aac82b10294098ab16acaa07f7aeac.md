# GitHub Create Repo And Do First Push And Pull

GitHub

Local computer

```
Install 'git'

	Hidden folder '.git' in which it will store all history of every line
		of every file and every change you have ever made to all your
		work for ever back to start of creating that 'Git Repo'

Each 'fix' of code ==> COMMIT

1. Make changes
2. git diff  		==> SHOW CHANGES
3. git add .  		==> TELL COMPUTER WE ARE WATCHING THESE FILES
4. git commit -m "message" ==> 'FIX' THE STATE OF THE 'WATCHED' FILES AT THIS
							POINT IN TIME
5. git push ==> to internet
6. git pull ==> from internet
7. git status   at any point to show where you are 'at'
8. git log  ==> show commits in time history
```

GitHub on Internet

```
GitHub store all your local Git changes, but up on the internet

New Repo
Public
README
MIT Licence
Visual Studio   .gitIgnore
```

First use : pull down internet 'repo' (repository) to local computer

```
git clone <https://github.com/philanderson888/delete-me-test.git>

cd delete-me-test

notepad README.md

git push .... to internet
```