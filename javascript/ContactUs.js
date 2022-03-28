
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

function validateForm() {
    let fname = document.forms["Information_form"]["name"].value;
    let email = document.forms["Information_form"]["email"].value;
    let phone_no = document.forms["Information_form"]["phone_no"].value;
    let Query = document.forms["Information_form"]["Query"].value;

    if (fname == "") {
        alert("Name must be filled out");
      return false;
    }

    if (email == "") {
        alert("email must be filled out");
        return false;
    }else if(email.indexOf("@") == -1 || email.length < 6){
        alert("Please Enter valid Email");
    }

    if (phone_no == "") {
        alert("contact number must be filled out");
        return false;
    }
    if (Query == "") {
        alert("feedback must be filled out");
        return false;
    }

    alert("Form Submitted Successfully!");
    return true;
  }

