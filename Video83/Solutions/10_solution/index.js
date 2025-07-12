// The Coffee Machine: In your coffee shop application, you need to simulate the process of brewing coffee asynchronously. Write an async function named brewCoffee that takes the type of coffee and returns a promise. The promise should resolve with a message indicating that the coffee is ready after a random delay./

async function brewCoffee(coffee) {
    let rand = Math.ceil(Math.random()*100)*100;
    // console.log(rand);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve("Order Confirmed after "+rand/10+" seconds");
            resolve(`${coffee} is ready after ${rand/1000} seconds`);
        }, rand);
    })
}
(async function coffeeShop() {
    let res = await brewCoffee("Espresso");
    console.log(res);
})()