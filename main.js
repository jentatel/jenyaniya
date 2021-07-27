let carts = document.querySelectorAll('.add-cart');

let products = [
    {
        name: 'Lip Tint',
        tag: 'liptint',
        price: 59,
        inCart: 0
    },

    {
        name: 'Trio Set',
        tag: 'trio',
        price: 120,
        inCart: 0
    },


    {
        name: 'Candy Blush',
        tag: 'candyblush',
        price: 89,
        inCart: 0
    },

    {
        name: 'Lip Balm',
        tag: 'lipbalm',
        price: 79,
        inCart: 0
    }
]
for (let i=0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers();
    })
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

function cartNumbers() { 
    let productNumbers = localStorage.getItem('cartNumbers');
    
    productNumbers = parseInt(productNumbers);
    
    if(productNumbers){
    localStorage.setItem('cartNumbers', productNumbers + 1);
    document.querySelector('.cart span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }
}

onLoadCartNumbers();