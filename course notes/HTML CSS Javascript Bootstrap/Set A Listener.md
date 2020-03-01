# Set A Listener

Set multiple listeners

    function doThis(){}
    
    
    // add listener
    document.querySelectorAll('.chess-block').forEach(function(element) {
            element.onclick = doThis;
        })