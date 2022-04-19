function validateForm() {
    let fname = document.forms["profile"]["firstname"].value;
    if (fname == "") {
      alert("First Name must be filled out");
      return false;
    }

    let lname = document.forms["profile"]["lastname"].value;
    if (lname == "") {
      alert("Last Name must be filled out");
      return false;
    }

    let number = document.forms["profile"]["number"].value;
    if (number == "") {
      alert("Contact number must be filled out");
      return false;
    }

    let address = document.forms["profile"]["address"].value;
    if (address == "") {
      alert("Address must be filled out");
      return false;
    }

    let email = document.forms["profile"]["email"].value;
    if (email == "") {
      alert("Email must be filled out");
      return false;
    }

    let date = document.forms["profile"]["date"].value;
    if (date == "") {
      alert("Date must be filled out");
      return false;
    }
  
   
   return true;
}