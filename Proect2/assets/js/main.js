//----------------------Task1--------------------------------------
const CART = [{
        title: 'Milk',
        price: 32.5,
        qty: 2,
        isBuy: true,
    },

    {
        title: 'Bread',
        price: 21.2,
        qty: 1,
        isBuy: false,
    }
]


function addToCart(newTitle, newPrice, newQty) {
    const ind = CART.findIndex(el => el.title === newTitle)
    let action = 'added'
    if (ind === -1) {
        CART.push({
            title: newTitle,
            price: newPrice,
            qty: newQty,
            isBuy: false
        })
    } else {
        CART[ind].qty += newQty
        action = 'updated'
        CART[ind].isBuy = false
    }
    return action
}

function checkAndAddToCart() {
    const title = document.getElementById('prodTitle').value
    const price = document.getElementById('prodPrice').valueAsNumber
    const qty = document.getElementById('prodQty').valueAsNumber

    if (title === '') {
        alert('Enter product title, please')
        return
    }

    if (isNaN(price)) {
        alert('Enter product price, please')
        return
    } else {
        if (price <= 0) {
            alert('Invalid price')
            return
        }
    }

    if (isNaN(qty)) {
        alert('Enter product quantity, please')
        return
    } else {
        if (qty <= 0) {
            alert('Invalid quantity')
            return
        }
    }

    //const action = addToCart(title, price, qty)
    const msg = addToCart(title, price, qty) === 'added' ? 'Product added successfully' : 'Product updated successfully'
    alert(msg)


    document.getElementById('prodTitle').value = ''
    document.getElementById('prodPrice').value = ''
    document.getElementById('prodQty').valueAsNumber = 1
    showProductList()
}

function showProductList() {
const cartTotal = CART.reduce((acc, el) =>acc + el.price*el.qty, 0)


    let list = '';
let total =0
    CART.forEach((prod, index) => {
        total +=prod.price * prod.qty
        list += `<tr>
            <td>${index +1}</td> 
            <td>${prod.title}</td>
            <td>${prod.isBuy ? '<span class="badge text-bg-success">Yes</span>' : '<span class="badge text-bg-danger">No</span>'}</td> 
            <td>${prod.price.toFixed(2)}</td> 
            <td>${prod.qty}</td> 
            <td>${(prod.price * prod.qty).toFixed(2)}</td>
            <td class="text-end">
            ${!prod.isBuy ? `<button type="button" class="btn btn-success" onclick="buyProduct(${index})">Buy</button>` :''}
             
            ${!prod.isBuy ? `<button type="button" class="btn btn-danger" onclick="deletProduct(${index})">Delete</button>` :''}
            </td> 
          </tr>`
    })

    document.getElementById('product_list').innerHTML = list
    document.getElementById('cartTotal').innerHTML = cartTotal.toFixed(2)
}

function buyProduct(index){
CART[index].isBuy = true
showProductList()
}

function deletProduct(index){
if(confirm(`Do you want to delete ${CART[index].title}?`))
    CART.splice(index, 1)
showProductList()
}

showProductList()
//addToCart('Bread', 21.2, 2)