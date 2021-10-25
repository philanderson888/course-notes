# Azure Labs

- [Azure Labs](#azure-labs)
  - [Getting Started - Critical Terms](#getting-started---critical-terms)
    - [Azure Compute Unit](#azure-compute-unit)
    - [SKU](#sku)
  - [Nested Virtualization](#nested-virtualization)
  - [Azure CLI Modes](#azure-cli-modes)
  - [Installation Of ASM](#installation-of-asm)
  - [Log In](#log-in)
  - [Who Is Logged In](#who-is-logged-in)
  - [List Resource Groups](#list-resource-groups)
  - [Create Resource Group](#create-resource-group)
  - [Remove Resource Group](#remove-resource-group)
  - [List Resources](#list-resources)
  - [List All Virtual Machines](#list-all-virtual-machines)
  - [Azure Create Windows 10 VM](#azure-create-windows-10-vm)
  - [Azure Stop VM](#azure-stop-vm)
  - [Azure Delete VM](#azure-delete-vm)
  - [List All Virtual Networks](#list-all-virtual-networks)
  - [List All Network Cards](#list-all-network-cards)
  - [Azure Create Windows Server VM](#azure-create-windows-server-vm)
  - [Azure Create VM With Nested Virtualization](#azure-create-vm-with-nested-virtualization)
  - [Azure Create Windows 10 VM](#azure-create-windows-10-vm-1)
  - [Azure VM Install Windows Server](#azure-vm-install-windows-server)
  - [Azure Cloud Shell CLI Create VM](#azure-cloud-shell-cli-create-vm)
  - [Azure Create Database](#azure-create-database)
  - [Azure See What Images Are Available](#azure-see-what-images-are-available)
  - [Azure Create Ubuntu Server VM](#azure-create-ubuntu-server-vm)
  - [Ubuntu Nested Virtualization](#ubuntu-nested-virtualization)
  - [Ubuntu Install GUI](#ubuntu-install-gui)
  - [Ubuntu Install VirtualBox](#ubuntu-install-virtualbox)
    - [Ubuntu Install Docker](#ubuntu-install-docker)
- [Ubuntu Install Minikube](#ubuntu-install-minikube)
  - [Ubuntu Install VSCode](#ubuntu-install-vscode)
  - [Ubuntu Build C# Web App](#ubuntu-build-c-web-app)
  - [Windows 10 Setup](#windows-10-setup)
  - [Manually install exe](#manually-install-exe)
  - [Choco Install Visual Studio](#choco-install-visual-studio)
  - [Install Docker](#install-docker)
  - [Archive - Installation Of ARM (older)](#archive---installation-of-arm-older)
  - [Archive - Log in to ARM subscription](#archive---log-in-to-arm-subscription)

## Getting Started - Critical Terms

### Azure Compute Unit

Measure of power of a machine.  100 SKU is the power of a Small (Standard_A1) virtual machine

[Different Azure Machine Types](https://docs.microsoft.com/en-us/azure/virtual-machines/acu)

```powershell
# list machines available to build
az vm list-sizes -l uksouth -o table
```

### SKU

## Nested Virtualization

Nested virtualization allows a hypervisor to be installed on a virtual machine!

[Machines which support nested virtualization here](https://docs.microsoft.com/en-us/azure/virtual-machines/acu)

- Standard_D2_v3 with 2CPU and 8GB RAM
- Standard_D2s_v3 
- D4s_v3 
- E4s_v3 but is perhaps too big

See this article https://docs.microsoft.com/en-us/azure/virtual-machines/windows/nested-virtualization#create-a-nesting-capable-azure-vm


## Azure CLI Modes

- ARM Azure Resource Manager (older)
- ASM Azure Service Management 
  - replaces ARM since October 2018


https://docs.microsoft.com/en-us/powershell/azure/?view=azps-4.4.0

We can run commands from either

- Azure Powershell
- Azure Cloud Shell


## Installation Of ASM

```powershell
install-module az
install-module az -AllowClobber -Scope AllUsers
# verify correct version installed ie 4.5.0 Name Az
Get-InstalledModule -Name Az -AllVersions 
```

## Log In

```powershell
# this is only from time to time; mostly can be ignored
Connect-AzAccount
# log in
az login
```

## Who Is Logged In

```powershell
az account list -o table
```

## List Resource Groups

```powershell
az group list -o table
```

## Create Resource Group

```powershell
az group create -n ResourceGroup01 -l uksouth
```

## Remove Resource Group

```powershell
az group delete -n DeleteThisGroup -y
#or 
Remove-AzResourceGroup ResourceGroup01-Force
```

## List Resources

```powershell
az resource list -o table
az resource list -g ResourceGroup01 -o table
```

## List All Virtual Machines

```powershell
az vm list -o table
az vm list -g my-group -o table
az vm list -g my-group -o table
az vm list -g my-group -o table --show-details
```

## Azure Create Windows 10 VM

*Takes 10-15 minutes*

```powershell
new-azvm -ResourceGroupName ResourceGroup01 -image win10 -location uksouth -size standard_d2_v3 -n Win10   
```

Find out the IP and log in with RDP

```powershell
az vm list -o table --show-details
```

## Azure Stop VM

```powershell
az vm stop -n VMName -g MyResourceGroup
```

## Azure Delete VM

```powershell
az vm delete -g MyResourceGroup -n VMName --yes
```

## List All Virtual Networks

```powershell
az network vnet list -o table
```

## List All Network Cards

```powershell
az network nic list -o table
```





## Azure Create Windows Server VM

```powershell
az group create --name resourcegroup23aug2020 --location uksouth
az vm create -g resourcegroup23aug2020 -n vm23aug2020 --image Win2019Datacenter --admin-username serveradmin
```

## Azure Create VM With Nested Virtualization

```powershell
# list machines available to build
az vm list-sizes -l uksouth -o table
# Note : Standard_D2_v3 gives 128GB HDD and 8GB RAM - probably need 16GB RAM to be comfortable
 az vm create -g ResourceGroup02092020 -n vm02092020 --image Win2019Datacenter --admin-username serveradmin --size Standard_D2_v3
```



## Azure Create Windows 10 VM

```powershell
az account set --subscription 39ff3502-0a96-4f31-9d65-093ab484da57
select-azuresubscription -Default 39ff3502-0a96-4f31-9d65-093ab484da57
New-AzureVMConfig -Name "VirtualMachine07" -InstanceSize ExtraSmall -ImageName (Get-AzureVMImage)[4].ImageName | Add-AzureProvisioningConfig -Windows -Password $adminPassword -AdminUsername PsTestAdmin | New-AzureVM -ServiceName "ContosoService" -AffinityGroup "Contoso" -WaitForBoot
```

*Note - the image options here are 'CentOS', 'CoreOS', 'Debian', 'openSUSE-Leap', 'RHEL', 'SLES', 'UbuntuLTS', 'Win2019Datacenter', 'Win2016Datacenter', 'Win2012R2Datacenter', 'Win2012Datacenter', 'Win2008R2SP1*

## Azure VM Install Windows Server

https://docs.microsoft.com/en-us/azure/virtual-machines/windows/tutorial-automate-vm-deployment

https://docs.microsoft.com/en-us/powershell/module/servicemanagement/azure.service/new-azurevm?view=azuresmps-4.0.0

https://docs.microsoft.com/en-us/azure/virtual-machines/windows/quick-create-powershell

```powershell
az group create --name SpartaResourceGroup01 --location uksouth
# get credentials
$cred = Get-Credential
# new vm
New-AzureVm `
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



## Azure Cloud Shell CLI Create VM

https://docs.microsoft.com/en-us/azure/virtual-machines/windows/quick-create-powershell

```powershell
# Create Resource Group 
New-AzResourceGroup -Name SpartaVirtualMachine-22-Aug-2020 -Location UKSouth
New-AzVm `
    -ResourceGroupName "SpartaVirtualMachine-22-Aug-2020" `
    -Name "myVM" `
    -Location "UKSouth" `
    -VirtualNetworkName "myVnet" `
    -SubnetName "mySubnet" `
    -SecurityGroupName "myNetworkSecurityGroup" `
    -PublicIpAddressName "myPublicIpAddress" `
    -OpenPorts 80,3389
    -Credential (Get-Credential)
```



## Azure Create Database

Here is a walkthrough manually or use the script below 

https://docs.microsoft.com/en-us/azure/azure-sql/database/single-database-create-quickstart?tabs=azure-portal

https://docs.microsoft.com/en-us/azure/azure-sql/database/scripts/create-and-configure-database-powershell?toc=/powershell/module/toc.json


```powershell
# Connect-AzAccount
# The SubscriptionId in which to create these objects
$SubscriptionId = '39ff3502-0a96-4f31-9d65-093ab484da57'
# Set the resource group name and location for your server
# $resourceGroupName = "myResourceGroup-$(Get-Random)"
$resourceGroupName = "SpartaTestDatabase-22-Aug-2020"
$location = "uksouth"
# Set an admin login and password for your server
$adminSqlLogin = "SqlAdmin"
$password = "ChangeYourAdminPassword1"
# Set server name - the logical server name has to be unique in the system
$serverName = "server-$(Get-Random)"
# The sample database name
$databaseName = "mySampleDatabase"
$databaseName2 = "mySampleDatabase2"
# The ip address range that you want to allow to access your server
$startIp = "92.234.29.198"
$endIp = "92.234.29.198"

# Set subscription 
Set-AzContext -SubscriptionId $subscriptionId 

# Create a resource group
$resourceGroup = New-AzResourceGroup -Name $resourceGroupName -Location $location

# Create a server with a system wide unique server name
$server = New-AzSqlServer -ResourceGroupName $resourceGroupName `
    -ServerName $serverName `
    -Location $location `
    -SqlAdministratorCredentials $(New-Object -TypeName System.Management.Automation.PSCredential -ArgumentList $adminSqlLogin, $(ConvertTo-SecureString -String $password -AsPlainText -Force))

# Create a server firewall rule that allows access from the specified IP range
$serverFirewallRule = New-AzSqlServerFirewallRule -ResourceGroupName $resourceGroupName `
    -ServerName $serverName `
    -FirewallRuleName "AllowedIPs" -StartIpAddress $startIp -EndIpAddress $endIp

# Create a blank database with an S0 performance level
$database = New-AzSqlDatabase  -ResourceGroupName $resourceGroupName `
    -ServerName $serverName `
    -DatabaseName $databaseName `
    -RequestedServiceObjectiveName "S0" `
    -SampleName "AdventureWorksLT"
```




## Azure See What Images Are Available

```powershell
$location="eastus"
$resourceGroupName = "resource-group-2-23-aug-2020"
$resourceGroup = New-AzResourceGroup -Name $resourceGroupName -Location $location
# or
$location="eastus"
$resourceGroup = "resource-group-2-23-aug-2020"
$publisher="MicrosoftWindowsDesktop"
$productName="Windows-10"
# Get-AzVMImagePublisher -Location $location | Select PublisherName
Get-AzVMImageOffer -Location $location -PublisherName $publisher | Select Offer
Get-AzVMImageSku -Location $location -PublisherName $publisher -Offer $productName | Select Skus
$skuName="rs5-pron"
Get-AzVMImage -Location $location -PublisherName $publisher -Offer $productName -Sku $skuName | Select Version 
# Version
# -------
# 17763.1339.2007101755
# 17763.1397.2008070242

# Now build the parameters above into this formula
$vmConfig = New-AzVMConfig -VMName "myVM" -VMSize Standard_D1

# Set the Marketplace plan information
$planName = "19h1-ent"
$vmConfig = Set-AzVMPlan -VM $vmConfig -Publisher $publisher -Product $productName -Name $planName
# $cred=Get-Credential
# $vmConfig = Set-AzVMOperatingSystem -Windows -VM $vmConfig -ComputerName "myVM" -Credential $cred
$vmConfig = Set-AzVMOperatingSystem -Windows -VM $vmConfig -ComputerName "myVM" -Credential $cred
# Set the Marketplace image

$productName="Windows-10"
$skuName="rs5-pron"
$version = "17763.1339.2007101755"
$vmConfig = Set-AzVMSourceImage -VM $vmConfig -PublisherName $publisher -Offer $productName -Skus $skuName -Version $version

# https://docs.microsoft.com/en-us/azure/virtual-machines/marketplace-images
New-AzVM `
   -ResourceGroupName $resourceGroup `
   -Location $location `
   -VM $vmConfig
```


## Azure Create Ubuntu Server VM

```powershell
# resource group
az group list -o tableaz 
az group create --name ubuntu01 --location uksouth
# create vm
 az vm create --name ubuntu --resource-group Ubuntu26Aug2020 --size Standard_D2_v3 --image UbuntuLTS --generate-ssh-keys --admin-username serveradmin
# open for port 80
az vm list -o table --show-details
az vm open-port --port 80 -g ubuntu01 --name ubuntu01
az vm open-port --port 443 -g ubuntu01 -n ubuntu01 --priority 101
# get public ip  (using -g for group alias)
az vm list -g ubuntu01 --show-details --output table
# alter permissions by removing admin write access
# connect
ssh serveradmin@51.140.51.98 
# update
sudo apt update -y
sudo apt upgrade -y
```

## Ubuntu Nested Virtualization

```bash
# does the machine support virtualization?  
grep -cw vmx /proc/cpuinfo  
grep -E --color 'vmx|svm' /proc/cpuinfo
```

## Ubuntu Install GUI

This works!

https://blog.hildenco.com/2019/07/creating-ubuntu-desktop-instance-on.html

```bash
# connect to my remote server using ssh
ssh bruno@<my-ip>
# Updating the package Sources
sudo apt-get update && sudo apt-get upgrade
# install basic terminal tools
sudo apt install tmux git ranger vim
# Installing LXDE
sudo apt-get install lubuntu-desktop -y
# install xrdp
sudo apt-get install xrdp -y
# start the xrdp service
sudo systemctl start xrdp
```


## Ubuntu Install VirtualBox

```bash
sudo add-apt-repository universe
sudo add-apt-repository multiverse
sudo apt update -y
sudo apt upgrade -y
sudo apt dist-upgrade -y
sudo apt install build-essential dkms unzip wget -y
sudo reboot
```

```bash
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

### Ubuntu Install Docker

*1 minute install*

```bash
# install
sudo apt install docker.io -y
# run docker
docker
```


# Ubuntu Install Minikube

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




## Ubuntu Install VSCode

```bash
# already installed
sudo apt install snapd  
sudo snap install --classic code
# install dotnet
sudo snap install --classic dotnet-sdk
sudo snap alias dotnet-sdk.dotnet dotnet
```

## Ubuntu Build C# Web App

```bash
# open ports
az vm open-port --port 5000 -g Ubuntu26Aug2020 -n ubuntu --priority 101
az vm open-port --port 5001 -g Ubuntu26Aug2020 -n ubuntu --priority 102
dotnet new webapp
dotnet run
# view on port 5000 from another machine
# ports are blocked on Linux
sudo ufw status
```




## Windows 10 Setup

```powershell
# enable hyperv
Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Hyper-V -All
# run scripts
Set-ExecutionPolicy -ExecutionPolicy Unrestricted
```

## Manually install exe

*Shows what can be done - but Chocolatey does it better!*

Use Notepad++ as an example of how to install any exe file

```powershell
$url = "https://github.com/notepad-plus-plus/notepad-plus-plus/releases/download/v7.8.9/npp.7.8.9.Installer.x64.exe"
$output = "notepadplusplus.exe"
$start_time = Get-Date
Invoke-WebRequest -Uri $url -OutFile $output
.\notepadplusplus.exe /S 
## Install Chocolatey
# Set-ExecutionPolicy Bypass -Scope Process -Force; 
Set-ExecutionPolicy -ExecutionPolicy Unrestricted -Force
[System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
## Choco Install Apps
choco install notepadplusplus sublimetext3 vscode googlechrome nodejs -y
choco install git -params '"/GitAndUnixToolsOnPath"' -y
choco install virtualbox -y
choco install vagrant -y
choco install intellijidea-community -y  # 500MB
```

## Choco Install Visual Studio 

*Note - takes a while as installs the full version.  May be quicker to install manually and just choose options desired*

```powershell
choco install visualstudio2019community
```

## Install Docker

Have to enable Windows Subsystem For Linux which can be enabled, after a reboot, using

```powershell
# run this before docker works!
Enable-WindowsOptionalFeature -FeatureName Microsoft-Windows-Subsystem-Linux -Online -NoRestart -WarningAction SilentlyContinue
# check if this reboot is needed before install WSL2
Restart-Computer -Force
```

Install Windows Subsystem For Linux WSL2 

```powershell
$url = "https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi"
$output = "install-windows-subsystem-for-linux-kernel.msi"
$start_time = Get-Date
Invoke-WebRequest -Uri $url -OutFile $output
./install-windows-subsystem-for-linux-kernel.msi
restart-computer -force
```

Now install docker

```powershell
# docker
choco install docker-desktop --pre -y
# MiniKube
choco install minikube -y
```




## Archive - Installation Of ARM (older)

*notes for reference only - not for use*

```powershell
# run from an elevated prompt
az account set --subscription 39ff3502-0a96-4f31-9d65-093ab484da57
install-module azure
get-module azure* # should now show 3 azure modules installed - Azure, Storage and Profile
```

To remove this which must be done so no conflict exists with the newer `az` module, run this

```powershell
Uninstall-AzureRM
```

## Archive - Log in to ARM subscription

*notes for reference only - not for use*

Go to https://portal.azure.com > home > subscriptions and copy the Subscription ID into your clipboard and use it below

```powershell
Login-azureRMAccount
Get-AzureRmSubscription -SubscriptionId 39ff3502-0a96-4f31-9d65-093ab484da57
Select-AzureRmSubscription -SubscriptionId 39ff3502-0a96-4f31-9d65-093ab484da57
```
