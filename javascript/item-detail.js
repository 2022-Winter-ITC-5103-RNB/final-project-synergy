let quantity = 1;

// get item list from array from index
let itemList = JSON.parse(localStorage.getItem("itemList"));
let selectedItem = localStorage.getItem("selectedItem");
let selectedItemData = itemList[selectedItem];
document.querySelector('.quantity').innerHTML = quantity;
document.querySelector('#amount').innerHTML = selectedItemData.price;
document.querySelector('.item-name').innerHTML = selectedItemData.itemName;
document.querySelector('#total').innerHTML = quantity * selectedItemData.price;
document.querySelector('.totalQuantity').innerHTML = quantity;
document.querySelector(".image").src = selectedItemData.imageUrl;

function editQuantity(type) {
    if (type == "add") {
        quantity++;
    } else {
        if (quantity == 1) {
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'Please select positive number of quantity',
                showConfirmButton: true
            })
        } else {
            quantity--;
        }
    }

    document.querySelector('.quantity').innerHTML = quantity;
    document.querySelector('.totalQuantity').innerHTML = quantity;
    document.querySelector('#total').innerHTML = (quantity * selectedItemData.price).toFixed(2);
}