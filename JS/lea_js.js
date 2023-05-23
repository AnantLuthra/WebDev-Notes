document.addEventListener('DOMContentLoaded', function(){

    for (let i = 0; i < 5; i++){
        console.log("hello everyone" + i);
    }

    var a = 1;
    var b = 5;
    var name = 'anant';

    console.log("something we get after dividing - " + (50/ 10));
    console.log("value of b is - " + (++b));

    // Things to do with strings.
    var len = name.length;
    console.log(`length of "${name}" is ${len}`);
    
    document.getElementById('content').innerHTML = '<h3>Hare Krishna Hare Rama</h3>'
});