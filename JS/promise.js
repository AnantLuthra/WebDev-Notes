
let promise1 = new Promise(function (resolve, reject) {
    console.log("promise1 pending...")
    setTimeout(() => {
        let value = confirm("Process1 done?")
        if (value){
            resolve(true)
        }
        else{
            reject(new Error("All packets not received"))
        }
    }, 5000)
})


let promise2 = new Promise(function (resolve, reject) {
    console.log("promise2 pending...")
    setTimeout(() => {
        let value = confirm("Process2 done?")
        if (value){
            resolve(true)
        }
        else{
            reject(new Error("Some data got lost."))
        }
    }, 5000)
})


promise1.then((value) => {
    console.log(`p1 done, value is: ${value}`)
}, (error) => {
    console.log("Some error occured in p1", error.message)
})

promise2.then((value) => {
    console.log(`p2 done, value is: ${value}`)
}).catch((error) => {
    console.log("Error occured in p2", error.message)
})

