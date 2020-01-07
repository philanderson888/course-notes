# Day 42 - Group Projects On GitHub to practice working as a team

### Group Project

Can you please create 3 GitHub repos Yash Ross
Jake Nathan Dilan
Harry Femi
Goal : 4 page website

    Each person will contribute to a certain part of website
    	Learn how to push/pull together
    
    Person1 : create repo  MASTER BRANCH 
    	Person1: git pull
    	         git branch dev
    	         git checkout dev
    	         git push -u origin dev  ==> now MASTER & DEV branches
    	Create MVC website and push to repo
    Person2/3/4 : git pull

===>Person2 : git branch firstname-featurename eg Dilan-Page2
Person2: work on feature, finish it and commit and push
git push -u origin Dilan-Page2 (ie not push to dev but new branch)
<<create online a PULL REQUEST FROM Dilan-Page2 branch to DEV branch>>
<<another person APPROVE THIS AND PULL REQUEST WILL MERGE 2 BRANCHES
ie Dilan-Page2 changes ===> into DEV branch.
===>Person1/3/4 git pull

    MASTER 						PRODUCTION
    	DEV 					TEAM WORKING BRANCH
    		Dilan-Page2
    		Yash-Page3
    		Nathan-Page4

From scratch
cd /
git clone .....
cd .....
git branch dev
git checkout dev