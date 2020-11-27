sub Main()
    print "debugging showChannelSGScreen"
    screen = CreateObject("roSGScreen")
    m.port = CreateObject("roMessagePort")
    print (m.port)
    ?type(2)  '   Integer  
    ?type(1.0) '     Float  
    ?type("hello")  '     String  
    ?type(CreateObject("roList"))  '     roList  
    ?type(3%)    '  Integer  
    b!=1  
    ?type(b!)   '    Float  
    c$="hello."  
    ?type(c$)  'String
    d="hello again"  
    ?type(d)  '    String  
    d=d+d  
    ?type(d)  '    String  
    ?type(d, 3)  '    roString  
    d=1  
    ?type(d)  '    Integer  
    d=1.0  
    ?type(d)  '    Float
    Print 5.tostr()+"th"   ' prints 5th
    Print "5".toint()+5    ' prints 10
    If type(5.tostr())<> "String" Then Stop
    If (-5).tostr()<>"-5" Then Stop
    If (1+2).tostr()<>"3" Then Stop
    If 5.tostr()<>"5" Then Stop
    i=-55
    If i.tostr()<>"-55" Then Stop
    If 100%.tostr()<>"100" Then Stop
    If (-100%).tostr()<>"-100" Then Stop
    y%=10
    If y%.tostr()<>"10" Then Stop
    If "5".toint()<>5 Or type("5".toint())<>"Integer" Then Stop
    If "5".tofloat()<>5.0 Or type("5".tofloat())<>"Float" Then Stop
    fs="-1.1"
    If fs.tofloat()<>-1.1 Or fs.toint()<>-1 Then Stop
    If "01234567".left(3)<>"012" Then Stop
    If "01234567".right(4)<>"4567" Then Stop
    If "01234567".mid(3)<>"34567" Then Stop
    If "01234567".mid(3,1)<>"3" Then Stop
    If "01234567".instr("56")<>5 Then Stop
    If "01234567".instr(6,"56")<>-1 Then Stop
    If "01234567".instr(0,"0")<>0 Then Stop
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
