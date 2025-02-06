document.getElementById("btn-three").addEventListener("click", function () {
  let el = this; // `this` refers to the clicked button
  let opacity = 1; // Start fully visible

  let fadeEffect = setInterval(function () {
    if (opacity <= 0) {
      clearInterval(fadeEffect);
      el.style.display = "none"; // Hide it after fade out
    }
    el.style.opacity = opacity; // Apply opacity change
    opacity -= 0.05; // Reduce opacity gradually
  }, 25); // Runs every 25ms (adjust speed as needed)
});



