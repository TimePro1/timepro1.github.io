// TimePro1 Time Zone Dropdown + Clock (JS ONLY)

// List of zones you want
const zones = [
  "UTC",
  "America/New_York",
  "America/Chicago",
  "America/Denver",
  "America/Los_Angeles",
  "Europe/London",
  "Europe/Berlin",
  "Asia/Tokyo",
  "Asia/Shanghai",
  "Asia/Kolkata",
  "Australia/Sydney"
];

// Grab elements
const tzSelect = document.getElementById("timezone-select");
const timeDisplay = document.getElementById("time-display");

// Populate dropdown
zones.forEach(z => {
  const opt = document.createElement("option");
  opt.value = z;
  opt.textContent = z;
  tzSelect.appendChild(opt);
});

// Default to user's zone if available
const userTZ = Intl.DateTimeFormat().resolvedOptions().timeZone;
tzSelect.value = zones.includes(userTZ) ? userTZ : "UTC";

// Format time for selected zone
function formatTime(zone) {
  return new Intl.DateTimeFormat("en-US", {
    timeZone: zone,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false
  }).format(new Date());
}

// Update clock
function updateClock() {
  const zone = tzSelect.value;
  timeDisplay.textContent = `${formatTime(zone)} (${zone})`;
}

// Tick
updateClock();
setInterval(updateClock, 1000);

// Change event
tzSelect.addEventListener("change", updateClock);