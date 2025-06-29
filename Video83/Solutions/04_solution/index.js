// The Password Validator: You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit.


let password = "RANDomly01";

let len = false;
let UC = false;
let LC = false;
let digit = false;
function checkPassword(password) {
    if (password.length >= 8) {
        len = true;
    }
    for (let i = 0; i < password.length; i++) {
        if (password.charCodeAt(i) >= 65 && password.charCodeAt(i) <= 90) {
            UC = true;
        }
        if (password.charCodeAt(i) >= 97 && password.charCodeAt(i) <= 122) {
            LC = true;
        }
        if (password.charCodeAt(i) >= 48 && password.charCodeAt(i) <= 57) {
            digit = true;
        }
    }
}
checkPassword(password);
console.log(len, UC, LC, digit);

if (len && UC && LC && digit) {
    console.log("Valid Password");
}
else {
    console.log("Invalid Password");
    console.log("Your Password should be at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit")
}