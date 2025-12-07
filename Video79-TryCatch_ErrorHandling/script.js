let a = prompt("Enter 1st number");
let b = prompt("Enter 2nd number");

if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("Sorry entered value is not a number");
}
let sum = parseInt(a) + parseInt(b);

console.log("The sum is ", sum);

function tryy() {
    try {
        console.log("sjhdfkjsg  ", sum * x);
        return true;
    } catch (error) {
        console.log("Error dude");
        return false;
    }
    finally {
        console.log("U need this no matter what");
    }
}
tryy();