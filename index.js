let countEl = document.getElementById("home-count")
let countAl = document.getElementById("guest-count")
let periodCount = document.getElementById("period-count")
let foulCountH = document.getElementById("fouls-counth")
let foulCountA = document.getElementById("fouls-counta")


console.log(countEl)
console.log(countAl)
console.log(periodCount)
console.log(foulCountH)
console.log(foulCountA)



let count = 0
let countg = 0
let periodcount = 1
let foulHome = 0
let foulAway = 0

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
function incrementperiod(){
    periodcount+=1
    periodCount.textContent=periodcount
    console.log(periodcount)
}
function incrementFoulsh(){
    foulHome += 1
    foulCountH.textContent = foulHome
    console.log(foulHome)
}
function incrementFouls(){
    foulAway += 1
    foulCountA.textContent = foulAway
    console.log(foulAway)
}

