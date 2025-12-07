// The Token Manager: You are developing a user authentication system, and you need to manage user authentication tokens. Implement a function named setAuthToken that takes an authentication token and sets it in localStorage with an expiration time.

let time = new Date();
function setAuthToken(token){
    // let time=Math.floor(Math.random()*100)*100;
    // console.log(time)
    // console.log(time.getTime())
    // console.log(time.getMinugtes())
    // if(time.getMinutes()<45){
        // localStorage.setItem(`ExpirationTime`,`${time.getDate()}/${time.getMonth()}/${time.getFullYear()} , ${time.getHours()}:${time.getMinutes()}`);
    // }
    localStorage.setItem(`authToken`,token);
    localStorage.setItem("expiration", Date.now() + 15 * 60 * 1000);
    // setTimeout(() => {
    //     localStorage.removeItem('authToken');
    // }, 15*60*1000);
}
function getAuthToken(){
    if(Date.now()<localStorage.getItem('expiration')){
        return localStorage.getItem('authToken');
    }
    else{
        localStorage.removeItem('authToken');
        localStorage.removeItem('expiration');
        return null;
    }
}
setAuthToken("esdfiugsue");
console.log(getAuthToken())
