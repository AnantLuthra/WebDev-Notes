
function doupdate(){
    let a = new Date()
    document.getElementById('today_date').innerHTML = `${a.getDate()}-${a.getMonth()}-${a.getFullYear()}`
}


let clock = setInterval(() => {
    let a = new Date()
    let h = a.getHours()
    let m = a.getMinutes()
    let s = a.getSeconds()
    
    let mins = document.getElementById('minutes')
    let secs = document.getElementById('seconds')
    let hrs = document.getElementById('hours')

    hrs.style.transform = `rotate(${(h % 12) * 30 + m / 2}deg)`;
    mins.style.transform = `rotate(${m*6}deg)`;
    secs.style.transform = `rotate(${s*6}deg)`;

}, 1000);

doupdate()