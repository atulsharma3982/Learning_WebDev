// The Shopping Cart Totalizer: You are working on an e-commerce website, and you need to calculate the total cost of items in the shopping cart. Implement a function named calculateTotal that takes an array of products with prices and quantities and returns the total cost.

function calculateTotal(array){
    let totalCost=0;
    for (const element of array) {
        totalCost+=(element.price*element.quantity);
    }
    return totalCost;
}

let products=[
    {
        price:500,
        quantity:2
    },
    {
        price:1000,
        quantity:3
    }
]

let total = calculateTotal(products);
console.log(total);