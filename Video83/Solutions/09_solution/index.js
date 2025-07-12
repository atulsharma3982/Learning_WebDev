// The Asynchronous Shopper: Imagine you are building an online shopping application. Write an asynchronous function called placeOrder that simulates placing an order and returns a promise. The promise should resolve with an order confirmation message after a random delay.

async function placeOrder() {
    let rand = Math.ceil(Math.random()*100)*100;
    // console.log(rand);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve("Order Confirmed after "+rand/10+" seconds");
            resolve(`Order confirmed after ${rand/1000} seconds`);
        }, rand);
    })
}
(async function onlineShopping(params) {
    let res = await placeOrder();
    console.log(res);
})()