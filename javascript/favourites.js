let url = '/assets/images/';

// Automatically load the page
window.onload = function () {
    displayItems();
}

// create array of objects for items
let itemList = [{
        imageUrl: url + 'panipuri.jpg',
        itemName: 'Pani Puri',
        price: 12.5,
        isFavourite: 1,
    },
    {
        imageUrl: url + 'chholebhature.jpg',
        itemName: 'Chhole Bhature',
        price: 16,
        isFavourite: 1,
    },
    {
        imageUrl: url + 'dalbati.jpg',
        itemName: 'Dal Bati',
        price: 15.7,
        isFavourite: 1,
    },
    {
        imageUrl: url + 'paubhaji.jpg',
        itemName: 'Pav Bhaji',
        price: 20,
        isFavourite: 1,
    },
    {
        imageUrl: url + 'dhonsa.jpg',
        itemName: 'Dhonsa',
        price: 9.2,
        isFavourite: 1,
    },
    {
        imageUrl: url + 'jalebi.jpg',
        itemName: 'Jalebi',
        price: 21,
        isFavourite: 1,
    },
    {
        imageUrl: url + 'khaman.jpg',
        itemName: 'Khaman',
        price: 13,
        isFavourite: 1,
    },
    {
        imageUrl: url + 'vadapau.jpg',
        itemName: 'Vadapau',
        price: 5.7,
        isFavourite: 1,
    }
];

function displayItems() {
    let favItemData = '';

    // display item details using for loop and html attributes
    for (let [index, item] of itemList.entries()) {
        favItemData += '<div class="item">';
        favItemData += '<div class="card">';
        favItemData += `<img class="card-img-top" src=${item.imageUrl} alt="Card image cap">`;
        favItemData += '<div class="card-body">';
        favItemData += '<div class="row">';
        favItemData += '<div class="col-lg-10">';
        favItemData += `<h5 class="card-title">${item.itemName}</h5>`;
        favItemData += `<p class="price">Price: <span style="font-weight: 650;">$${item.price}</span></p>`;
        favItemData += '</div>';
        favItemData += `<div class="col-lg-2"><i class="fas fa-heart" onclick="unFavourite(${index})"></i></div>`;
        favItemData += '</div>';
        favItemData += '<a href="#" class="btn btn-secondary">Add to Cart</a>';
        favItemData += ' </div>';
        favItemData += ' </div>';
        favItemData += ' </div>';

        // set html content to the item container for showing list of data
        document.querySelector('.item-container').innerHTML = favItemData;
    }

}

// function for unfavourite item from item list
function unFavourite(index) {
    itemList.splice(index, 1);
    displayItems();
}