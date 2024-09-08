const buttons = document.querySelectorAll(".frequencySelector");

//TODO: can it be done by toggle?
const activatedCardOption = (button) => {
  buttons.forEach((button) => {
    button.classList.remove;
  });
  button.classList.add("active");
};
const renderCard = () => {};

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(button.dataset.option);
    const ClickedOption = button.dataset.option;
    activatedCardOption(button);
    renderCard(ClickedOption);
  });
});
