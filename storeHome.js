let carts = document.querySelectorAll('.btn-cart');
carts

let products = [
    {
        name: 'Red Shirt',
        tag: 'redshirt',
        price: 15,
        inCart: 0
    },

    {
        name: 'Yellow Shirt',
        tag: 'yellowshirt',
        price: 10,
        inCart: 0
    },

    {
        name: 'Orange Shirt',
        tag: 'orangeshirt',
        price: 20,
        inCart: 0
    },

    {
        name: 'Green Shirt',
        tag: 'greenshirt',
        price: 30,
        inCart: 0
    },

    {
        name: 'Blue Shirt',
        tag: 'blueshirt',
        price: 32,
        inCart: 0
    },

    {
        name: 'Pink Shirt',
        tag: 'pinkshirt',
        price: 100,
        inCart: 0
    },

    {
        name: 'Purple Shirt',
        tag: 'purpleshirt',
        price: 70,
        inCart: 0
    },

    {
        name: 'Black Shirt',
        tag: 'blackshirt',
        price: 60,
        inCart: 0
    }
];

for(let i=0; i<carts.length; i++){
    carts[i].addEventListener('click', () =>{
        cartNumbers(products[i]);
    })
}

function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers){
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

function cartNumbers(product){
    
    let productNumbers = localStorage.getItem('cartNumbers');
    
    productNumbers = parseInt(productNumbers);

    if(productNumbers){
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    }
    else{
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }
    setItems(product);
}

function setItems(product){
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    console.log("My cartsItems are", cartItems);

    product.inCart = 1;

    cartItems = {
        [product.tag]: product
    }

    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

onLoadCartNumbers();