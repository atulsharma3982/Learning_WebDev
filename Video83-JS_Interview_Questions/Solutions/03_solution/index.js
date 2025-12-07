// The Mirror Mirror: Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself.

let a= "résumé";
let b="";
for (let i=0;i<a.length;i++) {
    b+=a[a.length-i-1];
}
// a+=b;
a=a.concat(b);

console.log(a);