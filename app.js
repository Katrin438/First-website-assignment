function validateForm() {
    var firstname = document.forms["Form"]["firstname"].value;
    var firstname = document.forms["Form"]["lastname"].value;
    if (firstname == null || firstname == "") {
      alert("Please Fill All Required Field");
      return false;
    }
  }