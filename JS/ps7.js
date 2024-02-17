// document.getElementsByTagName("nav")[0].firstElementChild.style.background = "black"
// document.getElementsByTagName("nav")[0].lastElementChild.style.background = "black"

const values = ["lightgreen", "lightblue", "blue", "grey", "cyan", "lightyellow", "yellow",
"black", "white", "red", "lightred", "skyblue", "pink", "lightpink", "purple", "lightpurple"]


// Display the current time
function checking() {

    // Create a new Date object
    let currentDate = new Date();

    // Get the current time
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();

    // Convert to 12-hour format
    let amPm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; // Convert 0 to 12

    document.getElementById("current").innerHTML = `CURRENT TIME<br>${hours}:${minutes}:${seconds} ${amPm}`
}

function change1() {

    document.getElementById("current")
    let randomNumber = Math.floor(Math.random() * (values.length - 0) + 0)

    let ele = document.getElementById("current")
    ele.style.background = values[randomNumber]

}


function change2() {

    document.getElementById("current")
    let randomNumber = Math.floor(Math.random() * (values.length - 0) + 0)

    let ele = document.getElementById("current")
    ele.style.color = values[randomNumber]

}

window.setInterval(checking, 1000);
window.setInterval(change1, 1000);
window.setInterval(change2, 1000);
