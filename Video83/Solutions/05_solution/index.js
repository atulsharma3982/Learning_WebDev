// The Sum Selector: You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation.

function sum(arr){
    let sum = 0;
    let i=0;
    while(arr[i]>=0&&i<arr.length){
        sum+=arr[i];
        i++;
    }
    return sum;
}

let arr = [1000000000, 2000000000, -1];
console.log(sum(arr));