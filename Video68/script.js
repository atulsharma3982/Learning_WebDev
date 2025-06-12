console.log("Hello")
document.getElementById("redbox").style.backgroundColor="red";
document.getElementsByClassName("box")
let a = document.getElementsByClassName("box");
a[0].style.backgroundColor="green";
document.getElementsByTagName("div");
document.querySelector(".box").style.color="white";
document.querySelectorAll(".box");
document.querySelectorAll(".box").forEach((e)=>{e.style.backgroundColor="purple";});
a[0].matches(".box")
a[3].matches("#redbox")
a[2].matches("#redbox")
document.getElementsByClassName("container")[0].contains(a[0])
a[2].contains(document.getElementsByClassName("container")[0])