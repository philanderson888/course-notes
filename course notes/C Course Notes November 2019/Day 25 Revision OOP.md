# Day 25 - Revision OOP

Quick Fire Revision : Friday 22 Nov (end Week 5)

Method : Function
return type : what the method returns
void : does not return anything
Action (Delegate) : Method type which has no return type
Class : Blueprint or Template from which we create objects
((Think for a BUILDING - the Architect makes the PLANS FIRST
from which we build our BUILDING))
Class (Plans) ===> Instance (Building)
OOP
Inheritance Parent Base to Child Derived
Encapsulation private members in class
Member : field / property / method
Abstraction : use PUBLIC PROPERTIES to access PRIVATE MEMBERS (car engine hidden but use gear stick to change gears)
Polymorphism Optional override : virtual in BASE CLASS; override in DERIVED
Overload : same method different parameters void DoThis() void DoThis(int x)
Access Modifier
private - class
public - any class
protected - parent / child classes
internal - namespace (assembly eg .exe or .dll compiled unit)
abstract class has at least one abstract method
abstract method has no code body ((implementation)) abstract void MyMethod();
interface : fully abstract class where all methods/properties are empty
Class can IMPLEMENT MULTIPLE INTERFACES (THINK 'USE' VARIOUS TOOLS)

    FAMILY : INHERITANCE : ===> ONE CLASS CAN INHERIT FROM ONE PARENT BASE CLASS
     TOOLS WE USE : INTERFACES ==> ONE CLASS CAN USE (IMPLEMENT) MANY TOOLS (INTERFACES)
    
     	MyClass : MyParent, ITool01, ITool02, ITool03
    
     		Use interfaces to STANDARDISE METHODS WE USE
    
     			One interface have ONE BLANK METHOD which we code out
    
     					.ToString()

Sealed : Cannot derive child classes from it
Variable
Declare : var x;
Initialise : x=10;
instance : object from class
Concrete Class : can instantiate (methods complete)
Abstract Class : cannot instantiate (>=1 method incomplete)
Constructor : var instance = new MyClass(); MyClass() calls constructor
Static : attached to CLASS not INSTANCE

    Class Dog{
    			void Bark(){} ============> instance method
    			static void Bark2(){}
    		}
    
    		var d = new Dog();  // instance
    		d.Bark();              instance method
    		Dog.Bark2();           class static method

Linear programming : scripting
exe
dll library file which has classes/methods which other code might want to use