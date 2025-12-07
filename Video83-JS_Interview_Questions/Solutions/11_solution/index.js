// The Array Filterer: You are building a search feature for your e-commerce site. Write a function named filterProducts that takes an array of product objects and a filter criterion. The function should return a new array containing only the products that match the filter criterion.

function filterProducts(array,filter){
    let arr =[];
    
    for(let i=0;i<array.length;i++){
        let match = true;
        for (const key in filter) {
            // if(filter.type==array[i].type||filter.color==array[i].color){
            if(filter[key]!=array[i][key]){
                // console.log(key);
                match=false;
            }
        }
        if(match){
            arr.push(array[i]);
        }
    }
    return arr;
}

let arr = [];

// let n=prompt("Enter the number of products");
// for(let i=0;i<n;i++){
//     let type = prompt("Enter the type of product");
//     let model = prompt("Enter the model of the product");
//     let obj = {
//         "type" : type,
//         "model" : model
//     }
//     arr.push(obj);
// }
arr.push({
    type:"watch",
    color:"black",
    model:"titan ts_01"
})
arr.push({
    type:"phone",
    color:"Golden:",
    model:"vivo vs_01"
})
let products = [
    { type: "watch", color: "black", model: "Titan Edge", price: 120 },
    { type: "phone", color: "black", model: "iPhone 14", price: 999 },
    { type: "laptop", color: "gray", model: "MacBook Air", price: 1299 },
    { type: "watch", color: "silver", model: "Casio Classic", price: 80 },
    { type: "phone", color: "blue", model: "Samsung Galaxy S21", price: 850 },
    { type: "watch", color: "black", model: "Fossil Gen 6", price: 200 }
];

let filtered = filterProducts(products, { type: "watch", color: "black" });

console.log("Filtered Products:");
console.log(filtered);

// console.log(arr)

let res = filterProducts(arr,{type:"watch",color:"black"});
console.log(res);