let  cart = []
let list = [
    {name: "ikan", price: 7000},
    {name: "sayur", price: 5000 },
    {name: "daging", price: 10000},
    {name: "telur", price: 12000}
]
let onCart = cart.concat(list)
let total = onCart.length
let total_price = onCart.map(onCart => onCart.price)
console.log(onCart)

const reducer = (accumulator, currentValue) => accumulator + currentValue
console.log("amoun " + total + " with total price " + total_price.reduce(reducer))