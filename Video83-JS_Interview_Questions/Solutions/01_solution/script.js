// The Magical Sorting Hat:
//    Imagine you are creating a magical sorting hat for a wizard school. Implement a JavaScript function that takes an array of student names and assigns them to one of the four houses (Gryffindor (length less than 6), Hufflepuff(length less than 8), Ravenclaw(length less than 12), or Slytherin(length greater than or equal to 12)) based on the length of their names.

let arr =['Anjali','Guts','Griffith','ErenYeager','PrincessBhumika','Asta'];
let Gryffindor=[];
let Hufflepuff=[];
let Ravenclaw=[];
let Slytherin=[];

// let a;
// a = parseInt(prompt("Enter the number of students there are: "));

// for(let i=0;i<a;i++){
//     arr.push(prompt(`Enter name of student${i+1}: `));
// }
console.log(arr);
for(const Sname of arr){
    if(Sname.length<6){
        Gryffindor.push(Sname);
    }
    else if(Sname.length<8){
        Hufflepuff.push(Sname);
    }
    else if(Sname.length<12){
        Ravenclaw.push(Sname);
    }
    else{
        Slytherin.push(Sname);
    }
}

console.log(Gryffindor.sort());
console.log(Hufflepuff.sort());
console.log(Ravenclaw.sort());
console.log(Slytherin.sort());

