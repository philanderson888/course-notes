# infrastructure

## contents

- [infrastructure](#infrastructure)
  - [contents](#contents)
    - [202410 windows infrastructure](#202410-windows-infrastructure)
    - [202410 windows encryption](#202410-windows-encryption)


### 202410 windows infrastructure

vm fairness moves vms to the least uses hosts.  vms are moved if cpu or ram exceeds 60/70/80 percent based on cpu average over last 5 minutes or current ram now and is checked every 30 minutes

vm sequencing determines the order that vms start up or shut down

storage pool is two or more drives connected together

storage spaces is use of a storage pool to create duplicate copies of data so if one data store fails, the duplicate is available

storage quality of service monitors storage performance, noisy neighbours, 

noisy neighbour consumes resources on a multitenant host

scale out file server is designed to be scalable to avoid bottlenecks, scaling out nodes, bandwidth and performance

clustered file server has one share available on one node at any one time

storage replica enables replication of volumes between servers, clusters or sites to facilitate disaster recovery.  immediate synchronous replication on lan, delayed asynchronous replication across wan

synchronous replication is guaranteed

asynchronous replication is slower and not guaranteed

dedup storage deduplication eliminates duplicate blocks of data

virtual receive side scaling allows multiple virtual cpus to serve one network adapter, to prevent bottlenecks of transmission at that adapter

nic teaming groups multiple network adapters together

.vmcx virtual machine config file

.vhdx virtual machine storage file

.avdx virtual machine delta 

.avhds virtual machine shared hard disk

.vmrs vm running state is equivalent of ram 

### 202410 windows encryption

group policy add recovery agent to store keys


