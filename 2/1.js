// Get elements
const button = document.getElementById("btn");
const title = document.getElementById("title");

// Add click event
button.addEventListener("click", () => {
    title.textContent = "You clicked the button!";
    title.style.color = "blue";
});