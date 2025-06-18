let button = document.getElementById("btn");
button.addEventListener("dblclick",()=>{
    document.querySelector(".box").innerHTML="<b>Changed HTML</b>";
})
button.addEventListener("contextmenu",()=>{
    alert("Don't right click");
})
document.body.addEventListener("keydown",(e)=>{
    console.log(e);
})