## Powershell

### mkcd in Powershell
[alias](#alias)

### [Tail](#tail)

### [Telnet](#telnet)

### [Wait](#wait)

[functions](#functions)
Create a folder WindowsPowerShell and add it to your Path

```powershell
Function global:mkcd {
  mkdir $args[0]
  cd $args[0]
}
mkcd $args[0]
```

Use an elevated Powershell prompt to set the ExecutionPolicy to RemoteSigned and from now on you can call mkcd test to create a folder test and go into it.

    @ turns off displaying command as it gets executed

    echo text output to scr    @echo off turns off the command permanently

    pause

    goto




### Tail

Tail enables us to look at the last x lines of a file

```powershell
Get-Content D:\log.txt -Tail 3
```



### TCP

Connect to any open socket using

```powershell
New-Object System.Net.Sockets.TcpClient("a2k4.com", 2300)
```


### Telnet

Install using

```powershell
dism /online /enable-feature /featurename:telnetclient
```


### Wait

Wait enables us to see live when a file has been updated

```ps
Get-Content D:\log.txt –Wait
```








## Environment Variables

There are some commands which work only on the command line, or are simpler to implement

## set - get environment variables (Command line only)

Run the `set` command in the command line (not Powershell) to view existing environment variables

```bash
set
```
View one environment variable with `echo`

```bash
echo %ProgramFiles%
```

In Powershell the command is

```bash
Get-ChildItem Env:
```
### setx - set environment variables (Command Line only)

```bash
setx subl "C:\Program Files\Sublime Text 3"
```



# Setting Up A Windows Computer Completely From The Command Line !!!

```bash
# Installing applications
echo "Use Ninite to install your favourite programs - press any key when done"
pause
echo "Install GitBash and press any key when done"
pause
echo "Download Sublime Text 3 and press any key when it's installed"
pause
echo "Install Office"
pause
echo "Install Teams"
pause
cmd
echo "Adding Sublime Text 3 to PATH with the `setx` command
setx subl "C:\Program Files\Sublime Text 3"
powershell
echo "Creating SSH keys for GitHub"
ssh-keygen -t rsa -b 4096 
# start the ssh agent service to run in the background (Windows needs GitBash)
cd "C:\Program Files\Git\"
git-bash.exe"
echo "Manually run this command on GitBash - `eval $(ssh-agent -s)`" 
# add key to my account 
ssh-add ~/.ssh/id_rsa
# copy the key to the clipboard on Windows
clip < ~/.ssh/id_rsa.pub
Echo "Now login to github.com and paste the data into a new key"
echo "cd reponame..."
echo "git remote set-url origin git@github.com:username/repo.git "
echo "git push origin master"
echo "repeat for every repo"
pause
```





