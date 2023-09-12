const container = document.querySelector(".container");
const thankYouContainer = document.querySelector(".thank-you");
const numberButtonContainer = document.querySelector(".number-container");
const submitButton = document.querySelector(".submit");
const selectedRating = document.querySelector(".selected-rating span");

let rating = "";

for (let i = 1; i <= 5; i++) {
  const button = document.createElement("button");
  button.innerHTML = i;
  button.classList.add("choice");
  numberButtonContainer.appendChild(button);

  // get the text of the button
  button.addEventListener("click", () => {
    const buttons = document.querySelectorAll(".choice");

    rating = button.innerText;
    selectedRating.innerText = `You selected ${
      rating ? rating : "none"
    } out of 5`;

    buttons.forEach((btn) => {
      btn === button
        ? btn.classList.add("selected")
        : btn.classList.remove("selected");
    });
  });
}

submitButton.addEventListener("click", () => {
  container.classList.add("hidden");
  thankYouContainer.classList.remove("hidden");
});
