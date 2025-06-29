async function sleep(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(98);
        }, 1500);
    })
}

(async function main() {
    // let a = await sleep();
    // let b = await sleep();
    // console.log(a,b);
})()

// let x,y=[1,5];
// let [x,y,...z]=[1,5,7,8,9,0];
// console.log(x,y,z);

const obj = {
    a:1,
    b:2,
    c:3
}
function sum(a,b,c){
    return a+b+c;
}
let {a,b}=obj;
console.log(a,b);

let arr = [1,2,3];

console.log(sum(arr[0],arr[1],arr[2]));
console.log(sum(...arr));

//read about hoisting