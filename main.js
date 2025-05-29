function flipCard() {
  const card = document.querySelector(".card");
  card.classList.toggle("flipped");
}

// Add some sparkle effect on hover
document.querySelector(".card").addEventListener("mouseenter", function () {
  this.style.boxShadow = "0 25px 50px rgba(233, 30, 99, 0.3)";
});

document.querySelector(".card").addEventListener("mouseleave", function () {
  this.style.boxShadow = "0 20px 40px rgba(0,0,0,0.1)";
});
