function validation() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phoneNo = document.getElementById("phoneNo").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;
  var error = document.getElementsByClassName("error");
  var errorMsg;

  if (name.length < 3) {
    errorMsg = "Please Enter Valid Name";
    error[0].innerHTML = errorMsg;
    return false;
  }

  if (email.indexOf("@") == -1 || email.length < 10) {
    errorMsg = "Please Enter Valid Email";
    error[1].innerHTML = errorMsg;
    return false;
  }

  if (isNaN(phoneNo) || phoneNo.length < 10) {
    errorMsg = "Please Enter Valid Phone No";
    error[2].innerHTML = errorMsg;
    return false;
  }

  if (subject == null || subject.length < 3) {
    errorMsg = "Please Enter Correct Subject";
    error[3].innerHTML = errorMsg;
    return false;
  }

  if (message.length < 70) {
    errorMsg = "Please Enter More Than 70 Characters";
    error[4].innerHTML = errorMsg;
    return false;
  }

  return true;
}

// POP UP

function toggle() {
  let popup = document.getElementById("popup");
  var blur = document.getElementById("blur");
  blur.classList.toggle("active");
  popup.classList.add("open-popup");
}
