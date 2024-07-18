var form = document.getElementById("formId");
var submit = document.getElementById("submit_btn");
var msgSent = document.getElementById("message_sent");
var nameError = document.getElementById("name_error");
var emailError = document.getElementById("email_error");
var subjectError = document.getElementById("subject_error");
var msgError = document.getElementById("msg_error");
var submitError = document.getElementById("submit_error");

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
  nameError.innerHTML =
    '<i class="fa-solid fa-circle-check" style="color: var(--white)"></i>';
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
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
  ) {
    emailError.innerHTML = "Email is invalid";
    return false;
  }
  emailError.innerHTML =
    '<i class="fa-solid fa-circle-check" style="color: var(--white)"></i>';
  return true;
}

function validateSubject() {
  var subject = document.getElementById("subject").value;
  if (subject.length == 0) {
    subjectError.innerHTML = "Subject is required";
    return false;
  }
  subjectError.innerHTML =
    '<i class="fa-solid fa-circle-check" style="color: var(--white)"></i>';
  return true;
}
function validateMsg() {
  var msg = document.getElementById("message").value;
  var requird = 30;
  var left = requird - msg.length;
  if (left > 0) {
    msgError.innerHTML = left + " more character required";
    return false;
  }
  msgError.innerHTML =
    '<i class="fa-solid fa-circle-check" style="color: var(--white)"></i>';
  return true;
}
function validateForm() {
  if ((!validateName(), !validateEmail(), !validateSubject(), !validateMsg())) {
    submitError.innerHTML = "please fix error to submit";
    setTimeout(function () {
      submitError.style.display = "none";
    }, 3000);
    return false;
  }
   submit.style.display = "none";
  msgSent.innerHTML =
    'Message Sent!';
  msgSent.style.display = "block";
  setTimeout(function () {
    msgSent.style.display = "none";
  }, 4000);
  setTimeout(function () {
    submit.style.display = "block";
  }, 4000);
  
  form.reset();

  return true;
  
}