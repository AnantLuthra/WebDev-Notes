document.addEventListener('DOMContentLoaded', function () {
    let input = document.querySelector('#name');
    input.addEventListener('keyup', function(event) {
        let name = document.querySelector('#p1');
        if (input.value) {
            name.innerHTML = `hello, ${input.value}`;
        }
        else {
            name.innerHTML = 'hello, beta kaise ho?';
        }
    });

    let body = document.querySelector('body')
    document.querySelector('#red').addEventListener('click', function(){
        body.style.backgroundColor = 'rgb(244, 165, 165)';
    })
    document.querySelector('#blue').addEventListener('click', function(){
        body.style.backgroundColor = 'lightblue';
    })
    document.querySelector('#green').addEventListener('click', function(){
        body.style.backgroundColor = 'lightgreen';
    })
    document.querySelector('form').addEventListener('submit', function(event) {
        let color = document.querySelector('#color').value;
        body.style.backgroundColor = color;
        event.preventDefault();
    })
});