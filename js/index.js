const container = document.querySelector(".container");
const submitButton = document.getElementById("btn-submit");
const thankContainer = document.querySelector(".thank-you-state");
const rateAgainButton = document.getElementById("btn-rate");
const rating = document.getElementById("rating");
const rates = document.querySelectorAll(".btn");

submitButton.addEventListener("click", () => {
  thankContainer.classList.remove("hidden");
  container.style.display = "none";
});

rateAgainButton.addEventListener("click", () => {
  thankContainer.classList.add("hidden");
  container.style.display = "block";
});

rates.forEach((rate) => {
  rate.addEventListener("click", () => {
    rating.innerHTML = rate.innerHTML;
  });
});
