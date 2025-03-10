"use strict";

//----------------------Task1--------------------------------------
var CART = [{
  title: 'Milk',
  price: 32.5,
  qty: 2,
  isBuy: true
}, {
  title: 'Bread',
  price: 21.2,
  qty: 1,
  isBuy: false
}];

function addToCart(newTitle, newPrice, newQty) {
  var ind = CART.findIndex(function (el) {
    return el.title === newTitle;
  });
  var action = 'added';

  if (ind === -1) {
    CART.push({
      title: newTitle,
      price: newPrice,
      qty: newQty,
      isBuy: false
    });
  } else {
    CART[ind].qty += newQty;
    action = 'updated';
<<<<<<< HEAD
=======
    CART[ind].isBuy = false;
>>>>>>> a0ed8a7a72688467e14f9b14f31371115c56ae0d
  }

  return action;
}

function checkAndAddToCart() {
  var title = document.getElementById('prodTitle').value;
  var price = document.getElementById('prodPrice').valueAsNumber;
  var qty = document.getElementById('prodQty').valueAsNumber;

  if (title === '') {
<<<<<<< HEAD
    alert('Enter product title, please');
=======
    toast.error('Enter product title, please');
>>>>>>> a0ed8a7a72688467e14f9b14f31371115c56ae0d
    return;
  }

  if (isNaN(price)) {
<<<<<<< HEAD
    alert('Enter product price, please');
    return;
  } else {
    if (price <= 0) {
      alert('Invalid price');
=======
    toast.error('Enter product price, please');
    return;
  } else {
    if (price <= 0) {
      toast.error('Invalid price');
>>>>>>> a0ed8a7a72688467e14f9b14f31371115c56ae0d
      return;
    }
  }

  if (isNaN(qty)) {
<<<<<<< HEAD
    alert('Enter product quantity, please');
    return;
  } else {
    if (qty <= 0) {
      alert('Invalid quantity');
=======
    toast.error('Enter product quantity, please');
    return;
  } else {
    if (qty <= 0) {
      toast.error('Invalid quantity');
>>>>>>> a0ed8a7a72688467e14f9b14f31371115c56ae0d
      return;
    }
  } //const action = addToCart(title, price, qty)


<<<<<<< HEAD
  var msg = addToCart(title, price, qty) === 'added' ? 'Product added successfully' : 'Product upgraded successfully';
  alert(msg);
=======
  var msg = addToCart(title, price, qty) === 'added' ? 'Product added successfully' : 'Product updated successfully';
  toast.success(msg);
>>>>>>> a0ed8a7a72688467e14f9b14f31371115c56ae0d
  document.getElementById('prodTitle').value = '';
  document.getElementById('prodPrice').value = '';
  document.getElementById('prodQty').valueAsNumber = 1;
  showProductList();
}

function showProductList() {
  var cartTotal = CART.reduce(function (acc, el) {
    return acc + el.price * el.qty;
  }, 0);
  var list = '';
  var total = 0;
  CART.forEach(function (prod, index) {
    total += prod.price * prod.qty;
<<<<<<< HEAD
    list += "<tr>\n            <td>".concat(index + 1, "</td> \n            <td>").concat(prod.title, "</td>\n            <td>").concat(prod.isBuy ? '<span class="badge text-bg-success">Yes</span>' : '<span class="badge text-bg-danger">No</span>', "</td> \n            <td>").concat(prod.price.toFixed(2), "</td> \n            <td>").concat(prod.qty, "</td> \n            <td>").concat((prod.price * prod.qty).toFixed(2), "</td>\n            <td>\n            <button type=\"button\" class=\"btn btn-success\" onclick=\"buyProduct(").concat(index, ")\">Buy</button>\n            <button type=\"button\" class=\"btn btn-danger\" onclick=\"deletProduct(").concat(index, ")\">Delete</button>\n            </td> \n          </tr>");
=======
    list += "<tr>\n            <td>".concat(index + 1, "</td> \n            <td>").concat(prod.title, "</td>\n            <td>").concat(prod.isBuy ? '<span class="badge text-bg-success">Yes</span>' : '<span class="badge text-bg-danger">No</span>', "</td> \n            <td>").concat(prod.price.toFixed(2), "</td> \n            <td>").concat(prod.qty, "</td> \n            <td>").concat((prod.price * prod.qty).toFixed(2), "</td>\n            <td class=\"text-end\">\n            ").concat(!prod.isBuy ? "<button type=\"button\" class=\"btn btn-success\" onclick=\"buyProduct(".concat(index, ")\">Buy</button>") : '', "\n             \n            ").concat(!prod.isBuy ? "<button type=\"button\" class=\"btn btn-danger\" onclick=\"deletProduct(".concat(index, ")\">Delete</button>") : '', "\n            </td> \n          </tr>");
>>>>>>> a0ed8a7a72688467e14f9b14f31371115c56ae0d
  });
  document.getElementById('product_list').innerHTML = list;
  document.getElementById('cartTotal').innerHTML = cartTotal.toFixed(2);
}

function buyProduct(index) {
  CART[index].isBuy = true;
  showProductList();
}

function deletProduct(index) {
  if (confirm("Do you want to delete ".concat(CART[index].title, "?"))) CART.splice(index, 1);
  showProductList();
}

showProductList(); //addToCart('Bread', 21.2, 2)