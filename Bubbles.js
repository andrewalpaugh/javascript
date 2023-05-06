// This is a simple JavaScript game that lets you pop bubbles by clicking on them.
// Some of the bubbles are red and clicking on them will make you lose a life.
// You start with 10 lives and the game ends when you have no lives left.

// Get a reference to the body element
var body = document.querySelector("body");

// Create a variable to store the number of lives
var lives = 10;

// Create a function to make a bubble
function makeBubble() {
  // Create a div element
  var bubble = document.createElement("div");

  // Add the bubble class to the div
  bubble.classList.add("bubble");

  // Set a random position for the bubble
  bubble.style.top = Math.random() * (window.innerHeight - 100) + "px";
  bubble.style.left = Math.random() * (window.innerWidth - 100) + "px";

  // Set a random color for the bubble
  var colors = ["lightblue", "red"];
  var color = colors[Math.floor(Math.random() * colors.length)];
  bubble.style.backgroundColor = color;

  // Add an event listener to pop the bubble when clicked
  bubble.addEventListener("click", function() {
    // Remove the bubble from the body
    body.removeChild(bubble);

    // Check if the bubble was red
    if (color === "red") {
      // Decrease the number of lives by one
      lives--;

      // Check if the game is over
      if (lives === 0) {
        // Display a game over message
        alert("Game over!");
      }
    }
  });

  // Append the bubble to the body
  body.appendChild(bubble);
}

// Create a function to start the game
function startGame() {
  // Set an interval to make a new bubble every second
  setInterval(makeBubble, 1000);
}

// Call the startGame function when the page loads
startGame();