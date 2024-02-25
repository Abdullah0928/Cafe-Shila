let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', () => {
    body.classList.add('active');
});

closeShopping.addEventListener('click', () => {
    body.classList.remove('active');
});

let products = [
    {
        id: 1,
        name: 'Burger',
        image: 'burger.png',
        price: 800.00
    },
    {
        id: 2,
        name: 'Pizza',
        image: 'pizza.png',
        price: 2000
    },
    {
        id: 3,
        name: 'Bbq Chicken',
        image: 'bbq-.png.',
        price: 2500
    },
    {
        id: 4,
        name: 'Biriyani',
        image: 'biriyani.png',
        price: 1300
    },
    {
        id: 5,
        name: 'Crispy Chicken',
        image: 'crispy.png',
        price: 1500
    },
    {
        id: 6,
        name: 'Tacos',
        image: 'tacos.png',
        price: 1200
    },
    {
        id: 7,
        name: 'Pasta',
        image: 'pasta.png',
        price: 1000
    },
    {
        id: 8,
        name: 'Laksa',
        image: 'laksa.png',
        price: 900
    },
    {
        id: 9,
        name: 'Noodles',
        image: 'noodles.png',
        price: 1100
    },
    {
        id: 10,
        name: 'Hot Dog Bun',
        image: 'hot.png',
        price: 500
    },
    {
        id: 11,
        name: 'French Fries',
        image: 'fries.png',
        price: 450
    },
    {
        id: 12,
        name: 'Acai Bowl',
        image: 'acai.png',
        price: 800
    },
    {
        id: 13,
        name: 'Avocado Toas',
        image: 'av.png',
        price: 450
    },
    {
        id: 14,
        name: 'Acai Bowl',
        image: 'acai.png',
        price: 800
    },
    {
        id: 15,
        name: 'Donets',
        image: 'donets.png',
        price: 300
    },
    {
        id: 16,
        name: 'Cake',
        image: 'cake.png',
        price: 350
    },
    {
        id: 17,
        name: 'Mojito',
        image: 'mojitoo.png',
        price: 450
    },
    {
        id: 18,
        name: 'smothies',
        image: 'orange.png',
        price: 600
    },
    {
        id: 19,
        name: 'Fruit-Salad',
        image: 'fruit_salad.png',
        price: 550
    },
    {
        id: 21,
        name: 'Coconut Water',
        image: 'Coconut.png',
        price: 150
    },


    
    // ... (other product data)
];

let listCards = [];

function initApp() {
    products.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}" style="height: 250px;">
            <div class="title">${value.name}</div>
            <div class="price">Rs ${value.price.toLocaleString()}.00</div>
            <button onclick="addToCard(${key})" style="border-radius: 50px;">ADD TO CART</button>`;
        list.appendChild(newDiv);
    });
}

function addToCard(key) {
    if (listCards[key] == null) {
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}

function reloadCard() {
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key) => {
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if (value != null) {
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div style="font-size: 25px; margin-top:20px;">${value.name}</div>
                <div style="font-size: 25px; margin-top:20px;">${value.price.toLocaleString()}</div>
                <div>
                    <button style="font-size: 25px; margin-top:20px;" onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count" style="font-size: 30px; margin-top:20px;">${value.quantity}</div>
                    <button  style="font-size: 25px; margin-top:20px;"onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
            listCard.appendChild(newDiv);
        }
    });
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}

function changeQuantity(key, quantity) {
    if (quantity == 0) {
        delete listCards[key];
    } else {
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}

total.addEventListener('click', () => {
    // Assuming you want to redirect to a page named 'checkout.html'
    window.location.href = 'payment.html';
});

initApp();
