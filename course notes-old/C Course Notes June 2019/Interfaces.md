# Interfaces

Interfaces

Class : template for creating objects

Instantiate : call new method to create object from class

Polymorphism

    Base			virtual
    Derived			override   (optional)

Remember

    override 		Polymorphism : same name and different code body (		
    							implementation)
    
    overload 		myMethod(int x){}
    				myMethod(string y){}   : same name different parameters

Abstract Class

    Base 			abstract
    						Minimum one abstract method
    				abstract void GreatIdea();   // no implementation
    Derived			override   (mandatory)       // yes implementation

Interfaces

    Think of a family structure
    
    	Child can be child of only ONE set of parents ie member of ONE FAMILY
    
    	OOP Inheritance
    
    		Parent Class
    
    				Child Class
    
    Think of a person wanting to use tools to 'get stuff done' then their parents may not
    		have access to all the tools they require
    
    Interface : allows a class to INHERIT FROM ONE PARENT
                                  IMPLEMENT (USE) MULTIPLE INTERFACES
    
                	ITool01
                	ITool02
    
                	Parent
    
                				Class Child : Parent, ITool01,ITool02{
    
                				}
    
    	Interfaces are used to FORCE A CERTAIN BEHAVIOUR IE A CLASS MUST CONTAIN A CERTAIN
    				METHOD
    
    				string contains CompareTo method because String class Implements IComparable
    
    					so we know for sure all strings have CompareTo method
    
    	Use interfaces in your large corporate application to provide particular methods.
    		Implementation will be unique.
    
    
    	Interfaces are PUBLIC AND FULLY ABSTRACT
    
    		NO FIELDS
    		YES PROPERTIES
    		YES METHODS
    
    	IT IS MANDATORY TO IMPLEMENT ANY METHODS CONTAINED IN THE INTERFACE

Example in real life

    Often a real life use case is when we create a new class eg class Dog{}
    
    Need a way to compare dogs => by height? weight? colour? etc
    
    class Dog : IComparable{
    
    	public int Height{get;set;}
    	public int CompareTo(dog d){
    		// compare 'this' (instance dog) against d 
    		return -1, 0 or +1 depending if chosen attribute is less, same or greater
    		if (this.Height<d.Height) return -1;
    		if (this.Height = d.Height) return 0;
    		return 1;
    	}
    }
    
    // SnapLab : 18
    
    	SnapLab18 : Interfaces : Create 3 dogs and compare heights.  Put into a collection or array and sort by height.
    
    	Use custom CompareTo by implementing IComparable
    
    	1. Dog Class with Height and Implement IComparable
    	2. Code method CompareTo
    			d01 : 500
    			d02 : 250
    			d01.CompareTo(d02) ==> should return +1 as d01 bigger
    			d02.CompareTo(d01)                   -1 as d02 smaller
    
    	3. Use my code as a guide to get right answer
    			dog d01 : height 300mm  
    			dog d02 : height 500mm         d03,d01,d02
    			    d03          150
    
    			   1 vs 2      
    			   1 vs 3  
    			   2 vs 3