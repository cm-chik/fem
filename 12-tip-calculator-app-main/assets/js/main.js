billAmount = document.querySelector(".billAmount");
peopleCount = document.querySelector(".peopleCount");
tipButtons = document.querySelectorAll(".tipsButton");
customTipPercentage = document.querySelector(".customTipPercentage");
tipPricePerPerson = document.querySelector(".tipPricePerPerson");
totalPricePerPerson = document.querySelector(".totalPricePerPerson");
resetButton = document.querySelector(".resetButton");
billErrorMsg = document.querySelector(".billErrorMsg");
CustomTipErrorMsg = document.querySelector(".CustomTipErrorMsg");
peopleErrorMsg = document.querySelector(".peopleErrorMsg");

selectedTipPercentage = 0;

billAmount.addEventListener("keyup", () => {
  if (!billAmount.value.match(/^[0-9]+$/)) {
    billErrorMsg.textContent = "Please input a vaild number";
    billErrorMsg.classList.remove("hidden");
    resetExceptInput();
  } else {
    billErrorMsg.classList.add("hidden");
    evaluate(selectedTipPercentage);
  }
});

peopleCount.addEventListener("keyup", () => {
  if (!peopleCount.value.match(/^[0-9]+$/)) {
    peopleErrorMsg.textContent = "Please input a vaild number";
    peopleErrorMsg.classList.remove("hidden");
    resetExceptInput();
  } else if (peopleCount.value == 0) {
    peopleErrorMsg.textContent = "Cannot be zero";
    peopleErrorMsg.classList.remove("hidden");
    resetExceptInput();
  } else {
    console.log(peopleCount.value);
    peopleErrorMsg.classList.add("hidden");
    evaluate();
  }
});

customTipPercentage.addEventListener("keyup", () => {
  if (!customTipPercentage.value.match(/^[0-9]+$/)) {
    CustomTipErrorMsg.textContent = "Please input a valid number";
    CustomTipErrorMsg.classList.remove("hidden");
  } else {
    selectedTipPercentage = customTipPercentage.value;
    evaluate(customTipPercentage.value / 100);
    CustomTipErrorMsg.classList.add("hidden");
  }
});

tipButtons.forEach((button) => {
  button.addEventListener("click", () => {
    selectedTipPercentage = button.value;
    evaluate(button.value);
  });
});

resetButton.addEventListener("click", () => {
  resetEverything();
});

function evaluate() {
  console.log(billAmount.value, peopleCount.value);
  tipPricePerPerson.textContent = (
    (selectedTipPercentage * billAmount.value) /
    peopleCount.value
  ).toFixed(2);
  totalPricePerPerson.textContent = (
    (selectedTipPercentage * (1 + billAmount.value)) /
    peopleCount.value
  ).toFixed(2);
}

function resetEverything() {
  tipPricePerPerson.textContent = "$0.00";
  totalPricePerPerson.textContent = "$0.00";
  billAmount.value = "";
  peopleCount.value = "";
  customTipPercentage.value = "";
  billErrorMsg.classList.add("hidden");
  peopleErrorMsg.classList.add("hidden");
  CustomTipErrorMsg.classList.add("hidden");
}

function resetExceptInput() {
  tipPricePerPerson.textContent = "$0.00";
  totalPricePerPerson.textContent = "$0.00";
}