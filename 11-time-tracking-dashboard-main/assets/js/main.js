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
            console.log(card);
          }
        });
      });
    });

  activityData.then(
    () => console.log(activityData)
    // activityData.forEach((actData) => {
    //   console.log(actData);
    //   title = actData[title];
    //cards.forEach((card, index) => {
    //const activity =
    // if (card.classList.contains(activity+'-card')){
    // // Use querySelectorAll on the individual card
    // thisTimeFrameData.forEach((dataElement) => {
    //   const timeframeWord = dataElement.textContent; // Get the text content
    //   // Assuming you want to update the text content of each dataElement
    //   dataElement.textContent = timeframeWord; // Update or log as needed
    // } else if () { }
    //});
    //});
    //})
  );
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

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const ClickedOption = button.dataset.option;
    renderCards(ClickedOption);
  });
});

renderCards("daily");
