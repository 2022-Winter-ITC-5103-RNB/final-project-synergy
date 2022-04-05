function validateForm() {
    let date = document.forms["reserveatable"]["date"].value;
    if (date == "") {
      alert("fill proper date");
      return false;
    }

    let no_of_person = document.forms["reserveatable"]["no_of_person"].value;
    if (no_of_person == "") {
      alert("Enter valid number of people");
      return false;
    }

    let brunchtime = document.forms["reserveatable"]["brunchtime"].value;
    if (brunchtime == "") {
      alert("Contact number must be filled out");
      return false;
    }

    let dinnertime = document.forms["reserveatable"]["dinnertime"].value;
    if (dinnertime == "") {
      alert("Add Dinner time");
      return false;
    }
  
   alert("Table reserved");
   return true;
}