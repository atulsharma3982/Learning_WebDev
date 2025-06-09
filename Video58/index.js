function nice(name) {
    console.log("Hey " + name + " you are nice!");
    console.log("Hey " + name + " you are good!");
    console.log("Hey " + name + " your tshirt is nice!");
    console.log("Hey " + name + " your course is good too!");
}

// nice("asta");
// nice("yami");
// console.log("Hey harry you are nice!");
// console.log("Hey harry you are good!");
// console.log("Hey harry your tshirt is nice!");
// console.log("Hey harry your course is good too!");

function sum(a,b,c=3) {
    // console.log(a+b);
    return a+b+c;
}

let result1=sum(2,3);
let result2=sum(6,3);
let result3=sum(2,9);

console.log("The sum of a and b is: ",result1);
console.log("The sum of a and b is: ",result2);
console.log("The sum of a and b is: ",result3);