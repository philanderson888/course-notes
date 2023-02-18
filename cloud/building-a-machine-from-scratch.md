# building a machine from scratch

## contents

- [building a machine from scratch](#building-a-machine-from-scratch)
  - [contents](#contents)
  - [windows](#windows)
    - [install developer machine from scratch](#install-developer-machine-from-scratch)

## windows

### install developer machine from scratch

1. chocolatey

as administrator

```
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```

2. git

```
choco install git -y
```