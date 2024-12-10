//----------------------Task1--------------------------------------
const CART = [
{
    title: 'Milk',
    price: 32.5,
    qty: 2, 
    isBuy: false,
}

{
    title: 'Bread',
    price: 21.2,
    qty: 1, 
    isBuy: false,
}
]


function addToCart(newTitle, newPrice, newQty) {
    const ind = CART.findIndex(el =>el.title === newTitle)
CART.push({
    title: title,
    price: price,
    qty: gty, 
    isBuy: false,
}) 
}