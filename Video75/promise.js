console.log('This is promises');
let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if(a<0.5){
        reject("Random number rejected this");
    }
    else{
        setTimeout(() => {
            console.log('This is done');
            resolve("Now do play");
        }, 1000);
    }
})
// prom1.then((a)=>{
//     console.log(a);
// }).catch((a)=>{
//     console.log(a);
// })


let prom2 = new Promise((resolve, reject) => {
    let a = Math.random();
    if(a<0.5){
        reject("Random number rejected this 2");
    }
    else{
        setTimeout(() => {
            console.log('This is done 2');
            resolve("Now do play 2");
        }, 2000);
    }
})
let prom3 = new Promise((resolve, reject) => {
    let a = Math.random();
    if(a<0.5){
        reject("Random number rejected this 3");
    }
    else{
        setTimeout(() => {
            console.log('This is done 3');
            resolve("Now do play 3");
        }, 3000);
    }
})
let prom4 = new Promise((resolve, reject) => {
    let a = Math.random();
    if(a<0.5){
        reject("Random number rejected this 4");
    }
    else{
        setTimeout(() => {
            console.log('This is done 4');
            resolve("Now do play 4");
        }, 4000);
    }
})
let prom5 = new Promise((resolve, reject) => {
    let a = Math.random();
    if(a<0.5){
        reject("Random number rejected this 5");
    }
    else{
        setTimeout(() => {
            console.log('This is done 5');
            resolve("Now do play 5");
        }, 5000);
    }
})

// let p3 = Promise.all([prom1,prom2,prom3,prom4,prom5]);
// let p3 = Promise.allSettled([prom1,prom2,prom3,prom4,prom5]);
// let p3 = Promise.race([prom1,prom2,prom3,prom4,prom5]);
// let p3 = Promise.any([prom1,prom2,prom3,prom4,prom5]);
// let p3 = Promise.resolve([prom1,prom2,prom3,prom4,prom5]);
// let p3 = Promise.reject([prom1,prom2,prom3,prom4,prom5]);

p3.then((a)=>{
    console.log(a);
}).catch((a)=>{
    console.log(a);
})
