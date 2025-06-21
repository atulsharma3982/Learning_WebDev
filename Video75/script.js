console.log("First");
//asynchronous feature
setTimeout(() => {
    console.log("SetTimeout");
}, 0);
setTimeout(() => {
    console.log("SetTimeout 2");
}, 0);

console.log("End");

const callback=(arg)=>{
    console.log(arg);
}
const loadScript = (src,callback)=>{
    let sc = document.createElement("script");
    sc.src=src;
    sc.onload=callback("Harry");
    document.head.append(sc);
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",callback);
