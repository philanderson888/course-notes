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
    BrightScript> c$="hello."  
    BrightScript> ?type(c$)  'String
    BrightScript> d="hello again"  
    BrightScript> ?type(d)  '    String  
    BrightScript> d=d+d  
    BrightScript> ?type(d)  '    String  
    BrightScript> ?type(d, 3)  '    roString  
    BrightScript> d=1  
    BrightScript> ?type(d)  '    Integer  
    BrightScript> d=1.0  
    BrightScript> ?type(d)  '    Float
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
