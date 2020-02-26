# Interfaces

# Interfaces

Classes

    CONCRETE ==> 
    
    	class{
    		FIELDS
    		PROPERTIES
    		METHODS
    	}		
    						==> all are complete so we can Instantiate with new keyword which
    							call the constructor method
    
    ABSTRACT
    
    	An abstract class contains one or more abstract methods
    
    	Abstract Method 
    
    			==> An unimplemented method or a method with no body
    								void MyMethod();
    
    INTERFACE
    
    	A fully abstract class with ABSOLUTELY NO CODE BODY IN METHODS
    
    		interface IDoThis{
    			(((abstract)))  void DoThis();
    		}
    
    						(((abstract is implied not stated)))
    
    
    Parent Abstract Class
    
    	==> Child Concrete Class               : :   Only be a child of one parent
    
    	==> Child : also can not just INHERIT FROM ONE PARENT
    
    	          : it can also IMPLEMENT (USE) MANY INTERFACES.
    
    
    	          Parent Abstract Person{}   // abstract
    
    	          Child User : Person {}     // concrete
    
    	          Child User : Person, IUseThis, IUseThat {}  // Implement 2 interfaces
    
    
    	         Interface IUseThis{
    	         	List<Customer> IDoThis();
    	         }
    	         Interface IUseThat{
    	         	void IDoThat();
    	         }
    
    	         					In User class we have to IMPLEMENT (BUILD) CODE FOR THESE 
    	         					Interface methods IDoThis and IDoThat.  Mind picture is that
    	         					each individual will use a tool in a slightly different way.
    
    	        Interfaces are useful in large application because they create standardisation
    	        of how classes will have expected behaviour.
    	        		int.ToString();
    	        		char.ToString();
    
    	        		child.DoThis();
    	        		child.DoThat();

    using System;
    using external;
    
    namespace lab_27_interfaces
    {
        class Program
        {
            static void Main(string[] args)
            {
                var c = new Child();
                c.DoThis();
                c.DoThat();
                c.DoingSomeParentThing();
            }
        }
    
        class Parent
        {
            public void DoingSomeParentThing() { Console.WriteLine("I am doing some parent thing"); }
        }
    
        class Child : Parent,IDoThis,IDoThat,IAlsoDoThis {
            public void DoThis() { Console.WriteLine("I'm doing this.."); }
    
            public void DoThat() { Console.WriteLine("I'm doing that.."); }
            public void AlsoDoThis() { Console.WriteLine("I am also doing this");
            }
    }
    
        interface IDoThis
        {
            void DoThis();
        }
    
        interface IDoThat
        {
            void DoThat();
        }
    }
    
    
    namespace external
    {
        interface IAlsoDoThis {
            void AlsoDoThis();
        }
    }