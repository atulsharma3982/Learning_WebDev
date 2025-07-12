// Async Array Mapping: Write an asynchronous function that takes an array of numbers and returns a new array of Promises where each number is multiplied by 2 after a delay of 500 milliseconds.

// async function multiplied(array) {
//     return new Promise((resolve, reject) => {
//         let i=0;
//         var id = setInterval(()=>{
//             array[i]*=2;
//             i++;
//         },500)
//         setTimeout(()=>{
//             clearInterval(id);
//             resolve(array);
//         },(array.length+1)*500);
//     })
// }
async function multiplied(array) {
    return array.map((value)=>{
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                resolve((value*2));
            },500)
        })
    })
    // return array;
}


// async function multiArr() {
//     let arr = [1, 2, 3, 4, 5, 6];
//     console.log("Input:", arr);
//     let promises = multiplied(arr); // don't await
//     console.log("Array of Promises:", promises);
// }

async function multiArr() {
    let arr = [1, 2, 3, 4, 5, 6];
    console.log("Input:", arr);
    
    let promises = await multiplied(arr);
    let results = await Promise.all(promises);
    
    console.log("Doubled after delay:", results); // [2, 4, 6, 8, 10, 12]
}




multiArr();