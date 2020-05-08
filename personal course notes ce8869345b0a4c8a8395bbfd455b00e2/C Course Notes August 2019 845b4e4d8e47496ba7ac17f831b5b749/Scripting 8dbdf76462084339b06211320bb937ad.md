# Scripting

# Powershell Custom Scripting : Create Your Own Commands!!!

C:\Users\<<your username>>\ create folder WindowsPowerShell

Text file called <<yourscript>>.ps1

Edit text file with Sublime Text

function global:MyAmazingScript{
echo "You are in my amazing script - watch out"
}
MyAmazingScript

To enable scripts to run

Open Powershell Administrator
Set-ExecutionPolicy Unrestricted

function global:gitpush{
pwd
git pull
echo git commit -m $args[0]
git add .
git commit -m $args[0]
git push
}
gitpush $args[0]