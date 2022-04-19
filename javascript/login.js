'use strict';

const $ = (selector) => document.querySelector(selector);

const error_message = 'This field is required.';
const email_pattern_error = 'Please enter valid email id.';
const user_email = 'user@gmail.com';
const user_password = 'user123';

const processEntries = () => {

    // get form controls to check for validity
    const email = $('#email');
    const password = $('#password');

    // check user entries for validity
    let isValid = true;

    // email validation(empty or not)
    if (email.value == '') {
        isValid = false;
        document.getElementById("error_email").innerHTML = error_message;
    } else {

        // email pattern validation
        var pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (pattern.test(email.value)) {
            document.getElementById("error_email").innerHTML = '';
            isValid = true;
        } else {
            document.getElementById("error_email").innerHTML = email_pattern_error;
            isValid = false;
        }
    }

    // password validation (empty or not)
    if (password.value == '') {
        document.getElementById("error_password").innerHTML = error_message;
        isValid = false;
    } else {
        document.getElementById("error_password").innerHTML = '';
    }

    // submit the form if all fields are valid
    if (isValid == true) {

        // checking email and password are correct or not
        if (email.value == user_email && password.value == user_password) {
            $('form').submit();
        } else {
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'Please enter valid email and password',
                showConfirmButton: true
            })
        }
    }
};

// it will load automatically
document.addEventListener('DOMContentLoaded', () => {
    $('#login').addEventListener('click', processEntries);
    $('#email').focus();
});