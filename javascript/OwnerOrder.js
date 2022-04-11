let url = "/assets/images/";

// create array of objects for items
let itemList = [
  {
    imageUrl: url + "panipuri.jpg",
    itemName: "Pani Puri",
    price: 12.5,
    qty: 1,
    isFavourite: 1,
  },
  {
    imageUrl: url + "chholebhature.jpg",
    itemName: "Chhole Bhature",
    price: 16,
    qty: 2,
    isFavourite: 1,
  },
  {
    imageUrl: url + "dalbati.jpg",
    itemName: "Dal Bati",
    price: 15.7,
    qty: 2,
    isFavourite: 1,
  },
  {
    imageUrl: url + "paubhaji.jpg",
    itemName: "Pav Bhaji",
    price: 20,
    qty: 5,
    isFavourite: 1,
  },
  {
    imageUrl: url + "dhonsa.jpg",
    itemName: "Dhonsa",
    price: 9.2,
    qty: 4,
    isFavourite: 1,
  },
  {
    imageUrl: url + "jalebi.jpg",
    itemName: "Jalebi",
    price: 21,
    qty: 1,
    isFavourite: 1,
  },
  {
    imageUrl: url + "khaman.jpg",
    itemName: "Khaman",
    price: 13,
    qty: 2,
    isFavourite: 1,
  },
  {
    imageUrl: url + "vadapau.jpg",
    itemName: "Vadapau",
    price: 5.7,
    qty: 3,
    isFavourite: 1,
  },
];

let favItemData = "";

// display item details using for loop and html attributes
for (let item of itemList) {
  favItemData += '<div class="item">';
  favItemData += '<div class="card">';
  favItemData += `<img class="card-img-top" src=${item.imageUrl} alt="Card image cap">`;
  favItemData += '<div class="card-body">';
  favItemData += '<div class="row">';
  favItemData += '<div class="col-lg-10">';
  favItemData += `<h5 class="card-title">${item.itemName}</h5>`;
  favItemData += `<p class="card_price">Price: <span style="font-weight: 650;">$${item.price}</span></p>`;

  favItemData += "</div>";
  favItemData += '<div class="col-lg-2"><i class="fas fa-heart"></i></div>';
  favItemData += "</div>";
  favItemData += '<a href="#" class="btn btn-secondary">Add to Cart</a>';
  favItemData += " </div>";
  favItemData += " </div>";
  favItemData += " </div>";
}

// set html content to the item container for showing list of data
document.querySelector(".item-container").innerHTML = favItemData;
