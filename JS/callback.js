

function loadScri(src, callback1, callback2, arg1){
    let script = document.createElement("script");
    script.src = src;
    script.onload = function(){
        callback1(arg1)
    }
    script.onerror = function(){
        callback2(new Error("Loading script got error"))
    }
    document.body.appendChild(script);
}

function hello(arg1){
    console.log(`hello ${arg1}`)
}
function somewrong(error){
    console.log(`Error is ${error}`)
}

loadScri("insert-html.js", hello, somewrong, "anant")