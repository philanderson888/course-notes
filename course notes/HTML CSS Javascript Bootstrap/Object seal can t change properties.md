# Object.seal() - can't change properties

This prevents properties being added or removed to an object

    
    const myObject = {}
    
    myObject.property01 = 'test'
    
    Object.seal(myObject)
    
    myObject.property01 = 'testing2'
    
    myObject.cantAddThis = 'some value'  // cannot add because it's sealed
    delete myObject.property01  // cannot do this either