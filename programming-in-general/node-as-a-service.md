
AUTOSTART Node servers at system startup
	Windows
	
		SCHEDULED TASK - STARTUP 
		
		CREATE A SERVICE TO RUN THE APPLICATION 
		
	https://www.npmjs.com/package/node-windows
	
	Easy version at 
	
	http://stackoverflow.com/questions/20445599/auto-start-node-js-server-on-boot
		
	npm install -g qckwinsvc
	
	Installing your service:
	> qckwinsvc
	prompt: Service name: [name for your service]
	prompt: Service description: [description for it]
	prompt: Node script path: [path of your node script]
	Service installed
	Uninstalling your service:
	> qckwinsvc --uninstall
	prompt: Service name: [name of your service]
	prompt: Node script path: [path of your node script]
	Service stopped
	Service uninstalled
		
		
Node AutoStart : Linux 
	Ubuntu
		
		http://kvz.io/blog/2009/12/15/run-nodejs-as-a-service-on-ubuntu-karmic/
								
				
PM2 : Check out script capabilities to create a script to start PM2 at server startup
	http://pm2.keymetrics.io/docs/usage/startup/
	
	
	