# Azure Cli : Creating A Database In Azure

# on Windows
    Download and install
    
    # on MAC
    brew update
    brew upgrade python
    brew install  azure-cli

If this has worked then

    az

should now generate the azure command line

    az login

producing

    [
      {
        "cloudName": "AzureCloud",
        "id": "39ff3502-0a96-4f31-9d65-093ab484da57",
        "isDefault": true,
        "name": "MSDN Platforms",
        "state": "Enabled",
        "tenantId": "84db59c8-e4f2-4a8b-9c4a-2f6be457ceba",
        "user": {
          "name": "philanderson888@hotmail.com",
          "type": "user"
        }
      },
      {
        "cloudName": "AzureCloud",
        "id": "90e96ce7-8d14-437b-a53d-8a2e72487187",
        "isDefault": false,
        "name": "Pay-As-You-Go",
        "state": "Disabled",
        "tenantId": "84db59c8-e4f2-4a8b-9c4a-2f6be457ceba",
        "user": {
          "name": "philanderson888@hotmail.com",
          "type": "user"
        }
      }
    ]

### Create a resource group

    az group create --name myResourceGroup --location "West Europe"

### Create A VM

    az vm create -n MyLinuxVM -g MyResourceGroup --image UbuntuLTS
    
    az vm create --admin-username philanderson888 -n .. -g .. --image ...

### Create an SQL server

    az sql server create --name <server_name> --resource-group myResourceGroup
     --location "West Europe" --admin-user <db_username> 
     --admin-password <db_password>

with output

    {
      "administratorLogin": "sqladmin",
      "administratorLoginPassword": null,
      "fullyQualifiedDomainName": "<server_name>.database.windows.net",
      "id": "/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myResourceGroup/providers/Microsoft.Sql/servers/<server_name>",
      "identity": null,
      "kind": "v12.0",
      "location": "westeurope",
      "name": "<server_name>",
      "resourceGroup": "myResourceGroup",
      "state": "Ready",
      "tags": null,
      "type": "Microsoft.Sql/servers",
      "version": "12.0"
    }

    az sql server list

### Create a firewall rule

    az sql server firewall-rule create --resource-group myResourceGroup --server <server_name> --name AllowYourIp --start-ip-address 0.0.0.0 --end-ip-address 0.0.0.0
    
    az sql server firewall-rule create --resource-group philanderson888_webapp_sql_test_01 --server philanderson888-server-01 --name WebAppServerFirewallRuleAllowAll --start-ip-address 0.0.0.0 --end-ip-address 255.255.255.255

### List firewall rules

    az sql server firewall-rule list --resource-group philanderson888_webapp_sql_test_01 --server philanderson888-server-01

### Create a database

    az sql db create --resource-group philanderson888_webapp_sql_test_01 --server philanderson888-server-01 --name philanderson888_testdb_o1 --service-objective S0

### Create a connection string

    Server=tcp:<server_name>.database.windows.net,1433;Database=coreDB;User ID=<db_username>;Password=<db_password>;Encrypt=true;Connection Timeout=30;