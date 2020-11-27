sub Main()
    print "debugging showChannelSGScreen"
    screen = CreateObject("roSGScreen")
    m.port = CreateObject("roMessagePort")
    print (m.port)
    ?type(1)  '   Integer  
    ?type(1.0) '     Float  
    ?type("hello")  '     String  
    ?type(CreateObject("roList"))  '     roList  
    ?type(1%)    '  Integer  
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
