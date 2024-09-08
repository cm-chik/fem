const buttons = document.querySelectorAll(".frequencySelector");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(button.dataset.option);
  });
});
