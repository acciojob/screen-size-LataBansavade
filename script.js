//your JS code here. If required.
function updateWindowSize() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  console.log(`Window Width: ${width}px, Window Height: ${height}px`);
}

// Initial window size
updateWindowSize();

// Add an event listener for the "resize" event
window.addEventListener('resize', updateWindowSize);