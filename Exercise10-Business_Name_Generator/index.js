// Create a business name generator by combining list of adjectives and shop name and another word


// Adjectives:
// Crazy 
// Amazing
// Fire 

// Shop Name:
// Engine
// Foods
// Garments

// Another Word:
// Bros
// Limited
// Hub

function random() {
    if (Math.random() > 0.7) {
        return 3;
    }
    else if (Math.random() > 0.4) {
        return 2;
    }
    else {
        return 1;
    }
}

function Adj() {
    let Random=random();
    if(Random==1){
        return "Crazy";
    }
    else if(Random==2){
        return "Amazing";
    }
    else if(Random==3){
        return "Fire";
    }
}
function Sname() {
    let Random=random();
    if(Random==1){
        return "Engine";
    }
    else if(Random==2){
        return "Foods";
    }
    else if(Random==3){
        return "Garments";
    }
}
function AnotherWord() {
    let Random=random();
    if(Random==1){
        return "Bros";
    }
    else if(Random==2){
        return "Limited";
    }
    else if(Random==3){
        return "Hub";
    }
}
console.log("Business name is: " + Adj() + " " + Sname() + " " + AnotherWord());

// let Adj = {
//     1: "Crazy",
//     2: "Amazing",
//     3: "Fire"
// }
// let Sname = {
//     1: "Engine",
//     2: "Foods",
//     3: "Garments"
// }
// let AnotherWord = {
//     1: "Bros",
//     2: "Limited",
//     3: "Hub"
// }

// let a = random();
// let b = random();
// let c = random();
// console.log(a, b, c)
// console.log("Business name is: " + Adj[random()] + " " + Sname[random()] + " " + AnotherWord[random()]);
