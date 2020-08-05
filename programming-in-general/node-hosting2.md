# Node Hosting

- Running your own Node Server
- Using a hosting company
- Publishing modules on NPM and Github
Running your own Node server
Website Hosting - Openshift

https://blog.openshift.com/run-your-nodejs-projects-on-openshift-in-two-simple-steps/
Website Hosting - Heroku

https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up
		
https://devcenter.heroku.com/articles/getting-started-with-nodejs#provision-add-ons
				
Demo
	https://shielded-garden-20236.herokuapp.com/
	https://shielded-garden-20236.herokuapp.com/cool
			
			
Database
	Install PostGreSQL
	
	heroku addons:create heroku-postgresql
	
		Creating heroku-postgresql on shielded-garden-20236... 
		database has been created and is available
		! This database is empty. If upgrading, you can transfer
		! data from another database with pg:copy
		Created postgresql-rugged-70627 as HEROKU_POSTGRESQL_AQUA_URL
		Use heroku addons:docs heroku-postgresql to view documentation
	https://devcenter.heroku.com/articles/heroku-postgresql
	
	heroku pg 		shows database info
	
	Add C:\Program Files\PostgreSQL\9.6\bin to path or pg:psql will not work
			
	
Heroku Push with Git
$ heroku git:clone -a shielded-garden-20236
# review your package.json and edit if necessary (see above)
$ git add package.json
$ git commit --allow-empty -m "Upgrade Node.js version"
$ git push heroku master
Detecting if you are vulnerable from the Heroku CLI
$ heroku run node -v -a shielded-garden-20236	
		
		
Website Hosting - Various
	
		
			
Runnable : Create Sandboxes for Dev Testing from your GitHub repository
	https://runnable.io/		
	
	
Azure
	Excellent Node API
	Minimum $80 per month
	
	Auto update from GitHub and dependency auto-update
AWS
	Free tier so easy to evaluate if you like it or not
	Elastic Beanstalk : Automate deployment from GIT
Google Cloud
	No Node
	No free tier
Joyent 
	Custom Node hosting
Web Faction	
	
		