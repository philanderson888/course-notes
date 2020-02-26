# Day 34 - Javascript

var x = 0;
    function runSomeTestData() {
        alert('the value of x is ' + x);
        var genius = confirm('are you a computer genius');
        var name = prompt('OK then fine!  Whats your name???');
        if (genius) {
            alert('Thanks, ' + name + ', I will come to you for advice!!!');
        }
        else {
            alert('No problem thanks for your help');
        }
        console.log('Are you a genius?' + genius);
        console.log('Name is ' + name);
    }
    function incrementNumber(){
        x++;
        document.getElementById('test-data').innerText=x;
    }