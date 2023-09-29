//your JS code here. If required.
// Function to update the width and height of the window
const div = document.getElementById("sizeInfo");
let tag = document.createElement("h1");
function updateWindowSize() {
  const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  const height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

  // Display the width and height in the console
	tag.innerHTML =`Width: ${width} and Height: ${height}`
  
}
div.appendChild(tag);
// Add an event listener for the window's resize event
window.addEventListener('resize', updateWindowSize);

// Call the function initially to get the initial dimensions
updateWindowSize();
