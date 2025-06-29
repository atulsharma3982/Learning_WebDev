// The Double Trouble: You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.

// let arr = [];
// console.log(arr.length);
let arr = [];

console.log(arr);
for(let i=0;i<arr.length;i++){
    if(arr.length<=1){
        if(arr.length==1)arr[i]=arr[i]*2;
        break;
    }
    arr[i]=arr[i]*2;
    if(i<arr.length-1&&(arr[i]/2)==arr[i+1]){
        i++;
    }
    // else{
    //     arr[i]=arr[i]*2;
    // }
}
console.log(arr);