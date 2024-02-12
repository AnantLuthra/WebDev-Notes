
let valuee = document.body.children[1]

console.log(valuee.rows)
console.log(valuee.caption)
console.log(valuee.tHead)
console.log(valuee.tFoot)
console.log("yahi vala", valuee.tBodies[0].rows[0].cells)

for (let i of valuee.tBodies[0].rows){
    console.log(i.rowIndex)
    for (let j of i.cells){
        console.log(j.cellIndex, j.innerHTML)
    }
}