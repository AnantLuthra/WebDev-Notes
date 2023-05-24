document.addEventListener('DOMContentLoaded', function(){
    let body = document.querySelector('#main');
    console.log(body.style.backgroundColor)
});


navigator.geolocation.getCurrentPosition(function(position){
    var location = position.coords.latitude + ", " + position.coords.longitude;
    let name = document.querySelector('#content');
    name.innerHTML = `${location}`;
});

function blink(){

    let body = document.querySelector('#content');
    if (body.style.visibility == 'hidden'){
        body.style.visibility = 'visible';
    }
    else {
        body.style.visibility = 'hidden';
    }
}
function change(){

    let body = document.querySelector('body');
    if (body.style.visibility == 'hidden'){
        body.style.visibility = 'visible';
    }
    else {
        body.style.visibility = 'hidden';
    }
}

window.setInterval(blink, 600);
window.setInterval(change, 10);

