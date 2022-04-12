function validation() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const email = document.getElementById('email').value;

    if (password !== confirmPassword) {
        alert("Password Mismatch");
        return false
    } else if (JSON.parse(localStorage.getItem('Users'))?.find(item => item.Email === email)) {
        alert("Email Already Exists");
        return false
    } else {
        return sendData();
    }
}

function sendSubscription() {
    const email = document.getElementById('subscription-email').value;
    let array = [];
    const oldArray = localStorage.getItem("SubscriptionEmail");
    if(oldArray !== null) {
        array.push(oldArray, email)
    } else {
        array.push(email) 

    }
    localStorage.setItem('SubscriptionEmail', array)
    document.getElementById('subscribe').innerHTML = 'Thanks, You are successfully subscribed';
    document.getElementById('subscription-email').value = '';  
}

function sendData() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const mobileNumber = document.getElementById('mobileNumber').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const checkbox = document.querySelector('.checkbox').checked;
    if ((username && email && mobileNumber && password && confirmPassword !== '') && (checkbox === true)) {

        let obj = {
            "Username": username,
            "Email": email,
            "Mobile Number": mobileNumber,
            "Password": password,
            "Confirm Password": confirmPassword,
            "Agree Conditions": checkbox
        }
        let array = []
        const oldArray = JSON.parse(localStorage.getItem("Users"))
        if (oldArray !== null) {
            array.push(...oldArray, obj)
        } else {
            array.push(obj)
        }
        console.log(array)
        localStorage.setItem("Users", JSON.stringify(array))

    }
}