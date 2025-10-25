var form = document.getElementById("formId");
var submit = document.getElementById("submit_btn");
var msgSent = document.getElementById("message_sent");
var nameError = document.getElementById("name_error");
var emailError = document.getElementById("email_error");
var subjectError = document.getElementById("subject_error");
var msgError = document.getElementById("msg_error");
var submitError = document.getElementById("submit_error");

// Validation functions
function validateName() {
  var name = document.getElementById("name").value;
  if (name.length == 0) {
    nameError.innerHTML = "name is required";
    return false;
  }
  if (!name.match(/^[a-zA-Z]+(?:\s[a-zA-Z].+)+$/)) {
    nameError.innerHTML = "Write full name";
    return false;
  }
  nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

function validateEmail() {
  var email = document.getElementById("email").value;
  if (email.length == 0) {
    emailError.innerHTML = "Email is required";
    return false;
  }
  if (
    !email.match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
  ) {
    emailError.innerHTML = "Email is invalid";
    return false;
  }
  emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

function validateSubject() {
  var subject = document.getElementById("subject").value;
  if (subject.length == 0) {
    subjectError.innerHTML = "Subject is required";
    return false;
  }
  subjectError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

function validateMsg() {
  var msg = document.getElementById("message").value;
  var required = 30;
  var left = required - msg.length;
  if (left > 0) {
    msgError.innerHTML = left + " more characters required";
    return false;
  }
  msgError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

function validateForm() {
  if (!validateName() || !validateEmail() || !validateMsg()) {
    submitError.innerHTML = "please fix errors to submit";
    setTimeout(function () {
      submitError.style.display = "none";
    }, 3000);
    return false;
  }

  // Clear all error/checkmarks
  nameError.innerHTML = "";
  emailError.innerHTML = "";
  subjectError.innerHTML = "";
  msgError.innerHTML = "";

  // Hide submit button and show message
  submit.style.display = "none";
  msgSent.innerHTML = "Message Sent!";
  msgSent.style.display = "block";

  setTimeout(function () {
    msgSent.style.display = "none";
    submit.style.display = "block";
    form.reset(); // Clear all fields
  }, 4000);

  return true;
}
