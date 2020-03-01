# Javascript Switch

const a = 2
    switch(a) {
      case 1:
        //handle case a is 1
        break
      case 2:
        //handle case a is 2
        break
      case 3:
        //handle case a is 3
        break
      default:
        //handle all other cases
        break
    }

## Or just 'return'

    const doSomething = (a) => {
      switch(a) {
        case 1:
          //handle case a is 1
          return 'handled 1'
        case 2:
          //handle case a is 2
          return 'handled 2'
        case 3:
          //handle case a is 3
          return 'handled 3'
      }
    }