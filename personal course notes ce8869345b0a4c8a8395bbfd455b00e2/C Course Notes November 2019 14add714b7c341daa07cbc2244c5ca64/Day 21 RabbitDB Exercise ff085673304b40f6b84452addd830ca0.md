# Day 21 - RabbitDB Exercise

## Rabbits !!!

Create from scratch a RabbitDB using Raw SQL.

RabbitDB
Rabbits
RabbitId
RabbitName
RabbitAge

Add 3 rabbits manually to get started in SQL

C#

```
Use Entity Core (trainer will lead this bit) to connect to 
Rabbit DB

Agile : Sprint 0

	Create 100 rabbits, one every interval and display them 
	on the screen as they generate.
```

.NET Core : Connect to database

```
Add Nuget Libraries

	Microsoft.EntityFrameworkCore           -v 2.1.1
	                             .SqlServer -v 2.1.1
	                             .Design    -v 2.1.1	

using (var db = new RabbitDbContext){

}	

class Rabbit{}

class RabbitDbContext{
  // constructor - connect to Database
  public DbSet<Rabbit> Rabbits {get;set;}
}
```

Sprint 0
Create 100 rabbits
id = 1,2,3,4
Name = "Rabbit" + id Rabbit1 Rabbit2 ((upgrade Rabbit01,Rabbit02))
Age = 0
Sprint 1
Create one rabbit id 1 age 0
Create loop
Every iteration of loop means age increases by 1 month
Iterate the loop
Read every rabbit
Every rabbit can create 'spawn' one new rabbit (age 0)
Increase age of existing rabbits Age++;

```
Loops go like this

	Loop  		Population          Age
	before begin    1                0
	0               1=>2             1,0
	1 				2=>4             2,1,0,0
	2 				4=>8 			 3 2 1 1 0 0 0 0 

			repeat loop until population reaches ceiling (say 1000)
```

Sprint 2 (Advanced challenge!)

```
Easy upgrade : set an age below which a rabbit cannot produce another rabbit

	eg choose age of 3 then we have to also test for this condition

		Loop                      Age
		Pre-create                 0
	  	0                          1
	  	1 						   2
	  	2                          3  (age 2 at start of loop )
	  	3                          4 0   (age 3 at start of loop)

	  						==============>>>=== REVERT TO GAMES HERE
```

## RabbitDB : Part 2

Let's extend our work with OOP and creating objects

Sprint 3 (Advanced)

```
Add other features for example

	a) End of life at a certain age?

	b) Introduce a predator which reduces population
```