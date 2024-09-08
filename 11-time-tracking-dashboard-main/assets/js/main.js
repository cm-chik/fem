const data = [];
const buttons = document.querySelectorAll(".frequencySelector");

//TODO: can it be done by toggle?
const activatedCardOption = (button) => {
  buttons.forEach((button) => {
    button.classList.remove;
  });
  button.classList.add("active");
};

const renderCard = (option) => {
  data.forEach((activity) => {
    const name = activity.title;
    const activityClass = name.toLowerCase().replace(" ", "-");
    const timeframeData = activity.timeframes[option];
    const previousTimeFrame = getTimeFrameName(option);
    console.log(name);
  });
};
const calTimeFrame = (option) => {
  if (option === "daily") {
    return "yesterday";
  } else if (option === "weekly") {
    return "last week";
  } else if (option === "monthly") {
    return "last month";
  }
};

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(button.dataset.option);
    const ClickedOption = button.dataset.option;
    activatedCardOption(button);
    renderCard(ClickedOption);
  });
});
