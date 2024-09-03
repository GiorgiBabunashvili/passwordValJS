const result = document.querySelector(".result");
const password = document.getElementById("password");
const confirmpassword = document.getElementById("password2");
const button = document.getElementById("button");

//ERRORS ELEMENT
const length = document.getElementById("length");
const lowercaseLetter = document.getElementById("lowercase");
const upercaseLetter = document.getElementById("upercase");
const specialCharachter = document.getElementById("special");
const useNumber = document.getElementById("number");
const passAndConf = document.getElementById("passAndConf");

function check() {
  let myPassword = password.value;
  let lowercase = /[a-z]/g;
  let upercase = /[A-Z]/g;
  let specialChar = /[!\$\&\*]/;
  let numberOne = /[0-9]/;

  //LENGTH
  if (myPassword.length >= 8) {
    length.style.color = "green";
  } else {
    length.style.color = "red";
  }

  //LOWERCASE
  if (myPassword.match(lowercase)) {
    lowercaseLetter.style.color = "green";
  } else {
    lowercaseLetter.style.color = "red";
  }

  //UPPERCASE
  if (myPassword.match(upercase)) {
    upercaseLetter.style.color = "green";
  } else {
    upercaseLetter.style.color = "red";
  }

  //SPECIAL
  if (myPassword.match(specialChar)) {
    specialCharachter.style.color = "green";
  } else {
    specialCharachter.style.color = "red";
  }

  //UPPERCASE
  if (myPassword.match(numberOne)) {
    useNumber.style.color = "green";
  } else {
    useNumber.style.color = "red";
  }

  //UPPERCASE
  if (password.value === confirmpassword.value) {
    passAndConf.style.color = "green";
  } else {
    passAndConf.style.color = "red";
  }

  if (password.value) {
    result.classList.add("active");
  } else {
    result.classList.remove("active");
  }
}

button.addEventListener("click", () => {
  result.classList.remove("active");
});
