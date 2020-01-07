# Polymorphism

Poly  = many

Morph = type 

Illustration 

Family  : Parent with idea eg  throwing a party

Parent {

    ThrowAParty(){                // host a dinner party            }

}

ChildAged8 : Parent {

      // inherit 

     // but better idea

     ThrowAParty() {          //  swimming party      }

}

TeenagerAged17 : Parent{

// can inherit

// better idea

ThrowAParty(){     // go out with friends     }

}

Code

Parent

virtual ThrowAParty(){}                               // can be overridden

  Child : Parent

   override ThrowAParty(){}                           // yes we are overriding parent code

    using System;
    
    namespace lab_19_polymorphism
    {
        class Program
        {
            static void Main(string[] args)
            {
                var p = new Parent();
                p.ThrowAParty();
    
                var c01 = new Child01();
                c01.ThrowAParty();
    
                var c02 = new Child02();
                c02.ThrowAParty();
    
    
    
            }
        }
    
    
    
    }using System;
    using System.Collections.Generic;
    using System.Text;
    
    namespace lab_19_polymorphism
    {
        class Parent
        {
            public virtual void ThrowAParty()
            {
                Console.WriteLine("Parent is throwing a posh dinner party only for Base Classes");
            }
    
        }
    
    
    class Child01 : Parent
        {
            public override void ThrowAParty()
            {
                Console.WriteLine("Have fun with kids in pool");
            }
        }
    }
    class Child02 : Parent
        {
            public override void ThrowAParty()
            {
                Console.WriteLine("Evening out ");
            }
        }
    
    

Practical uses

Used at runtime to swap methods in/out in same way you might apply a different 'skin' to a gaming player