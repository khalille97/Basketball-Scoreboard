let countEl = document.getElementById("home-count")
let countAl = document.getElementById("guest-count")
console.log(countEl)
console.log(countAl)


let count = 0
let countg = 0


function increment1(){
    count += 1
    countEl.textContent=count
    console.log(count)
}
function increment2(){
    count += 2
    countEl.textContent=count
    console.log(count)
}
function increment3(){
    count += 3
    countEl.textContent=count
    console.log(count)
}
function increment01(){
    countg += 1
    countAl.textContent=countg
    console.log(countg)
}
function increment02(){
    countg += 2
    countAl.textContent=countg
    console.log(countg)
}
function increment03(){
    countg += 3
    countAl.textContent=countg
    console.log(countg)
}

