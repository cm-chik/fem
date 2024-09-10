const billAmount = document.querySelector(".billAmount");
const peopleCount = document.querySelector(".peopleCount");
const tipButtons = document.querySelectorAll(".tipsButton");
const customTipPercentage = document.querySelector(".customTipPercentage");
const tipPricePerPerson = document.querySelector(".tipPricePerPerson");
const totalPricePerPerson = document.querySelector(".totalPricePerPerson");
const resetButton = document.querySelector(".resetButton");

tipButtons.forEach((button) => {
  button.addEventListener("click", () => {
    tipPricePerPerson.textContent =
      (button.value * billAmount.value) / peopleCount;
    totalPricePerPerson.textContent =
      (button.value * (1 + billAmount.value)) / peopleCount;
  });
});