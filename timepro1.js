function updateClock() {
  const now = new Date();

  // More accurate formatting
  const time = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false
  });

  const clock = document.getElementById("clock");
  if (clock) {
    clock.textContent = time;
  }
}

// Run immediately
updateClock();

// Run every 250ms for smoother updates
setInterval(updateClock, 250);