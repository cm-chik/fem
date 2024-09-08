const cards = document.querySelectorAll(".card");

const buttons = document.querySelectorAll(".frequencySelector");

//TODO: can it be done by toggle?
const activatedCardOption = (button) => {
  buttons.forEach((button) => {
    button.classList.remove;
  });
  button.classList.add("active");
};

function renderCards(option) {
  const cards = document.querySelectorAll('div[class^="card"]');
  const timeframeName = getTimeFrameName(option);
  const activityData = fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((activity) => {
        activityTitle = activity.title.toLowerCase().replace(" ", "-");
        cards.forEach((card) => {
          if (card.classList.contains(activityTitle + "-card")) {
            cardTitle = card.querySelector(".card-type");
            currentNumber = card.querySelector(".currentNumber");
            previousNumber = card.querySelector(".previousNumber");
            cardMeasurement = card.querySelector(".timeframeName");
            current = activity["timeframes"][option]["current"];
            previous = activity["timeframes"][option]["previous"];

            cardTitle.textContent = activity.title;
            currentNumber.textContent = current;
            previousNumber.textContent = previous;
            cardMeasurement.textContent = timeframeName;
          }
        });
      });
    });
}
const getTimeFrameName = (option) => {
  if (option === "daily") {
    return "Yesterday";
  } else if (option === "weekly") {
    return "Last week";
  } else if (option === "monthly") {
    return "Last month";
  }
};
renderCards("daily");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const ClickedOption = button.dataset.option;
    renderCards(ClickedOption);
  });
});
