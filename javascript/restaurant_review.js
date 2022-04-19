function validateForm() {
    let email = document.forms["feedback"]["email"].value;
    if (email == "") {
      alert("Add email");
      return false;
    }

    let name = document.forms["feedback"]["name"].value;
    if (name == "") {
      alert("Add name");
      return false;
    }

    
    let comment = document.forms["feedback"]["comment"].value;
    if (comment == "") {
      alert("Add comments");
      return false;
    

   alert("Feedback SUbmitted");
   return true;

    }
}