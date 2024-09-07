const buttons = document.querySelectorAll(".frequencySelect");

buttons.forEach((button) => {
  button.dataset.option; //?
  button.addEventListener("click", () => {
    //console.log(button.dataset.option)}
  });
});
