# Modern Javascript Application

# Installing A Modern Javascript Application

Building a modern front-end web application today is certainly non-trivial.

We don't in general just build HTML, CSS and Javascript and then host them on a website.

In general we use an underlying tool called NODEJS to build all websites

```
NodeJS is JAVASCRIPT installed and running on your machine
in the same way as we might install C#/Java/Python

Basic Tools (command line)

	node 		runs app

	npm 		installs libraries

							npm install <<library>> -g   (global)  --save (add to config
											file for your project)

	packages.json
		list all libraries for project

	yarn 		upgrade to npm  ((use this, better than npm))
```

React vs Angular vs Vue

```
1. React ==> biggest, most widely-used library in world 

		Facebook

2. Angular ==> ??? don't use ??? 

		Google 

3. Vue ==> Best of Angular & React

		==> START YOUR LEARNING WITH VUEJS

		'Indie' project ie one man Evan Vue
```

Sample project with VUEJS

```
Command line

	npm install -g @vue/cli

Add new project

	vue create <<projectname>>
	vue create vue-hello-world
	cd vue-hello-world
	npm start                               to run
	npm run serve
					(yarn serve)

Deploy to GitHub

Deploy to Netlify

	Build command 		yarn run build
	Publish directory   dist

Folder structure

	/src 				SOURCE CODE
	/dist  				PUBLISH SITE FOR FINAL DEPLOYMENT (COMPACTED, FAST, RUNTIME
								CODE)
```