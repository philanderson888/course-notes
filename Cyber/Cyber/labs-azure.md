# Azure Labs

- [Azure Labs](#azure-labs)
  - [Two Modes Of Operation](#two-modes-of-operation)
  - [Installation Of ASM](#installation-of-asm)
  - [Log In To ASM subscription](#log-in-to-asm-subscription)
  - [Who Is Logged In](#who-is-logged-in)
  - [List Resource Groups](#list-resource-groups)
  - [List All Resources!](#list-all-resources)
  - [List Resources In Group](#list-resources-in-group)
  - [List All Virtual Networks](#list-all-virtual-networks)
  - [List All Network Cards](#list-all-network-cards)
  - [List All Public IP Addresses](#list-all-public-ip-addresses)
  - [List All Virtual Machines](#list-all-virtual-machines)
  - [Create Resource Group](#create-resource-group)
  - [Remove Resource Group](#remove-resource-group)
  - [Azure Create VM in Azure Cloud CLI](#azure-create-vm-in-azure-cloud-cli)
  - [Azure Create Windows 10 VM](#azure-create-windows-10-vm)
  - [Azure VM Install Windows Server](#azure-vm-install-windows-server)
  - [Azure Create VM with Azure Powershell](#azure-create-vm-with-azure-powershell)
  - [Archive - Installation Of ARM (older)](#archive---installation-of-arm-older)
  - [Archive - Log in to ARM subscription](#archive---log-in-to-arm-subscription)
  - [Azure Create Database](#azure-create-database)
  - [Azure Remove Resource Group](#azure-remove-resource-group)
  - [Azure See What Images Are Available](#azure-see-what-images-are-available)
  - [Sizes](#sizes)
  - [Azure VM Install Ubuntu Server](#azure-vm-install-ubuntu-server)
  - [Azure Nested Virtualization](#azure-nested-virtualization)
  - [Azure Ubuntu Install VirtualBox](#azure-ubuntu-install-virtualbox)
- [Azure Ubuntu Install Minikube](#azure-ubuntu-install-minikube)
- [Azure Install Win10](#azure-install-win10)
  - [Script Install Of Any File](#script-install-of-any-file)
  - [Script Install Of Visual Studio 2019 Community Edition](#script-install-of-visual-studio-2019-community-edition)
  - [Silent Install Of Chocolatey](#silent-install-of-chocolatey)
  - [Silent Install Of Docker](#silent-install-of-docker)

## Two Modes Of Operation

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

## Log In To ASM subscription

```powershell
Connect-AzAccount
```

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
az resource list --resource-group {group name} -o table
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

*Also see below with New-AzResourceGroup*

```powershell
az group create --name <<name>> --location uksouth
```

## Remove Resource Group

```powershell
az group delete --name DeleteThisGroup -y
```

## Azure Create VM in Azure Cloud CLI

```powershell
az group create --name resourcegroup23aug2020 --location uksouth
az vm create --resource-group resourcegroup23aug2020 --name vm23aug2020 --image Win2019Datacenter --admin-username serveradmin
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



## Azure Create VM with Azure Powershell

We can also run the commands directly in the Azure Cloud Shell

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

## Azure Remove Resource Group 

```powershell
$SubscriptionId = '39ff3502-0a96-4f31-9d65-093ab484da57'
# Set the resource group name and location for your server
$resourceGroupName = "SpartaTestDatabase-22-Aug-2020"
Remove-AzResourceGroup -ResourceGroupName $resourceGroupName -Force
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


## Sizes

```
Standard_B1ls,Standard_B1ms,Standard_B1s,Standard_B2ms,Standard_B2s,Standard_B4ms,Standard_B8ms,Standard_B1 2ms,Standard_B16ms,Standard_B20ms,Standard_A0,Standard_A1,Standard_A2,Standard_A3,Standard_A5,Standard_A4,Standard_A6,S tandard_A7,Basic_A0,Basic_A1,Basic_A2,Basic_A3,Basic_A4,Standard_D1_v2,Standard_D2_v2,Standard_D3_v2,Standard_D4_v2,Sta ndard_D5_v2,Standard_D11_v2,Standard_D12_v2,Standard_D13_v2,Standard_D14_v2,Standard_D15_v2,Standard_D2_v2_Promo,Standa rd_D3_v2_Promo,Standard_D4_v2_Promo,Standard_D5_v2_Promo,Standard_D11_v2_Promo,Standard_D12_v2_Promo,Standard_D13_v2_Pr omo,Standard_D14_v2_Promo,Standard_F1,Standard_F2,Standard_F4,Standard_F8,Standard_F16,Standard_DS1_v2,Standard_DS2_v2, Standard_DS3_v2,Standard_DS4_v2,Standard_DS5_v2,Standard_DS11-1_v2,Standard_DS11_v2,Standard_DS12-1_v2,Standard_DS12-2_ v2,Standard_DS12_v2,Standard_DS13-2_v2,Standard_DS13-4_v2,Standard_DS13_v2,Standard_DS14-4_v2,Standard_DS14-8_v2,Standa rd_DS14_v2,Standard_DS15_v2,Standard_DS2_v2_Promo,Standard_DS3_v2_Promo,Standard_DS4_v2_Promo,Standard_DS5_v2_Promo,Sta ndard_DS11_v2_Promo,Standard_DS12_v2_Promo,Standard_DS13_v2_Promo,Standard_DS14_v2_Promo,Standard_F1s,Standard_F2s,Stan dard_F4s,Standard_F8s,Standard_F16s,Standard_A1_v2,Standard_A2m_v2,Standard_A2_v2,Standard_A4m_v2,Standard_A4_v2,Standa rd_A8m_v2,Standard_A8_v2,Standard_D2_v3,Standard_D4_v3,Standard_D8_v3,Standard_D16_v3,Standard_D32_v3,Standard_D2s_v3,S tandard_D4s_v3,Standard_D8s_v3,Standard_D16s_v3,Standard_D32s_v3,Standard_D48_v3,Standard_D64_v3,Standard_D48s_v3,Stand ard_D64s_v3,Standard_E2_v3,Standard_E4_v3,Standard_E8_v3,Standard_E16_v3,Standard_E20_v3,Standard_E32_v3,Standard_E48_v 3,Standard_E64i_v3,Standard_E64_v3,Standard_E2s_v3,Standard_E4-2s_v3,Standard_E4s_v3,Standard_E8-2s_v3,Standard_E8-4s_v 3,Standard_E8s_v3,Standard_E16-4s_v3,Standard_E16-8s_v3,Standard_E16s_v3,Standard_E20s_v3,Standard_E32-8s_v3,Standard_E 32-16s_v3,Standard_E32s_v3,Standard_E48s_v3,Standard_E64-16s_v3,Standard_E64-32s_v3,Standard_E64is_v3,Standard_E64s_v3, Standard_NV6,Standard_NV12,Standard_NV24,Standard_NV6_Promo,Standard_NV12_Promo,Standard_NV24_Promo,Standard_D2a_v4,Sta ndard_D4a_v4,Standard_D8a_v4,Standard_D16a_v4,Standard_D32a_v4,Standard_D48a_v4,Standard_D64a_v4,Standard_D96a_v4,Stand ard_D2as_v4,Standard_D4as_v4,Standard_D8as_v4,Standard_D16as_v4,Standard_D32as_v4,Standard_D48as_v4,Standard_D64as_v4,S tandard_D96as_v4,Standard_E2a_v4,Standard_E4a_v4,Standard_E8a_v4,Standard_E16a_v4,Standard_E20a_v4,Standard_E32a_v4,Sta ndard_E48a_v4,Standard_E64a_v4,Standard_E96a_v4,Standard_E2as_v4,Standard_E4as_v4,Standard_E8as_v4,Standard_E16as_v4,St andard_E20as_v4,Standard_E32as_v4,Standard_E48as_v4,Standard_E64as_v4,Standard_E96as_v4,Standard_NC6,Standard_NC12,Stan dard_NC24,Standard_NC24r,Standard_NC6_Promo,Standard_NC12_Promo,Standard_NC24_Promo,Standard_NC24r_Promo,Standard_F2s_v
2,Standard_F4s_v2,Standard_F8s_v2,Standard_F16s_v2,Standard_F32s_v2,Standard_F48s_v2,Standard_F64s_v2,Standard_F72s_v2,
Standard_E2_v4,Standard_E4_v4,Standard_E8_v4,Standard_E16_v4,Standard_E20_v4,Standard_E32_v4,Standard_E48_v4,Standard_E
64_v4,Standard_E2d_v4,Standard_E4d_v4,Standard_E8d_v4,Standard_E16d_v4,Standard_E20d_v4,Standard_E32d_v4,Standard_E48d_
v4,Standard_E64d_v4,Standard_E2s_v4,Standard_E4-2s_v4,Standard_E4s_v4,Standard_E8-2s_v4,Standard_E8-4s_v4,Standard_E8s_
v4,Standard_E16-4s_v4,Standard_E16-8s_v4,Standard_E16s_v4,Standard_E20s_v4,Standard_E32-8s_v4,Standard_E32-16s_v4,Stand
ard_E32s_v4,Standard_E48s_v4,Standard_E64-16s_v4,Standard_E64-32s_v4,Standard_E64s_v4,Standard_E2ds_v4,Standard_E4-2ds_
v4,Standard_E4ds_v4,Standard_E8-2ds_v4,Standard_E8-4ds_v4,Standard_E8ds_v4,Standard_E16-4ds_v4,Standard_E16-8ds_v4,Stan
dard_E16ds_v4,Standard_E20ds_v4,Standard_E32-8ds_v4,Standard_E32-16ds_v4,Standard_E32ds_v4,Standard_E48ds_v4,Standard_E
64-16ds_v4,Standard_E64-32ds_v4,Standard_E64ds_v4,Standard_D2d_v4,Standard_D4d_v4,Standard_D8d_v4,Standard_D16d_v4,Stan
dard_D32d_v4,Standard_D48d_v4,Standard_D64d_v4,Standard_D2_v4,Standard_D4_v4,Standard_D8_v4,Standard_D16_v4,Standard_D3
2_v4,Standard_D48_v4,Standard_D64_v4,Standard_D2ds_v4,Standard_D4ds_v4,Standard_D8ds_v4,Standard_D16ds_v4,Standard_D32d
s_v4,Standard_D48ds_v4,Standard_D64ds_v4,Standard_D2s_v4,Standard_D4s_v4,Standard_D8s_v4,Standard_D16s_v4,Standard_D32s
_v4,Standard_D48s_v4,Standard_D64s_v4,Standard_M32-8ms,Standard_M32-16ms,Standard_M32ls,Standard_M32ms,Standard_M32ts,S
tandard_M64-16ms,Standard_M64-32ms,Standard_M64ls,Standard_M64ms,Standard_M64s,Standard_M128-32ms,Standard_M128-64ms,St
andard_M128ms,Standard_M128s,Standard_M64,Standard_M64m,Standard_M128,Standard_M128m,Standard_M8-2ms,Standard_M8-4ms,St
andard_M8ms,Standard_M16-4ms,Standard_M16-8ms,Standard_M16ms,Standard_NV4as_v4,Standard_NV8as_v4,Standard_NV16as_v4,Sta
ndard_NV32as_v4,Standard_H8,Standard_H8_Promo,Standard_H16,Standard_H16_Promo,Standard_H8m,Standard_H8m_Promo,Standard_
H16m,Standard_H16m_Promo,Standard_H16r,Standard_H16r_Promo,Standard_H16mr,Standard_H16mr_Promo,Standard_L8s_v2,Standard
_L16s_v2,Standard_L32s_v2,Standard_L48s_v2,Standard_L64s_v2,Standard_L80s_v2,Standard_NV6s_v2,Standard_NV12s_v2,Standar
d_NV24s_v2,Standard_NV12s_v3,Standard_NV24s_v3,Standard_NV48s_v3,Standard_NC6s_v3,Standard_NC12s_v3,Standard_NC24rs_v3,
Standard_NC24s_v3,Standard_DC8_v2,Standard_DC1s_v2,Standard_DC2s_v2,Standard_DC4s_v2,Standard_G1,Standard_G2,Standard_G
3,Standard_G4,Standard_G5,Standard_GS1,Standard_GS2,Standard_GS3,Standard_GS4,Standard_GS4-4,Standard_GS4-8,Standard_GS
5,Standard_GS5-8,Standard_GS5-16,Standard_L4s,Standard_L8s,Standard_L16s,Standard_L32s.
```



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

Manually have to set this

```powershell
Set-ExecutionPolicy -ExecutionPolicy Unrestricted
```

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
# install from personal channel
$url = "https://github.com/philanderson888/scripts/blob/master/devops/vs_community__1830954925.1587920606.exe?raw=true"
$output = "vs_community__831057064.1598087060.exe"
$start_time = Get-Date
Invoke-WebRequest -Uri $url -OutFile $output
./vs_community__831057064.1598087060.exe --quiet --passive --includeRecommended
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

Have to enable Windows Subsystem For Linux which can be enabled, after a reboot, using

```powershell
# run this before docker works!
Enable-WindowsOptionalFeature -FeatureName Microsoft-Windows-Subsystem-Linux -Online -NoRestart -WarningAction SilentlyContinue
Restart-Computer -Force
```

or

```powershell
$url = "https://raw.githubusercontent.com/philanderson888/scripts/master/devops/install-windows-subsystem-for-linux.ps1"
$output = "install-windows-subsystem-for-linux.ps1"
$start_time = Get-Date
Invoke-WebRequest -Uri $url -OutFile $output
./install-windows-subsystem-for-linux.ps1
```

Can look into this method of executing a powershell script remotely as well 

```powershell
powershell -nop -c "iex(New-Object Net.WebClient).DownloadString('https://raw.githubusercontent.com/philanderson888/scripts/master/devops/install-windows-subsystem-for-linux.ps1')"
```


We also have to install the WSL2 Linux Kernel manually and then reboot

```powershell
$url = "https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi"
$output = "install-windows-subsystem-for-linux-kernel.msi"
$start_time = Get-Date
Invoke-WebRequest -Uri $url -OutFile $output
./install-windows-subsystem-for-linux-kernel.msi
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

We may also need to install git 

This command does need human intervention - can upgrade this to silent command

```powershell
choco install git.install --force
```