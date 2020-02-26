# Revision

# 12 November : Tuesday : OOP revision

### OOP Review

OOP Object Oriented Programming
4 Pillars
Base = Parent Class
Derived = Child Class
Inheritance Fields/Properties/Methods from parent to child
Field direct access : normally for PRIVATE VARIABLES
private string NINO;
Property access via Get/Set method : normally for PUBLIC VARIABLES WITH GET/Set
public string Name {get;set;}
Method Function ie DoThis GetName SetTimer Start Initialise
Method is code which can be run on demand
Call it with
DoThis();
Declare it with
void DoThis(){ cw"Code is running"; }
{ CODE IMPLEMENTATION / CODE BODY }
void : Method does not return anything
int DoThis(){ return 100; }
null : declare field empty
PascalCaseLikeThis (C# Public)
camelCaseLikeThis (Javascript)
privateMember (C#)
_privateMember (C#)
Members = Field/Property/Method
Encapsulation hiding private members (private keyword ie inside 1 class)
Picture : think CAR ENGINE with COMBUSTION CHAMBER HIDDEN AWAY INSIDE ENGINE
Abstraction PUBLIC GET/SET provide access to PRIVATE FIELDS
((private engine))--------((public throttle))-------- USER
Picture : Car driver has public access to THROTTLE AND CLUTCH which are PUBLIC MEMBERS
but provide access to INNER WORKINGS OF PRIVATE ENGINE
Polymorphism Parent virtual DoThis(){}
Child override DoThis(){} // OPTIONAL

Declaring int x; // cannot use it
Initialising x=10;
Default int x = Default; //0 string x = Default // null
Access Modifier : private hidden (in this class)
public exposed (any class)
protected hidden ( in this class and any child/derived classes)
internal use inside namespace. When we compile our code into EXE or DLL
EXE / DLL is called an ASSEMBLY. internal access is inside your
namespace which is anywhere inside compiled EXE/DLL ASSEMBLY
Sealed
Abstract Class
Abstract Method
One-word Meanings
Inheritance
Encapsulation : hiding private fields
Abstraction : public access {get;set;} through to private members public property
Polymorphism : optional override of parent code
Override : optional override of parent code (same method different code)
Overload : same method but DIFFERENT PARAMETERS
DoThis(int x)
DoThis(string y)
DoThis(int x, string y)

# 20 November : OOP Revision (Complete OOP)

# Tech Revision

Class - blueprint or a template for creating NEW OBJECTS (instances)
Object { field:value }
Field has no validation : often kept private privateField or _privateField
camelCase javascript
PascalCase OOP
kebab-case web-page-like-this.html
snake_case sql_database_like_this.sql
(space) %20
Property often public; can provide validation; {get;set;} (can expand)
Validate information : verify it's correct max/min/sign+/-/
Regex : complex string validation
Method : Function
string DoThis(int parameter,string parameter){
// body = implementation
return string;
}
Instance object created from CLASS BLUEPRINT var instance01 = new MyClass();
new instance
Constructor used when creating NEW INSTANCE
Static Attached to CLASS not INSTANCE
private valid within this class only
public valid in any class
protected valid in class or child derived classes
internal access within namespace ie compiled 'assembly' (exe or dll)
Access Modifier public private protected internal
Class (template) instance (from class)

    field : intance field             field
    property                          property
    method                            method 
    
    static field : class field        xxxxx can't use static in instance xxx
    static property : class property
    static method  : class method

Linear programming : top-down : scripting
Compiler High Level C# ==> CIL Intermediate ==> run with CLR Runtime
EXE stand-alone windows application eg Notepad.exe
DLL : dynamic linked library : hold class which other classes can refer to
Assembly : compiled unit ((EXE OR DLL APK APP ))
OOP : code attached to OBJECTS (screen objects eg button or code objects eg Class)
Encapsulation hiding via private keyword _NINO
Abstraction access private field via public property
Polymorphism Parent base class : virtual DoThis(){} Child : override DoThis(){}
optional override
override ...
overload DoThis() DoThis(int x)
Sealed class : cannot derive child class from
Abstract class : Class containing at least one abstract method
Abstract method : has no body abstract void DoThis(); missing {} body implementation
Interface : fully abstract class contains normally one method
Use to provide structure in big application
Class : inherit from ONE PARENT
implement MANY INTERFACES
su : Linux : super user : full rights (not logon as super user)
sudo : Super User Do : run this app with Super User privileges
Administrator : full rights

Project Structure

    .SLN    Solution : Container in which we put our projects
                       No functionality : just simply a holding container
    
    	.CSPROJ      : Project file : metadata for each project  eg library versions
    
    		OBJ      : libraries : can delete
    
    		BIN      : binary : compiled files ready to run 
    
    		program.cs
    			START POINT Main(){}