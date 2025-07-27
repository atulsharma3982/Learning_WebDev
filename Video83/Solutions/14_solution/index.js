// The Window Scroller: You are developing a single-page application with a smooth scrolling effect. Implement a function named smoothScrollToTop that smoothly scrolls the window to the top when called.
function smoothScrollToTop(){
    // window.scrollTo({top:0,behavior:"smooth"});
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
let button = document.querySelector("button");
if(button){
    button.addEventListener('click',()=>{
        smoothScrollToTop()
    })
}