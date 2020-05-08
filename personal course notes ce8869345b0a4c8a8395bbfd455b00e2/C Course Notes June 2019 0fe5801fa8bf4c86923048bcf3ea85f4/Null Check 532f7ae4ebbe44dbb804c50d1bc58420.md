# Null Check

Often if you are testing for a value but the value is already null the computer can throw an exception

Object o = new {

Name="fred"

}

cw ...o.Name  =⇒ fred

But if you get a null object from db (empty)  then   c.w.....o.Name =⇒ null reference exception because o is null.