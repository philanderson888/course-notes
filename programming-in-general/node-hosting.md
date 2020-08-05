## Node Hosting

    
Openshift

    
Docker


```  
a2hosting.com with an unmanaged server from 3.92 a month.  Gives a selection of servers, from CentOS, Debian and Ubuntu with cPanel and Webuzo management interfaces.  Note cPanel licence costs £16 a month to manage your server so that is very, very expensive.  So looks good for a super-basic, super cheap bare unmanaged hosted server.

    
InmotionHosting.com - again, very cheap at 3.49 per month although that is a 2 year commitment - one year commitment costs 3.99 a month or 48 a year

    
EvenNode.com looks good for dedicated Node hosting at £6 a month which includes a free SSL certificate to get your website up and running securely, something very important for today

    
OpenShift.com trumps them all by being TOTALLY FREE SO THIS MIGHT BE WORTH CHECKING OUT

    
DigitalOcean.com come also HIGHLY RECOMMENDED AND A GOOD BET FOR THE STARTER IN NODE

    
Heroku provides FREE APPS IN A CONTAINER - BUT DO THEY DO WHAT I WANT?

    
NodeJitsu has joined GoDaddy

    
https://github.com/flatiron - not sure the value or relevance of this one

    
Cannot go wrong with Amazon AWS https://aws.amazon.com/

	
    
https://lowendbox.com/ can purchase a server for $70 a year with 8GB RAM and 4 cores - looks good.

Database Hosting

MongoDB: MongoHQ or MongoLab
Redis: IrisCouch
CouchDB: IrisCouch

Node Hosting - Openshift

Openshift from RedHat is a good option and provides free hosting for one site, although it is a little complex to set up.
		
Node Hosting - A2 Hosting

Sign up with A2 - their 2 year plan provides good value for money (half price discount)
Go for the option for fixed IP and SSL as well to provide HTTPS support.
Instructions to get going
Check you can log in via SSH - use this link https://www.a2hosting.com/kb/getting-started-guide/accessing-your-account/using-ssh-secure-shell
Get your IP and Port from Portal Home = Client Area = My Products & Services = Product Details page
Note : username is a short version of your email, found at 
https://my.a2hosting.com/clientarea.php then click on your active product, which should
show your username and password (as asterisks) which you can click on to view
eg philande@philanderson888.a2hosted.com  port 7822
Use SSH to log in with these details
Now use this link to begin working https://www.a2hosting.com/kb/installable-applications/manual-installations/installing-node-js-on-managed-hosting-accounts
Run the SSH instructions to determine whether or not you have jailshell enabled - if so you must submit a support ticket to get it taken back to the normal shell
echo $SHELL - should show /bin/bash
uname -r  - shows CentOS version which needs to be 6  (el6)
Now install Node
cd ~      (change directory to HOME)
wget https://nodejs.org/dist/v4.4.1/node-v4.4.1-linux-x64.tar.xz  (version 4.4.1 is long term stable)
tar xvf node-v4.4.1-linux-x64.tar.gz (extract to dir)
mv node-v4.4.1-linux-x64 nodejs  (rename dir)
mkdir ~/bin
cp nodejs/bin/node ~/bin
cd ~/bin
ln -s ../nodejs/lib/node_modules/npm/bin/npm-cli.js npm    
After you run these commands, Node.js and npm are installed on your account. To verify this, type the following commands:
node --version
npm --version
The ~/bin directory is in your path by default, which means you can run node and npm from any directory in your account.
Now integrate with the web server
In a text editor, add the following lines to the .htaccess file in the /home/username/public_html directory, where username represents your account username:
RewriteEngine On
RewriteRule ^$ http://127.0.0.1:65427/ [P,L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ http://127.0.0.1:65427/$1 [P,L]
In both RewriteRule lines, replace XXXXX with the port on which your Node.js application listens.
To run a Node.js application on a managed server, you must select an unused port, and the port number must be between 49152 and 65535 (inclusive).
Save the changes to the .htaccess file, and then exit the text editor. Visitors to your web site are redirected to the Node.js application listening on the specified port.
Linux : Start Node To Run In The Background

Normally when you close your SSH session this also kills the node server which 
is not what we want!  To keep node running when SSH terminal exits, run this
nohup npm start
or
nohup npm start --production &
Note : to kill an application run
pkill node
```