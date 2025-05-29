// Personal messages from select team members
const personalMessages = {
  maria: "Wishing you both love and happiness on your special journey! 🌸",
  lydia: "Wishing you peace, love, and a lifetime of shared dreams! 🌟",
  elis: "'she wants me to write a love poem but I think if people can’t love each other’s assholes and farts and shits and terrible parts just like they love the good parts, that ain’t complete love'. ― Charles Bukowski, On LOve .... 🍓 so i wish you a complete love and fun together, my dears ;)",
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

// Create sparkles
function createSparkles() {
  const body = document.body;
  const sparkleCount = 20;
  
  for (let i = 0; i < sparkleCount; i++) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    
    // Random positions
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    
    // Random size
    const size = Math.random() * 8 + 2;
    
    // Random colors for variety
    const colors = ['#FFD700', '#FFFFFF', '#FFC0CB', '#ADD8E6', '#E6E6FA'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    // Random animation delay
    const delay = Math.random() * 5;
    
    // Apply styles
    sparkle.style.left = `${x}%`;
    sparkle.style.top = `${y}%`;
    sparkle.style.width = `${size}px`;
    sparkle.style.height = `${size}px`;
    sparkle.style.boxShadow = `0 0 ${size/2}px ${size/4}px ${color}`;
    sparkle.style.animationDelay = `${delay}s`;
    
    body.appendChild(sparkle);
  }
}

// Call the function when the page loads
createSparkles();

// Add peach trail effect on card hover
const card = document.querySelector(".card");
card.addEventListener("mousemove", (e) => {
    if (Math.random() > 0.2) return;

    const peach = document.createElement("div");
    peach.className = "trail-peach";
    peach.textContent = "🍑";
    peach.style.left = `${e.clientX}px`;
    peach.style.top = `${e.clientY}px`;

    document.body.appendChild(peach);

    // Remove heart after animation completes
    setTimeout(() => peach.remove(), 700);
});

// Clean up hearts when leaving the card
card.addEventListener("mouseleave", () => {
    const peaches = document.querySelectorAll(".trail-peach");
    peaches.forEach(peach => peach.remove());
});