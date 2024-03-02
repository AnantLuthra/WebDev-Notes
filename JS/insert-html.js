let dabba = document.getElementById("ele1");


dabba.innerHTML += "<h>Our beta kaise ho?!</h>"
// console.log(dabba.outerHTML)


let somet = document.getElementsByClassName("s1head")[0]

somet.onclick = () => {
    somet.innerHTML = prompt("Kya khna chahte h aap?")
}

// somet.onmouseenter = () => {
//     somet.innerHTML = `Hello ${prompt()}!`
// }

let some2 = document.getElementsByClassName("s1head")[1]

let x = function(event){
    some2.style.background = prompt("Suggest me background color")
    console.log("here i come")
}

let y = function(event){
    some2.style.color = prompt("Suggest me text's color.")
    console.log("here i come")
}


some2.onclick = x
some2.onclick = y


// some2.addEventListener('click',x)
// some2.addEventListener('click',y)

// some2.removeEventListener('click', x)
// some2.removeEventListener('click', y)

function off_bulb () {
    document.getElementById("bulbup").classList.toggle("yelloww");
}

setInterval(off_bulb, 500);