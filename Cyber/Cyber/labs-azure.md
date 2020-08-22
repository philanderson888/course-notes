# Azure Labs

- [Azure Labs](#azure-labs)
  - [Who Is Logged In](#who-is-logged-in)
  - [List Resource Groups](#list-resource-groups)
  - [List All Resources!](#list-all-resources)
  - [List Resources In Group](#list-resources-in-group)
  - [List All Virtual Networks](#list-all-virtual-networks)
  - [List All Network Cards](#list-all-network-cards)
  - [List All Public IP Addresses](#list-all-public-ip-addresses)
  - [List All Virtual Machines](#list-all-virtual-machines)
  - [Create Resource Group](#create-resource-group)
  - [Azure VM Install Windows Server](#azure-vm-install-windows-server)
  - [Azure VM Install Ubuntu Server](#azure-vm-install-ubuntu-server)
  - [Azure Nested Virtualization](#azure-nested-virtualization)
  - [Azure Ubuntu Install VirtualBox](#azure-ubuntu-install-virtualbox)
- [Azure Ubuntu Install Minikube](#azure-ubuntu-install-minikube)
- [Azure Install Win10](#azure-install-win10)
  - [Script Install Of Any File](#script-install-of-any-file)
  - [Script Install Of Visual Studio 2019 Community Edition](#script-install-of-visual-studio-2019-community-edition)
  - [Silent Install Of Chocolatey](#silent-install-of-chocolatey)
  - [Silent Install Of Docker](#silent-install-of-docker)

## Who Is Logged In

```powershell
az account list
az account list --output table
```

## List Resource Groups

```powershell
az group list --output table
```

## List All Resources!

```powershell
az resource list
```

## List Resources In Group

List Resources In Resource Group

```powershell
az resource list --resource-group {group name}
```

## List All Virtual Networks

```powershell
az network vnet list
az network vnet list --output-table
```

## List All Network Cards

```powershell
az network nic list --output table
```

## List All Public IP Addresses

```powershell
az vm list -g virtual-machines-linux-kali-01 --output table
az vm list -g virtual-machines-linux-kali-01 --show-details --output table
```

## List All Virtual Machines

```powershell
az vm list -g my-resource-group --output-table
```

## Create Resource Group

```powershell
az group create --name <<name>> --location uksouth
```

## Azure VM Install Windows Server

https://docs.microsoft.com/en-us/azure/virtual-machines/windows/tutorial-automate-vm-deployment

```powershell
# get credentials
$cred = Get-Credential
# new vm
New-AzVm `
    -ResourceGroupName "myResourceGroupAutomate" `
    -Name "myVM" `
    -Location "East US" `
    -VirtualNetworkName "myVnet" `
    -SubnetName "mySubnet" `
    -SecurityGroupName "myNetworkSecurityGroup" `
    -PublicIpAddressName "myPublicIpAddress" `
    -OpenPorts 80 `
    -Credential $cred
# configure vm
Set-AzVMExtension -ResourceGroupName "myResourceGroupAutomate" `
    -ExtensionName "IIS" `
    -VMName "myVM" `
    -Location "EastUS" `
    -Publisher Microsoft.Compute `
    -ExtensionType CustomScriptExtension `
    -TypeHandlerVersion 1.8 `
    -SettingString '{"commandToExecute":"powershell Add-WindowsFeature Web-Server; powershell Add-Content -Path \"C:\\inetpub\\wwwroot\\Default.htm\" -Value $($env:computername)"}'
# get public ip of website
Get-AzPublicIPAddress `
    -ResourceGroupName "myResourceGroupAutomate" `
    -Name "myPublicIPAddress" | select IpAddress
```

Now view our website in any browser



## Azure VM Install Ubuntu Server


```powershell
# resource group
az group list --output table
az group create --name ubuntu01 --location uksouth

# list sizes
az vm list-sizes --location uksouth

# create vm
az vm create --resource-group ubuntu01 --name ubuntu01 --image UbuntuLTS --admin-username ubuntu --generate-ssh-keys

# create big vm which is big enough for nested virtualization eg Dv3 or Ev3. E4 is too big?

az vm create --resource-group NestedVirtualization --name ubuntu03 --image UbuntuLTS --admin-username ubuntu --generate-ssh-keys --size Standard_E4s_v3

# output
#  "privateIpAddress": "10.0.0.5",
#  "publicIpAddress": "51.132.26.53",

# open for port 80
az vm open-port --port 80 --resource-group ubuntu01 --name ubuntu01

az vm open-port --port 80 --resource-group NestedVirtualization --name ubuntu03

# get public ip  (using -g for group alias)
az vm list -g ubuntu01 --show-details --output table

# output
Name      ResourceGroup    PowerState    PublicIps     Fqdns    Location    Zones
--------  ---------------  ------------  ------------  -------  ----------  -------
ubuntu01  ubuntu01         VM running    51.140.51.98           uksouth

# alter permissions by removing admin write access

# connect
ssh ubuntu@51.140.51.98 

we are now in!

sudo apt update -y
sudo apt upgrade -y

```



## Azure Nested Virtualization

```bash
# does the machine support virtualization?  
grep -cw vmx /proc/cpuinfo  
grep -E --color 'vmx|svm' /proc/cpuinfo
```

## Azure Ubuntu Install VirtualBox
```bash
sudo add-apt-repository universe
sudo add-apt-repository multiverse
sudo apt update -y
sudo apt upgrade -y
sudo apt dist-upgrade -y
sudo apt install build-essential dkms unzip wget -y
sudo reboot
sudo chmod 777 sources.list
sudo echo "deb http://download.virtualbox.org/virtualbox/debian bionic contrib" >> /etc/apt/sources.list
# add key
wget -q https://www.virtualbox.org/download/oracle_vbox_2016.asc -O- | sudo apt-key add -
sudo apt update -y
sudo apt upgrade -y
sudo apt dist-upgrade -y
# install virtualbox
sudo apt install virtualbox-5.2
# add user to group
sudo usermod -aG vboxusers ubuntu
# start virtual box
sudo systemctl status vboxdrv
# get extension pack
wget https://download.virtualbox.org/virtualbox/5.2.30/Oracle_VM_VirtualBox_Extension_Pack-5.2.30.vbox-extpack
# install 
sudo VBoxManage extpack install Oracle_VM_VirtualBox_Extension_Pack-5.2.30.vbox-extpack
```


# Azure Ubuntu Install Minikube

Minikube is a mini virtual machine running ubuntu and it is used for running clusters ....

```bash
# does the machine support virtualization?  
grep -cw vmx /proc/cpuinfo  
grep -E --color 'vmx|svm' /proc/cpuinfo
# install virtualbox (above)
# install Kubernetes
cd /usr/local/bin
sudo curl -LO https://storage.googleapis.com/kubernetes-release/release/$(curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt)/bin/linux/amd64/kubectl
sudo chmod +x ./kubectl
# note 'kubectl' command now works
# get minikube
sudo wget https://github.com/kubernetes/minikube/releases/download/v0.25.0/minikube_0.25-0.deb
# install minikube
sudo dpkg -i ./minikube_0.25-0.deb
# start minikubem
minikube start
minikube status
# log in to minikube
minikube ssh
```



# Azure Install Win10

If you need `nested virtualization` make sure to choose D(CPU_COUNT)_v3 or Ev3 or higher.  See this article [here](https://docs.microsoft.com/en-us/azure/virtual-machines/windows/nested-virtualization#create-a-nesting-capable-azure-vm).

The actual list of virtual machines which supports nested virtualization is listed [here](https://docs.microsoft.com/en-us/azure/virtual-machines/acu)

Trying by experimentation these work

- E4s_v3 but is perhaps too big
- D8s_v3 which is £250 per month! 


```bash
# new VM E4s_v3 (too big)  AzureUser
# rdp to it
# enable hypervisor
Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Hyper-V -All
# plus also have to enable two other windows optional features (used the GUI here)
```

## Script Install Of Any File

Run this script as administrator to install Notepad++ silently!

```powershell
$url = "https://github.com/notepad-plus-plus/notepad-plus-plus/releases/download/v7.8.9/npp.7.8.9.Installer.x64.exe"
$output = "notepadplusplus.exe"
$start_time = Get-Date
Invoke-WebRequest -Uri $url -OutFile $output
.\notepadplusplus.exe /S 
```

## Script Install Of Visual Studio 2019 Community Edition

```powershell
$url = "https://visualstudio.microsoft.com/thank-you-downloading-visual-studio/?sku=community&rel=16&utm_medium=microsoft&utm_source=docs.microsoft.com&utm_campaign=link+cta&utm_content=download+commandline+parameters+vs2019+rc"
$output = "vs_community.exe"
$start_time = Get-Date
Invoke-WebRequest -Uri $url -OutFile $output
./vs_community.exe
```

## Silent Install Of Chocolatey

```powershell
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
```

or

```powershell
$url = "https://chocolatey.org/install.ps1"
$output = "install-chocolatey.ps1"
$start_time = Get-Date
Invoke-WebRequest -Uri $url -OutFile $output
./install-chocolatey.ps1
```



## Silent Install Of Docker

Manually have to set this

```powershell
Set-ExecutionPolicy -ExecutionPolicy Unrestricted
```

```powershell
# install chocolatey
$url = "https://chocolatey.org/install.ps1"
$output = "install-chocolatey.ps1"
$start_time = Get-Date
Invoke-WebRequest -Uri $url -OutFile $output
./install-chocolatey.ps1
# install docker
choco install docker-desktop --pre /y
```

At this point, docker as a command won't work.

If you run the docker application from Windows 10 you have to sign out first then back in again.

But first we have to enable Windows Subsystem For Linux which can be enabled using

```powershell
Enable-WindowsOptionalFeature -Online -FeatureName $("VirtualMachinePlatform", "Microsoft-Windows-Subsystem-Linux")
```

You then have to restart your computer to use Docker.