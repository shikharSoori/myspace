const slider = document.querySelector(".slider");
const cards = document.querySelectorAll(".card");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
let currentIndex = 0;
const cardWidth = cards[1].offsetWidth + 20; // Including margin

function updateSlider() {
  const newPosition = -currentIndex * cardWidth;
  slider.style.transform = `translateX(${newPosition}px)`;

  // Remove the 'blue' class from all cards
  cards.forEach((card) => card.classList.remove("blue"));

  // Calculate the index of the last visible card
  const lastVisibleIndex = Math.min(
    currentIndex + Math.floor(slider.offsetWidth / cardWidth) - 1,
    cards.length - 1
  );
  console.log(Math.floor(slider.offsetWidth / cardWidth));

  // Add the 'blue' class to the last visible card
  cards[lastVisibleIndex].classList.add("blue");
}

function nextSlide() {
  currentIndex++;
  if (currentIndex > cards.length - 1) {
    currentIndex = 0;
  }
  updateSlider();
}

function prevSlide() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = cards.length - 1;
  }
  updateSlider();
}

// Initial slider update
updateSlider();
