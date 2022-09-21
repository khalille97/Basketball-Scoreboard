let countEl = document.getElementById("home-count")
let countAl = document.getElementById("guest-count")
console.log(countEl)
console.log(countAl)


let countHome = 0
let countAway = 0


function increment1(){
    countHome += 1
    countEl.textContent=countHome
    console.log(countHome)
}
function increment2(){
    countHome += 2
    countEl.textContent=countHome
    console.log(countHome)
}
function increment3(){
    countHome += 3
    countEl.textContent=countHome
    console.log(countHome)
}
function increment01(){
    countAway += 1
    countAl.textContent=countAway
    console.log(countAway)
}
function increment02(){
    countAway += 2
    countAl.textContent=countAway
    console.log(countAway)
}
function increment03(){
    countAway += 3
    countAl.textContent=countAway
    console.log(countAway)
}

