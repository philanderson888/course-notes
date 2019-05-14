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