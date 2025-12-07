let a = document.getElementsByClassName("box");
function random() {
    return Math.floor(Math.random()*100);
}
// for (let index = 0; index < a.length; index++) {
//     let x=random();
//     let y=random();
//     let z=random();
//     a[index].style.backgroundColor=`rgb(${x}%,${y}%,${z}%)`;
// }
// for (let index = 0; index < a.length; index++) {
//     let x=random();
//     let y=random();
//     let z=random();
//     a[index].style.color=`rgb(${x}%,${y}%,${z}%)`;
// }

//after watching solution
function getRandomColor(){
    return `rgb(${random()}%,${random()}%,${random()}%)`;
}
for (let index = 0; index < a.length; index++) {
    a[index].style.color=getRandomColor();
    a[index].style.backgroundColor=getRandomColor();
    
}