let a = [1, 3, 13, 5, 7, 11];
// let newArr=[];
// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     // console.log(element**2);
//     newArr.push(element**2);
// }
// console.log(newArr);

let newArr = a.map((e) => {
    return e ** 2;
})
console.log(newArr);
// console.log(newArr.sort((a, b) => a - b));

let greaterThan7 = (e) => {
    if (e > 7)
        return true;
    return false;
}
console.log(a.filter(greaterThan7));
let arr2 = [1, 2, 3, 4, 5, 6];
let add = (a,b)=>{
    return a+b;
}
console.log(arr2.reduce(add));