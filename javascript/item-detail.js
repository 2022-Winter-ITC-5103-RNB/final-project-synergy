let quantity = 1;
let amount = 9.35;
document.querySelector('.quantity').innerHTML = quantity;
document.querySelector('#amount').innerHTML = amount;
document.querySelector('#total').innerHTML = quantity * amount;
document.querySelector('.totalQuantity').innerHTML = quantity;

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
    document.querySelector('#total').innerHTML = (quantity * amount).toFixed(2);
}