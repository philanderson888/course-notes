# building a machine from scratch

## contents

- [building a machine from scratch](#building-a-machine-from-scratch)
  - [contents](#contents)
  - [windows](#windows)
    - [install developer machine from scratch](#install-developer-machine-from-scratch)
      - [set powershell default folder](#set-powershell-default-folder)
    - [chocolatey](#chocolatey)
    - [git](#git)
    - [node and npm](#node-and-npm)

## windows

### install developer machine from scratch

#### set powershell default folder

as administrator

```
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned
```

```
cd ~/Documents
cd WindowsPowerShell
notepad profile.ps1
Add-Content profile.ps1 "Set-Location C:\github"
```

### chocolatey

as administrator

```
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```

### git

```
choco install git -y
```

### node and npm

```powershell
choco install nodejs.install
# start new shell
start powershell
# verify install
node -v
npm -v
```


