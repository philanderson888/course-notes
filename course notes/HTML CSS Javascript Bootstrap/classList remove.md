# classList.remove

Can be used to remove CSS classes from an item

    // remove CSS classes on all selected elements
    
    document.querySelectorAll('.chess-block').forEach(function(element) {
            element.classList.remove('active');
            element.classList.remove('green');
        })