// console.log(rand);
let a = prompt("Enter 1st number");
let b = prompt("Enter 2nd number");
let c = prompt("Enter operation");
let rand = Math.random();
// a=Number(a);
// b=Number(b);
let obj = {
    "+": "-",
    "-": "/",
    "*": "+",
    "/": "**",
    "**":"*"
}
a = Number(a);
b = Number(b);

//harry way
// if(rand>0.1){
//     alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
// }
// else{
//     c=obj[c];
//     alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
// }

//using obj

if (rand < 0.1) {
    c=obj[c];
    if (c === "+") {
        console.log(a + b);
    }
    if (c === "-") {
        console.log(a - b);
    }
    if (c === "*") {
        console.log(a * b);
    }
    if (c === "/") {
        console.log(a / b);
    }
    if (c === "**") {
        console.log(a ** b);
    }
}
else {
    if (c === "+") {
        console.log(a + b);
    }
    if (c === "-") {
        console.log(a - b);
    }
    if (c === "*") {
        console.log(a * b);
    }
    if (c === "/") {
        console.log(a / b);
    }
    if (c === "**") {
        console.log(a ** b);
    }

}




//original one

// if (rand < 0.1) {
//     if (c === "+") {
//         console.log( a - b);
//     }
//     if (c === "-") {
//         console.log( a / b);
//     }
//     if (c === "*") {
//         console.log( a + b);
//     }
//     if (c === "/") {
//         console.log( a ** b);
//     }
// }
// else {
//     if (c === "+") {
//         console.log(a+b);
//     }
//     if (c === "-") {
//         console.log( a - b);
//     }
//     if (c === "*") {
//         console.log( a * b);
//     }
//     if (c === "/") {
//         console.log( a / b);
//     }
// }