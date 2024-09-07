const form = document.getElementById("newsletter-form");
const formDiv = document.getElementById("sign-up-form");
const successDiv = document.getElementById("success-message");
const dismissBtn = document.getElementById("dismiss-button");
const emailDisplay = document.getElementById("email-display");

function isValidEmailAddress(textValue) {
  const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return pattern.test(textValue);
}
function confirmDismiss() {
  formDiv.classList.remove("hidden");
  successDiv.classList.add("hidden");
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
    formDiv.classList.add("hidden");
    successDiv.classList.remove("hidden");
    emailDisplay.textContent = emailInput.value;
  } else {
    console.log("Invalid email format");
    errorMessage.classList.remove("hidden");
    emailInput.classList.add("border-tomato", "bg-red-100", "text-tomato");
    
  }
}

form.addEventListener("submit", handleSubmit);
dismissBtn.addEventListener("click", confirmDismiss);