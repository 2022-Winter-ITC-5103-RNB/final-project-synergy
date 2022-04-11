//   header
var x = document.getElementById("myTopnav");
if (x.className === "navbar") {
  x.className += " responsive";
} else {
  x.className = "navbar";
  x.className -= " responsive";
}
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  // inputControl.classList.remove('success')
};
const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  let res = validateInputs();
  if (res) {
    e.target.reset();
  }
  // e.target.reset();
});

function validateInputs() {
  //getElementById
  let fname = document.getElementById("name").value;
  let fnameEl = document.getElementById("name");
  let email = document.getElementById("email").value;
  let emailEl = document.getElementById("email");
  let phone_no = document.getElementById("phone_no").value;
  let phone_noEl = document.getElementById("phone_no");
  let query = document.getElementById("query").value;
  let queryEl = document.getElementById("query");

  //check validation
  if (fname === "") {
    setError(fnameEl, "Name must be filled out");
  } else {
    setError(fnameEl, "");
  }

  if (email === "") {
    setError(emailEl, "Email must be filled out");
  } else {
    setError(emailEl, "");
  }

  if (phone_no === "") {
    setError(phone_noEl, "Phone Number must be filled out");
  } else {
    setError(phone_noEl, "");
  }

  if (query === "") {
    setError(queryEl, "Query must be filled out");
  } else {
    setError(queryEl, "");
  }

  //return statement
  if (fname === "" || email === "" || phone_no === "" || query === "") {
    return false;
  } else {
    return true;
  }
}
