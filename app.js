if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    const removeItemButton = document.getElementsByClassName('Remove')
for (let i=0; i < removeItemButton.length; i++) {
    let button = removeItemButton[i]
    button.addEventListener('click', removeCartItem)
} 
}

 function removeCartItem(event) {
    let buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

 
function updateCartTotal(){
let price = document.querySelectorAll('imgtext-price')
let quantity = document.querySelectorAll('cart-input')
let total = 0
let parse = parseFloat(price)
total = total + (parse * quantity)
update = document.querySelector('cart-total')
return update + total;

}

