//factorial of a number

let n = prompt("Enter a number");
//through reduce and array
let arr = [];
for (let i = n; i > 0; i--) {
    arr.push(i);
}
let fact = (a, b) => {
    return a * b;
}
console.log(arr.reduce(fact));

//through for loop
let a = 1;

for (let i = n; i > 0; i--) {
    a *= i;
}
console.log(a);