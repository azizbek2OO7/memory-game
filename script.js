const cards = document.querySelectorAll(".memory-card");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.add("flip");
  });
});
