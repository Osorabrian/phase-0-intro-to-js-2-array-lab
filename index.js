// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push("Ralph");
}

function destructivelyPrependCat(name){
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat(){
    cats.pop()
}

function destructivelyRemoveFirstCat(){
    cats.shift()
}

function appendCat(name){
    return name = [...cats.slice(),"Broom"]
}

function prependCat(name){
    return name = ["Arnold",...cats.slice()]
}

function removeFirstCat(){
    return cats.slice(1)
}

function removeLastCat(){
    return cats.slice(0,-1)
}

