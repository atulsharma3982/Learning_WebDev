// let obj = {
//     a: 1,
//     b: 2
// }

// console.log(obj);

// let animal = {
//     eats: true,
// };
// let rabbit = {
//     jumps: true,
// };

// rabbit.__proto__ = animal;//sets rabbit.[[prototype]]=animal

class Animal{
    constructor(name){
        this.name=name;
        console.log("Object is created...");
    }
    jumps(){
        console.log("Kood rha hu");
    }
    eats(){
        console.log("Kha rha hu");
    }
}

class Lion extends Animal{
    constructor(name){
        super(name);
        this.name=name;
        console.log("Object is created and it's a lion...");
    }
    eats(){
        super.eats();
        console.log("Roars");
    }
}

let a = new Animal("Bunny");
console.log(a);

let l = new Lion("Shera");
console.log(l);

// a instanceof Animal
// l instanceof Animal
// a instanceof Lion
// l instanceof Lion