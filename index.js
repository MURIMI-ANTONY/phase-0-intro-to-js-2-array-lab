// Write your solution here!
const cats=[]
cats.length = 0;

cats.push("Milo", "Otis", "Garfield");
let x= "Ralph"
function destructivelyAppendCat(x){
   
    return cats.push(x)
}

let y="Bob"
function destructivelyPrependCat(y){
    return cats.unshift(y)
}

function destructivelyRemoveLastCat(){
    return cats.pop()
}
function destructivelyRemoveFirstCat(){
    return cats.shift()
}

function appendCat(){
    return [...cats,"Broom"]
}
function prependCat(){
    return ["Arnold",...cats]
}

function  removeLastCat(){
    
    return cats.slice(0,cats.length-1)
}
function   removeFirstCat(){
  
    return cats.slice (1)
}
removeLastCat()
removeFirstCat()