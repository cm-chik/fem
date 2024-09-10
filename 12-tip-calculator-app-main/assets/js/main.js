billAmount = document.querySelector(".billAmount");
peopleCount = document.querySelector(".peopleCount");
tipButtons = document.querySelectorAll(".tipsButton");
customTipPercentage = document.querySelector(".customTipPercentage");
tipPricePerPerson = document.querySelector(".tipPricePerPerson");
totalPricePerPerson = document.querySelector(".totalPricePerPerson");
resetButton = document.querySelector(".resetButton");

billAmount.addEventListener("keyup", evaluate);
peopleCount.addEventListener("keyup", evaluate);

function evaluate() {
  tipButtons.forEach((button) => {
    button.addEventListener("click", () => {
      tipPricePerPerson.textContent =
        (button.value * billAmount.value) / peopleCount;
      totalPricePerPerson.textContent =
        (button.value * (1 + billAmount.value)) / peopleCount;
    });
  });
}

//check bill 
//check number of people
//check tip
//reset