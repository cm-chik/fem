const form = document.getElementById("newsletter-form");
const formDiv = document.getElementById("sign-up-form");
const successDiv = document.getElementById("success-message");

function isValidEmailAddress(textValue) {
  const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return pattern.test(textValue);
}

function getQueryParams() {
  const params = new URLSearchParams(window.location.search);
  return params.get("email");
}

function handleSubmit(event) {
  event.preventDefault(); // Prevents the form from submitting
  const emailInput = document.getElementById("email-input");
  if (isValidEmailAddress(emailInput.value)) {
    console.log("Correct email format");
    formDiv.classList.toggle("hidden");
    successDiv.classList.toggle("hidden");
  } else {
    console.log("Invalid email format");
    errorMessage.classList.remove("hidden");
  }
}

form.addEventListener("submit", handleSubmit);
