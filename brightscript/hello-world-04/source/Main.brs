sub Main()
    print "debugging showChannelSGScreen"
    screen = CreateObject("roSGScreen")
    m.port = CreateObject("roMessagePort")
    print (m.port)
    ?type(2)  '   Integer  
    ?type(2.0) '     Float  
    ?type("hello")  '     String  
    ?type(CreateObject("roList"))  '     roList  
    ?type(3%)    '  Integer  
    b!=1  
    ? "Type of 'b!' is " + type(b!)   ' Float  
    c$="hello"  
    ? "Type of c$ " + c$ + " is always " + type(c$)  ' String
    d="hello again"  
    ?type(d)  '    String  
    d=d+d  
    ?type(d)  '    String  
    ?type(d, 3)  '    roString  
    d=1  
    ?type(d)  '    Integer  
    d=1.0  
    Print "type of '1.0' is " + type(d)  '    Float
    Print 5.tostr()+"th"   ' prints 5th
    Print "5".toint()+5    ' prints 10
    'If type(5.tostr())<> "String" Then Stop
    'If (-5).tostr()<>"-5" Then Stop
    'If (1+2).tostr()<>"3" Then Stop
    'If 5.tostr()<>"5" Then Stop
    i=-55
    'If i.tostr()<>"-55" Then Stop
    'If 100%.tostr()<>"100" Then Stop
    'If (-100%).tostr()<>"-100" Then Stop
    y%=10
    'If y%.tostr()<>"10" Then Stop
    'If "5".toint()<>5 Or type("5".toint())<>"Integer" Then Stop
    'If "5".tofloat()<>5.0 Or type("5".tofloat())<>"Float" Then Stop
    fs="-1.1"
    'If fs.tofloat()<>-1.1 Or fs.toint()<>-1 Then Stop
    'If "01234567".left(3)<>"012" Then Stop
    'If "01234567".right(4)<>"4567" Then Stop
    'If "01234567".mid(3)<>"34567" Then Stop
    'If "01234567".mid(3,1)<>"3" Then Stop
    'If "01234567".instr("56")<>5 Then Stop
    'If "01234567".instr(6,"56")<>-1 Then Stop
    'If "01234567".instr(0,"0")<>0 Then Stop
    Print "quotes are escaped using quotes ie " + """" + "some value" + """"
    Print "exponent 2^3 is " + (2^3).tostr()
    array01 = [1,2,3]
    for each item in array01
        Print item
    end for
    array01.push(4)
    for each item in array01
        sleep(1000)
        Print item
    end for
    object01 = CreateObject("roAssociativeArray")
    object01.field="some value"
    Print "object declared with roAssociativeArray is """ + object01.field + """"
    object02 = { field: "value" }
    Print "object declared with {field:'value'} is also """ + object02.field + """"
    object02["field"] = "new value"
    Print "updated object field using [""field""]=""" + object02.field + """"
    object01.AddReplace("field","still even newer value")
    Print "also can use AddReplace(field,value) method so now field = """ + object02.field + """"
    object03 = { field01:"value01",field02:"value02"}
    for each key in object03 
        print " " key " = " object03[key]
    end for
    ' objects
    Print "Creating a custom object"
    obj = ConstructMyObject()
    obj.Set("hi!")
    print obj.Get()
    print "--------"
    print obj
    ' xml file
    Print "reading xml file"
    rsp=CreateObject("roXMLElement")
    rsp.Parse(ReadAsciiFile("pkg:/example.xml"))
    Print "photos root element" rsp.photos
    Print "photo element " rsp.photos.photo
    Print "one photo element" rsp.photos.photo[0]
    Print "Printing an xml attribute value eg rsp.photos@perpage = " rsp.photos.@perpage '100
    Print "photo 0 id is " rsp.photos.photo[0]@id
    rsp2=CreateObject("roXMLElement")
    rsp2.Parse(ReadAsciiFile("pkg:/booklist.xml"))
    Print "get xml booklist " rsp2.booklist
    Print "get xml booklist book" rsp2.booklist.book
    Print "get xml booklist book" rsp2.booklist.book.lang
    ' set tv
    screen.setMessagePort(m.port)
    scene = screen.CreateScene("HelloWorld")
    screen.show()
    while(true)
        msg = wait(0, m.port)
        msgType = type(msg)
        if msgType = "roSGScreenEvent"
            if msg.isScreenClosed() then return
        end if
    end while
end sub

function ConstructMyObject()
    obj = {
        Set       : function(x) : m.Value = x : end function
        Get       : function() : return m.Value : end function
        Value     : 0
    }
    return obj
end function
