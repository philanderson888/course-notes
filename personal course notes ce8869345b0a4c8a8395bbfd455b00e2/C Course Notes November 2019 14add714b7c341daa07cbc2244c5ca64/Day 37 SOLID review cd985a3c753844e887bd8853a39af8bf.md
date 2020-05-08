# Day 37 - SOLID (review)

# SOLID

Theoretical principles for larger projects

Single Responsibility

```
One class should relate to One object
One method should perform One task
```

Open/Closed

```
Our code is 	
			Open for EXTENSION (using derived classes)
			Closed for MODIFICATION (at base class level)

	Think about this : VSCode is a FIXED PIECE OF SOFTWARE (Closed)
	But many people can add PLUGINS (open for extension)
```

Liskov : can swap child and parent instances easily

Interface Specific

Interfaces generally contain ONE METHOD WHICH HAS A VERY SPECIFIC TASK
eg IEnumerable has GetEnumerator() which returns INDEX OF ITEM IN ARRAY

Dependency Inversion

For larger projects USE ABSTRACT CLASSES AT TOP LEVEL to build structure.

===

Design Pattern : using pre-designed projects as a starting place for your own project