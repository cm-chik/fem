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
  resetButton.disabled = false;
  if (!billAmount.value.trim().length) {
    billErrorMsg.classList.add("hidden");
    resetButton.disabled = true;
  } else if (!billAmount.value.match(/^[0-9]+$/)) {
    console.log("h1");
    billErrorMsg.textContent = "Please input a vaild number";
    billErrorMsg.classList.remove("hidden");
    resetResult();
  } else {
    console.log("h2");
    billErrorMsg.classList.add("hidden");
    evaluate(selectedTipPercentage);
  }
});

peopleCount.addEventListener("keyup", () => {
  resetButton.disabled = false;
  if (!peopleCount.value.trim().length) {
    peopleErrorMsg.classList.add("hidden");
    resetButton.disabled = true;
  } else if (!peopleCount.value.match(/^[0-9]+$/)) {
    peopleErrorMsg.textContent = "Please input a vaild number";
    peopleErrorMsg.classList.remove("hidden");
    resetResult();
  } else if (peopleCount.value == 0) {
    peopleErrorMsg.textContent = "Cannot be zero";
    peopleErrorMsg.classList.remove("hidden");
    resetResult();
  } else {
    console.log(peopleCount.value);
    peopleErrorMsg.classList.add("hidden");
    evaluate();
  }
});

customTipPercentage.addEventListener("keyup", () => {
  resetButton.disabled = false;
  if (!customTipPercentage.value.match(/^[0-9]+$/)) {
    CustomTipErrorMsg.textContent = "Please input a valid number";
    CustomTipErrorMsg.classList.remove("hidden");
  } else {
    selectedTipPercentage = parseFloat(customTipPercentage.value / 100);
    CustomTipErrorMsg.classList.add("hidden");
    if (!peopleCount.value == "0" && !billAmount.value == "0") {
      evaluate();
    }
  }
});

tipButtons.forEach((button) => {
  button.addEventListener("click", () => {
    customTipPercentage.value = "";
    if (!peopleCount.value == "0" && !billAmount.value == "0") {
      selectedTipPercentage = parseFloat(button.value);
      evaluate(button.value);
    }
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
    ((1 + selectedTipPercentage) * billAmount.value) /
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
  resetButton.disabled = true;
}

function resetResult() {
  tipPricePerPerson.textContent = "$0.00";
  totalPricePerPerson.textContent = "$0.00";
}