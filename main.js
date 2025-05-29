// Personal messages from select team members
const personalMessages = {
  maria: "Wishing you both love and happiness on your special journey! 🌸",
  lydia: "Wishing you peace, love, and a lifetime of shared dreams! 🌟",
};

function flipCard() {
  const card = document.querySelector(".card");
  card.classList.toggle("flipped");
}

function showMessage(person) {
  // Only show messages for people who have them
  if (!personalMessages[person]) {
    return;
  }

  const modal = document.getElementById("messageModal");
  const author = document.getElementById("messageAuthor");
  const text = document.getElementById("messageText");

  // Capitalize first letter of person's name
  const authorName = person.charAt(0).toUpperCase() + person.slice(1);

  author.textContent = `From ${authorName}`;
  text.textContent = personalMessages[person];

  modal.classList.add("show");

  // Prevent body scroll when modal is open
  document.body.style.overflow = "hidden";
}

function closeMessage() {
  const modal = document.getElementById("messageModal");
  modal.classList.remove("show");

  // Restore body scroll
  document.body.style.overflow = "auto";
}

// Add click event listeners to signature names
document.addEventListener("DOMContentLoaded", function () {
  const signatureNames = document.querySelectorAll(".signature-name");

  signatureNames.forEach((name) => {
    const person = name.getAttribute("data-person");

    // Only make names with messages clickable
    if (personalMessages[person]) {
      name.style.cursor = "pointer";
      name.addEventListener("click", function (e) {
        e.stopPropagation(); // Prevent card flip when clicking names
        showMessage(person);
      });
    } else {
      // Make non-clickable names look different
      name.style.cursor = "default";
      name.style.opacity = "0.7";
    }
  });

  // Close modal when clicking outside the content
  document
    .getElementById("messageModal")
    .addEventListener("click", function (e) {
      if (e.target === this) {
        closeMessage();
      }
    });

  // Close modal with Escape key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeMessage();
    }
  });
});

// Add some sparkle effect on hover
document.querySelector(".card").addEventListener("mouseenter", function () {
  this.style.boxShadow = "0 25px 50px rgba(233, 30, 99, 0.3)";
});

document.querySelector(".card").addEventListener("mouseleave", function () {
  this.style.boxShadow = "0 20px 40px rgba(0,0,0,0.1)";
});
